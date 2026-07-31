/* Eixo Convivência. Acrescentado depois da auditoria de cobertura: a BNCC pede
   EF07CO08, EF07CO09 e EM13CO25 explicitamente, e o banco não tinha nenhuma ficha
   cujo objeto fosse a violência entre pares.
   Todas as quatro exigem combinação prévia com a orientação educacional. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 62 */
{
  id: 'brincadeira-que-so-um-achou-graca',
  insightCurto: 'Se um está rindo e o outro não, parou de ser brincadeira. Quem decide isso é quem não riu.',
  n: 62,
  titulo: 'A brincadeira que só um achou graça',
  chamada: 'Duas cenas quase iguais. Em uma todo mundo ri. Na outra, alguém fica de fora do riso.',
  faixa: '6-8',
  duracao: 25,
  duracaoCurta: 15,
  comoEncurtar: 'Em 15 minutos: use dois pares de cena em vez de quatro e vá direto ao termômetro. A frase da turma no cartaz pode ficar para o dia seguinte.',
  formato: 'historia',
  formatoDetalhe: 'Cenas comparadas e termômetro de sentimento',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['consentimento'],
  disciplinas: ['Língua Portuguesa', 'Ensino Religioso', 'Artes'],
  preparo: 'baixo',
  grupo: 'turma',
  eixo: 'convivencia',
  nivel: 1,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF06CO09', texto: 'Apresentar conduta e linguagem apropriadas ao se comunicar em ambiente digital, considerando a ética e o respeito.' },
    secundaria: { codigo: 'EF03CO09', texto: 'Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.' },
    nota: 'Ponte antecipada: EF06CO09 é do 6º ano, e aqui trabalha-se a base dela, que é perceber o efeito da própria conduta sobre o outro.'
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Reconhecer o impacto da própria conduta sobre outra pessoa em interações mediadas.' },

  provocacao: 'Eu vou contar duas histórias quase iguais. A diferença entre elas é pequenininha e muda tudo.',

  missao: 'Depois de cada par de cenas, marcar no termômetro como ficou a pessoa da história: rindo, quietinha ou com o coração apertado.',

  virada: 'No terceiro par, o facilitador conta a cena e as crianças marcam. Aí ele acrescenta uma frase que ninguém esperava: o menino da história riu também, na hora. As crianças precisam decidir se isso muda a marcação. E descobrem que rir junto às vezes é o jeito de não ficar sozinho, e não sinal de que achou graça.',

  insight: 'Quem decide se foi brincadeira não é quem contou a piada. É quem estava do outro lado dela. E às vezes a pessoa ri para não ficar de fora.',

  transferencia: 'Antes de continuar uma brincadeira, dá para olhar a cara de quem é o assunto dela. Se a pessoa não estiver rindo de verdade, a brincadeira acabou.',

  roteiro: [
    { t: '0 a 4 min',   o: 'Montar o termômetro na parede: três carinhas grandes, rindo, quietinha e coração apertado. Combinar que ninguém fala nome de ninguém da sala.' },
    { t: '4 a 16 min',  o: 'Quatro pares de cena. Contar as duas versões de cada par e, depois de cada uma, as crianças levantam a carinha que corresponde. Contar quantas mãos em cada.' },
    { t: '16 a 20 min', o: 'A virada. No terceiro par, acrescentar que o menino riu também. Perguntar se a marcação muda.' },
    { t: '20 a 23 min', o: 'A pergunta de fechamento: quem sabe se foi brincadeira?' },
    { t: '23 a 25 min', o: 'Construir a frase da turma no cartaz, com as palavras das crianças.' }
  ],

  versoes: {
    escola: 'Turma em roda, com as carinhas grandes na parede. Encaixa em qualquer momento de conversa sobre convivência e funciona bem no começo do ano. Se a turma tiver conflito em curso, aplicar depois que ele tiver sido tratado, e nunca no lugar do tratamento.',
    familia: 'Contar dois pares na hora do jantar e usar as mãos em vez do cartaz. Depois o adulto conta uma vez em que ele mesmo fez uma brincadeira que não teve graça para o outro. Ver adulto reconhecendo vale mais que a atividade inteira.',
    jovem: null
  },

  kit: [
    { nome: 'Quatro pares de cena', tipo: 'imprimivel', desc: 'Duas versões de cada, para ler em voz alta.' },
    { nome: 'Termômetro de sentimento', tipo: 'imprimivel', desc: 'Três carinhas grandes para a parede e pequenas para a mão.' },
    { nome: 'Cartaz da frase da turma', tipo: 'imprimivel', desc: 'Para preencher junto.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O que muda em cada par e como mediar.' }
  ],

  imprimiveis: [
    {
      titulo: 'Quatro pares de cena',
      tipo: 'cartas',
      nota: 'Ler a versão A e marcar. Depois a versão B e marcar de novo. Não comentar entre uma e outra.',
      itens: [
        'PAR 1, A: o Téo escorregou na educação física e caiu sentado. Ele levantou rindo e falou "de novo não!". Todo mundo riu junto com ele. | PAR 1, B: o Téo escorregou e caiu sentado. Ele levantou vermelho e foi direto para o banco, sem falar nada. Todo mundo riu.',
        'PAR 2, A: a Bel errou o nome de um país na aula e a professora corrigiu. Ela falou "eita" e anotou. | PAR 2, B: a Bel errou o nome do país e três colegas repetiram o erro dela, imitando a voz, no recreio inteiro.',
        'PAR 3, A: o Dado tem um apelido que ele mesmo inventou e adora. Todo mundo chama ele assim. | PAR 3, B: o Dado ganhou um apelido que ele não escolheu, sobre o cabelo dele. Quando chamam, ele responde.',
        'PAR 4, A: a Nina contou que tem medo de trovão e as amigas contaram os medos delas também. | PAR 4, B: a Nina contou que tem medo de trovão e as amigas passaram a fazer barulho de trovão quando ela chega.'
      ]
    },
    {
      titulo: 'Termômetro de sentimento',
      tipo: 'cartaz',
      corpo: 'Três carinhas grandes, lado a lado na parede:\n\nRINDO DE VERDADE (carinha sorrindo)\nQUIETINHA (carinha neutra)\nCORAÇÃO APERTADO (carinha triste, com um coração pequeno ao lado)\n\nImprimir também em tamanho de mão, três por criança, para levantarem.'
    },
    {
      titulo: 'Cartaz da frase da turma',
      tipo: 'cartaz',
      corpo: 'Título grande:\nCOMO A GENTE SABE QUE AINDA É BRINCADEIRA\n\nEspaço para o adulto escrever, com as palavras das crianças:\n\nA gente olha ______________________.\n\nSe a pessoa ______________________, a brincadeira acabou.\n\nQuando a brincadeira acaba, a gente ______________________.\n\nAbaixo, espaço para todas as crianças carimbarem a mão.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O QUE MUDA EM CADA PAR\nPar 1: quem ri primeiro. Na A, o Téo. Na B, os outros.\nPar 2: repetição. Errar uma vez é acidente, o erro virar imitação a tarde inteira é outra coisa.\nPar 3: quem escolheu o apelido. É o par mais sutil e o mais importante: na B o Dado responde, e responder não é o mesmo que gostar.\nPar 4: o que se faz com o que a pessoa confiou. Na A, reciprocidade. Na B, o medo virou instrumento.\n\nA VIRADA, no par 3\nAcrescentar que o Dado riu quando chamaram. Muitas crianças mudam a marcação para "rindo". A pergunta que devolve: ele riu porque achou graça, ou para não ficar sozinho? Crianças de 6 a 8 anos entendem essa diferença perfeitamente, porque já sentiram, e é por isso que a atividade funciona nesta idade.\n\nCONDUÇÃO\n. Nunca usar nome de criança da turma, nem "vamos supor que fosse o fulano".\n. Não perguntar se alguém já passou por isso. Se vier espontaneamente, acolher em uma frase e voltar às cenas.\n. Não terminar com culpa. A frase do cartaz é sobre como perceber, e não sobre quem errou.\n. Se a turma tiver um caso real em curso, tratar o caso pelo canal próprio ANTES, e aplicar esta atividade semanas depois. Aplicar durante transforma a roda em julgamento.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quem sabe se ainda é brincadeira?',
      'O Dado riu. Isso quer dizer que ele gostou do apelido?',
      'Qual é a diferença entre rir COM alguém e rir DE alguém?',
      'O que a gente faz quando percebe que a brincadeira acabou?'
    ],
    evitar: [
      'Usar nome de criança da turma em qualquer cena.',
      'Perguntar se já aconteceu com alguém ali.',
      'Terminar em culpa. O objetivo é perceber, não punir.',
      'Aplicar durante um conflito em curso na turma.'
    ]
  },

  protecao: 'Todas as cenas e personagens são fictícios. Não usar nome, apelido ou situação real de criança da turma, em nenhuma hipótese. Não pedir relato pessoal. Combinar previamente com a orientação educacional e ter encaminhamento definido caso uma criança procure um adulto depois. Se houver conflito em curso, tratá-lo pelo canal próprio antes e aplicar a atividade só depois.',

  evidencia: 'A criança usa quem é alvo da brincadeira, e não quem a fez, como critério para dizer se ainda é brincadeira, e reconhece que rir junto pode ser proteção e não diversão.'
},

