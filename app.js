/**
 * SIMULADO CBMRR 2026 - BANCA IDECAN
 * Aplicação Web Completa, Moderna e Interativa de Simulados
 */

document.addEventListener('DOMContentLoaded', () => {
  // App State
  const state = {
    allQuestions: window.ALL_QUESTIONS || [],
    disciplinas: window.DISCIPLINAS || [],
    edital: window.EDITAL_METADATA || {},
    
    // View state
    mode: 'disciplina', // 'disciplina' | 'simulado100' | 'erros' | 'favoritas'
    selectedDisciplinaId: 1, // 1 a 10
    currentQuestionIndex: 0,
    filterStatus: 'todas', // 'todas' | 'pendentes' | 'acertos' | 'erros'
    isExplanationOpen: false,
    
    // User progress saved in localStorage
    userAnswers: JSON.parse(localStorage.getItem('cbmrr_user_answers') || '{}'),
    favorites: new Set(JSON.parse(localStorage.getItem('cbmrr_favorites') || '[]')),
    
    // Simulado 100 questions mode
    simulado100Questions: [],
    simuladoTimeRemaining: 4 * 60 * 60, // 4 hours in seconds
    timerInterval: null
  };

  // DOM Elements
  const el = {
    // Countdown
    countdownDays: document.getElementById('countdown-days'),
    examDateText: document.getElementById('exam-date-text'),
    
    // Stats
    statAnswered: document.getElementById('stat-answered'),
    statCorrect: document.getElementById('stat-correct'),
    statWrong: document.getElementById('stat-wrong'),
    statAccuracy: document.getElementById('stat-accuracy'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    
    // Mode Buttons
    btnModeDisciplina: document.getElementById('btn-mode-disciplina'),
    btnModeSimulado100: document.getElementById('btn-mode-simulado100'),
    btnModeErros: document.getElementById('btn-mode-erros'),
    btnModeFavoritas: document.getElementById('btn-mode-favoritas'),
    btnResetSimulado: document.getElementById('btn-reset-simulado'),
    btnPerformanceReport: document.getElementById('btn-performance-report'),
    
    // Discipline bar
    disciplineBarContainer: document.getElementById('discipline-bar-container'),
    disciplinePills: document.getElementById('discipline-pills'),
    
    // Question matrix navigation
    questionMatrix: document.getElementById('question-matrix'),
    activeViewTitle: document.getElementById('active-view-title'),
    activeViewSubtitle: document.getElementById('active-view-subtitle'),
    questionCountBadge: document.getElementById('question-count-badge'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    
    // Question card elements
    questionCard: document.getElementById('question-card'),
    qSubjectBadge: document.getElementById('q-subject-badge'),
    qOriginBadge: document.getElementById('q-origin-badge'),
    qYearBadge: document.getElementById('q-year-badge'),
    qNumberText: document.getElementById('q-number-text'),
    qWeightText: document.getElementById('q-weight-text'),
    btnFavorite: document.getElementById('btn-favorite'),
    qStatement: document.getElementById('q-statement'),
    qOptionsContainer: document.getElementById('q-options-container'),
    
    // Explanation section
    explanationSection: document.getElementById('explanation-section'),
    explanationContent: document.getElementById('explanation-content'),
    btnToggleExplanation: document.getElementById('btn-toggle-explanation'),
    
    // Navigation buttons
    btnPrevQuestion: document.getElementById('btn-prev-question'),
    btnNextQuestion: document.getElementById('btn-next-question'),
    
    // Modals
    reportModal: document.getElementById('report-modal'),
    reportModalContent: document.getElementById('report-modal-content'),
    btnCloseReport: document.getElementById('btn-close-report'),
    
    // Simulado 100 timer banner
    simuladoTimerBanner: document.getElementById('simulado-timer-banner'),
    simuladoTimerText: document.getElementById('simulado-timer-text')
  };

  // Initialize
  initApp();

  function initApp() {
    setupCountdown();
    setupEventListeners();
    renderDisciplinePills();
    updateActiveQuestionsList();
    renderCurrentQuestion();
    updateStatistics();
    // Support direct hash jump (e.g. #q51)
    if (window.location.hash && window.location.hash.startsWith('#q')) {
      const targetId = parseInt(window.location.hash.replace('#q', ''));
      const q = state.allQuestions.find(item => item.id === targetId);
      if (q) {
        const disc = state.disciplinas.find(d => d.nome === q.disciplina);
        if (disc) {
          state.selectedDisciplinaId = disc.id;
          state.mode = 'disciplina';
        }
        updateActiveQuestionsList();
        const list = getActiveQuestions();
        const idx = list.findIndex(item => item.id === targetId);
        if (idx !== -1) {
          state.currentQuestionIndex = idx;
        }
        renderDisciplinePills();
        renderQuestionMatrix();
        renderCurrentQuestion();
      }
    }

  }

  // Countdown to 27 September 2026
  function setupCountdown() {
    const examDate = new Date('2026-09-27T08:00:00-04:00');
    function updateTimer() {
      const now = new Date();
      const diffMs = examDate - now;
      if (diffMs > 0) {
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        el.countdownDays.textContent = `${days} dias`;
        if (el.examDateText) {
          el.examDateText.textContent = `27 de Setembro de 2026 • ${days}d ${hours}h restantes`;
        }
      } else {
        el.countdownDays.textContent = 'Dia da Prova!';
      }
    }
    updateTimer();
    setInterval(updateTimer, 60000);
  }

  // Get current filtered questions list based on active mode & filters
  function getActiveQuestions() {
    let list = [];
    
    if (state.mode === 'disciplina') {
      const disc = state.disciplinas.find(d => d.id === state.selectedDisciplinaId);
      const name = disc ? disc.nome : 'Língua Portuguesa';
      list = state.allQuestions.filter(q => q.disciplina === name);
    } else if (state.mode === 'simulado100') {
      if (!state.simulado100Questions || state.simulado100Questions.length === 0) {
        generateSimulado100();
      }
      list = state.simulado100Questions;
    } else if (state.mode === 'erros') {
      list = state.allQuestions.filter(q => {
        const ans = state.userAnswers[q.id];
        return ans && !ans.isCorrect;
      });
    } else if (state.mode === 'favoritas') {
      list = state.allQuestions.filter(q => state.favorites.has(q.id));
    }
    
    // Apply status filter
    if (state.filterStatus === 'pendentes') {
      list = list.filter(q => !state.userAnswers[q.id]);
    } else if (state.filterStatus === 'acertos') {
      list = list.filter(q => state.userAnswers[q.id] && state.userAnswers[q.id].isCorrect);
    } else if (state.filterStatus === 'erros') {
      list = list.filter(q => state.userAnswers[q.id] && !state.userAnswers[q.id].isCorrect);
    }
    
    return list;
  }

  // Generate 100 questions reflecting official edital distribution
  function generateSimulado100() {
    const list = [];
    state.disciplinas.forEach(disc => {
      const discQuestions = state.allQuestions.filter(q => q.disciplina === disc.nome);
      // Select exact number required by official exam
      const count = disc.qtdProvaReal;
      // shuffle or deterministic slice
      const selected = discQuestions.slice(0, count);
      list.push(...selected);
    });
    state.simulado100Questions = list;
  }

  function updateActiveQuestionsList() {
    const list = getActiveQuestions();
    if (state.currentQuestionIndex >= list.length) {
      state.currentQuestionIndex = Math.max(0, list.length - 1);
    }
    renderQuestionMatrix();
    updateViewTitles(list.length);
  }

  function updateViewTitles(total) {
    if (state.mode === 'disciplina') {
      const disc = state.disciplinas.find(d => d.id === state.selectedDisciplinaId);
      el.activeViewTitle.textContent = disc ? disc.nome : 'Disciplina';
      el.activeViewSubtitle.textContent = `Caderno Temático • 50 Questões Foco IDECAN (${disc ? disc.qtdProvaReal : 10} questões na prova real)`;
      el.disciplineBarContainer.classList.remove('hidden');
      el.simuladoTimerBanner.classList.add('hidden');
    } else if (state.mode === 'simulado100') {
      el.activeViewTitle.textContent = 'Simulado Geral Oficial (100 Questões)';
      el.activeViewSubtitle.textContent = 'Distribuição exata do Edital nº 01/2026 • Tempo de prova: 4 horas • Mínimo 50% para aprovação';
      el.disciplineBarContainer.classList.add('hidden');
      el.simuladoTimerBanner.classList.remove('hidden');
      startSimuladoTimer();
    } else if (state.mode === 'erros') {
      el.activeViewTitle.textContent = 'Caderno de Erros (Revisão Ativa)';
      el.activeViewSubtitle.textContent = 'Refaça exclusivamente as questões que você errou para consolidar a teoria';
      el.disciplineBarContainer.classList.add('hidden');
      el.simuladoTimerBanner.classList.add('hidden');
    } else if (state.mode === 'favoritas') {
      el.activeViewTitle.textContent = 'Questões Marcadas (Favoritas)';
      el.activeViewSubtitle.textContent = 'Itens selecionados para revisão rápida antes do certame';
      el.disciplineBarContainer.classList.add('hidden');
      el.simuladoTimerBanner.classList.add('hidden');
    }
    
    el.questionCountBadge.textContent = `${total} questões`;
  }

  function startSimuladoTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.simuladoTimeRemaining = 4 * 60 * 60; // 4h
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      if (state.simuladoTimeRemaining > 0) {
        state.simuladoTimeRemaining--;
        updateTimerDisplay();
      } else {
        clearInterval(state.timerInterval);
        alert('Tempo limite de 4 horas encerrado! Confira seu relatório de desempenho final.');
        showPerformanceReport();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const hrs = Math.floor(state.simuladoTimeRemaining / 3600);
    const mins = Math.floor((state.simuladoTimeRemaining % 3600) / 60);
    const secs = state.simuladoTimeRemaining % 60;
    el.simuladoTimerText.textContent = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // Render Discipline selection pills
  function renderDisciplinePills() {
    el.disciplinePills.innerHTML = '';
    state.disciplinas.forEach(disc => {
      const btn = document.createElement('button');
      const isActive = state.mode === 'disciplina' && state.selectedDisciplinaId === disc.id;
      
      // Calculate discipline progress
      const discQuestions = state.allQuestions.filter(q => q.disciplina === disc.nome);
      let answeredCount = 0;
      let correctCount = 0;
      discQuestions.forEach(q => {
        if (state.userAnswers[q.id]) {
          answeredCount++;
          if (state.userAnswers[q.id].isCorrect) correctCount++;
        }
      });
      const pct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
      
      btn.className = `flex flex-col text-left px-3.5 py-2 rounded-xl transition font-medium text-xs sm:text-sm border whitespace-nowrap ${
        isActive 
          ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20' 
          : 'bg-[#1e222a] text-slate-300 border-slate-700/60 hover:bg-[#282d38] hover:text-white'
      }`;
      
      btn.innerHTML = `
        <div class="flex items-center justify-between gap-2">
          <span class="font-semibold truncate max-w-[170px] sm:max-w-[210px]">${disc.nome}</span>
          <span class="text-[11px] px-1.5 py-0.5 rounded ${isActive ? 'bg-blue-700 text-blue-100' : 'bg-slate-800 text-slate-400'}">${answeredCount}/50</span>
        </div>
        <div class="w-full bg-slate-700/40 h-1 rounded-full mt-1.5 overflow-hidden">
          <div class="h-full ${pct >= 70 ? 'bg-emerald-400' : pct >= 50 ? 'bg-amber-400' : 'bg-rose-400'}" style="width: ${answeredCount > 0 ? (answeredCount/50)*100 : 0}%"></div>
        </div>
      `;
      
      btn.addEventListener('click', () => {
        state.mode = 'disciplina';
        state.selectedDisciplinaId = disc.id;
        state.currentQuestionIndex = 0;
        state.isExplanationOpen = true;
        renderDisciplinePills();
        updateActiveQuestionsList();
        renderCurrentQuestion();
      });
      
      el.disciplinePills.appendChild(btn);
    });
  }

  // Render question mini matrix (1..N dots)
  function renderQuestionMatrix() {
    const list = getActiveQuestions();
    el.questionMatrix.innerHTML = '';
    
    if (list.length === 0) {
      el.questionMatrix.innerHTML = '<span class="text-xs text-slate-500 italic py-1">Nenhuma questão com os filtros selecionados.</span>';
      return;
    }
    
    list.forEach((q, idx) => {
      const itemBtn = document.createElement('button');
      const ans = state.userAnswers[q.id];
      const isCurrent = idx === state.currentQuestionIndex;
      
      let stateClass = 'bg-[#1e222a] text-slate-400 border-slate-700/60 hover:border-slate-500';
      if (ans) {
        if (ans.isCorrect) {
          stateClass = 'bg-emerald-950/40 text-emerald-300 border-emerald-500/80 font-bold';
        } else {
          stateClass = 'bg-rose-950/40 text-rose-300 border-rose-500/80 font-bold';
        }
      }
      
      if (isCurrent) {
        stateClass += ' ring-2 ring-blue-500 ring-offset-1 ring-offset-[#13151b] font-bold text-white';
      }
      
      itemBtn.className = `w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs flex items-center justify-center transition border ${stateClass}`;
      itemBtn.textContent = idx + 1;
      itemBtn.title = `Questão ${idx + 1} (${q.disciplina})`;
      
      itemBtn.addEventListener('click', () => {
        state.currentQuestionIndex = idx;
        state.isExplanationOpen = false;
        renderQuestionMatrix();
        renderCurrentQuestion();
      });
      
      el.questionMatrix.appendChild(itemBtn);
    });
  }

  // Render the current active question
  function renderCurrentQuestion() {
    const list = getActiveQuestions();
    if (list.length === 0) {
      el.qStatement.innerHTML = `
        <div class="py-12 text-center text-slate-400">
          <p class="text-lg font-medium">Nenhuma questão encontrada nesta categoria ou filtro.</p>
          <p class="text-sm mt-1 text-slate-500">Tente alternar o filtro acima para "Todas" ou selecionar outra disciplina.</p>
        </div>
      `;
      el.qOptionsContainer.innerHTML = '';
      el.explanationSection.classList.add('hidden');
      el.btnPrevQuestion.disabled = true;
      el.btnNextQuestion.disabled = true;
      return;
    }

    const q = list[state.currentQuestionIndex];
    if (!q) return;

    // Badges & Meta
    el.qSubjectBadge.textContent = q.disciplina;
    el.qOriginBadge.textContent = q.origem || 'IDECAN';
    el.qYearBadge.textContent = q.ano || '2025';
    el.qNumberText.textContent = `Questão ${state.currentQuestionIndex + 1} de ${list.length}`;
    el.qWeightText.textContent = `Peso: 1.00 pt`;

    // Favorite button
    const isFav = state.favorites.has(q.id);
    el.btnFavorite.innerHTML = isFav 
      ? '<span class="text-amber-400">★ Salva</span>' 
      : '<span class="text-slate-400">☆ Salvar</span>';

    // Statement
    el.qStatement.textContent = q.enunciado;

    // Alternatives matching the user's screenshot layout
    const userAns = state.userAnswers[q.id];
    const isAnswered = !!userAns;

    el.qOptionsContainer.innerHTML = '';
    q.alternativas.forEach(alt => {
      const optDiv = document.createElement('div');
      
      let cardClasses = 'option-card p-4 sm:p-5 rounded-2xl cursor-pointer relative ';
      let feedbackHtml = '';

      if (!isAnswered) {
        cardClasses += 'unanswered';
        optDiv.addEventListener('click', () => handleSelectOption(q, alt.id));
      } else {
        // Question has been answered
        const isThisSelected = userAns.selected === alt.id;
        const isThisCorrect = q.respostaCorreta === alt.id;

        if (isThisCorrect) {
          // Green highlighted
          cardClasses += isThisSelected ? 'correct-selected' : 'correct-revealed';
          feedbackHtml = `
            <div class="mt-2.5 pt-2 border-t border-emerald-500/20 animate-fade-in">
              <div class="flex items-center gap-1.5 text-emerald-400 font-semibold text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                <span>Resposta correta</span>
              </div>
              <p class="text-slate-300 text-sm mt-1 leading-relaxed">${alt.justificativa || ''}</p>
            </div>
          `;
        } else if (isThisSelected && !isThisCorrect) {
          // Red highlighted
          cardClasses += 'wrong-selected';
          feedbackHtml = `
            <div class="mt-2.5 pt-2 border-t border-rose-500/20 animate-fade-in">
              <div class="flex items-center gap-1.5 text-rose-400 font-semibold text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                <span>Não é bem isso</span>
              </div>
              <p class="text-slate-300 text-sm mt-1 leading-relaxed">${alt.justificativa || ''}</p>
            </div>
          `;
        } else {
          // Unselected options also show their concise rationale below (as seen in screenshot B, C, D!)
          cardClasses += 'dimmed';
          feedbackHtml = `
            <div class="mt-2 pt-2 border-t border-slate-700/40 text-slate-400 text-xs sm:text-sm leading-relaxed animate-fade-in">
              <p>${alt.justificativa || ''}</p>
            </div>
          `;
        }
      }

      optDiv.className = cardClasses;
      optDiv.innerHTML = `
        <div class="text-slate-100 text-sm sm:text-base font-normal leading-relaxed">
          <span class="font-semibold text-slate-200 mr-1.5">${alt.id}.</span> ${alt.texto}
        </div>
        ${feedbackHtml}
      `;

      el.qOptionsContainer.appendChild(optDiv);
    });

    // Explanation Section (Fundamentação + Macetes/Bizus + Radar de Pegadinhas)
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
    `;

    if (state.isExplanationOpen || isAnswered) {
      el.explanationSection.classList.remove('hidden');
    } else {
      el.explanationSection.classList.add('hidden');
    }

    // Nav buttons disabled state
    el.btnPrevQuestion.disabled = state.currentQuestionIndex === 0;
    el.btnNextQuestion.disabled = state.currentQuestionIndex === list.length - 1;
  }

  // Handle alternative selection
  function handleSelectOption(question, selectedId) {
    const isCorrect = selectedId === question.respostaCorreta;
    state.userAnswers[question.id] = {
      selected: selectedId,
      isCorrect: isCorrect,
      timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem('cbmrr_user_answers', JSON.stringify(state.userAnswers));
    
    // Auto-reveal explanation cards on answer
    state.isExplanationOpen = true;
    renderCurrentQuestion();
    renderQuestionMatrix();
    renderDisciplinePills();
    updateStatistics();
    // Support direct hash jump (e.g. #q51)
    if (window.location.hash && window.location.hash.startsWith('#q')) {
      const targetId = parseInt(window.location.hash.replace('#q', ''));
      const q = state.allQuestions.find(item => item.id === targetId);
      if (q) {
        const disc = state.disciplinas.find(d => d.nome === q.disciplina);
        if (disc) {
          state.selectedDisciplinaId = disc.id;
          state.mode = 'disciplina';
        }
        updateActiveQuestionsList();
        const list = getActiveQuestions();
        const idx = list.findIndex(item => item.id === targetId);
        if (idx !== -1) {
          state.currentQuestionIndex = idx;
        }
        renderDisciplinePills();
        renderQuestionMatrix();
        renderCurrentQuestion();
      }
    }

  }

  // Statistics calculation
  function updateStatistics() {
    let answered = 0;
    let correct = 0;
    let wrong = 0;

    Object.values(state.userAnswers).forEach(ans => {
      answered++;
      if (ans.isCorrect) correct++;
      else wrong++;
    });

    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

    el.statAnswered.textContent = answered;
    el.statCorrect.textContent = correct;
    el.statWrong.textContent = wrong;
    el.statAccuracy.textContent = `${accuracy}%`;

    const totalQuestions = state.allQuestions.length || 500;
    const progressPct = Math.round((answered / totalQuestions) * 100);
    el.progressBarFill.style.width = `${progressPct}%`;
  }

  // Setup UI event listeners
  function setupEventListeners() {
    // Mode buttons
    el.btnModeDisciplina.addEventListener('click', () => {
      setMode('disciplina');
    });

    el.btnModeSimulado100.addEventListener('click', () => {
      setMode('simulado100');
    });

    el.btnModeErros.addEventListener('click', () => {
      setMode('erros');
    });

    el.btnModeFavoritas.addEventListener('click', () => {
      setMode('favoritas');
    });

    // Reset button
    el.btnResetSimulado.addEventListener('click', () => {
      if (confirm('Tem certeza que deseja reiniciar o simulado? Suas respostas serão apagadas.')) {
        state.userAnswers = {};
        localStorage.removeItem('cbmrr_user_answers');
        state.currentQuestionIndex = 0;
        state.isExplanationOpen = true;
        renderDisciplinePills();
        updateActiveQuestionsList();
        renderCurrentQuestion();
        updateStatistics();
      }
    });

    // Performance Report Modal
    el.btnPerformanceReport.addEventListener('click', () => {
      showPerformanceReport();
    });

    el.btnCloseReport.addEventListener('click', () => {
      el.reportModal.classList.add('hidden');
    });

    // Favorite toggle
    el.btnFavorite.addEventListener('click', () => {
      const list = getActiveQuestions();
      const q = list[state.currentQuestionIndex];
      if (!q) return;

      if (state.favorites.has(q.id)) {
        state.favorites.delete(q.id);
      } else {
        state.favorites.add(q.id);
      }
      localStorage.setItem('cbmrr_favorites', JSON.stringify(Array.from(state.favorites)));
      renderCurrentQuestion();
    });

    // Toggle explanation
    el.btnToggleExplanation.addEventListener('click', () => {
      state.isExplanationOpen = !state.isExplanationOpen;
      if (state.isExplanationOpen || isAnswered) {
        el.explanationSection.classList.remove('hidden');
        el.explanationSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        el.explanationSection.classList.add('hidden');
      }
    });

    // Navigation buttons
    el.btnPrevQuestion.addEventListener('click', () => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        state.isExplanationOpen = false;
        renderQuestionMatrix();
        renderCurrentQuestion();
        window.scrollTo({ top: el.questionCard.offsetTop - 80, behavior: 'smooth' });
      }
    });

    el.btnNextQuestion.addEventListener('click', () => {
      const list = getActiveQuestions();
      if (state.currentQuestionIndex < list.length - 1) {
        state.currentQuestionIndex++;
        state.isExplanationOpen = false;
        renderQuestionMatrix();
        renderCurrentQuestion();
        window.scrollTo({ top: el.questionCard.offsetTop - 80, behavior: 'smooth' });
      }
    });

    // Filter status buttons
    el.filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        el.filterButtons.forEach(b => b.classList.remove('bg-blue-600', 'text-white'));
        e.target.classList.add('bg-blue-600', 'text-white');
        state.filterStatus = e.target.getAttribute('data-filter') || 'todas';
        state.currentQuestionIndex = 0;
        updateActiveQuestionsList();
        renderCurrentQuestion();
      });
    });

    // Keyboard navigation (Left/Right arrows)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' && !el.btnNextQuestion.disabled) {
        el.btnNextQuestion.click();
      } else if (e.key === 'ArrowLeft' && !el.btnPrevQuestion.disabled) {
        el.btnPrevQuestion.click();
      }
    });
  }

  function setMode(newMode) {
    state.mode = newMode;
    state.currentQuestionIndex = 0;
    state.isExplanationOpen = false;

    // Update active button styling
    [el.btnModeDisciplina, el.btnModeSimulado100, el.btnModeErros, el.btnModeFavoritas].forEach(b => {
      b.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/20');
      b.classList.add('bg-[#1e222a]', 'text-slate-300');
    });

    if (newMode === 'disciplina') el.btnModeDisciplina.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/20');
    if (newMode === 'simulado100') el.btnModeSimulado100.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/20');
    if (newMode === 'erros') el.btnModeErros.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/20');
    if (newMode === 'favoritas') el.btnModeFavoritas.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/20');

    renderDisciplinePills();
    updateActiveQuestionsList();
    renderCurrentQuestion();
  }

  // Show detailed performance report modal
  function showPerformanceReport() {
    let totalQuestions = 0;
    let totalAnswered = 0;
    let totalCorrect = 0;
    let totalScore = 0;

    let rowsHtml = '';
    state.disciplinas.forEach(disc => {
      const qs = state.allQuestions.filter(q => q.disciplina === disc.nome);
      let discAns = 0;
      let discCor = 0;
      qs.forEach(q => {
        if (state.userAnswers[q.id]) {
          discAns++;
          if (state.userAnswers[q.id].isCorrect) discCor++;
        }
      });

      const discPct = discAns > 0 ? Math.round((discCor / discAns) * 100) : 0;
      totalAnswered += discAns;
      totalCorrect += discCor;
      totalQuestions += qs.length;

      rowsHtml += `
        <tr class="border-b border-slate-700/50 hover:bg-[#1f242e]">
          <td class="py-3 px-4 font-medium text-slate-200">${disc.nome}</td>
          <td class="py-3 px-4 text-center text-slate-400">${discAns} / 50</td>
          <td class="py-3 px-4 text-center text-emerald-400 font-semibold">${discCor}</td>
          <td class="py-3 px-4 text-center text-rose-400 font-semibold">${discAns - discCor}</td>
          <td class="py-3 px-4 text-right">
            <span class="inline-block px-2 py-0.5 rounded text-xs font-bold ${
              discPct >= 70 ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/40' :
              discPct >= 50 ? 'bg-amber-950/60 text-amber-400 border border-amber-500/40' :
              'bg-rose-950/60 text-rose-400 border border-rose-500/40'
            }">${discPct}%</span>
          </td>
        </tr>
      `;
    });

    const globalPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    const isApprovedCriteria = globalPct >= 50.0 && totalAnswered >= 100;

    el.reportModalContent.innerHTML = `
      <div class="space-y-6">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div class="bg-[#171a22] p-3 rounded-xl border border-slate-700/60">
            <p class="text-xs text-slate-400">Respondidas</p>
            <p class="text-xl font-bold text-white mt-1">${totalAnswered} / ${totalQuestions}</p>
          </div>
          <div class="bg-[#171a22] p-3 rounded-xl border border-emerald-500/30">
            <p class="text-xs text-emerald-400">Total de Acertos</p>
            <p class="text-xl font-bold text-emerald-400 mt-1">${totalCorrect}</p>
          </div>
          <div class="bg-[#171a22] p-3 rounded-xl border border-rose-500/30">
            <p class="text-xs text-rose-400">Total de Erros</p>
            <p class="text-xl font-bold text-rose-400 mt-1">${totalAnswered - totalCorrect}</p>
          </div>
          <div class="bg-[#171a22] p-3 rounded-xl border border-blue-500/30">
            <p class="text-xs text-blue-400">Rendimento Geral</p>
            <p class="text-xl font-bold text-blue-400 mt-1">${globalPct}%</p>
          </div>
        </div>

        <div class="p-4 rounded-xl border ${
          globalPct >= 50 
            ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300' 
            : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
        } text-sm flex items-start gap-3">
          <div class="text-xl">${globalPct >= 50 ? '🎉' : '⚠️'}</div>
          <div>
            <p class="font-bold">${globalPct >= 50 ? 'Desempenho Acima do Ponto de Corte!' : 'Abaixo do Corte Oficial do Edital'}</p>
            <p class="text-xs mt-0.5 text-slate-300">
              O Edital nº 01/2026 do CBMRR exige mínimo cumulativo de 50% de aproveitamento na prova objetiva (50 pontos) e no mínimo 1,00 ponto em cada uma das disciplinas.
            </p>
          </div>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-700/60">
          <table class="w-full text-left text-xs sm:text-sm">
            <thead class="bg-[#171a22] text-slate-400 uppercase text-[11px] font-semibold">
              <tr>
                <th class="py-3 px-4">Disciplina</th>
                <th class="py-3 px-4 text-center">Respondidas</th>
                <th class="py-3 px-4 text-center">Acertos</th>
                <th class="py-3 px-4 text-center">Erros</th>
                <th class="py-3 px-4 text-right">Rendimento</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;

    el.reportModal.classList.remove('hidden');
  }
});
