/* 11 a 14 anos — segundo lote. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 36 */
{
  id: 'laboratorio-de-phishing',
  insightCurto: 'Não existe um sinal mágico de golpe. Existe um procedimento, e ele funciona mesmo quando a mensagem é verdadeira.',
  n: 36,
  titulo: 'Laboratório de phishing',
  chamada: 'Oito mensagens. Três parecem golpe e são legítimas. Duas parecem perfeitas e são fraude.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use cinco mensagens, mantendo obrigatoriamente a 3 (legítima e feia) e a 6 (fraudulenta e impecável). Corte a etapa de construção da mensagem, que é a mais demorada, e vá direto ao protocolo.',
  formato: 'investigacao',
  formatoDetalhe: 'Análise comparativa e construção de protocolo',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['golpe'],
  disciplinas: ['Língua Portuguesa', 'Matemática'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'seguranca',
  nivel: 3,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF07CO07', texto: 'Identificar problemas de segurança cibernética e experimentar formas de proteção.' },
    secundaria: { codigo: 'EF08CO10', texto: 'Discutir questões sobre segurança e privacidade relacionadas ao uso dos ambientes virtuais.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Substituir julgamento perceptual por procedimento verificável na resposta a engenharia social.' },

  provocacao: 'Vocês vão pontuar oito mensagens de 0 a 10, sendo 10 certeza de golpe. Depois eu vou contar quais eram golpe de verdade. Aviso desde já: a maior parte das turmas erra as duas mais importantes.',

  missao: 'Pontuar as oito mensagens, comparar com o gabarito e depois construir um protocolo que funcione mesmo sem saber quais são falsas.',

  virada: 'O gabarito revela que a mensagem mais malfeita da lista, cheia de erro de português e com remetente estranho, era o aviso legítimo da secretaria da escola. E que a mensagem mais bem escrita, com identidade visual perfeita, endereço plausível e nenhum erro, era a fraude. Os grupos descobrem que pontuaram aparência, não risco. E aparência é exatamente o que o fraudador controla.',

  insight: 'Todo sinal que se aprende a procurar, o golpista aprende a eliminar. O que não dá para falsificar é o canal: por isso o procedimento é sempre sair da mensagem e verificar por um caminho que você já tinha.',

  transferencia: 'Diante de qualquer mensagem que peça ação urgente, o passo é o mesmo, e ele independe de a mensagem ser boa ou ruim: não clicar no que veio, abrir o canal oficial por conta própria e verificar lá.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Distribuir as oito mensagens e a folha de pontuação. Explicar a escala. Não dar nenhuma dica sobre o que observar.' },
    { t: '6 a 20 min',  o: 'Em grupos de quatro, pontuar as oito e justificar cada nota em uma linha. A justificativa é obrigatória e é o que vai ser usado depois.' },
    { t: '20 a 26 min', o: 'Recolher as pontuações e escrever a média da turma para cada mensagem no quadro, sem revelar nada.' },
    { t: '26 a 34 min', o: 'A virada. Revelar o gabarito. Deixar a mensagem 3 e a 6 para o fim, com pausa.' },
    { t: '34 a 42 min', o: 'Revisitar as justificativas escritas: quantas se baseavam em erro de português, emoji, urgência ou aparência? Riscar as que não funcionariam contra a mensagem 6.' },
    { t: '42 a 50 min', o: 'Construção do protocolo. Cada grupo escreve três passos que funcionariam para as oito mensagens sem precisar saber quais são falsas. Comparar e consolidar um protocolo da turma.' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Encaixa em Língua Portuguesa, na análise de registro e intenção do texto. A etapa de riscar as próprias justificativas é a mais formativa e costuma ser desconfortável, o que é bom sinal.',
    familia: 'Ler quatro das oito mensagens na mesa e pontuar em família. O adulto costuma errar a 6, e é bom que erre na frente do adolescente, porque desmonta a ideia de que isso é problema de gente inexperiente.',
    jovem: 'Individual: pontuar as oito, comparar com o gabarito e escrever o próprio protocolo em três linhas. Depois testar o protocolo na próxima mensagem estranha que chegar de verdade.'
  },

  kit: [
    { nome: 'Oito mensagens', tipo: 'imprimivel', desc: 'Com remetente, assunto e corpo.' },
    { nome: 'Folha de pontuação', tipo: 'imprimivel', desc: 'Nota de 0 a 10 e justificativa obrigatória.' },
    { nome: 'Gabarito', tipo: 'gabarito', desc: 'A virada, com a explicação de cada caso.' },
    { nome: 'Folha de protocolo', tipo: 'editavel', desc: 'Três passos que funcionem sem saber a resposta.' }
  ],

  imprimiveis: [
    {
      titulo: 'Oito mensagens',
      tipo: 'cartas',
      nota: 'Imprimir cada uma em um cartão, com remetente visível.',
      itens: [
        '1. De: premios-agora@ganhe.xyz | "VOCÊ FOI SORTEADO! Clique em 24h para resgatar seu prêmio de R$ 5.000!"',
        '2. De: suporte@banco-seguro-atendimento.com | "Detectamos acesso suspeito. Confirme seus dados no link para não ter a conta bloqueada."',
        '3. De: secretariaescolar.vilanova@gmail.com | "Bom dia, srs pais. Segue comunicado, a reunião de pais foi remarcado para dia 22, as 19h. Favor confirmar presença respondendo esse email. Att, Secretaria" (com dois erros de concordância e sem identidade visual)',
        '4. De: contato@lojaqueeucomprei.com.br | "Seu pedido #48211 foi enviado. Acompanhe pelo código de rastreio AB123456789BR."',
        '5. De: rh@empresa-vagas.net | "Selecionamos seu perfil! Envie RG, CPF e comprovante de residência para agendar a entrevista."',
        '6. De: atendimento@nubank.com.br | Assinatura completa, logotipo, rodapé com endereço e CNPJ, nenhum erro de português: "Prezado(a), identificamos uma tentativa de compra de R$ 1.847,00 em estabelecimento fora do seu perfil habitual. Caso não reconheça, acesse sua conta e conteste em até 48 horas. Atenciosamente, Central de Prevenção a Fraudes."',
        '7. De: um número desconhecido, no celular | "oi filha, troquei de número, salva aí. você pode fazer um pix pra mim? depois te explico"',
        '8. De: no-reply@escola-vilanova.edu.br | "Notas do 2º bimestre disponíveis no portal. Acesse com seu login habitual."'
      ]
    },
    {
      titulo: 'Folha de pontuação',
      tipo: 'folha',
      corpo: 'Para cada mensagem: nota de 0 (certeza de que é legítima) a 10 (certeza de que é golpe).\n\nA justificativa é obrigatória. Escreva o que exatamente fez vocês darem essa nota.\n\nMsg 1: nota ___  porque ____________________________________\nMsg 2: nota ___  porque ____________________________________\nMsg 3: nota ___  porque ____________________________________\nMsg 4: nota ___  porque ____________________________________\nMsg 5: nota ___  porque ____________________________________\nMsg 6: nota ___  porque ____________________________________\nMsg 7: nota ___  porque ____________________________________\nMsg 8: nota ___  porque ____________________________________\n\nDepois do gabarito, volte aqui e risque toda justificativa que NÃO teria funcionado contra a mensagem 6.\n\nQuantas sobraram? ______'
    },
    {
      titulo: 'Gabarito',
      tipo: 'gabarito',
      corpo: '1. GOLPE. Prêmio não solicitado, domínio estranho, urgência. Todo grupo acerta. É a mensagem fácil, e existe para dar confiança antes das difíceis.\n\n2. GOLPE. O domínio é a chave: banco-seguro-atendimento.com não é o domínio de banco nenhum. Muitos grupos acertam pelo motivo errado, dizendo "porque pede dados". Bancos legítimos também pedem confirmação, só não por link de e-mail.\n\n3. LEGÍTIMA. É o comunicado real da secretaria da escola. Tem erro de concordância, vem de um endereço genérico de e-mail gratuito e não tem identidade visual. Escolas públicas e pequenas usam e-mail comum o tempo todo. Quase toda turma marca nota alta aqui, e essa é a metade do aprendizado: aparência amadora não é indício de fraude.\n\n4. LEGÍTIMA, se a pessoa realmente comprou. Aqui não dá para decidir só pela mensagem, e reconhecer isso é a resposta certa. A pergunta que resolve é: eu comprei alguma coisa?\n\n5. GOLPE. Nenhum processo seletivo pede documentos antes da entrevista. É coleta de dados para abrir conta em nome da vítima.\n\n6. GOLPE, e é a mais importante das oito. Visual perfeito, português impecável, CNPJ no rodapé, urgência plausível de 48 horas. O único jeito de resolver é não usar a mensagem: abrir o aplicativo do banco por conta própria e olhar a fatura. Se a compra existir, ela está lá. Se não existir, não havia o que contestar.\n\n7. GOLPE quase certo, e é o mais comum no Brasil. O detalhe cruel é que trocar de número é verdade com frequência. Procedimento: ligar para o número antigo.\n\n8. LEGÍTIMA. Domínio institucional coerente, não pede dado nenhum, não tem urgência. Aponta para um portal que a pessoa já usa.\n\nPLACAR TÍPICO: turmas acertam 5 ou 6 de 8, e quase sempre erram a 3 e a 6, que são exatamente as duas que ensinam alguma coisa.'
    },
    {
      titulo: 'Folha de protocolo',
      tipo: 'editavel',
      corpo: 'Escreva três passos que funcionem para as OITO mensagens, sem que vocês precisem saber quais são falsas.\n\nUm passo só vale se sobreviver a este teste: ele funcionaria contra a mensagem 6, que era perfeita?\n\nPasso 1: ____________________________________\nFunciona contra a 6? ( ) sim ( ) não\n\nPasso 2: ____________________________________\nFunciona contra a 6? ( ) sim ( ) não\n\nPasso 3: ____________________________________\nFunciona contra a 6? ( ) sim ( ) não\n\nE contra a 3, que era legítima e parecia golpe, o protocolo faz a gente perder alguma coisa importante?\n____________________________________\n\nPROTOCOLO DA TURMA, consolidado:\n____________________________________'
    }
  ],

  mediacao: {
    perguntas: [
      'Quantas justificativas de vocês sobreviveram ao teste da mensagem 6?',
      'A mensagem 3 era feia e verdadeira. O que isso faz com a regra de procurar erro de português?',
      'Existe algum sinal que um golpista não consiga copiar?',
      'O que muda se o protocolo não depender de olhar a mensagem?',
      'Um protocolo que manda desconfiar de tudo tem algum custo?'
    ],
    evitar: [
      'Ensinar listas de sinais visuais. Toda lista de sinais é uma lista do que o próximo golpe vai corrigir.',
      'Deixar de fora as mensagens legítimas. Sem elas, a turma aprende a desconfiar de tudo, inclusive da escola e do banco, e isso tem custo real.',
      'Enviar mensagens de teste para estudantes ou famílias. Nunca, em nenhuma circunstância.',
      'Pular a etapa de riscar as próprias justificativas. É desconfortável e é a parte que ensina.'
    ]
  },

  protecao: 'Todas as mensagens são fictícias, impressas e lidas em sala. Nenhuma é enviada a ninguém. Nenhum link é acessado, nenhuma conta é aberta e nenhum dado real é digitado. O nome de instituição usado na mensagem 6 serve apenas para tornar o exemplo realista e não implica nenhuma afirmação sobre a instituição. Não pedir que estudantes contem se a família já caiu em golpe.',

  evidencia: 'O grupo produz pelo menos um passo de protocolo que não depende da aparência da mensagem e reconhece explicitamente que a mensagem legítima da escola teria sido descartada pelos próprios critérios iniciais.'
},

