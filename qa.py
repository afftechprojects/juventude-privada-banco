#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
QA do Banco de Atividades.

Roda antes de publicar. Verifica coerência entre campos, sobras de rascunho,
referências quebradas e desvios de estilo. Sai com código 1 se achar algo
que não deve ir para o ar.

    python qa.py            confere e relata
    python qa.py --estilo   inclui os avisos de estilo (travessão, espaço duplo)

O que ele NÃO faz: julgar o conteúdo pedagógico. Erro de conta dentro de um
gabarito, por exemplo, só aparece se alguém conferir a conta.
"""
import os, sys, io, re, glob
from collections import Counter, defaultdict

RAIZ = os.path.dirname(os.path.abspath(__file__))
DADOS = os.path.join(RAIZ, 'src', 'dados')

# campos de prosa, onde estilo importa
PROSA = ['chamada', 'insightCurto', 'provocacao', 'missao', 'virada', 'insight',
         'transferencia', 'protecao', 'evidencia', 'oQueE', 'comoUsar', 'observar',
         'comoEncurtar', 'duracaoTexto']

erros, avisos = [], []


def carregar():
    fichas = {}
    for caminho in sorted(glob.glob(os.path.join(DADOS, '[0-2]*.js'))):
        if caminho.endswith('00-taxonomia.js'):
            continue
        txt = io.open(caminho, encoding='utf-8').read()
        for bloco in re.split(r"\n  id: '", txt)[1:]:
            fid = bloco.split("'")[0]
            fichas[fid] = (os.path.basename(caminho), bloco)
    return fichas


def um(b, nome):
    m = re.search(r"\n  " + nome + r": '([^']+)'", b)
    return m.group(1) if m else None


def numero(b, nome):
    m = re.search(r"\n  " + nome + r": (\d+)", b)
    return int(m.group(1)) if m else None


def muitos(b, nome):
    m = re.search(r"\n  " + nome + r": \[([^\]]*)\]", b, re.S)
    return re.findall(r"'([^']*)'", m.group(1)) if m else []


def texto_de(b, campo):
    """Conteúdo de um campo de string, sem interpretar as escapes."""
    m = re.search(r"\n  " + campo + r": '((?:[^'\\]|\\.)*)'", b)
    return m.group(1) if m else None


def conferir(fichas, estilo=False):
    ids = set(fichas)
    numeros = Counter()

    for fid, (arq, b) in sorted(fichas.items()):
        onde = '%s (%s)' % (fid, arq)
        acervo = 'acervo: true' in b
        tela = um(b, 'tela')
        prep = um(b, 'preparo')
        sens = um(b, 'sensibilidade')
        selos = muitos(b, 'selos')
        precisa = muitos(b, 'precisa')
        dur = numero(b, 'duracao')
        curta = numero(b, 'duracaoCurta')
        n = numero(b, 'n')
        if n:
            numeros[n] += 1

        # --- coerência dos selos com os dados -----------------------------
        if 'sem-tela' in selos and tela != 'sem-tela':
            erros.append('%s: selo "sem-tela" mas tela e "%s"' % (onde, tela))
        if tela == 'sem-tela' and 'sem-tela' not in selos:
            erros.append('%s: tela e "sem-tela" mas falta o selo' % onde)
        if 'sensivel' in selos and sens != 'alta':
            erros.append('%s: selo "sensivel" mas sensibilidade e "%s"' % (onde, sens))
        if sens == 'alta' and 'sensivel' not in selos:
            erros.append('%s: sensibilidade alta mas falta o selo "sensivel"' % onde)
        if 'pronta-amanha' in selos and sens == 'alta':
            erros.append('%s: "pronta para amanha" com tema que exige protocolo previo' % onde)
        if 'pronta-amanha' in selos and prep not in ('nenhum', 'baixo'):
            erros.append('%s: "pronta para amanha" com preparo "%s"' % (onde, prep))
        if prep in ('nenhum', 'baixo') and sens != 'alta' and 'pronta-amanha' not in selos:
            avisos.append('%s: preparo baixo e tema tranquilo, mas sem o selo "pronta para amanha"' % onde)

        # --- duração ------------------------------------------------------
        if curta and dur and curta >= dur:
            erros.append('%s: duracaoCurta (%d) nao e menor que duracao (%d)' % (onde, curta, dur))
        if curta and 'comoEncurtar' not in b:
            erros.append('%s: tem duracaoCurta e nao diz como encurtar' % onde)
        if 'comoEncurtar' in b and not curta:
            erros.append('%s: tem comoEncurtar sem duracaoCurta' % onde)

        # --- o que precisa ------------------------------------------------
        if not precisa:
            erros.append('%s: sem o campo precisa' % onde)
        if 'so-voz' in precisa and 'impressao' in precisa:
            erros.append('%s: precisa "so-voz" junto com "impressao"' % onde)
        if tela == 'sem-tela' and 'aparelho' in precisa:
            erros.append('%s: tela "sem-tela" mas precisa de aparelho' % onde)

        # --- referências cruzadas -----------------------------------------
        for alvo in re.findall(r"\{ id: '([^']+)', por:", b):
            if alvo not in ids:
                erros.append('%s: combinaCom aponta para "%s", que nao existe' % (onde, alvo))
            if alvo == fid:
                erros.append('%s: combinaCom aponta para ela mesma' % onde)

        # --- material do acervo ------------------------------------------
        if acervo:
            link = um(b, 'link')
            if not link or not link.startswith('https://'):
                erros.append('%s: item de acervo sem link https' % onde)

        # --- sobras de rascunho ------------------------------------------
        # "preencher depois" fica de fora: e instrucao legitima em varias folhas
        for marca in ['conferir antes de imprimir', 'ajustar antes de aplicar',
                      'conferir e ajustar', 'lorem ipsum', 'FIXME', 'TBD',
                      'ajuste conforme sua versao']:
            if marca.lower() in b.lower():
                erros.append('%s: sobra de rascunho, "%s"' % (onde, marca))

        # --- estilo --------------------------------------------------------
        if estilo:
            for campo in PROSA:
                t = texto_de(b, campo)
                if not t:
                    continue
                if '—' in t or '–' in t:
                    avisos.append('%s: travessao em "%s"' % (onde, campo))
                if re.search(r'\S {2,}\S', t):
                    avisos.append('%s: espaco duplo em "%s"' % (onde, campo))
            # o conteúdo dos imprimíveis também chega ao usuário, então estilo
            # vale ali igual. Só os comentários de código ficam de fora.
            visivel = '\n'.join(ln for ln in b.split('\n')
                                if not ln.strip().startswith(('/*', '*', '//')))
            if '—' in visivel or '–' in visivel:
                avisos.append('%s: travessao em conteudo visivel' % onde)

    # --- numeração e repetições --------------------------------------------
    for n, q in sorted(numeros.items()):
        if q > 1:
            erros.append('numero %d usado por %d fichas' % (n, q))
    faltando = [i for i in range(1, max(numeros) + 1) if i not in numeros] if numeros else []
    if faltando:
        avisos.append('buracos na numeracao: %s' % ', '.join(map(str, faltando)))

    for campo in ('titulo', 'insightCurto'):
        vistos = defaultdict(list)
        for fid, (arq, b) in fichas.items():
            t = texto_de(b, campo)
            if t:
                vistos[t].append(fid)
        for t, fids in vistos.items():
            if len(fids) > 1:
                erros.append('%s repetido em %s' % (campo, ' e '.join(fids)))


def conferir_sintaxe():
    """Interpreta cada arquivo de verdade, e não por regex.

    Existe porque um erro de sintaxe faz o push() daquele arquivo nunca rodar:
    o navegador não mostra nada, o console fica limpo e as atividades daquele
    lote simplesmente somem do banco. Já aconteceu, com quatro fichas.
    """
    import subprocess
    exe = None
    for candidato in ('node', 'node.exe'):
        try:
            subprocess.run([candidato, '--version'], capture_output=True, timeout=20)
            exe = candidato
            break
        except Exception:
            continue
    if not exe:
        avisos.append('node nao encontrado: nao deu para conferir a sintaxe dos arquivos')
        return

    alvos = sorted(glob.glob(os.path.join(DADOS, '*.js')))
    alvos.append(os.path.join(RAIZ, 'src', 'jp-banco-app.js'))
    for caminho in alvos:
        r = subprocess.run([exe, '--check', caminho], capture_output=True, text=True, timeout=60)
        if r.returncode != 0:
            primeira = (r.stderr or '').strip().split('\n')
            detalhe = next((l for l in primeira if 'Error' in l), primeira[-1] if primeira else '')
            erros.append('%s: NAO E JAVASCRIPT VALIDO. %s' % (os.path.basename(caminho), detalhe.strip()))


def conferir_contagem(fichas):
    """O que o arquivo declara tem que ser o que o banco carrega."""
    declaradas = 0
    for caminho in sorted(glob.glob(os.path.join(DADOS, '[0-2]*.js'))):
        if caminho.endswith('00-taxonomia.js'):
            continue
        declaradas += io.open(caminho, encoding='utf-8').read().count('\n  id: ')
    if declaradas != len(fichas):
        erros.append('contagem divergente: %d ids nos arquivos, %d fichas lidas' % (declaradas, len(fichas)))
    return declaradas


def main():
    estilo = '--estilo' in sys.argv
    fichas = carregar()
    conferir_sintaxe()
    conferir_contagem(fichas)
    conferir(fichas, estilo)

    print('QA do Banco de Atividades: %d atividades conferidas\n' % len(fichas))
    if erros:
        print('ERROS (%d), nao publicar assim:' % len(erros))
        for e in erros:
            print('  ' + e)
        print('')
    if avisos:
        print('AVISOS (%d), decida caso a caso:' % len(avisos))
        for a in avisos:
            print('  ' + a)
        print('')
    if not erros and not avisos:
        print('nada a corrigir.')
    elif not erros:
        print('nenhum erro. so avisos.')
    if not estilo:
        print('\n(rode com --estilo para incluir travessao e espaco duplo)')
    sys.exit(1 if erros else 0)


if __name__ == '__main__':
    main()