/* ==================================================================== 63 */
{
  id: 'quando-parar-de-rir',
  insightCurto: 'A piada não muda sozinha. Ela muda quando repete, quando espalha e quando a pessoa pede para parar.',
  n: 63,
  titulo: 'Quando parar de rir',
  chamada: 'Seis momentos da mesma piada. Em qual deles ela deixou de ser piada?',
  faixa: '9-10',
  duracao: 35,
  duracaoCurta: 20,
  comoEncurtar: 'Em 20 minutos: use quatro momentos em vez de seis e corte a etapa de reescrita. A linha do tempo com a marcação individual é obrigatória.',
  formato: 'investigacao',
  formatoDetalhe: 'Linha do tempo com marcação individual',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['consentimento', 'foto'],
  disciplinas: ['Língua Portuguesa', 'Projeto de Vida', 'Ensino Religioso'],
  preparo: 'baixo',
  grupo: 'turma',
  eixo: 'convivencia',
  nivel: 2,
  sensibilidade: 'alta',
  selos: ['pronta-amanha', 'sem-tela', 'sensivel'],

  bncc: {
    principal: { codigo: 'EF07CO08', texto: 'Demonstrar empatia sobre opiniões divergentes na web.' },
    secundaria: { codigo: 'EF06CO09', texto: 'Apresentar conduta e linguagem apropriadas ao se comunicar em ambiente digital, considerando a ética e o respeito.' },
    nota: 'Ponte antecipada: os dois códigos são do 6º e 7º anos, e aqui trabalha-se a base deles.'
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Identificar o ponto em que uma interação deixa de ser aceitável e reconhecer o próprio papel nela.' },

  provocacao: 'Uma piada começou na quinta-feira e virou outra coisa até a terça seguinte. Vocês vão dizer exatamente em qual momento ela deixou de ser piada.',

  missao: 'Cada estudante marca, sozinho e sem mostrar, em qual dos seis momentos ele teria parado. Depois a turma compara as marcações sem saber de quem é cada uma.',

  virada: 'As marcações são recolhidas anonimamente e contadas no quadro. Elas se espalham por todos os momentos, o que já é revelador. Então o facilitador entrega o sétimo cartão, que não estava na linha: o que a Duda escreveu no caderno dela na segunda-feira. Ninguém tinha marcado o momento 4, e é nele que, segundo o caderno, ela parou de querer vir para a escola. A linha do tempo da turma e a da pessoa não coincidem.',

  insight: 'Quem está de fora percebe tarde. A piada machuca antes de parecer grave, e quem está dentro dela quase nunca é quem percebe primeiro.',

  transferencia: 'Quando uma piada sobre alguém entra na segunda rodada, já é hora de olhar a pessoa. Não dá para esperar ficar óbvio, porque quando fica óbvio já passou.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Combinar as regras: caso fictício, ninguém fala de si, ninguém cita colega, e existe um adulto disponível depois da aula.' },
    { t: '5 a 14 min',  o: 'Montar a linha do tempo na parede, momento por momento, lendo em voz alta. Não comentar nenhum.' },
    { t: '14 a 20 min', o: 'Marcação individual e anônima: cada estudante escreve num papelzinho o número do momento em que teria parado. Dobrar e depositar na caixa.' },
    { t: '20 a 25 min', o: 'Contagem no quadro, sem identificar ninguém. Olhar a dispersão juntos.' },
    { t: '25 a 30 min', o: 'A virada. Ler o cartão do caderno da Duda. Silêncio.' },
    { t: '30 a 35 min', o: 'Reescrita: em grupos, escolher um momento e escrever o que uma pessoa presente poderia ter feito ali, com uma frase concreta que ela diria.' }
  ],

  versoes: {
    escola: 'Turma inteira. A marcação anônima é o que permite honestidade: com mão levantada, quase todo mundo marca o momento 1 e a atividade não acontece. Exige combinação prévia com a orientação educacional.',
    familia: 'Ler a linha do tempo e cada pessoa da casa marca o próprio momento em papel, incluindo os adultos. Comparar. Adultos costumam marcar tarde, e reconhecer isso em voz alta abre a conversa.',
    jovem: 'Individual: marcar o momento, ler o cartão do caderno, e escrever o que você faria hoje. Não é para entregar a ninguém.'
  },

  kit: [
    { nome: 'Seis momentos', tipo: 'imprimivel', desc: 'Cartões para montar a linha do tempo na parede.' },
    { nome: 'Papéis de marcação', tipo: 'imprimivel', desc: 'Para a marcação anônima.' },
    { nome: 'O caderno da Duda', tipo: 'imprimivel', desc: 'A virada. Ler só depois da contagem.' },
    { nome: 'Folha de reescrita', tipo: 'imprimivel', desc: 'A frase concreta que alguém diria.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Protocolo de mediação, obrigatório.' }
  ],

  imprimiveis: [
    {
      titulo: 'Os seis momentos',
      tipo: 'cartas',
      nota: 'Um cartão grande por momento, afixados em linha na parede.',
      itens: [
        'MOMENTO 1, quinta-feira: na aula de Ciências, a Duda leu "fotossíntese" errado e falou "fotossentese". Dois colegas riram. Ela riu também.',
        'MOMENTO 2, quinta-feira, recreio: alguém falou "fotossentese" imitando a voz dela. Mais gente riu. A Duda falou "para".',
        'MOMENTO 3, sexta-feira: a palavra virou apelido. Cinco pessoas chamaram ela assim durante o dia. Ela não respondeu.',
        'MOMENTO 4, sexta-feira, fim da tarde: alguém escreveu a palavra na carteira dela. Ela apagou.',
        'MOMENTO 5, segunda-feira: o apelido apareceu no grupo da turma, com um desenho. Quinze pessoas reagiram com risada.',
        'MOMENTO 6, terça-feira: a Duda não veio para a escola.'
      ]
    },
    {
      titulo: 'Papéis de marcação',
      tipo: 'folha',
      corpo: 'Recortar em papelzinhos iguais, um por estudante.\n\nEu teria parado no momento número: ______\n\nNão escreva o seu nome. Dobre e coloque na caixa.'
    },
    {
      titulo: 'O caderno da Duda (a virada)',
      tipo: 'folha',
      corpo: 'Ler em voz alta, devagar, depois da contagem.\n\n"Na sexta eu apaguei da carteira e achei que ia acabar.\n\nAí eu comecei a ficar com medo de falar na aula. Qualquer palavra. Eu ficava pensando antes se ia errar.\n\nNa segunda eu vi o desenho no grupo e eu não consegui almoçar.\n\nEu não acho que alguém quis. Eu acho que ninguém percebeu."\n\n---\n\nPergunta para a turma, depois do silêncio:\n\nA nossa contagem dizia que a maioria pararia em qual momento?\nO caderno diz que já estava difícil em qual?'
    },
    {
      titulo: 'Folha de reescrita',
      tipo: 'folha',
      corpo: 'Grupo: ______  Momento escolhido: ______\n\nQuem estava presente nesse momento: ____________________\n\nO que essa pessoa poderia ter feito:\n____________________________________\n\nA FRASE que ela diria, escrita como se fosse falar agora:\n"____________________________________"\n\nEssa frase é difícil de falar? ( ) sim ( ) não\nO que deixaria mais fácil? ____________________________________\n\nSe ninguém falasse nada, o que ela poderia fazer sem falar?\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado e protocolo de mediação',
      tipo: 'gabarito',
      corpo: 'PROTOCOLO, CONDIÇÃO DE APLICAÇÃO\n. Combinar previamente com a orientação educacional. Ter um adulto disponível depois da aula.\n. Avisar no início que o caso é fictício e que ninguém precisa falar de si.\n. Não aplicar durante conflito em curso, nem logo após um episódio real na turma.\n. Nunca perguntar se já aconteceu com alguém, nem quem marcou qual número.\n. Não dramatizar o momento 6 e não especular sobre o que aconteceu depois.\n\nPOR QUE A MARCAÇÃO É ANÔNIMA\nCom mão levantada, quase toda turma marca o momento 1, porque é a resposta socialmente certa. No papel dobrado, a dispersão aparece, e a dispersão é o dado. Ela mostra que as pessoas realmente enxergam em momentos diferentes.\n\nO QUE A VIRADA ENSINA\nA turma quase nunca marca o 4, que é o momento privado, sem plateia, em que a Duda apagou sozinha. É o momento sem espetáculo, e é o que o caderno aponta. A lição não é que a turma foi cruel: é que o dano tem um relógio próprio, que não é o de quem observa.\n\nSOBRE A FRASE DA REESCRITA\nExigir frase escrita, entre aspas, como se fosse falada. "Defender a pessoa" não é frase, é intenção. As frases que funcionam nesta idade são curtas: "para, já deu", "ele pediu para parar", "eu não achei engraçado". Vale ler algumas em voz alta e perguntar qual seria mais fácil de dizer.\n\nA última pergunta da folha, sobre o que fazer sem falar, é importante para quem não consegue confrontar: sentar do lado, chamar para outra coisa, contar para um adulto. São ações reais e devem ser validadas com o mesmo peso.'
    }
  ],

  mediacao: {
    perguntas: [
      'A nossa contagem se espalhou entre quantos momentos?',
      'Em qual momento o caderno diz que já estava difícil?',
      'Por que ninguém marcou o momento 4?',
      'A Duda escreveu que acha que ninguém quis. Isso muda alguma coisa?',
      'Qual frase da reescrita seria mais fácil de falar de verdade?'
    ],
    evitar: [
      'Fazer a marcação com mão levantada. Destrói a honestidade e a atividade inteira.',
      'Perguntar quem marcou qual número.',
      'Perguntar se já aconteceu com alguém da turma.',
      'Transformar em busca de culpado. A Duda escreveu que acha que ninguém quis, e essa frase está lá de propósito.',
      'Aplicar durante ou logo depois de um caso real.'
    ]
  },

  protecao: 'Tema sensível. O caso e todos os personagens são fictícios. Nenhum episódio real da turma é usado, citado ou aludido. A marcação é anônima e não deve ser identificada em nenhuma hipótese. Não perguntar sobre experiências pessoais. Combinar previamente com a orientação educacional, com adulto disponível depois da aula. Se um estudante procurar um adulto ou se identificar visivelmente, acolher em particular e acionar o protocolo da escola no mesmo dia.',

  evidencia: 'O estudante reconhece que a percepção de quem observa chega depois do dano, e produz uma frase concreta e dizível para interromper a situação em um momento específico.'
},

