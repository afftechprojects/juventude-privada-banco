/* Eixo Como funciona por dentro. Acrescentado porque o banco ensinava a criticar
   sistemas sem nunca abrir um, e crítica sem mecanismo vira opinião. Cobre códigos
   de Mundo Digital que estavam totalmente descobertos: EF06CO07 (transmissão em
   pacotes), EF09CO05 (criptografia), EF07CO10 (descarte), EM13CO15 (interação). */

window.JP.ATIVIDADES.push(

/* ==================================================================== 69 */
{
  id: 'a-viagem-do-pacote',
  insightCurto: 'Sua mensagem não vai direto. Ela é picada em pedaços que passam por máquinas de estranhos.',
  n: 69,
  titulo: 'A viagem do pacote',
  chamada: 'Uma frase é picada em seis pedaços que atravessam a sala por caminhos diferentes.',
  faixa: '9-10',
  duracao: 40,
  duracaoCurta: 25,
  comoEncurtar: 'Em 25 minutos: uma rodada de envio em vez de duas e corte a etapa do roteador que cai. A rodada do envelope aberto, que é a virada, não sai.',
  formato: 'simulacao',
  formatoDetalhe: 'Simulação corporal com envelopes',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['dados'],
  disciplinas: ['Ciências', 'Matemática', 'Geografia'],
  preparo: 'medio',
  precisa: ['espaco', 'impressao', 'objetos'],
  grupo: 'turma',
  eixo: 'infraestrutura',
  nivel: 2,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF06CO07', texto: 'Entender o processo de transmissão de dados, como a informação é quebrada em pedaços, transmitida em pacotes através de múltiplos equipamentos, e reconstruída no destino.' },
    secundaria: { codigo: 'EF05CO06', texto: 'Reconhecer que os dados podem ser armazenados em um dispositivo local ou remoto.' },
    nota: 'EF06CO07 é do 6º ano e aqui é antecipado de forma corporal, sem vocabulário técnico.'
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Compreender que a comunicação em rede envolve fragmentação, roteamento por terceiros e reconstrução.' },

  provocacao: 'Quando você manda uma mensagem, ela não vai voando em linha reta até a pessoa. Vocês vão descobrir o que realmente acontece, e vai ser mais estranho do que parece.',

  missao: 'Fazer uma frase atravessar a sala inteira, picada em pedaços, e chegar montada do outro lado.',

  virada: 'Na segunda rodada, o facilitador entrega os envelopes ABERTOS. Cada roteador, ao passar o pedaço adiante, consegue ler o que está escrito. A turma descobre que a mensagem passa pelas mãos de gente que ela não escolheu, e que cada uma dessas mãos poderia ter lido. Então entra o envelope lacrado, que ninguém consegue abrir no caminho, e a diferença fica óbvia sem ninguém dizer a palavra criptografia.',

  insight: 'A mensagem não viaja inteira nem direto. Ela é picada, cada pedaço vai por um caminho, e todos passam por máquinas de gente que você não conhece.',

  transferencia: 'Quando alguém diz que uma conversa é "privada", vale perguntar por quantas mãos ela passa no caminho, e se essas mãos conseguem ler.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Organizar a sala: 1 remetente, 1 destinatário, 6 a 8 roteadores espalhados. Explicar a regra: cada roteador só pode passar para um vizinho, nunca direto ao destino.' },
    { t: '8 a 18 min',  o: 'Primeira rodada com envelopes fechados. Picar a frase em seis pedaços numerados, cada um em um envelope, e soltar na rede. O destinatário remonta pela numeração.' },
    { t: '18 a 24 min', o: 'Complicar: um roteador "cai" e não passa nada. A turma descobre que os pedaços encontram outro caminho, e que o número serve para remontar mesmo fora de ordem.' },
    { t: '24 a 32 min', o: 'A virada. Segunda rodada com envelopes ABERTOS. Cada roteador lê e anota o que passou por ele. Ler em voz alta o que os roteadores viram.' },
    { t: '32 a 37 min', o: 'Terceira rodada com envelope lacrado e conteúdo embaralhado por uma regra secreta que só remetente e destinatário conhecem. Os roteadores leem e não entendem nada.' },
    { t: '37 a 40 min', o: 'Fechamento com o cartaz das três descobertas.' }
  ],

  versoes: {
    escola: 'Turma inteira, precisa de espaço para circular. Integra Ciências e Geografia, pela ideia de rota. Se houver mapa-múndi na sala, vale mostrar depois por onde passam os cabos submarinos, e que uma mensagem entre dois vizinhos pode atravessar o oceano.',
    familia: 'Versão de mesa com bilhetes e três pessoas fazendo o papel de roteador. Depois conversar sobre o que quer dizer uma mensagem ser "de ponta a ponta".',
    jovem: 'A partir de 11 anos, acrescentar a pergunta de quem são os roteadores no mundo real: provedor, empresa do aplicativo, e os países por onde o cabo passa.'
  },

  kit: [
    { nome: 'Frase para picar', tipo: 'imprimivel', desc: 'Já dividida em seis pedaços numerados.' },
    { nome: 'Crachás de roteador', tipo: 'imprimivel', desc: 'Com a regra de cada um.' },
    { nome: 'Folha do roteador curioso', tipo: 'imprimivel', desc: 'Para anotar o que passou, na segunda rodada.' },
    { nome: 'Regra do embaralhamento', tipo: 'imprimivel', desc: 'A cifra simples da terceira rodada.' },
    { nome: 'Cartaz das três descobertas', tipo: 'imprimivel', desc: 'Fechamento.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Como conduzir cada rodada.' }
  ],

  imprimiveis: [
    {
      titulo: 'Frase para picar',
      tipo: 'cartas',
      nota: 'Cada pedaço em um envelope, com o número por fora.',
      itens: [
        'Pedaço 1: A GENTE COMBINOU',
        'Pedaço 2: DE JOGAR BOLA',
        'Pedaço 3: NA QUADRA',
        'Pedaço 4: DEPOIS DA AULA',
        'Pedaço 5: LEVA A BOLA',
        'Pedaço 6: AZUL'
      ]
    },
    {
      titulo: 'Crachás de roteador',
      tipo: 'cartas',
      corpo: 'Um crachá por roteador, com o nome e a regra:\n\nEU SOU UM ROTEADOR\n\nMinha regra:\n1. Eu recebo um pedaço.\n2. Eu passo para UM vizinho, nunca direto para o destino.\n3. Eu não escolho o caminho inteiro, só o próximo passo.\n4. Se eu cair, os pedaços procuram outro caminho.\n\nNa segunda rodada, eu ganho uma regra nova:\n5. Eu POSSO LER o que passa por mim.'
    },
    {
      titulo: 'Folha do roteador curioso (segunda rodada)',
      tipo: 'folha',
      corpo: 'Roteador nº ______\n\nO que passou por mim:\nPedaço ______: "____________________"\nPedaço ______: "____________________"\nPedaço ______: "____________________"\n\nEu consigo entender a mensagem inteira? ( ) sim ( ) não ( ) mais ou menos\n\nSe eu juntar com o que os outros roteadores viram, a gente monta a mensagem?\n( ) sim ( ) não\n\nA pessoa que mandou escolheu que eu passasse a mensagem dela? ( ) sim ( ) não'
    },
    {
      titulo: 'Regra do embaralhamento (terceira rodada)',
      tipo: 'folha',
      corpo: 'Só o remetente e o destinatário recebem esta folha. Os roteadores não podem ver.\n\nREGRA SECRETA: cada letra vira a letra três posições à frente no alfabeto.\n\nA vira D, B vira E, C vira F, e assim por diante. No fim, X vira A, Y vira B, Z vira C.\n\nExemplo: BOLA vira EROD.\n\nO remetente embaralha antes de mandar.\nO destinatário desembaralha ao receber.\nOs roteadores leem EROD e não entendem nada.'
    },
    {
      titulo: 'Cartaz das três descobertas',
      tipo: 'cartaz',
      corpo: 'O QUE A GENTE DESCOBRIU\n\n1. A mensagem não vai inteira. Ela é PICADA em pedaços numerados, e cada pedaço pode ir por um caminho diferente.\n\n2. Os pedaços passam por MÁQUINAS DE GENTE QUE A GENTE NÃO ESCOLHEU. Se elas quiserem, elas leem.\n\n3. Dá para EMBARALHAR antes de mandar. Aí quem está no meio do caminho vê o pedaço passar, mas não entende o que está escrito.\n\nA pergunta que fica:\nQuando alguém diz que uma conversa é privada, privada de quem?'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'CONDUÇÃO POR RODADA\n\nRodada 1, envelopes fechados: o objetivo é só ver a mensagem chegar montada. Deixar os pedaços chegarem fora de ordem de propósito, e deixar o destinatário descobrir sozinho que o número resolve.\n\nRodada do roteador que cai: derrubar um roteador central, sem avisar. Os pedaços travam, e alguém sempre propõe desviar. É exatamente o que a rede faz, e vale nomear em linguagem simples: quando um caminho fecha, os pedaços procuram outro.\n\nRodada 2, envelopes abertos: é a virada e precisa de tempo. Ler em voz alta a folha de cada roteador. Quando os roteadores juntam o que viram, a mensagem aparece inteira. A pergunta que fecha é a última da folha: a pessoa que mandou escolheu que aquele roteador passasse a mensagem dela? Não escolheu, e nem sabe quem são.\n\nRodada 3, embaralhamento: a cifra de César é fraca de propósito, e não é o ponto. O ponto é a experiência de ver o roteador segurando o papel sem entender. Se a turma quebrar a cifra, ótimo, é uma discussão excelente sobre segredo fraco e segredo forte, e conecta com "Segredo com cadeado", dos 11 aos 14.\n\nO QUE NÃO FAZER\nNão usar as palavras pacote, roteamento, protocolo ou criptografia antes do fechamento. Elas chegam depois da experiência, e antes delas só atrapalham. No cartaz final, se a turma quiser, dá para escrever os nomes ao lado das três descobertas.\n\nA MENSAGEM da atividade é combinada e inofensiva de propósito: nada que exponha ninguém, já que ela vai ser lida em voz alta por metade da turma.'
    }
  ],

  mediacao: {
    perguntas: [
      'Os pedaços chegaram na ordem? Como o destinatário montou?',
      'Quando o roteador caiu, o que aconteceu?',
      'Quem escolheu por quais roteadores a mensagem passaria?',
      'Na segunda rodada, os roteadores juntos conseguiram montar a mensagem?',
      'Na terceira, o que exatamente mudou para o roteador?',
      'Quando alguém diz que uma conversa é privada, privada de quem?'
    ],
    evitar: [
      'Usar vocabulário técnico antes da experiência. As palavras entram no fechamento, e não antes.',
      'Pular a rodada dos envelopes abertos. É a única que produz o insight de privacidade.',
      'Usar como mensagem qualquer coisa sobre uma pessoa da turma. Ela vai ser lida em voz alta.',
      'Transformar em alarme sobre vigilância. A conclusão é sobre como funciona, e a pergunta fica aberta.'
    ]
  },

  protecao: 'A mensagem transmitida é combinada, fictícia e inofensiva, porque será lida em voz alta por vários estudantes. Não usar nome, dado ou situação de ninguém da turma. Nenhum aparelho é usado e nenhuma comunicação real é interceptada ou simulada com dados verdadeiros.',

  evidencia: 'A criança explica que a mensagem é fragmentada e reconstruída pela numeração, reconhece que os intermediários não foram escolhidos por quem enviou, e identifica o efeito do embaralhamento sobre quem está no caminho.'
},

