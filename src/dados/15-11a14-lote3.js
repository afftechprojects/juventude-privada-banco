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
  precisa: ['impressao'],
  grupo: 'pequeno',
  eixo: 'consentimento',
  nivel: 4,
  sensibilidade: 'alta',
  selos: ['sem-tela', 'sensivel'],

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
  precisa: ['impressao'],
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
  precisa: ['aparelho', 'impressao'],
  grupo: 'dupla',
  eixo: 'ia',
  nivel: 4,
  sensibilidade: 'baixa',
  selos: [],

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
      corpo: 'Conferindo a RESPOSTA D, afirmação por afirmação:\n\n1. "Irradiação entre 4,5 e 6,0 kWh/m² por dia": CORRETO, é a ordem de grandeza reconhecida para o Brasil.\n\n2. "Uma das maiores do mundo": CORRETO.\n\n3. "Geração distribuída ultrapassou 25 GW": NÚMERO INSTÁVEL. Esse valor muda a cada poucos meses. A própria resposta avisa que não tem certeza, o que é o comportamento correto, mas o número está lá no texto e vai ser copiado assim mesmo. Vale discutir: o aviso resolve?\n\n4. "Custo caiu mais de 80% na última década": PLAUSÍVEL, mas depende do recorte, da tecnologia e da região. Apresentado sem essa ressalva.\n\n5. "A fabricação consome energia e materiais": CORRETO.\n\n6. "O descarte ainda é um problema não resolvido": CORRETO e bem colocado.\n\n7. FONTE 1, Atlas Brasileiro de Energia Solar (INPE): EXISTE. É uma fonte real e adequada.\n\n8. FONTE 2, "RIBEIRO, C. A. Panorama da Geração Distribuída no Brasil. Revista de Energia Sustentável, 2023": NÃO EXISTE. Nem o artigo, nem a revista, nem a autora. A referência tem formato perfeito.\n\nRESULTADO: a melhor das quatro respostas tem um número instável apresentado como dado, uma afirmação sem a ressalva necessária, e uma fonte inventada ao lado de uma fonte real.\n\nO prompt D melhorou a forma, o escopo, o equilíbrio e até produziu um aviso de incerteza. Não melhorou a veracidade.'
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
