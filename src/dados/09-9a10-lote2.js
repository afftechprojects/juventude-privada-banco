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
  precisa: ['impressao'],
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
  precisa: ['impressao'],
  grupo: 'pequeno',
  eixo: 'informacao',
  nivel: 4,
  sensibilidade: 'baixa',
  selos: [],

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
  precisa: ['impressao', 'objetos'],
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
  precisa: ['impressao'],
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
