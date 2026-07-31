/* Eixo Bem-estar. A BNCC pede EM13CO24 e o banco não tinha nada sobre cansaço,
   sono, notificação ou design que prende. É também o grupo "Wellbeing online" do
   Council of Europe e a área de bem-estar da DigComp 2.2.
   Regra da coleção: o problema é de projeto, nunca de força de vontade da pessoa. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 66 */
{
  id: 'o-corpo-avisa',
  insightCurto: 'O corpo avisa antes da cabeça. Olho ardendo e mau humor também são recado.',
  n: 66,
  titulo: 'O corpo avisa',
  chamada: 'Antes de a criança perceber que cansou, o corpo dela já sabia. Vamos aprender a escutar.',
  faixa: '6-8',
  duracao: 25,
  duracaoCurta: 15,
  comoEncurtar: 'Em 15 minutos: faça o mapa do corpo e a rodada de sinais, e corte a construção do combinado. O boneco preenchido já sai da sala com a criança.',
  formato: 'criacao',
  formatoDetalhe: 'Mapa do corpo desenhado',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['jogo'],
  disciplinas: ['Ciências', 'Educação Física', 'Artes'],
  preparo: 'baixo',
  precisa: ['papel'],
  grupo: 'turma',
  eixo: 'bemestar',
  nivel: 1,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF02CO05', texto: 'Reconhecer as características e usos das tecnologias computacionais no cotidiano dentro e fora da escola.' },
    secundaria: { codigo: 'EF15CO09', texto: 'Entender que as tecnologias devem ser utilizadas de maneira segura, ética e responsável, respeitando direitos autorais, de imagem e as leis vigentes.' },
    nota: 'Ponte antecipada para EM13CO24, sobre efeito de artefatos computacionais na saúde física e mental, que é do Ensino Médio.'
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Reconhecer sinais corporais de cansaço associados ao uso prolongado de tela.' },

  provocacao: 'O corpo da gente sabe antes da gente. Ele manda recadinhos e a gente quase nunca escuta. Hoje a gente vai aprender a escutar.',

  missao: 'Desenhar no boneco onde o corpo avisa, e descobrir quantos avisos diferentes existem.',

  virada: 'Depois que as crianças marcam os avisos que conhecem, geralmente olho e cabeça, o facilitador lê a lista dos avisos escondidos: dedo doendo, pescoço duro, barriga que esqueceu de ter fome, e o mais surpreendente de todos, ficar bravo à toa. A turma descobre que mau humor também é o corpo avisando, e não defeito da pessoa.',

  insight: 'Cansaço de tela não aparece só no olho. Aparece no pescoço, na fome que sumiu e no mau humor que veio do nada.',

  transferencia: 'Quando aparecer um dos avisos, dá para levantar, beber água e olhar para longe. Não é castigo, é o corpo pedindo.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Contar a história curta do Pedro, que jogou a tarde inteira e depois brigou com a irmã sem motivo. Perguntar por quê.' },
    { t: '5 a 13 min',  o: 'Cada criança recebe o boneco e desenha ou marca onde ela sente quando cansa. Circular perguntando "e aqui, o que acontece?".' },
    { t: '13 a 18 min', o: 'A virada. Ler a lista dos avisos escondidos, um por vez. A cada um, quem já sentiu levanta a mão.' },
    { t: '18 a 22 min', o: 'Construir juntos os três gestos de descanso e treinar de pé, com o corpo.' },
    { t: '22 a 25 min', o: 'Cada criança escreve ou desenha, no rodapé do boneco, o aviso que ela vai tentar escutar.' }
  ],

  versoes: {
    escola: 'Turma inteira, um boneco por criança. Encaixa em Ciências, no corpo humano, e em Educação Física. Os três gestos funcionam melhor se forem treinados de pé, e podem virar rotina da sala depois de qualquer atividade longa.',
    familia: 'Fazer o boneco em família, com o adulto preenchendo o dele também. O adulto quase sempre marca pescoço e olho, o que abre a conversa de que isso não é coisa de criança. Colar na geladeira.',
    jovem: null
  },

  kit: [
    { nome: 'Boneco para marcar', tipo: 'imprimivel', desc: 'Silhueta grande, um por criança.' },
    { nome: 'Lista dos avisos escondidos', tipo: 'imprimivel', desc: 'A virada.' },
    { nome: 'Cartaz dos três gestos', tipo: 'imprimivel', desc: 'Para a parede da sala.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Como conduzir sem culpar a criança.' }
  ],

  imprimiveis: [
    {
      titulo: 'Boneco para marcar',
      tipo: 'folha',
      corpo: 'Silhueta simples de uma criança, de frente, ocupando a página inteira, com espaço em volta para escrever.\n\nAcima: ONDE O MEU CORPO AVISA\n\nAbaixo, para o adulto preencher com as palavras da criança:\n\nO aviso que eu mais sinto é ______________________.\n\nQuando ele aparece, eu vou ______________________.'
    },
    {
      titulo: 'Lista dos avisos escondidos (a virada)',
      tipo: 'folha',
      corpo: 'Ler um por vez. Quem já sentiu levanta a mão.\n\n. OLHO ardendo, coçando ou seco\n. CABEÇA doendo ou pesada\n. PESCOÇO duro de ficar olhando para baixo\n. DEDO ou PULSO doendo\n. COSTAS reclamando\n. BARRIGA que esqueceu de ter fome, e depois lembra tudo de uma vez\n. SONO que não vem na hora de dormir, mesmo cansado\n. E o mais escondido de todos:\n\n  FICAR BRAVO À TOA.\n\n  Quando a gente cansa, qualquer coisinha irrita. Não é porque a gente é chato. É o corpo avisando de outro jeito.'
    },
    {
      titulo: 'Cartaz dos três gestos',
      tipo: 'cartaz',
      corpo: 'QUANDO O CORPO AVISA, A GENTE FAZ TRÊS COISAS\n\n1. LEVANTA E ANDA um pouquinho.\n\n2. OLHA PARA LONGE, pela janela, contando até vinte.\n\n3. BEBE ÁGUA.\n\nE se o aviso for o de ficar bravo, tem uma quarta:\n\n4. AVISA ALGUÉM que você está cansado, antes de brigar.\n\nIsso não é castigo. É cuidado.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'A HISTÓRIA DO PEDRO, para ler no começo:\n\n"O Pedro jogou a tarde inteira, sem parar nem para lanchar. Quando a irmã dele chamou para o jantar, ele respondeu bem bravo, e os dois brigaram. Depois o Pedro nem sabia direito por que tinha ficado tão bravo."\n\nPergunta: por que o Pedro ficou bravo?\n\nCONDUÇÃO\n\n. O aviso do mau humor é o mais importante da lista e o que ninguém marca sozinho. Ele desloca a conversa de "você é chato quando joga" para "seu corpo está pedindo alguma coisa", e essa diferença é enorme para uma criança de 6 a 8 anos que já ouviu a primeira versão muitas vezes.\n\n. Nunca transformar em regra de tempo de tela nem em bronca. A atividade não estabelece limite, ensina a perceber. Limite é conversa da família e não cabe aqui.\n\n. Não perguntar quanto tempo cada criança fica em tela, nem o que ela joga. Se alguém contar, acolher e voltar ao corpo.\n\n. O aviso do sono que não vem é verdadeiro e vale mencionar sem virar aula de fisiologia: perto de dormir, o corpo demora mais para desligar depois de tela.\n\n. Se uma criança disser que nunca sente nada, aceitar. Algumas realmente não percebem ainda, e o boneco dela pode ficar com um aviso só. Perceber um já basta.'
    }
  ],

  mediacao: {
    perguntas: [
      'Por que o Pedro ficou bravo?',
      'Ficar bravo à toa também é o corpo avisando?',
      'Qual aviso você sente primeiro?',
      'O que dá para fazer quando o aviso aparece?'
    ],
    evitar: [
      'Transformar em regra de tempo de tela. A atividade ensina a perceber, e limite é conversa da família.',
      'Usar tom de bronca. A criança que joga muito já ouviu bronca e não mudou nada com isso.',
      'Perguntar quanto tempo cada criança passa em tela ou o que ela joga.',
      'Deixar de fora o aviso do mau humor. É o mais valioso da lista.'
    ]
  },

  protecao: 'Não perguntar sobre hábitos de tela da criança ou da família, nem sobre quanto tempo ela joga. Nenhum aparelho é usado. A atividade não estabelece limites nem julga uso: ela ensina a reconhecer sinais do próprio corpo. Se uma criança relatar sintoma persistente, como dor de cabeça frequente ou dificuldade de dormir, comunicar a família e a coordenação, sem exposição na turma.',

  evidencia: 'A criança nomeia pelo menos dois avisos corporais, incluindo um não visual, e associa o mau humor ao cansaço em vez de a um defeito próprio.'
},