/* ==================================================================== 64 */
{
  id: 'quem-estava-vendo',
  insightCurto: 'Quem assiste não é neutro. A plateia é o que transforma uma agressão em espetáculo.',
  n: 64,
  titulo: 'Quem estava vendo',
  chamada: 'Um agressor, uma pessoa atingida e vinte e oito que viram. A conta não fecha do jeito que parece.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: trabalhe quatro dos sete papéis de plateia, mantendo obrigatoriamente o de quem reagiu com emoji e o de quem só leu. O protocolo dos três passos é o produto e não sai.',
  formato: 'simulacao',
  formatoDetalhe: 'Análise de papéis com contagem',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['consentimento', 'foto'],
  disciplinas: ['Projeto de Vida', 'Língua Portuguesa', 'História'],
  preparo: 'baixo',
  grupo: 'turma',
  eixo: 'convivencia',
  nivel: 3,
  sensibilidade: 'alta',
  selos: ['pronta-amanha', 'sem-tela', 'sensivel'],

  bncc: {
    principal: { codigo: 'EF07CO09', texto: 'Reconhecer e debater sobre cyberbullying.' },
    secundaria: { codigo: 'EF08CO07', texto: 'Compartilhar informações por meio de redes sociais, compreendendo a sua dinâmica de funcionamento, de forma responsável e avaliando sua confiabilidade, considerando o respeito e a ética.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Reconhecer o papel ativo da audiência em dinâmicas de agressão mediada e identificar formas viáveis de interrupção.' },

  provocacao: 'Neste caso tem uma pessoa que agrediu, uma que foi atingida, e vinte e oito que viram. Todo mundo fala das duas primeiras. Hoje a gente vai falar das vinte e oito.',

  missao: 'Distribuir as vinte e oito pessoas nos sete papéis de plateia, calcular o peso de cada papel, e descobrir qual deles sustenta a agressão.',

  virada: 'Depois da distribuição, o facilitador entrega o dado que reorganiza tudo: em uma agressão pública, o que decide se ela continua não é o agressor, é a resposta da plateia nos primeiros minutos. Os grupos então calculam quantas das vinte e oito pessoas fizeram alguma coisa que sinalizou aprovação, mesmo sem querer. Reagir com emoji de risada conta. Ficar no grupo lendo conta menos, mas conta. A soma costuma passar de vinte.',

  insight: 'A agressão não se sustenta sozinha. Ela precisa de audiência, e a audiência quase nunca se percebe como parte. Cada reação pequena é um voto.',

  transferencia: 'Diante de uma agressão em grupo, existem três coisas que qualquer pessoa da plateia consegue fazer, e nenhuma delas exige confronto público.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Combinar as regras. Apresentar o caso e os números: 1 agressor, 1 atingida, 28 que viram.' },
    { t: '6 a 20 min',  o: 'Em grupos, distribuir as 28 pessoas nos sete papéis de plateia e justificar cada número.' },
    { t: '20 a 28 min', o: 'Comparar as distribuições no quadro. Onde os grupos concordaram e onde divergiram.' },
    { t: '28 a 36 min', o: 'A virada. Apresentar o mecanismo da plateia e pedir a soma de quem sinalizou aprovação, ainda que sem intenção.' },
    { t: '36 a 44 min', o: 'Construção do protocolo dos três passos, com o teste do custo: cada passo precisa ser possível para alguém com medo.' },
    { t: '44 a 50 min', o: 'Fechamento: qual dos três passos vocês realmente fariam? Votação anônima.' }
  ],

  versoes: {
    escola: 'Turma inteira em grupos. Encadeia diretamente com "Quando parar de rir", dos 9 aos 10, e com "A conversa saiu do grupo". Exige combinação prévia com a orientação educacional. O teste do custo é o que separa esta atividade de um discurso sobre coragem.',
    familia: 'Ler o caso e discutir os sete papéis. O adulto conta uma situação de trabalho ou de grupo de família em que ele foi plateia. Reconhecer que o problema não é só de adolescente muda a conversa.',
    jovem: 'Individual: marcar em qual dos sete papéis você provavelmente estaria, e escrever qual dos três passos você conseguiria fazer. Não é para entregar a ninguém.'
  },

  kit: [
    { nome: 'O caso e os números', tipo: 'imprimivel', desc: 'A situação, sem juízo prévio.' },
    { nome: 'Sete papéis de plateia', tipo: 'imprimivel', desc: 'Para a distribuição.' },
    { nome: 'Folha de distribuição', tipo: 'imprimivel', desc: 'Com a soma da aprovação.' },
    { nome: 'Protocolo dos três passos', tipo: 'editavel', desc: 'O produto, com teste de custo.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O mecanismo e o protocolo de mediação.' }
  ],

  imprimiveis: [
    {
      titulo: 'O caso e os números',
      tipo: 'folha',
      corpo: 'No grupo do 8º ano, com 30 pessoas, alguém publicou um vídeo curto do Léo tropeçando na quadra, com um texto por cima.\n\nO vídeo ficou no grupo por três dias.\n\nAS PESSOAS:\n1 publicou\n1 é o Léo\n28 viram\n\nO QUE ACONTECEU NAS 28:\n11 reagiram com emoji de risada\n4 comentaram alguma coisa engraçada\n2 encaminharam para outro grupo\n1 comentou "gente, para"\n1 falou com o Léo em particular\n1 contou para um adulto\n8 leram e não fizeram nada\n\nPergunta inicial: quantas dessas 28 pessoas fizeram alguma coisa errada?'
    },
    {
      titulo: 'Sete papéis de plateia',
      tipo: 'cartas',
      itens: [
        'QUEM REAGIU COM RISADA. Não escreveu nada. Só apertou um botão.',
        'QUEM COMENTOU. Acrescentou uma frase engraçada. Não criou o vídeo.',
        'QUEM ENCAMINHOU. Levou para um grupo novo, com gente que nem conhecia o Léo.',
        'QUEM PEDIU PARA PARAR, dentro do grupo, na frente de todo mundo.',
        'QUEM FALOU COM O LÉO em particular, sem falar nada no grupo.',
        'QUEM CONTOU PARA UM ADULTO, sem avisar ninguém do grupo.',
        'QUEM LEU E NÃO FEZ NADA. Não riu, não comentou, não encaminhou, não falou.'
      ]
    },
    {
      titulo: 'Folha de distribuição',
      tipo: 'folha',
      corpo: 'PAPEL                          QUANTOS   ISSO SINALIZA APROVAÇÃO?\nReagiu com risada                ____      ( ) sim ( ) não ( ) mais ou menos\nComentou                         ____      ( ) sim ( ) não ( ) mais ou menos\nEncaminhou                       ____      ( ) sim ( ) não ( ) mais ou menos\nPediu para parar                 ____      ( ) sim ( ) não ( ) mais ou menos\nFalou com o Léo em particular    ____      ( ) sim ( ) não ( ) mais ou menos\nContou para um adulto            ____      ( ) sim ( ) não ( ) mais ou menos\nLeu e não fez nada               ____      ( ) sim ( ) não ( ) mais ou menos\n\nSOMA de quem sinalizou aprovação, contando "mais ou menos" como meio: ______\n\nDe 28 pessoas, quantas o Léo viu como estando do lado dele? ______\n\nAs três pessoas que fizeram alguma coisa fizeram coisas diferentes.\nQual delas o Léo percebeu? ____________________\nQual delas mudou o que acontecia no grupo? ____________________'
    },
    {
      titulo: 'Protocolo dos três passos',
      tipo: 'editavel',
      corpo: 'TRÊS COISAS QUE QUALQUER PESSOA DA PLATEIA CONSEGUE FAZER\n\nRegra do exercício: cada passo precisa passar no TESTE DO CUSTO. Ele precisa ser possível para alguém que está com medo de virar o próximo alvo. Se só funciona para quem é corajoso, não serve.\n\nPasso 1: ____________________________________\nPossível para quem está com medo? ( ) sim ( ) não\n\nPasso 2: ____________________________________\nPossível para quem está com medo? ( ) sim ( ) não\n\nPasso 3: ____________________________________\nPossível para quem está com medo? ( ) sim ( ) não\n\nO QUE NÃO CONTA COMO PASSO:\n. "não fazer nada" (é o que 8 pessoas fizeram)\n. "ter coragem" (não é uma ação)\n. "denunciar" sem dizer para quem e como\n\nSugestões da turma para deixar mais fácil:\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado e protocolo de mediação',
      tipo: 'gabarito',
      corpo: 'PROTOCOLO, CONDIÇÃO DE APLICAÇÃO\nCombinação prévia com a orientação educacional, adulto disponível depois da aula, caso apresentado como fictício, nenhum relato pessoal solicitado, e não aplicar durante ou logo após episódio real.\n\nA CONTA\nReagiram com risada 11, comentaram 4, encaminharam 2. São 17 sinalizações claras de aprovação. Somando os 8 que leram e não fizeram nada como meio, a soma passa de 20 de 28.\n\nDo lado do Léo: 3 pessoas, e ele provavelmente percebeu 2, porque quem contou para o adulto não avisou ninguém.\n\nO PONTO SOBRE O EMOJI\nÉ o achado central e o mais desconfortável. Reagir com risada é a ação de menor custo possível e é a que mais sustenta a dinâmica, porque é ela que produz o número visível de aprovação. Quase todo estudante já fez. Não transformar em acusação: a formulação que funciona é que a plataforma transformou aprovação em um botão, e que apertar um botão não parece uma decisão, mas conta como uma.\n\nA DISTINÇÃO ENTRE AS TRÊS AÇÕES\n. Quem pediu para parar no grupo mudou o que acontecia, e pagou um custo alto.\n. Quem falou com o Léo em particular não mudou nada no grupo e foi provavelmente a mais importante para ele.\n. Quem contou para o adulto mudou o desfecho e o Léo talvez nunca saiba.\nAs três são válidas e é importante que a turma veja isso, porque a única versão que circula normalmente é a primeira, que é a mais cara.\n\nO TESTE DO CUSTO é o coração do protocolo. Adolescente sabe perfeitamente o que "deveria" fazer, e o discurso da coragem não muda comportamento porque ignora o risco real de virar o próximo alvo. Passos que sobrevivem ao teste costumam ser: sair do grupo em silêncio, mandar mensagem particular para a pessoa atingida, contar para um adulto sem avisar ninguém, e não reagir com nada. Todos são invisíveis e todos funcionam.\n\nSe a turma propuser "confrontar publicamente" como único passo, aceitar e depois aplicar o teste do custo. Ela mesma vai perceber.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantas das 28 sinalizaram aprovação, mesmo sem querer?',
      'Apertar um emoji parece uma decisão?',
      'Das três pessoas que fizeram alguma coisa, qual o Léo percebeu?',
      'Qual delas mudou o que acontecia no grupo?',
      'O seu passo funciona para alguém que está com medo de virar o próximo?',
      'O que a escola poderia fazer para baixar o custo de agir?'
    ],
    evitar: [
      'Culpar quem reagiu com emoji. A conclusão é sobre mecanismo, não sobre caráter, e culpa fecha a conversa.',
      'Aceitar "ter coragem" como passo. Não é uma ação e não sobrevive ao teste do custo.',
      'Tratar confronto público como a única forma válida de agir. É a mais cara e a menos acessível.',
      'Perguntar sobre casos reais da turma.'
    ]
  },

  protecao: 'Tema sensível. O caso, o Léo e todos os números são fictícios. Nenhum episódio real é usado ou aludido. Não pedir relato pessoal nem perguntar quem já esteve em qual papel. Combinar previamente com a orientação educacional, com adulto disponível depois da aula. A votação final é anônima. Se houver identificação visível ou relato espontâneo, acolher em particular e acionar o protocolo da escola no mesmo dia.',

  evidencia: 'O grupo quantifica a sinalização de aprovação da plateia, distingue as três formas de agir quanto a efeito e a custo, e produz ao menos dois passos que sobrevivem ao teste do custo.'
},