/* ==================================================================== 37 */
{
  id: 'termos-em-portugues-humano',
  insightCurto: 'Estar escrito não é o mesmo que estar avisado. Ninguém lê 8 mil palavras para ver um vídeo.',
  n: 37,
  titulo: 'Termos em português humano',
  chamada: 'Traduza cinco trechos de termos de uso para uma frase que alguém entenderia de verdade.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: traduza três trechos em vez de cinco (o 1, o 3 e o 5) e corte a etapa de reescrita da tela de aceite. A comparação com o tempo real de leitura é rápida e não deve sair.',
  formato: 'criacao',
  formatoDetalhe: 'Tradução e redesenho de aviso',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['consentimento', 'dados'],
  disciplinas: ['Língua Portuguesa', 'Matemática'],
  preparo: 'baixo',
  grupo: 'dupla',
  eixo: 'consumo',
  nivel: 4,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EF08CO09', texto: 'Analisar criticamente as políticas de termos de uso das redes sociais e demais plataformas.' },
    secundaria: { codigo: 'EF08CO08', texto: 'Distinguir os tipos de dados pessoais que são solicitados em espaços digitais e os riscos associados.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Avaliar transparência efetiva em documentos de consentimento.' },

  provocacao: 'Estes termos de uso têm 8.400 palavras. Uma pessoa lendo com atenção leva 34 minutos. O aplicativo dá a ela um botão de aceitar que fica pronto em meio segundo. Vocês vão fazer o trabalho que ninguém faz.',

  missao: 'Traduzir cinco trechos para uma frase cada, em português que um colega de 12 anos entenderia, sem tirar nem inventar nada.',

  virada: 'Com as cinco traduções na mesa, o facilitador pede que as duplas leiam todas em sequência, em voz alta, como se fosse a tela de aceite. Leva quarenta segundos. E então a pergunta: se dá para dizer tudo isso em quarenta segundos, por que o documento tem 8.400 palavras? A turma percebe que o tamanho não é acidente nem exigência técnica. O tamanho é uma escolha, e ela produz um efeito.',

  insight: 'Transparência não é disponibilizar o texto. É fazer a pessoa entender. Um documento que ninguém consegue ler cumpre a formalidade e falha no propósito, e essa diferença costuma ser proposital.',

  transferencia: 'Quando aparecer um aceite, dá para procurar três coisas específicas em vez de ler tudo: o que eles coletam, com quem compartilham, e como se apaga a conta. Se essas três não estiverem achavéis em um minuto, isso já é uma informação.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Apresentar os números: 8.400 palavras, 34 minutos de leitura, meio segundo para aceitar. Entregar os cinco trechos.' },
    { t: '8 a 28 min',  o: 'Em duplas, traduzir cada trecho para uma frase. Regra estrita: não pode tirar informação nem acrescentar opinião. Só traduzir.' },
    { t: '28 a 34 min', o: 'A virada. Ler as cinco traduções em sequência e cronometrar. Escrever no quadro: 34 minutos contra 40 segundos.' },
    { t: '34 a 44 min', o: 'Redesenho da tela de aceite. Cada dupla monta uma tela que uma pessoa realmente entenderia, decidindo o que fica em destaque.' },
    { t: '44 a 50 min', o: 'Comparar as telas. Quais duplas esconderam alguma coisa para deixar mais bonito? Discutir o que é resumir e o que é omitir.' }
  ],

  versoes: {
    escola: 'Duplas. Encaixa muito bem em Língua Portuguesa, no trabalho com paráfrase e adequação de registro, e as traduções são material avaliável. A etapa de redesenho conecta com "Inventores de um botão melhor", dos 6 aos 8 anos.',
    familia: 'Traduzir dois trechos na mesa e depois procurar juntos, em um serviço que a família usa, quanto tempo leva para achar como apagar a conta. O resultado costuma ser desconfortável.',
    jovem: 'Individual: pegar os termos de um serviço que você usa, achar as três informações essenciais e cronometrar quanto tempo levou. Escrever o resultado em três linhas.'
  },

  kit: [
    { nome: 'Cinco trechos de termos', tipo: 'imprimivel', desc: 'Redação fictícia no estilo real.' },
    { nome: 'Folha de tradução', tipo: 'imprimivel', desc: 'Uma frase por trecho, com regra de fidelidade.' },
    { nome: 'Moldura de tela de aceite', tipo: 'imprimivel', desc: 'Para o redesenho.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Traduções de referência e o que observar.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cinco trechos de termos de uso',
      tipo: 'cartas',
      nota: 'Redação fictícia, escrita no registro jurídico e comercial usual.',
      itens: [
        'TRECHO 1: "Ao utilizar os Serviços, o Usuário concede à Empresa licença mundial, não exclusiva, isenta de royalties, sublicenciável e transferível para usar, reproduzir, modificar, adaptar, publicar, traduzir, criar obras derivadas, distribuir e exibir publicamente qualquer Conteúdo que o Usuário submeta, pelo período em que o Conteúdo permanecer nos Serviços e por prazo razoável após sua remoção."',
        'TRECHO 2: "A Empresa poderá compartilhar Dados Pessoais com prestadores de serviço, parceiros comerciais, afiliadas e sucessores, inclusive em operações societárias, bem como com autoridades competentes mediante requisição legal, observada a legislação aplicável."',
        'TRECHO 3: "Os Serviços destinam-se a usuários com idade igual ou superior a 13 anos. A Empresa não verifica ativamente a idade declarada pelo Usuário no momento do cadastro."',
        'TRECHO 4: "A Empresa reserva-se o direito de modificar estes Termos a qualquer tempo, mediante publicação da versão atualizada nos Serviços. O uso continuado após a publicação constituirá aceitação tácita das alterações."',
        'TRECHO 5: "A solicitação de exclusão de conta será processada em até 90 dias. Determinados Dados poderão ser mantidos por período superior para cumprimento de obrigações legais, exercício regular de direitos e finalidades legítimas da Empresa."'
      ]
    },
    {
      titulo: 'Folha de tradução',
      tipo: 'folha',
      corpo: 'REGRA: traduzir não é resumir e não é opinar. Se o trecho diz cinco coisas, a tradução diz cinco coisas.\n\nTrecho 1, em uma frase que um colega de 12 anos entenderia:\n____________________________________\n\nTrecho 2:\n____________________________________\n\nTrecho 3:\n____________________________________\n\nTrecho 4:\n____________________________________\n\nTrecho 5:\n____________________________________\n\nAgora confiram um por um: a tradução perdeu alguma informação que estava no original? Qual?\n____________________________________'
    },
    {
      titulo: 'Moldura de tela de aceite',
      tipo: 'folha',
      corpo: 'Desenhe a tela que o aplicativo deveria mostrar.\n\nRegras do exercício:\n. tudo o que está nos cinco trechos precisa estar na tela;\n. a pessoa precisa conseguir ler tudo em menos de um minuto;\n. os dois botões precisam ser igualmente fáceis de encontrar.\n\n[moldura de celular em branco, página inteira]\n\nDepois de desenhar, responda:\nO que vocês colocaram em destaque? ____________________\nO que vocês deixaram menor? ____________________\nPor quê? ____________________\nIsso foi resumir ou foi esconder? ____________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'TRADUÇÕES DE REFERÊNCIA\n\n1. "Tudo que você postar, a gente pode usar, mudar, traduzir e mostrar onde quiser, e pode passar esse direito para outras empresas. Isso continua valendo por um tempo mesmo depois que você apagar."\n\n2. "A gente compartilha seus dados com fornecedores, parceiros, empresas do mesmo grupo, com quem comprar a empresa no futuro, e com autoridades quando forem obrigados."\n\n3. "É proibido para menores de 13 anos, mas a gente não confere a idade que você digitar."\n\n4. "A gente pode mudar estas regras quando quiser, sem avisar você diretamente. Se você continuar usando, entende-se que você aceitou."\n\n5. "Apagar a conta demora até 90 dias, e mesmo assim a gente guarda parte dos seus dados por mais tempo."\n\nO QUE OBSERVAR\n\n. O trecho 3 é o que mais choca, e é o mais curto. Vale perguntar o que significa proibir sem verificar. Conecta diretamente com "Prove sua idade sem entregar sua vida", no Ensino Médio.\n\n. O trecho 4 costuma passar batido na tradução e é dos mais graves: consentimento que se renova sozinho por inércia. Se nenhuma dupla destacar, provocar: quem foi avisado da última mudança?\n\n. No trecho 1, muitas duplas esquecem o "e por prazo razoável após sua remoção". Vale voltar: a parte que some na tradução costuma ser a mais desconfortável do original, e isso acontece com adolescentes tanto quanto com advogados.\n\nA CONTA DA VIRADA\n8.400 palavras a 250 palavras por minuto dá cerca de 34 minutos. As cinco traduções lidas em voz alta levam entre 35 e 45 segundos. A razão é de aproximadamente 50 para 1.\n\nSOBRE O REDESENHO\nA pergunta final, se foi resumir ou esconder, é a melhor da atividade. Quase toda dupla diminui o trecho 1 ou o 5 para a tela ficar apresentável, e reproduz sem perceber exatamente a prática que estava criticando. Não apontar isso como pegadinha: apontar como descoberta.'
    }
  ],

  mediacao: {
    perguntas: [
      'Se dá para dizer tudo em 40 segundos, por que o documento tem 8.400 palavras?',
      'O trecho 3 proíbe menores de 13 anos e não verifica nada. O que essa regra faz, na prática?',
      'Alguém aqui foi avisado da última vez que um aplicativo mudou os termos?',
      'Na sua tela nova, o que ficou menor? Isso foi resumir ou esconder?',
      'Estar escrito é o mesmo que estar avisado?'
    ],
    evitar: [
      'Deixar as duplas resumirem em vez de traduzir. Perder informação na tradução é o erro mais comum e precisa ser corrigido item por item.',
      'Concluir que toda empresa é má. Boa parte desses trechos existe por exigência jurídica real. O problema é a forma, e apontar isso com precisão vale mais que indignação genérica.',
      'Usar termos de uso reais de uma empresa nomeada. O texto fictício evita transformar a aula em processo contra uma marca.',
      'Abrir aplicativos e aceitar ou recusar termos durante a atividade.'
    ]
  },

  protecao: 'Os cinco trechos são fictícios, escritos para a atividade no estilo dos documentos reais. Nenhuma empresa é nomeada. Nenhum aplicativo é aberto, nenhum termo é aceito ou recusado, nenhuma conta é criada ou apagada durante a aula.',

  evidencia: 'A dupla produz traduções que preservam todas as informações do original, identifica ao menos uma informação que sua própria tradução havia perdido, e reconhece na tela redesenhada a diferença entre resumir e omitir.'
},

