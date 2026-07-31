/* 6 a 8 anos — 1º ao 3º ano.
   Entram regras simples, personagens, jogos de cartas e consequências visíveis.
   Códigos EF01/EF02/EF03 e os consolidados EF15 (1º ao 5º ano). */

window.JP.ATIVIDADES.push(

/* ==================================================================== 04 */
{
  id: 'mochila-dos-dados',
  insightCurto: 'Nem toda informação é perigosa. Tudo depende de quem pede, por quê e em qual contexto.',
  n: 4,
  titulo: 'A mochila dos dados',
  chamada: 'A mesma carta muda de lugar dependendo de quem pediu e para quê.',
  faixa: '6-8',
  duracao: 30,
  formato: 'jogo',
  formatoDetalhe: 'Jogo de classificação com cartas',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['dados', 'consentimento'],
  disciplinas: ['Língua Portuguesa', 'Ensino Religioso', 'Projeto de Vida'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'privacidade',
  nivel: 2,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF03CO04', texto: 'Relacionar o conceito de informação com o de dado.' },
    secundaria: { codigo: 'EF01CO07', texto: 'Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Reconhecer que a sensibilidade de um dado depende do contexto em que ele é solicitado e de quem o solicita.' },

  provocacao: 'Cada um de vocês tem uma mochila invisível cheia de informações sobre você. Algumas você mostra para qualquer um. Outras só para pouca gente. O problema é que ninguém combinou quais são quais.',

  missao: 'Distribuir as doze cartas em três caixas: "pode mostrar para qualquer um", "só para quem eu confio" e "não mostro para ninguém".',

  virada: 'Quando os grupos terminam e defendem a classificação, o facilitador entrega as cartas de contexto. Cada carta de contexto diz quem está pedindo e para quê. A mesma carta "meu nome" vai para caixas diferentes quando quem pede é a professora fazendo a chamada, um site de jogo pedindo cadastro, ou um estranho na porta da escola. Os grupos precisam mover as cartas e quase sempre descobrem que nenhuma caixa serve para sempre.',

  insight: 'Informação não é simplesmente pública ou secreta. A mesma informação pode ser tranquila em um lugar e perigosa em outro. O que decide é quem está pedindo e para quê.',

  transferencia: 'Antes de preencher qualquer campo, dá para fazer duas perguntas curtas: quem está pedindo isso, e para que serve. Se não der para responder as duas, é hora de chamar um adulto.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Montar as três caixas no chão ou na mesa, com os rótulos bem visíveis. Apresentar as doze cartas em voz alta.' },
    { t: '5 a 14 min',  o: 'Em grupos de quatro, classificar as doze cartas. Circular ouvindo os argumentos sem corrigir. Cada grupo escolhe uma carta para defender em voz alta.' },
    { t: '14 a 22 min', o: 'A virada. Entregar as seis cartas de contexto, uma por vez, lendo em voz alta. A cada carta, os grupos podem mover quantas cartas quiserem. Anotar no quadro quais cartas mudaram de caixa.' },
    { t: '22 a 27 min', o: 'Discussão: alguma carta ficou na mesma caixa o tempo todo? Alguma mudou toda vez? Por quê?' },
    { t: '27 a 30 min', o: 'Cada grupo completa a folha de conclusão com as duas perguntas de bolso.' }
  ],

  versoes: {
    escola: 'Grupos de quatro, um conjunto de cartas por grupo. Se faltar material, fazer com a turma inteira e três cadeiras representando as caixas, com as crianças levando as cartas até a cadeira. A discussão vale mais que a classificação.',
    familia: 'Jogar com as cartas espalhadas na mesa, cada pessoa da família classificando as suas. O adulto também classifica as dele, em voz alta, e muda de ideia na frente da criança quando a carta de contexto chegar. Ver um adulto mudar de opinião é metade da atividade.',
    jovem: null
  },

  kit: [
    { nome: 'Doze cartas de informação', tipo: 'imprimivel', desc: 'Uma informação por carta, com ilustração.' },
    { nome: 'Seis cartas de contexto', tipo: 'imprimivel', desc: 'Quem está pedindo e para quê. Entregar só na virada.' },
    { nome: 'Rótulos das três caixas', tipo: 'imprimivel', desc: 'Para colar em caixas de sapato, envelopes ou no chão.' },
    { nome: 'Folha de conclusão', tipo: 'imprimivel', desc: 'As duas perguntas de bolso para a criança completar e levar.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Por que não existe classificação certa e o que observar nas respostas.' }
  ],

  imprimiveis: [
    {
      titulo: 'Doze cartas de informação',
      tipo: 'cartas',
      itens: [
        'MEU NOME', 'MINHA SENHA', 'UM DESENHO QUE EU FIZ',
        'ONDE EU MORO', 'MINHA VOZ', 'UMA FOTO MINHA',
        'O NOME DA MINHA ESCOLA', 'MINHA COR FAVORITA', 'O NOME DO MEU CACHORRO',
        'A HORA QUE EU SAIO DA ESCOLA', 'UM SEGREDO DE UM AMIGO', 'MINHA DATA DE ANIVERSÁRIO'
      ]
    },
    {
      titulo: 'Seis cartas de contexto (entregar uma por vez, só na virada)',
      tipo: 'cartas',
      itens: [
        'A professora está fazendo a chamada.',
        'Um site de jogo pede para você criar um cadastro antes de jogar.',
        'Uma pessoa que você nunca viu manda mensagem dizendo que é amiga da sua mãe.',
        'A médica está preenchendo a sua ficha, com o seu responsável do lado.',
        'Um jogo pergunta o nome do seu cachorro para "personalizar sua experiência".',
        'Alguém da sua sala quer postar uma foto da turma na internet.'
      ]
    },
    {
      titulo: 'Rótulos das três caixas',
      tipo: 'cartaz',
      corpo: 'CAIXA 1: POSSO MOSTRAR PARA QUALQUER UM\nCAIXA 2: SÓ PARA QUEM EU CONFIO\nCAIXA 3: NÃO MOSTRO PARA NINGUÉM'
    },
    {
      titulo: 'Folha de conclusão',
      tipo: 'folha',
      corpo: 'Complete com o seu grupo:\n\nUma carta que mudou de caixa foi ____________________.\nEla mudou porque ____________________.\n\nUma carta que nunca saiu da caixa 3 foi ____________________.\n\nAS DUAS PERGUNTAS QUE EU FAÇO ANTES DE DAR UMA INFORMAÇÃO:\n1. Quem está ____________________?\n2. Para que ____________________?'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'Não existe classificação certa, e dizer isso no fim é parte da atividade. O que importa é o movimento das cartas quando o contexto entra.\n\nO que observar:\n\n. A SENHA costuma ser a única carta que fica na caixa 3 em todos os contextos, inclusive com a professora e com a médica. Vale destacar: é a única da mochila que não se mostra nem para quem a gente confia. Se a turma não chegar sozinha, provocar com "e para a professora, mostra?".\n\n. O NOME e a DATA DE ANIVERSÁRIO costumam começar na caixa 1 e migrar quando aparece o site de jogo ou o estranho. É o coração da atividade.\n\n. A HORA QUE EU SAIO DA ESCOLA quase sempre começa na caixa 1, porque parece banal, e é a que mais assusta quando o contexto do estranho chega. Guardar para o fim.\n\n. UM SEGREDO DE UM AMIGO abre a discussão de que a mochila tem informação que nem é minha. Se surgir, aproveitar: eu posso decidir sobre a minha, não sobre a dos outros.\n\n. O NOME DO MEU CACHORRO parece inofensivo até aparecer o contexto do jogo que pergunta para "personalizar". Ligar com a pergunta de recuperação de senha, se a turma tiver repertório.\n\nSe um grupo colocar tudo na caixa 3, não corrigir. Perguntar como faria a chamada da escola. A atividade não quer crianças com medo, quer crianças que perguntam.'
    }
  ],

  mediacao: {
    perguntas: [
      'Alguma carta ficou na mesma caixa em todos os contextos? Qual e por quê?',
      'A mesma informação pode ser tranquila com uma pessoa e perigosa com outra?',
      'Tem alguma carta na sua mochila que não é sobre você?',
      'Quando você não souber responder quem está pedindo, o que dá para fazer?'
    ],
    evitar: [
      'Dar a classificação certa no começo. Se o adulto entrega o resultado, a virada do contexto não tem para onde ir.',
      'Ensinar que a internet é perigosa e ponto. A criança precisa sair com uma pergunta que ela consegue fazer sozinha, não com um medo genérico.',
      'Pedir que as crianças usem os dados reais delas nas cartas. As cartas são categorias, nunca informações preenchidas.'
    ]
  },

  protecao: 'As cartas trazem categorias de informação, jamais dados reais. Ninguém escreve o próprio nome, endereço, senha ou aniversário em lugar nenhum da atividade. Não pedir que a criança conte quais dados ela já forneceu na internet. Se surgir relato de contato com estranho, encerrar a exposição coletiva e acionar o protocolo da escola.',

  evidencia: 'A criança move pelo menos uma carta de caixa quando o contexto muda e justifica a mudança pelo pedinte ou pela finalidade, e não pelo conteúdo da carta.'
},

