# Banco de Atividades e Ferramentas Educacionais
### Juventude Privada

Atividades prontas para desenvolver pensamento crítico, privacidade, inteligência
artificial e uso responsável da tecnologia, da Educação Infantil ao Ensino Médio.

A pessoa diz quanto tempo tem, com quem, com ou sem tela e sobre o quê, e recebe uma
atividade aplicável com roteiro, kit imprimível, perguntas de mediação e adaptação para casa.

**77 atividades**: 73 fichas completas mais 4 materiais já publicados pelo projeto
(Eu Nunca, Puxa Papo digital e impresso, Datamundi), integrados aos mesmos filtros.
50 códigos da BNCC Computação cobertos. 47 das 55 etapas de progressão preenchidas.

---

## Como publicar no Webflow

A página nova precisa ser criada no Designer, porque a Data API do Webflow não cria
páginas. O que segue reduz esse trabalho a poucos minutos.

### Passo 1, criar a página

1. Abra o Designer do site.
2. No painel **Pages** (ícone de páginas na barra esquerda), clique em **+**.
3. Nome: `Banco de Atividades e Ferramentas Educacionais`. Slug: `banco-de-atividades`.
4. Em Page Settings, preencha o título e a descrição de SEO. Sugestão de descrição:
   *Banco filtrável de atividades sobre privacidade, IA, algoritmos e cidadania digital,
   com kit imprimível, roteiro e versões para escola, família e jovem.*

### Passo 2, colocar header e rodapé

Na página em branco, arraste para o topo o mesmo componente de navegação usado na página
Materiais, e para o rodapé o mesmo componente de footer. Estão no painel **Components**
(ou **Symbols**, dependendo da versão). Usar os componentes reais é importante: assim o
header e o rodapé continuam sincronizados com o resto do site, inclusive o seletor EN/PT.

### Passo 3, o Embed

Entre o header e o rodapé, adicione uma **Section**, e dentro dela um **Container**.
Dentro do container, arraste o elemento **Embed** (painel Add, seção Components).

Escolha uma das duas rotas:

#### Rota A, com hospedagem — JÁ ESTÁ NO AR

O repositório e o GitHub Pages já estão publicados e funcionando:

- repositório: https://github.com/afftechprojects/juventude-privada-banco
- arquivos servidos em: https://afftechprojects.github.io/juventude-privada-banco/dist/

Basta colar no Embed o conteúdo de `dist/embed-hospedado.html`, que já aponta para lá.

**Para publicar uma ficha nova depois**, sem tocar no Webflow:

```bash
python build.py --base https://afftechprojects.github.io/juventude-privada-banco/dist
git add -A && git commit -m "nova ficha" && git push
```

O site atualiza sozinho em um ou dois minutos. Se demorar a aparecer, é cache do navegador:
abra em aba anônima para conferir.

#### Rota B, sem hospedagem: aposentada

Existia uma rota que colava o banco inteiro em vários Embeds, sem hospedagem. Ela morreu
quando o arquivo do app passou de 50.000 caracteres, que é o limite por Embed do Webflow,
e ele não pode ser fatiado sem minificar, o que tornaria o código ilegível para quem
mantém o projeto. Como a hospedagem já está no ar, não há perda prática.

### Passo 4, o link na página Materiais

Na página Materiais, acima do acervo atual, adicione um bloco de destaque com o link
`Banco de Atividades e Ferramentas Educacionais` apontando para a página nova. O acervo
existente (Puxa Papo, Datamundi, Eu Nunca, Mapa Mundi, Interland, TIC Kids e os demais)
continua onde está, abaixo, sem alteração.

### Passo 5, publicar

Publique o site. Confira em `/banco-de-atividades`.

> **Verifique antes:** o elemento Embed exige um Site plan pago no Webflow para publicar
> em domínio próprio. Se o plano do projeto for gratuito, o banco funciona no staging
> `.webflow.io` mas pode não sair no domínio final. Vale confirmar no billing antes de
> montar a página.

---

## Como o banco funciona

**O card vende o aprendizado, não a mecânica.** Cada atividade aparece na busca com o
insight que a criança leva para casa, em destaque, porque professor escolhe atividade pelo
que quer que os alunos compreendam, não pelo formato do jogo. O campo é `insightCurto` e é
obrigatório em toda ficha.

