/* 4 a 5 anos — Educação Infantil.
   A BNCC Computação começa no 1º ano do Ensino Fundamental, então nesta faixa
   o alinhamento é feito pelos campos de experiência da Educação Infantil, com
   um código-ponte indicado para quem aplica em turma de 1º ano.
   Nesta faixa não existe versão autônoma: a criança sempre participa com um adulto. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 01 */
{
  id: 'robo-literal',
  insightCurto: 'A máquina não entende o que você quis dizer. Ela faz exatamente o que você disse.',
  n: 1,
  titulo: 'O robô literal',
  chamada: 'Uma pessoa vira robô e faz exatamente o que mandarem. Exatamente.',
  faixa: '4-5',
  duracao: 20,
  duracaoCurta: 15,
  comoEncurtar: 'Em 15 minutos: uma rodada só, com um lápis, e a virada dos três lápis. Corte a segunda rodada com as cartas de comando. A roda final de "o que faltou" é o fecho e não sai.',
  formato: 'jogo',
  formatoDetalhe: 'Brincadeira corporal',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa'],
  disciplinas: ['Língua Portuguesa', 'Educação Física', 'Matemática'],
  preparo: 'nenhum',
  grupo: 'turma',
  eixo: 'ia',
  nivel: 1,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    campo: 'Educação Infantil, campos de experiência "Escuta, fala, pensamento e imaginação" e "Corpo, gestos e movimentos"',
    ponte: { codigo: 'EF02CO02', texto: 'Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, construídos como sequências com repetições simples, analisando como a precisão da instrução impacta na execução do algoritmo.' },
    secundaria: { codigo: 'EF01CO02', texto: 'Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Compreender que sistemas computacionais executam instruções e não intenções.' },

  provocacao: 'Chegou um robô na sala. Ele promete fazer tudo o que vocês mandarem. Tudo mesmo. Só que ele tem um problema: ele nunca, nunca adivinha o que vocês quiseram dizer.',

  missao: 'Fazer o robô pegar o lápis e colocar em cima da mesa. Vale falar quantas vezes precisar, mas o robô só executa o que foi dito, do jeito que foi dito.',

  virada: 'Quando a turma acerta e comemora, o facilitador coloca mais dois lápis na sala, em lugares diferentes, e repete a mesma instrução que funcionou. O robô para no meio da sala e não faz nada. A instrução não mudou. O mundo em volta mudou.',

  insight: 'A máquina não entende o que a gente quis dizer, ela executa o que a gente disse. Quando falta uma informação, ela não adivinha: ela erra ou trava.',

  transferencia: 'Quando um assistente de voz ou um aplicativo faz a coisa errada, muitas vezes não é porque ele é bobo. É porque o pedido estava incompleto, ou porque mudou alguma coisa que ele não sabia. Com uma pessoa a gente pode dizer "você entendeu", com a máquina a gente precisa dizer qual.',

  roteiro: [
    { t: '0 a 3 min',   o: 'Combinar as três regras do robô: ele só se move quando recebe uma instrução, faz exatamente o que foi dito, e para quando não souber o que fazer. Escolher a primeira criança para ser o robô.' },
    { t: '3 a 8 min',   o: 'Primeira rodada com um lápis só. Deixar a turma errar algumas vezes. Quando o robô parar, perguntar "o que faltou na instrução?" antes de deixarem tentar de novo.' },
    { t: '8 a 11 min',  o: 'A virada. Colocar mais dois lápis na sala e pedir para repetirem a instrução vencedora. O robô trava. Perguntar por que a mesma frase parou de funcionar.' },
    { t: '11 a 16 min', o: 'Segunda rodada usando as cartas de comando do kit. Trocar o robô. Desafio novo: fazer o robô desenhar um quadrado no chão com fita ou giz.' },
    { t: '16 a 20 min', o: 'Roda final. Cada criança diz uma informação que o robô precisava e ninguém tinha falado. Registrar as respostas no cartaz.' }
  ],

  versoes: {
    escola: 'Turma inteira em roda, com uma criança de robô por vez e revezamento a cada rodada. Quem não está de robô fica no "time das instruções". Se a turma for grande, dividir em dois círculos com dois robôs simultâneos.',
    familia: 'O adulto é o robô e a criança comanda, o que inverte a hierarquia e costuma render muita risada. Funciona em dez minutos antes do jantar, com a missão "servir água no copo". Depois trocar: a criança vira robô e o adulto comanda.',
    jovem: null
  },

  kit: [
    { nome: 'Cartas de comando', tipo: 'imprimivel', desc: '12 cartas ilustradas com um comando cada, para as crianças que ainda não leem montarem instruções apontando.' },
    { nome: 'Cartaz "o que o robô não sabia"', tipo: 'imprimivel', desc: 'Cartaz coletivo para registrar as informações que faltaram.' },
    { nome: 'Regras do robô', tipo: 'roteiro', desc: 'As três regras em letra grande, para deixar visível durante a brincadeira.' }
  ],

  imprimiveis: [
    {
      titulo: 'Cartas de comando',
      tipo: 'cartas',
      nota: 'Imprimir, recortar e distribuir. Cada carta tem um desenho simples e a palavra.',
      itens: [
        'ANDAR PARA A FRENTE (1 passo)', 'ANDAR PARA TRÁS (1 passo)',
        'VIRAR PARA A DIREITA', 'VIRAR PARA A ESQUERDA',
        'ABAIXAR', 'LEVANTAR',
        'ABRIR A MÃO', 'FECHAR A MÃO',
        'ESTICAR O BRAÇO', 'SOLTAR',
        'PARAR', 'REPETIR A ÚLTIMA CARTA'
      ]
    },
    {
      titulo: 'As três regras do robô',
      tipo: 'cartaz',
      corpo: '1. Eu só me movo quando alguém me dá uma instrução.\n2. Eu faço exatamente o que foi dito.\n3. Quando eu não sei o que fazer, eu paro.'
    },
    {
      titulo: 'Cartaz coletivo: o que o robô não sabia',
      tipo: 'cartaz',
      corpo: 'Título grande no topo: O QUE O ROBÔ NÃO SABIA\n\nAbaixo, espaço em branco dividido em oito retângulos para colar ou desenhar as respostas das crianças.\n\nExemplos que costumam aparecer: qual lápis, onde ele estava, quantos passos, para que lado, o que é "em cima", quando parar.'
    }
  ],

  mediacao: {
    perguntas: [
      'O robô errou ou a instrução estava incompleta?',
      'O que uma pessoa teria entendido sozinha e o robô não entendeu?',
      'Por que a mesma frase funcionou antes e parou de funcionar depois?',
      'Se o robô não pode perguntar, o que a gente precisa dizer desde o começo?'
    ],
    evitar: [
      'Dizer que o robô é burro. Isso troca a ideia de "instrução incompleta" pela de "máquina ruim", e a criança sai sem a ferramenta de reformular o pedido.',
      'Corrigir a instrução da criança antes de o robô executar. O travamento do robô é a aula. Se o adulto conserta antes, ninguém vê o erro acontecer.',
      'Introduzir a palavra "programação" no começo. Ela chega naturalmente no fim, e antes disso só desloca a atenção.'
    ]
  },

  protecao: 'Nenhum dado real é usado. Não citar marcas de assistentes de voz nem pedir que a criança conte o que tem em casa. Não fotografar as crianças durante a brincadeira para divulgação sem autorização específica dos responsáveis.',

  evidencia: 'A criança reformula espontaneamente a própria instrução quando o robô trava, sem que o adulto peça, e consegue nomear pelo menos uma informação que faltava.'
},