/* ==================================================================== 70 */
{
  id: 'a-vida-do-celular',
  insightCurto: 'O celular não começa na loja nem termina na gaveta. Ele tem antes e depois, e os dois são físicos.',
  n: 70,
  titulo: 'A vida do celular',
  chamada: 'Do mineral na terra ao lixo eletrônico, passando por muita gente que você nunca vai conhecer.',
  faixa: '9-10',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: monte a linha da vida com seis etapas em vez de dez e vá direto ao dado da troca. A folha de decisão final é obrigatória.',
  formato: 'investigacao',
  formatoDetalhe: 'Linha da vida do produto',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['propaganda'],
  disciplinas: ['Geografia', 'Ciências', 'Matemática', 'História'],
  preparo: 'medio',
  precisa: ['impressao'],
  grupo: 'pequeno',
  eixo: 'infraestrutura',
  nivel: 3,
  sensibilidade: 'baixa',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF07CO10', texto: 'Identificar os impactos ambientais do descarte de peças de computadores e eletrônicos, bem como sua relação com a sustentabilidade.' },
    secundaria: { codigo: 'EF06CO10', texto: 'Analisar o consumo de tecnologia na sociedade, compreendendo criticamente o caminho da produção dos recursos bem como aspectos ligados à obsolescência e a sustentabilidade.' },
    nota: 'Os dois códigos são do 6º e 7º anos e aqui são antecipados, no nível de seguir a cadeia sem entrar em economia.'
  },
  unesco: { dimensao: 'etica', competencia: 'Reconhecer a materialidade dos artefatos digitais e os efeitos ambientais e sociais de sua cadeia.' },

  provocacao: 'Este celular pesa cerca de 180 gramas. Para ele existir, foram movidas dezenas de quilos de terra e pedra. Vocês vão seguir esse caminho inteiro.',

  missao: 'Montar a linha da vida do celular em dez etapas, na ordem certa, e descobrir em quais delas existe uma pessoa trabalhando.',

  virada: 'Com a linha montada, o facilitador entrega o cartão do tempo: quanto dura cada etapa. A extração leva milhões de anos para formar o mineral. A fabricação leva meses. O uso, no Brasil, dura em média menos de três anos. E a decomposição do que sobra leva séculos. A turma vê que a etapa mais curta da linha inteira é justamente a única que a gente vive.',

  insight: 'A parte do celular que a gente conhece é a menor de todas. Antes dele existir e depois dele parar, existe uma história longa, física, e com gente dentro.',

  transferencia: 'Antes de trocar um aparelho que ainda funciona, dá para perguntar o que exatamente melhorou. E, quando trocar, existe lugar certo para o antigo ir.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Provocação com um aparelho velho na mão, se houver. Distribuir as dez etapas embaralhadas.' },
    { t: '8 a 22 min',  o: 'Em grupos, montar a linha na ordem e marcar em quais etapas existe pessoa trabalhando.' },
    { t: '22 a 30 min', o: 'Conferir a ordem juntos. Contar quantas etapas têm pessoas: são quase todas.' },
    { t: '30 a 38 min', o: 'A virada. Entregar o cartão do tempo e escrever as durações ao lado de cada etapa. Comparar visualmente.' },
    { t: '38 a 46 min', o: 'Investigar as três saídas possíveis do fim da linha: gaveta, lixo comum e ponto de coleta. O que acontece em cada uma.' },
    { t: '46 a 50 min', o: 'Folha de decisão: o que a turma faz com o próximo aparelho que parar de funcionar.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Integra Geografia de forma muito direta, com recursos minerais e cadeia produtiva, e Ciências, com decomposição e contaminação. Se a escola quiser, a atividade pode virar projeto real de ponto de coleta.',
    familia: 'Montar a linha na mesa e depois abrir a gaveta dos aparelhos velhos da casa. Contar quantos existem e há quanto tempo. Descobrir junto onde fica o ponto de coleta mais próximo.',
    jovem: 'A partir de 11 anos, acrescentar a pergunta de por que os aparelhos duram menos do que poderiam, e o que é obsolescência programada. É uma conversa de economia, e vale.'
  },

  kit: [
    { nome: 'Dez etapas da vida', tipo: 'imprimivel', desc: 'Cartões embaralhados.' },
    { nome: 'Cartão do tempo', tipo: 'imprimivel', desc: 'A virada. Quanto dura cada etapa.' },
    { nome: 'As três saídas', tipo: 'imprimivel', desc: 'Gaveta, lixo comum, ponto de coleta.' },
    { nome: 'Folha de decisão', tipo: 'editavel', desc: 'O que a turma faz com o próximo aparelho.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Ordem, números e cuidados.' }
  ],

  imprimiveis: [
    {
      titulo: 'Dez etapas da vida do celular',
      tipo: 'cartas',
      nota: 'Embaralhar. Cada cartão traz a etapa e uma pergunta sobre quem trabalha ali.',
      itens: [
        'O mineral se forma dentro da terra, ao longo de muito tempo.',
        'Alguém extrai o mineral de uma mina. Quem trabalha aqui?',
        'O minério é transportado, muitas vezes para outro continente.',
        'O material é refinado e transformado em peças pequenas. Quem trabalha aqui?',
        'As peças viram componentes numa fábrica. Quem trabalha aqui?',
        'O aparelho é montado, testado e embalado. Quem trabalha aqui?',
        'O celular viaja de navio, avião e caminhão até a loja.',
        'Alguém compra e usa o celular. Quem trabalha aqui?',
        'O celular para de funcionar, fica lento ou sai de moda.',
        'O que sobra vai para algum lugar. Para onde?'
      ]
    },
    {
      titulo: 'Cartão do tempo (a virada)',
      tipo: 'folha',
      corpo: 'QUANTO DURA CADA ETAPA\n\nO mineral se formar dentro da terra: MILHÕES DE ANOS\nExtrair, transportar e refinar: SEMANAS A MESES\nFabricar e montar: DIAS\nViajar até a loja: SEMANAS\nSER USADO: no Brasil, em média MENOS DE 3 ANOS\nFicar na gaveta depois: MESES OU ANOS\nSe decompor no lixo comum: SÉCULOS, e alguns materiais nunca\n\nOlhem a linha de vocês e escrevam esses tempos ao lado de cada etapa.\n\nQual é a etapa MAIS CURTA da linha inteira?\n\nÉ a única que a gente vive.'
    },
    {
      titulo: 'As três saídas',
      tipo: 'cartas',
      itens: [
        'SAÍDA 1, A GAVETA. O aparelho fica guardado. Não polui agora, mas os materiais dele ficam parados, e eles são justamente os que exigiram mais terra movida para existir. Quantos aparelhos parados existem na sua casa?',
        'SAÍDA 2, O LIXO COMUM. Vai para aterro. Alguns componentes soltam substâncias que contaminam solo e água. É a saída mais barata e a pior de todas, e é para onde vai a maior parte.',
        'SAÍDA 3, O PONTO DE COLETA. O aparelho é desmontado e parte dos materiais volta para a cadeia. Não recupera tudo, e a reciclagem de eletrônico é difícil e cara, mas evita a contaminação e devolve material.'
      ]
    },
    {
      titulo: 'Folha de decisão',
      tipo: 'editavel',
      corpo: 'A ETAPA MAIS CURTA da linha é ____________________, e dura ______.\n\nEM QUANTAS DAS DEZ ETAPAS existe uma pessoa trabalhando? ______\n\nO PONTO DE COLETA mais perto da nossa escola fica em: ____________________\n(o professor levanta antes, ou a turma pesquisa)\n\nO QUE A NOSSA TURMA FAZ com o próximo aparelho que parar:\n____________________________________\n\nANTES DE TROCAR um aparelho que ainda funciona, a gente pergunta:\n1. ____________________________________\n2. ____________________________________\n\nUMA COISA que a gente pode propor para a escola:\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'ORDEM CORRETA: a sequência em que os cartões estão listados.\n\nPESSOAS TRABALHANDO: em oito das dez etapas. As duas sem pessoa são a formação do mineral e, dependendo de como a turma responder, a decomposição. Vale insistir na pergunta: quase toda etapa tem trabalho humano, e boa parte dele é invisível para quem usa.\n\nSOBRE A ETAPA DA MINA\nÉ possível e legítimo mencionar que parte da extração acontece em condições de trabalho muito ruins, inclusive com trabalho infantil em algumas regiões. Fazer isso com sobriedade e sem imagens: a informação basta, e a idade pede cuidado. Não transformar em culpa de quem tem celular.\n\nO NÚMERO QUE FECHA\nA comparação visual entre milhões de anos, três anos e séculos é o que fica. Escrever os três na mesma linha do quadro produz o efeito sozinho.\n\nSOBRE A SAÍDA 1\nA gaveta parece a saída neutra e é a mais comum. O ponto não é que ela seja má, é que ela imobiliza material escasso. Perguntar quantos aparelhos parados existem na casa de cada um costuma render números altos, e é uma pergunta segura, porque não expõe ninguém.\n\nO QUE EVITAR\nNão terminar com culpa individual sobre ter ou trocar celular. Crianças de 9 e 10 anos não decidem isso. A folha de decisão pergunta o que a TURMA faz e o que dá para propor à escola, o que devolve alguma capacidade de ação real.\n\nSE A ESCOLA QUISER, esta atividade vira projeto: montar um ponto de coleta na escola é concreto, mensurável e resolve a etapa 10 para a comunidade inteira.'
    }
  ],

  mediacao: {
    perguntas: [
      'Qual é a etapa mais curta da linha inteira?',
      'Em quantas etapas existe uma pessoa trabalhando?',
      'A gaveta é uma saída boa?',
      'Por que a reciclagem de eletrônico é mais difícil que a de papel?',
      'O que dá para perguntar antes de trocar um aparelho que ainda funciona?'
    ],
    evitar: [
      'Terminar em culpa individual. Criança não decide compra de celular, e culpa não produz nenhuma ação.',
      'Mostrar imagens de trabalho em minas. A informação verbal, sóbria, é suficiente e adequada à idade.',
      'Perguntar quantos celulares cada família tem ou de que marca. Vira comparação socioeconômica.',
      'Deixar de fora a saída 3. Sem uma ação possível, a atividade só produz desânimo.'
    ]
  },

  protecao: 'Não perguntar quantos aparelhos cada estudante ou cada família possui, nem marcas, nem valores: isso expõe diferença socioeconômica dentro da turma. A pergunta sobre aparelhos parados é feita à turma como total, nunca individualizada. Não exibir imagens de condições de trabalho em minas. Nenhuma marca real é citada.',

  evidencia: 'O grupo ordena corretamente a cadeia, identifica que a etapa de uso é a mais curta, e propõe pelo menos uma ação concreta para o destino dos aparelhos.'
},

