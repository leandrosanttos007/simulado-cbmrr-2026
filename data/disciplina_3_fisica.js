// Disciplina 3: Física (50 Questões)
window.DATA_DISCIPLINA_3 = [
  {
    "id": 101,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Uma viatura de combate a incêndio (Auto Bomba Tanque) do CBMRR desloca-se em linha reta com velocidade inicial de 20 m/s. Ao avistar um obstáculo a 50 metros, o motorista pisa nos freios, imprimindo uma desaceleração constante de 4 m/s². É correto afirmar que a viatura:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Irá parar exatamente a 50 metros da frenagem, encostando suavemente no obstáculo.",
        "justificativa": "Correto. Pela Equação de Torricelli: v² = v0² + 2*a*ΔS -> 0 = 20² + 2*(-4)*ΔS -> 8*ΔS = 400 -> ΔS = 50 metros."
      },
      {
        "id": "B",
        "texto": "Colidirá com o obstáculo, pois necessita de 60 metros para parar completamente.",
        "justificativa": "Incorreto. A distância exata de parada é 50 metros."
      },
      {
        "id": "C",
        "texto": "Irá parar com apenas 25 metros de frenagem.",
        "justificativa": "Incorreto. Erro no cálculo de aceleração."
      },
      {
        "id": "D",
        "texto": "Permanecerá em movimento uniforme por 10 segundos antes de desacelerar.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Parará a 40 metros do início da frenagem.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Pela equação de Torricelli: v² = v0² + 2*a*ΔS. Sendo v = 0 m/s (repouso final), v0 = 20 m/s e a = -4 m/s² (desaceleração):\n0 = 20² + 2*(-4)*ΔS\n0 = 400 - 8*ΔS\n8*ΔS = 400 -> ΔS = 50 metros.\nA viatura para exatamente a 50 metros."
  },
  {
    "id": 102,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Durante uma operação de resgate veicular pelo CBMRR, é utilizado um desencarcerador hidráulico baseado no Princípio de Pascal. Se o êmbolo menor possui área A1 = 5 cm² e nele é aplicada uma força de 200 N, qual será a força exercida pelo êmbolo maior de área A2 = 100 cm² para cortar a lataria?",
    "alternativas": [
      {
        "id": "A",
        "texto": "1.000 N",
        "justificativa": "Incorreto."
      },
      {
        "id": "B",
        "texto": "4.000 N",
        "justificativa": "Correto. Pelo Princípio de Pascal: F1/A1 = F2/A2 -> 200/5 = F2/100 -> 40 = F2/100 -> F2 = 4.000 N."
      },
      {
        "id": "C",
        "texto": "2.000 N",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "10.000 N",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "500 N",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "O Princípio de Pascal estabelece que a variação de pressão aplicada a um fluido incompressível em equilíbrio transmite-se integralmente a todos os pontos do fluido: P1 = P2 => F1 / A1 = F2 / A2.\nSubstituindo: 200 / 5 = F2 / 100 => 40 = F2 / 100 => F2 = 4.000 N (ampliação de 20 vezes)."
  },
  {
    "id": 103,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Em um incêndio em um edifício comercial em Boa Vista, os bombeiros observam que o calor do fogo no andar térreo está se propagando para o segundo andar principalmente pela movimentação ascendente de massas de ar aquecido e gases quentes. Esse processo de transferência de calor denomina-se:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Condução",
        "justificativa": "Incorreto. Condução ocorre por contato molecular direto em sólidos."
      },
      {
        "id": "B",
        "texto": "Convecção",
        "justificativa": "Correto. Convecção é o transporte de calor pelo movimento real de massas de fluidos (líquidos ou gases) decorrente de diferenças de densidade provocadas pelo aquecimento."
      },
      {
        "id": "C",
        "texto": "Irradiação",
        "justificativa": "Incorreto. Irradiação ocorre por ondas eletromagnéticas no vácuo ou meio transparente."
      },
      {
        "id": "D",
        "texto": "Sublimação",
        "justificativa": "Incorreto. Mudança de estado físico."
      },
      {
        "id": "E",
        "texto": "Calefação",
        "justificativa": "Incorreto. Tipo de vaporização violenta."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "A convecção térmica é a propagação de calor típica dos fluidos (líquidos e gases), em que o ar aquecido, por ser menos denso, sobe, criando correntes ascendentes convectivas que transportam grandes quantidades de calor para os pavimentos superiores."
  },
  {
    "id": 104,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "A água é o agente extintor mais empregado pelo CBMRR. A principal razão física que confere à água excelente capacidade de resfriamento em incêndios de Classe A é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Sua baixa densidade em relação aos combustíveis sólidos.",
        "justificativa": "Incorreto."
      },
      {
        "id": "B",
        "texto": "Seu elevado calor latente de vaporização (aprox. 540 cal/g) e alto calor específico (1 cal/g°C).",
        "justificativa": "Correto. A água absorve gigantesca quantidade de calor para elevar sua temperatura e mudar para vapor d'água, retirando calor do combustível até abaixo do ponto de ignição."
      },
      {
        "id": "C",
        "texto": "Sua viscosidade cinemática nula em temperaturas ambientes.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "Sua capacidade de liberar oxigênio no contato com a chama.",
        "justificativa": "Incorreto. Isso intensificaria o fogo."
      },
      {
        "id": "E",
        "texto": "Seu ponto de fusão inferior a 0 °C em condições normais de pressão.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "A água possui altíssimo calor específico (1 cal/g°C) e extraordinário calor latente de vaporização (540 cal/g ou ~2,26 x 10^6 J/kg). Ao ser lançada nas chamas, absorve imensas quantidades de calor sensível e latente para evaporar, derrubando a temperatura do material em combustão abaixo de sua temperatura de ignição (mecanismo de resfriamento). Além disso, o vapor gerado expande-se cerca de 1.700 vezes, promovendo abafamento secundário."
  },
  {
    "id": 105,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Um mergulhador do CBMRR realiza busca subaquática a uma profundidade de 20 metros no Rio Branco. Considerando a densidade da água doce ρ = 1.000 kg/m³, a gravidade g = 10 m/s² e a pressão atmosférica na superfície Patm = 1,0 x 10⁵ Pa (1 atm), qual é a pressão absoluta sentida pelo militar nessa profundidade?",
    "alternativas": [
      {
        "id": "A",
        "texto": "2,0 x 10⁵ Pa (2 atm)",
        "justificativa": "Incorreto. Essa é a pressão hidrostática manométrica sem somar a atmosfera."
      },
      {
        "id": "B",
        "texto": "3,0 x 10⁵ Pa (3 atm)",
        "justificativa": "Correto. Pela Lei de Stevin: P = Patm + ρ*g*h = 1,0x10⁵ + 1000*10*20 = 1,0x10⁵ + 2,0x10⁵ = 3,0x10⁵ Pa (3 atm)."
      },
      {
        "id": "C",
        "texto": "1,0 x 10⁵ Pa (1 atm)",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "4,0 x 10⁵ Pa (4 atm)",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "5,0 x 10⁵ Pa (5 atm)",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Teorema Fundamental da Hidrostática (Lei de Stevin):\nPressão manométrica = ρ * g * h = 1.000 * 10 * 20 = 200.000 Pa (2 atm).\nPressão absoluta total = Patm + Pman = 100.000 Pa + 200.000 Pa = 300.000 Pa (3,0 x 10⁵ Pa ou 3 atm). A cada 10 metros de profundidade em água doce, a pressão aumenta em aproximadamente 1 atm."
  },
  {
    "id": 106,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Em um sistema de resgate em altura montado com cordas e roldanas (polias), os bombeiros utilizam um sistema multiplicador de força composto por uma roldana fixa e duas roldanas móveis ideais. Para erguer uma vítima com maca cujo peso total é de 800 N, qual é a força mínima necessária aplicada na extremidade da corda?",
    "alternativas": [
      {
        "id": "A",
        "texto": "400 N",
        "justificativa": "Incorreto. Esse seria com apenas 1 roldana móvel."
      },
      {
        "id": "B",
        "texto": "200 N",
        "justificativa": "Correto. A vantagem mecânica para n roldanas móveis é dada por F = P / 2^n. Com n = 2 móveis: F = 800 / 2² = 800 / 4 = 200 N."
      },
      {
        "id": "C",
        "texto": "800 N",
        "justificativa": "Incorreto. Não haveria vantagem mecânica."
      },
      {
        "id": "D",
        "texto": "100 N",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "50 N",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Cada roldana móvel divide a força necessária pela metade: F = P / 2^n.\nCom n = 2 roldanas móveis: F = 800 / 2² = 800 / 4 = 200 N.\nA roldana fixa apenas altera a direção e o sentido da força de tração."
  },
  {
    "id": 107,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Uma mangueira de combate a incêndio de 60 mm de diâmetro interno conduz água a uma velocidade de 2 m/s. Na ponta da mangueira, é acoplado um esguicho regulável com estrangulamento para 30 mm de diâmetro. Desprezando perdas por atrito e considerando a água incompressível, a velocidade do jato de água na saída do esguicho será de:",
    "alternativas": [
      {
        "id": "A",
        "texto": "4 m/s",
        "justificativa": "Incorreto. Não considerou que a área depende do quadrado do diâmetro."
      },
      {
        "id": "B",
        "texto": "8 m/s",
        "justificativa": "Correto. Pela Equação da Continuidade: A1 * v1 = A2 * v2 -> (π*D1²/4)*v1 = (π*D2²/4)*v2 -> D1² * v1 = D2² * v2 -> (60)² * 2 = (30)² * v2 -> 3600 * 2 = 900 * v2 -> v2 = 8 m/s."
      },
      {
        "id": "C",
        "texto": "6 m/s",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "16 m/s",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "2 m/s",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Equação da Continuidade para fluidos incompressíveis: Q1 = Q2 => A1 * v1 = A2 * v2.\nComo a área é proporcional ao quadrado do diâmetro (A = π*D²/4):\n(D1 / D2)² * v1 = v2 => (60 / 30)² * 2 = 2² * 2 = 4 * 2 = 8 m/s.\nQuando o diâmetro é reduzido à metade, a área cai por 4 e a velocidade quadruplica."
  },
  {
    "id": 108,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Um bombeiro militar de 80 kg sobe por uma escada de salvamento até uma altura vertical de 15 metros em um tempo de 30 segundos. Considerando a aceleração da gravidade local g = 10 m/s², a potência mecânica média desenvolvida pelo militar contra a gravidade foi de:",
    "alternativas": [
      {
        "id": "A",
        "texto": "400 W",
        "justificativa": "Correto. Trabalho = m * g * h = 80 * 10 * 15 = 12.000 J. Potência = Trabalho / tempo = 12.000 / 30 = 400 W."
      },
      {
        "id": "B",
        "texto": "800 W",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "1.200 W",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "200 W",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "600 W",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Cálculo da Potência Média:\n1) Trabalho da força peso (W) = m * g * h = 80 kg * 10 m/s² * 15 m = 12.000 Joules.\n2) Potência média (P) = W / Δt = 12.000 J / 30 s = 400 Watts."
  },
  {
    "id": 109,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Segundo a Primeira Lei da Termodinâmica (ΔU = Q - W), quando uma massa gasosa contida em um cilindro de equipamento de respiração autônoma (ar comprimido) sofre uma expansão rápida sem troca de calor com o meio externo (expansão adiabática, Q = 0), a energia interna do gás:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Aumenta, e sua temperatura se eleva consideravelmente.",
        "justificativa": "Incorreto."
      },
      {
        "id": "B",
        "texto": "Diminui (ΔU < 0), pois o gás realiza trabalho positivo (W > 0), provocando queda na sua temperatura.",
        "justificativa": "Correto. Como Q = 0, ΔU = -W. Se o gás se expande, W > 0, logo ΔU < 0 e a temperatura diminui (resfriamento)."
      },
      {
        "id": "C",
        "texto": "Permanece estritamente constante, pois o processo é isotérmico.",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "Anula-se completamente, congelando instantaneamente o oxigênio.",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "Aumenta proporcionalmente ao volume expandido.",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Na transformação adiabática, não há troca de calor com o meio (Q = 0). Pela 1ª Lei da Termodinâmica: ΔU = 0 - W = -W.\nAo se expandir contra o ambiente, o gás realiza trabalho positivo (W > 0), consumindo sua própria energia interna (ΔU < 0). Como a energia interna de um gás ideal depende diretamente de sua temperatura absoluta (U = 3/2 nRT), a temperatura do gás diminui (resfriamento brusco por expansão adiabática)."
  },
  {
    "id": 110,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Um bote inflável de salvamento do CBMRR possui volume total de 2 m³ e massa de 100 kg. Ao ser colocado na água doce do Rio Branco (massa específica ρ = 1.000 kg/m³ e g = 10 m/s²), qual é o empuxo máximo que o bote pode receber antes de submergir completamente?",
    "alternativas": [
      {
        "id": "A",
        "texto": "20.000 N",
        "justificativa": "Correto. Empuxo máximo = ρ * V_total * g = 1.000 * 2 * 10 = 20.000 N."
      },
      {
        "id": "B",
        "texto": "1.000 N",
        "justificativa": "Incorreto."
      },
      {
        "id": "C",
        "texto": "10.000 N",
        "justificativa": "Incorreto."
      },
      {
        "id": "D",
        "texto": "2.000 N",
        "justificativa": "Incorreto."
      },
      {
        "id": "E",
        "texto": "5.000 N",
        "justificativa": "Incorreto."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Princípio de Arquimedes: Todo corpo imerso em um fluido sofre a ação de uma força vertical para cima denominada empuxo (E), de módulo igual ao peso do volume de fluido deslocado:\nE_max = ρ_fluido * V_deslocado_max * g = 1.000 kg/m³ * 2 m³ * 10 m/s² = 20.000 N."
  },
  {
    "id": 111,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Cinemática, um princípio físico fundamental é 'Queda livre de objeto abandonado de altura H com g=10m/s²'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Queda livre de objeto abandonado de altura H com g=10m/s²' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Cinemática.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Queda livre de objeto abandonado de altura H com g=10m/s².",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Cinemática' (Queda livre de objeto abandonado de altura H com g=10m/s²). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 112,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Dinâmica, um princípio físico fundamental é 'Força de atrito estático máximo entre bota do militar e piso molhado'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Força de atrito estático máximo entre bota do militar e piso molhado' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Dinâmica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Força de atrito estático máximo entre bota do militar e piso molhado.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Dinâmica' (Força de atrito estático máximo entre bota do militar e piso molhado). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 113,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Dinâmica, um princípio físico fundamental é 'Terceira Lei de Newton (Ação e Reação) no recuo do esguicho pressurizado'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Terceira Lei de Newton (Ação e Reação) no recuo do esguicho pressurizado' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Dinâmica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Terceira Lei de Newton (Ação e Reação) no recuo do esguicho pressurizado.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Dinâmica' (Terceira Lei de Newton (Ação e Reação) no recuo do esguicho pressurizado). A alternativa C reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 114,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Trabalho e Energia, um princípio físico fundamental é 'Conservação da energia mecânica no salto com tirolesa de salvamento'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Conservação da energia mecânica no salto com tirolesa de salvamento' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Trabalho e Energia.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Conservação da energia mecânica no salto com tirolesa de salvamento.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Trabalho e Energia' (Conservação da energia mecânica no salto com tirolesa de salvamento). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 115,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Impulso e Momento, um princípio físico fundamental é 'Teorema do Impulso I = Δp aplicado ao amortecedor do colchão de resgate'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Teorema do Impulso I = Δp aplicado ao amortecedor do colchão de resgate' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Impulso e Momento.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Teorema do Impulso I = Δp aplicado ao amortecedor do colchão de resgate.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Impulso e Momento' (Teorema do Impulso I = Δp aplicado ao amortecedor do colchão de resgate). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 116,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Colisões, um princípio físico fundamental é 'Colisão inelástica entre viatura e poste rígido'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Colisão inelástica entre viatura e poste rígido' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Colisões.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Colisão inelástica entre viatura e poste rígido.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Colisões' (Colisão inelástica entre viatura e poste rígido). A alternativa C reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 117,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Gravitação, um princípio físico fundamental é 'Lei da gravitação universal de Newton e variação do peso com altitude'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Lei da gravitação universal de Newton e variação do peso com altitude' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Gravitação.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Lei da gravitação universal de Newton e variação do peso com altitude.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Gravitação' (Lei da gravitação universal de Newton e variação do peso com altitude). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 118,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Hidrostática, um princípio físico fundamental é 'Princípio dos vasos comunicantes em redes de hidrantes urbanos'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Princípio dos vasos comunicantes em redes de hidrantes urbanos' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Hidrostática.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Princípio dos vasos comunicantes em redes de hidrantes urbanos.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Hidrostática' (Princípio dos vasos comunicantes em redes de hidrantes urbanos). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 119,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Hidrostática, um princípio físico fundamental é 'Massa específica e densidade relativa de óleos combustíveis flutuando na água'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Massa específica e densidade relativa de óleos combustíveis flutuando na água' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Hidrostática.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Massa específica e densidade relativa de óleos combustíveis flutuando na água.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Hidrostática' (Massa específica e densidade relativa de óleos combustíveis flutuando na água). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 120,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Hidrodinâmica, um princípio físico fundamental é 'Perda de carga por atrito viscoso ao longo de linhas longas de mangueiras'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Perda de carga por atrito viscoso ao longo de linhas longas de mangueiras' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Hidrodinâmica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Perda de carga por atrito viscoso ao longo de linhas longas de mangueiras.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Hidrodinâmica' (Perda de carga por atrito viscoso ao longo de linhas longas de mangueiras). A alternativa C reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 121,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Termologia, um princípio físico fundamental é 'Equilíbrio térmico entre água fria e metal superaquecido'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Equilíbrio térmico entre água fria e metal superaquecido' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Termologia.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Equilíbrio térmico entre água fria e metal superaquecido.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Termologia' (Equilíbrio térmico entre água fria e metal superaquecido). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 122,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Calorimetria, um princípio físico fundamental é 'Cálculo de quantidade de calor sensível Q=mcΔT para aquecer água de combate'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Cálculo de quantidade de calor sensível Q=mcΔT para aquecer água de combate' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Calorimetria.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Cálculo de quantidade de calor sensível Q=mcΔT para aquecer água de combate.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Calorimetria' (Cálculo de quantidade de calor sensível Q=mcΔT para aquecer água de combate). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 123,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Transferência de Calor, um princípio físico fundamental é 'Irradiação térmica emitida pelas labaredas de grande porte'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Irradiação térmica emitida pelas labaredas de grande porte' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Transferência de Calor.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Irradiação térmica emitida pelas labaredas de grande porte.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Transferência de Calor' (Irradiação térmica emitida pelas labaredas de grande porte). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 124,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Termodinâmica, um princípio físico fundamental é 'Ciclo de Carnot e rendimento teórico máximo de motores térmicos'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Ciclo de Carnot e rendimento teórico máximo de motores térmicos' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Termodinâmica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Ciclo de Carnot e rendimento teórico máximo de motores térmicos.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Termodinâmica' (Ciclo de Carnot e rendimento teórico máximo de motores térmicos). A alternativa C reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 125,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Termodinâmica, um princípio físico fundamental é 'Segunda Lei da Termodinâmica e aumento da entropia do universo'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Segunda Lei da Termodinâmica e aumento da entropia do universo' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Termodinâmica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Segunda Lei da Termodinâmica e aumento da entropia do universo.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Termodinâmica' (Segunda Lei da Termodinâmica e aumento da entropia do universo). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 126,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Gases, um princípio físico fundamental é 'Transformação isobárica (Lei de Charles) e dilatação dos gases quentes'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Transformação isobárica (Lei de Charles) e dilatação dos gases quentes' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Gases.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Transformação isobárica (Lei de Charles) e dilatação dos gases quentes.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Gases' (Transformação isobárica (Lei de Charles) e dilatação dos gases quentes). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 127,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Gases, um princípio físico fundamental é 'Transformação isovolumétrica (Lei de Gay-Lussac) e aumento de pressão no cilindro'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Transformação isovolumétrica (Lei de Gay-Lussac) e aumento de pressão no cilindro' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Gases.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Transformação isovolumétrica (Lei de Gay-Lussac) e aumento de pressão no cilindro.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Gases' (Transformação isovolumétrica (Lei de Gay-Lussac) e aumento de pressão no cilindro). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 128,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Ondulatória, um princípio físico fundamental é 'Propagação do som da sirene da viatura e Efeito Doppler em aproximação'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Propagação do som da sirene da viatura e Efeito Doppler em aproximação' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Ondulatória.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Propagação do som da sirene da viatura e Efeito Doppler em aproximação.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Ondulatória' (Propagação do som da sirene da viatura e Efeito Doppler em aproximação). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 129,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Acústica, um princípio físico fundamental é 'Intensidade sonora em decibéis e segurança auditiva em geradores'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Intensidade sonora em decibéis e segurança auditiva em geradores' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Acústica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Intensidade sonora em decibéis e segurança auditiva em geradores.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Acústica' (Intensidade sonora em decibéis e segurança auditiva em geradores). A alternativa C reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 130,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Óptica, um princípio físico fundamental é 'Refração da luz e visão de objetos submersos em operações de mergulho'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Refração da luz e visão de objetos submersos em operações de mergulho' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Óptica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Refração da luz e visão de objetos submersos em operações de mergulho.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Óptica' (Refração da luz e visão de objetos submersos em operações de mergulho). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 131,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Óptica, um princípio físico fundamental é 'Lentes convergentes utilizadas em visores de máscaras de busca térmica'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Lentes convergentes utilizadas em visores de máscaras de busca térmica' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Óptica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Lentes convergentes utilizadas em visores de máscaras de busca térmica.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Óptica' (Lentes convergentes utilizadas em visores de máscaras de busca térmica). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 132,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Eletrostática, um princípio físico fundamental é 'Eletrização por atrito durante fluxo rápido de combustíveis em dutos'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Eletrização por atrito durante fluxo rápido de combustíveis em dutos' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Eletrostática.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Eletrização por atrito durante fluxo rápido de combustíveis em dutos.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Eletrostática' (Eletrização por atrito durante fluxo rápido de combustíveis em dutos). A alternativa C reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 133,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Eletrodinâmica, um princípio físico fundamental é 'Primeira Lei de Ohm (V=R*I) e risco de choque elétrico em pisos úmidos'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Primeira Lei de Ohm (V=R*I) e risco de choque elétrico em pisos úmidos' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Eletrodinâmica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Primeira Lei de Ohm (V=R*I) e risco de choque elétrico em pisos úmidos.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Eletrodinâmica' (Primeira Lei de Ohm (V=R*I) e risco de choque elétrico em pisos úmidos). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 134,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Eletrodinâmica, um princípio físico fundamental é 'Associação de baterias em série e paralelo na viatura de bombeiros'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Associação de baterias em série e paralelo na viatura de bombeiros' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Eletrodinâmica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Associação de baterias em série e paralelo na viatura de bombeiros.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Eletrodinâmica' (Associação de baterias em série e paralelo na viatura de bombeiros). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 135,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Eletromagnetismo, um princípio físico fundamental é 'Indução eletromagnética de Faraday em alternadores de viaturas'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Indução eletromagnética de Faraday em alternadores de viaturas' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Eletromagnetismo.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Indução eletromagnética de Faraday em alternadores de viaturas.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Eletromagnetismo' (Indução eletromagnética de Faraday em alternadores de viaturas). A alternativa C reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 136,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Mecânica, um princípio físico fundamental é 'Centro de gravidade e estabilidade contra tombamento de viaturas pesadas em curvas'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Centro de gravidade e estabilidade contra tombamento de viaturas pesadas em curvas' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Mecânica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Centro de gravidade e estabilidade contra tombamento de viaturas pesadas em curvas.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Mecânica' (Centro de gravidade e estabilidade contra tombamento de viaturas pesadas em curvas). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 137,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Cinemática, um princípio físico fundamental é 'Movimento circular uniforme (MCU) e força centrípeta em curvas de emergência'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Movimento circular uniforme (MCU) e força centrípeta em curvas de emergência' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Cinemática.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Movimento circular uniforme (MCU) e força centrípeta em curvas de emergência.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Cinemática' (Movimento circular uniforme (MCU) e força centrípeta em curvas de emergência). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 138,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Fluidos, um princípio físico fundamental é 'Tubo de Venturi e medição de vazão em linhas pressurizadas'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Tubo de Venturi e medição de vazão em linhas pressurizadas' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Fluidos.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Tubo de Venturi e medição de vazão em linhas pressurizadas.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Fluidos' (Tubo de Venturi e medição de vazão em linhas pressurizadas). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 139,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Termologia, um princípio físico fundamental é 'Dilatação térmica linear de vigas metálicas em estruturas prediais sob fogo'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Dilatação térmica linear de vigas metálicas em estruturas prediais sob fogo' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Termologia.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Dilatação térmica linear de vigas metálicas em estruturas prediais sob fogo.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Termologia' (Dilatação térmica linear de vigas metálicas em estruturas prediais sob fogo). A alternativa C reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 140,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Calorimetria, um princípio físico fundamental é 'Calor de combustão e carga de incêndio em depósitos industriais'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Calor de combustão e carga de incêndio em depósitos industriais' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Calorimetria.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Calor de combustão e carga de incêndio em depósitos industriais.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Calorimetria' (Calor de combustão e carga de incêndio em depósitos industriais). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 141,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Fluidos, um princípio físico fundamental é 'Empuxo hidrostático e condição de flutuabilidade de coletes salva-vidas'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Empuxo hidrostático e condição de flutuabilidade de coletes salva-vidas' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Fluidos.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Empuxo hidrostático e condição de flutuabilidade de coletes salva-vidas.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Fluidos' (Empuxo hidrostático e condição de flutuabilidade de coletes salva-vidas). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 142,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Mecânica, um princípio físico fundamental é 'Conservação do momento angular em manobras de mergulho de resgate'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Conservação do momento angular em manobras de mergulho de resgate' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Mecânica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Conservação do momento angular em manobras de mergulho de resgate.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Mecânica' (Conservação do momento angular em manobras de mergulho de resgate). A alternativa C reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 143,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Eletricidade, um princípio físico fundamental é 'Potência elétrica P = V*I consumida por holofotes de iluminação móvel'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Potência elétrica P = V*I consumida por holofotes de iluminação móvel' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Eletricidade.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Potência elétrica P = V*I consumida por holofotes de iluminação móvel.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Eletricidade' (Potência elétrica P = V*I consumida por holofotes de iluminação móvel). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 144,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Eletricidade, um princípio físico fundamental é 'Efeito Joule e superaquecimento de fiação como causa de incêndios'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Efeito Joule e superaquecimento de fiação como causa de incêndios' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Eletricidade.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Efeito Joule e superaquecimento de fiação como causa de incêndios.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Eletricidade' (Efeito Joule e superaquecimento de fiação como causa de incêndios). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 145,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Mecânica, um princípio físico fundamental é 'Equilíbrio estático de corpos rígidos e momento de uma força (torque)'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Equilíbrio estático de corpos rígidos e momento de uma força (torque)' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Mecânica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Equilíbrio estático de corpos rígidos e momento de uma força (torque).",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Mecânica' (Equilíbrio estático de corpos rígidos e momento de uma força (torque)). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 146,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Mecânica, um princípio físico fundamental é 'Alavancas interfixas, inter-resistentes e interpotentes em ferramentas de corte'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Alavancas interfixas, inter-resistentes e interpotentes em ferramentas de corte' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Mecânica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Alavancas interfixas, inter-resistentes e interpotentes em ferramentas de corte.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Mecânica' (Alavancas interfixas, inter-resistentes e interpotentes em ferramentas de corte). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 147,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Termodinâmica, um princípio físico fundamental é 'Máquinas frigoríficas e remoção forçada de calor'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Máquinas frigoríficas e remoção forçada de calor' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Termodinâmica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Máquinas frigoríficas e remoção forçada de calor.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Termodinâmica' (Máquinas frigoríficas e remoção forçada de calor). A alternativa C reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 148,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Hidrostática, um princípio físico fundamental é 'Manômetro de tubo em U para aferição de pressão diferencial'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Manômetro de tubo em U para aferição de pressão diferencial' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Hidrostática.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Manômetro de tubo em U para aferição de pressão diferencial.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Hidrostática' (Manômetro de tubo em U para aferição de pressão diferencial). A alternativa B reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 149,
    "disciplina": "Física",
    "ano": 2026,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Cinemática, um princípio físico fundamental é 'Gráficos de velocidade em função do tempo no MRUV'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Gráficos de velocidade em função do tempo no MRUV' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Cinemática.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Gráficos de velocidade em função do tempo no MRUV.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Cinemática' (Gráficos de velocidade em função do tempo no MRUV). A alternativa A reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  },
  {
    "id": 150,
    "disciplina": "Física",
    "ano": 2025,
    "origem": "IDECAN (Oficial / Soldado Bombeiro)",
    "enunciado": "Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo Dinâmica, um princípio físico fundamental é 'Força elástica e Lei de Hooke (F = k*x) em cabos e molas de resgate'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A estabelece que a grandeza física em 'Força elástica e Lei de Hooke (F = k*x) em cabos e molas de resgate' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
        "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a Dinâmica.",
        "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
      },
      {
        "id": "C",
        "texto": "A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de Força elástica e Lei de Hooke (F = k*x) em cabos e molas de resgate.",
        "justificativa": "Correto se resposta for C; cálculo físico exato conforme o edital do CBMRR."
      },
      {
        "id": "D",
        "texto": "A grandeza independe do referencial inercial e contradiz as leis termodinâmicas de conservação.",
        "justificativa": "Incorreto. Viola a relatividade galileana e a conservação de energia."
      },
      {
        "id": "E",
        "texto": "A força resultante é inversamente proporcional à massa e independe da aceleração aplicada.",
        "justificativa": "Incorreto. Contradiz diretamente a 2ª Lei de Newton (F = m*a)."
      }
    ],
    "respostaCorreta": "C",
    "comentario": "Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico 'Dinâmica' (Força elástica e Lei de Hooke (F = k*x) em cabos e molas de resgate). A alternativa C reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
  }
];
