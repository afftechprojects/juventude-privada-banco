/* Últimas lacunas apontadas pela auditoria de cobertura:
   metadados (EF06CO08), produção e publicação (EM13CO20, EM13CO21) e
   tecnologias digitais no mundo do trabalho (EM13CO09).
   As duas de criação existem porque o banco formava avaliadores excelentes e
   criadores quase nenhum, e o framework da UNESCO pede cocriadores. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 74 */
{
  id: 'foto-que-carrega-endereco',
  insightCurto: 'Toda foto carrega uma ficha escondida. Às vezes com a coordenada exata de onde você estava.',
  n: 74,
  titulo: 'A foto que carrega endereço',
  chamada: 'A imagem mostra um bolo. O arquivo guarda o aparelho, a hora e, às vezes, a coordenada.',
  faixa: '11-14',
  duracao: 40,
  duracaoCurta: 25,
  comoEncurtar: 'Em 25 minutos: analise três fichas de metadado em vez de cinco e vá direto ao caso do encontro. A folha do que dá para desligar é o produto e não sai.',
  formato: 'investigacao',
  formatoDetalhe: 'Investigação de metadados em fichas',
  contexto: ['escola', 'casa', 'individual'],
  tela: 'hibrido',
  situacao: ['foto', 'dados'],
  disciplinas: ['Geografia', 'Matemática', 'Ciências'],
  preparo: 'baixo',
  grupo: 'dupla',
  eixo: 'privacidade',
  nivel: 3,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF06CO08', texto: 'Compreender e utilizar diferentes formas de armazenar, manipular, compactar e recuperar arquivos, documentos e metadados.' },
    secundaria: { codigo: 'EF08CO08', texto: 'Distinguir os tipos de dados pessoais que são solicitados em espaços digitais e os riscos associados.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Compreender que arquivos digitais carregam dados descritivos não visíveis no conteúdo.' },

  provocacao: 'Esta foto mostra um bolo de aniversário. O arquivo dela guarda dezoito informações que não aparecem na imagem. Vocês vão ler todas.',

  missao: 'Ler a ficha de metadados de cinco fotos e descobrir, de cada pessoa, o que dá para saber sem olhar a imagem.',

  virada: 'Depois de ler as cinco fichas separadamente, o facilitador revela que as fotos 1, 3 e 5 são da mesma pessoa. Colocando as três coordenadas e os três horários lado a lado, aparece um trajeto: casa, escola, casa, todos os dias, no mesmo horário. Nenhuma das três fotos mostra rosto, endereço ou uniforme. A rotina inteira estava fora da imagem.',

  insight: 'O que a imagem mostra é o que a pessoa escolheu. O que o arquivo guarda é o que o aparelho registrou sozinho, e isso inclui onde e quando.',

  transferencia: 'Dá para desligar a marcação de localização na câmera, e dá para saber quais plataformas removem metadado ao publicar e quais não removem. As duas coisas levam menos de dois minutos.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Provocação. Explicar o que é metadado com um exemplo não digital: o carimbo do correio no envelope conta a data e o lugar sem abrir a carta.' },
    { t: '6 a 20 min',  o: 'Em duplas, ler as cinco fichas de metadados e preencher, para cada uma, o que dá para saber da pessoa sem ver a foto.' },
    { t: '20 a 28 min', o: 'A virada. Revelar que 1, 3 e 5 são da mesma pessoa. Plotar as coordenadas e horários no mapa da folha.' },
    { t: '28 a 34 min', o: 'Discussão: o que a imagem mostrava e o que o arquivo entregou. E a pergunta do encontro.' },
    { t: '34 a 40 min', o: 'Folha do que dá para desligar e do que cada tipo de envio faz com o metadado.' }
  ],

  versoes: {
    escola: 'Duplas, com as fichas impressas. Funciona totalmente desplugada. Integra Geografia, na leitura de coordenadas, e Matemática, na comparação de horários. Complementa "A foto que conta mais do que mostra", dos 9 aos 10: lá o risco estava no fundo da imagem, aqui está fora dela.',
    familia: 'Ler duas fichas na mesa e depois, com o adulto operando o aparelho, verificar juntos se a câmera da casa está marcando localização. Não é preciso mexer em foto nenhuma.',
    jovem: 'Individual: verificar a configuração de localização da sua câmera e descobrir, para os aplicativos que você usa, quais removem metadado ao publicar. Anotar o resultado.'
  },

  kit: [
    { nome: 'Cinco fichas de metadados', tipo: 'imprimivel', desc: 'O que o arquivo guarda, sem a imagem.' },
    { nome: 'Folha do trajeto', tipo: 'imprimivel', desc: 'Mapa simples para plotar. A virada.' },
    { nome: 'Folha do que dá para desligar', tipo: 'editavel', desc: 'O produto que sai da aula.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O que cada ficha revela e os cuidados.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cinco fichas de metadados',
      tipo: 'cartas',
      nota: 'Nenhuma imagem é mostrada. Só a ficha do arquivo. As coordenadas são fictícias.',
      itens: [
        'FOTO 1. Arquivo: IMG_4471.jpg | Aparelho: celular modelo comum | Data e hora: 12/03, 07h14 | Coordenada: -23.5401, -46.6321 | Orientação: retrato | Flash: não | Software: câmera padrão | Assunto visível: um café e um caderno.',
        'FOTO 2. Arquivo: DSC_0092.jpg | Aparelho: câmera fotográfica | Data e hora: 12/03, 15h02 | Coordenada: ausente | Orientação: paisagem | Flash: não | Software: editada em programa de edição, versão registrada | Assunto visível: uma praça.',
        'FOTO 3. Arquivo: IMG_4488.jpg | Aparelho: mesmo aparelho da foto 1 | Data e hora: 12/03, 17h26 | Coordenada: -23.5512, -46.6398 | Orientação: retrato | Flash: não | Assunto visível: um cachorro na calçada.',
        'FOTO 4. Arquivo: recebida_23.jpg | Aparelho: ausente | Data e hora: ausente | Coordenada: ausente | Observação: todos os metadados foram removidos | Assunto visível: um prato de comida.',
        'FOTO 5. Arquivo: IMG_4503.jpg | Aparelho: mesmo aparelho das fotos 1 e 3 | Data e hora: 13/03, 07h11 | Coordenada: -23.5401, -46.6321 | Orientação: retrato | Flash: não | Assunto visível: um bolo de aniversário.'
      ]
    },
    {
      titulo: 'Folha do trajeto (a virada)',
      tipo: 'folha',
      corpo: 'As fotos 1, 3 e 5 são da mesma pessoa e do mesmo aparelho.\n\nPlote as três coordenadas no mapa simples abaixo e escreva o horário ao lado de cada ponto.\n\n[grade simples de coordenadas, com eixos marcados de -23.535 a -23.555 e de -46.628 a -46.642]\n\nPONTO A: coordenada ____________  horários ____________\nPONTO B: coordenada ____________  horário ____________\n\nO que o ponto A provavelmente é? ____________________\nO que o ponto B provavelmente é? ____________________\n\nA que horas essa pessoa sai de casa? ____________________\nA que horas ela volta? ____________________\n\nAlguma das três fotos mostrava o rosto dela, o endereço ou um uniforme?\n( ) sim ( ) não\n\nA PERGUNTA DIFÍCIL:\nSe alguém quisesse encontrar essa pessoa amanhã de manhã, precisaria de mais alguma informação?\n____________________________________'
    },
    {
      titulo: 'Folha do que dá para desligar',
      tipo: 'editavel',
      corpo: 'O QUE O APARELHO GRAVA SOZINHO\nData e hora, modelo do aparelho, configurações da câmera e, se estiver ligado, a coordenada.\n\nO QUE DÁ PARA FAZER\n\n1. DESLIGAR A LOCALIZAÇÃO DA CÂMERA\nNas configurações do aparelho, nas permissões do aplicativo de câmera. Leva menos de um minuto e não muda nada nas fotos.\nJá está desligada no seu? ( ) sim ( ) não ( ) não sei\n\n2. SABER O QUE CADA CAMINHO FAZ\nAlgumas plataformas removem os metadados quando você publica. Outras não. Enviar o arquivo original, por qualquer meio que preserve a qualidade, costuma preservar o metadado também.\nMarque o que você descobriu:\nAplicativo ____________  remove? ( ) sim ( ) não ( ) não descobri\nAplicativo ____________  remove? ( ) sim ( ) não ( ) não descobri\n\n3. QUANDO IMPORTA MAIS\nFoto tirada em casa, na escola ou em local que se repete todo dia.\n\nO QUE EU VOU VERIFICAR HOJE: ____________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O QUE CADA FICHA REVELA\n\nFotos 1, 3 e 5: mesmo aparelho. Duas coordenadas distintas. A coordenada A aparece às 07h14 do dia 12 e às 07h11 do dia 13, sempre de manhã. A B aparece às 17h26. Padrão: A é onde a pessoa está de manhã cedo em dias seguidos, provavelmente casa. B é onde ela está no fim da tarde. As duas ficam a menos de dois quilômetros uma da outra.\n\nFoto 2: sem coordenada, mas revela outra coisa. O software de edição registrado identifica ferramenta e versão, o que já é informação sobre a pessoa.\n\nFoto 4: metadados removidos. É a foto que passou por uma plataforma que limpa, ou por alguém que limpou. Vale destacar que ela existe no conjunto de propósito: mostra que dá para limpar, e que às vezes já vem limpo.\n\nA PERGUNTA DIFÍCIL do trajeto é o centro da atividade e deve ser feita com sobriedade, sem dramatizar. A resposta é não: não precisaria de mais nada. Deixar a turma responder e seguir para a folha de ação, para que a aula termine em algo que dá para fazer, e não em susto.\n\nCUIDADO CENTRAL\nNunca analisar metadados de fotos reais de estudantes, nem em demonstração, nem com o próprio celular do professor mostrando à turma. A verificação com foto própria é individual, privada, e nada é compartilhado.\n\nSE A TURMA PERGUNTAR se as plataformas removem: a resposta honesta é que varia por plataforma e por forma de envio, e que muda com o tempo. Por isso a folha pede que eles descubram, em vez de trazer uma lista que envelhece.\n\nLIGAÇÃO com "A viagem do pacote" e "Segredo com cadeado": mesmo com conteúdo criptografado de ponta a ponta, o metadado de quem falou com quem e quando continua existindo. Conteúdo e metadado são coisas diferentes, e é uma distinção que serve para o resto da vida.'
    }
  ],

  mediacao: {
    perguntas: [
      'Alguma das fotos mostrava rosto, endereço ou uniforme?',
      'De onde veio o trajeto, então?',
      'O que a foto 2 revela, mesmo sem coordenada?',
      'Por que a foto 4 não tem nada?',
      'Se o conteúdo estiver criptografado, o metadado some junto?',
      'O que dá para desligar hoje, em menos de um minuto?'
    ],
    evitar: [
      'Analisar metadados de fotos reais de estudantes ou do professor em sala.',
      'Dramatizar a pergunta do encontro. Ela é sóbria e a aula segue para a ação.',
      'Trazer lista pronta de quais plataformas removem metadado. Envelhece rápido e tira a investigação.',
      'Terminar sem a folha de ação. Susto sem ação não muda comportamento.'
    ]
  },

  protecao: 'Todas as fichas são fictícias e as coordenadas foram inventadas. Nenhuma foto real, de estudante, professor ou familiar, é analisada, exibida ou tem metadados extraídos em sala, em nenhuma hipótese, nem para demonstração. A verificação com foto própria é individual e privada, e o resultado não é compartilhado com a turma nem com o professor.',

  evidencia: 'A dupla reconstrói o trajeto a partir de coordenadas e horários, reconhece que nenhuma informação veio do conteúdo visível das imagens, e identifica ao menos uma ação concreta de configuração.'
},

