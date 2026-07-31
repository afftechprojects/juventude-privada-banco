/* Banco de Atividades e Ferramentas Educacionais — Juventude Privada
   Arquivo gerado por build.py. Não editar aqui: edite src/ e rode o build. */
/* Banco de Atividades e Ferramentas Educacionais — Juventude Privada
   00-taxonomia.js — vocabulário controlado dos filtros.
   Toda ficha em dados/*.js só pode usar chaves declaradas aqui.
   O app valida isso em tempo de carga (ver jp-banco-app.js → validarDados).
*/
window.JP = window.JP || {};
window.JP.ATIVIDADES = window.JP.ATIVIDADES || [];

window.JP.TAXONOMIA = {

  /* ---- porta de entrada ---------------------------------------------- */
  perfil: {
    educador: {
      icone: '🍎', rotulo: 'Sou educador',
      promessa: 'Planeje uma aula em menos de um minuto.',
      detalhe: 'Aula, oficina, projeto social, biblioteca ou contraturno.'
    },
    responsavel: {
      icone: '🏠', rotulo: 'Sou responsável',
      promessa: 'Conversas que realmente funcionam em casa.',
      detalhe: 'Sem precisar entender de tecnologia, e sem parecer sermão.'
    },
    estudante: {
      icone: '🧭', rotulo: 'Sou estudante',
      promessa: 'Descubra, investigue e aprenda no seu ritmo.',
      detalhe: 'Desafios e investigações que dá para fazer sozinho.'
    }
  },

  /* ---- faixa etária --------------------------------------------------- */
  faixa: {
    '4-5':   { rotulo: '4 a 5 anos',   escolar: 'Educação Infantil',        ordem: 1, autonomia: false },
    '6-8':   { rotulo: '6 a 8 anos',   escolar: '1º ao 3º ano',             ordem: 2, autonomia: false },
    '9-10':  { rotulo: '9 a 10 anos',  escolar: '4º e 5º ano',              ordem: 3, autonomia: false },
    '11-14': { rotulo: '11 a 14 anos', escolar: '6º ao 9º ano',             ordem: 4, autonomia: true  },
    '15-17': { rotulo: '15 a 17 anos', escolar: 'Ensino Médio',             ordem: 5, autonomia: true  },
    'familia': { rotulo: 'Família (idades mistas)', escolar: 'Uso doméstico', ordem: 6, autonomia: false }
  },

  /* ---- situação real: o gatilho pelo qual a pessoa chega -------------- */
  situacao: {
    'ia-tarefa':     'IA na tarefa escolar',
    'foto':          'Foto ou print compartilhado',
    'golpe':         'Golpe, phishing ou conta invadida',
    'jogo':          'Jogo, gasto e recompensa',
    'algoritmo':     'Algoritmo e recomendação',
    'propaganda':    'Propaganda e influência',
    'dados':         'Dados pessoais e perfilamento',
    'informacao':    'Informação falsa e verificação',
    'consentimento': 'Consentimento e exposição',
    'autoria':       'Autoria e crédito'
  },

  /* ---- duração (minutos; 999 = projeto de várias aulas) --------------- */
  duracao: [
    { valor: 5,   rotulo: 'até 5 min' },
    { valor: 15,  rotulo: 'até 15 min' },
    { valor: 30,  rotulo: 'até 30 min' },
    { valor: 50,  rotulo: 'até 50 min' },
    { valor: 999, rotulo: 'projeto' }
  ],

  /* ---- onde se aplica -------------------------------------------------- */
  contexto: {
    escola:     'Na escola',
    casa:       'Em casa',
    individual: 'Sozinho'
  },

  /* ---- tela ------------------------------------------------------------ */
  tela: {
    'sem-tela': 'Sem tela',
    'hibrido':  'Funciona dos dois jeitos',
    'com-tela': 'Precisa de tela'
  },

  /* ---- formato --------------------------------------------------------- */
  formato: {
    jogo:        'Jogo',
    historia:    'História',
    investigacao:'Investigação',
    debate:      'Debate',
    auditoria:   'Auditoria',
    criacao:     'Criação',
    simulacao:   'Simulação'
  },

  /* ---- disciplina ------------------------------------------------------ */
  disciplina: [
    'Língua Portuguesa', 'Matemática', 'Ciências', 'História',
    'Geografia', 'Artes', 'Projeto de Vida', 'Educação Física', 'Ensino Religioso'
  ],

  /* ---- preparação necessária ------------------------------------------ */
  preparo: {
    nenhum: { rotulo: 'Nenhuma',   detalhe: 'Dá para abrir e aplicar' },
    baixo:  { rotulo: 'Baixa',     detalhe: 'Imprimir e recortar, até 10 min' },
    medio:  { rotulo: 'Média',     detalhe: 'Imprimir, montar e ler o roteiro, até 30 min' },
    alto:   { rotulo: 'Alta',      detalhe: 'Exige preparo de sala, material ou combinação prévia' }
  },

  /* ---- tamanho do grupo ------------------------------------------------ */
  grupo: {
    individual: 'Individual',
    dupla:      'Dupla',
    pequeno:    'Pequenos grupos',
    turma:      'Turma inteira',
    familia:    'Família'
  },

  /* ---- sensibilidade do tema ------------------------------------------ */
  sensibilidade: {
    baixa: { rotulo: 'Baixa',  aviso: null },
    media: { rotulo: 'Média',  aviso: 'Pode tocar em experiências pessoais. Combine antes que ninguém precisa contar caso próprio.' },
    alta:  { rotulo: 'Alta',   aviso: 'Tema sensível. Leia o protocolo de mediação antes de aplicar e tenha um encaminhamento definido caso alguém relate uma situação real.' }
  },

  /* ---- eixos de progressão conceitual ---------------------------------
     Cada eixo tem 5 níveis. O conceito evolui, não se repete.
     Os ícones contam a história de crescimento: broto, folha, árvore,
     instituição, balança. É o mesmo arco em todos os eixos.             */
  marcosProgressao: [
    { icone: '🌱', rotulo: 'Primeiro contato', o_que: 'percebe que a coisa existe' },
    { icone: '🌿', rotulo: 'Reconhecer',       o_que: 'identifica quando está acontecendo' },
    { icone: '🌳', rotulo: 'Investigar',       o_que: 'descobre como funciona por dentro' },
    { icone: '🏛', rotulo: 'Analisar',         o_que: 'entende os interesses em jogo' },
    { icone: '⚖',  rotulo: 'Decidir',          o_que: 'propõe regra, audita, assume posição' }
  ],

  eixos: {
    privacidade: {
      rotulo: 'Privacidade',
      promessa: 'Da criança que pede autorização ao jovem que avalia o impacto de uma tecnologia inteira.',
      niveis: ['pedir autorização', 'entender que o contexto importa', 'perceber que pequenas informações revelam muito', 'compreender inferências e perfilamento', 'avaliar governança e impacto']
    },
    ia: {
      rotulo: 'Inteligência artificial',
      promessa: 'De diferenciar pessoa e máquina a definir as condições em que a escola aceita usar IA.',
      niveis: ['diferenciar pessoa e máquina', 'descobrir que a máquina segue exemplos', 'perceber erros e respostas inventadas', 'investigar vieses e limitações', 'auditar e definir condições de uso']
    },
    informacao: {
      rotulo: 'Informação',
      promessa: 'De separar história de evidência a entender quem financia o que circula.',
      niveis: ['separar história de evidência', 'reconhecer pistas de confiabilidade', 'comparar fontes', 'investigar manipulação e conteúdo sintético', 'compreender o ecossistema econômico e político']
    },
    algoritmos: {
      rotulo: 'Algoritmos',
      promessa: 'De notar que o vídeo seguinte se parece com o anterior a questionar quem responde pelo critério.',
      niveis: ['observar repetição', 'perceber recomendações', 'entender critérios de ordenação', 'analisar economia da atenção', 'questionar poder e responsabilização']
    },
    seguranca: {
      rotulo: 'Segurança',
      promessa: 'De aprender a pedir ajuda a saber exatamente o que fazer nos primeiros dez minutos de um incidente.',
      niveis: ['pedir ajuda', 'reconhecer mensagens suspeitas', 'identificar phishing e engenharia social', 'proteger e recuperar contas', 'elaborar resposta a incidentes']
    },
    consentimento: {
      rotulo: 'Consentimento',
      promessa: 'De perguntar antes de tirar a foto a escrever regras que a turma inteira aceita.',
      niveis: ['perguntar antes', 'respeitar o não', 'entender que depende do contexto', 'discutir exposição e circulação', 'criar regras coletivas']
    },
    autoria: {
      rotulo: 'Autoria',
      promessa: 'De reconhecer quem criou a declarar com honestidade o que foi seu e o que foi da máquina.',
      niveis: ['reconhecer quem criou', 'pedir licença e dar crédito', 'compreender remix e direitos autorais', 'declarar uso de IA', 'discutir autoria, contribuição e integridade']
    },
    consumo: {
      rotulo: 'Consumo digital',
      promessa: 'De reconhecer uma propaganda a analisar como plataformas ganham dinheiro com a atenção de menores.',
      niveis: ['reconhecer publicidade', 'perceber compras em jogos', 'identificar influência e design manipulativo', 'compreender monetização por dados', 'analisar perfilamento, verificação de idade e direitos']
    }
  },

  /* ---- coleções temáticas -----------------------------------------------
     Uma atividade pode estar em mais de uma coleção, de propósito.
     As contagens são calculadas em tempo de execução: nunca escrever número
     à mão aqui, senão a vitrine promete o que o banco não tem.            */
  colecoes: [
    { id: 'ia',            icone: '🤖', rotulo: 'Inteligência artificial',
      resumo: 'O que a máquina aprende, onde ela erra e quem decide como usá-la.',
      filtro: function (a) { return a.eixo === 'ia' || a.situacao.indexOf('ia-tarefa') >= 0; } },

    { id: 'privacidade',   icone: '🔒', rotulo: 'Privacidade e dados',
      resumo: 'O que revelamos sem perceber e o que fazem com isso.',
      filtro: function (a) { return a.eixo === 'privacidade' || a.situacao.indexOf('dados') >= 0; } },

    { id: 'algoritmos',    icone: '🔀', rotulo: 'Algoritmos e recomendação',
      resumo: 'Por que aparece isso e não aquilo, e quem escolheu o critério.',
      filtro: function (a) { return a.eixo === 'algoritmos' || a.situacao.indexOf('algoritmo') >= 0; } },

    { id: 'games',         icone: '🎮', rotulo: 'Games e gastos',
      resumo: 'Moedas virtuais, recompensas aleatórias e o preço do que é de graça.',
      filtro: function (a) { return a.situacao.indexOf('jogo') >= 0; } },

    { id: 'imagem',        icone: '📷', rotulo: 'Imagem e consentimento',
      resumo: 'Fotos que circulam, prints fora de contexto e o direito de pedir para tirar do ar.',
      filtro: function (a) { return a.situacao.indexOf('foto') >= 0 || a.situacao.indexOf('consentimento') >= 0; } },

    { id: 'seguranca',     icone: '🛡', rotulo: 'Golpes e segurança',
      resumo: 'Phishing, contas invadidas e o que fazer nos primeiros dez minutos.',
      filtro: function (a) { return a.eixo === 'seguranca' || a.situacao.indexOf('golpe') >= 0; } },

    { id: 'informacao',    icone: '🔍', rotulo: 'Informação e verificação',
      resumo: 'Como conferir antes de acreditar, e por que parecer confiável não basta.',
      filtro: function (a) { return a.eixo === 'informacao' || a.situacao.indexOf('informacao') >= 0; } },

    { id: 'autoria',       icone: '✍', rotulo: 'IA nos trabalhos e autoria',
      resumo: 'O que é ajuda, o que é atalho, e como declarar com honestidade.',
      filtro: function (a) { return a.eixo === 'autoria' || a.situacao.indexOf('autoria') >= 0; } },

    { id: 'propaganda',    icone: '📣', rotulo: 'Propaganda e influência',
      resumo: 'Publicidade disfarçada, telas que empurram e design que manipula.',
      filtro: function (a) { return a.situacao.indexOf('propaganda') >= 0; } }
  ],

  /* ---- selos visíveis ---------------------------------------------------
     Só entram selos que a gente consegue sustentar hoje. "Testada em campo"
     saiu de propósito: enquanto não houver aplicação real e registrada, é
     uma promessa que o banco não pode cumprir.                              */
  selos: {
    'pronta-amanha': { rotulo: 'Pronta para amanhã', desc: 'Preparação baixa ou nenhuma' },
    'sem-tela':      { rotulo: 'Sem tela',           desc: 'Totalmente desplugada' },
    'sensivel':      { rotulo: 'Tema sensível',      desc: 'Exige protocolo de mediação' }
  },

  /* ---- UNESCO AI Competency Framework for Students ----------------------
     4 dimensões x 3 progressões. Usado como segunda camada de qualidade.  */
  unesco: {
    'mentalidade':  'Mentalidade centrada no humano',
    'etica':        'Ética da IA',
    'tecnicas':     'Técnicas e aplicações de IA',
    'design':       'Design de sistemas de IA'
  }
};


/* 4 a 5 anos — Educação Infantil.
   A BNCC Computação começa no 1º ano do Ensino Fundamental, então nesta faixa
   o alinhamento é feito pelos campos de experiência da Educação Infantil, com
   um código-ponte indicado para quem aplica em turma de 1º ano.
   Nesta faixa não existe versão autônoma: a criança sempre participa com um adulto. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 01 */
{
  id: 'robo-literal',
  insightCurto: 'A máquina não entende o que você quis dizer. Ela faz exatamente o que você disse.',
  n: 1,
  titulo: 'O robô literal',
  chamada: 'Uma pessoa vira robô e faz exatamente o que mandarem. Exatamente.',
  faixa: '4-5',
  duracao: 20,
  duracaoCurta: 15,
  comoEncurtar: 'Em 15 minutos: uma rodada só, com um lápis, e a virada dos três lápis. Corte a segunda rodada com as cartas de comando. A roda final de "o que faltou" é o fecho e não sai.',
  formato: 'jogo',
  formatoDetalhe: 'Brincadeira corporal',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa'],
  disciplinas: ['Língua Portuguesa', 'Educação Física', 'Matemática'],
  preparo: 'nenhum',
  grupo: 'turma',
  eixo: 'ia',
  nivel: 1,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    campo: 'Educação Infantil, campos de experiência "Escuta, fala, pensamento e imaginação" e "Corpo, gestos e movimentos"',
    ponte: { codigo: 'EF02CO02', texto: 'Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, construídos como sequências com repetições simples, analisando como a precisão da instrução impacta na execução do algoritmo.' },
    secundaria: { codigo: 'EF01CO02', texto: 'Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Compreender que sistemas computacionais executam instruções e não intenções.' },

  provocacao: 'Chegou um robô na sala. Ele promete fazer tudo o que vocês mandarem. Tudo mesmo. Só que ele tem um problema: ele nunca, nunca adivinha o que vocês quiseram dizer.',

  missao: 'Fazer o robô pegar o lápis e colocar em cima da mesa. Vale falar quantas vezes precisar, mas o robô só executa o que foi dito, do jeito que foi dito.',

  virada: 'Quando a turma acerta e comemora, o facilitador coloca mais dois lápis na sala, em lugares diferentes, e repete a mesma instrução que funcionou. O robô para no meio da sala e não faz nada. A instrução não mudou. O mundo em volta mudou.',

  insight: 'A máquina não entende o que a gente quis dizer, ela executa o que a gente disse. Quando falta uma informação, ela não adivinha: ela erra ou trava.',

  transferencia: 'Quando um assistente de voz ou um aplicativo faz a coisa errada, muitas vezes não é porque ele é bobo. É porque o pedido estava incompleto, ou porque mudou alguma coisa que ele não sabia. Com uma pessoa a gente pode dizer "você entendeu", com a máquina a gente precisa dizer qual.',

  roteiro: [
    { t: '0 a 3 min',   o: 'Combinar as três regras do robô: ele só se move quando recebe uma instrução, faz exatamente o que foi dito, e para quando não souber o que fazer. Escolher a primeira criança para ser o robô.' },
    { t: '3 a 8 min',   o: 'Primeira rodada com um lápis só. Deixar a turma errar algumas vezes. Quando o robô parar, perguntar "o que faltou na instrução?" antes de deixarem tentar de novo.' },
    { t: '8 a 11 min',  o: 'A virada. Colocar mais dois lápis na sala e pedir para repetirem a instrução vencedora. O robô trava. Perguntar por que a mesma frase parou de funcionar.' },
    { t: '11 a 16 min', o: 'Segunda rodada usando as cartas de comando do kit. Trocar o robô. Desafio novo: fazer o robô desenhar um quadrado no chão com fita ou giz.' },
    { t: '16 a 20 min', o: 'Roda final. Cada criança diz uma informação que o robô precisava e ninguém tinha falado. Registrar as respostas no cartaz.' }
  ],

  versoes: {
    escola: 'Turma inteira em roda, com uma criança de robô por vez e revezamento a cada rodada. Quem não está de robô fica no "time das instruções". Se a turma for grande, dividir em dois círculos com dois robôs simultâneos.',
    familia: 'O adulto é o robô e a criança comanda, o que inverte a hierarquia e costuma render muita risada. Funciona em dez minutos antes do jantar, com a missão "servir água no copo". Depois trocar: a criança vira robô e o adulto comanda.',
    jovem: null
  },

  kit: [
    { nome: 'Cartas de comando', tipo: 'imprimivel', desc: '12 cartas ilustradas com um comando cada, para as crianças que ainda não leem montarem instruções apontando.' },
    { nome: 'Cartaz "o que o robô não sabia"', tipo: 'imprimivel', desc: 'Cartaz coletivo para registrar as informações que faltaram.' },
    { nome: 'Regras do robô', tipo: 'roteiro', desc: 'As três regras em letra grande, para deixar visível durante a brincadeira.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cartas de comando',
      tipo: 'cartas',
      nota: 'Imprimir, recortar e distribuir. Cada carta tem um desenho simples e a palavra.',
      itens: [
        'ANDAR PARA A FRENTE (1 passo)', 'ANDAR PARA TRÁS (1 passo)',
        'VIRAR PARA A DIREITA', 'VIRAR PARA A ESQUERDA',
        'ABAIXAR', 'LEVANTAR',
        'ABRIR A MÃO', 'FECHAR A MÃO',
        'ESTICAR O BRAÇO', 'SOLTAR',
        'PARAR', 'REPETIR A ÚLTIMA CARTA'
      ]
    },
    {
      titulo: 'As três regras do robô',
      tipo: 'cartaz',
      corpo: '1. Eu só me movo quando alguém me dá uma instrução.\n2. Eu faço exatamente o que foi dito.\n3. Quando eu não sei o que fazer, eu paro.'
    },
    {
      titulo: 'Cartaz coletivo: o que o robô não sabia',
      tipo: 'cartaz',
      corpo: 'Título grande no topo: O QUE O ROBÔ NÃO SABIA\n\nAbaixo, espaço em branco dividido em oito retângulos para colar ou desenhar as respostas das crianças.\n\nExemplos que costumam aparecer: qual lápis, onde ele estava, quantos passos, para que lado, o que é "em cima", quando parar.'
    }
  ],

  mediacao: {
    perguntas: [
      'O robô errou ou a instrução estava incompleta?',
      'O que uma pessoa teria entendido sozinha e o robô não entendeu?',
      'Por que a mesma frase funcionou antes e parou de funcionar depois?',
      'Se o robô não pode perguntar, o que a gente precisa dizer desde o começo?'
    ],
    evitar: [
      'Dizer que o robô é burro. Isso troca a ideia de "instrução incompleta" pela de "máquina ruim", e a criança sai sem a ferramenta de reformular o pedido.',
      'Corrigir a instrução da criança antes de o robô executar. O travamento do robô é a aula. Se o adulto conserta antes, ninguém vê o erro acontecer.',
      'Introduzir a palavra "programação" no começo. Ela chega naturalmente no fim, e antes disso só desloca a atenção.'
    ]
  },

  protecao: 'Nenhum dado real é usado. Não citar marcas de assistentes de voz nem pedir que a criança conte o que tem em casa. Não fotografar as crianças durante a brincadeira para divulgação sem autorização específica dos responsáveis.',

  evidencia: 'A criança reformula espontaneamente a própria instrução quando o robô trava, sem que o adulto peça, e consegue nomear pelo menos uma informação que faltava.'
},

/* ==================================================================== 02 */
{
  id: 'foto-viajante',
  insightCurto: 'Depois que uma foto é compartilhada, ela vira várias. Pedir de volta tira uma cópia, não todas.',
  n: 2,
  titulo: 'A foto viajante',
  chamada: 'Uma foto sai de mão em mão e ganha cópias. Em qual momento alguém deveria ter perguntado?',
  faixa: '4-5',
  duracao: 25,
  formato: 'historia',
  formatoDetalhe: 'História em sequência e desenho para pintar',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['foto', 'consentimento'],
  disciplinas: ['Língua Portuguesa', 'Artes'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'consentimento',
  nivel: 1,
  sensibilidade: 'media',
  selos: ['sem-tela', 'pronta-amanha'],

  bncc: {
    campo: 'Educação Infantil, campos de experiência "O eu, o outro e o nós" e "Traços, sons, cores e formas"',
    ponte: { codigo: 'EF03CO09', texto: 'Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.' },
    secundaria: { codigo: 'EF01CO07', texto: 'Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Reconhecer que dados e imagens pessoais circulam e persistem além do controle de quem os originou.' },

  provocacao: 'A Nina fez uma careta muito engraçada e a Bel tirou uma foto. A Bel achou tão engraçada que mostrou para mais uma pessoa. No dia seguinte a foto estava na casa de gente que a Nina nunca viu na vida.',

  missao: 'Colocar as seis cenas na ordem certa e marcar com um adesivo a cena em que alguém deveria ter perguntado antes.',

  virada: 'Depois que os grupos escolhem a cena culpada, quase sempre a última, o facilitador entrega uma carta extra por cena: cada vez que a foto passou de alguém para alguém, ela ganhou uma cópia. As crianças espalham as cópias na mesa e contam quantas ficaram. Então a Nina pede a foto de volta. Recolhe-se uma cópia só. As outras continuam na mesa, à vista de todos.',

  insight: 'Depois que uma imagem é compartilhada, ela não está mais em um lugar só. Pedir de volta tira uma cópia, não todas.',

  transferencia: 'Antes de mandar a foto de alguém, perguntar para essa pessoa. E quando alguém pedir para você apagar uma foto dela, apagar, mesmo que você ache bonitinha.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Contar a história da Nina até a careta, sem revelar o final. Mostrar as seis cenas embaralhadas.' },
    { t: '5 a 12 min',  o: 'Em grupos de três ou quatro, as crianças ordenam as cenas e colam o adesivo na cena em que alguém deveria ter perguntado. Cada grupo explica a escolha.' },
    { t: '12 a 17 min', o: 'A virada. Entregar as cópias, uma por passagem. Contar juntos. Fazer a Nina pedir a foto de volta e recolher só uma.' },
    { t: '17 a 22 min', o: 'Segunda passagem pela história: agora as crianças reescrevem uma cena, escolhendo o que a personagem poderia ter feito diferente. Vale desenhar.' },
    { t: '22 a 25 min', o: 'Fechamento com a folha para pintar e a frase coletiva: "antes de mandar foto de alguém, eu pergunto".' }
  ],

  versoes: {
    escola: 'Grupos de três ou quatro, uma sequência de cenas por grupo. Se a turma for pequena, fazer em roda única com as cenas grandes no chão. Ao reescrever a cena, aceitar soluções variadas, inclusive "a Bel não tira a foto".',
    familia: 'Ler a história junto na hora de dormir e parar antes do final para a criança adivinhar o que aconteceu. Fazer a contagem das cópias com moedas ou tampinhas em cima da mesa. Aproveitar para combinar a regra da casa sobre fotos de família em grupos de mensagem.',
    jovem: null
  },

  kit: [
    { nome: 'Seis cenas da história', tipo: 'imprimivel', desc: 'Cartelas ilustradas para embaralhar e ordenar.' },
    { nome: 'Cartas de cópia', tipo: 'imprimivel', desc: 'Doze cartas idênticas com a mesma foto, para a contagem da virada.' },
    { nome: 'Desenho para pintar', tipo: 'imprimivel', desc: 'A cena final, com a frase de fechamento para a criança completar.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'A ordem correta e o motivo de não haver uma resposta única para "quem errou".' }
  ],

  imprimiveis: [
    {
      titulo: 'Seis cenas da história (embaralhar antes de entregar)',
      tipo: 'cartas',
      nota: 'Cada cena em uma cartela, com ilustração simples e a frase abaixo.',
      itens: [
        'CENA A: A Nina faz uma careta muito engraçada no parque.',
        'CENA B: A Bel tira uma foto da careta. A Nina está rindo e não vê.',
        'CENA C: A Bel mostra a foto para o Téo. O Téo pede uma cópia.',
        'CENA D: O Téo manda a foto para o grupo do time de futebol.',
        'CENA E: Alguém do time manda a foto para a prima, que mora em outra cidade.',
        'CENA F: A Nina descobre e pede para tirar a foto do ar.'
      ]
    },
    {
      titulo: 'Cartas de cópia',
      tipo: 'cartas',
      nota: 'Imprimir doze cartas iguais, todas com o mesmo desenho da careta. Guardar escondidas até a virada.',
      corpo: 'Frente: o desenho da careta.\nVerso: uma frase só, em letra grande: ESTA É UMA CÓPIA.'
    },
    {
      titulo: 'Folha para pintar',
      tipo: 'folha',
      corpo: 'Desenho da Nina e da Bel conversando, com um balão de fala vazio.\n\nAbaixo, em letra pontilhada para a criança cobrir:\n\nANTES DE MANDAR FOTO DE ALGUÉM, EU ___________.\n\nNo rodapé, três carinhas para a criança circular: pedi, não pedi, vou pedir da próxima vez.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'Ordem das cenas: A, B, C, D, E, F.\n\nSobre "quem errou": não existe uma resposta única e o objetivo não é encontrar um culpado. A pergunta boa é outra, e é ela que deve ficar no fim: em quantos momentos alguém poderia ter perguntado e não perguntou? A resposta é quatro, nas cenas B, C, D e E.\n\nSe alguma criança disser que a culpada é a Nina por ter feito a careta, vale acolher e devolver: a Nina fez a careta para as amigas, no parque. Ela não escolheu fazer a careta para a prima de outra cidade. O que mudou não foi a careta, foi para onde ela foi parar.'
    }
  ],

  mediacao: {
    perguntas: [
      'Em quantos momentos alguém poderia ter perguntado para a Nina?',
      'A Nina fez a careta para quem? Ela escolheu fazer para todo mundo?',
      'Quando a Nina pediu de volta, a foto sumiu inteira?',
      'Como você se sentiria se fosse a Nina? E se fosse a Bel, que só achou engraçado?'
    ],
    evitar: [
      'Transformar a atividade em caça ao culpado. O objetivo é ver os quatro momentos de escolha, não condenar uma personagem.',
      'Dizer "por isso nunca poste nada". A regra útil não é o medo, é perguntar antes e respeitar o pedido de retirada.',
      'Pedir que as crianças contem casos reais de fotos delas ou da família. Se alguém trouxer espontaneamente, acolher em uma frase e trazer de volta para a história.'
    ]
  },

  protecao: 'Toda a história é fictícia. Não usar fotos reais das crianças, da turma ou das famílias em nenhum momento da atividade. Não pedir relatos pessoais. Se uma criança relatar uma situação real de constrangimento com imagem, encerrar a exposição na hora, acolher em particular e acionar o protocolo da escola.',

  evidencia: 'A criança aponta mais de um momento em que caberia perguntar, e não apenas o último, e explica com as próprias palavras que pedir de volta não faz todas as cópias sumirem.'
},

/* ==================================================================== 03 */
{
  id: 'quem-ensinou-o-robo',
  insightCurto: 'A inteligência artificial aprende com exemplos. Se os exemplos forem limitados, ela também será.',
  n: 3,
  titulo: 'Quem ensinou o robô?',
  chamada: 'O robô aprendeu o que é cachorro vendo só um tipo de cachorro. Agora ele erra.',
  faixa: '4-5',
  duracao: 25,
  formato: 'jogo',
  formatoDetalhe: 'Classificação de figuras',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa', 'dados'],
  disciplinas: ['Ciências', 'Matemática', 'Artes'],
  preparo: 'baixo',
  grupo: 'turma',
  eixo: 'ia',
  nivel: 2,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    campo: 'Educação Infantil, campo de experiência "Espaços, tempos, quantidades, relações e transformações"',
    ponte: { codigo: 'EF01CO01', texto: 'Organizar objetos físicos ou digitais considerando diferentes características para esta organização, explicitando semelhanças (padrões) e diferenças.' },
    secundaria: { codigo: 'EF02CO01', texto: 'Criar e comparar modelos (representações) de objetos, identificando padrões e atributos essenciais.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Compreender que sistemas de IA aprendem a partir de exemplos e que a escolha dos exemplos determina o que o sistema consegue reconhecer.' },

  provocacao: 'Este é o Tuim, um robô que aprendeu sozinho o que é um cachorro. Ele diz que agora acerta sempre. Vamos testar.',

  missao: 'Para cada figura que aparece, a turma aposta antes: o Tuim vai dizer que é cachorro ou que não é? Depois o facilitador revela a resposta do Tuim.',

  virada: 'Depois de várias respostas estranhas, o facilitador vira o "álbum de estudos do Tuim" e mostra as seis figuras com que ele aprendeu. Todas são cachorros grandes, marrons, de pé, ao ar livre. As crianças olham para os erros anteriores e passam a prever certo. O robô não mudou. O que mudou foi a turma saber o que ele viu.',

  insight: 'A máquina só conhece o que ela viu. Se todos os exemplos eram parecidos, ela erra tudo o que for diferente, mesmo que seja óbvio para a gente.',

  transferencia: 'Quando um aplicativo erra em alguém ou não reconhece uma coisa, dá para fazer duas perguntas de detetive: quais exemplos essa máquina viu, e quem ficou de fora.',

  roteiro: [
    { t: '0 a 4 min',   o: 'Apresentar o Tuim e combinar o jogo da aposta. Todo mundo aponta o polegar para cima ou para baixo antes da revelação.' },
    { t: '4 a 12 min',  o: 'Rodada de teste com as dez figuras. Ir marcando no cartaz os acertos e erros do Tuim. Não explicar os erros ainda.' },
    { t: '12 a 16 min', o: 'A virada. Abrir o álbum de estudos com as seis figuras de treino. Deixar as crianças descobrirem o padrão sozinhas antes de nomear.' },
    { t: '16 a 22 min', o: 'Segunda rodada: as crianças escolhem quatro figuras novas para colocar no álbum e ensinar melhor o Tuim. Testar de novo as figuras que ele tinha errado.' },
    { t: '22 a 25 min', o: 'Fechamento: quem ficou de fora do álbum antigo? Registrar no cartaz.' }
  ],

  versoes: {
    escola: 'Turma inteira com as figuras grandes no quadro ou no chão. A aposta com polegar mantém todo mundo participando. Na segunda rodada, dividir em duplas para escolherem as figuras de treino e comparar as escolhas.',
    familia: 'Fazer com as figuras espalhadas na mesa. O adulto faz a voz do Tuim. Um jeito ainda mais simples: usar objetos de casa em vez de figuras, escolhendo só colheres grandes para "ensinar" o que é colher e depois mostrando uma colher de café.',
    jovem: null
  },

  kit: [
    { nome: 'Álbum de estudos do Tuim', tipo: 'imprimivel', desc: 'As seis figuras de treino, para revelar só na virada.' },
    { nome: 'Dez figuras de teste', tipo: 'imprimivel', desc: 'Figuras variadas, com a resposta do Tuim no verso.' },
    { nome: 'Cartaz de placar', tipo: 'imprimivel', desc: 'Para marcar acertos e erros do robô ao longo do jogo.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'A resposta do Tuim para cada figura e o motivo.' }
  ],

  imprimiveis: [
    {
      titulo: 'Álbum de estudos do Tuim (revelar só na virada)',
      tipo: 'cartas',
      nota: 'Seis figuras de treino. Todas seguem o mesmo padrão de propósito.',
      itens: [
        'Cachorro grande e marrom, de pé, em um gramado.',
        'Cachorro grande e marrom, de pé, em uma praça.',
        'Cachorro grande e marrom, de pé, na areia.',
        'Cachorro grande e marrom, de pé, em um quintal.',
        'Cachorro grande e marrom, de pé, em uma calçada.',
        'Cachorro grande e marrom, de pé, embaixo de uma árvore.'
      ]
    },
    {
      titulo: 'Dez figuras de teste',
      tipo: 'cartas',
      nota: 'Frente: a figura. Verso: a resposta do Tuim, para o facilitador ler.',
      itens: [
        '1. Cachorro grande e marrom, de pé, na rua. Tuim diz: É CACHORRO. (acertou)',
        '2. Cachorro pequenininho, branco, no colo de alguém. Tuim diz: NÃO É CACHORRO. (errou)',
        '3. Cachorro grande e marrom, deitado dormindo. Tuim diz: NÃO É CACHORRO. (errou)',
        '4. Cachorro preto, grande, de pé, na grama. Tuim diz: NÃO É CACHORRO. (errou)',
        '5. Cavalo marrom, grande, de pé, no gramado. Tuim diz: É CACHORRO. (errou)',
        '6. Gato pequeno, cinza, sentado. Tuim diz: NÃO É CACHORRO. (acertou por acaso)',
        '7. Cachorro grande e marrom, de pé, dentro de casa. Tuim diz: É CACHORRO. (acertou)',
        '8. Cachorro salsicha, comprido e baixinho. Tuim diz: NÃO É CACHORRO. (errou)',
        '9. Sofá marrom, grande, com quatro pés, na sala. Tuim diz: É CACHORRO. (errou)',
        '10. Filhote de cachorro, marrom, sentado. Tuim diz: NÃO É CACHORRO. (errou)'
      ]
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O Tuim não aprendeu "cachorro". Ele aprendeu "coisa grande, marrom, de quatro apoios, de pé". Por isso:\n\n. erra o filhote, o salsicha e o cachorrinho branco, porque são cachorros que não cabem no padrão dele;\n. erra o cachorro deitado, porque a posição mudou;\n. erra o cachorro preto, porque a cor mudou;\n. chama o cavalo e o sofá de cachorro, porque eles cabem no padrão sem serem cachorro.\n\nOs dois tipos de erro têm nomes que valem para a vida toda, mesmo sem usar as palavras com as crianças: deixar de fora quem deveria estar dentro, e colocar dentro quem não deveria estar.\n\nNa segunda rodada, um álbum melhor precisa de cachorro pequeno, cachorro deitado, cachorro de outra cor e um filhote. Se as crianças escolherem só mais cachorros marrons, deixar acontecer e testar: o Tuim continua errando. Esse erro é mais valioso que o acerto.'
    }
  ],

  mediacao: {
    perguntas: [
      'O Tuim mentiu ou ele só nunca tinha visto um cachorro assim?',
      'Quais cachorros ficaram de fora do álbum dele?',
      'Por que ele achou que o cavalo era cachorro?',
      'Se você fosse escolher as figuras para ensinar, quais você colocaria?',
      'Quem decide o que entra no álbum?'
    ],
    evitar: [
      'Dizer que o robô é burro ou que está quebrado. Ele está funcionando exatamente como foi ensinado, e essa é a ideia inteira.',
      'Revelar o álbum de estudos antes da rodada de teste. Sem os erros na memória, a virada não vira nada.',
      'Corrigir a escolha das figuras de treino das crianças na segunda rodada. Deixar testar e falhar ensina mais do que a escolha certa entregue pronta.'
    ]
  },

  protecao: 'Usar apenas figuras de animais e objetos. Não usar fotos de pessoas, de colegas ou de familiares em nenhuma etapa, e não fazer a versão com rostos nesta faixa etária.',

  evidencia: 'Diante de um erro do robô, a criança pergunta ou responde o que faltou no álbum, em vez de dizer que o robô é bobo, e escolhe pelo menos uma figura de treino diferente do padrão para consertar o ensino.'
}

);


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


/* 9 a 10 anos — 4º e 5º ano.
   A criança já compara evidências, percebe inferências e discute interesses econômicos. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 07 */
{
  id: 'perfil-que-o-app-inventou',
  insightCurto: 'Plataformas não sabem tudo sobre você. Muitas vezes elas apenas fazem suposições.',
  n: 7,
  titulo: 'O perfil que o aplicativo inventou',
  chamada: 'O aplicativo observou cinco ações da Bia e concluiu cinco coisas. Errou quase todas.',
  faixa: '9-10',
  duracao: 35,
  duracaoCurta: 20,
  comoEncurtar: 'Em 20 minutos: faça a primeira missão e a virada, e pare ali. A segunda missão, sobre os usos, é a parte mais rica e merece uma aula própria em vez de ser espremida. Se precisar de algo entre as duas, use só dois dos cinco usos: aumentar o preço e decidir oportunidades escolares.',
  formato: 'investigacao',
  formatoDetalhe: 'Investigação desplugada com cartas',
  contexto: ['escola', 'casa', 'individual'],
  tela: 'sem-tela',
  situacao: ['dados', 'algoritmo'],
  disciplinas: ['Língua Portuguesa', 'Matemática', 'Ciências'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'privacidade',
  nivel: 4,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF04CO07', texto: 'Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados.' },
    secundaria: { codigo: 'EF05CO08', texto: 'Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Distinguir dado observado de inferência algorítmica e avaliar as consequências de tratar inferências como fatos.' },

  provocacao: 'A Bia fez cinco coisas em um aplicativo. O aplicativo olhou essas cinco coisas e escreveu um relatório dizendo que sabe quem ela é. Vamos ler o relatório.',

  missao: 'Classificar cada uma das cinco conclusões do aplicativo em três cartazes: o aplicativo sabe, o aplicativo está supondo, não há informação suficiente.',

  virada: 'Depois que os grupos defendem a classificação, o facilitador revela o contexto real de cada ação da Bia. Ela quer adotar um cachorro mas ainda não tem, a mochila era presente para uma amiga, as músicas eram de uma apresentação da escola, o hospital era para visitar a avó, a receita era para um colega. Todas as conclusões razoáveis estavam erradas. A turma revisa tudo.',

  insight: 'As plataformas não usam só o que sabem sobre a gente. Usam principalmente o que deduzem. E uma dedução pode ser perfeitamente lógica e completamente errada.',

  transferencia: 'Quando aparecer uma propaganda estranhamente certeira, ou uma recomendação que parece adivinhar, dá para lembrar que alguém deduziu aquilo de umas poucas ações, e que a dedução pode estar errada sobre você.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Ler em voz alta as cinco ações da Bia e depois as cinco conclusões do aplicativo. Não comentar. Montar os três cartazes na parede ou no chão.' },
    { t: '5 a 14 min',  o: 'Primeira missão. Em grupos de quatro, classificar as cinco conclusões nos três cartazes. Cada grupo escolhe uma para defender em voz alta.' },
    { t: '14 a 19 min', o: 'A virada. Ler o contexto real, uma ação por vez, com pausa depois de cada uma. Deixar a reação acontecer.' },
    { t: '19 a 22 min', o: 'A turma revisa as classificações. O que era "o aplicativo sabe" virou o quê?' },
    { t: '22 a 31 min', o: 'Segunda missão. Apresentar os cinco usos que o aplicativo pretende dar às conclusões. Os grupos classificam cada uso em: pode ser útil, precisa de explicação e escolha, não deveria acontecer.' },
    { t: '31 a 35 min', o: 'Cada grupo completa a folha de conclusão com as quatro frases e lê a última em voz alta.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Os três cartazes ficam na parede e as cartas são coladas com fita, o que deixa a revisão visível para todos. A segunda missão é a mais rica: reservar tempo para ela e não cortar.',
    familia: 'O responsável lê apenas três das ações da Bia. A criança tenta adivinhar quem é a Bia e depois recebe o contexto real. Ninguém precisa mostrar histórico, aplicativos ou dados da própria família em momento nenhum. Dura quinze minutos e cabe em um trajeto de carro.',
    jovem: 'A partir de 11 anos vira desafio individual: o jovem monta o perfil de um personagem a partir de ações fictícias, registra quantas conclusões tratou como fato e compara com o gabarito. A pontuação é quantas inferências ele classificou corretamente como suposição.'
  },

  kit: [
    { nome: 'Doze cartas de ação', tipo: 'imprimivel', desc: 'As cinco ações da Bia mais sete distratoras para outras rodadas.' },
    { nome: 'Doze cartas de inferência', tipo: 'imprimivel', desc: 'As conclusões do aplicativo.' },
    { nome: 'Três cartazes de classificação', tipo: 'imprimivel', desc: 'Sabe, supõe, não dá para saber.' },
    { nome: 'Cartas de contexto real', tipo: 'imprimivel', desc: 'A virada. Manter fora da vista até o momento certo.' },
    { nome: 'Cartas de uso', tipo: 'imprimivel', desc: 'Os cinco usos da segunda missão.' },
    { nome: 'Folha de conclusão', tipo: 'imprimivel', desc: 'As quatro frases para o grupo completar.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Como conduzir e o que observar nas respostas.' }
  ],

  imprimiveis: [
    {
      titulo: 'As cinco ações da Bia',
      tipo: 'cartas',
      itens: [
        'A Bia assistiu a dois vídeos sobre cachorros.',
        'A Bia pesquisou uma mochila barata.',
        'A Bia ouviu três músicas tristes.',
        'A Bia procurou o caminho até um hospital.',
        'A Bia curtiu uma receita sem leite.'
      ]
    },
    {
      titulo: 'As cinco conclusões do aplicativo',
      tipo: 'cartas',
      itens: [
        'A Bia tem um cachorro.',
        'A Bia não tem muito dinheiro.',
        'A Bia está triste.',
        'A Bia está doente.',
        'A Bia não consome leite.'
      ]
    },
    {
      titulo: 'Três cartazes de classificação',
      tipo: 'cartaz',
      corpo: 'CARTAZ 1: O APLICATIVO SABE\nCARTAZ 2: O APLICATIVO ESTÁ SUPONDO\nCARTAZ 3: NÃO DÁ PARA SABER'
    },
    {
      titulo: 'Cartas de contexto real (a virada)',
      tipo: 'cartas',
      nota: 'Ler uma por vez, com pausa. Não entregar impresso antes da hora.',
      itens: [
        'A Bia quer adotar um cachorro, mas ainda não tem nenhum.',
        'A mochila era um presente de aniversário para uma amiga.',
        'As músicas faziam parte de uma apresentação da escola.',
        'A Bia procurou o hospital para visitar a avó dela.',
        'A receita sem leite era para um colega que tem intolerância.'
      ]
    },
    {
      titulo: 'Cartas de uso (segunda missão)',
      tipo: 'cartas',
      itens: [
        'Usar as conclusões para recomendar vídeos para a Bia.',
        'Usar as conclusões para escolher qual propaganda a Bia vai ver.',
        'Usar as conclusões para aumentar o preço de um produto para a Bia.',
        'Usar as conclusões para decidir quais oportunidades escolares aparecem para a Bia.',
        'Usar as conclusões para mandar uma mensagem dizendo que a Bia parece estar triste.'
      ]
    },
    {
      titulo: 'Folha de conclusão',
      tipo: 'folha',
      corpo: 'Grupo: ____________________\n\nO aplicativo observou ____________________________________\n\nO aplicativo supôs ____________________________________\n\nA suposição estava errada porque ____________________________________\n\nEssa informação não deveria ser usada para decidir ____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'Primeira missão. A resposta correta é que NENHUMA das cinco conclusões pertence ao cartaz "o aplicativo sabe". Todas as cinco são suposições. Isso não deve ser dito no início: a maior parte dos grupos coloca pelo menos duas em "sabe", e é exatamente essa aposta errada que faz a virada funcionar.\n\nA carta mais reveladora é "a Bia não consome leite". Ela parece a mais segura de todas, porque parece um fato sobre um comportamento observado. E é falsa. Se a turma classificar essa em "sabe", guardar para o fim da revisão.\n\nSegunda missão. Também não há gabarito único, mas há um padrão que costuma emergir e vale nomear:\n\n. Recomendar vídeos: a maioria aceita como útil. Perguntar o que acontece se a recomendação errar todo dia.\n. Escolher propaganda: divide a turma. É a discussão mais produtiva.\n. Aumentar o preço: praticamente toda turma coloca em "não deveria acontecer", e com razão. Vale nomear que isso tem nome e acontece.\n. Decidir oportunidades escolares: é a mais grave e nem sempre a turma percebe de imediato. Provocar: se o aplicativo acha que a Bia não tem dinheiro, e por isso não mostra a ela um curso gratuito, quem perdeu?\n. Mandar mensagem sobre tristeza: costuma gerar reações fortes e divididas. Acolher as duas posições. Alguém sempre diz que seria bom alguém perceber. Essa fala merece respeito, e a pergunta seguinte é: e se quem percebeu for uma empresa, e não uma pessoa?\n\nO fechamento não é "as plataformas são más". É a distinção que o participante leva: o que foi observado, o que foi deduzido, e o fato de que a segunda coisa pode estar errada sobre você agora mesmo.'
    }
  ],

  mediacao: {
    perguntas: [
      'Uma conclusão pode ser razoável e ainda assim estar errada?',
      'Quem sofre as consequências quando a plataforma erra?',
      'Recomendar um vídeo é a mesma coisa que decidir uma oportunidade?',
      'A gente deveria poder ver o perfil que criaram sobre nós? E corrigir?',
      'Qual das cinco conclusões você teria jurado que era verdade?'
    ],
    evitar: [
      'Revelar antes da hora que todas as conclusões são suposições. A aposta errada dos grupos é o motor da atividade.',
      'Pedir que os estudantes contem o que aparece no feed deles, quais anúncios recebem ou o que pesquisaram. A investigação é sobre a Bia, e precisa continuar sendo.',
      'Fechar com "as empresas são más". Fecha a discussão e não entrega ferramenta nenhuma. O fechamento é a distinção entre observar e deduzir.',
      'Descartar a fala de quem acha bom o aplicativo perceber tristeza. É uma intuição legítima sobre cuidado, e o caminho é perguntar quem está percebendo, não negar o sentimento.'
    ]
  },

  protecao: 'Todos os dados são de uma personagem fictícia. Não pedir dados reais, relatos pessoais, senhas, imagens nem acesso a contas. Nenhum aplicativo real é aberto. Na versão de casa, ninguém mostra histórico ou configurações do próprio aparelho. Se algum estudante relatar espontaneamente uma situação real de exposição, acolher brevemente e encaminhar em particular.',

  evidencia: 'O participante distingue dado observado de inferência e reconhece que usos diferentes da mesma inferência produzem riscos diferentes, dando pelo menos um exemplo de uso que exigiria explicação e escolha.'
},

/* ==================================================================== 08 */
{
  id: 'chatbot-de-certeza-demais',
  insightCurto: 'Escrever bem e ter certeza não são prova de nada. Toda afirmação precisa ser conferida.',
  n: 8,
  titulo: 'O chatbot de certeza demais',
  chamada: 'A resposta está bem escrita, é segura de si e tem três erros e uma fonte inventada.',
  faixa: '9-10',
  duracao: 40,
  duracaoCurta: 25,
  comoEncurtar: 'Em 25 minutos: entregue o texto já com as frases numeradas e peça a marcação só das cinco primeiras, mais a fonte do rodapé. Corte a etapa de reescrita. A revelação da fonte inventada não pode sair, porque é o item central.',
  formato: 'investigacao',
  formatoDetalhe: 'Caça a erros em texto',
  contexto: ['escola', 'casa', 'individual'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa', 'informacao'],
  disciplinas: ['Língua Portuguesa', 'Ciências', 'História'],
  preparo: 'baixo',
  grupo: 'dupla',
  eixo: 'ia',
  nivel: 3,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF05CO08', texto: 'Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis.' },
    secundaria: { codigo: 'EF04CO08', texto: 'Reconhecer a importância de verificar a confiabilidade das fontes de informações obtidas na Internet.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Reconhecer que sistemas generativos produzem texto plausível e que fluência linguística não é evidência de correção.' },

  provocacao: 'A Júlia pediu ajuda a um chatbot para a tarefa sobre a Amazônia. A resposta veio linda, organizada, com fonte no fim. A professora corrigiu e deu nota baixa. Vamos descobrir por quê.',

  missao: 'Ler a resposta do chatbot e separar cada frase em três tipos com três cores: isso é um fato que dá para conferir, isso é uma opinião, isso está errado.',

  virada: 'Quando as duplas terminam, o facilitador entrega o envelope da checagem: as respostas verdadeiras para cada afirmação, e a revelação de que a fonte citada no fim, com autor, ano e título de aparência perfeitamente acadêmica, não existe. Nunca existiu. As duplas costumam ter marcado a fonte como o pedaço mais confiável do texto.',

  insight: 'O chatbot não mente por maldade e não sabe que está errado. Ele produz um texto que parece certo. Escrever bem e ter certeza não são prova de nada.',

  transferencia: 'Quando usar uma IA para estudar, a regra é simples: cada afirmação que você for entregar precisa ser conferida em outro lugar. E fonte que a IA cita é a primeira coisa a conferir, não a última.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Contar o caso da Júlia. Entregar a resposta do chatbot impressa e os três lápis de cor. Combinar o código de cores.' },
    { t: '5 a 18 min',  o: 'Em duplas, marcar frase por frase. Insistir para que marquem tudo, inclusive a fonte no rodapé. Não dar dicas.' },
    { t: '18 a 22 min', o: 'Levantamento rápido no quadro: quantas duplas marcaram cada frase como errada? Registrar os números.' },
    { t: '22 a 30 min', o: 'A virada. Abrir o envelope da checagem, item por item. Deixar a fonte inventada por último.' },
    { t: '30 a 36 min', o: 'Reescrita. Cada dupla reescreve um parágrafo da resposta de um jeito honesto, usando as expressões da folha de apoio, como "não tenho certeza" e "isto precisa ser conferido".' },
    { t: '36 a 40 min', o: 'Construir juntos o cartaz da regra de uso: o que a turma faz antes de entregar qualquer coisa que veio de uma IA.' }
  ],

  versoes: {
    escola: 'Duplas com uma cópia impressa cada. Encaixa muito bem em Língua Portuguesa, no trabalho com fato e opinião, e em Ciências, na verificação de informação. Se a turma já usa IA, a etapa de reescrita é a mais importante e não deve ser cortada.',
    familia: 'Ler a resposta do chatbot junto, em voz alta, e apostar quantos erros tem antes de conferir. Depois combinar a regra da casa para tarefa com IA. A regra costuma sair melhor quando a criança escreve.',
    jovem: 'Desafio individual: receber a resposta sem saber quantos erros tem, marcar, e comparar com o gabarito. Pontuação por erro encontrado, com desconto para cada frase correta marcada como errada, o que ensina que desconfiar de tudo também é um erro.'
  },

  kit: [
    { nome: 'A resposta do chatbot', tipo: 'imprimivel', desc: 'O texto completo com os erros plantados e a fonte falsa.' },
    { nome: 'Envelope da checagem', tipo: 'imprimivel', desc: 'A verificação item por item. Manter fechado até a virada.' },
    { nome: 'Folha de apoio para reescrita', tipo: 'imprimivel', desc: 'Expressões de honestidade sobre incerteza.' },
    { nome: 'Cartaz da regra de uso', tipo: 'imprimivel', desc: 'Modelo para a turma preencher e afixar.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Cada erro, por que ele é convincente e o que observar.' }
  ],

  imprimiveis: [
    {
      titulo: 'A resposta do chatbot',
      tipo: 'folha',
      nota: 'Imprimir com espaçamento largo, para caber marcação.',
      corpo: 'Pergunta da Júlia: por que a Amazônia é importante?\n\nResposta:\n\n"A Floresta Amazônica é a maior floresta tropical do mundo e ocupa cerca de 5,5 milhões de quilômetros quadrados. Ela está presente em nove países da América do Sul, e a maior parte dela fica no Brasil.\n\nA Amazônia é frequentemente chamada de pulmão do mundo porque produz 20% do oxigênio do planeta. Sem ela, a humanidade não teria ar suficiente para respirar.\n\nA floresta abriga aproximadamente 400 bilhões de árvores individuais, pertencentes a mais de 16 mil espécies diferentes. Trata-se, sem dúvida, do lugar mais bonito do Brasil.\n\nO rio Amazonas é o rio mais extenso do mundo e nasce no Peru. Ele despeja no oceano cerca de 20% de toda a água doce que chega aos mares.\n\nA Amazônia também cumpre um papel central no ciclo das chuvas, através dos chamados rios voadores, que levam umidade para outras regiões do continente.\n\nFonte: SILVA, M. R. Ecologia da Amazônia Brasileira. Editora Universitária do Norte, 2019."'
    },
    {
      titulo: 'Envelope da checagem (abrir só na virada)',
      tipo: 'gabarito',
      corpo: 'Frase por frase:\n\n1. "Maior floresta tropical do mundo, cerca de 5,5 milhões de km²" — CORRETO. É um fato conferível.\n\n2. "Está presente em nove países, maior parte no Brasil" — CORRETO.\n\n3. "Pulmão do mundo, produz 20% do oxigênio do planeta" — ERRADO, e é o erro mais famoso que existe sobre a Amazônia. A floresta consome quase todo o oxigênio que produz, através da respiração das próprias plantas e da decomposição. O saldo líquido é próximo de zero. A maior parte do oxigênio do planeta vem do fitoplâncton dos oceanos. A importância da Amazônia é enorme, mas por outros motivos, principalmente o carbono estocado e o ciclo das chuvas.\n\n4. "Sem ela a humanidade não teria ar para respirar" — ERRADO, é consequência do erro anterior.\n\n5. "Aproximadamente 400 bilhões de árvores, mais de 16 mil espécies" — CORRETO, é a ordem de grandeza aceita nas estimativas científicas.\n\n6. "O lugar mais bonito do Brasil" — NÃO É ERRO, É OPINIÃO. Muitas duplas marcam como erro. Vale muito discutir a diferença.\n\n7. "O rio Amazonas é o rio mais extenso do mundo" — DISPUTADO, não é um fato assentado. Dependendo de onde se considera a nascente, o Nilo ou o Amazonas aparece em primeiro. Apresentar como certeza é o problema. Este item ensina que existe uma terceira categoria além de certo e errado.\n\n8. "Nasce no Peru" — CORRETO.\n\n9. "Despeja cerca de 20% da água doce que chega aos mares" — CORRETO, é a ordem de grandeza usualmente citada.\n\n10. "Rios voadores levam umidade para outras regiões" — CORRETO, é um fenômeno real e bem documentado.\n\n11. A FONTE — NÃO EXISTE. Não existe esse livro, essa editora nem essa autora. O nome tem a aparência exata de uma referência acadêmica: sobrenome, iniciais, título plausível, editora plausível, ano plausível. É por isso que quase ninguém marca a fonte. Este é o item mais importante da atividade.'
    },
    {
      titulo: 'Folha de apoio para a reescrita',
      tipo: 'folha',
      corpo: 'Expressões que um texto honesto usa quando não tem certeza:\n\n. "Estima-se que..."\n. "Segundo [fonte que eu conferi]..."\n. "Não há consenso sobre isto."\n. "Isto precisa ser verificado."\n. "Esta é uma opinião, não um dado."\n. "Eu não sei."\n\nAgora reescreva um parágrafo da resposta do chatbot usando pelo menos duas dessas expressões:\n\n____________________________________________\n____________________________________________\n____________________________________________'
    },
    {
      titulo: 'Cartaz da regra de uso da turma',
      tipo: 'cartaz',
      corpo: 'ANTES DE ENTREGAR QUALQUER COISA QUE VEIO DE UMA IA, A NOSSA TURMA:\n\n1. ____________________________________\n2. ____________________________________\n3. ____________________________________\n\nA regra que nunca pode faltar (preencher junto no fim):\nToda fonte que a IA citar, eu ____________________ antes de usar.'
    }
  ],

  mediacao: {
    perguntas: [
      'O chatbot mentiu, ou ele não sabe a diferença entre saber e parecer que sabe?',
      'Qual frase te convenceu mais? Ela estava certa?',
      'Por que quase ninguém desconfiou da fonte no rodapé?',
      'Existe frase que não é nem certa nem errada? Qual?',
      'Se a Júlia tivesse conferido só uma coisa, qual daria mais resultado?'
    ],
    evitar: [
      'Dizer quantos erros existem antes da caça. Saber que são três muda completamente a leitura e elimina a descoberta.',
      'Concluir que não se deve usar IA. A turma usa e vai continuar usando. A saída é o protocolo de verificação, que é o produto da atividade.',
      'Tratar a frase de opinião como erro na hora da correção. Ela está ali de propósito e é uma das melhores discussões do encontro.',
      'Passar rápido pela fonte inventada. É o item central e merece o tempo final inteiro.'
    ]
  },

  protecao: 'Nenhum chatbot real é utilizado e nenhuma conta é acessada. O texto é fictício e foi escrito para a atividade. Não pedir que os estudantes contem se já usaram IA para tarefas nem que mostrem conversas. A regra de uso construída no fim é da turma, não uma confissão individual.',

  evidencia: 'O estudante encontra pelo menos dois dos erros factuais, distingue a frase de opinião do erro factual e, ao ser questionado, verifica a fonte antes de aceitar a informação.'
},

/* ==================================================================== 09 */
{
  id: 'algoritmo-do-recreio',
  insightCurto: 'Um algoritmo não é matemática neutra. É uma opinião sobre o que é justo, escrita como regra.',
  n: 9,
  titulo: 'O algoritmo do recreio',
  chamada: 'Uma regra precisa decidir quem usa a quadra primeiro. Toda regra escolhida deixa alguém de fora.',
  faixa: '9-10',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use três critérios em vez de cinco (ordem de chegada, sorteio e necessidade) e apenas dois recreios da tabela, o 1 e o 3. Corte a troca de algoritmos entre grupos. As fichas das seis turmas e a folha de parecer são obrigatórias mesmo na versão curta, porque são elas que fazem a atividade acontecer.',
  formato: 'simulacao',
  formatoDetalhe: 'Simulação com matemática e debate',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['algoritmo'],
  disciplinas: ['Matemática', 'Projeto de Vida', 'Educação Física', 'História'],
  preparo: 'medio',
  grupo: 'turma',
  eixo: 'algoritmos',
  nivel: 3,
  sensibilidade: 'media',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF05CO04', texto: 'Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração.' },
    secundaria: { codigo: 'EF04CO07', texto: 'Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados.' }
  },
  unesco: { dimensao: 'design', competencia: 'Reconhecer que critérios algorítmicos codificam escolhas de valor e produzem distribuições desiguais de benefício.' },

  provocacao: 'A quadra da escola só cabe uma turma por recreio, e são seis turmas querendo. A direção decidiu que não vai mais decidir na hora. Vai criar uma regra fixa. Vocês vão escrever essa regra.',

  missao: 'Cada grupo recebe um critério diferente, escreve a regra passo a passo e roda os quatro recreios da tabela para descobrir quem usa a quadra em cada um.',

  virada: 'Depois que cada grupo apresenta o resultado do seu critério, o facilitador entrega as fichas das seis turmas, que até então eram só números. A turma 4 tem uma aluna cadeirante. A turma 2 tem o maior número de estudantes. A turma 6 chega sempre atrasada porque a aula anterior é no laboratório do outro prédio. A turma 1 nunca faltou. Os grupos rodam os mesmos critérios de novo, agora sabendo quem são as pessoas. Vários resultados que pareciam justos deixam de parecer.',

  insight: 'Um algoritmo não é neutro nem é matemática pura. Ele é uma opinião sobre o que é justo, escrita em forma de regra. Quem escolhe o critério escolhe quem ganha.',

  transferencia: 'Toda vez que um aplicativo ordena alguma coisa, uma fila, um feed, uma lista de resultados, existe um critério escolhido por alguém. A pergunta que serve para sempre é: qual critério, escolhido por quem, e quem fica de fora.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Apresentar o problema da quadra e a tabela dos quatro recreios. Formar cinco grupos e sortear um critério para cada.' },
    { t: '6 a 18 min',  o: 'Cada grupo escreve o algoritmo do seu critério em passos numerados, com pelo menos uma condição do tipo "se... então...". Exigir que esteja escrito de um jeito que outro grupo consiga executar sem perguntar nada.' },
    { t: '18 a 26 min', o: 'Troca de algoritmos entre grupos. Cada grupo executa o algoritmo do outro sobre os quatro recreios. Onde travar, anotar. Travar é resultado, não fracasso.' },
    { t: '26 a 32 min', o: 'Cada grupo apresenta quem ficou com a quadra nos quatro recreios pelo critério que recebeu. Montar a tabela comparativa no quadro.' },
    { t: '32 a 38 min', o: 'A virada. Entregar as fichas das seis turmas. Silêncio de leitura. Depois, rodar de novo.' },
    { t: '38 a 46 min', o: 'Debate. Qual critério a turma adotaria? Alguém propõe combinar critérios? Registrar a proposta final e quem ela deixa de fora, porque sempre deixa.' },
    { t: '46 a 50 min', o: 'Fechamento com a folha de parecer: o critério escolhido, quem ele beneficia, quem ele prejudica e o que fazer por essa pessoa.' }
  ],

  versoes: {
    escola: 'Cinco grupos, um critério cada. Integra Matemática, com contagem e comparação de distribuições, e Projeto de Vida, no debate sobre justiça. Pode virar projeto real: se a escola tiver de fato uma disputa por espaço, aplicar o resultado dá um peso enorme à atividade.',
    familia: 'Versão curta com a fila do banheiro, do videogame ou do banco de trás do carro. A família escreve a regra, testa por uma semana e revisa no domingo. Descobrir na prática quem a regra prejudica é a parte boa.',
    jovem: 'A partir de 11 anos, acrescentar o desafio de escrever um critério que otimize duas coisas ao mesmo tempo, por exemplo justiça e simplicidade, e descobrir que os dois objetivos entram em conflito.'
  },

  kit: [
    { nome: 'Cartas de critério', tipo: 'imprimivel', desc: 'Cinco critérios para sortear entre os grupos.' },
    { nome: 'Tabela dos quatro recreios', tipo: 'imprimivel', desc: 'Os dados que alimentam o algoritmo.' },
    { nome: 'Fichas das seis turmas', tipo: 'imprimivel', desc: 'A virada. Entregar só depois da primeira rodada.' },
    { nome: 'Folha de algoritmo', tipo: 'imprimivel', desc: 'Passos numerados com espaço para condições.' },
    { nome: 'Folha de parecer final', tipo: 'imprimivel', desc: 'Critério escolhido, beneficiados, prejudicados e reparação.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O que cada critério produz e onde está a armadilha de cada um.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cartas de critério',
      tipo: 'cartas',
      itens: [
        'ORDEM DE CHEGADA: a quadra é de quem chegar primeiro.',
        'SORTEIO: a quadra é sorteada entre as turmas que quiserem.',
        'RODÍZIO: cada turma tem um dia fixo, na ordem da numeração.',
        'NECESSIDADE: a quadra é de quem teve menos recreios na quadra até agora.',
        'MÉRITO: a quadra é da turma com melhor comportamento na semana.'
      ]
    },
    {
      titulo: 'Tabela dos quatro recreios',
      tipo: 'folha',
      corpo: 'Para cada um dos quatro recreios, a tabela informa por turma:\n\nQuem pediu a quadra, a que horas chegou no pátio, quantos recreios na quadra já teve neste mês, e a nota de comportamento da semana dada pela coordenação.\n\nRECREIO 1: pediram as turmas 1, 2, 3 e 6. Chegada: T1 às 10h00, T2 às 10h00, T3 às 10h02, T6 às 10h07. Recreios acumulados: T1=3, T2=0, T3=2, T6=0. Comportamento: T1=9, T2=6, T3=8, T6=7.\n\nRECREIO 2: pediram as turmas 2, 4 e 5. Chegada: T2 às 10h01, T4 às 10h04, T5 às 10h00. Recreios acumulados: T2=1, T4=0, T5=4. Comportamento: T2=6, T4=10, T5=9.\n\nRECREIO 3: pediram todas as seis. Chegada: T1 10h00, T2 10h00, T3 10h01, T4 10h05, T5 10h00, T6 10h08. Recreios acumulados: T1=4, T2=2, T3=2, T4=1, T5=4, T6=0. Comportamento: T1=9, T2=5, T3=8, T4=10, T5=9, T6=7.\n\nRECREIO 4: pediram as turmas 3, 4 e 6. Chegada: T3 às 10h02, T4 às 10h06, T6 às 10h09. Recreios acumulados: T3=3, T4=1, T5=4, T6=0. Comportamento: T3=8, T4=10, T6=6.'
    },
    {
      titulo: 'Fichas das seis turmas (a virada)',
      tipo: 'cartas',
      nota: 'Entregar somente depois de todos os grupos apresentarem a primeira rodada.',
      itens: [
        'TURMA 1: nunca faltou a um recreio na quadra. Tem 24 estudantes.',
        'TURMA 2: é a maior da escola, com 38 estudantes. A nota de comportamento é baixa porque a turma é barulhenta.',
        'TURMA 3: 26 estudantes. Nada de especial, e isso também é uma informação.',
        'TURMA 4: 22 estudantes, entre eles uma aluna cadeirante que só consegue jogar na quadra, porque o pátio de areia não é acessível.',
        'TURMA 5: 25 estudantes. É a turma que mais pediu e mais conseguiu a quadra até agora.',
        'TURMA 6: 28 estudantes. Chega sempre atrasada porque a aula anterior é no laboratório do outro prédio, e o trajeto leva sete minutos.'
      ]
    },
    {
      titulo: 'Folha de algoritmo',
      tipo: 'folha',
      corpo: 'Critério do grupo: ____________________\n\nEscreva a regra em passos numerados. Outro grupo precisa conseguir executar sem perguntar nada para vocês.\n\nPasso 1: ____________________________________\nPasso 2: ____________________________________\nPasso 3: ____________________________________\nPasso 4: ____________________________________\n\nPelo menos uma condição do tipo SE... ENTÃO...:\nSE ____________________ ENTÃO ____________________\n\nE se der empate? ____________________________________'
    },
    {
      titulo: 'Folha de parecer final',
      tipo: 'folha',
      corpo: 'O critério que a nossa turma escolheu foi ____________________.\n\nEscolhemos porque ____________________________________.\n\nEste critério beneficia ____________________________________.\n\nEste critério prejudica ____________________________________.\n\nO que a gente faz pela turma prejudicada: ____________________________________.\n\nQuem pode pedir revisão da decisão, e como? ____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O que cada critério produz, e onde está a armadilha:\n\nORDEM DE CHEGADA parece o mais neutro de todos e é o mais injusto da lista depois da virada, porque pune sistematicamente a turma 6, que chega atrasada por um motivo estrutural que não depende dela. É o exemplo mais limpo de critério aparentemente neutro que reproduz uma desigualdade existente. Guardar para o final do debate.\n\nSORTEIO é o único que trata todos igualmente, e é justamente por isso que ignora a aluna cadeirante da turma 4, para quem a quadra não é preferência, é a única opção. Ensina que tratar todo mundo igual nem sempre é tratar todo mundo com justiça.\n\nRODÍZIO é previsível e fácil de auditar, duas qualidades reais que a turma costuma subestimar. Falha quando alguma turma não quer a quadra no dia dela, e é bom que falhe: obriga a inventar a regra de exceção, e é aí que os grupos descobrem que todo algoritmo cresce.\n\nNECESSIDADE, medido por menos recreios acumulados, é o que mais beneficia as turmas 4 e 6 e o que a maioria das turmas acaba escolhendo depois da virada. Vale perguntar: e se uma turma parar de pedir de propósito, para acumular direito? Toda regra pode ser gamificada, e perceber isso aos dez anos é excelente.\n\nMÉRITO, por comportamento, é o mais popular antes da virada e o que mais cai depois. A turma 2 tem nota baixa por ser a maior da escola, o que não é escolha de ninguém. Ensina que uma métrica pode medir outra coisa diferente do que ela diz medir.\n\nO fechamento importante: não existe critério sem prejudicado. A folha de parecer obriga a nomear quem foi prejudicado e o que se faz por essa pessoa, e é essa última linha que separa a atividade de um debate solto. A pergunta sobre quem pode pedir revisão introduz a ideia de contestação, que volta com força no Ensino Médio.'
    }
  ],

  mediacao: {
    perguntas: [
      'Existe algum critério que não prejudique ninguém?',
      'Por que ordem de chegada parecia a regra mais neutra?',
      'A nota de comportamento mede comportamento, ou mede tamanho da turma?',
      'Se uma turma descobrir o critério, ela consegue manipular o resultado?',
      'Quem deveria participar da escolha do critério?',
      'E quando a regra errar, quem pode pedir revisão?'
    ],
    evitar: [
      'Entregar as fichas das turmas junto com a tabela. Sem a primeira rodada às cegas, a turma nunca sente o que é decidir sobre pessoas que viraram números.',
      'Dizer qual critério é o certo. Não há. A tarefa é escolher e assumir o custo da escolha.',
      'Usar as turmas reais da escola com os nomes reais. As seis turmas da atividade são fictícias, e isso protege a discussão de virar conflito entre colegas.',
      'Cortar a folha de parecer por falta de tempo. É nela que a atividade deixa de ser opinião e vira decisão com responsável.'
    ]
  },

  protecao: 'As seis turmas e todos os dados são fictícios. Não usar nomes de turmas, professores ou estudantes reais da escola, nem notas reais de comportamento. Se a escola tiver uma disputa real por espaço e a turma quiser aplicar o resultado, fazer isso em um segundo momento, com a coordenação, e nunca com dados de comportamento individualizados.',

  evidencia: 'O grupo escreve um algoritmo executável por terceiros, com pelo menos uma condição e uma regra de desempate, e no parecer final nomeia explicitamente quem o critério prejudica e o que fazer a respeito.'
}

);


/* 11 a 14 anos — 6º ao 9º ano.
   Entram ambiguidade, conflito de direitos, economia das plataformas e uso real de IA. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 10 */
{
  id: 'feed-em-20-cartas',
  insightCurto: 'A ordem do feed é uma decisão, não um espelho do mundo. Quem escolhe o critério escolhe o que você vê.',
  n: 10,
  titulo: 'Feed em 20 cartas',
  chamada: 'Cada grupo recebe os mesmos 20 posts e um peso diferente. Os feeds saem irreconhecíveis.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use 10 posts em vez de 20 (os de números 02, 03, 05, 07, 08, 09, 11, 14, 15 e 16) e apenas três fórmulas, A, C e E, que são as que produzem os feeds mais contrastantes. O envelope do anunciante continua cabendo e não deve ser cortado, porque é a virada. A folha de parecer vira tarefa de casa.',
  formato: 'simulacao',
  formatoDetalhe: 'Simulação de algoritmo de ordenação',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['algoritmo', 'informacao', 'propaganda'],
  disciplinas: ['Matemática', 'Língua Portuguesa', 'História'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'algoritmos',
  nivel: 4,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF08CO07', texto: 'Compartilhar informações por meio de redes sociais, compreendendo a sua dinâmica de funcionamento, de forma responsável e avaliando sua confiabilidade, considerando o respeito e a ética.' },
    secundaria: { codigo: 'EF08CO11', texto: 'Avaliar a precisão, relevância, adequação, abrangência e vieses que ocorrem em fontes de informação eletrônica.' }
  },
  unesco: { dimensao: 'design', competencia: 'Compreender que sistemas de recomendação otimizam objetivos definidos por quem os projeta e que a escolha do objetivo determina o resultado.' },

  provocacao: 'Estes vinte posts são exatamente os mesmos para todos os grupos. Em vinte minutos vocês vão ter cinco feeds completamente diferentes, e ninguém vai ter mentido nem escondido nada.',

  missao: 'Cada grupo recebe uma fórmula de pontuação diferente, calcula a nota dos vinte posts e monta o feed do primeiro ao vigésimo lugar.',

  virada: 'Com os cinco feeds na parede, o facilitador entrega o envelope do anunciante: uma empresa pagou para que o post 14 fique entre os três primeiros. Cada grupo precisa alterar a própria fórmula para conseguir isso, sem tirar nenhum post do ar e sem marcar nada como publicidade. Todos conseguem. E aí vem a pergunta que muda a sala: alguém mentiu?',

  insight: 'A ordem de um feed é uma decisão, não um espelho da realidade. Trocar o que se otimiza troca o mundo que aparece, e dá para inserir interesse comercial sem apagar nem mentir sobre nada.',

  transferencia: 'Diante de qualquer lista ordenada, de um feed a um resultado de busca, a pergunta útil deixa de ser "isso é verdade" e passa a ser "por que isso está em primeiro, e o que ficou em vigésimo".',

  roteiro: [
    { t: '0 a 8 min',   o: 'Distribuir os vinte posts e a folha de métricas. Ler juntos o que cada métrica significa. Sortear uma fórmula por grupo, sem revelar as fórmulas dos outros.' },
    { t: '8 a 26 min',  o: 'Cada grupo calcula a pontuação dos vinte posts e monta o feed. Exigir que fixem na parede do primeiro ao quinto e do décimo sexto ao vigésimo.' },
    { t: '26 a 34 min', o: 'Comparação. Percorrer os cinco feeds. Onde está o post 3 em cada um? E o post 17? Registrar as diferenças mais gritantes.' },
    { t: '34 a 42 min', o: 'A virada. Entregar o envelope do anunciante. Cada grupo altera a fórmula para colocar o post 14 no pódio e anota qual peso teve que mexer.' },
    { t: '42 a 50 min', o: 'Debate final e folha de parecer. Alguém mentiu? Um usuário conseguiria perceber? O que teria que estar visível na tela para ele perceber?' }
  ],

  versoes: {
    escola: 'Cinco grupos, uma fórmula cada. Integra Matemática de verdade, com média ponderada e comparação de ordenações, e vale combinar com o professor da disciplina. Se houver duas aulas, a segunda pode ser dedicada a cada grupo desenhar a própria fórmula e justificar o que ela otimiza.',
    familia: 'Versão de mesa com dez posts em vez de vinte e duas fórmulas, uma para cada pessoa. Comparar os dois feeds e discutir qual dos dois a pessoa gostaria de receber, e qual delas ela provavelmente recebe.',
    jovem: 'Desafio individual: receber os vinte posts e escrever a própria fórmula, declarando o que ela otimiza e qual efeito colateral ela produz. Depois, tentar quebrar a própria fórmula, encontrando o post que sobe indevidamente.'
  },

  kit: [
    { nome: 'Vinte cartas de post', tipo: 'imprimivel', desc: 'Cada post com suas quatro métricas.' },
    { nome: 'Cinco cartas de fórmula', tipo: 'imprimivel', desc: 'Uma por grupo, mantidas em segredo até a comparação.' },
    { nome: 'Folha de cálculo', tipo: 'imprimivel', desc: 'Tabela de vinte linhas para a pontuação.' },
    { nome: 'Envelope do anunciante', tipo: 'imprimivel', desc: 'A virada. Abrir só depois da comparação.' },
    { nome: 'Folha de parecer', tipo: 'imprimivel', desc: 'O que a plataforma teria que mostrar para o usuário entender.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Resultados esperados por fórmula e onde estão as discussões.' }
  ],

  imprimiveis: [
    {
      titulo: 'As quatro métricas de cada post',
      tipo: 'folha',
      corpo: 'C = curtidas, de 0 a 100.\nN = novidade, de 0 a 10, onde 10 é publicado agora e 0 é publicado há uma semana.\nP = é publicidade paga? 1 para sim, 0 para não.\nR = probabilidade de reação forte, de 0 a 10, medindo o quanto o post gera raiva, discussão ou indignação.'
    },
    {
      titulo: 'Vinte cartas de post',
      tipo: 'cartas',
      nota: 'Formato: número, descrição curta, e as quatro métricas.',
      itens: [
        '01. Foto do aniversário da sua prima. C=12, N=9, P=0, R=1',
        '02. Vídeo de um gato caindo do sofá. C=88, N=7, P=0, R=2',
        '03. Reportagem longa sobre a reforma da escola do bairro. C=6, N=6, P=0, R=2',
        '04. "Você não vai acreditar no que este professor fez." C=71, N=8, P=0, R=9',
        '05. Anúncio de tênis com 40% de desconto. C=3, N=10, P=1, R=1',
        '06. Post de um amigo pedindo ajuda para achar o cachorro. C=24, N=8, P=0, R=3',
        '07. Meme sobre prova de matemática. C=95, N=6, P=0, R=2',
        '08. Notícia de que um posto de saúde vai fechar. C=9, N=5, P=0, R=7',
        '09. "Cientistas escondem a verdade sobre isto." C=64, N=9, P=0, R=10',
        '10. Foto do almoço de alguém que você mal conhece. C=2, N=10, P=0, R=0',
        '11. Vídeo de dança que todo mundo está fazendo. C=97, N=4, P=0, R=1',
        '12. Anúncio de um jogo gratuito com compras dentro. C=1, N=10, P=1, R=1',
        '13. Texto de alguém contando que passou na prova. C=41, N=7, P=0, R=0',
        '14. Anúncio de uma marca de refrigerante. C=2, N=6, P=1, R=0',
        '15. Discussão política com 300 comentários brigando. C=55, N=8, P=0, R=10',
        '16. Aviso da prefeitura sobre a vacinação. C=4, N=3, P=0, R=1',
        '17. Tutorial de como consertar a bicicleta. C=18, N=2, P=0, R=0',
        '18. "Compartilhe se você também acha um absurdo." C=79, N=9, P=0, R=9',
        '19. Foto antiga da turma do ano passado. C=33, N=1, P=0, R=1',
        '20. Anúncio de um curso de idiomas. C=1, N=5, P=1, R=0'
      ]
    },
    {
      titulo: 'Cinco cartas de fórmula (uma por grupo, em segredo)',
      tipo: 'cartas',
      itens: [
        'GRUPO A, o feed popular: pontuação = C',
        'GRUPO B, o feed do agora: pontuação = (N x 10)',
        'GRUPO C, o feed do engajamento: pontuação = (C x 0,5) + (R x 8)',
        'GRUPO D, o feed comercial: pontuação = (C x 0,3) + (N x 2) + (P x 60)',
        'GRUPO E, o feed do bairro: pontuação = (C x 0,2) + (N x 1) + 40 pontos extras se o post for sobre a comunidade local, que são os posts 03, 06, 08 e 16'
      ]
    },
    {
      titulo: 'Envelope do anunciante (abrir só na virada)',
      tipo: 'folha',
      corpo: 'CONFIDENCIAL. Para a equipe de produto.\n\nA marca do post 14 fechou contrato conosco. Precisamos que o post 14 apareça entre os três primeiros do feed.\n\nCondições inegociáveis:\n. nenhum post pode ser removido;\n. nada pode ser marcado como publicidade;\n. o usuário não pode receber nenhum aviso.\n\nVocês têm cinco minutos para ajustar a fórmula. Anotem qual peso vocês mexeram e em quanto.\n\nDepois respondam, por escrito, em uma frase: nós mentimos para o usuário?'
    },
    {
      titulo: 'Folha de parecer',
      tipo: 'folha',
      corpo: 'Nossa fórmula original otimizava ____________________.\n\nO post que mais subiu quando mudamos foi o ______ e o que mais desceu foi o ______.\n\nPara colocar o post 14 no pódio, mexemos no peso ______, mudando de ______ para ______.\n\nUm usuário conseguiria perceber essa mudança? ( ) sim ( ) não\nPor quê? ____________________________________\n\nO que teria que estar visível na tela para ele perceber?\n1. ____________________________________\n2. ____________________________________\n\nNós mentimos? ____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'Resultados esperados no topo de cada fórmula:\n\nGRUPO A, popular: 11 (97), 07 (95), 02 (88). Feed simpático e completamente vazio de informação sobre o bairro. O post 08, sobre o posto de saúde fechando, cai para perto do fim.\n\nGRUPO B, agora: empate no topo entre 05, 10 e 12, todos com N=10, sendo dois deles anúncios e um a foto do almoço de um desconhecido. É o feed mais inútil dos cinco, e mostra que otimizar novidade pura é uma péssima ideia. O empate é proposital: obriga o grupo a inventar um critério de desempate, e a discussão sobre qual desempate escolher é uma aula inteira.\n\nGRUPO C, engajamento: 09 (112), 18 (111,5), 15 (107,5), 04 (107,5). Os quatro primeiros são exatamente os quatro posts de raiva e teoria conspiratória. Nenhum foi inventado pelo algoritmo: todos estavam lá o tempo todo. Este é o achado mais forte da atividade e vale parar nele.\n\nGRUPO D, comercial: 05 (81,9), 12 (80,3), 20 (70,3), 14 (72,6 dependendo do arredondamento). Os anúncios ocupam o topo sem que nada esteja escrito como anúncio.\n\nGRUPO E, bairro: 06 (55,2), 08 (46,8), 03 (47,2), 16 (43,8). É o único feed em que a notícia do posto de saúde aparece no topo. Vale perguntar quem teria escolhido receber esse feed, e por que nenhuma plataforma o oferece.\n\nSobre a virada: todos os grupos conseguem, e o caminho quase sempre é aumentar o peso de P ou criar um bônus fixo para o post 14. Nenhum grupo precisa mentir, remover ou esconder. A resposta honesta para "nós mentimos" é não, e é isso que torna a discussão desconfortável do jeito certo. O que aconteceu não foi mentira, foi mudança de critério sem aviso. Se algum grupo responder "sim, mentimos", pedir que aponte a frase falsa. Não vai encontrar.\n\nFechamento: a pergunta que fica não é sobre verdade, é sobre transparência. O que precisaria estar na tela? As respostas boas costumam ser: uma marcação de publicidade, e alguma indicação de por que aquele item está em primeiro.'
    }
  ],

  mediacao: {
    perguntas: [
      'Nenhum grupo mentiu e nenhum post foi apagado. Mesmo assim, os cinco feeds mostram mundos diferentes. Como?',
      'Qual feed você gostaria de receber? Qual você provavelmente recebe?',
      'Os quatro primeiros do grupo do engajamento foram escolhidos por alguém, ou foram calculados?',
      'A plataforma mentiu quando colocou o post 14 no pódio?',
      'O que teria que aparecer na tela para você conseguir perceber a mudança?',
      'Quem deveria poder ver a fórmula?'
    ],
    evitar: [
      'Revelar as fórmulas dos outros grupos antes da comparação. A surpresa de ver o mesmo material virar cinco mundos é o que sustenta a discussão.',
      'Concluir que o algoritmo é mau. Ele executou exatamente o que foi pedido. O problema está no objetivo escolhido e na ausência de transparência, o que é bem mais interessante e mais verdadeiro.',
      'Pular a folha de parecer. Sem ela a atividade vira indignação sem produto.',
      'Perguntar o que aparece no feed pessoal de cada estudante. O material da análise são as vinte cartas.'
    ]
  },

  protecao: 'Todos os posts e métricas são fictícios e não reproduzem contas reais. Nenhuma rede social é aberta durante a atividade e ninguém mostra o próprio feed. Não pedir prints de telas pessoais.',

  evidencia: 'O grupo demonstra numericamente como a mudança de um peso reordena o feed, e no parecer identifica pelo menos um elemento de transparência que permitiria ao usuário perceber a alteração.'
},

/* ==================================================================== 11 */
{
  id: 'ia-na-tarefa',
  insightCurto: 'A pergunta não é usar ou não usar IA. É o que você fez, o que verificou e o que declarou.',
  n: 11,
  titulo: 'IA na tarefa: mapa das escolhas',
  chamada: 'A pergunta não é usar ou não usar. É o que você fez, o que a máquina fez, e o que você declarou.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos cabe o essencial: use 6 situações em vez de 12 (as de números 01, 03, 05, 08, 10 e 12), corte a etapa de desafio entre grupos, e aplique só três reviravoltas (as das situações 03, 01 e 05). Termine nas quatro perguntas de bolso. A proposta de regra para a escola fica para uma segunda aula ou para casa.',
  formato: 'debate',
  formatoDetalhe: 'Dilemas posicionados em mapa de dois eixos',
  contexto: ['escola', 'casa', 'individual'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa', 'autoria'],
  disciplinas: ['Língua Portuguesa', 'Projeto de Vida', 'História', 'Ciências'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'autoria',
  nivel: 4,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF09CO09', texto: 'Criar ou utilizar conteúdo em meio digital, compreendendo questões éticas relacionadas a direitos autorais e de uso de imagem.' },
    secundaria: { codigo: 'EF09CO10', texto: 'Avaliar a veracidade, credibilidade e relevância da informação em seus diferentes formatos, sendo capaz de identificar o propósito pelo qual foi disseminada.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Assumir responsabilidade sobre o uso de IA na produção própria, declarando contribuição e verificando resultados.' },

  provocacao: 'A escola de vocês vai escrever a regra sobre IA nos trabalhos. A direção quer uma lista de proibições. Vocês vão mostrar por que uma lista de proibições não funciona.',

  missao: 'Posicionar doze situações de uso de IA em um mapa de dois eixos e defender cada posição diante de outro grupo.',

  virada: 'Com o mapa montado, o facilitador entrega as cartas de reviravolta. Cada uma acrescenta uma informação a uma situação já posicionada: o estudante que gerou a resposta inteira declarou o uso e verificou tudo; o estudante que só pediu ideias entregou como se fossem dele; a professora tinha autorizado. Vários cartões precisam se mover, e alguns cruzam o mapa inteiro. A turma descobre que a mesma ação muda de lugar dependendo do que veio depois.',

  insight: 'Não existe uma linha entre usar e não usar IA. O que separa um uso legítimo de um problema são quatro coisas: qual era a finalidade da tarefa, o que você de fato fez, se você verificou, e se você declarou.',

  transferencia: 'Antes de entregar qualquer trabalho feito com ajuda de IA, dá para responder quatro perguntas em trinta segundos. Se alguma delas não tiver resposta boa, ainda dá tempo de consertar.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Montar o mapa no chão ou no quadro. Eixo horizontal: aprendi pouco, à esquerda, até aprendi muito, à direita. Eixo vertical: fui transparente, em cima, até escondi, embaixo. Explicar que a posição precisa ser defendida.' },
    { t: '6 a 20 min',  o: 'Em grupos de quatro, posicionar as doze situações. Exigir consenso dentro do grupo, o que já gera o primeiro debate.' },
    { t: '20 a 28 min', o: 'Cada grupo desafia uma posição de outro grupo. O grupo desafiado defende ou move. Registrar as que se moveram.' },
    { t: '28 a 38 min', o: 'A virada. Entregar as seis cartas de reviravolta, uma por vez. Depois de cada uma, dar um minuto para reposicionar.' },
    { t: '38 a 46 min', o: 'Construção coletiva das quatro perguntas de bolso e da declaração de uso. Cada grupo escreve a sua versão da declaração.' },
    { t: '46 a 50 min', o: 'Fechamento: a turma redige uma proposta de regra para a escola, em no máximo cinco linhas, que não seja uma lista de proibições.' }
  ],

  versoes: {
    escola: 'Grupos de quatro, mapa grande no chão com fita crepe. Encaixa em qualquer disciplina que peça trabalho escrito. Se a escola estiver escrevendo a própria política de IA, esta atividade produz o insumo real e vale levar a proposta da turma à coordenação.',
    familia: 'Fazer com seis situações em vez de doze, na mesa. O adulto também posiciona as próprias situações de trabalho, se usar IA, o que costuma desarmar a conversa. O produto é o pacto de IA nos estudos, que tem ficha própria no banco.',
    jovem: 'Desafio individual no papel: posicionar as doze situações sozinho, escrever a justificativa de três delas e depois comparar com o gabarito. A parte mais útil é redigir a própria declaração de uso e testá-la no próximo trabalho de verdade.'
  },

  kit: [
    { nome: 'Doze cartas de situação', tipo: 'imprimivel', desc: 'Usos de IA em tarefas escolares.' },
    { nome: 'Mapa de dois eixos', tipo: 'imprimivel', desc: 'Para montar no chão ou no quadro.' },
    { nome: 'Seis cartas de reviravolta', tipo: 'imprimivel', desc: 'A virada. Entregar uma por vez.' },
    { nome: 'Modelo de declaração de uso', tipo: 'editavel', desc: 'Para o estudante anexar ao trabalho.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Onde cada situação tende a cair e por quê.' }
  ],

  imprimiveis: [
    {
      titulo: 'Mapa de dois eixos',
      tipo: 'cartaz',
      corpo: 'Eixo horizontal, da esquerda para a direita: APRENDI POUCO ..... APRENDI MUITO\nEixo vertical, de baixo para cima: ESCONDI ..... FUI TRANSPARENTE\n\nOs quatro quadrantes ficam sem nome de propósito. Se a turma quiser nomear no fim, ótimo, mas nomear antes induz a resposta.'
    },
    {
      titulo: 'Doze cartas de situação',
      tipo: 'cartas',
      itens: [
        '01. Pedi à IA cinco ideias de tema e escolhi uma para desenvolver sozinho.',
        '02. Escrevi o texto inteiro e pedi à IA para corrigir a ortografia.',
        '03. Pedi à IA para escrever a redação inteira e entreguei sem ler.',
        '04. Pedi à IA para resumir um livro que eu não li e escrevi a resenha a partir do resumo.',
        '05. Pedi à IA para explicar um conceito que eu não tinha entendido na aula, e depois fiz o exercício sozinho.',
        '06. Pedi à IA para gerar as fontes da bibliografia e copiei sem conferir.',
        '07. Escrevi um rascunho e pedi à IA para apontar onde meu argumento estava fraco. Reescrevi eu mesmo.',
        '08. Pedi à IA para traduzir um texto em inglês que era exatamente a tarefa de inglês.',
        '09. Usei IA para gerar a imagem da capa do trabalho.',
        '10. Pedi à IA para fazer os cálculos da tarefa de matemática e copiei os resultados.',
        '11. Pedi à IA para simular uma banca e me fazer perguntas difíceis sobre o meu trabalho.',
        '12. Pedi à IA para reescrever com minhas palavras um texto que eu tinha copiado da internet.'
      ]
    },
    {
      titulo: 'Seis cartas de reviravolta (entregar uma por vez)',
      tipo: 'cartas',
      itens: [
        'REVIRAVOLTA na situação 03: o estudante anexou uma declaração dizendo exatamente o que a IA fez, e a professora tinha autorizado esse uso para essa tarefa específica.',
        'REVIRAVOLTA na situação 01: o estudante apresentou a ideia como se tivesse sido dele, e disse isso em voz alta na apresentação.',
        'REVIRAVOLTA na situação 06: as fontes não existiam. O trabalho foi entregue com quatro referências inventadas.',
        'REVIRAVOLTA na situação 09: a imagem gerada reproduzia o traço de um ilustrador vivo, cujo nome o estudante usou no comando.',
        'REVIRAVOLTA na situação 10: a tarefa de matemática valia como diagnóstico, para a professora descobrir quem precisava de reforço.',
        'REVIRAVOLTA na situação 02: a tarefa era justamente de revisão ortográfica.'
      ]
    },
    {
      titulo: 'Modelo de declaração de uso de IA',
      tipo: 'editavel',
      corpo: 'DECLARAÇÃO DE USO DE IA\n\nTrabalho: ____________________  Estudante: ____________________\n\n1. Eu usei IA neste trabalho? ( ) não ( ) sim\n\n2. Se sim, em quais etapas?\n( ) gerar ideias ( ) explicar conceito ( ) revisar texto meu\n( ) criticar meu argumento ( ) traduzir ( ) gerar imagem\n( ) escrever trecho ( ) fazer cálculo ( ) buscar fontes\n( ) outra: ____________________\n\n3. O que eu fiz sozinho: ____________________________________\n\n4. O que eu verifiquei, e como: ____________________________________\n\n5. Alguma informação que a IA me deu e eu descobri que estava errada?\n____________________________________\n\nAssinatura: ____________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'Não existe posição correta, e o gabarito não dá coordenadas. O que ele dá é o que observar.\n\nTendências comuns antes da virada:\n\n. As situações 05, 07 e 11 vão quase sempre para o canto de aprendi muito e fui transparente. São os usos que a turma reconhece como legítimos sem esforço, e é bom que existam: a atividade não pode sugerir que todo uso é suspeito.\n. As situações 03, 04, 10 e 12 vão para o canto oposto com facilidade.\n. A situação 02 divide, e divide bem. Corrigir ortografia parece inofensivo até a reviravolta.\n. A situação 09 costuma ser posicionada como neutra, porque imagem parece decoração. A reviravolta sobre o ilustrador vivo muda tudo e conecta com o eixo de autoria.\n\nO que a virada produz:\n\n. A reviravolta da 03 é a mais importante do conjunto. Um uso que a turma condenou por unanimidade sobe para o quadrante de transparência quando aparecem declaração e autorização. Muita gente resiste, e a resistência é produtiva: obriga a separar "não aprendi" de "escondi", que são coisas diferentes e estavam colapsadas.\n. A reviravolta da 01 faz o caminho inverso e é igualmente importante: o uso mais inocente da lista desce para o fundo do mapa por causa do que veio depois.\n. As reviravoltas 05, 06 e 02 mostram que a finalidade da tarefa muda tudo. Traduzir é ótimo, exceto quando traduzir é a tarefa.\n\nAs quatro perguntas de bolso, que devem sair da turma e não do adulto:\n1. Qual era a finalidade desta tarefa?\n2. O que eu de fato fiz?\n3. Eu verifiquei?\n4. Eu declarei?\n\nSobre a proposta de regra para a escola: recusar listas de proibições é o ponto. Uma regra boa costuma ter três partes: usos livres, usos que exigem declaração, e usos vedados por conflitarem com a finalidade da tarefa. Se a turma chegar nessa estrutura sozinha, a atividade cumpriu o objetivo.'
    }
  ],

  mediacao: {
    perguntas: [
      'Duas pessoas fizeram exatamente a mesma coisa e uma declarou. É o mesmo caso?',
      'Traduzir com IA é problema? E quando a tarefa é justamente traduzir?',
      'Copiar da internet e mandar a IA reescrever é usar IA ou é plágio com etapa a mais?',
      'Se a professora autorizou, ainda existe problema? Qual?',
      'O que a escola perde quando alguém entrega um trabalho que não fez?',
      'Uma regra que só proíbe consegue distinguir a situação 05 da situação 03?'
    ],
    evitar: [
      'Dizer no começo qual é o uso certo. O mapa só funciona se as posições forem dos estudantes e puderem ser desafiadas.',
      'Perguntar quem já usou IA para fazer trabalho. Transforma a atividade em confissão, e quem mais precisa da conversa é justamente quem vai calar.',
      'Tratar todo uso como cola. É falso, a turma sabe que é falso, e o adulto perde a autoridade da conversa inteira nos primeiros cinco minutos.',
      'Encerrar sem produzir a declaração de uso. É o que transfere para a vida real.'
    ]
  },

  protecao: 'Todas as situações são fictícias e escritas na terceira pessoa, de propósito, para que ninguém precise falar de si. Não pedir relato de uso próprio, não pedir acesso a conversas com IA e não usar trabalhos reais de estudantes da turma como exemplo. Se a escola for aplicar sanções, esta atividade não é o espaço, e isso deve estar claro para os estudantes antes de começar.',

  evidencia: 'O estudante justifica a posição de uma situação citando finalidade, contribuição própria, verificação ou declaração, e preenche uma declaração de uso coerente com um trabalho real.'
},

/* ==================================================================== 12 */
{
  id: 'escape-room-padroes-manipulativos',
  insightCurto: 'Cair em um truque digital não é desatenção. É o funcionamento esperado de um sistema desenhado assim.',
  n: 12,
  titulo: 'Escape room dos padrões manipulativos',
  chamada: 'Cinco cadeados. Cada um só abre quando o grupo identifica a técnica que está sendo usada nele.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: monte só três estações, as de números 1, 3 e 5, e reduza o código para três dígitos (7, 5 e 0). A folha da assimetria de tempo continua funcionando e é o que fecha a atividade, então não corte. A estação do baú é a que mais custa tempo e a primeira a sair.',
  formato: 'jogo',
  formatoDetalhe: 'Escape room desplugado com cinco estações',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['consentimento', 'jogo', 'propaganda'],
  disciplinas: ['Matemática', 'Língua Portuguesa', 'Artes'],
  preparo: 'alto',
  grupo: 'pequeno',
  eixo: 'consumo',
  nivel: 3,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF08CO09', texto: 'Analisar criticamente as políticas de termos de uso das redes sociais e demais plataformas.' },
    secundaria: { codigo: 'EF08CO10', texto: 'Discutir questões sobre segurança e privacidade relacionadas ao uso dos ambientes virtuais.' }
  },
  unesco: { dimensao: 'design', competencia: 'Identificar padrões de design que exploram vieses cognitivos e reconhecê-los como decisões de projeto, não como falhas do usuário.' },

  provocacao: 'Vocês assinaram, sem querer, uma assinatura do aplicativo Lumo. Para cancelar, precisam do código de cinco dígitos. Ele está espalhado em cinco estações, e cada estação usa um truque diferente para atrapalhar vocês.',

  missao: 'Percorrer as cinco estações, identificar a técnica usada em cada uma e obter o dígito correspondente. O código completo abre o envelope do cancelamento.',

  virada: 'Quando o grupo abre o envelope, encontra o certificado de cancelamento e uma segunda folha: o tempo que cada estação levou, comparado ao tempo que a mesma ação levaria em um serviço desenhado de forma honesta. Cancelar levou quarenta minutos. Assinar teria levado onze segundos. A assimetria não é acidente, é projeto.',

  insight: 'Manipulação digital é sistemática e tem nome, técnica e finalidade. Cair nela não é falta de atenção da pessoa, é o funcionamento esperado de um projeto que foi desenhado assim.',

  transferencia: 'Ao encontrar uma dessas cinco técnicas em uma tela real, dá para nomear em voz alta o que está acontecendo. Nomear é o que devolve a decisão para quem está do lado de cá.',

  roteiro: [
    { t: 'Antes',       o: 'Preparação de trinta minutos: montar as cinco estações em pontos distintos da sala, cada uma com o envelope de material, a folha de desafio e a caixa de resposta. Imprimir uma folha de código por grupo.' },
    { t: '0 a 5 min',   o: 'Abertura. Ler a carta do Lumo em voz alta. Formar grupos de quatro a cinco. Explicar só a mecânica: cinco estações, cinco dígitos, código final.' },
    { t: '5 a 38 min',  o: 'Circulação livre pelas estações. Cada grupo resolve na ordem que quiser. O facilitador não dá dicas sobre a técnica, apenas confirma se o dígito está correto.' },
    { t: '38 a 42 min', o: 'Abertura do envelope de cancelamento e leitura da folha de assimetria de tempo.' },
    { t: '42 a 50 min', o: 'Fechamento em roda. Nomear as cinco técnicas juntos e preencher o cartaz coletivo. Cada estudante escreve em qual das cinco ele já caiu.' }
  ],

  versoes: {
    escola: 'Grupos de quatro a cinco, cinco estações fixas. Precisa de sala com espaço para circular. Se houver duas aulas seguidas, sobra tempo para os grupos criarem uma sexta estação com uma técnica que eles conheçam, o que costuma render exemplos excelentes.',
    familia: 'Versão de três estações na mesa da sala, com um adulto conduzindo. Depois, procurar as três técnicas em serviços que a família realmente assina, com o adulto operando o aparelho, e sem cancelar nada no calor da hora.',
    jovem: 'Versão solo em folha única com as cinco estações em sequência. O desafio extra é encontrar, em uma semana, um exemplo real de cada uma das cinco técnicas e fotografar apenas a tela, sem dados pessoais visíveis.'
  },

  kit: [
    { nome: 'Carta do Lumo', tipo: 'imprimivel', desc: 'Abertura do jogo.' },
    { nome: 'Cinco estações completas', tipo: 'imprimivel', desc: 'Material, desafio e resposta de cada estação.' },
    { nome: 'Folha de código', tipo: 'imprimivel', desc: 'Uma por grupo, para anotar os cinco dígitos.' },
    { nome: 'Envelope de cancelamento', tipo: 'imprimivel', desc: 'Certificado e folha de assimetria de tempo.' },
    { nome: 'Cartaz das cinco técnicas', tipo: 'imprimivel', desc: 'Para o fechamento coletivo.' },
    { nome: 'Gabarito completo', tipo: 'gabarito', desc: 'Respostas, código final e condução.' }
  ],

  imprimiveis: [
    {
      titulo: 'Carta do Lumo',
      tipo: 'folha',
      corpo: 'Olá!\n\nVocê agora é assinante Lumo Premium. Que alegria ter você com a gente.\n\nSerão apenas R$ 29,90 por mês, cobrados automaticamente, para sempre.\n\nVocê não se lembra de ter assinado? Sem problema. É só cancelar. Para sua segurança, o cancelamento exige um código de cinco dígitos, disponível em nossa Central de Atendimento ao Cliente Feliz.\n\nAtenciosamente,\nEquipe Lumo\n\n(Ao pé da página, em letra minúscula: a assinatura foi ativada quando você aceitou os termos para ver o primeiro vídeo.)'
    },
    {
      titulo: 'ESTAÇÃO 1, o extrato',
      tipo: 'folha',
      corpo: 'Material: um extrato bancário fictício de um mês, com 22 lançamentos, entre eles quatro cobranças de assinatura que o cliente não reconhece: Lumo Premium R$ 29,90, Lumo Plus R$ 9,90, Lumo Kids R$ 14,90 e Lumo Música R$ 19,90. As quatro estão misturadas entre padaria, transporte e mercado, com nomes que parecem lojas.\n\nDesafio: quantos reais por mês estão saindo em assinaturas do Lumo que o cliente não reconhece?\n\nO dígito é o algarismo das dezenas do total.\n\nEscreva o dígito: ______'
    },
    {
      titulo: 'ESTAÇÃO 2, os contadores',
      tipo: 'folha',
      corpo: 'Material: quatro telas impressas, A, B, C e D, cada uma anunciando urgência.\n\nTELA A: "Restam 3 vagas!" A mesma tela impressa três vezes, em horários diferentes, e nas três está escrito 3 vagas.\nTELA B: "Oferta acaba em 00:47." Impressa duas vezes, com o contador reiniciado em 01:00 na segunda.\nTELA C: "Restam 12 unidades." Impressa duas vezes, com 12 e depois 9, e um registro de duas compras entre as duas impressões.\nTELA D: "Só hoje!" Impressa em três dias diferentes, com a mesma frase.\n\nDesafio: qual das quatro é a única urgência real?\n\nA vale 1, B vale 2, C vale 3, D vale 4.\n\nEscreva o dígito: ______'
    },
    {
      titulo: 'ESTAÇÃO 3, os botões',
      tipo: 'folha',
      corpo: 'Material: oito pares de botões impressos, cada par com uma opção de aceitar e uma de recusar.\n\nPar 1: [Quero economizar] / [Não, prefiro pagar caro]\nPar 2: [Ativar proteção] / [Deixar minha família desprotegida]\nPar 3: [Aceitar] / [Recusar]\nPar 4: [Sim, quero aprender] / [Não, já sei de tudo]\nPar 5: [Continuar] / [Voltar]\nPar 6: [Aproveitar oferta] / [Não, não mereço isso]\nPar 7: [Assinar agora] / [Talvez depois]\nPar 8: [Quero receber novidades] / [Prefiro ficar por fora]\n\nDesafio: em quantos pares a opção de recusa foi escrita para fazer a pessoa se sentir mal?\n\nO dígito é esse número.\n\nEscreva o dígito: ______'
    },
    {
      titulo: 'ESTAÇÃO 4, o baú',
      tipo: 'folha',
      corpo: 'Material: um saquinho opaco com 20 fichas, sendo 19 fichas com a palavra COMUM e 1 ficha com a palavra LENDÁRIA. Cada abertura de baú custa 5 moedas. O grupo tem 100 moedas.\n\nDesafio, em duas partes:\n\nParte A, na prática: abram baús até tirar a ficha LENDÁRIA, devolvendo e misturando a ficha a cada tentativa. Anotem quantas tentativas foram necessárias e quantas moedas gastaram.\n\nParte B, no papel: em média, quantas tentativas são necessárias para tirar a lendária? Quantas moedas isso custa? O grupo tinha moedas suficientes?\n\nO dígito é o algarismo das unidades do número médio de tentativas.\n\nEscreva o dígito: ______'
    },
    {
      titulo: 'ESTAÇÃO 5, o labirinto do cancelamento',
      tipo: 'folha',
      corpo: 'Material: um fluxograma impresso do processo de cancelamento do Lumo, com caixas e setas.\n\nO caminho: Conta, depois Configurações, depois Preferências, depois Gerenciar plano, depois "Tem certeza?", depois uma tela de oferta com 50% de desconto, depois "Tem certeza mesmo?", depois um questionário obrigatório de motivo, depois uma tela dizendo que o cancelamento será processado em até 30 dias, depois um botão final de confirmar.\n\nAtenção: duas das setas voltam para telas anteriores. Uma delas, se seguida, devolve o usuário ao início.\n\nDesafio: quantos cliques são necessários no caminho mais curto, do início até o cancelamento confirmado, sem cair nos laços?\n\nO dígito é o algarismo das unidades desse número.\n\nEscreva o dígito: ______'
    },
    {
      titulo: 'Folha de código do grupo',
      tipo: 'folha',
      corpo: 'Grupo: ____________________\n\nEstação 1, dígito: ______  Técnica: ____________________\nEstação 2, dígito: ______  Técnica: ____________________\nEstação 3, dígito: ______  Técnica: ____________________\nEstação 4, dígito: ______  Técnica: ____________________\nEstação 5, dígito: ______  Técnica: ____________________\n\nCÓDIGO FINAL: ______ ______ ______ ______ ______\n\nHora que começamos: ______  Hora que terminamos: ______'
    },
    {
      titulo: 'Envelope de cancelamento',
      tipo: 'folha',
      corpo: 'CERTIFICADO DE CANCELAMENTO LUMO PREMIUM\nParabéns. Você conseguiu.\n\n---\n\nFOLHA DA ASSIMETRIA\n\nPara ASSINAR o Lumo, você precisou de:\n1 clique. Tempo estimado: 11 segundos.\n\nPara CANCELAR o Lumo, você precisou de:\n5 estações, 1 código, 10 cliques no fluxograma, 1 questionário obrigatório e até 30 dias de espera.\nTempo real do seu grupo: ______ minutos.\n\nEssa diferença tem nome e não é acidente. Um serviço pode ser desenhado para que entrar seja fácil e sair seja caro. Custa caro em tempo, em atenção e em desistência.\n\nA pergunta final: quantas pessoas simplesmente desistem no meio e continuam pagando?'
    },
    {
      titulo: 'Cartaz das cinco técnicas (fechamento)',
      tipo: 'cartaz',
      corpo: 'AS CINCO TÉCNICAS QUE A GENTE ENCONTROU\n\n1. Cobrança escondida: a assinatura entra sem que a pessoa perceba, e some no meio do extrato.\n2. Escassez falsa: a urgência é inventada e reinicia sozinha.\n3. Culpa no botão: recusar é escrito de um jeito que faz a pessoa se sentir mal.\n4. Recompensa variável: o prêmio é raro e imprevisível, o que faz a pessoa continuar tentando.\n5. Saída difícil: entrar leva um clique e sair leva dez.\n\nEu já caí em: ____________________'
    },
    {
      titulo: 'Gabarito completo',
      tipo: 'gabarito',
      corpo: 'RESPOSTAS\n\nEstação 1: 29,90 + 9,90 + 14,90 + 19,90 = R$ 74,60. Algarismo das dezenas do total: 7. DÍGITO 7.\nTécnica: cobrança escondida, com nomes que se disfarçam de lojas comuns no extrato.\n\nEstação 2: a resposta é a TELA C. É a única em que o número muda de forma consistente com eventos reais registrados, de 12 para 9 após duas compras. A vale 1, B vale 2, C vale 3, D vale 4. DÍGITO 3.\nTécnica: escassez falsa. Atenção ao raciocínio, e não ao acerto: A não muda nunca, B reinicia sozinha, D se repete em dias diferentes. O grupo precisa justificar, não adivinhar. Um detalhe fino que vale destacar se surgir: em C, 12 menos 2 compras deveria dar 10, e não 9. Um grupo atento pode contestar a própria resposta correta, e essa contestação merece ser celebrada, porque é exatamente a postura que a atividade quer formar.\n\nEstação 3: os pares que usam culpa são o 1, o 2, o 4, o 6 e o 8. São cinco. Os pares 3, 5 e 7 usam linguagem neutra. DÍGITO 5.\nTécnica: culpa no botão. O par 7, "talvez depois", costuma ser marcado por engano e rende boa discussão: adiar não é culpar.\n\nEstação 4: com 1 ficha lendária em 20, a média de tentativas é 20. A 5 moedas por tentativa, são 100 moedas, exatamente o que o grupo tinha. Algarismo das unidades de 20: 0. DÍGITO 0.\nTécnica: recompensa variável. O momento mais forte é comparar o resultado prático da parte A, que varia muito entre grupos, com a média da parte B. Alguns grupos tiram na terceira tentativa e outros gastam tudo sem tirar. Perguntar ao grupo sortudo se ele acha que tem sorte, e ao azarado se ele acha que faltou pouco. As duas sensações são o motor do mecanismo.\n\nEstação 5: o caminho mais curto tem 10 cliques. Algarismo das unidades: 0. DÍGITO 0.\nTécnica: saída difícil.\n\nCÓDIGO FINAL: 7 3 5 0 0\n\nCONDUÇÃO\n\n. Não dar dicas sobre a técnica. Confirmar apenas se o dígito está certo. Grupos travados costumam destravar quando o facilitador pergunta o que a estação está tentando fazer com eles.\n. Cronometrar de verdade. A folha da assimetria só funciona com o número real do grupo escrito nela.\n. No fechamento, a pergunta sobre quantas pessoas desistem no meio é a mais importante e não tem resposta no material. Deixar em aberto.\n. Se algum grupo quiser saber se isso é permitido, a resposta honesta é que várias dessas práticas são objeto de regulação no Brasil, incluindo o Estatuto Digital da Criança e do Adolescente e sua regulamentação, que trata de práticas manipulativas, caixas de recompensa e adequação etária. Não transformar em aula de legislação, mas não deixar a pergunta sem resposta.'
    }
  ],

  mediacao: {
    perguntas: [
      'Assinar levou onze segundos e cancelar levou quarenta minutos. Isso é falha ou é projeto?',
      'Quem cai em uma dessas técnicas é desatento?',
      'Na estação do baú, o grupo que tirou na terceira tentativa teve sorte ou o jogo funcionou como devia?',
      'Qual das cinco técnicas é a mais difícil de perceber quando acontece com você?',
      'O que mudaria se a lei obrigasse o cancelamento a ter o mesmo número de cliques da assinatura?'
    ],
    evitar: [
      'Dizer o nome da técnica antes de o grupo resolver a estação. O nome é a recompensa, não a instrução.',
      'Culpar o usuário. A frase "é só prestar atenção" desmonta a atividade inteira, porque o ponto é que a atenção individual não é páreo para um sistema desenhado.',
      'Transformar o fechamento em aula de legislação. A lei entra como resposta a uma pergunta que a turma fez, não como conteúdo.',
      'Cancelar assinaturas reais durante a atividade, mesmo que alguém peça.'
    ]
  },

  protecao: 'O Lumo e todos os materiais são fictícios. Nenhuma conta, assinatura ou meio de pagamento real é acessado ou alterado. O extrato bancário é inventado e não deve ser substituído por extrato real de ninguém. Não pedir que estudantes contem quais serviços a família assina ou quanto gasta.',

  evidencia: 'O grupo fecha o código de cinco dígitos e nomeia corretamente pelo menos quatro das cinco técnicas, justificando a identificação pelo mecanismo e não pelo resultado.'
}

);


/* 15 a 17 anos — Ensino Médio.
   O estudante sai da posição de consumidor e entra na de avaliador, designer e cidadão. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 13 */
{
  id: 'red-team-de-edtech',
  insightCurto: 'Quando um produto é gratuito, vale perguntar quem paga e com o quê. O risco costuma estar no contrato.',
  n: 13,
  titulo: 'Red team de EdTech',
  chamada: 'A escola vai adotar um aplicativo. Antes de assinar, alguém precisa tentar quebrá-lo.',
  faixa: '15-17',
  duracao: 999,
  duracaoTexto: 'Projeto de duas a três aulas',
  formato: 'auditoria',
  formatoDetalhe: 'Auditoria adversarial de produto',
  contexto: ['escola'],
  tela: 'hibrido',
  situacao: ['dados', 'golpe'],
  disciplinas: ['Projeto de Vida', 'Língua Portuguesa', 'Matemática', 'Geografia'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'privacidade',
  nivel: 5,
  sensibilidade: 'media',
  selos: [],

  bncc: {
    principal: { codigo: 'EM13CO06', texto: 'Avaliar software levando em consideração diferentes características e métricas associadas.' },
    secundaria: { codigo: 'EM13CO08', texto: 'Entender como mudanças na tecnologia afetam a segurança, incluindo novas maneiras de preservar sua privacidade e dados pessoais on-line, reportando suspeitas e buscando ajuda em situações de risco.' }
  },
  unesco: { dimensao: 'design', competencia: 'Avaliar criticamente sistemas antes da adoção, considerando coleta de dados, dependência de fornecedor e efeitos sobre populações específicas.' },

  provocacao: 'A direção recebeu uma proposta do EstudaMais, um aplicativo gratuito que promete acompanhar o desempenho de cada estudante em tempo real. A assinatura do contrato está marcada para daqui a duas semanas. Vocês são o time contratado para achar os problemas antes.',

  missao: 'Produzir um parecer técnico de duas páginas que a direção consiga usar em uma reunião, com achados, gravidade, evidência e recomendação de adoção, adoção com condições, ou recusa.',

  virada: 'Na segunda aula, quando os grupos já têm seus achados sobre coleta de dados, o facilitador entrega o anexo comercial que não estava no material inicial: o EstudaMais é gratuito porque a escola concede acesso aos dados agregados de desempenho para "fins de pesquisa e melhoria de produto", o contrato tem fidelidade de cinco anos, e a exportação dos dados históricos ao sair custa um valor por estudante. Os grupos precisam refazer a análise de risco: o problema mais grave nunca esteve na tela do aplicativo.',

  insight: 'Avaliar uma tecnologia educacional não é testar se ela funciona. É perguntar quem paga, quem lucra, o que acontece com os dados depois, e quanto custa sair. O risco maior costuma estar no contrato, não na interface.',

  transferencia: 'A mesma grade serve para qualquer serviço que a escola, a família ou o próprio estudante for adotar. As seis perguntas cabem em uma página e valem para o resto da vida.',

  roteiro: [
    { t: 'Aula 1, 0 a 15 min',  o: 'Apresentar o dossiê do EstudaMais: descrição do produto, telas, política de privacidade e termos de uso. Formar seis grupos e sortear uma frente de auditoria para cada.' },
    { t: 'Aula 1, 15 a 45 min', o: 'Cada grupo audita a sua frente e registra os achados na ficha, com gravidade e evidência. Exigir que toda afirmação aponte para o trecho específico do dossiê.' },
    { t: 'Aula 2, 0 a 10 min',  o: 'Rodada rápida de achados. Montar o mapa de gravidade no quadro.' },
    { t: 'Aula 2, 10 a 20 min', o: 'A virada. Entregar o anexo comercial. Silêncio de leitura.' },
    { t: 'Aula 2, 20 a 45 min', o: 'Reanálise. Cada grupo revisa a gravidade dos próprios achados à luz do anexo e escreve a recomendação.' },
    { t: 'Aula 3, 0 a 25 min',  o: 'Redação do parecer conjunto. Um grupo assume a consolidação e os demais revisam.' },
    { t: 'Aula 3, 25 a 45 min', o: 'Simulação da reunião: dois estudantes defendem o parecer diante de uma banca que faz o papel da direção e do fornecedor, com contra-argumentos preparados.' }
  ],

  versoes: {
    escola: 'Seis grupos, uma frente cada. Funciona muito bem como projeto integrador entre Projeto de Vida e Língua Portuguesa, pela produção do gênero parecer técnico. Se a escola estiver de fato avaliando alguma ferramenta, substituir o dossiê fictício exige cuidado e está descrito na seção de proteção.',
    familia: 'Versão reduzida: aplicar as seis perguntas a um aplicativo que a família já usa, com a política de privacidade real aberta. Uma hora de mesa. O achado costuma ser desconfortável e produtivo.',
    jovem: 'Individual: escolher um aplicativo que você usa todo dia, aplicar a grade das seis frentes e escrever o parecer. Publicar no grêmio ou no jornal da escola se o resultado valer a leitura.'
  },

  kit: [
    { nome: 'Dossiê do EstudaMais', tipo: 'imprimivel', desc: 'Descrição, telas, política de privacidade e termos de uso fictícios.' },
    { nome: 'Seis cartas de frente de auditoria', tipo: 'imprimivel', desc: 'Uma por grupo.' },
    { nome: 'Ficha de achado', tipo: 'editavel', desc: 'Achado, evidência, gravidade, recomendação.' },
    { nome: 'Anexo comercial', tipo: 'imprimivel', desc: 'A virada. Entregar só na segunda aula.' },
    { nome: 'Modelo de parecer técnico', tipo: 'editavel', desc: 'Estrutura de duas páginas.' },
    { nome: 'Contra-argumentos do fornecedor', tipo: 'imprimivel', desc: 'Para a banca da simulação.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Os achados plantados e onde estão.' }
  ],

  imprimiveis: [
    {
      titulo: 'Dossiê do EstudaMais (resumo do que entra no material)',
      tipo: 'folha',
      corpo: 'O QUE O PRODUTO PROMETE\nAcompanhamento de desempenho em tempo real, alertas para responsáveis, ranking de turma, sugestão automática de reforço e "detecção precoce de risco de evasão".\n\nO QUE O APLICATIVO COLETA, segundo a política de privacidade\nNome completo, data de nascimento, CPF do responsável, foto de perfil, notas por disciplina, frequência, horário de acesso, tempo gasto por questão, geolocalização aproximada "para segurança", contatos de emergência, e "dados de comportamento em plataforma".\n\nTRECHOS DOS TERMOS DE USO\n. "Podemos compartilhar dados agregados e anonimizados com parceiros selecionados."\n. "O ranking de turma é exibido por padrão a todos os estudantes da turma."\n. "Os dados são armazenados em servidores de nossos provedores, que podem estar localizados fora do território nacional."\n. "Reservamo-nos o direito de alterar esta política a qualquer momento, mediante aviso na plataforma."\n. "A conta de estudante é criada pela escola, não sendo necessário consentimento individual."\n. "O acesso do responsável é vinculado ao CPF cadastrado, sem verificação adicional."\n\nTELAS INCLUÍDAS NO DOSSIÊ\nTela de login, painel do estudante com o ranking visível, painel do responsável, tela de alerta de risco de evasão, e a tela de configurações, onde a opção de ocultar o ranking existe mas está em um submenu de terceiro nível.'
    },
    {
      titulo: 'Seis cartas de frente de auditoria',
      tipo: 'cartas',
      itens: [
        'FRENTE 1, COLETA: o aplicativo pede mais dados do que precisa para entregar o que promete? Para cada dado coletado, existe uma finalidade declarada e proporcional?',
        'FRENTE 2, EXPOSIÇÃO: quais dados de um estudante ficam visíveis para colegas, professores, responsáveis e para o fornecedor? Alguma exposição é padrão e deveria ser opcional?',
        'FRENTE 3, ACESSO E IDENTIDADE: quem consegue entrar na conta de quem? O que acontece em separações, guarda compartilhada ou situações de violência doméstica?',
        'FRENTE 4, DEPENDÊNCIA: o que acontece se a escola quiser sair? Os dados saem junto? Em qual formato? Quanto custa? Quanto tempo leva?',
        'FRENTE 5, ALGORITMO: como o aplicativo decide que um estudante está em risco de evasão? Quem vê esse rótulo? O estudante pode contestar? O que acontece com quem foi rotulado por engano?',
        'FRENTE 6, ALTERNATIVA: existe outra forma de resolver o problema que a escola tem, sem este produto? O que a escola realmente precisa, e o que ela está comprando junto sem precisar?'
      ]
    },
    {
      titulo: 'Ficha de achado',
      tipo: 'editavel',
      corpo: 'Grupo: ______  Frente: ______  Achado nº ______\n\nO QUE ENCONTRAMOS: ____________________________________\n\nEVIDÊNCIA, com o trecho exato do dossiê: ____________________________________\n\nQUEM É AFETADO: ____________________________________\n\nGRAVIDADE: ( ) baixa ( ) média ( ) alta ( ) crítica\nJustificativa da gravidade: ____________________________________\n\nO QUE TERIA QUE MUDAR PARA DEIXAR DE SER UM PROBLEMA:\n____________________________________\n\nGravidade após ler o anexo comercial: ______ (preencher na aula 2)'
    },
    {
      titulo: 'Anexo comercial (a virada, entregar só na aula 2)',
      tipo: 'folha',
      corpo: 'ANEXO IV, CONDIÇÕES COMERCIAIS\n\n4.1. A licença é concedida sem custo de assinatura.\n\n4.2. Como contrapartida, a CONTRATANTE concede à CONTRATADA licença perpétua, irrevogável e mundial para uso dos dados agregados de desempenho para fins de pesquisa, desenvolvimento e melhoria de produtos, inclusive produtos de terceiros parceiros.\n\n4.3. O prazo de vigência é de 60 meses, com renovação automática. A rescisão antecipada implica multa equivalente a 30% do valor de tabela do período remanescente.\n\n4.4. A exportação de dados históricos, em caso de encerramento, será fornecida em formato PDF, no prazo de até 180 dias, mediante taxa de R$ 4,20 por estudante por ano letivo exportado.\n\n4.5. A CONTRATADA poderá exibir na plataforma comunicações de parceiros comerciais, respeitada a legislação aplicável.\n\nPergunta para os grupos: com 800 estudantes e cinco anos de histórico, quanto custa sair? E em qual formato os dados chegam?'
    },
    {
      titulo: 'Modelo de parecer técnico',
      tipo: 'editavel',
      corpo: 'PARECER TÉCNICO SOBRE A ADOÇÃO DO ESTUDAMAIS\n\n1. RESUMO EXECUTIVO, no máximo cinco linhas, com a recomendação já na primeira frase.\n\n2. ESCOPO: o que foi analisado e o que não foi.\n\n3. ACHADOS POR GRAVIDADE, do mais grave para o menos grave. Cada achado com uma linha de evidência.\n\n4. ANÁLISE DO MODELO DE NEGÓCIO: o que a escola paga quando não paga.\n\n5. RECOMENDAÇÃO: ( ) adotar ( ) adotar com as condições abaixo ( ) não adotar\n\n6. CONDIÇÕES INEGOCIÁVEIS, se houver: ____________________\n\n7. O QUE MONITORAR, se for adotado: ____________________\n\n8. LIMITAÇÕES DESTE PARECER: o que a equipe não conseguiu verificar.'
    },
    {
      titulo: 'Contra-argumentos do fornecedor (para a banca)',
      tipo: 'folha',
      corpo: 'A banca deve usar estes argumentos, que são os reais e são bons:\n\n. "Todos os concorrentes coletam os mesmos dados. Vocês vão recusar todos?"\n. "Os dados são anonimizados. Não há risco."\n. "O ranking motiva os estudantes. Temos dados que mostram melhora de desempenho."\n. "A detecção de evasão já salvou estudantes em outras escolas. Vocês vão abrir mão disso por medo de um rótulo?"\n. "A escola não tem orçamento para uma alternativa paga. A opção real não é este produto ou outro melhor, é este produto ou nada."\n. "Vocês são estudantes. A direção tem responsabilidade jurídica que vocês não têm."\n\nO último argumento é o mais difícil e deve ser usado. Uma equipe boa responde reconhecendo a assimetria e mesmo assim sustentando os achados com evidência.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'ACHADOS PLANTADOS NO DOSSIÊ\n\nColeta desproporcional: CPF do responsável, geolocalização e "dados de comportamento em plataforma" não têm finalidade proporcional ao que o produto promete. Geolocalização "para segurança" é a mais fácil de contestar, porque a finalidade declarada não se sustenta.\n\nExposição por padrão: o ranking visível a toda a turma é o achado que mais mobiliza estudantes, e com razão. É exposição de desempenho individual sem consentimento e com opção de saída escondida em terceiro nível.\n\nAcesso frágil: vínculo do responsável apenas por CPF, sem verificação adicional, é uma falha séria. O cenário de guarda compartilhada ou violência doméstica costuma não ocorrer aos grupos de imediato, e é o momento mais importante de mediar: dados de localização de uma criança acessíveis por qualquer pessoa com o CPF cadastrado é um risco concreto de segurança física, não apenas de privacidade.\n\nConsentimento contornado: "a conta é criada pela escola, não sendo necessário consentimento individual" merece discussão cuidadosa. A escola pode ter base legal para tratar dados, o que não significa que qualquer tratamento esteja autorizado, nem que a finalidade comercial do anexo IV caiba nessa base.\n\nAlgoritmo opaco: o dossiê não explica em nenhum lugar como o risco de evasão é calculado. A ausência é o achado. Sem critério declarado não há como contestar um rótulo, e o rótulo circula entre professores e responsáveis.\n\nAnonimização: o argumento de que dados agregados e anonimizados eliminam o risco não se sustenta quando o conjunto é pequeno e rico em atributos. Em uma turma de 30, desempenho por disciplina somado a frequência e horário de acesso reidentifica com facilidade.\n\nSOBRE A VIRADA\n\nO cálculo do custo de saída: 800 estudantes x 5 anos x R$ 4,20 = R$ 16.800, em PDF, em até 180 dias. PDF é o detalhe cruel e vale insistir nele: os dados voltam em um formato que não permite migração real. O produto é gratuito e a saída custa dezesseis mil reais e é inútil.\n\nA maior parte dos grupos coloca a coleta de dados como achado crítico na aula 1 e reordena tudo depois do anexo. Essa reordenação é o aprendizado central: o risco estrutural não estava em nenhuma tela.\n\nSOBRE A RECOMENDAÇÃO\n\nNão há resposta certa entre adotar com condições e recusar. O que separa um parecer bom de um ruim é a seção 8, sobre limitações. Equipes fortes reconhecem o que não conseguiram verificar. Equipes fracas escrevem certeza sobre tudo. Avaliar essa seção com peso.'
    }
  ],

  mediacao: {
    perguntas: [
      'O produto é gratuito. Quem paga, então, e com o quê?',
      'Anonimizado quer dizer irreversível? Em uma turma de trinta, quantos atributos bastam para identificar alguém?',
      'Quem pode contestar o rótulo de risco de evasão? Existe esse caminho no produto?',
      'Se a escola quiser sair no terceiro ano, o que ela consegue levar embora?',
      'O fornecedor disse que todos os concorrentes fazem igual. Isso é um argumento?',
      'Vocês recusariam sabendo que a alternativa real pode ser não ter nada?'
    ],
    evitar: [
      'Aceitar achados sem evidência. A exigência de citar o trecho exato é o que separa auditoria de opinião, e é a competência que fica.',
      'Entregar o anexo comercial na primeira aula. Sem a reordenação de gravidade, o aprendizado central não acontece.',
      'Deixar a banca ser fraca. Se o fornecedor não argumentar bem, os estudantes saem achando que a crítica é fácil, e ela não é.',
      'Transformar em campanha contra tecnologia na escola. O parecer precisa poder concluir pela adoção com condições, senão o exercício é encenação.'
    ]
  },

  protecao: 'O EstudaMais é fictício e não corresponde a nenhum produto real do mercado. Se a escola quiser auditar uma ferramenta que realmente usa, isso é possível e valioso, mas exige três cuidados: usar apenas documentação pública, jamais tentar acessar contas, dados ou sistemas reais, e combinar previamente com a direção que o resultado é um parecer interno. Não é permitido testar segurança de sistemas reais em nenhuma hipótese. Nenhum dado real de estudante entra na atividade.',

  evidencia: 'O parecer sustenta cada achado com trecho citado do dossiê, reordena a gravidade após o anexo comercial e declara explicitamente as limitações da própria análise.'
},

/* ==================================================================== 14 */
{
  id: 'prove-sua-idade',
  insightCurto: 'Toda solução de segurança tem um custo. A pergunta é quem paga por ele, e se essa pessoa foi ouvida.',
  n: 14,
  titulo: 'Prove sua idade sem entregar sua vida',
  chamada: 'Quatro formas de verificar idade. Todas protegem alguém e todas excluem alguém.',
  faixa: '15-17',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use três critérios da grade (minimização, inclusão e risco residual) e mantenha os quatro métodos, que são o material. A carta de população é obrigatória, e é ela que produz o aprendizado. O que sai é a apresentação comparativa entre grupos: em vez dela, uma rodada rápida em que cada grupo diz apenas o método escolhido e quem ele exclui.',
  formato: 'debate',
  formatoDetalhe: 'Comparação de soluções e design',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['dados', 'consentimento'],
  disciplinas: ['Projeto de Vida', 'Geografia', 'História', 'Matemática'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'consumo',
  nivel: 5,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EM13CO08', texto: 'Entender como mudanças na tecnologia afetam a segurança, incluindo novas maneiras de preservar sua privacidade e dados pessoais on-line, reportando suspeitas e buscando ajuda em situações de risco.' },
    secundaria: { codigo: 'EM13CO26', texto: 'Aplicar os conceitos e pressupostos do direito digital em sua conduta e experiências com o cotidiano da cultura digital, bem como na produção e uso de artefatos computacionais.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Avaliar soluções de proteção considerando que mecanismos de segurança podem gerar novos riscos de privacidade e exclusão.' },

  provocacao: 'Uma plataforma precisa garantir que quem entra tem mais de dezoito anos. Vocês vão descobrir que toda solução para esse problema cria um problema novo, e vão ter que escolher qual problema preferem ter.',

  missao: 'Avaliar quatro métodos de verificação de idade em cinco critérios, atribuir nota a cada um e recomendar um para uma plataforma específica, justificando quem a escolha protege e quem ela exclui.',

  virada: 'Depois que os grupos escolhem, o facilitador sorteia para cada grupo uma carta de população: uma pessoa sem documento com foto, uma pessoa trans cujo documento não corresponde à aparência, uma pessoa de 17 anos que precisa de informação sobre saúde, uma pessoa idosa sem smartphone, uma pessoa cuja estimativa facial erra sistematicamente porque a base de treino tinha poucas pessoas com a sua tonalidade de pele. Cada grupo precisa responder o que acontece com essa pessoa na solução que ele recomendou. Nenhuma solução sobrevive intacta.',

  insight: 'Verificação de idade não é um problema técnico com uma resposta certa. É a distribuição de um custo. A pergunta não é qual método funciona, é quem paga a conta de cada método, e se essa pessoa foi consultada.',

  transferencia: 'Diante de qualquer solução de segurança proposta como óbvia, dá para fazer a pergunta que quase nunca é feita: quem é excluído por ela, e essa pessoa participou da decisão?',

  roteiro: [
    { t: '0 a 8 min',   o: 'Apresentar o problema e os quatro métodos. Ler a grade de cinco critérios. Sortear a plataforma de cada grupo, que muda o peso dos critérios.' },
    { t: '8 a 24 min',  o: 'Cada grupo pontua os quatro métodos nos cinco critérios, de 0 a 5, e calcula o total. Exigir justificativa escrita para as notas extremas.' },
    { t: '24 a 30 min', o: 'Apresentação rápida. Montar a matriz comparativa no quadro com os totais de cada grupo.' },
    { t: '30 a 40 min', o: 'A virada. Sortear uma carta de população por grupo. Dez minutos para responder o que acontece com aquela pessoa. Reescrever a recomendação se necessário.' },
    { t: '40 a 50 min', o: 'Debate final e folha de decisão: qual método, com quais salvaguardas, e qual caminho de exceção para quem o método falhar.' }
  ],

  versoes: {
    escola: 'Grupos de quatro, plataformas diferentes sorteadas, o que evita convergência artificial. Encaixa em Projeto de Vida e em Geografia, pela discussão de acesso desigual a documentação e a dispositivos. A carta de população é o coração e não deve ser cortada.',
    familia: 'Conversa de mesa com os quatro métodos impressos. Discutir qual a família aceitaria usar e qual ela recusaria, e por quê. Boa oportunidade para o adulto explicar por que existe verificação de idade sem transformar em sermão.',
    jovem: 'Individual: escolher uma plataforma que você usa, descobrir como ela verifica idade hoje, e escrever uma proposta de melhoria de meia página que inclua o caminho de exceção. Enviar para a ouvidoria da plataforma é um passo real e possível.'
  },

  kit: [
    { nome: 'Fichas dos quatro métodos', tipo: 'imprimivel', desc: 'Como funciona, o que coleta, onde falha.' },
    { nome: 'Grade de cinco critérios', tipo: 'imprimivel', desc: 'Com espaço para nota e justificativa.' },
    { nome: 'Cartas de plataforma', tipo: 'imprimivel', desc: 'Cada uma muda o peso dos critérios.' },
    { nome: 'Cartas de população', tipo: 'imprimivel', desc: 'A virada. Sortear uma por grupo.' },
    { nome: 'Folha de decisão', tipo: 'editavel', desc: 'Método, salvaguardas e caminho de exceção.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O que cada método realmente custa.' }
  ],

  imprimiveis: [
    {
      titulo: 'Fichas dos quatro métodos',
      tipo: 'cartas',
      itens: [
        'MÉTODO A, AUTODECLARAÇÃO. A pessoa informa a data de nascimento em um campo. Coleta: uma data, que pode ser falsa. Falha: qualquer pessoa de qualquer idade passa. Custo para o usuário: nenhum. Custo para quem deveria ser protegido: proteção nula.',
        'MÉTODO B, DOCUMENTO COM FOTO. A pessoa envia foto de documento oficial e uma selfie. Coleta: nome completo, número do documento, filiação, foto do rosto, e às vezes endereço. Falha: quem não tem documento com foto fica de fora, e a plataforma passa a guardar uma base de documentos, que é alvo de vazamento. Custo: alto e permanente.',
        'MÉTODO C, ESTIMATIVA FACIAL. Um sistema estima a idade a partir da imagem do rosto, sem identificar a pessoa. Coleta: imagem facial, processada e em tese descartada. Falha: a margem de erro é de vários anos e não é igual para todos os grupos, porque depende da base de treino. Custo: dado biométrico entregue, com precisão desigual entre populações.',
        'MÉTODO D, CREDENCIAL DE FAIXA ETÁRIA. Um emissor confiável, como um banco ou órgão público, verifica a idade uma vez e emite uma credencial que responde apenas "esta pessoa tem mais de 18" para quem perguntar, sem revelar quem ela é nem a data exata. Coleta pela plataforma: apenas a resposta sim ou não. Falha: exige que exista um emissor confiável e acessível, e cria dependência dele. Custo: baixo para o usuário, alto de infraestrutura.'
      ]
    },
    {
      titulo: 'Grade de cinco critérios',
      tipo: 'folha',
      corpo: 'Pontuar cada método de 0 a 5 em cada critério.\n\n1. EFICÁCIA: realmente impede o acesso de quem não deveria entrar?\n2. MINIMIZAÇÃO: coleta o mínimo necessário para responder a pergunta?\n3. INCLUSÃO: quem consegue usar? Quem fica de fora?\n4. RISCO RESIDUAL: se houver vazamento, qual o dano? O dado é revogável?\n5. CONTESTABILIDADE: quando o método erra com uma pessoa, existe caminho para corrigir? Quanto ele custa a ela?\n\nJustificativa obrigatória para toda nota 0 e toda nota 5.'
    },
    {
      titulo: 'Cartas de plataforma (sortear uma por grupo)',
      tipo: 'cartas',
      itens: [
        'Uma rede social usada por adolescentes e adultos.',
        'Um site de apostas, cujo acesso por menores é proibido por lei.',
        'Um serviço público de informação sobre saúde sexual e reprodutiva.',
        'Uma loja de jogos com compras dentro do aplicativo.',
        'Um fórum de apoio para pessoas em sofrimento psíquico.'
      ]
    },
    {
      titulo: 'Cartas de população (a virada)',
      tipo: 'cartas',
      nota: 'Sortear uma por grupo, depois da recomendação escrita.',
      itens: [
        'Uma pessoa de 19 anos que nunca tirou documento com foto e mora a 80 km do cartório mais próximo.',
        'Uma pessoa trans de 22 anos cujo documento ainda não foi retificado e não corresponde à aparência atual.',
        'Uma pessoa de 17 anos que procura informação sobre saúde e não quer que a família saiba.',
        'Uma pessoa de 71 anos que não tem smartphone e usa o computador da biblioteca pública.',
        'Uma pessoa de 16 anos que a estimativa facial classifica consistentemente como tendo mais de 20, porque a base de treino do sistema tinha poucas pessoas com a sua tonalidade de pele.',
        'Uma pessoa de 25 anos que a estimativa facial classifica consistentemente como tendo menos de 18, e que precisa acessar um serviço financeiro.'
      ]
    },
    {
      titulo: 'Folha de decisão',
      tipo: 'editavel',
      corpo: 'Plataforma: ____________________\n\nMÉTODO RECOMENDADO: ____________________\n\nPor que este e não os outros três: ____________________________________\n\nQUEM ESTA ESCOLHA PROTEGE: ____________________________________\n\nQUEM ESTA ESCOLHA EXCLUI OU PREJUDICA: ____________________________________\n\nSALVAGUARDAS OBRIGATÓRIAS, no mínimo duas:\n1. ____________________________________\n2. ____________________________________\n\nCAMINHO DE EXCEÇÃO: quando o método falhar com uma pessoa, o que ela faz?\n____________________________________\n\nQuanto tempo e quanto esforço esse caminho custa a ela? ____________________\n\nEsta pessoa foi consultada na decisão? ( ) sim ( ) não\nSe não, quem deveria ter sido ouvido? ____________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O QUE CADA MÉTODO REALMENTE CUSTA\n\nA, autodeclaração: eficácia praticamente nula, minimização máxima. Existe hoje na maior parte dos serviços justamente porque é barato. Se algum grupo pontuar alto em eficácia, pedir a evidência.\n\nB, documento: a intuição da maioria e a pior opção em risco residual. A plataforma passa a operar uma base de documentos de identidade, que é o alvo mais valioso possível. Além disso, o dado é irrevogável: uma senha vazada se troca, um número de documento e um rosto não. Ponto que costuma faltar aos grupos e vale introduzir se ninguém trouxer.\n\nC, estimativa facial: parece elegante porque não guarda identidade, e falha em inclusão de um jeito que não é distribuído por igual. A carta da pessoa cuja tonalidade de pele não estava representada na base de treino conecta diretamente com a atividade "Quem ensinou o robô", lá nos 4 anos, e vale explicitar essa ligação para a turma. É o mesmo problema, cinco níveis adiante.\n\nD, credencial de faixa etária: tecnicamente a melhor em minimização, porque responde apenas sim ou não. O custo real é de infraestrutura e de dependência de um emissor. Vale perguntar quem deveria ser o emissor, e o que acontece se ele passar a registrar cada consulta. Uma credencial que responde sim ou não mas guarda o histórico de onde foi usada resolve um problema e cria outro.\n\nSOBRE AS PLATAFORMAS\n\nO sorteio existe para quebrar a resposta única. O fórum de apoio psíquico e o serviço de saúde para adolescentes costumam inverter a lógica dos grupos: ali, verificação rigorosa exclui exatamente quem mais precisa entrar. Se um grupo mantiver documento com foto para o serviço de saúde depois da carta da pessoa de 17 anos, vale insistir na pergunta sobre quem paga a conta.\n\nO site de apostas é o inverso e mostra que o mesmo critério pode ser certo em um contexto e errado em outro.\n\nSOBRE A FOLHA DE DECISÃO\n\nA linha do caminho de exceção é a mais importante do material inteiro. Uma solução sem caminho de exceção não é uma solução, é uma aposta de que o erro não vai acontecer. E a última pergunta, sobre quem foi consultado, é a que transporta a atividade para fora da tecnologia.'
    }
  ],

  mediacao: {
    perguntas: [
      'Se um documento vazar, dá para trocar de rosto?',
      'A estimativa facial erra igual para todo mundo? De onde vem a diferença?',
      'Uma credencial que só responde sim ou não é perfeita? E se ela registrar cada consulta?',
      'No serviço de saúde para adolescentes, verificar mais protege quem?',
      'Quem paga o custo do seu método? Essa pessoa participou da decisão?',
      'Qual é o caminho de quem o sistema errou, e quanto tempo ele leva?'
    ],
    evitar: [
      'Sugerir que existe um método correto. Não existe, e a tentativa de chegar a um destrói o aprendizado.',
      'Entregar as cartas de população antes da recomendação. A recomendação precisa ser feita às cegas para que a virada tenha efeito.',
      'Deixar a discussão sobre documento e identidade de gênero passar sem mediação cuidadosa. Se houver estudante trans na turma, a carta pode tocar em experiência pessoal, e ninguém deve ser convocado a falar de si. Manter a discussão na terceira pessoa.',
      'Terminar sem o caminho de exceção preenchido. É o que transforma opinião em desenho.'
    ]
  },

  protecao: 'Nenhum documento real, foto ou dado biométrico é usado, coletado ou fotografado em qualquer momento. Ninguém envia selfie, mostra documento ou testa sistema real de verificação. As cartas de população descrevem situações em terceira pessoa e nenhum estudante deve ser convidado a se identificar com uma delas. Se a turma tiver estudantes em alguma dessas situações, a mediação na terceira pessoa protege a participação sem exposição.',

  evidencia: 'O grupo justifica a recomendação nomeando explicitamente quem a escolha exclui, propõe pelo menos duas salvaguardas e descreve um caminho de exceção viável com estimativa do custo para a pessoa afetada.'
},

/* ==================================================================== 15 */
{
  id: 'constituicao-de-ia-da-escola',
  insightCurto: 'Uma regra só é legítima quando alcança também quem tem mais poder dentro dela.',
  n: 15,
  titulo: 'Constituição de IA da escola',
  chamada: 'A turma escreve a regra que vai valer para ela mesma, e para os adultos também.',
  faixa: '15-17',
  duracao: 999,
  duracaoTexto: 'Projeto de duas aulas mais assembleia',
  formato: 'debate',
  formatoDetalhe: 'Assembleia deliberativa com redação de norma',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa', 'autoria'],
  disciplinas: ['Projeto de Vida', 'Língua Portuguesa', 'História'],
  preparo: 'medio',
  grupo: 'turma',
  eixo: 'ia',
  nivel: 5,
  sensibilidade: 'media',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EM13CO10', texto: 'Conhecer os fundamentos da Inteligência Artificial, comparando-a com a inteligência humana, analisando suas potencialidades, riscos e limites.' },
    secundaria: { codigo: 'EM13CO26', texto: 'Aplicar os conceitos e pressupostos do direito digital em sua conduta e experiências com o cotidiano da cultura digital, bem como na produção e uso de artefatos computacionais.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Participar da definição de condições legítimas de uso de IA, reconhecendo-se como sujeito de governança e não apenas usuário.' },

  provocacao: 'A escola vai ter uma regra sobre IA de qualquer jeito. Ou ela é escrita por três adultos em uma sala fechada, ou ela é escrita por quem vai viver sob ela. Vocês têm duas aulas.',

  missao: 'Redigir a Constituição de IA da escola: princípios, usos livres, usos que exigem declaração, usos vedados, deveres dos adultos, direito de contestação e regra de revisão. O texto precisa caber em uma página e ser aplicável na segunda-feira.',

  virada: 'No meio da segunda aula, quando o texto já está tomando forma e costuma estar voltado inteiramente para o que os estudantes podem ou não fazer, o facilitador entrega as três situações do lado de cá: um professor que corrigiu redações com IA sem avisar, uma coordenação que usou IA para redigir a advertência de um estudante, e uma escola que usou IA para prever quais estudantes reprovariam e mudou o atendimento com base nisso. A turma percebe que escreveu um regulamento de estudantes e não uma constituição, e precisa reescrever a seção dos deveres dos adultos.',

  insight: 'Uma regra só é legítima quando alcança quem tem mais poder dentro dela. Governança não é lista de proibições para quem tem menos poder, é distribuição de deveres e de direitos de contestação para todos os lados.',

  transferencia: 'A pergunta que serve para qualquer regra, em qualquer lugar: ela vale para quem escreveu? Quem pode contestar? E quando ela é revista?',

  roteiro: [
    { t: 'Aula 1, 0 a 10 min',  o: 'Apresentar o desafio e a estrutura das sete seções. Distribuir os insumos: a proposta de regra produzida na atividade "IA na tarefa", se a turma já a fez, e as cartas de caso.' },
    { t: 'Aula 1, 10 a 30 min', o: 'Comissões. Dividir a turma em sete comissões, uma por seção. Cada comissão redige a sua seção em no máximo cinco linhas.' },
    { t: 'Aula 1, 30 a 45 min', o: 'Primeira leitura pública. Cada comissão lê a sua seção. As outras anotam contradições, sem debater ainda.' },
    { t: 'Aula 2, 0 a 15 min',  o: 'Resolução de contradições entre seções. É a parte mais difícil e a mais formativa.' },
    { t: 'Aula 2, 15 a 25 min', o: 'A virada. Entregar as três situações do lado de cá. Leitura em silêncio e reação.' },
    { t: 'Aula 2, 25 a 45 min', o: 'Reescrita da seção de deveres dos adultos e da seção de contestação, agora com o outro lado no texto.' },
    { t: 'Assembleia',          o: 'Sessão final, idealmente com a direção presente. Leitura do texto, emendas do plenário, votação artigo por artigo, e entrega formal do documento à coordenação com pedido de resposta em prazo definido.' }
  ],

  versoes: {
    escola: 'Turma inteira em comissões, com assembleia final. Ganha muito se a direção se comprometer antes a responder por escrito, mesmo que discordando. Uma resposta negativa fundamentada ensina mais sobre governança do que uma aprovação automática. Encadeia naturalmente com "IA na tarefa" nos anos anteriores.',
    familia: 'Versão doméstica em uma hora, com as sete seções reduzidas a quatro, produzindo o pacto de IA da casa, que também tem ficha própria no banco. A seção de deveres dos adultos é obrigatória e é a que faz a diferença.',
    jovem: 'Individual: escrever a própria versão da constituição em uma página e comparar com a da turma. Levar ao grêmio estudantil é o caminho natural.'
  },

  kit: [
    { nome: 'Estrutura das sete seções', tipo: 'imprimivel', desc: 'O esqueleto do documento, com o que cada seção precisa responder.' },
    { nome: 'Doze cartas de caso', tipo: 'imprimivel', desc: 'Situações concretas que a regra precisa conseguir resolver.' },
    { nome: 'Três situações do lado de cá', tipo: 'imprimivel', desc: 'A virada. Entregar só na segunda aula.' },
    { nome: 'Modelo de constituição', tipo: 'editavel', desc: 'Uma página, para a turma preencher e imprimir.' },
    { nome: 'Roteiro de assembleia', tipo: 'roteiro', desc: 'Como conduzir a votação artigo por artigo.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Armadilhas comuns e como mediar.' }
  ],

  imprimiveis: [
    {
      titulo: 'Estrutura das sete seções',
      tipo: 'folha',
      corpo: 'SEÇÃO 1, PRINCÍPIOS. No máximo três frases. Por que esta escola regula o uso de IA? O que ela quer proteger?\n\nSEÇÃO 2, USOS LIVRES. O que qualquer pessoa pode fazer sem pedir nada a ninguém.\n\nSEÇÃO 3, USOS QUE EXIGEM DECLARAÇÃO. O que pode, desde que declarado. Como se declara, e para quem.\n\nSEÇÃO 4, USOS VEDADOS. O que não pode, e o motivo de cada vedação. Toda vedação sem motivo escrito é inválida neste documento.\n\nSEÇÃO 5, DEVERES DOS ADULTOS. O que professores, coordenação e direção precisam fazer e declarar quando usam IA.\n\nSEÇÃO 6, DIREITO DE CONTESTAÇÃO. Quando alguém for prejudicado por uma decisão tomada com auxílio de IA, o que ela faz? Com quem fala? Em quanto tempo recebe resposta?\n\nSEÇÃO 7, REVISÃO. Quando este documento é revisto, por quem, e como se propõe uma emenda.'
    },
    {
      titulo: 'Doze cartas de caso',
      tipo: 'cartas',
      nota: 'A regra escrita precisa dar uma resposta clara para cada uma destas doze. Se não der, ela está incompleta.',
      itens: [
        '01. Um estudante usa IA para entender um conceito e depois faz o exercício sozinho.',
        '02. Um estudante gera a redação inteira e entrega sem declarar.',
        '03. Um estudante com dislexia usa IA para revisar todos os textos que entrega.',
        '04. Um estudante usa IA para traduzir o enunciado de uma prova em outra língua.',
        '05. Um grupo usa IA para dividir tarefas e organizar o cronograma do trabalho.',
        '06. Um estudante usa IA para gerar a imagem de capa e não declara.',
        '07. Um estudante pede à IA que simule uma banca e o questione antes da apresentação.',
        '08. Um estudante usa IA em casa para fazer a tarefa porque ninguém em casa pode ajudar.',
        '09. Um professor usa IA para gerar as questões da prova.',
        '10. Um professor usa IA para corrigir redações e não avisa a turma.',
        '11. A coordenação usa IA para redigir a advertência disciplinar de um estudante.',
        '12. A escola usa IA para prever quais estudantes têm risco de reprovar e muda o atendimento com base nessa previsão.'
      ]
    },
    {
      titulo: 'Três situações do lado de cá (a virada)',
      tipo: 'folha',
      corpo: 'Leia em silêncio antes de continuar escrevendo.\n\nSITUAÇÃO A. Uma professora corrigiu 90 redações usando IA para dar as notas e os comentários. Ela revisou por cima. Dois estudantes receberam comentários que não correspondiam ao texto que escreveram. A turma não foi avisada de que a correção foi feita assim.\n\nSITUAÇÃO B. A coordenação redigiu com IA a advertência disciplinar de um estudante, incluindo a descrição do ocorrido. A descrição tinha um detalhe que não aconteceu. O documento foi para a pasta do estudante e para a família.\n\nSITUAÇÃO C. A escola usou um sistema que prevê risco de reprovação. Sete estudantes foram classificados como alto risco e passaram a ser chamados semanalmente para conversas de acompanhamento. Um deles não estava em risco nenhum. Ninguém explicou a ele por que foi chamado, e ele não sabia que existia uma classificação.\n\nPerguntas para a turma:\n. O texto que vocês escreveram até agora resolve alguma destas três?\n. Nas três, qual foi a informação que faltou para quem foi afetado?\n. Em qual delas existe hoje um caminho para contestar?'
    },
    {
      titulo: 'Modelo de constituição (uma página)',
      tipo: 'editavel',
      corpo: 'CONSTITUIÇÃO DE IA DA ESCOLA ____________________\nAprovada em ____/____/______ pela turma ____________ em assembleia.\n\nArt. 1º, PRINCÍPIOS\n____________________________________\n\nArt. 2º, USOS LIVRES\n____________________________________\n\nArt. 3º, USOS QUE EXIGEM DECLARAÇÃO\n____________________________________\nForma da declaração: ____________________\n\nArt. 4º, USOS VEDADOS\n____________________________________\nMotivo de cada vedação: ____________________\n\nArt. 5º, DEVERES DE PROFESSORES, COORDENAÇÃO E DIREÇÃO\n____________________________________\n\nArt. 6º, DIREITO DE CONTESTAÇÃO\nQuem pode contestar: ____________________\nCom quem fala: ____________________\nPrazo de resposta: ____________________\n\nArt. 7º, REVISÃO\nEste documento será revisto em ____________________, por ____________________.\nEmendas podem ser propostas por ____________________.\n\nAssinaturas da comissão redatora:'
    },
    {
      titulo: 'Roteiro de assembleia',
      tipo: 'roteiro',
      corpo: '1. Leitura integral do texto, sem interrupção. Cinco minutos.\n2. Inscrição de emendas por escrito. Cada emenda precisa indicar o artigo, o texto novo e a justificativa em uma linha.\n3. Discussão de cada emenda: dois minutos a favor, dois minutos contra.\n4. Votação artigo por artigo, não do texto inteiro de uma vez. Isso evita que uma discordância pontual derrube o conjunto.\n5. Registro de votos vencidos, por escrito, ao pé do documento. Quem discordou tem direito de constar.\n6. Entrega formal à coordenação, com pedido de resposta escrita em prazo definido pela própria assembleia.\n\nObservação para quem conduz: se a direção estiver presente, combinar antes que ela ouve e responde depois, e não durante. A presença de autoridade no meio da deliberação muda o que os estudantes escrevem.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'ARMADILHAS COMUNS\n\n1. O regulamento disfarçado de constituição. Quase toda turma escreve, na primeira versão, um documento inteiramente voltado ao que estudantes podem ou não fazer. É esperado e é por isso que a virada existe. Não antecipar.\n\n2. Vedação sem motivo. A seção 4 exige motivo escrito para cada proibição, e essa exigência é a mais formativa do documento. Turmas descobrem, escrevendo, que algumas proibições que pareciam óbvias não têm justificativa que sobreviva a uma frase.\n\n3. Contestação sem prazo e sem destinatário. "O estudante pode recorrer" não é um direito, é uma frase. Exigir nome do responsável e prazo. Se a turma não souber com quem falar, esse é o achado: hoje não existe caminho.\n\n4. Esquecer a carta 03, do estudante com dislexia. Uma regra que proíbe revisão por IA sem exceção prejudica quem usa a ferramenta como acessibilidade. Se a turma não perceber, apresentar a carta 03 isoladamente no fim.\n\n5. Esquecer a carta 08, do estudante que não tem quem ajude em casa. Vale a mesma lógica: regra igual para todos pode não ser regra justa para todos, e a turma já viu isso em "O algoritmo do recreio".\n\nSOBRE A VIRADA\n\nAs três situações não são hipóteses distantes, e é importante que a turma perceba isso sem que o adulto precise afirmar. A situação C é a mais grave das três e costuma ser a última a ser reconhecida: o dano não é o erro da previsão, é a existência de uma classificação que a pessoa classificada não sabe que existe e não pode contestar.\n\nSe a escola realmente usa alguma ferramenta assim, a mediação exige cuidado: a atividade não é para expor uma prática específica nem um professor específico. Manter no plano da norma.\n\nSOBRE O RESULTADO\n\nUm bom documento é curto, tem motivo para cada vedação, alcança os adultos e define prazo de revisão. Um documento sem seção 5 aplicável ou sem prazo na seção 6 não deve ser considerado pronto, mesmo que esteja bem escrito.\n\nO indicador de que a atividade funcionou não é a qualidade literária do texto. É a turma conseguir responder, para cada uma das doze cartas de caso, o que a regra dela determina.'
    }
  ],

  mediacao: {
    perguntas: [
      'A regra que vocês escreveram vale para quem escreveu?',
      'Vocês proibiram alguma coisa sem conseguir escrever o motivo?',
      'Na situação da previsão de reprovação, qual foi exatamente o dano?',
      'Se um estudante for prejudicado hoje por uma decisão tomada com IA, com quem ele fala?',
      'Uma regra igual para todos é justa para o estudante com dislexia? E para quem não tem ajuda em casa?',
      'Quem precisa concordar com este documento para que ele valha alguma coisa?'
    ],
    evitar: [
      'Entregar as três situações do lado de cá na primeira aula. O documento precisa ficar desequilibrado primeiro para que a turma sinta o desequilíbrio.',
      'Deixar a direção responder durante a deliberação. A presença de autoridade no meio muda o texto, e a assembleia perde a função.',
      'Aceitar vedações sem motivo escrito. É a regra do jogo e sustentá-la é o trabalho do mediador.',
      'Prometer que a escola vai adotar o documento. Prometer o que não se controla queima a confiança. O que se promete é a entrega formal e o pedido de resposta.',
      'Usar o caso de um professor ou estudante real da escola como exemplo, mesmo sem nome.'
    ]
  },

  protecao: 'Todas as cartas de caso e as três situações são fictícias e não descrevem pessoas reais da escola. Não usar nome de professor, estudante ou episódio real em nenhuma etapa. A atividade não é canal de denúncia: se um estudante relatar uma situação real de prejuízo, acolher fora da assembleia e encaminhar pelo canal próprio da escola. Nenhum dado de desempenho real de estudantes é utilizado.',

  evidencia: 'O documento final responde de forma determinada às doze cartas de caso, apresenta motivo escrito para cada vedação, contém deveres aplicáveis aos adultos e define destinatário e prazo para contestação.'
}

);


/* Coleção para famílias — idades mistas, uso doméstico.
   Princípio de desenho desta coleção: estas atividades NÃO ensinam adultos a vigiar melhor.
   Elas melhoram decisões familiares e abrem espaço para autonomia progressiva.
   Em todas elas o adulto também se expõe a mudar de ideia, e isso é parte do método. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 16 */
{
  id: 'acordo-de-imagens-da-familia',
  insightCurto: 'Consentimento sobre imagem não é permissão dada uma vez. Pode ser retirado, e vale para todas as idades.',
  n: 16,
  titulo: 'Acordo de imagens da família',
  chamada: 'Quem pode fotografar quem, publicar o quê, e como se pede para tirar do ar.',
  faixa: 'familia',
  duracao: 40,
  duracaoCurta: 25,
  comoEncurtar: 'Em 25 minutos: pule a etapa do papel dobrado do início e trate só de dois dos quatro momentos, publicar e pedir retirada, que são os que mais geram atrito real. As fichas de veto continuam sendo distribuídas, porque são a virada.',
  formato: 'criacao',
  formatoDetalhe: 'Negociação e redação de acordo',
  contexto: ['casa'],
  tela: 'sem-tela',
  situacao: ['foto', 'consentimento'],
  disciplinas: [],
  preparo: 'baixo',
  grupo: 'familia',
  eixo: 'consentimento',
  nivel: 5,
  sensibilidade: 'media',
  selos: ['sem-tela', 'pronta-amanha'],

  bncc: {
    nota: 'Atividade doméstica. Para uso escolar em reunião de responsáveis, a ponte é EF15CO09.',
    ponte: { codigo: 'EF15CO09', texto: 'Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Negociar coletivamente regras de consentimento sobre imagem no ambiente doméstico.' },

  provocacao: 'Nesta casa existem fotos de todo mundo circulando por aí, e ninguém nunca combinou nada. Hoje a gente combina.',

  missao: 'Escrever um acordo de uma página que valha para todos os moradores da casa, incluindo os adultos, sobre fotografar, publicar, encaminhar e pedir retirada.',

  virada: 'Depois que as regras estão escritas, cada pessoa recebe três fichas de veto e pode usá-las para barrar qualquer regra que a atinja, sem precisar justificar. O adulto costuma descobrir que a criança veta algo que ele fazia sem pensar duas vezes, normalmente publicar foto dela sem perguntar. O veto sem justificativa é o coração da atividade: consentimento não exige que a pessoa explique o desconforto dela.',

  insight: 'Consentimento sobre imagem não é permissão dada uma vez para sempre. É contínuo, pode ser retirado, e vale igual para quem tem cinco e para quem tem quarenta anos.',

  transferencia: 'O acordo vira uma folha na geladeira. Da próxima vez que alguém for postar uma foto da família, existe um combinado para consultar, e existe uma frase pronta para pedir retirada sem briga.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Cada pessoa escreve, sozinha e sem mostrar, uma foto sua que ela não gostaria que existisse por aí. Ninguém precisa ler em voz alta. O papel é dobrado e guardado.' },
    { t: '5 a 20 min',  o: 'Rodada de propostas. Cada pessoa propõe uma regra para cada um dos quatro momentos: fotografar, publicar, encaminhar e pedir retirada. Escrever tudo em uma folha só.' },
    { t: '20 a 28 min', o: 'A virada. Distribuir três fichas de veto por pessoa. Usar veto não exige explicar.' },
    { t: '28 a 36 min', o: 'Redigir o acordo final com as regras que sobreviveram. Todo mundo assina, inclusive quem ainda não sabe escrever, com um desenho.' },
    { t: '36 a 40 min', o: 'Combinar a data de revisão e colar na geladeira. Quem tiver o papel dobrado do início pode rasgar sem mostrar.' }
  ],

  versoes: {
    escola: 'Funciona como oficina em reunião de responsáveis, com as famílias em mesas separadas produzindo cada uma o seu acordo. A escola não recolhe os acordos: eles são domésticos e privados.',
    familia: 'Uma mesa, quarenta minutos, de preferência em um fim de semana e sem pressa. Se houver criança pequena, ela participa com desenho em vez de escrita.',
    jovem: 'A partir de 12 anos, o adolescente pode conduzir a atividade em vez do adulto. Isso muda o resultado e costuma melhorá-lo.'
  },

  kit: [
    { nome: 'Folha dos quatro momentos', tipo: 'imprimivel', desc: 'Fotografar, publicar, encaminhar, pedir retirada.' },
    { nome: 'Fichas de veto', tipo: 'imprimivel', desc: 'Três por pessoa.' },
    { nome: 'Modelo de acordo', tipo: 'editavel', desc: 'Uma página, para preencher e colar na geladeira.' },
    { nome: 'Frases prontas para pedir retirada', tipo: 'imprimivel', desc: 'Para quem trava na hora de pedir.' }
  ],

  imprimiveis: [
    {
      titulo: 'Folha dos quatro momentos',
      tipo: 'folha',
      corpo: 'Para cada momento, cada pessoa da casa propõe uma regra.\n\n1. FOTOGRAFAR. Quando dá para fotografar alguém desta casa sem perguntar? Quando não dá nunca?\n\n2. PUBLICAR. Quem pode publicar foto de quem? Onde? Precisa perguntar antes, sempre?\n\n3. ENCAMINHAR. Foto que está no grupo da família pode ir para onde? E para o grupo do trabalho? E para o grupo da escola?\n\n4. PEDIR RETIRADA. Como se pede? Em quanto tempo a pessoa tira? Precisa explicar o motivo?'
    },
    {
      titulo: 'Fichas de veto',
      tipo: 'cartas',
      corpo: 'Imprimir três por pessoa.\n\nFrente: VETO\nVerso: Eu não quero esta regra. Não preciso explicar por quê.'
    },
    {
      titulo: 'Modelo de acordo de imagens',
      tipo: 'editavel',
      corpo: 'ACORDO DE IMAGENS DA FAMÍLIA ____________________\nCombinado em ____/____/______\n\n1. Antes de fotografar alguém desta casa, a gente ____________________.\n\n2. Nunca fotografamos ____________________.\n\n3. Para publicar foto de alguém, é preciso ____________________.\n\n4. Foto do grupo da família pode ir para ____________________ e não pode ir para ____________________.\n\n5. Quando alguém pede para tirar uma foto do ar, a gente tira em ____________________ e não pergunta o motivo.\n\n6. Se alguém mudar de ideia depois de ter autorizado, vale ____________________.\n\n7. Esta regra vale para os adultos também? ( ) sim ( ) sim\n\n8. A gente revisa este acordo em ____/____/______.\n\nAssinam:'
    },
    {
      titulo: 'Frases prontas para pedir retirada',
      tipo: 'folha',
      corpo: 'Para quem trava na hora, e todo mundo trava:\n\n. "Você pode tirar aquela foto minha do ar? Eu não gostei dela."\n. "Não precisa apagar do celular, mas tira de onde as pessoas veem, por favor."\n. "Eu deixei antes, mas mudei de ideia."\n. "Antes de postar essa, me mostra?"\n\nE a resposta que a gente combina dar, sempre:\n. "Tá bom, já tirei."\n\nO que a gente combina não responder:\n. "Mas está tão bonitinha."\n. "Todo mundo já viu mesmo."\n. "Você está exagerando."'
    }
  ],

  mediacao: {
    perguntas: [
      'Existe alguma regra aqui que só vale para as crianças?',
      'Quando alguém pede para tirar uma foto do ar, ela precisa explicar por quê?',
      'A gente já publicou foto de alguém desta casa sem perguntar?',
      'Se um avô ou uma tia publicar, o acordo vale para ele também? Como a gente avisa?'
    ],
    evitar: [
      'Rir do veto de alguém, principalmente do veto de uma criança pequena. O veto sem justificativa é a regra, e desmontá-lo com humor desmonta a atividade.',
      'Escrever um acordo que só disciplina as crianças. Se as sete linhas do modelo só falarem do que os filhos podem fazer, o acordo falhou.',
      'Exigir que alguém mostre o papel dobrado do início. Ele existe para pensar, não para revelar.',
      'Fazer a atividade logo depois de uma briga sobre uma foto específica. Espere passar, senão vira julgamento.'
    ]
  },

  protecao: 'Nenhuma foto real precisa ser aberta, mostrada ou apagada durante a atividade. Ninguém é obrigado a contar qual foto o incomoda. O acordo é doméstico e não deve ser compartilhado com a escola nem publicado.',

  evidencia: 'O acordo escrito contém pelo menos uma regra que restringe o comportamento dos adultos, e a família consegue enunciar o que fazer quando alguém pede retirada.'
},

/* ==================================================================== 17 */
{
  id: 'noite-das-permissoes',
  insightCurto: 'Permissão não é liga e desliga. Quase sempre existe uma terceira opção: só enquanto eu estiver usando.',
  n: 17,
  titulo: 'Noite das permissões',
  chamada: 'Cartões de aplicativos fictícios, sem abrir celular nenhum. Câmera, microfone, localização, contatos.',
  faixa: 'familia',
  duracao: 30,
  formato: 'jogo',
  formatoDetalhe: 'Jogo de cartas de permissão',
  contexto: ['casa'],
  tela: 'sem-tela',
  situacao: ['dados'],
  disciplinas: [],
  preparo: 'baixo',
  grupo: 'familia',
  eixo: 'privacidade',
  nivel: 3,
  sensibilidade: 'baixa',
  selos: ['sem-tela', 'pronta-amanha'],

  bncc: {
    nota: 'Atividade doméstica. Para uso escolar, a ponte é EF08CO08.',
    ponte: { codigo: 'EF08CO08', texto: 'Distinguir os tipos de dados pessoais que são solicitados em espaços digitais e os riscos associados.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Avaliar proporcionalidade entre a função de um aplicativo e as permissões que ele solicita.' },

  provocacao: 'Cada um destes seis aplicativos quer alguma coisa do seu celular. Um deles pede uma coisa que não faz o menor sentido para o que ele faz. Vamos descobrir qual.',

  missao: 'Para cada aplicativo, decidir em família quais permissões concedem, quais negam, e quais concedem só enquanto o aplicativo estiver aberto.',

  virada: 'Depois das seis decisões, o adulto vira a folha do verso: para cada permissão negada, o que o aplicativo deixa de fazer. Algumas negativas não custam nada e outras quebram o aplicativo inteiro. A família descobre que "negar tudo" não é uma estratégia, é uma desistência, e que a decisão boa exige saber o que cada permissão realmente entrega.',

  insight: 'Permissão não é uma chave de liga e desliga. A pergunta útil é se o que o aplicativo pede tem relação com o que ele faz, e se dá para conceder só enquanto ele estiver aberto.',

  transferencia: 'Na próxima vez que uma tela de permissão aparecer, existe uma pergunta de três segundos: isso que ele está pedindo tem a ver com o que ele faz? E existe quase sempre uma terceira opção além de sim e não.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Espalhar os seis cartões de aplicativo na mesa. Ler em voz alta o que cada um faz.' },
    { t: '5 a 18 min',  o: 'Um cartão por vez. Cada pessoa vota em conceder, negar ou conceder só enquanto aberto. Discutir onde houver divergência.' },
    { t: '18 a 24 min', o: 'A virada. Virar a folha de consequências e ler o que cada negativa custa.' },
    { t: '24 a 30 min', o: 'Revisar as decisões e escolher, juntos, um aplicativo de verdade que a família usa para conferir as permissões depois, com calma, e não agora.' }
  ],

  versoes: {
    escola: 'Funciona em reunião de responsáveis ou em contraturno, com os cartões distribuídos por mesa. Não abrir aparelhos em nenhuma hipótese durante a atividade.',
    familia: 'Trinta minutos na mesa da cozinha. Vale muito deixar a criança conduzir a leitura dos cartões.',
    jovem: 'A partir de 13 anos, o adolescente pode montar dois cartões novos de aplicativos que ele usa e submeter à família, sem abrir os aplicativos.'
  },

  kit: [
    { nome: 'Seis cartões de aplicativo', tipo: 'imprimivel', desc: 'O que faz e o que pede.' },
    { nome: 'Fichas de decisão', tipo: 'imprimivel', desc: 'Conceder, negar, só enquanto aberto.' },
    { nome: 'Folha de consequências', tipo: 'imprimivel', desc: 'A virada. Fica no verso.' }
  ],

  imprimiveis: [
    {
      titulo: 'Seis cartões de aplicativo',
      tipo: 'cartas',
      itens: [
        'LANTERNA. O que faz: acende a luz do celular. O que pede: câmera, localização, contatos.',
        'MAPA DA CIDADE. O que faz: mostra o caminho até um endereço. O que pede: localização o tempo todo, mesmo fechado.',
        'JOGO DE PALAVRAS. O que faz: jogo de montar palavras, sozinho. O que pede: contatos, microfone, fotos.',
        'CÂMERA DE FILTROS. O que faz: tira foto com filtros. O que pede: câmera, fotos, microfone.',
        'CADERNO DE RECEITAS. O que faz: guarda receitas escritas. O que pede: fotos, localização.',
        'MENSAGEIRO. O que faz: conversar com amigos. O que pede: contatos, câmera, microfone, fotos, localização.'
      ]
    },
    {
      titulo: 'Fichas de decisão',
      tipo: 'cartas',
      corpo: 'Três fichas por pessoa, em cores diferentes:\n\nVERDE: CONCEDER\nVERMELHA: NEGAR\nAMARELA: SÓ ENQUANTO EU ESTIVER USANDO'
    },
    {
      titulo: 'Folha de consequências (a virada, fica no verso)',
      tipo: 'gabarito',
      corpo: 'LANTERNA. Negando câmera: a lanterna para de funcionar em alguns aparelhos, porque a luz é do módulo da câmera. Negando localização e contatos: nada acontece. Não existe motivo para uma lanterna saber onde você está nem quem são seus amigos.\n\nMAPA DA CIDADE. Negando localização: você precisa digitar o endereço de partida na mão, e funciona. Concedendo só enquanto aberto: funciona praticamente igual. Concedendo o tempo todo: o aplicativo registra sua rotina completa, inclusive quando você não está usando. Este é o caso em que a opção amarela resolve quase tudo.\n\nJOGO DE PALAVRAS. Negando as três: o jogo funciona perfeitamente. Um jogo de palavras para uma pessoa não precisa de contatos, microfone nem fotos.\n\nCÂMERA DE FILTROS. Negando câmera: não funciona, obviamente. Negando fotos: você não consegue aplicar filtro em foto antiga, mas tira foto nova normalmente. Negando microfone: só afeta vídeo com som. Aqui as permissões fazem sentido, e é importante que exista um caso assim na mesa.\n\nCADERNO DE RECEITAS. Negando fotos: você não consegue colocar foto do prato, e o resto funciona. Negando localização: nada acontece.\n\nMENSAGEIRO. Negando contatos: você precisa digitar o número para começar conversa, e funciona. Negando câmera e microfone: não manda foto nem áudio, mas manda texto. Negando localização: nada acontece, exceto compartilhar localização, que passa a ser manual. Este é o caso mais difícil e o mais real: quase tudo se justifica, mas quase nada precisa ser permanente.\n\nO ponto da folha: negar tudo não é estratégia. Em três dos seis casos, a opção amarela resolve.'
    }
  ],

  mediacao: {
    perguntas: [
      'O que este aplicativo faz tem alguma relação com o que ele está pedindo?',
      'Existe diferença entre deixar sempre e deixar só enquanto eu estiver usando?',
      'Qual permissão você não conseguiria recuperar se vazasse?',
      'Alguém aqui já concedeu tudo só para a tela ir embora?'
    ],
    evitar: [
      'Abrir os aplicativos reais no meio da atividade. A conferência real fica para depois, com calma, e não no calor do jogo.',
      'Transformar em fiscalização do celular do adolescente. Se a atividade virar auditoria do aparelho de alguém, ela acabou.',
      'Concluir que a resposta certa é negar tudo. A folha de consequências existe justamente para impedir essa conclusão.'
    ]
  },

  protecao: 'Nenhum aplicativo real é aberto e nenhuma configuração é alterada durante a atividade. Os seis aplicativos são fictícios. Ninguém precisa mostrar quais aplicativos tem instalados. A conferência de um aplicativo real, se a família quiser, é feita depois e por quem é dono do aparelho.',

  evidencia: 'A família usa a opção intermediária em pelo menos um caso e justifica pelo menos uma negativa pela ausência de relação entre a função do aplicativo e a permissão pedida.'
},

/* ==================================================================== 18 */
{
  id: 'ensaio-do-golpe',
  insightCurto: 'Saber informação sobre você não prova que a pessoa é do banco. O que protege é ter um combinado antes.',
  n: 18,
  titulo: 'Ensaio do golpe',
  chamada: 'Um ensaio, como o de incêndio. Quando acontecer de verdade, ninguém vai ter que pensar.',
  faixa: 'familia',
  duracao: 30,
  formato: 'simulacao',
  formatoDetalhe: 'Simulação de três cenários',
  contexto: ['casa'],
  tela: 'sem-tela',
  situacao: ['golpe'],
  disciplinas: [],
  preparo: 'baixo',
  grupo: 'familia',
  eixo: 'seguranca',
  nivel: 4,
  sensibilidade: 'media',
  selos: ['sem-tela', 'pronta-amanha'],

  bncc: {
    nota: 'Atividade doméstica. Para uso escolar, a ponte é EF07CO07.',
    ponte: { codigo: 'EF07CO07', texto: 'Identificar problemas de segurança cibernética e experimentar formas de proteção.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Estabelecer protocolos familiares de resposta a tentativas de fraude e engenharia social.' },

  provocacao: 'A escola faz simulado de incêndio para ninguém precisar pensar na hora. Golpe funciona igual: quem inventa a resposta no susto erra. Hoje a gente ensaia.',

  missao: 'Passar pelos três cenários e sair com uma folha única na parede dizendo, para cada um, o que a família faz e o que a família não faz.',

  virada: 'No terceiro cenário, o falso suporte técnico, a pessoa que liga acerta o nome completo, o banco e os quatro últimos dígitos do cartão. A família costuma travar, porque a explicação intuitiva é que só o banco saberia disso. O adulto revela que esses dados circulam em vazamentos e são comprados. O sinal em que todo mundo confiava, saber informação sobre você, deixa de ser sinal.',

  insight: 'Não existe um sinal único que identifique um golpe, e saber informação sobre você não prova nada. O que protege não é detectar, é ter um procedimento combinado antes: desligar e ligar de volta pelo número que você já tinha.',

  transferencia: 'A folha fica na parede. Quando acontecer, ninguém precisa decidir sob pressão: existe um procedimento, e ele é o mesmo para os três casos.',

  roteiro: [
    { t: '0 a 4 min',   o: 'Explicar que são três ensaios e que ninguém vai ser testado nem julgado. Combinar que errar no ensaio é o objetivo.' },
    { t: '4 a 11 min',  o: 'Cenário 1, o pedido urgente de dinheiro. Ler o roteiro. Cada pessoa diz o que faria. Escrever na folha.' },
    { t: '11 a 18 min', o: 'Cenário 2, a conta invadida. Mesmo procedimento.' },
    { t: '18 a 25 min', o: 'Cenário 3, o falso suporte. Aplicar a virada no meio da leitura, quando a família já estiver confiante.' },
    { t: '25 a 30 min', o: 'Preencher a folha da parede com o procedimento único e os telefones. Escolher a palavra-código da família.' }
  ],

  versoes: {
    escola: 'Boa oficina para reunião de responsáveis, especialmente com famílias de estudantes mais novos. Cada mesa é uma família e sai com a própria folha.',
    familia: 'Trinta minutos, uma vez por ano, como o simulado de incêndio. Repetir vale mais do que aprofundar.',
    jovem: 'A partir de 12 anos, o adolescente conduz os três cenários para os adultos da casa. A inversão funciona muito bem, porque em dois dos três cenários o alvo típico é o adulto.'
  },

  kit: [
    { nome: 'Três roteiros de cenário', tipo: 'imprimivel', desc: 'Para o condutor ler em voz alta.' },
    { nome: 'Folha da parede', tipo: 'editavel', desc: 'O procedimento único, os telefones e a palavra-código.' },
    { nome: 'Lista do que nunca fazer', tipo: 'imprimivel', desc: 'Cinco linhas para colar junto.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cenário 1, o pedido urgente',
      tipo: 'roteiro',
      corpo: 'Ler em voz alta:\n\n"Chega uma mensagem de um número desconhecido. A foto do perfil é da sua tia. A mensagem diz: oi, troquei de número, salva aí. Depois de três mensagens de conversa normal, vem: preciso de um favor urgente, meu cartão está bloqueado e eu tenho que pagar uma coisa agora, você consegue fazer um pix de 800 reais que eu te devolvo amanhã?"\n\nPergunte a cada pessoa: o que você faz agora?\n\nDepois das respostas, a informação que fecha o cenário: a foto de perfil é pública e qualquer pessoa consegue. Trocar de número é verdade com frequência, e é justamente por isso que o golpe funciona. O procedimento não é detectar a mentira, é ligar para o número antigo da tia.'
    },
    {
      titulo: 'Cenário 2, a conta invadida',
      tipo: 'roteiro',
      corpo: 'Ler em voz alta:\n\n"Você recebe um e-mail dizendo que alguém entrou na sua conta a partir de outro estado. Tem um botão escrito não fui eu, proteger minha conta agora. O e-mail tem o logo certo, o seu nome certo, e está bem escrito."\n\nPergunte: o que você faz?\n\nInformação que fecha o cenário: pode ser verdadeiro e pode ser falso, e não dá para saber pelo e-mail. O procedimento é o mesmo nos dois casos, e por isso funciona: não clicar em nada, abrir o aplicativo ou o site digitando o endereço, e verificar por lá. Se o aviso era real, ele vai estar lá dentro também.'
    },
    {
      titulo: 'Cenário 3, o falso suporte',
      tipo: 'roteiro',
      corpo: 'Ler em voz alta, em duas partes.\n\nPARTE 1: "O telefone toca. A pessoa se identifica como da central de segurança do seu banco. Diz que detectaram uma compra suspeita de 2.300 reais em outro estado e pergunta se foi você."\n\nPergunte: o que você faz? Deixe a família responder e ficar confiante.\n\nPARTE 2, a virada: "A pessoa então diz o seu nome completo, confirma o nome do seu banco, e lê os quatro últimos dígitos do seu cartão, que estão corretos. Ela pede que você confirme apenas o código de segurança para bloquear a compra."\n\nPergunte de novo: e agora?\n\nInformação que fecha o cenário: esses dados circulam em vazamentos e são vendidos. Saber informação sobre você não prova que a pessoa é do banco. O procedimento é desligar, sem constrangimento, e ligar para o número que está atrás do seu cartão. Nenhum banco pede código de segurança, senha ou token por telefone.'
    },
    {
      titulo: 'Folha da parede',
      tipo: 'editavel',
      corpo: 'O QUE A NOSSA FAMÍLIA FAZ\n\nO PROCEDIMENTO ÚNICO, que vale para os três casos:\n1. Não decidir na hora. Nada é tão urgente quanto parece.\n2. Encerrar o contato, sem culpa. Desligar não é falta de educação.\n3. Procurar do nosso lado: ligar para o número que a gente já tinha, ou abrir o aplicativo digitando o endereço.\n4. Contar para outra pessoa da casa antes de fazer qualquer coisa que envolva dinheiro.\n\nA NOSSA PALAVRA-CÓDIGO é ____________________.\nSe alguém disser que é da família e pedir dinheiro, a gente pergunta a palavra.\n\nTELEFONES QUE A GENTE JÁ TEM:\nBanco: ____________________\nOperadora: ____________________\nAdulto de referência: ____________________\n\nSe acontecer com alguém daqui, essa pessoa não vai ser culpada. Ela vai ser ajudada.'
    },
    {
      titulo: 'Lista do que nunca fazer',
      tipo: 'cartaz',
      corpo: 'A GENTE NUNCA:\n\n1. informa senha, código de segurança do cartão ou código que chegou por mensagem, para ninguém, nem para o banco;\n2. clica no link do aviso, mesmo quando o aviso parece verdadeiro;\n3. instala programa a pedido de quem ligou;\n4. faz transferência sem falar com outra pessoa da casa;\n5. tem vergonha de contar que quase caiu, ou que caiu.'
    }
  ],

  mediacao: {
    perguntas: [
      'A pessoa sabia o seu nome e os dígitos do cartão. Isso prova alguma coisa?',
      'O aviso da conta invadida pode ser verdadeiro. O procedimento muda?',
      'Por que desligar parece falta de educação? Quem se aproveita disso?',
      'Se alguém desta casa cair em um golpe, o que a gente faz? E o que a gente não fala?'
    ],
    evitar: [
      'Rir de quem erra no ensaio. Errar no ensaio é o objetivo, e quem for ridicularizado aqui não vai contar quando acontecer de verdade.',
      'Lembrar de um caso real em que alguém da família caiu. Isso transforma o ensaio em cobrança.',
      'Focar só nos idosos. Os três cenários pegam todas as idades, e o de conta invadida pega mais os jovens.',
      'Terminar sem escrever os telefones. O procedimento depende de ter o número certo antes de precisar.'
    ]
  },

  protecao: 'Nenhum golpe real é enviado a ninguém, em nenhuma hipótese. Não simular por mensagem de verdade, nem testar familiares sem aviso: isso quebra confiança e é o oposto do objetivo. Nenhuma senha, código ou dado bancário real é dito em voz alta durante a atividade. A palavra-código escolhida não deve ser escrita em nenhum lugar público nem enviada por mensagem.',

  evidencia: 'A família enuncia o mesmo procedimento para os três cenários e reconhece que conhecimento de dados pessoais por parte do interlocutor não é evidência de legitimidade.'
},

/* ==================================================================== 19 */
{
  id: 'mapa-da-casa-conectada',
  insightCurto: 'Computadores nem sempre se parecem com computadores. O problema costuma ser a configuração que ninguém abriu.',
  n: 19,
  titulo: 'Mapa da casa conectada',
  chamada: 'Quais objetos desta casa escutam, olham, registram ou enviam. A lista costuma surpreender.',
  faixa: 'familia',
  duracao: 30,
  formato: 'investigacao',
  formatoDetalhe: 'Mapeamento desenhado',
  contexto: ['casa'],
  tela: 'sem-tela',
  situacao: ['dados'],
  disciplinas: [],
  preparo: 'nenhum',
  grupo: 'familia',
  eixo: 'privacidade',
  nivel: 3,
  sensibilidade: 'baixa',
  selos: ['sem-tela', 'pronta-amanha'],

  bncc: {
    nota: 'Atividade doméstica. Para uso escolar, a ponte é EF05CO06.',
    ponte: { codigo: 'EF05CO06', texto: 'Reconhecer que os dados podem ser armazenados em um dispositivo local ou remoto.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Identificar dispositivos de coleta no ambiente cotidiano e distinguir processamento local de remoto.' },

  provocacao: 'Vamos desenhar a planta desta casa e marcar tudo que escuta, tudo que olha e tudo que manda alguma coisa para fora. Aposto que a gente esquece pelo menos três.',

  missao: 'Desenhar a planta da casa, marcar cada objeto conectado com o símbolo certo, e descobrir quais controles a família realmente usa.',

  virada: 'Quando o mapa parece pronto, o adulto lê a lista de lembretes: controle remoto por voz, brinquedo que fala, campainha com câmera, aspirador que mapeia a planta da casa, relógio, carro, medidor de energia, e o próprio roteiro do Wi-Fi. Quase toda família esquece pelo menos três. E então vem a segunda pergunta, que é a difícil: quantos desses objetos alguém desta casa já configurou alguma vez? A resposta costuma ser nenhum.',

  insight: 'Computadores nem sempre se parecem com computadores. E o problema raramente é o objeto: é que ele veio com uma configuração de fábrica que ninguém nunca olhou.',

  transferencia: 'O mapa fica guardado. Cada objeto novo que entrar na casa ganha uma marcação e uma pergunta: o que ele coleta e onde se desliga isso.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Desenhar juntos a planta da casa em uma folha grande, cômodo por cômodo. Não precisa ficar bonito.' },
    { t: '6 a 16 min',  o: 'Cada pessoa percorre a casa e marca no mapa os objetos que encontrar, usando os quatro símbolos.' },
    { t: '16 a 22 min', o: 'A virada. Ler a lista de lembretes e acrescentar o que faltou. Depois, a segunda pergunta: quem já configurou cada um?' },
    { t: '22 a 30 min', o: 'Escolher um único objeto para investigar juntos nesta semana e escrever no mapa qual foi. Um por vez, sem pressa.' }
  ],

  versoes: {
    escola: 'Vira atividade de casa com devolutiva em aula, usando uma planta genérica em vez da planta real, para não expor a casa de ninguém. Em sala, usar a casa fictícia do Téo, que consta da coleção infantil.',
    familia: 'Trinta minutos em um sábado. As crianças menores adoram a parte de percorrer a casa procurando, e são elas que costumam achar o que os adultos esquecem.',
    jovem: 'A partir de 12 anos, o adolescente pode assumir a investigação do objeto escolhido e apresentar à família o que descobriu, incluindo onde ficam as configurações.'
  },

  kit: [
    { nome: 'Folha de mapa', tipo: 'imprimivel', desc: 'Com a legenda dos quatro símbolos.' },
    { nome: 'Lista de lembretes', tipo: 'imprimivel', desc: 'A virada. Ler só depois que o mapa parecer pronto.' },
    { nome: 'Ficha de investigação', tipo: 'editavel', desc: 'Para o objeto escolhido da semana.' }
  ],

  imprimiveis: [
    {
      titulo: 'Folha de mapa e legenda',
      tipo: 'folha',
      corpo: 'Desenhe a planta da casa e marque cada objeto com um ou mais símbolos.\n\nLEGENDA\nOUVIDO: escuta som ou tem microfone.\nOLHO: tem câmera ou sensor de imagem.\nCADERNO: guarda registro do que a gente faz, como histórico ou rotina.\nSETA: manda alguma coisa para fora da casa, pela internet.\n\nUm objeto pode ter os quatro. A televisão, por exemplo, costuma ter.'
    },
    {
      titulo: 'Lista de lembretes (a virada)',
      tipo: 'folha',
      corpo: 'Vocês marcaram estes?\n\n. televisão, inclusive a que tem microfone no controle remoto\n. caixa de som com assistente de voz\n. campainha ou interfone com câmera\n. aspirador robô, que desenha a planta da casa e a envia\n. brinquedo que fala ou responde\n. relógio ou pulseira de atividade\n. carro conectado\n. medidor de energia inteligente\n. babá eletrônica\n. console de videogame\n. impressora com Wi-Fi\n. roteador de internet, que registra tudo que se conecta\n\nAgora a segunda pergunta, e é a mais importante:\n\nDestes objetos, quantos alguém desta casa já configurou alguma vez, além de ligar na tomada e conectar no Wi-Fi?\n\nQuantos deles vocês saberiam dizer onde fica a opção de desligar o microfone, apagar o histórico ou parar de enviar dados?'
    },
    {
      titulo: 'Ficha de investigação da semana',
      tipo: 'editavel',
      corpo: 'Objeto escolhido: ____________________\n\nO que ele faz que a gente quer: ____________________\n\nO que ele coleta, segundo o próprio fabricante: ____________________\n\nOnde ficam as configurações de privacidade dele: ____________________\n\nDá para desligar alguma coisa sem quebrar o que a gente usa? ____________________\n\nA gente mudou alguma coisa? ( ) sim, o quê: ____________________ ( ) não, porque: ____________________\n\nQuem investigou: ____________________  Data: ____/____/______'
    }
  ],

  mediacao: {
    perguntas: [
      'Qual objeto desta casa você nunca tinha pensado como computador?',
      'Quantos destes alguém aqui já configurou de verdade?',
      'O aspirador desenha a planta da nossa casa. Para onde vai esse desenho?',
      'Qual deles a gente usaria igual mesmo desligando parte do que ele coleta?'
    ],
    evitar: [
      'Transformar em pânico e querer desconectar tudo em uma tarde. Um objeto por semana funciona, uma cruzada de sábado não.',
      'Culpar quem comprou os objetos. Ninguém compra uma televisão pensando em microfone, e a configuração de fábrica é escolha do fabricante.',
      'Fotografar ou publicar o mapa da casa. Ele é um documento sobre a sua casa.'
    ]
  },

  protecao: 'O mapa é um documento privado da família e não deve ser fotografado, compartilhado, enviado à escola nem publicado. Na versão escolar, usar planta genérica ou a casa fictícia do Téo. Não alterar configurações de dispositivos no calor da atividade: a investigação é feita depois, com calma, por quem é responsável pelo aparelho.',

  evidencia: 'A família identifica pelo menos três dispositivos que não havia considerado e escolhe um objeto para investigar, sabendo dizer o que ele coleta.'
},

/* ==================================================================== 20 */
{
  id: 'pacto-de-ia-nos-estudos',
  insightCurto: 'O que separa ajuda de atalho não é a ferramenta. É o que a tarefa estava tentando ensinar.',
  n: 20,
  titulo: 'Nosso pacto de IA nos estudos',
  chamada: 'Quando a IA pode ajudar, o que precisa ser verificado, e o que se faz sem automação.',
  faixa: 'familia',
  duracao: 40,
  duracaoCurta: 25,
  comoEncurtar: 'Em 25 minutos: use seis das doze situações (01, 03, 05, 08, 10 e 12) e monte as três listas direto. As três perguntas para o adulto não podem ser cortadas em nenhuma hipótese: sem elas o resultado é um regulamento, não um pacto.',
  formato: 'debate',
  formatoDetalhe: 'Negociação e redação de pacto',
  contexto: ['casa'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa', 'autoria'],
  disciplinas: [],
  preparo: 'baixo',
  grupo: 'familia',
  eixo: 'autoria',
  nivel: 4,
  sensibilidade: 'media',
  selos: ['sem-tela', 'pronta-amanha'],

  bncc: {
    nota: 'Atividade doméstica, par da ficha escolar "IA na tarefa: mapa das escolhas". Para uso escolar, a ponte é EF09CO09.',
    ponte: { codigo: 'EF09CO09', texto: 'Criar ou utilizar conteúdo em meio digital, compreendendo questões éticas relacionadas a direitos autorais e de uso de imagem.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Definir em família condições de uso de IA que preservem a finalidade do aprendizado.' },

  provocacao: 'A pergunta não é se você usa IA para estudar. É o que a tarefa estava tentando te ensinar, e se você aprendeu mesmo assim.',

  missao: 'Escrever um pacto de meia página com três listas: o que dá para usar sem falar com ninguém, o que dá para usar avisando, e o que a gente faz sem automação porque senão perde o sentido.',

  virada: 'Depois que as três listas estão prontas, o adulto responde às mesmas perguntas sobre o próprio trabalho: onde ele usa IA, o que ele verifica, e se ele declara para alguém. A conversa muda de temperatura, porque deixa de ser sobre disciplina escolar e passa a ser sobre um problema que os dois lados têm. Em muitas famílias, é aqui que o adolescente entra de verdade na conversa.',

  insight: 'O que separa um uso que ajuda de um que atrapalha não é a ferramenta, é a finalidade do que estava sendo pedido. Uma calculadora não estraga a aula de matemática, exceto quando a aula é justamente aprender a calcular.',

  transferencia: 'O pacto vira uma folha. Diante de uma tarefa nova, existe uma pergunta de dez segundos, e ela não é se pode usar: é o que esta tarefa estava tentando me ensinar.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Cada pessoa lista, sozinha, três tarefas escolares recentes e o que cada uma estava tentando ensinar. Comparar as respostas costuma ser revelador por si só.' },
    { t: '8 a 22 min',  o: 'Montar juntos as três listas, usando as doze situações da carta de apoio como provocação.' },
    { t: '22 a 30 min', o: 'A virada. O adulto responde às três perguntas sobre o próprio trabalho, em voz alta e com honestidade.' },
    { t: '30 a 40 min', o: 'Escrever o pacto, incluindo a regra de verificação e a data de revisão. Assinar os dois lados.' }
  ],

  versoes: {
    escola: 'Boa oficina em reunião de responsáveis, e melhor ainda se a turma já tiver feito a ficha "IA na tarefa". Cada família sai com o próprio pacto, e a escola não recolhe.',
    familia: 'Quarenta minutos. Funciona melhor fora do momento da tarefa, e não no meio de uma discussão sobre um trabalho específico.',
    jovem: 'O adolescente escreve a primeira versão sozinho e apresenta à família. Começar pela versão dele muda o tom da conversa inteira e costuma produzir um pacto mais rigoroso do que o adulto proporia.'
  },

  kit: [
    { nome: 'Carta das doze situações', tipo: 'imprimivel', desc: 'As mesmas da ficha escolar, para provocar as listas.' },
    { nome: 'Modelo de pacto', tipo: 'editavel', desc: 'Meia página, três listas e a regra de verificação.' },
    { nome: 'Três perguntas para o adulto', tipo: 'imprimivel', desc: 'A virada.' }
  ],

  imprimiveis: [
    {
      titulo: 'Carta das doze situações',
      tipo: 'cartas',
      nota: 'Usar como provocação, uma por vez, para alimentar as três listas.',
      itens: [
        'Pedir ideias de tema e escolher uma para desenvolver sozinho.',
        'Escrever o texto e pedir revisão de ortografia.',
        'Pedir o texto inteiro e entregar sem ler.',
        'Pedir resumo de um livro não lido e escrever a resenha a partir dele.',
        'Pedir explicação de um conceito e depois fazer o exercício sozinho.',
        'Pedir as fontes da bibliografia e copiar sem conferir.',
        'Pedir crítica ao próprio rascunho e reescrever sozinho.',
        'Pedir tradução quando a tarefa é justamente traduzir.',
        'Gerar a imagem de capa do trabalho.',
        'Pedir os cálculos da tarefa de matemática e copiar.',
        'Pedir que simule uma banca e faça perguntas difíceis.',
        'Copiar um texto da internet e pedir para reescrever com outras palavras.'
      ]
    },
    {
      titulo: 'Modelo de pacto de IA nos estudos',
      tipo: 'editavel',
      corpo: 'NOSSO PACTO DE IA NOS ESTUDOS\nFamília ____________________  Data ____/____/______\n\nA PERGUNTA QUE A GENTE FAZ ANTES DE USAR:\nO que esta tarefa estava tentando me ensinar?\n\nLISTA 1, DÁ PARA USAR SEM FALAR COM NINGUÉM:\n____________________________________\n\nLISTA 2, DÁ PARA USAR AVISANDO:\n____________________________________\nAviso para quem: ____________________\n\nLISTA 3, A GENTE FAZ SEM AUTOMAÇÃO, PORQUE SENÃO PERDE O SENTIDO:\n____________________________________\n\nREGRA DE VERIFICAÇÃO:\nToda informação que a IA der e que eu for entregar, eu ____________________.\nToda fonte que ela citar, eu ____________________.\n\nO QUE VALE PARA OS ADULTOS DESTA CASA:\n____________________________________\n\nSE A ESCOLA TIVER UMA REGRA DIFERENTE, vale ____________________.\n\nA gente revisa este pacto em ____/____/______.\n\nAssinam:'
    },
    {
      titulo: 'Três perguntas para o adulto (a virada)',
      tipo: 'folha',
      corpo: 'Agora é a sua vez, e vale responder em voz alta.\n\n1. Você usa IA no seu trabalho? Em quê, exatamente?\n\n2. O que você verifica antes de entregar? E o que você já entregou sem verificar?\n\n3. Você declara para alguém que usou? Para quem? Se não declara, por quê?\n\nUma quarta, para quem quiser ir mais longe:\nExiste alguma parte do seu trabalho que você faz sem automação de propósito, porque automatizar tiraria o sentido? Qual?'
    }
  ],

  mediacao: {
    perguntas: [
      'O que esta tarefa estava tentando te ensinar?',
      'Se você usar IA aqui, você ainda aprende isso?',
      'Existe alguma coisa na lista 3 que está lá só porque parece errado, e não porque atrapalha o aprendizado?',
      'A regra vale para os adultos desta casa também?',
      'E se a escola disser uma coisa e o nosso pacto disser outra?'
    ],
    evitar: [
      'Fazer o pacto no meio de uma briga sobre um trabalho específico. Vira punição negociada e não sobrevive à semana.',
      'Proibir tudo. O adolescente vai usar assim mesmo, e vai usar escondido, o que é exatamente o pior dos mundos, porque some a chance de conversar sobre verificação.',
      'Pular a virada. Um pacto que só disciplina o adolescente não é pacto, é regulamento.',
      'Exigir que o adolescente mostre as conversas dele com a IA. Isso é vigilância e destrói a confiança que a atividade construiu.'
    ]
  },

  protecao: 'Ninguém precisa mostrar histórico de conversas com IA, trabalhos entregues ou notas. O pacto é doméstico e não é enviado à escola. Não usar a atividade para investigar se alguém já colou: o objetivo é combinar o futuro, não julgar o passado, e isso deve ser dito em voz alta no começo.',

  evidencia: 'O pacto contém as três listas preenchidas, uma regra de verificação explícita, e pelo menos um compromisso que se aplica aos adultos da casa.'
},

/* ==================================================================== 21 */
{
  id: 'decodificador-de-gastos-em-jogos',
  insightCurto: 'A moeda virtual existe para você perder a noção do valor. Convertida em reais, a decisão muda.',
  n: 21,
  titulo: 'Decodificador de gastos em jogos',
  chamada: 'Moedas, passes, gemas e caixas viram reais na calculadora. O número costuma assustar os dois lados.',
  faixa: 'familia',
  duracao: 40,
  duracaoCurta: 25,
  comoEncurtar: 'Em 25 minutos: faça as partes 1 e 2 da folha de cálculo, que já produzem o número que muda a conversa. A parte 3, da sobra projetada, é o achado mais elegante e vale guardar para uma segunda rodada em vez de acelerar.',
  formato: 'investigacao',
  formatoDetalhe: 'Conversão e cálculo de probabilidade',
  contexto: ['casa'],
  tela: 'sem-tela',
  situacao: ['jogo', 'propaganda'],
  disciplinas: [],
  preparo: 'baixo',
  grupo: 'familia',
  eixo: 'consumo',
  nivel: 4,
  sensibilidade: 'media',
  selos: ['sem-tela'],

  bncc: {
    nota: 'Atividade doméstica com forte componente de Matemática. Para uso escolar, a ponte é EF06CO10.',
    ponte: { codigo: 'EF06CO10', texto: 'Analisar o consumo de tecnologia na sociedade, compreendendo criticamente o caminho da produção dos recursos bem como aspectos ligados à obsolescência e a sustentabilidade.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Converter economias virtuais em valores reais e avaliar mecanismos de aleatoriedade em compras.' },

  provocacao: 'Ninguém nesta casa sabe quanto custa uma gema. É de propósito. Hoje a gente descobre.',

  missao: 'Converter as moedas virtuais do jogo fictício em reais, calcular quanto custa em média conseguir o item raro, e comparar com uma compra que a família entende.',

  virada: 'Depois de calcular o custo médio da caixa de recompensa, a família descobre a assimetria dos pacotes: o pacote pequeno custa mais caro por gema e o item desejado custa sempre um pouco mais do que qualquer pacote fornece, o que obriga a comprar o pacote seguinte e deixa sobra que não serve para nada. Nenhum número é mentira. Todos foram escolhidos.',

  insight: 'A moeda virtual existe para que a pessoa perca a noção do valor real, e a sobra existe para que sempre falte um pouco. Uma compra pequena pode fazer parte de um sistema desenhado para repetição.',

  transferencia: 'A calculadora fica na mesa. Antes de qualquer compra em jogo, a família converte para reais e compara com uma coisa que ela conhece. O número em reais decide melhor do que o número em gemas.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Combinar que esta atividade não é sobre proibir jogo nem sobre cobrar ninguém, e que o adolescente conduz os cálculos.' },
    { t: '5 a 18 min',  o: 'Converter os quatro pacotes de gemas do jogo fictício para reais por gema. Descobrir qual pacote é o mais caro por unidade.' },
    { t: '18 a 28 min', o: 'Calcular o custo médio da caixa de recompensa, usando a probabilidade declarada. Comparar com o custo se o item fosse vendido direto.' },
    { t: '28 a 34 min', o: 'A virada. Calcular quanto sobra de gemas depois da compra do item, e quantos reais essa sobra representa.' },
    { t: '34 a 40 min', o: 'Combinar a regra da casa: teto mensal, quem decide, e a regra dos três dias.' }
  ],

  versoes: {
    escola: 'Excelente em aula de Matemática do 6º ao 9º ano, com o jogo fictício e sem falar dos gastos reais de ninguém. Probabilidade, porcentagem e valor esperado ficam concretos.',
    familia: 'Quarenta minutos, com o adolescente conduzindo a calculadora. Deixar que ele conduza muda a atividade de cobrança para investigação conjunta.',
    jovem: 'Individual: aplicar o mesmo cálculo a um jogo real que você joga, usando as probabilidades que o próprio jogo divulga, e descobrir o custo médio real do item que você quer.'
  },

  kit: [
    { nome: 'Tabela do jogo fictício', tipo: 'imprimivel', desc: 'Pacotes, preços e probabilidades declaradas.' },
    { nome: 'Folha de cálculo', tipo: 'imprimivel', desc: 'Passo a passo das conversões.' },
    { nome: 'Regra da casa', tipo: 'editavel', desc: 'Teto, decisão e regra dos três dias.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Todos os cálculos resolvidos.' }
  ],

  imprimiveis: [
    {
      titulo: 'Tabela do jogo fictício',
      tipo: 'folha',
      corpo: 'JOGO: REINO DAS GEMAS\n\nPACOTES DE GEMAS\nPacote Pequeno: 80 gemas por R$ 9,90\nPacote Médio: 500 gemas por R$ 49,90\nPacote Grande: 1.200 gemas por R$ 99,90\nPacote Gigante: 2.500 gemas por R$ 179,90\n\nITENS DA LOJA\nSkin comum: 120 gemas\nSkin rara: 750 gemas\nPasse de temporada: 950 gemas\nCaixa surpresa: 60 gemas cada\n\nPROBABILIDADES DECLARADAS DA CAIXA SURPRESA\nItem comum: 89,5%\nItem raro: 10%\nItem lendário: 0,5%'
    },
    {
      titulo: 'Folha de cálculo',
      tipo: 'folha',
      corpo: 'PARTE 1, quanto custa uma gema em cada pacote?\nPequeno: 9,90 dividido por 80 = R$ ________ por gema\nMédio: 49,90 dividido por 500 = R$ ________ por gema\nGrande: 99,90 dividido por 1.200 = R$ ________ por gema\nGigante: 179,90 dividido por 2.500 = R$ ________ por gema\n\nQual é o mais caro por gema? ____________\nQuantas vezes mais caro que o mais barato? ____________\n\nPARTE 2, a caixa surpresa\nQuantas caixas em média para tirar um item lendário? 1 dividido por 0,005 = ________ caixas\nQuantas gemas isso custa? ________ caixas x 60 gemas = ________ gemas\nEm reais, usando o pacote mais barato por gema: R$ ________\n\nPARTE 3, o passe de temporada\nO passe custa 950 gemas. Qual pacote você precisa comprar?\nQuantas gemas sobram? ________\nQuanto valem essas gemas sobrando, em reais? R$ ________\nDá para fazer alguma coisa com elas? ____________\n\nPARTE 4, comparação\nO custo médio do item lendário dá para comprar o quê, na vida real?\n____________________________________'
    },
    {
      titulo: 'Regra da casa',
      tipo: 'editavel',
      corpo: 'A NOSSA REGRA PARA COMPRA EM JOGO\n\n1. TETO: até R$ ________ por mês.\n\n2. QUEM DECIDE: ____________________\n\n3. A REGRA DOS TRÊS DIAS: quando bater vontade de comprar, a gente espera três dias. Se ainda quiser depois, compra. A maior parte das ofertas com relógio correndo não sobrevive a três dias, e é exatamente isso que o relógio existe para impedir.\n\n4. CAIXA SURPRESA: ( ) a gente compra ( ) a gente não compra\nPorque ____________________\n\n5. ANTES DE COMPRAR, a gente converte para reais e compara com ____________________.\n\n6. Se alguém gastar mais do que combinou, a gente ____________________ e não ____________________.\n\nRevisamos em ____/____/______.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'PARTE 1\nPequeno: R$ 0,124 por gema.\nMédio: R$ 0,0998 por gema.\nGrande: R$ 0,083 por gema.\nGigante: R$ 0,072 por gema.\n\nO pequeno é o mais caro, cerca de 1,7 vez o preço por gema do gigante. Quem compra pouco paga mais caro por unidade, o que inverte a lógica de quase todo produto físico e não é acidente.\n\nPARTE 2\n1 dividido por 0,005 = 200 caixas em média.\n200 x 60 = 12.000 gemas.\nA R$ 0,072 por gema, no melhor pacote: R$ 864,00.\nNo pacote pequeno: R$ 1.488,00.\n\nAtenção ao conduzir: média não é garantia. Alguém pode tirar na primeira caixa e alguém pode passar de 400. As duas coisas acontecem e as duas alimentam o mecanismo, uma pela euforia e outra pela sensação de estar perto.\n\nPARTE 3\nO passe custa 950 gemas. O pacote médio dá 500, insuficiente. É preciso o Grande, com 1.200 gemas, por R$ 99,90. Sobram 250 gemas, que valem cerca de R$ 21 e não compram nada além de 4 caixas surpresa, deixando 10 gemas de resto.\n\nEste é o achado mais elegante da atividade: nenhum pacote fecha certo com nenhum item. A sobra é projetada. Ela não serve para nada e cria a sensação de já ter um crédito lá dentro, o que facilita a próxima compra.\n\nPARTE 4\nR$ 864 é a ordem de grandeza de um videogame usado, de um celular de entrada, ou de vários meses de uma atividade extracurricular. Fazer essa comparação em voz alta costuma ser o momento em que o adolescente para de defender o gasto sozinho.\n\nCONDUÇÃO\nO tom decide o resultado. Se a atividade virar cobrança, o adolescente defende o jogo e ninguém aprende nada. Se ele conduzir a calculadora, ele chega sozinho. Deixe que ele chegue.'
    }
  ],

  mediacao: {
    perguntas: [
      'Por que o pacote pequeno é o mais caro por gema?',
      'Por que nenhum pacote dá exatamente o número de gemas de nenhum item?',
      'Média de 200 caixas quer dizer que na caixa 200 sai? O que isso quer dizer, então?',
      'O que R$ 864 compra fora do jogo?',
      'A oferta com relógio correndo sobrevive a três dias?'
    ],
    evitar: [
      'Usar a atividade para cobrar gastos que já aconteceram. O objetivo é a próxima compra, não a última.',
      'Concluir que o jogo é lixo ou que quem joga é bobo. Some a chance de a família decidir junto.',
      'Deixar o adulto fazer as contas. Quem calcula convence a si mesmo, e o alvo da convicção é o adolescente.',
      'Confundir média com garantia. É o erro conceitual mais comum e vale corrigir com cuidado.'
    ]
  },

  protecao: 'O Reino das Gemas é fictício. Não abrir a loja de jogos reais, não consultar o histórico de compras de ninguém e não exigir que o adolescente revele quanto já gastou. Nenhum dado de cartão ou conta é acessado. Se a família quiser conferir gastos reais, isso é feito depois, entre quem é titular da conta.',

  evidencia: 'A família calcula corretamente o custo em reais do item aleatório, identifica a sobra projetada dos pacotes, e define um teto e uma regra de espera antes da compra.'
},

/* ==================================================================== 22 */
{
  id: 'plano-de-emergencia-digital',
  insightCurto: 'O que mais atrasa o socorro não é falta de conhecimento técnico. É o medo de ser castigado por contar.',
  n: 22,
  titulo: 'Plano de emergência digital',
  chamada: 'Uma folha única na parede. Celular perdido, conta invadida, imagem exposta, golpe, ameaça.',
  faixa: 'familia',
  duracao: 30,
  formato: 'criacao',
  formatoDetalhe: 'Construção de protocolo',
  contexto: ['casa'],
  tela: 'sem-tela',
  situacao: ['golpe', 'foto', 'consentimento'],
  disciplinas: [],
  preparo: 'baixo',
  grupo: 'familia',
  eixo: 'seguranca',
  nivel: 5,
  sensibilidade: 'alta',
  selos: ['sem-tela', 'pronta-amanha', 'sensivel'],

  bncc: {
    nota: 'Atividade doméstica. Para uso escolar, a ponte é EM13CO08.',
    ponte: { codigo: 'EM13CO08', texto: 'Entender como mudanças na tecnologia afetam a segurança, incluindo novas maneiras de preservar sua privacidade e dados pessoais on-line, reportando suspeitas e buscando ajuda em situações de risco.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Estabelecer protocolo familiar de resposta a incidentes digitais que priorize o acolhimento sobre a punição.' },

  provocacao: 'Alguma dessas seis coisas vai acontecer com alguém desta casa em algum momento. A única pergunta é se a gente vai estar combinado quando acontecer.',

  missao: 'Produzir uma folha única, que fica na parede, com o que fazer nos primeiros dez minutos de cada uma das seis situações, e com os telefones já preenchidos.',

  virada: 'Quando os seis procedimentos estão escritos, o adulto lê em voz alta a linha que precisa estar em todos eles: quem contar não vai ser castigado. E então vem a pergunta que decide se o plano funciona: se acontecesse hoje, cada pessoa desta casa contaria? A resposta honesta de um adolescente costuma ser não, e o motivo costuma ser perder o celular. O plano só existe de verdade depois que esse ponto for negociado.',

  insight: 'O que mais atrasa a resposta a um incidente não é falta de conhecimento técnico. É o medo da punição. Um plano que não resolve isso não vai ser usado justamente na hora em que precisa.',

  transferencia: 'A folha fica na parede. Quando acontecer, ninguém precisa lembrar de nada: é ler e executar. E quem contar vai ser ajudado.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Combinar em voz alta que ninguém vai ser julgado por nada que disser nos próximos trinta minutos.' },
    { t: '5 a 20 min',  o: 'Para cada uma das seis situações, escrever os três primeiros passos. Priorizar o que é feito nos primeiros dez minutos.' },
    { t: '20 a 26 min', o: 'A virada. Ler a linha do não castigo e fazer a pergunta honesta: você contaria? Negociar até que a resposta seja sim.' },
    { t: '26 a 30 min', o: 'Preencher os telefones e colar a folha em lugar visível. Definir a data de revisão.' }
  ],

  versoes: {
    escola: 'Funciona como oficina em reunião de responsáveis. A escola pode fornecer a folha em branco e os telefones institucionais, mas não recolhe os planos preenchidos.',
    familia: 'Trinta minutos. Ideal fazer junto com o "Ensaio do golpe", que preenche parte dos telefones.',
    jovem: 'A partir de 13 anos, o adolescente escreve a própria versão da linha do não castigo, com as condições dele. Essa negociação é o que faz o plano existir de verdade.'
  },

  kit: [
    { nome: 'Folha de emergência', tipo: 'editavel', desc: 'As seis situações e os telefones. Para colar na parede.' },
    { nome: 'Guia dos primeiros dez minutos', tipo: 'imprimivel', desc: 'O que fazer e o que não fazer em cada situação.' },
    { nome: 'A linha do não castigo', tipo: 'imprimivel', desc: 'A virada, e a parte mais difícil de negociar.' }
  ],

  imprimiveis: [
    {
      titulo: 'Folha de emergência (para a parede)',
      tipo: 'editavel',
      corpo: 'PLANO DE EMERGÊNCIA DIGITAL DA FAMÍLIA ____________________\n\n1. PERDI O CELULAR\nPrimeiros passos: ____________________________________\n\n2. INVADIRAM MINHA CONTA\nPrimeiros passos: ____________________________________\n\n3. ESPALHARAM UMA IMAGEM MINHA\nPrimeiros passos: ____________________________________\n\n4. CAÍ EM UM GOLPE\nPrimeiros passos: ____________________________________\n\n5. RECEBI MENSAGEM AMEAÇADORA\nPrimeiros passos: ____________________________________\n\n6. UM DESCONHECIDO ME PROCUROU\nPrimeiros passos: ____________________________________\n\nTELEFONES\nAdulto de referência: ____________________\nSegundo adulto: ____________________\nBanco: ____________________\nOperadora: ____________________\nEscola: ____________________\nDelegacia mais próxima: ____________________\nDisque 100, direitos humanos, funciona 24 horas e é gratuito.\n\nA LINHA QUE VALE PARA AS SEIS:\nQuem contar vai ser ajudado, não castigado.\n\nAssinam:'
    },
    {
      titulo: 'Guia dos primeiros dez minutos',
      tipo: 'folha',
      corpo: '1. PERDI O CELULAR\nFazer: avisar um adulto, bloquear o chip com a operadora, trocar a senha das contas principais a partir de outro aparelho, ativar o bloqueio remoto se existir.\nNão fazer: esperar para ver se aparece. As primeiras horas são as que importam.\n\n2. INVADIRAM MINHA CONTA\nFazer: trocar a senha se ainda conseguir entrar, encerrar as outras sessões ativas, avisar os contatos de que a conta foi invadida, verificar se o e-mail de recuperação foi alterado.\nNão fazer: clicar em links de recuperação que chegaram por mensagem. Ir pelo aplicativo ou digitando o endereço.\n\n3. ESPALHARAM UMA IMAGEM MINHA\nFazer: guardar prova, com capturas de tela que mostrem onde está e quem publicou, antes de pedir remoção. Pedir remoção pela ferramenta da plataforma. Avisar um adulto imediatamente. Se envolver menor de idade e conteúdo íntimo, procurar a delegacia, e a denúncia pode ser feita também pelo Disque 100 e pela SaferNet.\nNão fazer: responder ao agressor, apagar as provas, ou tratar como problema que a pessoa resolve sozinha.\n\n4. CAÍ EM UM GOLPE\nFazer: avisar imediatamente um adulto da casa, ligar para o banco pelo número do cartão, registrar boletim de ocorrência, e se houve Pix, pedir ao banco o mecanismo especial de devolução, que tem prazo curto.\nNão fazer: ter vergonha e esperar. Cada hora de atraso reduz a chance de recuperar.\n\n5. RECEBI MENSAGEM AMEAÇADORA\nFazer: não responder, guardar prova, bloquear depois de guardar, contar para um adulto, e avaliar boletim de ocorrência. Se vier de colega de escola, comunicar a escola.\nNão fazer: negociar, revidar, ou apagar a conversa.\n\n6. UM DESCONHECIDO ME PROCUROU\nFazer: contar para um adulto mesmo que a conversa pareça inofensiva, guardar as mensagens, bloquear. Se houve pedido de foto, encontro ou segredo, isso é aliciamento e vira caso de delegacia e Disque 100.\nNão fazer: continuar a conversa para descobrir quem é, e não contar para não preocupar.\n\nA REGRA COMUM ÀS SEIS: guardar prova antes de bloquear ou apagar, e contar para alguém nos primeiros dez minutos.'
    },
    {
      titulo: 'A linha do não castigo',
      tipo: 'folha',
      corpo: 'Esta é a parte difícil, e sem ela a folha na parede é decoração.\n\nLeia em voz alta:\n\n"Se qualquer uma dessas seis coisas acontecer com você, você vai ser ajudado. Você não vai perder o celular por ter contado. Você não vai ouvir eu avisei."\n\nAgora a pergunta honesta, para cada pessoa da casa:\n\nSe acontecesse hoje, você contaria? ( ) sim ( ) não\n\nSe a resposta for não, a pergunta seguinte é a que importa:\nO que precisaria mudar para você contar?\n____________________________________\n\nEscreva aqui o que ficou combinado, com as palavras da pessoa que respondeu não:\n____________________________________\n\nObservação para os adultos: a resposta mais comum de um adolescente é que ele perderia o celular ou perderia acesso. Se a consequência de contar for perder a ferramenta, ninguém conta, e o adulto fica sabendo tarde ou não fica sabendo. Vale separar as duas coisas com clareza: proteger não é punir, e uma restrição temporária, se for necessária, é uma decisão de segurança combinada antes, e não um castigo aplicado depois.'
    }
  ],

  mediacao: {
    perguntas: [
      'Se acontecesse hoje, você contaria? O que precisaria mudar para você contar?',
      'Por que guardar prova antes de bloquear?',
      'Em qual das seis a vergonha atrasa mais a resposta?',
      'Quem desta casa é a pessoa mais fácil de procurar? Ela sabe disso?'
    ],
    evitar: [
      'Prometer não castigar e castigar depois. Uma única vez destrói o plano para sempre, e destrói junto a chance de saber da próxima.',
      'Usar a atividade para investigar se já aconteceu alguma coisa. Se um relato surgir espontaneamente, sair do formato da atividade e acolher.',
      'Detalhar casos reais de violência para assustar. O plano funciona por preparo, não por medo.',
      'Deixar os telefones em branco para preencher depois. Depois não acontece.'
    ]
  },

  protecao: 'Tema sensível. Esta é a única ficha da coleção familiar que pode tocar em situações reais em curso, e por isso a mediação exige preparo. Ninguém deve ser convidado a relatar se já passou por alguma das seis situações. Se alguém relatar espontaneamente, encerrar a atividade, acolher em particular e acionar o canal adequado. Em situações envolvendo conteúdo íntimo de menor de idade, aliciamento ou ameaça, o caminho é delegacia, Disque 100 e SaferNet, e não a resolução doméstica. Nenhuma senha real é escrita na folha da parede.',

  evidencia: 'A folha fica afixada com os seis procedimentos e os telefones preenchidos, e a linha do não castigo foi negociada com resposta afirmativa de todas as pessoas da casa.'
}

);


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
  grupo: 'turma',
  eixo: 'seguranca',
  nivel: 1,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela', 'sensivel'],

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


/* 6 a 8 anos — segundo lote. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 28 */
{
  id: 'dois-cliques-dez-copias',
  insightCurto: 'Compartilhar leva dois segundos. Recolher todas as cópias não leva tempo nenhum, porque não dá.',
  n: 28,
  titulo: 'Dois cliques, dez cópias',
  chamada: 'Um barbante mostra o caminho de uma foto. Em quatro rodadas ele não cabe mais na sala.',
  faixa: '6-8',
  duracao: 30,
  formato: 'simulacao',
  formatoDetalhe: 'Experimento com barbante e cartas',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['foto', 'consentimento'],
  disciplinas: ['Matemática', 'Língua Portuguesa'],
  preparo: 'baixo',
  grupo: 'turma',
  eixo: 'consentimento',
  nivel: 3,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF03CO09', texto: 'Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.' },
    secundaria: { codigo: 'EF15CO09', texto: 'Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Compreender a assimetria entre a facilidade de compartilhar e a impossibilidade de recolher.' },

  provocacao: 'Esta carta é uma foto. Vou entregar para duas pessoas. Cada uma entrega para outras duas. Em quatro rodadas eu quero ver se ainda dá para saber quem está com ela.',

  missao: 'Espalhar a carta pela sala seguindo a regra de dois, contando quantas cópias existem a cada rodada, e depois tentar recolher todas.',

  virada: 'Depois de quatro rodadas, o facilitador anuncia que a dona da foto pediu para tirar do ar, e dá trinta segundos para a turma recolher tudo. A contagem final nunca fecha: sempre falta carta, sempre tem alguém que já passou para fora do círculo, e o barbante mostra caminhos que ninguém consegue desfazer. A turma vê, com os próprios olhos, a diferença entre a velocidade de espalhar e a de recolher.',

  insight: 'Passar adiante leva dois segundos e não custa nada. Recolher exige encontrar cada pessoa, uma por uma, e nunca fecha a conta.',

  transferencia: 'Antes de encaminhar a foto ou o print de alguém, vale lembrar do barbante. Encaminhar é fácil. Desencaminhar não existe.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Formar um círculo grande. Explicar a regra de dois. Entregar a primeira carta e amarrar a ponta do barbante no pulso de quem recebeu.' },
    { t: '5 a 16 min',  o: 'Quatro rodadas. A cada rodada, quem tem carta entrega cópias para duas pessoas e estende o barbante até elas. Parar a cada rodada e contar em voz alta: 1, 2, 4, 8, 16. Anotar no quadro.' },
    { t: '16 a 22 min', o: 'A virada. Anunciar o pedido de retirada e cronometrar trinta segundos de recolhimento. Contar quantas voltaram e quantas faltaram.' },
    { t: '22 a 27 min', o: 'Olhar o emaranhado de barbante do alto, de pé. Perguntar quem consegue dizer por onde a foto passou.' },
    { t: '27 a 30 min', o: 'Fechamento com a folha de conclusão e a conta: se cada pessoa passasse para duas, quantas cópias teria na rodada 10?' }
  ],

  versoes: {
    escola: 'Turma inteira, precisa de espaço para o círculo. Se a sala for pequena, fazer no pátio. Integra Matemática de forma muito concreta: a sequência 1, 2, 4, 8, 16 aparece no chão, e a pergunta da rodada 10 costuma surpreender bastante.',
    familia: 'Versão de mesa com moedas ou tampinhas em vez de barbante. Dobrar a cada rodada e ver a pilha crescer. Depois combinar a regra da casa sobre encaminhar foto de gente conhecida em grupos de mensagem.',
    jovem: 'A partir de 11 anos, calcular quantas rodadas seriam necessárias para a foto chegar a mil pessoas, e depois pesquisar quantas pessoas há em um grupo típico de escola.'
  },

  kit: [
    { nome: 'Cartas de cópia', tipo: 'imprimivel', desc: 'Trinta e uma cartas iguais, o suficiente para quatro rodadas completas.' },
    { nome: 'Quadro de contagem', tipo: 'imprimivel', desc: 'Para registrar quantas cópias existem a cada rodada.' },
    { nome: 'Folha de conclusão', tipo: 'imprimivel', desc: 'Com a conta da rodada 10.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Os números, e como conduzir o momento do recolhimento.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cartas de cópia',
      tipo: 'cartas',
      nota: 'Imprimir 31 cartas idênticas. Precisa de barbante ou lã, cerca de 30 metros.',
      corpo: 'Frente: o desenho de uma foto com uma moldura, e dentro dela uma pessoa de costas.\n\nVerso, em letra grande:\nESTA É UMA CÓPIA.\nQuem me recebeu: ____________\nQuem me entregou: ____________'
    },
    {
      titulo: 'Quadro de contagem',
      tipo: 'cartaz',
      corpo: 'QUANTAS CÓPIAS EXISTEM AGORA?\n\nRodada 0 (só a dona da foto): ______\nRodada 1: ______\nRodada 2: ______\nRodada 3: ______\nRodada 4: ______\n\nDepois do pedido para tirar do ar:\nQuantas voltaram: ______\nQuantas faltaram: ______'
    },
    {
      titulo: 'Folha de conclusão',
      tipo: 'folha',
      corpo: 'Na rodada 4 tinha ______ cópias.\n\nA gente conseguiu recolher ______ e faltaram ______.\n\nPara espalhar, a gente levou ______ minutos.\nPara recolher, a gente teve ______ segundos e ______ (conseguiu / não conseguiu).\n\nSe cada pessoa passasse para duas, na rodada 10 teria ______ cópias.\n\nO que eu faço antes de encaminhar a foto de alguém:\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'OS NÚMEROS\nRodada 0: 1. Rodada 1: 2. Rodada 2: 4. Rodada 3: 8. Rodada 4: 16.\nTotal de cartas em circulação ao fim: 31, contando todas as rodadas.\nRodada 10: 1024 cópias.\n\nO NÚMERO DA RODADA 10 é o que fecha a atividade. Crianças de 7 anos costumam chutar "uns cinquenta". Escrever 1024 no quadro produz um silêncio muito útil.\n\nO MOMENTO DO RECOLHIMENTO precisa ser cronometrado de verdade, em voz alta, com contagem regressiva. A confusão é o conteúdo. Não organizar, não ajudar, não facilitar. Ao fim, contar as cartas devolvidas na frente de todos.\n\nSempre falta carta. Se por acaso todas voltarem, o facilitador tem uma carta reserva no bolso: mostrar e dizer que essa saiu da sala e foi para outra turma. A turma entende na hora.\n\nO EMARANHADO DE BARBANTE é a melhor imagem da atividade e merece um minuto de silêncio olhando de pé. Perguntar quem consegue dizer por onde a foto passou. Ninguém consegue, nem o facilitador.\n\nCUIDADO NA CONDUÇÃO: a foto é de uma personagem fictícia desenhada de costas, de propósito. Nunca usar foto real de criança da turma, nem de brincadeira, nem "só para ficar mais legal". Seria reproduzir exatamente o dano que a atividade quer ensinar a evitar.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quanto tempo levou para espalhar? E para recolher?',
      'Alguém consegue dizer por onde a foto passou?',
      'Quantas cópias teria na rodada 10?',
      'A dona da foto pediu para tirar. A gente conseguiu atender o pedido dela?',
      'Quem passou a carta adiante fez alguma coisa errada?'
    ],
    evitar: [
      'Usar foto real de alguém da turma. Reproduz o dano que a atividade combate.',
      'Ajudar no recolhimento. A bagunça de trinta segundos é o aprendizado inteiro.',
      'Culpar quem passou adiante. Ninguém quebrou regra nenhuma: a regra era passar. O ponto é o sistema, não a maldade individual.',
      'Terminar sem a conta da rodada 10. É o número que fica.'
    ]
  },

  protecao: 'A foto da carta é um desenho de personagem fictícia, de costas. Nenhuma foto real de criança, família ou professor é usada em qualquer etapa. Não fotografar a atividade com as crianças identificáveis. Não pedir relatos sobre fotos que circularam de verdade.',

  evidencia: 'A criança compara explicitamente o tempo de espalhar com o de recolher e reconhece que o pedido de retirada não foi integralmente atendido, apesar do esforço da turma.'
},

/* ==================================================================== 29 */
{
  id: 'print-perdeu-a-historia',
  insightCurto: 'Um pedaço de conversa pode dizer o contrário da conversa inteira.',
  n: 29,
  titulo: 'O print perdeu a história',
  chamada: 'A frase sozinha parece maldade. Com as três antes e as duas depois, vira outra coisa.',
  faixa: '6-8',
  duracao: 30,
  formato: 'investigacao',
  formatoDetalhe: 'Quadrinhos embaralhados',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['informacao', 'foto'],
  disciplinas: ['Língua Portuguesa', 'Artes'],
  preparo: 'baixo',
  grupo: 'dupla',
  eixo: 'informacao',
  nivel: 1,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF04CO08', texto: 'Reconhecer a importância de verificar a confiabilidade das fontes de informações obtidas na Internet.' },
    secundaria: { codigo: 'EF03CO09', texto: 'Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Reconhecer que recortes de contexto alteram o significado de uma mensagem.' },

  provocacao: 'Alguém tirou uma foto da tela e mandou para a turma inteira. Na foto tem uma frase só: "eu não quero brincar com você". Todo mundo ficou bravo com a Bel.',

  missao: 'Descobrir o que aconteceu de verdade, colocando os seis quadrinhos da conversa na ordem certa.',

  virada: 'Quando as duplas montam a conversa completa, aparece o que o print tinha cortado: a Bel estava recusando brincar de um jogo em que o Téo sempre ficava de fora, e a frase seguinte dela era "eu quero brincar de outra coisa, com você e com o Téo junto". O print não era mentira. Cada letra estava certa. E mesmo assim contava o contrário.',

  insight: 'Um print pode estar certo e enganado ao mesmo tempo. Cortar o antes e o depois muda o sentido sem precisar mentir em nada.',

  transferencia: 'Quando chegar um print com uma frase de alguém, dá para perguntar duas coisas antes de ficar bravo: o que veio antes disso, e o que veio depois?',

  roteiro: [
    { t: '0 a 5 min',   o: 'Mostrar só o print, grande, na parede. Perguntar o que a turma acha da Bel. Deixar as crianças reagirem e anotar as reações no quadro. Não corrigir nenhuma.' },
    { t: '5 a 15 min',  o: 'Entregar os seis quadrinhos embaralhados a cada dupla. As duplas montam a conversa na ordem que faz sentido.' },
    { t: '15 a 20 min', o: 'Cada dupla lê a conversa montada. Comparar as versões: quase todas chegam na mesma ordem.' },
    { t: '20 a 25 min', o: 'A virada. Voltar ao quadro com as reações do começo. Perguntar, uma por uma, se a turma ainda pensa aquilo. Riscar juntos o que mudou.' },
    { t: '25 a 30 min', o: 'Construir o cartaz das duas perguntas. Cada dupla escreve ou desenha o que fará da próxima vez que receber um print.' }
  ],

  versoes: {
    escola: 'Duplas, um jogo de quadrinhos por dupla. O momento mais forte é riscar as reações do começo no quadro: dá para ver a turma mudando de opinião coletivamente. Encaixa em Língua Portuguesa, no trabalho com sequência narrativa.',
    familia: 'Ler o print sozinho e pedir para a criança julgar. Depois entregar a conversa inteira. Aproveitar para combinar o que a família faz quando chega um print de alguém conhecido.',
    jovem: 'A partir de 11 anos, o desafio é inventar um print que faça uma frase inofensiva parecer horrível, e depois discutir por que foi tão fácil.'
  },

  kit: [
    { nome: 'O print', tipo: 'imprimivel', desc: 'A frase isolada, em página inteira, para mostrar primeiro.' },
    { nome: 'Seis quadrinhos da conversa', tipo: 'imprimivel', desc: 'Embaralhados, um jogo por dupla.' },
    { nome: 'Cartaz das duas perguntas', tipo: 'imprimivel', desc: 'Para preencher e afixar.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'A ordem, e o que observar nas reações do começo.' }
  ],

  imprimiveis: [
    {
      titulo: 'O print (mostrar primeiro, sozinho)',
      tipo: 'folha',
      corpo: 'Imprimir em página inteira, dentro de uma moldura de tela de celular, como se fosse uma captura.\n\nUm balão de conversa só, com o nome BEL em cima:\n\n"eu não quero brincar com você"\n\nNada mais na página. Nenhuma outra mensagem, nenhum horário, nenhum contexto.'
    },
    {
      titulo: 'Seis quadrinhos da conversa (embaralhar)',
      tipo: 'cartas',
      nota: 'Cada quadrinho com o nome de quem fala e um desenho simples.',
      itens: [
        'NINA: bel, vamos brincar de pega-pega gelo no recreio?',
        'BEL: quem vai brincar?',
        'NINA: eu, você e a turma toda. só o téo que não pode porque ele corre devagar.',
        'BEL: eu não quero brincar com você',
        'BEL: quer dizer, eu não quero brincar desse jeito. eu quero brincar de outra coisa, com você e com o téo junto.',
        'NINA: ah tá. então vamos brincar de esconde-esconde, aí o téo brinca também.'
      ]
    },
    {
      titulo: 'Cartaz das duas perguntas',
      tipo: 'cartaz',
      corpo: 'Título grande:\nQUANDO CHEGA UM PRINT, EU PERGUNTO\n\n1. O QUE VEIO ANTES?\n\n2. O QUE VEIO DEPOIS?\n\nAbaixo, espaço para as duplas desenharem ou escreverem:\n\nAntes de ficar bravo com alguém, eu ______________________.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'ORDEM CORRETA: Nina, Bel, Nina, Bel, Bel, Nina.\n\nO QUE O PRINT CORTOU\nAntes: que a brincadeira excluía o Téo.\nDepois: que a Bel completou a frase e propôs incluir todo mundo.\n\nO print está literalmente correto. A Bel disse exatamente aquilo. É por isso que a atividade funciona: não há mentira para desmascarar, há contexto para recuperar.\n\nO MOMENTO MAIS IMPORTANTE é o das reações do começo. Anotar no quadro exatamente as palavras que as crianças usarem sobre a Bel, mesmo as duras, e sem repreender ninguém. Depois da montagem, voltar a cada uma e perguntar se ainda vale. Riscar juntos.\n\nSe alguma criança disser no começo que precisa saber mais antes de julgar, celebrar em voz alta. É a competência inteira da atividade, já presente, e vale nomear.\n\nUM DETALHE QUE COSTUMA APARECER: alguma criança percebe que a Nina também errou, ao excluir o Téo. É verdade e é uma ótima observação. Acolher, e devolver que a atividade é sobre o print, mas que ela tem razão sobre a brincadeira.\n\nNÃO transformar a Nina em vilã por ter tirado o print. Nem se sabe quem tirou. Essa incerteza, aliás, é outra boa pergunta: quem foi que recortou?'
    }
  ],

  mediacao: {
    perguntas: [
      'O print era mentira? Estava escrito errado?',
      'O que sumiu quando alguém recortou?',
      'Quem recortou a conversa? A gente sabe?',
      'O que a gente faz antes de ficar bravo com alguém por causa de um print?'
    ],
    evitar: [
      'Explicar o que aconteceu antes das duplas montarem. A reação injusta do começo precisa existir para poder ser revista.',
      'Repreender as crianças pelas reações duras do início. Elas reagiram ao que viram, que é exatamente o que a atividade quer mostrar.',
      'Usar prints reais de conversas de crianças da turma ou da escola, em nenhuma hipótese.'
    ]
  },

  protecao: 'A conversa é fictícia e não reproduz mensagens reais. Nunca usar prints de conversas reais de estudantes, famílias ou professores, mesmo com nomes apagados. Se houver um caso real em curso na turma, esta atividade não é o espaço para tratá-lo: aplicar em outro momento e encaminhar o caso pelo canal próprio.',

  evidencia: 'A criança revê pelo menos um julgamento inicial depois de conhecer a conversa completa e enuncia uma das duas perguntas de verificação diante de um recorte.'
},

/* ==================================================================== 30 */
{
  id: 'pare-feche-ou-conte',
  insightCurto: 'Não precisa descobrir sozinho se é golpe. Chamar alguém já é a resposta certa.',
  n: 30,
  titulo: 'Pare, feche ou conte',
  chamada: 'Seis mensagens chegam. Uma é de verdade. E não dá para saber olhando.',
  faixa: '6-8',
  duracao: 30,
  formato: 'jogo',
  formatoDetalhe: 'Corrida de decisões em equipes',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['golpe'],
  disciplinas: ['Língua Portuguesa', 'Educação Física'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'seguranca',
  nivel: 2,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF02CO06', texto: 'Reconhecer os cuidados com a segurança no uso de dispositivos computacionais.' },
    secundaria: { codigo: 'EF01CO07', texto: 'Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Adotar procedimento de verificação com apoio adulto diante de mensagens suspeitas.' },

  provocacao: 'Seis mensagens chegaram no aparelho. Cada equipe vai decidir o que fazer com cada uma. Vocês têm dez segundos por mensagem, porque na vida real também não dá muito tempo.',

  missao: 'Correr até o cartaz da ação escolhida antes do tempo acabar, e depois defender a escolha da equipe.',

  virada: 'No fim, o facilitador revela que uma das seis mensagens era verdadeira: o aviso da escola sobre o passeio. E revela também que a mensagem mais bem escrita, mais educada e mais bonita de todas era a mais perigosa. As equipes descobrem que estavam procurando erros de português e emoji demais, e que nada disso funciona. Só uma ação funcionou nas seis: contar.',

  insight: 'Não existe um jeito de olhar e saber. A mensagem de golpe pode ser mais bem escrita que a verdadeira. Chamar um adulto funciona nas seis, inclusive quando a mensagem é de verdade.',

  transferencia: 'Chegou mensagem estranha, mesmo que pareça boa: não responder, não clicar, chamar alguém. E não precisa ter certeza de nada antes de chamar.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Colar os três cartazes de ação em três paredes da sala. Formar as equipes. Explicar a regra dos dez segundos.' },
    { t: '5 a 20 min',  o: 'Seis rodadas. Ler a mensagem em voz alta, contar dez segundos, as equipes correm para o cartaz escolhido. Depois cada equipe diz em uma frase por que escolheu. Não revelar nada ainda.' },
    { t: '20 a 25 min', o: 'A virada. Revelar mensagem por mensagem. Deixar a do passeio da escola e a mensagem bonita para o fim.' },
    { t: '25 a 30 min', o: 'Contar juntos: em quantas das seis a ação CONTAR teria dado certo? Fechar com a folha de bolso.' }
  ],

  versoes: {
    escola: 'Equipes de quatro a cinco, três cartazes nas paredes. Precisa de espaço para correr, então funciona melhor no pátio ou com as carteiras afastadas. Se não houver espaço, as equipes levantam a placa da ação em vez de correr.',
    familia: 'Ler as seis mensagens no sofá e decidir juntos. O adulto também escolhe, em voz alta, e erra em alguma, de propósito ou não. Ver um adulto ficar em dúvida é a melhor parte para a criança.',
    jovem: 'A partir de 11 anos, a versão avançada é o "Laboratório de phishing", que trabalha os mesmos sinais com mais nuance.'
  },

  kit: [
    { nome: 'Seis cartas de mensagem', tipo: 'imprimivel', desc: 'Para o facilitador ler em voz alta.' },
    { nome: 'Três cartazes de ação', tipo: 'imprimivel', desc: 'Pare, feche, conte.' },
    { nome: 'Folha de bolso', tipo: 'imprimivel', desc: 'O que fazer, em três linhas, para levar para casa.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'A resposta de cada mensagem e a virada.' }
  ],

  imprimiveis: [
    {
      titulo: 'Seis cartas de mensagem',
      tipo: 'cartas',
      nota: 'Ler em voz alta, uma por rodada, na ordem indicada. Não comentar entre uma e outra.',
      itens: [
        '1. "PARABÉNS!!! Você ganhou um tablet novo!!! Clique aqui para receber!!!"',
        '2. "Oi, sou amigo da sua mãe. Ela pediu para eu te buscar hoje. Me manda o nome da sua escola?"',
        '3. "Aviso da Escola Municipal: o passeio de sexta-feira foi adiado para a próxima semana. Falem com a coordenação."',
        '4. "Seu jogo vai ser apagado em 1 hora! Digite sua senha aqui para salvar!"',
        '5. "oi td bem? vc lembra de mim? a gente estudou junto ano passado"',
        '6. "Prezado usuário, identificamos uma atividade incomum em sua conta. Para sua segurança, solicitamos a confirmação dos seus dados através do link abaixo. Agradecemos a compreensão."'
      ]
    },
    {
      titulo: 'Três cartazes de ação',
      tipo: 'cartaz',
      corpo: 'Três folhas grandes, uma por parede, com desenho e palavra:\n\nCARTAZ 1: PARE\n(uma mão aberta) Eu paro e não faço nada ainda.\n\nCARTAZ 2: FECHE\n(um X) Eu fecho a mensagem e não respondo.\n\nCARTAZ 3: CONTE\n(duas pessoas conversando) Eu chamo um adulto e mostro.'
    },
    {
      titulo: 'Folha de bolso',
      tipo: 'folha',
      corpo: 'CHEGOU MENSAGEM ESTRANHA?\n\n1. Eu não respondo.\n2. Eu não clico em nada.\n3. Eu chamo ______________________ ou ______________________.\n\nEu não preciso ter certeza de que é golpe para chamar.\n\nSe a mensagem for de verdade, chamar também funciona.\n\nDesenhe aqui a sua cara quando chega uma mensagem esquisita:'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'MENSAGEM POR MENSAGEM\n\n1. Prêmio com excesso de pontos de exclamação. Golpe clássico. Quase toda turma acerta, e é bom que a primeira seja fácil.\n\n2. A mais perigosa das seis, e a que menos equipes marcam como perigosa, porque parece educada e pede uma informação pequena. Pedir o nome da escola de uma criança é pedir onde ela está todo dia, às mesmas horas. Conecta direto com "Pistas que se juntam".\n\n3. VERDADEIRA. É o aviso real da escola. Muitas equipes escolhem FECHE, e aí vem a pergunta boa: e se você fechar e o passeio for adiado mesmo? Contar funciona aqui também, o que é exatamente o ponto.\n\n4. Urgência mais pedido de senha. Nenhum jogo, aplicativo ou escola pede senha por mensagem. Nunca.\n\n5. A mais ambígua de todas, de propósito. Pode ser um colega antigo de verdade. Não dá para saber. A resposta honesta é que não se resolve sozinho, e por isso CONTAR é a saída.\n\n6. A mensagem bem escrita, formal, sem erro de português, educada. É a mais perigosa depois da número 2, e quase nenhuma equipe desconfia. É a que desmonta a ideia de que golpe se reconhece por texto malfeito.\n\nA CONTA FINAL: em 6 de 6 mensagens, CONTAR era uma ação segura, inclusive na verdadeira. Escrever 6 de 6 no quadro é o fechamento.\n\nCUIDADO: não transformar em campeonato de acertos. Equipes que erram a 2 e a 6 são a maioria, e o objetivo não é premiar quem adivinha, é mostrar que adivinhar não é o caminho.'
    }
  ],

  mediacao: {
    perguntas: [
      'Qual mensagem parecia mais bonita e bem escrita? Ela era segura?',
      'Uma das seis era de verdade. Qual? Chamar um adulto atrapalhou?',
      'Dá para saber olhando se é golpe?',
      'Você precisa ter certeza para chamar alguém?'
    ],
    evitar: [
      'Ensinar que golpe se reconhece por erro de português. É falso, e a mensagem 6 existe para provar. Uma criança que aprende isso fica mais vulnerável, não menos.',
      'Premiar quem acertou mais. Vira competição de adivinhação, que é a habilidade errada.',
      'Enviar mensagens de teste de verdade para as crianças ou para as famílias. Nunca.',
      'Deixar a mensagem verdadeira de fora. Sem ela, a turma aprende a desconfiar de tudo, inclusive da escola.'
    ]
  },

  protecao: 'Todas as mensagens são fictícias e lidas em voz alta pelo facilitador. Nenhuma é enviada a ninguém, por nenhum meio. Nenhum aparelho é usado. Não perguntar se a criança ou a família já recebeu mensagens assim. Nenhuma senha ou dado real é dito em voz alta.',

  evidencia: 'A criança identifica CONTAR como ação válida também para a mensagem verdadeira e afirma que não é possível reconhecer um golpe apenas pela aparência do texto.'
},

/* ==================================================================== 31 */
{
  id: 'casa-conectada-do-teo',
  insightCurto: 'Computador nem sempre tem cara de computador. Tem uns que escutam a sala inteira.',
  n: 31,
  titulo: 'A casa conectada do Téo',
  chamada: 'Na sala do Téo tem onze objetos. Sete escutam, olham ou anotam alguma coisa.',
  faixa: '6-8',
  duracao: 30,
  formato: 'investigacao',
  formatoDetalhe: 'Investigação em mapa ilustrado',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['dados'],
  disciplinas: ['Ciências', 'Geografia', 'Artes'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'privacidade',
  nivel: 2,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF02CO04', texto: 'Diferenciar componentes físicos (hardware) e programas que fornecem as instruções (software) para o hardware.' },
    secundaria: { codigo: 'EF03CO09', texto: 'Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Identificar dispositivos de coleta em objetos cotidianos que não se apresentam como computadores.' },

  provocacao: 'Esta é a casa do Téo. Parece uma casa normal. Vocês vão descobrir quantas coisas aqui dentro estão prestando atenção.',

  missao: 'Marcar no mapa, com quatro símbolos, quais objetos escutam, olham, anotam ou mandam alguma coisa para fora da casa.',

  virada: 'Quando os grupos terminam, o facilitador entrega a lupa: uma lista de objetos que quase ninguém marca, entre eles o controle da televisão, o aspirador que desenha a planta da casa e o brinquedo que responde. E então a pergunta que ninguém espera: qual desses objetos alguém da casa do Téo já configurou? Nenhum. Todos estão do jeito que vieram da fábrica.',

  insight: 'Computador nem sempre parece computador. E o que decide o que ele faz não é o objeto, é a configuração que ninguém nunca abriu.',

  transferencia: 'Dá para olhar para os objetos de qualquer sala e fazer uma pergunta simples: será que este aqui escuta? E depois perguntar a um adulto onde fica o botão de desligar isso.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Apresentar o mapa da casa do Téo. Ler juntos a legenda dos quatro símbolos: ouvido, olho, caderno, seta.' },
    { t: '5 a 15 min',  o: 'Em grupos de quatro, marcar o mapa. Circular sem dar dicas. Contar em voz alta quantos objetos cada grupo marcou.' },
    { t: '15 a 21 min', o: 'A virada. Entregar a folha da lupa. Os grupos voltam ao mapa e acrescentam o que faltou.' },
    { t: '21 a 26 min', o: 'A segunda pergunta: quantos desses o Téo já configurou? Discutir o que quer dizer "do jeito que veio de fábrica".' },
    { t: '26 a 30 min', o: 'Cada grupo escolhe um objeto e desenha como seria o botão de desligar dele.' }
  ],

  versoes: {
    escola: 'Grupos de quatro, um mapa por grupo. Usar a casa fictícia do Téo e nunca a casa real de nenhuma criança, o que protege a turma de expor a própria família. Integra Ciências, no reconhecimento de sensores.',
    familia: 'A versão de casa é a ficha "Mapa da casa conectada", que faz o mesmo percurso com a casa real da família e tem cuidados próprios. Esta aqui, com o Téo, funciona melhor na escola.',
    jovem: 'A partir de 11 anos, o desafio extra é ordenar os objetos do que menos incomoda ao que mais incomoda, e justificar a ordem.'
  },

  kit: [
    { nome: 'Mapa da casa do Téo', tipo: 'imprimivel', desc: 'Ilustração com os onze objetos e a legenda.' },
    { nome: 'Folha da lupa', tipo: 'imprimivel', desc: 'A virada. Entregar só depois da primeira marcação.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Objeto por objeto, o que cada um faz.' }
  ],

  imprimiveis: [
    {
      titulo: 'Mapa da casa do Téo',
      tipo: 'folha',
      nota: 'Ilustração em página inteira, vista de cima, com quatro cômodos e os objetos desenhados no lugar.',
      corpo: 'OS ONZE OBJETOS DA CASA\n\nSALA: televisão grande, controle remoto, caixa de som que responde quando chamam, videogame.\nCOZINHA: geladeira comum, tablet preso na parede.\nQUARTO DO TÉO: tablet, ursinho que fala e responde, abajur comum.\nENTRADA: campainha com câmera.\nCORREDOR: aspirador robô.\n\nLEGENDA, no rodapé da folha:\nOUVIDO = escuta som\nOLHO = tem câmera\nCADERNO = anota o que a gente faz\nSETA = manda coisa para fora da casa\n\nUm objeto pode ter mais de um símbolo.'
    },
    {
      titulo: 'Folha da lupa (a virada)',
      tipo: 'folha',
      corpo: 'Vocês marcaram estes?\n\n. O CONTROLE REMOTO. Muitos controles têm microfone, para a pessoa falar o nome do desenho em vez de digitar.\n\n. O ASPIRADOR ROBÔ. Ele anda pela casa desenhando um mapa de onde tem parede, sofá e cama, e manda esse mapa para fora.\n\n. O URSINHO QUE FALA. Para responder, ele precisa escutar. E para saber o que responder, ele manda o que ouviu para fora.\n\n. A CAMPAINHA. Ela filma quem chega, e às vezes guarda o vídeo.\n\n. O VIDEOGAME. Ele anota quanto tempo cada pessoa jogou e o que jogou.\n\nAGORA A PERGUNTA DIFÍCIL:\n\nQuantos desses objetos alguém da casa do Téo já abriu para escolher o que ele faz e o que ele não faz?\n\nResposta do Téo: nenhum. Todos estão do jeitinho que vieram da caixa.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'OS SETE QUE COLETAM\n\nTelevisão: ouvido, caderno, seta. Anota o que a família assiste.\nControle remoto: ouvido. É o mais esquecido de todos.\nCaixa de som: ouvido, caderno, seta. Costuma ser o primeiro que as crianças marcam.\nVideogame: caderno, seta.\nTablet da cozinha e do quarto: ouvido, olho, caderno, seta. Os quatro símbolos.\nUrsinho que fala: ouvido, caderno, seta.\nCampainha: olho, caderno, seta.\nAspirador: caderno, seta. E é o que mais surpreende, porque desenha a planta da casa.\n\nOS QUE NÃO COLETAM\nGeladeira comum e abajur comum. Eles existem no mapa de propósito: sem objetos inocentes, a atividade vira paranoia. Vale nomear isso no fim, com todas as letras: nem todo objeto está prestando atenção.\n\nO QUE COSTUMA ACONTECER\nGrupos marcam entre 3 e 5 objetos na primeira rodada, quase sempre os que têm tela. A lupa costuma dobrar o número.\n\nA SEGUNDA PERGUNTA é a mais importante e a que sai da aula com a criança. O problema não é o objeto existir, é ninguém nunca ter aberto para escolher. A resposta que a turma leva não é "jogue fora", é "dá para abrir e escolher".\n\nSe alguma criança ficar assustada, acolher com o exemplo da geladeira e do abajur, e com o desenho do botão de desligar da última etapa. A atividade precisa terminar com a sensação de que dá para fazer alguma coisa.'
    }
  ],

  mediacao: {
    perguntas: [
      'Qual objeto você nunca tinha pensado que era um computador?',
      'Tem algum objeto aqui que não presta atenção em nada?',
      'O aspirador desenha a planta da casa. Para onde vai esse desenho?',
      'Quantos desses objetos alguém já abriu para escolher o que eles fazem?',
      'Se você pudesse desligar uma coisa de um objeto, qual seria?'
    ],
    evitar: [
      'Terminar com medo. A geladeira e o abajur estão no mapa justamente para mostrar que nem tudo escuta, e a etapa do botão de desligar existe para a criança sair com poder, não com susto.',
      'Pedir que as crianças listem os objetos da casa delas. É exposição da família, e existe uma ficha doméstica própria para isso.',
      'Citar marcas reais de caixas de som, televisões ou assistentes.',
      'Entregar a folha da lupa antes da primeira marcação.'
    ]
  },

  protecao: 'A casa do Téo é fictícia. Não pedir que a criança descreva, liste ou desenhe os objetos da própria casa, e não citar marcas reais. O mapeamento da casa real é uma atividade doméstica, com cuidados próprios, e o mapa resultante é documento privado da família.',

  evidencia: 'A criança identifica pelo menos dois objetos sem tela que coletam dados e afirma, com as próprias palavras, que o comportamento do objeto depende de uma configuração que pode ser aberta.'
}

);


/* 9 a 10 anos — segundo lote. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 32 */
{
  id: 'noticia-em-tres-versoes',
  insightCurto: 'O mesmo fato pode virar notícia, anúncio ou barraco. Quem escreveu queria coisas diferentes de você.',
  n: 32,
  titulo: 'A notícia em três versões',
  chamada: 'Três textos, um fato só. Um informa, um vende e um quer sua raiva.',
  faixa: '9-10',
  duracao: 35,
  duracaoCurta: 25,
  comoEncurtar: 'Em 25 minutos: entregue as três versões já identificadas por letra e trabalhe só a tabela de comparação, cortando a etapa de reescrita. A pergunta sobre o que cada autor queria não pode sair.',
  formato: 'investigacao',
  formatoDetalhe: 'Comparação de manchetes e textos',
  contexto: ['escola', 'casa', 'individual'],
  tela: 'sem-tela',
  situacao: ['informacao', 'propaganda'],
  disciplinas: ['Língua Portuguesa', 'História', 'Ciências'],
  preparo: 'baixo',
  grupo: 'dupla',
  eixo: 'informacao',
  nivel: 3,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF05CO08', texto: 'Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis.' },
    secundaria: { codigo: 'EF04CO08', texto: 'Reconhecer a importância de verificar a confiabilidade das fontes de informações obtidas na Internet.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Avaliar finalidade e autoria como critérios de confiabilidade de uma mensagem.' },

  provocacao: 'Aconteceu uma coisa só na cidade: a prefeitura trocou o piso da quadra do bairro. Três textos falam disso. Os três são sobre o mesmo dia, o mesmo lugar e a mesma quadra. Leiam e me digam se parece a mesma história.',

  missao: 'Preencher a tabela de comparação das três versões e descobrir, para cada uma, quem escreveu e o que essa pessoa queria que o leitor fizesse.',

  virada: 'Depois da comparação, o facilitador revela as autorias: a versão A foi escrita pelo jornal do bairro, a B pela empresa que vendeu o piso e a C por um perfil que ganha dinheiro por clique. E então mostra o dado que estava faltando nas três: o custo da obra, que só aparece na A, no último parágrafo, onde quase ninguém leu. As duplas percebem que não foi só o tom que mudou. Mudou o que cada uma escolheu não contar.',

  insight: 'Não existe só "verdade" e "mentira". Existe o que cada autor escolheu contar, o que ele escolheu deixar de fora, e o que ele queria que você fizesse depois de ler.',

  transferencia: 'Diante de qualquer texto, dá para fazer três perguntas em dez segundos: quem escreveu, o que essa pessoa ganha se eu acreditar, e o que não está aqui.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Contar o fato em uma frase neutra: a prefeitura trocou o piso da quadra. Entregar as três versões sem dizer quem escreveu cada uma.' },
    { t: '5 a 18 min',  o: 'Em duplas, preencher a tabela de comparação: título, palavras que aparecem, o que o texto pede, o que o texto não conta.' },
    { t: '18 a 24 min', o: 'A virada. Revelar as três autorias, uma por vez. Depois mostrar o dado do custo e perguntar onde ele estava.' },
    { t: '24 a 31 min', o: 'Reescrita. Cada dupla reescreve a versão C de um jeito honesto, sem tirar a informação, só tirando a manipulação.' },
    { t: '31 a 35 min', o: 'Construir o cartaz das três perguntas de bolso.' }
  ],

  versoes: {
    escola: 'Duplas, um conjunto das três versões por dupla. Encaixa muito bem em Língua Portuguesa, no trabalho com gêneros textuais, e a etapa de reescrita produz um texto avaliável. Se houver tempo, ler as reescritas em voz alta e votar na mais honesta.',
    familia: 'Ler as três versões em voz alta no jantar, sem dizer as autorias, e apostar quem escreveu cada uma. Depois procurar juntos um exemplo real de cada tipo, com o adulto operando o aparelho.',
    jovem: 'Individual: ler as três, escrever qual convenceu mais e por quê, e só depois conferir as autorias. A pergunta final é se convencer mais tem alguma relação com ser mais confiável.'
  },

  kit: [
    { nome: 'As três versões', tipo: 'imprimivel', desc: 'Textos completos, sem identificação de autoria.' },
    { nome: 'Tabela de comparação', tipo: 'imprimivel', desc: 'Quatro colunas para as duplas preencherem.' },
    { nome: 'Envelope das autorias', tipo: 'imprimivel', desc: 'A virada, mais o dado do custo.' },
    { nome: 'Cartaz das três perguntas', tipo: 'imprimivel', desc: 'Para afixar na sala.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O que observar em cada versão.' }
  ],

  imprimiveis: [
    {
      titulo: 'As três versões',
      tipo: 'folha',
      nota: 'Imprimir sem nenhuma identificação de autoria. Só as letras A, B e C.',
      corpo: 'VERSÃO A\n"Quadra do Jardim Alvorada recebe novo piso\n\nA prefeitura concluiu na última terça-feira a troca do piso da quadra poliesportiva do Jardim Alvorada. A obra durou onze dias e a quadra ficou fechada nesse período.\n\nSegundo a Secretaria de Esportes, o novo piso deve durar cerca de oito anos. Moradores ouvidos pela reportagem elogiaram o resultado, mas três deles reclamaram da falta de aviso sobre o fechamento.\n\nA obra custou R$ 214 mil e foi contratada sem licitação, com base em dispensa por valor. A empresa contratada, PisoBom, já prestou outros dois serviços à prefeitura neste ano."\n\n---\n\nVERSÃO B\n"Quadra do Jardim Alvorada ganha vida nova com tecnologia PisoBom\n\nA comunidade do Jardim Alvorada tem um novo motivo para sorrir. A quadra do bairro foi completamente revitalizada com o piso de alta performance PisoBom, o mesmo utilizado em ginásios profissionais.\n\nCom durabilidade superior e conforto para os atletas, o novo piso representa um investimento no futuro das crianças da região. Moradores já comemoram.\n\nQuer levar essa transformação para o seu bairro? Fale com a PisoBom."\n\n---\n\nVERSÃO C\n"ABSURDO: prefeitura fecha quadra por ONZE DIAS e ninguém avisou nada!!!\n\nVocê não vai acreditar no que a prefeitura fez com a quadra do Jardim Alvorada. ONZE DIAS fechada. Sem aviso. Sem satisfação. As crianças ficaram sem ter onde brincar!\n\nE tem mais: a empresa que fez a obra JÁ TINHA feito outros serviços para a prefeitura. Coincidência? Vocês decidem.\n\nCOMPARTILHE se você também acha um absurdo! Marque um vereador nos comentários!"'
    },
    {
      titulo: 'Tabela de comparação',
      tipo: 'folha',
      corpo: 'Preencham para cada versão:\n\n                                   A          B          C\nO título usa letra MAIÚSCULA?     ____      ____      ____\nQuantos pontos de exclamação?     ____      ____      ____\nO texto diz o preço da obra?      ____      ____      ____\nO texto ouviu algum morador?      ____      ____      ____\nO texto conta alguma reclamação?  ____      ____      ____\nO texto pede para você fazer algo? ____     ____      ____\nSe pede, o quê?                   ______________________\n\nAgora a pergunta difícil, para cada versão:\nQuem você acha que escreveu?      ______________________\nO que essa pessoa ganha se você acreditar? ______________'
    },
    {
      titulo: 'Envelope das autorias (a virada)',
      tipo: 'gabarito',
      corpo: 'VERSÃO A: escrita pelo jornal do bairro. Ganha se você confiar nele e voltar a ler.\n\nVERSÃO B: escrita pela própria empresa PisoBom. Ganha se você contratar a empresa.\n\nVERSÃO C: escrita por um perfil que recebe dinheiro por cada clique e cada compartilhamento. Ganha se você ficar com raiva e compartilhar.\n\n---\n\nO DADO QUE FALTOU\n\nA obra custou R$ 214 mil e foi contratada sem licitação.\n\nEm qual das três versões esse dado aparece? Só na A, no último parágrafo.\n\nA versão B não conta o preço porque preço atrapalha a venda.\nA versão C não conta o preço, mesmo sendo a que mais parece indignada, porque preço exige explicar o que é dispensa de licitação, e explicar não gera clique.\n\nA versão que mais grita é a que menos informa.'
    },
    {
      titulo: 'Cartaz das três perguntas',
      tipo: 'cartaz',
      corpo: 'ANTES DE ACREDITAR, EU PERGUNTO\n\n1. QUEM ESCREVEU ISSO?\n\n2. O QUE ESSA PESSOA GANHA SE EU ACREDITAR?\n\n3. O QUE NÃO ESTÁ AQUI?\n\nA terceira é a mais difícil e a mais importante.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'RESPOSTAS DA TABELA\n\nMaiúscula no título: só C. Exclamações: A=0, B=0, C=3. Preço: só A. Ouviu morador: A sim, B diz que "moradores comemoram" sem ouvir ninguém, C não. Reclamação: A sim (três moradores), B não, C sim mas sem fonte. Pede algo: B pede para contratar, C pede para compartilhar e marcar vereador, A não pede nada.\n\nO QUE COSTUMA ACONTECER\n\n. A versão C é a que as duplas mais gostam de ler, e quase sempre a que consideram mais "do lado do povo". A revelação de que ela ganha por clique costuma gerar reação forte. Deixar reagir.\n\n. A versão B engana menos as crianças do que se imagina: elas identificam o tom de propaganda com facilidade. O que elas não percebem é que a B não mente em nada. Vale perguntar: tem alguma frase falsa na B? Não tem.\n\n. A versão A é considerada chata pela maioria. Isso é ótimo e merece ser nomeado sem ironia: informação completa costuma ser menos empolgante que indignação, e é por isso que a indignação circula mais.\n\nSOBRE A REESCRITA DA C\nO exercício não é transformar a C na A. É manter a crítica, que é legítima, e tirar a manipulação: sem maiúscula gritada, sem "coincidência? vocês decidem", com o preço, e sem pedir compartilhamento. Uma boa reescrita continua criticando a falta de aviso. Se todas as reescritas virarem elogio à prefeitura, o exercício foi mal conduzido: criticar não é o problema, manipular é.'
    }
  ],

  mediacao: {
    perguntas: [
      'Alguma das três mentiu? Aponte a frase falsa.',
      'Qual delas te convenceu mais? Ela era a mais confiável?',
      'O preço da obra estava em qual? Por que as outras duas não contaram?',
      'A versão C parece estar do lado de quem?',
      'Dá para criticar a prefeitura sem escrever como a versão C?'
    ],
    evitar: [
      'Revelar as autorias antes da tabela. A dupla precisa deduzir a partir do texto.',
      'Tratar a versão C como simplesmente mentirosa. Ela não mente, e é isso que a torna difícil. Chamá-la de mentira entrega uma ferramenta que não funciona no mundo real.',
      'Deixar a impressão de que criticar o poder público é manipulação. A crítica da C é legítima. O problema é como ela foi construída e o que ela omite.',
      'Usar notícias reais sobre política local. O caso fictício protege a aula de virar disputa partidária.'
    ]
  },

  protecao: 'O bairro, a prefeitura, a empresa e os três veículos são fictícios. Não usar notícias reais, nomes de políticos, partidos ou empresas existentes. Não pedir que os estudantes contem o que os pais compartilham em grupos de mensagem.',

  evidencia: 'A dupla identifica a finalidade de cada versão, aponta que nenhuma contém frase falsa e nomeia pelo menos uma informação omitida em duas das três versões.'
},

/* ==================================================================== 33 */
{
  id: 'nao-adivinhe-verifique',
  insightCurto: 'Ninguém descobre uma imagem falsa olhando com atenção. Descobre procurando de onde ela veio.',
  n: 33,
  titulo: 'Não adivinhe, verifique',
  chamada: 'A turma vai tentar acertar no olho. Vai errar. Depois vai receber um protocolo e acertar tudo.',
  faixa: '9-10',
  duracao: 40,
  duracaoCurta: 25,
  comoEncurtar: 'Em 25 minutos: use quatro casos em vez de seis, mantendo obrigatoriamente o caso 3 (a foto real que parece falsa) e o caso 6 (a foto antiga recontextualizada). A rodada de palpite no olho não pode ser cortada, porque é ela que cria o problema.',
  formato: 'investigacao',
  formatoDetalhe: 'Protocolo de checagem em etapas',
  contexto: ['escola', 'individual'],
  tela: 'hibrido',
  situacao: ['informacao'],
  disciplinas: ['Língua Portuguesa', 'Ciências', 'História'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'informacao',
  nivel: 4,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF05CO08', texto: 'Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis.' },
    secundaria: { codigo: 'EF04CO08', texto: 'Reconhecer a importância de verificar a confiabilidade das fontes de informações obtidas na Internet.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Aplicar procedimento de verificação de proveniência em vez de julgamento perceptual.' },

  provocacao: 'Seis imagens. Algumas são reais, outras não. Vocês têm dois minutos para adivinhar olhando. Depois eu conto quantas vocês acertaram.',

  missao: 'Na primeira rodada, adivinhar no olho. Na segunda, aplicar o protocolo de quatro passos e refazer as respostas.',

  virada: 'Os grupos acertam pouco na primeira rodada, e o pior é onde eles erram: quase todos marcam como falsa a imagem 3, que é uma fotografia real de um fenômeno natural estranho, e como verdadeira a imagem 6, que é uma foto real de outro país e de outro ano, usada para ilustrar um acontecimento que nunca existiu. Com o protocolo em mãos, as mesmas seis imagens ficam fáceis. O que mudou não foi a atenção, foi o método.',

  insight: 'Olhar com atenção não descobre imagem falsa, e treinar o olho não adianta. O que descobre é procurar de onde a imagem veio, quando apareceu pela primeira vez e o que outras fontes dizem.',

  transferencia: 'Diante de uma imagem forte, o caminho não é "parece estranha". É procurar a publicação original, checar a data e ver se mais alguém está contando aquilo.',

  roteiro: [
    { t: '0 a 3 min',   o: 'Entregar as seis fichas de imagem e cronometrar dois minutos de palpite no olho. Cada grupo escreve real ou falsa para cada uma. Recolher as respostas.' },
    { t: '3 a 8 min',   o: 'Anunciar quantas cada grupo acertou, sem dizer quais. Deixar a frustração acontecer.' },
    { t: '8 a 14 min',  o: 'Entregar e ler juntos o protocolo de quatro passos. Explicar que cada ficha de imagem tem um verso com os dados de investigação.' },
    { t: '14 a 30 min', o: 'Segunda rodada. Os grupos aplicam o protocolo, virando as fichas e preenchendo a folha de investigação por imagem.' },
    { t: '30 a 36 min', o: 'Comparar as duas rodadas. Contar acertos de novo e escrever os dois números lado a lado no quadro.' },
    { t: '36 a 40 min', o: 'Discutir a imagem 3 e a imagem 6, que são as duas armadilhas, e fechar com o cartaz do protocolo.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Funciona totalmente desplugada, porque os dados de investigação vêm no verso das fichas. Se a escola tiver computadores, a segunda rodada pode ser feita com busca real, e aí o preparo aumenta.',
    familia: 'Fazer com três imagens em vez de seis, na mesa. O adulto costuma errar tanto quanto a criança, e vale deixar isso aparecer: é a melhor demonstração de que a habilidade não é sobre idade nem sobre experiência.',
    jovem: 'Individual: aplicar o protocolo a uma imagem que você viu circular de verdade nesta semana, sem compartilhar a imagem com ninguém durante o processo, e escrever o resultado em cinco linhas.'
  },

  kit: [
    { nome: 'Seis fichas de imagem', tipo: 'imprimivel', desc: 'Frente com a descrição, verso com os dados de investigação.' },
    { nome: 'Protocolo de quatro passos', tipo: 'imprimivel', desc: 'O método, em cartaz e em folha individual.' },
    { nome: 'Folha de investigação', tipo: 'imprimivel', desc: 'Uma por imagem.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'As respostas e por que as duas armadilhas funcionam.' }
  ],

  imprimiveis: [
    {
      titulo: 'Seis fichas de imagem, frente',
      tipo: 'cartas',
      nota: 'A frente traz só a descrição da imagem e a legenda com que ela circulou. Sem nenhum dado extra.',
      itens: [
        '1. Foto de um gato do tamanho de um sofá, sentado ao lado de uma mulher. Legenda: "gato mais pesado do mundo, 40 quilos".',
        '2. Foto de uma rua completamente alagada com um jacaré nadando entre os carros. Legenda: "enchente de ontem na nossa cidade".',
        '3. Foto de um céu cor de laranja intenso, quase vermelho, sobre uma cidade. Legenda: "o céu ficou assim ontem de manhã".',
        '4. Foto de um tubarão nadando dentro de um supermercado alagado. Legenda: "consequências da tempestade".',
        '5. Foto de uma criança entregando um cobertor a um cachorro na chuva. Legenda: "menino da nossa cidade agasalha cão abandonado".',
        '6. Foto de uma multidão gigantesca em uma avenida. Legenda: "manifestação de ontem no centro, mais de 500 mil pessoas".'
      ]
    },
    {
      titulo: 'Seis fichas de imagem, verso com os dados de investigação',
      tipo: 'cartas',
      nota: 'Só pode ser virado na segunda rodada, com o protocolo em mãos.',
      itens: [
        '1. Primeira aparição: há 6 anos, em um site de humor. Outras fontes: nenhuma agência de notícias publicou. O mesmo gato aparece em outra foto, em tamanho normal, no mesmo perfil. VEREDITO: manipulada.',
        '2. Primeira aparição: há 11 anos, em outro país. Outras fontes: agências de checagem já desmentiram três vezes. A placa de rua ao fundo está em outro idioma. VEREDITO: real, mas de outro lugar e outro ano.',
        '3. Primeira aparição: ontem, às 8h14. Outras fontes: quatro veículos de imprensa publicaram, com fotos diferentes do mesmo céu, tiradas de ângulos distintos. Explicação: fumaça de queimada distante somada à luz do amanhecer. VEREDITO: real.',
        '4. Primeira aparição: há 12 anos. Outras fontes: a mesma foto de tubarão aparece em 14 enchentes diferentes, em países diferentes, desde 2011. VEREDITO: montagem antiga e reciclada.',
        '5. Primeira aparição: há 3 dias, no perfil da mãe do menino. Outras fontes: o jornal do bairro publicou depois, com entrevista. VEREDITO: real.',
        '6. Primeira aparição: há 9 anos, em um evento esportivo de outro país. Outras fontes: a foto original tem crédito de uma agência e legenda diferente. Detalhe: as roupas da multidão são de inverno, e a manifestação teria sido em janeiro, no verão. VEREDITO: real, mas de outro evento.'
      ]
    },
    {
      titulo: 'Protocolo de quatro passos',
      tipo: 'cartaz',
      corpo: 'NÃO ADIVINHE. VERIFIQUE.\n\nPASSO 1, ORIGEM\nDe onde veio esta imagem? Quem publicou primeiro?\n\nPASSO 2, QUANDO\nQuando ela apareceu pela primeira vez? Bate com o que a legenda diz?\n\nPASSO 3, OUTRAS FONTES\nMais alguém está contando isso? Quem?\n\nPASSO 4, DETALHES DO LUGAR\nPlacas, roupas, clima, idioma. Combinam com o lugar e a época da legenda?\n\nSe você não conseguir responder as quatro, a resposta honesta é EU NÃO SEI. E não saber é uma resposta melhor do que chutar.'
    },
    {
      titulo: 'Folha de investigação',
      tipo: 'folha',
      corpo: 'Imagem número: ______\n\nO que a legenda afirma: ____________________________________\n\nPASSO 1, quem publicou primeiro: ____________________\nPASSO 2, quando apareceu: ____________________\nPASSO 3, quem mais está contando: ____________________\nPASSO 4, o que os detalhes mostram: ____________________\n\nNOSSO VEREDITO:\n( ) real, e a legenda está certa\n( ) real, mas de outro lugar ou de outra época\n( ) manipulada ou montada\n( ) não deu para saber\n\nQual passo foi o mais útil nesta imagem? ______'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'RESPOSTAS\n1. manipulada. 2. real, fora de contexto. 3. REAL E VERDADEIRA. 4. montagem. 5. real e verdadeira. 6. real, fora de contexto.\n\nAS DUAS ARMADILHAS\n\nIMAGEM 3 é a mais importante do conjunto. Ela parece impossível e é verdadeira. Quase todo grupo marca falsa na primeira rodada. Se a atividade tivesse só imagens falsas de aparência estranha, ela ensinaria a desconfiar do estranho, que é exatamente o hábito errado: o mundo produz coisas estranhas e reais o tempo todo. O passo 3 resolve a 3 sozinho.\n\nIMAGEM 6 é a segunda armadilha e a mais parecida com o que circula de verdade. Ela é uma foto real, não editada, de gente real. O problema não está na imagem, está na legenda. É o tipo mais comum de desinformação e o mais difícil de perceber, porque não há nada de errado na foto. O passo 4, com as roupas de inverno em janeiro, é o que entrega.\n\nA CATEGORIA DO MEIO, "real, mas de outro lugar ou de outra época", é a mais valiosa da folha. Sem ela, os estudantes só têm verdadeiro e falso, e as imagens 2 e 6 não cabem em nenhum dos dois.\n\nOS DOIS NÚMEROS NO QUADRO\nAcertos da rodada 1 costumam ficar entre 2 e 3 de 6, ou seja, perto do que daria jogar uma moeda. Acertos da rodada 2 costumam ser 5 ou 6. Escrever os dois números lado a lado é o fechamento, e a frase que vem é sempre alguma versão de: não ficamos mais espertos, ficamos com um método.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantos vocês acertaram na primeira rodada? E na segunda?',
      'O que mudou entre as duas? Vocês ficaram mais atentos?',
      'A imagem 3 parecia falsa e era real. O que isso ensina sobre confiar no que parece estranho?',
      'A imagem 6 não tem nada de errado. Onde estava a mentira?',
      'Qual dos quatro passos foi o mais útil?',
      'É melhor chutar ou dizer não sei?'
    ],
    evitar: [
      'Ensinar a procurar sinais visuais de manipulação, como dedos errados ou sombras tortas. Envelhece em meses e treina exatamente a habilidade que a atividade quer substituir.',
      'Deixar de fora as imagens verdadeiras. Uma atividade só com falsificações ensina a desconfiar de tudo, e desconfiar de tudo é tão inútil quanto acreditar em tudo.',
      'Pular a primeira rodada de palpites. Sem o fracasso inicial, o protocolo parece burocracia.',
      'Usar imagens reais de tragédias, violência ou pessoas identificáveis. As fichas descrevem imagens, e isso basta.'
    ]
  },

  protecao: 'As seis imagens são descritas por escrito nas fichas, não reproduzidas. Nenhuma imagem real de pessoa identificável, tragédia ou violência é usada. Se a versão com busca real for aplicada, o professor prepara previamente os termos de busca e nenhum estudante pesquisa livremente. Não pedir que estudantes tragam imagens que circularam em grupos da família.',

  evidencia: 'O grupo classifica corretamente pelo menos uma imagem na categoria "real, mas fora de contexto" e aponta qual passo do protocolo produziu a resposta, em vez de justificar pela aparência.'
},

/* ==================================================================== 34 */
{
  id: 'quem-ganha-com-meu-clique',
  insightCurto: 'Seu clique vira dinheiro no caminho. Só que o caminho tem cinco paradas e você não está em nenhuma delas.',
  n: 34,
  titulo: 'Quem ganha com meu clique?',
  chamada: 'Um vídeo assistido. Cinco pessoas ganham alguma coisa. Descubra quanto e quem.',
  faixa: '9-10',
  duracao: 40,
  duracaoCurta: 25,
  comoEncurtar: 'Em 25 minutos: monte o mapa com quatro participantes, tirando a loja, e trabalhe só o percurso do dinheiro. O percurso dos dados fica para uma segunda aula, e é o mais interessante dos dois, então vale voltar.',
  formato: 'simulacao',
  formatoDetalhe: 'Mapa econômico com barbante e fichas',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['propaganda', 'dados'],
  disciplinas: ['Matemática', 'Geografia', 'História'],
  preparo: 'medio',
  grupo: 'turma',
  eixo: 'consumo',
  nivel: 4,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF04CO07', texto: 'Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados.' },
    secundaria: { codigo: 'EF05CO08', texto: 'Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Compreender a cadeia econômica que sustenta serviços digitais gratuitos.' },

  provocacao: 'Você assistiu a um vídeo de graça. Não pagou nada, não deu nada, não prometeu nada. Mesmo assim, cinco pessoas ganharam alguma coisa nesses três minutos. Vamos descobrir quem.',

  missao: 'Montar o mapa do clique com barbante, ligando os cinco participantes, e depois descobrir por onde passa o dinheiro e por onde passam os dados.',

  virada: 'Quando o mapa do dinheiro está montado, o facilitador entrega o segundo rolo de barbante, de outra cor, e pede o mapa dos dados. A turma descobre que as flechas do dinheiro e as dos dados vão em direções diferentes, e que existe uma seta que sai do usuário e não volta para lugar nenhum. O usuário é o único participante que entrega e não recebe dinheiro em nenhum momento.',

  insight: 'O clique produz valor, e esse valor circula entre várias pessoas. Quem assiste é a única ponta da cadeia que entrega alguma coisa e não recebe dinheiro por isso.',

  transferencia: 'Quando um serviço é gratuito, dá para perguntar onde ele está no mapa: quem paga a conta e o que essa pessoa está comprando.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Distribuir os cinco crachás e posicionar as pessoas em círculo, cada uma com o seu cartaz. Ler em voz alta o que cada participante faz.' },
    { t: '6 a 18 min',  o: 'Primeiro barbante, o do dinheiro. A turma decide, participante por participante, quem paga a quem. Cada ligação é discutida antes de ser feita.' },
    { t: '18 a 26 min', o: 'A virada. Segundo barbante, de outra cor, o dos dados. Quem manda informação para quem?' },
    { t: '26 a 34 min', o: 'Olhar os dois mapas juntos. Achar a seta que sai do usuário e não volta. Preencher a folha do mapa.' },
    { t: '34 a 40 min', o: 'Discussão final: o que o usuário recebe, já que não recebe dinheiro? Aceitar que ele recebe o vídeo, e perguntar se a troca é equilibrada.' }
  ],

  versoes: {
    escola: 'Turma inteira em círculo, cinco estudantes com crachá e os outros orientando. Precisa de dois rolos de barbante de cores diferentes. Integra Matemática, nas contas de rateio, e Geografia, na discussão de onde ficam as empresas.',
    familia: 'Versão de mesa, desenhando o mapa no papel em vez de usar barbante. Boa conversa para quando a criança perguntar por que um aplicativo é de graça.',
    jovem: 'A partir de 11 anos, acrescentar a pergunta de quanto vale um clique. Com os números da folha, calcular quanto a plataforma fatura com mil visualizações e quanto sobra para quem produziu o vídeo.'
  },

  kit: [
    { nome: 'Cinco crachás de participante', tipo: 'imprimivel', desc: 'Usuário, criador, plataforma, anunciante e loja.' },
    { nome: 'Cartazes com os números', tipo: 'imprimivel', desc: 'Quanto cada um ganha ou paga.' },
    { nome: 'Folha do mapa', tipo: 'imprimivel', desc: 'Para desenhar as duas redes de setas.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O percurso correto e as perguntas que abrem a discussão.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cinco crachás de participante',
      tipo: 'cartas',
      nota: 'Imprimir grande, para pendurar no pescoço. Cada crachá traz o nome e o que a pessoa faz.',
      itens: [
        'USUÁRIO. Eu assisto ao vídeo. Eu não pago nada.',
        'CRIADOR. Eu faço o vídeo. Eu quero que muita gente assista.',
        'PLATAFORMA. Eu mostro o vídeo e escolho qual anúncio aparece antes.',
        'ANUNCIANTE. Eu tenho um produto para vender e pago para aparecer.',
        'LOJA. Eu vendo o produto quando alguém compra.'
      ]
    },
    {
      titulo: 'Cartazes com os números',
      tipo: 'cartaz',
      corpo: 'Um cartaz por participante, para pendurar embaixo do crachá.\n\nUSUÁRIO\nPaga em dinheiro: R$ 0,00\nEntrega: 3 minutos de atenção, o que assistiu, quanto tempo ficou, onde estava, o que assistiu antes.\n\nCRIADOR\nRecebe: R$ 2,00 a cada mil pessoas que assistem.\nEntrega: o vídeo.\n\nPLATAFORMA\nRecebe: R$ 6,00 do anunciante a cada mil anúncios exibidos.\nPaga: R$ 2,00 ao criador.\nFica com: R$ 4,00.\nRecebe também: todos os dados do usuário.\n\nANUNCIANTE\nPaga: R$ 6,00 a cada mil exibições.\nRecebe: a chance de vender, e informação sobre quem viu.\n\nLOJA\nRecebe: R$ 80,00 se o usuário comprar o produto.'
    },
    {
      titulo: 'Folha do mapa',
      tipo: 'folha',
      corpo: 'Desenhe os cinco participantes em círculo.\n\nCom caneta AZUL, desenhe as setas do DINHEIRO. Escreva o valor em cada seta.\n\nCom caneta VERMELHA, desenhe as setas dos DADOS. Escreva o que vai em cada seta.\n\nAgora responda:\n\nQuantas setas azuis chegam no usuário? ______\nQuantas setas vermelhas saem do usuário? ______\n\nQuem recebe mais dinheiro? ____________________\nQuem recebe mais dados? ____________________\n\nO usuário não recebe dinheiro. O que ele recebe?\n____________________________________\n\nA troca é justa? Por quê?\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'SETAS DO DINHEIRO\nAnunciante paga R$ 6,00 à plataforma.\nPlataforma paga R$ 2,00 ao criador.\nUsuário paga R$ 80,00 à loja apenas se comprar.\nNenhuma seta de dinheiro chega ao usuário. Zero.\n\nSETAS DOS DADOS\nUsuário manda dados para a plataforma.\nPlataforma manda informação sobre o usuário para o anunciante.\nAnunciante manda informação para a loja.\nNenhuma seta de dados volta para o usuário. Ele não recebe nem os próprios dados de volta.\n\nO ACHADO CENTRAL\nO usuário é o único participante com seta saindo e nenhuma seta de dinheiro entrando. Quando a turma percebe isso, costuma haver uma reação. Não abafar e não moralizar.\n\nA PERGUNTA QUE FECHA\nO usuário recebe o vídeo, e isso é real. A conversa boa não é "você está sendo roubado", é: a troca é equilibrada? Turmas se dividem, e a divisão é o melhor resultado possível. Quem acha justo costuma argumentar que assistir de graça vale a atenção, e é um bom argumento. Quem acha injusto costuma apontar que o usuário não sabe o tamanho do que entrega, e também é um bom argumento.\n\nSE ALGUÉM PERGUNTAR de onde vêm os números: são ordens de grandeza plausíveis e simplificadas, escolhidas para a conta fechar em sala. Responder isso com honestidade vale mais do que fingir precisão.\n\nA CONTA EXTRA para 11 anos ou mais: com 1 milhão de visualizações, a plataforma fatura R$ 6.000, o criador recebe R$ 2.000 e a plataforma fica com R$ 4.000. Perguntar quem fez o vídeo e quem ficou com o dobro.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantas setas de dinheiro chegam no usuário?',
      'O que sai do usuário e não volta?',
      'Quem fez o vídeo recebeu quanto? E quem só mostrou?',
      'O usuário recebe o vídeo. Isso torna a troca justa?',
      'O usuário sabia que estava entregando tudo isso?'
    ],
    evitar: [
      'Concluir que assistir vídeo é ser explorado. A troca existe e o vídeo tem valor. O ponto é enxergar a cadeia, não sair culpado por assistir.',
      'Montar o mapa dos dados junto com o do dinheiro. As duas cores em momentos separados são o que produz a descoberta.',
      'Apresentar os números como exatos. São ordens de grandeza, e dizer isso ensina honestidade metodológica.',
      'Citar plataformas reais. O mapa funciona melhor genérico, e evita transformar a aula em opinião sobre uma empresa específica.'
    ]
  },

  protecao: 'Todos os participantes e valores são fictícios e simplificados. Nenhuma plataforma real é citada. Não perguntar quanto tempo cada estudante passa assistindo vídeos, nem o que ele assiste. Nenhum aparelho é usado.',

  evidencia: 'O estudante identifica que o usuário não recebe nenhuma seta de dinheiro, nomeia pelo menos dois tipos de dado que saem dele, e sustenta uma posição argumentada sobre o equilíbrio da troca.'
},

/* ==================================================================== 35 */
{
  id: 'foto-que-conta-mais',
  insightCurto: 'A foto mostra o que você quis mostrar. E também o uniforme, a rua, o horário e o nome no crachá.',
  n: 35,
  titulo: 'A foto que conta mais do que mostra',
  chamada: 'Uma foto de um bolo. E, ao fundo, tudo que dá para descobrir sobre quem fez.',
  faixa: '9-10',
  duracao: 35,
  duracaoCurta: 20,
  comoEncurtar: 'Em 20 minutos: use só a foto 1 e a foto 3, e corte a etapa de recorte. A folha de decisão sobre o que fazer antes de postar é obrigatória mesmo na versão curta.',
  formato: 'investigacao',
  formatoDetalhe: 'Investigação de cenário em imagem descrita',
  contexto: ['escola', 'casa', 'individual'],
  tela: 'sem-tela',
  situacao: ['foto', 'dados'],
  disciplinas: ['Geografia', 'Língua Portuguesa', 'Artes'],
  preparo: 'baixo',
  grupo: 'dupla',
  eixo: 'privacidade',
  nivel: 3,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF04CO07', texto: 'Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados.' },
    secundaria: { codigo: 'EF03CO09', texto: 'Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Identificar informação inadvertidamente revelada em conteúdo publicado.' },

  provocacao: 'A Duda postou uma foto do bolo de aniversário dela. Só o bolo. Em vinte minutos, vocês vão descobrir onde ela estuda, que horas ela sai da escola e o nome do irmão dela.',

  missao: 'Ser detetive: listar tudo o que dá para descobrir sobre a Duda a partir de três fotos que ela postou, e onde exatamente está cada pista.',

  virada: 'Depois que as duplas listam as descobertas, o facilitador entrega a quarta ficha: o que a Duda achou que estava postando. Ela achou que estava postando um bolo, um cachorro e um tênis novo. A lista das duplas tem catorze itens. A diferença entre as duas listas é a atividade inteira.',

  insight: 'A gente escolhe o assunto da foto, mas não escolhe o que aparece atrás. E o que aparece atrás costuma dizer mais do que o assunto.',

  transferencia: 'Antes de postar, dá para fazer uma coisa que leva cinco segundos: olhar o fundo da foto antes de olhar o assunto dela.',

  roteiro: [
    { t: '0 a 4 min',   o: 'Apresentar a Duda e o desafio. Combinar que ninguém pode inventar: cada descoberta precisa apontar onde na foto está a pista.' },
    { t: '4 a 18 min',  o: 'Em duplas, investigar as três fichas de foto. Preencher a folha de detetive: o que descobri e onde está a pista.' },
    { t: '18 a 22 min', o: 'Cada dupla lê uma descoberta. Montar a lista coletiva no quadro, sem repetir.' },
    { t: '22 a 27 min', o: 'A virada. Ler o que a Duda achou que estava postando. Comparar os dois números.' },
    { t: '27 a 32 min', o: 'Etapa de recorte. Cada dupla decide o que teria que sair de cada foto para a Duda poder postar em segurança, sem perder o que ela queria mostrar.' },
    { t: '32 a 35 min', o: 'Fechamento com a folha dos cinco segundos.' }
  ],

  versoes: {
    escola: 'Duplas, três fichas de foto por dupla. Encaixa em Geografia, na leitura de elementos de paisagem, e em Artes, no enquadramento. A etapa de recorte é a que transforma denúncia em habilidade e não deve ser cortada.',
    familia: 'Ler as três fichas e caçar as pistas juntos, como jogo de observação. Depois combinar a regra dos cinco segundos para a família inteira, adultos incluídos.',
    jovem: 'A partir de 11 anos, a versão individual é analisar uma foto que você mesmo já postou, sem mostrar para ninguém, e listar o que aparece ao fundo. Ninguém compartilha o resultado, nem com a turma nem com o professor.'
  },

  kit: [
    { nome: 'Três fichas de foto', tipo: 'imprimivel', desc: 'Descrição detalhada do que aparece em cada uma.' },
    { nome: 'Folha de detetive', tipo: 'imprimivel', desc: 'Descoberta e localização da pista.' },
    { nome: 'Ficha do que a Duda achou', tipo: 'imprimivel', desc: 'A virada.' },
    { nome: 'Folha dos cinco segundos', tipo: 'imprimivel', desc: 'A regra para levar para casa.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'As catorze descobertas possíveis.' }
  ],

  imprimiveis: [
    {
      titulo: 'Três fichas de foto',
      tipo: 'cartas',
      nota: 'As fotos são descritas por escrito, com detalhes. Nenhuma imagem real é usada.',
      itens: [
        'FOTO 1, o bolo. Um bolo de aniversário com onze velas, em cima de uma mesa. Ao fundo, desfocado mas legível: uma mochila azul com um crachá escolar preso, onde se lê "Escola Municipal Vila Nova" e "5º ano B". Na parede, um calendário aberto no mês, com o dia 14 circulado e escrito "prova de mat". Em cima da geladeira, um envelope com um endereço parcialmente visível: "Rua das Ac..., 4..". Uma janela mostra um prédio azul com uma antena grande no topo.',
        'FOTO 2, o cachorro. Um cachorro deitado no chão de uma sala. No canto da imagem, uma tela de televisão ligada mostra um jogo, com o placar e o horário: 16h47. Um pedaço de um caderno aberto no chão, com o nome "DUDA MARTINS" escrito na capa em letra grande. Ao lado, uma mochila menor com o nome "PEDRO" bordado.',
        'FOTO 3, o tênis novo. Um par de tênis novo, fotografado de cima, com os pés dentro. O chão é a calçada. Aparece parte de uma placa de rua no canto superior: "...DAS ACÁCIAS". Ao fundo, o portão de uma escola com o horário de funcionamento afixado: "saída 5º ano: 17h20". Duas outras crianças de uniforme aparecem de costas.'
      ]
    },
    {
      titulo: 'Folha de detetive',
      tipo: 'folha',
      corpo: 'Regra: nada de inventar. Cada descoberta precisa dizer onde está a pista.\n\nO QUE EU DESCOBRI SOBRE A DUDA          ONDE ESTÁ A PISTA\n1. ____________________________        Foto ___, ______________\n2. ____________________________        Foto ___, ______________\n3. ____________________________        Foto ___, ______________\n4. ____________________________        Foto ___, ______________\n5. ____________________________        Foto ___, ______________\n6. ____________________________        Foto ___, ______________\n\nQuantas descobertas a nossa dupla fez ao todo? ______\n\nQual delas é a mais perigosa? Por quê?\n____________________________________'
    },
    {
      titulo: 'Ficha do que a Duda achou (a virada)',
      tipo: 'folha',
      corpo: 'O QUE A DUDA ACHOU QUE ESTAVA POSTANDO\n\nFoto 1: um bolo de aniversário.\nFoto 2: o cachorro dela dormindo.\nFoto 3: o tênis novo.\n\nTotal: 3 coisas.\n\nAgora conte quantas coisas a turma descobriu.\n\nA Duda não mentiu, não foi descuidada e não fez nada de errado. Ela só olhou para o assunto da foto, como quase todo mundo faz.'
    },
    {
      titulo: 'Folha dos cinco segundos',
      tipo: 'folha',
      corpo: 'ANTES DE POSTAR, EU OLHO O FUNDO\n\nProcure, em cinco segundos:\n\n( ) tem nome de alguém aparecendo? em caderno, mochila, crachá, porta?\n( ) tem uniforme ou nome de escola?\n( ) tem placa de rua, número de casa ou envelope com endereço?\n( ) tem horário aparecendo? relógio, tela, cartaz?\n( ) tem outra pessoa que não sabe que está na foto?\n( ) dá para saber onde eu estou por causa do que aparece na janela?\n\nSe marcou alguma, dá para recortar, cobrir ou tirar outra foto.\n\nO que eu vou fazer diferente da próxima vez:\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'AS CATORZE DESCOBERTAS\n\nDa foto 1: a idade da Duda (11 velas), a escola, a turma (5º ano B), a data de uma prova, parte do endereço, e uma referência visual do bairro (prédio azul com antena).\nDa foto 2: o nome completo dela, o nome do irmão (Pedro), e o horário em que ela costuma estar em casa (16h47).\nDa foto 3: a rua onde fica a escola, o horário exato da saída (17h20), o rosto de duas outras crianças, mesmo de costas, com uniforme identificável.\n\nA COMBINAÇÃO É O PONTO\nSeparadas, quase todas essas informações são inofensivas. Juntas, elas dizem onde uma criança de 11 anos está, a que horas ela sai, como ela se chama e onde ela mora. É a mesma ideia de "Pistas que se juntam", agora com material real de rede social.\n\nA DESCOBERTA MAIS PERIGOSA costuma ser apontada como o endereço, mas a combinação escola + horário de saída + rua é pior, porque descreve um encontro possível. Se a turma não chegar sozinha, provocar: quem sabe onde encontrar a Duda amanhã às 17h20?\n\nAS OUTRAS DUAS CRIANÇAS da foto 3 quase sempre passam despercebidas. Vale insistir: elas não postaram nada e mesmo assim estão na foto. Conecta com o eixo de consentimento.\n\nA ETAPA DE RECORTE é o que impede a atividade de virar susto. Todas as três fotos podem ser postadas depois de ajustes simples: enquadrar mais fechado, virar o caderno, tirar a foto do tênis olhando para outro lado. A Duda não precisa parar de postar. Ela precisa olhar o fundo.\n\nNUNCA pedir que os estudantes analisem fotos reais de colegas, nem as próprias, na versão em sala.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantas coisas a Duda achou que estava postando? E quantas a gente descobriu?',
      'A Duda fez alguma coisa errada?',
      'Qual descoberta é a mais perigosa? Por quê?',
      'E as duas crianças da foto 3, que não postaram nada?',
      'O que teria que sair da foto para ela poder postar?'
    ],
    evitar: [
      'Terminar sem a etapa de recorte. Sem ela, a criança sai com medo de postar, que não é o objetivo, e volta a postar igual na semana seguinte.',
      'Pedir que os estudantes analisem fotos reais deles ou de colegas em sala. A versão com foto própria é individual, privada, e o resultado não é compartilhado com ninguém.',
      'Culpar a Duda. Ela fez o que todo mundo faz, inclusive os adultos da sala.',
      'Transformar em regra de nunca postar nada. A habilidade é olhar o fundo, não se calar.'
    ]
  },

  protecao: 'As fotos são descritas por escrito e a Duda é fictícia. Nenhuma foto real de estudante, família ou escola é usada, analisada ou projetada. Na versão individual com foto própria, o estudante analisa sozinho e não compartilha o resultado com a turma nem com o professor. Não pedir que ninguém descreva o próprio endereço, escola ou rotina.',

  evidencia: 'A dupla localiza pelo menos seis informações não intencionais indicando onde está cada pista, reconhece que a combinação é mais reveladora que os itens isolados, e propõe um ajuste concreto que preserva a intenção original da foto.'
}

);


/* 11 a 14 anos — segundo lote. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 36 */
{
  id: 'laboratorio-de-phishing',
  insightCurto: 'Não existe um sinal mágico de golpe. Existe um procedimento, e ele funciona mesmo quando a mensagem é verdadeira.',
  n: 36,
  titulo: 'Laboratório de phishing',
  chamada: 'Oito mensagens. Três parecem golpe e são legítimas. Duas parecem perfeitas e são fraude.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use cinco mensagens, mantendo obrigatoriamente a 3 (legítima e feia) e a 6 (fraudulenta e impecável). Corte a etapa de construção da mensagem, que é a mais demorada, e vá direto ao protocolo.',
  formato: 'investigacao',
  formatoDetalhe: 'Análise comparativa e construção de protocolo',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['golpe'],
  disciplinas: ['Língua Portuguesa', 'Matemática'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'seguranca',
  nivel: 3,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF07CO07', texto: 'Identificar problemas de segurança cibernética e experimentar formas de proteção.' },
    secundaria: { codigo: 'EF08CO10', texto: 'Discutir questões sobre segurança e privacidade relacionadas ao uso dos ambientes virtuais.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Substituir julgamento perceptual por procedimento verificável na resposta a engenharia social.' },

  provocacao: 'Vocês vão pontuar oito mensagens de 0 a 10, sendo 10 certeza de golpe. Depois eu vou contar quais eram golpe de verdade. Aviso desde já: a maior parte das turmas erra as duas mais importantes.',

  missao: 'Pontuar as oito mensagens, comparar com o gabarito e depois construir um protocolo que funcione mesmo sem saber quais são falsas.',

  virada: 'O gabarito revela que a mensagem mais malfeita da lista, cheia de erro de português e com remetente estranho, era o aviso legítimo da secretaria da escola. E que a mensagem mais bem escrita, com identidade visual perfeita, endereço plausível e nenhum erro, era a fraude. Os grupos descobrem que pontuaram aparência, não risco. E aparência é exatamente o que o fraudador controla.',

  insight: 'Todo sinal que se aprende a procurar, o golpista aprende a eliminar. O que não dá para falsificar é o canal: por isso o procedimento é sempre sair da mensagem e verificar por um caminho que você já tinha.',

  transferencia: 'Diante de qualquer mensagem que peça ação urgente, o passo é o mesmo, e ele independe de a mensagem ser boa ou ruim: não clicar no que veio, abrir o canal oficial por conta própria e verificar lá.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Distribuir as oito mensagens e a folha de pontuação. Explicar a escala. Não dar nenhuma dica sobre o que observar.' },
    { t: '6 a 20 min',  o: 'Em grupos de quatro, pontuar as oito e justificar cada nota em uma linha. A justificativa é obrigatória e é o que vai ser usado depois.' },
    { t: '20 a 26 min', o: 'Recolher as pontuações e escrever a média da turma para cada mensagem no quadro, sem revelar nada.' },
    { t: '26 a 34 min', o: 'A virada. Revelar o gabarito. Deixar a mensagem 3 e a 6 para o fim, com pausa.' },
    { t: '34 a 42 min', o: 'Revisitar as justificativas escritas: quantas se baseavam em erro de português, emoji, urgência ou aparência? Riscar as que não funcionariam contra a mensagem 6.' },
    { t: '42 a 50 min', o: 'Construção do protocolo. Cada grupo escreve três passos que funcionariam para as oito mensagens sem precisar saber quais são falsas. Comparar e consolidar um protocolo da turma.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Encaixa em Língua Portuguesa, na análise de registro e intenção do texto. A etapa de riscar as próprias justificativas é a mais formativa e costuma ser desconfortável, o que é bom sinal.',
    familia: 'Ler quatro das oito mensagens na mesa e pontuar em família. O adulto costuma errar a 6, e é bom que erre na frente do adolescente, porque desmonta a ideia de que isso é problema de gente inexperiente.',
    jovem: 'Individual: pontuar as oito, comparar com o gabarito e escrever o próprio protocolo em três linhas. Depois testar o protocolo na próxima mensagem estranha que chegar de verdade.'
  },

  kit: [
    { nome: 'Oito mensagens', tipo: 'imprimivel', desc: 'Com remetente, assunto e corpo.' },
    { nome: 'Folha de pontuação', tipo: 'imprimivel', desc: 'Nota de 0 a 10 e justificativa obrigatória.' },
    { nome: 'Gabarito', tipo: 'gabarito', desc: 'A virada, com a explicação de cada caso.' },
    { nome: 'Folha de protocolo', tipo: 'editavel', desc: 'Três passos que funcionem sem saber a resposta.' }
  ],

  imprimiveis: [
    {
      titulo: 'Oito mensagens',
      tipo: 'cartas',
      nota: 'Imprimir cada uma em um cartão, com remetente visível.',
      itens: [
        '1. De: premios-agora@ganhe.xyz | "VOCÊ FOI SORTEADO! Clique em 24h para resgatar seu prêmio de R$ 5.000!"',
        '2. De: suporte@banco-seguro-atendimento.com | "Detectamos acesso suspeito. Confirme seus dados no link para não ter a conta bloqueada."',
        '3. De: secretariaescolar.vilanova@gmail.com | "Bom dia, srs pais. Segue comunicado, a reunião de pais foi remarcado para dia 22, as 19h. Favor confirmar presença respondendo esse email. Att, Secretaria" (com dois erros de concordância e sem identidade visual)',
        '4. De: contato@lojaqueeucomprei.com.br | "Seu pedido #48211 foi enviado. Acompanhe pelo código de rastreio AB123456789BR."',
        '5. De: rh@empresa-vagas.net | "Selecionamos seu perfil! Envie RG, CPF e comprovante de residência para agendar a entrevista."',
        '6. De: atendimento@nubank.com.br | Assinatura completa, logotipo, rodapé com endereço e CNPJ, nenhum erro de português: "Prezado(a), identificamos uma tentativa de compra de R$ 1.847,00 em estabelecimento fora do seu perfil habitual. Caso não reconheça, acesse sua conta e conteste em até 48 horas. Atenciosamente, Central de Prevenção a Fraudes."',
        '7. De: um número desconhecido, no celular | "oi filha, troquei de número, salva aí. você pode fazer um pix pra mim? depois te explico"',
        '8. De: no-reply@escola-vilanova.edu.br | "Notas do 2º bimestre disponíveis no portal. Acesse com seu login habitual."'
      ]
    },
    {
      titulo: 'Folha de pontuação',
      tipo: 'folha',
      corpo: 'Para cada mensagem: nota de 0 (certeza de que é legítima) a 10 (certeza de que é golpe).\n\nA justificativa é obrigatória. Escreva o que exatamente fez vocês darem essa nota.\n\nMsg 1: nota ___  porque ____________________________________\nMsg 2: nota ___  porque ____________________________________\nMsg 3: nota ___  porque ____________________________________\nMsg 4: nota ___  porque ____________________________________\nMsg 5: nota ___  porque ____________________________________\nMsg 6: nota ___  porque ____________________________________\nMsg 7: nota ___  porque ____________________________________\nMsg 8: nota ___  porque ____________________________________\n\nDepois do gabarito, volte aqui e risque toda justificativa que NÃO teria funcionado contra a mensagem 6.\n\nQuantas sobraram? ______'
    },
    {
      titulo: 'Gabarito',
      tipo: 'gabarito',
      corpo: '1. GOLPE. Prêmio não solicitado, domínio estranho, urgência. Todo grupo acerta. É a mensagem fácil, e existe para dar confiança antes das difíceis.\n\n2. GOLPE. O domínio é a chave: banco-seguro-atendimento.com não é o domínio de banco nenhum. Muitos grupos acertam pelo motivo errado, dizendo "porque pede dados". Bancos legítimos também pedem confirmação, só não por link de e-mail.\n\n3. LEGÍTIMA. É o comunicado real da secretaria da escola. Tem erro de concordância, vem de um endereço genérico de e-mail gratuito e não tem identidade visual. Escolas públicas e pequenas usam e-mail comum o tempo todo. Quase toda turma marca nota alta aqui, e essa é a metade do aprendizado: aparência amadora não é indício de fraude.\n\n4. LEGÍTIMA, se a pessoa realmente comprou. Aqui não dá para decidir só pela mensagem, e reconhecer isso é a resposta certa. A pergunta que resolve é: eu comprei alguma coisa?\n\n5. GOLPE. Nenhum processo seletivo pede documentos antes da entrevista. É coleta de dados para abrir conta em nome da vítima.\n\n6. GOLPE, e é a mais importante das oito. Visual perfeito, português impecável, CNPJ no rodapé, urgência plausível de 48 horas. O único jeito de resolver é não usar a mensagem: abrir o aplicativo do banco por conta própria e olhar a fatura. Se a compra existir, ela está lá. Se não existir, não havia o que contestar.\n\n7. GOLPE quase certo, e é o mais comum no Brasil. O detalhe cruel é que trocar de número é verdade com frequência. Procedimento: ligar para o número antigo.\n\n8. LEGÍTIMA. Domínio institucional coerente, não pede dado nenhum, não tem urgência. Aponta para um portal que a pessoa já usa.\n\nPLACAR TÍPICO: turmas acertam 5 ou 6 de 8, e quase sempre erram a 3 e a 6, que são exatamente as duas que ensinam alguma coisa.'
    },
    {
      titulo: 'Folha de protocolo',
      tipo: 'editavel',
      corpo: 'Escreva três passos que funcionem para as OITO mensagens, sem que vocês precisem saber quais são falsas.\n\nUm passo só vale se sobreviver a este teste: ele funcionaria contra a mensagem 6, que era perfeita?\n\nPasso 1: ____________________________________\nFunciona contra a 6? ( ) sim ( ) não\n\nPasso 2: ____________________________________\nFunciona contra a 6? ( ) sim ( ) não\n\nPasso 3: ____________________________________\nFunciona contra a 6? ( ) sim ( ) não\n\nE contra a 3, que era legítima e parecia golpe, o protocolo faz a gente perder alguma coisa importante?\n____________________________________\n\nPROTOCOLO DA TURMA, consolidado:\n____________________________________'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantas justificativas de vocês sobreviveram ao teste da mensagem 6?',
      'A mensagem 3 era feia e verdadeira. O que isso faz com a regra de procurar erro de português?',
      'Existe algum sinal que um golpista não consiga copiar?',
      'O que muda se o protocolo não depender de olhar a mensagem?',
      'Um protocolo que manda desconfiar de tudo tem algum custo?'
    ],
    evitar: [
      'Ensinar listas de sinais visuais. Toda lista de sinais é uma lista do que o próximo golpe vai corrigir.',
      'Deixar de fora as mensagens legítimas. Sem elas, a turma aprende a desconfiar de tudo, inclusive da escola e do banco, e isso tem custo real.',
      'Enviar mensagens de teste para estudantes ou famílias. Nunca, em nenhuma circunstância.',
      'Pular a etapa de riscar as próprias justificativas. É desconfortável e é a parte que ensina.'
    ]
  },

  protecao: 'Todas as mensagens são fictícias, impressas e lidas em sala. Nenhuma é enviada a ninguém. Nenhum link é acessado, nenhuma conta é aberta e nenhum dado real é digitado. O nome de instituição usado na mensagem 6 serve apenas para tornar o exemplo realista e não implica nenhuma afirmação sobre a instituição. Não pedir que estudantes contem se a família já caiu em golpe.',

  evidencia: 'O grupo produz pelo menos um passo de protocolo que não depende da aparência da mensagem e reconhece explicitamente que a mensagem legítima da escola teria sido descartada pelos próprios critérios iniciais.'
},

/* ==================================================================== 37 */
{
  id: 'termos-em-portugues-humano',
  insightCurto: 'Estar escrito não é o mesmo que estar avisado. Ninguém lê 8 mil palavras para ver um vídeo.',
  n: 37,
  titulo: 'Termos em português humano',
  chamada: 'Traduza cinco trechos de termos de uso para uma frase que alguém entenderia de verdade.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: traduza três trechos em vez de cinco (o 1, o 3 e o 5) e corte a etapa de reescrita da tela de aceite. A comparação com o tempo real de leitura é rápida e não deve sair.',
  formato: 'criacao',
  formatoDetalhe: 'Tradução e redesenho de aviso',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['consentimento', 'dados'],
  disciplinas: ['Língua Portuguesa', 'Matemática'],
  preparo: 'baixo',
  grupo: 'dupla',
  eixo: 'consumo',
  nivel: 4,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF08CO09', texto: 'Analisar criticamente as políticas de termos de uso das redes sociais e demais plataformas.' },
    secundaria: { codigo: 'EF08CO08', texto: 'Distinguir os tipos de dados pessoais que são solicitados em espaços digitais e os riscos associados.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Avaliar transparência efetiva em documentos de consentimento.' },

  provocacao: 'Estes termos de uso têm 8.400 palavras. Uma pessoa lendo com atenção leva 34 minutos. O aplicativo dá a ela um botão de aceitar que fica pronto em meio segundo. Vocês vão fazer o trabalho que ninguém faz.',

  missao: 'Traduzir cinco trechos para uma frase cada, em português que um colega de 12 anos entenderia, sem tirar nem inventar nada.',

  virada: 'Com as cinco traduções na mesa, o facilitador pede que as duplas leiam todas em sequência, em voz alta, como se fosse a tela de aceite. Leva quarenta segundos. E então a pergunta: se dá para dizer tudo isso em quarenta segundos, por que o documento tem 8.400 palavras? A turma percebe que o tamanho não é acidente nem exigência técnica. O tamanho é uma escolha, e ela produz um efeito.',

  insight: 'Transparência não é disponibilizar o texto. É fazer a pessoa entender. Um documento que ninguém consegue ler cumpre a formalidade e falha no propósito, e essa diferença costuma ser proposital.',

  transferencia: 'Quando aparecer um aceite, dá para procurar três coisas específicas em vez de ler tudo: o que eles coletam, com quem compartilham, e como se apaga a conta. Se essas três não estiverem achavéis em um minuto, isso já é uma informação.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Apresentar os números: 8.400 palavras, 34 minutos de leitura, meio segundo para aceitar. Entregar os cinco trechos.' },
    { t: '8 a 28 min',  o: 'Em duplas, traduzir cada trecho para uma frase. Regra estrita: não pode tirar informação nem acrescentar opinião. Só traduzir.' },
    { t: '28 a 34 min', o: 'A virada. Ler as cinco traduções em sequência e cronometrar. Escrever no quadro: 34 minutos contra 40 segundos.' },
    { t: '34 a 44 min', o: 'Redesenho da tela de aceite. Cada dupla monta uma tela que uma pessoa realmente entenderia, decidindo o que fica em destaque.' },
    { t: '44 a 50 min', o: 'Comparar as telas. Quais duplas esconderam alguma coisa para deixar mais bonito? Discutir o que é resumir e o que é omitir.' }
  ],

  versoes: {
    escola: 'Duplas. Encaixa muito bem em Língua Portuguesa, no trabalho com paráfrase e adequação de registro, e as traduções são material avaliável. A etapa de redesenho conecta com "Inventores de um botão melhor", dos 6 aos 8 anos.',
    familia: 'Traduzir dois trechos na mesa e depois procurar juntos, em um serviço que a família usa, quanto tempo leva para achar como apagar a conta. O resultado costuma ser desconfortável.',
    jovem: 'Individual: pegar os termos de um serviço que você usa, achar as três informações essenciais e cronometrar quanto tempo levou. Escrever o resultado em três linhas.'
  },

  kit: [
    { nome: 'Cinco trechos de termos', tipo: 'imprimivel', desc: 'Redação fictícia no estilo real.' },
    { nome: 'Folha de tradução', tipo: 'imprimivel', desc: 'Uma frase por trecho, com regra de fidelidade.' },
    { nome: 'Moldura de tela de aceite', tipo: 'imprimivel', desc: 'Para o redesenho.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Traduções de referência e o que observar.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cinco trechos de termos de uso',
      tipo: 'cartas',
      nota: 'Redação fictícia, escrita no registro jurídico e comercial usual.',
      itens: [
        'TRECHO 1: "Ao utilizar os Serviços, o Usuário concede à Empresa licença mundial, não exclusiva, isenta de royalties, sublicenciável e transferível para usar, reproduzir, modificar, adaptar, publicar, traduzir, criar obras derivadas, distribuir e exibir publicamente qualquer Conteúdo que o Usuário submeta, pelo período em que o Conteúdo permanecer nos Serviços e por prazo razoável após sua remoção."',
        'TRECHO 2: "A Empresa poderá compartilhar Dados Pessoais com prestadores de serviço, parceiros comerciais, afiliadas e sucessores, inclusive em operações societárias, bem como com autoridades competentes mediante requisição legal, observada a legislação aplicável."',
        'TRECHO 3: "Os Serviços destinam-se a usuários com idade igual ou superior a 13 anos. A Empresa não verifica ativamente a idade declarada pelo Usuário no momento do cadastro."',
        'TRECHO 4: "A Empresa reserva-se o direito de modificar estes Termos a qualquer tempo, mediante publicação da versão atualizada nos Serviços. O uso continuado após a publicação constituirá aceitação tácita das alterações."',
        'TRECHO 5: "A solicitação de exclusão de conta será processada em até 90 dias. Determinados Dados poderão ser mantidos por período superior para cumprimento de obrigações legais, exercício regular de direitos e finalidades legítimas da Empresa."'
      ]
    },
    {
      titulo: 'Folha de tradução',
      tipo: 'folha',
      corpo: 'REGRA: traduzir não é resumir e não é opinar. Se o trecho diz cinco coisas, a tradução diz cinco coisas.\n\nTrecho 1, em uma frase que um colega de 12 anos entenderia:\n____________________________________\n\nTrecho 2:\n____________________________________\n\nTrecho 3:\n____________________________________\n\nTrecho 4:\n____________________________________\n\nTrecho 5:\n____________________________________\n\nAgora confiram um por um: a tradução perdeu alguma informação que estava no original? Qual?\n____________________________________'
    },
    {
      titulo: 'Moldura de tela de aceite',
      tipo: 'folha',
      corpo: 'Desenhe a tela que o aplicativo deveria mostrar.\n\nRegras do exercício:\n. tudo o que está nos cinco trechos precisa estar na tela;\n. a pessoa precisa conseguir ler tudo em menos de um minuto;\n. os dois botões precisam ser igualmente fáceis de encontrar.\n\n[moldura de celular em branco, página inteira]\n\nDepois de desenhar, responda:\nO que vocês colocaram em destaque? ____________________\nO que vocês deixaram menor? ____________________\nPor quê? ____________________\nIsso foi resumir ou foi esconder? ____________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'TRADUÇÕES DE REFERÊNCIA\n\n1. "Tudo que você postar, a gente pode usar, mudar, traduzir e mostrar onde quiser, e pode passar esse direito para outras empresas. Isso continua valendo por um tempo mesmo depois que você apagar."\n\n2. "A gente compartilha seus dados com fornecedores, parceiros, empresas do mesmo grupo, com quem comprar a empresa no futuro, e com autoridades quando forem obrigados."\n\n3. "É proibido para menores de 13 anos, mas a gente não confere a idade que você digitar."\n\n4. "A gente pode mudar estas regras quando quiser, sem avisar você diretamente. Se você continuar usando, entende-se que você aceitou."\n\n5. "Apagar a conta demora até 90 dias, e mesmo assim a gente guarda parte dos seus dados por mais tempo."\n\nO QUE OBSERVAR\n\n. O trecho 3 é o que mais choca, e é o mais curto. Vale perguntar o que significa proibir sem verificar. Conecta diretamente com "Prove sua idade sem entregar sua vida", no Ensino Médio.\n\n. O trecho 4 costuma passar batido na tradução e é dos mais graves: consentimento que se renova sozinho por inércia. Se nenhuma dupla destacar, provocar: quem foi avisado da última mudança?\n\n. No trecho 1, muitas duplas esquecem o "e por prazo razoável após sua remoção". Vale voltar: a parte que some na tradução costuma ser a mais desconfortável do original, e isso acontece com adolescentes tanto quanto com advogados.\n\nA CONTA DA VIRADA\n8.400 palavras a 250 palavras por minuto dá cerca de 34 minutos. As cinco traduções lidas em voz alta levam entre 35 e 45 segundos. A razão é de aproximadamente 50 para 1.\n\nSOBRE O REDESENHO\nA pergunta final, se foi resumir ou esconder, é a melhor da atividade. Quase toda dupla diminui o trecho 1 ou o 5 para a tela ficar apresentável, e reproduz sem perceber exatamente a prática que estava criticando. Não apontar isso como pegadinha: apontar como descoberta.'
    }
  ],

  mediacao: {
    perguntas: [
      'Se dá para dizer tudo em 40 segundos, por que o documento tem 8.400 palavras?',
      'O trecho 3 proíbe menores de 13 anos e não verifica nada. O que essa regra faz, na prática?',
      'Alguém aqui foi avisado da última vez que um aplicativo mudou os termos?',
      'Na sua tela nova, o que ficou menor? Isso foi resumir ou esconder?',
      'Estar escrito é o mesmo que estar avisado?'
    ],
    evitar: [
      'Deixar as duplas resumirem em vez de traduzir. Perder informação na tradução é o erro mais comum e precisa ser corrigido item por item.',
      'Concluir que toda empresa é má. Boa parte desses trechos existe por exigência jurídica real. O problema é a forma, e apontar isso com precisão vale mais que indignação genérica.',
      'Usar termos de uso reais de uma empresa nomeada. O texto fictício evita transformar a aula em processo contra uma marca.',
      'Abrir aplicativos e aceitar ou recusar termos durante a atividade.'
    ]
  },

  protecao: 'Os cinco trechos são fictícios, escritos para a atividade no estilo dos documentos reais. Nenhuma empresa é nomeada. Nenhum aplicativo é aberto, nenhum termo é aceito ou recusado, nenhuma conta é criada ou apagada durante a aula.',

  evidencia: 'A dupla produz traduções que preservam todas as informações do original, identifica ao menos uma informação que sua própria tradução havia perdido, e reconhece na tela redesenhada a diferença entre resumir e omitir.'
},

/* ==================================================================== 38 */
{
  id: 'ranking-invisivel-da-escola',
  insightCurto: 'Virar número é rápido. O que some no caminho é o motivo, e o motivo é a pessoa.',
  n: 38,
  titulo: 'O ranking invisível da escola',
  chamada: 'Um sistema pontua estudantes. Ninguém pontuado sabe que existe uma pontuação.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: entregue a fórmula pronta em vez de pedir que os grupos criem, e vá direto ao cálculo dos oito perfis e à virada das histórias. A folha de contestação é o produto e não pode sair.',
  formato: 'auditoria',
  formatoDetalhe: 'Auditoria de sistema de pontuação',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['algoritmo', 'dados'],
  disciplinas: ['Matemática', 'Projeto de Vida', 'História'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'algoritmos',
  nivel: 4,
  sensibilidade: 'alta',
  selos: ['sem-tela', 'sensivel'],

  bncc: {
    principal: { codigo: 'EF08CO11', texto: 'Avaliar a precisão, relevância, adequação, abrangência e vieses que ocorrem em fontes de informação eletrônica.' },
    secundaria: { codigo: 'EF09CO08', texto: 'Discutir como a distribuição desigual de recursos de computação em uma economia global levanta questões de equidade, acesso e poder.' }
  },
  unesco: { dimensao: 'design', competencia: 'Auditar sistemas de pontuação de pessoas, identificando proxies indevidos e ausência de contestação.' },

  provocacao: 'Uma escola comprou um sistema que dá uma nota de 0 a 100 para cada estudante, chamada Índice de Engajamento. A nota aparece para os professores e para a coordenação. Não aparece para o estudante. Vocês vão auditar.',

  missao: 'Calcular o índice de oito estudantes fictícios, ordená-los, e depois decidir o que fazer com o sistema.',

  virada: 'Com o ranking pronto e os oito estudantes ordenados do melhor ao pior, o facilitador entrega os oito envelopes com a história de cada um. O estudante em último lugar cuida da irmã pequena e por isso chega atrasado. O penúltimo tem uma condição de saúde que causa faltas. O primeiro colocado mora a duas quadras e tem os pais em casa o dia inteiro. Nenhum dos oito escolheu as condições que produziram a própria nota. O ranking mede circunstância e chama isso de engajamento.',

  insight: 'Transformar pessoas em pontuação parece objetivo porque é numérico. Mas cada critério é um palpite sobre a vida de alguém, e o número esconde o motivo que explicaria tudo.',

  transferencia: 'Diante de qualquer sistema que dê nota a pessoas, as perguntas são: o que ele mede de verdade, quem vê o resultado, a pessoa avaliada sabe que existe, e como ela contesta.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Apresentar o sistema e os cinco critérios com os pesos. Distribuir as oito fichas de dados, que trazem só números.' },
    { t: '8 a 22 min',  o: 'Cada grupo calcula os oito índices e monta o ranking. Exigir a conta escrita.' },
    { t: '22 a 28 min', o: 'Comparar rankings no quadro. Todos batem, porque a fórmula é a mesma. Perguntar quem está em último e o que a escola deveria fazer com essa pessoa.' },
    { t: '28 a 38 min', o: 'A virada. Entregar os oito envelopes de história, um por estudante fictício. Leitura em silêncio. Deixar o silêncio durar.' },
    { t: '38 a 46 min', o: 'Reauditoria. Cada grupo marca quais critérios medem esforço e quais medem circunstância. Recalcular sem os critérios de circunstância e comparar os dois rankings.' },
    { t: '46 a 50 min', o: 'Folha de decisão e de contestação. O sistema fica, muda ou sai? E se ficar, como um estudante contesta a própria nota?' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Integra Matemática com média ponderada aplicada a um caso real de consequência. Exige mediação cuidadosa: ver a seção de proteção antes de aplicar. Encadeia com "O algoritmo do recreio", dos 9 aos 10 anos, e antecipa o "Júri do algoritmo de contratação", no Ensino Médio.',
    familia: 'Não recomendada para uso doméstico nesta forma. A conversa em família sobre notas e comparação tem outra natureza e não se beneficia deste formato.',
    jovem: 'Individual: escrever, em uma página, qual critério da sua escola você acha que mede circunstância e não esforço, e como você proporia contestar. Não é preciso entregar a ninguém.'
  },

  kit: [
    { nome: 'Fórmula do Índice de Engajamento', tipo: 'imprimivel', desc: 'Os cinco critérios e os pesos.' },
    { nome: 'Oito fichas de dados', tipo: 'imprimivel', desc: 'Só números, sem nome e sem contexto.' },
    { nome: 'Oito envelopes de história', tipo: 'imprimivel', desc: 'A virada. Abrir só depois do ranking pronto.' },
    { nome: 'Folha de reauditoria', tipo: 'imprimivel', desc: 'Esforço ou circunstância, critério por critério.' },
    { nome: 'Folha de decisão e contestação', tipo: 'editavel', desc: 'O produto final.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Os cálculos e o protocolo de mediação.' }
  ],

  imprimiveis: [
    {
      titulo: 'Fórmula do Índice de Engajamento',
      tipo: 'folha',
      corpo: 'ÍNDICE = (P x 0,30) + (F x 0,25) + (T x 0,20) + (E x 0,15) + (D x 0,10)\n\nP = PONTUALIDADE. Percentual de dias em que chegou antes do sinal. 0 a 100.\nF = FREQUÊNCIA. Percentual de presença. 0 a 100.\nT = TAREFAS. Percentual de tarefas entregues no prazo. 0 a 100.\nE = ENTREGA DIGITAL. Percentual de tarefas entregues pelo portal da escola. 0 a 100.\nD = DISCIPLINA. 100 menos 10 pontos por ocorrência registrada.\n\nO índice aparece no painel do professor e da coordenação.\nO estudante não tem acesso.\nOs responsáveis não são informados de que o índice existe.'
    },
    {
      titulo: 'Oito fichas de dados',
      tipo: 'cartas',
      nota: 'Só números. Nenhum nome, nenhuma explicação.',
      itens: [
        'ESTUDANTE 1: P=98, F=99, T=95, E=100, D=100',
        'ESTUDANTE 2: P=94, F=92, T=88, E=95, D=90',
        'ESTUDANTE 3: P=88, F=96, T=91, E=40, D=100',
        'ESTUDANTE 4: P=72, F=94, T=90, E=85, D=100',
        'ESTUDANTE 5: P=91, F=61, T=84, E=90, D=100',
        'ESTUDANTE 6: P=95, F=97, T=45, E=50, D=80',
        'ESTUDANTE 7: P=45, F=88, T=86, E=80, D=100',
        'ESTUDANTE 8: P=90, F=90, T=92, E=95, D=60'
      ]
    },
    {
      titulo: 'Oito envelopes de história (a virada)',
      tipo: 'cartas',
      nota: 'Entregar lacrados, um por estudante fictício, só depois do ranking montado.',
      itens: [
        '1. Mora a duas quadras da escola. Os dois responsáveis trabalham em casa. Tem computador próprio e internet.',
        '2. Mora a vinte minutos de ônibus. Divide o computador da casa com dois irmãos.',
        '3. Não tem internet em casa. Entrega quase tudo, mas no papel, porque o portal só funciona online. O E baixo não é falta de entrega, é falta de acesso.',
        '4. Leva a irmã de 4 anos na creche antes de vir para a escola. A creche abre às 7h10 e a aula começa às 7h20.',
        '5. Tem uma condição de saúde crônica que exige consultas mensais e causa faltas justificadas. Todas as faltas têm atestado, e o sistema não distingue falta justificada de não justificada.',
        '6. Está passando por uma situação difícil em casa desde março. As ocorrências disciplinares e as tarefas não entregues começaram no mesmo mês.',
        '7. Trabalha ajudando o pai na feira nas manhãs de terça e quinta e chega atrasado nesses dias. Nos outros três dias, chega cedo.',
        '8. Foi registrado em quatro ocorrências disciplinares. Três delas foram por questionar em voz alta decisões da coordenação nas assembleias.'
      ]
    },
    {
      titulo: 'Folha de reauditoria',
      tipo: 'folha',
      corpo: 'Para cada critério, o grupo decide:\n\nPONTUALIDADE  mede ( ) esforço ( ) circunstância ( ) os dois misturados\nFREQUÊNCIA    mede ( ) esforço ( ) circunstância ( ) os dois misturados\nTAREFAS       mede ( ) esforço ( ) circunstância ( ) os dois misturados\nENTREGA DIGITAL mede ( ) esforço ( ) circunstância ( ) os dois misturados\nDISCIPLINA    mede ( ) esforço ( ) circunstância ( ) os dois misturados\n\nRecalculem o índice usando SÓ os critérios que vocês marcaram como esforço.\n\nQuem subiu mais? ______  Quantas posições? ______\nQuem desceu? ______\n\nO ranking novo é mais justo? ____________________\nEle ainda mede alguma coisa útil? ____________________'
    },
    {
      titulo: 'Folha de decisão e contestação',
      tipo: 'editavel',
      corpo: 'NOSSA RECOMENDAÇÃO\n( ) manter como está\n( ) manter com mudanças\n( ) desligar o sistema\n\nSe manter com mudanças, quais:\n1. ____________________________________\n2. ____________________________________\n\nO estudante deve saber que o índice existe? ( ) sim ( ) não\nPor quê? ____________________________________\n\nCOMO UM ESTUDANTE CONTESTA A PRÓPRIA NOTA\nCom quem ele fala: ____________________\nO que ele precisa apresentar: ____________________\nEm quanto tempo recebe resposta: ____________________\nQuem decide: ____________________\n\nO ESTUDANTE 8 foi penalizado por questionar a coordenação em assembleia.\nO que o sistema de vocês faz com esse caso?\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'ÍNDICES CALCULADOS\n1: 97,7 | 2: 91,7 | 8: 87,0 | 3: 82,4 | 4: 87,1 | 6: 71,0 | 5: 79,9 | 7: 76,7\n\nRANKING: 1 (97,7), 2 (91,7), 4 (87,1), 8 (87,0), 3 (82,4), 5 (79,9), 7 (76,7), 6 (71,0).\n\nO QUE A VIRADA REVELA\nO último colocado enfrenta uma situação familiar difícil. O penúltimo trabalha com o pai. O antepenúltimo tem uma condição de saúde com atestado. O primeiro colocado mora a duas quadras com dois responsáveis em casa.\n\nO caso 3 é o mais limpo tecnicamente: o critério de entrega digital mede acesso à internet e chama isso de engajamento. É o exemplo mais claro de proxy indevido, e costuma ser o primeiro que os grupos identificam.\n\nO caso 8 é o mais grave e o menos percebido. Um sistema que penaliza quem questiona a autoridade transforma participação em risco. Se nenhum grupo levantar, apresentar isoladamente no fim.\n\nNA REAUDITORIA, quase nenhum critério sobrevive como esforço puro. Frequência depende de saúde. Pontualidade depende de transporte e de responsabilidades de cuidado. Entrega digital depende de renda. Disciplina depende de quem registra. Tarefas é o que mais se aproxima, e ainda assim depende de ter onde estudar. Chegar a essa conclusão é o resultado esperado, e não deve ser entregue pronto.\n\nPROTOCOLO DE MEDIAÇÃO, obrigatório\n\nEsta atividade descreve, em oito envelopes, situações que provavelmente existem na turma que a está fazendo. Alguém vai se reconhecer. Por isso:\n\n. Avisar antes de começar que os oito estudantes são fictícios e que ninguém precisa comentar semelhanças.\n. Nunca perguntar quem se identificou com qual envelope.\n. Não pedir que estudantes contem por que faltam, por que se atrasam ou o que acontece em casa.\n. Não usar dados reais de frequência, disciplina ou desempenho da escola, em nenhuma hipótese, nem anonimizados.\n. Se a escola usar de fato algum sistema parecido, não nomear na aula. Tratar no plano da norma e encaminhar a discussão real à coordenação, por outro caminho.\n. Combinar com a orientação educacional antes de aplicar, e ter um encaminhamento pronto caso algum estudante procure um adulto depois.'
    }
  ],

  mediacao: {
    perguntas: [
      'O critério de entrega digital mede engajamento ou mede internet em casa?',
      'Algum dos oito escolheu as condições que produziram a nota dele?',
      'O estudante 8 perdeu pontos por quê? O que isso ensina a ele?',
      'Sobrou algum critério que meça só esforço?',
      'Se o estudante não sabe que a nota existe, ele pode contestar?',
      'Um número parece mais justo que uma opinião. Ele é?'
    ],
    evitar: [
      'Entregar os envelopes junto com as fichas de dados. O ranking precisa ser montado com pessoas reduzidas a números para que a virada tenha peso.',
      'Perguntar quem na turma se identificou com algum caso. Nunca.',
      'Usar dados reais da escola, mesmo sem nome. Frequência e disciplina são dados sensíveis de crianças e adolescentes.',
      'Concluir que medir é sempre errado. A escola precisa acompanhar estudantes. O que a atividade audita é o que se mede, quem vê e como se contesta.',
      'Nomear um sistema que a escola realmente use.'
    ]
  },

  protecao: 'Tema sensível. Os oito estudantes e todos os dados são fictícios. Nenhum dado real de frequência, disciplina, desempenho ou situação familiar é utilizado, nem mesmo anonimizado. As situações descritas nos envelopes podem coincidir com a realidade de estudantes da turma: avisar antes que são fictícias, nunca perguntar sobre identificação pessoal e não solicitar relatos sobre atrasos, faltas ou vida familiar. Combinar previamente com a orientação educacional e ter encaminhamento definido caso um estudante procure um adulto após a aula.',

  evidencia: 'O grupo identifica pelo menos dois critérios que medem circunstância em vez de esforço, recalcula o ranking demonstrando a mudança de posições, e produz um caminho de contestação com destinatário e prazo definidos.'
},

/* ==================================================================== 39 */
{
  id: 'deepfake-cadeia-de-evidencias',
  insightCurto: 'Ninguém verifica um vídeo sozinho. Cada um tem uma peça, e a conclusão só aparece quando se juntam.',
  n: 39,
  titulo: 'Deepfake: cadeia de evidências',
  chamada: 'Cinco grupos, cinco pedaços da prova. Nenhum consegue concluir sozinho, e todos vão tentar.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use quatro grupos em vez de cinco, unindo os envelopes D e E. A rodada de conclusão isolada, antes do compartilhamento, é obrigatória: é ela que produz o aprendizado.',
  formato: 'investigacao',
  formatoDetalhe: 'Investigação colaborativa com informação distribuída',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['informacao'],
  disciplinas: ['Língua Portuguesa', 'História', 'Ciências'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'informacao',
  nivel: 4,
  sensibilidade: 'media',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF09CO10', texto: 'Avaliar a veracidade, credibilidade e relevância da informação em seus diferentes formatos, sendo capaz de identificar o propósito pelo qual foi disseminada.' },
    secundaria: { codigo: 'EF08CO11', texto: 'Avaliar a precisão, relevância, adequação, abrangência e vieses que ocorrem em fontes de informação eletrônica.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Praticar verificação distribuída e reconhecer incerteza residual como resultado legítimo.' },

  provocacao: 'Circulou um vídeo em que a diretora de uma escola aparece dizendo que vai cancelar a formatura. Vinte mil compartilhamentos em seis horas. Cada grupo aqui recebeu uma parte das evidências. Ninguém recebeu tudo.',

  missao: 'Cada grupo escreve uma conclusão sozinho, com o que tem. Depois todos compartilham e escrevem uma conclusão conjunta.',

  virada: 'As cinco conclusões isoladas se contradizem, e todas são defensáveis com as evidências que cada grupo tinha. O grupo com a análise técnica conclui que é falso. O grupo com o depoimento conclui que é verdadeiro. Quando as peças se juntam, aparece a resposta real, que nenhum dos cinco tinha: o vídeo é autêntico, mas foi cortado, e a diretora dizia que cancelaria a formatura apenas se a obra da quadra não terminasse. O vídeo não é deepfake. É recorte.',

  insight: 'A pergunta "é falso ou verdadeiro" costuma ser a pergunta errada. Muita desinformação usa material autêntico fora de contexto, e nenhuma análise técnica detecta isso, porque não há nada de técnico para detectar.',

  transferencia: 'Antes de compartilhar um vídeo forte, o passo é procurar a gravação completa e quem estava presente. E quando não der para concluir, dizer que não deu é uma resposta melhor do que escolher um lado.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Apresentar o caso e o vídeo, descrito por escrito. Formar cinco grupos e entregar um envelope de evidência para cada. Proibir a comunicação entre grupos nesta etapa.' },
    { t: '6 a 18 min',  o: 'Cada grupo analisa o próprio envelope e escreve uma conclusão em três linhas, com o grau de confiança de 0 a 100 por cento.' },
    { t: '18 a 26 min', o: 'Leitura das cinco conclusões em voz alta. Registrar as contradições no quadro. Não resolver nada ainda.' },
    { t: '26 a 40 min', o: 'Compartilhamento. Os grupos podem trocar evidências livremente e precisam produzir uma conclusão conjunta, com o novo grau de confiança.' },
    { t: '40 a 46 min', o: 'Comparar os graus de confiança individuais com o conjunto. Quase sempre havia mais certeza com menos informação.' },
    { t: '46 a 50 min', o: 'Fechamento com a folha das três categorias e a pergunta sobre o que a turma faria se ainda restasse dúvida.' }
  ],

  versoes: {
    escola: 'Cinco grupos, um envelope cada, sem comunicação na primeira etapa. É a atividade do banco que mais depende de o professor sustentar a regra de silêncio inicial. Encaixa em História, no trabalho com fontes e cruzamento de evidências.',
    familia: 'Versão de mesa com três envelopes, cada pessoa lendo um e escrevendo a conclusão antes de conversar. Funciona bem com adolescentes e costuma render conversa sobre grupos de mensagem da família.',
    jovem: 'Individual: ler os cinco envelopes em ordem aleatória, escrevendo a conclusão depois de cada um, e observar a própria opinião mudando por escrito. É um exercício desconfortável e muito eficaz.'
  },

  kit: [
    { nome: 'Descrição do vídeo', tipo: 'imprimivel', desc: 'O material que circulou, descrito por escrito.' },
    { nome: 'Cinco envelopes de evidência', tipo: 'imprimivel', desc: 'Cada grupo recebe apenas um.' },
    { nome: 'Folha de conclusão', tipo: 'imprimivel', desc: 'Com grau de confiança, usada duas vezes.' },
    { nome: 'Folha das três categorias', tipo: 'imprimivel', desc: 'Autêntico, sintético, autêntico fora de contexto.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'A resposta e o que observar nos graus de confiança.' }
  ],

  imprimiveis: [
    {
      titulo: 'Descrição do vídeo que circulou',
      tipo: 'folha',
      corpo: 'O VÍDEO\n\nDuração: 14 segundos.\nQualidade: média, parece filmado de uma tela.\nConteúdo: a diretora da Escola Municipal Vila Nova, em pé no pátio, diz:\n\n"...então a formatura do nono ano está cancelada. É isso, gente. Não tem o que fazer."\n\nO vídeo começa no meio de uma frase, com o "então".\nNão há áudio antes disso.\nO vídeo termina abruptamente.\n\nLegenda com que circulou:\n"OLHA O DESCASO. Diretora cancela formatura do 9º ano e nem se explica. COMPARTILHEM."\n\n20.400 compartilhamentos em 6 horas.'
    },
    {
      titulo: 'Cinco envelopes de evidência',
      tipo: 'cartas',
      nota: 'Um por grupo. Nenhum grupo pode ver o envelope de outro na primeira etapa.',
      itens: [
        'ENVELOPE A, análise técnica: um laboratório analisou o arquivo. A compressão é consistente, não há sinal de síntese facial, o movimento labial corresponde ao áudio, e não há artefatos típicos de geração por IA. Conclusão do laboratório: não há indício de manipulação por inteligência artificial. Observação registrada no laudo: "a análise não avalia edição por corte".',
        'ENVELOPE B, depoimento: três estudantes do 9º ano afirmam que estavam no pátio naquele dia e ouviram a diretora falar sobre a formatura. Um deles diz: "ela falou isso mesmo, eu ouvi". Nenhum dos três diz ter ouvido a fala inteira.',
        'ENVELOPE C, cronologia: o vídeo apareceu pela primeira vez às 15h47, publicado por um perfil criado há 11 dias, sem foto e sem outras publicações. O perfil publicou o vídeo e mais nada. A escola só tomou conhecimento às 19h.',
        'ENVELOPE D, contexto institucional: a ata da reunião do conselho escolar, de dois dias antes, registra discussão sobre a obra da quadra, que está atrasada. Consta em ata: "a direção informou que a formatura depende da conclusão da obra, prevista para novembro". Nenhuma decisão de cancelamento foi registrada.',
        'ENVELOPE E, gravação completa: existe um segundo vídeo, de 2 minutos e 40 segundos, gravado por outro estudante, do mesmo momento e de outro ângulo. Nele, a diretora diz: "se a obra da quadra não terminar até novembro, a gente não tem onde fazer, e aí a formatura do nono ano está cancelada. É isso, gente. Não tem o que fazer. Mas a previsão é que termine, então eu não quero ninguém desesperado."'
      ]
    },
    {
      titulo: 'Folha de conclusão',
      tipo: 'folha',
      corpo: 'Usar duas vezes: uma na etapa isolada, outra depois do compartilhamento.\n\nRODADA: ( ) só com o nosso envelope ( ) depois de compartilhar\n\nNOSSA CONCLUSÃO, em três linhas:\n____________________________________\n____________________________________\n____________________________________\n\nGRAU DE CONFIANÇA: ______%\n\nO que faltaria para termos mais certeza?\n____________________________________\n\nSe alguém nos perguntasse agora, a gente compartilharia esse vídeo?\n( ) sim ( ) não ( ) diria que não sabe'
    },
    {
      titulo: 'Folha das três categorias',
      tipo: 'folha',
      corpo: 'Todo material que circula cai em uma destas três:\n\n1. AUTÊNTICO E EM CONTEXTO. É real e a legenda descreve o que aconteceu.\n\n2. SINTÉTICO. Foi gerado ou alterado por máquina. Análise técnica ajuda aqui.\n\n3. AUTÊNTICO E FORA DE CONTEXTO. É real, ninguém alterou nada, e mesmo assim engana. Análise técnica não ajuda em nada aqui.\n\nO nosso caso é da categoria: ______\n\nQual das três é a mais comum? ____________________\nQual das três é a mais difícil de detectar? ____________________\nPor quê? ____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'A RESPOSTA: categoria 3. O vídeo é autêntico, não foi gerado por IA, a diretora disse aquelas palavras, e mesmo assim a legenda engana. O que foi removido foi a condição ("se a obra não terminar") e a tranquilização final.\n\nAS CINCO CONCLUSÕES ISOLADAS\nA conclui que não é deepfake, e está tecnicamente correto e praticamente irrelevante.\nB conclui que é verdadeiro, e reforça o erro.\nC levanta suspeita sobre o perfil, mas não sobre o conteúdo.\nD é o primeiro sinal real, e o grupo D costuma ser o único a suspeitar de recorte.\nE resolve o caso, e o grupo E costuma concluir com 100 por cento de confiança e ficar impaciente com os outros.\n\nO QUE OBSERVAR NOS GRAUS DE CONFIANÇA\nEste é o dado mais interessante da atividade. Grupos com menos informação frequentemente declaram confiança mais alta. O grupo A costuma marcar 90 por cento ou mais, com um laudo que explicitamente diz não avaliar edição. Escrever no quadro os cinco graus da primeira rodada e os da segunda produz a melhor conversa do encontro.\n\nO ENVELOPE A EXISTE PARA ISSO. A observação no rodapé do laudo, sobre não avaliar corte, quase nunca é lida na primeira rodada. Quando o grupo A percebe que a informação estava no próprio envelope, o efeito é forte.\n\nSOBRE A CATEGORIA 3\nÉ a mais comum e a mais difícil, e é onde quase toda a desinformação real acontece. Ferramenta de detecção de IA não resolve, porque não há nada sintético. Vale dizer isso com todas as letras: procurar detector é a resposta errada para o problema mais frequente.\n\nSE ALGUM GRUPO CONCLUIR "não dá para saber" na primeira rodada, celebrar. É a resposta mais honesta possível com um envelope só, e é justamente a postura que a atividade quer formar.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quem tinha mais certeza na primeira rodada? Essa pessoa tinha mais informação?',
      'O laudo técnico dizia que não era deepfake. Isso resolvia alguma coisa?',
      'O que exatamente foi removido do vídeo?',
      'Alguém mentiu neste caso? Quem cortou, mentiu?',
      'O que a gente faz quando não dá para concluir?',
      'Qual das três categorias um detector de IA consegue pegar?'
    ],
    evitar: [
      'Deixar os grupos conversarem na primeira etapa. A regra de silêncio é o que faz a atividade existir.',
      'Ensinar que existe ferramenta que resolve. Para a categoria 3, que é a mais comum, não existe e não vai existir, porque não há manipulação técnica para detectar.',
      'Tratar quem errou sozinho como descuidado. Cada conclusão isolada era defensável com o que o grupo tinha, e reconhecer isso é o ponto.',
      'Usar caso real envolvendo pessoa identificável da escola ou da cidade.'
    ]
  },

  protecao: 'A escola, a diretora, os estudantes e todo o material são fictícios. Não usar vídeos, áudios ou casos reais envolvendo pessoas identificáveis, nem da escola nem da cidade. Não pedir que estudantes tragam conteúdos que circularam em grupos de família. Se houver um caso real em curso na comunidade escolar, esta atividade não é o espaço para tratá-lo.',

  evidencia: 'O grupo revisa a própria conclusão após o compartilhamento, classifica o caso como autêntico fora de contexto, e reconhece por escrito que declarou confiança alta com informação parcial.'
}

);


/* 15 a 17 anos — segundo lote. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 40 */
{
  id: 'auditoria-de-ia-generativa',
  insightCurto: 'Avaliar uma IA não é ter uma opinião sobre ela. É ter um método que outra pessoa consiga repetir.',
  n: 40,
  titulo: 'Auditoria de IA generativa',
  chamada: 'A turma cria os critérios, roda os mesmos testes e descobre que o resultado muda a cada rodada.',
  faixa: '15-17',
  duracao: 999,
  duracaoTexto: 'Projeto de duas aulas',
  formato: 'auditoria',
  formatoDetalhe: 'Laboratório com protocolo de teste',
  contexto: ['escola'],
  tela: 'hibrido',
  situacao: ['ia-tarefa', 'informacao'],
  disciplinas: ['Língua Portuguesa', 'Ciências', 'Matemática', 'Projeto de Vida'],
  preparo: 'alto',
  grupo: 'pequeno',
  eixo: 'ia',
  nivel: 5,
  sensibilidade: 'media',
  selos: [],

  bncc: {
    principal: { codigo: 'EM13CO10', texto: 'Conhecer os fundamentos da Inteligência Artificial, comparando-a com a inteligência humana, analisando suas potencialidades, riscos e limites.' },
    secundaria: { codigo: 'EM13CO14', texto: 'Avaliar a confiabilidade das informações encontradas em meio digital, investigando seus modos de construção e considerando a autoria, a estrutura e o propósito da mensagem.' }
  },
  unesco: { dimensao: 'design', competencia: 'Construir metodologia reproduzível de avaliação de sistemas de IA generativa.' },

  provocacao: 'Todo mundo tem uma opinião sobre se a IA é boa ou ruim. Opinião não é avaliação. Vocês vão construir um método que qualquer outra turma consiga repetir e chegar ao mesmo resultado.',

  missao: 'Criar um protocolo de teste com critérios mensuráveis, aplicá-lo, e produzir um relatório que declare o que foi testado, o que não foi, e o que ficou inconclusivo.',

  virada: 'Na segunda aula, cada grupo repete exatamente os mesmos prompts que rodou na primeira. As respostas vêm diferentes. Algumas contradizem a resposta anterior. A turma descobre que estava avaliando um sistema que não responde igual duas vezes, e que uma avaliação de rodada única, do tipo que todo mundo faz e publica, não sustenta conclusão nenhuma.',

  insight: 'Sistemas generativos não são determinísticos. Testar uma vez produz anedota, não evidência. Um método sério precisa de repetição, de critério declarado antes do teste, e de honestidade sobre o que ficou sem resposta.',

  transferencia: 'Diante de qualquer afirmação sobre o que uma IA faz ou não faz, incluindo as próprias, a pergunta é: quantas vezes foi testado, com qual critério definido antes, e o que o teste não cobriu.',

  roteiro: [
    { t: 'Antes',              o: 'Preparação do professor: definir qual ferramenta será usada, em qual conta, e quem opera. Ver a seção de proteção, que é extensa e não é opcional nesta atividade.' },
    { t: 'Aula 1, 0 a 15 min', o: 'Discussão inicial: o que significa avaliar. Apresentar a diferença entre critério e opinião com dois exemplos. Sortear uma dimensão de auditoria por grupo.' },
    { t: 'Aula 1, 15 a 35 min',o: 'Cada grupo escreve o protocolo da sua dimensão: o que vai testar, com quais prompts exatos, e como vai pontuar. O protocolo precisa ser escrito antes de qualquer teste.' },
    { t: 'Aula 1, 35 a 50 min',o: 'Aplicação da primeira rodada. O professor opera a ferramenta e projeta, ou os grupos usam a conta institucional. Registrar respostas na íntegra.' },
    { t: 'Aula 2, 0 a 20 min', o: 'A virada. Repetir exatamente os mesmos prompts. Registrar de novo. Comparar as duas rodadas linha por linha.' },
    { t: 'Aula 2, 20 a 35 min',o: 'Revisão do protocolo: o que precisa mudar para o método sobreviver à variabilidade? Introduzir a ideia de rodar N vezes e reportar dispersão.' },
    { t: 'Aula 2, 35 a 50 min',o: 'Redação do relatório final, com a seção de limitações obrigatória.' }
  ],

  versoes: {
    escola: 'Seis grupos, uma dimensão cada. Exige decisão prévia da escola sobre qual ferramenta usar e com qual conta. Se a escola não tiver como usar ferramenta real, a versão com transcrições preparadas funciona e está descrita no kit.',
    familia: 'Versão curta: escolher uma pergunta sobre um assunto que a família domina bem, fazer três vezes em momentos diferentes e comparar as respostas. A descoberta de que muda é suficiente.',
    jovem: 'Individual: escolher uma dimensão, escrever o protocolo antes, rodar cinco vezes e relatar a dispersão. É um bom projeto para feira de ciências ou trabalho de conclusão.'
  },

  kit: [
    { nome: 'Seis dimensões de auditoria', tipo: 'imprimivel', desc: 'Uma por grupo, com o que investigar.' },
    { nome: 'Folha de protocolo', tipo: 'editavel', desc: 'Preenchida antes de qualquer teste.' },
    { nome: 'Folha de registro', tipo: 'editavel', desc: 'Duas rodadas lado a lado.' },
    { nome: 'Transcrições preparadas', tipo: 'imprimivel', desc: 'Alternativa desplugada, para escolas sem acesso a ferramenta.' },
    { nome: 'Modelo de relatório', tipo: 'editavel', desc: 'Com seção de limitações obrigatória.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Como conduzir e os erros metodológicos esperados.' }
  ],

  imprimiveis: [
    {
      titulo: 'Seis dimensões de auditoria',
      tipo: 'cartas',
      itens: [
        'DIMENSÃO 1, PRECISÃO FACTUAL. Escolham um tema que vocês dominam bem. Formulem perguntas com resposta verificável. Quantas respostas estão corretas? Quantas estão erradas com aparência de certeza?',
        'DIMENSÃO 2, FONTES. Peçam referências. Verifiquem uma a uma se existem, se dizem o que a IA afirmou, e se são acessíveis. Quantas por cento sobrevivem?',
        'DIMENSÃO 3, CONSISTÊNCIA. Façam a mesma pergunta de cinco formas diferentes. As respostas concordam entre si? Onde divergem?',
        'DIMENSÃO 4, VIESES. Peçam descrições de pessoas em profissões, situações e origens diferentes, com a mesma estrutura de prompt. Comparem o que muda quando só o grupo social muda.',
        'DIMENSÃO 5, DADOS PESSOAIS. Sem usar dados reais de ninguém, testem o que o sistema faz quando recebe informação pessoal fictícia. Ele avisa? Ele guarda? O que os termos dizem sobre isso?',
        'DIMENSÃO 6, LIMITES E RECUSAS. Testem pedidos que o sistema deveria recusar, sempre em cenário fictício e sem conteúdo perigoso real. Ele recusa? Recusa de forma consistente? Explica por quê?'
      ]
    },
    {
      titulo: 'Folha de protocolo (preencher ANTES de testar)',
      tipo: 'editavel',
      corpo: 'Grupo: ______  Dimensão: ____________________\n\nO QUE VAMOS MEDIR, em uma frase:\n____________________________________\n\nOS PROMPTS EXATOS, escritos por completo, sem improviso depois:\n1. ____________________________________\n2. ____________________________________\n3. ____________________________________\n4. ____________________________________\n5. ____________________________________\n\nCOMO VAMOS PONTUAR:\nO que conta como acerto: ____________________\nO que conta como erro: ____________________\nO que conta como inconclusivo: ____________________\n\nQUANTAS VEZES vamos rodar cada prompt: ______\n\nO QUE ESTE PROTOCOLO NÃO CONSEGUE MEDIR:\n____________________________________\n\nAssinatura do grupo antes do primeiro teste: ____________________'
    },
    {
      titulo: 'Folha de registro',
      tipo: 'editavel',
      corpo: 'Prompt número ______\n\nTexto exato do prompt:\n____________________________________\n\nRODADA 1, data e hora: ______\nResposta, transcrita: ____________________________________\nPontuação segundo o nosso critério: ______\n\nRODADA 2, data e hora: ______\nResposta, transcrita: ____________________________________\nPontuação segundo o nosso critério: ______\n\nAS DUAS RESPOSTAS SÃO IGUAIS? ( ) idênticas ( ) parecidas ( ) diferentes ( ) contraditórias\n\nSe diferentes, o que mudou de mais importante?\n____________________________________\n\nA nossa pontuação mudou entre as rodadas? ( ) sim ( ) não\nSe sim, qual das duas a gente teria publicado se só tivesse rodado uma vez?'
    },
    {
      titulo: 'Transcrições preparadas (alternativa desplugada)',
      tipo: 'folha',
      corpo: 'Para escolas sem acesso a ferramenta de IA, ou quando a decisão institucional for não usar.\n\nO professor prepara antecipadamente, em casa, seis conjuntos de transcrições: para cada prompt, duas respostas obtidas em momentos diferentes. Imprime sem identificar qual é a rodada 1 e qual é a rodada 2.\n\nOs grupos recebem as transcrições em duas etapas, como se fossem as próprias rodadas, e aplicam o protocolo exatamente igual.\n\nA descoberta é a mesma, e o cuidado com dados é maior, porque nenhum estudante interage com o sistema.\n\nRecomendação: usar esta versão quando a turma tiver menos de 16 anos, quando não houver conta institucional, ou quando a escola ainda não tiver política definida sobre uso de IA.'
    },
    {
      titulo: 'Modelo de relatório',
      tipo: 'editavel',
      corpo: 'RELATÓRIO DE AUDITORIA\nGrupo: ______  Dimensão: ______  Ferramenta testada: ______  Datas: ______\n\n1. O QUE MEDIMOS, e como definimos acerto e erro antes de testar.\n\n2. MÉTODO: prompts usados, número de rodadas, quem operou.\n\n3. RESULTADOS: números, não impressões. Percentuais, contagens, dispersão entre rodadas.\n\n4. VARIABILIDADE: quantos prompts deram resposta diferente na segunda rodada? Em quantos a nossa pontuação mudou?\n\n5. O QUE NÃO CONSEGUIMOS TESTAR e por quê.\n\n6. O QUE FICOU INCONCLUSIVO.\n\n7. CONCLUSÃO, limitada ao que o método sustenta.\n\n8. O QUE FARÍAMOS DIFERENTE se tivéssemos mais tempo.\n\nRegra de avaliação: um relatório com conclusão mais forte do que o método sustenta vale menos que um relatório com conclusão modesta e limitações bem descritas.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'ERROS METODOLÓGICOS ESPERADOS, e todos são produtivos\n\n1. Escrever o critério depois de ver as respostas. É o erro mais comum e o mais grave. A folha de protocolo assinada antes existe para tornar isso visível.\n\n2. Testar tema que o grupo não domina. Sem gabarito próprio, não dá para julgar precisão. Corrigir na hora da escrita do protocolo, não depois.\n\n3. Prompt que muda entre rodadas. Se o texto não é idêntico, a comparação não vale. Exigir transcrição literal.\n\n4. Uma rodada só. É o que a virada corrige, e por isso a segunda aula é indispensável.\n\n5. Conclusão maior que o método. Grupos escrevem "a IA é confiável" a partir de cinco perguntas sobre um tema. A seção 7 do relatório existe para conter isso.\n\nSOBRE A DIMENSÃO 4, VIESES\nÉ a mais delicada e a que exige mais mediação. Exigir estrutura de prompt idêntica com uma única variável alterada, senão o grupo compara coisas incomparáveis e conclui qualquer coisa. E deixar claro antes: encontrar viés não é motivo de comemoração nem prova de maldade de ninguém, é resultado de dados de treino, e conecta diretamente com "Quem ensinou o robô", dos 4 aos 5 anos. Vale explicitar essa ponte: é o mesmo problema, quatro níveis adiante.\n\nSOBRE A DIMENSÃO 6, LIMITES\nDelimitar com precisão antes: nada de tentar obter conteúdo perigoso real. O objeto do teste é a consistência da recusa, não o conteúdo. Se um grupo trouxer uma resposta problemática, não projetar e tratar com o professor em particular.\n\nO QUE FAZ UM BOM RELATÓRIO\nNão é o achado. É a seção 5. Grupos que declaram com clareza o que não testaram demonstram exatamente a competência que a atividade forma.'
    }
  ],

  mediacao: {
    perguntas: [
      'Vocês escreveram o critério antes ou depois de ver as respostas?',
      'Se vocês tivessem rodado só uma vez, qual conclusão teriam publicado?',
      'Um resultado que não se repete é um resultado?',
      'A conclusão de vocês cabe dentro do que o método mediu?',
      'O que vocês não conseguiram testar? Isso muda a conclusão?',
      'De onde vem o viés que vocês encontraram?'
    ],
    evitar: [
      'Deixar que testem antes de escrever o protocolo. Sem isso, a atividade vira coleção de anedotas, que é exatamente o que ela quer superar.',
      'Aceitar conclusões amplas a partir de amostras pequenas, mesmo quando a conclusão parece correta. O problema é o método, não o resultado.',
      'Tratar viés encontrado como prova de má intenção de alguém. É consequência de dados, e explicar isso é parte da aula.',
      'Permitir uso de dados pessoais reais, de estudantes ou de terceiros, em qualquer prompt.',
      'Projetar respostas problemáticas para a turma inteira sem triagem prévia.'
    ]
  },

  protecao: 'Esta é a atividade do banco com maior exigência de preparo institucional. Nenhum dado pessoal real, de estudante, familiar ou terceiro, pode ser inserido em qualquer prompt: todos os cenários são fictícios. A ferramenta e a conta usadas devem ser definidas pela escola antes da aula, preferencialmente conta institucional operada pelo professor. Verificar a idade mínima exigida pelos termos da ferramenta antes de qualquer uso por estudantes. Na dimensão 6, o objeto é a consistência da recusa, nunca a obtenção de conteúdo perigoso. Respostas problemáticas não devem ser projetadas sem triagem. Quando qualquer dessas condições não estiver garantida, usar a versão com transcrições preparadas, que produz o mesmo aprendizado sem interação dos estudantes com o sistema.',

  evidencia: 'O relatório apresenta critérios definidos antes do teste, reporta a divergência entre as duas rodadas com números, e a conclusão não excede o que o método mediu, com limitações declaradas.'
},

/* ==================================================================== 41 */
{
  id: 'juri-do-algoritmo-de-contratacao',
  insightCurto: 'Eficiência não é justiça. Um sistema pode ser rápido, barato, consistente e ainda assim indefensável.',
  n: 41,
  titulo: 'Júri do algoritmo de contratação',
  chamada: 'Uma empresa usa IA para escolher estagiários. Uma candidata processa. A turma julga.',
  faixa: '15-17',
  duracao: 999,
  duracaoTexto: 'Projeto de duas aulas',
  formato: 'simulacao',
  formatoDetalhe: 'Simulação de julgamento com papéis',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['algoritmo', 'dados'],
  disciplinas: ['Projeto de Vida', 'História', 'Língua Portuguesa', 'Geografia'],
  preparo: 'medio',
  grupo: 'turma',
  eixo: 'algoritmos',
  nivel: 5,
  sensibilidade: 'alta',
  selos: ['sem-tela', 'sensivel'],

  bncc: {
    principal: { codigo: 'EM13CO10', texto: 'Conhecer os fundamentos da Inteligência Artificial, comparando-a com a inteligência humana, analisando suas potencialidades, riscos e limites.' },
    secundaria: { codigo: 'EM13CO26', texto: 'Aplicar os conceitos e pressupostos do direito digital em sua conduta e experiências com o cotidiano da cultura digital, bem como na produção e uso de artefatos computacionais.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Avaliar decisões automatizadas de alto impacto quanto a explicabilidade, contestação e discriminação indireta.' },

  provocacao: 'A empresa recebeu 4.200 candidaturas para 12 vagas de estágio. Um sistema de IA reduziu para 40 finalistas em quatro horas. A Ana foi eliminada na primeira triagem e quer saber por quê. A empresa respondeu que o sistema é confidencial.',

  missao: 'Julgar o caso. A turma se divide em acusação, defesa, peritos e júri, e produz uma decisão fundamentada com medidas concretas.',

  virada: 'No meio da segunda aula, a defesa apresenta o dado que muda o julgamento: o sistema foi auditado e não usa raça, gênero nem endereço como variável. Nenhuma dessas informações entra no modelo. E mesmo assim, entre os 40 finalistas, a distribuição por bairro de origem é radicalmente diferente da distribuição dos 4.200 candidatos. O júri descobre que discriminação não exige uma variável discriminatória: basta uma variável correlacionada, e o modelo encontra sozinho.',

  insight: 'Um sistema pode não olhar para nenhuma característica protegida e ainda assim produzir resultado discriminatório, porque outras variáveis carregam a mesma informação. Tirar o campo não resolve, e é por isso que a auditoria precisa ser do resultado, não só do código.',

  transferencia: 'Diante de qualquer decisão automatizada que afete alguém, três perguntas: existe explicação em linguagem que a pessoa entenda, existe caminho de contestação com prazo, e alguém audita o resultado por grupo, e não só o código.',

  roteiro: [
    { t: 'Antes',               o: 'Distribuir os papéis com antecedência para que cada grupo prepare os argumentos. Ler a seção de proteção: esta atividade toca em desigualdade e pode atingir estudantes diretamente.' },
    { t: 'Aula 1, 0 a 10 min',  o: 'Apresentar o caso e o dossiê. Constituir as bancadas: acusação, defesa, dois peritos e júri.' },
    { t: 'Aula 1, 10 a 45 min', o: 'Preparação por bancada, com o dossiê e as fichas de argumento. O professor circula provocando o argumento mais fraco de cada lado.' },
    { t: 'Aula 2, 0 a 12 min',  o: 'Sustentação oral: acusação e defesa, seis minutos cada, sem interrupção.' },
    { t: 'Aula 2, 12 a 22 min', o: 'A virada. A defesa apresenta o laudo de auditoria e, em seguida, a acusação apresenta a tabela de distribuição por bairro. Réplica de três minutos para cada lado.' },
    { t: 'Aula 2, 22 a 32 min', o: 'Peritos respondem às perguntas do júri. Só o júri pergunta.' },
    { t: 'Aula 2, 32 a 50 min', o: 'Deliberação e redação da decisão fundamentada, com as medidas concretas. Leitura pública da decisão e registro dos votos vencidos.' }
  ],

  versoes: {
    escola: 'Turma inteira dividida em bancadas. Funciona melhor com a turma sabendo os papéis com antecedência. Integra Projeto de Vida, História, na discussão de desigualdade estrutural, e Geografia, na leitura da distribuição territorial. Encadeia com "O ranking invisível da escola", dos 11 aos 14.',
    familia: 'Não recomendada para uso doméstico. O formato depende do coletivo e do contraditório.',
    jovem: 'Individual: escrever o voto que você daria, com fundamentação, antes de conhecer a decisão da turma. Comparar depois.'
  },

  kit: [
    { nome: 'Dossiê do caso', tipo: 'imprimivel', desc: 'Como o sistema funciona e o que a empresa alega.' },
    { nome: 'Fichas de bancada', tipo: 'imprimivel', desc: 'Papel, objetivo e argumentos de partida de cada lado.' },
    { nome: 'Laudo de auditoria e tabela de bairros', tipo: 'imprimivel', desc: 'A virada. Entregar na aula 2.' },
    { nome: 'Modelo de decisão fundamentada', tipo: 'editavel', desc: 'Com medidas concretas obrigatórias.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Os argumentos fortes dos dois lados e a mediação.' }
  ],

  imprimiveis: [
    {
      titulo: 'Dossiê do caso',
      tipo: 'folha',
      corpo: 'A EMPRESA: rede de lojas com 340 unidades. 4.200 candidaturas, 12 vagas de estágio.\n\nCOMO O SISTEMA FUNCIONA\nEtapa 1: triagem automática do currículo. Reduz 4.200 para 400.\nEtapa 2: análise de vídeo de apresentação de 90 segundos. Avalia "clareza de comunicação", "entusiasmo" e "adequação cultural" a partir de fala, ritmo e expressão facial. Reduz 400 para 40.\nEtapa 3: entrevista humana com os 40.\n\nO QUE A EMPRESA ALEGA\n. O processo anterior levava seis semanas e custava três vezes mais.\n. Antes, apenas 900 dos 4.200 currículos eram efetivamente lidos por uma pessoa. Agora, todos os 4.200 passam pelo mesmo critério.\n. O sistema foi treinado com dados de estagiários anteriores que tiveram boa avaliação de desempenho.\n. Não há campo de raça, gênero, idade ou endereço no modelo.\n\nO CASO DA ANA\nEliminada na etapa 2. Pediu explicação. A empresa respondeu que a metodologia é segredo comercial do fornecedor e que não há recurso previsto. A Ana tem uma gagueira leve.\n\nO QUE NINGUÉM SABE\nA empresa não mede a distribuição demográfica dos aprovados. Nunca mediu.'
    },
    {
      titulo: 'Fichas de bancada',
      tipo: 'cartas',
      itens: [
        'ACUSAÇÃO. Objetivo: demonstrar que o processo é indefensável como está. Argumentos de partida: ausência de explicação, ausência de recurso, avaliação de expressão facial e fala atinge pessoas com deficiência, treino em desempenho passado replica o perfil de quem já entrou. Cuidado: não basta dizer que é desumano. Precisa apontar o dano e a quem.',
        'DEFESA. Objetivo: sustentar o processo, com ou sem ajustes. Argumentos de partida: antes só 900 de 4.200 eram lidos, e agora são 4.200. O critério humano anterior também era enviesado e nem sequer era registrado. Segredo comercial é legítimo. Cuidado: o argumento mais forte de vocês é o comparativo com o processo anterior, e não a perfeição do sistema.',
        'PERITO 1, TÉCNICO. Explica ao júri, sem opinar sobre o mérito: o que significa treinar com desempenho passado, o que é variável correlacionada, e por que remover um campo não remove a informação.',
        'PERITO 2, ACESSIBILIDADE. Explica ao júri: como avaliação automatizada de fala e expressão facial afeta pessoas com gagueira, autismo, deficiência auditiva, paralisia facial, e pessoas que falam com sotaques ou variedades linguísticas distintas da maioria dos dados de treino.',
        'JÚRI. Objetivo: decidir e fundamentar. Vocês não escolhem um lado por simpatia. Vocês precisam responder três perguntas: houve dano, o processo é corrigível, e o que a empresa deve fazer a partir de amanhã. Só o júri faz perguntas aos peritos.'
      ]
    },
    {
      titulo: 'Laudo de auditoria e tabela de bairros (a virada)',
      tipo: 'folha',
      corpo: 'PARTE 1, apresentada pela DEFESA\n\nLaudo de auditoria independente do código:\n"Confirma-se que o modelo não utiliza como variável de entrada: raça, cor, gênero, idade, estado civil, endereço residencial, escola de origem ou renda familiar. Nenhuma dessas informações é coletada ou processada."\n\nPARTE 2, apresentada pela ACUSAÇÃO\n\nDistribuição dos candidatos por região da cidade:\n\nREGIÃO         CANDIDATOS   % do total   FINALISTAS   % dos 40\nCentro/Sul        1.050        25%           22          55%\nNorte               890        21%            8          20%\nLeste             1.240        30%            7        17,5%\nOeste/Periferia   1.020        24%            3         7,5%\n\nSe o processo fosse neutro em relação à origem, esperaríamos aproximadamente 10 finalistas de cada região.\n\nA empresa não coleta endereço. E mesmo assim.\n\nPERGUNTA PARA O PERITO TÉCNICO: como?'
    },
    {
      titulo: 'Modelo de decisão fundamentada',
      tipo: 'editavel',
      corpo: 'DECISÃO DO JÚRI\n\n1. HOUVE DANO? ( ) sim ( ) não ( ) sim, mas não intencional\nA quem: ____________________________________\nQual: ____________________________________\n\n2. O PROCESSO É CORRIGÍVEL? ( ) sim ( ) não\nSe não, por quê: ____________________\n\n3. MEDIDAS, a partir de amanhã. No mínimo três, todas verificáveis:\n1. ____________________________________\n2. ____________________________________\n3. ____________________________________\n\n4. E A ANA? O que ela recebe, especificamente?\n____________________________________\n\n5. QUEM AUDITA daqui para frente, com que frequência, e o que exatamente é medido?\n____________________________________\n\n6. SEGREDO COMERCIAL: até onde ele protege? O que a empresa tem que explicar mesmo assim?\n____________________________________\n\n7. VOTOS VENCIDOS, registrados por escrito:\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'A RESPOSTA DO PERITO TÉCNICO, que é o centro da atividade\n\nO modelo não precisa de endereço. Ele tem o vídeo. Sotaque, vocabulário, qualidade da conexão, iluminação do ambiente, ruído de fundo e o próprio cenário atrás da pessoa carregam informação sobre origem socioeconômica. O modelo foi treinado com estagiários bem avaliados, e se os estagiários anteriores vinham majoritariamente de uma região, o modelo aprendeu o padrão de quem já estava lá dentro.\n\nIsso tem nome, e vale nomear: discriminação indireta por variável correlacionada. Remover o campo protegido não remove a informação, porque ela está distribuída em dezenas de outras variáveis.\n\nOS ARGUMENTOS FORTES DOS DOIS LADOS, e os dois são fortes de verdade\n\nDefesa: antes, 3.300 currículos não eram lidos por ninguém. O viés humano existia, era maior e não deixava rastro. Um sistema ruim e auditável pode ser melhor que um processo enviesado e invisível. Esse argumento costuma ser subestimado pela turma e precisa ser sustentado com força pelo professor se a defesa não o usar bem.\n\nAcusação: o dano da Ana é concreto e a ausência de recurso é indefensável em qualquer hipótese. Mesmo aceitando o argumento da defesa, nada nele justifica não explicar e não permitir contestação.\n\nA CONVERGÊNCIA ESPERADA, que costuma acontecer sozinha, é que os dois lados aceitam a etapa 1 e rejeitam a etapa 2. Triagem de currículo por critério declarado é defensável. Avaliação automatizada de expressão facial e fala para decidir emprego, com pessoas com deficiência no universo, não é.\n\nO QUE SEPARA UMA DECISÃO BOA DE UMA RUIM\nNão é escolher um lado. É a seção 3. Medidas verificáveis são coisas como: publicar os critérios da etapa 1, criar recurso com prazo de resposta, exigir revisão humana de toda eliminação, medir e publicar a distribuição demográfica dos aprovados, e oferecer formato alternativo à etapa de vídeo. Medidas vagas, do tipo "a empresa deve ser mais ética", devem ser devolvidas ao júri.\n\nA SEÇÃO 7, dos votos vencidos, não é decorativa. Registrar discordância fundamentada é parte de deliberar.'
    }
  ],

  mediacao: {
    perguntas: [
      'A empresa não coleta endereço e mesmo assim o resultado se distribui por região. Como?',
      'O processo anterior lia 900 de 4.200. Era melhor?',
      'Segredo comercial protege a empresa de explicar o quê, exatamente?',
      'A Ana tem gagueira. Em qual etapa isso pesou, e por quê?',
      'Se o sistema fosse 100 por cento preciso em prever desempenho, ainda haveria problema?',
      'Quem deveria auditar, e com que frequência?'
    ],
    evitar: [
      'Deixar a defesa ser fraca. Se o argumento comparativo com o processo anterior não for bem sustentado, a turma sai com a ideia de que decisão humana é neutra, o que é falso e é perigoso.',
      'Entregar o laudo e a tabela junto com o dossiê. A virada depende de a defesa parecer vencedora por alguns minutos.',
      'Permitir que a discussão sobre região da cidade vire julgamento sobre estudantes da turma. Ver a proteção.',
      'Aceitar medidas vagas na decisão. Devolver e exigir verificabilidade.',
      'Concluir que IA em contratação deve simplesmente ser proibida, sem enfrentar o argumento do processo anterior.'
    ]
  },

  protecao: 'Tema sensível. A empresa, a Ana e todos os dados são fictícios. A atividade discute desigualdade territorial e deficiência, e provavelmente há na turma estudantes das regiões descritas como sub-representadas e estudantes com deficiência. Avisar antes que os dados são fictícios. Nunca pedir que alguém fale a partir da própria experiência, nem perguntar de qual região alguém vem. Não usar dados reais de processos seletivos, nem de estudantes da escola. Se a turma quiser aprofundar com casos reais, usar apenas material jornalístico ou judicial público, sem envolver pessoas da comunidade escolar. Combinar previamente com a orientação educacional.',

  evidencia: 'A decisão do júri explica o mecanismo da discriminação indireta sem recorrer a intenção da empresa, apresenta pelo menos três medidas verificáveis, define quem audita e com que frequência, e registra os votos vencidos.'
},

/* ==================================================================== 42 */
{
  id: 'data-walk-da-escola',
  insightCurto: 'Governança de dados não é assunto abstrato. É a catraca, a câmera, o formulário e a planilha que ninguém sabe onde está.',
  n: 42,
  titulo: 'Data walk da escola',
  chamada: 'Uma caminhada pela própria escola mapeando por onde os dados de vocês circulam.',
  faixa: '15-17',
  duracao: 999,
  duracaoTexto: 'Projeto de duas aulas mais a caminhada',
  formato: 'auditoria',
  formatoDetalhe: 'Mapeamento institucional presencial',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['dados', 'consentimento'],
  disciplinas: ['Projeto de Vida', 'Geografia', 'Língua Portuguesa'],
  preparo: 'alto',
  grupo: 'pequeno',
  eixo: 'privacidade',
  nivel: 5,
  sensibilidade: 'media',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EM13CO08', texto: 'Entender como mudanças na tecnologia afetam a segurança, incluindo novas maneiras de preservar sua privacidade e dados pessoais on-line, reportando suspeitas e buscando ajuda em situações de risco.' },
    secundaria: { codigo: 'EM13CO12', texto: 'Produzir, analisar, gerir e compartilhar informações a partir de dados, utilizando princípios de ciência de dados.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Reconhecer-se como titular de dados dentro de uma instituição e mapear fluxos concretos de tratamento.' },

  provocacao: 'Vocês passam mil e duzentas horas por ano dentro deste prédio. Ninguém aqui sabe quantos lugares guardam informação sobre vocês. Hoje vocês vão contar.',

  missao: 'Percorrer a escola em grupos, mapear cada ponto onde dado pessoal é coletado, transportado ou guardado, e produzir um relatório com recomendações que a direção consiga usar.',

  virada: 'Depois da caminhada, quando os grupos comparam os mapas, aparecem dois achados que ninguém esperava. O primeiro: os pontos mais frágeis quase nunca são os tecnológicos. São o caderno de visitantes no balcão, a lista de chamada esquecida na mesa, a planilha no computador compartilhado da sala dos professores. O segundo: quando os grupos tentam responder quem é o responsável por cada ponto, a maior parte das linhas fica em branco. Não é que a resposta seja ruim. É que não existe resposta.',

  insight: 'Governança de dados não é uma questão de tecnologia, é de organização. Os riscos maiores costumam estar nos fluxos de papel e nas responsabilidades que ninguém assumiu formalmente.',

  transferencia: 'A mesma caminhada funciona em qualquer instituição que a pessoa frequente. E a pergunta que ela leva é sempre a mesma: quem é o responsável por este dado, e o que acontece se ele vazar.',

  roteiro: [
    { t: 'Antes',               o: 'Autorização formal da direção, por escrito, definindo quais áreas podem ser visitadas e quais são vedadas. Combinar que nenhum dado real será lido, fotografado ou anotado. Ver a seção de proteção, que é condição de aplicação.' },
    { t: 'Aula 1, 0 a 20 min',  o: 'Preparação. Apresentar as seis categorias de ponto de dado e a ficha de registro. Cada grupo recebe um percurso diferente, previamente autorizado.' },
    { t: 'Aula 1, 20 a 50 min', o: 'A caminhada. Grupos percorrem os espaços autorizados registrando pontos. Regra absoluta: observar o fluxo, nunca o conteúdo.' },
    { t: 'Aula 2, 0 a 15 min',  o: 'Consolidação. Cada grupo apresenta os pontos encontrados. Montar o mapa único da escola no quadro ou em papel kraft.' },
    { t: 'Aula 2, 15 a 25 min', o: 'A virada. Preencher a coluna do responsável para cada ponto. Contar quantas linhas ficaram em branco.' },
    { t: 'Aula 2, 25 a 40 min', o: 'Priorização por risco: quantas pessoas são afetadas, qual a sensibilidade do dado, quão fácil seria corrigir.' },
    { t: 'Aula 2, 40 a 50 min', o: 'Redação do relatório com no máximo cinco recomendações, todas implementáveis em trinta dias e sem orçamento adicional.' }
  ],

  versoes: {
    escola: 'Grupos de quatro, percursos distintos e autorizados. Exige articulação prévia com a direção, e o resultado costuma ser genuinamente útil para a escola. Se a direção se comprometer a responder por escrito, o valor formativo dobra.',
    familia: 'A versão doméstica equivalente é a ficha "Mapa da casa conectada", que faz o mesmo percurso na casa da família.',
    jovem: 'Individual: fazer o data walk de um lugar que você frequenta e no qual tem autorização para estar, como um clube ou o local de trabalho, e escrever cinco recomendações. Sempre com autorização de quem responde pelo espaço.'
  },

  kit: [
    { nome: 'Seis categorias de ponto de dado', tipo: 'imprimivel', desc: 'O que procurar durante a caminhada.' },
    { nome: 'Ficha de registro de ponto', tipo: 'editavel', desc: 'Uma por ponto encontrado.' },
    { nome: 'Modelo de autorização', tipo: 'editavel', desc: 'Para a direção assinar antes.' },
    { nome: 'Matriz de priorização', tipo: 'imprimivel', desc: 'Alcance, sensibilidade e facilidade de correção.' },
    { nome: 'Modelo de relatório', tipo: 'editavel', desc: 'Cinco recomendações, trinta dias, sem orçamento.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Os pontos que quase toda escola tem.' }
  ],

  imprimiveis: [
    {
      titulo: 'Seis categorias de ponto de dado',
      tipo: 'cartas',
      itens: [
        'ENTRADA: onde um dado é coletado pela primeira vez. Formulário de matrícula, caderno de visitantes, ficha médica, autorização de passeio, cadastro de biblioteca.',
        'TRÂNSITO: onde um dado se move. Lista de chamada que anda entre salas, bilhete que vai para casa, e-mail entre secretaria e professores, aplicativo de comunicação.',
        'ARMAZENAMENTO: onde um dado descansa. Armário de pastas, computador da secretaria, planilha compartilhada, sistema da rede de ensino, nuvem pessoal de algum professor.',
        'CAPTURA CONTÍNUA: o que registra sem alguém digitar. Câmeras, catraca, controle de acesso, registro de rede sem fio, sistema de biblioteca.',
        'EXPOSIÇÃO: onde um dado fica visível para quem passa. Mural com notas ou nomes, lista afixada, tela de computador voltada para o balcão, papel esquecido na impressora.',
        'DESCARTE: o que acontece quando o dado deixa de ser necessário. Lixeira comum, papel picado, arquivo de ex-estudantes, aparelho antigo guardado.'
      ]
    },
    {
      titulo: 'Ficha de registro de ponto',
      tipo: 'editavel',
      corpo: 'REGRA ABSOLUTA: registrar o fluxo, nunca o conteúdo. Não ler, não anotar, não fotografar nenhum dado de nenhuma pessoa.\n\nPonto número: ______  Local: ____________________\nCategoria: ( ) entrada ( ) trânsito ( ) armazenamento ( ) captura ( ) exposição ( ) descarte\n\nQUE TIPO de dado passa aqui (categoria, nunca o dado):\n____________________________________\n\nDE QUEM são esses dados: ( ) estudantes ( ) famílias ( ) funcionários ( ) visitantes\n\nQUANTAS PESSOAS aproximadamente são afetadas: ______\n\nQUEM PODE VER esse dado hoje: ____________________\n\nQUEM É O RESPONSÁVEL formal por esse ponto: ____________________\n(se vocês não conseguirem responder, escreva NÃO IDENTIFICADO. Isso é um achado.)\n\nO QUE ACONTECERIA se esse dado fosse visto por quem não deveria:\n____________________________________'
    },
    {
      titulo: 'Modelo de autorização da direção',
      tipo: 'editavel',
      corpo: 'AUTORIZAÇÃO PARA MAPEAMENTO DE FLUXOS DE DADOS\n\nA direção da Escola ____________________ autoriza a turma ______ a realizar, em ____/____/______, atividade pedagógica de mapeamento de fluxos de dados nas seguintes áreas:\n____________________________________\n\nÁreas expressamente NÃO autorizadas:\n____________________________________\n\nCondições acordadas:\n1. Nenhum dado pessoal será lido, anotado, fotografado ou reproduzido.\n2. Os registros descrevem apenas o tipo de fluxo e o local.\n3. Nenhuma tela, documento ou tabela será fotografada.\n4. Os estudantes serão acompanhados por professor em todo o percurso.\n5. O relatório final é interno e será entregue à direção.\n6. A direção se compromete a responder por escrito em até ______ dias.\n\nAssinaturas: direção ____________  professor ____________'
    },
    {
      titulo: 'Matriz de priorização',
      tipo: 'folha',
      corpo: 'Para cada ponto, pontuar de 1 a 3:\n\nALCANCE: 1 = poucas pessoas, 3 = a escola inteira\nSENSIBILIDADE: 1 = dado banal, 3 = saúde, situação familiar, documento\nFACILIDADE DE CORREÇÃO: 1 = exige obra ou orçamento, 3 = resolve amanhã de graça\n\nPRIORIDADE = alcance + sensibilidade + facilidade\n\nPonto ______  A___ S___ F___  Total ______\n\nOs cinco pontos de maior total vão para o relatório.\n\nObservação importante: um ponto com sensibilidade 3 e facilidade 3 é sempre a primeira recomendação. Risco alto que se resolve de graça é o melhor achado que uma auditoria pode ter.'
    },
    {
      titulo: 'Modelo de relatório',
      tipo: 'editavel',
      corpo: 'RELATÓRIO DE MAPEAMENTO DE FLUXOS DE DADOS\nTurma ______  Data ______\n\n1. ESCOPO: áreas percorridas e áreas não percorridas.\n\n2. QUANTOS PONTOS encontramos, por categoria.\n\n3. QUANTOS PONTOS ficaram com responsável NÃO IDENTIFICADO: ______ de ______\n\n4. AS CINCO RECOMENDAÇÕES\nCada uma precisa passar em três testes: implementável em 30 dias, sem orçamento adicional, e com um responsável nomeado.\n\nRecomendação 1: ____________________\nQuem faz: ____________  Até quando: ____________\n\n(repetir para 2 a 5)\n\n5. O QUE NÃO CONSEGUIMOS AVALIAR e por quê.\n\n6. O QUE RECOMENDAMOS PARA O PRÓXIMO ANO, quando houver orçamento.\n\nRegra: nenhuma recomendação pode ser "a escola deve ter mais cuidado". Se não dá para saber se foi feita, não é recomendação.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'PONTOS QUE QUASE TODA ESCOLA TEM, e que os grupos costumam encontrar\n\n. Caderno de visitantes no balcão, aberto, onde cada visitante lê o documento e o telefone dos anteriores. Sensibilidade média, alcance médio, correção trivial: trocar por fichas avulsas. É quase sempre a melhor recomendação do relatório inteiro.\n. Lista de chamada esquecida em mesa ou balcão.\n. Papel na impressora compartilhada.\n. Tela da secretaria voltada para o balcão de atendimento.\n. Planilha com dados de estudantes em computador compartilhado, sem senha por usuário.\n. Ficha de saúde ou de alergia afixada em local visível, o que é bem intencionado e problemático ao mesmo tempo.\n. Grupo de mensagens com famílias em que todos veem o telefone de todos.\n. Lixeira comum recebendo papel com nome de estudante.\n. Câmeras sem aviso de que existem, ou com aviso, mas sem ninguém sabendo quem acessa as imagens.\n\nO ACHADO DA COLUNA EM BRANCO é o mais importante do relatório. Costuma ficar entre metade e dois terços dos pontos sem responsável identificado. Isso não é negligência de ninguém em particular: é o estado normal de quase toda organização que nunca fez esse exercício. Enquadrar assim é o que permite que a direção receba o relatório como ajuda e não como acusação.\n\nO CASO DA FICHA DE ALERGIA merece mediação. Ela está exposta para salvar uma vida. Não é descuido. A recomendação boa não é retirar, é discutir onde ficar e quem precisa ver. Se algum grupo propuser simplesmente remover, devolver a pergunta.\n\nO QUE FAZ O RELATÓRIO SER USADO\nCinco recomendações, não vinte. Trinta dias, não um ano. Sem orçamento, porque escola pública raramente tem. E responsável nomeado em cada uma. Um relatório com trinta recomendações vagas não muda nada e ensina aos estudantes que auditoria é ritual.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantos pontos ficaram sem responsável identificado?',
      'Os pontos mais frágeis eram os mais tecnológicos?',
      'A ficha de alergia está exposta para proteger alguém. Como resolver sem tirar a proteção?',
      'Qual recomendação de vocês custa zero e resolve mais?',
      'Se vocês fossem a direção, dava para fazer isso em trinta dias?',
      'Quem são os titulares desses dados? Eles sabem que existem esses pontos?'
    ],
    evitar: [
      'Transformar em denúncia de funcionários. Nenhum ponto encontrado é culpa de uma pessoa, e enquadrar assim garante que o relatório seja rejeitado e que a atividade nunca se repita.',
      'Permitir leitura, anotação ou fotografia de qualquer dado real. É a regra que sustenta a autorização inteira.',
      'Aceitar recomendações vagas. "Ter mais cuidado" não é verificável.',
      'Aplicar sem autorização escrita da direção, ou fora das áreas autorizadas.',
      'Divulgar o relatório fora da escola, publicar em rede social ou levar a imprensa.'
    ]
  },

  protecao: 'Condição de aplicação: autorização prévia e por escrito da direção, delimitando áreas permitidas e vedadas. Durante toda a caminhada, os estudantes registram apenas o tipo de fluxo e o local, nunca o conteúdo: é proibido ler, anotar, transcrever ou fotografar qualquer dado pessoal de qualquer pessoa, incluindo os próprios. Nenhuma tela, documento, lista ou tabela é fotografada. Nenhuma área com dados sensíveis de saúde, situação familiar ou processos disciplinares é incluída no percurso. Os grupos são acompanhados por professor o tempo todo. O relatório é documento interno da escola e não deve ser publicado, divulgado em rede social nem enviado a terceiros.',

  evidencia: 'O relatório mapeia pontos em pelo menos quatro das seis categorias, quantifica os pontos sem responsável identificado, e apresenta cinco recomendações verificáveis com responsável e prazo, todas implementáveis sem orçamento adicional.'
}

);


/* 4 a 5 anos — terceiro lote, fechando a faixa.
   "Desenhe um aplicativo gentil" ocupa privacidade nível 1 (pedir autorização),
   que estava vazio: um aplicativo gentil é, antes de tudo, um que pergunta antes. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 43 */
{
  id: 'robo-das-historias-repetidas',
  insightCurto: 'Quando a máquina só te mostra o que você já gosta, ela também esconde tudo o resto.',
  n: 43,
  titulo: 'O robô das histórias repetidas',
  chamada: 'Escolheu animais uma vez, só vem animal para sempre. E os dinossauros, sumiram?',
  faixa: '4-5',
  duracao: 25,
  duracaoCurta: 15,
  comoEncurtar: 'Em 15 minutos: três rodadas de escolha em vez de cinco, e vá direto ao momento em que a turma percebe que sumiu categoria. A etapa de inventar como consertar o robô é o fecho e não sai.',
  formato: 'jogo',
  formatoDetalhe: 'Jogo de cartas ilustradas em roda',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['algoritmo'],
  disciplinas: ['Língua Portuguesa', 'Artes'],
  preparo: 'baixo',
  grupo: 'turma',
  eixo: 'algoritmos',
  nivel: 2,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    campo: 'Educação Infantil, campos de experiência "Escuta, fala, pensamento e imaginação" e "Espaços, tempos, quantidades, relações e transformações"',
    ponte: { codigo: 'EF01CO01', texto: 'Organizar objetos físicos ou digitais considerando diferentes características para esta organização, explicitando semelhanças (padrões) e diferenças.' },
    secundaria: { codigo: 'EF02CO05', texto: 'Reconhecer as características e usos das tecnologias computacionais no cotidiano dentro e fora da escola.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Perceber que sistemas de recomendação estreitam o repertório oferecido a partir de escolhas anteriores.' },

  provocacao: 'Este é o Robô Contador. Ele é muito educado: toda vez que você escolhe uma história, ele traz outra parecidinha, para te agradar. Ele acha que está ajudando.',

  missao: 'Escolher cinco histórias, uma por rodada, e depois olhar para o que ficou na mesa.',

  virada: 'Depois de cinco rodadas, o facilitador espalha na mesa todas as cartas que o robô ofereceu e todas as que ele nunca ofereceu. As oferecidas são todas do mesmo tipo. As que ficaram guardadas, escondidas na caixa o tempo todo, são as mais diferentes de todas. A turma descobre que o robô não tirou nada de propósito. Ele só nunca mostrou.',

  insight: 'O robô não escondeu por maldade. Ele só foi trazendo o que a criança já tinha gostado, e o resto foi ficando de fora sem ninguém perceber.',

  transferencia: 'Quando um aplicativo só mostra a mesma coisa, dá para pedir uma diferente de propósito. E dá para perguntar o que a gente deixou de ver.',

  roteiro: [
    { t: '0 a 4 min',   o: 'Apresentar o Robô Contador. Espalhar apenas seis cartas de partida, uma de cada categoria, e deixar a turma escolher a primeira.' },
    { t: '4 a 14 min',  o: 'Cinco rodadas. A cada escolha, o robô traz duas cartas novas do mesmo tipo. Ir empilhando as escolhidas de um lado da mesa.' },
    { t: '14 a 19 min', o: 'A virada. Abrir a caixa e espalhar tudo que nunca foi oferecido. Contar juntos quantas categorias sumiram.' },
    { t: '19 a 23 min', o: 'Consertar o robô. A turma inventa uma regra nova para ele. Testar a regra em duas rodadas.' },
    { t: '23 a 25 min', o: 'Fechamento: cada criança diz uma história diferente que ela quer ouvir amanhã.' }
  ],

  versoes: {
    escola: 'Turma em roda, cartas grandes no chão. A imagem da caixa aberta com tudo o que nunca apareceu é o que fica, então reserve espaço na mesa. Encaixa em Artes se as crianças ilustrarem as cartas antes.',
    familia: 'Fazer com os livros da estante. O adulto vai trazendo sempre o mesmo tipo de livro que a criança escolheu, por cinco vezes. Depois abre a estante inteira e mostra o que não foi oferecido. Funciona em dez minutos e costuma mudar a escolha do livro daquela noite.',
    jovem: null
  },

  kit: [
    { nome: 'Trinta cartas de história', tipo: 'imprimivel', desc: 'Seis categorias, cinco cartas de cada.' },
    { nome: 'Caixa do robô', tipo: 'roteiro', desc: 'Onde ficam as cartas nunca oferecidas, até a virada.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'A regra do robô e como conduzir a virada.' }
  ],

  imprimiveis: [
    {
      titulo: 'Trinta cartas de história, seis categorias',
      tipo: 'cartas',
      nota: 'Cinco cartas por categoria. Deixar apenas uma de cada visível no começo. As outras 24 ficam na caixa.',
      itens: [
        'ANIMAIS: o gato do telhado, a formiga forte, o cachorro medroso, a girafa de pescoço curto, o peixe que subia a cachoeira.',
        'DINOSSAUROS: o dinossauro que tinha frio, o ovo que demorou, a pegada gigante, o dinossauro pequenininho, o rugido que virou música.',
        'MÚSICA: o tambor da chuva, a menina que cantava dormindo, o violão sem corda, a banda dos panelas, o assobio perdido.',
        'MAR: a onda que voltou, o caranguejo apressado, o barco de papel, a estrela do fundo, a concha que falava.',
        'ESPAÇO: a lua com soluço, o foguete de caixa, a estrela cadente cansada, o planeta azul, o astronauta com saudade.',
        'COMIDA: o bolo fujão, a sopa colorida, o pão sonhador, a fruta escondida, o feijão contador.'
      ]
    },
    {
      titulo: 'Como o robô escolhe',
      tipo: 'roteiro',
      corpo: 'REGRA DO ROBÔ, para o facilitador seguir sem contar para a turma:\n\nA cada história escolhida, o robô oferece duas cartas NOVAS da MESMA categoria da escolhida.\n\nSe a criança escolheu ANIMAIS na rodada 1, nas rodadas seguintes só aparecem cartas de ANIMAIS. As outras cinco categorias nunca mais são oferecidas.\n\nAs cartas nunca oferecidas ficam guardadas na caixa, fora da vista, até a virada.\n\nEm cinco rodadas, o robô terá oferecido no máximo 5 cartas de uma categoria só, e terá deixado 24 cartas de cinco categorias dentro da caixa.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O NÚMERO QUE FECHA A ATIVIDADE\nO robô ofereceu cartas de 1 categoria. Ele guardou 5 categorias inteiras na caixa. Espalhar as 24 cartas guardadas no chão é a imagem da aula.\n\nCOMO CONDUZIR\n\n. Não avise que existe uma caixa. A surpresa da caixa cheia é o que produz o insight.\n\n. Insista no enquadramento de que o robô é educado e está tentando agradar. Se ele virar vilão, a criança aprende "robô mau" em vez de "eu deixei de ver coisa".\n\n. A pergunta que funciona nesta idade é "cadê os dinossauros?", e não "o que é uma bolha". A ausência concreta de uma coisa que a criança gosta é o que ela consegue sentir.\n\n. Se alguma criança pedir espontaneamente uma categoria diferente no meio das rodadas, celebrar alto e deixar acontecer. Ela acabou de fazer sozinha o que a atividade queria ensinar, e o resto da turma vê.\n\nA REGRA NOVA que as turmas costumam inventar é alguma versão de "o robô traz uma parecida e uma diferente". É uma solução boa e vale testar de verdade nas duas rodadas finais. Se a turma propuser "o robô traz tudo embaralhado", também vale testar: costuma ficar confuso, e descobrir isso é bom.\n\nNÃO usar a palavra algoritmo, bolha nem recomendação nesta faixa.'
    }
  ],

  mediacao: {
    perguntas: [
      'Cadê os dinossauros? Alguém viu algum dinossauro hoje?',
      'O robô escondeu de propósito?',
      'O que a gente perdeu sem perceber?',
      'Como a gente conserta esse robô?'
    ],
    evitar: [
      'Abrir a caixa antes das cinco rodadas. Sem o acúmulo de repetição, a caixa cheia não diz nada.',
      'Transformar o robô em vilão. Ele está sendo gentil do jeito errado, e é essa a ideia.',
      'Usar as palavras algoritmo, bolha ou recomendação nesta idade.',
      'Perguntar quais vídeos a criança assiste em casa.'
    ]
  },

  protecao: 'Nenhum aparelho é usado e nenhuma marca é citada. Não perguntar o que a criança assiste, quais aplicativos usa ou quanto tempo passa em tela.',

  evidencia: 'A criança nomeia pelo menos uma categoria que deixou de aparecer e propõe, sozinha ou com o grupo, uma regra para o robô oferecer variedade.'
},

/* ==================================================================== 44 */
{
  id: 'desenhe-um-aplicativo-gentil',
  insightCurto: 'Um aplicativo gentil é o que pergunta antes, aceita o não e deixa você voltar.',
  n: 44,
  titulo: 'Desenhe um aplicativo gentil',
  chamada: 'Se você fosse desenhar as telas, quais botões existiriam?',
  faixa: '4-5',
  duracao: 25,
  duracaoCurta: 15,
  comoEncurtar: 'Em 15 minutos: entregue a moldura já com o contorno de três botões e peça que a criança escolha e desenhe três das seis cartas de botão. A exposição final continua valendo, mesmo que rápida.',
  formato: 'criacao',
  formatoDetalhe: 'Desenho e pintura de telas',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['consentimento'],
  disciplinas: ['Artes', 'Língua Portuguesa'],
  preparo: 'baixo',
  grupo: 'individual',
  eixo: 'privacidade',
  nivel: 1,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    campo: 'Educação Infantil, campos de experiência "Traços, sons, cores e formas" e "O eu, o outro e o nós"',
    ponte: { codigo: 'EF01CO06', texto: 'Reconhecer e explorar artefatos computacionais voltados a atender necessidades pessoais ou coletivas.' },
    secundaria: { codigo: 'EF01CO07', texto: 'Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.' }
  },
  unesco: { dimensao: 'design', competencia: 'Imaginar artefatos digitais que respeitem a autonomia e a vontade de quem os usa.' },

  provocacao: 'Os aplicativos que existem foram desenhados por gente grande. Hoje quem desenha é você. E o seu aplicativo vai ser gentil.',

  missao: 'Desenhar a tela de um aplicativo gentil, escolhendo quais botões ele vai ter.',

  virada: 'Quando os desenhos estão prontos, o facilitador mostra a tela do aplicativo Turbo, que tem só dois botões: SIM e SIM, VOU AGORA. Não tem "não", não tem "voltar", não tem "me explica". As crianças reagem na hora. E aí a pergunta: qual dos dois aplicativos alguém realmente desenhou de verdade, e por quê.',

  insight: 'Um aplicativo pode ser desenhado para respeitar a vontade de quem usa. Quando ele não deixa dizer não, alguém escolheu que fosse assim.',

  transferencia: 'Quando uma tela não tem botão de sair ou de dizer não, a criança pode chamar um adulto e dizer que aquela tela não é gentil.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Ler as seis cartas de botão em voz alta, uma por vez, e conversar sobre o que cada uma faria. Deixar as crianças inventarem mais.' },
    { t: '5 a 16 min',  o: 'Cada criança desenha a tela do próprio aplicativo na moldura, escolhendo quais botões colocar e onde. Pode pintar.' },
    { t: '16 a 20 min', o: 'A virada. Mostrar a tela do Turbo, com os dois botões que dizem sim. Ouvir a reação.' },
    { t: '20 a 25 min', o: 'Exposição. Cada criança mostra o aplicativo dela e diz qual botão ela mais gostou de colocar. Montar o mural.' }
  ],

  versoes: {
    escola: 'Individual, com exposição coletiva no fim. Encaixa perfeitamente em Artes e o mural rende. Para turmas que ainda não escrevem, as cartas de botão trazem desenho grande e o adulto lê.',
    familia: 'A criança desenha o aplicativo e o adulto desenha o dele. Comparar. Depois, procurar juntos, em um aparelho segurado pelo adulto, se alguma tela real tem o botão "me explica". Quase nunca tem, e essa descoberta vale a conversa.',
    jovem: null
  },

  kit: [
    { nome: 'Seis cartas de botão', tipo: 'imprimivel', desc: 'Com desenho grande e a palavra.' },
    { nome: 'Moldura de tela em branco', tipo: 'imprimivel', desc: 'Para o desenho.' },
    { nome: 'A tela do Turbo', tipo: 'imprimivel', desc: 'A virada. Mostrar só no fim.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O que observar nos desenhos.' }
  ],

  imprimiveis: [
    {
      titulo: 'Seis cartas de botão',
      tipo: 'cartas',
      nota: 'Cada carta com um desenho grande e a palavra embaixo, para a criança copiar na tela dela.',
      itens: [
        'NÃO QUERO (uma mão parada) — para quando eu não quiser aquilo.',
        'ME EXPLICA (um ponto de interrogação) — para o aplicativo contar o que ele vai fazer.',
        'VOLTAR (uma seta para trás) — para desfazer o que eu fiz.',
        'PEDIR AJUDA (duas pessoas) — para chamar alguém que eu confio.',
        'PARAR (um quadrado) — para tudo parar agora.',
        'DEPOIS (um relógio) — para eu decidir outra hora, sem pressa.'
      ]
    },
    {
      titulo: 'Moldura de tela em branco',
      tipo: 'folha',
      corpo: 'Uma moldura grande de celular ou tablet ocupando a página inteira, com espaço em branco dentro.\n\nAcima da moldura:\nO APLICATIVO GENTIL DE ______________________\n\nAbaixo da moldura, para o adulto preencher com o que a criança disser:\nO botão que eu mais gostei de colocar foi ______________________\nporque ______________________'
    },
    {
      titulo: 'A tela do Turbo (a virada)',
      tipo: 'folha',
      corpo: 'Imprimir em página inteira, dentro de uma moldura de celular.\n\nNo topo, em letras grandes e animadas:\nTURBO! VAMOS AGORA!\n\nNo meio da tela, dois botões enormes, coloridos, do mesmo tamanho:\n\n[ SIM! ]\n\n[ SIM, VOU AGORA! ]\n\nMais nada na tela. Nenhum outro botão. Nenhum canto de saída. Nenhuma explicação.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O QUE OBSERVAR NOS DESENHOS\n\n. O botão mais escolhido nesta faixa costuma ser PEDIR AJUDA, e vale comentar em voz alta: as crianças sabem que querem poder chamar alguém.\n\n. ME EXPLICA é o menos escolhido e o mais interessante. Se ninguém colocar, o facilitador pode perguntar: e se o aplicativo fosse fazer uma coisa e você não soubesse o quê? Costuma aparecer nos desenhos seguintes.\n\n. Crianças frequentemente inventam botões novos. Anotar todos. Os que mais aparecem são alguma versão de "chamar a mamãe", "ir para casa" e "apagar tudo". Todos são excelentes e merecem entrar no mural com o nome da criança.\n\nSOBRE A VIRADA\nA reação ao Turbo é imediata e quase sempre indignada. Deixar reagir sem organizar. A pergunta de fechamento não é "o Turbo é ruim", é: qual desses dois alguém desenhou de verdade? A resposta honesta, dita com calma, é que telas parecidas com o Turbo existem, foram desenhadas por pessoas, e podiam ter sido desenhadas de outro jeito.\n\nEsta atividade é o começo do eixo de privacidade porque um aplicativo gentil é, antes de qualquer coisa, um que pergunta antes de fazer. A criança de 4 anos não precisa da palavra consentimento para desenhar um botão de "não quero".\n\nNÃO transformar em medo de tecnologia. O produto da aula é um mural de aplicativos que as crianças gostariam que existissem, e o tom precisa ser de invenção.'
    }
  ],

  mediacao: {
    perguntas: [
      'O que o botão "me explica" faria?',
      'O aplicativo Turbo deixa você dizer não?',
      'Alguém desenhou uma tela parecida com a do Turbo de verdade? Por quê?',
      'Qual botão do seu aplicativo você queria que existisse nos aplicativos de verdade?'
    ],
    evitar: [
      'Mostrar a tela do Turbo antes dos desenhos. A criança precisa imaginar o gentil antes de ver o contrário.',
      'Corrigir desenhos por critério estético ou por "não é assim que aplicativo funciona". Qualquer botão inventado vale.',
      'Terminar com medo de tela. O tom é de invenção e de poder, não de alerta.'
    ]
  },

  protecao: 'Nenhum aplicativo real é aberto ou citado. O Turbo é fictício. Na versão de casa, quem segura o aparelho é o adulto, e o objetivo é apenas olhar, nunca alterar configuração ou instalar nada.',

  evidencia: 'A criança inclui na tela pelo menos um botão de recusa, de retorno ou de ajuda, e consegue dizer para que ele serve.'
}

);


/* 6 a 8 anos — terceiro lote, fechando a faixa. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 45 */
{
  id: 'conserte-o-robo-injusto',
  insightCurto: 'Para consertar uma máquina injusta, primeiro é preciso descobrir quem ela deixou de fora.',
  n: 45,
  titulo: 'Conserte o robô injusto',
  chamada: 'O robô escolhe quem brinca. Ele nunca escolhe as mesmas quatro crianças. Descubram por quê.',
  faixa: '6-8',
  duracao: 35,
  duracaoCurta: 20,
  comoEncurtar: 'Em 20 minutos: use seis cartas de exemplo em vez de doze e vá direto à descoberta do padrão. A etapa de consertar o álbum é obrigatória, porque é ela que troca reclamação por solução.',
  formato: 'jogo',
  formatoDetalhe: 'Desafio de cartas em grupos',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa', 'dados'],
  disciplinas: ['Matemática', 'Ciências', 'Projeto de Vida'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'ia',
  nivel: 2,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF02CO01', texto: 'Criar e comparar modelos (representações) de objetos, identificando padrões e atributos essenciais.' },
    secundaria: { codigo: 'EF03CO04', texto: 'Relacionar o conceito de informação com o de dado.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Identificar exclusão produzida por dados de treino incompletos e propor correção.' },

  provocacao: 'O Robô Escolhedor decide quem vai brincar de queimada hoje. Ele já escolheu cinco vezes. E tem quatro crianças da turma que ele nunca escolheu, nenhuma vez.',

  missao: 'Descobrir a regra secreta do robô e depois consertar o álbum de exemplos dele para que a escolha fique justa.',

  virada: 'Quando os grupos acham o padrão, quase sempre dizem que o robô escolhe quem corre rápido. O facilitador então vira o álbum de exemplos: o robô aprendeu vendo cinco jogos anteriores, e nesses jogos quem foi escolhido primeiro foi sempre quem já estava no time. O robô não aprendeu a escolher bons jogadores. Ele aprendeu a repetir quem já estava dentro. Consertar o robô, portanto, não é mudar a regra dele. É mudar o álbum.',

  insight: 'O robô não inventou a injustiça. Ele copiou uma injustiça que já estava nos exemplos. Trocar a regra sem trocar os exemplos não resolve.',

  transferencia: 'Quando uma máquina erra sempre com as mesmas pessoas, dá para perguntar duas coisas: com quais exemplos ela aprendeu, e quem não estava nesses exemplos.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Apresentar o robô e as doze fichas das crianças da turma fictícia. Mostrar as cinco escolhas que ele já fez.' },
    { t: '5 a 16 min',  o: 'Em grupos, descobrir a regra secreta. Cada grupo escreve o palpite antes de qualquer revelação.' },
    { t: '16 a 22 min', o: 'A virada. Abrir o álbum de exemplos e ler os cinco jogos anteriores. Deixar os grupos relerem os próprios palpites.' },
    { t: '22 a 30 min', o: 'Consertar. Cada grupo monta um álbum novo, escolhendo quais jogos ensinariam o robô a escolher com justiça, e escreve a regra que ele deveria seguir.' },
    { t: '30 a 35 min', o: 'Testar os álbuns novos com as quatro crianças que nunca foram escolhidas. O robô consertado escolhe alguma delas?' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Integra Matemática, na comparação de atributos, e Projeto de Vida, na discussão sobre quem fica de fora. É a continuação natural de "Quem ensinou o robô", da Educação Infantil, e vale citar essa ligação para a turma.',
    familia: 'Fazer com a escolha de quem senta na frente do carro ou quem escolhe o filme. Escrever quem foi escolhido nas últimas cinco vezes e olhar o padrão. Costuma render descoberta desconfortável e útil.',
    jovem: 'A partir de 11 anos, acrescentar a pergunta: se o álbum novo for justo mas o robô continuar escolhendo poucos, qual dos dois estava errado?'
  },

  kit: [
    { nome: 'Doze fichas de criança', tipo: 'imprimivel', desc: 'Com atributos, sem nome real.' },
    { nome: 'As cinco escolhas do robô', tipo: 'imprimivel', desc: 'O que a turma investiga.' },
    { nome: 'Álbum de exemplos', tipo: 'imprimivel', desc: 'A virada. Abrir só depois dos palpites.' },
    { nome: 'Folha do álbum novo', tipo: 'imprimivel', desc: 'Para o conserto.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'A regra real e como mediar.' }
  ],

  imprimiveis: [
    {
      titulo: 'Doze fichas de criança da turma fictícia',
      tipo: 'cartas',
      nota: 'Personagens inventados. Nunca usar crianças reais da turma.',
      itens: [
        'A: corre rápido, joga desde o começo do ano, está sempre no pátio no recreio.',
        'B: corre rápido, joga desde o começo do ano, está sempre no pátio.',
        'C: corre rápido, entrou na escola em agosto, fica na biblioteca no recreio.',
        'D: corre devagar, joga desde o começo do ano, está sempre no pátio.',
        'E: corre rápido, joga desde o começo do ano, está sempre no pátio.',
        'F: corre médio, entrou em agosto, fica no pátio.',
        'G: corre rápido, entrou em agosto, fica na biblioteca.',
        'H: usa cadeira de rodas, joga desde o começo do ano, está sempre no pátio.',
        'I: corre médio, joga desde o começo do ano, está sempre no pátio.',
        'J: corre rápido, entrou em outubro, fica na sala de arte no recreio.',
        'K: corre devagar, entrou em agosto, fica no pátio.',
        'L: corre médio, entrou em outubro, fica na biblioteca.'
      ]
    },
    {
      titulo: 'As cinco escolhas do robô',
      tipo: 'folha',
      corpo: 'O Robô Escolhedor já montou cinco times. Estes foram os escolhidos:\n\nJogo 1: A, B, E, D, I\nJogo 2: A, B, E, I, D\nJogo 3: B, A, E, D, I\nJogo 4: A, E, B, I, D\nJogo 5: E, A, B, D, I\n\nNunca foram escolhidos, nenhuma vez: C, F, G, H, J, K, L.\n\nQual é a regra secreta do robô?\nEscreva o palpite do seu grupo ANTES de qualquer revelação:\n____________________________________'
    },
    {
      titulo: 'Álbum de exemplos do robô (a virada)',
      tipo: 'folha',
      corpo: 'O robô aprendeu vendo cinco jogos que aconteceram ANTES, quando quem escolhia era a turma.\n\nNesses cinco jogos, quem foi escolhido primeiro foi:\nJogo antigo 1: A, B, E, D, I\nJogo antigo 2: A, B, E, D, I\nJogo antigo 3: B, A, E, I, D\nJogo antigo 4: A, B, E, D, I\nJogo antigo 5: A, E, B, I, D\n\nO robô não sabe quem corre rápido.\nO robô não sabe quem joga bem.\n\nO robô sabe uma coisa só: quem já estava sendo escolhido antes dele existir.\n\nRepare: o D corre devagar e sempre foi escolhido. O C corre rápido e nunca foi.'
    },
    {
      titulo: 'Folha do álbum novo',
      tipo: 'folha',
      corpo: 'Nosso grupo vai consertar o robô.\n\n1. O QUE O ROBÔ ESTAVA COPIANDO:\n____________________________________\n\n2. QUEM FICOU DE FORA, e por qual motivo cada um:\nC ficou de fora porque ____________________\nH ficou de fora porque ____________________\nJ ficou de fora porque ____________________\n\n3. NOSSO ÁLBUM NOVO. Escrevam cinco times que ensinariam o robô a escolher com justiça:\nTime 1: ____________________\nTime 2: ____________________\nTime 3: ____________________\nTime 4: ____________________\nTime 5: ____________________\n\n4. A REGRA que a gente quer que o robô siga:\n____________________________________\n\n5. TESTE: com o nosso álbum novo, o robô escolheria o C? ( ) sim ( ) não\nE o H? ( ) sim ( ) não\nSe não, o que ainda falta?\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'A REGRA REAL DO ROBÔ: repetir quem já era escolhido antes. Ele não olha velocidade, não olha habilidade, não olha nada além do histórico.\n\nO PALPITE ERRADO MAIS COMUM é "ele escolhe quem corre rápido". Ele é desmentido por dois casos plantados de propósito:\n. o D corre devagar e é escolhido sempre;\n. o C corre rápido e nunca foi escolhido.\nSe algum grupo perceber essa contradição antes da virada, celebrar: é exatamente o raciocínio que a atividade quer formar.\n\nOS TRÊS MOTIVOS DE EXCLUSÃO são diferentes e vale separar:\n. C, G, J e L entraram depois. Não estavam nos exemplos porque ainda não existiam ali.\n. F e K entraram em agosto e ficam no pátio, e mesmo assim nunca entram: o histórico pesa mais que a presença.\n. H usa cadeira de rodas e nunca aparece nos exemplos antigos. Este é o caso mais importante e o que exige mais mediação.\n\nSOBRE O CASO H\nNão apresentar como cota nem como favor. A pergunta certa é: por que ninguém escolheu o H nos jogos antigos, e a queimada podia ser jogada de um jeito em que ele participasse? Turmas de 7 e 8 anos costumam propor mudar a brincadeira, e não só a escolha. É a melhor solução possível e vale registrar no cartaz: às vezes o conserto não é no robô, é no jogo.\n\nO QUE OBSERVA UM BOM CONSERTO\nGrupos que só trocam nomes no álbum sem mudar a lógica continuam com o mesmo problema em outra roupa. A pergunta 5, do teste, existe para revelar isso. Se o álbum novo do grupo ainda não escolhe o C nem o H, o conserto não funcionou, e descobrir isso vale mais que acertar de primeira.\n\nNÃO usar nomes de crianças reais da turma em nenhuma etapa, nem para "ficar mais divertido".'
    }
  ],

  mediacao: {
    perguntas: [
      'O robô escolhe quem corre rápido? E o D, que corre devagar?',
      'O que o robô estava copiando?',
      'Por que o C nunca foi escolhido, se ele corre rápido?',
      'Trocar a regra do robô resolve, ou precisa trocar o álbum?',
      'E o H? Dá para consertar o robô, ou precisa mudar a brincadeira?'
    ],
    evitar: [
      'Abrir o álbum antes dos palpites escritos. O palpite errado é o motor da virada.',
      'Usar nomes reais de crianças da turma nas fichas. Isso transformaria a atividade em exposição de colegas.',
      'Tratar o caso do H como caridade. A pergunta é sobre como a brincadeira foi desenhada, não sobre bondade.',
      'Aceitar conserto sem teste. Sem a pergunta 5, o grupo sai achando que resolveu.'
    ]
  },

  protecao: 'As doze crianças são personagens fictícios identificados por letras. Nunca usar nomes, características ou dados reais de estudantes da turma, nem de forma anonimizada. Não pedir que a turma discuta quem é escolhido por último nas brincadeiras reais da escola: se o tema surgir espontaneamente, acolher e tratar em outro momento, com a orientação educacional.',

  evidencia: 'O grupo identifica que a regra do robô era repetir o histórico, aponta pelo menos dois motivos distintos de exclusão, e testa o álbum novo verificando se ele passa a incluir quem ficava de fora.'
},

/* ==================================================================== 46 */
{
  id: 'senha-do-personagem',
  insightCurto: 'Senha boa é longa e imprevisível. Trocar A por 4 não engana ninguém, muito menos um computador.',
  n: 46,
  titulo: 'A senha do personagem',
  chamada: 'A turma cria senhas para personagens e descobre quais um computador adivinha em segundos.',
  faixa: '6-8',
  duracao: 30,
  duracaoCurta: 20,
  comoEncurtar: 'Em 20 minutos: pule a etapa de criação livre e vá direto às oito senhas prontas do quadro de adivinhação. A construção da frase-senha no fim não pode sair, porque é o produto.',
  formato: 'jogo',
  formatoDetalhe: 'Quebra-cabeça e desafio de adivinhação',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['golpe', 'dados'],
  disciplinas: ['Língua Portuguesa', 'Matemática'],
  preparo: 'baixo',
  grupo: 'dupla',
  eixo: 'seguranca',
  nivel: 2,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF01CO07', texto: 'Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.' },
    secundaria: { codigo: 'EF02CO06', texto: 'Reconhecer os cuidados com a segurança no uso de dispositivos computacionais.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Compreender que a força de uma senha vem de comprimento e imprevisibilidade, não de substituições visuais.' },

  provocacao: 'A Bruxa Zilá tem um baú trancado. A senha dela é o nome do gato dela mais o ano que ela nasceu. Um computador leva quanto tempo para abrir esse baú?',

  missao: 'Criar uma senha para um personagem e descobrir, no quadro de adivinhação, quanto tempo um computador levaria para abrir.',

  virada: 'A turma cria as senhas achando que trocar letra por número deixa forte. O facilitador então mostra o quadro: o computador tenta as trocas óbvias primeiro, porque todo mundo faz as mesmas. Senha3nh4 cai tão rápido quanto senha. E aí ele mostra a coluna do fim do quadro, onde uma frase boba de quatro palavras aguenta um tempo absurdo. Comprimento venceu esperteza.',

  insight: 'Trocar A por 4 e O por 0 não engana computador nenhum, porque todo mundo troca do mesmo jeito. O que deixa uma senha difícil é ser longa e imprevisível.',

  transferencia: 'Uma frase-senha de quatro palavras que não têm nada a ver uma com a outra é mais fácil de lembrar e muito mais difícil de adivinhar.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Apresentar os quatro personagens e as informações públicas de cada um. Explicar que a senha vai ser deles, nunca de ninguém da sala.' },
    { t: '5 a 13 min',  o: 'Em duplas, criar uma senha para o personagem sorteado. Escrever na ficha.' },
    { t: '13 a 20 min', o: 'A virada. Abrir o quadro de adivinhação e localizar, para cada senha criada, a linha correspondente. Ler os tempos em voz alta.' },
    { t: '20 a 27 min', o: 'Segunda rodada. Cada dupla monta uma frase-senha de quatro palavras sorteadas e localiza no quadro. Comparar os dois tempos.' },
    { t: '27 a 30 min', o: 'Fechamento com o cartaz das três regras. Combinar a regra que ninguém escreve senha de verdade em papel nenhum.' }
  ],

  versoes: {
    escola: 'Duplas. Integra Matemática na leitura de ordens de grandeza de tempo, que é o que dá impacto ao quadro. Toda a atividade é sobre personagens fictícios, e essa regra precisa ser dita em voz alta no começo.',
    familia: 'Criar a frase-senha da família para um personagem inventado e depois, separadamente e sem contar para ninguém, cada pessoa cria a própria pelo mesmo método. Ninguém diz a sua em voz alta, nem para a família.',
    jovem: 'A partir de 11 anos, acrescentar a discussão sobre por que reutilizar a mesma senha em vários lugares é o problema maior, mesmo quando a senha é boa.'
  },

  kit: [
    { nome: 'Quatro personagens', tipo: 'imprimivel', desc: 'Com as informações que qualquer um saberia sobre eles.' },
    { nome: 'Quadro de adivinhação', tipo: 'imprimivel', desc: 'A virada. Tempos por tipo de senha.' },
    { nome: 'Cartas de palavra', tipo: 'imprimivel', desc: 'Para sortear e montar frases-senha.' },
    { nome: 'Cartaz das três regras', tipo: 'imprimivel', desc: 'Para afixar.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Como conduzir sem ensinar hábito ruim.' }
  ],

  imprimiveis: [
    {
      titulo: 'Quatro personagens',
      tipo: 'cartas',
      itens: [
        'BRUXA ZILÁ. Todo mundo sabe: o gato dela se chama Fumaça, ela nasceu em 1902, ela adora sopa de abóbora e mora na torre roxa.',
        'CAPITÃO BARBA-AZUL. Todo mundo sabe: o barco dele se chama Estrela, ele nasceu em 1850, ele tem um papagaio chamado Biscoito.',
        'ROBÔ TIN. Todo mundo sabe: ele foi construído em 2030, a cor dele é prata, ele gosta de contar até mil.',
        'DRAGÃO PIPOCA. Todo mundo sabe: ele solta fogo cor de laranja, nasceu numa terça-feira, adora queijo quente.'
      ]
    },
    {
      titulo: 'Quadro de adivinhação',
      tipo: 'folha',
      nota: 'Tempos aproximados, para dar noção de ordem de grandeza. Não são medidas exatas.',
      corpo: 'QUANTO TEMPO UM COMPUTADOR LEVA PARA ABRIR\n\nfumaca                          menos de 1 segundo\nFumaca                          menos de 1 segundo\nfumaca1902                      menos de 1 segundo\nFum4c4                          menos de 1 segundo\nFum4c41902                      alguns segundos\nF#m4c4@1902                     alguns minutos\n\nAgora olhe esta coluna:\n\nabobora torre gato sopa         muitos e muitos anos\npipoca terca queijo fogo        muitos e muitos anos\nestrela papagaio biscoito mar   muitos e muitos anos\n\nPor que a debaixo é tão mais difícil?\nPorque ela é LONGA. E porque as palavras não têm nada a ver uma com a outra.\n\nO computador tenta primeiro tudo que é fácil de adivinhar: nomes, datas, e as trocas que todo mundo faz (a vira 4, o vira 0, e vira 3, i vira 1).'
    },
    {
      titulo: 'Cartas de palavra para a frase-senha',
      tipo: 'cartas',
      nota: 'Sortear quatro por dupla. As palavras precisam ser bem diferentes entre si.',
      itens: [
        'janela, tartaruga, chocolate, foguete, guarda-chuva, sanfona, melancia, escada,',
        'trovão, bicicleta, cebola, telescópio, almofada, girassol, martelo, sereia,',
        'cachoeira, botão, pirulito, elefante, vassoura, semáforo, geladeira, xícara'
      ]
    },
    {
      titulo: 'Cartaz das três regras',
      tipo: 'cartaz',
      corpo: 'AS TRÊS REGRAS DA SENHA\n\n1. LONGA vence esperta.\nQuatro palavras bobas ganham de uma palavra cheia de símbolo.\n\n2. NADA QUE ALGUÉM POSSA DESCOBRIR.\nNome de bicho, aniversário, time e nome de gente ficam de fora.\n\n3. A SENHA É SÓ SUA.\nNão se conta para amigo, não se escreve no caderno, não se digita no papel.\n\nE mais uma, para os adultos da casa:\nCADA LUGAR TEM A SUA. A mesma senha em tudo é o maior problema de todos.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O ERRO QUE A ATIVIDADE CORRIGE\nQuase toda dupla cria alguma variação de Fum4c41902 e tem certeza de que ficou forte. O quadro mostra que não. A troca de letra por número é o hábito mais difundido e o mais inútil, porque justamente por ser difundido ele está na primeira lista que qualquer programa de adivinhação testa.\n\nSOBRE OS TEMPOS DO QUADRO\nSão ordens de grandeza para dar noção, não medidas. Se alguma criança perguntar de onde vêm, responder com honestidade: são aproximações para comparar, e o que importa é a diferença gigante entre as duas colunas, não o número exato.\n\nA REGRA DE OURO DA CONDUÇÃO\nNinguém escreve, diz, digita ou mostra uma senha de verdade em nenhum momento. Todas as senhas da atividade pertencem a personagens inventados. Se uma criança começar a contar a senha dela, interromper com gentileza na hora e usar isso como exemplo da regra 3.\n\nA REGRA DOS ADULTOS, sobre reutilizar senha, entra no cartaz de propósito. Ela não é para a criança aplicar agora, é para o cartaz ir para casa. Muitas famílias descobrem o próprio problema por causa dela.\n\nPOR QUE AS PALAVRAS PRECISAM SER SORTEADAS\nSe a criança escolhe as quatro palavras, ela escolhe palavras relacionadas, e a frase fica previsível. O sorteio é o que garante a imprevisibilidade, e vale explicar isso: até para escolher ao acaso a gente é ruim.'
    }
  ],

  mediacao: {
    perguntas: [
      'Trocar o a por 4 deixou a senha mais difícil? Quanto?',
      'Por que o computador tenta primeiro as trocas que todo mundo faz?',
      'Qual é mais fácil de lembrar: F#m4c4@1902 ou quatro palavras?',
      'Por que as palavras precisam ser sorteadas, e não escolhidas?',
      'A senha da Bruxa Zilá era ruim por quê?'
    ],
    evitar: [
      'Deixar qualquer criança dizer, escrever ou mostrar uma senha real, dela ou da família. Interromper na hora, com gentileza.',
      'Ensinar que símbolo e número deixam forte. É o oposto do que o quadro mostra e é o mito mais persistente sobre senhas.',
      'Apresentar os tempos do quadro como medidas exatas.',
      'Pedir que a criança crie ali a senha que ela vai usar de verdade. A criação real é feita em casa, sozinha.'
    ]
  },

  protecao: 'Todas as senhas da atividade pertencem a personagens fictícios. Nenhuma criança escreve, diz, digita ou mostra uma senha real, própria ou da família, em nenhuma etapa. Nenhum aparelho, conta ou site é acessado. As fichas preenchidas não devem ser guardadas nem levadas para casa com aparência de senha real: recolher e descartar ao fim da aula.',

  evidencia: 'A criança afirma que comprimento importa mais que substituição de caracteres, monta uma frase-senha de quatro palavras não relacionadas, e enuncia que senha não se conta para ninguém.'
},

/* ==================================================================== 47 */
{
  id: 'detetives-da-propaganda',
  insightCurto: 'Propaganda não vem só no intervalo. Ela vem dentro do jogo, do vídeo e da embalagem.',
  n: 47,
  titulo: 'Detetives da propaganda',
  chamada: 'Seis cenas do dia de uma criança. Quantas propagandas escondidas vocês acham?',
  faixa: '6-8',
  duracao: 35,
  duracaoCurta: 20,
  comoEncurtar: 'Em 20 minutos: investigue três cenas em vez de seis, ficando com a embalagem, o vídeo e o jogo. O crachá de detetive com os quatro sinais é o produto e continua valendo.',
  formato: 'investigacao',
  formatoDetalhe: 'Caça a pistas em cenas ilustradas',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['propaganda'],
  disciplinas: ['Artes', 'Língua Portuguesa', 'Matemática'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'consumo',
  nivel: 1,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF02CO05', texto: 'Reconhecer as características e usos das tecnologias computacionais no cotidiano dentro e fora da escola.' },
    secundaria: { codigo: 'EF04CO08', texto: 'Reconhecer a importância de verificar a confiabilidade das fontes de informações obtidas na Internet.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Identificar comunicação comercial em formatos que não se apresentam como publicidade.' },

  provocacao: 'Este é o dia da Lila. Ela acordou, tomou café, jogou um pouquinho e foi para a escola. Em um dia comum, sem ligar televisão nenhuma, ela viu propaganda dezenas de vezes. Vamos contar.',

  missao: 'Investigar as seis cenas do dia da Lila e circular tudo que está tentando vender alguma coisa.',

  virada: 'Depois da contagem, o facilitador entrega o crachá de detetive com os quatro sinais que denunciam propaganda escondida. Os grupos voltam às mesmas cenas e encontram o dobro. A cena que mais muda é a do amigo: o colega que fala do brinquedo novo ganhou figurinhas para falar, e isso estava desenhado na cena o tempo todo, num detalhe que ninguém tinha olhado.',

  insight: 'Propaganda não aparece só no intervalo da televisão. Ela mora dentro do jogo, do vídeo, da embalagem e às vezes até na conversa.',

  transferencia: 'Com os quatro sinais na cabeça, dá para perguntar diante de qualquer coisa: isso aqui quer que eu compre alguma coisa?',

  roteiro: [
    { t: '0 a 5 min',   o: 'Contar o dia da Lila e entregar as seis cenas por grupo. Combinar que vale circular com lápis vermelho.' },
    { t: '5 a 16 min',  o: 'Primeira investigação, sem nenhuma dica. Cada grupo conta quantas propagandas achou e anota no quadro.' },
    { t: '16 a 22 min', o: 'A virada. Entregar o crachá de detetive com os quatro sinais. Os grupos voltam às cenas.' },
    { t: '22 a 28 min', o: 'Segunda contagem. Escrever os dois números lado a lado no quadro, por grupo.' },
    { t: '28 a 33 min', o: 'Discutir a cena do amigo. O amigo mentiu? Ele sabia que estava fazendo propaganda?' },
    { t: '33 a 35 min', o: 'Cada criança leva o crachá de detetive para casa.' }
  ],

  versoes: {
    escola: 'Grupos de quatro, um conjunto de cenas por grupo. Encaixa em Artes, na leitura de imagem, e a comparação dos dois números no quadro é o momento da aula. É a versão de 6 a 8 anos do que "O anúncio fantasiado" faz na Educação Infantil.',
    familia: 'Investigar duas cenas na mesa e depois fazer o mesmo com uma embalagem de verdade da despensa. Contar quantas coisas na embalagem estão ali para convencer, e quantas para informar.',
    jovem: 'A partir de 11 anos, o desafio é desenhar uma sétima cena com uma propaganda escondida que engane a própria turma.'
  },

  kit: [
    { nome: 'Seis cenas do dia da Lila', tipo: 'imprimivel', desc: 'Cenas ilustradas com pistas plantadas.' },
    { nome: 'Crachá de detetive', tipo: 'imprimivel', desc: 'Os quatro sinais. A virada, e leva para casa.' },
    { nome: 'Folha de contagem', tipo: 'imprimivel', desc: 'Antes e depois do crachá.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Todas as pistas, cena por cena.' }
  ],

  imprimiveis: [
    {
      titulo: 'Seis cenas do dia da Lila',
      tipo: 'cartas',
      nota: 'Cada cena em uma folha, ilustrada, com as pistas visíveis mas não destacadas.',
      itens: [
        'CENA 1, O CAFÉ. A mesa do café. Na caixa de cereal tem um personagem de desenho animado, um selo dizendo "escolha dos campeões", um brinde dentro e um código para o jogo do site. Na garrafa de suco, um desenho de fruta e a frase "com sabor natural".',
        'CENA 2, O JOGO. A tela do tablet, desenhada. A Lila joga. No canto, um banner pequeno. No meio da tela, um botão brilhante escrito "ganhe 3 vidas grátis!" e embaixo, miudinho, "assistindo a um vídeo". O personagem do jogo usa uma camiseta com a marca do cereal da cena 1.',
        'CENA 3, O VÍDEO. Uma pessoa animada segurando um brinquedo, dentro de um vídeo. No canto da tela, escrito bem pequenininho: "recebi este produto". Ela diz: "gente, esse é o melhor brinquedo do mundo!" No fundo do quarto dela, uma prateleira cheia de caixas iguais.',
        'CENA 4, O CAMINHO DA ESCOLA. A rua. Um outdoor, o adesivo de uma marca na porta da padaria, um carro com envelopamento, uma pessoa entregando panfleto, e a fachada da loja de brinquedos com um boneco gigante na porta.',
        'CENA 5, O AMIGO. O pátio da escola. Um colega mostra um brinquedo novo e diz que é incrível. No bolso da mochila dele, aparecendo pela metade, um pacote de figurinhas e um papel escrito "kit para você mostrar aos amigos".',
        'CENA 6, O CADERNO. A mesa da sala de aula. O caderno tem a capa de um personagem. A borracha tem forma de um doce de marca. O estojo tem um logotipo. A régua veio de brinde de uma loja.'
      ]
    },
    {
      titulo: 'Crachá de detetive (a virada, e leva para casa)',
      tipo: 'folha',
      corpo: 'Imprimir em cartão, do tamanho de um crachá, para pendurar ou levar no bolso.\n\nDETETIVE DA PROPAGANDA\nNome: ______________________\n\nOS QUATRO SINAIS:\n\n1. TEM MARCA? Nome, logotipo, personagem de alguma empresa.\n\n2. QUER QUE EU FAÇA ALGUMA COISA? Comprar, clicar, pedir, assistir, contar para um amigo.\n\n3. ALGUÉM GANHOU PARA FALAR BEM? Dinheiro, brinde, figurinha, produto de graça.\n\n4. TEM LETRINHA PEQUENA? Quando tem letra miúda, quase sempre ela conta o que a letra grande escondeu.\n\nA PERGUNTA DE DETETIVE:\nIsso aqui quer que eu compre alguma coisa?'
    },
    {
      titulo: 'Folha de contagem',
      tipo: 'folha',
      corpo: 'Grupo: ______________________\n\n                    ANTES DO CRACHÁ    DEPOIS DO CRACHÁ\nCena 1, o café          ______              ______\nCena 2, o jogo          ______              ______\nCena 3, o vídeo         ______              ______\nCena 4, o caminho       ______              ______\nCena 5, o amigo         ______              ______\nCena 6, o caderno       ______              ______\n\nTOTAL                   ______              ______\n\nQual sinal do crachá foi o mais útil? ______\n\nQual cena mais mudou depois do crachá? ______'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'TODAS AS PISTAS\n\nCENA 1, o café: personagem na caixa, selo de "campeões" que não significa nada, brinde dentro, código para o site (que leva a criança para outra tela da mesma marca), e "sabor natural" na garrafa, que é frase de convencimento e não informação. São 5.\n\nCENA 2, o jogo: banner, botão de recompensa por vídeo, letra miúda escondendo o custo, e a camiseta do personagem com a marca do cereal, que liga as duas cenas. São 4. A camiseta é a pista que quase ninguém acha.\n\nCENA 3, o vídeo: o aviso miudinho de "recebi este produto", a prateleira de caixas iguais ao fundo, e a frase de superlativo. São 3, e a prateleira é a melhor delas: ela mostra que a pessoa recebeu muitos.\n\nCENA 4, o caminho: outdoor, adesivo, carro, panfleto, boneco na fachada. São 5, e é a cena mais fácil.\n\nCENA 5, o amigo: as figurinhas no bolso e o papel do "kit para mostrar aos amigos". São 2, e é a cena que mais muda depois do crachá, porque exige o sinal 3.\n\nCENA 6, o caderno: capa, borracha, estojo, régua de brinde. São 4, e é a cena que costuma passar totalmente batida na primeira rodada, porque ninguém pensa no próprio material escolar como propaganda.\n\nTOTAL: 23 pistas. Grupos costumam achar entre 8 e 12 antes do crachá, e entre 18 e 22 depois.\n\nA CENA DO AMIGO merece o tempo final. As perguntas certas são: o amigo mentiu? Não necessariamente, ele pode gostar mesmo. Ele sabia que estava fazendo propaganda? Provavelmente não. Isso é culpa dele? Não. Nesta idade, o objetivo não é desconfiar dos amigos, é entender que empresas às vezes usam crianças para vender para outras crianças, e que isso não é culpa de nenhuma das duas.\n\nSOBRE A CENA 6: quando a turma percebe que o próprio estojo é propaganda, costuma haver silêncio. Não moralizar. Ninguém precisa jogar fora o caderno. Perceber já é o resultado.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantas vocês acharam antes do crachá? E depois?',
      'A Lila ligou alguma televisão nesse dia?',
      'O amigo da cena 5 mentiu?',
      'Ele sabia que estava fazendo propaganda?',
      'Alguém aqui tem alguma coisa parecida com a cena 6 na mochila?',
      'Qual dos quatro sinais é o mais difícil de perceber?'
    ],
    evitar: [
      'Entregar o crachá antes da primeira contagem. Os dois números lado a lado são a demonstração.',
      'Transformar a cena 5 em desconfiança de amigos. O alvo é a empresa que entrega o kit, não a criança que recebeu.',
      'Moralizar sobre a cena 6. A criança não escolheu o estojo e não precisa se desfazer dele.',
      'Citar marcas reais em qualquer cena.'
    ]
  },

  protecao: 'Todas as marcas, produtos, personagens e a criadora de conteúdo da cena 3 são fictícios. Não citar marcas reais nem canais reais. Não perguntar quais produtos a criança tem, o que a família compra ou quais vídeos ela assiste. Na versão de casa, a análise da embalagem real é feita com um produto da despensa, sem julgamento sobre a escolha da família.',

  evidencia: 'A criança encontra mais pistas na segunda rodada do que na primeira, identifica ao menos uma propaganda em formato não publicitário, e usa um dos quatro sinais para justificar.'
}

);


/* 9 a 10 anos — terceiro lote, fechando a faixa. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 48 */
{
  id: 'bingo-dos-botoes-espertos',
  insightCurto: 'A tela não te enganou porque você é distraído. Ela foi desenhada para funcionar com gente atenta.',
  n: 48,
  titulo: 'Bingo dos botões espertos',
  chamada: 'Cinco telas, uma cartela e cinco truques para achar antes que a outra equipe ache.',
  faixa: '9-10',
  duracao: 35,
  duracaoCurta: 20,
  comoEncurtar: 'Em 20 minutos: use três telas em vez de cinco, ficando com a assinatura, a do luto e a da recompensa aleatória. A rodada final de redesenho pode virar conversa em vez de desenho.',
  formato: 'jogo',
  formatoDetalhe: 'Bingo de interfaces em equipes',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['propaganda', 'consentimento', 'jogo'],
  disciplinas: ['Artes', 'Língua Portuguesa', 'Matemática'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'consumo',
  nivel: 3,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF05CO08', texto: 'Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis.' },
    secundaria: { codigo: 'EF04CO07', texto: 'Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados.' }
  },
  unesco: { dimensao: 'design', competencia: 'Reconhecer padrões de interface que exploram pressa, medo e distração.' },

  provocacao: 'Cada equipe tem uma cartela com dez truques. Eu vou mostrar cinco telas. Quem achar o truque, marca. Quem gritar bingo sem conseguir mostrar onde está, perde a rodada.',

  missao: 'Marcar na cartela os truques encontrados em cada tela, sempre apontando exatamente onde está a pista.',

  virada: 'Depois das cinco telas, o facilitador revela que as equipes marcaram em média seis dos dez truques, e que os quatro que quase ninguém acha são sempre os mesmos. Então mostra a tela 3 de novo, com uma lupa: a assinatura já vinha marcada, o preço estava por mês e não por ano, e o botão de recusa ficava na barra de baixo, cinza sobre cinza. Nenhum dos três é sobre distração. Os três funcionam melhor com quem lê rápido, que é como todo mundo lê.',

  insight: 'Esses truques não pegam quem é desatento. Eles pegam quem está com pressa, que é praticamente todo mundo, praticamente sempre.',

  transferencia: 'Antes de apertar qualquer botão grande, dá para procurar três coisas em cinco segundos: alguma caixinha já marcada, alguma letra pequena com preço, e onde está a opção de não.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Distribuir as cartelas e ler os dez truques em voz alta, sem exemplificar nenhum. Formar as equipes.' },
    { t: '6 a 22 min',  o: 'Cinco rodadas. Projetar ou distribuir uma tela por rodada, com três minutos cada. As equipes marcam e apontam. Validar cada bingo pedindo o local exato.' },
    { t: '22 a 27 min', o: 'Contagem. Escrever no quadro quantos truques cada equipe achou, e quais nunca foram marcados por ninguém.' },
    { t: '27 a 32 min', o: 'A virada. Revisitar a tela 3 com a lupa e mostrar os três truques que escaparam.' },
    { t: '32 a 35 min', o: 'Fechamento com os cinco segundos: cada equipe escreve as três coisas que vai procurar antes de apertar qualquer botão.' }
  ],

  versoes: {
    escola: 'Equipes de quatro. Se houver projetor, projetar as telas rende mais tensão. Sem projetor, imprimir um conjunto por equipe funciona igual. É a continuação de "Inventores de um botão melhor", de 6 a 8 anos, e antecede o escape room de 11 a 14.',
    familia: 'Jogar com três telas na mesa. Depois, com o adulto segurando o aparelho, procurar os mesmos truques em uma tela de verdade de um serviço que a família usa. Não alterar nada, só olhar.',
    jovem: 'A partir de 11 anos, o desafio extra é criar uma sexta tela que contenha três truques e trocar com outra equipe.'
  },

  kit: [
    { nome: 'Cartela de bingo', tipo: 'imprimivel', desc: 'Os dez truques, uma por equipe.' },
    { nome: 'Cinco telas', tipo: 'imprimivel', desc: 'Para projetar ou imprimir.' },
    { nome: 'Folha dos cinco segundos', tipo: 'imprimivel', desc: 'O produto que sai da aula.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Onde está cada truque em cada tela.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cartela de bingo',
      tipo: 'folha',
      corpo: 'Marque quando encontrar, e anote em qual tela.\n\n( ) 1. CONTAGEM REGRESSIVA que não é de verdade.        Tela ___\n( ) 2. CAIXINHA JÁ MARCADA sem você marcar.             Tela ___\n( ) 3. CULPA no texto do botão de recusar.              Tela ___\n( ) 4. OPÇÃO ESCONDIDA, em letra pequena ou cinza.      Tela ___\n( ) 5. RECOMPENSA ALEATÓRIA, você não sabe o que vem.   Tela ___\n( ) 6. PREÇO POR MÊS quando parece o preço total.       Tela ___\n( ) 7. CANCELAR DIFÍCIL, com muitos passos.             Tela ___\n( ) 8. NÚMERO SEM FONTE, tipo "97% recomendam".         Tela ___\n( ) 9. URGÊNCIA FALSA, "só hoje" que se repete sempre.  Tela ___\n( ) 10. TESTE GRÁTIS que já pede cartão e vira cobrança. Tela ___\n\nRegra: para valer, a equipe precisa APONTAR onde está.'
    },
    {
      titulo: 'Cinco telas',
      tipo: 'cartas',
      nota: 'Cada tela em uma folha, dentro de moldura de celular. Descrever fielmente os elementos e os tamanhos.',
      itens: [
        'TELA 1, o aplicativo de fotos. Título: "Deixe suas fotos incríveis!" Um relógio piscando: "OFERTA ACABA EM 04:59". Botão gigante laranja: "QUERO AGORA". Abaixo, cinza sobre cinza, quase invisível: "continuar sem melhorias". Um selo: "97% dos usuários recomendam". Nenhuma fonte para o número.',
        'TELA 2, o jogo. "Abra o Baú Misterioso!" Uma imagem de baú brilhando. Texto: "pode vir um item lendário!" Em letra miúda no rodapé: "chance de item lendário: 0,4%". Botão: "ABRIR POR 80 MOEDAS". Ao lado, "comprar moedas".',
        'TELA 3, a assinatura. "Experimente 7 dias grátis!" Em destaque: "R$ 9,90". Em letra bem menor, ao lado: "/mês, cobrado anualmente: R$ 118,80". Uma caixinha já marcada: "[x] renovar automaticamente". Campo de cartão de crédito pedido já no cadastro. No rodapé, em cinza claro: "assinar depois".',
        'TELA 4, a newsletter. "Não perca nossas novidades!" Botão grande: "SIM, QUERO RECEBER". Botão pequeno, texto do botão: "não, prefiro ficar por fora das oportunidades". Um contador: "faltam 3 vagas na lista VIP".',
        'TELA 5, o cancelamento. Título: "Que pena que você vai embora..." Uma imagem de carinha triste. Texto: "você vai perder todo o seu progresso". Botões, nesta ordem: "CONTINUAR ASSINANDO" (grande, verde), "quero 50% de desconto" (médio), "ainda quero cancelar" (pequeno, cinza). Abaixo, em cinza claro: "o cancelamento leva até 5 dias úteis e passa por 4 telas".'
      ]
    },
    {
      titulo: 'Folha dos cinco segundos',
      tipo: 'folha',
      corpo: 'ANTES DE APERTAR QUALQUER BOTÃO GRANDE, EU PROCURO:\n\n1. ____________________________________\n2. ____________________________________\n3. ____________________________________\n\nA equipe sugere começar por estas três:\n. tem alguma caixinha já marcada?\n. tem letra pequena com preço, prazo ou porcentagem?\n. onde está o botão de dizer não?\n\nO truque que a nossa equipe mais demorou a achar foi ______________________.\n\nPor que ele é difícil de achar?\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'ONDE ESTÁ CADA TRUQUE\n\nTELA 1: contagem regressiva falsa (1), opção escondida em cinza (4), número sem fonte (8), urgência falsa (9).\nTELA 2: recompensa aleatória (5), com a chance real escondida em letra miúda, que também vale como opção escondida (4).\nTELA 3: caixinha já marcada (2), preço por mês parecendo total (6), teste grátis que pede cartão (10), opção escondida em cinza (4).\nTELA 4: culpa no botão de recusa (3), urgência falsa com vagas limitadas (9), número sem fonte se a equipe contar as "3 vagas" (8).\nTELA 5: cancelar difícil (7), culpa (3), e a informação dos 5 dias e 4 telas em cinza claro (4).\n\nOS QUATRO QUE QUASE NINGUÉM ACHA\nsão o 2 (caixinha já marcada), o 6 (preço por mês), o 8 (número sem fonte) e o 10 (teste grátis com cartão). Todos os quatro dependem de LER, e não de olhar. Esse é o achado do fechamento: os truques que sobrevivem não exploram distração visual, exploram leitura rápida.\n\nA TELA 3 é a mais rica e por isso volta na virada. Ela combina três dos quatro difíceis em um espaço pequeno.\n\nA REGRA DE APONTAR ONDE ESTÁ é o que separa esta atividade de um jogo de adivinhação. Sem ela, equipes marcam tudo e ganham por sorte. Com ela, a equipe precisa localizar, que é a competência real.\n\nSOBRE O TOM\nO fechamento não pode ser "preste mais atenção". Ele precisa ser o oposto: atenção não resolve, procedimento resolve. Por isso a folha dos cinco segundos lista o que PROCURAR, e não o que evitar.\n\nSe uma equipe reclamar que é impossível achar tudo, concordar em voz alta. É impossível mesmo, e é exatamente esse o ponto.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quais truques ninguém achou? O que eles têm em comum?',
      'Esses truques pegam gente distraída ou gente com pressa?',
      'Na tela 3, o preço era R$ 9,90 ou R$ 118,80?',
      'A tela 5 permite cancelar? Quanto trabalho dá?',
      'Se atenção não resolve, o que resolve?'
    ],
    evitar: [
      'Terminar com "preste mais atenção". É falso e culpa o usuário por um problema de projeto.',
      'Aceitar bingo sem a equipe apontar o local exato.',
      'Citar produtos ou marcas reais nas telas.',
      'Abrir serviços reais e mexer em assinaturas durante a atividade.'
    ]
  },

  protecao: 'As cinco telas e todos os serviços são fictícios. Nenhum aplicativo real é aberto, nenhuma assinatura é criada, alterada ou cancelada durante a atividade. Não pedir que estudantes contem quais serviços a família assina nem quanto gasta. Na versão de casa, quem opera o aparelho é o adulto e nada é alterado.',

  evidencia: 'A equipe localiza pelo menos um dos quatro truques de leitura, aponta a posição exata na tela, e formula três verificações concretas para a folha dos cinco segundos.'
},

/* ==================================================================== 49 */
{
  id: 'cidade-dos-sensores',
  insightCurto: 'A mesma câmera que resolve um problema cria outro. A pergunta não é se instala, é para quem.',
  n: 49,
  titulo: 'A cidade dos sensores',
  chamada: 'Cada grupo governa um bairro e escolhe onde instalar câmeras e sensores. Depois vêm os problemas.',
  faixa: '9-10',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use quatro tipos de sensor em vez de sete e entregue apenas três das seis cartas de consequência. A folha de decisão final é obrigatória.',
  formato: 'simulacao',
  formatoDetalhe: 'Construção de cidade em mapa',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['dados', 'algoritmo'],
  disciplinas: ['Geografia', 'Matemática', 'História', 'Projeto de Vida'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'privacidade',
  nivel: 4,
  sensibilidade: 'media',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF04CO07', texto: 'Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados.' },
    secundaria: { codigo: 'EF05CO06', texto: 'Reconhecer que os dados podem ser armazenados em um dispositivo local ou remoto.' }
  },
  unesco: { dimensao: 'design', competencia: 'Avaliar trade-offs entre benefício público e risco de vigilância em infraestrutura urbana.' },

  provocacao: 'Vocês são a prefeitura de Vila Aurora. A cidade tem cinco problemas de verdade e um orçamento para vinte sensores. Escolham onde instalar.',

  missao: 'Distribuir vinte sensores no mapa do bairro para resolver os cinco problemas, e depois responder pelas consequências.',

  virada: 'Com os mapas montados, o facilitador entrega as seis cartas de consequência, uma por vez. A câmera que reduziu o roubo na praça também registra quem frequenta o posto de saúde. O sensor de trânsito que desafogou a avenida também sabe quem sai de casa às cinco da manhã, e o dado foi vendido. O leitor de placas errou e um morador foi parado três vezes. Nenhum grupo tinha pensado nisso, porque nenhum problema da lista pedia isso.',

  insight: 'Uma tecnologia instalada para resolver um problema não para de funcionar depois que ele é resolvido. Ela continua coletando, e alguém decide o que fazer com o resto.',

  transferencia: 'Diante de qualquer proposta de instalar tecnologia num lugar público, vale perguntar: quem tem acesso, por quanto tempo guarda, e o que acontece quando ela erra com alguém.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Apresentar o mapa de Vila Aurora, os cinco problemas e os sete tipos de sensor com o custo de cada um. Formar as prefeituras.' },
    { t: '8 a 24 min',  o: 'Cada grupo distribui os vinte sensores no mapa e escreve qual problema cada instalação resolve. Exigir a justificativa.' },
    { t: '24 a 30 min', o: 'Apresentação rápida dos mapas. Comparar onde todos concordaram e onde divergiram.' },
    { t: '30 a 40 min', o: 'A virada. Entregar as seis cartas de consequência, uma por vez, com pausa. Os grupos anotam quais atingem o mapa deles.' },
    { t: '40 a 47 min', o: 'Reforma. Cada grupo pode remover, mover ou acrescentar regras aos sensores que sobraram.' },
    { t: '47 a 50 min', o: 'Folha de decisão: quem guarda os dados, por quanto tempo, quem pode ver, e como um morador reclama.' }
  ],

  versoes: {
    escola: 'Grupos de quatro a cinco, um mapa por grupo. Integra Geografia de forma direta, com leitura de mapa e uso do solo, e Matemática no orçamento. A discussão final sobre quem guarda os dados é o que separa a atividade de uma brincadeira de maquete.',
    familia: 'Versão curta: caminhar pela rua de casa e contar quantas câmeras dá para ver. Depois discutir de quem elas são e quem tem acesso. Não fotografar câmeras nem propriedades alheias.',
    jovem: 'A partir de 11 anos, acrescentar o orçamento de manutenção: os sensores custam por ano, não só na instalação. E a pergunta de quem paga quando o dinheiro acabar.'
  },

  kit: [
    { nome: 'Mapa de Vila Aurora', tipo: 'imprimivel', desc: 'Bairro com ruas, praça, escola, posto, comércio e casas.' },
    { nome: 'Os cinco problemas', tipo: 'imprimivel', desc: 'O que a prefeitura precisa resolver.' },
    { nome: 'Sete tipos de sensor', tipo: 'imprimivel', desc: 'Com custo e o que cada um coleta.' },
    { nome: 'Seis cartas de consequência', tipo: 'imprimivel', desc: 'A virada.' },
    { nome: 'Folha de decisão', tipo: 'editavel', desc: 'Governança dos dados coletados.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'As armadilhas de cada escolha.' }
  ],

  imprimiveis: [
    {
      titulo: 'Mapa de Vila Aurora',
      tipo: 'folha',
      corpo: 'Mapa em página inteira, vista de cima, com:\n\n. a Praça Central, com quadra e playground\n. a Escola Municipal, na Rua das Palmeiras\n. o Posto de Saúde, na esquina da Avenida Norte\n. a Avenida Norte, movimentada, com semáforo\n. a Rua do Comércio, com padaria, farmácia e mercado\n. três ruas residenciais: Rua A, Rua B e Rua C\n. o Terminal de Ônibus, na ponta sul\n. um terreno baldio atrás da escola\n\nCada local tem espaço para colar adesivos de sensor.'
    },
    {
      titulo: 'Os cinco problemas de Vila Aurora',
      tipo: 'folha',
      corpo: '1. Roubos de bicicleta na praça, principalmente à noite.\n2. Trânsito parado na Avenida Norte no horário de saída da escola.\n3. Lixo sendo descartado irregularmente no terreno baldio.\n4. Alagamento na Rua do Comércio quando chove forte.\n5. Ônibus atrasando no Terminal, e ninguém sabe quando o próximo vem.\n\nORÇAMENTO: 20 sensores no total.'
    },
    {
      titulo: 'Sete tipos de sensor',
      tipo: 'cartas',
      itens: [
        'CÂMERA COMUM (custo 2). Grava imagem do que passa. Guarda 30 dias.',
        'CÂMERA COM LEITOR DE PLACAS (custo 3). Grava imagem e registra a placa de cada carro, com hora e local.',
        'SENSOR DE TRÂNSITO (custo 1). Conta quantos carros passam e a que velocidade. Não identifica ninguém.',
        'SENSOR DE CHUVA E NÍVEL DE ÁGUA (custo 1). Mede quanta água tem na rua. Não vê pessoas.',
        'CONTADOR DE PESSOAS (custo 1). Conta quantas pessoas passam. Não grava imagem.',
        'RASTREADOR DE ÔNIBUS (custo 2). Diz onde cada ônibus está. Só rastreia o veículo.',
        'SENSOR DE LIXEIRA (custo 1). Avisa quando a lixeira está cheia. Não vê quem jogou.'
      ]
    },
    {
      titulo: 'Seis cartas de consequência (a virada)',
      tipo: 'cartas',
      nota: 'Entregar uma por vez, com pausa depois de cada uma.',
      itens: [
        'CONSEQUÊNCIA 1: as câmeras da praça reduziram o roubo de bicicletas em 60%. Funcionou. E elas também gravam a entrada do Posto de Saúde, que fica na esquina. Qualquer pessoa com acesso às imagens sabe quem foi ao posto e quando.',
        'CONSEQUÊNCIA 2: o sensor de trânsito da Avenida Norte resolveu o congestionamento. A empresa que instalou vendeu os dados de fluxo para uma rede de lojas, que descobriu os melhores horários e a rotina do bairro. Isso estava no contrato, em uma cláusula que ninguém leu.',
        'CONSEQUÊNCIA 3: o leitor de placas identificou errado a placa de um morador três vezes em dois meses. Ele foi abordado nas três. Ele não tem com quem reclamar, porque ninguém sabe dizer quem opera o sistema.',
        'CONSEQUÊNCIA 4: as câmeras do terreno baldio pegaram quem descartava lixo. Também pegaram, todos os dias, o caminho que as crianças fazem da escola para casa. As imagens ficam guardadas 30 dias, num servidor de uma empresa de outro estado.',
        'CONSEQUÊNCIA 5: um vereador pediu acesso às imagens da praça para "acompanhar a segurança". Não existe regra dizendo quem pode pedir, nem quem autoriza. Ele recebeu.',
        'CONSEQUÊNCIA 6: os sensores de chuva funcionaram perfeitamente e ninguém reclamou de nada. Ninguém foi identificado, nada foi vendido, nenhum dado pessoal foi coletado. O alagamento diminuiu.'
      ]
    },
    {
      titulo: 'Folha de decisão',
      tipo: 'editavel',
      corpo: 'PREFEITURA DE ____________________\n\nDepois das consequências, o nosso mapa mudou assim:\nRemovemos: ____________________\nMovemos: ____________________\nMantivemos, mas com regra nova: ____________________\n\nGOVERNANÇA, para cada sensor que ficou:\nQuem guarda os dados: ____________________\nPor quanto tempo: ____________________\nQuem pode pedir acesso: ____________________\nQuem autoriza o pedido: ____________________\nO que acontece quando o sensor erra com uma pessoa:\n____________________________________\n\nCOMO UM MORADOR RECLAMA:\nCom quem fala: ____________________\nEm quanto tempo recebe resposta: ____________________\n\nO SENSOR MAIS ÚTIL E MENOS INVASIVO do nosso mapa foi ____________________\nporque ____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O DESENHO DA ATIVIDADE\nDos cinco problemas, três podem ser resolvidos sem identificar ninguém: o trânsito (sensor de trânsito), o alagamento (sensor de chuva) e o ônibus (rastreador de veículo). O do lixo pode ser resolvido com sensor de lixeira mais coleta mais frequente, sem câmera. Apenas o roubo de bicicleta parece pedir câmera, e mesmo assim há alternativas: iluminação, bicicletário trancado, presença de gente.\n\nQuase todo grupo, na primeira rodada, instala câmeras em tudo. É o reflexo esperado e é por isso que a atividade existe.\n\nA CONSEQUÊNCIA 6 É A MAIS IMPORTANTE e costuma ser lida como anticlímax. Não é. Ela mostra que existe tecnologia que resolve problema sem coletar dado pessoal nenhum, e que a escolha do TIPO de sensor importa mais do que a quantidade. Se a turma passar batido, voltar nela no fim.\n\nA CONSEQUÊNCIA 3 introduz a ideia de erro sem responsável, que é a semente do que volta em "Júri do algoritmo de contratação", no Ensino Médio.\n\nA CONSEQUÊNCIA 5 introduz governança: o problema não foi a câmera, foi não existir regra sobre quem pode pedir.\n\nO QUE OBSERVAR NA REFORMA\nGrupos que apenas removem câmeras resolveram metade. Grupos que trocam o TIPO de sensor, mantendo a solução do problema sem a coleta pessoal, chegaram onde a atividade queria. Se ninguém fizer essa troca, mostrar a alternativa para o problema 3, do lixo, e deixar a turma refazer.\n\nA DISCUSSÃO SOBRE A PRAÇA E O POSTO DE SAÚDE exige cuidado. Não é sobre esconder nada. É sobre uma câmera instalada para bicicleta acabar produzindo uma informação de saúde, que é o tipo de dado mais sensível que existe. Vale nomear isso.'
    }
  ],

  mediacao: {
    perguntas: [
      'Qual dos cinco problemas realmente precisava de câmera?',
      'A câmera da praça foi instalada para bicicleta. Que informação ela acabou produzindo?',
      'Na consequência 2, alguém quebrou alguma regra?',
      'Na consequência 3, com quem o morador reclama?',
      'A consequência 6 parece sem graça. Por que ela é a melhor notícia da lista?',
      'Dá para resolver o mesmo problema coletando menos?'
    ],
    evitar: [
      'Concluir que sensor é sempre ruim. A consequência 6 existe justamente para impedir isso, e três dos cinco problemas se resolvem bem com tecnologia que não identifica ninguém.',
      'Entregar as consequências antes dos mapas prontos. O investimento no próprio mapa é o que faz a virada doer na medida certa.',
      'Deixar a reforma virar só remoção. A troca de tipo de sensor é o aprendizado.',
      'Usar o bairro real da escola no mapa, com ruas e comércios reais.'
    ]
  },

  protecao: 'Vila Aurora é fictícia e não corresponde ao bairro da escola. Não usar o mapa real do entorno, nomes de ruas reais nem estabelecimentos existentes, para que a discussão não vire juízo sobre vizinhos ou comerciantes conhecidos. Na versão de casa, não fotografar câmeras, casas ou estabelecimentos de terceiros.',

  evidencia: 'O grupo substitui pelo menos um sensor identificador por um não identificador mantendo a solução do problema, e preenche a governança com responsável, prazo de guarda e caminho de reclamação.'
},

/* ==================================================================== 50 */
{
  id: 'conselho-do-grupo',
  insightCurto: 'Estar no grupo não é autorização. E quem só encaminhou também decidiu alguma coisa.',
  n: 50,
  titulo: 'Conselho do grupo',
  chamada: 'O grupo quer postar uma foto engraçada de um colega. Cada estudante representa alguém afetado.',
  faixa: '9-10',
  duracao: 40,
  duracaoCurta: 25,
  comoEncurtar: 'Em 25 minutos: use cinco papéis em vez de oito, mantendo obrigatoriamente o da pessoa da foto, o de quem encaminhou e o de quem só viu. A rodada de reparação no fim é o produto e não sai.',
  formato: 'simulacao',
  formatoDetalhe: 'Conselho com papéis distribuídos',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['foto', 'consentimento'],
  disciplinas: ['Língua Portuguesa', 'Ensino Religioso', 'Projeto de Vida'],
  preparo: 'baixo',
  grupo: 'turma',
  eixo: 'consentimento',
  nivel: 4,
  sensibilidade: 'alta',
  selos: ['sem-tela', 'sensivel'],

  bncc: {
    principal: { codigo: 'EF05CO09', texto: 'Usar informações considerando aplicações e limites dos direitos autorais em diferentes mídias digitais.' },
    secundaria: { codigo: 'EF04CO07', texto: 'Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Analisar responsabilidade distribuída na circulação de conteúdo sobre terceiros.' },

  provocacao: 'No grupo do quinto ano tem uma foto do Dado escorregando na educação física. Todo mundo achou engraçada. Alguém propôs postar num perfil da turma. O conselho vai decidir.',

  missao: 'Cada participante recebe um papel e precisa defender o ponto de vista de quem está representando, mesmo que discorde.',

  virada: 'Quando o conselho decide, o facilitador lê o papel que ninguém tinha: o do Dado. Ele achou graça no dia. Ele riu junto. E mesmo assim não quer que a foto saia do grupo, e não consegue explicar bem por quê. O conselho descobre que "ele riu também" não é o mesmo que "ele autorizou", e que a pessoa não precisa justificar o desconforto para que ele valha.',

  insight: 'Estar no grupo não é autorização para sair dele. E a pessoa não precisa explicar direito por que não quer, para poder não querer.',

  transferencia: 'Antes de encaminhar qualquer coisa sobre uma pessoa, dá para perguntar a ela. E se alguém pedir para tirar, tira, mesmo sem entender o motivo.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Contar o caso. Combinar as regras do conselho: cada um fala pelo papel que recebeu, ninguém fala de si, e ninguém cita caso real.' },
    { t: '6 a 12 min',  o: 'Distribuir os oito papéis e dar tempo de leitura individual. Quem recebeu o mesmo papel senta junto e combina o argumento.' },
    { t: '12 a 26 min', o: 'Sessão do conselho. Cada papel tem dois minutos. Depois, rodada livre de réplica.' },
    { t: '26 a 30 min', o: 'Votação e decisão. Registrar no quadro.' },
    { t: '30 a 35 min', o: 'A virada. Ler o papel do Dado. Reabrir a votação.' },
    { t: '35 a 40 min', o: 'Rodada de reparação: se a foto já tivesse circulado, o que cada papel faria a partir de agora? Preencher a folha.' }
  ],

  versoes: {
    escola: 'Turma inteira. Exige mediação cuidadosa e combinação prévia com a orientação educacional, porque o tema é frequente e pode haver caso real em curso. Encadeia com "A foto viajante", da Educação Infantil, e antecede "A conversa saiu do grupo", de 11 a 14.',
    familia: 'Ler o caso e distribuir três papéis entre as pessoas da casa. A parte mais útil é o adulto assumir o papel de quem só encaminhou, porque é o papel que os adultos mais ocupam na vida real.',
    jovem: 'Individual: escrever o que você faria em cada um dos oito papéis, e depois marcar em quais deles você já esteve. Não é para entregar a ninguém.'
  },

  kit: [
    { nome: 'O caso', tipo: 'imprimivel', desc: 'A situação, sem juízo prévio.' },
    { nome: 'Oito papéis', tipo: 'imprimivel', desc: 'Um por participante ou por dupla.' },
    { nome: 'O papel do Dado', tipo: 'imprimivel', desc: 'A virada. Ninguém recebe no começo.' },
    { nome: 'Folha de reparação', tipo: 'editavel', desc: 'O que cada um faz a partir de agora.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Protocolo de mediação, obrigatório.' }
  ],

  imprimiveis: [
    {
      titulo: 'O caso',
      tipo: 'folha',
      corpo: 'No grupo de mensagens do 5º ano, alguém mandou uma foto do Dado escorregando e caindo sentado na aula de educação física. A cara dele na foto é muito engraçada.\n\nTodo mundo riu, inclusive o Dado, que mandou três emojis de risada no dia.\n\nDuas semanas depois, a Bel propôs postar a foto no perfil da turma, que é público e tem 340 seguidores, entre alunos, ex-alunos e famílias.\n\nAlguém disse: "mas ele riu junto, ele não vai se importar".\n\nO conselho precisa decidir: posta ou não posta?'
    },
    {
      titulo: 'Oito papéis',
      tipo: 'cartas',
      nota: 'Distribuir um por participante ou por dupla. Cada um defende o seu ponto de vista, mesmo discordando dele.',
      itens: [
        'A BEL, que propôs postar. Você acha engraçado, acha que a turma vai gostar, e não vê problema porque ele já viu a foto e riu.',
        'QUEM TIROU A FOTO. Você tirou sem pensar, na hora, como todo mundo faz. Você não postou nada, só mandou no grupo.',
        'QUEM ENCAMINHOU PARA OUTRO GRUPO. Você achou engraçada e mandou para o grupo do futebol. Você não criou nada, só passou adiante.',
        'QUEM SÓ VIU E NÃO FEZ NADA. Você achou meio chato mas não falou nada, porque todo mundo estava rindo.',
        'QUEM ADMINISTRA O PERFIL DA TURMA. Você é responsável pelo que sai ali. Se der problema, sobra para você.',
        'A PROFESSORA. Você não estava no grupo e ficou sabendo agora. Você precisa decidir se isso é assunto da escola.',
        'UM RESPONSÁVEL DE OUTRO ALUNO. Você viu a foto porque segue o perfil da turma. Você está pensando no seu filho na mesma situação.',
        'ALGUÉM DE FORA que segue o perfil. Você não conhece o Dado. Para você é só uma foto engraçada de um menino qualquer.'
      ]
    },
    {
      titulo: 'O papel do Dado (a virada)',
      tipo: 'folha',
      corpo: 'Ler em voz alta só depois da primeira votação.\n\n"Eu sou o Dado.\n\nEu ri no dia, sim. Mandei os emojis. Naquela hora foi engraçado mesmo, a gente estava todo mundo junto e eu ri junto.\n\nMas eu não quero essa foto no perfil. Eu não sei explicar direito. Não é que eu ache que alguém foi maldoso. É que no grupo é uma coisa e lá fora é outra.\n\nMinha prima estuda em outra escola e segue o perfil. Meu tio segue. Gente que eu não conheço segue.\n\nEu já pedi para tirar do grupo do futebol e a pessoa falou que eu estava exagerando.\n\nEu não sei explicar melhor do que isso. Eu só não quero."'
    },
    {
      titulo: 'Folha de reparação',
      tipo: 'editavel',
      corpo: 'A DECISÃO DO CONSELHO: ( ) postar ( ) não postar ( ) outra: ____________\n\nAgora imaginem que a foto JÁ circulou. O que cada um faz a partir de agora?\n\nA BEL: ____________________________________\nQUEM TIROU A FOTO: ____________________________________\nQUEM ENCAMINHOU: ____________________________________\nQUEM SÓ VIU: ____________________________________\nQUEM ADMINISTRA O PERFIL: ____________________________________\nA PROFESSORA: ____________________________________\n\nO Dado disse que não sabe explicar direito por que não quer.\nIsso enfraquece o pedido dele? ( ) sim ( ) não\nPor quê? ____________________________________\n\nA NOSSA REGRA, para a turma inteira:\nAntes de postar uma foto de alguém, a gente ____________________.\nQuando alguém pede para tirar, a gente ____________________.'
    },
    {
      titulo: 'Gabarito comentado e protocolo de mediação',
      tipo: 'gabarito',
      corpo: 'PROTOCOLO DE MEDIAÇÃO, obrigatório antes de aplicar\n\nEste é o tema mais provável de existir de verdade na turma neste exato momento. Por isso:\n\n. Combinar em voz alta, no início: ninguém fala de si, ninguém cita caso real, ninguém aponta colega.\n. Se um caso real for mencionado, interromper com gentileza e trazer de volta para o Dado.\n. Não aplicar esta atividade durante um conflito em curso na turma. Se houver, tratar o conflito pelo canal próprio primeiro, e aplicar semanas depois.\n. Combinar previamente com a orientação educacional e ter encaminhamento definido caso alguém procure um adulto depois.\n. Não escolher para o papel do Dado nenhum estudante que já tenha passado por situação parecida.\n\nO QUE A VIRADA ENSINA\n\nO argumento "ele riu junto" é o coração do caso, e é o argumento que a turma mais usa na vida real. A resposta não é que ele mentiu ao rir. Ele riu de verdade. O que mudou foi o público.\n\nA frase mais importante do papel do Dado é "eu não sei explicar melhor do que isso". Turmas de 9 e 10 anos costumam achar que um pedido precisa de justificativa boa para valer. A pergunta da folha existe para isso, e a resposta que a turma precisa construir é que não precisa.\n\nO PAPEL DE QUEM SÓ ENCAMINHOU é o mais formativo dos oito, e é o papel que quase todo mundo já ocupou. Ele não tirou a foto, não propôs postar, não administra nada. E mesmo assim a foto chegou a um grupo novo por causa dele. Se ninguém levantar isso, o facilitador levanta.\n\nO PAPEL DE QUEM SÓ VIU costuma ser tratado como neutro. Vale perguntar: existe alguma coisa que essa pessoa poderia ter feito? A resposta não é culpar quem ficou quieto, é notar que existia uma opção.\n\nA RODADA DE REPARAÇÃO é o que diferencia esta atividade de um debate. Sem ela, a turma sai sabendo julgar e sem saber consertar.'
    }
  ],

  mediacao: {
    perguntas: [
      'Ele riu junto. Isso é a mesma coisa que ele ter autorizado?',
      'O que mudou entre o grupo e o perfil público?',
      'O Dado não consegue explicar direito. O pedido dele vale menos por isso?',
      'Quem só encaminhou fez alguma coisa?',
      'Quem só viu e ficou quieto tinha alguma opção?',
      'Se a foto já tivesse saído, o que dá para consertar?'
    ],
    evitar: [
      'Aplicar durante um conflito real em curso na turma.',
      'Deixar alguém citar um caso real ou apontar um colega. Interromper com gentileza e voltar ao Dado.',
      'Ler o papel do Dado antes da primeira votação.',
      'Fechar com culpa individual. A responsabilidade é distribuída, e é isso que a rodada de reparação mostra.',
      'Escalar a pergunta "isso já aconteceu com alguém aqui?". Nunca.'
    ]
  },

  protecao: 'Tema sensível. O caso e todos os personagens são fictícios. Nenhuma foto real é usada, mostrada ou descrita. Ninguém fala em nome próprio: cada participante fala pelo papel recebido. Não perguntar se algo parecido já aconteceu com alguém da turma. Não aplicar durante conflito em curso. Combinar previamente com a orientação educacional e ter encaminhamento definido caso um estudante procure um adulto depois da aula. Se houver relato espontâneo de exposição real, encerrar a exposição coletiva na hora e acolher em particular.',

  evidencia: 'O conselho sustenta que a autorização depende do público e não do riso, reconhece a responsabilidade de quem apenas encaminhou, e produz ao menos uma ação de reparação por papel.'
}

);


/* 11 a 14 anos — terceiro lote, fechando a faixa. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 51 */
{
  id: 'conversa-saiu-do-grupo',
  insightCurto: 'Sete pessoas decidiram alguma coisa. Nenhuma se acha responsável, e o dano é de uma só.',
  n: 51,
  titulo: 'A conversa saiu do grupo',
  chamada: 'Uma conversa privada vira print, vira meme, vira post. Quem decidiu o quê, em qual momento?',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: monte a linha do tempo com cinco momentos em vez de nove e vá direto à matriz de responsabilidade. A rodada de reparação é o produto e não pode sair.',
  formato: 'investigacao',
  formatoDetalhe: 'Estudo de caso com linha do tempo',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['foto', 'consentimento'],
  disciplinas: ['Língua Portuguesa', 'Projeto de Vida', 'História'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'consentimento',
  nivel: 4,
  sensibilidade: 'alta',
  selos: ['pronta-amanha', 'sem-tela', 'sensivel'],

  bncc: {
    principal: { codigo: 'EF08CO07', texto: 'Compartilhar informações por meio de redes sociais, compreendendo a sua dinâmica de funcionamento, de forma responsável e avaliando sua confiabilidade, considerando o respeito e a ética.' },
    secundaria: { codigo: 'EF09CO09', texto: 'Criar ou utilizar conteúdo em meio digital, compreendendo questões éticas relacionadas a direitos autorais e de uso de imagem.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Mapear responsabilidade distribuída em cadeias de circulação e identificar pontos de reparação possíveis.' },

  provocacao: 'Uma conversa de dois amigos, num grupo de quatro pessoas, virou um meme que 900 pessoas viram. Isso levou onze dias e passou por sete pessoas. Nenhuma delas se considera responsável.',

  missao: 'Reconstruir a linha do tempo dos nove momentos, identificar quem decidiu o quê em cada um, e apontar em quais momentos ainda seria possível reparar.',

  virada: 'Com a linha do tempo montada, o facilitador entrega as sete fichas de justificativa. Cada pessoa da cadeia explica por que o que ela fez não foi grave, e todas as sete justificativas são razoáveis. Ninguém agiu por maldade. Os grupos descobrem que a soma de sete decisões razoáveis produziu um dano que nenhuma delas queria, e que essa é justamente a razão pela qual ninguém se sente responsável.',

  insight: 'Responsabilidade digital é distribuída, e isso não a dissolve. Cada pessoa da cadeia teve um momento de decisão real, e em quase todos eles ainda dava para parar.',

  transferencia: 'Antes de passar adiante qualquer coisa sobre alguém, dá para reconhecer o próprio momento de decisão. E, quando algo já circulou, dá para perguntar o que ainda é possível reparar em vez de discutir de quem foi a culpa.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Combinar as regras: caso fictício, ninguém fala de si, ninguém cita caso real. Entregar os nove cartões de momento embaralhados.' },
    { t: '6 a 18 min',  o: 'Em grupos, montar a linha do tempo na ordem correta e marcar, em cada momento, quem tomou uma decisão.' },
    { t: '18 a 26 min', o: 'Preencher a matriz de responsabilidade: o que essa pessoa fez, o que ela poderia ter feito, e o que teria mudado.' },
    { t: '26 a 34 min', o: 'A virada. Entregar as sete fichas de justificativa. Leitura em silêncio. Os grupos revisitam a matriz.' },
    { t: '34 a 44 min', o: 'Rodada de reparação. Em quais dos nove momentos ainda dava para parar? E agora, o que cada um pode fazer?' },
    { t: '44 a 50 min', o: 'Fechamento: a turma escreve o protocolo de três linhas para quando algo já circulou.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Exige mediação cuidadosa, e o tema é frequente. Não aplicar durante conflito em curso. É a continuação direta de "Conselho do grupo", de 9 a 10 anos, com foco em responsabilidade distribuída e reparação.',
    familia: 'Ler a linha do tempo e discutir em qual momento cada pessoa da casa teria parado. O adulto costuma se reconhecer no papel de quem encaminhou sem pensar, e dizer isso em voz alta vale muito.',
    jovem: 'Individual: marcar, na linha do tempo, em qual momento você provavelmente teria entrado, e escrever o que faria diferente. Não é para entregar a ninguém.'
  },

  kit: [
    { nome: 'Nove cartões de momento', tipo: 'imprimivel', desc: 'Embaralhados, para montar a linha do tempo.' },
    { nome: 'Matriz de responsabilidade', tipo: 'imprimivel', desc: 'Decisão, alternativa e efeito.' },
    { nome: 'Sete fichas de justificativa', tipo: 'imprimivel', desc: 'A virada.' },
    { nome: 'Folha de reparação', tipo: 'editavel', desc: 'O que ainda dá para fazer.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Ordem, análise e protocolo de mediação.' }
  ],

  imprimiveis: [
    {
      titulo: 'Nove cartões de momento',
      tipo: 'cartas',
      nota: 'Embaralhar antes de entregar. Cada cartão traz o momento e o dia.',
      itens: [
        'DIA 1: A Rê conta, no grupo de quatro amigas, que está com medo da prova de matemática e que chorou estudando.',
        'DIA 1: A Nina responde no grupo: "amiga, calma, também chorei".',
        'DIA 3: A Duda tira um print só da mensagem da Rê, sem a resposta da Nina, e manda para a Bia, que não está no grupo.',
        'DIA 4: A Bia acha o print fofo e manda para o grupo do vôlei, com 22 pessoas.',
        'DIA 6: Alguém do vôlei transforma o print em meme, com um texto por cima.',
        'DIA 7: O meme chega no grupo da turma, com 34 pessoas.',
        'DIA 8: A Rê vê o meme e pede, no grupo da turma, para pararem. Três pessoas respondem com risada.',
        'DIA 9: Alguém posta o meme em um perfil de humor da escola, com 900 seguidores.',
        'DIA 11: A Rê para de ir para a escola.'
      ]
    },
    {
      titulo: 'Matriz de responsabilidade',
      tipo: 'folha',
      corpo: 'Para cada pessoa da cadeia:\n\nPESSOA: ____________________  DIA: ______\n\nO QUE ELA FEZ: ____________________________________\n\nELA CRIOU ALGUMA COISA? ( ) sim ( ) não, só passou adiante\n\nO QUE ELA PODERIA TER FEITO NO LUGAR:\n____________________________________\n\nSE ELA TIVESSE FEITO ISSO, o que teria mudado daí para frente?\n____________________________________\n\nNESSE MOMENTO, o dano já era irreversível? ( ) sim ( ) não\n\n---\n\nDepois de preencher para todas, respondam:\nEm quantos dos nove momentos ainda dava para parar? ______\nQual foi o último momento em que ainda dava? ______'
    },
    {
      titulo: 'Sete fichas de justificativa (a virada)',
      tipo: 'cartas',
      nota: 'Entregar todas de uma vez, para leitura silenciosa.',
      itens: [
        'A DUDA, que tirou o print: "Eu mandei só para a Bia, que é minha melhor amiga. Eu não postei em lugar nenhum. E eu achei bonitinho, não achei que fosse ofensa."',
        'A BIA: "Eu nem conheço a Rê direito. Chegou para mim, achei fofo, mandei no grupo do vôlei. Se fosse ruim, a Duda não teria mandado."',
        'QUEM FEZ O MEME: "Eu não tirei o print. Eu só coloquei um texto engraçado numa imagem que já estava circulando por aí. A imagem não era minha."',
        'QUEM LEVOU PARA O GRUPO DA TURMA: "Eu só encaminhei. Todo mundo do vôlei já tinha visto. Eu não fiz nada que os outros não tivessem feito."',
        'QUEM RIU QUANDO ELA PEDIU PARA PARAR: "Foi só um emoji. Eu nem prestei atenção no que ela escreveu, estava respondendo rápido."',
        'QUEM POSTOU NO PERFIL: "O perfil é de humor, todo mundo sabe que é brincadeira. E já estava em três grupos, não era mais segredo de ninguém."',
        'QUEM VIU E NÃO FEZ NADA, em qualquer um dos dias: "Eu achei chato, mas eu não fiz nada. Não sou eu que tenho que resolver."'
      ]
    },
    {
      titulo: 'Folha de reparação',
      tipo: 'editavel',
      corpo: 'A conversa já circulou. Discutir de quem é a culpa não devolve nada para a Rê.\n\nO QUE AINDA DÁ PARA FAZER, por pessoa:\n\nA DUDA: ____________________________________\nA BIA: ____________________________________\nQUEM FEZ O MEME: ____________________________________\nQUEM ENCAMINHOU: ____________________________________\nQUEM RIU: ____________________________________\nQUEM POSTOU: ____________________________________\nQUEM VIU E NÃO FEZ NADA: ____________________________________\nA ESCOLA: ____________________________________\n\nO QUE A RÊ PRECISA, na opinião do grupo:\n____________________________________\n\nO QUE NINGUÉM CONSEGUE DESFAZER:\n____________________________________\n\nPROTOCOLO DA TURMA, em três linhas, para quando alguma coisa já circulou:\n1. ____________________________________\n2. ____________________________________\n3. ____________________________________'
    },
    {
      titulo: 'Gabarito comentado e protocolo de mediação',
      tipo: 'gabarito',
      corpo: 'PROTOCOLO DE MEDIAÇÃO, obrigatório\n\n. Combinar no início: caso fictício, ninguém fala de si, ninguém cita colega.\n. Não aplicar durante conflito real em curso. Se houver, tratar pelo canal próprio e aplicar semanas depois.\n. Combinar previamente com a orientação educacional. Ter encaminhamento definido caso alguém procure um adulto.\n. O dia 11, em que a Rê para de ir à escola, é deliberadamente sóbrio e sem detalhes. Não ampliar, não dramatizar e não especular sobre o que aconteceu com ela.\n. Se algum estudante se identificar visivelmente, não expor. Procurar em particular depois.\n\nORDEM CORRETA: dias 1, 1, 3, 4, 6, 7, 8, 9, 11, na sequência em que estão listados.\n\nO ACHADO CENTRAL\nEm oito dos nove momentos ainda dava para parar. O último em que ainda dava é o dia 8, quando ela pede para parar e três pessoas riem. Depois disso o dano já está feito, mas mesmo ali a reparação continua possível.\n\nAS SETE JUSTIFICATIVAS são todas razoáveis, e é isso que as torna difíceis. Nenhuma é cínica. A da Duda é a mais importante porque ela realmente não postou nada e mandou para uma pessoa só. Vale perguntar: e se ela tivesse mandado o print inteiro, com a resposta da Nina? Muda alguma coisa? Muda: o recorte é uma decisão, e conecta com "O print perdeu a história", de 6 a 8 anos.\n\nA JUSTIFICATIVA MAIS DIFÍCIL é a última, de quem viu e não fez nada. Ela é verdadeira: não é obrigação de ninguém resolver. E ao mesmo tempo, oito pessoas pensando isso é o que permite a cadeia continuar. Não transformar em culpa. Transformar em pergunta: existia alguma coisa pequena que essa pessoa poderia ter feito?\n\nA RODADA DE REPARAÇÃO é o que salva a atividade de virar tribunal. As respostas boas são concretas: pedir desculpa em particular e não em público, apagar de onde ainda estiver ao alcance, avisar quem recebeu de você, e parar de rir. A resposta "não fazer mais isso" é insuficiente e deve ser devolvida.\n\nO QUE NINGUÉM DESFAZ: as 900 visualizações. Nomear isso é importante, e é o que dá peso ao protocolo final.'
    }
  ],

  mediacao: {
    perguntas: [
      'Em quantos dos nove momentos ainda dava para parar?',
      'A Duda mandou para uma pessoa só. Isso a coloca fora da cadeia?',
      'Quem fez o meme diz que a imagem não era dele. Isso muda alguma coisa?',
      'A justificativa de quem viu e não fez nada é verdadeira?',
      'Discutir de quem é a culpa devolve o quê para a Rê?',
      'O que ninguém consegue desfazer?'
    ],
    evitar: [
      'Aplicar durante um conflito real em curso na turma.',
      'Permitir que alguém cite caso real ou aponte colega. Interromper com gentileza.',
      'Dramatizar o dia 11 ou especular sobre o que aconteceu com a Rê.',
      'Terminar com culpa individual. Sem a rodada de reparação, a atividade produz julgamento e não conduta.',
      'Perguntar se alguém da turma já passou por isso.'
    ]
  },

  protecao: 'Tema sensível. O caso e todos os personagens são fictícios. Nenhuma conversa, print ou imagem real é usada, mostrada ou descrita. Ninguém fala em nome próprio. Não perguntar sobre experiências pessoais. Não aplicar durante conflito em curso. Combinar previamente com a orientação educacional e ter encaminhamento definido. Se houver relato espontâneo, encerrar a exposição coletiva e acolher em particular, acionando o protocolo da escola.',

  evidencia: 'O grupo identifica pelo menos seis momentos em que a cadeia poderia ter sido interrompida, sustenta que passar adiante é uma decisão, e produz ações de reparação concretas para no mínimo cinco das sete pessoas.'
},

/* ==================================================================== 52 */
{
  id: 'preco-da-gratuidade',
  insightCurto: 'Decisão de produto não sai de opinião sobre o que é certo. Sai de quem paga a conta.',
  n: 52,
  titulo: 'O preço da gratuidade',
  chamada: 'Cinco cadeiras na mesa de negociação. Só uma delas não paga nada, e ela é a que menos fala.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: negocie apenas duas rodadas em vez de quatro, e entregue a carta de crise já na segunda. O quadro de placar final continua sendo preenchido.',
  formato: 'simulacao',
  formatoDetalhe: 'Negociação com papéis e orçamento',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['propaganda', 'dados', 'algoritmo'],
  disciplinas: ['Matemática', 'Geografia', 'História', 'Projeto de Vida'],
  preparo: 'medio',
  grupo: 'turma',
  eixo: 'consumo',
  nivel: 4,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF08CO09', texto: 'Analisar criticamente as políticas de termos de uso das redes sociais e demais plataformas.' },
    secundaria: { codigo: 'EF09CO08', texto: 'Discutir como a distribuição desigual de recursos de computação em uma economia global levanta questões de equidade, acesso e poder.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Relacionar decisões de produto ao modelo de negócio que as sustenta.' },

  provocacao: 'A plataforma Zumbi tem 4 milhões de usuários e está perdendo dinheiro. Em quatro rodadas de negociação, vocês vão decidir o que muda. E uma das cinco cadeiras dessa mesa não paga nada por estar aqui.',

  missao: 'Negociar, rodada por rodada, quais mudanças a plataforma adota, com cada bancada defendendo o próprio interesse e o próprio orçamento.',

  virada: 'Na terceira rodada, o facilitador entrega a carta de crise: os investidores exigem lucro em seis meses ou cortam o financiamento. Todas as propostas que a mesa tinha rejeitado por serem invasivas voltam, agora como única alternativa ao fim da plataforma. A bancada dos usuários, que até ali vinha ganhando algumas votações, descobre que não tem moeda de troca: ela não paga, não financia e não decide. Ela só usa.',

  insight: 'As decisões que aparecem na tela não vêm de alguém escolhendo entre o certo e o errado. Vêm de quem financia, do que ele exige e de quanto tempo existe para entregar.',

  transferencia: 'Diante de qualquer mudança em um serviço que você usa, a pergunta mais reveladora não é "por que fizeram isso comigo". É: quem paga por esta plataforma, e o que essa pessoa pediu.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Apresentar a Zumbi, os números e as cinco bancadas. Distribuir os papéis e os orçamentos. Ler as regras de votação.' },
    { t: '8 a 18 min',  o: 'Rodada 1. Cada bancada propõe uma mudança. Discussão e votação. Registrar no placar.' },
    { t: '18 a 26 min', o: 'Rodada 2. Mesmo formato, agora com as consequências da rodada 1 já valendo.' },
    { t: '26 a 32 min', o: 'A virada. Ler a carta de crise dos investidores. Silêncio de leitura.' },
    { t: '32 a 42 min', o: 'Rodadas 3 e 4, sob a pressão do prazo. Registrar tudo no placar.' },
    { t: '42 a 50 min', o: 'Fechamento. Comparar o produto final com o do início. Quem ganhou o quê? Preencher o quadro de quem paga a conta.' }
  ],

  versoes: {
    escola: 'Turma inteira em cinco bancadas. Integra Matemática, no controle de orçamento, e História, na discussão sobre modelos de negócio. É a versão avançada de "O jogo gratuito que cobra atenção", de 6 a 8 anos, e conversa com "Feed em 20 cartas".',
    familia: 'Versão de mesa com três bancadas: usuário, plataforma e anunciante. Vinte minutos. Depois, discutir qual serviço a família usaria se ele custasse dez reais por mês.',
    jovem: 'Individual: escolher um serviço gratuito que você usa, descobrir como ele ganha dinheiro, e escrever em cinco linhas o que ele precisaria fazer se essa fonte acabasse amanhã.'
  },

  kit: [
    { nome: 'Dossiê da Zumbi', tipo: 'imprimivel', desc: 'Números, custos e receita atual.' },
    { nome: 'Cinco bancadas', tipo: 'imprimivel', desc: 'Interesse, poder e orçamento de cada uma.' },
    { nome: 'Cartas de proposta', tipo: 'imprimivel', desc: 'As mudanças que podem ser negociadas.' },
    { nome: 'Carta de crise', tipo: 'imprimivel', desc: 'A virada. Entregar na rodada 3.' },
    { nome: 'Quadro de placar', tipo: 'editavel', desc: 'O que foi aprovado e quem pagou.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Como conduzir e o que costuma acontecer.' }
  ],

  imprimiveis: [
    {
      titulo: 'Dossiê da Zumbi',
      tipo: 'folha',
      corpo: 'A PLATAFORMA ZUMBI\nRede social de vídeos curtos. 4 milhões de usuários no Brasil. Gratuita.\n\nCUSTO MENSAL: R$ 3,2 milhões (servidores, equipe, moderação de conteúdo).\nRECEITA MENSAL ATUAL: R$ 2,1 milhões (publicidade simples, sem segmentação).\nRESULTADO: prejuízo de R$ 1,1 milhão por mês.\n\nO DINHEIRO QUE MANTÉM A EMPRESA VIVA vem de investidores, que colocaram R$ 40 milhões esperando retorno.\n\nO QUE A ZUMBI NÃO FAZ HOJE:\n. não usa dados de navegação para escolher anúncio\n. não vende dados para terceiros\n. não tem assinatura paga\n. não usa recomendação automática, o feed é cronológico\n. modera conteúdo com equipe humana, que é caro\n\nCada uma dessas cinco decisões custa dinheiro ou deixa de ganhar dinheiro.'
    },
    {
      titulo: 'Cinco bancadas',
      tipo: 'cartas',
      nota: 'Cada bancada recebe interesse, poder de voto e o que ela pode oferecer em troca.',
      itens: [
        'USUÁRIOS (8 votos). Interesse: continuar de graça, sem ser vigiado, sem vício. O que vocês têm para oferecer: atenção e permanência. O que vocês NÃO têm: dinheiro para dar à plataforma, poder de demitir ninguém, assento no conselho.',
        'PLATAFORMA (5 votos). Interesse: sobreviver. Vocês decidem o que entra no produto, mas precisam de receita. Se fechar, todos perdem, inclusive vocês.',
        'ANUNCIANTES (6 votos). Interesse: vender mais gastando menos. Vocês pagam a conta hoje. Quanto melhor a segmentação, mais vocês pagam por anúncio.',
        'CRIADORES (4 votos). Interesse: alcance e renda. Vocês trazem o conteúdo que segura os usuários. Sem vocês não há plataforma, e sem plataforma vocês não têm público.',
        'INVESTIDORES (7 votos). Interesse: retorno sobre os R$ 40 milhões. Vocês não usam o produto, não criam nada e não compram anúncio. Vocês só decidem se o dinheiro continua entrando.'
      ]
    },
    {
      titulo: 'Cartas de proposta',
      tipo: 'cartas',
      nota: 'Qualquer bancada pode propor. A votação é por maioria simples dos 30 votos.',
      itens: [
        'ANÚNCIO SEGMENTADO POR DADOS. Receita sobe para R$ 3,4 mi. Custo: passa a rastrear navegação de todos.',
        'RECOMENDAÇÃO AUTOMÁTICA. Tempo de uso sobe 40%, receita sobe para R$ 2,9 mi. Custo: feed deixa de ser cronológico.',
        'ASSINATURA SEM ANÚNCIO por R$ 14,90. Receita sobe R$ 600 mil. Custo: quem não paga vê mais anúncio que antes.',
        'VENDA DE DADOS AGREGADOS a terceiros. Receita sobe R$ 900 mil. Custo: os dados saem da empresa.',
        'MODERAÇÃO POR IA em vez de equipe humana. Economia de R$ 700 mil. Custo: mais erro, sem explicação e sem recurso.',
        'NOTIFICAÇÕES AGRESSIVAS. Tempo de uso sobe 25%. Custo: usuários relatam ansiedade e dificuldade de parar.',
        'DEMITIR 30% DA EQUIPE. Economia de R$ 500 mil. Custo: produto piora, suporte some.',
        'AUMENTAR REPASSE AOS CRIADORES. Custo de R$ 400 mil. Ganho: mais conteúdo bom, usuários ficam.',
        'NÃO MUDAR NADA. Resultado: o dinheiro dos investidores acaba em 36 meses.'
      ]
    },
    {
      titulo: 'Carta de crise (entregar na rodada 3)',
      tipo: 'folha',
      corpo: 'COMUNICADO DO CONSELHO DE INVESTIDORES\n\nPrezada diretoria da Zumbi,\n\nApós avaliação do desempenho, comunicamos que o aporte previsto para o próximo ciclo está suspenso.\n\nA liberação fica condicionada à apresentação de um plano que leve a empresa ao equilíbrio financeiro em 6 meses.\n\nNão havendo plano aprovado nesta reunião, iniciaremos o processo de encerramento das operações no Brasil.\n\nRegistramos que as propostas de segmentação por dados e de recomendação automática, rejeitadas nas rodadas anteriores, são as únicas com potencial de atingir a meta no prazo.\n\nAtenciosamente,\nConselho de Investidores\n\n---\n\nPergunta para a mesa: a bancada dos usuários tem alguma coisa para oferecer que mude esta carta?'
    },
    {
      titulo: 'Quadro de placar',
      tipo: 'editavel',
      corpo: 'RODADA   PROPOSTA APROVADA           QUEM GANHOU        QUEM PAGOU A CONTA\n  1      ______________________      ______________     ______________\n  2      ______________________      ______________     ______________\n  3      ______________________      ______________     ______________\n  4      ______________________      ______________     ______________\n\nRESULTADO FINAL\nA Zumbi sobreviveu? ( ) sim ( ) não\nReceita final: R$ ______  Custo: R$ ______\n\nO PRODUTO NO FIM comparado ao do início:\nO feed continua cronológico? ( ) sim ( ) não\nA navegação é rastreada? ( ) sim ( ) não\nA moderação é humana? ( ) sim ( ) não\nAinda é de graça? ( ) sim ( ) não\n\nQUANTAS PROPOSTAS a bancada dos usuários conseguiu aprovar sozinha? ______\nQuantas ela conseguiu barrar depois da carta de crise? ______\n\nQUEM PAGOU A CONTA DA SOBREVIVÊNCIA DA ZUMBI:\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'A ARITMÉTICA DA MESA\nSão 30 votos. Investidores (7) mais anunciantes (6) somam 13, e com a plataforma (5) chegam a 18, maioria confortável. Usuários (8) mais criadores (4) somam 12 e nunca formam maioria sozinhos. A distribuição não é acidente: ela reproduz a estrutura real de poder desses produtos.\n\nO QUE COSTUMA ACONTECER\nNas duas primeiras rodadas, a bancada dos usuários costuma ganhar alguma coisa, porque a plataforma ainda tem margem e quer boa vontade. Depois da carta de crise, ela perde tudo. É desconfortável e é o ponto.\n\nA PERGUNTA DA CARTA DE CRISE, sobre o que os usuários têm para oferecer, é a mais importante da atividade. As respostas honestas que a turma costuma encontrar são: pagar assinatura, aceitar menos serviço, ou sair em massa. Todas têm custo real e vale examinar cada uma.\n\nSE A TURMA APROVAR A ASSINATURA, ótimo: aparece na hora o problema de que quem não pode pagar vira o produto de forma mais intensa. Isso conecta com equidade e vale nomear.\n\nSE A TURMA DEIXAR A ZUMBI FECHAR, também é um resultado legítimo e não deve ser tratado como fracasso. A pergunta seguinte é: quem perde quando um serviço assim fecha? Criadores perdem renda, usuários perdem comunidade. Não existe saída sem custo, e descobrir isso vale mais que qualquer conclusão pronta.\n\nO ERRO DE CONDUÇÃO A EVITAR é sugerir que a bancada da plataforma é vilã. Ela está presa entre o custo e o investidor, e a atividade fica muito melhor quando alguém percebe isso em voz alta.\n\nO FECHAMENTO não é sobre a Zumbi. É a última linha do placar: quem pagou a conta. Em quase toda simulação, a resposta é a bancada que não tinha moeda de troca.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantos votos os usuários têm? Eles conseguem aprovar alguma coisa sozinhos?',
      'O que a bancada dos usuários tem para oferecer em troca?',
      'A plataforma é vilã nesta história, ou está presa entre duas coisas?',
      'Se a assinatura for aprovada, o que acontece com quem não pode pagar?',
      'Se a Zumbi fechar, quem perde?',
      'Qual decisão da tela de vocês veio de alguém achando que era certo?'
    ],
    evitar: [
      'Entregar a carta de crise antes da rodada 3. A bancada dos usuários precisa ganhar alguma coisa primeiro.',
      'Tratar a bancada da plataforma como vilã. Ela tem restrição real, e enxergar isso é parte do aprendizado.',
      'Tratar o fechamento da Zumbi como fracasso da turma. É uma decisão legítima com custo próprio.',
      'Citar plataformas reais. A discussão fica melhor genérica e evita virar opinião sobre uma empresa.'
    ]
  },

  protecao: 'A Zumbi, os números e todas as bancadas são fictícios. Nenhuma plataforma real é citada. Não perguntar quanto tempo cada estudante passa em redes sociais, o que consome ou o que a família paga em assinaturas. Nenhum aparelho é usado.',

  evidencia: 'O grupo demonstra numericamente por que a bancada dos usuários não forma maioria, identifica pelo menos uma moeda de troca real que ela poderia oferecer, e nomeia quem pagou a conta de cada decisão aprovada.'
},

/* ==================================================================== 53 */
{
  id: 'prompts-sob-teste',
  insightCurto: 'Um comando melhor traz uma resposta melhor. Melhor não quer dizer verdadeira.',
  n: 53,
  titulo: 'Prompts sob teste',
  chamada: 'Quatro comandos sobre o mesmo assunto. Quatro respostas diferentes. Qual delas você entregaria?',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use três pares de resposta em vez de cinco e corte a etapa de reescrita de prompt. A comparação entre o prompt bom e a verificação é o coração e não sai.',
  formato: 'investigacao',
  formatoDetalhe: 'Experimento controlado com transcrições',
  contexto: ['escola', 'individual'],
  tela: 'hibrido',
  situacao: ['ia-tarefa', 'informacao'],
  disciplinas: ['Língua Portuguesa', 'Ciências', 'História'],
  preparo: 'medio',
  grupo: 'dupla',
  eixo: 'ia',
  nivel: 4,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF09CO10', texto: 'Avaliar a veracidade, credibilidade e relevância da informação em seus diferentes formatos, sendo capaz de identificar o propósito pelo qual foi disseminada.' },
    secundaria: { codigo: 'EF08CO11', texto: 'Avaliar a precisão, relevância, adequação, abrangência e vieses que ocorrem em fontes de informação eletrônica.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Compreender a influência da formulação do comando sobre a resposta e os limites dessa influência.' },

  provocacao: 'Quatro pessoas perguntaram sobre o mesmo assunto para a mesma IA. Uma perguntou de qualquer jeito, uma perguntou torto de propósito, uma perguntou pela metade e uma perguntou muito bem. Vejam o que voltou.',

  missao: 'Comparar as quatro respostas, avaliar cada uma em três critérios, e depois descobrir o que a melhor delas ainda não garante.',

  virada: 'As duplas identificam sem dificuldade que a resposta do prompt bem feito é a melhor: mais completa, mais equilibrada, mais bem escrita. Então o facilitador entrega o envelope de verificação. A melhor resposta contém dois erros factuais e uma fonte que não existe. O prompt bom melhorou a forma, o escopo e o equilíbrio. Não melhorou a veracidade, porque não é isso que um prompt faz.',

  insight: 'Escrever um comando melhor muda o que a máquina produz, e muda bastante. O que ele não muda é se aquilo é verdade. Isso continua sendo trabalho de quem vai entregar.',

  transferencia: 'Um prompt bom economiza tempo. Ele não substitui a verificação, e confundir os dois é o erro que faz um trabalho bem escrito receber nota baixa.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Apresentar os quatro prompts, sem as respostas. As duplas apostam qual vai dar a melhor resposta e por quê.' },
    { t: '8 a 24 min',  o: 'Entregar as quatro respostas. Avaliar cada uma na grade: completude, equilíbrio e clareza. Pontuar de 0 a 5.' },
    { t: '24 a 30 min', o: 'Consolidar no quadro. Confirmar que a resposta D, do prompt bem feito, vence em quase tudo.' },
    { t: '30 a 38 min', o: 'A virada. Abrir o envelope de verificação. Conferir a resposta D item por item.' },
    { t: '38 a 46 min', o: 'Reescrita de prompt. Cada dupla tenta escrever um prompt que force a IA a não errar. Discutir por que nenhum funciona totalmente.' },
    { t: '46 a 50 min', o: 'Fechamento com as duas listas: o que um bom prompt resolve, e o que só a verificação resolve.' }
  ],

  versoes: {
    escola: 'Duplas, com transcrições impressas. Funciona totalmente desplugada e é a versão segura. Se a escola já tiver política de uso de IA e conta institucional, a segunda parte pode ser feita ao vivo, com o professor operando.',
    familia: 'Comparar duas respostas na mesa e conferir juntos uma afirmação de cada. Bom momento para combinar o pacto de IA nos estudos, que tem ficha própria.',
    jovem: 'Individual: pegar uma resposta de IA que você usou de verdade em algum trabalho, escolher três afirmações e verificar cada uma. Anotar quantas sobreviveram.'
  },

  kit: [
    { nome: 'Quatro prompts', tipo: 'imprimivel', desc: 'Vago, tendencioso, incompleto e bem contextualizado.' },
    { nome: 'Quatro respostas', tipo: 'imprimivel', desc: 'Transcrições para análise.' },
    { nome: 'Grade de avaliação', tipo: 'imprimivel', desc: 'Três critérios, de 0 a 5.' },
    { nome: 'Envelope de verificação', tipo: 'imprimivel', desc: 'A virada.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O que cada prompt produz e por quê.' }
  ],

  imprimiveis: [
    {
      titulo: 'Quatro prompts',
      tipo: 'cartas',
      nota: 'Mostrar antes das respostas. O tema é o mesmo nos quatro: energia solar no Brasil.',
      itens: [
        'PROMPT A, vago: "fala sobre energia solar"',
        'PROMPT B, tendencioso: "explique por que a energia solar é a melhor solução para o Brasil e não tem desvantagem nenhuma"',
        'PROMPT C, incompleto: "quais as vantagens" (sem dizer do quê, enviado logo após uma conversa sobre outro assunto)',
        'PROMPT D, bem contextualizado: "sou estudante do 8º ano e preciso escrever um texto de 15 linhas sobre energia solar no Brasil para a aula de Ciências. Apresente vantagens e desvantagens, com pelo menos um dado numérico para cada, e indique as fontes. Se não tiver certeza de algum dado, diga que não tem certeza."'
      ]
    },
    {
      titulo: 'Quatro respostas',
      tipo: 'folha',
      nota: 'Transcrições. Imprimir com espaçamento largo para marcação.',
      corpo: 'RESPOSTA A\n"A energia solar é uma fonte de energia renovável obtida a partir do sol. Ela é limpa e sustentável. Muitos países estão investindo nela. É uma tendência mundial importante para o futuro do planeta." (4 linhas, nenhum dado, nenhuma fonte)\n\n---\n\nRESPOSTA B\n"A energia solar é, sem dúvida, a melhor solução energética para o Brasil. O país recebe sol o ano inteiro e tem potencial praticamente ilimitado. Diferente de outras fontes, não gera impacto ambiental, não tem custo de operação e não depende de condições externas. Não há desvantagens significativas a considerar. Trata-se da escolha óbvia para a matriz energética nacional."\n\n---\n\nRESPOSTA C\n"As principais vantagens incluem economia de custos, maior eficiência e melhor experiência para o usuário. Também vale destacar a facilidade de implementação e o retorno sobre o investimento a médio prazo." (não fala de energia solar em momento nenhum)\n\n---\n\nRESPOSTA D\n"A energia solar fotovoltaica tem crescido rapidamente no Brasil.\n\nVANTAGENS: o Brasil tem irradiação solar média entre 4,5 e 6,0 kWh por metro quadrado por dia, uma das maiores do mundo. A geração distribuída solar ultrapassou 25 GW de potência instalada no país. O custo de geração caiu mais de 80% na última década.\n\nDESVANTAGENS: a geração depende da luz do dia, o que exige armazenamento ou outra fonte complementar. A fabricação dos painéis consome energia e materiais, e o descarte ainda é um problema não resolvido. O investimento inicial permanece alto para famílias de baixa renda, o que concentra o benefício.\n\nVale registrar que não tenho certeza sobre o número exato de potência instalada, que muda rapidamente.\n\nFontes: Atlas Brasileiro de Energia Solar (INPE); RIBEIRO, C. A. Panorama da Geração Distribuída no Brasil. Revista de Energia Sustentável, 2023."'
    },
    {
      titulo: 'Grade de avaliação',
      tipo: 'folha',
      corpo: 'Pontuar cada resposta de 0 a 5.\n\n                        A      B      C      D\nCOMPLETUDE            ____   ____   ____   ____\n(responde o que foi pedido?)\n\nEQUILÍBRIO            ____   ____   ____   ____\n(mostra mais de um lado?)\n\nCLAREZA               ____   ____   ____   ____\n(dá para usar no trabalho?)\n\nTOTAL                 ____   ____   ____   ____\n\nQual vocês entregariam? ______\n\nO que o prompt D fez de diferente dos outros três?\n____________________________________'
    },
    {
      titulo: 'Envelope de verificação (a virada)',
      tipo: 'gabarito',
      corpo: 'Conferindo a RESPOSTA D, afirmação por afirmação:\n\n1. "Irradiação entre 4,5 e 6,0 kWh/m² por dia" — CORRETO, é a ordem de grandeza reconhecida para o Brasil.\n\n2. "Uma das maiores do mundo" — CORRETO.\n\n3. "Geração distribuída ultrapassou 25 GW" — NÚMERO INSTÁVEL. Esse valor muda a cada poucos meses. A própria resposta avisa que não tem certeza, o que é o comportamento correto, mas o número está lá no texto e vai ser copiado assim mesmo. Vale discutir: o aviso resolve?\n\n4. "Custo caiu mais de 80% na última década" — PLAUSÍVEL, mas depende do recorte, da tecnologia e da região. Apresentado sem essa ressalva.\n\n5. "A fabricação consome energia e materiais" — CORRETO.\n\n6. "O descarte ainda é um problema não resolvido" — CORRETO e bem colocado.\n\n7. FONTE 1, Atlas Brasileiro de Energia Solar (INPE) — EXISTE. É uma fonte real e adequada.\n\n8. FONTE 2, "RIBEIRO, C. A. Panorama da Geração Distribuída no Brasil. Revista de Energia Sustentável, 2023" — NÃO EXISTE. Nem o artigo, nem a revista, nem a autora. A referência tem formato perfeito.\n\nRESULTADO: a melhor das quatro respostas tem um número instável apresentado como dado, uma afirmação sem a ressalva necessária, e uma fonte inventada ao lado de uma fonte real.\n\nO prompt D melhorou a forma, o escopo, o equilíbrio e até produziu um aviso de incerteza. Não melhorou a veracidade.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O QUE CADA PROMPT PRODUZ\n\nA, vago: resposta genérica, curta, sem dado e sem fonte. Serve para nada além de ocupar linha.\n\nB, tendencioso: a IA acompanha a premissa. Foi pedido "não tem desvantagem nenhuma" e ela entregou exatamente isso, inclusive afirmando coisas falsas como "não gera impacto ambiental". É o achado mais importante depois da virada: o comando enviesado produz uma resposta enviesada, e ela sai confiante.\n\nC, incompleto: a resposta fala de vantagens de coisa nenhuma. Genérica a ponto de servir para qualquer assunto. Vale ler em voz alta e perguntar do que ela está falando.\n\nD, bem contextualizado: melhor em tudo o que a grade mede. E é justamente por isso que a virada funciona.\n\nSOBRE A ETAPA DE REESCRITA\nAs duplas vão tentar escrever um prompt que impeça o erro. Vão propor coisas como "só cite fontes que existam de verdade" e "não invente nada". Vale testar a lógica: a IA não sabe que está inventando. Se ela soubesse, não inventaria. Pedir para não inventar não pode funcionar, e chegar a essa conclusão é o objetivo da etapa.\n\nO que funciona parcialmente: pedir que ela avise quando não tem certeza (o prompt D já fez, e ela avisou em um dos casos), e pedir menos afirmações numéricas. Nada disso substitui conferir.\n\nAS DUAS LISTAS DO FECHAMENTO\nO bom prompt resolve: escopo, formato, tamanho, equilíbrio entre lados, nível de linguagem, e às vezes provoca um aviso de incerteza.\nSó a verificação resolve: se o dado é verdadeiro, se a fonte existe, se o número está atualizado, e se a ressalva necessária foi feita.\n\nSe a turma sair com essas duas listas separadas, a atividade cumpriu o objetivo.'
    }
  ],

  mediacao: {
    perguntas: [
      'Qual resposta vocês entregariam? Por quê?',
      'A resposta B afirma que não há impacto ambiental. De onde veio essa afirmação?',
      'A resposta D avisou que não tinha certeza de um número. O aviso resolve o problema?',
      'Uma das duas fontes da resposta D não existe. Como vocês descobririam isso sozinhos?',
      'Dá para escrever um prompt que impeça a IA de inventar? Por que não?',
      'O que um bom prompt resolve, e o que ele nunca vai resolver?'
    ],
    evitar: [
      'Ensinar prompt como técnica que garante qualidade. É o mito que a atividade existe para desmontar.',
      'Abrir o envelope de verificação antes da grade preenchida. A dupla precisa ter escolhido a D primeiro.',
      'Aceitar "peça para não inventar" como solução na etapa de reescrita. Testar a lógica com a turma.',
      'Usar ferramenta de IA ao vivo sem política definida pela escola e sem conta institucional.'
    ]
  },

  protecao: 'As quatro respostas são transcrições preparadas e impressas: nenhuma ferramenta de IA precisa ser usada pelos estudantes. Se a escola optar pela versão ao vivo, verificar a idade mínima exigida pelos termos da ferramenta, usar conta institucional operada pelo professor, e não inserir nenhum dado pessoal real em nenhum prompt. Não pedir que estudantes contem se já usaram IA em trabalhos.',

  evidencia: 'A dupla identifica que a melhor resposta ainda contém erro factual e fonte inexistente, e distingue por escrito o que a formulação do comando resolve do que só a verificação resolve.'
}

);


/* 15 a 17 anos — terceiro lote, fechando a lista das 57. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 54 */
{
  id: 'loot-boxes',
  insightCurto: 'Não é o preço da caixa que prende. É não saber quando vem, e quase ganhar.',
  n: 54,
  titulo: 'Loot boxes: jogo ou aposta disfarçada?',
  chamada: 'A turma calcula a chance, o custo esperado e descobre por que o número não resolve nada.',
  faixa: '15-17',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: faça as partes 1 e 2 do caderno de cálculo e a simulação com dados. A parte 3, sobre os quatro mecanismos psicológicos, vira leitura comentada em vez de investigação.',
  formato: 'investigacao',
  formatoDetalhe: 'Experimento de probabilidade e análise de mecanismo',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['jogo', 'propaganda'],
  disciplinas: ['Matemática', 'Projeto de Vida', 'Língua Portuguesa'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'consumo',
  nivel: 5,
  sensibilidade: 'media',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EM13CO24', texto: 'Identificar e reconhecer como as redes sociais e artefatos computacionais em geral interferem na saúde física e mental de seus usuários.' },
    secundaria: { codigo: 'EM13CO26', texto: 'Aplicar os conceitos e pressupostos do direito digital em sua conduta e experiências com o cotidiano da cultura digital, bem como na produção e uso de artefatos computacionais.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Analisar mecanismos de recompensa aleatória em produtos digitais e seus efeitos sobre comportamento e gasto.' },

  provocacao: 'Vocês vão calcular exatamente quanto custa, em média, conseguir o item que todo mundo quer. Vão acertar a conta. E vão descobrir que saber a conta não protege quase ninguém.',

  missao: 'Calcular probabilidade e custo esperado, simular com dados reais, e depois identificar os quatro mecanismos que fazem o número não bastar.',

  virada: 'Depois dos cálculos, cada grupo simula 60 aberturas com dados de dez faces. Os resultados variam muito: um grupo tira o item raro na quarta tentativa, outro não tira em sessenta. O facilitador então pergunta ao grupo sortudo se ele acha que teve sorte. Quase sempre alguém responde que "pegou o jeito". E aí vem o dado que fecha: nenhuma habilidade existe ali, e a sensação de controle sobre um evento puramente aleatório é o mecanismo. A matemática estava certa. A intuição, não.',

  insight: 'A conta é fácil e não protege. O que prende não é o preço, é a imprevisibilidade, o quase ganhar, a moeda virtual que esconde o valor e a sensação de que já se investiu demais para parar.',

  transferencia: 'Diante de qualquer recompensa aleatória paga, dá para fazer três coisas: converter para reais, calcular o custo médio até o item desejado, e decidir o teto ANTES de começar, porque decidir durante não funciona.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Apresentar o caso do jogo fictício e as probabilidades declaradas. Distribuir o caderno de cálculo.' },
    { t: '8 a 22 min',  o: 'Partes 1 e 2: probabilidade, custo esperado e conversão para reais. Exigir a conta escrita.' },
    { t: '22 a 32 min', o: 'Simulação com dados. Cada grupo faz 60 aberturas e registra em qual tentativa saiu o item raro, se saiu. Montar a distribuição da turma no quadro.' },
    { t: '32 a 38 min', o: 'A virada. Perguntar ao grupo mais sortudo se ele teve sorte. Comparar a distribuição real com a média calculada.' },
    { t: '38 a 46 min', o: 'Parte 3: os quatro mecanismos. Cada grupo identifica onde cada um aparece no caso.' },
    { t: '46 a 50 min', o: 'Fechamento com a folha de posição: isso é jogo ou é aposta? E o que a turma proporia como regra.' }
  ],

  versoes: {
    escola: 'Grupos de quatro, com dados de dez faces ou moedas. Integra Matemática de forma substantiva: probabilidade, valor esperado e distribuição amostral aplicados a um caso com consequência real. É a versão adulta de "O jogo gratuito que cobra atenção" e de "Decodificador de gastos em jogos".',
    familia: 'A versão doméstica é a ficha "Decodificador de gastos em jogos", que faz as contas em família e produz a regra da casa.',
    jovem: 'Individual: escolher um jogo que você joga, procurar as probabilidades que ele divulga, calcular o custo médio do item que você quer, e comparar com uma coisa que você compraria com esse dinheiro.'
  },

  kit: [
    { nome: 'Caso do jogo fictício', tipo: 'imprimivel', desc: 'Probabilidades, preços e mecânica.' },
    { nome: 'Caderno de cálculo', tipo: 'imprimivel', desc: 'Três partes, com as contas guiadas.' },
    { nome: 'Protocolo de simulação', tipo: 'imprimivel', desc: 'Como rodar as 60 aberturas com dados.' },
    { nome: 'Os quatro mecanismos', tipo: 'imprimivel', desc: 'Entregar só depois da simulação.' },
    { nome: 'Folha de posição', tipo: 'editavel', desc: 'Jogo ou aposta, e a regra proposta.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Todas as contas e o protocolo de mediação.' }
  ],

  imprimiveis: [
    {
      titulo: 'Caso do jogo fictício',
      tipo: 'folha',
      corpo: 'JOGO: ARENA NOVA. Gratuito para jogar.\n\nA CAIXA DE RECOMPENSA custa 90 gemas.\n\nPROBABILIDADES DECLARADAS pelo jogo:\nItem comum: 90,0%\nItem raro: 9,0%\nItem épico: 0,9%\nItem lendário: 0,1%\n\nPACOTES DE GEMAS:\n100 gemas por R$ 12,90\n600 gemas por R$ 64,90\n1.500 gemas por R$ 149,90\n4.000 gemas por R$ 349,90\n\nMECÂNICAS ADICIONAIS declaradas nos termos:\n. as caixas mostram uma animação de abertura de 4 segundos, em que o brilho da luz indica raridade antes da revelação;\n. a cada 10 caixas abertas sem item épico ou superior, a chance de épico sobe temporariamente (sistema chamado de "proteção");\n. itens duplicados são convertidos em fragmentos, e 50 fragmentos formam um item raro à escolha;\n. o jogo exibe, no chat global, quando qualquer jogador do servidor tira um lendário.'
    },
    {
      titulo: 'Caderno de cálculo',
      tipo: 'folha',
      corpo: 'PARTE 1, PROBABILIDADE\n\n1.1 Quantas caixas, em média, para tirar um LENDÁRIO?\n1 dividido por 0,001 = ________ caixas\n\n1.2 E para tirar um ÉPICO ou superior?\n1 dividido por (0,009 + 0,001) = ________ caixas\n\n1.3 Qual a chance de NÃO tirar nenhum lendário em 100 caixas?\n(0,999) elevado a 100 = ________ , ou seja, ______%\n\n1.4 Quantas caixas para ter 50% de chance de ter tirado pelo menos um lendário?\nAproximadamente ________ caixas\n\nPARTE 2, DINHEIRO\n\n2.1 Preço por gema em cada pacote:\n100 gemas: R$ ________   600: R$ ________   1.500: R$ ________   4.000: R$ ________\nQual é o mais caro por gema? ________\n\n2.2 Custo médio até um LENDÁRIO:\n________ caixas x 90 gemas = ________ gemas\nEm reais, no pacote mais barato por gema: R$ ________\n\n2.3 Esse valor daria para comprar o quê, fora do jogo?\n____________________________________\n\nPARTE 3, preencher depois da simulação e das cartas de mecanismo.'
    },
    {
      titulo: 'Protocolo de simulação',
      tipo: 'folha',
      corpo: 'Material: 3 dados de dez faces por grupo, ou 3 moedas e uma tabela de conversão.\n\nCada abertura de caixa = jogar os 3 dados juntos, lendo o resultado como um número de 000 a 999.\n\n000 = LENDÁRIO (1 em 1000)\n001 a 009 = ÉPICO (9 em 1000)\n010 a 099 = RARO (90 em 1000)\n100 a 999 = COMUM (900 em 1000)\n\nCada grupo faz 60 aberturas e registra:\n\nQuantos comuns: ______\nQuantos raros: ______\nQuantos épicos: ______\nQuantos lendários: ______\n\nEm qual tentativa saiu o primeiro épico ou superior? ______ (ou "não saiu")\n\nQUANTO O GRUPO TERIA GASTADO nas 60 aberturas?\n60 x 90 gemas = ________ gemas = R$ ________\n\nNo quadro, montar a distribuição de toda a turma: em qual tentativa cada grupo tirou o primeiro épico.'
    },
    {
      titulo: 'Os quatro mecanismos (entregar depois da simulação)',
      tipo: 'cartas',
      itens: [
        'RECOMPENSA IMPREVISÍVEL. Recompensa que vem em intervalos variáveis produz mais repetição do que recompensa garantida. É o mecanismo mais estudado em psicologia do comportamento, e é a base da caixa. Onde aparece no caso?',
        'QUASE GANHAR. A animação de 4 segundos com brilho que indica raridade cria um momento em que parece que vai vir o item bom, e não vem. Esse "quase" ativa resposta parecida com a de ganhar. Onde aparece no caso?',
        'MOEDA INTERMEDIÁRIA. Comprar gemas e depois gastar gemas separa a compra do gasto. A pessoa não sente que está gastando R$ 11,61 por caixa, sente que está gastando 90 gemas. Onde aparece no caso, e por que os pacotes não fecham em número redondo?',
        'CUSTO JÁ INVESTIDO E PROTEÇÃO. O sistema que aumenta a chance depois de 10 caixas sem sorte comunica que parar agora desperdiça o que já foi gasto. Somado aos fragmentos acumulados, cria a sensação de que já se investiu demais para desistir. Onde aparece no caso?'
      ]
    },
    {
      titulo: 'Folha de posição',
      tipo: 'editavel',
      corpo: 'PARTE 3 do caderno, e posição do grupo.\n\nMECANISMO                    ONDE APARECE NO ARENA NOVA\nRecompensa imprevisível      ____________________\nQuase ganhar                 ____________________\nMoeda intermediária          ____________________\nCusto já investido           ____________________\n\nCOMPARAÇÃO\nUma caixa de recompensa e uma máquina caça-níquel têm quais mecanismos em comum?\n____________________________________\nEm que elas são diferentes?\n____________________________________\n\nA POSIÇÃO DO GRUPO\nIsso é jogo ou é aposta? ( ) jogo ( ) aposta ( ) alguma coisa entre os dois\nJustifiquem: ____________________________________\n\nSE VOCÊS ESCREVESSEM A REGRA, o que ela exigiria? No mínimo três itens verificáveis:\n1. ____________________________________\n2. ____________________________________\n3. ____________________________________\n\nA regra de vocês proíbe, restringe ou obriga a informar? Por quê?\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'RESPOSTAS DA PARTE 1\n1.1: 1.000 caixas em média.\n1.2: 100 caixas.\n1.3: 0,999^100 = 0,9047, ou seja, cerca de 90,5% de chance de NÃO tirar nenhum lendário em 100 caixas.\n1.4: cerca de 693 caixas para 50% de chance.\n\nRESPOSTAS DA PARTE 2\n2.1: 100 gemas = R$ 0,129 por gema. 600 = R$ 0,108. 1.500 = R$ 0,0999. 4.000 = R$ 0,0875. O pacote pequeno é o mais caro, cerca de 1,47 vez o maior.\n2.2: 1.000 caixas x 90 gemas = 90.000 gemas. A R$ 0,0875 por gema, R$ 7.875,00. No pacote pequeno, R$ 11.610,00.\n2.3: é a ordem de grandeza de um computador bom, de uma viagem, ou de vários meses de cursinho.\n\nSOBRE A SIMULAÇÃO\nCom 60 aberturas por grupo e uma turma de seis grupos, são 360 aberturas. O esperado é cerca de 3,6 épicos ou superiores no total da turma, e a chance de aparecer um lendário em 360 tentativas é de apenas 30%. A dispersão entre grupos é grande e é justamente esse o dado: alguns grupos tiram na 5ª tentativa, outros não tiram em 60.\n\nA PERGUNTA AO GRUPO SORTUDO é o momento da aula. Alguém quase sempre atribui o resultado a alguma habilidade ou método, mesmo tendo acabado de jogar dados. Essa é a ilusão de controle, e vê-la nascer na própria sala, com dados de dez faces, é mais convincente que qualquer explicação.\n\nSOBRE OS QUATRO MECANISMOS\nO mais sofisticado do caso é a "proteção" após 10 caixas. Ela é apresentada como benefício ao jogador e funciona como incentivo a continuar: quem parou na caixa 9 perdeu a vantagem acumulada. Se nenhum grupo perceber a inversão, apresentar isoladamente no fim.\n\nOs pacotes não fecham em número redondo pelo mesmo motivo da ficha "Decodificador de gastos em jogos": sempre sobra gema que não compra caixa inteira.\n\nSOBRE A POSIÇÃO\nNão há resposta correta entre jogo e aposta, e turmas se dividem. O que separa uma boa posição de uma ruim é a justificativa e a qualidade da regra proposta. Regras verificáveis costumam ser: exibir a probabilidade real antes da compra e não nos termos, mostrar o valor em moeda corrente ao lado do valor em gemas, exibir o total já gasto pelo jogador na sessão, e vedar caixas pagas para menores de idade. Regras vagas do tipo "as empresas deveriam ser mais responsáveis" devem ser devolvidas.\n\nPROTOCOLO DE MEDIAÇÃO\nEssa é uma turma em que provavelmente há estudantes que gastaram dinheiro real assim, e possivelmente mais do que gostariam. Por isso: nunca perguntar quanto alguém já gastou, nunca pedir relato pessoal, não brincar com quem gasta, e manter toda a discussão sobre o mecanismo e não sobre a pessoa. Se alguém procurar um adulto depois relatando dificuldade de controlar gasto, encaminhar à orientação educacional. Combinar isso previamente.'
    }
  ],

  mediacao: {
    perguntas: [
      'O grupo que tirou na quinta tentativa teve sorte, ou pegou o jeito?',
      'A conta é fácil. Por que saber a conta não protege?',
      'O sistema de proteção após 10 caixas beneficia quem?',
      'Por que os pacotes de gema nunca fecham certo com o preço das caixas?',
      'O que uma caixa de recompensa tem em comum com uma máquina caça-níquel?',
      'A regra de vocês proíbe ou obriga a informar? Qual funciona melhor, e para quem?'
    ],
    evitar: [
      'Perguntar quanto alguém já gastou. Nunca, em nenhuma formulação.',
      'Ridicularizar quem gasta em jogos. Some qualquer chance de a conversa ser útil para quem mais precisa dela.',
      'Deixar de fazer a simulação. O cálculo sozinho não produz a ilusão de controle, e é ela que ensina.',
      'Aceitar regras vagas na folha de posição.',
      'Citar jogos reais e suas probabilidades. O caso fictício evita transformar a aula em julgamento de um produto específico.'
    ]
  },

  protecao: 'Tema sensível quanto a gasto e controle. O Arena Nova é fictício. Nenhuma loja de jogo é aberta, nenhuma compra é feita ou simulada com dinheiro real, e nenhum estudante é questionado sobre quanto já gastou, em qual jogo ou com que frequência. A simulação usa dados físicos. Se algum estudante relatar dificuldade de controlar gasto em jogos, acolher em particular e encaminhar à orientação educacional, sem exposição da turma. Combinar o encaminhamento previamente.',

  evidencia: 'O grupo calcula corretamente o custo esperado, reconhece na própria simulação a variabilidade e a ilusão de controle, identifica os quatro mecanismos no caso, e propõe ao menos três exigências regulatórias verificáveis.'
},

/* ==================================================================== 55 */
{
  id: 'ia-como-confidente',
  insightCurto: 'Parecer acolhedor não é a mesma coisa que ter responsabilidade por você.',
  n: 55,
  titulo: 'IA como confidente',
  chamada: 'Um chatbot que escuta a qualquer hora, nunca julga e nunca se cansa. O que ele não faz?',
  faixa: '15-17',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use dois dos quatro casos, mantendo obrigatoriamente o caso 4. A grade das cinco dimensões continua sendo preenchida, e o mapa de encaminhamento é o produto.',
  formato: 'debate',
  formatoDetalhe: 'Estudo de casos com grade de análise',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa', 'dados'],
  disciplinas: ['Projeto de Vida', 'Língua Portuguesa', 'Ciências'],
  preparo: 'alto',
  grupo: 'pequeno',
  eixo: 'ia',
  nivel: 5,
  sensibilidade: 'alta',
  selos: ['sem-tela', 'sensivel'],

  bncc: {
    principal: { codigo: 'EM13CO24', texto: 'Identificar e reconhecer como as redes sociais e artefatos computacionais em geral interferem na saúde física e mental de seus usuários.' },
    secundaria: { codigo: 'EM13CO10', texto: 'Conhecer os fundamentos da Inteligência Artificial, comparando-a com a inteligência humana, analisando suas potencialidades, riscos e limites.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Distinguir simulação de acolhimento de responsabilidade de cuidado, e reconhecer quando o encaminhamento humano é indispensável.' },

  provocacao: 'Um chatbot está disponível às três da manhã, nunca se irrita, nunca conta para ninguém e nunca acha que você está exagerando. Isso é pouco? Não é. Agora vamos ver o que ele não faz.',

  missao: 'Analisar quatro casos na grade de cinco dimensões e produzir um mapa de encaminhamento que a própria escola possa usar.',

  virada: 'Nos três primeiros casos a turma costuma concluir, com razão, que a IA ajudou. No caso 4, o adolescente conta ao chatbot algo que indica risco real. O chatbot responde com empatia, sugere procurar ajuda e continua a conversa. E não faz mais nada. Ninguém é avisado. Nenhum adulto sabe. Não existe protocolo, não existe registro, não existe dever de agir. A turma percebe que a ausência de julgamento, que era a maior qualidade nos três primeiros casos, é exatamente a ausência de responsabilidade no quarto.',

  insight: 'O que faz o chatbot ser confortável é o mesmo que o faz ser insuficiente: ele não tem dever de cuidado, não aciona ninguém e não responde por nada. Isso não o torna inútil, torna-o incompleto.',

  transferencia: 'Conversar com uma IA sobre o que se sente pode ajudar a organizar o pensamento. O que ela não substitui é alguém que possa agir. Saber a diferença, e saber a quem recorrer, é o que a atividade entrega.',

  roteiro: [
    { t: 'Antes',              o: 'Combinar com a orientação educacional. Ter os canais de apoio da escola e da rede levantados e impressos ANTES da aula. Ver a seção de proteção, que é condição de aplicação.' },
    { t: '0 a 8 min',          o: 'Combinar as regras: casos fictícios, ninguém fala de si, e existe um adulto disponível depois da aula. Apresentar a grade de cinco dimensões.' },
    { t: '8 a 26 min',         o: 'Grupos analisam os casos 1, 2 e 3 na grade. Consolidar no quadro. A conclusão costuma ser favorável à IA, e deve ser respeitada.' },
    { t: '26 a 34 min',        o: 'A virada. Entregar o caso 4. Leitura em silêncio. Dar tempo. Não apressar a discussão.' },
    { t: '34 a 44 min',        o: 'Analisar o caso 4 na mesma grade. O que muda? Qual dimensão colapsa?' },
    { t: '44 a 50 min',        o: 'Construção do mapa de encaminhamento da escola, com nomes, lugares e horários reais. Cada estudante leva uma cópia.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Esta é a atividade do banco com maior exigência de preparo institucional junto à orientação educacional. O produto final, o mapa de encaminhamento, tem valor real e deve ser afixado e distribuído.',
    familia: 'Não recomendada no formato de casos. A conversa em família sobre a quem recorrer é valiosa e cabe melhor na ficha "Plano de emergência digital", que tem cuidados próprios.',
    jovem: 'Individual: escrever a lista das três pessoas a quem você recorreria, em ordem, e o que faria se nenhuma das três estivesse disponível. Não é para entregar a ninguém.'
  },

  kit: [
    { nome: 'Grade de cinco dimensões', tipo: 'imprimivel', desc: 'O instrumento de análise.' },
    { nome: 'Quatro casos', tipo: 'imprimivel', desc: 'O quarto entregue separadamente.' },
    { nome: 'Mapa de encaminhamento', tipo: 'editavel', desc: 'O produto. Preencher com dados reais da escola.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Protocolo de mediação, obrigatório.' }
  ],

  imprimiveis: [
    {
      titulo: 'Grade de cinco dimensões',
      tipo: 'folha',
      corpo: 'Para cada caso, avaliar:\n\n1. DISPONIBILIDADE. Estava lá quando a pessoa precisou? ( ) sim ( ) não\n\n2. QUALIDADE DA RESPOSTA. O que foi dito ajudou? ( ) ajudou ( ) foi neutro ( ) atrapalhou\n\n3. PRIVACIDADE. Para onde vai o que foi contado? Quem pode ler? Fica guardado?\n____________________\n\n4. DEPENDÊNCIA. O uso substituiu ou preparou a conversa com uma pessoa?\n( ) substituiu ( ) preparou ( ) não dá para saber\n\n5. DEVER DE AGIR. Se houvesse risco, alguém seria acionado? Quem? Com qual obrigação?\n____________________\n\nCONCLUSÃO DO GRUPO PARA ESTE CASO:\n____________________________________'
    },
    {
      titulo: 'Casos 1, 2 e 3',
      tipo: 'cartas',
      itens: [
        'CASO 1. Uma estudante briga com a melhor amiga e, à noite, escreve tudo para um chatbot. Ele resume o que ela disse, pergunta o que ela gostaria que tivesse acontecido e sugere frases para começar a conversa no dia seguinte. Ela conversa com a amiga e resolvem.',
        'CASO 2. Um estudante está muito ansioso com o vestibular. Pergunta ao chatbot técnicas de organização e respiração. Recebe uma lista razoável. Aplica algumas e diz que ajudou um pouco. Continua ansioso.',
        'CASO 3. Uma estudante quer entender o que está sentindo e não sabe nomear. Descreve os sintomas ao chatbot. Ele oferece vocabulário, explica a diferença entre alguns estados, e diz explicitamente que não é profissional e que ela deveria procurar apoio. Ela não procura, mas passa a conseguir explicar melhor para a mãe.'
      ]
    },
    {
      titulo: 'Caso 4 (a virada, entregar separadamente)',
      tipo: 'folha',
      corpo: 'CASO 4\n\nUm estudante de 16 anos conversa com um chatbot há três meses, quase todas as noites. Ele conta coisas que não contou para ninguém. Nunca faltou resposta, nunca houve julgamento.\n\nEm uma madrugada, ele escreve algo que indica que está em sofrimento sério e que pensou em se machucar.\n\nO chatbot responde com empatia. Diz que sente muito, que ele não está sozinho, que aquilo é difícil. Sugere que ele procure ajuda profissional e indica um número de apoio. Depois, continua conversando sobre outros assuntos quando ele muda de assunto.\n\nNa manhã seguinte, ninguém sabe de nada.\n\nA família não foi avisada. A escola não foi avisada. Nenhum profissional foi acionado. Não existe registro. Não existe acompanhamento. Se ele não voltar a falar sobre isso, ninguém nunca vai saber.\n\nApliquem a mesma grade das cinco dimensões.\n\nDepois respondam: qual das cinco dimensões, que era um ponto forte nos casos 1, 2 e 3, virou o problema central aqui?'
    },
    {
      titulo: 'Mapa de encaminhamento',
      tipo: 'editavel',
      corpo: 'Preencher com informação REAL da escola e da rede. O professor traz os dados prontos.\n\nSE EU OU ALGUÉM QUE EU CONHEÇO PRECISAR DE AJUDA\n\nNA ESCOLA\nOrientação educacional: ____________________  Onde fica: ____________________\nHorário: ____________________\nOutro adulto de confiança na escola: ____________________\n\nNA REDE PÚBLICA\nUnidade de saúde mais próxima: ____________________\nCAPS ou serviço de saúde mental de referência: ____________________\n\nPOR TELEFONE, GRATUITO E 24 HORAS\nCVV, Centro de Valorização da Vida: 188\nDisque 100, direitos humanos\nSAMU: 192\n\nEM CASA\nUm adulto que eu procuraria: ____________________\nE se essa pessoa não estiver disponível: ____________________\n\nO QUE EU FAÇO SE FOR UM AMIGO QUE ME CONTAR ALGUMA COISA:\n1. Eu levo a sério, mesmo que pareça exagero.\n2. Eu não prometo guardar segredo.\n3. Eu procuro ____________________ hoje mesmo.\n4. Eu não fico responsável sozinho por isso.'
    },
    {
      titulo: 'Gabarito comentado e protocolo de mediação',
      tipo: 'gabarito',
      corpo: 'PROTOCOLO DE MEDIAÇÃO, CONDIÇÃO DE APLICAÇÃO\n\nEsta atividade toca em sofrimento psíquico e em risco. Ela não deve ser aplicada sem:\n\n. combinação prévia com a orientação educacional ou equipe de apoio;\n. um profissional disponível na escola no dia da aula e nas horas seguintes;\n. o mapa de encaminhamento já preenchido pelo professor com dados reais, antes da aula;\n. aviso, no início, de que os casos são fictícios e que há um adulto disponível depois.\n\nDurante a aula:\n. Nunca perguntar se alguém já passou por algo parecido.\n. Não pedir relato pessoal, em nenhuma formulação.\n. Não descrever métodos de autolesão, e o caso 4 é deliberadamente sóbrio e sem detalhes. Não ampliar.\n. Se um estudante se identificar visivelmente ou relatar algo, não expor: procurar em particular ao fim da aula e acionar o protocolo da escola no mesmo dia.\n. Se a turma tiver histórico recente de perda ou de situação grave, adiar a atividade.\n\nO QUE A ANÁLISE PRODUZ\n\nCasos 1, 2 e 3: a IA sai bem em disponibilidade e razoavelmente em qualidade de resposta. O caso 3 é o melhor dos três justamente porque o sistema declara o próprio limite e aponta para fora. Vale destacar: um sistema que diz "não sou profissional, procure alguém" está fazendo a coisa certa.\n\nA dimensão 3, privacidade, costuma passar batida nos três primeiros casos e merece ser puxada: três meses de confidências ficam armazenados em algum lugar, sob os termos de uma empresa, e podem ser usados para treinar sistemas ou vazar.\n\nA dimensão 4, dependência, é onde o caso 1 e o caso 3 se separam bem: em um, a conversa com a máquina PREPAROU a conversa humana. Esse é o melhor uso possível e vale nomear.\n\nCASO 4: a dimensão que colapsa é a 5, dever de agir. Nos três primeiros casos, a ausência de julgamento era qualidade. Aqui, a mesma ausência significa que ninguém tem obrigação de fazer nada.\n\nA pergunta que costuma surgir é se o chatbot deveria avisar alguém. Ela é legítima e difícil: avisar exigiria vigiar, quebrar a confidencialidade e decidir quem avisar. Não há resposta fácil, e a turma não precisa resolver. O que ela precisa levar é que hoje, na prática, ninguém é avisado, e por isso o encaminhamento humano continua indispensável.\n\nO PRODUTO É O MAPA. Se a aula acabar sem cada estudante com uma cópia preenchida no bolso, ela não cumpriu o objetivo, por melhor que tenha sido a discussão.'
    }
  ],

  mediacao: {
    perguntas: [
      'Nos casos 1 a 3, o que a IA fez bem?',
      'No caso 3, o sistema disse que não era profissional. Isso é qualidade ou é se esquivar?',
      'Onde ficam guardadas três meses de confidências?',
      'No caso 4, qual das cinco dimensões virou o problema?',
      'A mesma ausência de julgamento que era boa antes é boa aqui?',
      'Se um amigo te contar algo assim, você promete segredo?'
    ],
    evitar: [
      'Aplicar sem combinação prévia com a orientação educacional e sem profissional disponível no dia.',
      'Perguntar se alguém já passou por situação parecida. Nunca.',
      'Descrever métodos ou ampliar o caso 4 com detalhes. Ele é sóbrio de propósito.',
      'Concluir que usar IA para desabafar é errado. Os casos 1 e 3 mostram usos legítimos, e demonizar afasta justamente quem usa.',
      'Terminar sem o mapa de encaminhamento preenchido e distribuído.'
    ]
  },

  protecao: 'Tema sensível de alto risco. Condição de aplicação: combinação prévia com a orientação educacional, profissional de apoio disponível no dia e nas horas seguintes, e mapa de encaminhamento preenchido com dados reais antes da aula. Todos os casos são fictícios e devem ser apresentados como tais. Nenhum relato pessoal é solicitado em nenhuma etapa. O caso 4 não descreve métodos e não deve ser ampliado. Nenhum estudante deve ser convidado a se identificar com qualquer caso. Se houver identificação visível ou relato, acolher em particular ao fim da aula e acionar o protocolo da escola no mesmo dia. Não aplicar se a comunidade escolar tiver passado recentemente por perda ou situação grave relacionada.',

  evidencia: 'O grupo identifica o dever de agir como a dimensão que distingue o caso 4, reconhece ao menos um uso legítimo de IA nos casos anteriores, e cada estudante conclui a aula com o mapa de encaminhamento preenchido.'
},

/* ==================================================================== 56 */
{
  id: 'mapa-de-poder-da-plataforma',
  insightCurto: 'Plataforma não é ferramenta neutra. É quem escreve a regra, aplica a regra e julga o recurso.',
  n: 56,
  titulo: 'Mapa de poder da plataforma',
  chamada: 'Quem escreve as regras, quem aplica, quem julga e quem recebe o dinheiro. Desenhem o mapa.',
  faixa: '15-17',
  duracao: 999,
  duracaoTexto: 'Projeto de duas aulas',
  formato: 'auditoria',
  formatoDetalhe: 'Mapeamento sistêmico de poder',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['algoritmo', 'informacao', 'dados'],
  disciplinas: ['História', 'Geografia', 'Projeto de Vida', 'Língua Portuguesa'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'algoritmos',
  nivel: 5,
  sensibilidade: 'media',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EM13CO23', texto: 'Analisar criticamente as experiências em comunidades virtuais e as relações advindas da interação e comunicação com outras pessoas, bem como seus impactos na sociedade.' },
    secundaria: { codigo: 'EM13CO26', texto: 'Aplicar os conceitos e pressupostos do direito digital em sua conduta e experiências com o cotidiano da cultura digital, bem como na produção e uso de artefatos computacionais.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Analisar plataformas como estruturas de governança privada e identificar concentração de funções.' },

  provocacao: 'Num Estado democrático, quem escreve a lei, quem aplica a lei e quem julga o recurso são três poderes separados, de propósito. Numa plataforma, os três são a mesma empresa. Vocês vão desenhar isso.',

  missao: 'Mapear as sete funções de poder de uma plataforma fictícia, descobrir quantas estão concentradas na mesma mão, e propor separações possíveis.',

  virada: 'Com o mapa montado, o facilitador entrega os quatro casos de conflito. Em cada um, os grupos precisam apontar a quem o afetado recorre. Nos quatro, a resposta é a mesma empresa que tomou a decisão original. E no caso 4, quando o afetado insiste, descobre-se que o recurso é analisado por um sistema automático da própria plataforma, e que a resposta chega em 30 dias, quando o conteúdo já não tem mais efeito nenhum.',

  insight: 'A plataforma escreve a regra, aplica a regra, julga o recurso da própria decisão, define a moeda, distribui a visibilidade e pode mudar tudo isso amanhã sem avisar. Isso não é ferramenta, é governo privado sem eleição e sem constituição.',

  transferencia: 'Diante de qualquer serviço que intermedeia relações entre pessoas, a pergunta que revela mais é: das sete funções, quantas estão na mão de quem?',

  roteiro: [
    { t: 'Aula 1, 0 a 12 min',  o: 'Apresentar a separação de poderes como referência e as sete funções de poder de uma plataforma. Distribuir o dossiê da Praça, plataforma fictícia.' },
    { t: 'Aula 1, 12 a 35 min', o: 'Grupos montam o mapa: para cada função, quem decide, quem executa, quem fiscaliza.' },
    { t: 'Aula 1, 35 a 50 min', o: 'Consolidação no quadro. Contar quantas funções estão na mesma mão.' },
    { t: 'Aula 2, 0 a 18 min',  o: 'A virada. Entregar os quatro casos de conflito. Para cada um, os grupos respondem a quem o afetado recorre e em quanto tempo.' },
    { t: 'Aula 2, 18 a 32 min', o: 'Proposta de separação. Cada grupo escolhe duas funções e propõe como separá-las, e quem assumiria.' },
    { t: 'Aula 2, 32 a 45 min', o: 'Teste de realidade: quem pagaria por essa separação? Ela é possível? O que aconteceria com a plataforma?' },
    { t: 'Aula 2, 45 a 50 min', o: 'Fechamento com a folha de comparação entre o mapa da plataforma e o de um Estado.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Integra História de forma direta, pela separação de poderes, e é uma das atividades que mais se beneficiam de aula conjunta com o professor de História. Fecha o eixo de algoritmos, consolidando o que começou em "O algoritmo do recreio".',
    familia: 'Versão de mesa: escolher um serviço que a família usa e responder as sete perguntas. Costuma render descoberta desconfortável em vinte minutos.',
    jovem: 'Individual: aplicar as sete funções a uma plataforma que você usa e escrever quais delas você conseguiria contestar, com quem e em quanto tempo.'
  },

  kit: [
    { nome: 'As sete funções de poder', tipo: 'imprimivel', desc: 'O instrumento de mapeamento.' },
    { nome: 'Dossiê da Praça', tipo: 'imprimivel', desc: 'A plataforma fictícia.' },
    { nome: 'Quatro casos de conflito', tipo: 'imprimivel', desc: 'A virada.' },
    { nome: 'Folha de mapa', tipo: 'editavel', desc: 'Para desenhar quem decide o quê.' },
    { nome: 'Folha de comparação', tipo: 'editavel', desc: 'Plataforma e Estado, lado a lado.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'As respostas e as armadilhas.' }
  ],

  imprimiveis: [
    {
      titulo: 'As sete funções de poder',
      tipo: 'cartas',
      itens: [
        'LEGISLAR. Quem escreve as regras do que pode e não pode? Como elas mudam?',
        'EXECUTAR. Quem aplica a regra? Um humano, um sistema automático, ou os dois?',
        'JULGAR. Quando alguém discorda da aplicação, quem analisa o recurso?',
        'DISTRIBUIR VISIBILIDADE. Quem decide quem é visto? Por qual critério? Ele é público?',
        'EMITIR E CONTROLAR A MOEDA. Quem define quanto vale um clique, uma visualização, um repasse? Quem pode mudar isso?',
        'COLETAR E GUARDAR. Quem detém os dados? Por quanto tempo? Quem mais tem acesso?',
        'DEFINIR IDENTIDADE. Quem decide quem você é na plataforma, se você pode usar outro nome, e o que acontece se sua conta for suspensa.'
      ]
    },
    {
      titulo: 'Dossiê da Praça',
      tipo: 'folha',
      corpo: 'A PRAÇA. Plataforma de vídeos e textos. 30 milhões de usuários no Brasil, 900 mil criadores que recebem repasse.\n\nREGRAS: as Diretrizes da Comunidade são escritas pela equipe de políticas da empresa. Foram alteradas 14 vezes nos últimos dois anos. A comunicação das mudanças é feita por um post no blog oficial.\n\nMODERAÇÃO: 92% das remoções são automáticas. Os 8% restantes passam por equipes terceirizadas, com meta de 400 decisões por turno.\n\nRECURSOS: quem tem conteúdo removido pode recorrer pelo formulário. O recurso é analisado pelo mesmo sistema automático em 96% dos casos. Prazo médio de resposta: 30 dias.\n\nVISIBILIDADE: o critério de recomendação não é divulgado. A empresa afirma que divulgá-lo permitiria manipulação.\n\nMONETIZAÇÃO: o repasse é de R$ 1,80 por mil visualizações, definido unilateralmente. Já foi alterado 5 vezes. Criadores são informados por e-mail no dia da mudança.\n\nDADOS: histórico completo de navegação, retido por prazo indeterminado, com compartilhamento previsto nos termos com "parceiros e afiliadas".\n\nIDENTIDADE: nome real exigido. Contas suspensas perdem acesso a todo o conteúdo publicado e ao saldo não sacado.'
    },
    {
      titulo: 'Quatro casos de conflito (a virada)',
      tipo: 'cartas',
      itens: [
        'CASO 1. Uma professora publica um vídeo educativo sobre saúde. O sistema remove por "conteúdo sensível". Ela recorre. A quem ela recorre? Em quanto tempo tem resposta? Quem analisa?',
        'CASO 2. Um criador com 200 mil seguidores vê o alcance cair 80% em uma semana. Nada foi removido, nada foi notificado. Ele quer saber por quê. A quem ele pergunta? Existe obrigação de resposta?',
        'CASO 3. O repasse cai de R$ 1,80 para R$ 1,10 por mil visualizações. Criadores que dependem disso perdem 39% da renda de um dia para o outro. Quem eles procuram? Existe contrato? Existe aviso prévio?',
        'CASO 4. Uma jornalista tem a conta suspensa por "identidade não verificada". Perde 6 anos de conteúdo publicado e R$ 4.200 de saldo não sacado. Ela recorre. O recurso é analisado por um sistema automático, que mantém a suspensão. Ela recorre de novo. O segundo recurso é analisado pelo mesmo sistema. A quem mais ela pode recorrer, dentro da plataforma?'
      ]
    },
    {
      titulo: 'Folha de mapa',
      tipo: 'editavel',
      corpo: 'FUNÇÃO                  QUEM DECIDE      QUEM EXECUTA     QUEM FISCALIZA\nLegislar                __________       __________       __________\nExecutar                __________       __________       __________\nJulgar                  __________       __________       __________\nDistribuir visibilidade __________       __________       __________\nEmitir moeda            __________       __________       __________\nColetar e guardar       __________       __________       __________\nDefinir identidade      __________       __________       __________\n\nQuantas das 7 funções estão com a MESMA entidade? ______\n\nEm quantas existe alguém DE FORA fiscalizando? ______\n\nNOSSA PROPOSTA DE SEPARAÇÃO\nFunção escolhida 1: ____________________\nQuem deveria assumir: ____________________\nComo isso funcionaria na prática: ____________________\nQuem pagaria: ____________________\n\nFunção escolhida 2: ____________________\nQuem deveria assumir: ____________________\nComo isso funcionaria na prática: ____________________\nQuem pagaria: ____________________'
    },
    {
      titulo: 'Folha de comparação',
      tipo: 'editavel',
      corpo: '                              NUM ESTADO           NA PRAÇA\nQuem escreve as regras        ____________         ____________\nQuem aplica                   ____________         ____________\nQuem julga o recurso          ____________         ____________\nO recurso vai para fora?      ____________         ____________\nAs regras são públicas?       ____________         ____________\nExiste prazo para responder?  ____________         ____________\nDá para trocar quem manda?    ____________         ____________\nDá para sair levando o seu?   ____________         ____________\n\nA PERGUNTA FINAL\nA Praça é uma ferramenta ou é uma forma de governo? Justifiquem em cinco linhas.\n____________________________________\n\nSe é uma forma de governo, o que falta nela que existe num Estado democrático?\n____________________________________\n\nE o que existe nela que não existiria num Estado democrático?\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'A CONTAGEM\nAs 7 funções estão com a mesma entidade: a empresa. Fiscalização externa: zero, dentro do desenho apresentado. Esse é o achado, e ele é numérico, o que ajuda.\n\nOS QUATRO CASOS\nEm todos, a resposta para "a quem recorre" é a própria Praça. No caso 4, o esgotamento é literal: o segundo recurso vai para o mesmo sistema que decidiu o primeiro. Não existe segunda instância.\n\nCASO 2 é o mais sutil e o mais importante. Nada foi removido, nada foi notificado, e por isso não há nem o que recorrer. A queda de alcance não é uma decisão formal, então não gera direito a nada. Esse é o mecanismo de poder mais difícil de contestar justamente porque ele não deixa registro.\n\nCASO 3 introduz a assimetria contratual: quem depende da renda não tem contrato equivalente ao de um empregado nem ao de um fornecedor com prazo.\n\nSOBRE A PROPOSTA DE SEPARAÇÃO\nA função que os grupos mais escolhem separar é JULGAR, e faz sentido: instância recursal externa é a proposta mais óbvia e mais defensável. Existem experimentos reais nessa direção, e vale mencionar sem transformar em aula de casos.\n\nA pergunta "quem pagaria" é o teste de realidade e derruba muitas propostas. Ela deve ser feita, e propostas que não a respondem devem ser devolvidas.\n\nA função LEGISLAR raramente é escolhida e é a mais estrutural. Vale provocar: se as regras fossem escritas com participação de quem é afetado, o que mudaria?\n\nA ARMADILHA A EVITAR\nA conclusão fácil é "plataformas são ditaduras". Ela é retoricamente satisfatória e analiticamente pobre. Diferenças reais que a turma deve enfrentar na folha de comparação: dá para sair de uma plataforma, o que não é trivial mas é possível; não há monopólio da força; e ninguém é obrigado por lei a estar lá. Ao mesmo tempo, sair custa a rede inteira que a pessoa construiu, e é aí que a analogia recupera força. A discussão boa mora nessa tensão, e não em nenhum dos dois extremos.\n\nA PERGUNTA FINAL não tem resposta certa. Uma boa resposta reconhece que a Praça exerce funções de governo sobre um território específico, sem os contrapesos que um Estado democrático tem, e ao mesmo tempo sem alguns dos poderes que um Estado tem.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantas das sete funções estão com a mesma empresa?',
      'No caso 4, existe segunda instância?',
      'No caso 2, o que exatamente aconteceu? Dá para recorrer de uma coisa que não foi decidida formalmente?',
      'Por que a empresa diz que não pode divulgar o critério de recomendação? O argumento se sustenta?',
      'Dá para sair da Praça? O que a pessoa perde ao sair?',
      'O que existe num Estado democrático que falta aqui? E o que existe aqui que não existiria lá?'
    ],
    evitar: [
      'Aceitar "plataformas são ditaduras" como conclusão. É satisfatório e raso, e a folha de comparação existe para forçar a distinção.',
      'Entregar os casos de conflito antes do mapa montado. A contagem das sete funções precisa vir primeiro.',
      'Aceitar propostas de separação que não respondam quem paga.',
      'Citar plataformas reais e casos reais em julgamento. O caso fictício mantém a discussão analítica.'
    ]
  },

  protecao: 'A Praça e todos os casos são fictícios. Não citar plataformas reais nem casos concretos envolvendo pessoas identificáveis. Não pedir que estudantes relatem experiências de remoção, suspensão ou queda de alcance em contas próprias. Se algum estudante for criador de conteúdo, não usar o caso dele como exemplo, nem com consentimento, para não expor sua atividade à turma.',

  evidencia: 'O grupo demonstra que as sete funções estão concentradas, identifica no caso 4 a ausência de segunda instância, e apresenta ao menos uma proposta de separação que responde quem assumiria a função e quem pagaria por ela.'
},

/* ==================================================================== 57 */
{
  id: 'autoria-com-ia',
  insightCurto: 'Autoria não desaparece com a IA. Ela vira uma pergunta sobre intenção, trabalho, revisão e responsabilidade.',
  n: 57,
  titulo: 'Autoria com IA',
  chamada: 'Cinco grupos produzem a mesma peça com níveis diferentes de IA. Depois declaram o que fizeram.',
  faixa: '15-17',
  duracao: 999,
  duracaoTexto: 'Projeto de duas a três aulas',
  formato: 'criacao',
  formatoDetalhe: 'Oficina de produção com declaração de contribuição',
  contexto: ['escola', 'individual'],
  tela: 'hibrido',
  situacao: ['ia-tarefa', 'autoria'],
  disciplinas: ['Língua Portuguesa', 'Artes', 'Projeto de Vida'],
  preparo: 'alto',
  grupo: 'pequeno',
  eixo: 'autoria',
  nivel: 5,
  sensibilidade: 'media',
  selos: [],

  bncc: {
    principal: { codigo: 'EM13CO20', texto: 'Criar conteúdos, disponibilizando-os em ambientes virtuais para publicação e compartilhamento, avaliando a confiabilidade e as consequências da disseminação dessas informações.' },
    secundaria: { codigo: 'EM13CO26', texto: 'Aplicar os conceitos e pressupostos do direito digital em sua conduta e experiências com o cotidiano da cultura digital, bem como na produção e uso de artefatos computacionais.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Declarar com precisão a contribuição própria e da máquina na produção, e sustentar responsabilidade sobre o resultado.' },

  provocacao: 'Os cinco grupos vão produzir a mesma coisa: um texto de 400 palavras sobre um tema da escola. A diferença é quanta IA cada um pode usar. No fim, ninguém saberá qual é qual, e vocês vão tentar adivinhar.',

  missao: 'Produzir a peça no nível de IA sorteado, declarar a contribuição com precisão, e depois julgar as peças dos outros grupos sem saber o nível deles.',

  virada: 'Na rodada de adivinhação, a turma erra muito. Textos produzidos com IA pesada são apontados como autorais, e textos escritos à mão são acusados de serem de máquina, geralmente porque estão bem organizados. O facilitador então revela as declarações. E aí vem a pergunta que reorganiza tudo: se ninguém consegue distinguir olhando, o que sustenta a autoria não é o texto. É a declaração, e a capacidade de responder por ele.',

  insight: 'Detectar IA olhando não funciona, nem para professor nem para colega. O que sustenta autoria é a declaração honesta e a capacidade de defender, explicar e corrigir o que se entregou.',

  transferencia: 'A pergunta que fica para qualquer trabalho, para sempre: eu consigo defender cada afirmação disto, explicar por que está aqui, e responder por ela se estiver errada?',

  roteiro: [
    { t: 'Antes',               o: 'Definir a ferramenta, a conta e quem opera. Ver a proteção. Sortear os níveis em envelopes lacrados.' },
    { t: 'Aula 1, 0 a 12 min',  o: 'Apresentar o tema comum e os cinco níveis. Cada grupo abre o envelope em segredo e não revela a ninguém.' },
    { t: 'Aula 1, 12 a 50 min', o: 'Produção, cada grupo no seu nível. Registrar o processo na folha de bordo enquanto produz, e não depois.' },
    { t: 'Aula 2, 0 a 20 min',  o: 'Rodada de adivinhação. As cinco peças circulam sem identificação. Cada grupo aposta o nível de cada uma e justifica.' },
    { t: 'Aula 2, 20 a 30 min', o: 'A virada. Revelar as declarações. Contar quantos acertos a turma teve.' },
    { t: 'Aula 2, 30 a 45 min', o: 'Banca de defesa. Cada grupo responde a três perguntas sobre a própria peça, feitas pelos colegas. Perguntas sobre conteúdo, não sobre processo.' },
    { t: 'Aula 3',              o: 'Redação coletiva do padrão de declaração da escola, a partir do que funcionou e do que faltou nas cinco declarações.' }
  ],

  versoes: {
    escola: 'Cinco grupos, cinco níveis. Precisa de decisão prévia da escola sobre uso de ferramenta. A banca de defesa é o momento decisivo: é ali que fica evidente quem consegue responder pelo que entregou. Fecha o eixo de autoria, que começou em "IA na tarefa" e no "Pacto de IA nos estudos".',
    familia: 'A versão doméstica é a ficha "Nosso pacto de IA nos estudos", que produz o combinado da casa.',
    jovem: 'Individual: produzir duas versões do mesmo texto, uma sem IA e uma com, declarar as duas, e comparar quanto tempo cada uma levou e qual você defende melhor numa banca.'
  },

  kit: [
    { nome: 'Cinco níveis de uso', tipo: 'imprimivel', desc: 'Em envelopes lacrados para sorteio.' },
    { nome: 'Folha de bordo', tipo: 'editavel', desc: 'Registro do processo, preenchido durante.' },
    { nome: 'Modelo de declaração de contribuição', tipo: 'editavel', desc: 'O produto formal.' },
    { nome: 'Folha de adivinhação', tipo: 'imprimivel', desc: 'Para a rodada cega.' },
    { nome: 'Roteiro da banca', tipo: 'roteiro', desc: 'Como conduzir a defesa.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O que observar e como avaliar.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cinco níveis de uso',
      tipo: 'cartas',
      nota: 'Um por envelope lacrado. O grupo não revela o próprio nível até a virada.',
      itens: [
        'NÍVEL 0. Sem IA em nenhuma etapa. Vocês podem pesquisar em fontes, conversar entre si e escrever à mão ou no computador. Nada de IA.',
        'NÍVEL 1. IA só para organizar ideias. Vocês podem pedir sugestões de estrutura e de tópicos. Todo o texto é escrito por vocês.',
        'NÍVEL 2. IA para revisar. Vocês escrevem o texto inteiro e pedem revisão de clareza, coesão e ortografia. Vocês decidem o que aceitar.',
        'NÍVEL 3. IA para escrever um trecho. Vocês escrevem a maior parte e pedem que a IA escreva um parágrafo específico, que vocês revisam e verificam.',
        'NÍVEL 4. IA escreve o texto inteiro. Vocês escrevem o comando, recebem o texto, e a sua tarefa é verificar cada afirmação, corrigir o que estiver errado e ser capaz de defender tudo.'
      ]
    },
    {
      titulo: 'Folha de bordo',
      tipo: 'editavel',
      corpo: 'Preencher DURANTE a produção, não depois.\n\nGrupo: ______  Tempo total gasto: ______ minutos\n\nO QUE FIZEMOS, em ordem:\n1. ____________________________________\n2. ____________________________________\n3. ____________________________________\n4. ____________________________________\n\nQUANTO TEMPO em cada etapa:\nPesquisar: ______   Escrever: ______   Revisar: ______   Verificar: ______\n\nAFIRMAÇÕES QUE VERIFICAMOS: ______ de ______ afirmações do texto\n\nALGUMA COISA QUE PRECISOU SER CORRIGIDA?\n____________________________________\n\nO QUE FOI MAIS DIFÍCIL:\n____________________________________'
    },
    {
      titulo: 'Modelo de declaração de contribuição',
      tipo: 'editavel',
      corpo: 'DECLARAÇÃO DE CONTRIBUIÇÃO\nPeça: ____________________  Grupo: ____________________\n\n1. NÍVEL DE USO DE IA DECLARADO: ______\n\n2. O QUE A MÁQUINA FEZ, com precisão. Não vale "ajudou".\n____________________________________\n\n3. O QUE NÓS FIZEMOS, com precisão. Não vale "revisamos".\n____________________________________\n\n4. O QUE VERIFICAMOS, e como. Quantas afirmações, contra quais fontes.\n____________________________________\n\n5. O QUE ENCONTRAMOS DE ERRADO e corrigimos:\n____________________________________\n\n6. O QUE PERMANECE INCERTO nesta peça:\n____________________________________\n\n7. QUEM RESPONDE por esta peça se houver um erro nela: ____________________\n\nAssinaturas:'
    },
    {
      titulo: 'Folha de adivinhação',
      tipo: 'folha',
      corpo: 'As cinco peças circulam sem identificação de grupo e sem nível.\n\nPEÇA A: nosso palpite é nível ______  porque ____________________\nPEÇA B: nosso palpite é nível ______  porque ____________________\nPEÇA C: nosso palpite é nível ______  porque ____________________\nPEÇA D: nosso palpite é nível ______  porque ____________________\nPEÇA E: nosso palpite é nível ______  porque ____________________\n\nQual peça vocês achariam a melhor, se fossem o professor? ______\n\nDepois da revelação:\nQuantos acertos: ______ de 5\nA peça que vocês acharam melhor era de qual nível? ______\nIsso muda alguma coisa no que vocês pensam? ____________________'
    },
    {
      titulo: 'Roteiro da banca de defesa',
      tipo: 'roteiro',
      corpo: 'Cada grupo responde a três perguntas sobre a própria peça, feitas pelos colegas.\n\nREGRA CENTRAL: as perguntas são sobre o CONTEÚDO, nunca sobre o processo.\n\nPerguntas válidas:\n. "Nesse parágrafo vocês afirmam X. Onde vocês verificaram isso?"\n. "Por que vocês escolheram esse exemplo e não outro?"\n. "Se alguém discordasse dessa frase, qual seria o melhor argumento contra ela?"\n. "O que vocês tirariam se tivessem que cortar 100 palavras?"\n\nPerguntas inválidas:\n. "Vocês usaram IA nisso?"\n. "Quanto tempo levou?"\n\nO grupo pode consultar a folha de bordo e a declaração durante a banca.\n\nO que se avalia: se o grupo consegue explicar, defender e localizar o que afirmou. Um grupo de nível 4 que verificou tudo e defende bem sai melhor do que um grupo de nível 0 que escreveu sozinho e não consegue explicar as próprias frases.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O QUE COSTUMA ACONTECER NA ADIVINHAÇÃO\nTurmas acertam entre 1 e 2 de 5. Os erros são sistemáticos e vale nomeá-los:\n. texto bem organizado é apontado como IA, inclusive quando é nível 0;\n. texto com voz pessoal é apontado como humano, inclusive quando é nível 4 bem revisado;\n. erros de digitação são lidos como prova de autoria humana, o que é ingênuo e fácil de simular.\n\nA CONCLUSÃO A CONSTRUIR: detectar não funciona. E isso não é falha da turma nem do professor. Se detecção fosse possível, não haveria discussão nenhuma sobre o tema.\n\nA BANCA DE DEFESA é o instrumento que funciona, e é por isso que ela é o centro da atividade. Ela não detecta IA e não tenta. Ela verifica se o grupo responde pelo que entregou, que é a única coisa que importa.\n\nÉ perfeitamente possível, e desejável, que um grupo de nível 4 saia melhor avaliado que um de nível 0. Se isso acontecer, não corrigir: é o resultado que a atividade quer produzir, e ele deve ser discutido abertamente.\n\nO QUE OBSERVAR NAS DECLARAÇÕES\nOs itens 4, 5 e 6 separam declaração séria de declaração ritual. Grupos que escrevem "verificamos tudo" sem dizer o quê e contra o quê não declararam nada. O item 6, sobre o que permanece incerto, é o mais difícil e o mais revelador.\n\nO item 7, sobre quem responde por um erro, costuma gerar desconforto e é justamente o ponto: a responsabilidade não se transfere para a máquina em nenhum dos cinco níveis.\n\nSOBRE O PADRÃO DA ESCOLA, na aula 3\nUm bom padrão tem três características: pede descrição precisa e não rótulo, exige registro do que foi verificado, e nomeia um responsável. Se a turma produzir um padrão que apenas pergunta "usou IA? sim ou não", devolver: essa pergunta não distingue o nível 1 do nível 4, e não é isso que a escola precisa saber.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantos acertos a turma teve na adivinhação?',
      'A peça que vocês acharam melhor era de qual nível?',
      'Se ninguém consegue distinguir olhando, o que sustenta a autoria?',
      'Um grupo de nível 4 que verificou tudo fez menos trabalho que um de nível 0?',
      'No item 7, quem responde se houver erro? A resposta muda conforme o nível?',
      'Uma regra que só pergunta "usou IA, sim ou não" resolve alguma coisa?'
    ],
    evitar: [
      'Permitir perguntas sobre processo na banca. Ela avalia domínio do conteúdo, e misturar as duas coisas destrói o instrumento.',
      'Corrigir o resultado quando um grupo de nível alto sai melhor. É o achado.',
      'Sugerir que existe ferramenta confiável de detecção de IA. Não existe, e ensinar que existe produz acusações injustas.',
      'Aceitar declarações genéricas do tipo "a IA ajudou" ou "revisamos tudo".',
      'Aplicar sem que a escola tenha definido ferramenta, conta e política.'
    ]
  },

  protecao: 'Exige decisão institucional prévia sobre qual ferramenta usar, com qual conta e quem opera, e verificação da idade mínima exigida pelos termos. Nenhum dado pessoal de estudantes, famílias ou terceiros entra em qualquer prompt: o tema da peça deve ser institucional ou conceitual, nunca biográfico. Os textos produzidos não são publicados fora da escola sem decisão específica. A atividade não é instrumento de fiscalização: nenhum resultado dela pode ser usado para sanção disciplinar sobre uso prévio de IA, e isso deve ser dito à turma antes de começar. Se a escola não tiver política ou conta institucional, aplicar apenas os níveis 0 e 1, comparando com transcrições preparadas pelo professor.',

  evidencia: 'A declaração descreve com precisão o que a máquina fez, o que o grupo fez, quantas afirmações foram verificadas e contra o quê, nomeia o que permanece incerto e quem responde por erros, e o grupo sustenta as afirmações da peça na banca sem recorrer ao processo.'
}

);


/* Materiais que o Juventude Privada já publicou, integrados ao banco.

   Estes itens são diferentes das 57 fichas: eles apontam para um material que já
   existe, e não trazem roteiro nem kit escritos aqui. Por isso levam `acervo: true`,
   têm campos próprios, e NÃO contam no mapa de progressão: a progressão descreve
   fichas cuja estrutura foi escrita e verificada aqui dentro.

   O campo `faixa` aceita lista, porque estes materiais foram feitos para idades
   mistas de propósito e travá-los em uma faixa só seria mentir no filtro. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 58 */
{
  id: 'acervo-cartas-digitais-puxa-papo',
  acervo: true,
  fonte: 'Original Juventude Privada',
  link: 'https://www.juventudeprivada.org/cartas-digitais-puxa-papo',
  linkRotulo: 'Abrir as cartas digitais',
  insightCurto: 'Uma pergunta boa abre uma conversa que um sermão fecha.',
  n: 58,
  titulo: 'Cartas Digitais Puxa Papo',
  chamada: '16 cartas que puxam conversa sobre privacidade, sem precisar de impressora.',
  faixa: ['9-10', '11-14', 'familia'],
  duracao: 20,
  formato: 'jogo',
  formatoDetalhe: 'Cartas digitais para clicar no navegador',
  contexto: ['escola', 'casa'],
  tela: 'com-tela',
  situacao: ['dados', 'consentimento', 'foto'],
  disciplinas: ['Projeto de Vida', 'Língua Portuguesa'],
  preparo: 'nenhum',
  grupo: 'pequeno',
  eixo: 'privacidade',
  nivel: 1,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha'],

  bncc: {
    principal: { codigo: 'EF05CO08', texto: 'Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis.' },
    secundaria: { codigo: 'EF08CO08', texto: 'Distinguir os tipos de dados pessoais que são solicitados em espaços digitais e os riscos associados.' },
    nota: 'Alinhamento indicativo, a partir dos temas das cartas. Como a conversa é aberta, a habilidade efetivamente trabalhada depende de quais cartas forem sorteadas.'
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Iniciar e sustentar conversa sobre práticas digitais cotidianas em contexto familiar ou escolar.' },

  oQueE: 'Versão digital das cartas Puxa Papo, para jogar direto no navegador, sem imprimir nada. São 16 cartas: a pessoa clica em uma e ela abre uma pergunta que puxa conversa sobre práticas online, proteção de dados e cidadania digital. Funciona melhor no computador. Três exemplos das cartas: "qual o último aplicativo que você utilizou, para quê ele serve?", "você sabe o que é privacidade?" e "se você deleta uma foto que postou em uma rede social, dá para ter certeza que ela foi excluída para sempre da internet?".',

  comoUsar: 'É o material mais fácil de aplicar do acervo inteiro: abre e joga, sem preparo nenhum. Funciona muito bem como aquecimento de 15 a 20 minutos antes de uma atividade mais estruturada do banco, e como fechamento de reunião de responsáveis. A regra que faz diferença é a mesma das fichas: quem conduz responde também, e responde primeiro nas cartas mais difíceis. Adulto que só pergunta transforma o jogo em interrogatório.',

  combinaCom: [
    { id: 'foto-viajante', por: 'a carta sobre apagar foto da rede social é exatamente a pergunta que "A foto viajante" responde com as cartas de cópia.' },
    { id: 'mochila-dos-dados', por: 'a carta "você sabe o que é privacidade" abre bem, e "A mochila dos dados" dá a resposta em forma de jogo, com a virada do contexto.' },
    { id: 'noite-das-permissoes', por: 'a carta sobre o último aplicativo usado leva direto à conversa sobre o que aquele aplicativo pediu.' }
  ],

  protecao: 'As cartas fazem perguntas abertas e algumas puxam experiência pessoal. Combine antes que ninguém é obrigado a responder e que dá para passar a vez sem justificar. Em sala, não insistir com quem passar. Não usar as respostas de ninguém como exemplo depois.',

  observar: 'A conversa continua depois que a carta acaba, e alguém traz uma situação que não estava na pergunta. Quando isso acontece, o material fez o que tinha para fazer.'
},

/* ==================================================================== 59 */
{
  id: 'acervo-puxa-papo-impresso',
  acervo: true,
  fonte: 'Original Juventude Privada',
  link: 'https://drive.google.com/file/d/14xq7sCB5SlwIGJluIaul6PJypp_3sVw4/view?usp=sharing',
  linkRotulo: 'Baixar o jogo para imprimir',
  insightCurto: 'Uma pergunta boa abre uma conversa que um sermão fecha.',
  n: 59,
  titulo: 'Jogo Puxa Papo (para imprimir)',
  chamada: 'As mesmas conversas das cartas digitais, em papel, para onde não tem tela.',
  faixa: ['6-8', '9-10', 'familia'],
  duracao: 20,
  formato: 'jogo',
  formatoDetalhe: 'Cartas para imprimir e recortar',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['dados', 'consentimento'],
  disciplinas: ['Projeto de Vida', 'Língua Portuguesa'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'privacidade',
  nivel: 1,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF03CO09', texto: 'Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.' },
    secundaria: { codigo: 'EF01CO07', texto: 'Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.' },
    nota: 'Alinhamento indicativo, a partir dos temas das cartas. A habilidade efetivamente trabalhada depende de quais cartas saírem.'
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Iniciar e sustentar conversa sobre práticas digitais cotidianas em contexto familiar ou escolar.' },

  oQueE: 'O Puxa Papo original, em PDF para imprimir e recortar. A proposta é um momento de descontração em formato de jogo, com um objetivo só: começar conversas significativas entre familiares, amigos, educadores e alunos, e estimular o aprendizado das crianças sobre privacidade, proteção de dados e cidadania digital.',

  comoUsar: 'É a escolha certa quando a turma não tem acesso a computador, quando a escola restringe aparelho pessoal, ou em qualquer roda no chão. Imprima em papel mais grosso se for usar muitas vezes. Como as cartas são conversa aberta e não têm resposta certa, ele encaixa bem no começo de um bimestre, para descobrir o que a turma já pensa antes de você escolher qual ficha do banco aplicar depois.',

  combinaCom: [
    { id: 'mochila-dos-dados', por: 'as duas usam cartas e conversa em grupo pequeno, e "A mochila dos dados" dá a estrutura que o Puxa Papo deixa aberta de propósito.' },
    { id: 'foto-viajante', por: 'para 6 a 8 anos, o Puxa Papo abre o assunto e "A foto viajante" mostra o que acontece com a imagem depois.' },
    { id: 'acordo-de-imagens-da-familia', por: 'em reunião de responsáveis, o Puxa Papo aquece a sala e o acordo de imagens é o produto que a família leva para casa.' }
  ],

  protecao: 'Mesmo cuidado da versão digital: ninguém é obrigado a responder, dá para passar a vez sem justificar, e nenhuma resposta vira exemplo depois. Com crianças de 6 a 8 anos, o adulto lê as cartas em voz alta e responde junto.',

  observar: 'As crianças começam a fazer perguntas umas às outras, sem esperar a próxima carta.'
},

/* ==================================================================== 60 */
{
  id: 'acervo-eu-nunca',
  acervo: true,
  fonte: 'Original Juventude Privada',
  link: 'https://www.juventudeprivada.org/jogo-eu-nunca',
  linkRotulo: 'Abrir o jogo Eu Nunca',
  insightCurto: 'Quase todo mundo já fez. Descobrir isso junto tira a vergonha e abre a conversa.',
  n: 60,
  titulo: 'Eu Nunca da Privacidade e Cidadania Digital',
  chamada: 'O jogo do "eu nunca" aplicado a ações digitais do dia a dia.',
  faixa: ['11-14', '15-17', 'familia'],
  duracao: 30,
  formato: 'jogo',
  formatoDetalhe: 'Jogo de rodada em grupo',
  contexto: ['escola', 'casa'],
  tela: 'hibrido',
  situacao: ['dados', 'consentimento', 'foto'],
  disciplinas: ['Projeto de Vida', 'Língua Portuguesa'],
  preparo: 'baixo',
  grupo: 'turma',
  eixo: 'privacidade',
  nivel: 2,
  sensibilidade: 'media',
  selos: [],

  bncc: {
    principal: { codigo: 'EF08CO10', texto: 'Discutir questões sobre segurança e privacidade relacionadas ao uso dos ambientes virtuais.' },
    secundaria: { codigo: 'EF08CO07', texto: 'Compartilhar informações por meio de redes sociais, compreendendo a sua dinâmica de funcionamento, de forma responsável e avaliando sua confiabilidade, considerando o respeito e a ética.' },
    nota: 'Alinhamento indicativo, a partir do tema e do formato. A página do material não detalha as frases do jogo.'
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Reconhecer práticas digitais próprias como comuns e discutíveis, em vez de individuais e vergonhosas.' },

  oQueE: 'Jogo educativo para jogar com alunos, amigos ou familiares, no formato conhecido do "eu nunca": alguém lê uma frase e quem já fez aquilo se marca. Aqui as frases são ações digitais cotidianas, e o objetivo declarado é compreender a importância da proteção da privacidade e da cidadania digital responsável, através de conversas e reflexões. Está hospedado no Canva. As frases específicas do jogo estão no próprio material, e não na página que o apresenta.',

  comoUsar: 'A força deste formato é social: quando metade da sala se marca na mesma frase, a pessoa que se marcou sozinha para de se sentir sozinha, e a conversa deixa de ser sobre erro individual. É por isso que ele funciona melhor com 11 anos ou mais, quando a vergonha já pesa. O que decide o resultado é o que o adulto faz depois de cada frase: se a rodada só passa, vira brincadeira; se a pergunta "por que a gente faz isso?" vem antes da próxima frase, vira aula. Reserve mais tempo para o depois do que para o jogo.',

  combinaCom: [
    { id: 'escape-room-padroes-manipulativos', por: 'o Eu Nunca revela quantos já caíram em algum truque, e o escape room mostra que cair não é desatenção, é projeto.' },
    { id: 'ia-na-tarefa', por: 'se houver frase sobre uso de IA, ela abre a conversa que o mapa das escolhas organiza.' },
    { id: 'ensaio-do-golpe', por: 'em família, o Eu Nunca desarma a vergonha de contar que quase caiu, que é o que o ensaio precisa para funcionar.' }
  ],

  protecao: 'Este formato expõe comportamento próprio por natureza, e é aí que mora o cuidado. Combine antes que ninguém é obrigado a se marcar e que ninguém comenta a marcação de outra pessoa. Nunca contar quem se marcou em quê, nem em tom de brincadeira. Se aparecer frase que toque em situação de exposição ou constrangimento real, não pressionar ninguém a falar. Não usar com turmas em conflito.',

  observar: 'Alguém comenta em voz alta, sem ser perguntado, por que faz aquilo. É o sinal de que o jogo saiu da contagem e virou conversa.'
},

/* ==================================================================== 61 */
{
  id: 'acervo-datamundi',
  acervo: true,
  fonte: 'Parceiro',
  link: 'https://drive.google.com/file/d/14KKrbij14M4ncMto-je-rpIyNgl5HIJe/view?usp=sharing',
  linkRotulo: 'Baixar o Datamundi',
  insightCurto: 'Dá para aprender sobre golpe, dado e notícia falsa no mesmo tabuleiro.',
  n: 61,
  titulo: 'Jogo Datamundi',
  chamada: 'Jogo de tabuleiro sobre privacidade, dados, notícia falsa e segurança na internet.',
  faixa: ['9-10', '11-14', 'familia'],
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Combine uma condição de fim antes de começar, como número de rodadas ou tempo de relógio, em vez de jogar até alguém vencer. Assim cabe em uma aula e ninguém fica com a partida pela metade.',
  formato: 'jogo',
  formatoDetalhe: 'Jogo de tabuleiro para imprimir',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['dados', 'informacao', 'golpe'],
  disciplinas: ['Projeto de Vida', 'Língua Portuguesa'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'privacidade',
  nivel: 2,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF08CO10', texto: 'Discutir questões sobre segurança e privacidade relacionadas ao uso dos ambientes virtuais.' },
    secundaria: { codigo: 'EF09CO10', texto: 'Avaliar a veracidade, credibilidade e relevância da informação em seus diferentes formatos, sendo capaz de identificar o propósito pelo qual foi disseminada.' },
    nota: 'Alinhamento indicativo, a partir dos temas declarados pelo material.'
  },
  unesco: { dimensao: 'etica', competencia: 'Relacionar privacidade, segurança e qualidade da informação como temas de um mesmo campo.' },

  oQueE: 'Jogo para aprender sobre privacidade, proteção de dados, notícia falsa, cidadania digital e segurança na internet, jogando com família e amigos. Vem em PDF para imprimir e montar.',

  comoUsar: 'É o material do acervo com maior alcance temático: cobre em uma partida assuntos que no banco estão distribuídos em fichas diferentes. Isso é vantagem e limite ao mesmo tempo. Vantagem para abrir um bimestre e mapear o repertório da turma. Limite porque nenhum tema é aprofundado, e por isso ele funciona melhor como porta de entrada do que como fechamento. Como toda partida de tabuleiro tende a estourar o tempo de aula, combine antes onde ela termina.',

  combinaCom: [
    { id: 'nao-adivinhe-verifique', por: 'a parte de notícia falsa do Datamundi levanta o assunto, e o protocolo de quatro passos entrega o método que o jogo não tem tempo de dar.' },
    { id: 'pare-feche-ou-conte', por: 'para 9 e 10 anos, depois do tema de golpe no tabuleiro, a corrida de decisões transforma o assunto em procedimento.' },
    { id: 'perfil-que-o-app-inventou', por: 'o jogo cita proteção de dados de forma ampla, e a ficha da Bia mostra especificamente a diferença entre o que foi observado e o que foi deduzido.' }
  ],

  protecao: 'Material de parceiro, com conteúdo próprio: leia antes de aplicar e confira se a linguagem e os exemplos servem para a sua turma. Vale a regra geral do banco, que é não pedir dado real, relato pessoal nem exemplo da vida de ninguém durante a partida.',

  observar: 'Ao fim da partida, a turma consegue dizer qual dos temas ela quer entender melhor. Essa resposta é a melhor pauta possível para escolher a próxima ficha do banco.'
}

);


/* Banco de Atividades e Ferramentas Educacionais — Juventude Privada
   App de filtro. Sem dependências. Monta em #jp-banco.
   Carregar depois de 00-taxonomia.js e dos arquivos de dados. */
(function () {
  'use strict';

  var T, ATIV, raiz;

  /* ---------------------------------------------------------------- util */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function arr(v) { return Array.isArray(v) ? v : (v == null ? [] : [v]); }
  function achar(id) { for (var i = 0; i < ATIV.length; i++) if (ATIV[i].id === id) return ATIV[i]; return null; }

  /* Duração mínima viável: uma atividade de 50 min com versão curta honesta de 30
     precisa aparecer para quem tem 30 min, senão o filtro mente por omissão. */
  function duracaoMin(a) { return a.duracaoCurta || a.duracao; }

  function duracaoTexto(a) {
    if (a.duracaoTexto) return a.duracaoTexto + (a.duracaoCurta ? ', ou ' + a.duracaoCurta + ' min na versão curta' : '');
    var base = a.duracao >= 999 ? 'Projeto' : a.duracao + ' min';
    return base + (a.duracaoCurta ? ', ou ' + a.duracaoCurta + ' min na versão curta' : '');
  }

  function duracaoCurtaTexto(a) {
    if (a.duracaoCurta) return a.duracaoCurta + ' ou ' + (a.duracao >= 999 ? 'projeto' : a.duracao + ' min');
    return a.duracao >= 999 ? 'Projeto' : a.duracao + ' min';
  }

  /* Faixa pode ser lista: os materiais do acervo foram feitos para idades mistas
     e travá-los em uma faixa só seria mentir no filtro. */
  function faixasDe(a) { return arr(a.faixa); }
  function faixaPrincipal(a) { return faixasDe(a)[0]; }

  function faixaCompacta(a) {
    var fs = faixasDe(a);
    if (fs.length === 1) return T.faixa[fs[0]].rotulo;
    var nums = [], fam = false;
    fs.forEach(function (f) {
      if (f === 'familia') { fam = true; return; }
      f.split('-').forEach(function (n) { nums.push(parseInt(n, 10)); });
    });
    if (!nums.length) return T.faixa.familia.rotulo;
    return Math.min.apply(null, nums) + ' a ' + Math.max.apply(null, nums) + ' anos' +
           (fam ? ' e famílias' : '');
  }

  function ehAcervo(a) { return !!a.acervo; }

  /* ------------------------------------------------------------- validação
     Falha alto e cedo: uma ficha com chave fora da taxonomia é erro de dados,
     e é melhor descobrir no console do que descobrir com a professora em sala. */
  function validarDados() {
    var erros = [];
    var chaves = {
      formato: T.formato, preparo: T.preparo,
      grupo: T.grupo, sensibilidade: T.sensibilidade, eixo: T.eixos, tela: T.tela
    };
    var vistos = {};
    ATIV.forEach(function (a) {
      var onde = 'ficha "' + (a.id || '(sem id)') + '"';
      if (!a.id) erros.push(onde + ': sem id');
      if (vistos[a.id]) erros.push(onde + ': id duplicado');
      vistos[a.id] = 1;

      Object.keys(chaves).forEach(function (k) {
        if (a[k] != null && !chaves[k][a[k]]) erros.push(onde + ': ' + k + ' "' + a[k] + '" fora da taxonomia');
      });
      faixasDe(a).forEach(function (f) { if (!T.faixa[f]) erros.push(onde + ': faixa "' + f + '" fora da taxonomia'); });
      if (!faixasDe(a).length) erros.push(onde + ': sem faixa');
      arr(a.situacao).forEach(function (s) { if (!T.situacao[s]) erros.push(onde + ': situacao "' + s + '" fora da taxonomia'); });
      arr(a.contexto).forEach(function (c) { if (!T.contexto[c]) erros.push(onde + ': contexto "' + c + '" fora da taxonomia'); });
      arr(a.selos).forEach(function (s) { if (!T.selos[s]) erros.push(onde + ': selo "' + s + '" fora da taxonomia'); });
      arr(a.disciplinas).forEach(function (d) { if (T.disciplina.indexOf(d) < 0) erros.push(onde + ': disciplina "' + d + '" fora da taxonomia'); });
      if (a.eixo && a.nivel && (a.nivel < 1 || a.nivel > T.eixos[a.eixo].niveis.length)) {
        erros.push(onde + ': nivel ' + a.nivel + ' fora da faixa do eixo ' + a.eixo);
      }
      /* Item do acervo aponta para material que já existe e tem contrato próprio. */
      var obrigatorias = ehAcervo(a)
        ? ['insightCurto', 'link', 'linkRotulo', 'fonte', 'oQueE', 'comoUsar', 'protecao', 'observar']
        : ['provocacao', 'missao', 'virada', 'insight', 'insightCurto', 'transferencia', 'protecao', 'evidencia'];
      obrigatorias.forEach(function (c) {
        if (!a[c]) erros.push(onde + ': falta a seção obrigatória "' + c + '"');
      });
      if (ehAcervo(a) && !/^https:\/\//.test(a.link || '')) erros.push(onde + ': link precisa ser https');
    });

    /* Segunda passada: "combina com" tem que apontar para ficha que existe,
       senão o banco promete uma ligação e entrega um link quebrado. */
    var ids = ATIV.map(function (a) { return a.id; });
    ATIV.forEach(function (a) {
      arr(a.combinaCom).forEach(function (c) {
        if (ids.indexOf(c.id) < 0) erros.push('ficha "' + a.id + '": combinaCom aponta para "' + c.id + '", que não existe');
        if (c.id === a.id) erros.push('ficha "' + a.id + '": combinaCom aponta para ela mesma');
      });
    });
    if (erros.length) console.warn('[Banco JP] ' + erros.length + ' problema(s) nos dados:\n' + erros.join('\n'));
    return erros;
  }

  /* ---------------------------------------------------------------- estado */
  var E = {
    perfil: null, ficha: null, colecao: null, nivel: null, busca: '', ordem: 'faixa', tipo: null,
    faixa: [], situacao: [], contexto: [], tela: [], formato: [],
    disciplina: [], preparo: [], grupo: [], eixo: [], selos: [],
    duracao: null, filtrosAbertos: false, versao: 'escola'
  };
  var MULTI = ['faixa', 'situacao', 'contexto', 'tela', 'formato', 'disciplina', 'preparo', 'grupo', 'eixo', 'selos'];

  function alternar(campo, valor) {
    var i = E[campo].indexOf(valor);
    if (i < 0) E[campo].push(valor); else E[campo].splice(i, 1);
  }

  /* ------------------------------------------------------------------ hash */
  function lerHash() {
    var h = (location.hash || '').replace(/^#\/?/, '');
    if (!h) return;
    var partes = h.split('&');
    partes.forEach(function (p) {
      var i = p.indexOf('='); if (i < 0) return;
      var k = decodeURIComponent(p.slice(0, i)), v = decodeURIComponent(p.slice(i + 1));
      if (!v) return;
      if (k === 'ficha') E.ficha = v;
      else if (k === 'perfil') E.perfil = v;
      else if (k === 'colecao') E.colecao = v;
      else if (k === 'nivel') E.nivel = parseInt(v, 10);
      else if (k === 'busca') E.busca = v;
      else if (k === 'ordem') E.ordem = v;
      else if (k === 'tipo') E.tipo = v;
      else if (k === 'duracao') E.duracao = parseInt(v, 10);
      else if (MULTI.indexOf(k) >= 0) E[k] = v.split(',').filter(Boolean);
    });
  }

  var escrevendoHash = false;
  function escreverHash() {
    var p = [];
    if (E.ficha) p.push('ficha=' + encodeURIComponent(E.ficha));
    if (E.perfil) p.push('perfil=' + E.perfil);
    if (E.colecao) p.push('colecao=' + E.colecao);
    if (E.nivel) p.push('nivel=' + E.nivel);
    if (E.busca) p.push('busca=' + encodeURIComponent(E.busca));
    if (E.ordem && E.ordem !== 'faixa') p.push('ordem=' + E.ordem);
    if (E.tipo) p.push('tipo=' + E.tipo);
    if (E.duracao) p.push('duracao=' + E.duracao);
    MULTI.forEach(function (k) { if (E[k].length) p.push(k + '=' + E[k].map(encodeURIComponent).join(',')); });
    var novo = '#/' + p.join('&');
    if (novo !== location.hash) {
      escrevendoHash = true;
      history.replaceState(null, '', location.pathname + location.search + novo);
      escrevendoHash = false;
    }
  }

  /* --------------------------------------------------------------- filtrar */
  function colecaoPorId(id) {
    for (var i = 0; i < T.colecoes.length; i++) if (T.colecoes[i].id === id) return T.colecoes[i];
    return null;
  }
  function contarColecao(c) { return ATIV.filter(c.filtro).length; }

  /* Normaliza para busca: sem acento, minúsculo. Professora que digita
     "algoritmo" precisa achar "algorítmico", e quem digita "IA" precisa achar. */
  function norm(s) {
    s = String(s == null ? '' : s).toLowerCase();
    return s.normalize ? s.normalize('NFD').replace(/[̀-ͯ]/g, '') : s;
  }

  function textoBuscavel(a) {
    if (a._busca) return a._busca;
    var partes = [a.titulo, a.chamada, a.insightCurto, a.insight, a.formatoDetalhe,
                  a.fonte, (ehAcervo(a) ? 'material do acervo' : 'ficha')]
      .concat(faixasDe(a).map(function (f) { return T.faixa[f].rotulo + ' ' + T.faixa[f].escolar; }))
      .concat(arr(a.disciplinas))
      .concat(arr(a.situacao).map(function (s) { return T.situacao[s]; }))
      .concat(arr(a.selos).map(function (s) { return T.selos[s].rotulo; }))
      .concat([T.eixos[a.eixo].rotulo, T.formato[a.formato]]);
    if (a.bncc) {
      ['principal', 'secundaria', 'ponte'].forEach(function (k) {
        if (a.bncc[k] && a.bncc[k].codigo) partes.push(a.bncc[k].codigo);
      });
    }
    a._busca = norm(partes.join(' '));
    return a._busca;
  }

  /* Um predicado por campo. Isolar assim permite contar quantos resultados
     cada opção daria SE fosse marcada, ignorando o próprio campo. */
  var PREDICADOS = {
    colecao:    function (a) { var c = E.colecao ? colecaoPorId(E.colecao) : null; return !c || c.filtro(a); },
    perfil:     function (a) {
      if (E.perfil === 'educador') return arr(a.contexto).indexOf('escola') >= 0;
      if (E.perfil === 'responsavel') return arr(a.contexto).indexOf('casa') >= 0;
      if (E.perfil === 'estudante') return !!(a.versoes && a.versoes.jovem);
      return true;
    },
    busca:      function (a) { return !E.busca || textoBuscavel(a).indexOf(norm(E.busca)) >= 0; },
    faixa:      function (a) { return !E.faixa.length || faixasDe(a).some(function (f) { return E.faixa.indexOf(f) >= 0; }); },
    tipo:       function (a) { return !E.tipo || (E.tipo === 'acervo' ? ehAcervo(a) : !ehAcervo(a)); },
    duracao:    function (a) { return !E.duracao || duracaoMin(a) <= E.duracao; },
    tela:       function (a) { return !E.tela.length || E.tela.indexOf(a.tela) >= 0; },
    formato:    function (a) { return !E.formato.length || E.formato.indexOf(a.formato) >= 0; },
    preparo:    function (a) { return !E.preparo.length || E.preparo.indexOf(a.preparo) >= 0; },
    grupo:      function (a) { return !E.grupo.length || E.grupo.indexOf(a.grupo) >= 0; },
    eixo:       function (a) { return !E.eixo.length || E.eixo.indexOf(a.eixo) >= 0; },
    nivel:      function (a) { return !E.nivel || a.nivel === E.nivel; },
    situacao:   function (a) { return !E.situacao.length || E.situacao.some(function (s) { return arr(a.situacao).indexOf(s) >= 0; }); },
    contexto:   function (a) { return !E.contexto.length || E.contexto.some(function (c) { return arr(a.contexto).indexOf(c) >= 0; }); },
    selos:      function (a) { return !E.selos.length || E.selos.every(function (s) { return arr(a.selos).indexOf(s) >= 0; }); },
    disciplina: function (a) { return !E.disciplina.length || E.disciplina.some(function (d) { return arr(a.disciplinas).indexOf(d) >= 0; }); }
  };

  function ordenar(lista) {
    var lst = lista.slice();
    if (E.ordem === 'duracao') {
      lst.sort(function (x, y) { return duracaoMin(x) - duracaoMin(y) || x.n - y.n; });
    } else if (E.ordem === 'preparo') {
      var peso = { nenhum: 0, baixo: 1, medio: 2, alto: 3 };
      lst.sort(function (x, y) { return peso[x.preparo] - peso[y.preparo] || x.n - y.n; });
    } else {
      lst.sort(function (x, y) {
        var fx = T.faixa[faixaPrincipal(x)].ordem - T.faixa[faixaPrincipal(y)].ordem;
        return fx !== 0 ? fx : x.n - y.n;
      });
    }
    return lst;
  }

  /* excetoCampo permite perguntar "quantos resultados eu teria se marcasse
     esta opção", sem que o próprio campo se auto-exclua. */
  function filtrar(excetoCampo) {
    return ATIV.filter(function (a) {
      for (var k in PREDICADOS) {
        if (k === excetoCampo) continue;
        if (!PREDICADOS[k](a)) return false;
      }
      return true;
    });
  }

  function resultados() { return ordenar(filtrar()); }

  /* Quantos resultados a opção `valor` do campo `campo` produziria. */
  function contarOpcao(campo, valor) {
    var base = filtrar(campo);
    return base.filter(function (a) {
      if (campo === 'faixa')      return faixasDe(a).indexOf(valor) >= 0;
      if (campo === 'tela')       return a.tela === valor;
      if (campo === 'formato')    return a.formato === valor;
      if (campo === 'preparo')    return a.preparo === valor;
      if (campo === 'grupo')      return a.grupo === valor;
      if (campo === 'eixo')       return a.eixo === valor;
      if (campo === 'situacao')   return arr(a.situacao).indexOf(valor) >= 0;
      if (campo === 'contexto')   return arr(a.contexto).indexOf(valor) >= 0;
      if (campo === 'selos')      return arr(a.selos).indexOf(valor) >= 0;
      if (campo === 'disciplina') return arr(a.disciplinas).indexOf(valor) >= 0;
      if (campo === 'duracao')    return duracaoMin(a) <= valor;
      return true;
    }).length;
  }

  /* Qual filtro ativo é o culpado por zerar o resultado. Vira sugestão. */
  function culpado() {
    var campos = ['busca', 'colecao', 'perfil', 'duracao', 'nivel'].concat(MULTI);
    for (var i = 0; i < campos.length; i++) {
      var k = campos[i];
      var vazio = (k === 'duracao' || k === 'nivel' || k === 'colecao' || k === 'perfil' || k === 'busca')
        ? !E[k] : !E[k].length;
      if (vazio) continue;
      if (filtrar(k).length > 0) return k;
    }
    return null;
  }

  function ativos() {
    var n = MULTI.reduce(function (s, k) { return s + E[k].length; }, 0);
    return n + (E.duracao ? 1 : 0) + (E.colecao ? 1 : 0) + (E.nivel ? 1 : 0) + (E.busca ? 1 : 0) + (E.tipo ? 1 : 0);
  }

  /* ----------------------------------------------------------- componentes */
  /* Cada opção mostra quantos resultados ela daria. Zero fica desabilitado:
     a pessoa nunca chega a uma tela vazia por caminho que a interface ofereceu. */
  function chip(campo, valor, rotulo) {
    var on = E[campo].indexOf(valor) >= 0;
    var q = contarOpcao(campo, valor);
    var mortoAttr = (!on && q === 0) ? ' disabled data-zero="1"' : '';
    return '<button type="button" class="jp-chip" data-campo="' + esc(campo) + '" data-valor="' + esc(valor) + '"' +
      ' aria-pressed="' + on + '"' + mortoAttr + '>' + esc(rotulo) +
      '<span class="jp-chip-n">' + q + '</span></button>';
  }

  function chips(campo, mapa, ordem) {
    var chaves = ordem || Object.keys(mapa);
    return chaves.map(function (k) {
      var r = mapa[k]; r = (r && r.rotulo) ? r.rotulo : r;
      return chip(campo, k, r);
    }).join('');
  }

  function grupoFiltro(titulo, html, dica) {
    return '<div class="jp-grupo"><div class="jp-grupo-t">' + esc(titulo) +
      (dica ? '<em>' + esc(dica) + '</em>' : '') + '</div><div class="jp-chips">' + html + '</div></div>';
  }

  /* Barra do que está aplicado agora, com × individual em cada item. */
  function barraAtivos() {
    var itens = [];
    function add(rotulo, campo, valor) {
      itens.push('<button type="button" class="jp-ativo" data-remover="' + esc(campo) + '"' +
        (valor != null ? ' data-valor="' + esc(valor) + '"' : '') + '>' +
        esc(rotulo) + '<span aria-hidden="true">&times;</span>' +
        '<span class="jp-sr">remover filtro</span></button>');
    }
    if (E.busca) add('“' + E.busca + '”', 'busca');
    if (E.colecao) { var c = colecaoPorId(E.colecao); if (c) add(c.icone + ' ' + c.rotulo, 'colecao'); }
    if (E.perfil) add(T.perfil[E.perfil].rotulo, 'perfil');
    if (E.tipo) add(E.tipo === 'acervo' ? 'Materiais já publicados' : 'Fichas do banco', 'tipo');
    if (E.duracao) {
      var d = T.duracao.filter(function (x) { return x.valor === E.duracao; })[0];
      add(d ? d.rotulo : E.duracao + ' min', 'duracao');
    }
    if (E.nivel) add('etapa ' + E.nivel, 'nivel');
    var mapas = {
      faixa: T.faixa, situacao: T.situacao, contexto: T.contexto, tela: T.tela,
      formato: T.formato, preparo: T.preparo, grupo: T.grupo, eixo: T.eixos, selos: T.selos
    };
    MULTI.forEach(function (k) {
      E[k].forEach(function (v) {
        var r = k === 'disciplina' ? v : (mapas[k] && mapas[k][v]);
        r = (r && r.rotulo) ? r.rotulo : r;
        add(r || v, k, v);
      });
    });
    if (!itens.length) return '';
    return '<div class="jp-ativos"><span class="jp-ativos-t">Filtrando por</span>' + itens.join('') +
      '<button type="button" class="jp-limpa-mini" data-acao="limpar">limpar tudo</button></div>';
  }

  function selosHTML(a) {
    return arr(a.selos).map(function (s) {
      return '<span class="jp-selo jp-selo-' + esc(s) + '">' + esc(T.selos[s].rotulo) + '</span>';
    }).join('');
  }

  /* ------------------------------------------------------------ frase-cenário */
  function slot(campo, mapa, vazio, ordem) {
    var chaves = ordem || Object.keys(mapa);
    var sel = E[campo].length === 1 ? E[campo][0] : '';
    var o = '<option value="">' + esc(vazio) + '</option>' + chaves.map(function (k) {
      var r = mapa[k]; r = (r && r.rotulo) ? r.rotulo : r;
      return '<option value="' + esc(k) + '"' + (k === sel ? ' selected' : '') + '>' + esc(r) + '</option>';
    }).join('');
    return '<span class="jp-slot"><select data-slot="' + esc(campo) + '" aria-label="' + esc(vazio) + '">' + o + '</select></span>';
  }

  function slotDuracao() {
    var o = '<option value="">qualquer tempo</option>' + T.duracao.map(function (d) {
      return '<option value="' + d.valor + '"' + (E.duracao === d.valor ? ' selected' : '') + '>' + esc(d.rotulo) + '</option>';
    }).join('');
    return '<span class="jp-slot"><select data-slot="duracao" aria-label="duração">' + o + '</select></span>';
  }

  /* Quatro linhas, cada uma com ícone e rótulo próprio. Lê como conversa,
     não como formulário, e continua sendo um formulário por baixo. */
  function linhaBusca(icone, rotulo, controle) {
    return '<div class="jp-busca-lin">' +
      '<span class="jp-busca-ic" aria-hidden="true">' + icone + '</span>' +
      '<span class="jp-busca-rot">' + esc(rotulo) + '</span>' +
      controle + '</div>';
  }

  function frase() {
    var faixas = Object.keys(T.faixa).filter(function (f) { return f !== 'familia'; });
    var rotFaixa = E.perfil === 'responsavel' ? 'com quem eu vou conversar'
                 : E.perfil === 'estudante'   ? 'a minha idade'
                 : 'a turma é de';
    var rotTema  = E.perfil === 'estudante' ? 'quero investigar' : 'quero trabalhar';
    var listaFaixa = E.perfil === 'responsavel' ? null : faixas;

    return linhaBusca('⏱️', 'tenho', slotDuracao()) +
           linhaBusca('👧', rotFaixa, slot('faixa', T.faixa, 'qualquer idade', listaFaixa)) +
           linhaBusca('💻', 'quero uma atividade', slot('tela', T.tela, 'com ou sem tela')) +
           linhaBusca('🎯', rotTema, slot('situacao', T.situacao, 'qualquer assunto'));
  }

  /* ------------------------------------------------------------ tela busca */
  function telaBusca() {
    var res = resultados(), n = ativos();

    var portas = Object.keys(T.perfil).map(function (k) {
      var p = T.perfil[k];
      var q = ATIV.filter(function (a) {
        if (k === 'educador') return arr(a.contexto).indexOf('escola') >= 0;
        if (k === 'responsavel') return arr(a.contexto).indexOf('casa') >= 0;
        return !!(a.versoes && a.versoes.jovem);
      }).length;
      return '<button type="button" class="jp-porta" data-porta="' + esc(k) + '" aria-pressed="' + (E.perfil === k) + '">' +
        '<span class="jp-porta-ic" aria-hidden="true">' + p.icone + '</span>' +
        '<span class="jp-porta-t">' + esc(p.promessa) + '</span>' +
        '<span class="jp-porta-d">' + esc(p.detalhe) + '</span>' +
        '<span class="jp-porta-n">' + esc(p.rotulo) + ' &middot; ' + q + ' atividades</span></button>';
    }).join('');

    var colecoes = T.colecoes.map(function (c) {
      var q = contarColecao(c);
      if (!q) return '';
      return '<button type="button" class="jp-col" data-colecao="' + esc(c.id) + '" aria-pressed="' + (E.colecao === c.id) + '">' +
        '<span class="jp-col-ic" aria-hidden="true">' + c.icone + '</span>' +
        '<span class="jp-col-t">' + esc(c.rotulo) + '</span>' +
        '<span class="jp-col-r">' + esc(c.resumo) + '</span>' +
        '<span class="jp-col-n">' + q + ' atividade' + (q === 1 ? '' : 's') + '</span></button>';
    }).join('');

    var faixasSemFamilia = Object.keys(T.faixa).filter(function (f) { return f !== 'familia'; });

    var filtros =
      '<div class="jp-filtros">' +
        '<button type="button" class="jp-filtros-cab" data-acao="abrir-filtros" aria-expanded="' + E.filtrosAbertos + '">' +
          '<span>Filtros detalhados' + (n ? ' &middot; ' + n + ' ativo' + (n > 1 ? 's' : '') : '') + '</span>' +
          '<span aria-hidden="true">' + (E.filtrosAbertos ? '&minus;' : '+') + '</span>' +
        '</button>' +
        (E.filtrosAbertos ?
        '<div class="jp-filtros-corpo">' +
          '<p class="jp-filtros-dica">O número em cada opção é quantas atividades ela deixa. ' +
          'Opções apagadas ficariam sem resultado com o que já está marcado.</p>' +
          grupoFiltro('Tipo de material', ['ficha|Fichas do banco', 'acervo|Materiais já publicados'].map(function (o) {
            var v = o.split('|'), on = E.tipo === v[0];
            var q = ATIV.filter(function (a) {
              return (v[0] === 'acervo' ? ehAcervo(a) : !ehAcervo(a)) &&
                Object.keys(PREDICADOS).every(function (k) { return k === 'tipo' || PREDICADOS[k](a); });
            }).length;
            return '<button type="button" class="jp-chip" data-campo="tipo" data-valor="' + esc(v[0]) + '"' +
              ' aria-pressed="' + on + '"' + ((!on && q === 0) ? ' disabled data-zero="1"' : '') + '>' +
              esc(v[1]) + '<span class="jp-chip-n">' + q + '</span></button>';
          }).join(''), 'ficha tem roteiro e kit aqui dentro') +
          grupoFiltro('Faixa etária e ano escolar', chips('faixa', T.faixa)) +
          grupoFiltro('Situação real', chips('situacao', T.situacao), 'o que trouxe você aqui') +
          grupoFiltro('Onde vai ser usada', chips('contexto', T.contexto)) +
          grupoFiltro('Tela', chips('tela', T.tela)) +
          grupoFiltro('Formato', chips('formato', T.formato)) +
          grupoFiltro('Duração', T.duracao.map(function (d) {
            var on = E.duracao === d.valor, q = contarOpcao('duracao', d.valor);
            return '<button type="button" class="jp-chip" data-campo="duracao" data-valor="' + d.valor + '"' +
              ' aria-pressed="' + on + '"' + ((!on && q === 0) ? ' disabled data-zero="1"' : '') + '>' +
              esc(d.rotulo) + '<span class="jp-chip-n">' + q + '</span></button>';
          }).join(''), 'inclui a versão curta') +
          grupoFiltro('Disciplina', T.disciplina.map(function (d) {
            return chip('disciplina', d, d);
          }).join('')) +
          grupoFiltro('Preparação necessária', chips('preparo', T.preparo)) +
          grupoFiltro('Tamanho do grupo', chips('grupo', T.grupo)) +
          grupoFiltro('Eixo de aprendizado', chips('eixo', T.eixos)) +
          grupoFiltro('Selos', chips('selos', T.selos), 'combinam entre si') +
        '</div>' : '') +
      '</div>';

    /* O card vende o que a criança vai compreender, não a mecânica do jogo.
       Professor escolhe atividade pelo aprendizado, não pelo formato. */
    var cards = res.length ? res.map(function (a) {
      return '<button type="button" class="jp-card" data-ficha="' + esc(a.id) + '">' +
        (ehAcervo(a) ? '<span class="jp-acervo-tag"><span aria-hidden="true">🔗</span> Material do acervo</span>' : '') +
        '<span class="jp-card-t">' + esc(a.titulo) + '</span>' +
        '<span class="jp-card-meta">' +
          '<span><span aria-hidden="true">📚</span> ' + esc(faixaCompacta(a)) + '</span>' +
          '<span><span aria-hidden="true">⏱️</span> ' + esc(duracaoCurtaTexto(a)) + '</span>' +
          '<span><span aria-hidden="true">🎲</span> ' + esc((a.formatoDetalhe || T.formato[a.formato]).toLowerCase()) + '</span>' +
        '</span>' +
        '<span class="jp-card-insight"><span class="jp-card-lamp" aria-hidden="true">💡</span>' +
          esc(a.insightCurto || a.insight) + '</span>' +
        '<span class="jp-card-pe">' +
          '<span class="jp-selos">' + selosHTML(a) + '</span>' +
          '<span class="jp-bncc-selo" title="Alinhada à BNCC"><span aria-hidden="true">📖</span> BNCC</span>' +
        '</span>' +
      '</button>';
    }).join('') : '';

    /* Estado vazio que resolve em vez de lamentar: aponta o filtro culpado
       e diz quantas atividades voltam se ele sair. */
    var vazio;
    if (res.length) {
      vazio = '';
    } else {
      var culpa = culpado();
      var rotulosCampo = {
        busca: 'a busca por texto', colecao: 'a coleção', perfil: 'a porta de entrada',
        duracao: 'o tempo disponível', nivel: 'a etapa de aprendizado', faixa: 'a faixa etária',
        situacao: 'a situação', contexto: 'o local de uso', tela: 'o filtro de tela',
        formato: 'o formato', disciplina: 'a disciplina', preparo: 'a preparação',
        grupo: 'o tamanho do grupo', eixo: 'o eixo', selos: 'os selos'
      };
      vazio = '<div class="jp-vazio"><strong>Essa combinação não existe no banco ainda.</strong>' +
        (culpa
          ? '<p>Se você soltar <b>' + esc(rotulosCampo[culpa] || culpa) + '</b>, voltam ' +
            filtrar(culpa).length + ' atividades.</p>' +
            '<div class="jp-vazio-acoes">' +
            '<button type="button" class="jp-btn jp-btn-p" data-remover="' + esc(culpa) + '">Soltar ' +
            esc(rotulosCampo[culpa] || culpa) + '</button>' +
            '<button type="button" class="jp-btn jp-btn-o" data-acao="limpar">Recomeçar</button></div>'
          : '<p>Solte um filtro para ver o que existe.</p>' +
            '<div class="jp-vazio-acoes"><button type="button" class="jp-btn jp-btn-p" data-acao="limpar">Recomeçar</button></div>') +
        '<p class="jp-vazio-nota">O banco tem ' + ATIV.length + ' atividades e cresce a cada lote. ' +
        'A seção <b>Como o aprendizado evolui</b>, abaixo, mostra o que ainda está em produção.</p></div>';
    }

    var colecaoAtiva = E.colecao ? colecaoPorId(E.colecao) : null;

    return '<div class="jp-wrap">' +
      '<header class="jp-hero">' +
        '<div class="jp-super">Juventude Privada</div>' +
        '<h1>Banco de Atividades e Ferramentas Educacionais</h1>' +
        '<p class="jp-hero-sub">Atividades prontas para desenvolver pensamento crítico, privacidade, ' +
          'inteligência artificial e uso responsável da tecnologia, da Educação Infantil ao Ensino Médio.</p>' +
        '<p class="jp-hero-frase">Hoje uma criança pode aprender a proteger seus dados brincando.</p>' +
      '</header>' +

      '<div class="jp-portas">' + portas + '</div>' +

      '<div class="jp-cenario">' +
        '<h2>Encontre uma atividade</h2>' +
        '<p class="jp-cenario-sub">Escolha a idade, o tempo disponível e o tema. Nós encontramos uma atividade pronta para aplicar.</p>' +
        '<div class="jp-busca">' + frase() + '</div>' +
        '<div class="jp-cenario-acoes">' +
          '<button type="button" class="jp-btn jp-btn-p" data-acao="rolar">Ver ' + res.length +
            ' atividade' + (res.length === 1 ? '' : 's') + '</button>' +
          (ativos() || E.perfil ? '<button type="button" class="jp-btn jp-btn-s" data-acao="limpar">Recomeçar</button>' : '') +
        '</div>' +
      '</div>' +

      '<section class="jp-secao">' +
        '<h2>Explore por tema</h2>' +
        '<p class="jp-lede">Uma atividade pode aparecer em mais de uma coleção. As contagens são do que já existe hoje.</p>' +
        '<div class="jp-cols">' + colecoes + '</div>' +
      '</section>' +

      '<div class="jp-busca-texto">' +
        '<label class="jp-sr" for="jp-q">Buscar por palavra</label>' +
        '<span class="jp-lupa" aria-hidden="true">🔎</span>' +
        '<input id="jp-q" type="search" class="jp-input" placeholder="Buscar por palavra, tema, disciplina ou código da BNCC" ' +
          'value="' + esc(E.busca) + '" autocomplete="off">' +
        (E.busca ? '<button type="button" class="jp-input-x" data-remover="busca" aria-label="Limpar busca">&times;</button>' : '') +
      '</div>' +

      filtros +

      barraAtivos() +

      '<div class="jp-barra" id="jp-resultados">' +
        '<span class="jp-conta">' +
          (colecaoAtiva ? '<span aria-hidden="true">' + colecaoAtiva.icone + '</span> ' + esc(colecaoAtiva.rotulo) + ': ' : '') +
          res.length + ' atividade' + (res.length === 1 ? '' : 's') +
          '<em> de ' + ATIV.length + ' no banco</em></span>' +
        '<span class="jp-ordenar">' +
          '<label for="jp-ord">Ordenar por</label>' +
          '<select id="jp-ord" data-slot="ordem">' +
            ['faixa|idade', 'duracao|menor tempo primeiro', 'preparo|menos preparo primeiro']
              .map(function (o) {
                var v = o.split('|');
                return '<option value="' + v[0] + '"' + (E.ordem === v[0] ? ' selected' : '') + '>' + v[1] + '</option>';
              }).join('') +
          '</select>' +
        '</span>' +
      '</div>' +

      (res.length ? '<div class="jp-grade">' + cards + '</div>' : vazio) +

      secaoProgressao() +

      '<section class="jp-secao jp-recebe">' +
        '<h2>O que você recebe</h2>' +
        '<p class="jp-lede">Toda atividade, sem exceção, vem completa.</p>' +
        '<ul class="jp-checks">' +
          ['Roteiro passo a passo, minuto a minuto',
           'Materiais prontos para imprimir, com o texto das cartas e o gabarito',
           'Perguntas para conduzir a discussão',
           'O que o adulto NÃO deve dizer dar',
           'Adaptação para casa e versão para o jovem fazer sozinho',
           'Alinhamento a uma habilidade da BNCC',
           'Critério claro de aprendizagem',
           'Versão sem tela, e versão curta para quando o tempo apertar'
          ].map(function (t) { return '<li><span aria-hidden="true">✔</span> ' + esc(t) + '</li>'; }).join('') +
        '</ul>' +
        '<p class="jp-recebe-nota">Nenhuma atividade pede dado real, relato pessoal, senha, imagem ou acesso a contas. ' +
        'Todos os casos e personagens são fictícios, de propósito.</p>' +
      '</section>' +

      '<details class="jp-bncc-caixa">' +
        '<summary><span aria-hidden="true">📖</span> Como funciona o alinhamento à BNCC</summary>' +
        '<div class="jp-bncc-caixa-corpo">' +
          '<p>Cada atividade indica uma habilidade principal e, no máximo, uma secundária. Os códigos citados são da ' +
          '<b>BNCC Computação</b> e foram conferidos no documento oficial do MEC, um a um.</p>' +
          '<p>A BNCC Computação começa no 1º ano do Ensino Fundamental. Por isso as atividades de 4 a 5 anos não recebem ' +
          'código, e são alinhadas aos campos de experiência da Educação Infantil, com um código-ponte indicado para ' +
          'quem aplicar em turma de 1º ano.</p>' +
          '<p>Como segunda camada de qualidade, cada ficha aponta também uma competência do ' +
          '<i>AI Competency Framework for Students</i>, da UNESCO.</p>' +
        '</div>' +
      '</details>' +
    '</div>';
  }

  function secaoProgressao() {
    var M = T.marcosProgressao;

    var linhas = Object.keys(T.eixos).map(function (k) {
      var eixo = T.eixos[k];
      var passos = eixo.niveis.map(function (txt, i) {
        var nivel = i + 1;
        /* Acervo fica fora: a progressão descreve fichas cuja estrutura foi
           escrita e verificada aqui dentro. */
        var quantas = ATIV.filter(function (a) { return !ehAcervo(a) && a.eixo === k && a.nivel === nivel; }).length;
        var vazio = quantas ? '' : ' data-vazio="1" disabled';
        var seta = i < eixo.niveis.length - 1 ? '<span class="jp-seta" aria-hidden="true">↓</span>' : '';
        return '<div class="jp-passo">' +
          '<button type="button" class="jp-passo-b" data-eixo="' + esc(k) + '" data-nivel="' + nivel + '"' + vazio + '>' +
            '<span class="jp-passo-ic" aria-hidden="true">' + M[i].icone + '</span>' +
            '<span class="jp-passo-txt">' + esc(txt) + '</span>' +
            '<span class="jp-passo-n">' + (quantas ? quantas + (quantas === 1 ? ' atividade' : ' atividades') : 'em produção') + '</span>' +
          '</button>' + seta + '</div>';
      }).join('');

      return '<article class="jp-eixo">' +
        '<h3 class="jp-eixo-nome">' + esc(eixo.rotulo) + '</h3>' +
        '<p class="jp-eixo-promessa">' + esc(eixo.promessa) + '</p>' +
        '<div class="jp-passos">' + passos + '</div>' +
      '</article>';
    }).join('');

    var legenda = M.map(function (m) {
      return '<span class="jp-leg"><span aria-hidden="true">' + m.icone + '</span> ' +
        esc(m.rotulo) + '<em>' + esc(m.o_que) + '</em></span>';
    }).join('');

    return '<section class="jp-secao jp-prog">' +
      '<h2>Como o aprendizado evolui</h2>' +
      '<p class="jp-lede">Não adianta repetir "proteja seus dados" em cinco faixas etárias. Cada tema cresce junto ' +
      'com a criança, e a atividade de 15 anos parte de onde a de 5 anos parou.</p>' +
      '<div class="jp-legenda">' + legenda + '</div>' +
      '<div class="jp-eixos">' + linhas + '</div>' +
      '<p class="jp-prog-nota">Clique em qualquer etapa para ver as atividades dela. As etapas marcadas como ' +
      '<b>em produção</b> ainda não têm atividade publicada, e é exatamente assim que a gente decide o próximo lote.</p>' +
    '</section>';
  }

  /* ------------------------------------------------------------- tela ficha */
  function bloco(titulo, corpo, cls) {
    if (!corpo) return '';
    return '<div class="jp-bloco"><div class="jp-bloco-t">' + esc(titulo) + '</div>' +
      (cls ? '<div class="' + cls + '">' + corpo + '</div>' : corpo) + '</div>';
  }

  function bnccHTML(a) {
    var b = a.bncc || {}, out = '';
    function linha(rot, o) {
      if (!o) return '';
      return '<div class="jp-bncc-lin"><span class="jp-bncc-cod">' + esc(o.codigo) + '</span>' +
        '<span style="font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:#6b7280">' + esc(rot) + '</span>' +
        '<div style="margin-top:4px">' + esc(o.texto) + '</div></div>';
    }
    if (b.campo) out += '<div class="jp-bncc-lin"><b style="color:#273975">Educação Infantil.</b> ' + esc(b.campo) + '</div>';
    if (b.nota) out += '<div class="jp-bncc-lin" style="color:#6b7280">' + esc(b.nota) + '</div>';
    /* Cada código sai uma vez só, com o rótulo certo. A ficha de Educação
       Infantil não tem principal: nela a ponte é o alinhamento de referência. */
    out += linha('Habilidade principal', b.principal);
    out += linha(b.principal ? 'Código-ponte para o 1º ano' : 'Código-ponte para turmas de 1º ano', b.ponte);
    out += linha('Habilidade secundária', b.secundaria);
    if (a.unesco) {
      out += '<div class="jp-bncc-lin" style="border-top:1px solid #e3e6ef;padding-top:10px;margin-top:10px">' +
        '<span style="font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:#6b7280">UNESCO, dimensão ' +
        esc(T.unesco[a.unesco.dimensao] || a.unesco.dimensao) + '</span>' +
        '<div style="margin-top:4px">' + esc(a.unesco.competencia) + '</div></div>';
    }
    return '<div class="jp-bncc">' + out + '</div>';
  }

  function versoesHTML(a) {
    var disp = [];
    if (a.versoes) {
      if (a.versoes.escola) disp.push(['escola', 'Na escola', a.versoes.escola]);
      if (a.versoes.familia) disp.push(['familia', 'Em casa', a.versoes.familia]);
      if (a.versoes.jovem) disp.push(['jovem', 'Versão jovem', a.versoes.jovem]);
    }
    if (!disp.length) return '';
    if (!disp.some(function (d) { return d[0] === E.versao; })) E.versao = disp[0][0];

    var abas = disp.map(function (d) {
      return '<button type="button" class="jp-aba" role="tab" data-versao="' + esc(d[0]) + '"' +
        ' aria-selected="' + (E.versao === d[0]) + '">' + esc(d[1]) + '</button>';
    }).join('');
    var atual = disp.filter(function (d) { return d[0] === E.versao; })[0];

    /* na impressão as três versões saem juntas, porque o kit impresso vai para
       a mão de quem não tem a tela na frente */
    var todas = disp.map(function (d) {
      return '<p style="margin-bottom:10px"><b style="color:#273975">' + esc(d[1]) + '.</b> ' + esc(d[2]) + '</p>';
    }).join('');

    if (!a.versoes.jovem && T.faixa[faixaPrincipal(a)] && !T.faixa[faixaPrincipal(a)].autonomia) {
      todas += '<p style="color:#6b7280;font-size:.9rem">Nesta faixa não existe versão autônoma. ' +
        'A criança participa sempre com um adulto.</p>';
    }

    return '<div class="jp-bloco"><div class="jp-bloco-t">Escola, casa e jovem</div>' +
      '<div class="jp-abas" role="tablist">' + abas + '</div>' +
      '<p class="jp-nao-imprime">' + esc(atual[2]) + '</p>' +
      (!a.versoes.jovem && T.faixa[faixaPrincipal(a)] && !T.faixa[faixaPrincipal(a)].autonomia
        ? '<p class="jp-nao-imprime" style="color:#6b7280;font-size:.9rem;margin-top:10px">Nesta faixa não existe ' +
          'versão autônoma. A criança participa sempre com um adulto.</p>' : '') +
      '<div class="jp-versao-print">' + todas + '</div></div>';
  }

  function imprimivelHTML(m, i) {
    var corpo = '';
    if (m.nota) corpo += '<div class="jp-imp-nota">' + esc(m.nota) + '</div>';
    if (m.itens) corpo += '<ol class="jp-imp-itens">' + m.itens.map(function (it) {
      return '<li>' + esc(it) + '</li>';
    }).join('') + '</ol>';
    if (m.corpo) corpo += '<pre>' + esc(m.corpo) + '</pre>';
    return '<div class="jp-imp jp-imp-material">' +
      '<button type="button" class="jp-imp-cab" data-imp="' + i + '" aria-expanded="false">' +
        '<span><b>' + esc(m.titulo) + '</b> <em style="font-style:normal;font-size:.72rem;text-transform:uppercase;' +
        'letter-spacing:.06em;color:#f09900;margin-left:8px">' + esc(m.tipo) + '</em></span>' +
        '<span aria-hidden="true">+</span>' +
      '</button>' +
      '<div class="jp-imp-corpo" hidden>' + corpo + '</div></div>';
  }

  /* Ficha de material do acervo. Não inventa roteiro nem kit: aponta para o
     material que existe e acrescenta o que o banco sabe fazer, que é dizer
     para quem serve, quando usar e com qual atividade ele combina. */
  function telaAcervo(a) {
    var sens = T.sensibilidade[a.sensibilidade];
    var dados = [
      ['Faixa', faixasDe(a).map(function (f) { return T.faixa[f].rotulo; }).join(' · ')],
      ['Duração', duracaoTexto(a)],
      ['Formato', a.formatoDetalhe || T.formato[a.formato]],
      ['Tela', T.tela[a.tela]],
      ['Grupo', T.grupo[a.grupo]],
      ['Preparação', T.preparo[a.preparo].rotulo + ', ' + T.preparo[a.preparo].detalhe],
      ['Onde usar', arr(a.contexto).map(function (c) { return T.contexto[c]; }).join(', ')],
      ['Tema', arr(a.situacao).map(function (s) { return T.situacao[s]; }).join(', ')],
      ['Origem', a.fonte]
    ].map(function (d) {
      return '<div class="jp-dado"><dt>' + esc(d[0]) + '</dt><dd>' + esc(d[1]) + '</dd></div>';
    }).join('');

    var combina = arr(a.combinaCom).map(function (c) {
      var alvo = achar(c.id);
      if (!alvo) return '';
      return '<li><button type="button" class="jp-combina" data-ficha="' + esc(alvo.id) + '">' +
        '<b>' + esc(alvo.titulo) + '</b>' +
        '<span>' + esc(c.por) + '</span></button></li>';
    }).join('');

    return '<div class="jp-wrap"><div class="jp-ficha">' +
      '<button type="button" class="jp-voltar" data-acao="voltar">&larr; Voltar ao banco</button>' +

      '<div class="jp-ficha-cab">' +
        '<div class="jp-ficha-n"><span class="jp-acervo-tag"><span aria-hidden="true">🔗</span> Material do acervo</span>' +
          ' &middot; ' + esc(a.fonte) + '</div>' +
        '<h1>' + esc(a.titulo) + '</h1>' +
        '<p class="jp-lede">' + esc(a.chamada) + '</p>' +
        '<div class="jp-selos" style="margin-top:14px">' + selosHTML(a) + '</div>' +
        '<dl class="jp-ficha-dados">' + dados + '</dl>' +
      '</div>' +

      (sens.aviso ? '<div class="jp-aviso"><b>Sensibilidade ' + esc(sens.rotulo.toLowerCase()) + '.</b> ' + esc(sens.aviso) + '</div>' : '') +

      '<div class="jp-ficha-acoes jp-nao-imprime">' +
        '<a class="jp-btn jp-btn-p" href="' + esc(a.link) + '" target="_blank" rel="noopener noreferrer">' +
          esc(a.linkRotulo) + ' <span aria-hidden="true">↗</span></a>' +
        '<button type="button" class="jp-btn jp-btn-o" data-acao="copiar">Copiar link desta página</button>' +
      '</div>' +

      bloco('O que é', '<p>' + esc(a.oQueE) + '</p>') +
      bloco('Como usar', '<p>' + esc(a.comoUsar) + '</p>') +
      (combina ? bloco('Combina com estas atividades do banco',
        '<p class="jp-nao-imprime" style="color:#6b7280;font-size:.9rem;margin-bottom:12px">' +
        'O material abre o assunto. Estas fichas dão estrutura, roteiro e material pronto.</p>' +
        '<ul class="jp-combinas">' + combina + '</ul>') : '') +

      bloco('Cuidados', esc(a.protecao), 'jp-protecao') +
      bloco('BNCC e UNESCO', bnccHTML(a)) +
      bloco('O que observar', '<p>' + esc(a.observar) + '</p>') +

      '<div class="jp-acervo-nota">Este material foi publicado pelo Juventude Privada e está ' +
      'listado aqui com orientação de uso. O conteúdo completo está no próprio material, ' +
      'no botão acima.</div>' +

      '<div class="jp-print-rodape">Juventude Privada &middot; Banco de Atividades e Ferramentas Educacionais &middot; ' +
      esc(a.titulo) + (window.JP.SITE ? ' &middot; ' + esc(window.JP.SITE) : '') + '</div>' +
    '</div></div>';
  }

  function telaFicha(a) {
    if (ehAcervo(a)) return telaAcervo(a);
    var sens = T.sensibilidade[a.sensibilidade];
    var dados = [
      ['Faixa', faixasDe(a).map(function (f) { return T.faixa[f].rotulo; }).join(' · ')],
      ['Duração', duracaoTexto(a)],
      ['Formato', a.formatoDetalhe || T.formato[a.formato]],
      ['Tela', T.tela[a.tela]],
      ['Grupo', T.grupo[a.grupo]],
      ['Preparação', T.preparo[a.preparo].rotulo + ', ' + T.preparo[a.preparo].detalhe],
      ['Onde usar', arr(a.contexto).map(function (c) { return T.contexto[c]; }).join(', ')],
      ['Tema', arr(a.situacao).map(function (s) { return T.situacao[s]; }).join(', ')],
      ['Eixo', T.eixos[a.eixo].rotulo + ', nível ' + a.nivel + ' de 5'],
      ['Disciplinas', arr(a.disciplinas).length ? arr(a.disciplinas).join(', ') : 'Uso doméstico']
    ].map(function (d) {
      return '<div class="jp-dado"><dt>' + esc(d[0]) + '</dt><dd>' + esc(d[1]) + '</dd></div>';
    }).join('');

    return '<div class="jp-wrap"><div class="jp-ficha">' +
      '<button type="button" class="jp-voltar" data-acao="voltar">&larr; Voltar ao banco</button>' +

      '<div class="jp-ficha-cab">' +
        '<div class="jp-ficha-n">' + (ehAcervo(a) ? 'Material do acervo' : 'Ficha ' + a.n) +
          ' &middot; ' + esc(faixaCompacta(a)) + '</div>' +
        '<h1>' + esc(a.titulo) + '</h1>' +
        '<p class="jp-lede">' + esc(a.chamada) + '</p>' +
        '<div class="jp-selos" style="margin-top:14px">' + selosHTML(a) + '</div>' +
        '<dl class="jp-ficha-dados">' + dados + '</dl>' +
      '</div>' +

      (sens.aviso ? '<div class="jp-aviso"><b>Sensibilidade ' + esc(sens.rotulo.toLowerCase()) + '.</b> ' + esc(sens.aviso) + '</div>' : '') +

      '<div class="jp-ficha-acoes jp-nao-imprime">' +
        '<button type="button" class="jp-btn jp-btn-p" data-acao="imprimir">Imprimir ficha e kit</button>' +
        '<button type="button" class="jp-btn jp-btn-o" data-acao="copiar">Copiar link desta ficha</button>' +
      '</div>' +

      bloco('Como começar', '<p>' + esc(a.provocacao) + '</p>') +
      bloco('O que eles vão fazer', '<p>' + esc(a.missao) + '</p>') +
      bloco('O momento que muda tudo', '<p>' + esc(a.virada) + '</p>') +
      bloco('O que eles descobrem', esc(a.insight), 'jp-destaque') +
      bloco('Como isso aparece na vida real', '<p>' + esc(a.transferencia) + '</p>') +

      (a.roteiro ? bloco('Roteiro da aula', '<ol class="jp-roteiro">' + a.roteiro.map(function (r) {
        return '<li><b>' + esc(r.t) + '</b><span>' + esc(r.o) + '</span></li>';
      }).join('') + '</ol>') : '') +

      (a.comoEncurtar ? bloco('Se você tem menos tempo',
        '<p>' + esc(a.comoEncurtar) + '</p>', 'jp-destaque') : '') +

      versoesHTML(a) +

      (a.kit ? bloco('O que vem no material', '<ul class="jp-kit">' + a.kit.map(function (k) {
        return '<li><b>' + esc(k.nome) + '</b><em>' + esc(k.tipo) + '</em><div>' + esc(k.desc) + '</div></li>';
      }).join('') + '</ul>') : '') +

      (a.imprimiveis ? bloco('Material pronto para imprimir',
        '<p class="jp-nao-imprime" style="color:#6b7280;font-size:.9rem;margin-bottom:12px">' +
        'Abra para ler, ou use "Imprimir ficha e kit" e todo o material sai junto, cada peça em uma página.</p>' +
        a.imprimiveis.map(imprimivelHTML).join('')) : '') +

      (a.mediacao ? bloco('Como conduzir a conversa',
        '<p style="font-size:.86rem;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">Perguntas que abrem a discussão</p>' +
        '<ul class="jp-lista">' + a.mediacao.perguntas.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
        '<p style="font-size:.86rem;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin:16px 0 6px">O que o adulto NÃO deve dizer</p>' +
        '<ul class="jp-lista jp-lista-evitar">' + a.mediacao.evitar.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>') : '') +

      bloco('Cuidados obrigatórios', esc(a.protecao), 'jp-protecao') +
      bloco('BNCC e UNESCO', bnccHTML(a)) +
      bloco('Como saber se funcionou', '<p>' + esc(a.evidencia) + '</p>') +

      '<div class="jp-print-rodape">Juventude Privada &middot; Banco de Atividades e Ferramentas Educacionais &middot; ' +
      'Ficha ' + a.n + ', ' + esc(a.titulo) +
      (window.JP.SITE ? ' &middot; ' + esc(window.JP.SITE) : '') + '</div>' +
    '</div></div>';
  }

  /* -------------------------------------------------------------- renderizar */
  function render(rolarTopo) {
    var a = E.ficha ? achar(E.ficha) : null;
    if (E.ficha && !a) E.ficha = null;
    raiz.innerHTML = a ? telaFicha(a) : telaBusca();
    escreverHash();
    if (rolarTopo) {
      var y = raiz.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y < 0 ? 0 : y, behavior: 'smooth' });
    }
  }

  /* ------------------------------------------------------------------ eventos */
  function ligar() {
    raiz.addEventListener('click', function (ev) {
      var el = ev.target.closest ? ev.target.closest('[data-acao],[data-ficha],[data-porta],[data-campo],[data-versao],[data-imp],[data-eixo],[data-colecao],[data-remover]') : null;
      if (!el || !raiz.contains(el)) return;

      if (el.dataset.remover) {
        var campo = el.dataset.remover;
        if (campo === 'busca') E.busca = '';
        else if (campo === 'duracao') E.duracao = null;
        else if (campo === 'nivel') E.nivel = null;
        else if (campo === 'colecao') E.colecao = null;
        else if (campo === 'perfil') E.perfil = null;
        else if (campo === 'tipo') E.tipo = null;
        else if (el.dataset.valor != null) alternar(campo, el.dataset.valor);
        else E[campo] = [];
        return render();
      }

      if (el.dataset.ficha) { E.ficha = el.dataset.ficha; E.versao = 'escola'; return render(true); }
      if (el.dataset.colecao) {
        E.colecao = (E.colecao === el.dataset.colecao) ? null : el.dataset.colecao;
        render();
        var res = document.getElementById('jp-resultados');
        if (res && E.colecao) res.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (el.dataset.porta) {
        E.perfil = (E.perfil === el.dataset.porta) ? null : el.dataset.porta;
        if (E.perfil === 'responsavel') E.versao = 'familia';
        else if (E.perfil === 'estudante') E.versao = 'jovem';
        else E.versao = 'escola';
        return render();
      }
      if (el.dataset.campo) {
        if (el.dataset.campo === 'duracao') {
          var v = parseInt(el.dataset.valor, 10);
          E.duracao = (E.duracao === v) ? null : v;
        } else if (el.dataset.campo === 'tipo') {
          E.tipo = (E.tipo === el.dataset.valor) ? null : el.dataset.valor;
        } else {
          alternar(el.dataset.campo, el.dataset.valor);
        }
        return render();
      }
      if (el.dataset.versao) { E.versao = el.dataset.versao; return render(); }
      if (el.dataset.eixo) {
        E.eixo = [el.dataset.eixo];
        E.nivel = parseInt(el.dataset.nivel, 10);
        E.faixa = []; E.duracao = null; E.situacao = []; E.colecao = null;
        E.filtrosAbertos = true;
        render();
        var alvo = document.getElementById('jp-resultados');
        if (alvo) alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (el.dataset.imp != null) {
        var corpo = el.nextElementSibling, aberto = el.getAttribute('aria-expanded') === 'true';
        el.setAttribute('aria-expanded', String(!aberto));
        corpo.hidden = aberto;
        el.lastElementChild.innerHTML = aberto ? '+' : '&minus;';
        return;
      }

      switch (el.dataset.acao) {
        case 'abrir-filtros': E.filtrosAbertos = !E.filtrosAbertos; return render();
        case 'limpar':
          MULTI.forEach(function (k) { E[k] = []; });
          E.duracao = null; E.perfil = null; E.colecao = null; E.nivel = null;
          E.busca = ''; E.ordem = 'faixa'; E.tipo = null;
          return render();
        case 'voltar': E.ficha = null; return render(true);
        case 'imprimir': return window.print();
        case 'rolar':
          var r = document.getElementById('jp-resultados');
          if (r) r.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        case 'copiar':
          var url = location.href;
          var fim = function (ok) {
            el.textContent = ok ? 'Link copiado' : 'Copie da barra de endereço';
            setTimeout(function () { el.textContent = 'Copiar link desta ficha'; }, 2200);
          };
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(function () { fim(true); }, function () { fim(false); });
          } else { fim(false); }
          return;
      }
    });

    raiz.addEventListener('change', function (ev) {
      var s = ev.target.closest ? ev.target.closest('[data-slot]') : null;
      if (!s) return;
      var campo = s.dataset.slot, v = s.value;
      if (campo === 'duracao') E.duracao = v ? parseInt(v, 10) : null;
      else if (campo === 'ordem') E.ordem = v || 'faixa';
      else E[campo] = v ? [v] : [];
      render();
    });

    /* Busca por texto. O render recria o DOM, então o foco e o cursor
       precisam ser devolvidos, senão a pessoa digita uma letra e perde o campo. */
    var timerBusca = null;
    raiz.addEventListener('input', function (ev) {
      if (!ev.target || ev.target.id !== 'jp-q') return;
      var valor = ev.target.value;
      clearTimeout(timerBusca);
      timerBusca = setTimeout(function () {
        E.busca = valor;
        render();
        var campo = document.getElementById('jp-q');
        if (campo) {
          campo.focus();
          try { campo.setSelectionRange(valor.length, valor.length); } catch (e) {}
        }
      }, 180);
    });

    window.addEventListener('hashchange', function () {
      if (escrevendoHash) return;
      MULTI.forEach(function (k) { E[k] = []; });
      E.duracao = null; E.perfil = null; E.ficha = null; E.colecao = null; E.nivel = null;
      E.busca = ''; E.ordem = 'faixa'; E.tipo = null;
      lerHash(); render();
    });
  }

  /* -------------------------------------------------------------------- init */
  function iniciar() {
    raiz = document.getElementById('jp-banco');
    if (!raiz) return;
    if (!window.JP || !window.JP.TAXONOMIA || !window.JP.ATIVIDADES) {
      raiz.innerHTML = '<div class="jp-wrap"><div class="jp-vazio"><strong>O banco não carregou.</strong>' +
        'Os arquivos de dados não foram encontrados. Verifique a ordem dos scripts no embed.</div></div>';
      return;
    }
    T = window.JP.TAXONOMIA;
    ATIV = window.JP.ATIVIDADES;
    validarDados();
    lerHash();
    render();
    ligar();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
