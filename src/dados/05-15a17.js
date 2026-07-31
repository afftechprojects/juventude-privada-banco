/* 15 a 17 anos — Ensino Médio.
   O estudante sai da posição de consumidor e entra na de avaliador, designer e cidadão. */

window.JP.ATIVIDADES.push(

/* ==================================================================== 13 */
{
  id: 'red-team-de-edtech',
  insightCurto: 'Quando um produto é gratuito, vale perguntar quem paga e com o quê. O risco costuma estar no contrato.',
  n: 13,
  titulo: 'Red team de EdTech',
  chamada: 'A escola vai adotar um aplicativo. Antes de assinar, alguém precisa tentar quebrá-lo.',
  faixa: '15-17',
  duracao: 999,
  duracaoTexto: 'Projeto de duas a três aulas',
  formato: 'auditoria',
  formatoDetalhe: 'Auditoria adversarial de produto',
  contexto: ['escola'],
  tela: 'hibrido',
  situacao: ['dados', 'golpe'],
  disciplinas: ['Projeto de Vida', 'Língua Portuguesa', 'Matemática', 'Geografia'],
  preparo: 'medio',
  grupo: 'pequeno',
  eixo: 'privacidade',
  nivel: 5,
  sensibilidade: 'media',
  selos: [],

  bncc: {
    principal: { codigo: 'EM13CO06', texto: 'Avaliar software levando em consideração diferentes características e métricas associadas.' },
    secundaria: { codigo: 'EM13CO08', texto: 'Entender como mudanças na tecnologia afetam a segurança, incluindo novas maneiras de preservar sua privacidade e dados pessoais on-line, reportando suspeitas e buscando ajuda em situações de risco.' }
  },
  unesco: { dimensao: 'design', competencia: 'Avaliar criticamente sistemas antes da adoção, considerando coleta de dados, dependência de fornecedor e efeitos sobre populações específicas.' },

  provocacao: 'A direção recebeu uma proposta do EstudaMais, um aplicativo gratuito que promete acompanhar o desempenho de cada estudante em tempo real. A assinatura do contrato está marcada para daqui a duas semanas. Vocês são o time contratado para achar os problemas antes.',

  missao: 'Produzir um parecer técnico de duas páginas que a direção consiga usar em uma reunião, com achados, gravidade, evidência e recomendação de adoção, adoção com condições, ou recusa.',

  virada: 'Na segunda aula, quando os grupos já têm seus achados sobre coleta de dados, o facilitador entrega o anexo comercial que não estava no material inicial: o EstudaMais é gratuito porque a escola concede acesso aos dados agregados de desempenho para "fins de pesquisa e melhoria de produto", o contrato tem fidelidade de cinco anos, e a exportação dos dados históricos ao sair custa um valor por estudante. Os grupos precisam refazer a análise de risco: o problema mais grave nunca esteve na tela do aplicativo.',

  insight: 'Avaliar uma tecnologia educacional não é testar se ela funciona. É perguntar quem paga, quem lucra, o que acontece com os dados depois, e quanto custa sair. O risco maior costuma estar no contrato, não na interface.',

  transferencia: 'A mesma grade serve para qualquer serviço que a escola, a família ou o próprio estudante for adotar. As seis perguntas cabem em uma página e valem para o resto da vida.',

  roteiro: [
    { t: 'Aula 1, 0 a 15 min',  o: 'Apresentar o dossiê do EstudaMais: descrição do produto, telas, política de privacidade e termos de uso. Formar seis grupos e sortear uma frente de auditoria para cada.' },
    { t: 'Aula 1, 15 a 45 min', o: 'Cada grupo audita a sua frente e registra os achados na ficha, com gravidade e evidência. Exigir que toda afirmação aponte para o trecho específico do dossiê.' },
    { t: 'Aula 2, 0 a 10 min',  o: 'Rodada rápida de achados. Montar o mapa de gravidade no quadro.' },
    { t: 'Aula 2, 10 a 20 min', o: 'A virada. Entregar o anexo comercial. Silêncio de leitura.' },
    { t: 'Aula 2, 20 a 45 min', o: 'Reanálise. Cada grupo revisa a gravidade dos próprios achados à luz do anexo e escreve a recomendação.' },
    { t: 'Aula 3, 0 a 25 min',  o: 'Redação do parecer conjunto. Um grupo assume a consolidação e os demais revisam.' },
    { t: 'Aula 3, 25 a 45 min', o: 'Simulação da reunião: dois estudantes defendem o parecer diante de uma banca que faz o papel da direção e do fornecedor, com contra-argumentos preparados.' }
  ],

  versoes: {
    escola: 'Seis grupos, uma frente cada. Funciona muito bem como projeto integrador entre Projeto de Vida e Língua Portuguesa, pela produção do gênero parecer técnico. Se a escola estiver de fato avaliando alguma ferramenta, substituir o dossiê fictício exige cuidado e está descrito na seção de proteção.',
    familia: 'Versão reduzida: aplicar as seis perguntas a um aplicativo que a família já usa, com a política de privacidade real aberta. Uma hora de mesa. O achado costuma ser desconfortável e produtivo.',
    jovem: 'Individual: escolher um aplicativo que você usa todo dia, aplicar a grade das seis frentes e escrever o parecer. Publicar no grêmio ou no jornal da escola se o resultado valer a leitura.'
  },

  kit: [
    { nome: 'Dossiê do EstudaMais', tipo: 'imprimivel', desc: 'Descrição, telas, política de privacidade e termos de uso fictícios.' },
    { nome: 'Seis cartas de frente de auditoria', tipo: 'imprimivel', desc: 'Uma por grupo.' },
    { nome: 'Ficha de achado', tipo: 'editavel', desc: 'Achado, evidência, gravidade, recomendação.' },
    { nome: 'Anexo comercial', tipo: 'imprimivel', desc: 'A virada. Entregar só na segunda aula.' },
    { nome: 'Modelo de parecer técnico', tipo: 'editavel', desc: 'Estrutura de duas páginas.' },
    { nome: 'Contra-argumentos do fornecedor', tipo: 'imprimivel', desc: 'Para a banca da simulação.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Os achados plantados e onde estão.' }
  ],

  imprimiveis: [
    {
      titulo: 'Dossiê do EstudaMais (resumo do que entra no material)',
      tipo: 'folha',
      corpo: 'O QUE O PRODUTO PROMETE\nAcompanhamento de desempenho em tempo real, alertas para responsáveis, ranking de turma, sugestão automática de reforço e "detecção precoce de risco de evasão".\n\nO QUE O APLICATIVO COLETA, segundo a política de privacidade\nNome completo, data de nascimento, CPF do responsável, foto de perfil, notas por disciplina, frequência, horário de acesso, tempo gasto por questão, geolocalização aproximada "para segurança", contatos de emergência, e "dados de comportamento em plataforma".\n\nTRECHOS DOS TERMOS DE USO\n. "Podemos compartilhar dados agregados e anonimizados com parceiros selecionados."\n. "O ranking de turma é exibido por padrão a todos os estudantes da turma."\n. "Os dados são armazenados em servidores de nossos provedores, que podem estar localizados fora do território nacional."\n. "Reservamo-nos o direito de alterar esta política a qualquer momento, mediante aviso na plataforma."\n. "A conta de estudante é criada pela escola, não sendo necessário consentimento individual."\n. "O acesso do responsável é vinculado ao CPF cadastrado, sem verificação adicional."\n\nTELAS INCLUÍDAS NO DOSSIÊ\nTela de login, painel do estudante com o ranking visível, painel do responsável, tela de alerta de risco de evasão, e a tela de configurações, onde a opção de ocultar o ranking existe mas está em um submenu de terceiro nível.'
    },
    {
      titulo: 'Seis cartas de frente de auditoria',
      tipo: 'cartas',
      itens: [
        'FRENTE 1, COLETA: o aplicativo pede mais dados do que precisa para entregar o que promete? Para cada dado coletado, existe uma finalidade declarada e proporcional?',
        'FRENTE 2, EXPOSIÇÃO: quais dados de um estudante ficam visíveis para colegas, professores, responsáveis e para o fornecedor? Alguma exposição é padrão e deveria ser opcional?',
        'FRENTE 3, ACESSO E IDENTIDADE: quem consegue entrar na conta de quem? O que acontece em separações, guarda compartilhada ou situações de violência doméstica?',
        'FRENTE 4, DEPENDÊNCIA: o que acontece se a escola quiser sair? Os dados saem junto? Em qual formato? Quanto custa? Quanto tempo leva?',
        'FRENTE 5, ALGORITMO: como o aplicativo decide que um estudante está em risco de evasão? Quem vê esse rótulo? O estudante pode contestar? O que acontece com quem foi rotulado por engano?',
        'FRENTE 6, ALTERNATIVA: existe outra forma de resolver o problema que a escola tem, sem este produto? O que a escola realmente precisa, e o que ela está comprando junto sem precisar?'
      ]
    },
    {
      titulo: 'Ficha de achado',
      tipo: 'editavel',
      corpo: 'Grupo: ______  Frente: ______  Achado nº ______\n\nO QUE ENCONTRAMOS: ____________________________________\n\nEVIDÊNCIA, com o trecho exato do dossiê: ____________________________________\n\nQUEM É AFETADO: ____________________________________\n\nGRAVIDADE: ( ) baixa ( ) média ( ) alta ( ) crítica\nJustificativa da gravidade: ____________________________________\n\nO QUE TERIA QUE MUDAR PARA DEIXAR DE SER UM PROBLEMA:\n____________________________________\n\nGravidade após ler o anexo comercial: ______ (preencher na aula 2)'
    },
    {
      titulo: 'Anexo comercial (a virada, entregar só na aula 2)',
      tipo: 'folha',
      corpo: 'ANEXO IV, CONDIÇÕES COMERCIAIS\n\n4.1. A licença é concedida sem custo de assinatura.\n\n4.2. Como contrapartida, a CONTRATANTE concede à CONTRATADA licença perpétua, irrevogável e mundial para uso dos dados agregados de desempenho para fins de pesquisa, desenvolvimento e melhoria de produtos, inclusive produtos de terceiros parceiros.\n\n4.3. O prazo de vigência é de 60 meses, com renovação automática. A rescisão antecipada implica multa equivalente a 30% do valor de tabela do período remanescente.\n\n4.4. A exportação de dados históricos, em caso de encerramento, será fornecida em formato PDF, no prazo de até 180 dias, mediante taxa de R$ 4,20 por estudante por ano letivo exportado.\n\n4.5. A CONTRATADA poderá exibir na plataforma comunicações de parceiros comerciais, respeitada a legislação aplicável.\n\nPergunta para os grupos: com 800 estudantes e cinco anos de histórico, quanto custa sair? E em qual formato os dados chegam?'
    },
    {
      titulo: 'Modelo de parecer técnico',
      tipo: 'editavel',
      corpo: 'PARECER TÉCNICO SOBRE A ADOÇÃO DO ESTUDAMAIS\n\n1. RESUMO EXECUTIVO, no máximo cinco linhas, com a recomendação já na primeira frase.\n\n2. ESCOPO: o que foi analisado e o que não foi.\n\n3. ACHADOS POR GRAVIDADE, do mais grave para o menos grave. Cada achado com uma linha de evidência.\n\n4. ANÁLISE DO MODELO DE NEGÓCIO: o que a escola paga quando não paga.\n\n5. RECOMENDAÇÃO: ( ) adotar ( ) adotar com as condições abaixo ( ) não adotar\n\n6. CONDIÇÕES INEGOCIÁVEIS, se houver: ____________________\n\n7. O QUE MONITORAR, se for adotado: ____________________\n\n8. LIMITAÇÕES DESTE PARECER: o que a equipe não conseguiu verificar.'
    },
    {
      titulo: 'Contra-argumentos do fornecedor (para a banca)',
      tipo: 'folha',
      corpo: 'A banca deve usar estes argumentos, que são os reais e são bons:\n\n. "Todos os concorrentes coletam os mesmos dados. Vocês vão recusar todos?"\n. "Os dados são anonimizados. Não há risco."\n. "O ranking motiva os estudantes. Temos dados que mostram melhora de desempenho."\n. "A detecção de evasão já salvou estudantes em outras escolas. Vocês vão abrir mão disso por medo de um rótulo?"\n. "A escola não tem orçamento para uma alternativa paga. A opção real não é este produto ou outro melhor, é este produto ou nada."\n. "Vocês são estudantes. A direção tem responsabilidade jurídica que vocês não têm."\n\nO último argumento é o mais difícil e deve ser usado. Uma equipe boa responde reconhecendo a assimetria e mesmo assim sustentando os achados com evidência.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'ACHADOS PLANTADOS NO DOSSIÊ\n\nColeta desproporcional: CPF do responsável, geolocalização e "dados de comportamento em plataforma" não têm finalidade proporcional ao que o produto promete. Geolocalização "para segurança" é a mais fácil de contestar, porque a finalidade declarada não se sustenta.\n\nExposição por padrão: o ranking visível a toda a turma é o achado que mais mobiliza estudantes, e com razão. É exposição de desempenho individual sem consentimento e com opção de saída escondida em terceiro nível.\n\nAcesso frágil: vínculo do responsável apenas por CPF, sem verificação adicional, é uma falha séria. O cenário de guarda compartilhada ou violência doméstica costuma não ocorrer aos grupos de imediato, e é o momento mais importante de mediar: dados de localização de uma criança acessíveis por qualquer pessoa com o CPF cadastrado é um risco concreto de segurança física, não apenas de privacidade.\n\nConsentimento contornado: "a conta é criada pela escola, não sendo necessário consentimento individual" merece discussão cuidadosa. A escola pode ter base legal para tratar dados, o que não significa que qualquer tratamento esteja autorizado, nem que a finalidade comercial do anexo IV caiba nessa base.\n\nAlgoritmo opaco: o dossiê não explica em nenhum lugar como o risco de evasão é calculado. A ausência é o achado. Sem critério declarado não há como contestar um rótulo, e o rótulo circula entre professores e responsáveis.\n\nAnonimização: o argumento de que dados agregados e anonimizados eliminam o risco não se sustenta quando o conjunto é pequeno e rico em atributos. Em uma turma de 30, desempenho por disciplina somado a frequência e horário de acesso reidentifica com facilidade.\n\nSOBRE A VIRADA\n\nO cálculo do custo de saída: 800 estudantes x 5 anos x R$ 4,20 = R$ 16.800, em PDF, em até 180 dias. PDF é o detalhe cruel e vale insistir nele: os dados voltam em um formato que não permite migração real. O produto é gratuito e a saída custa dezesseis mil reais e é inútil.\n\nA maior parte dos grupos coloca a coleta de dados como achado crítico na aula 1 e reordena tudo depois do anexo. Essa reordenação é o aprendizado central: o risco estrutural não estava em nenhuma tela.\n\nSOBRE A RECOMENDAÇÃO\n\nNão há resposta certa entre adotar com condições e recusar. O que separa um parecer bom de um ruim é a seção 8, sobre limitações. Equipes fortes reconhecem o que não conseguiram verificar. Equipes fracas escrevem certeza sobre tudo. Avaliar essa seção com peso.'
    }
  ],

  mediacao: {
    perguntas: [
      'O produto é gratuito. Quem paga, então, e com o quê?',
      'Anonimizado quer dizer irreversível? Em uma turma de trinta, quantos atributos bastam para identificar alguém?',
      'Quem pode contestar o rótulo de risco de evasão? Existe esse caminho no produto?',
      'Se a escola quiser sair no terceiro ano, o que ela consegue levar embora?',
      'O fornecedor disse que todos os concorrentes fazem igual. Isso é um argumento?',
      'Vocês recusariam sabendo que a alternativa real pode ser não ter nada?'
    ],
    evitar: [
      'Aceitar achados sem evidência. A exigência de citar o trecho exato é o que separa auditoria de opinião, e é a competência que fica.',
      'Entregar o anexo comercial na primeira aula. Sem a reordenação de gravidade, o aprendizado central não acontece.',
      'Deixar a banca ser fraca. Se o fornecedor não argumentar bem, os estudantes saem achando que a crítica é fácil, e ela não é.',
      'Transformar em campanha contra tecnologia na escola. O parecer precisa poder concluir pela adoção com condições, senão o exercício é encenação.'
    ]
  },

  protecao: 'O EstudaMais é fictício e não corresponde a nenhum produto real do mercado. Se a escola quiser auditar uma ferramenta que realmente usa, isso é possível e valioso, mas exige três cuidados: usar apenas documentação pública, jamais tentar acessar contas, dados ou sistemas reais, e combinar previamente com a direção que o resultado é um parecer interno. Não é permitido testar segurança de sistemas reais em nenhuma hipótese. Nenhum dado real de estudante entra na atividade.',

  evidencia: 'O parecer sustenta cada achado com trecho citado do dossiê, reordena a gravidade após o anexo comercial e declara explicitamente as limitações da própria análise.'
},

/* ==================================================================== 14 */
{
  id: 'prove-sua-idade',
  insightCurto: 'Toda solução de segurança tem um custo. A pergunta é quem paga por ele, e se essa pessoa foi ouvida.',
  n: 14,
  titulo: 'Prove sua idade sem entregar sua vida',
  chamada: 'Quatro formas de verificar idade. Todas protegem alguém e todas excluem alguém.',
  faixa: '15-17',
  duracao: 50,
  duracaoCurta: 30,
  comoEncurtar: 'Em 30 minutos: use três critérios da grade (minimização, inclusão e risco residual) e mantenha os quatro métodos, que são o material. A carta de população é obrigatória, e é ela que produz o aprendizado. O que sai é a apresentação comparativa entre grupos: em vez dela, uma rodada rápida em que cada grupo diz apenas o método escolhido e quem ele exclui.',
  formato: 'debate',
  formatoDetalhe: 'Comparação de soluções e design',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['dados', 'consentimento'],
  disciplinas: ['Projeto de Vida', 'Geografia', 'História', 'Matemática'],
  preparo: 'baixo',
  grupo: 'pequeno',
  eixo: 'consumo',
  nivel: 5,
  sensibilidade: 'media',
  selos: ['pronta-amanha', 'sem-tela'],

  bncc: {
    principal: { codigo: 'EM13CO08', texto: 'Entender como mudanças na tecnologia afetam a segurança, incluindo novas maneiras de preservar sua privacidade e dados pessoais on-line, reportando suspeitas e buscando ajuda em situações de risco.' },
    secundaria: { codigo: 'EM13CO26', texto: 'Aplicar os conceitos e pressupostos do direito digital em sua conduta e experiências com o cotidiano da cultura digital, bem como na produção e uso de artefatos computacionais.' }
  },
  unesco: { dimensao: 'etica', competencia: 'Avaliar soluções de proteção considerando que mecanismos de segurança podem gerar novos riscos de privacidade e exclusão.' },

  provocacao: 'Uma plataforma precisa garantir que quem entra tem mais de dezoito anos. Vocês vão descobrir que toda solução para esse problema cria um problema novo, e vão ter que escolher qual problema preferem ter.',

  missao: 'Avaliar quatro métodos de verificação de idade em cinco critérios, atribuir nota a cada um e recomendar um para uma plataforma específica, justificando quem a escolha protege e quem ela exclui.',

  virada: 'Depois que os grupos escolhem, o facilitador sorteia para cada grupo uma carta de população: uma pessoa sem documento com foto, uma pessoa trans cujo documento não corresponde à aparência, uma pessoa de 17 anos que precisa de informação sobre saúde, uma pessoa idosa sem smartphone, uma pessoa cuja estimativa facial erra sistematicamente porque a base de treino tinha poucas pessoas com a sua tonalidade de pele. Cada grupo precisa responder o que acontece com essa pessoa na solução que ele recomendou. Nenhuma solução sobrevive intacta.',

  insight: 'Verificação de idade não é um problema técnico com uma resposta certa. É a distribuição de um custo. A pergunta não é qual método funciona, é quem paga a conta de cada método, e se essa pessoa foi consultada.',

  transferencia: 'Diante de qualquer solução de segurança proposta como óbvia, dá para fazer a pergunta que quase nunca é feita: quem é excluído por ela, e essa pessoa participou da decisão?',

  roteiro: [
    { t: '0 a 8 min',   o: 'Apresentar o problema e os quatro métodos. Ler a grade de cinco critérios. Sortear a plataforma de cada grupo, que muda o peso dos critérios.' },
    { t: '8 a 24 min',  o: 'Cada grupo pontua os quatro métodos nos cinco critérios, de 0 a 5, e calcula o total. Exigir justificativa escrita para as notas extremas.' },
    { t: '24 a 30 min', o: 'Apresentação rápida. Montar a matriz comparativa no quadro com os totais de cada grupo.' },
    { t: '30 a 40 min', o: 'A virada. Sortear uma carta de população por grupo. Dez minutos para responder o que acontece com aquela pessoa. Reescrever a recomendação se necessário.' },
    { t: '40 a 50 min', o: 'Debate final e folha de decisão: qual método, com quais salvaguardas, e qual caminho de exceção para quem o método falhar.' }
  ],

  versoes: {
    escola: 'Grupos de quatro, plataformas diferentes sorteadas, o que evita convergência artificial. Encaixa em Projeto de Vida e em Geografia, pela discussão de acesso desigual a documentação e a dispositivos. A carta de população é o coração e não deve ser cortada.',
    familia: 'Conversa de mesa com os quatro métodos impressos. Discutir qual a família aceitaria usar e qual ela recusaria, e por quê. Boa oportunidade para o adulto explicar por que existe verificação de idade sem transformar em sermão.',
    jovem: 'Individual: escolher uma plataforma que você usa, descobrir como ela verifica idade hoje, e escrever uma proposta de melhoria de meia página que inclua o caminho de exceção. Enviar para a ouvidoria da plataforma é um passo real e possível.'
  },

  kit: [
    { nome: 'Fichas dos quatro métodos', tipo: 'imprimivel', desc: 'Como funciona, o que coleta, onde falha.' },
    { nome: 'Grade de cinco critérios', tipo: 'imprimivel', desc: 'Com espaço para nota e justificativa.' },
    { nome: 'Cartas de plataforma', tipo: 'imprimivel', desc: 'Cada uma muda o peso dos critérios.' },
    { nome: 'Cartas de população', tipo: 'imprimivel', desc: 'A virada. Sortear uma por grupo.' },
    { nome: 'Folha de decisão', tipo: 'editavel', desc: 'Método, salvaguardas e caminho de exceção.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'O que cada método realmente custa.' }
  ],

  imprimiveis: [
    {
      titulo: 'Fichas dos quatro métodos',
      tipo: 'cartas',
      itens: [
        'MÉTODO A, AUTODECLARAÇÃO. A pessoa informa a data de nascimento em um campo. Coleta: uma data, que pode ser falsa. Falha: qualquer pessoa de qualquer idade passa. Custo para o usuário: nenhum. Custo para quem deveria ser protegido: proteção nula.',
        'MÉTODO B, DOCUMENTO COM FOTO. A pessoa envia foto de documento oficial e uma selfie. Coleta: nome completo, número do documento, filiação, foto do rosto, e às vezes endereço. Falha: quem não tem documento com foto fica de fora, e a plataforma passa a guardar uma base de documentos, que é alvo de vazamento. Custo: alto e permanente.',
        'MÉTODO C, ESTIMATIVA FACIAL. Um sistema estima a idade a partir da imagem do rosto, sem identificar a pessoa. Coleta: imagem facial, processada e em tese descartada. Falha: a margem de erro é de vários anos e não é igual para todos os grupos, porque depende da base de treino. Custo: dado biométrico entregue, com precisão desigual entre populações.',
        'MÉTODO D, CREDENCIAL DE FAIXA ETÁRIA. Um emissor confiável, como um banco ou órgão público, verifica a idade uma vez e emite uma credencial que responde apenas "esta pessoa tem mais de 18" para quem perguntar, sem revelar quem ela é nem a data exata. Coleta pela plataforma: apenas a resposta sim ou não. Falha: exige que exista um emissor confiável e acessível, e cria dependência dele. Custo: baixo para o usuário, alto de infraestrutura.'
      ]
    },
    {
      titulo: 'Grade de cinco critérios',
      tipo: 'folha',
      corpo: 'Pontuar cada método de 0 a 5 em cada critério.\n\n1. EFICÁCIA: realmente impede o acesso de quem não deveria entrar?\n2. MINIMIZAÇÃO: coleta o mínimo necessário para responder a pergunta?\n3. INCLUSÃO: quem consegue usar? Quem fica de fora?\n4. RISCO RESIDUAL: se houver vazamento, qual o dano? O dado é revogável?\n5. CONTESTABILIDADE: quando o método erra com uma pessoa, existe caminho para corrigir? Quanto ele custa a ela?\n\nJustificativa obrigatória para toda nota 0 e toda nota 5.'
    },
    {
      titulo: 'Cartas de plataforma (sortear uma por grupo)',
      tipo: 'cartas',
      itens: [
        'Uma rede social usada por adolescentes e adultos.',
        'Um site de apostas, cujo acesso por menores é proibido por lei.',
        'Um serviço público de informação sobre saúde sexual e reprodutiva.',
        'Uma loja de jogos com compras dentro do aplicativo.',
        'Um fórum de apoio para pessoas em sofrimento psíquico.'
      ]
    },
    {
      titulo: 'Cartas de população (a virada)',
      tipo: 'cartas',
      nota: 'Sortear uma por grupo, depois da recomendação escrita.',
      itens: [
        'Uma pessoa de 19 anos que nunca tirou documento com foto e mora a 80 km do cartório mais próximo.',
        'Uma pessoa trans de 22 anos cujo documento ainda não foi retificado e não corresponde à aparência atual.',
        'Uma pessoa de 17 anos que procura informação sobre saúde e não quer que a família saiba.',
        'Uma pessoa de 71 anos que não tem smartphone e usa o computador da biblioteca pública.',
        'Uma pessoa de 16 anos que a estimativa facial classifica consistentemente como tendo mais de 20, porque a base de treino do sistema tinha poucas pessoas com a sua tonalidade de pele.',
        'Uma pessoa de 25 anos que a estimativa facial classifica consistentemente como tendo menos de 18, e que precisa acessar um serviço financeiro.'
      ]
    },
    {
      titulo: 'Folha de decisão',
      tipo: 'editavel',
      corpo: 'Plataforma: ____________________\n\nMÉTODO RECOMENDADO: ____________________\n\nPor que este e não os outros três: ____________________________________\n\nQUEM ESTA ESCOLHA PROTEGE: ____________________________________\n\nQUEM ESTA ESCOLHA EXCLUI OU PREJUDICA: ____________________________________\n\nSALVAGUARDAS OBRIGATÓRIAS, no mínimo duas:\n1. ____________________________________\n2. ____________________________________\n\nCAMINHO DE EXCEÇÃO: quando o método falhar com uma pessoa, o que ela faz?\n____________________________________\n\nQuanto tempo e quanto esforço esse caminho custa a ela? ____________________\n\nEsta pessoa foi consultada na decisão? ( ) sim ( ) não\nSe não, quem deveria ter sido ouvido? ____________________'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'O QUE CADA MÉTODO REALMENTE CUSTA\n\nA, autodeclaração: eficácia praticamente nula, minimização máxima. Existe hoje na maior parte dos serviços justamente porque é barato. Se algum grupo pontuar alto em eficácia, pedir a evidência.\n\nB, documento: a intuição da maioria e a pior opção em risco residual. A plataforma passa a operar uma base de documentos de identidade, que é o alvo mais valioso possível. Além disso, o dado é irrevogável: uma senha vazada se troca, um número de documento e um rosto não. Ponto que costuma faltar aos grupos e vale introduzir se ninguém trouxer.\n\nC, estimativa facial: parece elegante porque não guarda identidade, e falha em inclusão de um jeito que não é distribuído por igual. A carta da pessoa cuja tonalidade de pele não estava representada na base de treino conecta diretamente com a atividade "Quem ensinou o robô", lá nos 4 anos, e vale explicitar essa ligação para a turma. É o mesmo problema, cinco níveis adiante.\n\nD, credencial de faixa etária: tecnicamente a melhor em minimização, porque responde apenas sim ou não. O custo real é de infraestrutura e de dependência de um emissor. Vale perguntar quem deveria ser o emissor, e o que acontece se ele passar a registrar cada consulta. Uma credencial que responde sim ou não mas guarda o histórico de onde foi usada resolve um problema e cria outro.\n\nSOBRE AS PLATAFORMAS\n\nO sorteio existe para quebrar a resposta única. O fórum de apoio psíquico e o serviço de saúde para adolescentes costumam inverter a lógica dos grupos: ali, verificação rigorosa exclui exatamente quem mais precisa entrar. Se um grupo mantiver documento com foto para o serviço de saúde depois da carta da pessoa de 17 anos, vale insistir na pergunta sobre quem paga a conta.\n\nO site de apostas é o inverso e mostra que o mesmo critério pode ser certo em um contexto e errado em outro.\n\nSOBRE A FOLHA DE DECISÃO\n\nA linha do caminho de exceção é a mais importante do material inteiro. Uma solução sem caminho de exceção não é uma solução, é uma aposta de que o erro não vai acontecer. E a última pergunta, sobre quem foi consultado, é a que transporta a atividade para fora da tecnologia.'
    }
  ],

  mediacao: {
    perguntas: [
      'Se um documento vazar, dá para trocar de rosto?',
      'A estimativa facial erra igual para todo mundo? De onde vem a diferença?',
      'Uma credencial que só responde sim ou não é perfeita? E se ela registrar cada consulta?',
      'No serviço de saúde para adolescentes, verificar mais protege quem?',
      'Quem paga o custo do seu método? Essa pessoa participou da decisão?',
      'Qual é o caminho de quem o sistema errou, e quanto tempo ele leva?'
    ],
    evitar: [
      'Sugerir que existe um método correto. Não existe, e a tentativa de chegar a um destrói o aprendizado.',
      'Entregar as cartas de população antes da recomendação. A recomendação precisa ser feita às cegas para que a virada tenha efeito.',
      'Deixar a discussão sobre documento e identidade de gênero passar sem mediação cuidadosa. Se houver estudante trans na turma, a carta pode tocar em experiência pessoal, e ninguém deve ser convocado a falar de si. Manter a discussão na terceira pessoa.',
      'Terminar sem o caminho de exceção preenchido. É o que transforma opinião em desenho.'
    ]
  },

  protecao: 'Nenhum documento real, foto ou dado biométrico é usado, coletado ou fotografado em qualquer momento. Ninguém envia selfie, mostra documento ou testa sistema real de verificação. As cartas de população descrevem situações em terceira pessoa e nenhum estudante deve ser convidado a se identificar com uma delas. Se a turma tiver estudantes em alguma dessas situações, a mediação na terceira pessoa protege a participação sem exposição.',

  evidencia: 'O grupo justifica a recomendação nomeando explicitamente quem a escolha exclui, propõe pelo menos duas salvaguardas e descreve um caminho de exceção viável com estimativa do custo para a pessoa afetada.'
},

/* ==================================================================== 15 */
{
  id: 'constituicao-de-ia-da-escola',
  insightCurto: 'Uma regra só é legítima quando alcança também quem tem mais poder dentro dela.',
  n: 15,
  titulo: 'Constituição de IA da escola',
  chamada: 'A turma escreve a regra que vai valer para ela mesma, e para os adultos também.',
  faixa: '15-17',
  duracao: 999,
  duracaoTexto: 'Projeto de duas aulas mais assembleia',
  formato: 'debate',
  formatoDetalhe: 'Assembleia deliberativa com redação de norma',
  contexto: ['escola'],
  tela: 'sem-tela',
  situacao: ['ia-tarefa', 'autoria'],
  disciplinas: ['Projeto de Vida', 'Língua Portuguesa', 'História'],
  preparo: 'medio',
  grupo: 'turma',
  eixo: 'ia',
  nivel: 5,
  sensibilidade: 'media',
  selos: ['sem-tela'],

  bncc: {
    principal: { codigo: 'EM13CO10', texto: 'Conhecer os fundamentos da Inteligência Artificial, comparando-a com a inteligência humana, analisando suas potencialidades, riscos e limites.' },
    secundaria: { codigo: 'EM13CO26', texto: 'Aplicar os conceitos e pressupostos do direito digital em sua conduta e experiências com o cotidiano da cultura digital, bem como na produção e uso de artefatos computacionais.' }
  },
  unesco: { dimensao: 'mentalidade', competencia: 'Participar da definição de condições legítimas de uso de IA, reconhecendo-se como sujeito de governança e não apenas usuário.' },

  provocacao: 'A escola vai ter uma regra sobre IA de qualquer jeito. Ou ela é escrita por três adultos em uma sala fechada, ou ela é escrita por quem vai viver sob ela. Vocês têm duas aulas.',

  missao: 'Redigir a Constituição de IA da escola: princípios, usos livres, usos que exigem declaração, usos vedados, deveres dos adultos, direito de contestação e regra de revisão. O texto precisa caber em uma página e ser aplicável na segunda-feira.',

  virada: 'No meio da segunda aula, quando o texto já está tomando forma e costuma estar voltado inteiramente para o que os estudantes podem ou não fazer, o facilitador entrega as três situações do lado de cá: um professor que corrigiu redações com IA sem avisar, uma coordenação que usou IA para redigir a advertência de um estudante, e uma escola que usou IA para prever quais estudantes reprovariam e mudou o atendimento com base nisso. A turma percebe que escreveu um regulamento de estudantes e não uma constituição, e precisa reescrever a seção dos deveres dos adultos.',

  insight: 'Uma regra só é legítima quando alcança quem tem mais poder dentro dela. Governança não é lista de proibições para quem tem menos poder, é distribuição de deveres e de direitos de contestação para todos os lados.',

  transferencia: 'A pergunta que serve para qualquer regra, em qualquer lugar: ela vale para quem escreveu? Quem pode contestar? E quando ela é revista?',

  roteiro: [
    { t: 'Aula 1, 0 a 10 min',  o: 'Apresentar o desafio e a estrutura das sete seções. Distribuir os insumos: a proposta de regra produzida na atividade "IA na tarefa", se a turma já a fez, e as cartas de caso.' },
    { t: 'Aula 1, 10 a 30 min', o: 'Comissões. Dividir a turma em sete comissões, uma por seção. Cada comissão redige a sua seção em no máximo cinco linhas.' },
    { t: 'Aula 1, 30 a 45 min', o: 'Primeira leitura pública. Cada comissão lê a sua seção. As outras anotam contradições, sem debater ainda.' },
    { t: 'Aula 2, 0 a 15 min',  o: 'Resolução de contradições entre seções. É a parte mais difícil e a mais formativa.' },
    { t: 'Aula 2, 15 a 25 min', o: 'A virada. Entregar as três situações do lado de cá. Leitura em silêncio e reação.' },
    { t: 'Aula 2, 25 a 45 min', o: 'Reescrita da seção de deveres dos adultos e da seção de contestação, agora com o outro lado no texto.' },
    { t: 'Assembleia',          o: 'Sessão final, idealmente com a direção presente. Leitura do texto, emendas do plenário, votação artigo por artigo, e entrega formal do documento à coordenação com pedido de resposta em prazo definido.' }
  ],

  versoes: {
    escola: 'Turma inteira em comissões, com assembleia final. Ganha muito se a direção se comprometer antes a responder por escrito, mesmo que discordando. Uma resposta negativa fundamentada ensina mais sobre governança do que uma aprovação automática. Encadeia naturalmente com "IA na tarefa" nos anos anteriores.',
    familia: 'Versão doméstica em uma hora, com as sete seções reduzidas a quatro, produzindo o pacto de IA da casa, que também tem ficha própria no banco. A seção de deveres dos adultos é obrigatória e é a que faz a diferença.',
    jovem: 'Individual: escrever a própria versão da constituição em uma página e comparar com a da turma. Levar ao grêmio estudantil é o caminho natural.'
  },

  kit: [
    { nome: 'Estrutura das sete seções', tipo: 'imprimivel', desc: 'O esqueleto do documento, com o que cada seção precisa responder.' },
    { nome: 'Doze cartas de caso', tipo: 'imprimivel', desc: 'Situações concretas que a regra precisa conseguir resolver.' },
    { nome: 'Três situações do lado de cá', tipo: 'imprimivel', desc: 'A virada. Entregar só na segunda aula.' },
    { nome: 'Modelo de constituição', tipo: 'editavel', desc: 'Uma página, para a turma preencher e imprimir.' },
    { nome: 'Roteiro de assembleia', tipo: 'roteiro', desc: 'Como conduzir a votação artigo por artigo.' },
    { nome: 'Gabarito comentado', tipo: 'gabarito', desc: 'Armadilhas comuns e como mediar.' }
  ],

  imprimiveis: [
    {
      titulo: 'Estrutura das sete seções',
      tipo: 'folha',
      corpo: 'SEÇÃO 1, PRINCÍPIOS. No máximo três frases. Por que esta escola regula o uso de IA? O que ela quer proteger?\n\nSEÇÃO 2, USOS LIVRES. O que qualquer pessoa pode fazer sem pedir nada a ninguém.\n\nSEÇÃO 3, USOS QUE EXIGEM DECLARAÇÃO. O que pode, desde que declarado. Como se declara, e para quem.\n\nSEÇÃO 4, USOS VEDADOS. O que não pode, e o motivo de cada vedação. Toda vedação sem motivo escrito é inválida neste documento.\n\nSEÇÃO 5, DEVERES DOS ADULTOS. O que professores, coordenação e direção precisam fazer e declarar quando usam IA.\n\nSEÇÃO 6, DIREITO DE CONTESTAÇÃO. Quando alguém for prejudicado por uma decisão tomada com auxílio de IA, o que ela faz? Com quem fala? Em quanto tempo recebe resposta?\n\nSEÇÃO 7, REVISÃO. Quando este documento é revisto, por quem, e como se propõe uma emenda.'
    },
    {
      titulo: 'Doze cartas de caso',
      tipo: 'cartas',
      nota: 'A regra escrita precisa dar uma resposta clara para cada uma destas doze. Se não der, ela está incompleta.',
      itens: [
        '01. Um estudante usa IA para entender um conceito e depois faz o exercício sozinho.',
        '02. Um estudante gera a redação inteira e entrega sem declarar.',
        '03. Um estudante com dislexia usa IA para revisar todos os textos que entrega.',
        '04. Um estudante usa IA para traduzir o enunciado de uma prova em outra língua.',
        '05. Um grupo usa IA para dividir tarefas e organizar o cronograma do trabalho.',
        '06. Um estudante usa IA para gerar a imagem de capa e não declara.',
        '07. Um estudante pede à IA que simule uma banca e o questione antes da apresentação.',
        '08. Um estudante usa IA em casa para fazer a tarefa porque ninguém em casa pode ajudar.',
        '09. Um professor usa IA para gerar as questões da prova.',
        '10. Um professor usa IA para corrigir redações e não avisa a turma.',
        '11. A coordenação usa IA para redigir a advertência disciplinar de um estudante.',
        '12. A escola usa IA para prever quais estudantes têm risco de reprovar e muda o atendimento com base nessa previsão.'
      ]
    },
    {
      titulo: 'Três situações do lado de cá (a virada)',
      tipo: 'folha',
      corpo: 'Leia em silêncio antes de continuar escrevendo.\n\nSITUAÇÃO A. Uma professora corrigiu 90 redações usando IA para dar as notas e os comentários. Ela revisou por cima. Dois estudantes receberam comentários que não correspondiam ao texto que escreveram. A turma não foi avisada de que a correção foi feita assim.\n\nSITUAÇÃO B. A coordenação redigiu com IA a advertência disciplinar de um estudante, incluindo a descrição do ocorrido. A descrição tinha um detalhe que não aconteceu. O documento foi para a pasta do estudante e para a família.\n\nSITUAÇÃO C. A escola usou um sistema que prevê risco de reprovação. Sete estudantes foram classificados como alto risco e passaram a ser chamados semanalmente para conversas de acompanhamento. Um deles não estava em risco nenhum. Ninguém explicou a ele por que foi chamado, e ele não sabia que existia uma classificação.\n\nPerguntas para a turma:\n. O texto que vocês escreveram até agora resolve alguma destas três?\n. Nas três, qual foi a informação que faltou para quem foi afetado?\n. Em qual delas existe hoje um caminho para contestar?'
    },
    {
      titulo: 'Modelo de constituição (uma página)',
      tipo: 'editavel',
      corpo: 'CONSTITUIÇÃO DE IA DA ESCOLA ____________________\nAprovada em ____/____/______ pela turma ____________ em assembleia.\n\nArt. 1º, PRINCÍPIOS\n____________________________________\n\nArt. 2º, USOS LIVRES\n____________________________________\n\nArt. 3º, USOS QUE EXIGEM DECLARAÇÃO\n____________________________________\nForma da declaração: ____________________\n\nArt. 4º, USOS VEDADOS\n____________________________________\nMotivo de cada vedação: ____________________\n\nArt. 5º, DEVERES DE PROFESSORES, COORDENAÇÃO E DIREÇÃO\n____________________________________\n\nArt. 6º, DIREITO DE CONTESTAÇÃO\nQuem pode contestar: ____________________\nCom quem fala: ____________________\nPrazo de resposta: ____________________\n\nArt. 7º, REVISÃO\nEste documento será revisto em ____________________, por ____________________.\nEmendas podem ser propostas por ____________________.\n\nAssinaturas da comissão redatora:'
    },
    {
      titulo: 'Roteiro de assembleia',
      tipo: 'roteiro',
      corpo: '1. Leitura integral do texto, sem interrupção. Cinco minutos.\n2. Inscrição de emendas por escrito. Cada emenda precisa indicar o artigo, o texto novo e a justificativa em uma linha.\n3. Discussão de cada emenda: dois minutos a favor, dois minutos contra.\n4. Votação artigo por artigo, não do texto inteiro de uma vez. Isso evita que uma discordância pontual derrube o conjunto.\n5. Registro de votos vencidos, por escrito, ao pé do documento. Quem discordou tem direito de constar.\n6. Entrega formal à coordenação, com pedido de resposta escrita em prazo definido pela própria assembleia.\n\nObservação para quem conduz: se a direção estiver presente, combinar antes que ela ouve e responde depois, e não durante. A presença de autoridade no meio da deliberação muda o que os estudantes escrevem.'
    },
    {
      titulo: 'Gabarito comentado',
      tipo: 'gabarito',
      corpo: 'ARMADILHAS COMUNS\n\n1. O regulamento disfarçado de constituição. Quase toda turma escreve, na primeira versão, um documento inteiramente voltado ao que estudantes podem ou não fazer. É esperado e é por isso que a virada existe. Não antecipar.\n\n2. Vedação sem motivo. A seção 4 exige motivo escrito para cada proibição, e essa exigência é a mais formativa do documento. Turmas descobrem, escrevendo, que algumas proibições que pareciam óbvias não têm justificativa que sobreviva a uma frase.\n\n3. Contestação sem prazo e sem destinatário. "O estudante pode recorrer" não é um direito, é uma frase. Exigir nome do responsável e prazo. Se a turma não souber com quem falar, esse é o achado: hoje não existe caminho.\n\n4. Esquecer a carta 03, do estudante com dislexia. Uma regra que proíbe revisão por IA sem exceção prejudica quem usa a ferramenta como acessibilidade. Se a turma não perceber, apresentar a carta 03 isoladamente no fim.\n\n5. Esquecer a carta 08, do estudante que não tem quem ajude em casa. Vale a mesma lógica: regra igual para todos pode não ser regra justa para todos, e a turma já viu isso em "O algoritmo do recreio".\n\nSOBRE A VIRADA\n\nAs três situações não são hipóteses distantes, e é importante que a turma perceba isso sem que o adulto precise afirmar. A situação C é a mais grave das três e costuma ser a última a ser reconhecida: o dano não é o erro da previsão, é a existência de uma classificação que a pessoa classificada não sabe que existe e não pode contestar.\n\nSe a escola realmente usa alguma ferramenta assim, a mediação exige cuidado: a atividade não é para expor uma prática específica nem um professor específico. Manter no plano da norma.\n\nSOBRE O RESULTADO\n\nUm bom documento é curto, tem motivo para cada vedação, alcança os adultos e define prazo de revisão. Um documento sem seção 5 aplicável ou sem prazo na seção 6 não deve ser considerado pronto, mesmo que esteja bem escrito.\n\nO indicador de que a atividade funcionou não é a qualidade literária do texto. É a turma conseguir responder, para cada uma das doze cartas de caso, o que a regra dela determina.'
    }
  ],

  mediacao: {
    perguntas: [
      'A regra que vocês escreveram vale para quem escreveu?',
      'Vocês proibiram alguma coisa sem conseguir escrever o motivo?',
      'Na situação da previsão de reprovação, qual foi exatamente o dano?',
      'Se um estudante for prejudicado hoje por uma decisão tomada com IA, com quem ele fala?',
      'Uma regra igual para todos é justa para o estudante com dislexia? E para quem não tem ajuda em casa?',
      'Quem precisa concordar com este documento para que ele valha alguma coisa?'
    ],
    evitar: [
      'Entregar as três situações do lado de cá na primeira aula. O documento precisa ficar desequilibrado primeiro para que a turma sinta o desequilíbrio.',
      'Deixar a direção responder durante a deliberação. A presença de autoridade no meio muda o texto, e a assembleia perde a função.',
      'Aceitar vedações sem motivo escrito. É a regra do jogo e sustentá-la é o trabalho do mediador.',
      'Prometer que a escola vai adotar o documento. Prometer o que não se controla queima a confiança. O que se promete é a entrega formal e o pedido de resposta.',
      'Usar o caso de um professor ou estudante real da escola como exemplo, mesmo sem nome.'
    ]
  },

  protecao: 'Todas as cartas de caso e as três situações são fictícias e não descrevem pessoas reais da escola. Não usar nome de professor, estudante ou episódio real em nenhuma etapa. A atividade não é canal de denúncia: se um estudante relatar uma situação real de prejuízo, acolher fora da assembleia e encaminhar pelo canal próprio da escola. Nenhum dado de desempenho real de estudantes é utilizado.',

  evidencia: 'O documento final responde de forma determinada às doze cartas de caso, apresenta motivo escrito para cada vedação, contém deveres aplicáveis aos adultos e define destinatário e prazo para contestação.'
}

);
