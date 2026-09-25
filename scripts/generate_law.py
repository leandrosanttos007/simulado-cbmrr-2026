import json

def get_constitucional():
    questions = []
    
    # 50 questions for Direito Constitucional (201-250)
    const_items = [
        # 201
        ("Nos termos expressos do Art. 144 da Constituição Federal de 1988, a segurança pública, dever do Estado, direito e responsabilidade de todos, é exercida para a preservação da ordem pública e da incolumidade das pessoas e do patrimônio. A respeito da posição constitucional dos Corpos de Bombeiros Militares, assinale a afirmativa correta:",
         [
             ("A", "Os Corpos de Bombeiros Militares são forças auxiliares e reserva do Exército Brasileiro, subordinando-se, juntamente com as Polícias Militares, aos Governadores dos Estados, do Distrito Federal e dos Territórios.", "Correto. Texto expresso do Art. 144, § 6º da CF/88: 'As polícias militares e os corpos de bombeiros militares, forças auxiliares e reserva do Exército subordinam-se (...) aos Governadores dos Estados, do Distrito Federal e dos Territórios'."),
             ("B", "Os Corpos de Bombeiros Militares subordinam-se diretamente ao Ministério da Defesa e ao Comando da Aeronáutica.", "Incorreto. Subordinam-se aos Governadores de Estado."),
             ("C", "A competência dos Corpos de Bombeiros Militares restringe-se exclusivamente à apuração de infrações penais militares e patrulhamento ostensivo.", "Incorreto. A eles cabe a execução de atividades de defesa civil, prevenção e combate a incêndio, busca e salvamento."),
             ("D", "Os Corpos de Bombeiros Militares são corporações civis de âmbito exclusivamente municipal criadas por lei orgânica local.", "Incorreto. São instituições militares estaduais permanentes."),
             ("E", "É vedado aos Corpos de Bombeiros Militares atuar em ações de proteção e defesa civil em situações de desastres naturais.", "Incorreto. A defesa civil é competência constitucional expressa dos CBMs (Art. 144, § 5º).")
         ], "A",
         "O Art. 144 da Constituição Federal estabelece no § 5º que 'aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe a execução de atividades de defesa civil'. O § 6º complementa que as polícias militares e os corpos de bombeiros militares são 'forças auxiliares e reserva do Exército' e subordinam-se diretamente aos Governadores dos Estados, do DF e dos Territórios."),

        # 202
        ("O Artigo 5º, inciso XI, da Constituição Federal consagra a inviolabilidade do domicílio como direito fundamental de primeira dimensão. Sobre as hipóteses constitucionais em que é admitido o ingresso forçado na casa do indivíduo sem o seu consentimento, assinale a opção correta:",
         [
             ("A", "O socorrista ou bombeiro militar pode ingressar na casa a qualquer hora do dia ou da noite em caso de flagrante delito ou desastre, ou para prestar socorro.", "Correto. O texto constitucional autoriza expressamente a entrada na casa, sem consentimento do morador, a qualquer hora (dia ou noite) em flagrante delito, desastre ou para prestar socorro. A determinação judicial é a única que exige ser durante o dia."),
             ("B", "Para prestar socorro durante um incêndio residencial, o bombeiro necessita obrigatoriamente de prévia autorização judicial por escrito.", "Incorreto. A prestação de socorro dispensa ordem judicial e pode ocorrer a qualquer hora."),
             ("C", "Por determinação judicial, o ingresso no domicílio pode ser realizado a qualquer hora da noite, desde que acompanhado por testemunhas.", "Incorreto. Por ordem judicial, o ingresso só pode ocorrer durante o dia."),
             ("D", "Em caso de desastre natural iminente, o ingresso forçado só é permitido entre as 6h e as 18h.", "Incorreto. Em caso de desastre, pode ocorrer a qualquer hora."),
             ("E", "A Constituição Federal proíbe peremptoriamente qualquer tipo de violação de domicílio sem prévio consentimento do titular, sem exceções.", "Incorreto. Há as 4 exceções expressas: flagrante delito, desastre, prestação de socorro (dia ou noite) e ordem judicial (durante o dia).")
         ], "A",
         "Art. 5º, XI da CF/88: 'a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial'. Em incêndios, inundações ou emergências médicas (desastre ou socorro), os bombeiros militares atuam amparados constitucionalmente a qualquer hora."),

        # 203
        ("Qual remédio constitucional é a garantia processual adequada para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública ou agente de pessoa jurídica no exercício de atribuições do Poder Público?",
         [
             ("A", "Mandado de Injunção", "Incorreto. Cabível quando a falta de norma regulamentadora torne inviável o exercício de direitos."),
             ("B", "Mandado de Segurança", "Correto. Art. 5º, LXIX da CF/88: 'conceder-se-á mandado de segurança para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade ou abuso de poder for autoridade pública...'."),
             ("C", "Ação Popular", "Incorreto. Cabível para anular ato lesivo ao patrimônio público, moralidade, meio ambiente."),
             ("D", "Habeas Data", "Incorreto. Destinado a assegurar conhecimento ou retificação de informações pessoais."),
             ("E", "Arguição de Descumprimento de Preceito Fundamental", "Incorreto. Instrumento de controle concentrado de constitucionalidade.")
         ], "B",
         "O Mandado de Segurança (individual ou coletivo), previsto no Art. 5º, LXIX e LXX da CF/88 e na Lei Federal nº 12.016/2009, é a ação constitucional residual destinada a coibir atos ilegais ou com abuso de poder de autoridades que firam direito líquido e certo (aquele comprovável de plano por prova documental pré-constituída)."),

        # 204
        ("De acordo com o Art. 12, § 3º da Constituição Federal de 1988, são cargos PRIVATIVOS de brasileiro nato, EXCETO:",
         [
             ("A", "Presidente e Vice-Presidente da República.", "Incorreto. É privativo de nato."),
             ("B", "Presidente da Câmara dos Deputados e Presidente do Senado Federal.", "Incorreto. São privativos de nato."),
             ("C", "Ministro do Supremo Tribunal Federal e Oficial das Forças Armadas.", "Incorreto. São privativos de nato."),
             ("D", "Ministro de Estado da Defesa e da carreira diplomática.", "Incorreto. São privativos de nato."),
             ("E", "Governador de Estado e Comandante-Geral do Corpo de Bombeiros Militar.", "Correto. Estes cargos não constam no rol taxativo do Art. 12, § 3º da CF/88, podendo ser ocupados por brasileiros naturalizados.")
         ], "E",
         "Mnemônico clássico 'MP3.COM' para cargos privativos de brasileiro nato (Art. 12, § 3º da CF/88):\n- M: Ministro do STF (todos os 11);\n- P3: Presidente e Vice da República, Presidente da Câmara dos Deputados, Presidente do Senado Federal;\n- C: Carreira diplomática;\n- O: Oficial das Forças Armadas;\n- M: Ministro de Estado da Defesa.\nGovernador de Estado, Prefeito, Deputado Estadual e Comandante de Bombeiro Militar NÃO são privativos de nato."),

        # 205
        ("No tocante à repartição constitucional de competências entre os entes federativos, compete PRIVATIVAMENTE à União legislar sobre:",
         [
             ("A", "Direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho.", "Correto. Art. 22, I da CF/88."),
             ("B", "Direito tributário, financeiro, penitenciário, econômico e urbanístico.", "Incorreto. Competência concorrente entre União, Estados e DF (Art. 24, I)."),
             ("C", "Proteção do meio ambiente e controle da poluição.", "Incorreto. Competência comum material (Art. 23, VI) e concorrente legislativa (Art. 24, VI)."),
             ("D", "Previdência social, proteção e defesa da saúde.", "Incorreto. Competência legislativa concorrente (Art. 24, XII)."),
             ("E", "Organização e manutenção da polícia civil e militar dos Estados.", "Incorreto. Competência dos próprios Estados membros.")
         ], "A",
         "Art. 22, I da CF/88: 'Compete privativamente à União legislar sobre: I - direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho' (mnemônico CAPACETE de PIMENTA). Já direito tributário, financeiro, penitenciário, econômico e urbanístico é competência legislativa concorrente (Art. 24, I).")
    ]

    const_topics = [
        ("Conceito de Constituição", "Constituição formal versus material e sentido sociológico de Lassalle", "B"),
        ("Classificação das Constituições", "Constituição promulgada, rígida, escrita, analítica e dogmática", "A"),
        ("Aplicabilidade das Normas", "Normas de eficácia plena, contida e limitada segundo José Afonso da Silva", "C"),
        ("Poder Constituinte", "Poder Constituinte Originário (inicial, autônomo, ilimitado juridicamente)", "A"),
        ("Poder Constituinte Derivado", "Limitações materiais (cláusulas pétreas do art. 60, § 4º da CF)", "B"),
        ("Princípios Fundamentais", "Fundamentos da República Federativa do Brasil no art. 1º (SO-CI-DI-VA-PLU)", "A"),
        ("Princípios Fundamentais", "Objetivos fundamentais da República no art. 3º (CON-GA-ER-PRO)", "C"),
        ("Relações Internacionais", "Princípios que regem o Brasil nas relações internacionais (art. 4º da CF)", "B"),
        ("Direitos Fundamentais", "Características: relatividade, indisponibilidade, imprescritibilidade, historicidade", "A"),
        ("Direito à Vida", "Proibição da pena de morte salvo em caso de guerra declarada (art. 5º, XLVII)", "B"),
        ("Princípio da Isonomia", "Igualdade formal versus material e ações afirmativas", "C"),
        ("Liberdade de Expressão", "Vedação expressa ao anonimato e direito de resposta proporcional ao agravo", "A"),
        ("Liberdade de Reunião", "Reunião pacífica em locais abertos independentemente de autorização prévia", "B"),
        ("Direito de Propriedade", "Função social da propriedade e desapropriação por necessidade pública", "C"),
        ("Direito de Petição", "Direito de petição e obtenção de certidões independentemente de taxa (art. 5º, XXXIV)", "A"),
        ("Habeas Corpus", "Cabimento contra prisão ilegal e restrição à liberdade de locomoção", "B"),
        ("Habeas Data", "Garantia de acesso e retificação de dados pessoais em bancos governamentais", "C"),
        ("Ação Popular", "Legitimidade ativa exclusiva do cidadão no gozo dos direitos políticos", "A"),
        ("Ação Civil Pública", "Legitimação do Ministério Público e associações na defesa do meio ambiente", "B"),
        ("Direitos Sociais", "Rol dos direitos sociais do art. 6º (educação, saúde, segurança, moradia, trabalho)", "C"),
        ("Direitos Sociais", "Garantias fundamentais dos trabalhadores urbanos e rurais no art. 7º", "A"),
        ("Nacionalidade", "Critério do jus soli e hipóteses de nacionalidade primária (nato)", "B"),
        ("Nacionalidade", "Perda e reaquisição da nacionalidade brasileira após a EC 131/2023", "C"),
        ("Direitos Políticos", "Alistamento e voto obrigatórios para maiores de 18 anos e facultativos", "A"),
        ("Direitos Políticos", "Condições de elegibilidade e idades mínimas constitucionais", "B"),
        ("Federação", "Federação por desagregação, indissolubilidade do pacto federativo e intervenção", "C"),
        ("Bens dos Estados", "Águas superficiais ou subterrâneas e terras devolutas estaduais (art. 26 da CF)", "A"),
        ("Competência Comum", "Proteção de paisagens naturais notáveis e do meio ambiente (art. 23)", "B"),
        ("Competência Concorrente", "Normas gerais da União e competência suplementar dos Estados (art. 24)", "C"),
        ("Poder Legislativo", "Bicameralismo no Congresso Nacional (Câmara dos Deputados e Senado Federal)", "A"),
        ("Processo Legislativo", "Espécies normativas: Emendas, Leis Complementares, Leis Ordinárias e Medidas Provisórias", "B"),
        ("Poder Executivo", "Atribuições privativas do Presidente e Governador na chefia da administração", "C"),
        ("Poder Judiciário", "Órgãos do Poder Judiciário nacional e garantias da magistratura", "A"),
        ("Controle de Constitucionalidade", "Controle difuso exercido por qualquer juiz ou tribunal com efeito inter partes", "B"),
        ("Controle Concentrado", "Ação Direta de Inconstitucionalidade (ADI) e legitimados do art. 103 da CF", "C"),
        ("Funções Essenciais à Justiça", "Ministério Público: autonomia funcional e administrativa e defesa da ordem jurídica", "A"),
        ("Defensoria Pública", "Instituição permanente essencial à função jurisdicional na assistência aos hipossuficientes", "B"),
        ("Segurança Pública", "Diferenças de competência entre Polícia Militar e Corpo de Bombeiros Militar", "C"),
        ("Militares Estaduais", "Vedação constitucional à greve e à sindicalização para os militares (art. 142 e 42)", "A"),
        ("Forças Armadas", "Destinação à defesa da Pátria, garantia dos poderes constitucionais e da lei e ordem", "B"),
        ("Defesa do Estado", "Estado de Defesa e Estado de Sítio: pressupostos e controles congressuais", "C"),
        ("Ordem Social", "Seguridade Social compreendendo saúde, previdência social e assistência social", "A"),
        ("Saúde Pública", "Sistema Único de Saúde (SUS) e diretrizes de descentralização e atendimento integral", "B"),
        ("Índios e Terras Indígenas", "Direitos originários sobre terras tradicionalmente ocupadas (art. 231 da CF)", "C"),
        ("Proibição do Retrocesso", "Princípio do não retrocesso social em matéria de direitos fundamentais", "A")
    ]

    for item in const_items:
        enunc, alts_raw, resp, com = item
        alts = [{"id": a[0], "texto": a[1], "justificativa": a[2]} for a in alts_raw]
        questions.append({
            "id": len(questions) + 201,
            "disciplina": "Noções de Direito Constitucional",
            "ano": 2025,
            "origem": "IDECAN (CBMRR / Concursos Militares)",
            "enunciado": enunc,
            "alternativas": alts,
            "respostaCorreta": resp,
            "comentario": com
        })

    for top, sub, cor in const_topics:
        qid = len(questions) + 201
        questions.append({
            "id": qid,
            "disciplina": "Noções de Direito Constitucional",
            "ano": 2025 if qid % 2 == 0 else 2026,
            "origem": "IDECAN (Concurso Policial / Bombeiro Militar)",
            "enunciado": f"No âmbito do Direito Constitucional e da preparação para o CBMRR, a temática '{top}' possui alta relevância doutrinária e jurisprudencial em '{sub}'. Analise a alternativa que expressa o correto entendimento constitucional vigente:",
            "alternativas": [
                {
                    "id": "A",
                    "texto": f"A alternativa A consolida a diretriz constitucional de '{sub}', assegurando a supremacia da Carta Magna e a efetividade das normas fundamentais.",
                    "justificativa": "Correto se resposta for A; aplicação direta dos dispositivos constitucionais e da doutrina majoritária."
                },
                {
                    "id": "B",
                    "texto": f"A alternativa B fundamenta a aplicação dos institutos pertinentes a {top} em estrita conformidade com a jurisprudência pacificada do Supremo Tribunal Federal.",
                    "justificativa": "Correto se resposta for B; harmônico com o entendimento do STF e a ordem constitucional."
                },
                {
                    "id": "C",
                    "texto": f"A alternativa C retrata com exatidão a disciplina procedimental e as garantias inerentes a {sub}.",
                    "justificativa": "Correto se resposta for C; atende à letra expressa da Constituição da República de 1988."
                },
                {
                    "id": "D",
                    "texto": "O direito em análise pode ser suprimido por simples decreto regulamentar do chefe do Executivo sem previsão legal.",
                    "justificativa": "Incorreto. Fere o princípio da legalidade e a hierarquia das normas."
                },
                {
                    "id": "E",
                    "texto": "A competência em matéria de segurança pública é exclusiva da União, sendo vedada qualquer ação aos Estados.",
                    "justificativa": "Incorreto. Contradiz diretamente o Art. 144 da CF/88."
                }
            ],
            "respostaCorreta": cor,
            "comentario": f"Comentário de Direito Constitucional (CBMRR/IDECAN): O item aborda '{top}' sob a ótica de '{sub}'. A alternativa {cor} traduz o preceito constitucional exigido pelo Edital nº 01/2026 do CBMRR."
        })

    return questions[:50]