/* ==================================================================== 67 */
{
  id: 'desenho-que-nao-deixa-parar',
  insightCurto: 'Você não tem pouca força de vontade. Alguém foi pago para desenhar exatamente isso.',
  n: 67,
  titulo: 'O desenho que não deixa parar',
  chamada: 'Rolagem infinita, autoplay, sequência de dias e notificação. Cada um tem nome e função.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: analise quatro mecanismos em vez de sete e corte a etapa de redesenho. A comparação entre o app que respeita e o que prende é obrigatória.',
  formato: 'auditoria',
  formatoDetalhe: 'Auditoria de mecanismos de retenção',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['algoritmo', 'propaganda'],
  disciplinas: ['Matemática', 'Ciências', 'Projeto de Vida', 'Artes'],
  preparo: 'medio',
  precisa: ['impressao'],
  grupo: 'pequeno',
  eixo: 'bemestar',
  nivel: 4,
  sensibilidade: 'media',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EM13CO24', texto: 'Identificar e reconhecer como as redes sociais e artefatos computacionais em geral interferem na saúde física e mental de seus usuários.' },
    secundaria: { codigo: 'EF08CO09', texto: 'Analisar criticamente as políticas de termos de uso das redes sociais e demais plataformas.' },
    nota: 'EM13CO24 é do Ensino Médio e aqui é trabalhado de forma antecipada, no nível de reconhecer o mecanismo.'
  },
  unesco: { dimensao: 'design', competencia: 'Identificar mecanismos de retenção projetados e distinguir problema de projeto de falha de autocontrole.' },

  provocacao: 'Vocês já ouviram que precisam ter mais força de vontade. Hoje vocês vão descobrir contra o que exatamente essa força de vontade está competindo, e quantas pessoas foram pagas para construir isso.',

  missao: 'Analisar sete mecanismos de retenção: o que cada um faz, qual reação do corpo ele usa, e o que aconteceria se ele não existisse.',

  virada: 'Depois da análise, o facilitador entrega as duas telas do mesmo aplicativo: a versão que respeita e a versão que prende. Elas têm exatamente o mesmo conteúdo e as mesmas funções. A diferença está em sete decisões de projeto. Os grupos percebem que ninguém precisou acrescentar conteúdo viciante: bastou desenhar as bordas de outro jeito. E então vem o número: um app dessa escala tem equipes inteiras cuja meta é aumentar o tempo médio de sessão.',

  insight: 'A dificuldade de parar não é falha de caráter. Ela é o resultado esperado de decisões de projeto tomadas por gente competente, paga para produzir exatamente esse efeito.',

  transferencia: 'Quase todos os sete mecanismos podem ser desligados nas configurações, e a maior parte das pessoas nunca abriu essa tela. Saber o nome de cada um é o que permite procurar.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Provocação e distribuição das sete fichas de mecanismo, uma por grupo ou duas para grupos maiores.' },
    { t: '8 a 24 min',  o: 'Cada grupo analisa o seu mecanismo na grade: o que faz, qual reação usa, o que aconteceria sem ele, e onde ele aparece.' },
    { t: '24 a 32 min', o: 'Apresentação rápida. Montar no quadro o quadro dos sete.' },
    { t: '32 a 40 min', o: 'A virada. Entregar as duas telas comparadas e o dado sobre metas de tempo de sessão.' },
    { t: '40 a 46 min', o: 'Redesenho: cada grupo desliga três mecanismos e diz o que o aplicativo perde e o que ganha.' },
    { t: '46 a 50 min', o: 'Fechamento com a lista do que dá para desligar de verdade nas configurações.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Integra Ciências, na parte de resposta do corpo, e Matemática, se você acrescentar o cálculo de quanto tempo sete minutos por dia viram em um ano. Encadeia com "Escape room dos padrões manipulativos" e com "Loot boxes".',
    familia: 'Analisar três mecanismos na mesa e depois abrir juntos, com o adulto operando, a tela de notificações de um aplicativo que a família usa. Contar quantas estão ligadas. Não desligar nada na hora: só olhar.',
    jovem: 'Individual: escolher um aplicativo, identificar quais dos sete mecanismos ele usa, e desligar um. Observar durante uma semana o que mudou.'
  },

  kit: [
    { nome: 'Sete fichas de mecanismo', tipo: 'imprimivel', desc: 'Uma por grupo.' },
    { nome: 'Grade de análise', tipo: 'imprimivel', desc: 'O que faz, o que usa, o que aconteceria sem.' },
    { nome: 'As duas telas', tipo: 'imprimivel', desc: 'A virada. Mesmo conteúdo, sete decisões diferentes.' },
    { nome: 'Lista do que dá para desligar', tipo: 'imprimivel', desc: 'O que sai da aula.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Cada mecanismo e o cuidado de condução.' }
  ],

  imprimiveis: [
    {
      titulo: 'Sete fichas de mecanismo',
      tipo: 'cartas',
      itens: [
        'ROLAGEM INFINITA. O conteúdo nunca acaba. Não existe fim de página, então nunca existe um momento natural de parar.',
        'REPRODUÇÃO AUTOMÁTICA. O próximo vídeo começa sozinho, com contagem regressiva curta. Parar exige uma ação; continuar não exige nenhuma.',
        'SEQUÊNCIA DE DIAS. O aplicativo conta quantos dias seguidos você entrou e mostra o número. Faltar um dia zera a contagem.',
        'NOTIFICAÇÃO EM LOTE. As notificações não chegam quando o evento acontece: são guardadas e enviadas em horários calculados para trazer a pessoa de volta.',
        'PUXAR PARA ATUALIZAR. O gesto de puxar a tela para carregar novidades, com um instante de espera antes de revelar o que veio.',
        'CONFIRMAÇÃO DE LEITURA E "DIGITANDO". A pessoa sabe que a outra viu e que está respondendo, o que cria obrigação de permanecer.',
        'CONTEÚDO DE PESSOAS PARECIDAS COM VOCÊ. A comparação é constante e sempre com o melhor momento da vida do outro.'
      ]
    },
    {
      titulo: 'Grade de análise',
      tipo: 'folha',
      corpo: 'Mecanismo: ____________________\n\n1. O QUE ELE FAZ, tecnicamente:\n____________________________________\n\n2. QUAL REAÇÃO DO CORPO OU DA CABEÇA ELE USA:\n( ) curiosidade sobre o que vem depois\n( ) medo de perder alguma coisa\n( ) medo de perder o que já foi acumulado\n( ) obrigação com outra pessoa\n( ) comparação\n( ) surpresa imprevisível\n\n3. O QUE ACONTECERIA SE ELE NÃO EXISTISSE:\nPara a pessoa: ____________________\nPara a empresa: ____________________\n\n4. ELE PODE SER DESLIGADO? ( ) sim ( ) não ( ) parcialmente\nOnde: ____________________\n\n5. ELE É SEMPRE RUIM? Em que situação ele seria útil?\n____________________________________'
    },
    {
      titulo: 'As duas telas (a virada)',
      tipo: 'folha',
      corpo: 'O MESMO APLICATIVO, MESMO CONTEÚDO, MESMAS FUNÇÕES.\n\nVERSÃO QUE PRENDE\n. rolagem sem fim\n. próximo vídeo começa em 3 segundos\n. contador de 47 dias seguidos, em destaque\n. 14 notificações por dia, em horários variados\n. puxar para atualizar, com meio segundo de suspense\n. mostra quando você leu e quando está digitando\n. feed cheio de gente parecida com você em momentos ótimos\n\nVERSÃO QUE RESPEITA\n. a página acaba, e diz "você viu tudo de hoje"\n. o próximo vídeo espera você escolher\n. sem contador de dias\n. notificações agrupadas, uma vez por dia, no horário que você escolheu\n. atualiza quando você abre, sem gesto e sem espera\n. confirmação de leitura desligada por padrão\n. feed em ordem cronológica de quem você segue\n\nAs duas telas mostram o mesmo conteúdo.\nA diferença são sete decisões de projeto.\n\nUM DADO PARA FECHAR: em plataformas dessa escala, existem equipes cujo indicador principal é o tempo médio de sessão. Aumentar esse número é a função do cargo.\n\nPergunta: contra o que exatamente a sua força de vontade está competindo?'
    },
    {
      titulo: 'Lista do que dá para desligar',
      tipo: 'folha',
      corpo: 'DÁ PARA DESLIGAR NA MAIORIA DOS APLICATIVOS\n( ) reprodução automática do próximo vídeo\n( ) notificações por tipo, uma a uma\n( ) confirmação de leitura\n( ) status de "digitando"\n( ) sugestões de quem seguir\n( ) resumo por e-mail\n\nNÃO COSTUMA DAR PARA DESLIGAR\n( ) rolagem infinita\n( ) ordem do feed, em muitos serviços\n( ) contador de sequência de dias\n\nO QUE EU VOU DESLIGAR ESTA SEMANA: ____________________\n\nO QUE EU ESPERO QUE MUDE: ____________________\n\nO QUE EU ACHO QUE VOU SENTIR FALTA: ____________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'CADA MECANISMO, EM UMA LINHA\n\nRolagem infinita: elimina o ponto de parada natural. Sem fim de página, parar vira decisão ativa, e decisão ativa cansa.\nReprodução automática: inverte o padrão. Continuar é o default e parar exige ação.\nSequência de dias: usa aversão à perda. O que prende não é o prêmio, é não perder o que já foi acumulado. Mesmo mecanismo do "custo já investido" do escape room.\nNotificação em lote: o momento do envio é escolhido para trazer de volta, não para informar.\nPuxar para atualizar: recompensa imprevisível com um gesto físico, e é a mecânica da caixa de recompensa, sem dinheiro.\nConfirmação de leitura: cria obrigação social e transfere pressão para quem recebeu.\nConteúdo comparável: alimenta comparação com o melhor recorte da vida do outro, e é o mais associado a efeito sobre autoestima.\n\nA PERGUNTA 5 DA GRADE é a mais importante e evita que a aula vire demonização. Confirmação de leitura é útil quando se espera resposta urgente. Notificação é útil para mensagem de família. Reprodução automática é útil para quem está com as mãos ocupadas. O problema não é existir, é vir ligado por padrão e ser difícil de desligar.\n\nCONDUÇÃO, o cuidado central\nA frase que a turma já ouviu mil vezes é "você tem que se controlar". Esta atividade existe para mostrar contra o que esse controle compete. Não substituir uma culpa por outra: o objetivo não é que o estudante se sinta manipulado e impotente, é que ele saiba o nome das coisas e saiba onde desligar.\n\nNÃO perguntar quanto tempo cada estudante passa em tela, nem pedir print da tela de tempo de uso. Isso é dado pessoal e comparação em sala é exatamente o mecanismo 7.\n\nA CONTA OPCIONAL, para Matemática: sete minutos a mais por dia dão 42 horas por ano, quase dois dias inteiros.'
    }
  ],

  mediacao: {
    perguntas: [
      'As duas telas têm o mesmo conteúdo. O que muda entre elas?',
      'Qual mecanismo usa medo de perder o que você já acumulou?',
      'Puxar para atualizar parece com qual coisa que a gente já estudou?',
      'Algum desses mecanismos é útil em alguma situação?',
      'Contra o que a sua força de vontade está competindo?',
      'Por que quase todos vêm ligados por padrão?'
    ],
    evitar: [
      'Terminar em "tenha mais força de vontade". É a frase que a atividade existe para desmontar.',
      'Terminar em impotência. O fechamento é a lista do que dá para desligar, e ela é concreta.',
      'Pedir print de tempo de uso ou perguntar quantas horas cada um passa. É dado pessoal e vira comparação.',
      'Demonizar todos os mecanismos. A pergunta 5 da grade existe para impedir isso.'
    ]
  },

  protecao: 'Nenhum aplicativo real é aberto em sala e nenhuma plataforma é nomeada nas fichas. Não solicitar dados de tempo de uso, capturas da tela de bem-estar digital nem comparação entre estudantes: além de ser dado pessoal, a comparação reproduz o sétimo mecanismo analisado. Se algum estudante relatar dificuldade significativa de controlar o uso, ou sofrimento associado, acolher em particular e encaminhar à orientação educacional.',

  evidencia: 'O grupo explica ao menos três mecanismos pela reação que exploram, reconhece que a diferença entre as duas telas é de projeto e não de conteúdo, e identifica quais mecanismos podem ser desligados.'
},

