/* 4 a 5 anos — segundo lote.
   Mesma regra da faixa: material visual, corporal e narrativo, sempre com um adulto.
   "Pistas que se juntam" chega ao nível 3 de privacidade com crianças de 4 anos, e isso
   é proposital: o nível é do conceito, não da idade. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 23 */
{
  id: 'botao-que-nao-acaba',
  insightCurto: 'Nem tudo que aparece depois foi você que escolheu. Alguma coisa escolheu por você.',
  n: 23,
  titulo: 'O botão que não acaba',
  chamada: 'A criança escolhe uma história. Depois dela vêm outras cinco que ninguém pediu.',
  faixa: '4-5',
  duracao: 20,
  formato: 'jogo',
  formatoDetalhe: 'Jogo de chão com cartas grandes',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['algoritmo'],
  disciplinas: ['Língua Portuguesa', 'Educação Física'],
  preparo: 'baixo',
  precisa: ['impressao'],
  grupo: 'turma',
  eixo: 'algoritmos',
  nivel: 1,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    campo: 'Educação Infantil, campos de experiência "Escuta, fala, pensamento e imaginação" e "Corpo, gestos e movimentos"',
    ponte: { codigo: 'EF01CO02', texto: 'Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas.' },
    secundaria: { codigo: 'EF01CO06', texto: 'Reconhecer e explorar artefatos computacionais voltados a atender necessidades pessoais ou coletivas.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Perceber que sistemas automáticos continuam agindo sem nova decisão do usuário.' },

  provocacao: 'Este tapete é a Máquina de Histórias. Você escolhe uma e ela conta. Só que ela tem um probleminha: ela nunca, nunca para de contar.',

  missao: 'Escolher uma história no tapete e chegar até o fim da brincadeira sem se perder no caminho.',

  virada: 'Depois que a criança escolhe, o facilitador vira as cartas seguintes uma atrás da outra, sem parar, cada vez mais rápido, sempre do mesmo tipo da primeira. Em algum momento uma criança reclama, e é aí que se pergunta quem escolheu aquelas. Ninguém escolheu. Então revela-se que existe uma carta escondida embaixo do tapete: a carta PARAR E ESCOLHER. Quem a encontra recupera o controle da máquina.',

  insight: 'A primeira escolha foi da criança. As outras cinco não foram de ninguém, elas simplesmente vieram. Para escolher de novo, é preciso parar primeiro.',

  transferencia: 'Quando um vídeo acaba e outro começa sozinho, dá para lembrar da Máquina de Histórias e perguntar em voz alta: eu escolhi este?',

  roteiro: [
    { t: '0 a 4 min',   o: 'Montar o tapete com as cartas viradas para baixo, em fileira. Esconder a carta PARAR E ESCOLHER embaixo do tapete, sem ninguém ver.' },
    { t: '4 a 9 min',   o: 'Uma criança escolhe a primeira carta e a turma comemora a escolha dela. Contar a história em três frases.' },
    { t: '9 a 14 min',  o: 'A virada. Virar as cartas seguintes sem pedir licença, cada vez mais rápido. Continuar até alguém reclamar. Não apressar esse momento: a reclamação precisa vir da turma.' },
    { t: '14 a 17 min', o: 'Perguntar quem escolheu aquelas histórias. Deixar o silêncio. Contar que existe uma carta escondida e deixar a turma procurar.' },
    { t: '17 a 20 min', o: 'Segunda rodada, agora com a carta PARAR E ESCOLHER visível. As crianças usam quando quiserem. Perguntar como foi diferente.' }
  ],

  versoes: {
    escola: 'Turma em roda, com as cartas grandes no chão do meio. Funciona muito bem depois do recreio, com o corpo ainda agitado. Se a turma for grande, dois tapetes e dois facilitadores.',
    familia: 'Fazer com livros de história empilhados na mesa. O adulto vai lendo o começo de um atrás do outro sem parar, até a criança pedir para escolher. É a mesma descoberta em cinco minutos, e serve de conversa antes de ligar a televisão.',
    jovem: null
  },

  kit: [
    { nome: 'Doze cartas de história', tipo: 'imprimivel', desc: 'Quatro tipos, três cartas de cada, para a máquina repetir o mesmo tipo.' },
    { nome: 'Carta PARAR E ESCOLHER', tipo: 'imprimivel', desc: 'A carta escondida. Imprimir maior que as outras.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Como conduzir a virada sem entregar a descoberta.' }
  ],

  imprimiveis: [
    {
      titulo: 'Doze cartas de história',
      tipo: 'cartas',
      nota: 'Três de cada tipo. A máquina sempre continua com o mesmo tipo da carta escolhida.',
      itens: [
        'ANIMAIS: o gato que dormia no telhado.',
        'ANIMAIS: a formiga que carregava uma folha enorme.',
        'ANIMAIS: o cachorro que tinha medo de chuva.',
        'MONSTROS: o monstro que só comia brócolis.',
        'MONSTROS: o monstro debaixo da cama que roncava.',
        'MONSTROS: o monstro que tinha vergonha de assustar.',
        'VIAGEM: o menino que foi até a lua de bicicleta.',
        'VIAGEM: o barco que atravessou uma poça.',
        'VIAGEM: o trem que ia para lugar nenhum.',
        'COMIDA: o bolo que fugiu da cozinha.',
        'COMIDA: a sopa que mudava de cor.',
        'COMIDA: o pão que queria ser biscoito.'
      ]
    },
    {
      titulo: 'Carta PARAR E ESCOLHER',
      tipo: 'cartaz',
      corpo: 'Imprimir em folha inteira, bem maior que as outras cartas.\n\nDe um lado, uma mão aberta grande.\nDo outro, em letra bem grande:\n\nPARAR\nE ESCOLHER'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O ponto da atividade não é que a máquina seja má. É que ela continua.\n\nComo conduzir:\n\n. Comemore de verdade a primeira escolha. Ela precisa parecer importante para que a perda de controle depois seja sentida.\n\n. Na virada, não anuncie nada. Só continue virando cartas, cada vez mais rápido. Crianças de 4 e 5 anos reclamam sozinhas em menos de um minuto, quase sempre com a frase "mas eu não pedi essa".\n\n. Quando alguém reclamar, repita a fala da criança em voz alta para a turma inteira ouvir. Essa frase é o insight, dito por uma criança, e vale mais do que qualquer explicação do adulto.\n\n. Não use a palavra "algoritmo". Nesta idade ela não acrescenta nada. A ideia de "alguma coisa escolheu por mim" é o que fica.\n\n. Se nenhuma criança reclamar, continue. Elas reclamam. Se a turma estiver muito animada com as histórias, vire cartas de um tipo que a turma não escolheu, e a reclamação vem imediatamente.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quem escolheu a primeira história?',
      'E as outras, quem escolheu?',
      'O que a gente precisa fazer para escolher de novo?',
      'Você já viu isso acontecer em algum lugar?'
    ],
    evitar: [
      'Usar a palavra algoritmo nesta faixa. Ela desloca a atenção e não acrescenta nada ao que a criança acabou de sentir.',
      'Revelar a carta escondida antes da reclamação. Sem a sensação de perder o controle, encontrar a carta não significa nada.',
      'Dizer que assistir a vídeos é ruim. A conversa é sobre quem escolhe, não sobre proibir.'
    ]
  },

  protecao: 'Nenhum aparelho é usado. Não citar marcas de aplicativos de vídeo nem perguntar o que a criança assiste em casa.',

  evidencia: 'A criança usa a carta PARAR E ESCOLHER por iniciativa própria na segunda rodada e consegue dizer que as histórias do meio não foram escolhidas por ela.'
},