/* ==================================================================== 71 */
{
  id: 'segredo-com-cadeado',
  insightCurto: 'Dá para combinar um segredo com alguém que você nunca encontrou, na frente de todo mundo.',
  n: 71,
  titulo: 'Segredo com cadeado',
  chamada: 'Da cifra que a turma quebra em cinco minutos ao cadeado que ninguém abre, sem computador.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: faça a rodada da cifra e a do cadeado com cores, cortando a rodada da frequência de letras. A pergunta final sobre ponta a ponta é o fecho.',
  formato: 'jogo',
  formatoDetalhe: 'Desafio de criptografia desplugada',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['dados', 'golpe'],
  disciplinas: ['Matemática', 'Língua Portuguesa', 'Ciências'],
  preparo: 'baixo',
  precisa: ['impressao', 'objetos'],
  grupo: 'pequeno',
  eixo: 'infraestrutura',
  nivel: 4,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF09CO05', texto: 'Analisar técnicas de criptografia para armazenamento e transmissão de dados.' },
    secundaria: { codigo: 'EF07CO07', texto: 'Identificar problemas de segurança cibernética e experimentar formas de proteção.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Compreender o princípio da criptografia e a diferença entre segredo compartilhado e chave pública.' },

  provocacao: 'Vocês vão combinar um segredo com um grupo do outro lado da sala, gritando as instruções em voz alta, na frente de todo mundo. E ninguém no meio vai descobrir qual é o segredo.',

  missao: 'Três rodadas: quebrar uma cifra fraca, descobrir por que ela é fraca, e depois trocar um segredo em público sem ninguém no meio entender.',

  virada: 'Na terceira rodada, o facilitador entrega os cadeados coloridos. Cada grupo tem um cadeado aberto (a chave pública, que ele distribui para todo mundo) e a única chave que abre (a chave privada, que fica com ele). Para mandar um segredo, o remetente tranca a caixa com o cadeado do destinatário. Qualquer um pode trancar. Só o dono abre. A turma descobre que dá para combinar segredo sem nunca ter combinado nada antes, e essa é a ideia que sustenta praticamente tudo que é seguro na internet.',

  insight: 'Segredo fraco é o que depende de uma regra simples. Segredo forte é o que depende de uma chave que ninguém mais tem, e existe um jeito de trancar sem saber destrancar.',

  transferencia: 'Quando um aplicativo diz que a conversa é "de ponta a ponta", ele está dizendo que quem está no meio recebe a caixa trancada, e não tem a chave.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Apresentar o desafio. Distribuir a cifra de César já pronta e as mensagens cifradas.' },
    { t: '6 a 16 min',  o: 'Rodada 1: cada grupo decifra a mensagem que recebeu, sabendo o deslocamento. Rápido e todo mundo consegue.' },
    { t: '16 a 28 min', o: 'Rodada 2: agora sem saber o deslocamento. Entregar a tabela de frequência de letras do português. Os grupos quebram a cifra sozinhos. Descobrir por que ela é fraca.' },
    { t: '28 a 40 min', o: 'A virada. Rodada 3 com os cadeados coloridos. Cada grupo distribui o cadeado aberto e guarda a chave. Trocar mensagens em público.' },
    { t: '40 a 46 min', o: 'Discussão: o que exatamente aconteceu na rodada 3? Quem podia trancar? Quem podia abrir?' },
    { t: '46 a 50 min', o: 'Fechamento com as três perguntas sobre ponta a ponta.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Precisa de cadeados de combinação ou de caixinhas com fecho, um por grupo, em cores diferentes. Se não houver, funciona com envelopes lacrados com fita colorida e a regra de que só o dono da cor pode abrir. Integra Matemática, na frequência de letras.',
    familia: 'Fazer as rodadas 1 e 2 na mesa, com bilhetes. A rodada 3 funciona com dois cadeados e duas caixinhas. Depois conversar sobre o que quer dizer o cadeado que aparece no navegador.',
    jovem: 'Individual: cifrar uma mensagem, dar para alguém quebrar, e cronometrar. Depois pesquisar por que a cifra de César é considerada quebrada há séculos.'
  },

  kit: [
    { nome: 'Roda de cifra', tipo: 'imprimivel', desc: 'Para recortar e montar, com dois discos.' },
    { nome: 'Mensagens cifradas', tipo: 'imprimivel', desc: 'Para as rodadas 1 e 2.' },
    { nome: 'Tabela de frequência do português', tipo: 'imprimivel', desc: 'A ferramenta que quebra a cifra.' },
    { nome: 'Instruções da rodada dos cadeados', tipo: 'roteiro', desc: 'A virada.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Soluções e como conduzir a analogia.' }
  ],

  imprimiveis: [
    {
      titulo: 'Roda de cifra',
      tipo: 'folha',
      corpo: 'Dois discos concêntricos para recortar, o de fora maior que o de dentro.\n\nCada disco tem o alfabeto completo em volta, de A a Z, em ordem.\n\nPrender os dois no centro com um colchete ou alfinete, de forma que o disco de dentro gire.\n\nCOMO USAR: gire o disco de dentro até o A dele ficar embaixo da letra que você escolheu como deslocamento. Para cifrar, procure a letra no disco de fora e escreva a de dentro. Para decifrar, o contrário.'
    },
    {
      titulo: 'Mensagens cifradas',
      tipo: 'cartas',
      nota: 'Rodada 1: entregar com o deslocamento informado. Rodada 2: sem informar.',
      itens: [
        'RODADA 1, deslocamento 3: "R WHVRXUR HVWD HPEDLAR GD HVFDGD"',
        'RODADA 1, deslocamento 5: "T FWRFWNT IF XFQF JXYF FGJWYT"',
        'RODADA 2, deslocamento desconhecido: "H JOHCL LZAH KLIHPEV KV CHZV HGBS"',
        'RODADA 2, deslocamento desconhecido: "D VHQKD GHVWD SRUWD H D FRU GR FDGHUQR"'
      ]
    },
    {
      titulo: 'Tabela de frequência do português',
      tipo: 'folha',
      corpo: 'AS LETRAS MAIS COMUNS EM TEXTOS EM PORTUGUÊS, em ordem:\n\nA  E  O  S  R  I  N  D  M  U  T  C  L  P  V  G  H  Q  B  F  Z  J  X  K  W  Y\n\nA letra A aparece em cerca de 14% do texto.\nA letra E, em cerca de 12%.\nJuntas, A, E e O somam quase um terço de tudo.\n\nCOMO USAR: conte quais letras mais aparecem na mensagem cifrada. A mais frequente provavelmente é o A ou o E. Descubra quantas posições ela está deslocada, e teste esse deslocamento no texto inteiro.\n\nOUTRA PISTA: palavras de uma letra em português são quase sempre A, E ou O. Palavras de duas letras são muito frequentemente DE, DO, DA, EM, UM.'
    },
    {
      titulo: 'Instruções da rodada dos cadeados (a virada)',
      tipo: 'roteiro',
      corpo: 'MATERIAL: um cadeado e uma caixinha por grupo, em cores diferentes. Se não houver cadeado, use envelope e fita colorida, com a regra de que só o dono da cor pode abrir.\n\nCOMO FUNCIONA\n\n1. Cada grupo tem UM CADEADO ABERTO e UMA CHAVE.\n2. O cadeado aberto é PÚBLICO: o grupo entrega o dele para todos os outros grupos, na frente de todo mundo. Pode até gritar "quem quiser me mandar coisa, use o cadeado azul".\n3. A CHAVE é SECRETA e nunca sai do grupo.\n4. Para mandar um segredo ao grupo azul, qualquer grupo escreve a mensagem, coloca na caixinha e tranca com o cadeado azul.\n5. A caixa trancada pode passar de mão em mão, na frente de todo mundo, e ninguém consegue abrir.\n6. Só o grupo azul abre, porque só ele tem a chave azul.\n\nAS PERGUNTAS DEPOIS\n. Quem podia TRANCAR uma mensagem para o azul? Todo mundo.\n. Quem podia ABRIR? Só o azul.\n. Os dois grupos precisaram combinar alguma coisa em segredo antes? Não.\n. E se alguém roubasse o cadeado aberto no caminho? Não adiantaria nada, porque cadeado aberto só serve para trancar.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'SOLUÇÕES, todas conferidas letra a letra\n\nRodada 1, deslocamento 3\n  cifrada:  R WHVRXUR HVWD HPEDLAR GD HVFDGD\n  decifrada: O TESOURO ESTA EMBAIXO DA ESCADA\n\nRodada 1, deslocamento 5\n  cifrada:  T FWRFWNT IF XFQF JXYF FGJWYT\n  decifrada: O ARMARIO DA SALA ESTA ABERTO\n\nRodada 2, primeira, deslocamento 7\n  cifrada:  H JOHCL LZAH KLIHPEV KV CHZV HGBS\n  decifrada: A CHAVE ESTA DEBAIXO DO VASO AZUL\n  pista: a letra H aparece 6 vezes, mais que qualquer outra. Se H for A, o deslocamento é 7, e o texto fecha.\n\nRodada 2, segunda, deslocamento 3\n  cifrada:  D VHQKD GHVWD SRUWD H D FRU GR FDGHUQR\n  decifrada: A SENHA DESTA PORTA E A COR DO CADERNO\n  pista: a letra D aparece 6 vezes. Se D for A, o deslocamento é 3.\n\nAs mensagens não usam acento nem cedilha, de propósito: a roda de cifra só tem as 26 letras, e acento na mensagem trava o grupo por um motivo que não tem nada a ver com criptografia.\n\nPOR QUE A CIFRA DE CÉSAR É FRACA\nSó existem 25 deslocamentos possíveis, então força bruta resolve. E a frequência de letras entrega o deslocamento em poucos minutos. A rodada 2 existe para a turma descobrir isso com as próprias mãos, e não para ouvir.\n\nA ANALOGIA DO CADEADO, e seus limites\nEla é boa e é a mais usada no mundo inteiro para explicar chave pública. Vale dizer com honestidade o que ela não captura: na criptografia real, cadeado e chave são números relacionados por matemática, e a segurança vem de ser fácil multiplicar e muito difícil fatorar. A turma de 11 a 14 não precisa disso, mas se alguém perguntar, a resposta honesta é melhor que a analogia esticada.\n\nO FECHAMENTO, sobre ponta a ponta\nAs três perguntas: quem tranca, quem abre, e quem está no meio. Um aplicativo de ponta a ponta funciona como a rodada 3, e o servidor da empresa é o grupo do meio que passa a caixa sem conseguir abrir. Conectar explicitamente com "A viagem do pacote", dos 9 aos 10: lá os roteadores liam tudo, aqui não conseguem mais.\n\nSe a turma perguntar se isso quer dizer que a empresa não sabe nada, a resposta honesta é não: ela continua sabendo quem falou com quem, e a que horas. Conteúdo é uma coisa, metadado é outra, e isso liga com "A foto que carrega endereço".'
    }
  ],

  mediacao: {
    perguntas: [
      'Quanto tempo a turma levou para quebrar a cifra sem saber o deslocamento?',
      'Por que a frequência das letras entrega o segredo?',
      'Na rodada dos cadeados, quem podia trancar uma mensagem para o grupo azul?',
      'Os dois grupos precisaram combinar algo em segredo antes?',
      'Se alguém roubasse o cadeado aberto no caminho, adiantaria?',
      'Quando um aplicativo diz "ponta a ponta", quem é o grupo do meio?'
    ],
    evitar: [
      'Trocar as mensagens por outras sem cifrar e conferir de novo. Mensagem que não fecha frustra o grupo e não ensina nada. As quatro do kit já estão conferidas letra a letra.',
      'Pular a rodada 2. Sem quebrar a cifra com as próprias mãos, a diferença entre fraco e forte não aparece.',
      'Esticar a analogia do cadeado além do que ela suporta. Dizer o que ela não captura é mais honesto e mais interessante.',
      'Deixar a turma sair achando que ponta a ponta significa que a empresa não sabe nada.'
    ]
  },

  protecao: 'Nenhuma senha, conta ou comunicação real é usada, cifrada ou interceptada. As mensagens são fictícias e combinadas. Não pedir que estudantes cifrem informações pessoais próprias ou de colegas. A atividade não ensina a burlar segurança de sistema nenhum: ela demonstra o princípio com material de papel.',

  evidencia: 'O grupo quebra a cifra usando frequência de letras, explica por que ela é fraca, e descreve corretamente quem pode trancar e quem pode abrir no esquema de chave pública.'
},

