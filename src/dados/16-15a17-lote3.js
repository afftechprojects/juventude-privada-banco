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