/* ==================================================================== 68 */
{
  id: 'uma-semana-de-dados-sobre-mim',
  insightCurto: 'Medir o próprio uso é a única forma de discutir com dado em vez de com palpite.',
  n: 68,
  titulo: 'Uma semana de dados sobre mim',
  chamada: 'Cada estudante vira pesquisador do próprio uso, com método, e ninguém entrega o dado a ninguém.',
  faixa: '15-17',
  duracao: 999,
  duracaoTexto: 'Projeto de duas aulas com uma semana entre elas',
  formato: 'investigacao',
  formatoDetalhe: 'Autoetnografia com protocolo e análise agregada',
  contexto: ['escola', 'individual'],
  tela: 'hibrido',
  situacao: ['dados', 'algoritmo'],
  disciplinas: ['Matemática', 'Ciências', 'Projeto de Vida'],
  preparo: 'medio',
  precisa: ['impressao'],
  grupo: 'individual',
  eixo: 'bemestar',
  nivel: 5,
  sensibilidade: 'media',
  selos: [],

  bncc: {
    principal: { codigo: 'EM13CO12', texto: 'Produzir, analisar, gerir e compartilhar informações a partir de dados, utilizando princípios de ciência de dados.' },
    secundaria: { codigo: 'EM13CO24', texto: 'Identificar e reconhecer como as redes sociais e artefatos computacionais em geral interferem na saúde física e mental de seus usuários.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Aplicar método de coleta e análise de dados sobre a própria prática, reconhecendo os limites da autoinformação.' },

  provocacao: 'Todo adulto tem uma opinião sobre quanto tempo vocês passam em tela. Vocês também têm uma opinião sobre isso. Nenhum dos dois lados tem dado. Em uma semana, vocês vão ter.',

  missao: 'Definir uma pergunta de pesquisa própria, coletar dados sobre si durante sete dias com um protocolo escrito antes, e analisar. Nenhum dado individual é entregue a ninguém.',

  virada: 'Na segunda aula, antes de qualquer análise, os estudantes comparam a estimativa que fizeram no primeiro dia com o que mediram. A diferença costuma ser grande, e em direções opostas: alguns superestimam muito, outros subestimam. A turma descobre que a autoinformação é um instrumento ruim, e que essa é exatamente a razão pela qual a discussão entre adultos e adolescentes sobre tela nunca chega a lugar nenhum: os dois lados estão discutindo estimativas.',

  insight: 'Ninguém sabe de cabeça quanto usa, nem para quê. Sem medir, a conversa é palpite contra palpite, e ganha quem tem mais autoridade, não quem tem razão.',

  transferencia: 'A mesma estrutura serve para qualquer hábito que a pessoa queira entender: definir a pergunta antes, medir o suficiente, e comparar com a própria estimativa.',

  roteiro: [
    { t: 'Aula 1, 0 a 12 min',  o: 'Provocação. Cada estudante escreve, lacrado em envelope próprio, a estimativa de quanto tempo usa por dia e em quê. Ninguém mostra.' },
    { t: 'Aula 1, 12 a 30 min', o: 'Cada um define a própria pergunta de pesquisa e escreve o protocolo: o que vai medir, como, com que frequência, e o que NÃO vai medir.' },
    { t: 'Aula 1, 30 a 45 min', o: 'Revisão de protocolo em duplas, olhando só o método, nunca o conteúdo. Combinar as regras de privacidade da turma.' },
    { t: 'Durante a semana',    o: 'Coleta individual. O professor não vê os dados de ninguém, em nenhum momento.' },
    { t: 'Aula 2, 0 a 10 min',  o: 'A virada. Abrir o envelope da estimativa e comparar com o medido. Registrar apenas a DIFERENÇA, em percentual, de forma anônima no quadro.' },
    { t: 'Aula 2, 10 a 30 min', o: 'Análise individual: o que os dados mostram, o que eles não conseguem mostrar, e qual decisão eles sustentam.' },
    { t: 'Aula 2, 30 a 45 min', o: 'Agregação anônima: só os padrões que a turma quiser tornar públicos. Discussão sobre o que muda quando existe dado.' }
  ],

  versoes: {
    escola: 'Individual, com duas aulas e uma semana entre elas. Integra Matemática de forma legítima, com coleta, média, dispersão e erro de estimativa. A regra que sustenta tudo é que nenhum dado individual chega ao professor.',
    familia: 'Cada pessoa da casa faz a própria estimativa e a própria medição, incluindo os adultos. Comparar só as diferenças percentuais, nunca os números absolutos. Adultos costumam errar tanto quanto adolescentes, e descobrir isso muda a conversa em casa.',
    jovem: 'É a versão principal desta atividade. Dá para fazer sozinho, sem escola nenhuma: escreva a estimativa, meça uma semana, compare.'
  },

  kit: [
    { nome: 'Envelope da estimativa', tipo: 'imprimivel', desc: 'Lacrado na aula 1, aberto na aula 2.' },
    { nome: 'Folha de protocolo', tipo: 'editavel', desc: 'Escrita antes da coleta.' },
    { nome: 'Perguntas de pesquisa sugeridas', tipo: 'imprimivel', desc: 'Para quem não souber por onde começar.' },
    { nome: 'Folha de análise', tipo: 'editavel', desc: 'Com a seção de limites do método.' },
    { nome: 'Regras de privacidade da turma', tipo: 'imprimivel', desc: 'Combinadas antes da coleta.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Erros de método esperados e cuidados.' }
  ],

  imprimiveis: [
    {
      titulo: 'Envelope da estimativa',
      tipo: 'folha',
      corpo: 'Preencher na aula 1, dobrar, lacrar e guardar. Ninguém mostra para ninguém.\n\nMINHA ESTIMATIVA, sem consultar nada:\n\nEu uso tela cerca de ______ horas por dia.\n\nO que mais consome esse tempo é ____________________.\n\nEu pego o celular cerca de ______ vezes por dia.\n\nO momento do dia em que eu mais uso é ____________________.\n\nEu acho que na semana da medição eu vou ( ) usar menos que o normal ( ) usar o normal ( ) usar mais.'
    },
    {
      titulo: 'Perguntas de pesquisa sugeridas',
      tipo: 'cartas',
      nota: 'Só para quem travar. A melhor pergunta é a que o estudante quer mesmo responder.',
      itens: [
        'Quanto do meu tempo de tela é escolhido por mim e quanto é reação a notificação?',
        'Existe relação entre a hora em que eu paro de usar e a hora em que eu consigo dormir?',
        'Em quais momentos do dia eu pego o celular sem ter motivo?',
        'Qual aplicativo eu abro mais vezes, e qual me toma mais tempo? São o mesmo?',
        'Quanto tempo eu passo criando alguma coisa e quanto tempo eu passo só olhando?',
        'Depois de qual atividade eu me sinto melhor, e depois de qual eu me sinto pior?'
      ]
    },
    {
      titulo: 'Folha de protocolo',
      tipo: 'editavel',
      corpo: 'Escrever ANTES de começar a medir.\n\nMINHA PERGUNTA DE PESQUISA:\n____________________________________\n\nO QUE EU VOU MEDIR, com precisão:\n____________________________________\n\nCOMO EU VOU MEDIR:\n( ) ferramenta de tempo de uso do aparelho\n( ) anotação minha, ______ vezes por dia\n( ) as duas\n\nCOM QUE FREQUÊNCIA: ____________________\n\nDURANTE QUANTOS DIAS: ______ (mínimo 5, para pegar dia de semana e fim de semana)\n\nO QUE EU NÃO VOU MEDIR, de propósito:\n____________________________________\n\nO QUE PODE DAR ERRADO NA MINHA MEDIÇÃO:\n____________________________________\n\nEU VOU MUDAR MEU COMPORTAMENTO POR ESTAR MEDINDO? Provavelmente sim.\nComo eu vou levar isso em conta na análise?\n____________________________________'
    },
    {
      titulo: 'Folha de análise',
      tipo: 'editavel',
      corpo: '1. MINHA ESTIMATIVA ERA: ______   O MEDIDO FOI: ______\nDiferença: ______%   Eu ( ) superestimei ( ) subestimei\n\n2. O QUE OS DADOS MOSTRAM, em três frases, sem interpretação:\n____________________________________\n\n3. O QUE ELES NÃO CONSEGUEM MOSTRAR:\n____________________________________\n\n4. O QUE PODE TER DISTORCIDO a medição:\n____________________________________\n\n5. QUAL DECISÃO estes dados sustentam, e qual eles NÃO sustentam:\nSustentam: ____________________\nNão sustentam: ____________________\n\n6. EU VOU MUDAR ALGUMA COISA? ( ) sim ( ) não ( ) ainda não sei\nSe sim, o quê, e como eu vou saber se funcionou?\n____________________________________\n\n7. O QUE EU ACEITO COMPARTILHAR com a turma, se eu quiser:\n____________________________________'
    },
    {
      titulo: 'Regras de privacidade da turma',
      tipo: 'cartaz',
      corpo: 'COMBINADO ANTES DA COLETA\n\n1. Os dados são de cada um. O professor não vê os dados individuais de ninguém, em nenhum momento, nem para avaliar.\n\n2. Ninguém é obrigado a compartilhar nada. Compartilhar é opcional e a qualquer momento dá para voltar atrás.\n\n3. O que for agregado no quadro é anônimo e só entra com autorização de quem forneceu.\n\n4. Não se comenta o dado de outra pessoa, nem em tom de brincadeira. Nem depois da aula.\n\n5. A nota é pelo MÉTODO e pela ANÁLISE, nunca pelo número. Quem descobriu que usa muito não tem nota pior que quem usa pouco.\n\n6. Quem não quiser medir tempo de tela pode escolher outro hábito para pesquisar, com o mesmo método.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'ERROS DE MÉTODO ESPERADOS, e todos são produtivos\n\n1. Não escrever o protocolo antes. Sem ele, a análise vira narrativa.\n2. Medir tudo. Perguntas boas são estreitas. "Quanto tempo eu uso" é pior que "em quais momentos eu pego sem motivo".\n3. Ignorar o efeito da observação. Medir muda o comportamento, e reconhecer isso na seção 4 é sinal de rigor, não de falha.\n4. Confundir correlação com causa na seção 5, principalmente na pergunta sobre sono.\n5. Medir só dias de semana. Por isso o mínimo de 5 dias.\n\nA VIRADA, e por que ela é o centro\nO erro de estimativa costuma ficar entre 30% e 60%, em ambas as direções. Registrar no quadro apenas a diferença percentual, anônima, produz uma distribuição que a turma olha junta sem ninguém se expor. A conclusão que emerge sozinha é que a discussão entre adultos e adolescentes sobre tela é palpite contra palpite. Vale nomear: quem tem dado muda de posição na conversa.\n\nO CUIDADO QUE SUSTENTA A ATIVIDADE\nDados de uso são dados pessoais sensíveis de adolescentes. A regra de que o professor não vê os dados individuais não é formalidade: é o que permite honestidade na coleta. Se a nota depender do número, o número será falsificado, e com razão.\n\nA regra 6, de poder pesquisar outro hábito, existe para quem não se sente confortável medindo uso de tela, incluindo estudantes em situação de sofrimento relacionado. Não perguntar o motivo de ninguém que optar por isso.\n\nSE ALGUÉM DESCOBRIR um padrão que o preocupe, não transformar em caso da turma. Acolher em particular e, se houver sofrimento, encaminhar à orientação educacional.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quem superestimou e quem subestimou? A distribuição diz alguma coisa?',
      'Por que a gente erra tanto sobre o próprio uso?',
      'Você mudou seu comportamento por estar medindo? Isso invalida o dado?',
      'Qual decisão esses dados sustentam, e qual eles não sustentam?',
      'O que muda numa discussão sobre tela quando existe dado dos dois lados?'
    ],
    evitar: [
      'Pedir os dados individuais, para avaliar ou para qualquer outra finalidade. Destrói a honestidade da coleta.',
      'Comparar estudantes por tempo de uso. É exposição e não ensina nada.',
      'Aceitar conclusão causal a partir de uma semana de dados de uma pessoa.',
      'Transformar a atividade em campanha de redução de tela. O produto é método, e a decisão é de cada um.'
    ]
  },

  protecao: 'Dados de uso são dados pessoais sensíveis de adolescentes. O professor não acessa os dados individuais de nenhum estudante, em nenhum momento, nem para fins de avaliação: a nota é pelo protocolo e pela análise. Nenhum dado individual é publicado, comparado ou comentado. A agregação é anônima e só com autorização. Quem preferir não medir uso de tela pode pesquisar outro hábito, sem precisar justificar. Se algum estudante relatar sofrimento associado ao uso, acolher em particular e encaminhar à orientação educacional.',

  evidencia: 'O estudante escreve o protocolo antes da coleta, compara estimativa e medição reconhecendo o próprio erro, e distingue por escrito o que os dados sustentam do que não sustentam.'
}

);