/* ==================================================================== 24 */
{
  id: 'anuncio-fantasiado',
  insightCurto: 'Nem todo elogio é opinião. Às vezes quem elogia foi pago para elogiar.',
  n: 24,
  titulo: 'O anúncio fantasiado',
  chamada: 'Três fantoches adoram o mesmo brinquedo. Só um deles gosta de verdade.',
  faixa: '4-5',
  duracao: 25,
  formato: 'historia',
  formatoDetalhe: 'Teatro de fantoches',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['propaganda'],
  disciplinas: ['Artes', 'Língua Portuguesa'],
  preparo: 'medio',
  precisa: ['papel'],
  grupo: 'turma',
  eixo: 'consumo',
  nivel: 1,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    campo: 'Educação Infantil, campos de experiência "O eu, o outro e o nós" e "Traços, sons, cores e formas"',
    ponte: { codigo: 'EF02CO05', texto: 'Reconhecer as características e usos das tecnologias computacionais no cotidiano dentro e fora da escola.' },
    secundaria: { codigo: 'EF15CO09', texto: 'Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Distinguir recomendação genuína de comunicação comercial.' },

  provocacao: 'Três amigos vão falar do mesmo brinquedo, o Pula-Pula Mágico. Os três vão dizer que é maravilhoso. Prestem muita atenção, porque um deles está fingindo.',

  missao: 'Descobrir qual dos três fantoches gosta de verdade do brinquedo.',

  virada: 'Depois que a turma vota, cada fantoche conta o próprio segredo. A Lila ganhou o brinquedo de presente e brinca todo dia. O Bito recebeu uma caixa de brinquedos de graça da fábrica para falar bem deles, e nem abriu a caixa. A Nina nunca viu o brinquedo, só repetiu o que ouviu o Bito falar. As três falas eram idênticas. As razões, não.',

  insight: 'Duas pessoas podem dizer exatamente a mesma frase por motivos completamente diferentes. Uma gosta, outra ganhou alguma coisa para dizer aquilo.',

  transferencia: 'Quando alguém disser que um brinquedo é o melhor de todos, dá para perguntar uma coisa simples: você tem esse brinquedo? Você brinca com ele?',

  roteiro: [
    { t: '0 a 5 min',   o: 'Apresentar os três fantoches e o brinquedo. Combinar que ninguém pode falar durante a cena.' },
    { t: '5 a 12 min',  o: 'As três cenas, uma por fantoche. Cada um diz a mesma fala de elogio, com a mesma animação. Não dar nenhuma pista.' },
    { t: '12 a 16 min', o: 'Votação. Cada criança aponta para o fantoche que ela acha que gosta de verdade. Contar os votos em voz alta e não revelar ainda.' },
    { t: '16 a 21 min', o: 'A virada. Cada fantoche volta e conta o próprio segredo, um por vez, com pausa.' },
    { t: '21 a 25 min', o: 'Roda final com a pergunta de bolso. Cada criança treina em voz alta perguntando ao fantoche: você tem esse brinquedo?' }
  ],

  versoes: {
    escola: 'Turma inteira, três fantoches de meia, saco de papel ou colher de pau. Não precisa de teatro montado: a mão atrás de uma cadeira funciona. Encaixa em Artes, e as crianças podem fabricar os fantoches na aula anterior.',
    familia: 'Fazer com três bichos de pelúcia na cama, na hora de dormir. O adulto faz as três vozes. Dura dez minutos e a criança costuma pedir de novo, o que é ótimo: na segunda vez ela já sabe e observa outra coisa.',
    jovem: null
  },

  kit: [
    { nome: 'Roteiro das três cenas', tipo: 'roteiro', desc: 'As falas idênticas e os três segredos.' },
    { nome: 'Moldes de fantoche', tipo: 'imprimivel', desc: 'Lila, Bito e Nina para colar em saco de papel.' },
    { nome: 'Cartaz da pergunta de bolso', tipo: 'imprimivel', desc: 'Para deixar na parede da sala.' }
  ],

  imprimiveis: [
    {
      titulo: 'Roteiro das três cenas',
      tipo: 'roteiro',
      corpo: 'A FALA, idêntica para os três, dita com a mesma empolgação:\n\n"Gente, vocês precisam conhecer o Pula-Pula Mágico! É o melhor brinquedo do mundo inteiro! Todo mundo tem que ter um!"\n\nOS TRÊS SEGREDOS, revelados só depois da votação:\n\nLILA: "Eu ganhei o Pula-Pula no meu aniversário. Eu brinco todo dia depois da escola. Eu falei porque eu gosto mesmo."\n\nBITO: "A fábrica do Pula-Pula me mandou uma caixa cheia de brinquedos de graça. Eles pediram para eu falar bem. Eu nem abri a caixa ainda."\n\nNINA: "Eu nunca vi esse brinquedo na minha vida. Eu ouvi o Bito falando e achei bonito, aí eu falei igual."'
    },
    {
      titulo: 'Cartaz da pergunta de bolso',
      tipo: 'cartaz',
      corpo: 'Título grande:\nANTES DE ACREDITAR, EU PERGUNTO\n\nAbaixo, três perguntas com desenho ao lado de cada:\n\nVOCÊ TEM ESSE BRINQUEDO?\nVOCÊ BRINCA COM ELE?\nALGUÉM TE DEU ALGUMA COISA PARA VOCÊ FALAR BEM?'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'Quem gosta de verdade é a LILA.\n\nO que observar:\n\n. A votação costuma se dividir bem, porque as três falas são idênticas de propósito. Se a turma acertar em massa, provavelmente o facilitador deu alguma pista de voz ou de expressão sem perceber. Vale repetir as cenas com mais neutralidade.\n\n. O caso do BITO é o mais importante e o mais difícil nesta idade. Não usar as palavras publicidade nem patrocínio. A frase que funciona é "ganhou uma coisa para falar bem".\n\n. O caso da NINA costuma passar despercebido e merece tempo. Ela não mentiu e não ganhou nada. Ela só repetiu. Muitas crianças reconhecem o próprio comportamento nela, e essa é a parte mais delicada e mais valiosa da conversa. Nunca transformar em repreensão.\n\n. Se alguma criança disser que os três estão mentindo, acolher e devolver: a Lila gosta mesmo. Nem todo elogio é falso, e a atividade não pode terminar com a ideia de que ninguém pode ser levado a sério.'
    }
  ],

  mediacao: {
    perguntas: [
      'Os três falaram a mesma coisa. Por que a gente não pode acreditar do mesmo jeito nos três?',
      'A Nina mentiu?',
      'O que a gente pode perguntar antes de acreditar?',
      'Você já falou que gostava de uma coisa só porque um amigo falou?'
    ],
    evitar: [
      'Dizer que propaganda é mentira. O Bito não mentiu sobre o brinquedo, ele omitiu por que estava falando. A diferença é o que a criança precisa levar.',
      'Repreender quem se identificar com a Nina. Repetir o que se ouve é normal, inclusive entre adultos, e a atividade perde tudo se virar bronca.',
      'Citar marcas reais de brinquedos ou nomes de pessoas que fazem publicidade.'
    ]
  },

  protecao: 'O brinquedo, os fantoches e a fábrica são fictícios. Não citar marcas reais, canais ou pessoas reais. Não perguntar quais brinquedos a criança tem ou quais vídeos ela assiste.',

  evidencia: 'A criança formula ou repete espontaneamente uma pergunta de verificação, do tipo "você tem esse brinquedo?", e distingue o caso da Lila do caso do Bito.'
},

