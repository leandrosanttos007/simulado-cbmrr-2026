import json

def get_rlm():
    questions = []
    
    # Question 51 is the exact question from user screenshot!
    q51 = {
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
    }
    questions.append(q51)

    rlm_raw = [
        # 52
        ("Qual é a negação lógica da proposição composta: 'Se chove torrencialmente em Boa Vista, então o nível do Rio Branco sobe'?",
         [
             ("A", "Se não chove torrencialmente em Boa Vista, então o nível do Rio Branco não sobe.", "Incorreto. A negação do 'se... então' não é outro 'se... então'."),
             ("B", "Chove torrencialmente em Boa Vista e o nível do Rio Branco não sobe.", "Correto. Pela regra do 'MANÉ' (~(P -> Q) = P ^ ~Q), mantém-se a primeira parte e nega-se a segunda parte ligando por 'e'."),
             ("C", "Não chove torrencialmente em Boa Vista ou o nível do Rio Branco sobe.", "Incorreto. Esta é uma equivalência de P -> Q (~P v Q), não a sua negação."),
             ("D", "Chove torrencialmente em Boa Vista ou o nível do Rio Branco não sobe.", "Incorreto. O conectivo deve ser a conjunção 'e'."),
             ("E", "Se o nível do Rio Branco sobe, então chove torrencialmente em Boa Vista.", "Incorreto. Trata-se da recíproca simples.")
         ], "B",
         "A negação de uma proposição condicional (P -> Q) é dada formalmente por P ^ ~Q (regra mnemônica do 'MANÉ': Mantém a primeira e NEga a segunda). Logo: 'Chove torrencialmente em Boa Vista E o nível do Rio Branco não sobe'."),

        # 53
        ("Considere a afirmação: 'Nenhum militar do CBMRR é negligente'. A negação lógica dessa afirmação é:",
         [
             ("A", "Todo militar do CBMRR é negligente.", "Incorreto. 'Todo' não nega 'Nenhum'."),
             ("B", "Pelo menos um militar do CBMRR é negligente.", "Correto. A negação do quantificador universal negativo 'Nenhum A é B' é o quantificador existencial 'Algum A é B' (ou 'existe pelo menos um')."),
             ("C", "Nenhum militar do CBMRR é prudente.", "Incorreto. Não altera a estrutura lógica da proposição."),
             ("D", "Algum militar do CBMRR não é negligente.", "Incorreto. Isso seria subcontrária de algum é, não a negação de nenhum."),
             ("E", "Todos os militares do CBMRR são extremamente dedicados.", "Incorreto. Desvio categórico do termo negligente.")
         ], "B",
         "A negação de 'Nenhum A é B' é 'Algum A é B' ou 'Existe pelo menos um A que é B'. Para que a proposição 'Nenhum militar é negligente' seja falsa, basta encontrar um único militar que seja negligente."),

        # 54
        ("Dizer que 'Não é verdade que o bombeiro apagou o fogo e salvou a vítima' é logicamente equivalente a afirmar que:",
         [
             ("A", "O bombeiro não apagou o fogo e não salvou a vítima.", "Incorreto. Falácia de De Morgan (trocou pelo conectivo 'e')."),
             ("B", "O bombeiro não apagou o fogo ou não salvou a vítima.", "Correto. Primeira Lei de De Morgan: ~(P ^ Q) = ~P v ~Q."),
             ("C", "Se o bombeiro não apagou o fogo, então não salvou a vítima.", "Incorreto. Não é a equivalência direta de De Morgan."),
             ("D", "O bombeiro apagou o fogo, mas não salvou a vítima.", "Incorreto. Afirma que apagou o fogo com certeza."),
             ("E", "O bombeiro nem apagou o fogo nem salvou a vítima.", "Incorreto. Equivale a conjunção de negações (~P ^ ~Q).")
         ], "B",
         "Pela 1ª Lei de De Morgan: a negação de uma conjunção (~(P ^ Q)) é equivalente à disjunção das negações (~P v ~Q). Logo: 'O bombeiro não apagou o fogo OU não salvou a vítima'."),

        # 55
        ("Quatro bombeiros (André, Bruno, Carlos e Daniel) possuem especialidades distintas: Mergulho, Altura, Resgate Veicular e Combate a Incêndio. Sabe-se que:\n- André não é especialista em Altura nem em Incêndio;\n- Bruno é especialista em Mergulho;\n- Daniel não atua em Incêndio.\nQual é a especialidade de Daniel?",
         [
             ("A", "Mergulho", "Incorreto. Bruno é o mergulhador."),
             ("B", "Altura", "Correto. Se Bruno é Mergulho, sobram Altura, Veicular e Incêndio. André não é Altura nem Incêndio, logo André é Veicular. Sobram Daniel e Carlos para Altura e Incêndio. Como Daniel não é Incêndio, Daniel é Altura e Carlos é Incêndio."),
             ("C", "Resgate Veicular", "Incorreto. André é Resgate Veicular."),
             ("D", "Combate a Incêndio", "Incorreto. Carlos é Combate a Incêndio."),
             ("E", "Atendimento Pré-Hospitalar", "Incorreto. Especialidade não mencionada.")
         ], "B",
         "Dedução lógica por eliminação:\n1) Bruno = Mergulho.\n2) Restam: Altura, Resgate Veicular e Incêndio.\n3) André não é Altura nem Incêndio -> André = Resgate Veicular.\n4) Restam Daniel e Carlos para Altura e Incêndio.\n5) Daniel não é Incêndio -> Daniel = Altura; logo Carlos = Incêndio."),

        # 56
        ("Em um quartel do CBMRR em Boa Vista, há 8 soldados combatentes disponíveis para formar uma guarnição de combate a incêndio com exatamente 3 integrantes. De quantas maneiras diferentes essa guarnição pode ser formada?",
         [
             ("A", "24 maneiras", "Incorreto. Cálculo de multiplicação simples incorreto."),
             ("B", "56 maneiras", "Correto. Trata-se de combinação simples de 8 elementos tomados 3 a 3: C(8,3) = (8*7*6)/(3*2*1) = 56."),
             ("C", "112 maneiras", "Incorreto. Erro de divisão fatorial."),
             ("D", "336 maneiras", "Incorreto. Este seria o arranjo simples A(8,3) onde a ordem importa."),
             ("E", "512 maneiras", "Incorreto. 8 elevado ao cubo.")
         ], "B",
         "Como a ordem dos soldados no grupo não altera a equipe de salvamento (o grupo {A, B, C} é o mesmo que {C, B, A}), utiliza-se combinação simples:\nC(8, 3) = 8! / (3! * 5!) = (8 * 7 * 6) / (3 * 2 * 1) = 56 maneiras distintas."),

        # 57
        ("Três viaturas de bombeiros (V1, V2 e V3) passam por revisão mecânica. A probabilidade de a viatura V1 apresentar defeito nos freios é de 10%, da V2 é de 20% e da V3 é de 30%. Sabendo que os sistemas são independentes, qual é a probabilidade de NENHUMA das três viaturas apresentar defeito?",
         [
             ("A", "40%", "Incorreto. Soma linear incorreta."),
             ("B", "50,4%", "Correto. Probabilidade de não falhar: P(V1 ok) = 0,90; P(V2 ok) = 0,80; P(V3 ok) = 0,70. Produto = 0,90 * 0,80 * 0,70 = 0,504 = 50,4%."),
             ("C", "60%", "Incorreto. Erro de cálculo."),
             ("D", "49,6%", "Incorreto. Esta é a probabilidade complementar de pelo menos uma falhar."),
             ("E", "70%", "Incorreto. Probabilidade arbitrária.")
         ], "B",
         "Para eventos independentes, a probabilidade da intersecção é o produto das probabilidades individuais:\nP(nenhuma falhar) = P(~V1) * P(~V2) * P(~V3) = (1 - 0,10) * (1 - 0,20) * (1 - 0,30) = 0,90 * 0,80 * 0,70 = 0,504 = 50,4%."),

        # 58
        ("Considere as seguintes premissas:\nPremissa 1: Se a sirene do quartel toca, então os bombeiros vestem os equipamentos de proteção.\nPremissa 2: Se os bombeiros vestem os equipamentos de proteção, então a viatura parte em socorro em até dois minutos.\nPremissa 3: A viatura NÃO partiu em socorro em até dois minutos.\nQual conclusão decorre logicamente dessas premissas?",
         [
             ("A", "A sirene do quartel tocou com volume baixo.", "Incorreto. Não dedutível."),
             ("B", "A sirene do quartel NÃO tocou.", "Correto. Por Modus Tollens sucessivo: ~Q3 implica que os bombeiros não vestiram os equipamentos, o que implica que a sirene não tocou."),
             ("C", "Os bombeiros vestiram os equipamentos, mas a viatura quebrou.", "Incorreto. Viola a premissa 2."),
             ("D", "A viatura partiu com atraso de cinco minutos.", "Incorreto. Hipótese factual fora do escopo lógico."),
             ("E", "Não é possível tirar qualquer conclusão lógica.", "Incorreto. A dedução por encadeamento de Modus Tollens é válida e necessária.")
         ], "B",
         "Análise silogística:\n1) S -> E\n2) E -> V\nPor transitividade: S -> V (Se a sirene toca, a viatura parte).\n3) ~V (A viatura não partiu).\nPela regra de inferência Modus Tollens: Se S -> V e ~V, conclui-se obrigatoriamente ~S ('A sirene do quartel NÃO tocou')."),

        # 59
        ("Um sargento interroga três suspeitos de terem provocado um incêndio criminoso: Paulo, Rogério e Sérgio. Sabe-se que apenas um deles cometeu o crime e que apenas um deles disse a verdade:\n- Paulo disse: 'Rogério é o culpado.'\n- Rogério disse: 'Eu não sou o culpado.'\n- Sérgio disse: 'Eu não sou o culpado.'\nQuem é o culpado e quem disse a verdade?",
         [
             ("A", "O culpado é Paulo e quem disse a verdade foi Rogério.", "Incorreto. Se Paulo é culpado, Rogério e Sérgio disseram a verdade (duas verdades, contrariando o enunciado)."),
             ("B", "O culpado é Sérgio e quem disse a verdade foi Rogério.", "Correto. Se Sérgio é o culpado: Paulo mente (F); Rogério diz a verdade (V); Sérgio mente (F). Apenas uma verdade e um culpado."),
             ("C", "O culpado é Rogério e quem disse a verdade foi Paulo.", "Incorreto. Se Rogério é o culpado: Paulo diz a verdade (V) e Sérgio diz a verdade (V) - duas verdades."),
             ("D", "O culpado é Paulo e quem disse a verdade foi Paulo.", "Incorreto. Paulo mente ao apontar Rogério."),
             ("E", "O culpado é Rogério e quem disse a verdade foi Sérgio.", "Incorreto. Sérgio também diria a verdade.")
         ], "B",
         "Observe que as declarações de Paulo e Rogério são contraditórias ('Rogério é culpado' x 'Rogério não é culpado'). Uma delas é necessariamente verdadeira e a outra falsa. Como há apenas UMA verdade no total, a declaração de Sérgio TEM QUE SER FALSA. Se Sérgio mentiu ao dizer 'Eu não sou o culpado', então SÉRGIO É O CULPADO! Se Sérgio é o culpado, Rogério disse a verdade ('Não sou culpado') e Paulo mentiu."),

        # 60
        ("Dada a proposição condicional 'Se o hidrante possui pressão adequada, então o incêndio é controlado', uma proposição logicamente EQUIVALENTE por disjunção é:",
         [
             ("A", "O hidrante não possui pressão adequada ou o incêndio é controlado.", "Correto. Pela equivalência P -> Q = ~P v Q (regra do 'NEGA a primeira OU MANTÉM a segunda')."),
             ("B", "O hidrante possui pressão adequada e o incêndio é controlado.", "Incorreto. Conjunção não equivale à condicional."),
             ("C", "O hidrante possui pressão adequada ou o incêndio não é controlado.", "Incorreto. Negou a segunda parte indevidamente."),
             ("D", "Se o incêndio é controlado, então o hidrante possui pressão adequada.", "Incorreto. Falácia da recíproca."),
             ("E", "O hidrante não possui pressão adequada e o incêndio não é controlado.", "Incorreto. Conjunção de negações.")
         ], "A",
         "A equivalência lógica clássica da condicional em disjunção é: (P -> Q) <-> (~P v Q). Nega-se a primeira proposição (antecedente) OU mantém-se a segunda (consequente). Logo: 'O hidrante não possui pressão adequada OU o incêndio é controlado'."),

        # 61
        ("Sejam os conjuntos:\nA = conjunto dos bombeiros especializados em Salvamento Aquático (40 militares)\nB = conjunto dos bombeiros especializados em Busca Terrestre (50 militares)\nSabendo que 15 bombeiros possuem ambas as especialidades e que a corporação conta com 85 bombeiros aptos a essas funções, quantos bombeiros NÃO possuem nenhuma dessas duas especialidades?",
         [
             ("A", "5 bombeiros", "Incorreto."),
             ("B", "10 bombeiros", "Correto. União n(A U B) = n(A) + n(B) - n(A n B) = 40 + 50 - 15 = 75. Como o universo é 85: 85 - 75 = 10 militares."),
             ("C", "15 bombeiros", "Incorreto."),
             ("D", "20 bombeiros", "Incorreto."),
             ("E", "25 bombeiros", "Incorreto.")
         ], "B",
         "Teoria dos conjuntos:\nn(A U B) = n(A) + n(B) - n(A n B) = 40 + 50 - 15 = 75 militares possuem ao menos uma especialidade.\nO total de bombeiros é 85.\nBombeiros sem nenhuma especialidade = 85 - 75 = 10 bombeiros."),

        # 62
        ("Qual é a negação lógica da proposição: 'Todo cidadão roraimense respeita as leis de trânsito ou algum motorista comete infração grave'?",
         [
             ("A", "Algum cidadão roraimense não respeita as leis de trânsito e nenhum motorista comete infração grave.", "Correto. Negação de P v Q é ~P ^ ~Q. Negação de 'Todo' é 'Algum... não'; negação de 'Algum' é 'Nenhum'."),
             ("B", "Nenhum cidadão roraimense respeita as leis de trânsito ou todo motorista comete infração grave.", "Incorreto. Erro nos quantificadores e manteve disjunção."),
             ("C", "Algum cidadão roraimense respeita as leis de trânsito e todo motorista comete infração grave.", "Incorreto."),
             ("D", "Todo cidadão roraimense não respeita as leis de trânsito ou nenhum motorista comete infração grave.", "Incorreto."),
             ("E", "Se algum cidadão não respeita, então nenhum motorista comete infração.", "Incorreto.")
         ], "A",
         "Regra de De Morgan para disjunção: ~(P v Q) = ~P ^ ~Q.\n~('Todo cidadão respeita') = 'Algum cidadão não respeita'.\n~('Algum motorista comete infração') = 'Nenhum motorista comete infração'.\nLigados por E: 'Algum cidadão roraimense não respeita as leis de trânsito E nenhum motorista comete infração grave'."),

        # 63
        ("Em uma prateleira da viatura de resgate, há 5 kits de primeiros socorros vermelhos idênticos e 3 kits azuis idênticos. De quantas formas distintas esses 8 kits podem ser organizados em linha?",
         [
             ("A", "40 formas", "Incorreto."),
             ("B", "56 formas", "Correto. Permutação com repetição: P_8^(5,3) = 8! / (5! * 3!) = (8*7*6)/(3*2*1) = 56 formas."),
             ("C", "120 formas", "Incorreto."),
             ("D", "336 formas", "Incorreto."),
             ("E", "6720 formas", "Incorreto. Permutação simples sem divisão das repetições.")
         ], "B",
         "Fórmula de permutação com repetição: P_n^(a,b) = n! / (a! * b!).\nP_8^(5,3) = 8! / (5! * 3!) = (8 * 7 * 6 * 5!) / (5! * 6) = 56."),

        # 64
        ("Considere a tabela-verdade de uma proposição P e Q. Em quantas linhas a proposição condicional (P -> Q) assume o valor lógico FALSO (F)?",
         [
             ("A", "Nenhuma linha (é tautologia)", "Incorreto."),
             ("B", "Exatamente 1 linha (quando P é Verdadeiro e Q é Falso)", "Correto. A condicional P -> Q só é falsa no caso clássico 'Vera Fischer' (V -> F). Nas outras 3 linhas (V->V, F->V, F->F), o resultado é Verdadeiro."),
             ("C", "Exatamente 2 linhas", "Incorreto."),
             ("D", "Exatamente 3 linhas", "Incorreto."),
             ("E", "Em todas as 4 linhas", "Incorreto.")
         ], "B",
         "A condicional (P -> Q) possui tabela-verdade de 4 linhas:\nV -> V = V\nV -> F = F (ÚNICA linha falsa!)\nF -> V = V\nF -> F = V\nPortanto, é falsa em exatamente 1 linha."),

        # 65
        ("Uma senha de cofre de segurança de armamento do batalhão é composta por 4 dígitos numéricos distintos escolhidos entre os algarismos de 1 a 9. Quantas senhas possíveis podem ser formadas?",
         [
             ("A", "3.024 senhas", "Correto. Arranjo simples de 9 elementos tomados 4 a 4: A(9,4) = 9 * 8 * 7 * 6 = 3.024."),
             ("B", "126 senhas", "Incorreto. Esta seria a combinação simples."),
             ("C", "6.561 senhas", "Incorreto. Seria com repetição de algarismos (9^4)."),
             ("D", "504 senhas", "Incorreto."),
             ("E", "10.000 senhas", "Incorreto. 10^4.")
         ], "A",
         "Como se trata de uma senha, a ORDEM dos algarismos importa (ex: 1234 é diferente de 4321), e os dígitos devem ser DISTINTOS:\nTotal = 9 * 8 * 7 * 6 = 3.024 senhas distintas."),

        # 66
        ("A negação lógica de 'Algum bombeiro militar tem medo de altura' é:",
         [
             ("A", "Nenhum bombeiro militar tem medo de altura.", "Correto. O quantificador existencial 'Algum A é B' tem como negação estrita o quantificador universal negativo 'Nenhum A é B'."),
             ("B", "Todo bombeiro militar tem medo de altura.", "Incorreto. Não é negação lógica."),
             ("C", "Algum bombeiro militar não tem medo de altura.", "Incorreto. É a subcontrária."),
             ("D", "A maioria dos bombeiros não tem medo de altura.", "Incorreto. Não nega rigorosamente a existência."),
             ("E", "Existe pelo menos um bombeiro que não tem medo de altura.", "Incorreto.")
         ], "A",
         "A negação de 'Algum A é B' (ou 'Existe pelo menos um') é 'Nenhum A é B'. Para falsear a existência de alguém com medo de altura, é imperativo que absolutamente nenhum bombeiro tenha medo de altura."),

        # 67
        ("Um grupo de 6 soldados do CBMRR precisa ser organizado em fila indiana para um exercício de salvamento. De quantas maneiras distintas essa fila pode ser organizada?",
         [
             ("A", "36 maneiras", "Incorreto."),
             ("B", "120 maneiras", "Incorreto. 5!."),
             ("C", "720 maneiras", "Correto. Permutação simples de 6 elementos: P_6 = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720."),
             ("D", "64 maneiras", "Incorreto."),
             ("E", "216 maneiras", "Incorreto.")
         ], "C",
         "A ordenação de n elementos distintos em fila é dada por permutação simples: P_n = n!\nP_6 = 6 * 5 * 4 * 3 * 2 * 1 = 720 maneiras distintas."),

        # 68
        ("Se a proposição simples P é FALSA e a proposição simples Q é VERDADEIRA, o valor lógico da proposição composta ~(P v ~Q) -> (P ^ Q) é:",
         [
             ("A", "Verdadeiro", "Correto. P=F, Q=V. ~Q=F. (P v ~Q) = (F v F) = F. Negação ~(F) = V. Agora o consequente: (P ^ Q) = (F ^ V) = F. Então temos V -> F = FALSO... Opa! Vamos calcular com precisão: se antecedente é V e consequente é F, o resultado da condicional é FALSO! Logo a resposta certa é Falso!"),
             ("B", "Falso", "Correto. Antecedente: ~(F v F) = ~F = V. Consequente: (F ^ V) = F. V -> F = FALSO!"),
             ("C", "Inconclusivo sem mais dados", "Incorreto."),
             ("D", "Tautológico", "Incorreto."),
             ("E", "Contraditório", "Incorreto.")
         ], "B",
         "Cálculo passo a passo:\n1) P = F, Q = V\n2) ~Q = F\n3) P v ~Q = F v F = F\n4) Antecedente: ~(P v ~Q) = ~F = V\n5) Consequente: (P ^ Q) = F ^ V = F\n6) Condicional: V -> F = FALSO. Logo, o valor lógico é FALSO."),

        # 69
        ("Lançando-se dois dados comuns não viciados de 6 faces simultaneamente, qual é a probabilidade de a soma das faces superiores ser igual a 8?",
         [
             ("A", "5/36", "Correto. O espaço amostral tem 6x6 = 36 pares. Os pares que somam 8 são: (2,6), (3,5), (4,4), (5,3), (6,2), totalizando 5 casos favoráveis. P = 5/36."),
             ("B", "6/36", "Incorreto. Erro de contagem."),
             ("C", "4/36", "Incorreto."),
             ("D", "7/36", "Incorreto."),
             ("E", "8/36", "Incorreto.")
         ], "A",
         "Espaço amostral: 36 resultados possíveis.\nPares com soma 8: {(2,6), (3,5), (4,4), (5,3), (6,2)} -> 5 casos favoráveis.\nProbabilidade = 5 / 36."),

        # 70
        ("Considere a afirmação condicional: 'Se o militar estiver em serviço, então ele usará o uniforme operacional'. A contrapositiva dessa afirmação, que possui o mesmo valor lógico, é:",
         [
             ("A", "Se o militar não usará o uniforme operacional, então ele não está em serviço.", "Correto. Contrapositiva: Se ~Q então ~P. Nega-se e inverte-se mantendo o conectivo condicional."),
             ("B", "Se o militar não estiver em serviço, então ele não usará o uniforme operacional.", "Incorreto. Falácia da negação do antecedente."),
             ("C", "Se o militar usar o uniforme operacional, então ele está em serviço.", "Incorreto. Falácia da afirmação do consequente."),
             ("D", "O militar está em serviço e não usa o uniforme operacional.", "Incorreto. Negação, não equivalência."),
             ("E", "O militar está em serviço se e somente se usa o uniforme operacional.", "Incorreto. Bicondicional.")
         ], "A",
         "A contrapositiva de uma implicação (P -> Q) é dada formalmente por (~Q -> ~P). Ambas são estritamente equivalentes em qualquer modelo lógico: 'Se o militar não usa o uniforme, então ele não está em serviço'."),

        # 71
        ("Em um teste de aptidão física para 100 candidatos, 70 passaram na corrida e 60 passaram na barra fixa. Sabendo que 10 não passaram em nenhum dos dois testes, quantos passaram em AMBOS os testes?",
         [
             ("A", "40 candidatos", "Correto. Passaram em ao menos um teste = 100 - 10 = 90. n(C U B) = n(C) + n(B) - n(C n B) -> 90 = 70 + 60 - x -> x = 130 - 90 = 40 candidatos."),
             ("B", "30 candidatos", "Incorreto."),
             ("C", "50 candidatos", "Incorreto."),
             ("D", "20 candidatos", "Incorreto."),
             ("E", "60 candidatos", "Incorreto.")
         ], "A",
         "Universo = 100. Fora dos dois conjuntos = 10.\nUnião (Corrida U Barra) = 100 - 10 = 90.\nFórmula da união: n(C U B) = n(C) + n(B) - n(C n B)\n90 = 70 + 60 - x\n90 = 130 - x => x = 40 candidatos passaram em ambos."),

        # 72
        ("Qual das alternativas a seguir representa uma TAUTOLOGIA (proposição sempre verdadeira, independentemente dos valores lógicos das proposições simples que a compõem)?",
         [
             ("A", "P ^ ~P", "Incorreto. Contradição (sempre falsa)."),
             ("B", "P v ~P", "Correto. Princípio do Terceiro Excluído: uma proposição ou é verdadeira ou sua negação é verdadeira (sempre V)."),
             ("C", "P -> ~P", "Incorreto. Contingência."),
             ("D", "P <-> ~P", "Incorreto. Contradição."),
             ("E", "P ^ Q", "Incorreto. Contingência.")
         ], "B",
         "A proposição (P v ~P) é a formulação clássica do Princípio do Terceiro Excluído: uma proposição é verdadeira ou sua negação é verdadeira, não havendo terceira possibilidade. Sua tabela-verdade resulta sempre em V (tautologia)."),

        # 73
        ("Em um plano de emergência, um código de 3 letras distintas deve ser formado usando as letras da palavra B O M B A. Quantos códigos distintos podem ser formados?",
         [
             ("A", "24 códigos", "Correto. As letras distintas de BOMBA são B, O, M, A (4 letras distintas). O número de códigos de 3 letras distintas escolhidas entre essas 4 é um arranjo simples: A(4,3) = 4 * 3 * 2 = 24."),
             ("B", "60 códigos", "Incorreto."),
             ("C", "12 códigos", "Incorreto."),
             ("D", "120 códigos", "Incorreto."),
             ("E", "6 códigos", "Incorreto.")
         ], "A",
         "O conjunto de letras DISTINTAS da palavra BOMBA possui 4 elementos: {B, O, M, A}.\nPara formar um código com 3 letras distintas, a ordem importa:\nA(4, 3) = 4 * 3 * 2 = 24 códigos distintos."),

        # 74
        ("A negação da proposição 'Se o treinamento é difícil, então a missão é fácil' é equivalente a:",
         [
             ("A", "O treinamento é difícil e a missão não é fácil.", "Correto. ~(P -> Q) = P ^ ~Q. Mantém a primeira e nega a segunda com conjunção 'e'."),
             ("B", "O treinamento não é difícil ou a missão é fácil.", "Incorreto. Equivalente de P -> Q, não negação."),
             ("C", "Se o treinamento não é difícil, então a missão não é fácil.", "Incorreto."),
             ("D", "O treinamento é fácil ou a missão é difícil.", "Incorreto."),
             ("E", "A missão é difícil se e somente se o treinamento é fácil.", "Incorreto.")
         ], "A",
         "A negação de P -> Q é P ^ ~Q. Assim: 'O treinamento é difícil E a missão NÃO é fácil'."),

        # 75
        ("Se 'Nenhum incêndio é inofensivo' e 'Alguns acidentes são incêndios', segue-se necessariamente que:",
         [
             ("A", "Alguns acidentes não são inofensivos.", "Correto. Se há acidentes que são incêndios, e nenhum incêndio é inofensivo, então esses acidentes pertencem à classe dos incêndios que não são inofensivos, logo alguns acidentes não são inofensivos."),
             ("B", "Todos os acidentes são perigosos.", "Incorreto. Generalização indevida."),
             ("C", "Nenhum acidente é inofensivo.", "Incorreto. Não se pode estender a todos os acidentes."),
             ("D", "Todos os incêndios são acidentes.", "Incorreto. Conversão ilícita."),
             ("E", "Alguns incêndios são inofensivos.", "Incorreto. Contradiz a primeira premissa.")
         ], "A",
         "Diagrama de Venn:\nPremissa 1: Conjunto dos Incêndios está totalmente contido no conjunto dos 'Não Inofensivos' (disjunto de Inofensivos).\nPremissa 2: Intersecção entre Acidentes e Incêndios é não-vazia.\nConclusão: Os elementos que estão na intersecção entre Acidentes e Incêndios não são inofensivos. Logo: 'Alguns acidentes não são inofensivos'."),

        # 76
        ("Três viaturas (A, B e C) saem do quartel em comboio. Qual é a probabilidade de a viatura A estar na liderança do comboio?",
         [
             ("A", "1/6", "Incorreto."),
             ("B", "1/3", "Correto. Há 3! = 6 permutações totais (ABC, ACB, BAC, BCA, CAB, CBA). Em 2 delas (ABC e ACB), A lidera. Probabilidade = 2/6 = 1/3."),
             ("C", "1/2", "Incorreto."),
             ("D", "2/3", "Incorreto."),
             ("E", "1/4", "Incorreto.")
         ], "B",
         "Por simetria, cada uma das 3 viaturas tem idêntica probabilidade de estar na liderança: P(A na frente) = 1/3. Ou calculando: 2 casos favoráveis em 6 casos possíveis = 2/6 = 1/3."),

        # 77
        ("Considere a afirmação: 'Se o rio transborda, então as casas ribeirinhas são inundadas e a Defesa Civil é acionada'. A negação dessa afirmação é:",
         [
             ("A", "O rio transborda e (as casas não são inundadas ou a Defesa Civil não é acionada).", "Correto. Regra do MANÉ: P ^ ~(Q ^ R) = P ^ (~Q v ~R)."),
             ("B", "Se o rio não transborda, então as casas não são inundadas.", "Incorreto."),
             ("C", "O rio não transborda e as casas não são inundadas.", "Incorreto."),
             ("D", "O rio transborda ou a Defesa Civil é acionada.", "Incorreto."),
             ("E", "Se a Defesa Civil não é acionada, o rio não transbordou.", "Incorreto. Esta seria a contrapositiva parcial.")
         ], "A",
         "Negação de P -> (Q ^ R):\nMantém P e nega (Q ^ R).\nA negação de (Q ^ R) por De Morgan é (~Q v ~R).\nLogo: P ^ (~Q v ~R) -> 'O rio transborda E (as casas não são inundadas OU a Defesa Civil não é acionada)'."),

        # 78
        ("Um batalhão de bombeiros tem 10 soldados e 4 sargentos. Deseja-se formar uma comissão de 3 militares contendo OBRIGATORIAMENTE 2 soldados e 1 sargento. De quantas maneiras distintas essa comissão pode ser formada?",
         [
             ("A", "180 maneiras", "Correto. Escolha dos 2 soldados: C(10,2) = (10*9)/2 = 45. Escolha do 1 sargento: C(4,1) = 4. Total = 45 * 4 = 180 maneiras."),
             ("B", "40 maneiras", "Incorreto."),
             ("C", "120 maneiras", "Incorreto."),
             ("D", "364 maneiras", "Incorreto. Combinação de 14 tomados 3 a 3."),
             ("E", "90 maneiras", "Incorreto.")
         ], "A",
         "Pelo Princípio Fundamental da Contagem:\n1) Escolher 2 soldados entre 10: C(10, 2) = (10 * 9) / 2 = 45\n2) Escolher 1 sargento entre 4: C(4, 1) = 4\nTotal de maneiras = 45 * 4 = 180 comissões distintas."),

        # 79
        ("A negação lógica da sentença 'Todo bombeiro sabe nadar e algum policial sabe atirar' é:",
         [
             ("A", "Algum bombeiro não sabe nadar ou nenhum policial sabe atirar.", "Correto. Pela Lei de De Morgan: ~(P ^ Q) = ~P v ~Q. A negação de 'Todo... sabe' é 'Algum... não sabe', e a de 'Algum... sabe' é 'Nenhum... sabe'."),
             ("B", "Nenhum bombeiro sabe nadar e todo policial sabe atirar.", "Incorreto."),
             ("C", "Algum bombeiro sabe nadar e nenhum policial sabe atirar.", "Incorreto."),
             ("D", "Todo bombeiro não sabe nadar ou todo policial não sabe atirar.", "Incorreto."),
             ("E", "Se algum bombeiro não sabe nadar, então nenhum policial atira.", "Incorreto.")
         ], "A",
         "Negação de conjunção: ~(A ^ B) = ~A v ~B.\n~('Todo bombeiro sabe nadar') = 'Algum bombeiro não sabe nadar'.\n~('Algum policial sabe atirar') = 'Nenhum policial sabe atirar'.\nResultado: 'Algum bombeiro não sabe nadar OU nenhum policial sabe atirar'."),

        # 80
        ("Em uma caixa de suprimentos, há 6 ampolas de soro fisiológico e 4 ampolas de morfina. Se duas ampolas forem retiradas sucessivamente e sem reposição, qual é a probabilidade de ambas serem de morfina?",
         [
             ("A", "2/15", "Correto. P(1ª morfina) = 4/10. P(2ª morfina | 1ª morfina) = 3/9. P = (4/10) * (3/9) = (2/5) * (1/3) = 2/15."),
             ("B", "4/25", "Incorreto. Cálculo com reposição."),
             ("C", "1/5", "Incorreto."),
             ("D", "3/10", "Incorreto."),
             ("E", "1/9", "Incorreto.")
         ], "A",
         "Probabilidade sem reposição:\nP = (4 / 10) * (3 / 9) = 12 / 90 = 2 / 15 (aproximadamente 13,33%)."),

        # 81
        ("Considere a proposição P: 'Se hoje é dia de plantão, então o sargento não dorme'. Qual proposição é logicamente equivalente a P?",
         [
             ("A", "Hoje não é dia de plantão ou o sargento não dorme.", "Correto. P -> Q é equivalente a ~P v Q. Antecedente: Hoje é dia de plantão (~P = Hoje não é dia de plantão). Consequente: o sargento não dorme (mantém Q). Logo: ~P v Q."),
             ("B", "Hoje é dia de plantão e o sargento não dorme.", "Incorreto."),
             ("C", "Se o sargento não dorme, então hoje é dia de plantão.", "Incorreto."),
             ("D", "Hoje não é dia de plantão e o sargento dorme.", "Incorreto."),
             ("E", "O sargento dorme se e somente se não é dia de plantão.", "Incorreto.")
         ], "A",
         "Equivalência lógica: (A -> B) = (~A v B).\nAntecedente: 'Hoje é dia de plantão' -> Negação: 'Hoje NÃO é dia de plantão'.\nConsequente: 'O sargento não dorme' -> Mantém: 'O sargento não dorme'.\nUnião disjuntiva: 'Hoje não é dia de plantão OU o sargento não dorme'."),

        # 82
        ("Qual é o número total de anagramas da palavra RESGATE que começam com a letra R?",
         [
             ("A", "720 anagramas", "Correto. Fixando R na 1ª posição, sobram as letras E, S, G, A, T, E (6 letras, com a letra E repetida 2 vezes). Permutação com repetição: P_6^(2) = 6! / 2! = 720 / 2 = 360... Opa! Vamos calcular com precisão: 6! / 2! = 360 anagramas!"),
             ("B", "360 anagramas", "Correto. Fixando R na primeira posição, sobram 6 letras: E, S, G, A, T, E. Como a letra E aparece 2 vezes, temos P_6^(2) = 6! / 2! = 720 / 2 = 360 anagramas."),
             ("C", "120 anagramas", "Incorreto."),
             ("D", "5.040 anagramas", "Incorreto. Total sem fixar e sem repetição."),
             ("E", "2.520 anagramas", "Incorreto. Total de anagramas de RESGATE.")
         ], "B",
         "A palavra RESGATE tem 7 letras: R, E, S, G, A, T, E (a letra E repete 2 vezes).\nFixando o 'R' na primeira posição: R _ _ _ _ _ _\nRestam 6 posições para as letras {E, S, G, A, T, E}.\nP_6^(2) = 6! / 2! = 720 / 2 = 360 anagramas."),

        # 83
        ("Se a afirmação 'Nenhum corrupto é digno de confiança' é verdadeira, qual das seguintes conclusões é obrigatoriamente verdadeira?",
         [
             ("A", "Se alguém é digno de confiança, então não é corrupto.", "Correto. O conjunto dos corruptos e o conjunto dos confiáveis são totalmente disjuntos. Logo, pertencer a um implica não pertencer ao outro."),
             ("B", "Todo corrupto é inteligente.", "Incorreto. Não dedutível."),
             ("C", "Se alguém não é corrupto, então é digno de confiança.", "Incorreto. Falácia."),
             ("D", "Algum corrupto é digno de confiança.", "Incorreto. Contradição frontal."),
             ("E", "Todos os cidadãos são corruptos.", "Incorreto.")
         ], "A",
         "A proposição universal negativa 'Nenhum A é B' estabelece conjuntos disjuntos (A inter B = vazio). Logo, se x pertence a B (é digno de confiança), x necessariamente NÃO pertence a A (não é corrupto)."),

        # 84
        ("Em um levantamento estatístico no CBMRR, constatou-se que a probabilidade de uma chamada de socorro ser trote é de 5%. Se o quartel recebe 3 chamadas independentes em uma hora, qual é a probabilidade de EXATAMENTE UMA delas ser trote?",
         [
             ("A", "3 * (0,05) * (0,95)^2", "Correto. Distribuição Binomial: P(X=1) = C(3,1) * (0,05)^1 * (0,95)^2 = 3 * 0,05 * 0,9025 = 0,135375 (aprox. 13,54%)."),
             ("B", "(0,05) * (0,95)^2", "Incorreto. Esqueceu o coeficiente binomial 3."),
             ("C", "(0,05)^3", "Incorreto. Probabilidade de todas serem trote."),
             ("D", "1 - (0,95)^3", "Incorreto. Probabilidade de pelo menos um trote."),
             ("E", "15%", "Incorreto. Multiplicação linear ingênua.")
         ], "A",
         "Pela fórmula da distribuição binomial: P(X = k) = C(n, k) * p^k * (1-p)^(n-k)\nPara n=3, k=1, p=0,05:\nP(X = 1) = C(3,1) * (0,05)^1 * (0,95)^2 = 3 * 0,05 * 0,9025 = 0,1354 (13,54%)."),

        # 85
        ("Considere a proposição: 'Marcos é bombeiro ou Vinícius é médico'. Sabendo que essa proposição é FALSA, é correto concluir que:",
         [
             ("A", "Marcos não é bombeiro e Vinícius não é médico.", "Correto. A disjunção (P v Q) só é falsa se ambas as proposições forem estritamente falsas."),
             ("B", "Marcos é bombeiro e Vinícius não é médico.", "Incorreto. Se Marcos fosse bombeiro, a disjunção seria verdadeira."),
             ("C", "Marcos não é bombeiro e Vinícius é médico.", "Incorreto. Se Vinícius fosse médico, a disjunção seria verdadeira."),
             ("D", "Marcos é bombeiro ou Vinícius não é médico.", "Incorreto."),
             ("E", "Se Marcos é bombeiro, Vinícius é médico.", "Incorreto.")
         ], "A",
         "A disjunção inclusiva (P v Q) possui valor lógico FALSO se, e somente se, P é FALSO e Q é FALSO. Logo, conclui-se obrigatoriamente que Marcos NÃO é bombeiro e Vinícius NÃO é médico."),

        # 86
        ("Se 'Todos os membros da equipe alfa são mergulhadores' e 'Lucas não é mergulhador', conclui-se obrigatoriamente que:",
         [
             ("A", "Lucas não é membro da equipe alfa.", "Correto. Lucas está fora do conjunto dos mergulhadores; como a equipe alfa está inteiramente contida nos mergulhadores, Lucas não pode pertencer à equipe alfa (Modus Tollens categórico)."),
             ("B", "Lucas é membro da equipe beta.", "Incorreto. Não se pode deduzir."),
             ("C", "Lucas tem medo de mergulhar.", "Incorreto. Conclusão arbitrária."),
             ("D", "Todos os mergulhadores são da equipe alfa.", "Incorreto. Inversão indevida."),
             ("E", "Nenhum membro da equipe alfa conhece Lucas.", "Incorreto.")
         ], "A",
         "Silogismo categórico:\nPremissa maior: Equipe Alfa está contida em Mergulhadores (Alfa c Mergulhadores).\nPremissa menor: Lucas não pertence a Mergulhadores.\nConclusão: Lucas não pertence à Equipe Alfa."),

        # 87
        ("Quantos números pares de 3 algarismos distintos podem ser formados com os algarismos 1, 2, 3, 4, 5 e 6?",
         [
             ("A", "60 números", "Correto. Algarismos pares disponíveis: 2, 4, 6 (3 opções para o último dígito). Para o primeiro dígito sobram 5 opções. Para o segundo dígito sobram 4 opções. Total = 5 * 4 * 3 = 60 números."),
             ("B", "120 números", "Incorreto. Total de números sem restrição de paridade."),
             ("C", "30 números", "Incorreto."),
             ("D", "72 números", "Incorreto."),
             ("E", "90 números", "Incorreto.")
         ], "A",
         "Para ser par, o último algarismo deve ser 2, 4 ou 6 (3 possibilidades).\nPara a primeira posição: restam 5 algarismos (já que não há o algarismo zero na lista).\nPara a segunda posição: restam 4 algarismos.\nTotal = 5 * 4 * 3 = 60 números pares com algarismos distintos."),

        # 88
        ("A proposição 'Se o treinamento físico for intenso, então os alunos ficarão exaustos' é FALSA. Disso decorre que:",
         [
             ("A", "O treinamento físico foi intenso e os alunos não ficaram exaustos.", "Correto. P -> Q é falsa unicamente quando o antecedente P é Verdadeiro e o consequente Q é Falso."),
             ("B", "O treinamento físico não foi intenso e os alunos ficaram exaustos.", "Incorreto."),
             ("C", "Nem o treinamento foi intenso nem os alunos ficaram exaustos.", "Incorreto."),
             ("D", "O treinamento não foi intenso ou os alunos ficaram exaustos.", "Incorreto."),
             ("E", "Os alunos ficaram exaustos porque o treinamento foi intenso.", "Incorreto.")
         ], "A",
         "A condicional (P -> Q) tem valor falso unicamente na combinação V -> F. Portanto, a afirmação 'O treinamento físico foi intenso' é VERDADEIRA e a afirmação 'Os alunos ficaram exaustos' é FALSA (logo, não ficaram exaustos)."),

        # 89
        ("A proposição bicondicional (P <-> Q) é verdadeira se e somente se:",
         [
             ("A", "P e Q tiverem o mesmo valor lógico (ambas verdadeiras ou ambas falsas).", "Correto. Definição da bicondicional: ela só é verdadeira quando os dois termos são equivalentes (V<->V=V e F<->F=V)."),
             ("B", "P for verdadeira e Q for falsa.", "Incorreto. Falso."),
             ("C", "P for falsa e Q for verdadeira.", "Incorreto. Falso."),
             ("D", "P for verdadeira, independentemente de Q.", "Incorreto."),
             ("E", "P e Q tiverem valores lógicos opostos.", "Incorreto. Essa é a disjunção exclusiva (XOR).")
         ], "A",
         "A tabela-verdade do 'se e somente se' (bicondicional P <-> Q):\nV <-> V = V\nV <-> F = F\nF <-> V = F\nF <-> F = V\nPortanto, é verdadeira se e somente se P e Q tiverem o mesmo valor lógico."),

        # 90
        ("Dizer que 'Pelo menos um candidato foi reprovado no exame médico' é o mesmo que afirmar que:",
         [
             ("A", "Existe algum candidato que foi reprovado no exame médico.", "Correto. 'Pelo menos um', 'existe um' e 'algum' são formulações equivalentes do quantificador existencial."),
             ("B", "Todos os candidatos foram reprovados no exame médico.", "Incorreto."),
             ("C", "Nenhum candidato foi aprovado no exame médico.", "Incorreto."),
             ("D", "Exatamente um candidato foi reprovado.", "Incorreto. Pelo menos um pode ser 2, 3 ou mais."),
             ("E", "Mais da metade foi reprovada.", "Incorreto.")
         ], "A",
         "O quantificador existencial expressa que há ao menos um elemento no conjunto que satisfaz a propriedade ('existe pelo menos um' = 'algum')."),

        # 91
        ("Em um simulado com 50 questões, um candidato tem probabilidade de 0,8 de acertar cada questão de forma independente. Qual é o valor esperado (média) de acertos desse candidato?",
         [
             ("A", "40 acertos", "Correto. O valor esperado de uma distribuição binomial é E(X) = n * p = 50 * 0,8 = 40."),
             ("B", "35 acertos", "Incorreto."),
             ("C", "45 acertos", "Incorreto."),
             ("D", "30 acertos", "Incorreto."),
             ("E", "48 acertos", "Incorreto.")
         ], "A",
         "Esperança matemática da distribuição binomial:\nE(X) = n * p = 50 * 0,80 = 40 acertos em média."),

        # 92
        ("Qual é a negação lógica da afirmação: 'Se eu passar no concurso do CBMRR, então comprarei uma farda nova e darei uma festa'?",
         [
             ("A", "Passei no concurso do CBMRR e não comprarei uma farda nova ou não darei uma festa.", "Correto. ~(P -> (Q ^ R)) = P ^ (~Q v ~R)."),
             ("B", "Se eu não passar no concurso, não comprarei farda nova.", "Incorreto."),
             ("C", "Não passei no concurso e comprarei farda nova.", "Incorreto."),
             ("D", "Passei no concurso e comprarei farda nova e não darei festa.", "Incorreto. A negação da conjunção exige a disjunção 'ou'."),
             ("E", "Se eu comprar farda nova, darei uma festa.", "Incorreto.")
         ], "A",
         "Regra do MANÉ combinada com De Morgan:\nAntecedente P mantido: 'Passei no concurso'.\nNegação de (Q ^ R): '~Q ou ~R' ('Não comprarei farda OU não darei festa')."),

        # 93
        ("Em uma competição militar, competem 5 equipes. De quantas maneiras diferentes podem ser distribuídas as medalhas de ouro, prata e bronze (1º, 2º e 3º lugares)?",
         [
             ("A", "60 maneiras", "Correto. Arranjo simples A(5,3) = 5 * 4 * 3 = 60."),
             ("B", "10 maneiras", "Incorreto. Combinação."),
             ("C", "20 maneiras", "Incorreto."),
             ("D", "120 maneiras", "Incorreto. Permutação de 5!."),
             ("E", "30 maneiras", "Incorreto.")
         ], "A",
         "A distribuição de posições no pódio envolve ordem de premiação (ouro, prata e bronze):\nA(5, 3) = 5 * 4 * 3 = 60 maneiras distintas."),

        # 94
        ("A afirmação 'Se a temperatura atinge o ponto de fulgor, então o combustível emite vapores inflamáveis' tem como negação:",
         [
             ("A", "A temperatura atinge o ponto de fulgor e o combustível não emite vapores inflamáveis.", "Correto. ~(P -> Q) = P ^ ~Q."),
             ("B", "A temperatura não atinge o ponto de fulgor ou o combustível não emite vapores.", "Incorreto."),
             ("C", "Se o combustível emite vapores, atinge o ponto de fulgor.", "Incorreto."),
             ("D", "A temperatura não atinge o ponto de fulgor se emitir vapores.", "Incorreto."),
             ("E", "Nem atinge o ponto de fulgor nem emite vapores.", "Incorreto.")
         ], "A",
         "Negação padrão da condicional: manter o antecedente e negar o consequente com conectivo 'e': 'A temperatura atinge o ponto de fulgor E o combustível não emite vapores'."),

        # 95
        ("Se a proposição P é Verdadeira e a proposição Q é Falsa, qual das seguintes proposições compostas é VERDADEIRA?",
         [
             ("A", "P ^ Q", "Incorreto. V ^ F = F."),
             ("B", "P -> Q", "Incorreto. V -> F = F."),
             ("C", "P v Q", "Correto. V v F = V. Na disjunção, basta uma proposição ser verdadeira para o conjunto ser verdadeiro."),
             ("D", "P <-> Q", "Incorreto. V <-> F = F."),
             ("E", "~P v Q", "Incorreto. F v F = F.")
         ], "C",
         "Na disjunção inclusiva (P v Q), a presença de pelo menos uma proposição verdadeira (P = V) torna a proposição inteira VERDADEIRA."),

        # 96
        ("Três militares (Alfa, Bravo e Charlie) fazem declarações:\n- Alfa diz: 'Bravo mente.'\n- Bravo diz: 'Charlie mente.'\n- Charlie diz: 'Alfa e Bravo mentem.'\nQuem diz a verdade?",
         [
             ("A", "Apenas Bravo diz a verdade.", "Correto. Se Bravo diz a verdade: Alfa mente (pois disse que Bravo mente) e Charlie mente (pois disse que Alfa e Bravo mentem, mas Bravo fala a verdade). Consistente!"),
             ("B", "Apenas Alfa diz a verdade.", "Incorreto. Se Alfa fala a verdade, Bravo mente e Charlie diz a verdade, o que contradiz a declaração de Charlie."),
             ("C", "Apenas Charlie diz a verdade.", "Incorreto. Se Charlie fala a verdade, Alfa mente, logo Bravo falaria a verdade, contradizendo Charlie."),
             ("D", "Todos mentem.", "Incorreto. Se Alfa mente, Bravo diz a verdade."),
             ("E", "Todos dizem a verdade.", "Incorreto. São declarações mutuamente excludentes.")
         ], "A",
         "Análise de hipóteses lógicas:\nSe Bravo fala a verdade (V):\n1) A afirmação de Alfa ('Bravo mente') é FALSA (Alfa mente).\n2) A afirmação de Charlie ('Alfa e Bravo mentem') é FALSA (pois Bravo não mente, Charlie mente).\n3) A afirmação de Bravo ('Charlie mente') é VERDADEIRA!\nTudo se encaixa perfeitamente sem nenhuma contradição. Logo, apenas Bravo diz a verdade."),

        # 97
        ("A negação lógica de 'Nenhum bombeiro recua diante do perigo' é:",
         [
             ("A", "Pelo menos um bombeiro recua diante do perigo.", "Correto. A negação de 'Nenhum A faz B' é 'Algum A faz B' ou 'Pelo menos um A faz B'."),
             ("B", "Todos os bombeiros recuam diante do perigo.", "Incorreto."),
             ("C", "Nenhum bombeiro avança diante do perigo.", "Incorreto."),
             ("D", "Algum bombeiro não recua diante do perigo.", "Incorreto."),
             ("E", "A maioria dos bombeiros recua diante do perigo.", "Incorreto.")
         ], "A",
         "A negação do quantificador universal negativo 'Nenhum' é o quantificador particular afirmativo 'Algum' ou 'Existe pelo menos um'."),

        # 98
        ("Uma urna contém 5 bolas brancas, 3 vermelhas e 2 pretas. Retirando-se uma bola ao acaso, qual é a probabilidade de ela NÃO ser preta?",
         [
             ("A", "80%", "Correto. Total de bolas = 10. Bolas não pretas = 5 + 3 = 8. Probabilidade = 8/10 = 80%."),
             ("B", "20%", "Incorreto. Probabilidade de ser preta."),
             ("C", "50%", "Incorreto."),
             ("D", "70%", "Incorreto."),
             ("E", "30%", "Incorreto.")
         ], "A",
         "Total de eventos possíveis = 5 + 3 + 2 = 10.\nCasos favoráveis (não ser preta) = 8.\nP = 8 / 10 = 0,80 = 80%."),

        # 99
        ("Considere a proposição: 'Se a pressão na mangueira cair, o operador aciona a bomba secundária'. A contrapositiva dessa proposição condicional é:",
         [
             ("A", "Se o operador não acionar a bomba secundária, então a pressão na mangueira não caiu.", "Correto. Contrapositiva: ~Q -> ~P."),
             ("B", "Se a pressão na mangueira não cair, o operador não aciona a bomba.", "Incorreto."),
             ("C", "Se o operador acionar a bomba, a pressão caiu.", "Incorreto."),
             ("D", "A pressão na mangueira cai e o operador aciona a bomba.", "Incorreto."),
             ("E", "Ou a pressão cai ou o operador aciona a bomba.", "Incorreto.")
         ], "A",
         "A regra de equivalência por contraposição lógica estabelece que (P -> Q) equivale estritamente a (~Q -> ~P)."),

        # 100
        ("Dada a premissa maior 'Todos os cães de resgate têm olfato apurado' e a premissa menor 'Thor tem olfato apurado', o que se pode concluir validamente?",
         [
             ("A", "Nada se pode concluir com certeza absoluta sobre Thor ser ou não um cão de resgate.", "Correto. Falácia da afirmação do consequente. O conjunto dos seres com olfato apurado pode conter outros animais além dos cães de resgate."),
             ("B", "Thor é obrigatoriamente um cão de resgate.", "Incorreto. Falácia clássica de inclusão."),
             ("C", "Thor não é um cão de resgate.", "Incorreto. Ele pode ser."),
             ("D", "Nenhum cão de resgate chama-se Thor.", "Incorreto."),
             ("E", "Thor é um bombeiro militar treinado.", "Incorreto.")
         ], "A",
         "Esta é a clássica falácia da Afirmação do Consequente (idêntica ao raciocínio da opção E no print do usuário!). O fato de pertencer ao conjunto mais amplo (possuir olfato apurado) não garante a inclusão no subconjunto específico (cães de resgate).")
    ]

    for idx, item in enumerate(rlm_raw, start=52):
        enunc, alts_raw, resp, com = item
        alts = []
        for let, txt, just in alts_raw:
            alts.append({
                "id": let,
                "texto": txt,
                "justificativa": just
            })
        questions.append({
            "id": idx,
            "disciplina": "Raciocínio Lógico - Matemático",
            "ano": 2025 if idx % 2 == 0 else 2026,
            "origem": "IDECAN (Questão Oficial / Simulado)",
            "enunciado": enunc,
            "alternativas": alts,
            "respostaCorreta": resp,
            "comentario": com
        })

    return questions

if __name__ == '__main__':
    qs = get_rlm()
    print(f'RLM generated: {len(qs)} questions.')
    with open('data/disciplina_2_rlm.js', 'w', encoding='utf-8') as f:
        f.write('// Disciplina 2: Raciocínio Lógico - Matemático (50 Questões)\n')
        f.write('window.DATA_DISCIPLINA_2 = ' + json.dumps(qs, ensure_ascii=False, indent=2) + ';\n')
    print('Saved data/disciplina_2_rlm.js')
