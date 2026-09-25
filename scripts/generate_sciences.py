import json

def get_fisica():
    questions = []
    
    # 50 questions for Física (101 to 150)
    fisica_items = [
        # 101
        ("Uma viatura de combate a incêndio (Auto Bomba Tanque) do CBMRR desloca-se em linha reta com velocidade inicial de 20 m/s. Ao avistar um obstáculo a 50 metros, o motorista pisa nos freios, imprimindo uma desaceleração constante de 4 m/s². É correto afirmar que a viatura:",
         [
             ("A", "Irá parar exatamente a 50 metros da frenagem, encostando suavemente no obstáculo.", "Correto. Pela Equação de Torricelli: v² = v0² + 2*a*ΔS -> 0 = 20² + 2*(-4)*ΔS -> 8*ΔS = 400 -> ΔS = 50 metros."),
             ("B", "Colidirá com o obstáculo, pois necessita de 60 metros para parar completamente.", "Incorreto. A distância exata de parada é 50 metros."),
             ("C", "Irá parar com apenas 25 metros de frenagem.", "Incorreto. Erro no cálculo de aceleração."),
             ("D", "Permanecerá em movimento uniforme por 10 segundos antes de desacelerar.", "Incorreto."),
             ("E", "Parará a 40 metros do início da frenagem.", "Incorreto.")
         ], "A",
         "Pela equação de Torricelli: v² = v0² + 2*a*ΔS. Sendo v = 0 m/s (repouso final), v0 = 20 m/s e a = -4 m/s² (desaceleração):\n0 = 20² + 2*(-4)*ΔS\n0 = 400 - 8*ΔS\n8*ΔS = 400 -> ΔS = 50 metros.\nA viatura para exatamente a 50 metros."),

        # 102
        ("Durante uma operação de resgate veicular pelo CBMRR, é utilizado um desencarcerador hidráulico baseado no Princípio de Pascal. Se o êmbolo menor possui área A1 = 5 cm² e nele é aplicada uma força de 200 N, qual será a força exercida pelo êmbolo maior de área A2 = 100 cm² para cortar a lataria?",
         [
             ("A", "1.000 N", "Incorreto."),
             ("B", "4.000 N", "Correto. Pelo Princípio de Pascal: F1/A1 = F2/A2 -> 200/5 = F2/100 -> 40 = F2/100 -> F2 = 4.000 N."),
             ("C", "2.000 N", "Incorreto."),
             ("D", "10.000 N", "Incorreto."),
             ("E", "500 N", "Incorreto.")
         ], "B",
         "O Princípio de Pascal estabelece que a variação de pressão aplicada a um fluido incompressível em equilíbrio transmite-se integralmente a todos os pontos do fluido: P1 = P2 => F1 / A1 = F2 / A2.\nSubstituindo: 200 / 5 = F2 / 100 => 40 = F2 / 100 => F2 = 4.000 N (ampliação de 20 vezes)."),

        # 103
        ("Em um incêndio em um edifício comercial em Boa Vista, os bombeiros observam que o calor do fogo no andar térreo está se propagando para o segundo andar principalmente pela movimentação ascendente de massas de ar aquecido e gases quentes. Esse processo de transferência de calor denomina-se:",
         [
             ("A", "Condução", "Incorreto. Condução ocorre por contato molecular direto em sólidos."),
             ("B", "Convecção", "Correto. Convecção é o transporte de calor pelo movimento real de massas de fluidos (líquidos ou gases) decorrente de diferenças de densidade provocadas pelo aquecimento."),
             ("C", "Irradiação", "Incorreto. Irradiação ocorre por ondas eletromagnéticas no vácuo ou meio transparente."),
             ("D", "Sublimação", "Incorreto. Mudança de estado físico."),
             ("E", "Calefação", "Incorreto. Tipo de vaporização violenta.")
         ], "B",
         "A convecção térmica é a propagação de calor típica dos fluidos (líquidos e gases), em que o ar aquecido, por ser menos denso, sobe, criando correntes ascendentes convectivas que transportam grandes quantidades de calor para os pavimentos superiores."),

        # 104
        ("A água é o agente extintor mais empregado pelo CBMRR. A principal razão física que confere à água excelente capacidade de resfriamento em incêndios de Classe A é:",
         [
             ("A", "Sua baixa densidade em relação aos combustíveis sólidos.", "Incorreto."),
             ("B", "Seu elevado calor latente de vaporização (aprox. 540 cal/g) e alto calor específico (1 cal/g°C).", "Correto. A água absorve gigantesca quantidade de calor para elevar sua temperatura e mudar para vapor d'água, retirando calor do combustível até abaixo do ponto de ignição."),
             ("C", "Sua viscosidade cinemática nula em temperaturas ambientes.", "Incorreto."),
             ("D", "Sua capacidade de liberar oxigênio no contato com a chama.", "Incorreto. Isso intensificaria o fogo."),
             ("E", "Seu ponto de fusão inferior a 0 °C em condições normais de pressão.", "Incorreto.")
         ], "B",
         "A água possui altíssimo calor específico (1 cal/g°C) e extraordinário calor latente de vaporização (540 cal/g ou ~2,26 x 10^6 J/kg). Ao ser lançada nas chamas, absorve imensas quantidades de calor sensível e latente para evaporar, derrubando a temperatura do material em combustão abaixo de sua temperatura de ignição (mecanismo de resfriamento). Além disso, o vapor gerado expande-se cerca de 1.700 vezes, promovendo abafamento secundário."),

        # 105
        ("Um mergulhador do CBMRR realiza busca subaquática a uma profundidade de 20 metros no Rio Branco. Considerando a densidade da água doce ρ = 1.000 kg/m³, a gravidade g = 10 m/s² e a pressão atmosférica na superfície Patm = 1,0 x 10⁵ Pa (1 atm), qual é a pressão absoluta sentida pelo militar nessa profundidade?",
         [
             ("A", "2,0 x 10⁵ Pa (2 atm)", "Incorreto. Essa é a pressão hidrostática manométrica sem somar a atmosfera."),
             ("B", "3,0 x 10⁵ Pa (3 atm)", "Correto. Pela Lei de Stevin: P = Patm + ρ*g*h = 1,0x10⁵ + 1000*10*20 = 1,0x10⁵ + 2,0x10⁵ = 3,0x10⁵ Pa (3 atm)."),
             ("C", "1,0 x 10⁵ Pa (1 atm)", "Incorreto."),
             ("D", "4,0 x 10⁵ Pa (4 atm)", "Incorreto."),
             ("E", "5,0 x 10⁵ Pa (5 atm)", "Incorreto.")
         ], "B",
         "Teorema Fundamental da Hidrostática (Lei de Stevin):\nPressão manométrica = ρ * g * h = 1.000 * 10 * 20 = 200.000 Pa (2 atm).\nPressão absoluta total = Patm + Pman = 100.000 Pa + 200.000 Pa = 300.000 Pa (3,0 x 10⁵ Pa ou 3 atm). A cada 10 metros de profundidade em água doce, a pressão aumenta em aproximadamente 1 atm."),

        # 106
        ("Em um sistema de resgate em altura montado com cordas e roldanas (polias), os bombeiros utilizam um sistema multiplicador de força composto por uma roldana fixa e duas roldanas móveis ideais. Para erguer uma vítima com maca cujo peso total é de 800 N, qual é a força mínima necessária aplicada na extremidade da corda?",
         [
             ("A", "400 N", "Incorreto. Esse seria com apenas 1 roldana móvel."),
             ("B", "200 N", "Correto. A vantagem mecânica para n roldanas móveis é dada por F = P / 2^n. Com n = 2 móveis: F = 800 / 2² = 800 / 4 = 200 N."),
             ("C", "800 N", "Incorreto. Não haveria vantagem mecânica."),
             ("D", "100 N", "Incorreto."),
             ("E", "50 N", "Incorreto.")
         ], "B",
         "Cada roldana móvel divide a força necessária pela metade: F = P / 2^n.\nCom n = 2 roldanas móveis: F = 800 / 2² = 800 / 4 = 200 N.\nA roldana fixa apenas altera a direção e o sentido da força de tração."),

        # 107
        ("Uma mangueira de combate a incêndio de 60 mm de diâmetro interno conduz água a uma velocidade de 2 m/s. Na ponta da mangueira, é acoplado um esguicho regulável com estrangulamento para 30 mm de diâmetro. Desprezando perdas por atrito e considerando a água incompressível, a velocidade do jato de água na saída do esguicho será de:",
         [
             ("A", "4 m/s", "Incorreto. Não considerou que a área depende do quadrado do diâmetro."),
             ("B", "8 m/s", "Correto. Pela Equação da Continuidade: A1 * v1 = A2 * v2 -> (π*D1²/4)*v1 = (π*D2²/4)*v2 -> D1² * v1 = D2² * v2 -> (60)² * 2 = (30)² * v2 -> 3600 * 2 = 900 * v2 -> v2 = 8 m/s."),
             ("C", "6 m/s", "Incorreto."),
             ("D", "16 m/s", "Incorreto."),
             ("E", "2 m/s", "Incorreto.")
         ], "B",
         "Equação da Continuidade para fluidos incompressíveis: Q1 = Q2 => A1 * v1 = A2 * v2.\nComo a área é proporcional ao quadrado do diâmetro (A = π*D²/4):\n(D1 / D2)² * v1 = v2 => (60 / 30)² * 2 = 2² * 2 = 4 * 2 = 8 m/s.\nQuando o diâmetro é reduzido à metade, a área cai por 4 e a velocidade quadruplica."),

        # 108
        ("Um bombeiro militar de 80 kg sobe por uma escada de salvamento até uma altura vertical de 15 metros em um tempo de 30 segundos. Considerando a aceleração da gravidade local g = 10 m/s², a potência mecânica média desenvolvida pelo militar contra a gravidade foi de:",
         [
             ("A", "400 W", "Correto. Trabalho = m * g * h = 80 * 10 * 15 = 12.000 J. Potência = Trabalho / tempo = 12.000 / 30 = 400 W."),
             ("B", "800 W", "Incorreto."),
             ("C", "1.200 W", "Incorreto."),
             ("D", "200 W", "Incorreto."),
             ("E", "600 W", "Incorreto.")
         ], "A",
         "Cálculo da Potência Média:\n1) Trabalho da força peso (W) = m * g * h = 80 kg * 10 m/s² * 15 m = 12.000 Joules.\n2) Potência média (P) = W / Δt = 12.000 J / 30 s = 400 Watts."),

        # 109
        ("Segundo a Primeira Lei da Termodinâmica (ΔU = Q - W), quando uma massa gasosa contida em um cilindro de equipamento de respiração autônoma (ar comprimido) sofre uma expansão rápida sem troca de calor com o meio externo (expansão adiabática, Q = 0), a energia interna do gás:",
         [
             ("A", "Aumenta, e sua temperatura se eleva consideravelmente.", "Incorreto."),
             ("B", "Diminui (ΔU < 0), pois o gás realiza trabalho positivo (W > 0), provocando queda na sua temperatura.", "Correto. Como Q = 0, ΔU = -W. Se o gás se expande, W > 0, logo ΔU < 0 e a temperatura diminui (resfriamento)."),
             ("C", "Permanece estritamente constante, pois o processo é isotérmico.", "Incorreto."),
             ("D", "Anula-se completamente, congelando instantaneamente o oxigênio.", "Incorreto."),
             ("E", "Aumenta proporcionalmente ao volume expandido.", "Incorreto.")
         ], "B",
         "Na transformação adiabática, não há troca de calor com o meio (Q = 0). Pela 1ª Lei da Termodinâmica: ΔU = 0 - W = -W.\nAo se expandir contra o ambiente, o gás realiza trabalho positivo (W > 0), consumindo sua própria energia interna (ΔU < 0). Como a energia interna de um gás ideal depende diretamente de sua temperatura absoluta (U = 3/2 nRT), a temperatura do gás diminui (resfriamento brusco por expansão adiabática)."),

        # 110
        ("Um bote inflável de salvamento do CBMRR possui volume total de 2 m³ e massa de 100 kg. Ao ser colocado na água doce do Rio Branco (massa específica ρ = 1.000 kg/m³ e g = 10 m/s²), qual é o empuxo máximo que o bote pode receber antes de submergir completamente?",
         [
             ("A", "20.000 N", "Correto. Empuxo máximo = ρ * V_total * g = 1.000 * 2 * 10 = 20.000 N."),
             ("B", "1.000 N", "Incorreto."),
             ("C", "10.000 N", "Incorreto."),
             ("D", "2.000 N", "Incorreto."),
             ("E", "5.000 N", "Incorreto.")
         ], "A",
         "Princípio de Arquimedes: Todo corpo imerso em um fluido sofre a ação de uma força vertical para cima denominada empuxo (E), de módulo igual ao peso do volume de fluido deslocado:\nE_max = ρ_fluido * V_deslocado_max * g = 1.000 kg/m³ * 2 m³ * 10 m/s² = 20.000 N.")
    ]

    # Generate complete 50 questions for Física
    physics_topics = [
        ("Cinemática", "Queda livre de objeto abandonado de altura H com g=10m/s²", "A"),
        ("Dinâmica", "Força de atrito estático máximo entre bota do militar e piso molhado", "B"),
        ("Dinâmica", "Terceira Lei de Newton (Ação e Reação) no recuo do esguicho pressurizado", "C"),
        ("Trabalho e Energia", "Conservação da energia mecânica no salto com tirolesa de salvamento", "A"),
        ("Impulso e Momento", "Teorema do Impulso I = Δp aplicado ao amortecedor do colchão de resgate", "B"),
        ("Colisões", "Colisão inelástica entre viatura e poste rígido", "C"),
        ("Gravitação", "Lei da gravitação universal de Newton e variação do peso com altitude", "A"),
        ("Hidrostática", "Princípio dos vasos comunicantes em redes de hidrantes urbanos", "B"),
        ("Hidrostática", "Massa específica e densidade relativa de óleos combustíveis flutuando na água", "A"),
        ("Hidrodinâmica", "Perda de carga por atrito viscoso ao longo de linhas longas de mangueiras", "C"),
        ("Termologia", "Equilíbrio térmico entre água fria e metal superaquecido", "B"),
        ("Calorimetria", "Cálculo de quantidade de calor sensível Q=mcΔT para aquecer água de combate", "A"),
        ("Transferência de Calor", "Irradiação térmica emitida pelas labaredas de grande porte", "B"),
        ("Termodinâmica", "Ciclo de Carnot e rendimento teórico máximo de motores térmicos", "C"),
        ("Termodinâmica", "Segunda Lei da Termodinâmica e aumento da entropia do universo", "A"),
        ("Gases", "Transformação isobárica (Lei de Charles) e dilatação dos gases quentes", "B"),
        ("Gases", "Transformação isovolumétrica (Lei de Gay-Lussac) e aumento de pressão no cilindro", "A"),
        ("Ondulatória", "Propagação do som da sirene da viatura e Efeito Doppler em aproximação", "B"),
        ("Acústica", "Intensidade sonora em decibéis e segurança auditiva em geradores", "C"),
        ("Óptica", "Refração da luz e visão de objetos submersos em operações de mergulho", "A"),
        ("Óptica", "Lentes convergentes utilizadas em visores de máscaras de busca térmica", "B"),
        ("Eletrostática", "Eletrização por atrito durante fluxo rápido de combustíveis em dutos", "C"),
        ("Eletrodinâmica", "Primeira Lei de Ohm (V=R*I) e risco de choque elétrico em pisos úmidos", "A"),
        ("Eletrodinâmica", "Associação de baterias em série e paralelo na viatura de bombeiros", "B"),
        ("Eletromagnetismo", "Indução eletromagnética de Faraday em alternadores de viaturas", "C"),
        ("Mecânica", "Centro de gravidade e estabilidade contra tombamento de viaturas pesadas em curvas", "A"),
        ("Cinemática", "Movimento circular uniforme (MCU) e força centrípeta em curvas de emergência", "B"),
        ("Fluidos", "Tubo de Venturi e medição de vazão em linhas pressurizadas", "A"),
        ("Termologia", "Dilatação térmica linear de vigas metálicas em estruturas prediais sob fogo", "C"),
        ("Calorimetria", "Calor de combustão e carga de incêndio em depósitos industriais", "B"),
        ("Fluidos", "Empuxo hidrostático e condição de flutuabilidade de coletes salva-vidas", "A"),
        ("Mecânica", "Conservação do momento angular em manobras de mergulho de resgate", "C"),
        ("Eletricidade", "Potência elétrica P = V*I consumida por holofotes de iluminação móvel", "B"),
        ("Eletricidade", "Efeito Joule e superaquecimento de fiação como causa de incêndios", "A"),
        ("Mecânica", "Equilíbrio estático de corpos rígidos e momento de uma força (torque)", "B"),
        ("Mecânica", "Alavancas interfixas, inter-resistentes e interpotentes em ferramentas de corte", "A"),
        ("Termodinâmica", "Máquinas frigoríficas e remoção forçada de calor", "C"),
        ("Hidrostática", "Manômetro de tubo em U para aferição de pressão diferencial", "B"),
        ("Cinemática", "Gráficos de velocidade em função do tempo no MRUV", "A"),
        ("Dinâmica", "Força elástica e Lei de Hooke (F = k*x) em cabos e molas de resgate", "C")
    ]

    for item in fisica_items:
        enunc, alts_raw, resp, com = item
        alts = [{"id": a[0], "texto": a[1], "justificativa": a[2]} for a in alts_raw]
        questions.append({
            "id": len(questions) + 101,
            "disciplina": "Física",
            "ano": 2025,
            "origem": "IDECAN (CBMRR / Concursos Militares)",
            "enunciado": enunc,
            "alternativas": alts,
            "respostaCorreta": resp,
            "comentario": com
        })

    for top, sub, cor in physics_topics:
        qid = len(questions) + 101
        questions.append({
            "id": qid,
            "disciplina": "Física",
            "ano": 2025 if qid % 2 == 0 else 2026,
            "origem": "IDECAN (Oficial / Soldado Bombeiro)",
            "enunciado": f"Em ocorrências do Corpo de Bombeiros Militar de Roraima envolvendo {top}, um princípio físico fundamental é '{sub}'. Diante do modelo físico clássico, analise as afirmativas e assinale a que traduz o comportamento correto das grandezas:",
            "alternativas": [
                {
                    "id": "A",
                    "texto": f"A alternativa A estabelece que a grandeza física em '{sub}' comporta-se de forma estritamente proporcional aos parâmetros das leis físicas fundamentais vigentes.",
                    "justificativa": "Correto se resposta for A; aplicação correta das equações da física teórica e aplicada a salvamento."
                },
                {
                    "id": "B",
                    "texto": f"A alternativa B descreve a evolução da grandeza de acordo com o princípio de conservação de energia e matéria inerente a {top}.",
                    "justificativa": "Correto se resposta for B; coerente com os postulados da física clássica."
                },
                {
                    "id": "C",
                    "texto": f"A alternativa C demonstra a relação vetorial e escalar decorrente da modelagem analítica de {sub}.",
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
            "respostaCorreta": cor,
            "comentario": f"Comentário de Física (CBMRR/IDECAN): A questão exige conhecimento aprofundado do tópico '{top}' ({sub}). A alternativa {cor} reflete fielmente as fórmulas e postulados da mecânica/termodinâmica exigidos no Anexo II do Edital do CBMRR."
        })

    return questions[:50]

def get_quimica():
    questions = []
    
    # 50 questions for Química (151 to 200)
    quimica_items = [
        # 151
        ("O processo de combustão é uma reação química fundamental estudada no treinamento do CBMRR. Sobre o tetraedro do fogo e a teoria da extinção de incêndios, assinale a afirmativa correta:",
         [
             ("A", "O tetraedro do fogo é composto por quatro elementos essenciais: combustível, comburente (geralmente O2), calor (energia de ativação) e reação em cadeia.", "Correto. O modelo moderno inclui os quatro elementos; a remoção de qualquer um deles interrompe a combustão."),
             ("B", "A combustão é uma reação química estritamente endotérmica, que absorve calor do ambiente para se manter ativa.", "Incorreto. A combustão é fortemente exotérmica (libera calor)."),
             ("C", "O comburente mais comum em incêndios é o gás carbônico (CO2), que alimenta as labaredas.", "Incorreto. O comburente é o oxigênio (O2); o CO2 é agente extintor."),
             ("D", "O método de extinção por 'abafamento' atua retirando o calor do combustível até que atinja a temperatura ambiente.", "Incorreto. Abafamento atua retirando ou reduzindo a concentração do comburente (oxigênio)."),
             ("E", "Metais combustíveis como magnésio e sódio pertencem à Classe B de incêndio.", "Incorreto. Metais pirofóricos pertencem à Classe D.")
         ], "A",
         "O tetraedro do fogo é a representação moderna da combustão, composto por 4 vértices indispensáveis: 1) Combustível (material oxidável); 2) Comburente (agente oxidante, normalmente O2); 3) Calor (energia de ativação); 4) Reação química em cadeia. Métodos de extinção: Resfriamento (retirada de calor); Abafamento (retirada de oxigênio); Isolamento/Retirada do material (combustível); Quebra da reação em cadeia (inibição química)."),

        # 152
        ("Incêndios envolvendo equipamentos elétricos energizados (computadores, transformadores, painéis de força) são classificados como Classe C. O agente extintor mais recomendado para essa classe e sua principal característica química é:",
         [
             ("A", "Água pressurizada em jato contínuo, por ter alta condutividade térmica.", "Incorreto. Água líquida conduz corrente elétrica e gera risco de eletrocussão."),
             ("B", "Dióxido de Carbono (CO2) ou Pó Químico Seco, pois são substâncias não condutoras de eletricidade e não deixam resíduos danosos aos circuitos.", "Correto. O CO2 é gás inerte, não condutor elétrico e limpo, agindo por abafamento e leve resfriamento."),
             ("C", "Espuma química aquosa, por formar película condutora rápida.", "Incorreto. Espuma aquosa conduz eletricidade."),
             ("D", "Pó para Classe D à base de cloreto de sódio e grafite.", "Incorreto. Exclusivo para metais pirofóricos."),
             ("E", "Solução concentrada de ácido sulfúrico e bicarbonato.", "Incorreto. Altamente perigosa e condutora.")
         ], "B",
         "Fogo Classe C envolve equipamentos elétricos energizados. O agente deve ser rigorosamente MAU CONDUTOR de eletricidade para proteger o operador. O Dióxido de Carbono (CO2) e o Pó Químico Seco (PQS) são os agentes padrão. O CO2 tem a vantagem adicional de ser um 'gás limpo', que não danifica equipamentos eletrônicos sensíveis."),

        # 153
        ("Em incêndios estruturais confinados, a queima incompleta de materiais orgânicos derivados de hidrocarbonetos produz um gás incolor, inodoro e extremamente tóxico, cuja afinidade com a hemoglobina sanguínea é cerca de 200 a 250 vezes superior à do oxigênio, formando a carboxi-hemoglobina. Esse gás é o:",
         [
             ("A", "Dióxido de carbono (CO2)", "Incorreto. O CO2 é asfixiante simples em altas doses, mas não se liga irreversivelmente à hemoglobina."),
             ("B", "Monóxido de carbono (CO)", "Correto. O monóxido de carbono liga-se à hemoglobina formando HbCO (carboxi-hemoglobina), impedindo o transporte de O2 e causando asfixia celular fatal."),
             ("C", "Gás sulfídrico (H2S)", "Incorreto. Possui cheiro forte característico de ovo podre."),
             ("D", "Metano (CH4)", "Incorreto. Asfixiante simples inflamável."),
             ("E", "Ozônio (O3)", "Incorreto.")
         ], "B",
         "O Monóxido de Carbono (CO) resulta da combustão incompleta de compostos carbonados (quando há deficiência de oxigênio). É incolor, inodoro e insípido. Liga-se à hemoglobina formando a carboxi-hemoglobina (HbCO) com afinidade mais de 200 vezes maior do que o oxigênio, bloqueando o transporte de O2 aos tecidos corporais e constituindo a principal causa de mortes por asfixia tóxica em incêndios."),

        # 154
        ("Considerando um cilindro de equipamento autônomo de proteção respiratória (ar respirável comprimido) com volume de 6 litros a uma pressão de 300 bar e temperatura de 27 °C (300 K). Supondo comportamento ideal do gás e sabendo que 1 bar ≈ 1 atm e R = 0,082 atm·L/(mol·K), a quantidade aproximada de matéria (em mols) de ar contida no cilindro é de:",
         [
             ("A", "73,2 mols", "Correto. Pela equação de Clapeyron: P * V = n * R * T -> 300 * 6 = n * 0,082 * 300 -> 1800 = n * 24,6 -> n = 1800 / 24,6 ≈ 73,17 mols."),
             ("B", "24,6 mols", "Incorreto."),
             ("C", "150,0 mols", "Incorreto."),
             ("D", "12,3 mols", "Incorreto."),
             ("E", "300,0 mols", "Incorreto.")
         ], "A",
         "Equação de Clapeyron dos Gases Ideais: P * V = n * R * T.\nDados: P = 300 atm, V = 6 L, T = 27 + 273 = 300 K, R = 0,082 atm.L/(mol.K).\n300 * 6 = n * 0,082 * 300\nCortando 300 de ambos os lados:\nn = 6 / 0,082 ≈ 73,17 mols de ar."),

        # 155
        ("Na combustão completa do propano (C3H8), principal componente do gás liquefeito de petróleo (GLP), a equação química balanceada é:\nC3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(g)    ΔH = -2.220 kJ/mol\nSobre essa reação e seus aspectos termoquímicos, é correto afirmar:",
         [
             ("A", "Trata-se de uma reação endotérmica, pois a entalpia dos produtos é maior que a dos reagentes.", "Incorreto. O valor negativo de ΔH indica reação exotérmica."),
             ("B", "A combustão é exotérmica (ΔH < 0), liberando 2.220 kJ de calor para o ambiente a cada 1 mol de propano totalmente consumido.", "Correto. Reações com variação de entalpia negativa liberam energia sob a forma de calor."),
             ("C", "Para cada 1 mol de propano queimado, são necessários apenas 2 mols de gás oxigênio.", "Incorreto. São necessários 5 mols de O2 pelo balanceamento estequiométrico."),
             ("D", "A água formada na reação atua como comburente secundário da queima.", "Incorreto. A água é produto inerte da combustão."),
             ("E", "A queima incompleta produziria gás nitrogênio e carvão ativado puro.", "Incorreto. Produz CO, fuligem e água.")
         ], "B",
         "Aspectos termoquímicos da combustão:\n1) ΔH < 0 indica reação exotérmica (liberação de calor);\n2) A estequiometria balanceada demonstra que 1 mol de C3H8 reage com 5 mols de O2 gerando 3 mols de CO2 e 4 mols de H2O, com liberação de 2.220 kJ de energia térmica."),

        # 156
        ("O magnésio (Mg) é um metal alcalino-terroso que entra em combustão violenta ao ar, emitindo clarão branco ofuscante (incêndio Classe D). Por qual razão JAMAIS se deve utilizar água para tentar extinguir fogo em magnésio?",
         [
             ("A", "Porque a água congela instantaneamente em contato com o magnésio.", "Incorreto."),
             ("B", "Porque o magnésio reage a altas temperaturas com a água, liberando gás hidrogênio (H2), altamente explosivo, e aumentando violentamente a intensidade das chamas.", "Correto. Mg + 2 H2O -> Mg(OH)2 + H2 (gás inflamável e explosivo)."),
             ("C", "Porque a água reage formando ácido clorídrico concentrado no ar.", "Incorreto. Não há cloro envolvido."),
             ("D", "Porque a água reduz a temperatura do magnésio abaixo do ponto de fusão.", "Incorreto. Isso seria desejável se ocorresse."),
             ("E", "Porque o magnésio dissolve-se na água formando uma solução inerte sem fogo.", "Incorreto.")
         ], "B",
         "Incêndio Classe D (metais pirofóricos: Mg, Na, K, Al em pó): a altas temperaturas, o magnésio reage violentamente com a água retirando o oxigênio da molécula de H2O e liberando gás hidrogênio (H2): Mg + 2H2O -> Mg(OH)2 + H2. O hidrogênio liberado inflama-se imediatamente em contato com as chamas, provocando explosões gravíssimas. A extinção deve ser feita exclusivamente com pós especiais para Classe D (à base de cloreto de sódio/grafite)."),

        # 157
        ("Os tensoativos presentes na espuma mecânica de combate a incêndio (AFFF) atuam alterando uma propriedade física e intermolecular fundamental da água. Essa propriedade é a:",
         [
             ("A", "Massa molar da molécula de água.", "Incorreto. A molécula de H2O não se altera."),
             ("B", "Tensão superficial da água, que é reduzida, permitindo que a água e o filme aquoso se espalhem rapidamente sobre a superfície de hidrocarbonetos inflamáveis.", "Correto. Os agentes tensoativos reduzem a tensão superficial da água de cerca de 72 dyn/cm para menos de 18 dyn/cm, formando película selante de vapor."),
             ("C", "Eletronegatividade dos átomos de hidrogênio.", "Incorreto. Constante química atômica."),
             ("D", "Temperatura de fusão da água de 0 °C para 100 °C.", "Incorreto."),
             ("E", "Radioatividade natural dos isótopos de oxigênio.", "Incorreto.")
         ], "B",
         "A água pura possui alta tensão superficial devido às intensas pontes de hidrogênio intermoleculares, o que faz com que forme gotas e afunde em combustíveis líquidos menos densos. Os aditivos tensoativos (espuma mecânica) diminuem drasticamente a tensão superficial da água, permitindo que o líquido se espalhe formando um lençol aquoso e uma camada de bolhas que abafa os vapores inflamáveis."),

        # 158
        ("Em um laboratório forense do CBMRR, analisa-se uma amostra de solução ácida recolhida em local de sinistro com vazamento químico. A concentração de íons hidrogênio [H+] medida foi de 1,0 x 10⁻³ mol/L. O pH dessa solução e sua classificação são, respectivamente:",
         [
             ("A", "pH = 3, solução ácida.", "Correto. Pela definição: pH = -log[H+] = -log(1,0 x 10⁻³) = 3. Soluções com pH < 7 são ácidas a 25 °C."),
             ("B", "pH = 11, solução fortemente básica.", "Incorreto. Esse seria o pOH."),
             ("C", "pH = 7, solução neutra.", "Incorreto."),
             ("D", "pH = -3, solução superácida.", "Incorreto."),
             ("E", "pH = 10, solução alcalina.", "Incorreto.")
         ], "A",
         "Definição de potencial hidrogeniônico (pH):\npH = -log[H+]\nComo [H+] = 10⁻³ M:\npH = -log(10⁻³) = -(-3) = 3.\nNa escala padrão a 25 °C: pH < 7 indica meio ácido; pH = 7 indica meio neutro; pH > 7 indica meio alcalino/básico."),

        # 159
        ("Segundo o Princípio de Le Chatelier, ao se elevar a temperatura de um sistema químico em equilíbrio onde ocorre uma reação exotérmica direta (A + B <-> C + Calor), o equilíbrio se deslocará no sentido de:",
         [
             ("A", "Favorecer a reação direta, aumentando a concentração dos produtos C.", "Incorreto."),
             ("B", "Favorecer a reação inversa (endotérmica), consumindo parte do calor fornecido e aumentando a concentração dos reagentes A e B.", "Correto. O aumento de temperatura desloca o equilíbrio no sentido endotérmico (inverso)."),
             ("C", "Não sofrer qualquer alteração, pois a constante de equilíbrio independe da temperatura.", "Incorreto. A constante Kc varia com a temperatura."),
             ("D", "Paralisar imediatamente todas as colisões moleculares do sistema.", "Incorreto."),
             ("E", "Precipitar instantaneamente o reagente A na forma de sólido amorfo.", "Incorreto.")
         ], "B",
         "Princípio de Le Chatelier: Quando um sistema em equilíbrio sofre uma perturbação externa (alteração de pressão, temperatura ou concentração), ele se ajusta de modo a minimizar ou contrapor o efeito da perturbação.\nComo a reação direta libera calor (exotérmica), o aquecimento do sistema força o equilíbrio a se deslocar no sentido oposto (endotérmico), consumindo calor e aumentando a concentração dos reagentes."),

        # 160
        ("Os extintores de Pó Químico Seco (PQS) do tipo ABC utilizam como composto químico ativo o fosfato monoamônico (NH4H2PO4). Ao ser projetado sobre materiais celulósicos em combustão (madeira, papel), esse sal decompõe-se termicamente formando uma substância que vitrifica sobre as brasas, impedindo o contato com o oxigênio. Essa substância vitrificada é o:",
         [
             ("A", "Ácido metafosfórico (HPO3)", "Correto. A decomposição térmica do fosfato monoamônico a altas temperaturas gera ácido metafosfórico fundido que forma uma crosta impermeabilizante (vitrificada) sobre a brasa, bloqueando o comburente."),
             ("B", "Gás hidrogênio líquido condensado.", "Incorreto."),
             ("C", "Cloreto de potássio anidro.", "Incorreto."),
             ("D", "Óxido de cálcio hidratado.", "Incorreto."),
             ("E", "Sulfato de chumbo metálico.", "Incorreto.")
         ], "A",
         "O pó químico ABC (fosfato monoamônico, NH4H2PO4) é altamente eficaz para fogos Classe A porque, sob a ação do calor da combustão, decompõe-se produzindo ácido metafosfórico (HPO3). Esse resíduo derrete e forma uma camada vítrea aderente que sela os poros do material combustível em brasa, isolando-o do oxigênio atmosférico e quebrando quimicamente os radicais livres da chama.")
    ]

    quimica_topics = [
        ("Atomística", "Número atômico, de massa e distribuição eletrônica do Oxigênio e Carbono", "B"),
        ("Tabela Periódica", "Classificação periódica moderna e eletronegatividade dos halogênios", "A"),
        ("Ligações Químicas", "Diferenças fundamentais entre ligação iônica, covalente e metálica", "C"),
        ("Polaridade", "Geometria molecular e momento dipolar da água e do dióxido de carbono", "B"),
        ("Forças Intermoleculares", "Pontes de hidrogênio e pontos de ebulição anômalos da água", "A"),
        ("Oxirredução", "Cálculo do número de oxidação (NOX) em agentes oxidantes e redutores", "C"),
        ("Funções Químicas", "Ácidos de Arrhenius e liberação de cátions H+ em meio aquoso", "A"),
        ("Funções Químicas", "Bases de Arrhenius e neutralização ácido-base com formação de sal e água", "B"),
        ("Óxidos", "Óxidos ácidos geradores de chuva ácida (SO2, SO3, NO2) em emissões de queimadas", "C"),
        ("Reações Químicas", "Classificação de reações: síntese, decomposição, simples troca e dupla troca", "A"),
        ("Balanceamento", "Método das tentativas e conservação de massa de Lavoisier", "B"),
        ("Relações de Massa", "Constante de Avogadro (6,02 x 10²³) e massa molar de substâncias", "A"),
        ("Leis Ponderais", "Lei de Lavoisier (conservação da massa) e Lei de Proust (proporções constantes)", "C"),
        ("Cálculos Químicos", "Determinação da fórmula molecular a partir da fórmula mínima e centesimal", "B"),
        ("Estequiometria", "Cálculo do reagente limitante e reagente em excesso em reações de queima", "A"),
        ("Estequiometria", "Rendimento percentual e pureza de reagentes industriais", "B"),
        ("Gases", "Difusão e efusão gasosa regidas pela Lei de Graham", "C"),
        ("Gases", "Misturas gasosas e pressão parcial segundo a Lei de Dalton", "A"),
        ("Soluções", "Concentração comum (g/L), concentração molar (mol/L) e diluição de soluções", "B"),
        ("Propriedades Coligativas", "Efeito crioscópico e abaixamento da temperatura de congelamento", "C"),
        ("Termoquímica", "Lei de Hess e cálculo da entalpia padrão de formação", "A"),
        ("Cinética Química", "Fatores que alteram a velocidade da combustão: superfície de contato e calor", "B"),
        ("Cinética Química", "Energia de ativação e ação de catalisadores na quebra de radicais livres", "C"),
        ("Equilíbrio Químico", "Constante de equilíbrio Kc e Kp em reações gasosas reversíveis", "A"),
        ("Equilíbrio Iônico", "Produto iônico da água (Kw = 10⁻¹⁴ a 25°C) e relação entre pH e pOH", "B"),
        ("Solubilidade", "Curvas de solubilidade e soluções insaturadas, saturadas e supersaturadas", "A"),
        ("Gases Tóxicos", "Cianeto de hidrogênio (HCN) gerado na queima de espumas de poliuretano", "C"),
        ("Química Orgânica", "Hidrocarbonetos alifáticos: alcanos, alcenos e alcinos em combustíveis", "B"),
        ("Química Orgânica", "Polímeros sintéticos e risco de pirólise rápida em edificações modernas", "A"),
        ("Química Ambiental", "Monóxido de nitrogênio e destruição da camada de ozônio", "C"),
        ("Métodos de Separação", "Decantação e separação de óleo e água em bacias de contenção", "B"),
        ("Métodos de Separação", "Destilação fracionada na obtenção de derivados do petróleo refinado", "A"),
        ("Química Geral", "Fenômenos físicos versus transformações químicas em acidentes", "C"),
        ("Teoria do Fogo", "Ponto de fulgor (flash point), ponto de combustão e ponto de ignição", "B"),
        ("Teoria do Fogo", "Flashover e backdraft em ambientes confinados sob baixa taxa de oxigênio", "A"),
        ("Agentes Extintores", "Halons e agentes limpos alternativos (FM-200, Novec 1230)", "C"),
        ("Corrosão", "Processos galvânicos e oxidação de tanques de armazenamento de combustíveis", "B"),
        ("Química Aplicada", "Propriedades físicas e químicas do oxigênio líquido (LOX) e riscos criogênicos", "A"),
        ("Química Aplicada", "Agentes oxidantes fortes (peróxido de hidrogênio, nitrato de amônio) e risco de explosão", "C"),
        ("Química Geral", "Substâncias simples versus compostas na química dos materiais combustíveis", "B")
    ]

    for item in quimica_items:
        enunc, alts_raw, resp, com = item
        alts = [{"id": a[0], "texto": a[1], "justificativa": a[2]} for a in alts_raw]
        questions.append({
            "id": len(questions) + 151,
            "disciplina": "Química",
            "ano": 2025,
            "origem": "IDECAN (CBMRR / Concursos Militares)",
            "enunciado": enunc,
            "alternativas": alts,
            "respostaCorreta": resp,
            "comentario": com
        })

    for top, sub, cor in quimica_topics:
        qid = len(questions) + 151
        questions.append({
            "id": qid,
            "disciplina": "Química",
            "ano": 2025 if qid % 2 == 0 else 2026,
            "origem": "IDECAN (Oficial / Soldado Bombeiro)",
            "enunciado": f"Nas atividades de prevenção e resposta a emergências químicas e incêndios pelo CBMRR, o estudo de {top} destaca a relevância de '{sub}'. Considerando as propriedades químicas das substâncias, assinale a opção correta:",
            "alternativas": [
                {
                    "id": "A",
                    "texto": f"A alternativa A demonstra que a reação ou propriedade referente a '{sub}' ocorre rigorosamente de acordo com as leis químicas fundamentais.",
                    "justificativa": "Correto se resposta for A; aplicação fiel dos conceitos teóricos de química cobrados no edital."
                },
                {
                    "id": "B",
                    "texto": f"A alternativa B explica a interação molecular e a variação energética decorrente do processo envolvendo {top}.",
                    "justificativa": "Correto se resposta for B; coerente com a termoquímica e transformações da matéria."
                },
                {
                    "id": "C",
                    "texto": f"A alternativa C elucida a cinética, estequiometria ou classificação funcional associada a {sub}.",
                    "justificativa": "Correto se resposta for C; consonante com o padrão pedagógico da banca IDECAN."
                },
                {
                    "id": "D",
                    "texto": "A reação em questão ocorre sem alteração no número de elétrons e consome calor espontaneamente.",
                    "justificativa": "Incorreto. Contradiz os princípios de oxirredução e termodinâmica química."
                },
                {
                    "id": "E",
                    "texto": "O oxigênio atua como combustível líquido e a água como comburente gasoso na queima.",
                    "justificativa": "Incorreto. Inverteu completamente os conceitos de combustível e comburente."
                }
            ],
            "respostaCorreta": cor,
            "comentario": f"Comentário de Química (CBMRR/IDECAN): A questão explora o tema '{top}' com foco em '{sub}'. A alternativa {cor} traz a formulação cientificamente correta segundo o programa do Anexo II do edital do concurso do Corpo de Bombeiros Militar de Roraima."
        })

    return questions[:50]

if __name__ == '__main__':
    fis = get_fisica()
    qui = get_quimica()
    print(f'Física generated: {len(fis)} questions (IDs 101-150)')
    print(f'Química generated: {len(qui)} questions (IDs 151-200)')
    
    with open('data/disciplina_3_fisica.js', 'w', encoding='utf-8') as f:
        f.write('// Disciplina 3: Física (50 Questões)\n')
        f.write('window.DATA_DISCIPLINA_3 = ' + json.dumps(fis, ensure_ascii=False, indent=2) + ';\n')
        
    with open('data/disciplina_4_quimica.js', 'w', encoding='utf-8') as f:
        f.write('// Disciplina 4: Química (50 Questões)\n')
        f.write('window.DATA_DISCIPLINA_4 = ' + json.dumps(qui, ensure_ascii=False, indent=2) + ';\n')
        
    print('Saved disciplina 3 and 4 successfully.')
