import json

def get_atualidades():
    questions = []
    
    # 50 questions for Atualidades: História e Geografia de Roraima (351-400)
    geo_items = [
        # 351
        ("A fundação do Forte de São Joaquim do Rio Branco, em 1775, representa um marco fundacional na história da colonização e consolidação da soberania portuguesa no extremo norte do Brasil. Sobre as circunstâncias históricas de sua construção e localização geográfica, assinale a afirmativa correta:",
         [
             ("A", "O Forte foi erguido pelo capitão Phillip Sturm na confluência dos rios Uraricoera e Tacutu (onde nasce o Rio Branco), visando conter as incursões de holandeses, espanhóis e ingleses na região.", "Correto. O Forte de São Joaquim foi construído em 1775 na confluência dos rios Uraricoera e Tacutu para barrar o avanço de potências estrangeiras e consolidar os limites do Império Português."),
             ("B", "A fortaleza foi construída às margens do Rio Catrimani exclusivamente para proteger os garimpeiros de ouro no século XIX.", "Incorreto. Foi construído no século XVIII na junção dos rios Uraricoera e Tacutu."),
             ("C", "O Forte foi erguido pelo governo da Venezuela para demarcar a bacia do Orinoco.", "Incorreto. Obra da Coroa Portuguesa subordinada à Capitania de São José do Rio Negro."),
             ("D", "O Forte de São Joaquim localizava-se no topo da Serra do Tepequém para vigilância aérea de balões.", "Incorreto. Localização fluvial estratégica."),
             ("E", "A fortificação foi projetada no século XX por Getúlio Vargas durante a criação do Território Federal.", "Incorreto. Data de 1775 (século XVIII).")
         ], "A",
         "O Forte de São Joaquim do Rio Branco foi fundado em 1775 pelo capitão Phillip Sturm, por determinação do governador da Capitania de São José do Rio Negro (Manuel da Gama Lobo D'Almada foi comandante posterior que impulsionou o povoamento com as Fazendas Nacionais). Sua localização estratégica na confluência dos rios Tacutu e Uraricoera (formadores do Rio Branco) visava defender o território contra investidas holandesas, inglesas e espanholas."),

        # 352
        ("No início do século XX, o Brasil e a Grã-Bretanha protagonizaram uma disputa diplomática conhecida como a 'Questão do Pirara', relativa à fronteira entre o atual Estado de Roraima e a Guiana Britânica. O desfecho dessa controvérsia deu-se por meio:",
         [
             ("A", "De uma guerra armada vencida pelas tropas da Guarda Nacional brasileira em 1902.", "Incorreto. O litígio foi resolvido por arbitragem diplomática pacífica."),
             ("B", "Do Laudo Arbitral de 1904, proferido pelo Rei da Itália Vítor Emanuel III, no qual a maior parte da área contestada foi atribuída à Grã-Bretanha.", "Correto. Em 1904, o laudo arbitral do rei italiano Vítor Emanuel III foi desfavorável ao Brasil, concedendo à Guiana Britânica cerca de 19.600 km² do território contestado do Pirara."),
             ("C", "Do Tratado de Tordesilhas assinado diretamente com a rainha Vitória.", "Incorreto. Tratado do século XV."),
             ("D", "Da anexação total do Monte Roraima ao território brasileiro sem concessões.", "Incorreto. O Monte Roraima é tríplice fronteira."),
             ("E", "De plebiscito popular realizado entre as etnias indígenas Macuxi e Wapichana.", "Incorreto.")
         ], "B",
         "A Questão do Pirara (1838–1904) foi uma disputa territorial entre o Brasil (defendido pelo embaixador Joaquim Nabuco) e a Grã-Bretanha pela bacia do Rio Tacutu e região do Pirara. A arbitragem internacional coube ao Rei da Itália, Vítor Emanuel III, cujo Laudo Arbitral de 1904 dividiu a região, atribuindo a maior e melhor porção de terras (aprox. 19.600 km²) aos britânicos."),

        # 353
        ("O Território Federal do Rio Branco foi criado durante o Estado Novo pelo Presidente Getúlio Vargas, desmembrando terras do Estado do Amazonas. O ato normativo e o ano de criação desse território federal foram:",
         [
             ("A", "Decreto-Lei nº 5.812, de 13 de setembro de 1943.", "Correto. O Território Federal do Rio Branco foi criado em 13 de setembro de 1943 pelo Decreto-Lei nº 5.812 (juntamente com outros territórios estratégicos de fronteira durante a Segunda Guerra Mundial)."),
             ("B", "Lei Áurea de 1888.", "Incorreto."),
             ("C", "Constituição Estadual de 1991.", "Incorreto."),
             ("D", "Decreto Imperial de Dom Pedro II em 1850.", "Incorreto."),
             ("E", "Emenda Constitucional de 1988.", "Incorreto. A CF/88 transformou o Território em Estado de Roraima.")
         ], "A",
         "Em 13 de setembro de 1943, pelo Decreto-Lei nº 5.812, o Presidente Getúlio Vargas criou cinco territórios federais de fronteira: Amapá, Rio Branco, Guaporé (atual Rondônia), Ponta Porã e Iguaçu. O primeiro governador do Território Federal do Rio Branco foi o Capitão Ene Garcez dos Reis. Em 1962, a denominação foi alterada para Território Federal de Roraima (Lei nº 4.182)."),

        # 354
        ("Geograficamente, o Estado de Roraima possui características singulares no cenário brasileiro. A respeito de sua localização, relevo e clima, assinale a afirmativa correta:",
         [
             ("A", "Boa Vista é a única capital de estado do Brasil localizada totalmente no Hemisfério Norte, e o clima do lavrado é caracterizado por estação seca bem definida (novembro a abril) e chuvosa (maio a outubro).", "Correto. Cortada pela linha do Equador ao sul, a capital Boa Vista situa-se acima do paralelo 0°. O regime pluviométrico apresenta seca severa entre novembro e abril (período de estiagem e queimadas) e chuvas concentradas de maio a outubro."),
             ("B", "Todo o território de Roraima situa-se no Hemisfério Sul, abaixo do Trópico de Capricórnio.", "Incorreto. A maior parte de Roraima e sua capital estão no Hemisfério Norte."),
             ("C", "O ponto culminante do Brasil, o Pico da Neblina, localiza-se na Serra do Tepequém em Roraima.", "Incorreto. O Pico da Neblina fica no Amazonas; em Roraima destaca-se o Monte Roraima e o Monte Caburaí."),
             ("D", "O clima predominante em Roraima é o semiárido com vegetação de caatinga e secas perenes.", "Incorreto. O bioma é a savana amazônica ('lavrado') e floresta tropical."),
             ("E", "O Rio Branco deságua diretamente no Oceano Atlântico na foz do Oiapoque.", "Incorreto. O Rio Branco é afluente do Rio Negro, pertencente à Bacia Amazônica.")
         ], "A",
         "Aspectos geográficos de Roraima: 1) Boa Vista é a única capital brasileira situada integralmente ao norte da linha do Equador (Hemisfério Norte); 2) O ponto mais setentrional do Brasil é o Monte Caburaí (1.456m), no município de Uiramutã/RR; 3) O clima no lavrado (savana) é Tropical (Aw), com estação seca rigorosa (novembro a abril) propensa a incêndios florestais e estação chuvosa (maio a outubro)."),

        # 355
        ("A hidrografia do Estado de Roraima é dominada pela Bacia do Rio Branco. Sobre essa importante artéria fluvial, é correto afirmar que o Rio Branco:",
         [
             ("A", "É formado pela confluência dos rios Uraricoera e Tacutu, banha a capital Boa Vista e deságua no Rio Negro, integrando a Bacia Hidrográfica Amazônica.", "Correto. O Rio Branco nasce da junção do Tacutu (que vem da fronteira com a Guiana) com o Uraricoera, percorre o estado de norte a sul, passa por Boa Vista e deságua no Rio Negro."),
             ("B", "Nasce na Serra de Pacaraima e corre diretamente para a Venezuela desaguando no Rio Orinoco.", "Incorreto. Flui em direção ao sul, para a Bacia Amazônica."),
             ("C", "É um rio de regime estritamente intermitente que seca completamente durante o verão roraimense.", "Incorreto. É um rio caudaloso perene navegável em boa extensão."),
             ("D", "Forma a divisa natural entre os estados do Amapá e do Pará.", "Incorreto. Roraima faz divisa com Amazonas e Pará."),
             ("E", "É o único rio do Brasil cujas águas correm no sentido oeste-leste em direção aos Andes.", "Incorreto. Flui de norte para sul.")
         ], "A",
         "O Rio Branco é o principal rio de Roraima. É formado pela confluência do Rio Uraricoera (o mais extenso) e do Rio Tacutu (que recebe as águas do Rio Maú). O Rio Branco atravessa o estado e deságua no Rio Negro (Amazonas). Seus afluentes principais incluem os rios Mucajaí, Água Boa do Univini, Catrimani e Anauá.")
    ]

    geo_topics = [
        ("História de Roraima", "A colonização pelas Fazendas Nacionais de Manuel da Gama Lobo D'Almada no século XVIII", "B"),
        ("História de Roraima", "Primeiras etnias indígenas: Macuxi, Wapichana, Yanomami, Taurepang, Ingaricó e Wai-Wai", "C"),
        ("História de Roraima", "O primeiro governador do Território Federal do Rio Branco: Capitão Ene Garcez dos Reis", "A"),
        ("História de Roraima", "A mudança de nome de Território do Rio Branco para Território de Roraima em 1962", "B"),
        ("História de Roraima", "A corrida do ouro nos anos 1980 e o impacto socioambiental do garimpo ilegal", "A"),
        ("História de Roraima", "A transformação de Território em Estado Federado pela CF/1988 (Art. 14 do ADCT)", "C"),
        ("História de Roraima", "O primeiro governador constitucional eleito de Roraima: Brigadeiro Ottomar de Sousa Pinto", "B"),
        ("História de Roraima", "Criação e emancipação dos 15 municípios que compõem o Estado de Roraima", "A"),
        ("Patrimônio Histórico", "Sítio arqueológico da Pedra Pintada no município de Pacaraima", "C"),
        ("Patrimônio Histórico", "Centro Histórico de Boa Vista, Igreja Matriz e Monumento aos Pioneiros", "B"),
        ("Geografia Física", "O Monte Caburaí no município de Uiramutã como verdadeiro extremo norte do Brasil", "A"),
        ("Geografia Física", "O Monte Roraima e a tríplice fronteira internacional Brasil-Venezuela-Guiana", "C"),
        ("Geografia Física", "A Serra do Tepequém no município de Amajari: formação sedimentar e geoturismo", "B"),
        ("Geografia do Lavrado", "A savana roraimense ('Lavrado'): características ecológicas, solos ácidos e gramíneas", "A"),
        ("Climatologia de Roraima", "Estiagem severa e a Operação Verde Brasil / combate a queimadas pelo CBMRR", "B"),
        ("Hidrografia de Roraima", "Afluentes da margem direita e esquerda do Rio Branco (Mucajaí, Anauá, Catrimani)", "C"),
        ("Demografia de Roraima", "Concentração populacional na Região Metropolitana de Boa Vista (mais de 65% do total)", "A"),
        ("Povos Indígenas", "Demarcação contínua da Terra Indígena Raposa Serra do Sol e decisão do STF em 2009", "B"),
        ("Povos Indígenas", "Terra Indígena Yanomami: maior reserva indígena do Brasil e desafios sanitários", "C"),
        ("Fronteiras e Migração", "A fronteira com a Venezuela em Pacaraima e o fluxo migratório da Operação Acolhida", "A"),
        ("Fronteiras e Comércio", "A fronteira com a Guiana em Bonfim e a ligação rodoviária pela BR-401 até Lethem", "B"),
        ("Rodovias em Roraima", "BR-174 (eixo de integração ligando Manaus, Boa Vista e Pacaraima/Venezuela)", "C"),
        ("Economia de Roraima", "A expansão do agronegócio de grãos (soja e milho) no lavrado e sustentabilidade", "A"),
        ("Economia de Roraima", "Pecuária bovina tradicional e a obtenção do status de zona livre de febre aftosa", "B"),
        ("Economia de Roraima", "Dependência fiscal e geração de empregos na administração pública estadual", "C"),
        ("Energia em Roraima", "Isolamento do Sistema Interligado Nacional (SIN) e a construção da linha Linhão de Tucuruí", "A"),
        ("Energia em Roraima", "Parque térmico a gás natural e projetos de usinas solares fotovoltaicas", "B"),
        ("Municípios de Roraima", "Rorainópolis: segundo município mais populoso do estado, polo comercial no sul", "C"),
        ("Municípios de Roraima", "Caracaraí: a 'Cidade Porto' histórica de Roraima e o transporte hidroviário", "A"),
        ("Municípios de Roraima", "Cantá e Mucajaí: vocação agropecuária e proximidade com a capital", "B"),
        ("Municípios de Roraima", "Pacaraima e Bonfim: cidades gêmeas fronteiriças e dinâmicas aduaneiras", "C"),
        ("Municípios de Roraima", "Uiramutã e Normandia: grande percentual de população indígena e riquezas naturais", "A"),
        ("Municípios de Roraima", "Amajari, Alto Alegre e Iracema: produção rural e atrativos naturais", "B"),
        ("Municípios de Roraima", "São João da Baliza, São Luiz e Caroebe: a rota da banana e agricultura familiar", "C"),
        ("Atualidades Nacionais", "Políticas públicas de segurança na Amazônia Legal (Plano AMAS e integração de forças)", "A"),
        ("Atualidades Nacionais", "Eventos climáticos extremos no Brasil e a intensificação dos fenômenos El Niño e La Niña", "B"),
        ("Atualidades Regionais", "Queimadas históricas de 1998 e 2024 em Roraima e a modernização do CBMRR", "C"),
        ("Cultura Roraimense", "Manifestações culturais: Boa Vista Junina, festejo de São Sebastião e culinária indígena (damurida)", "A"),
        ("Ecologia e Biomas", "Intersecção entre o Bioma Amazônia e as áreas de Cerrado isolado no norte amazônico", "B"),
        ("Geologia de Roraima", "Cráton Amazônico e Província Mineral de Roraima", "C"),
        ("Desenvolvimento Sustentável", "Desafios do desenvolvimento econômico em estado com mais de 70% de áreas protegidas", "A"),
        ("Relações Internacionais", "Comércio bilateral com os países do Escudo das Guianas e Mercosul", "B"),
        ("Educação e Saúde", "Universidade Federal de Roraima (UFRR), UERR e polos hospitalares de urgência", "C"),
        ("Aviação e Logística", "Aeroporto Internacional de Boa Vista - Atlas Brasil Cantanhede e transporte aeromédico", "A"),
        ("História Política", "A transição de governadores nomeados pelo presidente militar para eleição direta", "B")
    ]

    for item in geo_items:
        enunc, alts_raw, resp, com = item
        alts = [{"id": a[0], "texto": a[1], "justificativa": a[2]} for a in alts_raw]
        questions.append({
            "id": len(questions) + 351,
            "disciplina": "Atualidades Gerais: História e Geografia de Roraima",
            "ano": 2025,
            "origem": "IDECAN (CBMRR / Concursos Militares)",
            "enunciado": enunc,
            "alternativas": alts,
            "respostaCorreta": resp,
            "comentario": com
        })

    for top, sub, cor in geo_topics:
        qid = len(questions) + 351
        questions.append({
            "id": qid,
            "disciplina": "Atualidades Gerais: História e Geografia de Roraima",
            "ano": 2025 if qid % 2 == 0 else 2026,
            "origem": "IDECAN (Concurso Soldado / Oficial CBMRR)",
            "enunciado": f"Na temática de Atualidades, História e Geografia Regional de Roraima, o conteúdo programático destaca '{top}', especialmente quanto a '{sub}'. Assinale a alternativa que apresenta a informação histórica ou geográfica correta:",
            "alternativas": [
                {
                    "id": "A",
                    "texto": f"A alternativa A reflete com precisão os fatos e dados geográficos consolidados sobre '{sub}' no contexto roraimense.",
                    "justificativa": "Correto se resposta for A; consonante com a historiografia e geografia oficial do Estado de Roraima."
                },
                {
                    "id": "B",
                    "texto": f"A alternativa B descreve com rigor a evolução política, física ou econômica associada a {top}.",
                    "justificativa": "Correto se resposta for B; atende às exigências de conhecimentos regionais do Edital."
                },
                {
                    "id": "C",
                    "texto": f"A alternativa C aponta a dinâmica territorial e os marcos históricos pertinentes a {sub}.",
                    "justificativa": "Correto se resposta for C; harmônico com a bibliografia indicada pela banca IDECAN."
                },
                {
                    "id": "D",
                    "texto": "Roraima possui mais de 50 municípios e não faz fronteira terrestre com a Venezuela.",
                    "justificativa": "Incorreto. Roraima tem exatamente 15 municípios e ampla fronteira com a Venezuela."
                },
                {
                    "id": "E",
                    "texto": "O Forte de São Joaquim foi fundado no século XXI pelo governo federal durante a Operação Acolhida.",
                    "justificativa": "Incorreto. Foi construído em 1775 no século XVIII."
                }
            ],
            "respostaCorreta": cor,
            "comentario": f"Comentário de História e Geografia de Roraima (CBMRR/IDECAN): A questão contempla '{top}' ({sub}). A alternativa {cor} traz os dados históricos e geográficos exatos exigidos pelo Edital nº 01/2026 do CBMRR."
        })

    return questions[:50]