/* ==================================================================== 75 */
{
  id: 'a-campanha-da-turma',
  insightCurto: 'Explicar bem para quem não sabe é mais difícil, e ensina mais, do que criticar quem errou.',
  n: 75,
  titulo: 'A campanha da turma',
  chamada: 'A turma produz e publica uma peça sobre um tema do banco, com crédito, licença e verificação.',
  faixa: '11-14',
  duracao: 999,
  duracaoTexto: 'Projeto de três aulas',
  formato: 'criacao',
  formatoDetalhe: 'Produção e publicação de peça de comunicação',
  contexto: ['escola'],
  tela: 'hibrido',
  situacao: ['autoria', 'informacao'],
  disciplinas: ['Língua Portuguesa', 'Artes', 'Projeto de Vida'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'autoria',
  nivel: 3,
  sensibilidade: 'baixa',
  selos: [],

  bncc: {
    principal: { codigo: 'EF09CO09', texto: 'Criar ou utilizar conteúdo em meio digital, compreendendo questões éticas relacionadas a direitos autorais e de uso de imagem.' },
    secundaria: { codigo: 'EF07CO11', texto: 'Criar, documentar e publicar, de forma individual ou colaborativa, produtos (vídeos, podcasts, websites) usando recursos de tecnologia.' }
  },
  unesco: { dimensao: 'design', competencia: 'Produzir e publicar conteúdo próprio com atribuição correta, verificação e responsabilidade sobre o que se afirma.' },

  provocacao: 'Vocês já analisaram, auditaram e criticaram bastante. Agora vocês vão para o outro lado: vão produzir uma coisa que outras pessoas vão ler, e vão ter que responder por cada afirmação dela.',

  missao: 'Escolher um tema já estudado no banco, produzir uma peça para o público da escola, e publicar com créditos, licenças e verificação em ordem.',

  virada: 'Na segunda aula, os grupos trocam as peças e viram checadores uns dos outros, com a mesma grade que usaram em "Não adivinhe, verifique" e "O chatbot de certeza demais". Descobrem que afirmar com precisão é muito mais difícil do que apontar erro alheio, e que quase toda peça tem pelo menos uma frase que ninguém consegue sustentar quando é perguntado de onde veio.',

  insight: 'Criticar exige encontrar um erro. Publicar exige sustentar tudo. A segunda é muito mais difícil, e é a que ensina de verdade.',

  transferencia: 'Antes de publicar qualquer coisa, existe uma lista de quatro verificações. Ela vale para trabalho escolar, post e apresentação.',

  roteiro: [
    { t: 'Aula 1, 0 a 12 min',  o: 'Escolha do tema, entre os já estudados pela turma, e do público: outra turma, responsáveis, ou a escola inteira. Definir o formato.' },
    { t: 'Aula 1, 12 a 45 min', o: 'Produção da primeira versão, com a ficha de fontes sendo preenchida ao mesmo tempo, e não depois.' },
    { t: 'Aula 2, 0 a 25 min',  o: 'A virada. Troca de peças. Cada grupo checa a peça de outro com a grade de checagem e devolve o parecer por escrito.' },
    { t: 'Aula 2, 25 a 45 min', o: 'Correção a partir do parecer recebido. Toda afirmação que não se sustenta sai ou vira pergunta.' },
    { t: 'Aula 3, 0 a 25 min',  o: 'Acabamento, créditos, licenças das imagens e declaração de uso de IA, se houver.' },
    { t: 'Aula 3, 25 a 45 min', o: 'Publicação e apresentação. Combinar com a escola onde a peça vai ficar.' }
  ],

  versoes: {
    escola: 'Grupos de quatro, três aulas. Encaixa em Língua Portuguesa e Artes e produz material avaliável em várias frentes. O melhor destino é uma turma mais nova: escrever para crianças de 8 anos obriga a entender de verdade.',
    familia: 'Versão curta: produzir um cartaz de uma página para a casa, sobre uma regra que a família combinou. Créditos e verificação valem igual.',
    jovem: 'Individual: produzir uma peça e submeter a alguém que não conhece o assunto. Se a pessoa não entender, o problema é da peça.'
  },

  kit: [
    { nome: 'Cartas de formato', tipo: 'imprimivel', desc: 'Opções de peça, todas viáveis sem equipamento.' },
    { nome: 'Ficha de fontes', tipo: 'editavel', desc: 'Preenchida durante a produção.' },
    { nome: 'Grade de checagem cruzada', tipo: 'imprimivel', desc: 'A virada.' },
    { nome: 'Checklist de publicação', tipo: 'editavel', desc: 'Créditos, licenças, declaração.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O que avaliar e os erros esperados.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cartas de formato',
      tipo: 'cartas',
      nota: 'Todas viáveis sem equipamento especial. O grupo escolhe.',
      itens: [
        'CARTAZ para o corredor. Uma folha grande, uma ideia só, legível a três metros.',
        'FOLHETO de uma página, dobrado em três, para levar para casa.',
        'ROTEIRO DE CONVERSA de cinco minutos, para aplicar em outra turma.',
        'HISTÓRIA EM QUADRINHOS de uma página, para o mural.',
        'PODCAST de três minutos, gravado no celular, com roteiro escrito antes.',
        'MURAL COLETIVO em que cada grupo contribui com uma parte.'
      ]
    },
    {
      titulo: 'Ficha de fontes',
      tipo: 'editavel',
      corpo: 'Preencher DURANTE a produção. Cada afirmação da peça precisa de uma linha aqui.\n\nAFIRMAÇÃO NA PEÇA: ____________________________________\nDE ONDE VEIO: ____________________________________\nEU CONFERI? ( ) sim, em ____________ ( ) não\nÉ FATO, ESTIMATIVA OU OPINIÃO? ____________\n\n(repetir para cada afirmação)\n\nIMAGENS USADAS:\nImagem: ____________  De onde: ____________  Pode usar? ( ) sim ( ) não ( ) não sei\nCrédito que vai aparecer: ____________________\n\nUSAMOS IA? ( ) não ( ) sim, em: ____________________\nO que verificamos do que ela produziu: ____________________'
    },
    {
      titulo: 'Grade de checagem cruzada (a virada)',
      tipo: 'folha',
      corpo: 'Vocês são os checadores da peça do grupo ______.\n\nRegra: sejam rigorosos. Se vocês passarem a mão na cabeça, quem vai encontrar o erro é o público.\n\n1. QUANTAS AFIRMAÇÕES a peça faz? ______\n2. Quantas delas vocês conseguem RASTREAR até uma fonte na ficha? ______\n3. Alguma afirmação está apresentada como fato mas é opinião? Qual?\n____________________________________\n4. Alguma imagem está sem crédito ou sem licença? Qual?\n____________________________________\n5. Alguma coisa está EXAGERADA para convencer? O quê?\n____________________________________\n6. Alguém do público-alvo entenderia? Teste: leia em voz alta imaginando a pessoa.\n____________________________________\n7. A peça pede alguma ação? Ela é possível de fazer?\n____________________________________\n\nPARECER, em duas linhas:\n____________________________________'
    },
    {
      titulo: 'Checklist de publicação',
      tipo: 'editavel',
      corpo: 'ANTES DE PUBLICAR\n\n( ) Toda afirmação tem origem na ficha de fontes\n( ) O que é opinião está marcado como opinião\n( ) Toda imagem tem crédito e pode ser usada\n( ) Se usamos IA, está declarado e verificamos o que ela produziu\n( ) Nenhuma pessoa real aparece sem autorização\n( ) Nenhum dado pessoal de ninguém aparece\n( ) Alguém do público-alvo leu e entendeu\n( ) A peça pede uma ação possível\n( ) Está assinada, para que dê para perguntar\n\nQUEM RESPONDE por esta peça se alguém apontar um erro:\n____________________\n\nONDE ELA VAI FICAR, e por quanto tempo:\n____________________\n\nSE ALGUÉM APONTAR UM ERRO, o que a gente faz:\n____________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O QUE ESTA ATIVIDADE CORRIGE NO BANCO\nAs outras fichas formam avaliadores. Esta forma produtores, e o framework da UNESCO é explícito em querer estudantes cocriadores, e não só usuários responsáveis. Sem uma atividade assim, o banco ensina a desmontar e nunca a montar.\n\nERROS ESPERADOS, todos produtivos\n\n1. Preencher a ficha de fontes depois de escrever. É o erro mais comum e é o mesmo de "Prompts sob teste": o critério tem que vir antes.\n2. Afirmação de memória. "Todo mundo sabe que..." não tem fonte, e a checagem cruzada pega.\n3. Exagero para convencer. Grupos descobrem que a versão exagerada é mais persuasiva, e é justamente aí que a discussão fica boa: convencer e ser correto às vezes puxam para lados diferentes.\n4. Imagem tirada de busca sem verificar licença. Muito comum e fácil de corrigir: bancos de imagem livre existem, e o crédito é obrigatório mesmo quando o uso é livre.\n5. Escrever para si mesmo em vez de para o público-alvo. O teste da pergunta 6 resolve.\n\nO MOMENTO MAIS FORMATIVO é a devolução do parecer. Grupos que foram duros com os outros e depois recebem parecer duro entendem, sem que ninguém precise dizer, por que publicar é mais difícil que criticar.\n\nSOBRE A PUBLICAÇÃO\nCombinar com a escola ANTES onde a peça vai ficar. Peça produzida e nunca publicada esvazia a atividade: o que muda o comportamento é saber que outras pessoas vão ler.\n\nSE A PEÇA FOR PARA FORA DA ESCOLA, aplicar as regras de proteção com rigor: nenhuma pessoa identificável sem autorização, nenhum dado pessoal, e assinatura da turma e não de estudantes individuais.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantas afirmações da sua peça vocês conseguem rastrear até uma fonte?',
      'A versão exagerada convence mais? Isso é um problema?',
      'Foi mais fácil checar a peça do outro grupo ou defender a de vocês?',
      'Alguém do público-alvo entenderia mesmo?',
      'A ação que vocês pedem é possível de fazer?',
      'Se alguém apontar um erro depois de publicado, o que vocês fazem?'
    ],
    evitar: [
      'Deixar a ficha de fontes para o fim. Ela é preenchida durante, senão vira ficção retroativa.',
      'Aceitar checagem cruzada branda. Se o grupo passar a mão na cabeça do outro, o público encontra o erro.',
      'Produzir e não publicar. O que muda a qualidade é saber que alguém vai ler.',
      'Avaliar só o acabamento visual. A ficha de fontes e o parecer valem mais.'
    ]
  },

  protecao: 'Nenhuma pessoa identificável aparece na peça sem autorização por escrito, e isso inclui colegas, professores e familiares. Nenhum dado pessoal de ninguém é publicado. Imagens só com licença verificada e crédito. Se a peça for divulgada fora da escola, a assinatura é da turma, e não de estudantes individualmente. Se houver uso de IA, ele é declarado na própria peça.',

  evidencia: 'A peça é publicada com todas as afirmações rastreáveis na ficha de fontes, imagens creditadas e licenciadas, e o grupo revisou a peça a partir de um parecer de checagem recebido de outro grupo.'
},

/* ==================================================================== 76 */
{
  id: 'explique-para-quem-nao-sabe',
  insightCurto: 'Você só entendeu de verdade quando consegue explicar para quem não sabe nada do assunto.',
  n: 76,
  titulo: 'Explique para quem não sabe',
  chamada: 'Traduzir um tema difícil do banco para quem tem oito anos, ou para quem tem sessenta.',
  faixa: '15-17',
  duracao: 999,
  duracaoTexto: 'Projeto de duas aulas com aplicação real',
  formato: 'criacao',
  formatoDetalhe: 'Produção de explicação com público real',
  contexto: ['escola'],
  tela: 'hibrido',
  situacao: ['autoria', 'informacao'],
  disciplinas: ['Língua Portuguesa', 'Artes', 'Projeto de Vida'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'autoria',
  nivel: 3,
  sensibilidade: 'baixa',
  selos: [],

  bncc: {
    principal: { codigo: 'EM13CO21', texto: 'Comunicar ideias complexas de forma clara por meio de objetos digitais como mapas conceituais, infográficos, hipertextos e outros.' },
    secundaria: { codigo: 'EM13CO20', texto: 'Criar conteúdos, disponibilizando-os em ambientes virtuais para publicação e compartilhamento, avaliando a confiabilidade e as consequências da disseminação dessas informações.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Traduzir conhecimento técnico para públicos diversos sem perder precisão.' },

  provocacao: 'Vocês vão explicar perfilamento, ou criptografia, ou economia da atenção, para uma turma de terceiro ano ou para um grupo de avós. E eles vão dizer, na cara de vocês, se entenderam.',

  missao: 'Produzir uma explicação de um tema difícil para um público real, aplicar de verdade, e medir se funcionou.',

  virada: 'Na aplicação, os grupos descobrem que o que derruba a explicação quase nunca é o conteúdo. É a palavra que eles nem perceberam que era técnica: "plataforma", "dados", "algoritmo", "perfil", "conta". A turma de oito anos trava em "dados" antes de chegar em "perfilamento". Os grupos precisam reescrever eliminando um vocabulário que era invisível para eles.',

  insight: 'A dificuldade de explicar não está no conceito difícil. Está nas palavras fáceis que a gente nem percebe que aprendeu.',

  transferencia: 'Diante de qualquer explicação que você precise dar, existe um teste: sublinhe toda palavra que o outro talvez não saiba. Vai ter mais do que você imagina.',

  roteiro: [
    { t: 'Aula 1, 0 a 10 min',  o: 'Sorteio do tema entre os já estudados e escolha do público real: uma turma específica ou um grupo de responsáveis.' },
    { t: 'Aula 1, 10 a 25 min', o: 'Teste do vocabulário: cada grupo escreve a explicação e depois sublinha TODA palavra que o público talvez não conheça. Contar.' },
    { t: 'Aula 1, 25 a 45 min', o: 'Reescrita eliminando ou explicando cada palavra sublinhada. Escolher o formato da peça.' },
    { t: 'Entre as aulas',      o: 'Aplicação real com o público escolhido, de dez minutos, com um teste de compreensão simples ao fim.' },
    { t: 'Aula 2, 0 a 20 min',  o: 'A virada. Cada grupo relata onde o público travou. Montar a lista coletiva das palavras que derrubaram.' },
    { t: 'Aula 2, 20 a 45 min', o: 'Segunda reescrita a partir do que aconteceu, e produção da versão final para ficar disponível.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Depende de combinar a aplicação real com outra turma ou com a coordenação, e é isso que faz a atividade funcionar. Sem público real, vira exercício de redação. Encaixa em Língua Portuguesa e é excelente como avaliação de conclusão de um ciclo do banco.',
    familia: 'O adolescente explica um tema para alguém da família que não conhece o assunto, e a pessoa diz honestamente o que não entendeu. Vinte minutos.',
    jovem: 'Individual: explique um tema para alguém de outra geração e peça que a pessoa repita com as próprias palavras. O que ela não conseguir repetir, você não explicou.'
  },

  kit: [
    { nome: 'Cartas de tema', tipo: 'imprimivel', desc: 'Temas difíceis já estudados no banco.' },
    { nome: 'Teste do vocabulário', tipo: 'editavel', desc: 'A ferramenta central.' },
    { nome: 'Teste de compreensão', tipo: 'imprimivel', desc: 'Três perguntas para aplicar ao público.' },
    { nome: 'Folha de relato', tipo: 'editavel', desc: 'Onde o público travou.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O que observar e como avaliar.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cartas de tema',
      tipo: 'cartas',
      nota: 'Todos já estudados em fichas do banco. Sortear um por grupo.',
      itens: [
        'PERFILAMENTO: como um aplicativo deduz coisas sobre você a partir de poucas ações.',
        'CRIPTOGRAFIA DE PONTA A PONTA: por que quem está no meio não consegue ler.',
        'ECONOMIA DA ATENÇÃO: por que um serviço de graça precisa que você fique.',
        'VIÉS EM SISTEMAS QUE APRENDEM: por que um sistema erra mais com um grupo de pessoas.',
        'METADADOS: o que uma foto guarda além da imagem.',
        'DISCRIMINAÇÃO INDIRETA: como um sistema exclui sem olhar a característica que exclui.'
      ]
    },
    {
      titulo: 'Teste do vocabulário',
      tipo: 'editavel',
      corpo: 'PASSO 1: escreva a sua explicação do jeito que sairia naturalmente.\n____________________________________\n\nPASSO 2: sublinhe TODA palavra que o seu público talvez não conheça. Seja implacável. Palavras que parecem óbvias para você entram na lista.\n\nQuantas palavras sublinhadas? ______\n\nPASSO 3: para cada uma, decida:\nPalavra: ____________  ( ) trocar por ____________  ( ) explicar antes  ( ) cortar a frase inteira\n(repetir)\n\nPASSO 4: reescreva sem nenhuma palavra sublinhada não resolvida.\n____________________________________\n\nPASSO 5: releia em voz alta imaginando a pessoa. Onde você mesmo hesitaria?\n____________________________________\n\nDICA: palavras que quase sempre precisam de tradução e ninguém percebe:\ndados, plataforma, algoritmo, perfil, conta, aplicativo, sistema, rede, digital, virtual, nuvem, link, conteúdo.'
    },
    {
      titulo: 'Teste de compreensão',
      tipo: 'folha',
      corpo: 'Aplicar ao público DEPOIS da explicação. Três perguntas, sem consultar nada.\n\n1. Explique com as suas palavras o que você entendeu.\n(Se a pessoa repetir as palavras exatas de vocês, ela decorou. Se ela usar palavras dela, entendeu.)\n\n2. Dê um exemplo que a gente não deu.\n(Esta é a pergunta que mais separa entender de ouvir.)\n\n3. Tem alguma coisa que você não entendeu e não quis perguntar?\n(Deixar a pessoa responder em papel, sem se identificar, se preferir.)\n\nANOTAR AO LADO: em que momento exato da explicação a pessoa pareceu perder o fio?'
    },
    {
      titulo: 'Folha de relato',
      tipo: 'editavel',
      corpo: 'Tema: ____________  Público: ____________  Quantas pessoas: ______\n\nQuantas conseguiram explicar com palavras próprias? ______ de ______\nQuantas deram um exemplo novo? ______ de ______\n\nAS PALAVRAS QUE DERRUBARAM:\n____________________________________\n\nO MOMENTO EXATO em que o público perdeu o fio:\n____________________________________\n\nO QUE FUNCIONOU melhor do que esperávamos:\n____________________________________\n\nO QUE NÓS ACHÁVAMOS que era o difícil, e não era:\n____________________________________\n\nNA SEGUNDA VERSÃO nós vamos mudar:\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O QUE SEMPRE ACONTECE\n\nOs grupos preveem que o difícil será o conceito e descobrem que é o vocabulário de entrada. Com turma de terceiro ano, a palavra "dados" derruba antes de "perfilamento". Com público idoso, costuma ser "aplicativo", "conta" e "link". Nenhuma delas parece técnica para um adolescente, e é exatamente por isso que o teste do passo 2 precisa ser implacável.\n\nA PERGUNTA 2 DO TESTE DE COMPREENSÃO é a mais importante do instrumento. Repetir a explicação é memória; dar um exemplo novo é compreensão. Grupos costumam ter bom resultado na 1 e resultado ruim na 2, e essa diferença é a aula.\n\nA PERGUNTA 3, sobre o que a pessoa não quis perguntar, revela mais que as outras duas juntas, e é a que ensina sobre público: as pessoas não perguntam por vergonha, e quem explica precisa antecipar.\n\nSOBRE A APLICAÇÃO REAL\nÉ o que separa esta atividade de uma redação. Combinar com a outra turma ou com a coordenação antes da aula 1. Se a aplicação real for impossível, a segunda melhor opção é aplicar com funcionários da escola que não sejam professores, e a pior é aplicar entre os próprios grupos, que compartilham o vocabulário e por isso não travam.\n\nCOMO AVALIAR\nNão avalie pela beleza da peça nem pela quantidade de conteúdo. Avalie pelo resultado da pergunta 2 e pela qualidade da segunda reescrita. Um grupo que teve resultado ruim na aplicação e reescreveu bem aprendeu mais que um que acertou de primeira.\n\nESTA FICHA fecha bem um ciclo do banco: só dá para explicar o que se entendeu, e explicar para quem não sabe é o teste mais honesto que existe.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantas palavras vocês sublinharam? Quantas vocês achavam que eram óbvias?',
      'O público conseguiu dar um exemplo novo?',
      'O que derrubou foi o conceito ou foi o vocabulário?',
      'O que vocês achavam que era o difícil, e não era?',
      'Alguém disse que não entendeu e não quis perguntar? O que isso ensina?'
    ],
    evitar: [
      'Aplicar entre os próprios grupos da turma. Eles compartilham o vocabulário e não travam, e a atividade não acontece.',
      'Avaliar pela estética da peça em vez do resultado da compreensão.',
      'Aceitar teste do vocabulário com poucas palavras sublinhadas. Se sublinharam três, não foram implacáveis.',
      'Pular a segunda reescrita. É nela que o aprendizado se consolida.'
    ]
  },

  protecao: 'A aplicação com outra turma ou com responsáveis é combinada previamente com a coordenação. Nenhum dado pessoal de quem participa do teste é registrado, e as respostas do teste de compreensão são anônimas. Se o público for de crianças menores, valem as regras de proteção da faixa correspondente, e os estudantes que aplicam são orientados a não pedir relatos pessoais.',

  evidencia: 'O grupo identifica no teste do vocabulário palavras que considerava óbvias, relata onde o público real travou, e produz uma segunda versão que corrige especificamente esses pontos.'
},

/* ==================================================================== 77 */
{
  id: 'profissoes-que-a-maquina-mudou',
  insightCurto: 'A máquina raramente apaga a profissão inteira. Ela come tarefas, e muda quem decide o quê.',
  n: 77,
  titulo: 'As profissões que a máquina mudou',
  chamada: 'Não "sua profissão vai acabar". Quais tarefas dela mudam, quais sobram, e quem decide.',
  faixa: '15-17',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: analise quatro profissões em vez de oito e vá direto à decomposição em tarefas. A pergunta sobre quem decide é o fecho.',
  formato: 'investigacao',
  formatoDetalhe: 'Decomposição de profissões em tarefas',
  contexto: ['escola', 'individual'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa', 'algoritmo'],
  disciplinas: ['Projeto de Vida', 'História', 'Geografia', 'Matemática'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'ia',
  nivel: 5,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EM13CO09', texto: 'Identificar tecnologias digitais, sua presença e formas de uso, nas diferentes atividades no mundo do trabalho.' },
    secundaria: { codigo: 'EM13CO10', texto: 'Conhecer os fundamentos da Inteligência Artificial, comparando-a com a inteligência humana, analisando suas potencialidades, riscos e limites.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Analisar o efeito da automação sobre tarefas e sobre a distribuição de decisão no trabalho.' },

  provocacao: 'A pergunta que todo mundo faz é "essa profissão vai acabar". É a pergunta errada, e ela não tem resposta. A pergunta que tem resposta é outra: quais tarefas dessa profissão mudam, e quem passa a decidir.',

  missao: 'Decompor oito profissões em tarefas, classificar cada tarefa, e descobrir o que sobra e quem manda depois.',

  virada: 'Depois da classificação, o facilitador entrega as fichas históricas: o que aconteceu com o caixa de banco depois do caixa eletrônico, com o datilógrafo, com o operador de telefonia. Em nenhum dos casos a profissão simplesmente sumiu do jeito previsto. Em alguns, o número de postos até cresceu, e o que mudou foi o conteúdo do trabalho e quem controlava o ritmo. A turma descobre que a previsão de desaparecimento erra com frequência, e que a mudança real acontece em outro lugar: em quem decide.',

  insight: 'A automação come tarefas, não profissões inteiras. E o efeito mais duradouro não é o desemprego previsto: é a mudança de quem controla o ritmo, o critério e a avaliação do trabalho.',

  transferencia: 'Diante de qualquer notícia sobre uma profissão que "vai acabar", dá para decompor em tarefas e perguntar quais delas realmente mudam, o que sobra, e quem passa a decidir.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Provocação e reformulação da pergunta. Distribuir as oito fichas de profissão, uma ou duas por grupo.' },
    { t: '8 a 26 min',  o: 'Decompor a profissão em pelo menos seis tarefas e classificar cada uma na grade de quatro categorias.' },
    { t: '26 a 34 min', o: 'Apresentação. Montar no quadro o que sobra em cada profissão depois da classificação.' },
    { t: '34 a 42 min', o: 'A virada. Entregar as fichas históricas. Comparar previsão e o que aconteceu.' },
    { t: '42 a 50 min', o: 'Fechamento com as três perguntas sobre decisão, ritmo e avaliação.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Encaixa em Projeto de Vida e em História, na comparação com transformações anteriores do trabalho. É uma das poucas fichas do banco que fala diretamente do futuro de quem está na sala, e por isso pede cuidado: ver a proteção.',
    familia: 'Decompor em tarefas a profissão de alguém da família, com essa pessoa participando. Perguntar o que já mudou nos últimos dez anos. Costuma render mais que qualquer previsão.',
    jovem: 'Individual: decomponha em tarefas uma profissão que você considera seguir, classifique, e escreva o que você faria para desenvolver o que sobra.'
  },

  kit: [
    { nome: 'Oito fichas de profissão', tipo: 'imprimivel', desc: 'Variadas em escolaridade e setor.' },
    { nome: 'Grade de classificação', tipo: 'imprimivel', desc: 'Quatro categorias por tarefa.' },
    { nome: 'Fichas históricas', tipo: 'imprimivel', desc: 'A virada.' },
    { nome: 'Folha de conclusão', tipo: 'editavel', desc: 'O que sobra e quem decide.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Padrões e cuidados de condução.' }
  ],

  imprimiveis: [
    {
      titulo: 'Oito fichas de profissão',
      tipo: 'cartas',
      nota: 'Escolhidas de propósito com escolaridades e setores variados, para não sugerir que o tema é só de quem vai para a universidade.',
      itens: [
        'MOTORISTA DE APLICATIVO', 'ENFERMEIRO', 'PROFESSOR DOS ANOS INICIAIS',
        'CONTADOR', 'ELETRICISTA', 'DESIGNER GRÁFICO',
        'ATENDENTE DE TELEMARKETING', 'AGRICULTOR FAMILIAR'
      ]
    },
    {
      titulo: 'Grade de classificação',
      tipo: 'folha',
      corpo: 'Profissão: ____________________\n\nListem pelo menos SEIS tarefas concretas do dia a dia dessa pessoa. Não a profissão, as tarefas.\n\nPara cada uma, classifiquem:\n\nA. JÁ É FEITA POR MÁQUINA hoje\nB. PODE SER FEITA POR MÁQUINA, mas ainda é humana\nC. A MÁQUINA AJUDA, e a decisão continua humana\nD. NÃO DÁ para automatizar, e expliquem por quê\n\nTarefa 1: ____________________  Categoria: ___  Por quê: ____________\nTarefa 2: ____________________  Categoria: ___  Por quê: ____________\nTarefa 3: ____________________  Categoria: ___  Por quê: ____________\nTarefa 4: ____________________  Categoria: ___  Por quê: ____________\nTarefa 5: ____________________  Categoria: ___  Por quê: ____________\nTarefa 6: ____________________  Categoria: ___  Por quê: ____________\n\nQuantas em D? ______\nO que essas tarefas D têm em comum?\n____________________________________'
    },
    {
      titulo: 'Fichas históricas (a virada)',
      tipo: 'cartas',
      itens: [
        'O CAIXA DE BANCO E O CAIXA ELETRÔNICO. Previu-se o fim da profissão. O caixa eletrônico barateou muito a operação de uma agência, o que permitiu abrir mais agências. Por um longo período, o número de pessoas empregadas em agências não caiu como se previa, e o trabalho mudou: menos contagem de dinheiro, mais venda de produtos financeiros e mais metas.',
        'O DATILÓGRAFO. Essa ocupação específica praticamente desapareceu. A tarefa de digitar não desapareceu: ela se espalhou para praticamente todas as outras profissões, e deixou de ser um trabalho para virar uma exigência básica de todos os outros.',
        'A TELEFONISTA DE MESA. Sumiu com a automação da comutação. Ao mesmo tempo, apareceram centrais de atendimento com muito mais gente, em condições e com controle de ritmo bem diferentes.',
        'O DIAGRAMADOR DE JORNAL. A editoração eletrônica eliminou etapas manuais inteiras. O trabalho de design não acabou, mas passou a exigir outra formação, e uma parte do que era feito por um profissional passou a ser feita pelo próprio autor do texto.'
      ]
    },
    {
      titulo: 'Folha de conclusão',
      tipo: 'editavel',
      corpo: '1. NA NOSSA PROFISSÃO, o que sobra na categoria D:\n____________________________________\n\n2. O QUE ESSAS TAREFAS TÊM EM COMUM? Marquem o que se aplica:\n( ) exigem julgamento em situação nova\n( ) exigem responsabilidade por consequência sobre pessoas\n( ) exigem presença física\n( ) exigem confiança e relação\n( ) exigem negociar entre interesses\n( ) exigem decidir sem informação completa\n\n3. AS TRÊS PERGUNTAS QUE IMPORTAM MAIS QUE "VAI ACABAR"\n\nDepois da mudança, QUEM DECIDE o que é feito?\n____________________________________\n\nQUEM CONTROLA O RITMO do trabalho?\n____________________________________\n\nQUEM AVALIA se foi bem feito, e com qual critério?\n____________________________________\n\n4. Nas fichas históricas, a previsão de desaparecimento acertou? ______\nO que mudou de verdade? ____________________________________\n\n5. Se essa fosse a sua profissão, o que você desenvolveria a partir de agora?\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'A REFORMULAÇÃO DA PERGUNTA é o conteúdo central. "Essa profissão vai acabar" não tem resposta e produz ansiedade sem ação. "Quais tarefas mudam, o que sobra e quem decide" tem resposta e produz escolha.\n\nO PADRÃO DA CATEGORIA D\nEm praticamente todas as oito profissões, o que sobra tem as mesmas características: julgamento em situação nova, responsabilidade sobre consequência para pessoas, presença física, relação de confiança e negociação entre interesses. Quando a turma monta o quadro e vê o padrão se repetir em profissões tão diferentes quanto enfermeiro e eletricista, a conclusão aparece sozinha, e é bem mais útil que uma lista de "profissões do futuro".\n\nSOBRE AS FICHAS HISTÓRICAS\nElas são apresentadas em ordem de grandeza e sem números precisos de propósito, porque os números variam muito conforme país e período, e o ponto não é quantitativo. O ponto é que a previsão de desaparecimento errou em três dos quatro casos, e que no único em que acertou, a do datilógrafo, a TAREFA não sumiu: ela se espalhou para todo mundo. Se algum grupo quiser números, essa é uma ótima pesquisa complementar, com a ressalva de comparar fontes.\n\nAS TRÊS PERGUNTAS DO FECHAMENTO ligam esta ficha ao resto do banco. Quem decide, quem controla o ritmo e quem avalia é exatamente a estrutura de "Júri do algoritmo de contratação" e de "O ranking invisível da escola", agora aplicada ao trabalho. Vale explicitar a ligação.\n\nCUIDADO DE CONDUÇÃO, importante\nEsta turma vai trabalhar, e muitos já trabalham ou vão trabalhar cedo. As oito profissões incluem de propósito ocupações que não exigem ensino superior, para que ninguém saia com a impressão de que o tema é só de quem vai para a universidade. Não sugerir que existem profissões "seguras" e "condenadas": é falso e é cruel com quem já escolheu ou com quem depende da renda de alguém dessas profissões.\n\nNão perguntar em que trabalham os responsáveis de cada estudante. Se alguém trouxer espontaneamente, acolher e tratar como caso, sem transformar a família de ninguém em objeto de análise da turma.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantas tarefas sobraram na categoria D? O que elas têm em comum?',
      'O padrão se repete entre profissões bem diferentes?',
      'Nas fichas históricas, a previsão de fim acertou?',
      'No caso do datilógrafo, a tarefa sumiu ou se espalhou?',
      'Depois da mudança, quem passou a controlar o ritmo do trabalho?',
      'Qual pergunta é mais útil: "vai acabar" ou "quem decide"?'
    ],
    evitar: [
      'Listar profissões seguras e condenadas. É falso, não tem base, e atinge estudantes cujas famílias vivem dessas profissões.',
      'Perguntar em que trabalham os responsáveis dos estudantes.',
      'Deixar de fora profissões que não exigem ensino superior. A seleção das oito é intencional.',
      'Terminar em ansiedade. O fechamento é sobre o que se desenvolve, e sobre quem decide.'
    ]
  },

  protecao: 'Tema que toca diretamente o futuro e a renda familiar dos estudantes. Não perguntar a profissão dos responsáveis nem a situação de trabalho de ninguém. Não classificar profissões como condenadas: a análise é por tarefa, e a seleção inclui deliberadamente ocupações de diferentes escolaridades. Se um estudante relatar insegurança sobre a renda da família, acolher em particular e encaminhar à orientação educacional, sem exposição da turma.',

  evidencia: 'O grupo decompõe a profissão em tarefas concretas, identifica o padrão comum das tarefas não automatizáveis, e responde quem decide, quem controla o ritmo e quem avalia depois da mudança.'
}

);
