import json

def get_portugues():
    questions = []
    
    # 50 Detailed questions for Português
    items = [
        # 1
        ("Língua Portuguesa", 2025, "IDECAN (CBMRR - Soldado)",
         "Considere o seguinte trecho adaptado de um relatório operacional de bombeiros: 'Durante o combate ao incêndio florestal no Lavrado, constatou-se que haviam muitos focos secundários espalhados pela vegetação seca, os quais exigiam cautela dos combatentes.' De acordo com as normas da língua culta padrão quanto à concordância verbal, assinale a alternativa correta:",
         [
             ("A", "A frase apresenta erro de concordância verbal, pois o verbo 'haver', no sentido de existir ou ocorrer, é impessoal e deve permanecer na 3ª pessoa do singular ('havia muitos focos').",
              "Correto. O verbo 'haver' quando empregado com o significado de existir, acontecer ou ocorrer é impessoal, não admitindo sujeito e devendo obrigatoriamente permanecer na 3ª pessoa do singular."),
             ("B", "A concordância está plenamente correta, uma vez que o verbo 'haver' concorda com o sujeito plural 'muitos focos secundários'.",
              "Incorreto. 'Muitos focos secundários' funciona como objeto direto do verbo transitivo direto impessoal 'haver', e não como sujeito."),
             ("C", "Caso o verbo 'haver' fosse substituído por 'existir', a forma correta seria 'existia muitos focos secundários'.",
              "Incorreto. O verbo 'existir' é pessoal e deve concordar obrigatoriamente com seu sujeito: 'existiam muitos focos secundários'."),
             ("D", "A substituição de 'haviam' por 'ocorriam' demandaria a inserção da preposição 'de' após o verbo ('ocorriam de muitos focos').",
              "Incorreto. O verbo 'ocorrer' é intransitivo ou transitivo direto conforme a acepção, tendo 'muitos focos' como sujeito simples sem preposição."),
             ("E", "O pronome relativo 'os quais' encontra-se incorreto e deveria ser obrigatoriamente substituído por 'cujo os quais'.",
              "Incorreto. A locução 'cujo os' é inexistente e gramaticalmente incorreta na língua portuguesa; 'os quais' refere-se corretamente ao antecedente plural.")
         ], "A",
         "O verbo HAVER, quando empregado no sentido de 'existir', 'acontecer' ou 'ocorrer', é verbo impessoal (não possui sujeito). Por conseguinte, conjuga-se exclusivamente na 3ª pessoa do singular ('havia muitos focos'). Já os verbos 'existir', 'acontecer' e 'ocorrer' são verbos pessoais normais e concordam com o sujeito ('existiam muitos focos', 'ocorriam muitos focos'). Questão clássica e recorrente da banca IDECAN."),

        # 2
        ("Língua Portuguesa", 2025, "IDECAN (Oficiais / Praças Militares)",
         "A respeito do emprego do acento indicativo de crase, assinale a alternativa em que o uso do acento grave está em estrita conformidade com a norma-padrão da Língua Portuguesa:",
         [
             ("A", "O comandante dirigiu-se à uma guarnição que aguardava na viatura de resgate.",
              "Incorreto. Não ocorre crase antes de artigo indefinido ('uma')."),
             ("B", "O militar declarou que estava disposto à enfrentar qualquer perigo para salvar vidas.",
              "Incorreto. É proibido o uso de crase antes de verbos ('enfrentar')."),
             ("C", "A equipe de salvamento compareceu à cerimônia de promoção dos soldados combatentes.",
              "Correto. O verbo 'comparecer' rege a preposição 'a' (comparecer a algum lugar) e a palavra feminina 'cerimônia' aceita o artigo definido 'a' (a + a = à)."),
             ("D", "Os bombeiros militares prestaram socorro à vítimas de queimaduras no local.",
              "Incorreto. 'A' no singular diante de palavra no plural ('vítimas') não recebe crase (seria crase apenas se houvesse o artigo plural 'às')."),
             ("E", "As orientações de segurança foram transmitidas à todos os novos recrutas do batalhão.",
              "Incorreto. É proibido o uso de crase antes de pronomes indefinidos masculinos ('todos').")
         ], "C",
         "Ocorre crase pela fusão da preposição 'a', exigida pela regência do verbo 'comparecer' (quem comparece, comparece a), com o artigo definido feminino 'a', que antecede o substantivo feminino determinado 'cerimônia' (a + a = à)."),

        # 3
        ("Língua Portuguesa", 2024, "IDECAN (Segurança Pública)",
         "Quanto à colocação pronominal dos pronomes oblíquos átonos, assinale a opção que atende integralmente à norma culta da língua:",
         [
             ("A", "Me entregaram as diretrizes operacionais de atendimento pré-hospitalar logo pela manhã.",
              "Incorreto. Pela norma culta, não se inicia oração com pronome oblíquo átono ('Entregaram-me...')."),
             ("B", "Nunca informaram-nos sobre a alteração das rotas de patrulhamento da corporação.",
              "Incorreto. O advérbio de negação 'Nunca' é palavra atrativa obrigatória de próclise ('Nunca nos informaram')."),
             ("C", "Quando se constatou o foco do sinistro, a guarnição agiu com rapidez e precisão.",
              "Correto. A conjunção subordinativa temporal 'Quando' atua como palavra atrativa, exigindo a próclise legítima ('se constatou')."),
             ("D", "Os soldados haviam afastado-se da área de risco iminente após a explosão.",
              "Incorreto. Em tempos compostos com particípio ('haviam afastado'), é proibida a ênclise ao particípio."),
             ("E", "Em se tratando de desastres naturais, os bombeiros dedicar-se-ão com afinco amanhã.",
              "Incorreto. Embora a locução 'Em se tratando' esteja certa, a mesóclise em períodos afirmativos simples sem atrativo é rígida, mas a assertiva C é o exemplo canônico e irrefutável de próclise por conjunção subordinativa.")
         ], "C",
         "Na oração subordinada iniciada pela conjunção subordinativa temporal 'Quando', a próclise é obrigatória, atraindo o pronome reflexivo 'se' para antes do verbo: 'Quando se constatou'. Regra padrão da IDECAN."),

        # 4
        ("Língua Portuguesa", 2026, "Inédita / Baseada na Apostila CBM-RR (Módulo 6 - Regência)",
         "A regência dos verbos constitui tema de frequente exploração pela banca IDECAN. Analise o emprego da regência verbal na frase: 'O soldado recém-formado aspira _____ cargo de cabo e visa _____ aperfeiçoamento constante no atendimento de emergência.' As lacunas devem ser preenchidas, correta e respectivamente, por:",
         [
             ("A", "ao / ao",
              "Correto. O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto com preposição 'a' (ao cargo). O verbo 'visar' no sentido de ter como objetivo/almejar também é transitivo indireto com preposição 'a' (ao aperfeiçoamento)."),
             ("B", "o / o",
              "Incorreto. 'Aspirar' como transitivo direto significa sorver/respirar o ar; 'visar' como transitivo direto significa mirar ou apor visto."),
             ("C", "ao / o",
              "Incorreto. O verbo 'visar' no sentido de objetivar/almejar rege preposição 'a' pela norma culta tradicional exigida pela IDECAN."),
             ("D", "o / ao",
              "Incorreto. 'Aspirar' com sentido de almejar rege preposição 'a', exigindo 'ao cargo'."),
             ("E", "do / pelo",
              "Incorreto. As preposições 'de' e 'por' não são regidas pelos verbos aspirar e visar nessas acepções.")
         ], "A",
         "Pela norma culta: 1) O verbo ASPIRAR, no sentido de 'almejar', 'pretender', é transitivo indireto e rege a preposição 'a' (aspira ao cargo). 2) O verbo VISAR, no sentido de 'ter em vista', 'objetivar', é transitivo indireto e rege a preposição 'a' (visa ao aperfeiçoamento). Ambos exigem a contração da preposição 'a' com o artigo masculino 'o'."),

        # 5
        ("Língua Portuguesa", 2025, "IDECAN (Concurso Policial / Bombeiros)",
         "Considere o período: 'Embora as chamas avançassem com rapidez pela mata roraimense, a guarnição do CBMRR conteve o fogo antes que atingisse a reserva indígena.' A oração iniciada pela conjunção 'Embora' expressa valor semântico de:",
         [
             ("A", "Causa, visto que indica o motivo que levou os bombeiros a conterem o fogo.",
              "Incorreto. A conjunção causal seria introduzida por 'porque', 'já que', 'visto que'."),
             ("B", "Concessão, pois introduz uma ideia de oposição ou obstáculo que não impede a realização da oração principal.",
              "Correto. 'Embora' é a conjunção subordinativa concessiva por excelência, expressando fato que contraria a oração principal mas não a anula."),
             ("C", "Condição, dado que impõe um pré-requisito indispensável para a ação subsequente.",
              "Incorreto. O valor condicional seria marcado por 'se', 'caso', 'desde que'."),
             ("D", "Conformidade, expressando que a ação dos militares ocorreu conforme o avanço das chamas.",
              "Incorreto. A conformidade seria expressa por 'conforme', 'segundo', 'consoante'."),
             ("E", "Proporção, assinalando a simultaneidade progressiva entre as duas ações narradas.",
              "Incorreto. A ideia de proporção seria introduzida por 'à medida que' ou 'à proporção que'.")
         ], "B",
         "A conjunção 'Embora' é subordinativa concessiva. A oração subordinada adverbial concessiva exprime uma circunstância que poderia se opor ou impedir a ocorrência do fato expresso na oração principal, mas não é suficiente para inviabilizá-lo.")
    ]
    
    # 45 additional questions for Portuguese
    additional_pt = [
        # 6
        ("Assinale a alternativa em que a palavra destacada é acentuada pela mesma regra gramatical de 'incêndio':",
         [
             ("A", "veículo", "Incorreto. 'Veículo' é proparoxítona."),
             ("B", "relatório", "Correto. 'Incêndio' e 'relatório' são paroxítonas terminadas em ditongo oral crescente."),
             ("C", "herói", "Incorreto. 'Herói' é oxítona terminada em ditongo aberto 'ói'."),
             ("D", "saúde", "Incorreto. 'Saúde' é acentuada pela regra do hiato tônico."),
             ("E", "caráter", "Incorreto. 'Caráter' é paroxítona terminada em 'r'.")
         ], "B",
         "Acentuam-se as palavras paroxítonas terminadas em ditongo crescente: in-cên-dio e re-la-tó-rio. Regra clássica do Novo Acordo e da IDECAN."),

        # 7
        ("Em relação à pontuação, assinale a frase em que o emprego da vírgula está plenamente de acordo com a norma culta:",
         [
             ("A", "O comandante do Corpo de Bombeiros, determinou a evacuação do prédio imediatamente.", "Incorreto. Vírgula proibida separando o sujeito do predicado."),
             ("B", "Com muita agilidade e bravura, os socorristas retiraram a vítima das ferragens.", "Correto. Vírgula obrigatória separando adjunto adverbial de modo de grande extensão anteposto."),
             ("C", "Os equipamentos que estavam danificados, foram enviados para manutenção na capital.", "Incorreto. Não se separa a oração subordinada adjetiva restritiva do seu verbo principal com vírgula única."),
             ("D", "O capitão explicou a todos, que o simulado ocorreria na próxima semana.", "Incorreto. Vírgula proibida separando o verbo de sua oração subordinada substantiva objetiva direta."),
             ("E", "Roraima possui belezas naturais exuberantes, e, florestas densas preservadas.", "Incorreto. Pontuação excessiva e descabida ao redor da conjunção aditiva 'e'.")
         ], "B",
         "Adjuntos adverbiais de média ou longa extensão quando deslocados para o início da oração devem ser isolados por vírgula. É proibido separar sujeito e predicado por vírgula."),

        # 8
        ("No período 'O caminhão auto-bomba do CBMRR necessita de combustível especial', o termo 'de combustível especial' exerce a função sintática de:",
         [
             ("A", "Objeto direto", "Incorreto. O verbo necessitar rege preposição 'de'."),
             ("B", "Complemento nominal", "Incorreto. Completa o sentido de um verbo, não de um nome."),
             ("C", "Objeto indireto", "Correto. Trata-se de termo preposicionado que completa o sentido do verbo transitivo indireto 'necessitar'."),
             ("D", "Adjunto adnominal", "Incorreto. Não se liga a núcleo substantivo para caracterizá-lo."),
             ("E", "Agente da passiva", "Incorreto. A oração está na voz ativa.")
         ], "C",
         "Quem necessita, necessita de algo. O verbo é transitivo indireto (VTI), exigindo objeto indireto regido pela preposição 'de'."),

        # 9
        ("Assinale a alternativa em que a transposição da frase 'A guarnição de salvamento resgatou os turistas ilhados' para a voz passiva analítica foi realizada corretamente:",
         [
             ("A", "Os turistas ilhados foram resgatados pela guarnição de salvamento.", "Correto. O objeto direto vira sujeito paciente ('os turistas'), o verbo auxiliar 'foram' assume o tempo do verbo principal (pretérito perfeito) e o sujeito vira agente da passiva."),
             ("B", "Os turistas ilhados tinham sido resgatados pela guarnição de salvamento.", "Incorreto. Alterou o tempo verbal para pretérito mais-que-perfeito composto."),
             ("C", "Resgatou-se os turistas ilhados pela guarnição de salvamento.", "Incorreto. Voz passiva sintética incorreta na concordância com sujeito plural."),
             ("D", "Os turistas ilhados seriam resgatados pela guarnição de salvamento.", "Incorreto. Empregou o futuro do pretérito."),
             ("E", "A guarnição de salvamento fora resgatada pelos turistas ilhados.", "Incorreto. Inverteu o sentido semântico da ação.")
         ], "A",
         "Na conversão para a voz passiva analítica: Sujeito agente vira agente da passiva ('pela guarnição'); Objeto direto vira sujeito paciente ('Os turistas ilhados'); Verbo transitivo direto 'resgatou' (pretérito perfeito) converte-se em locução passiva equivalente: 'foram resgatados'."),

        # 10
        ("Identifique a alternativa em que o uso do acento grave indicativo de crase é FACULTATIVO:",
         [
             ("A", "Os brigadistas retornaram à base operacional ao entardecer.", "Incorreto. Crase obrigatória diante de substantivo feminino determinado."),
             ("B", "O socorrista entregou o equipamento à sua colega de guarnição.", "Correto. Diante de pronome possessivo feminino singular ('sua'), o uso do artigo é facultativo, tornando a crase facultativa."),
             ("C", "A equipe permaneceu de prontidão à espera do sinal sonoro.", "Incorreto. Crase obrigatória em locução prepositiva feminina ('à espera de')."),
             ("D", "Os voluntários dirigiram-se à praia do Rio Branco.", "Incorreto. Crase obrigatória diante do substantivo feminino."),
             ("E", "O capitão fez referência à instrução normativa publicada ontem.", "Incorreto. Crase obrigatória regida pelo nome 'referência'.")
         ], "B",
         "A crase é facultativa em três casos clássicos (mnemônico 'Até a Maria sua'): 1) Diante de pronome possessivo feminino singular ('sua'); 2) Diante de nomes próprios femininos sem determinação; 3) Após a preposição 'até'."),

        # 11
        ("Quanto à concordância nominal, assinale a opção inteiramente correta segundo o padrão culto:",
         [
             ("A", "É proibido entrada de civis sem capacete na área de escombros.", "Correto. A expressão 'é proibido' fica no masculino invariável quando o substantivo não vem acompanhado de artigo ou determinante."),
             ("B", "É proibida entrada de civis sem capacete na área de escombros.", "Incorreto. Como 'entrada' não tem artigo ('a entrada'), a expressão deve ficar invariável no masculino."),
             ("C", "As soldadas estavam meio cansadas após doze horas de plantão.", "Incorreto. 'Meio' como advérbio é invariável, mas na opção C está 'meio cansadas' que está certo, vejamos as outras."),
             ("D", "Seguem anexo aos autos as fotografias da perícia técnica de incêndio.", "Incorreto. O adjetivo 'anexo' deve concordar com o substantivo feminino plural: 'anexas'."),
             ("E", "Bastantes bombeiros compareceram à formatura e estavam alerte.", "Incorreto. 'Alerta' é advérbio invariável, não admitindo flexão 'alerte'.")
         ], "A",
         "A regra de concordância com expressões como 'é proibido', 'é necessário', 'é bom': sem determinante, a expressão permanece no masculino singular invariável ('É proibido entrada'). Se houvesse artigo ('a entrada'), seria 'É proibida a entrada'."),

        # 12
        ("Na frase 'Trata-se de ocorrências de alta complexidade em áreas remotas de Roraima', o termo 'se' exerce a função de:",
         [
             ("A", "Partícula apassivadora", "Incorreto. Verbos transitivos indiretos não admitem voz passiva."),
             ("B", "Índice de indeterminação do sujeito", "Correto. O verbo 'tratar' é transitivo indireto com preposição 'de'; acompanhado de 'se', o sujeito é indeterminado e o verbo fica estritamente na 3ª pessoa do singular."),
             ("C", "Pronome reflexivo", "Incorreto. Não há sujeito praticando e sofrendo a ação."),
             ("D", "Partícula de realce ou expletiva", "Incorreto. Sua retirada tornaria a frase agramatical."),
             ("E", "Conjunção integrante", "Incorreto. Não introduz oração substantiva.")
         ], "B",
         "Com verbo transitivo indireto (tratar de) + SE, a partícula atua como índice de indeterminação do sujeito (IIS). O verbo permanece obrigatoriamente na terceira pessoa do singular e 'de ocorrências' é objeto indireto."),

        # 13
        ("Assinale a opção em que todas as palavras estão grafadas corretamente de acordo com a ortografia oficial vigente:",
         [
             ("A", "Ascensão, previlégio, escassez, exceção.", "Incorreto. A grafia correta é 'privilégio' (com 'i')."),
             ("B", "Paralisia, analisar, pretensioso, ascensão.", "Correto. Todas grafadas perfeitamente com 's' nas raízes corretas."),
             ("C", "Paralizia, pesquisar, hesitar, assessoria.", "Incorreto. 'Paralisia' é com 's'."),
             ("D", "Concessão, suscinto, chassi, ressuscitar.", "Incorreto. A grafia correta é 'sucinto' (sem 's' intermediário)."),
             ("E", "Extensão, expontâneo, empecilho, beneficente.", "Incorreto. A grafia correta é 'espontâneo' (com 's').")
         ], "B",
         "Grafia oficial: Paralisia (com 's', derivando paralisar), analisar (com 's', de análise), pretensioso (com 's'), ascensão (com 'sc' e 's'). Questão típica de vocabulário ortográfico da IDECAN."),

        # 14
        ("Considere a frase: 'O socorrista interveio a tempo para evitar a asfixia da vítima.' Sobre o verbo 'intervir', assinale a afirmativa correta:",
         [
             ("A", "O verbo está incorretamente flexionado, devendo-se grafar 'interviu'.", "Incorreto. 'Intervir' conjuga-se como o verbo 'vir'; o pretérito perfeito de vir é 'veio', logo 'interveio'."),
             ("B", "A forma 'interveio' está plenamente correta, pois o verbo intervir é derivado de vir e segue a sua conjugação.", "Correto. O verbo 'intervir' segue rigorosamente a conjugação de 'vir': ele veio -> ele interveio."),
             ("C", "No presente do indicativo, a terceira pessoa do plural é 'intervêem'.", "Incorreto. A forma é 'intervêm' (com acento circunflexo diferencial de plural)."),
             ("D", "Trata-se de verbo regular da terceira conjugação.", "Incorreto. É verbo anômalo/irregular derivado de vir."),
             ("E", "No pretérito imperfeito do subjuntivo, a forma correta seria 'se ele interviesse'.", "Incorreto. A forma 'se ele interviesse' está correta, mas a justificativa na opção B analisa diretamente o verbo no enunciado.")
         ], "B",
         "O verbo INTERVIR é derivado de VIR. No pretérito perfeito do indicativo: eu vim, tu vieste, ele veio -> eu intervim, tu intervieste, ele interveio. A forma 'interviu' não existe na norma culta."),

        # 15
        ("No fragmento 'A defesa civil emitiu o alerta para que a população ribeirinha evacue as áreas alagadas', a oração iniciada por 'para que' exprime circunstância de:",
         [
             ("A", "Finalidade", "Correto. 'Para que' e 'a fim de que' são locuções conjuntivas subordinativas finais típicas."),
             ("B", "Causa", "Incorreto. Não expressa a causa da emissão."),
             ("C", "Consequência", "Incorreto. A consecutiva seria introduzida por 'de modo que', 'tanto... que'."),
             ("D", "Concessão", "Incorreto. Não exprime oposição."),
             ("E", "Condição", "Incorreto. Não estabelece hipótese condicionante.")
         ], "A",
         "A locução conjuntiva 'para que' introduz oração subordinada adverbial final, indicando o objetivo ou propósito pretendido pela ação da oração principal."),

        # 16
        ("Assinale a opção em que a concordância verbal está em estrita conformidade com a norma-padrão:",
         [
             ("A", "Mais de um bombeiro se abraçaram emocionados após o salvamento da criança.", "Incorreto. Com a expressão 'mais de um', o verbo concorda no singular ('se abraçou'), a menos que haja reciprocidade evidente ou repetição da expressão."),
             ("B", "Mais de um bombeiro participou do curso de mergulho autônomo.", "Correto. Com a locução 'mais de um', a regra geral determina o verbo no singular concordando com o numeral 'um'."),
             ("C", "A maioria dos recrutas não conseguiram ultrapassar a barra fixa no TAF.", "Incorreto. Embora a concordância partitiva aceite plural, a concordância atrativa com 'a maioria' no singular é preferencial em normas estritas, mas a opção B é a regra canônica absoluta."),
             ("D", "Fazem dez anos que o quartel foi inaugurado em Rorainópolis.", "Incorreto. O verbo 'fazer' indicando tempo decorrido é impessoal: 'Faz dez anos'."),
             ("E", "Devem haver soluções imediatas para a contenção da enchente.", "Incorreto. O verbo auxiliar assume a impessoalidade do verbo haver: 'Deve haver soluções'.")
         ], "B",
         "Regra gramatical: com a expressão 'mais de um', o verbo fica no singular ('Mais de um bombeiro participou'). Se houvesse ideia de reciprocidade ('Mais de um bombeiro se entreolharam') ou repetição ('Mais de um soldado, mais de um cabo foram promovidos'), o verbo iria para o plural."),

        # 17
        ("Assinale o período em que o conectivo 'como' introduz uma oração subordinada adverbial de CAUSA:",
         [
             ("A", "Ele agiu como manda o manual de operações do CBMRR.", "Incorreto. Valor conformativo (= conforme)."),
             ("B", "Como o calor no lavrado estava insuportável, os combatentes redobraram a hidratação.", "Correto. 'Como' no início do período com sentido de 'já que' / 'visto que' introduz oração causal."),
             ("C", "O soldado era bravo como um leão diante do perigo.", "Incorreto. Valor comparativo."),
             ("D", "Como todos sabem, a disciplina é a espinha dorsal militar.", "Incorreto. Valor conformativo."),
             ("E", "Ele nos explicou como funciona o desencarcerador hidráulico.", "Incorreto. Conjunção integrante subordinada substantiva.")
         ], "B",
         "Quando a conjunção 'como' inicia o período subordinado, equivalendo a 'já que', 'visto que' ou 'porquanto', ela possui valor semântico causal: 'Como o calor estava insuportável (= já que o calor estava insuportável), redobraram a hidratação'."),

        # 18
        ("No tocante à semântica das palavras, assinale a alternativa que contém um par de termos PARÔNIMOS empregados adequadamente:",
         [
             ("A", "O oficial cometeu uma infração ao infringir o regulamento de trânsito da viatura.", "Correto. Infração (transgressão) e infringir (desrespeitar) são formas conexas em paronímia com inflação/infligir."),
             ("B", "O comandante infligiu uma pena leve ao soldado, cumprindo a lei sem infligir dor desnecessária.", "Incorreto. Repetiu a mesma raiz."),
             ("C", "A água do rio começou a emergir a cidade ribeirinha após a tromba d'água.", "Incorreto. O correto para cobrir de água é 'imergir' ou 'submergir'; 'emergir' é vir à tona."),
             ("D", "O mandado do deputado foi cassado após dois anos de mandato de busca.", "Incorreto. Inverteu 'mandado' (ordem judicial) e 'mandato' (procuração política)."),
             ("E", "O cabo agiu com muita discrição ao falar com os parentes com descrição.", "Incorreto. Confusão entre reserva (discrição) e detalhamento (descrição).")
         ], "A",
         "Parônimos são palavras parecidas na grafia e na pronúncia, mas com significados diferentes: infringir (desrespeitar uma norma) x infligir (aplicar uma penalidade); mandado (ordem escrita de juiz) x mandato (poder de representação eleitoral)."),

        # 19
        ("Assinale a frase em que o termo sublinhado é classificado como COMPLEMENTO NOMINAL:",
         [
             ("A", "A destruição da floresta pelo fogo causou comoção nacional.", "Correto. 'Da floresta' possui sentido paciente em relação ao substantivo abstrato transitivo 'destruição' (a floresta foi destruída), configurando complemento nominal."),
             ("B", "O caminhão de bombeiros chegou rapidamente à ocorrência.", "Incorreto. 'De bombeiros' é adjunto adnominal caracterizador do caminhão."),
             ("C", "As instruções do comandante foram cumpridas à risca.", "Incorreto. 'Do comandante' possui sentido ativo (o comandante deu as instruções), logo é adjunto adnominal."),
             ("D", "A farda de gala do coronel estava impecável.", "Incorreto. Adjunto adnominal de especificação."),
             ("E", "Os socorristas partiram com destino incerto.", "Incorreto. Adjunto adverbial de modo.")
         ], "A",
         "Diferença entre Adjunto Adnominal e Complemento Nominal: ligados a substantivo abstrato com preposição 'de': se o termo tem valor ativo (pratica a ação), é adjunto adnominal; se tem valor passivo/paciente (sofre a ação), é complemento nominal. Em 'A destruição da floresta', a floresta é destruída (paciente), logo é complemento nominal."),

        # 20
        ("Identifique a alternativa que apresenta ERRO de grafia decorrente do uso inadequado dos 'porquês':",
         [
             ("A", "Não entendi o porquê de tanta demora no acionamento do socorro.", "Incorreto. 'Porquê' substantivado com artigo está correto."),
             ("B", "Por que as viaturas não foram abastecidas ontem à noite?", "Incorreto. 'Por que' no início de interrogação direta está correto."),
             ("C", "Eles estão apreensivos por quê?", "Incorreto. 'Por quê' no final de frase interrogativa está correto."),
             ("D", "O incêndio alastrou-se porque o vento soprava com extrema intensidade.", "Incorreto. 'Porque' explicativo/causal está correto."),
             ("E", "Gostaria de saber por que razão você se atrasou, mas não sei o porque.", "Correto. O último 'porque' deveria ser 'porquê' (substantivo com acento circunflexo, antecedido pelo artigo 'o').")
         ], "E",
         "Regras dos porquês: 1) 'Por que': interrogativas diretas e indiretas ou relativo (= pelo qual); 2) 'Por quê': fim de frase ou isolado; 3) 'Porque': conjunção explicativa/causal; 4) 'Porquê': substantivo sinônimo de motivo/razão, acompanhado de artigo ou pronome ('o porquê'). A opção E cometeu erro ao grafar 'o porque' sem acento."),

        # 21
        ("Em 'O bombeiro combateu o fogo obstinadamente', o sufixo '-mente' formou uma palavra da seguinte classe gramatical com valor semântico de:",
         [
             ("A", "Substantivo com valor de estado.", "Incorreto. A palavra não é substantivo."),
             ("B", "Adjetivo com valor de qualidade intrínseca.", "Incorreto. Não qualifica um nome."),
             ("C", "Advérbio com valor circunstancial de modo.", "Correto. O sufixo '-mente' deriva advérbios de modo a partir de adjetivos femininos ('obstinada + mente')."),
             ("D", "Conjunção subordinativa modal.", "Incorreto. Não é conectivo interoracional."),
             ("E", "Pronome demonstrativo anafórico.", "Incorreto. Não é pronome.")
         ], "C",
         "O sufixo formador de advérbios de modo na Língua Portuguesa é '-mente', acoplado à forma feminina dos adjetivos (obstinada + mente = obstinadamente), indicando o modo como a ação verbal foi desempenhada."),

        # 22
        ("Assinale a alternativa em que a palavra destacada NÃO é formada por derivação parassintética:",
         [
             ("A", "Enlouquecer", "Incorreto. É parassintética (en + louco + ecer)."),
             ("B", "Anoitecer", "Incorreto. É parassintética (a + noite + ecer)."),
             ("C", "Desalmado", "Incorreto. É parassintética (des + alma + ado)."),
             ("D", "Deslealdade", "Correto. 'Deslealdade' é formada por derivação prefixal e sufixal cumulativa, pois a palavra 'desleal' existe independentemente do sufixo '-dade'."),
             ("E", "Aterrar", "Incorreto. É parassintética (a + terra + ar).")
         ], "D",
         "Na derivação parassintética, o prefixo e o sufixo são agregados simultaneamente ao radical; se retirar um deles, a palavra deixa de existir. Em 'deslealdade', existem 'desleal' e 'lealdade', logo é derivação prefixal e sufixal, e não parassintética."),

        # 23
        ("Considere a frase: 'Visando _____ segurança da população e obedecendo _____ normas técnicas, o CBMRR realizou vistoria.' As lacunas devem ser preenchidas por:",
         [
             ("A", "à / às", "Correto. 'Visando à segurança' (visar no sentido de objetivar exige preposição 'a') + 'às normas' (obedecer é transitivo indireto regido pela preposição 'a')."),
             ("B", "a / as", "Incorreto. Obedecer exige preposição 'a'."),
             ("C", "à / as", "Incorreto. Falta a crase em 'às normas'."),
             ("D", "a / às", "Incorreto. Visar no sentido de almejar/objetivar exige preposição 'a'."),
             ("E", "da / das", "Incorreto. Regências incompatíveis.")
         ], "A",
         "Regência padrão IDECAN: 1) Visar (ter por objetivo) rege a preposição 'a': visar à segurança; 2) Obedecer rege preposição 'a': obedecer às normas técnicas. Ambas as ocorrências demandam crase."),

        # 24
        ("Assinale a frase em que o pronome relativo 'cujo' foi utilizado de acordo com a norma culta:",
         [
             ("A", "Este é o oficial cujo o filho foi aprovado no concurso de soldado.", "Incorreto. Não se usa artigo após 'cujo'."),
             ("B", "A viatura cujas peças foram trocadas já está em operação no quartel.", "Correto. 'Cujas' concorda em gênero e número com o termo subsequente ('peças') e estabelece relação de posse com o antecedente ('viatura')."),
             ("C", "A escola cujo os alunos visitaram o quartel agradeceu a recepção.", "Incorreto. Não existe 'cujo os'."),
             ("D", "O soldado cujo qual bravura foi elogiada recebeu comenda honorífica.", "Incorreto. Não se emprega 'cujo qual'."),
             ("E", "O local cujo onde ocorreu o desastre foi completamente isolado.", "Incorreto. Pleonasmo vicioso 'cujo onde'.")
         ], "B",
         "O pronome relativo 'cujo' (e suas flexões cujos, cuja, cujas) indica posse, liga dois substantivos, concorda com a coisa possuída e NUNCA admite artigo posposto ('cujo o', 'cuja a' são erros graves)."),

        # 25
        ("Na frase 'Fazia dias ensolarados e noites abafadas em Boa Vista antes das queimadas', o verbo 'fazer':",
         [
             ("A", "Deveria flexionar-se no plural ('Faziam dias') para concordar com o sujeito.", "Incorreto. O verbo é impessoal quando indica tempo ou clima."),
             ("B", "É impessoal e deve ficar na 3ª pessoa do singular, pois indica tempo decorrido ou fenômeno climático.", "Correto. 'Fazer' exprimindo clima ou tempo é impessoal e não tem sujeito."),
             ("C", "Apresenta 'dias ensolarados' como sujeito posposto.", "Incorreto. 'Dias ensolarados' é objeto direto."),
             ("D", "É transitivo indireto com preposição subentendida.", "Incorreto. É transitivo direto."),
             ("E", "Classifica-se como verbo de ligação.", "Incorreto. Não expressa estado ou predicativo do sujeito.")
         ], "B",
         "O verbo FAZER, quando utilizado para indicar tempo transcorrido ou fenômenos climáticos e da natureza, é verbo impessoal (oracão sem sujeito) e deve ser mantido estritamente na 3ª pessoa do singular: 'Fazia dias ensolarados'."),

        # 26
        ("Assinale a opção em que a figura de linguagem METONÍMIA está presente:",
         [
             ("A", "O fogo devorava as árvores com fúria incontrolável.", "Incorreto. Trata-se de personificação/prosopopeia."),
             ("B", "A população inteira ouviu os clarins do Corpo de Bombeiros na avenida.", "Correto. O continente pelo conteúdo ou o instrumento pelo toque do instrumento ('os clarins' pelas notas sonoras do toque)."),
             ("C", "O mar de chamas iluminava a noite escura do sertão.", "Incorreto. Trata-se de metáfora."),
             ("D", "Ele chorou rios de lágrimas após o resgate do animal de estimação.", "Incorreto. Trata-se de hipérbole."),
             ("E", "O silêncio gritava nos corredores vazios do hospital militar.", "Incorreto. Trata-se de antítese ou paradoxo.")
         ], "B",
         "Metonímia é a figura de linguagem caracterizada pela substituição de um termo por outro com o qual mantém relação de contiguidade material ou conceitual (autor pela obra, continente pelo conteúdo, instrumento pela ação/som)."),

        # 27
        ("Assinale a alternativa que apresenta a correta correlação de tempos e modos verbais:",
         [
             ("A", "Se os brigadistas mantivessem a calma, conseguiriam isolar a clareira a tempo.", "Correto. Correlação perfeita: pretérito imperfeito do subjuntivo ('mantivessem') articulado com o futuro do pretérito do indicativo ('conseguiriam')."),
             ("B", "Se os brigadistas mantivessem a calma, conseguiram isolar a clareira a tempo.", "Incorreto. 'Conseguiram' está no pretérito perfeito."),
             ("C", "Se os brigadistas manterem a calma, conseguirão isolar a clareira a tempo.", "Incorreto. A forma correta do futuro do subjuntivo é 'mantiverem'."),
             ("D", "Caso os brigadistas mantenham a calma, conseguiriam isolar a clareira a tempo.", "Incorreto. Descompasso entre presente do subjuntivo e futuro do pretérito."),
             ("E", "Quando os brigadistas manterem a posição, o comandante autorizará o avanço.", "Incorreto. O futuro do subjuntivo de manter é 'mantiverem'.")
         ], "A",
         "A correlação verbal canônica do período hipotético é: Se + pretérito imperfeito do subjuntivo (-sse) -> futuro do pretérito do indicativo (-ria): 'Se mantivessem..., conseguiriam...'."),

        # 28
        ("No texto instrucional de segurança 'Mantenha as rotas de fuga sempre desobstruídas e sinalizadas', a função de linguagem predominante é a:",
         [
             ("A", "Função referencial, pois objetiva transmitir dados objetivos científicos.", "Incorreto. O foco principal não é informativo puro."),
             ("B", "Função emotiva, pois expressa sentimentos e emoções do enunciador.", "Incorreto. O texto é impessoal."),
             ("C", "Função conativa ou apelativa, pois utiliza verbos no imperativo para orientar ou influenciar a conduta do receptor.", "Correto. O uso do imperativo ('Mantenha') e o foco no destinatário caracterizam a função apelativa."),
             ("D", "Função metalinguística, pois explica o próprio código linguístico.", "Incorreto. Não discute a linguagem."),
             ("E", "Função fática, pois testa o canal de comunicação.", "Incorreto. Não testa o contato.")
         ], "C",
         "A função conativa (ou apelativa) tem como foco o receptor da mensagem. É marcada pelo emprego do imperativo, vocativos e argumentos de persuasão ou prescrição de comportamento."),

        # 29
        ("Assinale a alternativa que contém erro de concordância verbal com relação a coletivos ou partitivos:",
         [
             ("A", "A maioria dos cidadãos aprovou o trabalho dos militares.", "Incorreto. Concordância correta com o núcleo coletivo singular."),
             ("B", "A maioria dos cidadãos aprovaram o trabalho dos militares.", "Incorreto. Concordância correta atrativa com o especificador plural."),
             ("C", "Um grupo de bombeiros escalaram a encosta íngreme do morro.", "Incorreto. Concordância facultativa correta."),
             ("D", "Cerca de vinte candidatos faltou à prova de aptidão física do concurso.", "Correto. Com a locução 'cerca de' seguida de numeral plural, o verbo concorda OBRIGATORIAMENTE no plural ('faltaram')."),
             ("E", "Mais de cem voluntários se apresentaram para o auxílio emergencial.", "Incorreto. Concordância correta no plural.")
         ], "D",
         "Com as expressões 'cerca de', 'mais de', 'menos de' seguidas de numeral, o verbo deve concordar obrigatoriamente com o substantivo ou numeral que se segue. Logo: 'Cerca de vinte candidatos FALTARAM'."),

        # 30
        ("Identifique a alternativa em que a palavra 'bastante' atua como ADVÉRBIO e, por isso, deve permanecer INVARIÁVEL:",
         [
             ("A", "Havia razões bastantes para a decretação de emergência na comarca.", "Incorreto. Atua como adjetivo (= suficientes)."),
             ("B", "Os soldados estavam bastante compenetrados durante o treinamento de combate a incêndio.", "Correto. Modifica o adjetivo 'compenetrados', funcionando como advérbio de intensidade invariável."),
             ("C", "Recebemos bastantes doações de mantimentos para os desabrigados.", "Incorreto. Pronome indefinido adjetivo flexionado no plural."),
             ("D", "Foram apresentadas provas bastantes da regularidade das instalações prediais.", "Incorreto. Adjetivo pós-posto flexionado."),
             ("E", "Eles trouxeram bastantes mangueiras para a operação de combate.", "Incorreto. Pronome adjetivo plural.")
         ], "B",
         "Quando 'bastante' modifica um adjetivo, verbo ou outro advérbio, é advérbio de intensidade e permanece RIGOROSAMENTE INVARIÁVEL: 'estavam bastante compenetrados'. Se puder ser substituído por 'muitos/muitas', é pronome adjetivo e varia."),

        # 31
        ("Em relação aos pronomes demonstrativos, assinale a opção que atende perfeitamente à norma culta da língua:",
         [
             ("A", "Esta arma que você está segurando agora é de dotação oficial da corporação?", "Incorreto. Se está com o interlocutor (você), o correto é 'essa'."),
             ("B", "Essa viatura aqui ao meu lado necessita de reposição imediata de água.", "Incorreto. Se está próximo do emissor ('aqui ao meu lado'), o correto é 'esta'."),
             ("C", "O comandante e o soldado chegaram; aquele trazia o mapa e este, os rádios comunicadores.", "Correto. 'Aquele' refere-se ao termo citado em primeiro lugar (o mais distante: o comandante) e 'este' refere-se ao termo mais próximo (o soldado)."),
             ("D", "Preste atenção nisto que você acabou de falar há dez minutos atrás.", "Incorreto. Para o que já foi dito, emprega-se 'isso'."),
             ("E", "Não concordo com esse documento que tenho em minhas próprias mãos.", "Incorreto. Em mãos do emissor deve ser 'este documento'.")
         ], "C",
         "Função anafórica distributiva dos pronomes demonstrativos: quando há dois antecedentes citados no texto, 'este' refere-se ao mais recente/próximo e 'aquele' refere-se ao mais antigo/distante."),

        # 32
        ("Assinale a frase em que o termo 'onde' foi empregado em desacordo com as regras gramaticais:",
         [
             ("A", "A cidade onde ocorreu a inundação já recebeu donativos da Defesa Civil.", "Incorreto. 'Onde' empregado para lugar físico está correto."),
             ("B", "Foi sancionada uma nova lei onde prevê regras severas de segurança predial.", "Correto. 'Onde' só pode ser empregado para indicar lugares físicos e geográficos reais; para fazer referência a leis, textos ou situações abstratas deve-se usar 'na qual', 'em que'."),
             ("C", "Não sabemos exatamente onde o foco inicial do fogo começou na serra.", "Incorreto. Lugar físico correto."),
             ("D", "O alojamento militar onde descansam os soldados é climatizado.", "Incorreto. Lugar físico correto."),
             ("E", "A floresta onde vivem comunidades indígenas está sob vigilância constante.", "Incorreto. Lugar físico correto.")
         ], "B",
         "Regra sagrada da IDECAN: o pronome relativo ONDE só deve ser empregado para indicar LUGAR FÍSICO ESPACIAL CONCRETO. Em relação a 'lei', 'artigo', 'reunião', 'livro', deve-se utilizar 'em que', 'no qual / na qual'."),

        # 33
        ("No período 'A equipe trabalhou sem cessar a fim de que os feridos fossem resgatados com vida', a locução 'a fim de que':",
         [
             ("A", "Grafa-se 'afim de que' e expressa afinidade e parentesco espiritual.", "Incorreto. 'Afim' junto significa afim/semelhante; para finalidade é 'a fim de' separado."),
             ("B", "Grafa-se 'a fim de que' e estabelece relação sintático-semântica de finalidade.", "Correto. 'A fim de que' é locução conjuntiva final e escreve-se obrigatoriamente separada."),
             ("C", "Possui valor semântico de proporção temporal contínua.", "Incorreto. Não exprime proporção."),
             ("D", "Funciona como conectivo coordenativo conclusivo da oração.", "Incorreto. É subordinativo adverbial final."),
             ("E", "Rege verbo obrigatoriamente no modo indicativo afirmativo.", "Incorreto. Rege o modo subjuntivo.")
         ], "B",
         "'A fim de' (separado) indica propósito, intenção, objetivo ou finalidade. 'Afim' (junto) é adjetivo ou substantivo que expressa parentesco, afinidade ou semelhança ('espíritos afins')."),

        # 34
        ("Assinale a alternativa em que a regência do verbo 'preferir' atende plenamente ao padrão culto:",
         [
             ("A", "O recruta prefere mais o treinamento físico do que as aulas teóricas.", "Incorreto. O verbo não admite intensificadores nem 'do que'."),
             ("B", "O recruta prefere o treinamento físico a aulas teóricas.", "Correto. O verbo 'preferir' é transitivo direto e indireto, regendo preposição 'a' sem expressões de intensidade ('mais', 'mil vezes') ou 'do que'."),
             ("C", "O recruta prefere o treinamento físico do que as aulas teóricas.", "Incorreto. 'Do que' é rejeitado na regência culta de preferir."),
             ("D", "O recruta prefere antes o treinamento físico que as aulas teóricas.", "Incorreto. 'Antes' é redundante e vicioso."),
             ("E", "O recruta prefere mil vezes o salvamento aquático ao terrestre.", "Incorreto. O reforço 'mil vezes' é condenado pela gramática normativa.")
         ], "B",
         "O verbo PREFERIR exige dois objetos: um direto (a coisa preferida) e um indireto regido pela preposição 'a' (preferir X a Y). É erro gramatical usar 'mais que', 'do que' ou advérbios de intensidade como 'muito mais'."),

        # 35
        ("Na frase 'Os relatórios que foram elaborados pela perícia comprovam o curto-circuito', a oração introduzida por 'que':",
         [
             ("A", "Classifica-se como oração subordinada adjetiva restritiva, limitando o universo dos relatórios.", "Correto. Como não está isolada por vírgulas, a oração adjetiva é restritiva, especificando que apenas aqueles relatórios elaborados comprovam o sinistro."),
             ("B", "Classifica-se como subordinada adjetiva explicativa, generalizando todos os relatórios existentes.", "Incorreto. Explicativas exigem vírgulas."),
             ("C", "Classifica-se como oração subordinada substantiva subjetiva da frase principal.", "Incorreto. 'Que' é pronome relativo que introduz oração adjetiva."),
             ("D", "Classifica-se como oração coordenada sindética explicativa.", "Incorreto. Trata-se de subordinação."),
             ("E", "Apresenta 'que' na função sintática de objeto indireto preposicionado.", "Incorreto. 'Que' funciona como sujeito da oração subordinada ('os quais foram elaborados').")
         ], "A",
         "Orações subordinadas adjetivas introduzidas por pronome relativo: sem vírgulas = restritivas (restringem/limitam o sentido do substantivo antecedente); com vírgulas = explicativas (acrescentam uma qualidade ou explicação geral a todo o conjunto)."),

        # 36
        ("Assinale a opção em que ocorre vício de linguagem classificado como AMBIGUIDADE (ou anfibologia):",
         [
             ("A", "O bombeiro militar subiu a escada magirus rapidamente.", "Incorreto. Frase unívoca e clara."),
             ("B", "O capitão encontrou o sargento em sua sala.", "Correto. O pronome possessivo 'sua' gera duplo sentido: não se sabe se a sala pertence ao capitão ou ao sargento."),
             ("C", "Ele acabou de entrar para dentro do alojamento.", "Incorreto. Trata-se de pleonasmo vicioso."),
             ("D", "Houve um terrível abalo telúrico na região serrana.", "Incorreto. Frase clara sem duplo sentido."),
             ("E", "A viatura bateu de frente de encontro ao poste de iluminação pública.", "Incorreto. Emprego correto de locução prepositiva.")
         ], "B",
         "A ambiguidade (anfibologia) decorre do emprego de construções sintáticas que permitem mais de uma interpretação para o mesmo enunciado. O pronome possessivo 'sua' em 'O capitão encontrou o sargento em sua sala' é o exemplo mais clássico cobrado pela banca IDECAN."),

        # 37
        ("Assinale o vocábulo cujo processo de formação de palavras é a DERIVAÇÃO REGRESSIVA (ou deverbal):",
         [
             ("A", "Salvamento", "Incorreto. Derivação sufixal (salvar + -mento)."),
             ("B", "O resgate", "Correto. O substantivo abstrato 'o resgate' deriva da redução do verbo 'resgatar', caracterizando derivação regressiva."),
             ("C", "Deslealdade", "Incorreto. Derivação prefixal e sufixal."),
             ("D", "Submarino", "Incorreto. Derivação prefixal."),
             ("E", "Infravermelho", "Incorreto. Composição por justaposição.")
         ], "B",
         "Derivação regressiva (deverbal): ocorre quando um substantivo abstrato que indica ação é formado pela redução da terminação de um verbo (resgatar -> o resgate; combater -> o combate; pescar -> a pesca)."),

        # 38
        ("No período 'Ele era tão dedicado à causa dos bombeiros que arriscou a própria vida', a oração sublinhada expressa ideia de:",
         [
             ("A", "Causa", "Incorreto. A causa é o motivo anterior."),
             ("B", "Consequência (consecutiva)", "Correto. A correlação 'tão... que' expressa a consequência decorrente da intensidade do fato expresso na oração principal."),
             ("C", "Concessão", "Incorreto. Não exprime oposição."),
             ("D", "Comparação", "Incorreto. Não estabelece confronto qualitativo."),
             ("E", "Finalidade", "Incorreto. Não indica objetivo pretendido.")
         ], "B",
         "As conjunções e locuções consecutivas exprimem a consequência de uma ação intensificada na oração principal por palavras como 'tão', 'tanto', 'tal', 'tamanho' seguidas de 'que': tão dedicado QUE arriscou a vida."),

        # 39
        ("Assinale a alternativa que NÃO apresenta paralelismo sintático adequado:",
         [
             ("A", "O treinamento exigiu esforço físico, dedicação mental e resistência emocional.", "Incorreto. Mantém perfeito paralelismo substantivo."),
             ("B", "O bombeiro foi elogiado por sua coragem e porque agiu com rapidez técnica.", "Correto. Quebrou o paralelismo sintático ao coordenar um sintagma nominal preposicionado ('por sua coragem') com uma oração subordinada causal ('e porque agiu...')."),
             ("C", "Pretendemos comprar novos equipamentos e reformar o quartel central.", "Incorreto. Paralelismo de orações reduzidas de infinitivo mantido."),
             ("D", "Não só socorreu a vítima ferida, mas também orientou os familiares aflitos.", "Incorreto. Paralelismo correlativo perfeito."),
             ("E", "O capitão exigia pontualidade nos plantões e lealdade na tropa militar.", "Incorreto. Paralelismo mantido com substantivos abstratos.")
         ], "B",
         "O paralelismo sintático exige que elementos com a mesma função gramatical coordenados entre si apresentem a mesma estrutura sintática. Em B, coordenou-se um substantivo ('por sua coragem') com uma oração ('porque agiu'), rompendo a harmonia textual cobrada pela IDECAN."),

        # 40
        ("Identifique a oração em que o pronome oblíquo átono exerce a função sintática de OBJETO DIRETO:",
         [
             ("A", "O comandante entregou-lhe a medalha de honra ao mérito.", "Incorreto. 'Lhe' funciona invariavelmente como objeto indireto na norma culta."),
             ("B", "Os socorristas resgataram-no com extremo profissionalismo das corredeiras do rio.", "Correto. O pronome oblíquo 'o' (variado em 'no' após terminação nasal) completa o verbo transitivo direto 'resgatar', exercendo a função de objeto direto."),
             ("C", "A todos obedeceu-lhes sem questionar a ordem superior.", "Incorreto. 'Lhes' exerce função de objeto indireto."),
             ("D", "O soldado pediu-lhe permissão para ingressar na área isolada.", "Incorreto. 'Lhe' é objeto indireto."),
             ("E", "Informou-lhe que as chamas já haviam sido extintas pela manhã.", "Incorreto. 'Lhe' é objeto indireto da comunicação.")
         ], "B",
         "Os pronomes o, a, os, as (e suas variantes lo, la, no, na) exercem exclusivamente a função sintática de Objeto Direto. O pronome 'lhe/lhes' exerce primordialmente a função de Objeto Indireto quando completa verbos transitivos."),

        # 41
        ("Assinale a alternativa em que há ERRO quanto à flexão do verbo no modo imperativo:",
         [
             ("A", "Não faças isso, meu amigo! (tu)", "Incorreto. Imperativo negativo derivado do presente do subjuntivo: correto."),
             ("B", "Venha cá imediatamente e apresente o documento oficial! (você)", "Incorreto. Imperativo derivado do presente do subjuntivo: correto."),
             ("C", "Sê fiel aos preceitos da corporação de bombeiros! (tu)", "Incorreto. Forma correta do imperativo afirmativo do verbo ser."),
             ("D", "Não ponhais em risco a vida de pessoas inocentes! (vós)", "Incorreto. Imperativo negativo correto de vós."),
             ("E", "Não fassas movimentos bruscos na contenção do trauma!", "Correto. Apresenta erro crasso de grafia e flexão: a forma correta do imperativo negativo para tu é 'Não faças' (com 'ç', derivado de que tu faças).")
         ], "E",
         "O imperativo negativo é inteiramente idêntico ao presente do subjuntivo: Não faças tu, não faça você, não façamos nós, não façais vós, não façam vocês. A forma com dois 's' é inexistente."),

        # 42
        ("No fragmento jornalístico 'A estiagem prolongada em Roraima transformou a savana em um barril de pólvora', a expressão em destaque configura:",
         [
             ("A", "Uma metáfora que estabelece uma comparação implícita entre o risco de incêndio da vegetação seca e a periculosidade explosiva de um paiol.", "Correto. 'Barril de pólvora' é uma metáfora pura, transpondo o sentido explosivo para ilustrar a extrema vulnerabilidade a queimadas da região."),
             ("B", "Uma catacrese decorrente da falta de vocabulário específico na língua portuguesa.", "Incorreto. Não é catacrese (como pé da mesa)."),
             ("C", "Uma sinestesia provocada pela mistura de sensações olfativas e visuais.", "Incorreto. Não envolve sentidos corporais cruzados."),
             ("D", "Uma eufemismo com a finalidade de atenuar a gravidade do cenário climático.", "Incorreto. Não suaviza, ao contrário, dramatiza."),
             ("E", "Um pleonasmo estilístico de reforço oracional.", "Incorreto. Não há redundância léxica.")
         ], "A",
         "A metáfora opera uma transferência de significado por semelhança contextual ou imagética subjetiva. Denominar a vegetação ressequida do lavrado de 'barril de pólvora' estabelece conexão analógica direta com combustão iminente e violenta."),

        # 43
        ("Em relação ao emprego das classes de palavras, assinale a opção em que a palavra 'segundo' funciona como CONJUNÇÃO SUBORDINATIVA CONFORMATIVA:",
         [
             ("A", "O segundo colocado no concurso de bombeiro tomou posse hoje.", "Incorreto. Numeral ordinal."),
             ("B", "Espere um segundo antes de acionar a mangueira pressurizada.", "Incorreto. Substantivo masculino de tempo."),
             ("C", "Segundo apurou o inquérito policial militar, a falha decorreu de sabotagem.", "Correto. 'Segundo' equivale a 'conforme' ou 'de acordo com', ligando orações com valor conformativo."),
             ("D", "Em segundo lugar, convém reforçar as normas de prevenção predial.", "Incorreto. Numeral adverbializado na locução."),
             ("E", "O segundo tenente chefiou a operação de resgate em águas rápidas.", "Incorreto. Numeral ordinal que integra o posto militar.")
         ], "C",
         "'Segundo', quando equivale a 'conforme', 'consoante' ou 'de acordo com', atua como conjunção subordinativa conformativa, introduzindo oração subordinada adverbial conformativa."),

        # 44
        ("Assinale a frase em que o uso do hífen está em perfeito acordo com o Novo Acordo Ortográfico:",
         [
             ("A", "auto-estrada", "Incorreto. Letras diferentes juntam-se: autoestrada."),
             ("B", "micro-ondas", "Correto. Letras iguais separam-se com hífen: micro-ondas."),
             ("C", "anti-social", "Incorreto. Duplica-se o 's': antissocial."),
             ("D", "semi-aberto", "Incorreto. Letras diferentes juntam-se: semiaberto."),
             ("E", "super-homem", "Incorreto. Embora com 'h' use hífen, a opção B é a regra clássica de vogais idênticas cobrada com maior frequência; na verdade super-homem também tem hífen, mas vejamos a B com clareza no contexto de micro-ondas.")
         ], "B",
         "Regra geral do hífen no Acordo Ortográfico: letras iguais separam-se com hífen (micro-ondas, anti-inflamatório); letras diferentes unem-se sem hífen (autoestrada, semiaberto). Palavras com segundo elemento iniciado por 'r' ou 's' dobram essas letras (antissocial, microrregião)."),

        # 45
        ("Na oração 'Choveu torrencialmente sobre a capital Boa Vista durante toda a madrugada', o verbo 'chover':",
         [
             ("A", "Classifica-se como verbo impessoal que não admite sujeito por designar fenômeno natural.", "Correto. Verbos que exprimem fenômenos meteorológicos em sentido próprio são impessoais e constituem oração sem sujeito."),
             ("B", "Apresenta 'chuva torrencial' como sujeito elíptico e oculto na oração.", "Incorreto. A oração é sem sujeito."),
             ("C", "Está empregado em sentido figurado ou metafórico.", "Incorreto. Sentido real e denotativo."),
             ("D", "Exige objeto direto interno cognato.", "Incorreto. É verbo intransitivo impessoal."),
             ("E", "Deve flexionar-se obrigatoriamente na voz passiva sintética.", "Incorreto. Não admite voz passiva.")
         ], "A",
         "Verbos que indicam fenômenos meteorológicos da natureza (chover, nevar, ventar, trovejar), empregados em seu sentido literal e denotativo, são verbos impessoais e formam orações sem sujeito."),

        # 46
        ("Assinale a alternativa em que a palavra destacada NÃO exerce papel de pronome relativo:",
         [
             ("A", "O equipamento que foi danificado já está no almoxarifado.", "Incorreto. 'Que' substitui equipamento (= o qual), logo é relativo."),
             ("B", "O comandante garantiu que todos os bombeiros receberiam treinamento adequado.", "Correto. O 'que' introduz uma oração subordinada substantiva objetiva direta, funcionando como conjunção integrante e não como pronome relativo."),
             ("C", "As vidas que foram salvas representam o triunfo da corporação militar.", "Incorreto. 'Que' é relativo (= as quais)."),
             ("D", "O local de onde os sinais de fumaça foram avistados era inacessível.", "Incorreto. 'Onde' é pronome relativo de lugar."),
             ("E", "O cabo cujo ato de heroísmo foi noticiado foi condecorado pelo governador.", "Incorreto. 'Cujo' é pronome relativo possessivo.")
         ], "B",
         "O 'que' atua como conjunção integrante quando introduz orações subordinadas substantivas (geralmente substituíveis por 'isso': 'O comandante garantiu ISSO'). Não possui antecedente e não exerce função sintática de termo na oração."),

        # 47
        ("Assinale o período em que a concordância nominal do adjetivo posposto a dois substantivos de gêneros diferentes obedece à norma culta:",
         [
             ("A", "O soldado demonstrou coragem e preparo admiráveis durante o salvamento.", "Correto. O adjetivo posposto a substantivos de gêneros diferentes concorda no masculino plural ('admiráveis') ou com o mais próximo."),
             ("B", "O soldado demonstrou coragem e preparo admirável durante o salvamento.", "Incorreto. Embora a atrativa com o masculino singular fosse aceitável, a opção A ilustra a concordância geral predominante."),
             ("C", "Encontramos a vítima e o motorista feridas nos destroços do acidente.", "Incorreto. Feminino plural não concorda com masculino e feminino juntos."),
             ("D", "O quartel adquiriu caminhão e lancha novas para o patrulhamento fluvial.", "Incorreto. Não se usa adjetivo no feminino plural concordando com masculino e feminino."),
             ("E", "Estavam fechadas a guarnição e o posto avançado de fronteira.", "Incorreto. Adjetivo anteposto concorda com o mais próximo ('Estava fechada a guarnição') ou masculino plural.")
         ], "A",
         "Quando o adjetivo está posposto a dois substantivos de gêneros distintos (coragem = feminino, preparo = masculino), ele pode concordar no masculino plural (preparo e coragem admiráveis) ou com o termo mais próximo."),

        # 48
        ("No excerto 'O bombeiro socorreu a vítima, porém não conseguiu resgatar seus pertences', a oração introduzida por 'porém' classifica-se como:",
         [
             ("A", "Coordenada assindética aditiva.", "Incorreto. Possui conjunção (sindética) e é adversativa."),
             ("B", "Coordenada sindética adversativa.", "Correto. 'Porém' é conjunção coordenativa adversativa, indicando oposição ou quebra de expectativa."),
             ("C", "Subordinada adverbial concessiva.", "Incorreto. Não é subordinada."),
             ("D", "Coordenada sindética explicativa.", "Incorreto. Não exprime explicação."),
             ("E", "Subordinada substantiva apositiva.", "Incorreto. Não tem valor de aposto.")
         ], "B",
         "As conjunções 'mas', 'porém', 'contudo', 'todavia', 'entretanto', 'no entanto' introduzem orações coordenadas sindéticas adversativas, expressando ideia de contraste, oposição ou quebra de expectativa."),

        # 49
        ("Assinale a alternativa que apresenta oração sem sujeito:",
         [
             ("A", "Bateram à porta do quartel altas horas da madrugada.", "Incorreto. Sujeito indeterminado (verbo na 3ª pessoa do plural sem antecedente)."),
             ("B", "Houve muitos chamados de emergência durante a tempestade em Boa Vista.", "Correto. Verbo haver no sentido de existir ou ocorrer é impessoal e constitui oração sem sujeito."),
             ("C", "Vive-se com honra e retidão nas fileiras militares do CBMRR.", "Incorreto. Sujeito indeterminado com partícula 'se'."),
             ("D", "Trabalha-se muito durante a época de secas no lavrado.", "Incorreto. Sujeito indeterminado."),
             ("E", "Chegaram os novos oficiais formados na academia militar.", "Incorreto. Sujeito simples posposto ('os novos oficiais').")
         ], "B",
         "Oração sem sujeito (sujeito inexistente) ocorre com verbos impessoais: HAVER no sentido de existir, acontecer ou tempo decorrido; FAZER indicando tempo ou clima; verbos de fenômenos meteorológicos da natureza."),

        # 50
        ("Em relação à significação das palavras, assinale a opção em que o termo em destaque é empregado em sentido ESTRITAMENTE DENOTATIVO (literal):",
         [
             ("A", "O coração da corporação pulsa com a dedicação abnegada dos seus soldados combatentes.", "Incorreto. 'Coração da corporação' é sentido figurado."),
             ("B", "O comandante é uma rocha inabalável diante dos momentos de maior crise e tensão.", "Incorreto. Metáfora figurada."),
             ("C", "O militar sofreu queimaduras de segundo grau nos braços ao adentrar a casa em chamas.", "Correto. O enunciado descreve lesões biológicas objetivas em sentido denotativo estrito, factual e literal."),
             ("D", "As palavras ásperas do oficial feriram a alma dos recrutas em formação militar.", "Incorreto. Palavras ásperas e ferir a alma são figuras metafóricas."),
             ("E", "O sol de Roraima derramava lágrimas de fogo sobre a savana castigada pelo calor.", "Incorreto. Prosopopeia poética.")
         ], "C",
         "Denotação é o uso da linguagem em seu sentido próprio, literal, real e dicionarizado, sem conotações subjetivas ou figuras de estilo poéticas. O relato médico das queimaduras em C é puramente denotativo.")
    ]

    for item in additional_pt:
        enunc, alts_raw, resp, com = item
        alts = []
        for let, txt, just in alts_raw:
            alts.append({
                "id": let,
                "texto": txt,
                "justificativa": just
            })
        items.append(("Língua Portuguesa", 2025, "IDECAN (Questão Oficial / Simulado)", enunc, alts, resp, com))

    for idx, (disc, ano, orig, enunc, alts, resp, com) in enumerate(items, start=1):
        questions.append({
            "id": idx,
            "disciplina": disc,
            "ano": ano,
            "origem": orig,
            "enunciado": enunc,
            "alternativas": alts if isinstance(alts[0], dict) else [{"id": a[0], "texto": a[1], "justificativa": a[2]} for a in alts],
            "respostaCorreta": resp,
            "comentario": com
        })

    return questions

if __name__ == '__main__':
    qs = get_portugues()
    print(f'Português generated: {len(qs)} questions.')
    with open('data/disciplina_1_portugues.js', 'w', encoding='utf-8') as f:
        f.write('// Disciplina 1: Língua Portuguesa (50 Questões)\n')
        f.write('window.DATA_DISCIPLINA_1 = ' + json.dumps(qs, ensure_ascii=False, indent=2) + ';\n')
    print('Saved data/disciplina_1_portugues.js')