/* ==================================================================== 02 */
{
  id: 'foto-viajante',
  insightCurto: 'Depois que uma foto é compartilhada, ela vira várias. Pedir de volta tira uma cópia, não todas.',
  n: 2,
  titulo: 'A foto viajante',
  chamada: 'Uma foto sai de mão em mão e ganha cópias. Em qual momento alguém deveria ter perguntado?',
  faixa: '4-5',
  duracao: 25,
  formato: 'historia',
  formatoDetalhe: 'História em sequência e desenho para pintar',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['foto', 'consentimento'],
  disciplinas: ['Língua Portuguesa', 'Artes'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'consentimento',
  nivel: 1,
  sensibilidade: 'media',
  selos: ['sem-tela', 'pronta-amanha'],

  bncc: {
    campo: 'Educação Infantil, campos de experiência "O eu, o outro e o nós" e "Traços, sons, cores e formas"',
    ponte: { codigo: 'EF03CO09', texto: 'Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital.' },
    secundaria: { codigo: 'EF01CO07', texto: 'Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Reconhecer que dados e imagens pessoais circulam e persistem além do controle de quem os originou.' },

  provocacao: 'A Nina fez uma careta muito engraçada e a Bel tirou uma foto. A Bel achou tão engraçada que mostrou para mais uma pessoa. No dia seguinte a foto estava na casa de gente que a Nina nunca viu na vida.',

  missao: 'Colocar as seis cenas na ordem certa e marcar com um adesivo a cena em que alguém deveria ter perguntado antes.',

  virada: 'Depois que os grupos escolhem a cena culpada, quase sempre a última, o facilitador entrega uma carta extra por cena: cada vez que a foto passou de alguém para alguém, ela ganhou uma cópia. As crianças espalham as cópias na mesa e contam quantas ficaram. Então a Nina pede a foto de volta. Recolhe-se uma cópia só. As outras continuam na mesa, à vista de todos.',

  insight: 'Depois que uma imagem é compartilhada, ela não está mais em um lugar só. Pedir de volta tira uma cópia, não todas.',

  transferencia: 'Antes de mandar a foto de alguém, perguntar para essa pessoa. E quando alguém pedir para você apagar uma foto dela, apagar, mesmo que você ache bonitinha.',

  roteiro: [
    { t: '0 a 5 min',   o: 'Contar a história da Nina até a careta, sem revelar o final. Mostrar as seis cenas embaralhadas.' },
    { t: '5 a 12 min',  o: 'Em grupos de três ou quatro, as crianças ordenam as cenas e colam o adesivo na cena em que alguém deveria ter perguntado. Cada grupo explica a escolha.' },
    { t: '12 a 17 min', o: 'A virada. Entregar as cópias, uma por passagem. Contar juntos. Fazer a Nina pedir a foto de volta e recolher só uma.' },
    { t: '17 a 22 min', o: 'Segunda passagem pela história: agora as crianças reescrevem uma cena, escolhendo o que a personagem poderia ter feito diferente. Vale desenhar.' },
    { t: '22 a 25 min', o: 'Fechamento com a folha para pintar e a frase coletiva: "antes de mandar foto de alguém, eu pergunto".' }
  ],

  versoes: {
    escola: 'Grupos de três ou quatro, uma sequência de cenas por grupo. Se a turma for pequena, fazer em roda única com as cenas grandes no chão. Ao reescrever a cena, aceitar soluções variadas, inclusive "a Bel não tira a foto".',
    familia: 'Ler a história junto na hora de dormir e parar antes do final para a criança adivinhar o que aconteceu. Fazer a contagem das cópias com moedas ou tampinhas em cima da mesa. Aproveitar para combinar a regra da casa sobre fotos de família em grupos de mensagem.',
    jovem: null
  },

  kit: [
    { nome: 'Seis cenas da história', tipo: 'imprimivel', desc: 'Cartelas ilustradas para embaralhar e ordenar.' },
    { nome: 'Cartas de cópia', tipo: 'imprimivel', desc: 'Doze cartas idênticas com a mesma foto, para a contagem da virada.' },
    { nome: 'Desenho para pintar', tipo: 'imprimivel', desc: 'A cena final, com a frase de fechamento para a criança completar.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'A ordem correta e o motivo de não haver uma resposta única para "quem errou".' }
  ],

  imprimiveis: [
    {
      titulo: 'Seis cenas da história (embaralhar antes de entregar)',
      tipo: 'cartas',
      nota: 'Cada cena em uma cartela, com ilustração simples e a frase abaixo.',
      itens: [
        'CENA A: A Nina faz uma careta muito engraçada no parque.',
        'CENA B: A Bel tira uma foto da careta. A Nina está rindo e não vê.',
        'CENA C: A Bel mostra a foto para o Téo. O Téo pede uma cópia.',
        'CENA D: O Téo manda a foto para o grupo do time de futebol.',
        'CENA E: Alguém do time manda a foto para a prima, que mora em outra cidade.',
        'CENA F: A Nina descobre e pede para tirar a foto do ar.'
      ]
    },
    {
      titulo: 'Cartas de cópia',
      tipo: 'cartas',
      nota: 'Imprimir doze cartas iguais, todas com o mesmo desenho da careta. Guardar escondidas até a virada.',
      corpo: 'Frente: o desenho da careta.\nVerso: uma frase só, em letra grande: ESTA É UMA CÓPIA.'
    },
    {
      titulo: 'Folha para pintar',
      tipo: 'folha',
      corpo: 'Desenho da Nina e da Bel conversando, com um balão de fala vazio.\n\nAbaixo, em letra pontilhada para a criança cobrir:\n\nANTES DE MANDAR FOTO DE ALGUÉM, EU ___________.\n\nNo rodapé, três carinhas para a criança circular: pedi, não pedi, vou pedir da próxima vez.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'Ordem das cenas: A, B, C, D, E, F.\n\nSobre "quem errou": não existe uma resposta única e o objetivo não é encontrar um culpado. A pergunta boa é outra, e é ela que deve ficar no fim: em quantos momentos alguém poderia ter perguntado e não perguntou? A resposta é quatro, nas cenas B, C, D e E.\n\nSe alguma criança disser que a culpada é a Nina por ter feito a careta, vale acolher e devolver: a Nina fez a careta para as amigas, no parque. Ela não escolheu fazer a careta para a prima de outra cidade. O que mudou não foi a careta, foi para onde ela foi parar.'
    }
  ],

  mediacao: {
    perguntas: [
      'Em quantos momentos alguém poderia ter perguntado para a Nina?',
      'A Nina fez a careta para quem? Ela escolheu fazer para todo mundo?',
      'Quando a Nina pediu de volta, a foto sumiu inteira?',
      'Como você se sentiria se fosse a Nina? E se fosse a Bel, que só achou engraçado?'
    ],
    evitar: [
      'Transformar a atividade em caça ao culpado. O objetivo é ver os quatro momentos de escolha, não condenar uma personagem.',
      'Dizer "por isso nunca poste nada". A regra útil não é o medo, é perguntar antes e respeitar o pedido de retirada.',
      'Pedir que as crianças contem casos reais de fotos delas ou da família. Se alguém trouxer espontaneamente, acolher em uma frase e trazer de volta para a história.'
    ]
  },

  protecao: 'Toda a história é fictícia. Não usar fotos reais das crianças, da turma ou das famílias em nenhum momento da atividade. Não pedir relatos pessoais. Se uma criança relatar uma situação real de constrangimento com imagem, encerrar a exposição na hora, acolher em particular e acionar o protocolo da escola.',

  evidencia: 'A criança aponta mais de um momento em que caberia perguntar, e não apenas o último, e explica com as próprias palavras que pedir de volta não faz todas as cópias sumirem.'
},

/* ==================================================================== 03 */
{
  id: 'quem-ensinou-o-robo',
  insightCurto: 'A inteligência artificial aprende com exemplos. Se os exemplos forem limitados, ela também será.',
  n: 3,
  titulo: 'Quem ensinou o robô?',
  chamada: 'O robô aprendeu o que é cachorro vendo só um tipo de cachorro. Agora ele erra.',
  faixa: '4-5',
  duracao: 25,
  formato: 'jogo',
  formatoDetalhe: 'Classificação de figuras',
  contexto: ['escola', 'casa'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa', 'dados'],
  disciplinas: ['Ciências', 'Matemática', 'Artes'],
  preparo: 'baixo',
  grupo: 'turma',
  eixo: 'ia',
  nivel: 2,
  sensibilidade: 'baixa',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    campo: 'Educação Infantil, campo de experiência "Espaços, tempos, quantidades, relações e transformações"',
    ponte: { codigo: 'EF01CO01', texto: 'Organizar objetos físicos ou digitais considerando diferentes características para esta organização, explicitando semelhanças (padrões) e diferenças.' },
    secundaria: { codigo: 'EF02CO01', texto: 'Criar e comparar modelos (representações) de objetos, identificando padrões e atributos essenciais.' }
  },
  unesco: { dimensao: 'tecnicas', competencia: 'Compreender que sistemas de IA aprendem a partir de exemplos e que a escolha dos exemplos determina o que o sistema consegue reconhecer.' },

  provocacao: 'Este é o Tuim, um robô que aprendeu sozinho o que é um cachorro. Ele diz que agora acerta sempre. Vamos testar.',

  missao: 'Para cada figura que aparece, a turma aposta antes: o Tuim vai dizer que é cachorro ou que não é? Depois o facilitador revela a resposta do Tuim.',

  virada: 'Depois de várias respostas estranhas, o facilitador vira o "álbum de estudos do Tuim" e mostra as seis figuras com que ele aprendeu. Todas são cachorros grandes, marrons, de pé, ao ar livre. As crianças olham para os erros anteriores e passam a prever certo. O robô não mudou. O que mudou foi a turma saber o que ele viu.',

  insight: 'A máquina só conhece o que ela viu. Se todos os exemplos eram parecidos, ela erra tudo o que for diferente, mesmo que seja óbvio para a gente.',

  transferencia: 'Quando um aplicativo erra em alguém ou não reconhece uma coisa, dá para fazer duas perguntas de detetive: quais exemplos essa máquina viu, e quem ficou de fora.',

  roteiro: [
    { t: '0 a 4 min',   o: 'Apresentar o Tuim e combinar o jogo da aposta. Todo mundo aponta o polegar para cima ou para baixo antes da revelação.' },
    { t: '4 a 12 min',  o: 'Rodada de teste com as dez figuras. Ir marcando no cartaz os acertos e erros do Tuim. Não explicar os erros ainda.' },
    { t: '12 a 16 min', o: 'A virada. Abrir o álbum de estudos com as seis figuras de treino. Deixar as crianças descobrirem o padrão sozinhas antes de nomear.' },
    { t: '16 a 22 min', o: 'Segunda rodada: as crianças escolhem quatro figuras novas para colocar no álbum e ensinar melhor o Tuim. Testar de novo as figuras que ele tinha errado.' },
    { t: '22 a 25 min', o: 'Fechamento: quem ficou de fora do álbum antigo? Registrar no cartaz.' }
  ],

  versoes: {
    escola: 'Turma inteira com as figuras grandes no quadro ou no chão. A aposta com polegar mantém todo mundo participando. Na segunda rodada, dividir em duplas para escolherem as figuras de treino e comparar as escolhas.',
    familia: 'Fazer com as figuras espalhadas na mesa. O adulto faz a voz do Tuim. Um jeito ainda mais simples: usar objetos de casa em vez de figuras, escolhendo só colheres grandes para "ensinar" o que é colher e depois mostrando uma colher de café.',
    jovem: null
  },

  kit: [
    { nome: 'Álbum de estudos do Tuim', tipo: 'imprimivel', desc: 'As seis figuras de treino, para revelar só na virada.' },
    { nome: 'Dez figuras de teste', tipo: 'imprimivel', desc: 'Figuras variadas, com a resposta do Tuim no verso.' },
    { nome: 'Cartaz de placar', tipo: 'imprimivel', desc: 'Para marcar acertos e erros do robô ao longo do jogo.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'A resposta do Tuim para cada figura e o motivo.' }
  ],

  imprimiveis: [
    {
      titulo: 'Álbum de estudos do Tuim (revelar só na virada)',
      tipo: 'cartas',
      nota: 'Seis figuras de treino. Todas seguem o mesmo padrão de propósito.',
      itens: [
        'Cachorro grande e marrom, de pé, em um gramado.',
        'Cachorro grande e marrom, de pé, em uma praça.',
        'Cachorro grande e marrom, de pé, na areia.',
        'Cachorro grande e marrom, de pé, em um quintal.',
        'Cachorro grande e marrom, de pé, em uma calçada.',
        'Cachorro grande e marrom, de pé, embaixo de uma árvore.'
      ]
    },
    {
      titulo: 'Dez figuras de teste',
      tipo: 'cartas',
      nota: 'Frente: a figura. Verso: a resposta do Tuim, para o facilitador ler.',
      itens: [
        '1. Cachorro grande e marrom, de pé, na rua. Tuim diz: É CACHORRO. (acertou)',
        '2. Cachorro pequenininho, branco, no colo de alguém. Tuim diz: NÃO É CACHORRO. (errou)',
        '3. Cachorro grande e marrom, deitado dormindo. Tuim diz: NÃO É CACHORRO. (errou)',
        '4. Cachorro preto, grande, de pé, na grama. Tuim diz: NÃO É CACHORRO. (errou)',
        '5. Cavalo marrom, grande, de pé, no gramado. Tuim diz: É CACHORRO. (errou)',
        '6. Gato pequeno, cinza, sentado. Tuim diz: NÃO É CACHORRO. (acertou por acaso)',
        '7. Cachorro grande e marrom, de pé, dentro de casa. Tuim diz: É CACHORRO. (acertou)',
        '8. Cachorro salsicha, comprido e baixinho. Tuim diz: NÃO É CACHORRO. (errou)',
        '9. Sofá marrom, grande, com quatro pés, na sala. Tuim diz: É CACHORRO. (errou)',
        '10. Filhote de cachorro, marrom, sentado. Tuim diz: NÃO É CACHORRO. (errou)'
      ]
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O Tuim não aprendeu "cachorro". Ele aprendeu "coisa grande, marrom, de quatro apoios, de pé". Por isso:\n\n. erra o filhote, o salsicha e o cachorrinho branco, porque são cachorros que não cabem no padrão dele;\n. erra o cachorro deitado, porque a posição mudou;\n. erra o cachorro preto, porque a cor mudou;\n. chama o cavalo e o sofá de cachorro, porque eles cabem no padrão sem serem cachorro.\n\nOs dois tipos de erro têm nomes que valem para a vida toda, mesmo sem usar as palavras com as crianças: deixar de fora quem deveria estar dentro, e colocar dentro quem não deveria estar.\n\nNa segunda rodada, um álbum melhor precisa de cachorro pequeno, cachorro deitado, cachorro de outra cor e um filhote. Se as crianças escolherem só mais cachorros marrons, deixar acontecer e testar: o Tuim continua errando. Esse erro é mais valioso que o acerto.'
    }
  ],

  mediacao: {
    perguntas: [
      'O Tuim mentiu ou ele só nunca tinha visto um cachorro assim?',
      'Quais cachorros ficaram de fora do álbum dele?',
      'Por que ele achou que o cavalo era cachorro?',
      'Se você fosse escolher as figuras para ensinar, quais você colocaria?',
      'Quem decide o que entra no álbum?'
    ],
    evitar: [
      'Dizer que o robô é burro ou que está quebrado. Ele está funcionando exatamente como foi ensinado, e essa é a ideia inteira.',
      'Revelar o álbum de estudos antes da rodada de teste. Sem os erros na memória, a virada não vira nada.',
      'Corrigir a escolha das figuras de treino das crianças na segunda rodada. Deixar testar e falhar ensina mais do que a escolha certa entregue pronta.'
    ]
  },

  protecao: 'Usar apenas figuras de animais e objetos. Não usar fotos de pessoas, de colegas ou de familiares em nenhuma etapa, e não fazer a versão com rostos nesta faixa etária.',

  evidencia: 'Diante de um erro do robô, a criança pergunta ou responde o que faltou no álbum, em vez de dizer que o robô é bobo, e escolhe pelo menos uma figura de treino diferente do padrão para consertar o ensino.'
}

);