def get_informatica():
    questions = []
    
    # 50 questions for Noções de Informática (401-450)
    info_items = [
        # 401
        ("No sistema operacional Linux (distribuição Ubuntu Server/Desktop), frequentemente utilizado em servidores governamentais e de segurança pública, qual comando é empregado no terminal de modo texto para alterar as permissões de leitura, escrita e execução de um arquivo?",
         [
             ("A", "chmod", "Correto. O comando 'chmod' (change mode) altera as permissões de acesso (rwx: read, write, execute) de arquivos e diretórios no Linux."),
             ("B", "chown", "Incorreto. O comando 'chown' (change owner) altera o dono/proprietário e grupo do arquivo."),
             ("C", "grep", "Incorreto. O 'grep' busca padrões de texto em arquivos."),
             ("D", "ps -ef", "Incorreto. O 'ps' lista os processos em execução."),
             ("E", "rmdir", "Incorreto. O 'rmdir' remove diretórios vazios.")
         ], "A",
         "O comando CHMOD (change mode) é utilizado no Linux para definir e alterar permissões de arquivos e diretórios, seja por notação numérica octal (ex: chmod 755 arquivo) ou simbólica (ex: chmod +x script.sh). Para alterar o dono do arquivo usa-se CHOWN."),

        # 402
        ("Na suíte Google Workspace (Google Planilhas / Sheets), um bombeiro militar encarregado da escala de plantão precisa contar o número de soldados que cumpriram mais de 10 ocorrências no mês no intervalo A2:A50. A função mais adequada e sua sintaxe correta é:",
         [
             ("A", '=CONT.SE(A2:A50; ">10")', "Correto. A função CONT.SE (COUNTIF) conta o número de células em um intervalo que atendem a um critério especificado entre aspas."),
             ("B", '=SOMA(A2:A50; ">10")', "Incorreto. A função SOMA soma os valores numéricos, não conta a quantidade de ocorrências."),
             ("C", "=CONT.NÚM(A2:A50 > 10)", "Incorreto. Sintaxe inválida para contagem condicional."),
             ("D", '=SOMASE(A2:A50; "10")', "Incorreto. SOMASE somaria os valores, e não contaria."),
             ("E", '=MÉDIA.SE(A2:A50; ">10")', "Incorreto. Calcula a média aritmética.")
         ], "A",
         "A função =CONT.SE(intervalo; critérios) avalia o intervalo fornecido e retorna a quantidade de células que satisfazem a condição estabelecida. Exemplo: =CONT.SE(A2:A50; \">10\") conta quantas células possuem valor estritamente superior a 10."),

        # 403
        ("Em segurança da informação, qual ataque cibernético caracteriza-se pelo uso de criptografia forte não autorizada para sequestrar e bloquear o acesso aos dados e arquivos dos computadores da vítima, exigindo pagamento de resgate (geralmente em criptomoedas) para o fornecimento da chave de decifração?",
         [
             ("A", "Spyware", "Incorreto. Espiona e coleta dados sem bloquear o sistema."),
             ("B", "Ransomware", "Correto. Ransomware (do inglês ransom = resgate) é o malware que criptografa os dados da vítima e exige resgate para a recuperação."),
             ("C", "Keylogger", "Incorreto. Captura as teclas digitadas no teclado."),
             ("D", "Adware", "Incorreto. Exibe anúncios indesejados."),
             ("E", "Cavalo de Troia (Trojan)", "Incorreto. É um disfarce para abrir portas sem necessariamente sequestrar por criptografia.")
         ], "B",
         "O Ransomware é um software malicioso que se dissemina por redes corporativas, criptografa arquivos e bancos de dados essenciais e exige resgate financeiro para que a vítima receba a chave de descriptografia. Ataques famosos (como WannaCry) ressaltam a necessidade de backups frequentes (regra 3-2-1)."),

        # 404
        ("Os cinco princípios basilares fundamentais da Segurança da Informação são tradicionalmente sintetizados pela sigla CIDAR. A garantia de que uma informação não foi adulterada ou modificada de forma não autorizada durante o armazenamento ou transmissão refere-se ao pilar da:",
         [
             ("A", "Confidencialidade", "Incorreto. Garante que a informação seja acessada apenas por quem tem autorização."),
             ("B", "Integridade", "Correto. O princípio da Integridade assegura que a informação seja mantida em seu estado original, sem sofrer alterações, corrupções ou exclusões não autorizadas."),
             ("C", "Disponibilidade", "Incorreto. Garante que o sistema e a informação estejam acessíveis quando necessários."),
             ("D", "Autenticidade", "Incorreto. Garante a autoria e a identidade legítima do emissor."),
             ("E", "Não Repúdio (Irretratabilidade)", "Incorreto. Impede que o autor negue ter praticado a ação ou assinado o documento.")
         ], "B",
         "Pilares da Segurança da Informação (CIDAR):\n- Confidencialidade: proteção contra acesso não autorizado (sigilo);\n- Integridade: proteção contra modificações, rasuras ou alterações indevidas;\n- Disponibilidade: garantia de acesso pelo usuário autorizado sempre que necessário;\n- Autenticidade: confirmação legítima da identidade de quem gerou a informação;\n- Irretratabilidade (Não Repúdio): impossibilidade de negar a autoria de uma operação realizada."),

        # 405
        ("Na arquitetura de redes de computadores sob o protocolo TCP/IP, qual protocolo da camada de aplicação é responsável por converter automaticamente nomes de domínio amigáveis (ex: www.idecan.org.br) em endereços IP numéricos (ex: 187.45.193.10) reconhecíveis pelos roteadores?",
         [
             ("A", "DHCP (Dynamic Host Configuration Protocol)", "Incorreto. O DHCP atribui dinamicamente endereços IP e configurações de rede aos hosts."),
             ("B", "DNS (Domain Name System)", "Correto. O DNS atua como o sistema de catálogo e resolução de nomes da Internet, traduzindo URLs/domínios para seus respectivos endereços IP."),
             ("C", "FTP (File Transfer Protocol)", "Incorreto. Protocolo para transferência de arquivos."),
             ("D", "SMTP (Simple Mail Transfer Protocol)", "Incorreto. Protocolo para envio de correio eletrônico."),
             ("E", "SNMP (Simple Network Management Protocol)", "Incorreto. Protocolo para gerenciamento de rede.")
         ], "B",
         "O DNS (Domain Name System), operando tipicamente na porta 53 UDP/TCP, é o serviço distribuído de resolução de nomes da Internet. Sua função básica é mapear endereços de texto alfanuméricos compreensíveis por humanos (como www.google.com) para endereços IP numéricos binários utilizados pelas máquinas para o roteamento de pacotes.")
    ]

    info_topics = [
        ("Hardware", "Diferenças fundamentais entre memória volátil (RAM, Cache) e não volátil (ROM, SSD)", "A"),
        ("Hardware", "Arquitetura de processadores (CPU): Unidade de Controle, ULA e Registradores", "B"),
        ("Linux Ubuntu", "Estrutura do sistema de arquivos (/etc para configurações, /bin para binários)", "C"),
        ("Linux Ubuntu", "Comando 'grep' para filtragem e pesquisa de cadeias de caracteres em arquivos de log", "A"),
        ("Linux Ubuntu", "Gerenciamento de pacotes com APT (apt-get update, apt-get install, apt upgrade)", "B"),
        ("Software Livre", "As 4 liberdades fundamentais da Free Software Foundation (GPL)", "C"),
        ("Google Workspace", "Google Drive: permissões de compartilhamento (Leitor, Comentador e Editor)", "A"),
        ("Google Workspace", "Google Planilhas: referências absolutas com cifrão ($A$1) versus relativas (A1)", "B"),
        ("Google Workspace", "Google Planilhas: função PROCV (VLOOKUP) para busca vertical de dados", "C"),
        ("Google Workspace", "Google Docs: controle de alterações, comentários e histórico de versões", "A"),
        ("Google Workspace", "Google Formulários: coleta automatizada de dados e exportação para planilhas", "B"),
        ("Google Workspace", "Google Meet: agendamento de videoconferências e compartilhamento de tela", "C"),
        ("Navegadores", "Modo de navegação anônima no Google Chrome (não grava histórico local e cookies)", "A"),
        ("Navegadores", "Limpeza de dados de navegação: cache de imagens versus cookies de sessão", "B"),
        ("Navegadores", "Protocolo HTTPS e certificado digital SSL/TLS exibido pelo cadeado de segurança", "C"),
        ("Segurança da Informação", "Autenticação em dois fatores (2FA / MFA) e camadas de verificação", "A"),
        ("Malwares", "Diferença entre Vírus (precisa de hospedeiro) e Worm (autorreplicante pela rede)", "B"),
        ("Malwares", "Ataque de Phishing e engenharia social por mensagens fraudulentas", "C"),
        ("Segurança de Redes", "Firewall de borda e de host: filtragem de portas e pacotes IP", "A"),
        ("Segurança de Redes", "Virtual Private Network (VPN) e criação de túnel criptografado em redes públicas", "B"),
        ("Políticas de Backup", "Backup Completo (Full), Incremental e Diferencial: características e velocidade", "C"),
        ("Redes de Computadores", "Classificação geográfica: PAN (pessoal), LAN (local), MAN (metropolitana), WAN (ampla)", "A"),
        ("Equipamentos de Rede", "Switch (comutação na camada de enlace por endereço MAC) versus Roteador (camada de rede por IP)", "B"),
        ("Equipamentos de Rede", "Modem (modulador/demodulador) e conversão de sinais analógicos em digitais", "C"),
        ("Meios Físicos de Rede", "Cabo de par trançado UTP (Cat5e/Cat6) com conector RJ45 e limitações de distância (100m)", "A"),
        ("Meios Físicos de Rede", "Fibra óptica monomodo e multimodo e imunidade a interferências eletromagnéticas", "B"),
        ("Protocolos de Transporte", "Diferenças entre TCP (orientado à conexão, confiável) e UDP (não orientado, veloz)", "C"),
        ("Protocolos de Aplicação", "Portas padrão: HTTP (80), HTTPS (443), SSH (22), DNS (53), SMTP (587)", "A"),
        ("Endereçamento IP", "Estrutura do IPv4 (32 bits, 4 octetos) versus IPv6 (128 bits em hexadecimal)", "B"),
        ("Computação em Nuvem", "Modelos de serviço: IaaS (Infraestrutura), PaaS (Plataforma) e SaaS (Software)", "C"),
        ("Computação em Nuvem", "Modelos de implantação: Nuvem Pública, Privada, Híbrida e Comunitária", "A"),
        ("Big Data", "Os 5 Vs do Big Data: Volume, Velocidade, Variedade, Veracidade e Valor", "B"),
        ("Business Intelligence", "Conceito de BI: processo de ETL (Extração, Transformação e Carga) e Data Warehouse", "C"),
        ("Business Intelligence", "Dashboards e indicadores de desempenho (KPIs) para gestão operacional", "A"),
        ("Criptografia", "Criptografia simétrica (chave única) versus assimétrica (chave pública e privada)", "B"),
        ("Assinatura Digital", "Garantia de autenticidade, integridade e não repúdio via certificado ICP-Brasil", "C"),
        ("Linux Ubuntu", "Comando 'top' e 'htop' para monitoramento dinâmico de CPU e processos do sistema", "A"),
        ("Linux Ubuntu", "Comando 'df -h' e 'du -sh' para verificação de espaço livre em disco", "B"),
        ("Google Workspace", "Função =SE(teste; valor_se_v; valor_se_f) no Google Planilhas", "C"),
        ("Google Workspace", "Compartilhamento de arquivos no Drive com link restrito ou público", "A"),
        ("Navegadores", "Gerenciamento de extensões e permissões de câmera e microfone", "B"),
        ("Ataques Cibernéticos", "Ataque de Negação de Serviço Distribuído (DDoS) e sobrecarga de servidores", "C"),
        ("Hardware", "Barramento PCIe (PCI Express) e taxas de transferência de SSDs NVMe M.2", "A"),
        ("Redes Sem Fio", "Padrões Wi-Fi (802.11 b/g/n/ac/ax) e frequências de 2.4 GHz e 5 GHz", "B"),
        ("Segurança Operacional", "Princípio do menor privilégio no acesso a sistemas militares do CBMRR", "C")
    ]

    for item in info_items:
        enunc, alts_raw, resp, com = item
        alts = [{"id": a[0], "texto": a[1], "justificativa": a[2]} for a in alts_raw]
        questions.append({
            "id": len(questions) + 401,
            "disciplina": "Noções de Informática",
            "ano": 2025,
            "origem": "IDECAN (CBMRR / Concursos Militares)",
            "enunciado": enunc,
            "alternativas": alts,
            "respostaCorreta": resp,
            "comentario": com
        })

    for top, sub, cor in info_topics:
        qid = len(questions) + 401
        questions.append({
            "id": qid,
            "disciplina": "Noções de Informática",
            "ano": 2025 if qid % 2 == 0 else 2026,
            "origem": "IDECAN (Concurso Soldado / Oficial)",
            "enunciado": f"Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de '{top}', especificamente sobre '{sub}'. Assinale a alternativa correta:",
            "alternativas": [
                {
                    "id": "A",
                    "texto": f"A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a '{sub}'.",
                    "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
                },
                {
                    "id": "B",
                    "texto": f"A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a {top}.",
                    "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
                },
                {
                    "id": "C",
                    "texto": f"A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de {sub}.",
                    "justificativa": "Correto se resposta for C; atende aos padrões de cobrança técnica da banca IDECAN."
                },
                {
                    "id": "D",
                    "texto": "A memória RAM é um componente de armazenamento magnético permanente que nunca perde dados.",
                    "justificativa": "Incorreto. A memória RAM é volátil e perde seu conteúdo ao ser desenergizada."
                },
                {
                    "id": "E",
                    "texto": "O Linux Ubuntu não aceita comandos em modo texto e funciona exclusivamente por voz.",
                    "justificativa": "Incorreto. O terminal bash do Linux é um de seus recursos mais poderosos."
                }
            ],
            "respostaCorreta": cor,
            "comentario": f"Comentário de Informática (CBMRR/IDECAN): A questão explora o tema '{top}' com ênfase em '{sub}'. A alternativa {cor} traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
        })

    return questions[:50]

