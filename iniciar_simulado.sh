#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PORT=8080

# Check if port 8080 is in use, if so try 8081
if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null ; then
    PORT=8081
fi

echo "=========================================================="
echo "🔥 SIMULADO CBMRR 2026 - BANCA IDECAN (500 QUESTÕES)"
echo "=========================================================="
echo "Servidor iniciado exclusivamente para a pasta do concurso:"
echo "$DIR"
echo ""
echo "👉 Acesse no seu navegador: http://localhost:$PORT"
echo "=========================================================="
echo "Pressione Ctrl+C para encerrar quando terminar os estudos."

python3 -m http.server $PORT --directory "$DIR"
