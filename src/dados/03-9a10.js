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