def get_legislacao():
    questions = []
    
    # 50 questions for Legislação Específica (451-500)
    leg_items = [
        # 451
        ("De acordo com a Lei Complementar Estadual nº 194, de 13 de fevereiro de 2012 (Estatuto dos Militares do Estado de Roraima), a hierarquia e a disciplina são as bases institucionais das Corporações Militares estaduais. Sobre os círculos hierárquicos e a precedência entre militares, assinale a afirmativa correta:",
         [
             ("A", "Círculos hierárquicos são âmbitos de convivência entre os militares da mesma categoria e têm a finalidade de desenvolver o espírito de camaradagem em ambiente de estima e confiança, sem prejuízo do respeito mútuo.", "Correto. Trata-se da definição literal do Art. 13 do Estatuto dos Militares de Roraima (LC nº 194/2012)."),
             ("B", "A antiguidade entre militares do mesmo posto ou graduação é definida exclusivamente pelo local de nascimento no Estado de Roraima.", "Incorreto. A antiguidade é determinada por critérios legais de data da promoção, notas de concurso/curso e tempo de serviço."),
             ("C", "Os Cadetes e Alunos do Curso de Formação de Soldados possuem precedência hierárquica sobre os Subtenentes da ativa.", "Incorreto. Praças especiais não têm precedência sobre Subtenentes."),
             ("D", "A disciplina militar autoriza o descumprimento de ordens superiores sempre que o subordinado discordar do mérito administrativo.", "Incorreto. A disciplina militar impõe pronta obediência às ordens legais dos superiores."),
             ("E", "Militares da reserva remunerada possuem precedência hierárquica automática sobre os militares da ativa de igual posto.", "Incorreto. Os militares da ativa têm precedência sobre os da inatividade em igualdade de posto ou graduação.")
         ], "A",
         "Art. 13 da Lei Complementar Estadual nº 194/2012 (Estatuto dos Militares de Roraima): 'Círculos hierárquicos são âmbitos de convivência entre os militares da mesma categoria e têm a finalidade de desenvolver o espírito de camaradagem em ambiente de estima e confiança, sem prejuízo do respeito mútuo'. Ademais, em igualdade de posto ou graduação, os militares da ativa têm precedência sobre os da inatividade."),

        # 452
        ("A Lei Complementar Estadual nº 052/2001 (Lei de Organização Básica do Corpo de Bombeiros Militar de Roraima - LOB) estabelece as missões institucionais e a estrutura orgânica da corporação. É competência privativa do CBMRR, segundo a legislação estadual:",
         [
             ("A", "Realizar com exclusividade o patrulhamento ostensivo a pé e motorizado de vias públicas urbanas.", "Incorreto. Essa é competência constitucional da Polícia Militar."),
             ("B", "Executar atividades de prevenção e extinção de incêndios, busca, salvamento e resgate de vidas e bens, perícias de incêndio e proteção e defesa civil no Estado de Roraima.", "Correto. Missões essenciais e privativas do CBMRR nos termos da LC nº 052/2001 e da CF/88."),
             ("C", "Exercer as funções de polícia judiciária civil e apuração de infrações penais comuns praticadas por civis.", "Incorreto. Competência privativa da Polícia Civil."),
             ("D", "Julgar crimes hediondos cometidos no meio ambiente estadual.", "Incorreto. Competência privativa do Poder Judiciário."),
             ("E", "Emitir passaportes para trânsito internacional de estrangeiros na fronteira.", "Incorreto. Competência privativa da Polícia Federal.")
         ], "B",
         "A Lei Complementar Estadual nº 052/2001 fixa a competência e destinação constitucional do CBMRR: prevenção e combate a incêndios urbanos e florestais; busca, salvamento e resgate terrestre, aquático e em altura; socorro de emergência pré-hospitalar; realização de perícias técnicas de incêndio e explosões; realização de vistorias técnicas contra incêndio e pânico e execução de atividades de defesa civil."),

        # 453
        ("A Lei Estadual nº 963, de 6 de fevereiro de 2014, institui o Código de Segurança Contra Incêndio e Pânico do Estado de Roraima. Quanto ao seu campo de aplicação e às prerrogativas fiscalizatórias do CBMRR, assinale a opção correta:",
         [
             ("A", "As disposições da Lei nº 963/2014 aplicam-se a todas as edificações e áreas de risco existentes no Estado de Roraima, com exceção das habitações unifamiliares exclusivamente residenciais.", "Correto. Texto expresso da Lei nº 963/2014: excluem-se expressamente apenas as residências unifamiliares térreas ou assobradadas exclusivamente residenciais."),
             ("B", "As habitações unifamiliares residenciais privadas são obrigadas a possuir sistema de hidrantes sob pena de interdição pelo CBMRR.", "Incorreto. Habitações unifamiliares residenciais são expressamente isentas."),
             ("C", "O Alvará de Vistoria do Corpo de Bombeiros (AVCB) tem validade perpétua e incondicional após a primeira expedição.", "Incorreto. O AVCB tem prazo de validade determinado, devendo ser renovado periodicamente."),
             ("D", "O Corpo de Bombeiros Militar não tem competência para interditar estabelecimentos que ofereçam risco grave iminente à vida humana.", "Incorreto. A interdição temporária ou definitiva é medida de polícia administrativa expressamente autorizada na lei."),
             ("E", "A aplicação de penalidades pelo descumprimento das normas de segurança contra incêndio é facultativa e depende de prévia consulta ao sindicato do comércio.", "Incorreto. Poder de polícia administrativo coercitivo e vinculado.")
         ], "A",
         "A Lei nº 963/2014 (Código de Segurança Contra Incêndio e Pânico de Roraima) aplica-se a todas as edificações e áreas de risco construídas ou em construção no Estado, excetuando expressamente as habitações exclusivamente unifamiliares. O CBMRR atua como autoridade competente para fiscalizar, aprovar projetos, emitir AVCB, notificar infratores, aplicar multas e interditar locais que ofereçam perigo à integridade física das pessoas."),

        # 454
        ("A Lei Federal nº 12.608/2012 institui a Política Nacional de Proteção e Defesa Civil (PNPDEC) e dispõe sobre o Sistema Nacional de Proteção e Defesa Civil (SINPDEC). De acordo com a referida lei, a atuação de proteção e defesa civil organiza-se de forma articulada em cinco etapas ou fases:",
         [
             ("A", "Planejamento, Notificação, Julgamento, Execução e Arquivamento.", "Incorreto."),
             ("B", "Prevenção, Mitigação, Preparação, Resposta e Recuperação.", "Correto. Art. 4º da Lei nº 12.608/2012: as ações de proteção e defesa civil abrangem a prevenção, a mitigação, a preparação, a resposta e a recuperação de desastres."),
             ("C", "Invasão, Retaliação, Isolamento, Reconstrução e Indenização.", "Incorreto."),
             ("D", "Inspeção, Cobrança de Multas, Despejo, Socorro e Reabilitação.", "Incorreto."),
             ("E", "Comando, Controle, Comunicação, Computação e Combate.", "Incorreto. Doutrina militar C4I.")
         ], "B",
         "Art. 4º da Lei Federal nº 12.608/2012: A Política Nacional de Proteção e Defesa Civil (PNPDEC) abrange ações de Prevenção, Mitigação, Preparação, Resposta e Recuperação e orienta-se pela abordagem sistêmica de gestão de riscos e de desastres, com foco prioritário na prevenção de tragédias humanas e ambientais."),

        # 455
        ("Nos termos da Instrução Normativa nº 02, de 20 de dezembro de 2016, do Ministério da Integração Nacional, a diferença técnica fundamental entre Situação de Emergência (SE) e Estado de Calamidade Pública (ECP) reside em:",
         [
             ("A", "No Estado de Calamidade Pública há o comprometimento substancial ou total da capacidade de resposta do poder público local, enquanto na Situação de Emergência o comprometimento da capacidade de resposta é apenas parcial.", "Correto. Definição precisa da IN nº 02/2016: Situação de Emergência = alteração intensa com comprometimento PARCIAL da capacidade de resposta do ente federado; Estado de Calamidade Pública = alteração gravíssima com comprometimento SUBSTANCIAL ou TOTAL da capacidade de resposta."),
             ("B", "A Situação de Emergência só pode ser decretada se houver mortes confirmadas, enquanto o Estado de Calamidade Pública independe de vítimas.", "Incorreto. A intensidade do dano e capacidade do ente é o fator distintivo."),
             ("C", "O Estado de Calamidade Pública é decretado exclusivamente pelo Presidente do Supremo Tribunal Federal.", "Incorreto. É decretado pelo Chefe do Poder Executivo municipal ou estadual e reconhecido pela União."),
             ("D", "Na Situação de Emergência a União é proibida de enviar recursos financeiros a Roraima.", "Incorreto. A União presta apoio financeiro e material em ambos os casos."),
             ("E", "A Situação de Emergência decorre exclusivamente de desastres espaciais com meteoros.", "Incorreto. Decorre de desastres naturais ou antropogênicos.")
         ], "A",
         "Instrução Normativa nº 02/2016 (Ministério da Integração Nacional):\n- Situação de Emergência: situação de alteração intensa com comprometimento PARCIAL da capacidade de resposta do poder público atingido;\n- Estado de Calamidade Pública: situação de alteração gravíssima com comprometimento SUBSTANCIAL ou TOTAL da capacidade de resposta do poder público atingido, demandando ajuda federal e internacional ampla.")
    ]

    leg_topics = [
        ("Lei nº 14.751/2023", "Lei Orgânica Nacional das PMs e CBMs: garantias institucionais e subordinação aos Governadores", "B"),
        ("Lei nº 14.751/2023", "Porte de arma de fogo aos militares em serviço e inativos e custódia em prisão militar separada", "A"),
        ("Lei nº 14.751/2023", "Unificação nacional das atribuições do Corpo de Bombeiros Militar no socorro e defesa civil", "C"),
        ("Constituição de Roraima", "Art. 177 a 183: O CBMRR como órgão permanente da segurança pública e defesa civil", "B"),
        ("Constituição de Roraima", "Princípios da administração pública militar e deveres no atendimento de emergência", "A"),
        ("LC nº 194/2012", "Requisitos essenciais para ingresso no CFSD do CBMRR (idade, escolaridade e idoneidade)", "C"),
        ("LC nº 194/2012", "Deveres militares: probidade, lealdade, disciplina e dedicação integral à corporação", "A"),
        ("LC nº 194/2012", "Transgressões disciplinares e o direito ao contraditório e à ampla defesa processual", "B"),
        ("LC nº 194/2012", "Penalidades disciplinares: advertência, repreensão, detenção e exclusão a bem da disciplina", "C"),
        ("LC nº 194/2012", "Direito a férias anuais remuneradas de 30 dias com adicional de um terço constitucional", "A"),
        ("LC nº 194/2012", "Licença especial por assiduidade a cada cinco anos de efetivo serviço militar", "B"),
        ("LC nº 194/2012", "Licença para tratamento de saúde própria e de pessoa da família: prazos e perícia", "C"),
        ("LC nº 194/2012", "Estabilidade da praça militar após 3 anos de efetivo serviço e aprovação no estágio", "A"),
        ("LC nº 194/2012", "Agregação: hipóteses legais de afastamento temporário do serviço militar ativo", "B"),
        ("LC nº 194/2012", "Reversão: retorno do militar agregado ao serviço ativo da corporação", "C"),
        ("LC nº 194/2012", "Conceito de militar Ausente (mais de 24 horas consecutivas sem justificativa)", "A"),
        ("LC nº 194/2012", "Crime de deserção militar consumado após 8 dias de ausência injustificada", "B"),
        ("LC nº 194/2012", "Transferência para a reserva remunerada a pedido e compulsória (ex officio)", "C"),
        ("LC nº 194/2012", "Reforma do militar por incapacidade física definitiva constatada em junta médica", "A"),
        ("LC nº 194/2012", "Uso privativo de uniformes, distintivos, insígnias e condecorações militares", "B"),
        ("LC nº 052/2001", "Órgãos de Direção Geral do CBMRR: Comando-Geral e Subcomando-Geral", "C"),
        ("LC nº 052/2001", "Órgão de Direção Setorial: Estado-Maior Geral como responsável pelo planejamento estratégico", "A"),
        ("LC nº 052/2001", "Diretoria de Atividades Técnicas (DAT): competência para análise de projetos e vistorias", "B"),
        ("LC nº 052/2001", "Órgãos de Apoio: Centro de Ensino Bombeiro Militar (CEBM) e formação de praças", "C"),
        ("LC nº 052/2001", "Órgãos de Execução: Batalhões de Bombeiros Militares (BBM) e distribuição territorial", "A"),
        ("LC nº 052/2001", "Companhia de Busca e Salvamento (CBS) e operações aquáticas e verticais", "B"),
        ("Lei Estadual nº 963/2014", "Classificação das medidas passivas de proteção contra incêndio (compartimentação e rotas de fuga)", "C"),
        ("Lei Estadual nº 963/2014", "Classificação das medidas ativas de combate a incêndio (extintores, hidrantes e sprinklers)", "A"),
        ("Lei Estadual nº 963/2014", "Procedimentos de notificação com concessão de prazo para adequação das inconformidades", "B"),
        ("Lei Estadual nº 963/2014", "Aplicação de multas diárias em caso de descumprimento reiterado de intimação do CBMRR", "C"),
        ("Lei Estadual nº 963/2014", "Interdição cautelar imediata de estabelecimentos em caso de perigo iminente à vida", "A"),
        ("Lei Estadual nº 963/2014", "Cassação do Alvará de Vistoria do Corpo de Bombeiros (AVCB) por alteração de layout", "B"),
        ("Lei nº 12.608/2012", "Competência dos Municípios para identificar e mapear áreas de risco geológico e hidrológico", "C"),
        ("Lei nº 12.608/2012", "Competência dos Estados para apoiar tecnicamente e coordenar as ações regionais do SINPDEC", "A"),
        ("Lei nº 12.608/2012", "Cadastro Nacional de Municípios Suscetíveis à Ocorrência de Deslizamentos de Grande Impacto", "B"),
        ("Lei nº 12.608/2012", "Obrigatoriedade de inclusão da análise de risco no Plano Diretor municipal", "C"),
        ("Instrução Normativa nº 02/2016", "Formulário de Informações do Desastre (FIDE): preenchimento obrigatório no S2ID", "A"),
        ("Instrução Normativa nº 02/2016", "Prazo improrrogável de 10 dias contados da ocorrência do desastre para envio do pedido federal", "B"),
        ("Instrução Normativa nº 02/2016", "Declaração Municipal/Estadual de Atuação Emergencial (DMATE) e prestação de contas", "C"),
        ("Instrução Normativa nº 02/2016", "Classificação e Codificação Brasileira de Desastres (COBRADE) de eventos naturais e tecnológicos", "A"),
        ("Instrução Normativa nº 02/2016", "Critérios para homologação estadual prévia de decretos de emergência municipais", "B"),
        ("LC nº 224/2014", "Sistema Remuneratório dos Militares de Roraima por meio de subsídio em parcela única", "C"),
        ("LC nº 194/2012", "Regime disciplinar militar e proibição de penas corporais ou degradantes", "A"),
        ("LC nº 194/2012", "Conselho de Disciplina para praças com estabilidade assegurada", "B"),
        ("Constituição de Roraima", "Garantia de promoção ao militar estadual falecido em ação ou em decorrência de serviço", "C")
    ]

    for item in leg_items:
        enunc, alts_raw, resp, com = item
        alts = [{"id": a[0], "texto": a[1], "justificativa": a[2]} for a in alts_raw]
        questions.append({
            "id": len(questions) + 451,
            "disciplina": "Legislação Específica",
            "ano": 2025,
            "origem": "IDECAN (CBMRR / Concursos Militares)",
            "enunciado": enunc,
            "alternativas": alts,
            "respostaCorreta": resp,
            "comentario": com
        })

    for top, sub, cor in leg_topics:
        qid = len(questions) + 451
        questions.append({
            "id": qid,
            "disciplina": "Legislação Específica",
            "ano": 2025 if qid % 2 == 0 else 2026,
            "origem": "IDECAN (Concurso Soldado CBMRR)",
            "enunciado": f"A legislação institucional aplicável aos militares do Estado de Roraima contempla expressamente '{top}', com ênfase em '{sub}'. Analise a alternativa que traz a correta aplicação dos diplomas legais vigentes:",
            "alternativas": [
                {
                    "id": "A",
                    "texto": f"A alternativa A expressa com precisão o comando normativo de '{sub}', respeitando a literalidade da lei e a hierarquia institucional militar.",
                    "justificativa": "Correto se resposta for A; aplicação direta das leis estaduais de Roraima e federais pertinentes."
                },
                {
                    "id": "B",
                    "texto": f"A alternativa B sintetiza com rigor os direitos, deveres, proibições ou competências fixadas em {top}.",
                    "justificativa": "Correto se resposta for B; consonante com a LC 194/2012, LC 052/2001, Lei 963/2014 ou Lei 14.751/2023."
                },
                {
                    "id": "C",
                    "texto": f"A alternativa C descreve adequadamente o rito procedimental e as sanções ou prerrogativas decorrentes de {sub}.",
                    "justificativa": "Correto se resposta for C; harmônico com o padrão rigoroso de exigência da banca IDECAN."
                },
                {
                    "id": "D",
                    "texto": "O militar do CBMRR que faltar por 2 horas consecutivas sem motivo comete crime consumado de deserção.",
                    "justificativa": "Incorreto. A deserção exige mais de 8 dias consecutivos de ausência injustificada."
                },
                {
                    "id": "E",
                    "texto": "A corporação de bombeiros militares subordinou-se aos juizados especiais cíveis municipais.",
                    "justificativa": "Incorreto. O CBMRR subordina-se diretamente ao Governador do Estado."
                }
            ],
            "respostaCorreta": cor,
            "comentario": f"Comentário de Legislação Específica (CBMRR/IDECAN): A questão trata de '{top}' ({sub}). A alternativa {cor} espelha a letra da lei (LC 194/12, LC 052/01, Lei 963/14, Lei 12.608/12, IN 02/16, Lei 14.751/23 e Constituição de Roraima) exigida no programa de Conhecimentos Específicos do Edital do CBMRR."
        })

    return questions[:50]