/* ==================================================================== 38 */
{
  id: 'ranking-invisivel-da-escola',
  insightCurto: 'Virar número é rápido. O que some no caminho é o motivo, e o motivo é a pessoa.',
  n: 38,
  titulo: 'O ranking invisível da escola',
  chamada: 'Um sistema pontua estudantes. Ninguém pontuado sabe que existe uma pontuação.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: entregue a fórmula pronta em vez de pedir que os grupos criem, e vá direto ao cálculo dos oito perfis e à virada das histórias. A folha de contestação é o produto e não pode sair.',
  formato: 'auditoria',
  formatoDetalhe: 'Auditoria de sistema de pontuação',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['algoritmo', 'dados'],
  disciplinas: ['Matemática', 'Projeto de Vida', 'História'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'algoritmos',
  nivel: 4,
  sensibilidade: 'alta',
  selos: ['sem-tela', 'sensivel'],

  bncc: {
    principal: { codigo: 'EF08CO11', texto: 'Avaliar a precisão, relevância, adequação, abrangência e vieses que ocorrem em fontes de informação eletrônica.' },
    secundaria: { codigo: 'EF09CO08', texto: 'Discutir como a distribuição desigual de recursos de computação em uma economia global levanta questões de equidade, acesso e poder.' }
  },
  unesco: { dimensao: 'design', competencia: 'Auditar sistemas de pontuação de pessoas, identificando proxies indevidos e ausência de contestação.' },

  provocacao: 'Uma escola comprou um sistema que dá uma nota de 0 a 100 para cada estudante, chamada Índice de Engajamento. A nota aparece para os professores e para a coordenação. Não aparece para o estudante. Vocês vão auditar.',

  missao: 'Calcular o índice de oito estudantes fictícios, ordená-los, e depois decidir o que fazer com o sistema.',

  virada: 'Com o ranking pronto e os oito estudantes ordenados do melhor ao pior, o facilitador entrega os oito envelopes com a história de cada um. O estudante em último lugar cuida da irmã pequena e por isso chega atrasado. O penúltimo tem uma condição de saúde que causa faltas. O primeiro colocado mora a duas quadras e tem os pais em casa o dia inteiro. Nenhum dos oito escolheu as condições que produziram a própria nota. O ranking mede circunstância e chama isso de engajamento.',

  insight: 'Transformar pessoas em pontuação parece objetivo porque é numérico. Mas cada critério é um palpite sobre a vida de alguém, e o número esconde o motivo que explicaria tudo.',

  transferencia: 'Diante de qualquer sistema que dê nota a pessoas, as perguntas são: o que ele mede de verdade, quem vê o resultado, a pessoa avaliada sabe que existe, e como ela contesta.',

  roteiro: [
    { t: '0 a 8 min',   o: 'Apresentar o sistema e os cinco critérios com os pesos. Distribuir as oito fichas de dados, que trazem só números.' },
    { t: '8 a 22 min',  o: 'Cada grupo calcula os oito índices e monta o ranking. Exigir a conta escrita.' },
    { t: '22 a 28 min', o: 'Comparar rankings no quadro. Todos batem, porque a fórmula é a mesma. Perguntar quem está em último e o que a escola deveria fazer com essa pessoa.' },
    { t: '28 a 38 min', o: 'A virada. Entregar os oito envelopes de história, um por estudante fictício. Leitura em silêncio. Deixar o silêncio durar.' },
    { t: '38 a 46 min', o: 'Reauditoria. Cada grupo marca quais critérios medem esforço e quais medem circunstância. Recalcular sem os critérios de circunstância e comparar os dois rankings.' },
    { t: '46 a 50 min', o: 'Folha de decisão e de contestação. O sistema fica, muda ou sai? E se ficar, como um estudante contesta a própria nota?' }
  ],

  versoes: {
    escola: 'Grupos de quatro. Integra Matemática com média ponderada aplicada a um caso real de consequência. Exige mediação cuidadosa: ver a seção de proteção antes de aplicar. Encadeia com "O algoritmo do recreio", dos 9 aos 10 anos, e antecipa o "Júri do algoritmo de contratação", no Ensino Médio.',
    familia: 'Não recomendada para uso doméstico nesta forma. A conversa em família sobre notas e comparação tem outra natureza e não se beneficia deste formato.',
    jovem: 'Individual: escrever, em uma página, qual critério da sua escola você acha que mede circunstância e não esforço, e como você proporia contestar. Não é preciso entregar a ninguém.'
  },

  kit: [
    { nome: 'Fórmula do Índice de Engajamento', tipo: 'imprimivel', desc: 'Os cinco critérios e os pesos.' },
    { nome: 'Oito fichas de dados', tipo: 'imprimivel', desc: 'Só números, sem nome e sem contexto.' },
    { nome: 'Oito envelopes de história', tipo: 'imprimivel', desc: 'A virada. Abrir só depois do ranking pronto.' },
    { nome: 'Folha de reauditoria', tipo: 'imprimivel', desc: 'Esforço ou circunstância, critério por critério.' },
    { nome: 'Folha de decisão e contestação', tipo: 'editavel', desc: 'O produto final.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Os cálculos e o protocolo de mediação.' }
  ],

  imprimiveis: [
    {
      titulo: 'Fórmula do Índice de Engajamento',
      tipo: 'folha',
      corpo: 'ÍNDICE = (P x 0,30) + (F x 0,25) + (T x 0,20) + (E x 0,15) + (D x 0,10)\n\nP = PONTUALIDADE. Percentual de dias em que chegou antes do sinal. 0 a 100.\nF = FREQUÊNCIA. Percentual de presença. 0 a 100.\nT = TAREFAS. Percentual de tarefas entregues no prazo. 0 a 100.\nE = ENTREGA DIGITAL. Percentual de tarefas entregues pelo portal da escola. 0 a 100.\nD = DISCIPLINA. 100 menos 10 pontos por ocorrência registrada.\n\nO índice aparece no painel do professor e da coordenação.\nO estudante não tem acesso.\nOs responsáveis não são informados de que o índice existe.'
    },
    {
      titulo: 'Oito fichas de dados',
      tipo: 'cartas',
      nota: 'Só números. Nenhum nome, nenhuma explicação.',
      itens: [
        'ESTUDANTE 1: P=98, F=99, T=95, E=100, D=100',
        'ESTUDANTE 2: P=94, F=92, T=88, E=95, D=90',
        'ESTUDANTE 3: P=88, F=96, T=91, E=40, D=100',
        'ESTUDANTE 4: P=72, F=94, T=90, E=85, D=100',
        'ESTUDANTE 5: P=91, F=61, T=84, E=90, D=100',
        'ESTUDANTE 6: P=95, F=97, T=45, E=50, D=80',
        'ESTUDANTE 7: P=45, F=88, T=86, E=80, D=100',
        'ESTUDANTE 8: P=90, F=90, T=92, E=95, D=60'
      ]
    },
    {
      titulo: 'Oito envelopes de história (a virada)',
      tipo: 'cartas',
      nota: 'Entregar lacrados, um por estudante fictício, só depois do ranking montado.',
      itens: [
        '1. Mora a duas quadras da escola. Os dois responsáveis trabalham em casa. Tem computador próprio e internet.',
        '2. Mora a vinte minutos de ônibus. Divide o computador da casa com dois irmãos.',
        '3. Não tem internet em casa. Entrega quase tudo, mas no papel, porque o portal só funciona online. O E baixo não é falta de entrega, é falta de acesso.',
        '4. Leva a irmã de 4 anos na creche antes de vir para a escola. A creche abre às 7h10 e a aula começa às 7h20.',
        '5. Tem uma condição de saúde crônica que exige consultas mensais e causa faltas justificadas. Todas as faltas têm atestado, e o sistema não distingue falta justificada de não justificada.',
        '6. Está passando por uma situação difícil em casa desde março. As ocorrências disciplinares e as tarefas não entregues começaram no mesmo mês.',
        '7. Trabalha ajudando o pai na feira nas manhãs de terça e quinta e chega atrasado nesses dias. Nos outros três dias, chega cedo.',
        '8. Foi registrado em quatro ocorrências disciplinares. Três delas foram por questionar em voz alta decisões da coordenação nas assembleias.'
      ]
    },
    {
      titulo: 'Folha de reauditoria',
      tipo: 'folha',
      corpo: 'Para cada critério, o grupo decide:\n\nPONTUALIDADE  mede ( ) esforço ( ) circunstância ( ) os dois misturados\nFREQUÊNCIA    mede ( ) esforço ( ) circunstância ( ) os dois misturados\nTAREFAS       mede ( ) esforço ( ) circunstância ( ) os dois misturados\nENTREGA DIGITAL mede ( ) esforço ( ) circunstância ( ) os dois misturados\nDISCIPLINA    mede ( ) esforço ( ) circunstância ( ) os dois misturados\n\nRecalculem o índice usando SÓ os critérios que vocês marcaram como esforço.\n\nQuem subiu mais? ______  Quantas posições? ______\nQuem desceu? ______\n\nO ranking novo é mais justo? ____________________\nEle ainda mede alguma coisa útil? ____________________'
    },
    {
      titulo: 'Folha de decisão e contestação',
      tipo: 'editavel',
      corpo: 'NOSSA RECOMENDAÇÃO\n( ) manter como está\n( ) manter com mudanças\n( ) desligar o sistema\n\nSe manter com mudanças, quais:\n1. ____________________________________\n2. ____________________________________\n\nO estudante deve saber que o índice existe? ( ) sim ( ) não\nPor quê? ____________________________________\n\nCOMO UM ESTUDANTE CONTESTA A PRÓPRIA NOTA\nCom quem ele fala: ____________________\nO que ele precisa apresentar: ____________________\nEm quanto tempo recebe resposta: ____________________\nQuem decide: ____________________\n\nO ESTUDANTE 8 foi penalizado por questionar a coordenação em assembleia.\nO que o sistema de vocês faz com esse caso?\n____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'ÍNDICES CALCULADOS\n1: 97,7 | 2: 91,7 | 8: 87,0 | 3: 82,4 | 4: 87,1 | 6: 71,0 | 5: 79,9 | 7: 76,7\n\nRANKING: 1 (97,7), 2 (91,7), 4 (87,1), 8 (87,0), 3 (82,4), 5 (79,9), 7 (76,7), 6 (71,0).\n\nO QUE A VIRADA REVELA\nO último colocado enfrenta uma situação familiar difícil. O penúltimo trabalha com o pai. O antepenúltimo tem uma condição de saúde com atestado. O primeiro colocado mora a duas quadras com dois responsáveis em casa.\n\nO caso 3 é o mais limpo tecnicamente: o critério de entrega digital mede acesso à internet e chama isso de engajamento. É o exemplo mais claro de proxy indevido, e costuma ser o primeiro que os grupos identificam.\n\nO caso 8 é o mais grave e o menos percebido. Um sistema que penaliza quem questiona a autoridade transforma participação em risco. Se nenhum grupo levantar, apresentar isoladamente no fim.\n\nNA REAUDITORIA, quase nenhum critério sobrevive como esforço puro. Frequência depende de saúde. Pontualidade depende de transporte e de responsabilidades de cuidado. Entrega digital depende de renda. Disciplina depende de quem registra. Tarefas é o que mais se aproxima, e ainda assim depende de ter onde estudar. Chegar a essa conclusão é o resultado esperado, e não deve ser entregue pronto.\n\nPROTOCOLO DE MEDIAÇÃO, obrigatório\n\nEsta atividade descreve, em oito envelopes, situações que provavelmente existem na turma que a está fazendo. Alguém vai se reconhecer. Por isso:\n\n. Avisar antes de começar que os oito estudantes são fictícios e que ninguém precisa comentar semelhanças.\n. Nunca perguntar quem se identificou com qual envelope.\n. Não pedir que estudantes contem por que faltam, por que se atrasam ou o que acontece em casa.\n. Não usar dados reais de frequência, disciplina ou desempenho da escola, em nenhuma hipótese, nem anonimizados.\n. Se a escola usar de fato algum sistema parecido, não nomear na aula. Tratar no plano da norma e encaminhar a discussão real à coordenação, por outro caminho.\n. Combinar com a orientação educacional antes de aplicar, e ter um encaminhamento pronto caso algum estudante procure um adulto depois.'
    }
  ],

  mediacao: {
    perguntas: [
      'O critério de entrega digital mede engajamento ou mede internet em casa?',
      'Algum dos oito escolheu as condições que produziram a nota dele?',
      'O estudante 8 perdeu pontos por quê? O que isso ensina a ele?',
      'Sobrou algum critério que meça só esforço?',
      'Se o estudante não sabe que a nota existe, ele pode contestar?',
      'Um número parece mais justo que uma opinião. Ele é?'
    ],
    evitar: [
      'Entregar os envelopes junto com as fichas de dados. O ranking precisa ser montado com pessoas reduzidas a números para que a virada tenha peso.',
      'Perguntar quem na turma se identificou com algum caso. Nunca.',
      'Usar dados reais da escola, mesmo sem nome. Frequência e disciplina são dados sensíveis de crianças e adolescentes.',
      'Concluir que medir é sempre errado. A escola precisa acompanhar estudantes. O que a atividade audita é o que se mede, quem vê e como se contesta.',
      'Nomear um sistema que a escola realmente use.'
    ]
  },

  protecao: 'Tema sensível. Os oito estudantes e todos os dados são fictícios. Nenhum dado real de frequência, disciplina, desempenho ou situação familiar é utilizado, nem mesmo anonimizado. As situações descritas nos envelopes podem coincidir com a realidade de estudantes da turma: avisar antes que são fictícias, nunca perguntar sobre identificação pessoal e não solicitar relatos sobre atrasos, faltas ou vida familiar. Combinar previamente com a orientação educacional e ter encaminhamento definido caso um estudante procure um adulto após a aula.',

  evidencia: 'O grupo identifica pelo menos dois critérios que medem circunstância em vez de esforço, recalcula o ranking demonstrando a mudança de posições, e produz um caminho de contestação com destinatário e prazo definidos.'
},

/* ==================================================================== 39 */
{
  id: 'deepfake-cadeia-de-evidencias',
  insightCurto: 'Ninguém verifica um vídeo sozinho. Cada um tem uma peça, e a conclusão só aparece quando se juntam.',
  n: 39,
  titulo: 'Deepfake: cadeia de evidências',
  chamada: 'Cinco grupos, cinco pedaços da prova. Nenhum consegue concluir sozinho, e todos vão tentar.',
  faixa: '11-14',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use quatro grupos em vez de cinco, unindo os envelopes D e E. A rodada de conclusão isolada, antes do compartilhamento, é obrigatória: é ela que produz o aprendizado.',
  formato: 'investigacao',
  formatoDetalhe: 'Investigação colaborativa com informação distribuída',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['informacao'],
  disciplinas: ['Língua Portuguesa', 'História', 'Ciências'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'informacao',
  nivel: 4,
  sensibilidade: 'media',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EF09CO10', texto: 'Avaliar a veracidade, credibilidade e relevância da informação em seus diferentes formatos, sendo capaz de identificar o propósito pelo qual foi disseminada.' },
    secundaria: { codigo: 'EF08CO11', texto: 'Avaliar a precisão, relevância, adequação, abrangência e vieses que ocorrem em fontes de informação eletrônica.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Praticar verificação distribuída e reconhecer incerteza residual como resultado legítimo.' },

  provocacao: 'Circulou um vídeo em que a diretora de uma escola aparece dizendo que vai cancelar a formatura. Vinte mil compartilhamentos em seis horas. Cada grupo aqui recebeu uma parte das evidências. Ninguém recebeu tudo.',

  missao: 'Cada grupo escreve uma conclusão sozinho, com o que tem. Depois todos compartilham e escrevem uma conclusão conjunta.',

  virada: 'As cinco conclusões isoladas se contradizem, e todas são defensáveis com as evidências que cada grupo tinha. O grupo com a análise técnica conclui que é falso. O grupo com o depoimento conclui que é verdadeiro. Quando as peças se juntam, aparece a resposta real, que nenhum dos cinco tinha: o vídeo é autêntico, mas foi cortado, e a diretora dizia que cancelaria a formatura apenas se a obra da quadra não terminasse. O vídeo não é deepfake. É recorte.',

  insight: 'A pergunta "é falso ou verdadeiro" costuma ser a pergunta errada. Muita desinformação usa material autêntico fora de contexto, e nenhuma análise técnica detecta isso, porque não há nada de técnico para detectar.',

  transferencia: 'Antes de compartilhar um vídeo forte, o passo é procurar a gravação completa e quem estava presente. E quando não der para concluir, dizer que não deu é uma resposta melhor do que escolher um lado.',

  roteiro: [
    { t: '0 a 6 min',   o: 'Apresentar o caso e o vídeo, descrito por escrito. Formar cinco grupos e entregar um envelope de evidência para cada. Proibir a comunicação entre grupos nesta etapa.' },
    { t: '6 a 18 min',  o: 'Cada grupo analisa o próprio envelope e escreve uma conclusão em três linhas, com o grau de confiança de 0 a 100 por cento.' },
    { t: '18 a 26 min', o: 'Leitura das cinco conclusões em voz alta. Registrar as contradições no quadro. Não resolver nada ainda.' },
    { t: '26 a 40 min', o: 'Compartilhamento. Os grupos podem trocar evidências livremente e precisam produzir uma conclusão conjunta, com o novo grau de confiança.' },
    { t: '40 a 46 min', o: 'Comparar os graus de confiança individuais com o conjunto. Quase sempre havia mais certeza com menos informação.' },
    { t: '46 a 50 min', o: 'Fechamento com a folha das três categorias e a pergunta sobre o que a turma faria se ainda restasse dúvida.' }
  ],

  versoes: {
    escola: 'Cinco grupos, um envelope cada, sem comunicação na primeira etapa. É a atividade do banco que mais depende de o professor sustentar a regra de silêncio inicial. Encaixa em História, no trabalho com fontes e cruzamento de evidências.',
    familia: 'Versão de mesa com três envelopes, cada pessoa lendo um e escrevendo a conclusão antes de conversar. Funciona bem com adolescentes e costuma render conversa sobre grupos de mensagem da família.',
    jovem: 'Individual: ler os cinco envelopes em ordem aleatória, escrevendo a conclusão depois de cada um, e observar a própria opinião mudando por escrito. É um exercício desconfortável e muito eficaz.'
  },

  kit: [
    { nome: 'Descrição do vídeo', tipo: 'imprimivel', desc: 'O material que circulou, descrito por escrito.' },
    { nome: 'Cinco envelopes de evidência', tipo: 'imprimivel', desc: 'Cada grupo recebe apenas um.' },
    { nome: 'Folha de conclusão', tipo: 'imprimivel', desc: 'Com grau de confiança, usada duas vezes.' },
    { nome: 'Folha das três categorias', tipo: 'imprimivel', desc: 'Autêntico, sintético, autêntico fora de contexto.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'A resposta e o que observar nos graus de confiança.' }
  ],

  imprimiveis: [
    {
      titulo: 'Descrição do vídeo que circulou',
      tipo: 'folha',
      corpo: 'O VÍDEO\n\nDuração: 14 segundos.\nQualidade: média, parece filmado de uma tela.\nConteúdo: a diretora da Escola Municipal Vila Nova, em pé no pátio, diz:\n\n"...então a formatura do nono ano está cancelada. É isso, gente. Não tem o que fazer."\n\nO vídeo começa no meio de uma frase, com o "então".\nNão há áudio antes disso.\nO vídeo termina abruptamente.\n\nLegenda com que circulou:\n"OLHA O DESCASO. Diretora cancela formatura do 9º ano e nem se explica. COMPARTILHEM."\n\n20.400 compartilhamentos em 6 horas.'
    },
    {
      titulo: 'Cinco envelopes de evidência',
      tipo: 'cartas',
      nota: 'Um por grupo. Nenhum grupo pode ver o envelope de outro na primeira etapa.',
      itens: [
        'ENVELOPE A, análise técnica: um laboratório analisou o arquivo. A compressão é consistente, não há sinal de síntese facial, o movimento labial corresponde ao áudio, e não há artefatos típicos de geração por IA. Conclusão do laboratório: não há indício de manipulação por inteligência artificial. Observação registrada no laudo: "a análise não avalia edição por corte".',
        'ENVELOPE B, depoimento: três estudantes do 9º ano afirmam que estavam no pátio naquele dia e ouviram a diretora falar sobre a formatura. Um deles diz: "ela falou isso mesmo, eu ouvi". Nenhum dos três diz ter ouvido a fala inteira.',
        'ENVELOPE C, cronologia: o vídeo apareceu pela primeira vez às 15h47, publicado por um perfil criado há 11 dias, sem foto e sem outras publicações. O perfil publicou o vídeo e mais nada. A escola só tomou conhecimento às 19h.',
        'ENVELOPE D, contexto institucional: a ata da reunião do conselho escolar, de dois dias antes, registra discussão sobre a obra da quadra, que está atrasada. Consta em ata: "a direção informou que a formatura depende da conclusão da obra, prevista para novembro". Nenhuma decisão de cancelamento foi registrada.',
        'ENVELOPE E, gravação completa: existe um segundo vídeo, de 2 minutos e 40 segundos, gravado por outro estudante, do mesmo momento e de outro ângulo. Nele, a diretora diz: "se a obra da quadra não terminar até novembro, a gente não tem onde fazer, e aí a formatura do nono ano está cancelada. É isso, gente. Não tem o que fazer. Mas a previsão é que termine, então eu não quero ninguém desesperado."'
      ]
    },
    {
      titulo: 'Folha de conclusão',
      tipo: 'folha',
      corpo: 'Usar duas vezes: uma na etapa isolada, outra depois do compartilhamento.\n\nRODADA: ( ) só com o nosso envelope ( ) depois de compartilhar\n\nNOSSA CONCLUSÃO, em três linhas:\n____________________________________\n____________________________________\n____________________________________\n\nGRAU DE CONFIANÇA: ______%\n\nO que faltaria para termos mais certeza?\n____________________________________\n\nSe alguém nos perguntasse agora, a gente compartilharia esse vídeo?\n( ) sim ( ) não ( ) diria que não sabe'
    },
    {
      titulo: 'Folha das três categorias',
      tipo: 'folha',
      corpo: 'Todo material que circula cai em uma destas três:\n\n1. AUTÊNTICO E EM CONTEXTO. É real e a legenda descreve o que aconteceu.\n\n2. SINTÉTICO. Foi gerado ou alterado por máquina. Análise técnica ajuda aqui.\n\n3. AUTÊNTICO E FORA DE CONTEXTO. É real, ninguém alterou nada, e mesmo assim engana. Análise técnica não ajuda em nada aqui.\n\nO nosso caso é da categoria: ______\n\nQual das três é a mais comum? ____________________\nQual das três é a mais difícil de detectar? ____________________\nPor quê? ____________________________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'A RESPOSTA: categoria 3. O vídeo é autêntico, não foi gerado por IA, a diretora disse aquelas palavras, e mesmo assim a legenda engana. O que foi removido foi a condição ("se a obra não terminar") e a tranquilização final.\n\nAS CINCO CONCLUSÕES ISOLADAS\nA conclui que não é deepfake, e está tecnicamente correto e praticamente irrelevante.\nB conclui que é verdadeiro, e reforça o erro.\nC levanta suspeita sobre o perfil, mas não sobre o conteúdo.\nD é o primeiro sinal real, e o grupo D costuma ser o único a suspeitar de recorte.\nE resolve o caso, e o grupo E costuma concluir com 100 por cento de confiança e ficar impaciente com os outros.\n\nO QUE OBSERVAR NOS GRAUS DE CONFIANÇA\nEste é o dado mais interessante da atividade. Grupos com menos informação frequentemente declaram confiança mais alta. O grupo A costuma marcar 90 por cento ou mais, com um laudo que explicitamente diz não avaliar edição. Escrever no quadro os cinco graus da primeira rodada e os da segunda produz a melhor conversa do encontro.\n\nO ENVELOPE A EXISTE PARA ISSO. A observação no rodapé do laudo, sobre não avaliar corte, quase nunca é lida na primeira rodada. Quando o grupo A percebe que a informação estava no próprio envelope, o efeito é forte.\n\nSOBRE A CATEGORIA 3\nÉ a mais comum e a mais difícil, e é onde quase toda a desinformação real acontece. Ferramenta de detecção de IA não resolve, porque não há nada sintético. Vale dizer isso com todas as letras: procurar detector é a resposta errada para o problema mais frequente.\n\nSE ALGUM GRUPO CONCLUIR "não dá para saber" na primeira rodada, celebrar. É a resposta mais honesta possível com um envelope só, e é justamente a postura que a atividade quer formar.'
    }
  ],

  mediacao: {
    perguntas: [
      'Quem tinha mais certeza na primeira rodada? Essa pessoa tinha mais informação?',
      'O laudo técnico dizia que não era deepfake. Isso resolvia alguma coisa?',
      'O que exatamente foi removido do vídeo?',
      'Alguém mentiu neste caso? Quem cortou, mentiu?',
      'O que a gente faz quando não dá para concluir?',
      'Qual das três categorias um detector de IA consegue pegar?'
    ],
    evitar: [
      'Deixar os grupos conversarem na primeira etapa. A regra de silêncio é o que faz a atividade existir.',
      'Ensinar que existe ferramenta que resolve. Para a categoria 3, que é a mais comum, não existe e não vai existir, porque não há manipulação técnica para detectar.',
      'Tratar quem errou sozinho como descuidado. Cada conclusão isolada era defensável com o que o grupo tinha, e reconhecer isso é o ponto.',
      'Usar caso real envolvendo pessoa identificável da escola ou da cidade.'
    ]
  },

  protecao: 'A escola, a diretora, os estudantes e todo o material são fictícios. Não usar vídeos, áudios ou casos reais envolvendo pessoas identificáveis, nem da escola nem da cidade. Não pedir que estudantes tragam conteúdos que circularam em grupos de família. Se houver um caso real em curso na comunidade escolar, esta atividade não é o espaço para tratá-lo.',

  evidencia: 'O grupo revisa a própria conclusão após o compartilhamento, classifica o caso como autêntico fora de contexto, e reconhece por escrito que declarou confiança alta com informação parcial.'
}

);