/* ==================================================================== 72 */
{
  id: 'quanto-custa-uma-pergunta',
  insightCurto: 'A nuvem é feita de prédios, cabo, energia e água. Nada disso é metáfora.',
  n: 72,
  titulo: 'Quanto custa uma pergunta',
  chamada: 'Onde fica a nuvem, de que ela é feita, e quanto uma consulta a uma IA realmente consome.',
  faixa: '15-17',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use a parte 1 e a parte 3 do caderno, cortando a comparação entre tipos de consulta. A discussão sobre ordem de grandeza e incerteza é obrigatória.',
  formato: 'investigacao',
  formatoDetalhe: 'Estimativa de ordem de grandeza',
  contexto: ['escola'],
  tela: 'hibrido',
  situacao: ['ia-tarefa', 'dados'],
  disciplinas: ['Matemática', 'Ciências', 'Geografia', 'Projeto de Vida'],
  preparo: 'medio',
  precisa: ['impressao'],
  grupo: 'pequeno',
  eixo: 'infraestrutura',
  nivel: 4,
  sensibilidade: 'baixa',
  selos: [],

  bncc: {
    principal: { codigo: 'EF69CO12', texto: 'Analisar o consumo de tecnologia na sociedade, compreendendo criticamente o caminho da produção dos recursos bem como aspectos ligados à obsolescência e a sustentabilidade.' },
    secundaria: { codigo: 'EM13CO10', texto: 'Conhecer os fundamentos da Inteligência Artificial, comparando-a com a inteligência humana, analisando suas potencialidades, riscos e limites.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Estimar o custo material de serviços digitais e raciocinar com ordens de grandeza sob incerteza.' },

  provocacao: 'Vocês vão estimar quanto consome uma pergunta feita a uma IA. Vocês não vão acertar o número, e ninguém acerta. O que vocês vão aprender é a raciocinar com ordem de grandeza quando o número exato não existe.',

  missao: 'Construir uma estimativa fundamentada, declarar o intervalo de incerteza, e comparar com algo do cotidiano que a turma conheça.',

  virada: 'Depois das estimativas, o facilitador revela que as empresas não publicam esses números de forma comparável, e que as estimativas públicas variam por uma ordem de grandeza inteira entre si. Os grupos que declararam intervalo largo estavam mais certos que os que cravaram um número. A turma descobre que, num tema assim, precisão falsa é pior que incerteza declarada, e que a ausência do dado também é uma informação sobre quem o detém.',

  insight: 'A nuvem é física: prédio, servidor, eletricidade e água de resfriamento. O custo existe, é grande, e quem poderia medir com precisão escolhe não publicar de forma comparável.',

  transferencia: 'Diante de qualquer número sobre impacto de tecnologia, as perguntas são: quem mediu, o que exatamente foi contado, e qual o intervalo. Número sem intervalo, nesse tema, é propaganda.',

  roteiro: [
    { t: '0 a 10 min',  o: 'Provocação. Apresentar o que é um data center a partir da ficha de infraestrutura: o que existe fisicamente dentro dele.' },
    { t: '10 a 26 min', o: 'Parte 1 do caderno: estimar por decomposição. Quanto consome um servidor, quantos servidores por consulta, quanto tempo. Exigir que cada premissa seja escrita.' },
    { t: '26 a 34 min', o: 'Cada grupo apresenta a estimativa e o intervalo. Escrever todos no quadro e olhar a dispersão da turma.' },
    { t: '34 a 42 min', o: 'A virada. Apresentar a variação entre estimativas públicas e a ausência de dado comparável das empresas. Rever quem estava mais certo.' },
    { t: '42 a 48 min', o: 'Parte 3: comparação com o cotidiano e discussão sobre escala, de uma consulta para bilhões por dia.' },
    { t: '48 a 50 min', o: 'Fechamento: o que teria que ser publicado para essa conta ser possível?' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Integra Matemática de forma genuína, com estimativa de Fermi, ordem de grandeza e propagação de incerteza, e Geografia, na localização dos data centers e no uso de água. Vale aula conjunta com Matemática.',
    familia: 'Versão curta: estimar juntos quanto a casa consome de energia com aparelhos ligados o dia inteiro, e comparar com a conta de luz real. O método é o mesmo e o dado está disponível.',
    jovem: 'Individual: escolher um serviço digital que você usa muito e estimar o custo material dele, declarando premissas e intervalo. Depois procurar o que a empresa publica, e comparar.'
  },

  kit: [
    { nome: 'Ficha do data center', tipo: 'imprimivel', desc: 'O que existe fisicamente dentro.' },
    { nome: 'Caderno de estimativa', tipo: 'editavel', desc: 'Três partes, com premissas explícitas.' },
    { nome: 'Cartão da incerteza', tipo: 'imprimivel', desc: 'A virada.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Ordens de grandeza e o cuidado com números.' }
  ],

  imprimiveis: [
    {
      titulo: 'Ficha do data center',
      tipo: 'folha',
      corpo: 'O QUE EXISTE DENTRO DE UM DATA CENTER\n\n. Fileiras de servidores, que são computadores sem tela, ligados 24 horas por dia.\n. Sistema de resfriamento, porque servidor esquenta muito. O resfriamento pode usar ar, água, ou os dois.\n. Geradores e baterias, para nunca desligar.\n. Cabos de rede que saem do prédio e vão para outros continentes.\n. Segurança física, porque o que está ali dentro é valioso.\n\nO QUE ISSO CONSOME\n. Eletricidade, o tempo todo, para os servidores e para o resfriamento.\n. Água, em muitos modelos de resfriamento, que evapora e não volta.\n. Terreno e construção.\n. Os próprios servidores, que são hardware e têm a mesma cadeia do celular.\n\nUMA PERGUNTA PARA COMEÇAR:\nQuando alguém diz "está na nuvem", onde exatamente está?'
    },
    {
      titulo: 'Caderno de estimativa',
      tipo: 'editavel',
      corpo: 'REGRA: toda premissa precisa estar escrita. Sem premissa escrita, a conta não vale.\n\nPARTE 1, ESTIMATIVA POR DECOMPOSIÇÃO\n\n1.1 Quanto consome, em watts, um servidor ligado? Premissa do grupo: ______\n1.2 Uma consulta a um modelo grande ocupa quantos servidores, por quanto tempo? Premissa: ______\n1.3 O resfriamento acrescenta quanto por cento? Premissa: ______\n\nNOSSA ESTIMATIVA para uma consulta: ______\nNOSSO INTERVALO: entre ______ e ______\n\nQual das três premissas é a mais frágil? ______\nSe ela estiver errada por 10 vezes, nossa resposta muda quanto? ______\n\nPARTE 2, COMPARAÇÃO ENTRE TIPOS\nUma busca simples consome mais ou menos que uma resposta longa de IA? Por quê?\n____________________________________\nGerar uma imagem consome mais ou menos que gerar texto? Por quê?\n____________________________________\n\nPARTE 3, ESCALA E COTIDIANO\nA nossa estimativa por consulta equivale a quê, no dia a dia?\n( ) alguns segundos de lâmpada  ( ) alguns minutos  ( ) alguns segundos de chuveiro  ( ) outro: ______\n\nSe existirem 1 bilhão de consultas por dia, o total equivale a quê?\n____________________________________\n\nEssa conta muda a sua opinião sobre usar IA? ( ) sim ( ) não ( ) muda o COMO, não o SE\nExplique: ____________________________________'
    },
    {
      titulo: 'Cartão da incerteza (a virada)',
      tipo: 'folha',
      corpo: 'O QUE VOCÊS PRECISAM SABER AGORA\n\n1. As empresas que operam esses sistemas NÃO publicam consumo por consulta de forma comparável. Algumas publicam totais anuais, com metodologias diferentes entre si.\n\n2. As estimativas públicas de pesquisadores independentes variam entre si por uma ORDEM DE GRANDEZA inteira, ou seja, por um fator de dez ou mais.\n\n3. O consumo depende de coisas que ninguém de fora sabe: qual modelo, qual hardware, quão eficiente é o data center, e de onde vem a energia.\n\nAGORA OLHEM O QUADRO\n\nOs grupos que declararam um INTERVALO LARGO estavam mais corretos que os que cravaram um número exato.\n\nNum tema com essa incerteza, precisão falsa é pior que incerteza declarada.\n\nE A AUSÊNCIA DO DADO TAMBÉM É INFORMAÇÃO:\nquem tem condições de medir com precisão e escolhe não publicar de forma comparável está tomando uma decisão. Qual?'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O QUE ESTA ATIVIDADE ENSINA, e o que ela deliberadamente não faz\n\nEla NÃO entrega um número correto, porque ele não existe publicamente de forma confiável e comparável. Qualquer material didático que afirme "uma consulta consome X" com precisão está errando ou simplificando demais. Dizer isso à turma com todas as letras é o conteúdo.\n\nO que ela ensina é estimativa de Fermi: decompor um problema impossível em premissas explícitas, chegar a uma ordem de grandeza, e declarar incerteza. É uma competência transferível para qualquer questão pública com dado ruim.\n\nORDENS DE GRANDEZA para orientar a mediação, sem cravar valores:\n. Consultas a modelos grandes consomem substancialmente mais que uma busca simples, e a diferença costuma ser de uma a duas ordens de grandeza.\n. Gerar imagem consome mais que gerar texto.\n. O treinamento de um modelo custa muito mais que qualquer consulta, mas é pago uma vez e diluído por bilhões de usos, então a comparação exige cuidado.\n. Resfriamento é parcela relevante do consumo total, e o uso de água varia enormemente conforme o local e a tecnologia.\n\nSe algum grupo pedir um número para confirmar, resistir. A resposta honesta é o intervalo e a explicação de por que ele é largo.\n\nSOBRE A PARTE 3\nA opção "muda o COMO, não o SE" é a que costuma emergir e é a mais madura. A conversa boa não é sobre parar de usar IA, é sobre usar com propósito em vez de por reflexo, e sobre exigir transparência de quem opera.\n\nO FECHAMENTO, sobre o que teria que ser publicado, conecta com "Red team de EdTech" e com "Mapa de poder da plataforma": a ausência de dado comparável não é acidente técnico, é escolha, e ela impede exatamente o tipo de conta que a turma acabou de tentar fazer.'
    }
  ],

  mediacao: {
    perguntas: [
      'Qual das premissas de vocês é a mais frágil?',
      'Se ela estiver errada por dez vezes, a resposta muda quanto?',
      'Quem declarou intervalo largo estava mais certo ou menos certo?',
      'Por que as empresas não publicam isso de forma comparável?',
      'Essa conta muda o SE ou muda o COMO você usa?',
      'O que teria que ser publicado para a conta ser possível?'
    ],
    evitar: [
      'Entregar um número exato. Ele não existe de forma confiável, e entregá-lo ensina o oposto da atividade.',
      'Transformar em campanha contra o uso de IA. A conclusão madura costuma ser sobre o como, e ela deve poder emergir.',
      'Aceitar estimativa sem premissa escrita.',
      'Deixar de nomear que a ausência do dado é uma escolha de quem o detém.'
    ]
  },

  protecao: 'A atividade trabalha com estimativas e ordens de grandeza, não com dados proprietários. Nenhuma empresa é nomeada nas fichas. Se a versão com pesquisa for usada, o professor prepara previamente as fontes, e vale explicitar aos estudantes que fontes divergentes sobre este tema são a regra, e não sinal de que alguma esteja mentindo.',

  evidencia: 'O grupo apresenta estimativa com premissas escritas e intervalo declarado, identifica a premissa mais frágil e o efeito de um erro nela, e reconhece que precisão falsa é pior que incerteza declarada.'
},

/* ==================================================================== 73 */
{
  id: 'o-site-que-exclui',
  insightCurto: 'Acessibilidade não é gentileza com alguns. É a diferença entre poder e não poder usar.',
  n: 73,
  titulo: 'O site que exclui',
  chamada: 'A turma tenta usar um serviço com as mesmas restrições de quem já usa assim todo dia.',
  faixa: '15-17',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use três restrições em vez de seis e vá direto ao parecer. A rodada de tentativa com restrição é o coração e não pode ser cortada.',
  formato: 'auditoria',
  formatoDetalhe: 'Auditoria de acessibilidade com restrições simuladas',
  contexto: ['escola'],
  tela: 'hibrido',
  situacao: ['dados'],
  disciplinas: ['Projeto de Vida', 'Língua Portuguesa', 'Artes'],
  preparo: 'medio',
  precisa: ['impressao'],
  grupo: 'pequeno',
  eixo: 'infraestrutura',
  nivel: 5,
  sensibilidade: 'media',
  selos: [],

  bncc: {
    principal: { codigo: 'EM13CO15', texto: 'Analisar a interação entre usuários e artefatos computacionais, abordando aspectos da experiência do usuário e promovendo reflexão sobre a qualidade do uso dos artefatos nas esferas do trabalho, do lazer e do estudo.' },
    secundaria: { codigo: 'EM13CO06', texto: 'Avaliar software levando em consideração diferentes características e métricas associadas.' }
  },
  unesco: { dimensao: 'design', competencia: 'Avaliar artefatos digitais quanto à exclusão que produzem e propor correções verificáveis.' },

  provocacao: 'Vocês vão tentar concluir uma tarefa simples em um serviço público. Só que cada grupo vai fazer isso com uma restrição, e essas restrições não são exercício: são a condição de uso de milhões de pessoas todo dia.',

  missao: 'Tentar completar a tarefa com a restrição sorteada, registrar exatamente onde travou, e produzir um parecer com correções verificáveis.',

  virada: 'Quando os grupos comparam onde travaram, aparece o padrão: quase todos travam nos mesmos três pontos, e nenhum desses pontos é sofisticado. Falta de rótulo em campo de formulário, contraste baixo e imagem sem descrição. Não são problemas difíceis nem caros. São problemas que ninguém testou, porque quem testou não usava daquele jeito.',

  insight: 'A maior parte da exclusão digital não vem de tecnologia difícil. Vem de ninguém ter testado com quem usa diferente, e o custo de corrigir é quase sempre baixo.',

  transferencia: 'Qualquer coisa que a pessoa publicar, de um trabalho escolar a um site, pode passar por três verificações rápidas que resolvem a maior parte da exclusão.',

  roteiro: [
    { t: '0 a 10 min',  o: 'Apresentar a tarefa e a página fictícia. Combinar as regras de respeito antes de sortear as restrições.' },
    { t: '10 a 26 min', o: 'Cada grupo tenta completar a tarefa com a restrição sorteada, registrando cada ponto em que trava e quanto tempo perde.' },
    { t: '26 a 34 min', o: 'Mapa coletivo: marcar no quadro onde cada grupo travou. Encontrar os pontos comuns.' },
    { t: '34 a 40 min', o: 'A virada. Discutir por que os pontos são os mesmos e por que nenhum é sofisticado.' },
    { t: '40 a 48 min', o: 'Parecer: correções verificáveis, com custo estimado e prioridade.' },
    { t: '48 a 50 min', o: 'Fechamento com as três verificações rápidas que a turma leva.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Funciona com a página fictícia impressa, o que é a versão segura, ou com um site real de serviço público, o que exige preparo. A conversa sobre por que ninguém testou é o momento mais formativo.',
    familia: 'Não recomendada no formato de restrições simuladas.',
    jovem: 'Individual: aplicar as três verificações rápidas a um trabalho seu que vá ser publicado, ou a uma página que você mantém, e corrigir.'
  },

  kit: [
    { nome: 'A página do serviço', tipo: 'imprimivel', desc: 'Página fictícia com barreiras plantadas.' },
    { nome: 'Seis cartas de restrição', tipo: 'imprimivel', desc: 'Sorteadas entre os grupos.' },
    { nome: 'Folha de registro', tipo: 'editavel', desc: 'Onde travou e quanto custou.' },
    { nome: 'Modelo de parecer', tipo: 'editavel', desc: 'Correções verificáveis com prioridade.' },
    { nome: 'As três verificações', tipo: 'imprimivel', desc: 'O que sai da aula.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'As barreiras plantadas e o protocolo de respeito.' }
  ],

  imprimiveis: [
    {
      titulo: 'A página do serviço (fictícia)',
      tipo: 'folha',
      corpo: 'TAREFA: agendar uma consulta no posto de saúde.\n\nA página impressa contém:\n\n. Um formulário com seis campos, e os rótulos estão apenas como texto cinza claro DENTRO do campo, sumindo quando se digita.\n. Um botão de enviar escrito só com um ícone de seta, sem palavra nenhuma.\n. Um aviso importante escrito em cinza claro sobre fundo branco.\n. Um mapa em imagem, sem endereço em texto em nenhum lugar da página.\n. Um passo obrigatório que só aparece ao passar o mouse por cima.\n. Um texto de instrução com 180 palavras em um parágrafo único, sem título e sem lista.\n. Um campo de data que exige o formato exato DD/MM/AAAA, sem dizer isso, e recusa qualquer outro.\n. Um botão de confirmar em verde e um de cancelar em vermelho, sem nenhuma outra diferença entre eles.'
    },
    {
      titulo: 'Seis cartas de restrição',
      tipo: 'cartas',
      nota: 'Sortear uma por grupo. Ler o protocolo de respeito antes.',
      itens: [
        'RESTRIÇÃO 1, SEM VER A TELA. Um integrante fecha os olhos e é o único que pode decidir. Os outros só podem LER em voz alta o que está escrito, sem descrever cores, posições ou imagens.',
        'RESTRIÇÃO 2, SEM DISTINGUIR VERDE E VERMELHO. Nenhuma decisão pode se basear na cor desses dois botões. Vale só o que estiver escrito.',
        'RESTRIÇÃO 3, SEM USAR MOUSE. Nada que dependa de passar o cursor por cima existe para vocês.',
        'RESTRIÇÃO 4, TELA PEQUENA. Vocês só enxergam a página através de uma janela de papel recortada, do tamanho de um cartão, que precisa ser movida.',
        'RESTRIÇÃO 5, LEITURA DIFÍCIL. Vocês têm 40 segundos para ler o texto de instrução de 180 palavras, e depois ele é retirado.',
        'RESTRIÇÃO 6, CONEXÃO RUIM. As imagens não carregam. Tudo que é imagem está coberto com papel em branco.'
      ]
    },
    {
      titulo: 'Folha de registro',
      tipo: 'editavel',
      corpo: 'Grupo: ______  Restrição: ______\n\nCONSEGUIMOS COMPLETAR A TAREFA? ( ) sim ( ) sim, com dificuldade ( ) não\n\nONDE TRAVAMOS, ponto por ponto:\n1. ____________________  Tempo perdido: ______\n2. ____________________  Tempo perdido: ______\n3. ____________________  Tempo perdido: ______\n\nO QUE RESOLVERIA cada trava, em uma frase:\n1. ____________________________________\n2. ____________________________________\n3. ____________________________________\n\nESSA CORREÇÃO É CARA? ( ) sim ( ) não ( ) não sei\n\nQUANTAS PESSOAS usam a internet com essa restrição, na sua estimativa?\n____________________'
    },
    {
      titulo: 'Modelo de parecer',
      tipo: 'editavel',
      corpo: 'PARECER DE ACESSIBILIDADE\n\n1. TAREFA AVALIADA e quantos grupos a completaram: ______ de ______\n\n2. BARREIRAS ENCONTRADAS, da que afetou mais grupos para a que afetou menos:\nBarreira: ____________  Afetou ______ grupos  Correção: ____________  Custo: ( ) baixo ( ) médio ( ) alto\n(repetir)\n\n3. AS TRÊS CORREÇÕES PRIORITÁRIAS, escolhidas por afetar muita gente e custar pouco:\n1. ____________________________________\n2. ____________________________________\n3. ____________________________________\n\n4. COMO VERIFICAR se cada correção foi feita:\n____________________________________\n\n5. POR QUE ESSAS BARREIRAS EXISTEM?\n( ) a tecnologia não permite corrigir\n( ) corrigir custa muito\n( ) ninguém testou com quem usa assim\n( ) outra: ____________\n\n6. QUEM DEVERIA TER SIDO CONSULTADO antes de publicar esta página?\n____________________________________'
    },
    {
      titulo: 'As três verificações',
      tipo: 'cartaz',
      corpo: 'ANTES DE PUBLICAR QUALQUER COISA, TRÊS VERIFICAÇÕES RÁPIDAS\n\n1. DÁ PARA ENTENDER SEM VER?\nToda imagem tem descrição em texto? Todo botão tem palavra, e não só ícone? O endereço está escrito, e não só no mapa?\n\n2. DÁ PARA ENTENDER SEM COR?\nSe você imprimir em preto e branco, ainda dá para saber qual botão é qual? A informação está só na cor?\n\n3. DÁ PARA LER?\nO contraste é suficiente? O texto está quebrado em parágrafos e listas? A instrução importante aparece sem precisar passar o mouse?\n\nA maior parte da exclusão digital é resolvida por essas três.'
    },
    {
      titulo: 'Gabarito comentado e protocolo de respeito',
      tipo: 'gabarito',
      corpo: 'PROTOCOLO DE RESPEITO, obrigatório antes de sortear\n\nEstas restrições simulam condições reais de pessoas reais, e algumas delas podem estar na sala. Por isso:\n. Deixar claro que a atividade NÃO simula "ser uma pessoa com deficiência". Ela testa o PRODUTO sob uma restrição. O objeto avaliado é o site, nunca a pessoa.\n. Proibir qualquer imitação, brincadeira ou dramatização de deficiência. Quem fizer, a atividade para.\n. Não perguntar se alguém da turma tem alguma dessas condições, e não convidar ninguém a "explicar como é".\n. Se houver estudante com deficiência na turma, conversar antes, em particular, e perguntar se ele quer participar e de que forma. Nunca colocá-lo como especialista sem que ele tenha oferecido.\n. A restrição 5 não é sobre deficiência: ela simula baixa proficiência de leitura e pressa, que afetam muito mais gente.\n\nAS BARREIRAS PLANTADAS E O QUE AS RESOLVE\n. Rótulo só dentro do campo: some ao digitar e não é lido por leitor de tela. Correção: rótulo visível fora do campo. Custo baixo.\n. Botão só com ícone: sem texto, não há o que ler. Correção: acrescentar palavra. Custo mínimo.\n. Contraste baixo no aviso importante: correção é trocar a cor. Custo mínimo.\n. Mapa sem endereço em texto: correção é escrever o endereço. Custo mínimo.\n. Passo que só aparece no hover: não existe para quem usa teclado ou toque. Correção é mostrar sempre. Custo baixo.\n. Parágrafo único de 180 palavras: correção é dividir e usar lista. Custo mínimo.\n. Formato de data exigido sem aviso: correção é informar o formato e aceitar variações. Custo baixo.\n. Botões distinguidos só por cor: correção é acrescentar texto e forma diferente. Custo mínimo.\n\nO PADRÃO QUE APARECE\nQuase todos os grupos travam no rótulo do formulário, no botão só com ícone e no texto de instrução. Nenhuma das oito correções é cara ou tecnicamente difícil. Essa é a virada, e a resposta da pergunta 5 do parecer é quase sempre a terceira opção: ninguém testou com quem usa assim.\n\nA PERGUNTA 6 é a mais importante e liga com todo o resto do banco: a solução não é técnica, é de processo. Quem deveria ter sido consultado antes de publicar? A resposta conecta com "Prove sua idade sem entregar sua vida" e com "Júri do algoritmo de contratação": decisões sobre pessoas tomadas sem essas pessoas.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantos grupos completaram a tarefa?',
      'Onde a maioria travou? Esses pontos são difíceis de corrigir?',
      'Alguma dessas correções é cara?',
      'Se não é caro nem difícil, por que não foi feito?',
      'Quem deveria ter sido consultado antes de publicar?',
      'O trabalho que vocês entregam passa nas três verificações?'
    ],
    evitar: [
      'Permitir imitação ou dramatização de deficiência. A atividade avalia o produto, e a regra é dita antes de sortear.',
      'Colocar estudante com deficiência como especialista sem que ele tenha oferecido.',
      'Perguntar quem na turma tem alguma dessas condições.',
      'Concluir que o problema é técnico. Nenhuma das oito correções é difícil, e a pergunta 6 é o destino da aula.'
    ]
  },

  protecao: 'Tema que exige cuidado. As restrições simulam condições de uso do produto e não a experiência de viver com uma deficiência, e essa distinção deve ser dita antes de sortear. É proibida qualquer imitação ou dramatização de deficiência. Não perguntar sobre condições de saúde de estudantes nem convidar alguém a relatar a própria experiência. Se houver estudante com deficiência na turma, conversar previamente em particular sobre se e como ele quer participar. A página avaliada é fictícia; se um serviço real for usado, escolher um serviço público e manter o parecer interno.',

  evidencia: 'O grupo identifica pelo menos três barreiras comuns, classifica corretamente o custo das correções como baixo, e atribui a existência das barreiras a ausência de teste com usuários diversos, e não a limitação técnica.'
}

);
