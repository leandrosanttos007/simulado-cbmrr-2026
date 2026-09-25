with open('app.js', 'r', encoding='utf-8') as f:
    code = f.read()

old_block = """    // Explanation Section
    el.explanationContent.innerHTML = `
      <div class="p-4 sm:p-5 rounded-2xl bg-[#171a22] border border-blue-500/30 text-sm leading-relaxed">
        <div class="flex items-center gap-2 text-blue-400 font-bold mb-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          <span>Gabarito Comentado e Fundamentação (Professor IDECAN)</span>
        </div>
        <div class="text-slate-200 whitespace-pre-line">${q.comentario}</div>
      </div>
    `;"""

new_block = """    // Explanation Section (Fundamentação + Macetes/Bizus + Radar de Pegadinhas)
    el.explanationContent.innerHTML = `
      <div class="flex flex-col gap-4 animate-fade-in mt-3">
        
        <!-- 1. Gabarito Comentado e Fundamentação -->
        <div class="p-4 sm:p-5 rounded-2xl bg-[#171a22] border border-blue-500/40 text-sm leading-relaxed shadow-lg">
          <div class="flex items-center gap-2 text-blue-400 font-bold text-sm sm:text-base mb-2">
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <span>📖 Fundamentação Oficial & Artigo de Lei (Professor IDECAN)</span>
          </div>
          <div class="text-slate-200 whitespace-pre-line leading-relaxed">${q.comentario}</div>
        </div>

        <!-- 2. Macetes e Bizus para Memorizar / Resolver em 30 Segundos -->
        <div class="p-4 sm:p-5 rounded-2xl bg-[#1e1912] border border-amber-500/50 text-sm leading-relaxed shadow-lg">
          <div class="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base mb-2">
            <svg class="w-5 h-5 flex-shrink-0 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <span>⚡ Macete & Bizu de Memorização (Resolva mais Rápido e Fácil)</span>
          </div>
          <div class="text-amber-100/90 leading-relaxed font-medium">${q.macete || 'Foque no isolamento das alternativas que contrariam a teoria principal.'}</div>
        </div>

        <!-- 3. Radar de Pegadinhas da IDECAN -->
        <div class="p-4 sm:p-5 rounded-2xl bg-[#1c1216] border border-rose-500/50 text-sm leading-relaxed shadow-lg">
          <div class="flex items-center gap-2 text-rose-400 font-bold text-sm sm:text-base mb-2">
            <svg class="w-5 h-5 flex-shrink-0 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            <span>⚠️ Radar de Pegadinhas Típicas da IDECAN (Onde a maioria cai)</span>
          </div>
          <div class="text-rose-100/90 leading-relaxed">${q.pegadinha || 'Atenção aos distratores com pequenas alterações de termos legais.'}</div>
        </div>

      </div>
    `;"""

if old_block in code:
    code = code.replace(old_block, new_block)
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(code)
    print("Successfully replaced explanation section in app.js!")
else:
    print("Could not find old_block in app.js, checking alternate snippet...")
    idx = code.find('el.explanationContent.innerHTML =')
    print("Found snippet at:", idx)