**Três portas de entrada,** com a promessa antes do rótulo: *Planeje uma aula em menos de
um minuto*, *Conversas que realmente funcionam em casa*, *Descubra, investigue e aprenda no
seu ritmo*. A atividade é a mesma no núcleo, mas a orientação muda conforme quem aplica.

**Busca em quatro linhas,** com ícone e rótulo, em vez de formulário: ⏱️ tenho,
👧 a turma é de, 💻 quero uma atividade, 🎯 quero trabalhar. Os filtros detalhados ficam
abaixo, recolhidos, para quem quiser precisão.

**Nove coleções temáticas.** IA, privacidade, algoritmos, games, imagem, segurança,
informação, autoria e propaganda. Uma atividade pode estar em mais de uma. **As contagens
são calculadas em tempo de execução**, nunca escritas à mão, senão a vitrine promete o que
o banco não tem.

**Busca por palavra** que cobre título, insight, tema, disciplina, formato e **código da
BNCC**. Digitar `EF04CO07` traz as atividades alinhadas àquela habilidade. Ignora acentos.

**Filtros que não deixam a pessoa cair no vazio.** Cada opção mostra quantas atividades ela
deixaria, calculado ao vivo contra os filtros já marcados. Opção que zeraria o resultado
fica apagada e desabilitada. Assim não existe caminho, dentro da interface, que leve a uma
tela sem resultado.

**Barra de filtros aplicados** no topo dos resultados, cada um com × para remover
individualmente, em vez de só um "limpar tudo".

**Estado vazio que resolve.** Um link antigo ou uma URL editada à mão ainda podem zerar.
Nesse caso o banco identifica qual filtro é o responsável e oferece um botão: *"se você
soltar o tempo disponível, voltam 6 atividades"*.

**Ordenação** por idade, por menor tempo primeiro ou por menos preparo primeiro.

**Quinze filtros, todos opcionais:** tipo de material, faixa etária, situação real, uso na
escola ou em casa, tela, formato, duração, disciplina, **o que eu preciso ter**, preparação,
tamanho do grupo, eixo e nível, **sensibilidade do tema**, selos e **habilidade da BNCC**.

Os três em negrito vieram de uma auditoria do próprio filtro. Habilidade da BNCC e
sensibilidade estavam no briefing original e nunca tinham virado filtro. O de material
saiu da constatação de que 60 das 77 atividades exigem impressora, e que uma escola sem
cota de impressão não tinha como descobrir isso sem abrir ficha por ficha.

### O campo `precisa`

Registra o **mínimo para rodar**, não tudo que a ficha menciona. Quando o material cabe no
quadro, a ficha é `papel` e não `impressao`. Hoje: 60 exigem imprimir, 17 não, 13 pedem
objetos (dados, moedas, barbante), 7 pedem espaço para circular, 4 pedem aparelho e 3 rodam
só com conversa.

Ele foi **derivado do volume de material de cada ficha** e vale uma revisão de educador:
está em `src/dados/*.js`, um campo por ficha, e é só editar.

**Progressão narrativa.** Oito eixos, cinco etapas cada, do 🌱 ao ⚖, com a promessa de cada
eixo escrita em uma linha. Etapas sem ficha aparecem como **em produção**, e é assim que se
decide o próximo lote. Hoje: 35 etapas preenchidas, 5 em produção.

**Links compartilháveis.** Coleção, filtros, etapa de progressão e ficha aberta vivem na
URL. Dá para mandar uma ficha por WhatsApp para uma professora, ou uma busca pronta.

**Impressão.** O botão "Imprimir ficha e kit" gera a ficha completa mais todo o material,
cada peça começando em uma página nova, sem navegação e sem fundo colorido.

### O que ainda não existe

O banco cobre 35 das 40 etapas de progressão. As 5 vazias aparecem marcadas como
**em produção** na tela e são a pauta do próximo lote:

- `informação` níveis 2 e 5
- `autoria` níveis 1, 2 e 3

O eixo de autoria é o mais raso: ele só começa aos 11 anos, porque reconhecer quem criou,
pedir licença e dar crédito são conceitos que caberiam na Educação Infantil e no
Fundamental I e ainda não têm ficha.

O filtro **"até 5 min"** também retorna zero. Nenhuma atividade do banco roda em menos de
15 minutos, e nenhuma ficha foi inventada só para preencher o filtro.

### Sobre os selos

São três: **Pronta para amanhã**, **Sem tela** e **Tema sensível**.