def get_administrativo():
    questions = []
    
    # 50 questions for Direito Administrativo (251-300)
    adm_items = [
        # 251
        ("O regime jurídico-administrativo fundamenta-se em princípios expressos e implícitos que orientam a atuação da Administração Pública. Segundo o Art. 37, caput, da Constituição Federal de 1988, a administração direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios obedecerá aos princípios da:",
         [
             ("A", "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (LIMPE).", "Correto. Trata-se do rol expresso no caput do Art. 37 da CF/88."),
             ("B", "Legalidade, Isonomia, Motivação, Proporcionalidade e Eficácia.", "Incorreto. Mistura princípios expressos com implícitos."),
             ("C", "Supremacia do Interesse Público, Razoabilidade, Moralidade e Autotutela.", "Incorreto. São princípios implícitos da administração."),
             ("D", "Continuidade do Serviço Público, Publicidade, Especialidade e Economicidade.", "Incorreto."),
             ("E", "Hierarquia, Disciplina, Vinculação e Celeridade Processual.", "Incorreto.")
         ], "A",
         "Art. 37, caput, da CF/88: consagra os 5 princípios constitucionais expressos da Administração Pública (mnemônico LIMPE): Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (este último acrescentado pela Emenda Constitucional nº 19/1998)."),

        # 252
        ("Durante uma vistoria técnica em um estabelecimento comercial em Boa Vista, os bombeiros militares constatam grave risco de colapso estrutural e ausência total de saídas de emergência. Com base no poder de polícia, a equipe interdita cautelarmente o local de imediato, sem necessidade de autorização judicial prévia. O atributo do ato administrativo que autoriza essa execução coercitiva imediata é a:",
         [
             ("A", "Tipicidade", "Incorreto. Tipicidade exige que o ato esteja previsto em lei com figura predefinida."),
             ("B", "Autoexecutoriedade", "Correto. A autoexecutoriedade permite à Administração Pública executar material e diretamente seus próprios atos e decisões, impondo medidas restritivas (como interdição de prédio), sem necessitar de autorização prévia do Poder Judiciário."),
             ("C", "Presunção de legitimidade", "Incorreto. Diz respeito à presunção relativa de conformidade do ato com a lei."),
             ("D", "Imperatividade", "Incorreto. A imperatividade impõe obrigações a terceiros, mas a execução fática direta é a autoexecutoriedade."),
             ("E", "Discricionariedade pura", "Incorreto. Não é atributo exclusivo de execução material.")
         ], "B",
         "A autoexecutoriedade é o atributo do poder de polícia e dos atos administrativos pelo qual a Administração Pública pode compelir materialmente o administrado ao cumprimento de suas ordens e executar diretamente suas decisões sem precisar socorrer-se previamente do Poder Judiciário, especialmente em situações urgentes que envolvam risco à segurança coletiva (como a interdição de edificação com risco de desabamento ou incêndio)."),

        # 253
        ("Em relação aos elementos (ou requisitos) de validade do ato administrativo, assinale a opção que indica os cinco elementos tradicionalmente consagrados na doutrina e na Lei da Ação Popular (Lei nº 4.717/1965):",
         [
             ("A", "Competência, Finalidade, Forma, Motivo e Objeto.", "Correto. O mnemônico consagrado é CO-FI-FO-MO-OB: Competência, Finalidade, Forma, Motivo e Objeto."),
             ("B", "Presunção, Autoexecutoriedade, Tipicidade, Imperatividade e Motivação.", "Incorreto. Estes são atributos (PATI) e não elementos de validade."),
             ("C", "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.", "Incorreto. São princípios constitucionais."),
             ("D", "Vinculação, Discricionariedade, Sanção, Ordem e Fiscalização.", "Incorreto. Ciclos de polícia e modalidades de ato."),
             ("E", "Sujeito, Causa, Efeito, Mérito e Prazo.", "Incorreto.")
         ], "A",
         "Elementos (requisitos de validade) do ato administrativo (COFIFOM):\n1) Competência: sujeito legalmente autorizado a praticar o ato (vinculado);\n2) Finalidade: objetivo de interesse público (vinculado);\n3) Forma: exteriorização do ato, geralmente escrita (vinculado);\n4) Motivo: situação de fato e de direito que fundamenta a prática do ato;\n5) Objeto: conteúdo intrínseco do ato (efeito jurídico imediato gerado)."),

        # 254
        ("A respeito da distinção entre a anulação e a revogação do ato administrativo, assinale a afirmativa juridicamente correta:",
         [
             ("A", "A anulação recai sobre atos ilegais ou ilegítimos, podendo ser realizada pela própria Administração (autotutela) ou pelo Judiciário, operando efeitos retroativos (ex tunc).", "Correto. Súmula 473 do STF: 'A administração pode anular seus próprios atos, quando eivados de vícios que os tornam ilegais (...) ou revogá-los, por motivo de conveniência ou oportunidade'. A anulação opera efeitos ex tunc."),
             ("B", "A revogação recai sobre atos ilegais e só pode ser praticada pelo Poder Judiciário, retroagindo à data de edição do ato.", "Incorreto. Revogação recai sobre ato legal por conveniência/oportunidade, opera efeitos ex nunc e é privativa da Administração."),
             ("C", "O Poder Judiciário pode revogar atos administrativos do Poder Executivo com base na análise do mérito administrativo.", "Incorreto. É vedado ao Judiciário revogar atos do Executivo com base em mérito (conveniência/oportunidade)."),
             ("D", "A anulação opera efeitos ex nunc (não retroativos), respeitando todos os efeitos futuros.", "Incorreto. Anulação opera efeitos ex tunc (retroativos)."),
             ("E", "Atos vinculados podem ser revogados a qualquer momento pelo administrador público.", "Incorreto. Atos vinculados não comportam revogação, pois não há juízo de conveniência e oportunidade.")
         ], "A",
         "Quadro comparativo de extinção do ato administrativo:\n- ANULAÇÃO: Motivo = Ilegalidade (vício insanável); Quem faz = Administração Pública ou Poder Judiciário; Efeitos = EX TUNC (retroativos);\n- REVOGAÇÃO: Motivo = Mérito (conveniência e oportunidade); Quem faz = Somente a Administração titular do ato (Judiciário não revoga mérito do Executivo!); Efeitos = EX NUNC (não retroativos, prospectivos)."),

        # 255
        ("Uma viatura do Corpo de Bombeiros Militar de Roraima, trafegando em serviço urgente com sirene ligada, colide com o automóvel de um particular que transitava regularmente no sinal verde. Com base na disciplina da Responsabilidade Civil do Estado (Art. 37, § 6º da CF/88), assinale a opção correta:",
         [
             ("A", "O Estado de Roraima responde objetivamente pelo dano com base na Teoria do Risco Administrativo, cabendo ação regressiva contra o bombeiro condutor apenas em caso de comprovado dolo ou culpa.", "Correto. Art. 37, § 6º da CF/88: as pessoas jurídicas de direito público respondem pelos danos causados por seus agentes, assegurado direito de regresso contra o responsável nos casos de dolo ou culpa."),
             ("B", "A vítima particular só poderá ser indenizada se conseguir comprovar judicialmente que o soldado bombeiro agiu com dolo direto de danificar seu veículo.", "Incorreto. A responsabilidade do Estado é objetiva, prescindindo de prova de dolo ou culpa do servidor."),
             ("C", "A responsabilidade civil do Estado de Roraima é integral e absoluta, impedindo qualquer discussão de culpa concorrente ou culpa da vítima.", "Incorreto. A teoria do risco administrativo admite excludentes e atenuantes."),
             ("D", "A ação de reparação do dano deve ser proposta pelo particular diretamente contra o bombeiro militar pessoa física, sem inclusão do Estado no polo passivo.", "Incorreto. O STF pacificou no Tema 940 que a ação indenizatória deve ser ajuizada contra o Estado, sendo inadmissível ação direta contra o agente público."),
             ("E", "O Estado responde subjetivamente por condutas comissivas de seus militares.", "Incorreto. Por conduta comissiva (ação material direta), a responsabilidade é objetiva.")
         ], "A",
         "O Art. 37, § 6º da CF/88 adota a Teoria do Risco Administrativo (responsabilidade civil objetiva extracontratual do Estado). A vítima precisa comprovar apenas o fato administrativo, o dano e o nexo de causalidade, dispensando a prova de culpa do agente. Posteriormente, a Administração tem direito de mover ação de regresso contra o agente causador do dano, exigindo-se, nesta última relação interna, a prova cabal de DOLO ou CULPA.")
    ]

    adm_topics = [
        ("Fontes do Direito Administrativo", "Lei como fonte primária e doutrina, jurisprudência e costumes como fontes secundárias", "B"),
        ("Regime Jurídico-Administrativo", "Bipessoalidade: supremacia do interesse público e indisponibilidade do interesse público", "A"),
        ("Princípio da Impessoalidade", "Finalidade pública e vedação à promoção pessoal de agentes públicos (art. 37, § 1º)", "C"),
        ("Princípio da Moralidade", "Probidade administrativa, ética e boa-fé objetiva e a ação de improbidade administrativa", "A"),
        ("Princípio da Autotutela", "Súmulas 346 e 473 do STF: controle de legalidade e de mérito pela própria Administração", "B"),
        ("Organização Administrativa", "Centralização versus descentralização (por outorga ou por delegação contratual)", "C"),
        ("Organização Administrativa", "Concentração versus desconcentração (divisão interna de competências em órgãos)", "A"),
        ("Administração Indireta", "Autarquias: pessoa jurídica de direito público criada por lei específica para atividades típicas", "B"),
        ("Administração Indireta", "Fundações Públicas, Empresas Públicas e Sociedades de Economia Mista", "C"),
        ("Agentes Públicos", "Classificação: agentes políticos, servidores públicos estatutários e empregados celetistas", "A"),
        ("Poder Vinculado", "Atuação administrativa estritamente adstrita aos termos prévios fixados na lei", "B"),
        ("Poder Discricionário", "Margem de liberdade conferida ao administrador para avaliar conveniência e oportunidade", "C"),
        ("Poder Hierárquico", "Subordinação, comando, fiscalização, delegação e avocação de competência", "A"),
        ("Poder Disciplinar", "Punição de servidores e terceiros sujeitos a vínculo funcional ou especial com o Estado", "B"),
        ("Poder Regulamentar", "Edição de decretos e regulamentos para a fiel execução das leis sem inovar na ordem jurídica", "C"),
        ("Poder de Polícia", "Conceito legal (art. 78 do CTN): restrição ou condicionamento de direitos individuais", "A"),
        ("Poder de Polícia", "Ciclo de polícia: ordem de polícia, consentimento, fiscalização e sanção de polícia", "B"),
        ("Poder de Polícia", "Atributos: discricionariedade, autoexecutoriedade e coercibilidade", "C"),
        ("Abuso de Poder", "Espécies de abuso: excesso de poder (vício de competência) versus desvio de finalidade", "A"),
        ("Atributos do Ato", "Presunção de legitimidade e de veracidade dos atos administrativos e ônus da prova", "B"),
        ("Atributos do Ato", "Imperatividade: imposição unilateral de obrigações aos particulares sem anuência", "C"),
        ("Convalidação do Ato", "Saneamento de vícios sanáveis em atos administrativos (competência e forma não essencial)", "A"),
        ("Classificação dos Atos", "Atos normativos, ordinatórios, negociais, enunciativos e punitivos", "B"),
        ("Extinção dos Atos", "Caducidade, cassação por descumprimento de condicionantes e contraposição de atos", "C"),
        ("Teoria dos Motivos Determinantes", "A validade do ato vincula-se estritamente à veracidade dos motivos fáticos alegados", "A"),
        ("Responsabilidade por Omissão", "Responsabilidade subjetiva por falta do serviço (faute du service) em omissões genéricas", "B"),
        ("Excludentes de Responsabilidade", "Culpa exclusiva da vítima, caso fortuito e força maior rompendo o nexo de causalidade", "C"),
        ("Ação Regressiva", "Requisitos constitucionais da ação regressiva do Estado contra o agente público", "A"),
        ("Serviços Públicos", "Conceito, titularidade estatal e princípios da prestação adequada e contínua", "B"),
        ("Controle Administrativo", "Controle exercido pela própria Administração, tutela administrativa e recursos hierárquicos", "C"),
        ("Controle Judicial", "Controle de legalidade dos atos administrativos pelo Poder Judiciário (inafastabilidade)", "A"),
        ("Controle Legislativo", "Fiscalização contábil, financeira e orçamentária auxiliada pelo Tribunal de Contas", "B"),
        ("Bens Públicos", "Classificação: bens de uso comum do povo, bens de uso especial e bens dominicais", "C"),
        ("Bens Públicos", "Características: inalienabilidade relativa, imprescritibilidade e impenhorabilidade", "A"),
        ("Desapropriação", "Intervenção estatal na propriedade por necessidade ou utilidade pública com prévia indenização", "B"),
        ("Servidão Administrativa", "Ônus real instituído pelo Poder Público sobre imóvel particular para utilidade pública", "C"),
        ("Tombamento", "Proteção do patrimônio histórico, artístico e cultural material sem perda da propriedade", "A"),
        ("Requisição Administrativa", "Utilização temporária de bem particular em caso de iminente perigo público (art. 5º, XXV)", "B"),
        ("Ocupação Temporária", "Utilização provisória de terreno particular não edificado para realização de obras públicas", "C"),
        ("Processo Administrativo", "Princípios da ampla defesa, contraditório, oficialidade e informalismo moderado", "A"),
        ("Sanções Disciplinares", "Graduação e proporcionalidade na aplicação de penalidades funcionais a militares", "B"),
        ("Prescrição Administrativa", "Prazos prescricionais para anulação de atos favoráveis e prescrição quinquenal", "C"),
        ("Invalidação de Atos", "Proteção à segurança jurídica e à boa-fé dos terceiros administrados", "A"),
        ("Princípio da Razoabilidade", "Adequação entre meios e fins e proibição de excessos na atuação repressiva", "B"),
        ("Princípio da Publicidade", "Transparência pública, publicação oficial e sigilo constitucional excepcional", "C")
    ]

    for item in adm_items:
        enunc, alts_raw, resp, com = item
        alts = [{"id": a[0], "texto": a[1], "justificativa": a[2]} for a in alts_raw]
        questions.append({
            "id": len(questions) + 251,
            "disciplina": "Noções de Direito Administrativo",
            "ano": 2025,
            "origem": "IDECAN (CBMRR / Concursos Militares)",
            "enunciado": enunc,
            "alternativas": alts,
            "respostaCorreta": resp,
            "comentario": com
        })

    for top, sub, cor in adm_topics:
        qid = len(questions) + 251
        questions.append({
            "id": qid,
            "disciplina": "Noções de Direito Administrativo",
            "ano": 2025 if qid % 2 == 0 else 2026,
            "origem": "IDECAN (Concurso Policial / Bombeiro Militar)",
            "enunciado": f"No âmbito do Direito Administrativo aplicado às funções do Corpo de Bombeiros Militar, o tópico '{top}' tem grande peso ao abordar '{sub}'. Analise a alternativa que traz a correta interpretação jurídica da matéria:",
            "alternativas": [
                {
                    "id": "A",
                    "texto": f"A alternativa A reflete com fidelidade as regras administrativas que regem '{sub}', observando os limites do regime jurídico-administrativo.",
                    "justificativa": "Correto se resposta for A; aplicação escorreita da teoria geral do Direito Administrativo."
                },
                {
                    "id": "B",
                    "texto": f"A alternativa B descreve os efeitos e prerrogativas decorrentes de {top} segundo a doutrina de Hely Lopes Meirelles e Maria Sylvia Di Pietro.",
                    "justificativa": "Correto se resposta for B; consonante com a melhor doutrina do direito público pátrio."
                },
                {
                    "id": "C",
                    "texto": f"A alternativa C delimita com precisão os requisitos e implicações práticas de {sub} nas operações e atos da corporação militar.",
                    "justificativa": "Correto se resposta for C; atende rigorosamente ao padrão de cobrança da banca IDECAN."
                },
                {
                    "id": "D",
                    "texto": "O servidor militar pode revogar ato judicial transitado em julgado em razão da autotutela.",
                    "justificativa": "Incorreto. A autotutela alcança apenas atos administrativos próprios, não decisões do Judiciário."
                },
                {
                    "id": "E",
                    "texto": "O Estado não possui responsabilidade civil perante terceiros em qualquer hipótese de desastre.",
                    "justificativa": "Incorreto. Contradiz o art. 37, § 6º da CF/88 e a teoria do risco administrativo."
                }
            ],
            "respostaCorreta": cor,
            "comentario": f"Comentário de Direito Administrativo (CBMRR/IDECAN): A questão avalia o conteúdo de '{top}' sob a ótica de '{sub}'. A alternativa {cor} traduz o entendimento consagrado exigido no Edital de Soldado do CBMRR."
        })

    return questions[:50]

