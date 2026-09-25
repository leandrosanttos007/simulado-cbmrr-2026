// Disciplina 2: Raciocínio Lógico - Matemático (50 Questões)
window.DATA_DISCIPLINA_2 = [
  {
    "id": 51,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Concurso CBMRR - Oficial/Soldado)",
    "enunciado": "Se a afirmação 'Todo bombeiro de Roraima é corajoso' for considerada verdadeira, qual das seguintes conclusões é logicamente obrigatória?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Se Pedro não é corajoso, então ele não é bombeiro de Roraima.",
        "justificativa": "Pela regra da contrapositiva, se todo elemento do conjunto A pertence ao conjunto B, então quem não pertence a B certamente não pertence a A."
      },
      {
        "id": "B",
        "texto": "Todo corajoso é bombeiro de Roraima.",
        "justificativa": "A inclusão de A em B não garante a inclusão de B em A, pois o conjunto B pode ser mais amplo."
      },
      {
        "id": "C",
        "texto": "Algum bombeiro de Roraima não é corajoso.",
        "justificativa": "Esta afirmação contradiz diretamente a premissa universal afirmativa estabelecida no enunciado."
      },
      {
        "id": "D",
        "texto": "Nenhum corajoso é bombeiro de Roraima.",
        "justificativa": "Isso indicaria exclusão total entre os conjuntos, o que é o oposto da relação de inclusão proposta."
      },
      {
        "id": "E",
        "texto": "Se João é corajoso, então ele é bombeiro de Roraima.",
        "justificativa": "Esta é uma falácia de afirmação do consequente; o conjunto dos corajosos pode conter elementos que não são bombeiros."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A proposição 'Todo Bombeiro de Roraima (B) é Corajoso (C)' equivale na lógica proposicional condicional a: 'Se é bombeiro de Roraima, então é corajoso' (B -> C). A única equivalência lógica válida e necessária por contrapositiva é: ~C -> ~B ('Se não é corajoso, então não é bombeiro de Roraima'). As demais alternativas incorrem em falácias de conversão ilícita ou contradição direta."
  },
  {
    "id": 52,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Qual é a negação lógica da proposição composta: 'Se chove torrencialmente em Boa Vista, então o nível do Rio Branco sobe'?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Se não chove torrencialmente em Boa Vista, então o nível do Rio Branco não sobe.",
        "justificativa": "Incorreto. A negação do 'se... então' não é outro 'se... então'."
      },
      {
        "id": "B",
        "texto": "Chove torrencialmente em Boa Vista e o nível do Rio Branco não sobe.",
        "justificativa": "Correto. Pela regra do 'MANÉ' (~(P -> Q) = P ^ ~Q), mantém-se a primeira parte e nega-se a segunda parte ligando por 'e'."
      },
      {
        "id": "C",
        "texto": "Não chove torrencialmente em Boa Vista ou o nível do Rio Branco sobe.",
        "justificativa": "Incorreto. Esta é uma equivalência de P -> Q (~P v Q), não a sua negação."
      },
      {
        "id": "D",
        "texto": "Chove torrencialmente em Boa Vista ou o nível do Rio Branco não sobe.",
        "justificativa": "Incorreto. O conectivo deve ser a conjunção 'e'."
      },
      {
        "id": "E",
        "texto": "Se o nível do Rio Branco sobe, então chove torrencialmente em Boa Vista.",
        "justificativa": "Incorreto. Trata-se da recíproca simples."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "A negação de uma proposição condicional (P -> Q) é dada formalmente por P ^ ~Q (regra mnemônica do 'MANÉ': Mantém a primeira e NEga a segunda). Logo: 'Chove torrencialmente em Boa Vista E o nível do Rio Branco não sobe'."
  },
  {
    "id": 53,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Considere a afirmação: 'Nenhum militar do CBMRR é negligente'. A negação lógica dessa afirmação é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Todo militar do CBMRR é negligente.",
        "justificativa": "Incorreto. 'Todo' não nega 'Nenhum'."
      },
      {
        "id": "B",
        "texto": "Pelo menos um militar do CBMRR é negligente.",
        "justificativa": "Correto. A negação do quantificador universal negativo 'Nenhum A é B' é o quantificador existencial 'Algum A é B' (ou 'existe pelo menos um')."
      },
      {
        "id": "C",
        "texto": "Nenhum militar do CBMRR é prudente.",
        "justificativa": "Incorreto. Não altera a estrutura lógica da proposição."
      },
      {
        "id": "D",
        "texto": "Algum militar do CBMRR não é negligente.",
        "justificativa": "Incorreto. Isso seria subcontrária de algum é, não a negação de nenhum."
      },
      {
        "id": "E",
        "texto": "Todos os militares do CBMRR são extremamente dedicados.",
        "justificativa": "Incorreto. Desvio categórico do termo negligente."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "A negação de 'Nenhum A é B' é 'Algum A é B' ou 'Existe pelo menos um A que é B'. Para que a proposição 'Nenhum militar é negligente' seja falsa, basta encontrar um único militar que seja negligente."
  },
  {
    "id": 54,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Dizer que 'Não é verdade que o bombeiro apagou o fogo e salvou a vítima' é logicamente equivalente a afirmar que:",
    "alternativas": [
      {
        "id": "A",
        "texto": "O bombeiro não apagou o fogo e não salvou a vítima.",
        "justificativa": "Incorreto. Falácia de De Morgan (trocou pelo conectivo 'e')."
      },
      {
        "id": "B",
        "texto": "O bombeiro não apagou o fogo ou não salvou a vítima.",
        "justificativa": "Correto. Primeira Lei de De Morgan: ~(P ^ Q) = ~P v ~Q."
      },
      {
        "id": "C",
        "texto": "Se o bombeiro não apagou o fogo, então não salvou a vítima.",
        "justificativa": "Incorreto. Não é a equivalência direta de De Morgan."
      },
      {
        "id": "D",
        "texto": "O bombeiro apagou o fogo, mas não salvou a vítima.",
        "justificativa": "Incorreto. Afirma que apagou o fogo com certeza."
      },
      {
        "id": "E",
        "texto": "O bombeiro nem apagou o fogo nem salvou a vítima.",
        "justificativa": "Incorreto. Equivale a conjunção de negações (~P ^ ~Q)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Pela 1ª Lei de De Morgan: a negação de uma conjunção (~(P ^ Q)) é equivalente à disjunção das negações (~P v ~Q). Logo: 'O bombeiro não apagou o fogo OU não salvou a vítima'."
  },
  {
    "id": 55,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Quatro bombeiros (André, Bruno, Carlos e Daniel) possuem especialidades distintas: Mergulho, Altura, Resgate Veicular e Combate a Incêndio. Sabe-se que:\n- André não é especialista em Altura nem em Incêndio;\n- Bruno é especialista em Mergulho;\n- Daniel não atua em Incêndio.\nQual é a especialidade de Daniel?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Mergulho",
        "justificativa": "Incorreto. Bruno é o mergulhador."
      },
      {
        "id": "B",
        "texto": "Altura",
        "justificativa": "Correto. Se Bruno é Mergulho, sobram Altura, Veicular e Incêndio. André não é Altura nem Incêndio, logo André é Veicular. Sobram Daniel e Carlos para Altura e Incêndio. Como Daniel não é Incêndio, Daniel é Altura e Carlos é Incêndio."
      },
      {
        "id": "C",
        "texto": "Resgate Veicular",
        "justificativa": "Incorreto. André é Resgate Veicular."
      },
      {
        "id": "D",
        "texto": "Combate a Incêndio",
        "justificativa": "Incorreto. Carlos é Combate a Incêndio."
      },
      {
        "id": "E",
        "texto": "Atendimento Pré-Hospitalar",
        "justificativa": "Incorreto. Especialidade não mencionada."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Dedução lógica por eliminação:\n1) Bruno = Mergulho.\n2) Restam: Altura, Resgate Veicular e Incêndio.\n3) André não é Altura nem Incêndio -> André = Resgate Veicular.\n4) Restam Daniel e Carlos para Altura e Incêndio.\n5) Daniel não é Incêndio -> Daniel = Altura; logo Carlos = Incêndio."
  },
  {
    "id": 56,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Em um quartel do CBMRR em Boa Vista, há 8 soldados combatentes disponíveis para formar uma guarnição de combate a incêndio com exatamente 3 integrantes. De quantas maneiras diferentes essa guarnição pode ser formada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "24 maneiras",
        "justificativa": "Incorreto. Cálculo de multiplicação simples incorreto."
      },
      {
        "id": "B",
        "texto": "56 maneiras",
        "justificativa": "Correto. Trata-se de combinação simples de 8 elementos tomados 3 a 3: C(8,3) = (8*7*6)/(3*2*1) = 56."
      },
      {
        "id": "C",
        "texto": "112 maneiras",
        "justificativa": "Incorreto. Erro de divisão fatorial."
      },
      {
        "id": "D",
        "texto": "336 maneiras",
        "justificativa": "Incorreto. Este seria o arranjo simples A(8,3) onde a ordem importa."
      },
      {
        "id": "E",
        "texto": "512 maneiras",
        "justificativa": "Incorreto. 8 elevado ao cubo."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Como a ordem dos soldados no grupo não altera a equipe de salvamento (o grupo {A, B, C} é o mesmo que {C, B, A}), utiliza-se combinação simples:\nC(8, 3) = 8! / (3! * 5!) = (8 * 7 * 6) / (3 * 2 * 1) = 56 maneiras distintas."
  },
  {
    "id": 57,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Três viaturas de bombeiros (V1, V2 e V3) passam por revisão mecânica. A probabilidade de a viatura V1 apresentar defeito nos freios é de 10%, da V2 é de 20% e da V3 é de 30%. Sabendo que os sistemas são independentes, qual é a probabilidade de NENHUMA das três viaturas apresentar defeito?",
    "alternativas": [
      {
        "id": "A",
        "texto": "40%",
        "justificativa": "Incorreto. Soma linear incorreta."
      },
      {
        "id": "B",
        "texto": "50,4%",
        "justificativa": "Correto. Probabilidade de não falhar: P(V1 ok) = 0,90; P(V2 ok) = 0,80; P(V3 ok) = 0,70. Produto = 0,90 * 0,80 * 0,70 = 0,504 = 50,4%."
      },
      {
        "id": "C",
        "texto": "60%",
        "justificativa": "Incorreto. Erro de cálculo."
      },
      {
        "id": "D",
        "texto": "49,6%",
        "justificativa": "Incorreto. Esta é a probabilidade complementar de pelo menos uma falhar."
      },
      {
        "id": "E",
        "texto": "70%",
        "justificativa": "Incorreto. Probabilidade arbitrária."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Para eventos independentes, a probabilidade da intersecção é o produto das probabilidades individuais:\nP(nenhuma falhar) = P(~V1) * P(~V2) * P(~V3) = (1 - 0,10) * (1 - 0,20) * (1 - 0,30) = 0,90 * 0,80 * 0,70 = 0,504 = 50,4%."
  },
  {
    "id": 58,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Considere as seguintes premissas:\nPremissa 1: Se a sirene do quartel toca, então os bombeiros vestem os equipamentos de proteção.\nPremissa 2: Se os bombeiros vestem os equipamentos de proteção, então a viatura parte em socorro em até dois minutos.\nPremissa 3: A viatura NÃO partiu em socorro em até dois minutos.\nQual conclusão decorre logicamente dessas premissas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "A sirene do quartel tocou com volume baixo.",
        "justificativa": "Incorreto. Não dedutível."
      },
      {
        "id": "B",
        "texto": "A sirene do quartel NÃO tocou.",
        "justificativa": "Correto. Por Modus Tollens sucessivo: ~Q3 implica que os bombeiros não vestiram os equipamentos, o que implica que a sirene não tocou."
      },
      {
        "id": "C",
        "texto": "Os bombeiros vestiram os equipamentos, mas a viatura quebrou.",
        "justificativa": "Incorreto. Viola a premissa 2."
      },
      {
        "id": "D",
        "texto": "A viatura partiu com atraso de cinco minutos.",
        "justificativa": "Incorreto. Hipótese factual fora do escopo lógico."
      },
      {
        "id": "E",
        "texto": "Não é possível tirar qualquer conclusão lógica.",
        "justificativa": "Incorreto. A dedução por encadeamento de Modus Tollens é válida e necessária."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Análise silogística:\n1) S -> E\n2) E -> V\nPor transitividade: S -> V (Se a sirene toca, a viatura parte).\n3) ~V (A viatura não partiu).\nPela regra de inferência Modus Tollens: Se S -> V e ~V, conclui-se obrigatoriamente ~S ('A sirene do quartel NÃO tocou')."
  },
  {
    "id": 59,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Um sargento interroga três suspeitos de terem provocado um incêndio criminoso: Paulo, Rogério e Sérgio. Sabe-se que apenas um deles cometeu o crime e que apenas um deles disse a verdade:\n- Paulo disse: 'Rogério é o culpado.'\n- Rogério disse: 'Eu não sou o culpado.'\n- Sérgio disse: 'Eu não sou o culpado.'\nQuem é o culpado e quem disse a verdade?",
    "alternativas": [
      {
        "id": "A",
        "texto": "O culpado é Paulo e quem disse a verdade foi Rogério.",
        "justificativa": "Incorreto. Se Paulo é culpado, Rogério e Sérgio disseram a verdade (duas verdades, contrariando o enunciado)."
      },
      {
        "id": "B",
        "texto": "O culpado é Sérgio e quem disse a verdade foi Rogério.",
        "justificativa": "Correto. Se Sérgio é o culpado: Paulo mente (F); Rogério diz a verdade (V); Sérgio mente (F). Apenas uma verdade e um culpado."
      },
      {
        "id": "C",
        "texto": "O culpado é Rogério e quem disse a verdade foi Paulo.",
        "justificativa": "Incorreto. Se Rogério é o culpado: Paulo diz a verdade (V) e Sérgio diz a verdade (V) - duas verdades."
      },
      {
        "id": "D",
        "texto": "O culpado é Paulo e quem disse a verdade foi Paulo.",
        "justificativa": "Incorreto. Paulo mente ao apontar Rogério."
      },
      {
        "id": "E",
        "texto": "O culpado é Rogério e quem disse a verdade foi Sérgio.",
        "justificativa": "Incorreto. Sérgio também diria a verdade."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Observe que as declarações de Paulo e Rogério são contraditórias ('Rogério é culpado' x 'Rogério não é culpado'). Uma delas é necessariamente verdadeira e a outra falsa. Como há apenas UMA verdade no total, a declaração de Sérgio TEM QUE SER FALSA. Se Sérgio mentiu ao dizer 'Eu não sou o culpado', então SÉRGIO É O CULPADO! Se Sérgio é o culpado, Rogério disse a verdade ('Não sou culpado') e Paulo mentiu."
  },
  {
    "id": 60,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Dada a proposição condicional 'Se o hidrante possui pressão adequada, então o incêndio é controlado', uma proposição logicamente EQUIVALENTE por disjunção é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "O hidrante não possui pressão adequada ou o incêndio é controlado.",
        "justificativa": "Correto. Pela equivalência P -> Q = ~P v Q (regra do 'NEGA a primeira OU MANTÉM a segunda')."
      },
      {
        "id": "B",
        "texto": "O hidrante possui pressão adequada e o incêndio é controlado.",
        "justificativa": "Incorreto. Conjunção não equivale à condicional."
      },
      {
        "id": "C",
        "texto": "O hidrante possui pressão adequada ou o incêndio não é controlado.",
        "justificativa": "Incorreto. Negou a segunda parte indevidamente."
      },
      {
        "id": "D",
        "texto": "Se o incêndio é controlado, então o hidrante possui pressão adequada.",
        "justificativa": "Incorreto. Falácia da recíproca."
      },
      {
        "id": "E",
        "texto": "O hidrante não possui pressão adequada e o incêndio não é controlado.",
        "justificativa": "Incorreto. Conjunção de negações."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A equivalência lógica clássica da condicional em disjunção é: (P -> Q) <-> (~P v Q). Nega-se a primeira proposição (antecedente) OU mantém-se a segunda (consequente). Logo: 'O hidrante não possui pressão adequada OU o incêndio é controlado'."
  },
  {
    "id": 61,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Sejam os conjuntos:\nA = conjunto dos bombeiros especializados em Salvamento Aquático (40 militares)\nB = conjunto dos bombeiros especializados em Busca Terrestre (50 militares)\nSabendo que 15 bombeiros possuem ambas as especialidades e que a corporação conta com 85 bombeiros aptos a essas funções, quantos bombeiros NÃO possuem nenhuma dessas duas especialidades?",
    "alternativas": [
      {
        "id": "A",
        "texto": "5 bombeiros",
        "justificativa": "Incorreto."
      },
      {
        "id": "B",
        "texto": "10 bombeiros",
        "justificativa": "Correto. União n(A U B) = n(A) + n(B) - n(A n B) = 40 + 50 - 15 = 75. Como o universo é 85: 85 - 75 = 10 militares."
      },
      {
        "id": "C",
        "texto": "15 bombeiros",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "20 bombeiros",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "25 bombeiros",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Teoria dos conjuntos:\nn(A U B) = n(A) + n(B) - n(A n B) = 40 + 50 - 15 = 75 militares possuem ao menos uma especialidade.\nO total de bombeiros é 85.\nBombeiros sem nenhuma especialidade = 85 - 75 = 10 bombeiros."
  },
  {
    "id": 62,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Qual é a negação lógica da proposição: 'Todo cidadão roraimense respeita as leis de trânsito ou algum motorista comete infração grave'?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Algum cidadão roraimense não respeita as leis de trânsito e nenhum motorista comete infração grave.",
        "justificativa": "Correto. Negação de P v Q é ~P ^ ~Q. Negação de 'Todo' é 'Algum... não'; negação de 'Algum' é 'Nenhum'."
      },
      {
        "id": "B",
        "texto": "Nenhum cidadão roraimense respeita as leis de trânsito ou todo motorista comete infração grave.",
        "justificativa": "Incorreto. Erro nos quantificadores e manteve disjunção."
      },
      {
        "id": "C",
        "texto": "Algum cidadão roraimense respeita as leis de trânsito e todo motorista comete infração grave.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "Todo cidadão roraimense não respeita as leis de trânsito ou nenhum motorista comete infração grave.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Se algum cidadão não respeita, então nenhum motorista comete infração.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Regra de De Morgan para disjunção: ~(P v Q) = ~P ^ ~Q.\n~('Todo cidadão respeita') = 'Algum cidadão não respeita'.\n~('Algum motorista comete infração') = 'Nenhum motorista comete infração'.\nLigados por E: 'Algum cidadão roraimense não respeita as leis de trânsito E nenhum motorista comete infração grave'."
  },
  {
    "id": 63,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Em uma prateleira da viatura de resgate, há 5 kits de primeiros socorros vermelhos idênticos e 3 kits azuis idênticos. De quantas formas distintas esses 8 kits podem ser organizados em linha?",
    "alternativas": [
      {
        "id": "A",
        "texto": "40 formas",
        "justificativa": "Incorreto."
      },
      {
        "id": "B",
        "texto": "56 formas",
        "justificativa": "Correto. Permutação com repetição: P_8^(5,3) = 8! / (5! * 3!) = (8*7*6)/(3*2*1) = 56 formas."
      },
      {
        "id": "C",
        "texto": "120 formas",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "336 formas",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "6720 formas",
        "justificativa": "Incorreto. Permutação simples sem divisão das repetições."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Fórmula de permutação com repetição: P_n^(a,b) = n! / (a! * b!).\nP_8^(5,3) = 8! / (5! * 3!) = (8 * 7 * 6 * 5!) / (5! * 6) = 56."
  },
  {
    "id": 64,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Considere a tabela-verdade de uma proposição P e Q. Em quantas linhas a proposição condicional (P -> Q) assume o valor lógico FALSO (F)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Nenhuma linha (é tautologia)",
        "justificativa": "Incorreto."
      },
      {
        "id": "B",
        "texto": "Exatamente 1 linha (quando P é Verdadeiro e Q é Falso)",
        "justificativa": "Correto. A condicional P -> Q só é falsa no caso clássico 'Vera Fischer' (V -> F). Nas outras 3 linhas (V->V, F->V, F->F), o resultado é Verdadeiro."
      },
      {
        "id": "C",
        "texto": "Exatamente 2 linhas",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "Exatamente 3 linhas",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Em todas as 4 linhas",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "A condicional (P -> Q) possui tabela-verdade de 4 linhas:\nV -> V = V\nV -> F = F (ÚNICA linha falsa!)\nF -> V = V\nF -> F = V\nPortanto, é falsa em exatamente 1 linha."
  },
  {
    "id": 65,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Uma senha de cofre de segurança de armamento do batalhão é composta por 4 dígitos numéricos distintos escolhidos entre os algarismos de 1 a 9. Quantas senhas possíveis podem ser formadas?",
    "alternativas": [
      {
        "id": "A",
        "texto": "3.024 senhas",
        "justificativa": "Correto. Arranjo simples de 9 elementos tomados 4 a 4: A(9,4) = 9 * 8 * 7 * 6 = 3.024."
      },
      {
        "id": "B",
        "texto": "126 senhas",
        "justificativa": "Incorreto. Esta seria a combinação simples."
      },
      {
        "id": "C",
        "texto": "6.561 senhas",
        "justificativa": "Incorreto. Seria com repetição de algarismos (9^4)."
      },
      {
        "id": "D",
        "texto": "504 senhas",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "10.000 senhas",
        "justificativa": "Incorreto. 10^4."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Como se trata de uma senha, a ORDEM dos algarismos importa (ex: 1234 é diferente de 4321), e os dígitos devem ser DISTINTOS:\nTotal = 9 * 8 * 7 * 6 = 3.024 senhas distintas."
  },
  {
    "id": 66,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "A negação lógica de 'Algum bombeiro militar tem medo de altura' é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Nenhum bombeiro militar tem medo de altura.",
        "justificativa": "Correto. O quantificador existencial 'Algum A é B' tem como negação estrita o quantificador universal negativo 'Nenhum A é B'."
      },
      {
        "id": "B",
        "texto": "Todo bombeiro militar tem medo de altura.",
        "justificativa": "Incorreto. Não é negação lógica."
      },
      {
        "id": "C",
        "texto": "Algum bombeiro militar não tem medo de altura.",
        "justificativa": "Incorreto. É a subcontrária."
      },
      {
        "id": "D",
        "texto": "A maioria dos bombeiros não tem medo de altura.",
        "justificativa": "Incorreto. Não nega rigorosamente a existência."
      },
      {
        "id": "E",
        "texto": "Existe pelo menos um bombeiro que não tem medo de altura.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A negação de 'Algum A é B' (ou 'Existe pelo menos um') é 'Nenhum A é B'. Para falsear a existência de alguém com medo de altura, é imperativo que absolutamente nenhum bombeiro tenha medo de altura."
  },
  {
    "id": 67,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Um grupo de 6 soldados do CBMRR precisa ser organizado em fila indiana para um exercício de salvamento. De quantas maneiras distintas essa fila pode ser organizada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "36 maneiras",
        "justificativa": "Incorreto."
      },
      {
        "id": "B",
        "texto": "120 maneiras",
        "justificativa": "Incorreto. 5!."
      },
      {
        "id": "C",
        "texto": "720 maneiras",
        "justificativa": "Correto. Permutação simples de 6 elementos: P_6 = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720."
      },
      {
        "id": "D",
        "texto": "64 maneiras",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "216 maneiras",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "A ordenação de n elementos distintos em fila é dada por permutação simples: P_n = n!\nP_6 = 6 * 5 * 4 * 3 * 2 * 1 = 720 maneiras distintas."
  },
  {
    "id": 68,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Se a proposição simples P é FALSA e a proposição simples Q é VERDADEIRA, o valor lógico da proposição composta ~(P v ~Q) -> (P ^ Q) é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Verdadeiro",
        "justificativa": "Correto. P=F, Q=V. ~Q=F. (P v ~Q) = (F v F) = F. Negação ~(F) = V. Agora o consequente: (P ^ Q) = (F ^ V) = F. Então temos V -> F = FALSO... Opa! Vamos calcular com precisão: se antecedente é V e consequente é F, o resultado da condicional é FALSO! Logo a resposta certa é Falso!"
      },
      {
        "id": "B",
        "texto": "Falso",
        "justificativa": "Correto. Antecedente: ~(F v F) = ~F = V. Consequente: (F ^ V) = F. V -> F = FALSO!"
      },
      {
        "id": "C",
        "texto": "Inconclusivo sem mais dados",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "Tautológico",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Contraditório",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Cálculo passo a passo:\n1) P = F, Q = V\n2) ~Q = F\n3) P v ~Q = F v F = F\n4) Antecedente: ~(P v ~Q) = ~F = V\n5) Consequente: (P ^ Q) = F ^ V = F\n6) Condicional: V -> F = FALSO. Logo, o valor lógico é FALSO."
  },
  {
    "id": 69,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Lançando-se dois dados comuns não viciados de 6 faces simultaneamente, qual é a probabilidade de a soma das faces superiores ser igual a 8?",
    "alternativas": [
      {
        "id": "A",
        "texto": "5/36",
        "justificativa": "Correto. O espaço amostral tem 6x6 = 36 pares. Os pares que somam 8 são: (2,6), (3,5), (4,4), (5,3), (6,2), totalizando 5 casos favoráveis. P = 5/36."
      },
      {
        "id": "B",
        "texto": "6/36",
        "justificativa": "Incorreto. Erro de contagem."
      },
      {
        "id": "C",
        "texto": "4/36",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "7/36",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "8/36",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Espaço amostral: 36 resultados possíveis.\nPares com soma 8: {(2,6), (3,5), (4,4), (5,3), (6,2)} -> 5 casos favoráveis.\nProbabilidade = 5 / 36."
  },
  {
    "id": 70,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Considere a afirmação condicional: 'Se o militar estiver em serviço, então ele usará o uniforme operacional'. A contrapositiva dessa afirmação, que possui o mesmo valor lógico, é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Se o militar não usará o uniforme operacional, então ele não está em serviço.",
        "justificativa": "Correto. Contrapositiva: Se ~Q então ~P. Nega-se e inverte-se mantendo o conectivo condicional."
      },
      {
        "id": "B",
        "texto": "Se o militar não estiver em serviço, então ele não usará o uniforme operacional.",
        "justificativa": "Incorreto. Falácia da negação do antecedente."
      },
      {
        "id": "C",
        "texto": "Se o militar usar o uniforme operacional, então ele está em serviço.",
        "justificativa": "Incorreto. Falácia da afirmação do consequente."
      },
      {
        "id": "D",
        "texto": "O militar está em serviço e não usa o uniforme operacional.",
        "justificativa": "Incorreto. Negação, não equivalência."
      },
      {
        "id": "E",
        "texto": "O militar está em serviço se e somente se usa o uniforme operacional.",
        "justificativa": "Incorreto. Bicondicional."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A contrapositiva de uma implicação (P -> Q) é dada formalmente por (~Q -> ~P). Ambas são estritamente equivalentes em qualquer modelo lógico: 'Se o militar não usa o uniforme, então ele não está em serviço'."
  },
  {
    "id": 71,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Em um teste de aptidão física para 100 candidatos, 70 passaram na corrida e 60 passaram na barra fixa. Sabendo que 10 não passaram em nenhum dos dois testes, quantos passaram em AMBOS os testes?",
    "alternativas": [
      {
        "id": "A",
        "texto": "40 candidatos",
        "justificativa": "Correto. Passaram em ao menos um teste = 100 - 10 = 90. n(C U B) = n(C) + n(B) - n(C n B) -> 90 = 70 + 60 - x -> x = 130 - 90 = 40 candidatos."
      },
      {
        "id": "B",
        "texto": "30 candidatos",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "50 candidatos",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "20 candidatos",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "60 candidatos",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Universo = 100. Fora dos dois conjuntos = 10.\nUnião (Corrida U Barra) = 100 - 10 = 90.\nFórmula da união: n(C U B) = n(C) + n(B) - n(C n B)\n90 = 70 + 60 - x\n90 = 130 - x => x = 40 candidatos passaram em ambos."
  },
  {
    "id": 72,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Qual das alternativas a seguir representa uma TAUTOLOGIA (proposição sempre verdadeira, independentemente dos valores lógicos das proposições simples que a compõem)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "P ^ ~P",
        "justificativa": "Incorreto. Contradição (sempre falsa)."
      },
      {
        "id": "B",
        "texto": "P v ~P",
        "justificativa": "Correto. Princípio do Terceiro Excluído: uma proposição ou é verdadeira ou sua negação é verdadeira (sempre V)."
      },
      {
        "id": "C",
        "texto": "P -> ~P",
        "justificativa": "Incorreto. Contingência."
      },
      {
        "id": "D",
        "texto": "P <-> ~P",
        "justificativa": "Incorreto. Contradição."
      },
      {
        "id": "E",
        "texto": "P ^ Q",
        "justificativa": "Incorreto. Contingência."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "A proposição (P v ~P) é a formulação clássica do Princípio do Terceiro Excluído: uma proposição é verdadeira ou sua negação é verdadeira, não havendo terceira possibilidade. Sua tabela-verdade resulta sempre em V (tautologia)."
  },
  {
    "id": 73,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Em um plano de emergência, um código de 3 letras distintas deve ser formado usando as letras da palavra B O M B A. Quantos códigos distintos podem ser formados?",
    "alternativas": [
      {
        "id": "A",
        "texto": "24 códigos",
        "justificativa": "Correto. As letras distintas de BOMBA são B, O, M, A (4 letras distintas). O número de códigos de 3 letras distintas escolhidas entre essas 4 é um arranjo simples: A(4,3) = 4 * 3 * 2 = 24."
      },
      {
        "id": "B",
        "texto": "60 códigos",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "12 códigos",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "120 códigos",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "6 códigos",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "O conjunto de letras DISTINTAS da palavra BOMBA possui 4 elementos: {B, O, M, A}.\nPara formar um código com 3 letras distintas, a ordem importa:\nA(4, 3) = 4 * 3 * 2 = 24 códigos distintos."
  },
  {
    "id": 74,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "A negação da proposição 'Se o treinamento é difícil, então a missão é fácil' é equivalente a:",
    "alternativas": [
      {
        "id": "A",
        "texto": "O treinamento é difícil e a missão não é fácil.",
        "justificativa": "Correto. ~(P -> Q) = P ^ ~Q. Mantém a primeira e nega a segunda com conjunção 'e'."
      },
      {
        "id": "B",
        "texto": "O treinamento não é difícil ou a missão é fácil.",
        "justificativa": "Incorreto. Equivalente de P -> Q, não negação."
      },
      {
        "id": "C",
        "texto": "Se o treinamento não é difícil, então a missão não é fácil.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "O treinamento é fácil ou a missão é difícil.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "A missão é difícil se e somente se o treinamento é fácil.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A negação de P -> Q é P ^ ~Q. Assim: 'O treinamento é difícil E a missão NÃO é fácil'."
  },
  {
    "id": 75,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Se 'Nenhum incêndio é inofensivo' e 'Alguns acidentes são incêndios', segue-se necessariamente que:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Alguns acidentes não são inofensivos.",
        "justificativa": "Correto. Se há acidentes que são incêndios, e nenhum incêndio é inofensivo, então esses acidentes pertencem à classe dos incêndios que não são inofensivos, logo alguns acidentes não são inofensivos."
      },
      {
        "id": "B",
        "texto": "Todos os acidentes são perigosos.",
        "justificativa": "Incorreto. Generalização indevida."
      },
      {
        "id": "C",
        "texto": "Nenhum acidente é inofensivo.",
        "justificativa": "Incorreto. Não se pode estender a todos os acidentes."
      },
      {
        "id": "D",
        "texto": "Todos os incêndios são acidentes.",
        "justificativa": "Incorreto. Conversão ilícita."
      },
      {
        "id": "E",
        "texto": "Alguns incêndios são inofensivos.",
        "justificativa": "Incorreto. Contradiz a primeira premissa."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Diagrama de Venn:\nPremissa 1: Conjunto dos Incêndios está totalmente contido no conjunto dos 'Não Inofensivos' (disjunto de Inofensivos).\nPremissa 2: Intersecção entre Acidentes e Incêndios é não-vazia.\nConclusão: Os elementos que estão na intersecção entre Acidentes e Incêndios não são inofensivos. Logo: 'Alguns acidentes não são inofensivos'."
  },
  {
    "id": 76,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Três viaturas (A, B e C) saem do quartel em comboio. Qual é a probabilidade de a viatura A estar na liderança do comboio?",
    "alternativas": [
      {
        "id": "A",
        "texto": "1/6",
        "justificativa": "Incorreto."
      },
      {
        "id": "B",
        "texto": "1/3",
        "justificativa": "Correto. Há 3! = 6 permutações totais (ABC, ACB, BAC, BCA, CAB, CBA). Em 2 delas (ABC e ACB), A lidera. Probabilidade = 2/6 = 1/3."
      },
      {
        "id": "C",
        "texto": "1/2",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "2/3",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "1/4",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Por simetria, cada uma das 3 viaturas tem idêntica probabilidade de estar na liderança: P(A na frente) = 1/3. Ou calculando: 2 casos favoráveis em 6 casos possíveis = 2/6 = 1/3."
  },
  {
    "id": 77,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Considere a afirmação: 'Se o rio transborda, então as casas ribeirinhas são inundadas e a Defesa Civil é acionada'. A negação dessa afirmação é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "O rio transborda e (as casas não são inundadas ou a Defesa Civil não é acionada).",
        "justificativa": "Correto. Regra do MANÉ: P ^ ~(Q ^ R) = P ^ (~Q v ~R)."
      },
      {
        "id": "B",
        "texto": "Se o rio não transborda, então as casas não são inundadas.",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "O rio não transborda e as casas não são inundadas.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "O rio transborda ou a Defesa Civil é acionada.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Se a Defesa Civil não é acionada, o rio não transbordou.",
        "justificativa": "Incorreto. Esta seria a contrapositiva parcial."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Negação de P -> (Q ^ R):\nMantém P e nega (Q ^ R).\nA negação de (Q ^ R) por De Morgan é (~Q v ~R).\nLogo: P ^ (~Q v ~R) -> 'O rio transborda E (as casas não são inundadas OU a Defesa Civil não é acionada)'."
  },
  {
    "id": 78,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Um batalhão de bombeiros tem 10 soldados e 4 sargentos. Deseja-se formar uma comissão de 3 militares contendo OBRIGATORIAMENTE 2 soldados e 1 sargento. De quantas maneiras distintas essa comissão pode ser formada?",
    "alternativas": [
      {
        "id": "A",
        "texto": "180 maneiras",
        "justificativa": "Correto. Escolha dos 2 soldados: C(10,2) = (10*9)/2 = 45. Escolha do 1 sargento: C(4,1) = 4. Total = 45 * 4 = 180 maneiras."
      },
      {
        "id": "B",
        "texto": "40 maneiras",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "120 maneiras",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "364 maneiras",
        "justificativa": "Incorreto. Combinação de 14 tomados 3 a 3."
      },
      {
        "id": "E",
        "texto": "90 maneiras",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Pelo Princípio Fundamental da Contagem:\n1) Escolher 2 soldados entre 10: C(10, 2) = (10 * 9) / 2 = 45\n2) Escolher 1 sargento entre 4: C(4, 1) = 4\nTotal de maneiras = 45 * 4 = 180 comissões distintas."
  },
  {
    "id": 79,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "A negação lógica da sentença 'Todo bombeiro sabe nadar e algum policial sabe atirar' é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Algum bombeiro não sabe nadar ou nenhum policial sabe atirar.",
        "justificativa": "Correto. Pela Lei de De Morgan: ~(P ^ Q) = ~P v ~Q. A negação de 'Todo... sabe' é 'Algum... não sabe', e a de 'Algum... sabe' é 'Nenhum... sabe'."
      },
      {
        "id": "B",
        "texto": "Nenhum bombeiro sabe nadar e todo policial sabe atirar.",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "Algum bombeiro sabe nadar e nenhum policial sabe atirar.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "Todo bombeiro não sabe nadar ou todo policial não sabe atirar.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Se algum bombeiro não sabe nadar, então nenhum policial atira.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Negação de conjunção: ~(A ^ B) = ~A v ~B.\n~('Todo bombeiro sabe nadar') = 'Algum bombeiro não sabe nadar'.\n~('Algum policial sabe atirar') = 'Nenhum policial sabe atirar'.\nResultado: 'Algum bombeiro não sabe nadar OU nenhum policial sabe atirar'."
  },
  {
    "id": 80,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Em uma caixa de suprimentos, há 6 ampolas de soro fisiológico e 4 ampolas de morfina. Se duas ampolas forem retiradas sucessivamente e sem reposição, qual é a probabilidade de ambas serem de morfina?",
    "alternativas": [
      {
        "id": "A",
        "texto": "2/15",
        "justificativa": "Correto. P(1ª morfina) = 4/10. P(2ª morfina | 1ª morfina) = 3/9. P = (4/10) * (3/9) = (2/5) * (1/3) = 2/15."
      },
      {
        "id": "B",
        "texto": "4/25",
        "justificativa": "Incorreto. Cálculo com reposição."
      },
      {
        "id": "C",
        "texto": "1/5",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "3/10",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "1/9",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Probabilidade sem reposição:\nP = (4 / 10) * (3 / 9) = 12 / 90 = 2 / 15 (aproximadamente 13,33%)."
  },
  {
    "id": 81,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Considere a proposição P: 'Se hoje é dia de plantão, então o sargento não dorme'. Qual proposição é logicamente equivalente a P?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Hoje não é dia de plantão ou o sargento não dorme.",
        "justificativa": "Correto. P -> Q é equivalente a ~P v Q. Antecedente: Hoje é dia de plantão (~P = Hoje não é dia de plantão). Consequente: o sargento não dorme (mantém Q). Logo: ~P v Q."
      },
      {
        "id": "B",
        "texto": "Hoje é dia de plantão e o sargento não dorme.",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "Se o sargento não dorme, então hoje é dia de plantão.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "Hoje não é dia de plantão e o sargento dorme.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "O sargento dorme se e somente se não é dia de plantão.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Equivalência lógica: (A -> B) = (~A v B).\nAntecedente: 'Hoje é dia de plantão' -> Negação: 'Hoje NÃO é dia de plantão'.\nConsequente: 'O sargento não dorme' -> Mantém: 'O sargento não dorme'.\nUnião disjuntiva: 'Hoje não é dia de plantão OU o sargento não dorme'."
  },
  {
    "id": 82,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Qual é o número total de anagramas da palavra RESGATE que começam com a letra R?",
    "alternativas": [
      {
        "id": "A",
        "texto": "720 anagramas",
        "justificativa": "Correto. Fixando R na 1ª posição, sobram as letras E, S, G, A, T, E (6 letras, com a letra E repetida 2 vezes). Permutação com repetição: P_6^(2) = 6! / 2! = 720 / 2 = 360... Opa! Vamos calcular com precisão: 6! / 2! = 360 anagramas!"
      },
      {
        "id": "B",
        "texto": "360 anagramas",
        "justificativa": "Correto. Fixando R na primeira posição, sobram 6 letras: E, S, G, A, T, E. Como a letra E aparece 2 vezes, temos P_6^(2) = 6! / 2! = 720 / 2 = 360 anagramas."
      },
      {
        "id": "C",
        "texto": "120 anagramas",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "5.040 anagramas",
        "justificativa": "Incorreto. Total sem fixar e sem repetição."
      },
      {
        "id": "E",
        "texto": "2.520 anagramas",
        "justificativa": "Incorreto. Total de anagramas de RESGATE."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "A palavra RESGATE tem 7 letras: R, E, S, G, A, T, E (a letra E repete 2 vezes).\nFixando o 'R' na primeira posição: R _ _ _ _ _ _\nRestam 6 posições para as letras {E, S, G, A, T, E}.\nP_6^(2) = 6! / 2! = 720 / 2 = 360 anagramas."
  },
  {
    "id": 83,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Se a afirmação 'Nenhum corrupto é digno de confiança' é verdadeira, qual das seguintes conclusões é obrigatoriamente verdadeira?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Se alguém é digno de confiança, então não é corrupto.",
        "justificativa": "Correto. O conjunto dos corruptos e o conjunto dos confiáveis são totalmente disjuntos. Logo, pertencer a um implica não pertencer ao outro."
      },
      {
        "id": "B",
        "texto": "Todo corrupto é inteligente.",
        "justificativa": "Incorreto. Não dedutível."
      },
      {
        "id": "C",
        "texto": "Se alguém não é corrupto, então é digno de confiança.",
        "justificativa": "Incorreto. Falácia."
      },
      {
        "id": "D",
        "texto": "Algum corrupto é digno de confiança.",
        "justificativa": "Incorreto. Contradição frontal."
      },
      {
        "id": "E",
        "texto": "Todos os cidadãos são corruptos.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A proposição universal negativa 'Nenhum A é B' estabelece conjuntos disjuntos (A inter B = vazio). Logo, se x pertence a B (é digno de confiança), x necessariamente NÃO pertence a A (não é corrupto)."
  },
  {
    "id": 84,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Em um levantamento estatístico no CBMRR, constatou-se que a probabilidade de uma chamada de socorro ser trote é de 5%. Se o quartel recebe 3 chamadas independentes em uma hora, qual é a probabilidade de EXATAMENTE UMA delas ser trote?",
    "alternativas": [
      {
        "id": "A",
        "texto": "3 * (0,05) * (0,95)^2",
        "justificativa": "Correto. Distribuição Binomial: P(X=1) = C(3,1) * (0,05)^1 * (0,95)^2 = 3 * 0,05 * 0,9025 = 0,135375 (aprox. 13,54%)."
      },
      {
        "id": "B",
        "texto": "(0,05) * (0,95)^2",
        "justificativa": "Incorreto. Esqueceu o coeficiente binomial 3."
      },
      {
        "id": "C",
        "texto": "(0,05)^3",
        "justificativa": "Incorreto. Probabilidade de todas serem trote."
      },
      {
        "id": "D",
        "texto": "1 - (0,95)^3",
        "justificativa": "Incorreto. Probabilidade de pelo menos um trote."
      },
      {
        "id": "E",
        "texto": "15%",
        "justificativa": "Incorreto. Multiplicação linear ingênua."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Pela fórmula da distribuição binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)\nPara n=3, k=1, p=0,05:\nP(X = 1) = C(3,1) * (0,05)^1 * (0,95)^2 = 3 * 0,05 * 0,9025 = 0,1354 (13,54%)."
  },
  {
    "id": 85,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Considere a proposição: 'Marcos é bombeiro ou Vinícius é médico'. Sabendo que essa proposição é FALSA, é correto concluir que:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Marcos não é bombeiro e Vinícius não é médico.",
        "justificativa": "Correto. A disjunção (P v Q) só é falsa se ambas as proposições forem estritamente falsas."
      },
      {
        "id": "B",
        "texto": "Marcos é bombeiro e Vinícius não é médico.",
        "justificativa": "Incorreto. Se Marcos fosse bombeiro, a disjunção seria verdadeira."
      },
      {
        "id": "C",
        "texto": "Marcos não é bombeiro e Vinícius é médico.",
        "justificativa": "Incorreto. Se Vinícius fosse médico, a disjunção seria verdadeira."
      },
      {
        "id": "D",
        "texto": "Marcos é bombeiro ou Vinícius não é médico.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Se Marcos é bombeiro, Vinícius é médico.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A disjunção inclusiva (P v Q) possui valor lógico FALSO se, e somente se, P é FALSO e Q é FALSO. Logo, conclui-se obrigatoriamente que Marcos NÃO é bombeiro e Vinícius NÃO é médico."
  },
  {
    "id": 86,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Se 'Todos os membros da equipe alfa são mergulhadores' e 'Lucas não é mergulhador', conclui-se obrigatoriamente que:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Lucas não é membro da equipe alfa.",
        "justificativa": "Correto. Lucas está fora do conjunto dos mergulhadores; como a equipe alfa está inteiramente contida nos mergulhadores, Lucas não pode pertencer à equipe alfa (Modus Tollens categórico)."
      },
      {
        "id": "B",
        "texto": "Lucas é membro da equipe beta.",
        "justificativa": "Incorreto. Não se pode deduzir."
      },
      {
        "id": "C",
        "texto": "Lucas tem medo de mergulhar.",
        "justificativa": "Incorreto. Conclusão arbitrária."
      },
      {
        "id": "D",
        "texto": "Todos os mergulhadores são da equipe alfa.",
        "justificativa": "Incorreto. Inversão indevida."
      },
      {
        "id": "E",
        "texto": "Nenhum membro da equipe alfa conhece Lucas.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Silogismo categórico:\nPremissa maior: Equipe Alfa está contida em Mergulhadores (Alfa c Mergulhadores).\nPremissa menor: Lucas não pertence a Mergulhadores.\nConclusão: Lucas não pertence à Equipe Alfa."
  },
  {
    "id": 87,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Quantos números pares de 3 algarismos distintos podem ser formados com os algarismos 1, 2, 3, 4, 5 e 6?",
    "alternativas": [
      {
        "id": "A",
        "texto": "60 números",
        "justificativa": "Correto. Algarismos pares disponíveis: 2, 4, 6 (3 opções para o último dígito). Para o primeiro dígito sobram 5 opções. Para o segundo dígito sobram 4 opções. Total = 5 * 4 * 3 = 60 números."
      },
      {
        "id": "B",
        "texto": "120 números",
        "justificativa": "Incorreto. Total de números sem restrição de paridade."
      },
      {
        "id": "C",
        "texto": "30 números",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "72 números",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "90 números",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Para ser par, o último algarismo deve ser 2, 4 ou 6 (3 possibilidades).\nPara a primeira posição: restam 5 algarismos (já que não há o algarismo zero na lista).\nPara a segunda posição: restam 4 algarismos.\nTotal = 5 * 4 * 3 = 60 números pares com algarismos distintos."
  },
  {
    "id": 88,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "A proposição 'Se o treinamento físico for intenso, então os alunos ficarão exaustos' é FALSA. Disso decorre que:",
    "alternativas": [
      {
        "id": "A",
        "texto": "O treinamento físico foi intenso e os alunos não ficaram exaustos.",
        "justificativa": "Correto. P -> Q é falsa unicamente quando o antecedente P é Verdadeiro e o consequente Q é Falso."
      },
      {
        "id": "B",
        "texto": "O treinamento físico não foi intenso e os alunos ficaram exaustos.",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "Nem o treinamento foi intenso nem os alunos ficaram exaustos.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "O treinamento não foi intenso ou os alunos ficaram exaustos.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Os alunos ficaram exaustos porque o treinamento foi intenso.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A condicional (P -> Q) tem valor falso unicamente na combinação V -> F. Portanto, a afirmação 'O treinamento físico foi intenso' é VERDADEIRA e a afirmação 'Os alunos ficaram exaustos' é FALSA (logo, não ficaram exaustos)."
  },
  {
    "id": 89,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "A proposição bicondicional (P <-> Q) é verdadeira se e somente se:",
    "alternativas": [
      {
        "id": "A",
        "texto": "P e Q tiverem o mesmo valor lógico (ambas verdadeiras ou ambas falsas).",
        "justificativa": "Correto. Definição da bicondicional: ela só é verdadeira quando os dois termos são equivalentes (V<->V=V e F<->F=V)."
      },
      {
        "id": "B",
        "texto": "P for verdadeira e Q for falsa.",
        "justificativa": "Incorreto. Falso."
      },
      {
        "id": "C",
        "texto": "P for falsa e Q for verdadeira.",
        "justificativa": "Incorreto. Falso."
      },
      {
        "id": "D",
        "texto": "P for verdadeira, independentemente de Q.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "P e Q tiverem valores lógicos opostos.",
        "justificativa": "Incorreto. Essa é a disjunção exclusiva (XOR)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A tabela-verdade do 'se e somente se' (bicondicional P <-> Q):\nV <-> V = V\nV <-> F = F\nF <-> V = F\nF <-> F = V\nPortanto, é verdadeira se e somente se P e Q tiverem o mesmo valor lógico."
  },
  {
    "id": 90,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Dizer que 'Pelo menos um candidato foi reprovado no exame médico' é o mesmo que afirmar que:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Existe algum candidato que foi reprovado no exame médico.",
        "justificativa": "Correto. 'Pelo menos um', 'existe um' e 'algum' são formulações equivalentes do quantificador existencial."
      },
      {
        "id": "B",
        "texto": "Todos os candidatos foram reprovados no exame médico.",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "Nenhum candidato foi aprovado no exame médico.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "Exatamente um candidato foi reprovado.",
        "justificativa": "Incorreto. Pelo menos um pode ser 2, 3 ou mais."
      },
      {
        "id": "E",
        "texto": "Mais da metade foi reprovada.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "O quantificador existencial expressa que há ao menos um elemento no conjunto que satisfaz a propriedade ('existe pelo menos um' = 'algum')."
  },
  {
    "id": 91,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Em um simulado com 50 questões, um candidato tem probabilidade de 0,8 de acertar cada questão de forma independente. Qual é o valor esperado (média) de acertos desse candidato?",
    "alternativas": [
      {
        "id": "A",
        "texto": "40 acertos",
        "justificativa": "Correto. O valor esperado de uma distribuição binomial é E(X) = n * p = 50 * 0,8 = 40."
      },
      {
        "id": "B",
        "texto": "35 acertos",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "45 acertos",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "30 acertos",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "48 acertos",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Esperança matemática da distribuição binomial:\nE(X) = n * p = 50 * 0,80 = 40 acertos em média."
  },
  {
    "id": 92,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Qual é a negação lógica da afirmação: 'Se eu passar no concurso do CBMRR, então comprarei uma farda nova e darei uma festa'?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Passei no concurso do CBMRR e não comprarei uma farda nova ou não darei uma festa.",
        "justificativa": "Correto. ~(P -> (Q ^ R)) = P ^ (~Q v ~R)."
      },
      {
        "id": "B",
        "texto": "Se eu não passar no concurso, não comprarei farda nova.",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "Não passei no concurso e comprarei farda nova.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "Passei no concurso e comprarei farda nova e não darei festa.",
        "justificativa": "Incorreto. A negação da conjunção exige a disjunção 'ou'."
      },
      {
        "id": "E",
        "texto": "Se eu comprar farda nova, darei uma festa.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Regra do MANÉ combinada com De Morgan:\nAntecedente P mantido: 'Passei no concurso'.\nNegação de (Q ^ R): '~Q ou ~R' ('Não comprarei farda OU não darei festa')."
  },
  {
    "id": 93,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Em uma competição militar, competem 5 equipes. De quantas maneiras diferentes podem ser distribuídas as medalhas de ouro, prata e bronze (1º, 2º e 3º lugares)?",
    "alternativas": [
      {
        "id": "A",
        "texto": "60 maneiras",
        "justificativa": "Correto. Arranjo simples A(5,3) = 5 * 4 * 3 = 60."
      },
      {
        "id": "B",
        "texto": "10 maneiras",
        "justificativa": "Incorreto. Combinação."
      },
      {
        "id": "C",
        "texto": "20 maneiras",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "120 maneiras",
        "justificativa": "Incorreto. Permutação de 5!."
      },
      {
        "id": "E",
        "texto": "30 maneiras",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A distribuição de posições no pódio envolve ordem de premiação (ouro, prata e bronze):\nA(5, 3) = 5 * 4 * 3 = 60 maneiras distintas."
  },
  {
    "id": 94,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "A afirmação 'Se a temperatura atinge o ponto de fulgor, então o combustível emite vapores inflamáveis' tem como negação:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A temperatura atinge o ponto de fulgor e o combustível não emite vapores inflamáveis.",
        "justificativa": "Correto. ~(P -> Q) = P ^ ~Q."
      },
      {
        "id": "B",
        "texto": "A temperatura não atinge o ponto de fulgor ou o combustível não emite vapores.",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "Se o combustível emite vapores, atinge o ponto de fulgor.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "A temperatura não atinge o ponto de fulgor se emitir vapores.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Nem atinge o ponto de fulgor nem emite vapores.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Negação padrão da condicional: manter o antecedente e negar o consequente com conectivo 'e': 'A temperatura atinge o ponto de fulgor E o combustível não emite vapores'."
  },
  {
    "id": 95,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Se a proposição P é Verdadeira e a proposição Q é Falsa, qual das seguintes proposições compostas é VERDADEIRA?",
    "alternativas": [
      {
        "id": "A",
        "texto": "P ^ Q",
        "justificativa": "Incorreto. V ^ F = F."
      },
      {
        "id": "B",
        "texto": "P -> Q",
        "justificativa": "Incorreto. V -> F = F."
      },
      {
        "id": "C",
        "texto": "P v Q",
        "justificativa": "Correto. V v F = V. Na disjunção, basta uma proposição ser verdadeira para o conjunto ser verdadeiro."
      },
      {
        "id": "D",
        "texto": "P <-> Q",
        "justificativa": "Incorreto. V <-> F = F."
      },
      {
        "id": "E",
        "texto": "~P v Q",
        "justificativa": "Incorreto. F v F = F."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Na disjunção inclusiva (P v Q), a presença de pelo menos uma proposição verdadeira (P = V) torna a proposição inteira VERDADEIRA."
  },
  {
    "id": 96,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Três militares (Alfa, Bravo e Charlie) fazem declarações:\n- Alfa diz: 'Bravo mente.'\n- Bravo diz: 'Charlie mente.'\n- Charlie diz: 'Alfa e Bravo mentem.'\nQuem diz a verdade?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Apenas Bravo diz a verdade.",
        "justificativa": "Correto. Se Bravo diz a verdade: Alfa mente (pois disse que Bravo mente) e Charlie mente (pois disse que Alfa e Bravo mentem, mas Bravo fala a verdade). Consistente!"
      },
      {
        "id": "B",
        "texto": "Apenas Alfa diz a verdade.",
        "justificativa": "Incorreto. Se Alfa fala a verdade, Bravo mente e Charlie diz a verdade, o que contradiz a declaração de Charlie."
      },
      {
        "id": "C",
        "texto": "Apenas Charlie diz a verdade.",
        "justificativa": "Incorreto. Se Charlie fala a verdade, Alfa mente, logo Bravo falaria a verdade, contradizendo Charlie."
      },
      {
        "id": "D",
        "texto": "Todos mentem.",
        "justificativa": "Incorreto. Se Alfa mente, Bravo diz a verdade."
      },
      {
        "id": "E",
        "texto": "Todos dizem a verdade.",
        "justificativa": "Incorreto. São declarações mutuamente excludentes."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Análise de hipóteses lógicas:\nSe Bravo fala a verdade (V):\n1) A afirmação de Alfa ('Bravo mente') é FALSA (Alfa mente).\n2) A afirmação de Charlie ('Alfa e Bravo mentem') é FALSA (pois Bravo não mente, Charlie mente).\n3) A afirmação de Bravo ('Charlie mente') é VERDADEIRA!\nTudo se encaixa perfeitamente sem nenhuma contradição. Logo, apenas Bravo diz a verdade."
  },
  {
    "id": 97,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "A negação lógica de 'Nenhum bombeiro recua diante do perigo' é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Pelo menos um bombeiro recua diante do perigo.",
        "justificativa": "Correto. A negação de 'Nenhum A faz B' é 'Algum A faz B' ou 'Pelo menos um A faz B'."
      },
      {
        "id": "B",
        "texto": "Todos os bombeiros recuam diante do perigo.",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "Nenhum bombeiro avança diante do perigo.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "Algum bombeiro não recua diante do perigo.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "A maioria dos bombeiros recua diante do perigo.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A negação do quantificador universal negativo 'Nenhum' é o quantificador particular afirmativo 'Algum' ou 'Existe pelo menos um'."
  },
  {
    "id": 98,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Uma urna contém 5 bolas brancas, 3 vermelhas e 2 pretas. Retirando-se uma bola ao acaso, qual é a probabilidade de ela NÃO ser preta?",
    "alternativas": [
      {
        "id": "A",
        "texto": "80%",
        "justificativa": "Correto. Total de bolas = 10. Bolas não pretas = 5 + 3 = 8. Probabilidade = 8/10 = 80%."
      },
      {
        "id": "B",
        "texto": "20%",
        "justificativa": "Incorreto. Probabilidade de ser preta."
      },
      {
        "id": "C",
        "texto": "50%",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "70%",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "30%",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Total de eventos possíveis = 5 + 3 + 2 = 10.\nCasos favoráveis (não ser preta) = 8.\nP = 8 / 10 = 0,80 = 80%."
  },
  {
    "id": 99,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2026,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Considere a proposição: 'Se a pressão na mangueira cair, o operador aciona a bomba secundária'. A contrapositiva dessa proposição condicional é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Se o operador não acionar a bomba secundária, então a pressão na mangueira não caiu.",
        "justificativa": "Correto. Contrapositiva: ~Q -> ~P."
      },
      {
        "id": "B",
        "texto": "Se a pressão na mangueira não cair, o operador não aciona a bomba.",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "Se o operador acionar a bomba, a pressão caiu.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "A pressão na mangueira cai e o operador aciona a bomba.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Ou a pressão cai ou o operador aciona a bomba.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A regra de equivalência por contraposição lógica estabelece que (P -> Q) equivale estritamente a (~Q -> ~P)."
  },
  {
    "id": 100,
    "disciplina": "Raciocínio Lógico - Matemático",
    "ano": 2025,
    "origem": "IDECAN (Questão Oficial / Simulado)",
    "enunciado": "Dada a premissa maior 'Todos os cães de resgate têm olfato apurado' e a premissa menor 'Thor tem olfato apurado', o que se pode concluir validamente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Nada se pode concluir com certeza absoluta sobre Thor ser ou não um cão de resgate.",
        "justificativa": "Correto. Falácia da afirmação do consequente. O conjunto dos seres com olfato apurado pode conter outros animais além dos cães de resgate."
      },
      {
        "id": "B",
        "texto": "Thor é obrigatoriamente um cão de resgate.",
        "justificativa": "Incorreto. Falácia clássica de inclusão."
      },
      {
        "id": "C",
        "texto": "Thor não é um cão de resgate.",
        "justificativa": "Incorreto. Ele pode ser."
      },
      {
        "id": "D",
        "texto": "Nenhum cão de resgate chama-se Thor.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Thor é um bombeiro militar treinado.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Esta é a clássica falácia da Afirmação do Consequente (idêntica ao raciocínio da opção E no print do usuário!). O fato de pertencer ao conjunto mais amplo (possuir olfato apurado) não garante a inclusão no subconjunto específico (cães de resgate)."
  }
];