/* ==================================================================== 25 */
{
  id: 'sim-pode-virar-nao',
  insightCurto: 'Quem disse sim pode mudar de ideia. E quando muda, a resposta certa é tudo bem.',
  n: 25,
  titulo: 'Sim pode virar não',
  chamada: 'A personagem deixou tirar a foto. Antes de mostrar, ela mudou de ideia.',
  faixa: '4-5',
  duracao: 20,
  duracaoCurta: 15,
  comoEncurtar: 'Em 15 minutos: conte a história, use só a primeira fala difícil ("mas ficou tão bonitinho") e faça uma dramatização em vez de duas. O cartaz da frase da turma pode ficar para o dia seguinte.',
  formato: 'historia',
  formatoDetalhe: 'Dramatização com a turma',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['consentimento', 'foto'],
  disciplinas: ['Língua Portuguesa', 'Ensino Religioso'],
  preparo: 'nenhum',
  precisa: ['so-voz'],
  grupo: 'turma',
  eixo: 'consentimento',
  nivel: 2,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    campo: 'Educação Infantil, campo de experiência "O eu, o outro e o nós"',
    ponte: { codigo: 'EF03CO09', texto: 'Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.' },
    secundaria: { codigo: 'EF15CO09', texto: 'Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Compreender consentimento como contínuo e revogável.' },

  provocacao: 'A Duda fez uma dancinha e o Caio perguntou se podia filmar. Ela disse que sim. Aí ela viu o vídeo e ficou com vergonha. Agora ela quer que ele apague. E o Caio já mostrou para dois amigos.',

  missao: 'Decidir, em turma, o que o Caio deve fazer. E depois representar a cena do jeito que a turma decidiu.',

  virada: 'Quando a turma decide que o Caio deve apagar, o facilitador entra com a fala que quase todo mundo já ouviu: "mas ficou tão bonitinho". A turma precisa responder a isso. E logo depois vem a segunda: "mas eu já mostrei para o Téo e para a Bia". A decisão fácil fica difícil, e é aí que a conversa começa de verdade.',

  insight: 'Dizer sim uma vez não é dizer sim para sempre. Quando a pessoa muda de ideia, quem tem a foto precisa aceitar, mesmo achando bonitinho, mesmo já tendo mostrado.',

  transferencia: 'Se um amigo pedir para apagar um vídeo ou uma foto dele, a resposta é apagar, sem discutir e sem tentar convencer.',

  roteiro: [
    { t: '0 a 4 min',   o: 'Contar a história da Duda e do Caio até o pedido de apagar. Parar ali.' },
    { t: '4 a 9 min',   o: 'Roda de decisão. Cada criança diz o que o Caio deveria fazer. Anotar as respostas no quadro sem julgar nenhuma.' },
    { t: '9 a 14 min',  o: 'A virada. O facilitador faz a voz do Caio e usa as duas falas difíceis, uma por vez. Deixar a turma responder a cada uma.' },
    { t: '14 a 18 min', o: 'Dramatização. Duas crianças representam a cena do jeito que a turma decidiu. Trocar e repetir com outra dupla.' },
    { t: '18 a 20 min', o: 'Combinar juntos a frase da turma, que fica no cartaz: quando alguém pede para apagar, a gente apaga.' }
  ],

  versoes: {
    escola: 'Turma em roda, sem material nenhum. É uma das atividades mais fáceis de aplicar do banco e uma das que mais rende. Se a turma quiser, repetir a dramatização várias vezes com duplas diferentes.',
    familia: 'Contar a história no jantar e pedir para a criança decidir. Depois inverter: e se fosse você que tivesse pedido para apagar? Bom momento para o adulto combinar que também vai apagar quando pedirem.',
    jovem: null
  },

  kit: [
    { nome: 'Roteiro da história', tipo: 'roteiro', desc: 'A história e as duas falas difíceis da virada.' },
    { nome: 'Cartaz da frase da turma', tipo: 'imprimivel', desc: 'Para preencher junto e afixar.' }
  ],

  imprimiveis: [
    {
      titulo: 'Roteiro da história e as falas difíceis',
      tipo: 'roteiro',
      corpo: 'A HISTÓRIA, para ler em voz alta:\n\n"A Duda inventou uma dancinha no recreio. O Caio achou muito legal e perguntou: posso filmar? A Duda disse que sim.\n\nDepois, a Duda viu o vídeo e não gostou de como ela apareceu. Ela ficou com vergonha. Aí ela falou para o Caio: apaga, por favor."\n\nParar aqui e abrir a roda.\n\nAS DUAS FALAS DIFÍCEIS, uma por vez, feitas pelo facilitador com a voz do Caio:\n\n1. "Mas ficou tão bonitinho! Você está linda nesse vídeo."\n\n2. "Mas eu já mostrei para o Téo e para a Bia. Agora não adianta mais apagar."\n\nSe a turma resolver as duas com facilidade, a terceira, mais difícil:\n\n3. "Mas você deixou! Você falou que podia!"'
    },
    {
      titulo: 'Cartaz da frase da turma',
      tipo: 'cartaz',
      corpo: 'No topo, em letra grande:\nNA NOSSA TURMA\n\nEspaço para a turma completar, escrito pelo adulto com as palavras das crianças:\n\nQuando alguém pede para apagar, a gente ______________________.\n\nA gente não fala ______________________.\n\nAbaixo, espaço para todas as crianças carimbarem a mão ou assinarem com o próprio jeito.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'As três falas difíceis existem porque a decisão "apagar" é fácil no abstrato e difícil na prática. Cada uma testa uma coisa:\n\n. "Ficou tão bonitinho" testa se a criança entende que a opinião de quem filmou não decide. Costuma ser resolvida rápido, e é bom que seja: dá confiança para as próximas.\n\n. "Eu já mostrei" é a mais importante. A resposta boa não é "então tanto faz". É que apagar continua valendo, e que o Caio precisa avisar o Téo e a Bia. Se a turma não chegar sozinha, perguntar: e o vídeo que está com o Téo?\n\n. "Você deixou" é a mais dura e conecta direto com o insight. A resposta que a turma precisa construir é que a Duda pode mudar de ideia. Se alguma criança disser que a Duda não pode voltar atrás porque prometeu, acolher com cuidado: promessa de emprestar um brinquedo é uma coisa, e uma foto sua é outra, porque a foto é sua para sempre.\n\nNão apressar nenhuma das três. Uma turma que resolve só a primeira em vinte minutos aprendeu mais do que uma turma que ouviu as três explicadas pelo adulto.'
    }
  ],

  mediacao: {
    perguntas: [
      'A Duda pode mudar de ideia?',
      'O Caio já mostrou para dois amigos. Ainda adianta apagar?',
      'O que o Caio precisa falar para o Téo e para a Bia?',
      'Como a gente responde quando alguém diz "mas ficou bonitinho"?'
    ],
    evitar: [
      'Resolver a história pelo adulto. A frase "o certo é apagar" dita no começo elimina a atividade inteira.',
      'Dizer que o Caio é malvado. Ele perguntou antes, o que é mais do que muita gente faz. O problema é o que ele faz agora.',
      'Pedir que as crianças contem se já aconteceu com elas. Se alguém trouxer, acolher em uma frase e voltar para a Duda.'
    ]
  },

  protecao: 'A história é fictícia. Não filmar nem fotografar as crianças durante a atividade, inclusive durante a dramatização. Não pedir relatos pessoais. Se uma criança relatar constrangimento real com imagem, acolher em particular e acionar o protocolo da escola.',

  evidencia: 'A criança sustenta que a Duda pode mudar de ideia diante de pelo menos uma das falas difíceis, e propõe que o Caio avise quem já recebeu o vídeo.'
},

