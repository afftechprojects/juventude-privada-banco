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
  precisa: ['espaco', 'objetos', 'papel'],
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
  precisa: ['papel'],
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
  precisa: ['espaco', 'impressao'],
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
  precisa: ['papel'],
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