/* ==================================================================== 05 */
{
  id: 'jogo-gratuito-que-cobra-atencao',
  insightCurto: 'De graça quer dizer sem dinheiro. Não quer dizer sem preço.',
  n: 5,
  titulo: 'O jogo gratuito que cobra atenção',
  chamada: 'O jogo não pede dinheiro. Ele pede tempo, anúncios assistidos e amigos convidados.',
  faixa: '6-8',
  duracao: 35,
  duracaoCurta: 20,
  comoEncurtar: 'Em 20 minutos: jogue cinco rodadas em vez de oito. A virada do verso do tabuleiro funciona igual, porque o padrão já apareceu. O que sai é a etapa final de escrita, que vira uma pergunta oral em roda.',
  formato: 'jogo',
  formatoDetalhe: 'Jogo de tabuleiro com fichas',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['jogo', 'propaganda'],
  disciplinas: ['Matemática', 'Língua Portuguesa'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'consumo',
  nivel: 2,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF02CO05', texto: 'Reconhecer as características e usos das tecnologias computacionais no cotidiano dentro e fora da escola.' },
    secundaria: { codigo: 'EF15CO09', texto: 'Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Perceber que serviços digitais aparentemente gratuitos operam sobre modelos de troca não monetários.' },

  provocacao: 'O Reino das Estrelinhas é totalmente de graça. Ninguém paga nada, nunca. Mesmo assim, no fim da partida, cada um de vocês vai ter entregado alguma coisa.',

  missao: 'Jogar oito rodadas tentando ser quem junta mais estrelinhas, usando as cartas de oferta que aparecem a cada rodada.',

  virada: 'No fim da oitava rodada, quando alguém comemora a vitória, o facilitador vira o tabuleiro. Do outro lado está o placar do Reino: quantos minutos cada jogador ficou, quantos anúncios assistiu e quantos amigos convidou. Quem juntou mais estrelinhas é sempre quem mais entregou dessas três coisas. O jogo revela que ele estava contando duas coisas ao mesmo tempo, e só uma estava à vista.',

  insight: 'Um serviço pode cobrar atenção, tempo, dados ou influência sobre os amigos, mesmo quando não cobra dinheiro. De graça quer dizer sem dinheiro, não quer dizer sem preço.',

  transferencia: 'Quando um jogo ou app oferecer uma recompensa por assistir a um anúncio, ficar mais tempo ou convidar alguém, dá para perguntar em voz alta o que ele está ganhando com isso.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Montar o tabuleiro com o lado das estrelinhas para cima. Explicar só a regra visível: junte estrelinhas. Não mencionar o verso.' },
    { t: '6 a 24 min',  o: 'Oito rodadas. A cada rodada, cada jogador sorteia uma carta de oferta e decide se aceita. O facilitador registra discretamente na ficha de controle os minutos, anúncios e convites de cada um.' },
    { t: '24 a 29 min', o: 'A virada. Anunciar o vencedor das estrelinhas e então virar o tabuleiro e ler o placar do Reino em voz alta.' },
    { t: '29 a 33 min', o: 'Discussão: quem ganhou de verdade? Recontar quem foi o jogador que mais recusou ofertas e o que aconteceu com ele.' },
    { t: '33 a 35 min', o: 'Cada criança escreve ou desenha uma pergunta que ela vai fazer da próxima vez que um jogo oferecer recompensa.' }
  ],

  versoes: {
    escola: 'Grupos de quatro a cinco, um tabuleiro por grupo. Se não houver tempo para oito rodadas, cinco já produzem a virada. Vale um facilitador por grupo, ou o professor circulando e registrando em uma prancheta única.',
    familia: 'Jogar em família com fichas de feijão ou tampinhas. O adulto assume o papel do Reino e registra o placar escondido. Depois da virada, aproveitar para olhar juntos um jogo que a criança já joga e procurar as mesmas três ofertas.',
    jovem: null
  },

  kit: [
    { nome: 'Tabuleiro de dois lados', tipo: 'imprimivel', desc: 'Frente com a trilha de estrelinhas, verso com o placar do Reino.' },
    { nome: 'Vinte e quatro cartas de oferta', tipo: 'imprimivel', desc: 'Três tipos de troca, embaralhadas.' },
    { nome: 'Ficha de controle do facilitador', tipo: 'imprimivel', desc: 'Para registrar minutos, anúncios e convites de cada jogador.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Como conduzir a virada sem transformar em sermão.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cartas de oferta (oito de cada tipo, embaralhar)',
      tipo: 'cartas',
      nota: 'Cada carta traz a recompensa em letra grande e o custo em letra pequena, exatamente como acontece nas telas reais.',
      itens: [
        'TIPO TEMPO: Ganhe 3 estrelinhas! (custo, em letra pequena: fique mais 5 minutos jogando)',
        'TIPO TEMPO: Ganhe 5 estrelinhas! (custo: volte a jogar amanhã antes do almoço, senão você perde tudo)',
        'TIPO ANÚNCIO: Ganhe 4 estrelinhas! (custo: assista a 1 anúncio inteiro, sem pular)',
        'TIPO ANÚNCIO: Dobre suas estrelinhas desta rodada! (custo: assista a 2 anúncios)',
        'TIPO CONVITE: Ganhe 6 estrelinhas! (custo: convide 1 amigo para o Reino)',
        'TIPO CONVITE: Ganhe 10 estrelinhas! (custo: convide 3 amigos)',
        'CARTA LIVRE: Não aceite nada nesta rodada. Você ganha 1 estrelinha.',
        'CARTA LIVRE: Pare de jogar por uma rodada. Você não ganha nem perde nada.'
      ]
    },
    {
      titulo: 'Verso do tabuleiro: o placar do Reino',
      tipo: 'cartaz',
      corpo: 'Título: O QUE O REINO GANHOU COM VOCÊS\n\nTrês colunas grandes, uma por jogador, e três linhas:\n\nMINUTOS QUE VOCÊ FICOU: ______\nANÚNCIOS QUE VOCÊ ASSISTIU: ______\nAMIGOS QUE VOCÊ TROUXE: ______\n\nNo rodapé, em letra grande:\nVOCÊ NÃO PAGOU NADA. O REINO GANHOU TUDO ISSO.'
    },
    {
      titulo: 'Ficha de controle do facilitador',
      tipo: 'folha',
      corpo: 'Tabela com uma linha por jogador e uma coluna por rodada. A cada carta aceita, marcar T (tempo), A (anúncio) ou C (convite). No fim, somar por tipo.\n\nConversão para o placar: cada T vale 5 minutos, cada A vale 1 anúncio, cada C vale o número de amigos escrito na carta.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O jogo é desenhado para que o vencedor das estrelinhas seja sempre o jogador que mais aceitou ofertas, e portanto o que mais entregou tempo, anúncios e convites. Isso não é acaso, é a mecânica.\n\nComo conduzir a virada:\n\n. Não anunciar a moral. Ler o placar do Reino em voz neutra, número por número, e ficar em silêncio. As crianças chegam sozinhas.\n\n. Perguntar sobre o jogador que ficou em último nas estrelinhas: ele perdeu? Ele saiu com o tempo dele. Essa é a pergunta que reorganiza a partida inteira, e ela precisa vir das crianças, não do adulto.\n\n. Se ninguém aceitar as cartas de convite, ótimo. Perguntar por que aquela pareceu diferente das outras. A intuição de que envolver amigos é outro tipo de custo já é o insight avançado.\n\n. Evitar terminar com "por isso não jogue". Terminar com a pergunta que a criança leva: o que este jogo ganha quando eu ganho?'
    }
  ],

  mediacao: {
    perguntas: [
      'O jogo era de graça mesmo?',
      'Quem ganhou mais estrelinhas foi quem mais deu o quê?',
      'O jogador que recusou quase tudo perdeu alguma coisa? O que ele ganhou?',
      'Por que a recompensa vem em letra grande e o custo em letra pequena?',
      'Convidar um amigo é o mesmo tipo de troca que assistir a um anúncio?'
    ],
    evitar: [
      'Terminar com "por isso não jogue jogos gratuitos". A criança joga, vai continuar jogando, e sai sem ferramenta nenhuma se a conclusão for essa.',
      'Revelar o verso do tabuleiro antes do fim. Sem a partida jogada de verdade, o placar não tem peso.',
      'Perguntar quanto os pais gastam em jogos ou quais jogos a criança tem no celular. A conversa é sobre a mecânica, não sobre o consumo da família.'
    ]
  },

  protecao: 'O jogo é fictício e não usa marcas reais. Não pedir informação sobre jogos que a criança joga, gastos da família ou nomes de amigos. Nenhum convite real é feito a ninguém: os convites são fichas dentro do jogo.',

  evidencia: 'A criança nomeia pelo menos um recurso além do dinheiro que o jogo recebeu, e formula uma pergunta própria para fazer diante de uma oferta de recompensa.'
},