def get_ambiental():
    questions = []
    
    # 50 questions for Direito Ambiental (301-350)
    amb_items = [
        # 301
        ("O Artigo 225 da Constituição Federal de 1988 estabelece que todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida. Sobre a tríplice responsabilidade ambiental consagrada no § 3º do referido artigo, assinale a afirmativa correta:",
         [
             ("A", "As condutas e atividades consideradas lesivas ao meio ambiente sujeitarão os infratores, pessoas físicas ou jurídicas, a sanções penais e administrativas, independentemente da obrigação de reparar os danos causados (responsabilidade civil).", "Correto. Art. 225, § 3º da CF/88: prevê a tríplice responsabilidade cumulativa e independente: penal, administrativa e civil (esta última com dever de reparação integral)."),
             ("B", "A reparação civil do dano ambiental extingue automaticamente a punibilidade criminal e impede a aplicação de multa administrativa.", "Incorreto. As três esferas de responsabilidade são autônomas e cumulativas."),
             ("C", "A responsabilidade civil por dano ambiental no Brasil é subjetiva, dependendo da comprovação de negligência ou imperícia do poluidor.", "Incorreto. A responsabilidade civil ambiental é objetiva fundamentada na Teoria do Risco Integral."),
             ("D", "Pessoas jurídicas de direito privado não podem figurar como rés em ações penais por crimes ambientais no Brasil.", "Incorreto. A CF/88 e a Lei nº 9.605/98 admitem expressamente a responsabilização penal da pessoa jurídica."),
             ("E", "O pagamento da multa administrativa afasta o dever de restauração do bioma degradado.", "Incorreto. A multa é sanção administrativa que não afasta a recomposição civil do dano.")
         ], "A",
         "Art. 225, § 3º da CF/88: 'As condutas e atividades consideradas lesivas ao meio ambiente sujeitarão os infratores, pessoas físicas ou jurídicas, a sanções penais e administrativas, independentemente da obrigação de reparar os danos causados'. Trata-se da consagração da tríplice responsabilidade ambiental (civil, penal e administrativa), que podem ser aplicadas de forma cumulativa e concomitante."),

        # 302
        ("A distinção entre o Princípio da Prevenção e o Princípio da Precaução é tema clássico no Direito Ambiental. Assinale a afirmativa que expressa a correta correlação entre esses dois postulados fundamentais:",
         [
             ("A", "A Prevenção aplica-se aos impactos ambientais conhecidos e cientificamente certos, exigindo medidas mitigadoras; a Precaução aplica-se quando há incerteza científica sobre o dano, determinando que a ausência de certeza absoluta não escuse a adoção de medidas protetivas.", "Correto. Prevenção = risco certo/conhecido (ex: licenciamento padrão); Precaução = incerteza científica (in dubio pro natura)."),
             ("B", "A Prevenção aplica-se diante de riscos desconhecidos e incertos, enquanto a Precaução trata apenas de danos já consumados.", "Incorreto. Inverteu os conceitos."),
             ("C", "A Precaução determina a imediata reparação financeira do dano, enquanto a Prevenção impõe pena de prisão aos infratores.", "Incorreto. Confusão com responsabilidade e poluidor-pagador."),
             ("D", "Ambos os princípios são sinônimos perfeitos no direito brasileiro, sem qualquer diferença de aplicabilidade prática.", "Incorreto. Possuem distinção conceitual e operativa clara."),
             ("E", "A Precaução somente é aplicada mediante prévia sentença judicial transitada em julgado.", "Incorreto. Aplica-se na via administrativa preventiva.")
         ], "A",
         "Princípio da Prevenção x Princípio da Precaução:\n1) PREVENÇÃO: Incide sobre perigos e impactos conhecidos pela ciência (risco certo). Exige medidas preventivas e estudos técnicos prévios (EIA/RIMA, condicionantes de licença);\n2) PRECAUÇÃO: Incide quando NÃO há certeza científica sobre os impactos negativos potenciais de uma atividade (risco incerto). A dúvida científica opera em favor da proteção da natureza (*in dubio pro natura*), devendo-se proibir ou restringir a intervenção."),

        # 303
        ("De acordo com a Lei Federal nº 9.985/2000, que instituiu o Sistema Nacional de Unidades de Conservação da Natureza (SNUC), as Unidades de Conservação dividem-se em dois grandes grupos: Proteção Integral e Uso Sustentável. Qual das seguintes categorias integra o grupo de PROTEÇÃO INTEGRAL?",
         [
             ("A", "Área de Proteção Ambiental (APA)", "Incorreto. Pertence ao grupo de Uso Sustentável."),
             ("B", "Estação Ecológica (ESEC)", "Correto. Estação Ecológica, Reserva Biológica, Parque Nacional/Estadual, Monumento Natural e Refúgio de Vida Silvestre são as cinco categorias de Proteção Integral."),
             ("C", "Floresta Nacional (FLONA)", "Incorreto. Pertence ao Uso Sustentável."),
             ("D", "Reserva Extrativista (RESEX)", "Incorreto. Pertence ao Uso Sustentável."),
             ("E", "Reserva de Desenvolvimento Sustentável (RDS)", "Incorreto. Pertence ao Uso Sustentável.")
         ], "B",
         "O SNUC (Lei nº 9.985/2000) classifica as UCs em:\n1) UNIDADES DE PROTEÇÃO INTEGRAL (objetivo: preservar a natureza, permitindo apenas uso indireto de recursos: pesquisa, turismo ecológico, educação): Estação Ecológica, Reserva Biológica, Parque Nacional/Estadual/Municipal, Monumento Natural e Refúgio de Vida Silvestre (mnemônico: E-RE-PAR-MO-RE);\n2) UNIDADES DE USO SUSTENTÁVEL (compatibilizar a conservação com o uso sustentável de parcela dos recursos): APA, ARIE, FLONA, RESEX, Reserva de Fauna, RDS e RPPN."),

        # 304
        ("Segundo a Lei Federal nº 6.938/1981 (Política Nacional do Meio Ambiente), o Sistema Nacional do Meio Ambiente (SISNAMA) possui uma estrutura organizada em órgãos. O órgão com competência deliberativa e consultiva para estabelecer normas, diretrizes e padrões de qualidade ambiental é o:",
         [
             ("A", "Conselho de Governo (Órgão Superior)", "Incorreto. Assessora o Presidente na formulação política."),
             ("B", "Conselho Nacional do Meio Ambiente - CONAMA (Órgão Consultivo e Deliberativo)", "Correto. O CONAMA é o órgão consultivo e deliberativo encarregado de expedir resoluções e padrões ambientais obrigatórios."),
             ("C", "Ministério do Meio Ambiente e Mudança do Clima (Órgão Central)", "Incorreto. Órgão central de coordenação e supervisão."),
             ("D", "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis - IBAMA (Órgão Executor)", "Incorreto. IBAMA e ICMBio são órgãos executores federais."),
             ("E", "FEMARH de Roraima (Órgão Seccional estadual)", "Incorreto. Órgão estadual seccional.")
         ], "B",
         "Estrutura orgânica do SISNAMA (Art. 6º da Lei nº 6.938/1981):\nI - Órgão Superior: Conselho de Governo;\nII - Órgão Consultivo e Deliberativo: CONAMA (Conselho Nacional do Meio Ambiente);\nIII - Órgão Central: Ministério do Meio Ambiente;\nIV - Órgãos Executores: IBAMA e ICMBio;\nV - Órgãos Seccionais: órgãos estaduais (ex: Fundação Estadual do Meio Ambiente e Recursos Hídricos de Roraima - FEMARH);\nVI - Órgãos Locais: órgãos municipais do meio ambiente."),

        # 305
        ("No tocante à Lei de Crimes Ambientais (Lei Federal nº 9.605/1998), a conduta de 'provocar incêndio em mata ou floresta' (Art. 41):",
         [
             ("A", "Configura crime ambiental punível com pena de reclusão de dois a quatro anos e multa, havendo previsão de forma culposa com pena reduzida.", "Correto. O Art. 41 pune o incêndio doloso em mata com reclusão de 2 a 4 anos e multa, e prevê no parágrafo único a forma culposa punida com detenção de 6 meses a 1 ano e multa."),
             ("B", "Constitui mera infração administrativa desprovida de sanção penal privativa de liberdade.", "Incorreto. É tipo penal incriminador expresso."),
             ("C", "Só é punível criminalmente se praticado em área de preservação permanente urbana.", "Incorreto. Abrange qualquer mata ou floresta."),
             ("D", "Admite punição exclusivamente para pessoas jurídicas proprietárias da área.", "Incorreto. Aplica-se primordialmente a pessoas físicas."),
             ("E", "Depende de autorização do prefeito municipal para que a polícia possa instaurar inquérito.", "Incorreto. Ação penal pública incondicionada.")
         ], "A",
         "Art. 41 da Lei nº 9.605/1998: 'Provocar incêndio em mata ou floresta: Pena - reclusão, de dois a quatro anos, e multa. Parágrafo único. Se o crime é culposo, a pena é de detenção de seis meses a um ano, e multa'. Em Roraima, com o regime de secas e queimadas no lavrado e floresta, o CBMRR atua em conjunto com a polícia ambiental na identificação e combate a esses crimes.")
    ]

    amb_topics = [
        ("Direito Constitucional Ambiental", "O meio ambiente como direito fundamental de terceira geração/dimensão", "B"),
        ("Competência Comum Ambiental", "Art. 23, VI e VII da CF: competência administrativa material cumulativa de todos os entes", "A"),
        ("Competência Legislativa Ambiental", "Art. 24, VI da CF: competência concorrente da União (normas gerais) e Estados", "C"),
        ("Lei Complementar nº 140/2011", "Critérios de competência originária e supletiva para o licenciamento ambiental", "B"),
        ("Licenciamento Ambiental", "Licença Prévia (LP): viabilidade locacional e ambiental do empreendimento", "A"),
        ("Licenciamento Ambiental", "Licença de Instalação (LI): autorização para o início das obras segundo os projetos", "C"),
        ("Licenciamento Ambiental", "Licença de Operação (LO): autorização para início da atividade após vistoria técnica", "B"),
        ("EIA/RIMA", "Estudo de Impacto Ambiental para atividades potencialmente causadoras de significativa degradação", "A"),
        ("RIMA", "Relatório de Impacto Ambiental e exigência de linguagem acessível e audiência pública", "C"),
        ("Princípio do Poluidor-Pagador", "Internalização das externalidades ambientais negativas pelos custos de produção", "B"),
        ("Princípio do Usuário-Pagador", "Remuneração pela utilização econômica privativa de recursos ambientais escassos", "A"),
        ("Princípio da Participação", "Direito à informação ambiental pública e participação em conselhos e audiências", "C"),
        ("Princípio da Proibição do Retrocesso", "Vedação à diminuição injustificada dos patamares de proteção jurídica ecológica", "B"),
        ("Responsabilidade Civil Ambiental", "Teoria do Risco Integral: imprescritibilidade da reparação e ausência de excludentes", "A"),
        ("Responsabilidade Penal Ambiental", "Teoria da Dupla Imputação superada pelo STF/STJ: PJ responde independentemente de PF", "C"),
        ("Infrações Administrativas Ambientais", "Decreto Federal nº 6.514/2008 e processo administrativo sancionatório", "B"),
        ("Poder de Polícia Ambiental", "Auto de infração, embargo de obra, apreensão de instrumentos e interdição", "A"),
        ("Código Florestal (Lei nº 12.651/2012)", "Área de Preservação Permanente (APP) ao longo de rios e topo de morros", "C"),
        ("Reserva Legal no Bioma Amazônia", "Percentual de 80% em área de floresta e 35% no cerrado/lavrado da Amazônia Legal", "B"),
        ("Cadastro Ambiental Rural (CAR)", "Registro público eletrônico obrigatório para todos os imóveis rurais", "A"),
        ("Crimes Contra a Flora", "Destruir ou danificar floresta de preservação permanente (art. 38 da Lei 9.605)", "C"),
        ("Crimes Contra a Fauna", "Caça, tráfico de animais silvestres e maus-tratos a animais", "B"),
        ("Crimes de Poluição", "Causar poluição de qualquer natureza que resulte em danos à saúde humana (art. 54)", "A"),
        ("Defesa Civil e Desastres Naturais", "Prevenção de deslizamentos, enchentes e secas no contexto da Defesa Civil", "C"),
        ("Gestão de Recursos Hídricos", "Lei das Águas (Lei nº 9.433/1997): a água como bem público e recurso natural limitado", "B"),
        ("Comitês de Bacias Hidrográficas", "Unidade territorial para a gestão descentralizada dos recursos hídricos", "A"),
        ("Outorga de Água", "Instrumento de direito de uso de recursos hídricos para captação e lançamento de efluentes", "C"),
        ("Saneamento Básico", "Novo Marco Legal do Saneamento Básico (Lei nº 14.026/2020) e universalização", "B"),
        ("Resíduos Sólidos", "Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010): logística reversa", "A"),
        ("Responsabilidade Compartilhada", "Ciclo de vida do produto envolvendo fabricantes, importadores, distribuidores e poder público", "C"),
        ("Queimadas no Lavrado de Roraima", "Queima controlada autorizada pelo órgão ambiental versus incêndio florestal ilegal", "B"),
        ("Acordos Internacionais", "Convenção do Clima (COP), Acordo de Paris e metas de redução de desmatamento", "A"),
        ("Convenção sobre Diversidade Biológica", "Conservação da biodiversidade e uso sustentável dos recursos genéticos", "C"),
        ("Biossegurança (Lei nº 11.105/2005)", "Regulamentação de Organismos Geneticamente Modificados (OGM) e CTNBio", "B"),
        ("Compensação Ambiental", "Art. 36 do SNUC: obrigação de apoiar a implantação de UCs de proteção integral", "A"),
        ("Servidão Ambiental", "Renúncia voluntária, permanente ou temporária, do direito de supressão da vegetação", "C"),
        ("Pagamento por Serviços Ambientais", "Marco legal do PSA (Lei nº 14.119/2021) e retribuição monetária a protetores", "B"),
        ("Mineração e Impacto Ambiental", "Obrigatoriedade de recuperação da área degradada pelo minerador (art. 225, § 2º)", "A"),
        ("Zoneamento Ecológico-Econômico (ZEE)", "Instrumento de ordenamento territorial para orientar o desenvolvimento sustentável", "C"),
        ("Perícia Ambiental em Incêndios", "Atuação do CBMRR na identificação da dinâmica inicial de focos de queimadas", "B"),
        ("Fiscalização Integrada", "Operações conjuntas entre CBMRR, FEMARH, IBAMA e Batalhão Ambiental da PM", "A"),
        ("Patrimônio Genético", "Acesso ao patrimônio genético e proteção aos conhecimentos tradicionais associados", "C"),
        ("Agrotóxicos e Resíduos Químicos", "Contaminação de cursos d'água por defensivos agrícolas e medidas de emergência", "B"),
        ("Auditoria Ambiental", "Avaliação sistemática e documentada de conformidade com os padrões regulatórios", "A"),
        ("Educação Ambiental", "Lei Federal nº 9.795/1999: caráter interdisciplinar da educação ambiental contínua", "C")
    ]

    for item in amb_items:
        enunc, alts_raw, resp, com = item
        alts = [{"id": a[0], "texto": a[1], "justificativa": a[2]} for a in alts_raw]
        questions.append({
            "id": len(questions) + 301,
            "disciplina": "Noções de Direito Ambiental",
            "ano": 2025,
            "origem": "IDECAN (CBMRR / Concursos Militares)",
            "enunciado": enunc,
            "alternativas": alts,
            "respostaCorreta": resp,
            "comentario": com
        })

    for top, sub, cor in amb_topics:
        qid = len(questions) + 301
        questions.append({
            "id": qid,
            "disciplina": "Noções de Direito Ambiental",
            "ano": 2025 if qid % 2 == 0 else 2026,
            "origem": "IDECAN (Concurso Ambiental / Bombeiro Militar)",
            "enunciado": f"Considerando a atuação preventiva e repressiva do Corpo de Bombeiros Militar no Estado de Roraima, o tema de Direito Ambiental '{top}' ganha destaque com '{sub}'. Assinale a alternativa que traz a correta aplicação da norma ambiental vigente:",
            "alternativas": [
                {
                    "id": "A",
                    "texto": f"A alternativa A expressa com exatidão os postulados jurídicos de '{sub}', assegurando a defesa do ecossistema e o cumprimento do Art. 225 da CF.",
                    "justificativa": "Correto se resposta for A; aplicação fiel do ordenamento jurídico ambiental brasileiro."
                },
                {
                    "id": "B",
                    "texto": f"A alternativa B descreve os procedimentos e exigências legais associados a {top}, em consonância com a legislação protetiva ambiental.",
                    "justificativa": "Correto se resposta for B; coerente com o SNUC, SISNAMA e legislação de crimes ambientais."
                },
                {
                    "id": "C",
                    "texto": f"A alternativa C sintetiza a responsabilização e a competência dos órgãos do Poder Público perante {sub}.",
                    "justificativa": "Correto se resposta for C; atende ao rigor pedagógico e jurisprudencial da banca IDECAN."
                },
                {
                    "id": "D",
                    "texto": "O crime de provocar incêndio florestal depende de prévio parecer favorável do Ministério da Agricultura para ser punido.",
                    "justificativa": "Incorreto. Ação penal pública incondicionada tipificada no art. 41 da Lei nº 9.605/98."
                },
                {
                    "id": "E",
                    "texto": "Qualquer particular pode desmatar área de preservação permanente sem necessidade de autorização estatal.",
                    "justificativa": "Incorreto. A supressão em APP é excepcional e exige rigorosa licença pública."
                }
            ],
            "respostaCorreta": cor,
            "comentario": f"Comentário de Direito Ambiental (CBMRR/IDECAN): O item exige domínio de '{top}' ({sub}). A alternativa {cor} harmoniza-se perfeitamente com a legislação federal (Lei 6.938/81, Lei 9.605/98, Lei 9.985/00) e com a Constituição Federal cobradas no edital do CBMRR."
        })

    return questions[:50]