/* ==================================================================== 26 */
{
  id: 'quando-a-tela-assusta',
  insightCurto: 'Pedir ajuda não é ficar de castigo. É a primeira coisa que se faz, não a última.',
  n: 26,
  titulo: 'Quando a tela assusta',
  chamada: 'Apareceu uma coisa esquisita na tela. Responder, esconder, desligar ou chamar alguém?',
  faixa: '4-5',
  duracao: 20,
  duracaoCurta: 15,
  comoEncurtar: 'Em 15 minutos: conte a história inteira e vá direto aos quatro cartões. Corte a etapa de desenho. A parte dos dois nomes de referência é a única que sai da sala com a criança e nunca deve ser cortada.',
  formato: 'historia',
  formatoDetalhe: 'História com escolhas e cartões de ação',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['golpe'],
  disciplinas: ['Língua Portuguesa', 'Ensino Religioso'],
  preparo: 'baixo',
  precisa: ['papel'],
  grupo: 'turma',
  eixo: 'seguranca',
  nivel: 1,
  sensibilidade: 'alta',
  selos: ['sem-tela', 'sensivel'],

  bncc: {
    campo: 'Educação Infantil, campo de experiência "O eu, o outro e o nós"',
    ponte: { codigo: 'EF01CO07', texto: 'Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.' },
    secundaria: { codigo: 'EF02CO06', texto: 'Reconhecer os cuidados com a segurança no uso de dispositivos computacionais.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Reconhecer a busca de ajuda adulta como resposta legítima e imediata a desconforto digital.' },

  provocacao: 'O Téo estava vendo um desenho e do nada apareceu uma coisa na tela que ele não gostou. Ele ficou com aquele friozinho na barriga. O que ele faz agora?',

  missao: 'Escolher, entre quatro cartões de ação, o que o Téo deveria fazer. E descobrir por que uma das opções é sempre boa.',

  virada: 'Depois que a turma escolhe, o facilitador conta que o Téo não chamou ninguém, porque ele achou que ia ficar sem tablet. Ele ficou com o friozinho na barriga sozinho a tarde toda. Aí a turma descobre o que realmente atrapalha: não é não saber o que fazer, é achar que contar dá problema. E então o adulto da história diz a frase que muda tudo: "que bom que você me contou".',

  insight: 'Chamar um adulto não é perder o tablet nem ficar de castigo. É a primeira coisa que se faz, e quem conta é ajudado.',

  transferencia: 'Se aparecer alguma coisa que dá friozinho na barriga, em qualquer tela, a criança sabe o nome de pelo menos duas pessoas que ela pode chamar na hora.',

  roteiro: [
    { t: '0 a 4 min',   o: 'Contar a história do Téo até o friozinho na barriga. Nomear a sensação: é assim que o corpo avisa que alguma coisa não está boa.' },
    { t: '4 a 10 min',  o: 'Apresentar os quatro cartões de ação. Cada criança escolhe um e explica. Aceitar todas as escolhas sem corrigir.' },
    { t: '10 a 15 min', o: 'A virada. Contar que o Téo não chamou ninguém, e por quê. Depois contar como o adulto reagiu quando ele finalmente contou.' },
    { t: '15 a 18 min', o: 'Cada criança diz em voz alta o nome de duas pessoas que ela pode chamar. Registrar no desenho da mão de ajuda.' },
    { t: '18 a 20 min', o: 'Fechamento com a frase da turma: quem conta é ajudado.' }
  ],

  versoes: {
    escola: 'Turma em roda. Reservar tempo para a etapa dos dois nomes, que é a única que produz efeito real. Combinar antes com a coordenação o encaminhamento caso alguma criança relate algo concreto.',
    familia: 'Contar a história e depois dizer, com todas as letras, a frase que o adulto da história disse. Ouvir de um responsável que contar não dá castigo vale mais do que qualquer atividade. Aproveitar para combinar quem são as duas pessoas.',
    jovem: null
  },

  kit: [
    { nome: 'Quatro cartões de ação', tipo: 'imprimivel', desc: 'Responder, esconder, desligar, chamar alguém.' },
    { nome: 'Desenho da mão de ajuda', tipo: 'imprimivel', desc: 'Para a criança escrever ou desenhar duas pessoas.' },
    { nome: 'Roteiro da história', tipo: 'roteiro', desc: 'Com a fala do adulto na virada.' }
  ],

  imprimiveis: [
    {
      titulo: 'Quatro cartões de ação',
      tipo: 'cartas',
      nota: 'Cada cartão com um desenho grande e a palavra embaixo.',
      itens: [
        'RESPONDER: escrever ou falar de volta com quem apareceu.',
        'ESCONDER: fechar rapidinho e não contar para ninguém.',
        'DESLIGAR: apertar o botão e desligar o aparelho.',
        'CHAMAR: ir buscar um adulto e mostrar.'
      ]
    },
    {
      titulo: 'Roteiro da história',
      tipo: 'roteiro',
      corpo: 'PARTE 1:\n"O Téo estava vendo o desenho preferido dele no tablet, deitado no sofá. De repente apareceu uma coisa na tela que ele não gostou nada. Ele não sabia o que era, mas sentiu um friozinho na barriga."\n\nParar e abrir a escolha dos cartões.\n\nPARTE 2, a virada:\n"O Téo pensou em chamar a mãe dele. Mas aí ele lembrou de uma coisa: se ele contasse, será que ia ficar sem o tablet? Será que ia ter briga? Então ele não contou. Ele escondeu e foi brincar. Mas o friozinho na barriga ficou com ele a tarde inteira."\n\nPARTE 3, a fala que muda tudo:\n"Na hora do jantar, o Téo não estava conseguindo comer. Aí ele contou. E sabe o que a mãe dele falou? Ela falou assim:\n\nQUE BOM QUE VOCÊ ME CONTOU. VOCÊ FEZ CERTINHO. VOCÊ NÃO FEZ NADA DE ERRADO.\n\nE o Téo não ficou sem o tablet."'
    },
    {
      titulo: 'Desenho da mão de ajuda',
      tipo: 'folha',
      corpo: 'Uma mão aberta grande desenhada na folha.\n\nAcima: QUEM EU POSSO CHAMAR\n\nEm dois dedos da mão, espaço para a criança desenhar ou o adulto escrever o nome de duas pessoas.\n\nNo rodapé, em letra pontilhada para cobrir:\nQUEM CONTA É AJUDADO.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'CHAMAR é a única opção sempre boa, e é a única que funciona mesmo quando a criança não entende o que aconteceu.\n\nSobre os outros três:\n\n. DESLIGAR não é errado, e muitas crianças escolhem. É uma boa primeira reação. O que falta é o segundo passo. A pergunta que devolve: você desligou, e o friozinho na barriga foi embora?\n\n. ESCONDER é o que o Téo faz na história, e é o que a maioria das crianças faz na vida real. Por isso ele está na lista, e por isso não pode ser tratado como resposta burra. Ele é a resposta compreensível, e a atividade existe para dar outra saída.\n\n. RESPONDER é a única que aumenta o risco. Não transformar em bronca: perguntar o que pode acontecer se o Téo responder.\n\nO MOMENTO QUE IMPORTA é a fala do adulto na parte 3. Ela precisa ser dita devagar, em voz alta, olhando para as crianças. Muitas nunca ouviram essa frase.\n\nATENÇÃO NA CONDUÇÃO: esta atividade pode trazer relato real. É esperado e é bom sinal, porque significa que a criança confiou. Não fazer perguntas de apuração, não pedir detalhes na frente da turma, não prometer segredo. Acolher em uma frase, encerrar a exposição coletiva e acionar o protocolo da escola na mesma hora.'
    }
  ],

  mediacao: {
    perguntas: [
      'O que é o friozinho na barriga? Onde a gente sente?',
      'Por que o Téo não chamou a mãe dele?',
      'O Téo fez alguma coisa errada?',
      'Quem são as duas pessoas que você pode chamar?'
    ],
    evitar: [
      'Dizer que a criança vai ficar sem o aparelho se acontecer. É exatamente o medo que faz ninguém contar, e uma frase assim desmonta o objetivo inteiro.',
      'Descrever o que apareceu na tela do Téo. A história funciona melhor sem conteúdo, e descrever pode assustar sem necessidade.',
      'Perguntar se já aconteceu com alguém da turma. Nunca. Se vier espontaneamente, acolher e encaminhar em particular.',
      'Terminar sem os dois nomes escritos. É a única parte que sai da sala com a criança.'
    ]
  },

  protecao: 'Tema sensível. Nenhum conteúdo assustador é descrito ou mostrado. A história não detalha o que apareceu na tela, de propósito. Não perguntar sobre experiências reais. Se houver relato espontâneo, encerrar a exposição na hora, acolher em particular sem apuração e acionar o protocolo da escola. Combinar o encaminhamento com a coordenação antes de aplicar.',

  evidencia: 'A criança identifica CHAMAR como ação sempre disponível, diz em voz alta o nome de duas pessoas de referência, e afirma que o Téo não fez nada errado.'
},

/* ==================================================================== 27 */
{
  id: 'pistas-que-se-juntam',
  insightCurto: 'Cada pista sozinha não diz nada. Juntas, elas dizem exatamente quem é você.',
  n: 27,
  titulo: 'Pistas que se juntam',
  chamada: 'Uma pista não descobre ninguém. Quatro pistas descobrem qualquer um.',
  faixa: '4-5',
  duracao: 20,
  duracaoCurta: 15,
  comoEncurtar: 'Em 15 minutos: dois personagens em vez de três. A contagem de mãos por pista continua obrigatória, porque é ela que mostra a curva subindo.',
  formato: 'jogo',
  formatoDetalhe: 'Jogo de adivinhação em roda',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['dados'],
  disciplinas: ['Matemática', 'Língua Portuguesa'],
  preparo: 'baixo',
  precisa: ['papel'],
  grupo: 'turma',
  eixo: 'privacidade',
  nivel: 3,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    campo: 'Educação Infantil, campo de experiência "Espaços, tempos, quantidades, relações e transformações"',
    ponte: { codigo: 'EF01CO07', texto: 'Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.' },
    secundaria: { codigo: 'EF03CO04', texto: 'Relacionar o conceito de informação com o de dado.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Perceber que informações isoladamente inócuas se tornam identificadoras quando combinadas.' },

  provocacao: 'Eu estou pensando em um personagem. Vou dar uma pista só. Vamos ver se vocês descobrem.',

  missao: 'Descobrir qual é o personagem secreto, recebendo uma pista por vez.',

  virada: 'Com uma pista, ninguém descobre. Com duas, alguns arriscam. Com três, metade da turma já sabe. Com quatro, todo mundo grita o nome ao mesmo tempo. O facilitador então volta à primeira pista e pergunta: essa pista sozinha era perigosa? Não era. Nenhuma delas era. E mesmo assim, juntas, elas entregaram o personagem inteiro.',

  insight: 'Cada informação sozinha parece inofensiva. O que descobre uma pessoa não é uma informação, é o monte delas junto.',

  transferencia: 'Quando alguém que a gente não conhece faz várias perguntinhas, mesmo que cada uma pareça boba, é hora de chamar um adulto.',

  roteiro: [
    { t: '0 a 4 min',   o: 'Explicar o jogo. Combinar que ninguém grita antes da hora, e que quem souber levanta a mão em silêncio.' },
    { t: '4 a 12 min',  o: 'Três rodadas com os três personagens. Uma pista por vez, contando quantas mãos sobem a cada pista. Anotar os números no quadro.' },
    { t: '12 a 16 min', o: 'A virada. Olhar os números juntos: com uma pista, quantas mãos? Com quatro, quantas? Voltar à primeira pista e perguntar se ela sozinha era perigosa.' },
    { t: '16 a 20 min', o: 'Fechamento. Perguntar o que acontece quando alguém faz muitas perguntinhas seguidas para a gente.' }
  ],

  versoes: {
    escola: 'Turma em roda. A contagem de mãos por pista é o que transforma a brincadeira em descoberta, então não pular. Integra Matemática pela comparação de quantidades.',
    familia: 'Jogar no carro ou na fila do mercado, sem material nenhum. Depois inverter: a criança escolhe um personagem e dá as pistas. Quando ela precisa escolher quais pistas dar, ela entende por dentro.',
    jovem: null
  },

  kit: [
    { nome: 'Três personagens com quatro pistas', tipo: 'imprimivel', desc: 'Da pista mais vaga para a mais específica.' },
    { nome: 'Quadro de contagem', tipo: 'imprimivel', desc: 'Quantas mãos subiram a cada pista.' }
  ],

  imprimiveis: [
    {
      titulo: 'Três personagens com quatro pistas cada',
      tipo: 'cartas',
      nota: 'Ler sempre nesta ordem, da mais vaga para a mais específica. Nunca adiantar.',
      itens: [
        'PERSONAGEM 1, a Bel. Pista 1: ela gosta da cor azul. Pista 2: ela tem um cachorro. Pista 3: ela senta perto da janela. Pista 4: ela usa uma mochila com estrelas.',
        'PERSONAGEM 2, o Téo. Pista 1: ele gosta de bolo. Pista 2: ele tem um irmão bebê. Pista 3: ele vem de bicicleta. Pista 4: ele tem um boné vermelho que ele nunca tira.',
        'PERSONAGEM 3, a Nina. Pista 1: ela gosta de dançar. Pista 2: ela mora perto da padaria. Pista 3: ela sai da escola às cinco horas. Pista 4: ela tem uma garrafinha com adesivo de unicórnio.'
      ]
    },
    {
      titulo: 'Quadro de contagem',
      tipo: 'cartaz',
      corpo: 'Título: QUANTAS MÃOS SUBIRAM?\n\nTabela grande com três linhas, uma por personagem, e quatro colunas:\n\n           PISTA 1   PISTA 2   PISTA 3   PISTA 4\nBEL          ___       ___       ___       ___\nTÉO          ___       ___       ___       ___\nNINA         ___       ___       ___       ___\n\nPreencher com desenho de mãozinhas ou com números grandes, na frente da turma.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'As pistas foram construídas em ordem crescente de especificidade, e é isso que faz a curva de mãos subir.\n\nPista 1 é sempre um gosto, e vale para meia turma.\nPista 2 é sempre da vida da pessoa, e reduz bastante.\nPista 3 é sempre de lugar ou de horário, e é a que costuma virar o jogo.\nPista 4 é sempre um objeto que a pessoa carrega, e entrega tudo.\n\nO que observar:\n\n. A pista 3 é a mais importante do conjunto e merece o comentário do fechamento. Onde a pessoa fica e a que horas ela sai é o tipo de informação que parece boba e não é. É a mesma ideia que volta em "A mochila dos dados", com a carta da hora de saída da escola.\n\n. Se a turma acertar já na pista 2, ótimo: significa que os personagens são conhecidos demais. Trocar por personagens inventados na hora, com pistas mais vagas.\n\n. Nunca usar as crianças da turma como personagens secretos. Parece divertido e é a pior ideia possível: transforma o jogo em exposição de colega, e ainda ensina exatamente o oposto do insight.\n\n. No fechamento, a pergunta sobre "muitas perguntinhas seguidas" deve ser feita sem dramatizar. A criança precisa sair com um sinal simples de reconhecer, não com medo de conversar com pessoas.'
    }
  ],

  mediacao: {
    perguntas: [
      'Com uma pista só, dava para saber?',
      'Qual foi a pista que mais ajudou?',
      'A pista da cor favorita, sozinha, era perigosa?',
      'E se alguém que você não conhece ficar fazendo várias perguntinhas?'
    ],
    evitar: [
      'Usar crianças reais da turma como personagem secreto. Vira exposição de colega e ensina o contrário do que a atividade quer.',
      'Terminar com a ideia de que não se pode contar nada para ninguém. O insight é sobre juntar informação, não sobre silêncio.',
      'Pular a contagem de mãos. Sem os números, a turma não vê a curva subir, e a virada não acontece.'
    ]
  },

  protecao: 'Todos os personagens são fictícios. Nunca usar dados reais de crianças da turma, nem como brincadeira. Não pedir que as crianças deem pistas sobre si mesmas na versão escolar. Na versão de casa, a criança pode dar pistas sobre personagens inventados, nunca sobre pessoas da família.',

  evidencia: 'A criança reconhece que nenhuma pista sozinha identificava o personagem e aponta a combinação como o que revelou, usando as próprias palavras.'
}

);