/* ==================================================================== 06 */
{
  id: 'inventores-de-um-botao-melhor',
  insightCurto: 'Quando um botão é enorme e o outro é minúsculo, não foi acaso. Foi desenho.',
  n: 6,
  titulo: 'Inventores de um botão melhor',
  chamada: 'O "aceitar tudo" é enorme e o "recusar" está escondido. Conserte a tela.',
  faixa: '6-8',
  duracao: 30,
  formato: 'criacao',
  formatoDetalhe: 'Redesenho em papel',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['consentimento', 'propaganda'],
  disciplinas: ['Artes', 'Matemática', 'Língua Portuguesa'],
  preparo: 'baixo',
  grupo: 'dupla',
  eixo: 'consumo',
  nivel: 3,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF01CO06', texto: 'Reconhecer e explorar artefatos computacionais voltados a atender necessidades pessoais ou coletivas.' },
    secundaria: { codigo: 'EF15CO09', texto: 'Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.' }
  },
  unesco: { dimensao: 'design', competencia: 'Perceber que decisões de design de interface influenciam escolhas e podem ser reprojetadas.' },

  provocacao: 'Esta é a tela do aplicativo Pipoca. Alguém desenhou ela assim de propósito. Olhem bem para os dois botões e me digam qual é mais fácil de apertar.',

  missao: 'Descobrir quantas coisas nessa tela empurram a pessoa para o botão grande, e depois desenhar uma tela nova em que os dois caminhos sejam igualmente fáceis.',

  virada: 'Quando as duplas terminam de listar o que viram, geralmente tamanho e cor, o facilitador entrega a lupa: uma folha com as seis técnicas escondidas na mesma tela, incluindo a contagem regressiva falsa, a frase que dá culpa e a caixinha já marcada. As duplas voltam para a tela e encontram o que tinham deixado passar. A tela não mudou. Elas passaram a enxergar.',

  insight: 'O jeito como uma escolha é apresentada empurra a decisão. Quando um caminho é enorme e o outro é minúsculo, não foi acaso, foi desenho.',

  transferencia: 'Quando aparecer uma tela pedindo para aceitar alguma coisa, dá para procurar o botão pequeno antes de apertar o grande. Ele quase sempre existe.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Mostrar a tela do Pipoca em tamanho grande. Pedir que cada dupla aponte qual botão a pessoa vai apertar e por quê.' },
    { t: '5 a 12 min',  o: 'As duplas circulam com lápis vermelho tudo o que empurra para o botão grande. Não dar dicas.' },
    { t: '12 a 17 min', o: 'A virada. Entregar a folha da lupa com as seis técnicas. As duplas voltam à tela e marcam as que tinham deixado passar.' },
    { t: '17 a 27 min', o: 'Redesenho. Cada dupla desenha a tela do Pipoca justa, na folha em branco com a moldura de celular.' },
    { t: '27 a 30 min', o: 'Exposição rápida. Cada dupla mostra a tela nova e diz o que mudou. Votar na tela mais justa da turma.' }
  ],

  versoes: {
    escola: 'Duplas, uma tela impressa por dupla. Funciona muito bem integrado à aula de Artes, e a exposição das telas novas rende um mural. Para turmas de 3º ano, acrescentar o desafio de escrever o texto dos dois botões.',
    familia: 'Fazer com uma tela impressa na mesa da cozinha. Depois de desenhar a tela justa, procurar juntos uma tela parecida em um aparelho da casa, com o adulto segurando, e comparar com o desenho. A criança costuma achar mais rápido que o adulto.',
    jovem: null
  },

  kit: [
    { nome: 'A tela do Pipoca', tipo: 'imprimivel', desc: 'A tela injusta, em página inteira, para marcar por cima.' },
    { nome: 'A lupa das seis técnicas', tipo: 'imprimivel', desc: 'Entregar só na virada.' },
    { nome: 'Moldura de celular em branco', tipo: 'imprimivel', desc: 'Para o redesenho.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Onde cada técnica está escondida na tela.' }
  ],

  imprimiveis: [
    {
      titulo: 'A tela do Pipoca',
      tipo: 'folha',
      nota: 'Imprimir em página inteira, dentro de uma moldura de celular.',
      corpo: 'No topo: PIPOCA quer te conhecer melhor!\n\nTexto do meio, em letra bem pequena e cinza clara:\nAo continuar, você concorda em compartilhar sua localização, sua lista de amigos, seu microfone e seu histórico com o Pipoca e com nossos 47 parceiros.\n\nUm relógio piscando: ESTA OFERTA ACABA EM 00:14\n\nBotão gigante, laranja, no meio da tela:\nSIM, QUERO APROVEITAR TUDO!\n\nAbaixo, em cinza clarinho e letra minúscula, quase no rodapé:\nagora não\n\nAinda menor, no canto:\n[x] Quero receber ofertas todo dia (caixinha já vem marcada)\n\nNo rodapé, em itálico:\nSeus amigos vão ficar tristes se você não entrar.'
    },
    {
      titulo: 'A lupa das seis técnicas (entregar só na virada)',
      tipo: 'folha',
      corpo: 'Procure na tela do Pipoca:\n\n1. O botão gigante e o botão minúsculo. Achou? Circule os dois.\n2. O relógio correndo. Ele é de verdade? Circule.\n3. A caixinha que já veio marcada sem você marcar. Circule.\n4. A frase que faz você se sentir culpado. Sublinhe.\n5. A letra pequena que conta o que você está entregando. Sublinhe.\n6. A palavra que promete tudo sem explicar nada. Circule.'
    },
    {
      titulo: 'Moldura de celular em branco',
      tipo: 'folha',
      corpo: 'Uma moldura de celular vazia ocupando a página inteira.\n\nAbaixo da moldura:\nO que eu mudei: ____________________\nAgora os dois botões são: ( ) do mesmo tamanho ( ) da mesma cor ( ) fáceis de achar'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'As seis técnicas e onde estão:\n\n1. Contraste de botões: o SIM é gigante e laranja, o "agora não" é minúsculo e cinza. É a que as crianças acham sozinhas.\n2. Escassez falsa: o relógio de 14 segundos. Nada acaba de verdade. Se a turma perguntar como saber, a resposta honesta é: recarregue a tela e o relógio recomeça.\n3. Opção pré-marcada: a caixinha de ofertas diárias já vem marcada, então não fazer nada já é dizer sim.\n4. Culpa: "seus amigos vão ficar tristes". Funciona bem nesta faixa etária e por isso vale nomear com calma.\n5. Letra pequena: a lista do que está sendo entregue, incluindo microfone e 47 parceiros. Perguntar se alguém tinha lido antes da lupa. Quase nunca alguém leu.\n6. Promessa vaga: "aproveitar tudo" não diz o que é tudo.\n\nO que observar no redesenho:\n\nA solução mais comum e correta é deixar os dois botões do mesmo tamanho e da mesma cor. Se alguma dupla apenas inverter, fazendo o "não" gigante e o "sim" minúsculo, não corrigir de imediato: perguntar se a tela nova é justa ou se ela só empurra para o outro lado. Essa conversa é a melhor da atividade.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quem desenhou essa tela queria que você apertasse qual botão?',
      'O relógio que está correndo é de verdade?',
      'A caixinha já veio marcada. Se você não fizer nada, você disse sim ou não?',
      'A sua tela nova é justa, ou ela só empurra para o outro lado?',
      'Dá para uma tela deixar as duas escolhas igualmente fáceis?'
    ],
    evitar: [
      'Entregar a lista das seis técnicas antes da procura livre. O valor está em descobrir que existia mais coisa depois de achar que já tinha visto tudo.',
      'Dizer que os aplicativos são todos mentirosos. A ideia é que telas são desenhadas por pessoas e podem ser desenhadas de outro jeito, o que é bem mais poderoso.',
      'Corrigir o redesenho por critério estético. A pergunta é se a tela é justa, não se é bonita.'
    ]
  },

  protecao: 'O aplicativo Pipoca é fictício e não corresponde a nenhum produto real. Não abrir aplicativos reais nem contas reais durante a atividade. Na versão de casa, quem segura o aparelho é o adulto, e o objetivo é olhar a tela, nunca alterar configurações.',

  evidencia: 'A criança identifica pelo menos três das seis técnicas depois da virada e produz um redesenho em que as duas opções têm peso visual equivalente, sabendo explicar o que mudou.'
}

);