Existia um quarto, "Testada em campo", e ele foi removido de propósito. Enquanto não houver
aplicação real registrada, é uma promessa que o banco não pode cumprir. Quando houver, o
selo honesto é *aplicada em escolas* ou *validada por educadores*, com o registro por trás.

---

## Estrutura de cada ficha

Toda ficha tem, sem exceção: a provocação, a missão, a virada, o insight, a transferência,
o roteiro minuto a minuto, as três versões (escola, família e jovem, quando a idade permite
autonomia), o kit com material imprimível pronto, a mediação (perguntas que aprofundam e
respostas que o adulto deve evitar), a proteção, o alinhamento à BNCC e a evidência de
aprendizagem.

Os materiais imprimíveis têm **conteúdo real**: o texto das cartas, o caso, a folha de
decisão e o gabarito comentado, não uma lista de promessas.

### Sobre o alinhamento à BNCC

Os códigos citados foram extraídos e conferidos no documento oficial da **BNCC Computação**
(MEC, complemento à BNCC), não escritos de memória.

**A BNCC Computação começa no 1º ano do Ensino Fundamental.** Por isso as três atividades
de 4 a 5 anos não recebem código `CO`: elas são alinhadas aos campos de experiência da
Educação Infantil, com um **código-ponte** indicado para quem aplicar em turma de 1º ano.

Segunda camada: o *AI Competency Framework for Students* da UNESCO, com as quatro dimensões
(mentalidade centrada no humano, ética da IA, técnicas e aplicações, design de sistemas).

---

## Como adicionar uma ficha nova

1. Escolha o arquivo por faixa em `src/dados/` e acrescente o objeto seguindo o formato
   das fichas existentes.
2. Use apenas chaves declaradas em `src/dados/00-taxonomia.js`. O app valida na carga e
   escreve no console do navegador qualquer chave fora do vocabulário, seção obrigatória
   faltando ou id duplicado.
3. Rode `python build.py`.
4. Abra `preview.html` (ou rode `python -m http.server`) e confira.

### Campo `duracaoCurta`

Uma atividade de 50 minutos que tem versão curta honesta de 30 deve declarar
`duracaoCurta: 30` e `comoEncurtar` com o que exatamente se corta. O filtro de duração usa
o **menor** dos dois valores. Sem isso, uma busca por "30 minutos" esconde atividades que
caberiam, e o banco mente por omissão.

---

## Arquivos

```
src/dados/00-taxonomia.js    vocabulário controlado dos filtros e coleções
src/dados/01-infantil.js         fichas 1 a 3  (4 a 5 anos)
src/dados/02-6a8.js              fichas 4 a 6  (6 a 8 anos)
src/dados/03-9a10.js             fichas 7 a 9  (9 a 10 anos)
src/dados/04-11a14.js            fichas 10 a 12  (11 a 14 anos)
src/dados/05-15a17.js            fichas 13 a 15  (15 a 17 anos)
src/dados/06-familia.js          fichas 16 a 22  (famílias)
src/dados/07-infantil-lote2.js   fichas 23 a 27  (4 a 5 anos)
src/dados/08-6a8-lote2.js        fichas 28 a 31  (6 a 8 anos)
src/dados/09-9a10-lote2.js       fichas 32 a 35  (9 a 10 anos)
src/dados/10-11a14-lote2.js      fichas 36 a 39  (11 a 14 anos)
src/dados/11-15a17-lote2.js      fichas 40 a 42  (15 a 17 anos)
src/dados/12-infantil-lote3.js   fichas 43 a 44  (4 a 5 anos)
src/dados/13-6a8-lote3.js        fichas 45 a 47  (6 a 8 anos)
src/dados/14-9a10-lote3.js       fichas 48 a 50  (9 a 10 anos)
src/dados/15-11a14-lote3.js      fichas 51 a 53  (11 a 14 anos)
src/dados/16-15a17-lote3.js      fichas 54 a 57  (15 a 17 anos)
src/jp-banco.css             estilos, escopados em #jp-banco
src/jp-banco-app.js          filtro, busca, roteamento por hash, ficha, impressão
build.py                     empacota para dist/
preview.html                 preview local, com cache-busting nos scripts
```

Nenhuma dependência externa além da fonte Rubik, que já é a do site.
Todo o CSS é escopado em `#jp-banco`, então nada vaza para o Webflow nem sofre com ele.
