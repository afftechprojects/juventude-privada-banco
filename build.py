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
import os, sys, io, shutil, time

RAIZ = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(RAIZ, 'src')
DIST = os.path.join(RAIZ, 'dist')

ORDEM_DADOS = [
    '00-taxonomia.js', '01-infantil.js', '02-6a8.js', '03-9a10.js',
    '04-11a14.js', '05-15a17.js', '06-familia.js',
    '07-infantil-lote2.js', '08-6a8-lote2.js', '09-9a10-lote2.js', '10-11a14-lote2.js', '11-15a17-lote2.js',
    '12-infantil-lote3.js', '13-6a8-lote3.js', '14-9a10-lote3.js', '15-11a14-lote3.js', '16-15a17-lote3.js',
    '17-acervo.js',
    '18-convivencia.js', '19-bemestar.js', '20-infraestrutura.js', '21-lacunas.js',
]

LIMITE_EMBED = 45000  # o Webflow aceita 50 mil por Embed; deixamos folga


def ler(caminho):
    with io.open(caminho, encoding='utf-8') as f:
        return f.read()


def limpar_dist():
    """Esvazia dist/ sem depender de conseguir remover as pastas.

    O projeto vive dentro do OneDrive, que trava diretórios enquanto sincroniza,
    e rmtree falha com PermissionError de forma intermitente. Apagar só os
    arquivos resolve: as pastas podem ficar, porque escrever() recria o que
    precisa e arquivo antigo nenhum sobrevive.
    """
    if not os.path.isdir(DIST):
        return
    restaram = []
    for raiz, _dirs, arquivos in os.walk(DIST):
        for nome in arquivos:
            alvo = os.path.join(raiz, nome)
            for tentativa in range(3):
                try:
                    os.remove(alvo)
                    break
                except PermissionError:
                    time.sleep(0.3)
            else:
                restaram.append(alvo)
    if restaram:
        print('AVISO: nao consegui apagar %d arquivo(s) antigo(s) em dist/.' % len(restaram))
        print('       Pause a sincronizacao do OneDrive e rode de novo se o resultado parecer velho.')


def escrever(caminho, conteudo):
    os.makedirs(os.path.dirname(caminho), exist_ok=True)
    with io.open(caminho, 'w', encoding='utf-8', newline='\n') as f:
        f.write(conteudo)
    return len(conteudo)


def main():
    base = 'https://SEU-USUARIO.github.io/juventude-privada-banco/dist'
    if '--base' in sys.argv:
        base = sys.argv[sys.argv.index('--base') + 1].rstrip('/')

    limpar_dist()

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

    # --------------------------------------------------- rota B, aposentada
    # A rota B colava o banco inteiro em vários Embeds do Webflow, sem
    # hospedagem. Ela morreu quando o app passou de 50 mil caracteres, que é o
    # limite por Embed, e o arquivo do app não pode ser fatiado sem minificar,
    # o que tornaria o código ilegível para quem mantém o projeto.
    # A hospedagem já está no ar, então não há perda prática.
    app_tam = len(ler(os.path.join(SRC, 'jp-banco-app.js')))

    # ------------------------------------------------------------- relatório
    print('dist/jp-banco.css .......... %6d caracteres' % n_css)
    print('dist/jp-banco.js ........... %6d caracteres' % n_js)
    print('dist/embed-hospedado.html .. %6d caracteres  (cabe em 1 Embed)' % len(embed))
    print('')
    print('%d atividades em %d arquivos de dados.' % (
        sum(ler(os.path.join(SRC, 'dados', n)).count('\n  n: ') for n in ORDEM_DADOS),
        len(ORDEM_DADOS) - 1))
    print('')
    if app_tam > LIMITE_EMBED:
        print('Nota: o app tem %d caracteres e nao cabe mais em um Embed do Webflow' % app_tam)
        print('      (limite 50.000). Publicar sem hospedagem deixou de ser possivel.')
        print('      A rota com GitHub Pages, ja no ar, e a unica suportada.')
    print('base usada nos links: %s' % base)


if __name__ == '__main__':
    main()
