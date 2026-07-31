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
  precisa: ['impressao'],
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
  precisa: ['papel'],
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
  precisa: ['papel'],
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
  precisa: ['so-voz'],
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
  precisa: ['impressao'],
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
  precisa: ['impressao'],
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
  precisa: ['impressao'],
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
