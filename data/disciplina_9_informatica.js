// Disciplina 9: Noções de Informática (50 Questões)
window.DATA_DISCIPLINA_9 = [
  {
    "id": 401,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "No sistema operacional Linux (distribuição Ubuntu Server/Desktop), frequentemente utilizado em servidores governamentais e de segurança pública, qual comando é empregado no terminal de modo texto para alterar as permissões de leitura, escrita e execução de um arquivo?",
    "alternativas": [
      {
        "id": "A",
        "texto": "chmod",
        "justificativa": "Correto. O comando 'chmod' (change mode) altera as permissões de acesso (rwx: read, write, execute) de arquivos e diretórios no Linux."
      },
      {
        "id": "B",
        "texto": "chown",
        "justificativa": "Incorreto. O comando 'chown' (change owner) altera o dono/proprietário e grupo do arquivo."
      },
      {
        "id": "C",
        "texto": "grep",
        "justificativa": "Incorreto. O 'grep' busca padrões de texto em arquivos."
      },
      {
        "id": "D",
        "texto": "ps -ef",
        "justificativa": "Incorreto. O 'ps' lista os processos em execução."
      },
      {
        "id": "E",
        "texto": "rmdir",
        "justificativa": "Incorreto. O 'rmdir' remove diretórios vazios."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "O comando CHMOD (change mode) é utilizado no Linux para definir e alterar permissões de arquivos e diretórios, seja por notação numérica octal (ex: chmod 755 arquivo) ou simbólica (ex: chmod +x script.sh). Para alterar o dono do arquivo usa-se CHOWN."
  },
  {
    "id": 402,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Na suíte Google Workspace (Google Planilhas / Sheets), um bombeiro militar encarregado da escala de plantão precisa contar o número de soldados que cumpriram mais de 10 ocorrências no mês no intervalo A2:A50. A função mais adequada e sua sintaxe correta é:",
    "alternativas": [
      {
        "id": "A",
        "texto": "=CONT.SE(A2:A50; \">10\")",
        "justificativa": "Correto. A função CONT.SE (COUNTIF) conta o número de células em um intervalo que atendem a um critério especificado entre aspas."
      },
      {
        "id": "B",
        "texto": "=SOMA(A2:A50; \">10\")",
        "justificativa": "Incorreto. A função SOMA soma os valores numéricos, não conta a quantidade de ocorrências."
      },
      {
        "id": "C",
        "texto": "=CONT.NÚM(A2:A50 > 10)",
        "justificativa": "Incorreto. Sintaxe inválida para contagem condicional."
      },
      {
        "id": "D",
        "texto": "=SOMASE(A2:A50; \"10\")",
        "justificativa": "Incorreto. SOMASE somaria os valores, e não contaria."
      },
      {
        "id": "E",
        "texto": "=MÉDIA.SE(A2:A50; \">10\")",
        "justificativa": "Incorreto. Calcula a média aritmética."
      }
    ],
    "respostaCorreta": "A",
    "comentario": "A função =CONT.SE(intervalo; critérios) avalia o intervalo fornecido e retorna a quantidade de células que satisfazem a condição estabelecida. Exemplo: =CONT.SE(A2:A50; \">10\") conta quantas células possuem valor estritamente superior a 10."
  },
  {
    "id": 403,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Em segurança da informação, qual ataque cibernético caracteriza-se pelo uso de criptografia forte não autorizada para sequestrar e bloquear o acesso aos dados e arquivos dos computadores da vítima, exigindo pagamento de resgate (geralmente em criptomoedas) para o fornecimento da chave de decifração?",
    "alternativas": [
      {
        "id": "A",
        "texto": "Spyware",
        "justificativa": "Incorreto. Espiona e coleta dados sem bloquear o sistema."
      },
      {
        "id": "B",
        "texto": "Ransomware",
        "justificativa": "Correto. Ransomware (do inglês ransom = resgate) é o malware que criptografa os dados da vítima e exige resgate para a recuperação."
      },
      {
        "id": "C",
        "texto": "Keylogger",
        "justificativa": "Incorreto. Captura as teclas digitadas no teclado."
      },
      {
        "id": "D",
        "texto": "Adware",
        "justificativa": "Incorreto. Exibe anúncios indesejados."
      },
      {
        "id": "E",
        "texto": "Cavalo de Troia (Trojan)",
        "justificativa": "Incorreto. É um disfarce para abrir portas sem necessariamente sequestrar por criptografia."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "O Ransomware é um software malicioso que se dissemina por redes corporativas, criptografa arquivos e bancos de dados essenciais e exige resgate financeiro para que a vítima receba a chave de descriptografia. Ataques famosos (como WannaCry) ressaltam a necessidade de backups frequentes (regra 3-2-1)."
  },
  {
    "id": 404,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Os cinco princípios basilares fundamentais da Segurança da Informação são tradicionalmente sintetizados pela sigla CIDAR. A garantia de que uma informação não foi adulterada ou modificada de forma não autorizada durante o armazenamento ou transmissão refere-se ao pilar da:",
    "alternativas": [
      {
        "id": "A",
        "texto": "Confidencialidade",
        "justificativa": "Incorreto. Garante que a informação seja acessada apenas por quem tem autorização."
      },
      {
        "id": "B",
        "texto": "Integridade",
        "justificativa": "Correto. O princípio da Integridade assegura que a informação seja mantida em seu estado original, sem sofrer alterações, corrupções ou exclusões não autorizadas."
      },
      {
        "id": "C",
        "texto": "Disponibilidade",
        "justificativa": "Incorreto. Garante que o sistema e a informação estejam acessíveis quando necessários."
      },
      {
        "id": "D",
        "texto": "Autenticidade",
        "justificativa": "Incorreto. Garante a autoria e a identidade legítima do emissor."
      },
      {
        "id": "E",
        "texto": "Não Repúdio (Irretratabilidade)",
        "justificativa": "Incorreto. Impede que o autor negue ter praticado a ação ou assinado o documento."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "Pilares da Segurança da Informação (CIDAR):\n- Confidencialidade: proteção contra acesso não autorizado (sigilo);\n- Integridade: proteção contra modificações, rasuras ou alterações indevidas;\n- Disponibilidade: garantia de acesso pelo usuário autorizado sempre que necessário;\n- Autenticidade: confirmação legítima da identidade de quem gerou a informação;\n- Irretratabilidade (Não Repúdio): impossibilidade de negar a autoria de uma operação realizada."
  },
  {
    "id": 405,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (CBMRR / Concursos Militares)",
    "enunciado": "Na arquitetura de redes de computadores sob o protocolo TCP/IP, qual protocolo da camada de aplicação é responsável por converter automaticamente nomes de domínio amigáveis (ex: www.idecan.org.br) em endereços IP numéricos (ex: 187.45.193.10) reconhecíveis pelos roteadores?",
    "alternativas": [
      {
        "id": "A",
        "texto": "DHCP (Dynamic Host Configuration Protocol)",
        "justificativa": "Incorreto. O DHCP atribui dinamicamente endereços IP e configurações de rede aos hosts."
      },
      {
        "id": "B",
        "texto": "DNS (Domain Name System)",
        "justificativa": "Correto. O DNS atua como o sistema de catálogo e resolução de nomes da Internet, traduzindo URLs/domínios para seus respectivos endereços IP."
      },
      {
        "id": "C",
        "texto": "FTP (File Transfer Protocol)",
        "justificativa": "Incorreto. Protocolo para transferência de arquivos."
      },
      {
        "id": "D",
        "texto": "SMTP (Simple Mail Transfer Protocol)",
        "justificativa": "Incorreto. Protocolo para envio de correio eletrônico."
      },
      {
        "id": "E",
        "texto": "SNMP (Simple Network Management Protocol)",
        "justificativa": "Incorreto. Protocolo para gerenciamento de rede."
      }
    ],
    "respostaCorreta": "B",
    "comentario": "O DNS (Domain Name System), operando tipicamente na porta 53 UDP/TCP, é o serviço distribuído de resolução de nomes da Internet. Sua função básica é mapear endereços de texto alfanuméricos compreensíveis por humanos (como www.google.com) para endereços IP numéricos binários utilizados pelas máquinas para o roteamento de pacotes."
  },
  {
    "id": 406,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Hardware', especificamente sobre 'Diferenças fundamentais entre memória volátil (RAM, Cache) e não volátil (ROM, SSD)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Diferenças fundamentais entre memória volátil (RAM, Cache) e não volátil (ROM, SSD)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Hardware.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Diferenças fundamentais entre memória volátil (RAM, Cache) e não volátil (ROM, SSD).",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Hardware' com ênfase em 'Diferenças fundamentais entre memória volátil (RAM, Cache) e não volátil (ROM, SSD)'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 407,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Hardware', especificamente sobre 'Arquitetura de processadores (CPU): Unidade de Controle, ULA e Registradores'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Arquitetura de processadores (CPU): Unidade de Controle, ULA e Registradores'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Hardware.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Arquitetura de processadores (CPU): Unidade de Controle, ULA e Registradores.",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Hardware' com ênfase em 'Arquitetura de processadores (CPU): Unidade de Controle, ULA e Registradores'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 408,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Linux Ubuntu', especificamente sobre 'Estrutura do sistema de arquivos (/etc para configurações, /bin para binários)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Estrutura do sistema de arquivos (/etc para configurações, /bin para binários)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Linux Ubuntu.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Estrutura do sistema de arquivos (/etc para configurações, /bin para binários).",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Linux Ubuntu' com ênfase em 'Estrutura do sistema de arquivos (/etc para configurações, /bin para binários)'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 409,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Linux Ubuntu', especificamente sobre 'Comando 'grep' para filtragem e pesquisa de cadeias de caracteres em arquivos de log'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Comando 'grep' para filtragem e pesquisa de cadeias de caracteres em arquivos de log'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Linux Ubuntu.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Comando 'grep' para filtragem e pesquisa de cadeias de caracteres em arquivos de log.",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Linux Ubuntu' com ênfase em 'Comando 'grep' para filtragem e pesquisa de cadeias de caracteres em arquivos de log'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 410,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Linux Ubuntu', especificamente sobre 'Gerenciamento de pacotes com APT (apt-get update, apt-get install, apt upgrade)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Gerenciamento de pacotes com APT (apt-get update, apt-get install, apt upgrade)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Linux Ubuntu.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Gerenciamento de pacotes com APT (apt-get update, apt-get install, apt upgrade).",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Linux Ubuntu' com ênfase em 'Gerenciamento de pacotes com APT (apt-get update, apt-get install, apt upgrade)'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 411,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Software Livre', especificamente sobre 'As 4 liberdades fundamentais da Free Software Foundation (GPL)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'As 4 liberdades fundamentais da Free Software Foundation (GPL)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Software Livre.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de As 4 liberdades fundamentais da Free Software Foundation (GPL).",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Software Livre' com ênfase em 'As 4 liberdades fundamentais da Free Software Foundation (GPL)'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 412,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Google Workspace', especificamente sobre 'Google Drive: permissões de compartilhamento (Leitor, Comentador e Editor)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Google Drive: permissões de compartilhamento (Leitor, Comentador e Editor)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Google Workspace.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Google Drive: permissões de compartilhamento (Leitor, Comentador e Editor).",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Google Workspace' com ênfase em 'Google Drive: permissões de compartilhamento (Leitor, Comentador e Editor)'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 413,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Google Workspace', especificamente sobre 'Google Planilhas: referências absolutas com cifrão ($A$1) versus relativas (A1)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Google Planilhas: referências absolutas com cifrão ($A$1) versus relativas (A1)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Google Workspace.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Google Planilhas: referências absolutas com cifrão ($A$1) versus relativas (A1).",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Google Workspace' com ênfase em 'Google Planilhas: referências absolutas com cifrão ($A$1) versus relativas (A1)'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 414,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Google Workspace', especificamente sobre 'Google Planilhas: função PROCV (VLOOKUP) para busca vertical de dados'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Google Planilhas: função PROCV (VLOOKUP) para busca vertical de dados'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Google Workspace.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Google Planilhas: função PROCV (VLOOKUP) para busca vertical de dados.",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Google Workspace' com ênfase em 'Google Planilhas: função PROCV (VLOOKUP) para busca vertical de dados'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 415,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Google Workspace', especificamente sobre 'Google Docs: controle de alterações, comentários e histórico de versões'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Google Docs: controle de alterações, comentários e histórico de versões'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Google Workspace.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Google Docs: controle de alterações, comentários e histórico de versões.",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Google Workspace' com ênfase em 'Google Docs: controle de alterações, comentários e histórico de versões'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 416,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Google Workspace', especificamente sobre 'Google Formulários: coleta automatizada de dados e exportação para planilhas'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Google Formulários: coleta automatizada de dados e exportação para planilhas'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Google Workspace.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Google Formulários: coleta automatizada de dados e exportação para planilhas.",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Google Workspace' com ênfase em 'Google Formulários: coleta automatizada de dados e exportação para planilhas'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 417,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Google Workspace', especificamente sobre 'Google Meet: agendamento de videoconferências e compartilhamento de tela'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Google Meet: agendamento de videoconferências e compartilhamento de tela'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Google Workspace.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Google Meet: agendamento de videoconferências e compartilhamento de tela.",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Google Workspace' com ênfase em 'Google Meet: agendamento de videoconferências e compartilhamento de tela'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 418,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Navegadores', especificamente sobre 'Modo de navegação anônima no Google Chrome (não grava histórico local e cookies)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Modo de navegação anônima no Google Chrome (não grava histórico local e cookies)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Navegadores.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Modo de navegação anônima no Google Chrome (não grava histórico local e cookies).",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Navegadores' com ênfase em 'Modo de navegação anônima no Google Chrome (não grava histórico local e cookies)'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 419,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Navegadores', especificamente sobre 'Limpeza de dados de navegação: cache de imagens versus cookies de sessão'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Limpeza de dados de navegação: cache de imagens versus cookies de sessão'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Navegadores.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Limpeza de dados de navegação: cache de imagens versus cookies de sessão.",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Navegadores' com ênfase em 'Limpeza de dados de navegação: cache de imagens versus cookies de sessão'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 420,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Navegadores', especificamente sobre 'Protocolo HTTPS e certificado digital SSL/TLS exibido pelo cadeado de segurança'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Protocolo HTTPS e certificado digital SSL/TLS exibido pelo cadeado de segurança'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Navegadores.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Protocolo HTTPS e certificado digital SSL/TLS exibido pelo cadeado de segurança.",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Navegadores' com ênfase em 'Protocolo HTTPS e certificado digital SSL/TLS exibido pelo cadeado de segurança'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 421,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Segurança da Informação', especificamente sobre 'Autenticação em dois fatores (2FA / MFA) e camadas de verificação'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Autenticação em dois fatores (2FA / MFA) e camadas de verificação'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Segurança da Informação.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Autenticação em dois fatores (2FA / MFA) e camadas de verificação.",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Segurança da Informação' com ênfase em 'Autenticação em dois fatores (2FA / MFA) e camadas de verificação'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 422,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Malwares', especificamente sobre 'Diferença entre Vírus (precisa de hospedeiro) e Worm (autorreplicante pela rede)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Diferença entre Vírus (precisa de hospedeiro) e Worm (autorreplicante pela rede)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Malwares.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Diferença entre Vírus (precisa de hospedeiro) e Worm (autorreplicante pela rede).",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Malwares' com ênfase em 'Diferença entre Vírus (precisa de hospedeiro) e Worm (autorreplicante pela rede)'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 423,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Malwares', especificamente sobre 'Ataque de Phishing e engenharia social por mensagens fraudulentas'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Ataque de Phishing e engenharia social por mensagens fraudulentas'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Malwares.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Ataque de Phishing e engenharia social por mensagens fraudulentas.",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Malwares' com ênfase em 'Ataque de Phishing e engenharia social por mensagens fraudulentas'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 424,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Segurança de Redes', especificamente sobre 'Firewall de borda e de host: filtragem de portas e pacotes IP'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Firewall de borda e de host: filtragem de portas e pacotes IP'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Segurança de Redes.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Firewall de borda e de host: filtragem de portas e pacotes IP.",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Segurança de Redes' com ênfase em 'Firewall de borda e de host: filtragem de portas e pacotes IP'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 425,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Segurança de Redes', especificamente sobre 'Virtual Private Network (VPN) e criação de túnel criptografado em redes públicas'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Virtual Private Network (VPN) e criação de túnel criptografado em redes públicas'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Segurança de Redes.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Virtual Private Network (VPN) e criação de túnel criptografado em redes públicas.",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Segurança de Redes' com ênfase em 'Virtual Private Network (VPN) e criação de túnel criptografado em redes públicas'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 426,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Políticas de Backup', especificamente sobre 'Backup Completo (Full), Incremental e Diferencial: características e velocidade'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Backup Completo (Full), Incremental e Diferencial: características e velocidade'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Políticas de Backup.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Backup Completo (Full), Incremental e Diferencial: características e velocidade.",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Políticas de Backup' com ênfase em 'Backup Completo (Full), Incremental e Diferencial: características e velocidade'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 427,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Redes de Computadores', especificamente sobre 'Classificação geográfica: PAN (pessoal), LAN (local), MAN (metropolitana), WAN (ampla)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Classificação geográfica: PAN (pessoal), LAN (local), MAN (metropolitana), WAN (ampla)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Redes de Computadores.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Classificação geográfica: PAN (pessoal), LAN (local), MAN (metropolitana), WAN (ampla).",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Redes de Computadores' com ênfase em 'Classificação geográfica: PAN (pessoal), LAN (local), MAN (metropolitana), WAN (ampla)'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 428,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Equipamentos de Rede', especificamente sobre 'Switch (comutação na camada de enlace por endereço MAC) versus Roteador (camada de rede por IP)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Switch (comutação na camada de enlace por endereço MAC) versus Roteador (camada de rede por IP)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Equipamentos de Rede.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Switch (comutação na camada de enlace por endereço MAC) versus Roteador (camada de rede por IP).",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Equipamentos de Rede' com ênfase em 'Switch (comutação na camada de enlace por endereço MAC) versus Roteador (camada de rede por IP)'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 429,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Equipamentos de Rede', especificamente sobre 'Modem (modulador/demodulador) e conversão de sinais analógicos em digitais'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Modem (modulador/demodulador) e conversão de sinais analógicos em digitais'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Equipamentos de Rede.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Modem (modulador/demodulador) e conversão de sinais analógicos em digitais.",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Equipamentos de Rede' com ênfase em 'Modem (modulador/demodulador) e conversão de sinais analógicos em digitais'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 430,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Meios Físicos de Rede', especificamente sobre 'Cabo de par trançado UTP (Cat5e/Cat6) com conector RJ45 e limitações de distância (100m)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Cabo de par trançado UTP (Cat5e/Cat6) com conector RJ45 e limitações de distância (100m)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Meios Físicos de Rede.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Cabo de par trançado UTP (Cat5e/Cat6) com conector RJ45 e limitações de distância (100m).",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Meios Físicos de Rede' com ênfase em 'Cabo de par trançado UTP (Cat5e/Cat6) com conector RJ45 e limitações de distância (100m)'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 431,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Meios Físicos de Rede', especificamente sobre 'Fibra óptica monomodo e multimodo e imunidade a interferências eletromagnéticas'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Fibra óptica monomodo e multimodo e imunidade a interferências eletromagnéticas'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Meios Físicos de Rede.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Fibra óptica monomodo e multimodo e imunidade a interferências eletromagnéticas.",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Meios Físicos de Rede' com ênfase em 'Fibra óptica monomodo e multimodo e imunidade a interferências eletromagnéticas'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 432,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Protocolos de Transporte', especificamente sobre 'Diferenças entre TCP (orientado à conexão, confiável) e UDP (não orientado, veloz)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Diferenças entre TCP (orientado à conexão, confiável) e UDP (não orientado, veloz)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Protocolos de Transporte.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Diferenças entre TCP (orientado à conexão, confiável) e UDP (não orientado, veloz).",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Protocolos de Transporte' com ênfase em 'Diferenças entre TCP (orientado à conexão, confiável) e UDP (não orientado, veloz)'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 433,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Protocolos de Aplicação', especificamente sobre 'Portas padrão: HTTP (80), HTTPS (443), SSH (22), DNS (53), SMTP (587)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Portas padrão: HTTP (80), HTTPS (443), SSH (22), DNS (53), SMTP (587)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Protocolos de Aplicação.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Portas padrão: HTTP (80), HTTPS (443), SSH (22), DNS (53), SMTP (587).",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Protocolos de Aplicação' com ênfase em 'Portas padrão: HTTP (80), HTTPS (443), SSH (22), DNS (53), SMTP (587)'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 434,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Endereçamento IP', especificamente sobre 'Estrutura do IPv4 (32 bits, 4 octetos) versus IPv6 (128 bits em hexadecimal)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Estrutura do IPv4 (32 bits, 4 octetos) versus IPv6 (128 bits em hexadecimal)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Endereçamento IP.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Estrutura do IPv4 (32 bits, 4 octetos) versus IPv6 (128 bits em hexadecimal).",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Endereçamento IP' com ênfase em 'Estrutura do IPv4 (32 bits, 4 octetos) versus IPv6 (128 bits em hexadecimal)'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 435,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Computação em Nuvem', especificamente sobre 'Modelos de serviço: IaaS (Infraestrutura), PaaS (Plataforma) e SaaS (Software)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Modelos de serviço: IaaS (Infraestrutura), PaaS (Plataforma) e SaaS (Software)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Computação em Nuvem.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Modelos de serviço: IaaS (Infraestrutura), PaaS (Plataforma) e SaaS (Software).",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Computação em Nuvem' com ênfase em 'Modelos de serviço: IaaS (Infraestrutura), PaaS (Plataforma) e SaaS (Software)'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 436,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Computação em Nuvem', especificamente sobre 'Modelos de implantação: Nuvem Pública, Privada, Híbrida e Comunitária'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Modelos de implantação: Nuvem Pública, Privada, Híbrida e Comunitária'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Computação em Nuvem.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Modelos de implantação: Nuvem Pública, Privada, Híbrida e Comunitária.",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Computação em Nuvem' com ênfase em 'Modelos de implantação: Nuvem Pública, Privada, Híbrida e Comunitária'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 437,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Big Data', especificamente sobre 'Os 5 Vs do Big Data: Volume, Velocidade, Variedade, Veracidade e Valor'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Os 5 Vs do Big Data: Volume, Velocidade, Variedade, Veracidade e Valor'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Big Data.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Os 5 Vs do Big Data: Volume, Velocidade, Variedade, Veracidade e Valor.",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Big Data' com ênfase em 'Os 5 Vs do Big Data: Volume, Velocidade, Variedade, Veracidade e Valor'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 438,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Business Intelligence', especificamente sobre 'Conceito de BI: processo de ETL (Extração, Transformação e Carga) e Data Warehouse'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Conceito de BI: processo de ETL (Extração, Transformação e Carga) e Data Warehouse'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Business Intelligence.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Conceito de BI: processo de ETL (Extração, Transformação e Carga) e Data Warehouse.",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Business Intelligence' com ênfase em 'Conceito de BI: processo de ETL (Extração, Transformação e Carga) e Data Warehouse'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 439,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Business Intelligence', especificamente sobre 'Dashboards e indicadores de desempenho (KPIs) para gestão operacional'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Dashboards e indicadores de desempenho (KPIs) para gestão operacional'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Business Intelligence.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Dashboards e indicadores de desempenho (KPIs) para gestão operacional.",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Business Intelligence' com ênfase em 'Dashboards e indicadores de desempenho (KPIs) para gestão operacional'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 440,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Criptografia', especificamente sobre 'Criptografia simétrica (chave única) versus assimétrica (chave pública e privada)'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Criptografia simétrica (chave única) versus assimétrica (chave pública e privada)'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Criptografia.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Criptografia simétrica (chave única) versus assimétrica (chave pública e privada).",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Criptografia' com ênfase em 'Criptografia simétrica (chave única) versus assimétrica (chave pública e privada)'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 441,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Assinatura Digital', especificamente sobre 'Garantia de autenticidade, integridade e não repúdio via certificado ICP-Brasil'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Garantia de autenticidade, integridade e não repúdio via certificado ICP-Brasil'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Assinatura Digital.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Garantia de autenticidade, integridade e não repúdio via certificado ICP-Brasil.",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Assinatura Digital' com ênfase em 'Garantia de autenticidade, integridade e não repúdio via certificado ICP-Brasil'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 442,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Linux Ubuntu', especificamente sobre 'Comando 'top' e 'htop' para monitoramento dinâmico de CPU e processos do sistema'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Comando 'top' e 'htop' para monitoramento dinâmico de CPU e processos do sistema'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Linux Ubuntu.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Comando 'top' e 'htop' para monitoramento dinâmico de CPU e processos do sistema.",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Linux Ubuntu' com ênfase em 'Comando 'top' e 'htop' para monitoramento dinâmico de CPU e processos do sistema'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 443,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Linux Ubuntu', especificamente sobre 'Comando 'df -h' e 'du -sh' para verificação de espaço livre em disco'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Comando 'df -h' e 'du -sh' para verificação de espaço livre em disco'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Linux Ubuntu.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Comando 'df -h' e 'du -sh' para verificação de espaço livre em disco.",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Linux Ubuntu' com ênfase em 'Comando 'df -h' e 'du -sh' para verificação de espaço livre em disco'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 444,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Google Workspace', especificamente sobre 'Função =SE(teste; valor_se_v; valor_se_f) no Google Planilhas'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Função =SE(teste; valor_se_v; valor_se_f) no Google Planilhas'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Google Workspace.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Função =SE(teste; valor_se_v; valor_se_f) no Google Planilhas.",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Google Workspace' com ênfase em 'Função =SE(teste; valor_se_v; valor_se_f) no Google Planilhas'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 445,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Google Workspace', especificamente sobre 'Compartilhamento de arquivos no Drive com link restrito ou público'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Compartilhamento de arquivos no Drive com link restrito ou público'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Google Workspace.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Compartilhamento de arquivos no Drive com link restrito ou público.",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Google Workspace' com ênfase em 'Compartilhamento de arquivos no Drive com link restrito ou público'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 446,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Navegadores', especificamente sobre 'Gerenciamento de extensões e permissões de câmera e microfone'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Gerenciamento de extensões e permissões de câmera e microfone'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Navegadores.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Gerenciamento de extensões e permissões de câmera e microfone.",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Navegadores' com ênfase em 'Gerenciamento de extensões e permissões de câmera e microfone'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 447,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Ataques Cibernéticos', especificamente sobre 'Ataque de Negação de Serviço Distribuído (DDoS) e sobrecarga de servidores'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Ataque de Negação de Serviço Distribuído (DDoS) e sobrecarga de servidores'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Ataques Cibernéticos.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Ataque de Negação de Serviço Distribuído (DDoS) e sobrecarga de servidores.",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Ataques Cibernéticos' com ênfase em 'Ataque de Negação de Serviço Distribuído (DDoS) e sobrecarga de servidores'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 448,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Hardware', especificamente sobre 'Barramento PCIe (PCI Express) e taxas de transferência de SSDs NVMe M.2'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Barramento PCIe (PCI Express) e taxas de transferência de SSDs NVMe M.2'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Hardware.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Barramento PCIe (PCI Express) e taxas de transferência de SSDs NVMe M.2.",
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
    "respostaCorreta": "A",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Hardware' com ênfase em 'Barramento PCIe (PCI Express) e taxas de transferência de SSDs NVMe M.2'. A alternativa A traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 449,
    "disciplina": "Noções de Informática",
    "ano": 2026,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Redes Sem Fio', especificamente sobre 'Padrões Wi-Fi (802.11 b/g/n/ac/ax) e frequências de 2.4 GHz e 5 GHz'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Padrões Wi-Fi (802.11 b/g/n/ac/ax) e frequências de 2.4 GHz e 5 GHz'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Redes Sem Fio.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Padrões Wi-Fi (802.11 b/g/n/ac/ax) e frequências de 2.4 GHz e 5 GHz.",
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
    "respostaCorreta": "B",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Redes Sem Fio' com ênfase em 'Padrões Wi-Fi (802.11 b/g/n/ac/ax) e frequências de 2.4 GHz e 5 GHz'. A alternativa B traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  },
  {
    "id": 450,
    "disciplina": "Noções de Informática",
    "ano": 2025,
    "origem": "IDECAN (Concurso Soldado / Oficial)",
    "enunciado": "Nas rotinas administrativas e operacionais do CBMRR, o uso da tecnologia da informação exige sólido conhecimento de 'Segurança Operacional', especificamente sobre 'Princípio do menor privilégio no acesso a sistemas militares do CBMRR'. Assinale a alternativa correta:",
    "alternativas": [
      {
        "id": "A",
        "texto": "A alternativa A reflete com fidelidade as propriedades e comandos técnicos relativos a 'Princípio do menor privilégio no acesso a sistemas militares do CBMRR'.",
        "justificativa": "Correto se resposta for A; aplicação direta das normas da tecnologia da informação e sistemas operacionais."
      },
      {
        "id": "B",
        "texto": "A alternativa B descreve com exatidão a arquitetura, protocolos e mecanismos de segurança inerentes a Segurança Operacional.",
        "justificativa": "Correto se resposta for B; consonante com a teoria de redes, hardware e suítes de escritório."
      },
      {
        "id": "C",
        "texto": "A alternativa C sintetiza adequadamente o funcionamento e as diretrizes operacionais de Princípio do menor privilégio no acesso a sistemas militares do CBMRR.",
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
    "respostaCorreta": "C",
    "comentario": "Comentário de Informática (CBMRR/IDECAN): A questão explora o tema 'Segurança Operacional' com ênfase em 'Princípio do menor privilégio no acesso a sistemas militares do CBMRR'. A alternativa C traz a formulação técnica exata exigida pelo programa do Anexo II do edital do concurso do CBMRR."
  }
];
