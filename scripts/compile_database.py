import json, glob, os

files = [
    ("data/disciplina_1_portugues.js", "Língua Portuguesa", 15),
    ("data/disciplina_2_rlm.js", "Raciocínio Lógico - Matemático", 10),
    ("data/disciplina_3_fisica.js", "Física", 10),
    ("data/disciplina_4_quimica.js", "Química", 10),
    ("data/disciplina_5_constitucional.js", "Noções de Direito Constitucional", 6),
    ("data/disciplina_6_administrativo.js", "Noções de Direito Administrativo", 6),
    ("data/disciplina_7_ambiental.js", "Noções de Direito Ambiental", 10),
    ("data/disciplina_8_atualidades.js", "Atualidades Gerais: História e Geografia de Roraima", 10),
    ("data/disciplina_9_informatica.js", "Noções de Informática", 8),
    ("data/disciplina_10_legislacao.js", "Legislação Específica", 15)
]

all_questions = []
disciplinas_meta = []

for idx, (filepath, name, real_exam_qtd) in enumerate(files, start=1):
    assert os.path.exists(filepath), f"File {filepath} not found"
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    # extract JSON between = and ;
    json_str = content[content.find('=') + 1 : content.rfind(';')].strip()
    data = json.loads(json_str)
    assert len(data) == 50, f"Discipline {name} has {len(data)} questions instead of 50"
    
    disciplinas_meta.append({
        "id": idx,
        "nome": name,
        "totalBanco": len(data),
        "qtdProvaReal": real_exam_qtd,
        "peso": 1.00,
        "pontuacaoMaxima": float(real_exam_qtd),
        "startId": data[0]["id"],
        "endId": data[-1]["id"]
    })
    
    for q in data:
        # validate question integrity
        assert q["id"] is not None
        assert q["disciplina"] == name
        assert len(q["alternativas"]) == 5, f"Question {q['id']} does not have 5 alternatives"
        assert q["respostaCorreta"] in ["A", "B", "C", "D", "E"]
        assert len(q["enunciado"]) > 20
        assert len(q["comentario"]) > 20
        for alt in q["alternativas"]:
            assert alt["id"] in ["A", "B", "C", "D", "E"]
            assert len(alt["texto"]) > 0
            assert len(alt["justificativa"]) > 0
        all_questions.append(q)

print(f"Validation successful! Total questions: {len(all_questions)}")
assert len(all_questions) == 500, f"Expected 500 questions, got {len(all_questions)}"

# Write questions.js
with open("questions.js", "w", encoding="utf-8") as f:
    f.write("""/**
 * BANCO DE QUESTÕES OFICIAL - SIMULADO CBMRR 2026 (BANCA IDECAN)
 * Total: 500 questões (50 questões por disciplina)
 * Estrutura conforme Edital nº 01/2026 e Apostila Oficial Soldado CBM-RR
 */

""")
    f.write("window.EDITAL_METADATA = " + json.dumps({
        "concurso": "Corpo de Bombeiros Militar de Roraima - CBMRR",
        "edital": "Edital nº 01/2026, de 06 de Julho de 2026",
        "cargo": "Soldado 2ª Classe Combatente Bombeiro Militar (QPCBM)",
        "banca": "IDECAN (Instituto de Desenvolvimento Educacional, Cultural e Assistencial Nacional)",
        "dataProva": "2026-09-27T08:00:00-04:00",
        "totalQuestoesProvaReal": 100,
        "pontuacaoMaxima": 100.0,
        "criteriosAprovacao": {
            "minimoTotalPercentual": 50.0,
            "minimoPorDisciplina": 1.0
        },
        "disciplinas": disciplinas_meta
    }, ensure_ascii=False, indent=2) + ";\n\n")
    
    f.write("window.DISCIPLINAS = " + json.dumps(disciplinas_meta, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("window.ALL_QUESTIONS = " + json.dumps(all_questions, ensure_ascii=False) + ";\n")

print("Created questions.js successfully with all 500 validated questions!")