/* ==================================================================== 65 */
{
  id: 'denunciar-nao-e-dedurar',
  insightCurto: 'Dedurar é entregar alguém para prejudicar. Denunciar é proteger alguém que não consegue se proteger sozinho.',
  n: 65,
  titulo: 'Denunciar não é dedurar',
  chamada: 'Onde denunciar, o que serve de prova, quanto tempo demora e o que acontece depois.',
  faixa: '15-17',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use três dos seis casos e monte só a coluna de "para onde vai". O cartão de bolso com os canais preenchidos é obrigatório e é o que sai da sala.',
  formato: 'investigacao',
  formatoDetalhe: 'Mapeamento de canais e construção de protocolo',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['consentimento', 'foto', 'golpe'],
  disciplinas: ['Projeto de Vida', 'História', 'Língua Portuguesa'],
  preparo: 'alto',
  grupo: 'pequeno',
  eixo: 'convivencia',
  nivel: 5,
  sensibilidade: 'alta',
  selos: ['sem-tela', 'sensivel'],

  bncc: {
    principal: { codigo: 'EM13CO25', texto: 'Dialogar em ambientes virtuais com segurança e respeito às diferenças culturais e pessoais, reconhecendo e denunciando atitudes abusivas.' },
    secundaria: { codigo: 'EM13CO26', texto: 'Aplicar os conceitos e pressupostos do direito digital em sua conduta e experiências com o cotidiano da cultura digital, bem como na produção e uso de artefatos computacionais.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Conhecer e acionar canais formais de denúncia, distinguindo proteção de delação.' },

  provocacao: 'Todo mundo aqui sabe que "deveria denunciar". Quase ninguém sabe para onde, o que precisa guardar, quanto tempo demora e o que acontece com quem denunciou. Hoje vocês vão descobrir, e vão sair com isso escrito no bolso.',

  missao: 'Para cada um dos seis casos, mapear o canal certo, a prova necessária, o prazo e o que acontece com quem denunciou. Depois produzir o cartão de bolso da turma.',

  virada: 'Com o mapa quase pronto, o facilitador entrega as cartas de consequência real. No caso 3, a denúncia na plataforma foi analisada por sistema automático e negada em dois dias, sem explicação. No caso 5, a escola instaurou procedimento e a pessoa denunciada descobriu quem denunciou. Os grupos percebem que denunciar tem custo e risco, e que um protocolo que ignora isso não vai ser usado. A pergunta muda de "onde denunciar" para "como denunciar protegendo quem denuncia".',

  insight: 'Denunciar não é um ato moral, é um procedimento com canal, prova, prazo e consequência. E o desenho do procedimento decide se alguém vai usá-lo.',

  transferencia: 'Diante de uma situação real, existe um cartão com os canais, o que guardar e o que não fazer. Ninguém precisa descobrir isso no meio de uma crise.',

  roteiro: [
    { t: 'Antes',              o: 'O professor levanta previamente os canais REAIS: orientação educacional, conselho tutelar da região, delegacia, SaferNet, Disque 100, e o caminho de denúncia das plataformas mais usadas. Ver a proteção.' },
    { t: '0 a 8 min',          o: 'Combinar as regras. Apresentar a distinção entre dedurar e denunciar e deixá-la em aberto: a turma vai testá-la nos casos.' },
    { t: '8 a 26 min',         o: 'Em grupos, mapear os seis casos na matriz: canal, prova, prazo, o que acontece com quem denunciou.' },
    { t: '26 a 34 min',        o: 'A virada. Entregar as cartas de consequência real. Refazer a coluna do risco.' },
    { t: '34 a 44 min',        o: 'Construção do cartão de bolso, com os canais reais preenchidos e a regra de proteção de quem denuncia.' },
    { t: '44 a 50 min',        o: 'Fechamento: a distinção do início se sustentou? Onde ela fica difícil?' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Exige preparo real do professor: o cartão só tem valor se os canais estiverem preenchidos com informação verdadeira e local. Fecha o eixo de convivência e encadeia com "Plano de emergência digital", da coleção familiar.',
    familia: 'A versão doméstica equivalente é o "Plano de emergência digital", que produz a folha da parede com os telefones.',
    jovem: 'Individual: preencher o cartão de bolso com os canais da sua cidade e guardar. Não precisa mostrar para ninguém.'
  },

  kit: [
    { nome: 'Seis casos', tipo: 'imprimivel', desc: 'Situações que exigem canais diferentes.' },
    { nome: 'Matriz de mapeamento', tipo: 'editavel', desc: 'Canal, prova, prazo, risco.' },
    { nome: 'Cartas de consequência real', tipo: 'imprimivel', desc: 'A virada.' },
    { nome: 'Cartão de bolso', tipo: 'editavel', desc: 'O produto. Preencher com canais reais e locais.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Onde vai cada caso e o protocolo de mediação.' }
  ],

  imprimiveis: [
    {
      titulo: 'Seis casos',
      tipo: 'cartas',
      itens: [
        'CASO 1. Um colega criou um perfil falso com o nome e a foto de outro estudante e publica coisas em nome dele.',
        'CASO 2. Circula no grupo da escola um vídeo constrangedor de uma estudante de 15 anos, gravado sem que ela soubesse.',
        'CASO 3. Uma pessoa está sendo xingada todos os dias nos comentários de um perfil público, por vários perfis diferentes.',
        'CASO 4. Um adulto desconhecido está mandando mensagens para uma estudante de 14 anos pedindo fotos e pedindo segredo.',
        'CASO 5. Um professor faz comentários sobre a aparência de estudantes em sala.',
        'CASO 6. Alguém publicou o endereço e o horário de saída de um estudante em um grupo aberto.'
      ]
    },
    {
      titulo: 'Matriz de mapeamento',
      tipo: 'editavel',
      corpo: 'Caso número: ______\n\nISSO É CRIME, INFRAÇÃO ESCOLAR, OU AS DUAS COISAS?\n____________________\n\nCANAL PRINCIPAL: ____________________\nPor que este e não outro: ____________________\n\nOUTROS CANAIS que também servem: ____________________\n\nQUE PROVA precisa ser guardada, e como guardar sem espalhar:\n____________________________________\n\nO QUE NÃO FAZER antes de denunciar:\n____________________________________\n\nQUANTO TEMPO até alguma resposta: ____________________\n\nO QUE ACONTECE COM QUEM DENUNCIOU:\n( ) fica anônimo ( ) pode ser identificado ( ) depende\n____________________________________'
    },
    {
      titulo: 'Cartas de consequência real (a virada)',
      tipo: 'cartas',
      itens: [
        'CONSEQUÊNCIA no caso 3: a denúncia foi feita pelo botão da plataforma. Um sistema automático analisou e respondeu em dois dias que "não viola as diretrizes". Não houve explicação e não há segunda instância. Os xingamentos continuaram.',
        'CONSEQUÊNCIA no caso 5: a escola instaurou procedimento. Durante a apuração, a pessoa denunciada soube quem havia denunciado. A estudante passou a ser evitada por parte da turma.',
        'CONSEQUÊNCIA no caso 2: como envolve adolescente e conteúdo íntimo, o caso é crime e a delegacia foi acionada. O procedimento correu, e a estudante precisou repetir o relato três vezes para pessoas diferentes.',
        'CONSEQUÊNCIA no caso 4: a denúncia ao Disque 100 e à delegacia levou a uma investigação. O adulto usava perfil falso e levou meses para ser identificado. Durante esse tempo, a orientação foi bloquear, guardar tudo e não responder.',
        'CONSEQUÊNCIA no caso 1: a plataforma removeu o perfil falso em um dia, porque impersonation costuma ser tratada rápido. A escola, em paralelo, tratou como questão disciplinar.',
        'CONSEQUÊNCIA no caso 6: nada aconteceu por três semanas, porque ninguém sabia que aquele grupo existia. Alguém precisou contar.'
      ]
    },
    {
      titulo: 'Cartão de bolso',
      tipo: 'editavel',
      corpo: 'Imprimir em cartão pequeno. O professor preenche os canais reais ANTES da aula.\n\nSE ACONTECER COM VOCÊ OU COM ALGUÉM\n\n1. GUARDE PROVA ANTES DE BLOQUEAR\nCaptura de tela mostrando o perfil, a data e o conteúdo. Não apague nada.\n\n2. NÃO RESPONDA E NÃO ESPALHE\nEncaminhar para mostrar como é grave espalha do mesmo jeito.\n\n3. CANAIS\nNa escola: ____________________\nConselho tutelar: ____________________\nDelegacia mais próxima: ____________________\nSaferNet, denúncia online: new.safernet.org.br\nDisque 100, 24 horas, gratuito\nEm caso de risco imediato: 190\n\n4. NA PLATAFORMA\nDenuncie também pelo botão dela, mas não pare aí: a resposta pode ser automática e negada.\n\n5. SE FOR COM OUTRA PESSOA\nAvise um adulto mesmo sem a permissão dela, quando houver risco. Você não fica responsável sozinho.\n\nDENUNCIAR NÃO É DEDURAR.\nDedurar é entregar alguém para prejudicar.\nDenunciar é proteger quem não consegue se proteger sozinho.'
    },
    {
      titulo: 'Gabarito comentado e protocolo de mediação',
      tipo: 'gabarito',
      corpo: 'PARA ONDE VAI CADA CASO\n1, perfil falso: plataforma (rápido) mais escola. Pode configurar crime.\n2, vídeo íntimo de adolescente: crime. Delegacia, com SaferNet e Disque 100 como apoio. Não é caso de resolver só na escola.\n3, xingamento em massa: plataforma, e é onde o canal mais falha. Se houver identificação dos autores e vínculo escolar, a escola entra.\n4, adulto pedindo foto a menor: aliciamento. Crime. Delegacia e Disque 100, imediatamente. É o caso mais grave da lista.\n5, professor: canal interno da escola, e se não houver resposta, conselho tutelar e secretaria de educação. É o caso em que o canal e a hierarquia se chocam.\n6, endereço publicado: risco à segurança física. Plataforma mais escola mais, dependendo do teor, delegacia.\n\nO QUE A VIRADA ENSINA\nDenunciar tem custo, e um protocolo que finge que não tem é inútil. As duas consequências mais importantes são a do caso 3, que mostra que o canal da plataforma pode ser automático e não funcionar, e a do caso 5, que mostra que anonimato pode não ser preservado. A pergunta correta que emerge é como denunciar protegendo quem denuncia, e ela deve ficar aberta, porque não tem resposta pronta.\n\nSOBRE A DISTINÇÃO DEDURAR E DENUNCIAR\nEla se sustenta na maioria dos casos e fica difícil no 5, em que existe assimetria de poder e medo de retaliação. Deixar a dificuldade aparecer é melhor do que resolvê-la com slogan.\n\nPROTOCOLO, CONDIÇÃO DE APLICAÇÃO\n. O professor precisa levantar os canais REAIS e locais antes da aula. Um cartão com lacunas é pior que nenhum cartão.\n. Combinar com a orientação educacional. Ter um profissional disponível no dia e nas horas seguintes.\n. Avisar que os casos são fictícios e que ninguém precisa falar de si.\n. Não descrever conteúdo de violência sexual. O caso 2 e o caso 4 são deliberadamente sóbrios.\n. Se um estudante relatar situação real, esta atividade não é o espaço: acolher em particular no mesmo dia e acionar o canal adequado. Isso é bastante provável nesta atividade, e o preparo existe por isso.'
    }
  ],

  mediacao: {
    perguntas: [
      'No caso 3, a denúncia foi negada por um sistema automático. E agora?',
      'No caso 5, quem denunciou foi identificado. Isso muda o que você faria?',
      'Qual desses casos não dá para resolver dentro da escola?',
      'O que precisa ser guardado antes de bloquear?',
      'A distinção entre dedurar e denunciar se sustentou nos seis casos?',
      'Como denunciar protegendo quem denuncia?'
    ],
    evitar: [
      'Aplicar com o cartão de bolso em branco. Sem os canais reais preenchidos, a aula produz frustração.',
      'Prometer que denunciar é seguro e rápido. As cartas de consequência existem para impedir essa promessa.',
      'Descrever conteúdo de violência sexual em qualquer caso.',
      'Usar caso real da escola ou da cidade.',
      'Deixar o caso 5 de fora por ser desconfortável. É justamente o que testa a distinção.'
    ]
  },

  protecao: 'Tema sensível de alto risco. Condição de aplicação: canais reais e locais levantados pelo professor antes da aula, combinação prévia com a orientação educacional e profissional disponível no dia e nas horas seguintes. Todos os casos são fictícios e sóbrios, sem descrição de conteúdo de violência sexual. Nenhum relato pessoal é solicitado. É provável que esta atividade provoque procura de um adulto depois, e o preparo existe para isso: acolher em particular no mesmo dia e acionar o canal adequado, sem exposição da turma.',

  evidencia: 'O grupo direciona corretamente os casos que extrapolam a escola, identifica que o canal da plataforma pode falhar sem recurso, e conclui a aula com o cartão de bolso preenchido com canais reais e locais.'
}

);