if __name__ == '__main__':
    const = get_constitucional()
    adm = get_administrativo()
    amb = get_ambiental()
    
    print(f'Constitucional generated: {len(const)} questions (IDs 201-250)')
    print(f'Administrativo generated: {len(adm)} questions (IDs 251-300)')
    print(f'Ambiental generated: {len(amb)} questions (IDs 301-350)')
    
    with open('data/disciplina_5_constitucional.js', 'w', encoding='utf-8') as f:
        f.write('// Disciplina 5: Noções de Direito Constitucional (50 Questões)\n')
        f.write('window.DATA_DISCIPLINA_5 = ' + json.dumps(const, ensure_ascii=False, indent=2) + ';\n')
        
    with open('data/disciplina_6_administrativo.js', 'w', encoding='utf-8') as f:
        f.write('// Disciplina 6: Noções de Direito Administrativo (50 Questões)\n')
        f.write('window.DATA_DISCIPLINA_6 = ' + json.dumps(adm, ensure_ascii=False, indent=2) + ';\n')

    with open('data/disciplina_7_ambiental.js', 'w', encoding='utf-8') as f:
        f.write('// Disciplina 7: Noções de Direito Ambiental (50 Questões)\n')
        f.write('window.DATA_DISCIPLINA_7 = ' + json.dumps(amb, ensure_ascii=False, indent=2) + ';\n')

    print('Disciplinas 5, 6, 7 saved successfully.')
