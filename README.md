# 🚒 Simulado Interativo CBMRR 2026 — Soldado Bombeiro Militar (Banca IDECAN)

Plataforma moderna, interativa e completa de simulados focada no concurso de **Soldado do Corpo de Bombeiros Militar de Roraima (CBMRR 2026)**, estritamente alinhada ao edital oficial e ao padrão de cobrança da **Banca IDECAN (2024/2025/2026)**.

---

## 🎯 Destaques do Projeto

- **500 Questões Autorais e Recentes:** Exatamente **50 questões** por disciplina, cobrindo 100% dos tópicos do edital e da apostila preparatória oficial.
- **Alternativas A a E:** Estrutura idêntica à prova real da IDECAN, com distratores verossímeis e pegadinhas de banca.
- **Gabarito Comentado Tridimensional:**
  1. 📘 **Fundamentação Teórica & Jurídica:** Citação exata de artigos de lei (LC 194/12, LC 052/01, Lei 963/14, CF/88, Lei 9.784/99, etc.), fórmulas físicas/químicas e regras gramaticais.
  2. ⚡ **Macetes & Bizus de Memorização (30s):** Mnemônicos consagrados (*MANÉ*, *LIMPE*, *COFIFOM*, *PATI*, *MP3.COM*, *Até a Maria sua*, *Torricelli*, *ALCE Metálico*, etc.) para resolução rápida.
  3. ⚠️ **Radar de Pegadinhas da IDECAN:** Análise dos artifícios mais comuns da banca (troca de prazos, inversão de competências, pegadinhas de crase e conectivos).
- **Interface Dark Mode:** Layout imersivo inspirado na identidade visual de alto padrão de concurseiros de elite.
- **Placar e Métricas em Tempo Real:** Acertos, erros, questões respondidas e taxa de rendimento dinâmicos.
- **Filtro de Disciplinas e Revisão de Erros:** Estudo direcionado por matéria ou modo focado apenas nas questões que errou.
- **100% Responsivo:** Funciona em Desktop, Tablet e Mobile.

---

## 📚 Disciplinas Contempladas (500 Questões)

| Disciplina | Qtd. Questões | Tópicos Principais |
| :--- | :---: | :--- |
| **Língua Portuguesa** | 50 | Interpretação densa, crase, regência, reescritura, coesão, sintaxe |
| **Raciocínio Lógico-Matemático** | 50 | Equivalências, negações lógicas, análise combinatória, probabilidade |
| **Física Aplicada** | 50 | Termologia, calorimetria, hidrostática, dinâmica, eletricidade, óptica |
| **Química Aplicada** | 50 | Química do fogo, triângulo/tetraedro, classes de incêndio (A, B, C, D, K), gases |
| **Direito Constitucional** | 50 | Art. 5º, segurança pública (art. 144), militares estaduais (art. 42), nacionalidade |
| **Direito Administrativo** | 50 | LIMPE, poderes administrativos, atos, responsabilidade civil do Estado |
| **Legislação Ambiental** | 50 | Lei 9.605/98 (Crimes Ambientais), SNUC (Lei 9.985/00), Código Florestal (Lei 12.651/12) |
| **Atualidades e História/Geografia de RR** | 50 | Formação territorial de RR, Tratado de Madri, Forte São Joaquim, clima e bacias |
| **Noções de Informática** | 50 | Segurança da informação, malwares, LibreOffice, Windows, redes, nuvem |
| **Legislação Institucional do CBMRR** | 50 | LC 194/12 (Estatuto CBM-RR), LC 052/01 (Organização Básica), Lei 963/14 |

---

## 🐳 Executando com Docker

A aplicação está disponível como imagem pronta no **Docker Hub**:

### 1. Execução Rápida via Docker CLI

```bash
# Baixar e rodar o container na porta 8080
docker run -d --name simulado-cbmrr -p 8080:80 leohurin/simulado-cbmrr-2026:latest
```

Acesse no navegador:
👉 [http://localhost:8080](http://localhost:8080)

### 2. Execução via Docker Compose

Clone o repositório e execute:

```bash
docker compose up -d
```

O `docker-compose.yml` expõe o serviço na porta **8085** (diferente da porta 8080 usada no exemplo de `docker run` acima). Acesse no navegador:
👉 [http://localhost:8085](http://localhost:8085)

Para parar o serviço:
```bash
docker compose down
```

---

## 💻 Execução Local sem Docker

Se preferir rodar diretamente no Linux/WSL ou Windows com Python ou Nginx local:

```bash
# Permissão de execução no script
chmod +x iniciar_simulado.sh

# Iniciar o servidor HTTP local
./iniciar_simulado.sh
```

Ou diretamente via Python:
```bash
python3 -m http.server 8080 --directory .
```

---

## 📁 Estrutura de Arquivos

```
.
├── Dockerfile                  # Container Nginx Alpine otimizado (~26MB)
├── docker-compose.yml          # Orquestração do container
├── nginx.conf                  # Configuração do Nginx com Gzip e cache estático
├── index.html                  # Interface SPA dark mode com Tailwind CSS
├── styles.css                  # Estilos customizados e animações
├── app.js                      # Lógica do simulado, placar, filtros e bizus
├── questions.js                # Base unificada com as 500 questões completas
├── data/                       # Arquivos modulares por disciplina (1 a 10)
├── scripts/                    # Scripts Python de compilação e enriquecimento
├── iniciar_simulado.sh         # Script utilitário para subida local
├── .gitignore                  # Arquivos ignorados pelo Git (PDFs e binários)
└── README.md                   # Documentação do projeto
```

---

## 👨‍🚒 Desenvolvedor & Autor

- **Docker Hub:** [leohurin](https://hub.docker.com/u/leohurin)
- **GitHub:** [leandrosanttos007](https://github.com/leandrosanttos007)
- **E-mail:** `leandro.santtos.fff@gmail.com`

---

*Foco, disciplina e rumo à aprovação no CBMRR 2026! 🔥🚒*
