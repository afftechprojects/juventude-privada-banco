#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Empacota o Banco de Atividades para publicação.

Gera:
  dist/jp-banco.css          folha de estilo
  dist/jp-banco.js           taxonomia + 22 fichas + app, em um arquivo
  dist/embed-hospedado.html  snippet para colar no Embed do Webflow (rota A)
  dist/embeds-sem-host/      pedaços de menos de 45 mil caracteres (rota B)

Rota A precisa de hospedagem (GitHub Pages). Rota B não precisa de nada
externo, mas exige colar vários blocos de Embed em ordem no Webflow.

Uso:  python build.py [--base https://usuario.github.io/repo]
"""
import os, sys, io, shutil

RAIZ = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(RAIZ, 'src')
DIST = os.path.join(RAIZ, 'dist')

ORDEM_DADOS = [
    '00-taxonomia.js', '01-infantil.js', '02-6a8.js', '03-9a10.js',
    '04-11a14.js', '05-15a17.js', '06-familia.js',
    '07-infantil-lote2.js', '08-6a8-lote2.js', '09-9a10-lote2.js', '10-11a14-lote2.js', '11-15a17-lote2.js',
    '12-infantil-lote3.js', '13-6a8-lote3.js', '14-9a10-lote3.js', '15-11a14-lote3.js', '16-15a17-lote3.js',
    '17-acervo.js',
]

LIMITE_EMBED = 45000  # o Webflow aceita 50 mil por Embed; deixamos folga


def ler(caminho):
    with io.open(caminho, encoding='utf-8') as f:
        return f.read()


def escrever(caminho, conteudo):
    os.makedirs(os.path.dirname(caminho), exist_ok=True)
    with io.open(caminho, 'w', encoding='utf-8', newline='\n') as f:
        f.write(conteudo)
    return len(conteudo)


def main():
    base = 'https://SEU-USUARIO.github.io/juventude-privada-banco/dist'
    if '--base' in sys.argv:
        base = sys.argv[sys.argv.index('--base') + 1].rstrip('/')

    if os.path.isdir(DIST):
        shutil.rmtree(DIST)

    css = ler(os.path.join(SRC, 'jp-banco.css'))
    partes = [ler(os.path.join(SRC, 'dados', n)) for n in ORDEM_DADOS]
    partes.append(ler(os.path.join(SRC, 'jp-banco-app.js')))
    js = ('/* Banco de Atividades e Ferramentas Educacionais — Juventude Privada\n'
          '   Arquivo gerado por build.py. Não editar aqui: edite src/ e rode o build. */\n'
          + '\n\n'.join(partes))

    n_css = escrever(os.path.join(DIST, 'jp-banco.css'), css)
    n_js = escrever(os.path.join(DIST, 'jp-banco.js'), js)

    # ---------------------------------------------------------------- rota A
    embed = (
        '<!-- Banco de Atividades e Ferramentas Educacionais - Juventude Privada -->\n'
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap">\n'
        '<link rel="stylesheet" href="%s/jp-banco.css">\n'
        '<div id="jp-banco"></div>\n'
        '<script>window.JP = window.JP || {}; '
        'window.JP.SITE = "juventudeprivada.org"; '
        '/* aparece no rodape das folhas impressas */</script>\n'
        '<script src="%s/jp-banco.js" defer></script>\n' % (base, base)
    )
    escrever(os.path.join(DIST, 'embed-hospedado.html'), embed)

    # ---------------------------------------------------------------- rota B
    # Cada arquivo de dados vira um Embed próprio. Se algum passar do limite,
    # ele é quebrado em pedaços que continuam sendo JS válido, porque a quebra
    # acontece entre objetos de ficha (na linha em branco antes de "/* ===").
    blocos = []
    blocos.append(('01-estilo', '<style>\n' + css + '\n</style>\n<div id="jp-banco"></div>'))

    idx = 2
    for nome in ORDEM_DADOS:
        conteudo = ler(os.path.join(SRC, 'dados', nome))
        if len(conteudo) <= LIMITE_EMBED:
            blocos.append(('%02d-%s' % (idx, nome.replace('.js', '')),
                           '<script>\n' + conteudo + '\n</script>'))
            idx += 1
            continue
        # quebra em pedaços, cada um com o seu próprio push()
        cabeca = conteudo.split('window.JP.ATIVIDADES.push(')[0]
        corpo = conteudo.split('window.JP.ATIVIDADES.push(', 1)[1].rsplit(');', 1)[0]
        fichas = [f for f in corpo.split('\n/* ====') if f.strip()]
        atual, pedaco = [], 1
        def descarrega(lista, p):
            texto = cabeca + 'window.JP.ATIVIDADES.push(\n/* ====' + '\n/* ===='.join(lista) + '\n);'
            blocos.append(('%02d-%s-p%d' % (idx, nome.replace('.js', ''), p),
                           '<script>\n' + texto + '\n</script>'))
        for f in fichas:
            if atual and len(''.join(atual)) + len(f) > LIMITE_EMBED - len(cabeca) - 200:
                descarrega(atual, pedaco); idx += 1; pedaco += 1; atual = []
            atual.append(f)
        if atual:
            descarrega(atual, pedaco); idx += 1

    blocos.append(('%02d-app' % idx, '<script>\n' + ler(os.path.join(SRC, 'jp-banco-app.js')) + '\n</script>'))

    for nome, conteudo in blocos:
        escrever(os.path.join(DIST, 'embeds-sem-host', nome + '.html'), conteudo)

    # ------------------------------------------------------------- relatório
    print('dist/jp-banco.css .......... %6d caracteres' % n_css)
    print('dist/jp-banco.js ........... %6d caracteres' % n_js)
    print('dist/embed-hospedado.html .. %6d caracteres  (rota A, cabe em 1 Embed)' % len(embed))
    print('')
    print('rota B, %d blocos de Embed:' % len(blocos))
    estourou = False
    for nome, conteudo in blocos:
        marca = '  OK ' if len(conteudo) <= 50000 else '  ESTOUROU '
        if len(conteudo) > 50000:
            estourou = True
        print('%s %-28s %6d' % (marca, nome, len(conteudo)))
    if estourou:
        print('\nATENCAO: algum bloco passou de 50 mil caracteres e nao vai colar no Webflow.')
        sys.exit(1)
    print('\nbase usada nos links da rota A: %s' % base)


if __name__ == '__main__':
    main()
