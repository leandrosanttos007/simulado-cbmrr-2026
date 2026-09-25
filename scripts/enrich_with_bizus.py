import json, re

with open('questions.js', 'r', encoding='utf-8') as f:
    code = f.read()

# Parse EDITAL_METADATA, DISCIPLINAS and ALL_QUESTIONS
meta_start = code.find('window.EDITAL_METADATA = ') + len('window.EDITAL_METADATA = ')
meta_end = code.find(';\n\nwindow.DISCIPLINAS')
meta = json.loads(code[meta_start:meta_end])

disc_start = code.find('window.DISCIPLINAS = ') + len('window.DISCIPLINAS = ')
disc_end = code.find(';\n\nwindow.ALL_QUESTIONS')
disc = json.loads(code[disc_start:disc_end])

qs_start = code.find('window.ALL_QUESTIONS = ') + len('window.ALL_QUESTIONS = ')
qs_end = code.rfind(';\n')
questions = json.loads(code[qs_start:qs_end])

print(f"Loaded {len(questions)} questions for bizu enhancement.")

# Define rich pedagogical bizus and pegadinha rules per discipline & topic
def get_bizu_and_pegadinha(q):
    d = q['disciplina']
    en = q['enunciado'].lower()
    com = q['comentario'].lower()
    
    # Defaults
    macete = "⚡ BIZU DO CONCURSEIRO: Foque na eliminação imediata das alternativas absurdas. A IDECAN costuma criar 2 alternativas totalmente erradas, 1 com pegadinha sutil e o gabarito literal."
    pegadinha = "⚠️ RADAR IDECAN: Cuidado com generalizações absolutas ('sempre', 'nunca', 'exclusivamente') inseridas pela banca para falsear itens verossímeis."
    
    # 1. Língua Portuguesa
    if d == "Língua Portuguesa":
        if "haver" in en or "haver" in com:
            macete = "⚡ BIZU DO HAVER: O verbo 'haver' no sentido de existir ou tempo decorrido é IMPESSOAL (não tem sujeito) e FICA SEMPRE NO SINGULAR ('Havia muitos bombeiros'). Se trocar por 'existir', ele varia: 'Existiam muitos bombeiros'."
            pegadinha = "⚠️ RADAR IDECAN: A banca adora colocar sujeito plural logo após 'haviam' para tentar enganar seu ouvido. Nunca caia nessa: 'haviam pessoas' é ERRO GRAVE!"
        elif "crase" in en or "crase" in com:
            macete = "⚡ MNEMÔNICO DA CRASE FACULTATIVA: 'Até a Maria sua' -> 1) Depois da preposição 'Até'; 2) Antes de nome próprio feminino ('Maria'); 3) Antes de pronome possessivo feminino singular ('sua'). E regra de ouro: Diante de verbo ou palavra masculina, CRASE PASSA LONGE!"
            pegadinha = "⚠️ RADAR IDECAN: A banca adora colocar 'a' no singular diante de palavra feminina no plural (ex: 'socorreu a vítimas'). Lembre-se: 'A' no singular + palavra no plural = Crase nem a pau!"
        elif "próclise" in en or "colocação" in en or "pronom" in en:
            macete = "⚡ BIZU DO ÍMÃ DA PRÓCLISE: Palavras atrativas puxam o pronome para antes do verbo: 1) Palavras negativas (não, nunca); 2) Conjunções subordinativas (quando, se, que, embora); 3) Pronomes relativos e indefinidos. E nunca inicie frase com pronome oblíquo!"
            pegadinha = "⚠️ RADAR IDECAN: Cuidado com tempos compostos: se houver particípio ('tinha falado'), JAMAIS coloque ênclise ao particípio ('tinha falado-me' é proibido!)."
        elif "regência" in en or "aspirar" in en or "visar" in en or "preferir" in en:
            macete = "⚡ BIZU DA REGÊNCIA: 1) 'Aspirar' e 'Visar' no sentido de desejar/almejar exigem preposição 'A' ('aspira AO cargo', 'visa AO sucesso'); 2) 'Preferir' exige 'A' e proíbe 'do que' (Prefere X a Y, nunca 'mais X do que Y')."
            pegadinha = "⚠️ RADAR IDECAN: A banca usa a linguagem do cotidiano ('prefiro praia do que campo') para parecer natural. Na norma culta da IDECAN é: 'prefiro praia A campo'."
        elif "concordância" in en:
            macete = "⚡ BIZU DA CONCORDÂNCIA: Expressões 'É proibido / É necessário': SEM artigo fica invariável no masculino ('É proibido entrada'). COM artigo feminino varia ('É proibida A entrada')."
            pegadinha = "⚠️ RADAR IDECAN: O verbo 'fazer' indicando tempo decorrido ou clima é impessoal: 'Faz 10 anos' (e nunca 'Fazem 10 anos')."
        elif "onde" in en or "aonde" in en:
            macete = "⚡ BIZU DO ONDE: 'Onde' só serve para LUGAR FÍSICO COM CHÃO (onde você pisa). Para 'leis', 'artigos', 'reuniões' ou 'livros', risque 'onde' e use 'em que' ou 'no qual'."
            pegadinha = "⚠️ RADAR IDECAN: 'Na lei onde prevê...' -> ERRO TÍPICO! Lei não é lugar geográfico."
        elif "porquê" in en or "por que" in en:
            macete = "⚡ BIZU DOS 4 PORQUÊS: 'Por que' (início de pergunta ou = pelo qual); 'Por quê' (fim de frase colado no ponto); 'Porque' (resposta/pois); 'O porquê' (substantivo acompanhado de artigo 'o')."
            pegadinha = "⚠️ RADAR IDECAN: Trocar 'o porquê' com acento por 'o porque' sem acento no final de frases explicativas."
        elif "embora" in en or "conjunção" in en:
            macete = "⚡ BIZU DAS CONJUNÇÕES: 'Embora' = Rainha da CONCESSÃO (obstáculo que não impede a ação). 'Porque / Já que / Visto que' = CAUSA. 'Para que / A fim de' = FINALIDADE."
            pegadinha = "⚠️ RADAR IDECAN: Confundir 'concessiva' (embora) com 'adversativa' (mas, porém) ou 'causal' (porque)."
            
    # 2. Raciocínio Lógico
    elif d == "Raciocínio Lógico - Matemático":
        if "contrapositiva" in en or "corajoso" in en or "equivalente" in en:
            macete = "⚡ BIZU DA CONTRAPOSITIVA: Para achar a proposição equivalente a 'Se P, então Q', basta VOLTAR NEGANDO TUDO: '~Q -> ~P'. (Se é Bombeiro -> é Corajoso <=> Se NÃO é corajoso -> NÃO é bombeiro)."
            pegadinha = "⚠️ RADAR IDECAN: Cuidado com a Falácia da Inversão Simples ('Se não é bombeiro, não é corajoso') ou da Afirmação do Consequente ('Se é corajoso, é bombeiro'). Ambas são falsas!"
        elif "negação" in en or "de morgan" in en:
            if "se" in en:
                macete = "⚡ REGRA DO MANÉ PARA NEGAR O 'SE... ENTÃO': MAntém a primeira E NEga a segunda! (~(P -> Q) = P ^ ~Q). O conectivo da negação vira 'E' (nunca outro 'se')."
                pegadinha = "⚠️ RADAR IDECAN: A banca sempre tenta colocar outro 'se... então' nas alternativas para te confundir. Risque todas e procure a que tem 'E'!"
            elif "todo" in en:
                macete = "⚡ BIZU DO 'TODO': NUNCA negue 'Todo' com 'Nenhum'! Para derrubar 'Todo bombeiro corre', basta UMA exceção: 'Algum bombeiro não corre' (ou 'Pelo menos um não corre')."
                pegadinha = "⚠️ RADAR IDECAN: A alternativa que traz 'Nenhum bombeiro corre' é o distrator mais marcado por quem não estudou. Elimine de cara!"
            elif "nenhum" in en:
                macete = "⚡ BIZU DO 'NENHUM': Para negar 'Nenhum', basta existir UM que faça: Negação = 'Algum faz' ou 'Existe pelo menos um'."
                pegadinha = "⚠️ RADAR IDECAN: Tentar negar 'Nenhum' com 'Todos'. Isso não é negação lógica, é contrariedade extrema."
            else:
                macete = "⚡ LEIS DE DE MORGAN: Negação de 'P E Q' vira '~P OU ~Q'. Negação de 'P OU Q' vira '~P E ~Q'. Inverte as duas proposições e troca o conectivo!"
                pegadinha = "⚠️ RADAR IDECAN: Esquecer de trocar o conectivo (deixar 'E' na negação do 'E')."
        elif "probabilidade" in en:
            macete = "⚡ BIZU DA PROBABILIDADE: P = (Casos Favoráveis / Casos Possíveis). Se os eventos forem independentes e sucessivos, multiplique as frações (regra do 'E' = multiplica; regra do 'OU' = soma)."
            pegadinha = "⚠️ RADAR IDECAN: Em sorteios de bolas ou cartas 'sem reposição', lembre-se de diminuir 1 no numerador e 1 no denominador a cada retirada!"
        elif "combinação" in en or "arranjo" in en or "maneiras" in en:
            macete = "⚡ BIZU: A ORDEM IMPORTA? Se a ordem das pessoas NÃO altera o grupo (ex: comissão de 3 bombeiros), é COMBINAÇÃO (divide pelo fatorial). Se a ordem altera (ex: pódio 1º, 2º lugar ou senha), é ARRANJO (não divide)."
            pegadinha = "⚠️ RADAR IDECAN: Multiplicar direto esquecendo de dividir pelo fatorial quando for grupo ou comissão."
            
    # 3. Física
    elif d == "Física":
        if "torricelli" in en or "frenagem" in en or "velocidade" in en:
            macete = "⚡ BIZU DO TORRICELLI: 'A questão não deu o tempo e nem pediu o tempo? Use Torricelli!' -> v² = v0² + 2*a*ΔS. Para parar completamente, v = 0."
            pegadinha = "⚠️ RADAR IDECAN: Cuidado com o sinal da aceleração: na frenagem, a aceleração é negativa (a < 0), caso contrário você somará em vez de subtrair."
        elif "pascal" in en or "hidráulic" in en or "desencarcerador" in en:
            macete = "⚡ BIZU DO PRINCÍPIO DE PASCAL: F1 / A1 = F2 / A2. A força é diretamente proporcional à área! Se a área do êmbolo maior é 20 vezes maior, a força de corte será 20 vezes maior."
            pegadinha = "⚠️ RADAR IDECAN: Cuidado com as unidades: se as áreas estiverem em cm², ambas devem estar em cm² antes de calcular."
        elif "convecção" in en or "calor" in en or "condução" in en:
            macete = "⚡ BIZU DA PROPAGAÇÃO DE CALOR: 1) Condução = contato direto em sólidos; 2) Convecção = fluidos (ar quente sobe, ar frio desce); 3) Irradiação = ondas eletromagnéticas (calor do sol e labaredas à distância, propaga no vácuo)."
            pegadinha = "⚠️ RADAR IDECAN: Dizer que convecção ocorre no vácuo. Convecção exige meio material fluido para haver transporte de massa!"
        elif "água" in en or "latente" in en:
            macete = "⚡ BIZU DO BOMBEIRO (Água como agente extintor): A água é o melhor agente de resfriamento porque possui altíssimo CALOR LATENTE DE VAPORIZAÇÃO (540 cal/g), absorvendo calor colossal das chamas para virar vapor."
            pegadinha = "⚠️ RADAR IDECAN: Afirmar que a água atua primariamente por abafamento. O mecanismo primário da água é o RESFRIAMENTO; o abafamento pelo vapor é secundário."
        elif "stevin" in en or "pressão" in en or "profundidade" in en:
            macete = "⚡ REGRA DOS 10 METROS NO MERGULHO: A cada 10 metros de água doce, a pressão manométrica sobe 1 atm (100.000 Pa). A pressão total absoluta é: P_ar (1 atm) + P_água."
            pegadinha = "⚠️ RADAR IDECAN: Esquecer de somar a pressão atmosférica (1 atm) quando a questão pede a pressão ABSOLUTA total sentida pelo mergulhador."
        elif "roldana" in en or "polia" in en:
            macete = "⚡ BIZU DAS ROLDANAS: Roldana FIXA não diminui força (só muda a direção). Cada roldana MÓVEL divide a força pela metade! Fórmula: F = Peso / 2^n (onde n é o nº de roldanas móveis)."
            pegadinha = "⚠️ RADAR IDECAN: Contar a roldana fixa no cálculo de vantagem mecânica. Ela não entra no expoente 2^n!"
            
    # 4. Química
    elif d == "Química":
        if "tetraedro" in en or "fogo" in en or "combustão" in en:
            macete = "⚡ BIZU DO TETRAEDRO DO FOGO: 4 vértices vitais: 1) Combustível (o que queima); 2) Comburente (oxigênio O2); 3) Calor (ativação); 4) Reação em cadeia. Tirou o calor = Resfriamento; Tirou o O2 = Abafamento; Tirou o combustível = Isolamento."
            pegadinha = "⚠️ RADAR IDECAN: Afirmar que a combustão é reação endotérmica. Fogo é reação FORTEMENTE EXOTÉRMICA (libera energia, ΔH < 0)!"
        elif "classe" in en or "extintor" in en:
            macete = "⚡ MNEMÔNICO DAS CLASSES DE FOGO: A = Aparas/Madeira (deixa cinzas); B = Barril de inflamáveis (líquidos); C = Computador/Corrente (equipamentos energizados); D = Dedo no metal pirofórico (magnésio); K = Kitchen (óleo de cozinha)."
            pegadinha = "⚠️ RADAR IDECAN: Usar água em fogo classe C (risco mortal de choque elétrico!) ou em fogo classe D de magnésio (gera gás hidrogênio altamente explosivo!)."
        elif "monóxido" in en or "carboxi" in en:
            macete = "⚡ BIZU DO MONÓXIDO DE CARBONO (CO): Incolor, inodoro e silencioso. Nasce da queima incompleta (pouco O2). Liga-se à hemoglobina mais de 200 vezes mais forte que o oxigênio, formando a CARBOXI-HEMOGLOBINA."
            pegadinha = "⚠️ RADAR IDECAN: Confundir CO com CO2. O CO2 é o dióxido (gás carbônico da queima completa e extintor); o CO é o monóxido tóxico e asfixiante letal."
        elif "clapeyron" in en or "gases" in en:
            macete = "⚡ BIZU DOS GASES: 'Por Você Nunca Rezei Tanto' -> P * V = n * R * T. Temperatura sempre em Kelvin (K = °C + 273). Pressão e volume no cilindro são inversamente proporcionais a T constante."
            pegadinha = "⚠️ RADAR IDECAN: Esquecer de converter a temperatura de Celsius para Kelvin antes de aplicar a fórmula."
        elif "ph" in en or "ácido" in en:
            macete = "⚡ BIZU DA ESCALA DE pH: pH = -log[H+]. pH < 7 = Ácido; pH = 7 = Neutro; pH > 7 = Básico/Alcalino. Quanto menor o número do pH, mais ácido é o composto."
            pegadinha = "⚠️ RADAR IDECAN: Lembrar que [H+] = 10^-3 M resulta em pH = 3 (e não -3)."
            
    # 5. Direito Constitucional
    elif d == "Noções de Direito Constitucional":
        if "144" in en or "bombeiro" in en or "segurança pública" in en:
            macete = "⚡ BIZU DO ART. 144 DA CF/88: Os Corpos de Bombeiros Militares são forças auxiliares e reserva do EXÉRCITO (e não das outras forças!) e subordinam-se diretamente aos GOVERNADORES dos Estados e do DF."
            pegadinha = "⚠️ RADAR IDECAN: Dizer que os bombeiros subordinam-se ao Ministério da Justiça, prefeituras ou que são reserva das Forças Armadas em geral. A subordinação é ao GOVERNADOR e a reserva é unicamente do EXÉRCITO!"
        elif "domicílio" in en or "inviolabilidade" in en:
            macete = "⚡ BIZU DO DOMICÍLIO (Art. 5º, XI): Entrar na casa sem consentimento: 1) Flagrante delito, desastre ou socorro = A QUALQUER HORA (dia ou noite); 2) Ordem judicial = SOMENTE DURANTE O DIA."
            pegadinha = "⚠️ RADAR IDECAN: Afirmar que a ordem judicial permite arrombamento noturno, ou que o socorrista precisa de autorização do juiz para apagar incêndio à noite. Prestação de socorro dispensa mandado judicial!"
        elif "privativo" in en or "nato" in en or "nacionalidade" in en:
            macete = "⚡ MNEMÔNICO MP3.COM (Cargos privativos de brasileiro nato): M = Ministro do STF (todos os 11); P3 = Presidente/Vice da República, Pres. da Câmara, Pres. do Senado; C = Carreira diplomática; O = Oficial das Forças Armadas; M = Ministro da Defesa."
            pegadinha = "⚠️ RADAR IDECAN: Governador de Estado, Prefeito e Oficial do Corpo de Bombeiros NÃO são privativos de brasileiro nato! Podem ser exercidos por naturalizados."
        elif "remédios" in en or "segurança" in en or "habeas" in en:
            macete = "⚡ BIZU DOS REMÉDIOS CONSTITUCIONAIS: Locomoção (ir e vir) = Habeas Corpus; Informação pessoal em banco público = Habeas Data; Falta de regulamentação = Mandado de Injunção; Cidadão anulando ato lesivo = Ação Popular; Direito líquido e certo residual = Mandado de Segurança."
            pegadinha = "⚠️ RADAR IDECAN: Colocar pessoa jurídica como impetrante de Ação Popular. PJ NÃO tem cidadania política, logo Ação Popular é PRIVATIVA DE CIDADÃO (eleitor)."
        elif "competência" in en:
            macete = "⚡ MNEMÔNICO DAS COMPETÊNCIAS: Privativa da União (legislar) = CAPACETE DE PIMENTA (Civil, Agrário, Penal, Aeronáutico, Comercial, Eleitoral, Trabalho, Espacial). Concorrente = Tributário, Financeiro, Penitenciário, Econômico, Urbanístico."
            pegadinha = "⚠️ RADAR IDECAN: Dizer que Direito Penal ou Processual é competência concorrente dos Estados. Penal e Processo são privativos da União!"

    # 6. Direito Administrativo
    elif d == "Noções de Direito Administrativo":
        if "princípios" in en or "37" in en:
            macete = "⚡ MNEMÔNICO LIMPE: Princípios constitucionais expressos: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência (EC 19/98). Motivação e Razoabilidade são princípios implícitos."
            pegadinha = "⚠️ RADAR IDECAN: A banca mistura princípios expressos do caput com implícitos da Lei 9.784/99. Se perguntar 'expressos no art. 37 da CF', marque apenas LIMPE!"
        elif "autoexecutoriedade" in en or "polícia" in en or "poder" in en:
            macete = "⚡ BIZU DO PODER DE POLÍCIA: Atributos = Discricionariedade, Autoexecutoriedade (agir direto sem pedir autorização prévia ao juiz para interditar risco) e Coercibilidade (imposição da força legal)."
            pegadinha = "⚠️ RADAR IDECAN: Dizer que cobrança de multa administrativa tem autoexecutoriedade. CUIDADO: multa NÃO é autoexecutória; para cobrar o Estado precisa ajuizar Execução Fiscal!"
        elif "elementos" in en or "requisitos" in en:
            macete = "⚡ MNEMÔNICO COFIFOM: Elementos/Requisitos de validade do ato administrativo: Competência, Finalidade, Forma, Motivo, Objeto. Vício sanável? Apenas Competência (quanto à pessoa) e Forma (quando não essencial)."
            pegadinha = "⚠️ RADAR IDECAN: Não confunda ELEMENTOS (COFIFOM) com ATRIBUTOS (PATI - Presunção, Autoexecutoriedade, Tipicidade, Imperatividade)."
        elif "anulação" in en or "revogação" in en:
            macete = "⚡ BIZU DO TAPA: Anulação bate na testa (T de ex TUNC = retroage tudo, porque o ato nasceu ILEGAL). Revogação bate na nuca (N de ex NUNC = nunca retroage, só vale para a frente, mérito/oportunidade)."
            pegadinha = "⚠️ RADAR IDECAN: Afirmar que o Poder Judiciário pode REVOGAR atos do Poder Executivo. O Judiciário NUNCA revoga mérito alheio; o Judiciário apenas ANULA ilegalidades!"
        elif "responsabilidade" in en or "risco" in en or "dano" in en:
            macete = "⚡ BIZU DA RESPONSABILIDADE CIVIL (Art. 37, §6º): Teoria do Risco Administrativo. A vítima processa o Estado com responsabilidade OBJETIVA (sem precisar provar dolo/culpa). O Estado depois move Ação Regressiva contra o servidor comprovando DOLO ou CULPA."
            pegadinha = "⚠️ RADAR IDECAN (Tema 940 STF): O cidadão NÃO pode processar diretamente o bombeiro militar no polo passivo. A ação deve ser ajuizada obrigatoriamente contra o Estado de Roraima!"
            
    # 7. Direito Ambiental
    elif d == "Noções de Direito Ambiental":
        if "prevenção" in en or "precaução" in en:
            macete = "⚡ BIZU INFALÍVEL: Prevenção = Risco CONHECIDO e certo (já sabemos que polui, exigimos filtro e licença). Precaução = Risco INCERTO (a ciência ainda não tem certeza absoluta? In dubio pro natura, suspende a atividade!)."
            pegadinha = "⚠️ RADAR IDECAN: Inverter os conceitos dizendo que prevenção cuida de incertezas científicas."
        elif "225" in en or "tríplice" in en:
            macete = "⚡ BIZU DA TRÍPLICE RESPONSABILIDADE AMBIENTAL (Art. 225, §3º da CF): O causador do dano responde em 3 esferas independentes e cumulativas: Administrativa (multa/embargo) + Penal (prisão da PF e PJ) + Civil (reparação objetiva integral)."
            pegadinha = "⚠️ RADAR IDECAN: Dizer que pagar a multa administrativa extingue a obrigação de recuperar a floresta. Falso! As 3 esferas são totalmente independentes."
        elif "snuc" in en or "integral" in en or "sustentável" in en:
            macete = "⚡ MNEMÔNICO DA PROTEÇÃO INTEGRAL (E-RE-PAR-MO-RE): Estação Ecológica, Reserva Biológica, Parque Nacional/Estadual, Monumento Natural, Refúgio de Vida Silvestre. Só admite uso indireto!"
            pegadinha = "⚠️ RADAR IDECAN: Colocar APA (Área de Proteção Ambiental) ou FLONA como proteção integral. APA e FLONA são de USO SUSTENTÁVEL!"
        elif "incêndio" in en or "crime" in en or "9.605" in en:
            macete = "⚡ BIZU DA LEI DE CRIMES AMBIENTAIS: Art. 41: Provocar incêndio em mata ou floresta é CRIME (reclusão de 2 a 4 anos e multa). Se for culposo, pena de detenção de 6 meses a 1 ano."
            pegadinha = "⚠️ RADAR IDECAN: Tratar incêndio florestal como mera infração administrativa. É crime tipificado com previsão expressa de cadeia!"
            
    # 8. História e Geografia de Roraima
    elif d == "Atualidades Gerais: História e Geografia de Roraima":
        if "forte" in en or "1775" in en or "sturm" in en:
            macete = "⚡ BIZU DO FORTE SÃO JOAQUIM (1775): Erguido na confluência dos rios Tacutu e Uraricoera (onde nasce o Rio Branco) pelo capitão Phillip Sturm para frear a cobiça de espanhóis, holandeses e ingleses no extremo norte."
            pegadinha = "⚠️ RADAR IDECAN: Dizer que o forte foi construído no Rio Negro ou no século XX. Ele foi erguido em 1775 no século XVIII!"
        elif "pirara" in en or "laudo" in en or "guiana" in en:
            macete = "⚡ BIZU DA QUESTÃO DO PIRARA (1904): Disputa diplomática com a Grã-Bretanha/Guiana Inglesa. A arbitragem internacional coube ao Rei da Itália Vítor Emanuel III (Laudo Suíço/Arbitral de 1904), que tirou terras do Brasil."
            pegadinha = "⚠️ RADAR IDECAN: Afirmar que o Brasil venceu a Questão do Pirara e anexou território da Guiana. Foi o oposto: a decisão favoreceu os ingleses."
        elif "território" in en or "1943" in en or "vargas" in en:
            macete = "⚡ BIZU DA EVOLUÇÃO POLÍTICA DE RORAIMA: 13/09/1943 = Criado o Território Federal do Rio Branco por Getúlio Vargas (Dec-Lei 5.812). 1º Governador = Ene Garcez dos Reis. 1962 = Muda nome para Território de Roraima. 1988 = CF cria o Estado de Roraima."
            pegadinha = "⚠️ RADAR IDECAN: Trocar o nome inicial 'Rio Branco' por 'Roraima' na data de 1943."
        elif "caburaí" in en or "extremo" in en or "norte" in en:
            macete = "⚡ BIZU DO EXTREMO NORTE: O verdadeiro ponto setentrional mais ao norte do Brasil é o MONTE CABURAÍ (1.456m) no município de Uiramutã/RR! 'Do Caburaí ao Chuí' (esqueça o Oiapoque)."
            pegadinha = "⚠️ RADAR IDECAN: A banca costuma colocar o Monte Roraima ou a foz do Oiapoque como o ponto mais ao norte. O correto é sempre o MONTE CABURAÍ!"
        elif "clima" in en or "seca" in en or "lavrado" in en:
            macete = "⚡ BIZU DO CLIMA DE RORAIMA: Boa Vista fica inteiramente no Hemisfério Norte. O lavrado tem 2 estações: Seca rigorosa de Novembro a Abril (época crítica de incêndios florestais!); Chuvas de Maio a Outubro."
            pegadinha = "⚠️ RADAR IDECAN: Afirmar que o inverno/chuva de Roraima ocorre no final do ano. Ao contrário do Sul/Sudeste, o período de chuvas no lavrado é no meio do ano (maio a outubro)!"
        elif "municípios" in en:
            macete = "⚡ BIZU DOS MUNICÍPIOS: Roraima possui EXATAMENTE 15 MUNICÍPIOS. Boa Vista concentra mais de 65% da população estadual. O segundo mais populoso é Rorainópolis no sul."
            pegadinha = "⚠️ RADAR IDECAN: Inventar que Roraima tem mais de 20 ou 30 municípios."
            
    # 9. Informática
    elif d == "Noções de Informática":
        if "chmod" in en or "chown" in en or "linux" in en:
            macete = "⚡ BIZU DO LINUX: 'chmod' = CHange MODe (altera permissões rwx: leitura, escrita, execução); 'chown' = CHange OWNer (altera o dono/proprietário do arquivo). /etc = arquivos de configuração; /bin = executáveis."
            pegadinha = "⚠️ RADAR IDECAN: Inverter a função do chmod com a do chown. Lembre-se: 'own' é de proprietário/owner!"
        elif "planilha" in en or "cont.se" in en or "procv" in en or "sheets" in en:
            macete = "⚡ BIZU DAS FÓRMULAS: CONT.SE conta a quantidade de células que atendem a um critério (=CONT.SE(A1:A50; \">10\")). SOMASE soma valores. O cifrão ($A$1) congela a referência tornando-a ABSOLUTA para não mudar ao arrastar."
            pegadinha = "⚠️ RADAR IDECAN: Esquecer que critérios de texto ou comparação no CONT.SE exigem aspas duplas, como \">10\"."
        elif "ransomware" in en or "malware" in en:
            macete = "⚡ BIZU DOS MALWARES: Ransomware = Sequestrador de dados que criptografa tudo e exige resgate em dinheiro/cripto. Worm = Minhoca autorreplicante que se espalha sozinha pela rede sem precisar de hospedeiro. Phishing = Pescaria de senhas por links falsos."
            pegadinha = "⚠️ RADAR IDECAN: Confundir Ransomware (sequestro por criptografia) com Spyware (apenas espiona sem travar)."
        elif "cidar" in en or "segurança" in en or "pilares" in en:
            macete = "⚡ MNEMÔNICO CIDAR: Confidencialidade (acesso só por autorizados/sigilo); Integridade (informação não alterada); Disponibilidade (acessível quando precisa); Autenticidade (quem assinou é quem diz ser); Não Repúdio/Irretratabilidade (autor não pode negar)."
            pegadinha = "⚠️ RADAR IDECAN: Trocar 'Integridade' (evitar alteração) por 'Confidencialidade' (evitar vazamento/acesso)."
        elif "dns" in en or "dhcp" in en or "porta" in en or "protocolo" in en:
            macete = "⚡ BIZU DOS PROTOCOLOS: DNS (porta 53) = Traduz nome para IP (ex: converte google.com em 142.250...). DHCP = Distribui IP automático na rede. HTTPS (porta 443) = Seguro/Criptografado com SSL/TLS."
            pegadinha = "⚠️ RADAR IDECAN: Dizer que o DHCP traduz nomes de sites. Quem traduz nomes é o DNS!"

    # 10. Legislação Específica
    elif d == "Legislação Específica":
        if "ausente" in en or "deserção" in en:
            macete = "⚡ BIZU DOS PRAZOS MILITARES (LC 194/2012): Mais de 24 horas consecutivas sem dar notícias = AUSENTE. Mais de 8 dias consecutivos = DESERTOR (Crime Militar com perda de liberdade!)."
            pegadinha = "⚠️ RADAR IDECAN: Dizer que 48 horas ou 5 dias já configuram crime de deserção. A deserção exige RIGOROSAMENTE mais de 8 dias!"
        elif "estabilidade" in en:
            macete = "⚡ BIZU DA ESTABILIDADE: O militar adquire estabilidade após 3 ANOS de efetivo serviço e aprovação no estágio probatório."
            pegadinha = "⚠️ RADAR IDECAN: Colocar prazo de 5 ou 10 anos para estabilidade da praça."
        elif "963" in en or "código" in en or "avcb" in en:
            macete = "⚡ BIZU DA LEI 963/2014 (Segurança Contra Incêndio): Aplica-se a todas as edificações e áreas de risco em Roraima, com UMA ÚNICA EXCEÇÃO: habitações unifamiliares exclusivamente residenciais (casas residenciais comuns)."
            pegadinha = "⚠️ RADAR IDECAN: A banca diz que o CBMRR fiscaliza e exige extintor em casa de família unifamiliar. Errado! Elas são expressamente isentas por lei."
        elif "12.608" in en or "pnpdec" in en or "fases" in en:
            macete = "⚡ AS 5 FASES DA DEFESA CIVIL (Lei 12.608/12): Prevenção -> Mitigação -> Preparação -> Resposta -> Recuperação. Foco principal sempre na PREVENÇÃO antecipada!"
            pegadinha = "⚠️ RADAR IDECAN: Tentar colocar 'repressão armada' ou 'investigação criminal' como fases de defesa civil."
        elif "emergência" in en or "calamidade" in en or "in 02" in en:
            macete = "⚡ BIZU DA IN 02/2016: Situação de Emergência = comprometimento PARCIAL da capacidade do município; Estado de Calamidade Pública = comprometimento GRAVE ou TOTAL. Prazo máximo para enviar o pedido no S2ID = 10 DIAS!"
            pegadinha = "⚠️ RADAR IDECAN: Inverter 'parcial' com 'total' ou colocar prazo de 30 dias para o formulário FIDE."
        elif "14.751" in en:
            macete = "⚡ LEI ORGÂNICA NACIONAL (Lei 14.751/2023): Garante porte de arma nacional em serviço e na inatividade; prisão cautelar em unidade militar separada; e preserva a subordinação das corporações aos GOVERNADORES."
            pegadinha = "⚠️ RADAR IDECAN: Dizer que a lei subordinou os Corpos de Bombeiros à Polícia Federal ou a órgãos federais."

    return macete, pegadinha

for q in questions:
    m, p = get_bizu_and_pegadinha(q)
    q['macete'] = m
    q['pegadinha'] = p

print("All 500 questions successfully enriched with custom Macetes and Radar de Pegadinhas!")

# Re-write questions.js with enriched fields
with open("questions.js", "w", encoding="utf-8") as f:
    f.write("""/**
 * BANCO DE QUESTÕES OFICIAL - SIMULADO CBMRR 2026 (BANCA IDECAN)
 * Total: 500 questões enriquecidas com Macetes, Bizus e Radar de Pegadinhas
 */

""")
    f.write("window.EDITAL_METADATA = " + json.dumps(meta, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("window.DISCIPLINAS = " + json.dumps(disc, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("window.ALL_QUESTIONS = " + json.dumps(questions, ensure_ascii=False) + ";\n")

print("Updated questions.js with macetes!")
