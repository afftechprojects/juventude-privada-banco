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

  /* ---- o que a pessoa precisa ter para conseguir aplicar ----------------
     Campo `precisa`. Responde "eu consigo fazer isso com o que eu tenho?",
     que é a pergunta que uma escola sem cota de impressão faz primeiro.
     Registra o MÍNIMO para rodar, não tudo que a ficha menciona: quando o
     material cabe no quadro, a ficha é 'papel' e não 'impressao'.
     Derivado do volume de material de cada ficha e revisável a qualquer
     momento editando o campo direto no arquivo de dados.                   */
  precisa: {
    'so-voz':    { rotulo: 'Nada, só conversa',   detalhe: 'Roda sem material nenhum' },
    /* 'papel' é usado no filtro como "não exige imprimir", e o rótulo diz
       exatamente isso: prometer "papel e lápis" incluiria itens que rodam sem
       impressora mas exigem computador, e o rótulo mentiria. */
    'papel':     { rotulo: 'Sem precisar imprimir', detalhe: 'Dá para escrever no quadro ou em folha comum' },
    'impressao': { rotulo: 'Precisa imprimir',    detalhe: 'Muitas cartas ou fichas por grupo' },
    'objetos':   { rotulo: 'Objetos simples',     detalhe: 'Dados, moedas, barbante, caixinha ou cadeado' },
    'espaco':    { rotulo: 'Espaço para circular', detalhe: 'Pátio ou sala com carteiras afastadas' },
    'aparelho':  { rotulo: 'Computador ou celular', detalhe: 'Precisa de aparelho com internet' }
  },

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
    },

    /* Três eixos acrescentados depois da auditoria de cobertura contra a BNCC.
       Convivência e Bem-estar não cabiam em privacidade nem em consumo, e a
       BNCC pede os dois explicitamente (EF07CO08, EF07CO09, EM13CO24, EM13CO25).
       Infraestrutura existe porque o banco ensinava a criticar sistemas sem
       nunca abrir um, e crítica sem mecanismo vira opinião. */
    convivencia: {
      rotulo: 'Convivência',
      promessa: 'De perceber que a brincadeira machucou alguém a saber denunciar, guardar prova e reparar.',
      niveis: ['perceber que machucou alguém', 'não rir junto', 'sair do papel de plateia', 'proteger quem foi atingido e guardar prova', 'denunciar, reparar e mudar a regra do grupo']
    },
    bemestar: {
      rotulo: 'Bem-estar',
      promessa: 'De reconhecer o próprio cansaço a definir as condições em que você aceita usar uma tecnologia.',
      niveis: ['reconhecer que cansou', 'perceber o que prende', 'medir o próprio uso', 'analisar o design que prende', 'decidir as próprias condições']
    },
    infraestrutura: {
      rotulo: 'Como funciona por dentro',
      promessa: 'De perceber que existe máquina atrás da tela a avaliar quem controla a infraestrutura e a que custo.',
      niveis: ['perceber que existe máquina atrás', 'saber que a informação vira código e viaja', 'seguir o caminho do dado e do aparelho', 'entender proteção, criptografia e custo', 'avaliar arquitetura, controle e exclusão']
    }
  },

  /* ---- coleções por problema ---------------------------------------------
     Uma atividade pode estar em mais de uma coleção, de propósito.
     As contagens são calculadas em tempo de execução: nunca escrever número
     à mão aqui, senão a vitrine promete o que o banco não tem.

     Um macro tema por eixo de progressão, para que "explorar por tema" e
     "como o aprendizado evolui" falem do mesmo conceito e ninguém precise
     decidir entre duas taxonomias concorrentes.

     Regra de tamanho: nenhum tema deve passar de cerca de um quarto do banco.
     Por isso alguns puxam também uma situação (IA puxa "ia-tarefa") e outros
     ficam só no eixo: "dados" está em 31 fichas e, se entrasse em privacidade,
     o tema sozinho viraria quase metade do acervo e deixaria de filtrar.     */
  colecoes: [
    { id: 'privacidade',   icone: '🔒', rotulo: 'Privacidade e dados pessoais',
      resumo: 'O que se revela sem querer, o que é deduzido a partir disso, e quem usa.',
      filtro: function (a) { return a.eixo === 'privacidade'; } },

    { id: 'ia',            icone: '🤖', rotulo: 'Inteligência artificial',
      resumo: 'Como a máquina aprende, onde ela erra e quem define as condições de uso.',
      filtro: function (a) { return a.eixo === 'ia' || a.situacao.indexOf('ia-tarefa') >= 0; } },

    { id: 'algoritmos',    icone: '🔀', rotulo: 'Algoritmos e recomendação',
      resumo: 'Por que aparece isso e não aquilo, quem escolheu o critério e quem responde.',
      filtro: function (a) { return a.eixo === 'algoritmos' || a.situacao.indexOf('algoritmo') >= 0; } },

    { id: 'imagem',        icone: '📷', rotulo: 'Imagem e consentimento',
      resumo: 'Foto que circula, print fora de contexto e o direito de pedir para tirar do ar.',
      filtro: function (a) { return a.eixo === 'consentimento' || a.situacao.indexOf('foto') >= 0; } },

    { id: 'informacao',    icone: '🔍', rotulo: 'Informação e verificação',
      resumo: 'Como conferir antes de acreditar, e por que parecer confiável não basta.',
      filtro: function (a) { return a.eixo === 'informacao' || a.situacao.indexOf('informacao') >= 0; } },

    { id: 'consumo',       icone: '💸', rotulo: 'Consumo, publicidade e games',
      resumo: 'Moeda virtual, recompensa aleatória, publicidade disfarçada e tela que empurra.',
      filtro: function (a) { return a.eixo === 'consumo' ||
        a.situacao.indexOf('jogo') >= 0 || a.situacao.indexOf('propaganda') >= 0; } },

    { id: 'seguranca',     icone: '🛡', rotulo: 'Segurança e golpes',
      resumo: 'Phishing, senha, conta invadida e o que fazer nos primeiros dez minutos.',
      filtro: function (a) { return a.eixo === 'seguranca' || a.situacao.indexOf('golpe') >= 0; } },

    { id: 'autoria',       icone: '✍', rotulo: 'Autoria e direitos',
      resumo: 'Crédito, licença, remix e como declarar com honestidade o que foi seu.',
      filtro: function (a) { return a.eixo === 'autoria' || a.situacao.indexOf('autoria') >= 0; } },

    { id: 'convivencia',   icone: '💔', rotulo: 'Convivência digital',
      resumo: 'Piada que virou outra coisa, plateia que ri junto, prova e denúncia.',
      filtro: function (a) { return a.eixo === 'convivencia'; } },

    { id: 'bemestar',      icone: '😵', rotulo: 'Bem-estar e tempo de tela',
      resumo: 'Cansaço, rolagem infinita, notificação e o desenho feito para prender.',
      filtro: function (a) { return a.eixo === 'bemestar'; } },

    { id: 'infraestrutura', icone: '⚙', rotulo: 'Como a tecnologia funciona',
      resumo: 'Por onde o dado passa, o que é criptografia, de que o aparelho é feito.',
      filtro: function (a) { return a.eixo === 'infraestrutura'; } }
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