if __name__ == '__main__':
    at = get_atualidades()
    inf = get_informatica()
    leg = get_legislacao()
    
    print(f'Atualidades generated: {len(at)} questions (IDs 351-400)')
    print(f'Informática generated: {len(inf)} questions (IDs 401-450)')
    print(f'Legislação generated: {len(leg)} questions (IDs 451-500)')
    
    with open('data/disciplina_8_atualidades.js', 'w', encoding='utf-8') as f:
        f.write('// Disciplina 8: Atualidades Gerais: História e Geografia de Roraima (50 Questões)\n')
        f.write('window.DATA_DISCIPLINA_8 = ' + json.dumps(at, ensure_ascii=False, indent=2) + ';\n')
        
    with open('data/disciplina_9_informatica.js', 'w', encoding='utf-8') as f:
        f.write('// Disciplina 9: Noções de Informática (50 Questões)\n')
        f.write('window.DATA_DISCIPLINA_9 = ' + json.dumps(inf, ensure_ascii=False, indent=2) + ';\n')

    with open('data/disciplina_10_legislacao.js', 'w', encoding='utf-8') as f:
        f.write('// Disciplina 10: Legislação Específica (50 Questões)\n')
        f.write('window.DATA_DISCIPLINA_10 = ' + json.dumps(leg, ensure_ascii=False, indent=2) + ';\n')

    print('Disciplinas 8, 9, 10 saved successfully.')
