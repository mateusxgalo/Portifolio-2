/* ═══════════════════════════════════════════════════
   PORTFÓLIO — MATEUS OLIVEIRA
   script/script.js — vanilla JS + Truco integrado
═══════════════════════════════════════════════════ */

/* ─── DATA ──────────────────────────────────────── */
const habilidades = [
  { nome: "HTML5",        icon: "🌐", nivel: 80, label: "Avançado" },
  { nome: "CSS3",         icon: "🎨", nivel: 75, label: "Avançado" },
  { nome: "JavaScript",   icon: "⚡", nivel: 65, label: "Intermediário" },
  { nome: "Python",       icon: "🐍", nivel: 60, label: "Intermediário" },
  { nome: "SQL",          icon: "🗄️",  nivel: 55, label: "Intermediário" },
  { nome: "Git & GitHub", icon: "🌿", nivel: 70, label: "Avançado" },
  { nome: "UI/UX Design", icon: "🖌️", nivel: 65, label: "Intermediário" },
  { nome: "Testes de SW", icon: "🧪", nivel: 50, label: "Iniciante+" },
  { nome: "React",        icon: "⚛️", nivel: 40, label: "Aprendendo" },
];

const projetos = [
  {
    emoji: "🖥️",
    tags: ["Front-End"],
    titulo: "Sistema Web Responsivo",
    desc: "Projeto com HTML, CSS e JS focado em interface moderna, responsiva e acessível. Implementa boas práticas de semântica e performance.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    status: "live", statusLabel: "Em produção",
    link: "#", github: "#",
    filter: "front-end",
    thumb: "linear-gradient(135deg, #0a1f3c 0%, #0d2a4a 100%)",
  },
  {
    emoji: "📊",
    tags: ["Dados", "Python"],
    titulo: "Dashboard Analítico",
    desc: "Visualização de dados com gráficos interativos e indicadores em tempo real. Integração com SQL para consultas dinâmicas.",
    stack: ["Python", "SQL", "CSS3"],
    status: "dev", statusLabel: "Em dev",
    link: "#", github: "#",
    filter: "dados",
    thumb: "linear-gradient(135deg, #0d1f15 0%, #0a2018 100%)",
  },
  {
    emoji: "📱",
    tags: ["JavaScript"],
    titulo: "App Interativo",
    desc: "Aplicação com lógica avançada, eventos DOM e manipulação de estado. Foco em experiência do usuário fluida e responsiva.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    status: "concept", statusLabel: "Conceito",
    link: "#", github: "#",
    filter: "javascript",
    thumb: "linear-gradient(135deg, #1a0d2e 0%, #1f0a3c 100%)",
  },
  {
    emoji: "🃏",
    tags: ["React", "JavaScript"],
    titulo: "Jogo de Truco Interativo",
    desc: "Jogo de Truco brasileiro completo com IA, manilhas, grito de truco/seis/nove/doze, placar e lógica de mãos.",
    stack: ["JavaScript", "React", "CSS3"],
    status: "live", statusLabel: "Em produção",
    link: "#truco", github: "#",
    filter: "react",
    thumb: "linear-gradient(135deg, #1a0d2e 0%, #0a1f3c 100%)",
  },
];

const timeline = [
  { date: "2024 — Presente", titulo: "Sistemas de Informação", sub: "Faculdade · 2º Semestre · Foco em Design focado no usuário", dot: "accent" },
  { date: "2024", titulo: "HTML, CSS & JavaScript", sub: "Estudo autodidata · Projetos pessoais e cursos online", dot: "accent2" },
  { date: "2023", titulo: "Introdução à Programação", sub: "Python · Lógica de programação · Algoritmos básicos", dot: "green" },
];

/* ─── COUNTDOWN ─────────────────────────────────── */
function updateCountdown() {
  const diff = new Date(2028, 11, 31) - new Date();
  if (diff <= 0) { ['cd-years','cd-months','cd-days'].forEach(id => document.getElementById(id).textContent = '0'); return; }
  const totalDays = Math.floor(diff / 86400000);
  document.getElementById('cd-years').textContent  = String(Math.floor(totalDays / 365)).padStart(2,'0');
  document.getElementById('cd-months').textContent = String(Math.floor((totalDays % 365) / 30)).padStart(2,'0');
  document.getElementById('cd-days').textContent   = String(totalDays % 30).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 86400000);

/* ─── TYPEWRITER ─────────────────────────────────── */
const phrases = ["Front-End Dev","Análise de Dados","UI/UX Design","Teste de Software","Sistemas de Informação","React Developer"];
let pIdx = 0, cIdx = 0, deleting = false;
function typeWriter() {
  const el = document.getElementById('typed'); if (!el) return;
  const phrase = phrases[pIdx];
  if (!deleting) {
    el.textContent = phrase.substring(0, cIdx + 1); cIdx++;
    if (cIdx === phrase.length) { deleting = true; setTimeout(typeWriter, 1800); return; }
    setTimeout(typeWriter, 80);
  } else {
    el.textContent = phrase.substring(0, cIdx - 1); cIdx--;
    if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; }
    setTimeout(typeWriter, 45);
  }
}
setTimeout(typeWriter, 1000);

/* ─── RENDER SKILLS ──────────────────────────────── */
const sg = document.getElementById('skills-grid');
habilidades.forEach(h => {
  const el = document.createElement('div'); el.className = 'skill-card';
  el.innerHTML = `<span class="skill-icon">${h.icon}</span><span class="skill-name">${h.nome}</span><div class="skill-bar-wrap"><div class="skill-bar" data-level="${h.nivel}"></div></div><span class="skill-level">${h.label} · ${h.nivel}%</span>`;
  sg.appendChild(el);
});

/* ─── RENDER PROJECTS ────────────────────────────── */
const pg = document.getElementById('projects-grid');
projetos.forEach(p => {
  const statusClass = { live:'status-live', dev:'status-dev', concept:'status-concept' }[p.status];
  const tagsHtml  = p.tags.map((t,i) => `<span class="project-tag${i>0?' purple':''}">${t}</span>`).join('');
  const stackHtml = p.stack.map(s => `<span class="tech-chip">${s}</span>`).join('');
  const el = document.createElement('div'); el.className = 'project-card'; el.dataset.filter = p.filter;
  el.innerHTML = `
    <div class="project-thumb">
      <div class="project-thumb-bg" style="background:${p.thumb}"></div>
      <span class="project-emoji">${p.emoji}</span>
      <span class="project-status ${statusClass}">${p.statusLabel}</span>
    </div>
    <div class="project-body">
      <div class="project-tags">${tagsHtml}</div>
      <h3 class="project-title">${p.titulo}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-stack">${stackHtml}</div>
      <div class="project-footer">
        <a href="${p.link}" class="project-link">Ver projeto →</a>
        <a href="${p.github}" class="project-link-ghost"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>GitHub</a>
      </div>
    </div>`;
  pg.appendChild(el);
});

/* ─── FILTER TABS ─────────────────────────────────── */
document.getElementById('filter-tabs').addEventListener('click', e => {
  if (!e.target.classList.contains('filter-tab')) return;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  const filter = e.target.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.toggle('hidden', filter !== 'all' && card.dataset.filter !== filter);
  });
});

/* ─── RENDER TIMELINE ─────────────────────────────── */
const tl = document.getElementById('timeline');
timeline.forEach(item => {
  const el = document.createElement('div'); el.className = 'timeline-item reveal';
  el.innerHTML = `<div class="timeline-dot" style="background:var(--${item.dot==='green'?'green':item.dot==='accent2'?'accent2':'accent'})"></div><div class="timeline-date">${item.date}</div><div class="timeline-card"><div class="timeline-title">${item.titulo}</div><div class="timeline-sub">${item.sub}</div></div>`;
  tl.appendChild(el);
});

/* ─── FOOTER YEAR ─────────────────────────────────── */
document.getElementById('footer-ano').textContent = new Date().getFullYear();

/* ─── SCROLL REVEAL ───────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-bar').forEach(bar => setTimeout(() => { bar.style.width = bar.dataset.level + '%'; }, 200));
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal, .reveal-stagger, .timeline-item').forEach(el => revealObserver.observe(el));

const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar').forEach((bar,i) => setTimeout(() => { bar.style.width = bar.dataset.level + '%'; }, i*60+300));
      skillsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
const skGrid = document.getElementById('skills-grid');
if (skGrid) skillsObserver.observe(skGrid);

/* ─── SCROLL PROGRESS + NAV ───────────────────────── */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.body.scrollHeight - window.innerHeight;
  document.getElementById('progress-bar').style.width = (scrolled / total * 100) + '%';
  document.getElementById('navbar').classList.toggle('scrolled', scrolled > 60);
  document.getElementById('back-top').classList.toggle('show', scrolled > 400);
  ['sobre','habilidades','projetos','educacao','truco','contato'].forEach(id => {
    const el = document.getElementById(id); if (!el) return;
    const rect = el.getBoundingClientRect();
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) link.classList.toggle('active', rect.top <= 120 && rect.bottom >= 120);
  });
});

/* ─── CUSTOM CURSOR ───────────────────────────────── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => {
  mx=e.clientX; my=e.clientY;
  cursor.style.left = mx-6+'px'; cursor.style.top = my-6+'px';
});
function animRing() {
  rx += (mx-rx-18)*0.15; ry += (my-ry-18)*0.15;
  ring.style.left = rx+'px'; ring.style.top = ry+'px';
  requestAnimationFrame(animRing);
}
animRing();
document.querySelectorAll('a,button,.stat-card,.skill-card,.project-card,.social-link').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});

/* ─── MOBILE NAV ──────────────────────────────────── */
function toggleMobileNav() { document.getElementById('mobileNav').classList.toggle('open'); }
function closeMobileNav()  { document.getElementById('mobileNav').classList.remove('open'); }

/* ─── FORM SUBMIT ─────────────────────────────────── */
function submitForm() {
  const name  = document.getElementById('form-name').value.trim();
  const email = document.getElementById('form-email').value.trim();
  const msg   = document.getElementById('form-msg').value.trim();
  if (!name||!email||!msg) { alert('Por favor, preencha todos os campos obrigatórios.'); return; }
  const btn = document.querySelector('.contact-form .btn');
  btn.textContent = 'Enviando...'; btn.disabled = true;
  setTimeout(() => { btn.style.display='none'; document.getElementById('form-success').style.display='block'; }, 1200);
}

/* ─── PARALLAX ORBS ───────────────────────────────── */
document.addEventListener('mousemove', e => {
  const x = (e.clientX/window.innerWidth-0.5)*30, y = (e.clientY/window.innerHeight-0.5)*30;
  document.querySelector('.orb-1').style.transform = `translate(${x}px,${y}px)`;
  document.querySelector('.orb-2').style.transform = `translate(${-x}px,${-y}px)`;
});

/* ══════════════════════════════════════════════════
   SEÇÃO APRENDER
══════════════════════════════════════════════════ */
document.getElementById('learn-tabs').addEventListener('click', e => {
  if (!e.target.classList.contains('learn-tab')) return;
  document.querySelectorAll('.learn-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.learn-panel').forEach(p => p.classList.remove('active'));
  e.target.classList.add('active');
  document.getElementById('tab-'+e.target.dataset.tab).classList.add('active');
});

const snippets = {
  hello:`// Olá Mundo!\nconsole.log("Olá, Mundo!");\nconsole.log("Bem-vindo ao portfólio do Mateus!");`,
  variaveis:`let nome = "Mateus";\nlet idade = 20;\nconst linguagem = "JavaScript";\nconsole.log("Nome: " + nome);\nconsole.log("Idade: " + idade);\nconsole.log("Linguagem: " + linguagem);`,
  condicional:`let nota = 7;\nif (nota >= 7) {\n  console.log("✅ Aprovado! Nota: " + nota);\n} else if (nota >= 5) {\n  console.log("⚠️ Recuperação.");\n} else {\n  console.log("❌ Reprovado.");\n}`,
  loop:`for (let i = 1; i <= 5; i++) {\n  console.log("Número: " + i);\n}\nlet frutas = ["Maçã","Banana","Manga"];\nfrutas.forEach((f,i) => console.log((i+1)+". "+f));`,
  funcao:`function saudar(nome) { return "Olá, " + nome + "!"; }\nfunction somar(a,b) { return a+b; }\nconsole.log(saudar("Mateus"));\nconsole.log("2+3 = " + somar(2,3));`,
  array:`let langs = ["HTML","CSS","JS","Python"];\nconsole.log("Total: " + langs.length);\nlangs.push("React");\nlangs.forEach((l,i) => console.log((i+1)+". "+l));`,
  objeto:`let dev = { nome:"Mateus", curso:"SI", semestre:2, skills:["HTML","CSS","JS"] };\nconsole.log("Nome: " + dev.nome);\nconsole.log("Skills: " + dev.skills.join(", "));`,
};
const syntaxHints = {
  hello:['console.log()','// comentário','"string"'],
  variaveis:['let x = 0','const y = ""','typeof x'],
  condicional:['if (cond) {}','else if {}','else {}','===','!=='],
  loop:['for(i=0;i<n;i++)','forEach()','while(cond)','.length'],
  funcao:['function f(a){}','return valor','f(arg)','=> arrow'],
  array:['[1,2,3]','.push(x)','.pop()','.filter()','.map()'],
  objeto:['{chave:valor}','obj.prop','Object.keys()'],
};
let currentSnippet = 'hello';
function loadSnippet(key) {
  currentSnippet = key;
  document.getElementById('code-input').value = snippets[key];
  document.getElementById('code-output').innerHTML = '<span style="color:var(--muted);font-size:.82rem;">// A saída aparecerá aqui...</span>';
  document.getElementById('output-status').className = 'output-status';
  const hw = document.getElementById('syntax-hints');
  hw.innerHTML = (syntaxHints[key]||[]).map(h => `<button class="syntax-pill" onclick="insertHint('${h}')">${h}</button>`).join('');
}
document.getElementById('snippet-select').addEventListener('change', e => loadSnippet(e.target.value));
loadSnippet('hello');
function insertHint(text) {
  const ta = document.getElementById('code-input'), s = ta.selectionStart;
  ta.value = ta.value.substring(0,s)+text+ta.value.substring(s);
  ta.focus(); ta.selectionStart = ta.selectionEnd = s+text.length;
}
function runCode() {
  const code = document.getElementById('code-input').value;
  const out = document.getElementById('code-output');
  const status = document.getElementById('output-status');
  const lines = [];
  const safeConsole = {
    log:   (...a) => lines.push({type:'log',  text:a.map(x=>typeof x==='object'?JSON.stringify(x,null,2):String(x)).join(' ')}),
    error: (...a) => lines.push({type:'err',  text:a.map(x=>String(x)).join(' ')}),
    warn:  (...a) => lines.push({type:'warn', text:'⚠️ '+a.map(x=>String(x)).join(' ')}),
    info:  (...a) => lines.push({type:'info', text:a.map(x=>String(x)).join(' ')}),
  };
  try {
    new Function('console', code)(safeConsole);
    if (!lines.length) lines.push({type:'info',text:'// Executado sem saída'});
    status.className = 'output-status ok';
    out.innerHTML = lines.map(l => l.type==='err' ? `<span class="err-line">✗ ${l.text}</span>` : l.type==='info' ? `<span class="info-line">${l.text}</span>` : l.text).join('\n');
  } catch(e) {
    status.className = 'output-status err';
    out.innerHTML = `<span class="err-line">Erro: ${e.message}</span>`;
  }
}
function resetCode() { loadSnippet(currentSnippet); }

/* ─── CONCEITOS ───────────────────────────────────── */
const conceitos = [
  { icon:'📦', color:'c-blue',   titulo:'Variável',      desc:'Uma "caixa" que guarda um valor na memória. Você dá um nome e pode guardar números, textos, listas etc.', exemplo:'let nome = "Mateus";\nlet idade = 20;\nconst PI = 3.14;' },
  { icon:'🔀', color:'c-purple', titulo:'Condicional',   desc:'Permite ao programa tomar decisões. "SE a condição for verdadeira, faça isso; SENÃO, faça aquilo."', exemplo:'if (nota >= 7) {\n  console.log("Aprovado!");\n} else {\n  console.log("Reprovado!");\n}' },
  { icon:'🔄', color:'c-green',  titulo:'Loop',          desc:'Repete um bloco de código várias vezes. Economiza trabalho quando você precisa fazer a mesma coisa múltiplas vezes.', exemplo:'for (let i=1; i<=5; i++) {\n  console.log("Linha "+i);\n}' },
  { icon:'⚙️', color:'c-orange', titulo:'Função',        desc:'Bloco de código com nome que executa uma tarefa específica. Defina uma vez, use quantas vezes quiser.', exemplo:'function somar(a,b) {\n  return a+b;\n}\nconsole.log(somar(3,5));' },
  { icon:'📋', color:'c-blue',   titulo:'Array',         desc:'Lista ordenada de valores. Cada item tem índice começando em 0.', exemplo:'let frutas=["Maçã","Banana"];\nfrutas.push("Manga");\nconsole.log(frutas[0]);' },
  { icon:'🗂️', color:'c-purple', titulo:'Objeto',        desc:'Agrupa propriedades e valores relacionados. Como uma ficha de cadastro.', exemplo:'let dev={nome:"Mateus",idade:20};\nconsole.log(dev.nome);' },
  { icon:'🐛', color:'c-orange', titulo:'Bug & Debug',   desc:'Bug é um erro no código. Debug é o processo de encontrar e corrigir bugs.', exemplo:'let x=5+"3";\nconsole.log(x);       // "53"\nconsole.log(typeof x); // string' },
  { icon:'🌐', color:'c-green',  titulo:'DOM',           desc:'Document Object Model — a representação da página HTML em JavaScript.', exemplo:'let t=document.getElementById("titulo");\nt.textContent="Novo texto!";\nt.style.color="blue";' },
];
const cg = document.getElementById('concept-grid');
conceitos.forEach(c => {
  const el = document.createElement('div'); el.className = `concept-card ${c.color}`;
  const id = 'ex-'+Math.random().toString(36).slice(2);
  el.innerHTML = `<span class="concept-icon">${c.icon}</span><div class="concept-title">${c.titulo}</div><p class="concept-desc">${c.desc}</p><pre class="concept-example" id="${id}">${c.exemplo}</pre><button class="concept-toggle" onclick="toggleExample('${id}',this)">▸ Ver exemplo</button>`;
  cg.appendChild(el);
});
function toggleExample(id, btn) {
  const el = document.getElementById(id); el.classList.toggle('show');
  btn.textContent = el.classList.contains('show') ? '▾ Ocultar' : '▸ Ver exemplo';
}

/* ─── QUIZ ────────────────────────────────────────── */
const perguntas = [
  { q:'Qual palavra-chave declara uma variável que NÃO pode ser reatribuída?', opts:['let','var','const','def'], correct:2, exp:'✅ <strong>const</strong> cria uma constante.' },
  { q:'O que console.log() faz em JavaScript?', opts:['Salva arquivo','Imprime no console','Cria elemento HTML','Envia email'], correct:1, exp:'✅ <strong>console.log()</strong> exibe mensagens no console.' },
  { q:'Qual índice tem o PRIMEIRO elemento de um array?', opts:['1','0','-1','first'], correct:1, exp:'✅ Arrays começam em <strong>0</strong>.' },
  { q:'O que o operador === faz?', opts:['Atribui valor','Compara valor E tipo','Compara só valor','Soma'], correct:1, exp:'✅ <strong>===</strong> é igualdade estrita (valor + tipo).' },
  { q:'Saída de: typeof "Mateus"?', opts:['"Mateus"','number','string','boolean'], correct:2, exp:'✅ Retorna <strong>"string"</strong>.' },
  { q:'O que é uma função?', opts:['Variável numérica','Bloco reutilizável com nome','Tipo de loop','Erro no código'], correct:1, exp:'✅ <strong>Função</strong> é um bloco de código reutilizável.' },
  { q:'Qual método adiciona ao FINAL de um array?', opts:['.add()','.append()','.push()','.insert()'], correct:2, exp:'✅ <strong>.push()</strong> adiciona ao final.' },
  { q:'O que significa "bug"?', opts:['Inseto real','Erro no código','Tipo de variável','Framework JS'], correct:1, exp:'✅ <strong>Bug</strong> é um erro que causa comportamento inesperado.' },
];
let qIdx=0, score=0;
function renderQuestion() {
  const p=perguntas[qIdx];
  document.getElementById('quiz-progress').style.width = ((qIdx/perguntas.length)*100)+'%';
  document.getElementById('quiz-num').textContent = `Pergunta ${qIdx+1} de ${perguntas.length}`;
  document.getElementById('quiz-q').textContent = p.q;
  document.getElementById('quiz-opts').innerHTML = p.opts.map((o,i) => `<button class="quiz-opt" onclick="answerQuiz(${i})"><span class="quiz-opt-icon">${['A','B','C','D'][i]}</span>${o}</button>`).join('');
  document.getElementById('quiz-exp').className = 'quiz-explanation';
  document.getElementById('quiz-exp').innerHTML = '';
  document.getElementById('quiz-next').className = 'quiz-next';
}
function answerQuiz(chosen) {
  const p=perguntas[qIdx];
  document.querySelectorAll('.quiz-opt').forEach((o,i) => {
    o.disabled=true;
    if (i===p.correct) o.classList.add('correct');
    if (i===chosen&&chosen!==p.correct) o.classList.add('wrong');
  });
  if (chosen===p.correct) score++;
  const exp=document.getElementById('quiz-exp');
  exp.innerHTML=p.exp; exp.className='quiz-explanation show '+(chosen===p.correct?'right':'wrong2');
  document.getElementById('quiz-next').className='quiz-next show';
}
function nextQuestion() { qIdx++; qIdx>=perguntas.length?showScore():renderQuestion(); }
function showScore() {
  document.getElementById('quiz-progress').style.width='100%';
  document.getElementById('quiz-body').style.display='none';
  document.getElementById('quiz-score').className='quiz-score show';
  const pct=Math.round((score/perguntas.length)*100);
  document.getElementById('score-big').textContent=`${score}/${perguntas.length}`;
  const msg=[[80,'🏆 Excelente!'],[60,'👏 Muito bem!'],[40,'📚 Bom progresso!'],[0,'💪 Continue!']].find(m=>pct>=m[0]);
  document.getElementById('score-label').textContent=`${pct}% — ${msg[1]}`;
}
function restartQuiz() {
  qIdx=0; score=0;
  document.getElementById('quiz-body').style.display='block';
  document.getElementById('quiz-score').className='quiz-score';
  renderQuestion();
}
renderQuestion();

/* ─── DESAFIOS ────────────────────────────────────── */
const desafios = [
  { num:'01', titulo:'Olá, Mundo!',         sub:'Imprima "Olá, Mundo!" no console',                    diff:'easy', diffLabel:'Fácil' },
  { num:'02', titulo:'Soma de Dois Números', sub:'Crie a=5 e b=3 e mostre a soma',                     diff:'easy', diffLabel:'Fácil' },
  { num:'03', titulo:'Par ou Ímpar',         sub:'Use if/else para verificar se 7 é par ou ímpar',      diff:'easy', diffLabel:'Fácil' },
  { num:'04', titulo:'Contagem Regressiva',  sub:'Use for para imprimir de 10 até 1',                   diff:'med',  diffLabel:'Médio' },
  { num:'05', titulo:'Função de Saudação',   sub:'Função que receba um nome e retorne "Olá, [nome]!"', diff:'med',  diffLabel:'Médio' },
  { num:'06', titulo:'Lista de Compras',     sub:'Array com 5 itens percorrido com forEach',            diff:'med',  diffLabel:'Médio' },
  { num:'07', titulo:'Objeto Pessoal',       sub:'Objeto com nome, idade e cidade',                     diff:'med',  diffLabel:'Médio' },
  { num:'08', titulo:'Calculadora Simples',  sub:'Funções de soma, subtração, mult. e divisão',         diff:'hard', diffLabel:'Difícil' },
  { num:'09', titulo:'FizzBuzz',             sub:'Para 1-20: Fizz (múlt.3), Buzz (múlt.5), FizzBuzz',  diff:'hard', diffLabel:'Difícil' },
  { num:'10', titulo:'Filtrar Array',        sub:'Use .filter() para manter pares de [1..8]',           diff:'hard', diffLabel:'Difícil' },
];
const done = new Set(JSON.parse(sessionStorage.getItem('challenges')||'[]'));
const cl = document.getElementById('challenge-list');
desafios.forEach((d,i) => {
  const el=document.createElement('div'); el.className='challenge-item'+(done.has(i)?' done':''); el.dataset.idx=i;
  el.innerHTML=`<span class="challenge-num">${d.num}</span><div class="challenge-info"><div class="challenge-title">${d.titulo}</div><div class="challenge-sub">${d.sub}</div></div><span class="challenge-diff diff-${d.diff}">${d.diffLabel}</span><div class="challenge-check">${done.has(i)?'✓':''}</div>`;
  el.addEventListener('click', () => {
    if (done.has(i)) { done.delete(i); el.classList.remove('done'); el.querySelector('.challenge-check').textContent=''; }
    else { done.add(i); el.classList.add('done'); el.querySelector('.challenge-check').textContent='✓'; }
    sessionStorage.setItem('challenges', JSON.stringify([...done]));
  });
  cl.appendChild(el);
});

/* ─── GLOSSÁRIO ───────────────────────────────────── */
const glossario = [
  {term:'variável',  def:'Espaço na memória com nome que armazena um valor.'},{term:'constante',def:'Valor fixo após definição. const em JS.'},{term:'função',def:'Bloco de código reutilizável.'},{term:'array',def:'Lista ordenada. Índice começa em 0.'},{term:'objeto',def:'Coleção chave:valor.'},{term:'loop',def:'Estrutura que repete código. for, while, forEach.'},{term:'condição',def:'Expressão true/false usada em if/else.'},{term:'string',def:'Texto entre aspas. Ex: "Olá".'},{term:'boolean',def:'true ou false. Base da lógica.'},{term:'number',def:'Tipo numérico. Ex: 42, 3.14.'},{term:'null',def:'Ausência intencional de valor.'},{term:'undefined',def:'Variável declarada sem valor.'},{term:'typeof',def:'Operador que retorna o tipo como string.'},{term:'DOM',def:'Estrutura em árvore do HTML acessível pelo JS.'},{term:'evento',def:'Ação do usuário (clique, tecla, scroll).'},{term:'bug',def:'Erro que causa comportamento inesperado.'},{term:'algoritmo',def:'Sequência lógica de passos.'},{term:'sintaxe',def:'Regras de escrita da linguagem.'},{term:'compilar',def:'Traduzir código para linguagem de máquina.'},{term:'console',def:'Ferramenta de depuração. console.log().'},{term:'parâmetro',def:'Variável na definição de uma função.'},{term:'retorno',def:'Valor devolvido pela função com return.'},{term:'escopo',def:'Contexto onde uma variável pode ser acessada.'},{term:'callback',def:'Função passada como argumento para outra.'},
  {term:'react',     def:'Biblioteca JS para interfaces de usuário com componentes reutilizáveis.'},{term:'componente',def:'Bloco de UI isolado e reutilizável. O coração do React.'},{term:'useState',   def:'Hook do React para gerenciar estado local de um componente.'},{term:'props',      def:'Propriedades passadas de componente pai para filho no React.'},{term:'jsx',        def:'Sintaxe que mistura HTML e JS usada nos componentes React.'},
];
const gg=document.getElementById('glossario-grid');
glossario.forEach(g => {
  const el=document.createElement('div'); el.className='glossario-card'; el.dataset.term=g.term;
  el.innerHTML=`<div class="glossario-term">${g.term}</div><div class="glossario-def">${g.def}</div>`;
  gg.appendChild(el);
});
function filterGlossario() {
  const q=document.getElementById('glossario-input').value.toLowerCase();
  document.querySelectorAll('.glossario-card').forEach(card => {
    card.classList.toggle('hidden', !card.dataset.term.includes(q) && !card.querySelector('.glossario-def').textContent.toLowerCase().includes(q));
  });
}

document.querySelectorAll('.learn-tab,.run-btn,.reset-btn,.quiz-opt,.quiz-next,.concept-toggle,.syntax-pill,.challenge-item').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});

/* ══════════════════════════════════════════════════
   🃏 JOGO DE TRUCO — INTEGRADO
══════════════════════════════════════════════════ */
(function() {
  const VALORES  = ["4","5","6","7","Q","J","K","A","2","3"];
  const NAIPES   = ["♠","♥","♦","♣"];
  const ORDEM    = ["4♣","7♥","A♠","7♦","3♠","3♥","3♦","3♣","2♠","2♥","2♦","2♣","A♥","A♦","A♣","K♠","K♥","K♦","K♣","J♠","J♥","J♦","J♣","Q♠","Q♥","Q♦","Q♣","7♠","7♣","6♠","6♥","6♦","6♣","5♠","5♥","5♦","5♣","4♠","4♥","4♦"];
  const PONTOS   = { truco:3, seis:6, nove:9, doze:12 };
  const NIVEIS   = [null,"truco","seis","nove","doze"];

  function forca(c)   { return ORDEM.length - ORDEM.indexOf(c); }
  function isVerm(c)  { if (!c) return false; const n=c.slice(-1); return n==="♥"||n==="♦"; }
  function isManilha(carta, vira) {
    if (!carta||!vira) return false;
    const iv = VALORES.indexOf(vira.slice(0,-1));
    return carta.startsWith(VALORES[(iv+1)%VALORES.length]);
  }
  function embaralhar() {
    const d=[]; VALORES.forEach(v=>NAIPES.forEach(n=>d.push(v+n)));
    for(let i=d.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[d[i],d[j]]=[d[j],d[i]];}
    return d;
  }

  let G = null;

  function novoJogo(pm=0, pc=0) {
    const d=embaralhar(), vira=d.pop();
    G = { deck:d, vira, mao:d.splice(0,3), cpu:d.splice(0,3), mesaMao:[], mesaCpu:[], rodada:1, vitMao:0, vitCpu:0, placarMao:pm, placarCpu:pc, fase:"jogando", msg:"Sua vez! Clique em uma carta.", trucoNivel:null };
    render();
  }

  function resolveRodada() {
    const cm=G.mesaMao[G.mesaMao.length-1], cc=G.mesaCpu[G.mesaCpu.length-1];
    let msgR="";
    if (forca(cm)>forca(cc))      { G.vitMao++; msgR="Você ganhou a rodada! "; }
    else if (forca(cc)>forca(cm)) { G.vitCpu++; msgR="CPU ganhou a rodada! "; }
    else                           { msgR="Empate na rodada! "; }

    const pts = G.trucoNivel ? PONTOS[G.trucoNivel] : 1;
    if (G.vitMao>=2) {
      G.placarMao = Math.min(G.placarMao+pts,12); G.msg = msgR+`Você ganhou a mão! +${pts}pts`;
      if (G.placarMao>=12) { G.fase="fim"; G.msg="🏆 Você ganhou a partida!"; render(); return; }
      G.fase="aguardando"; render(); setTimeout(()=>novoJogo(G.placarMao,G.placarCpu),1500); return;
    }
    if (G.vitCpu>=2) {
      G.placarCpu = Math.min(G.placarCpu+pts,12); G.msg = msgR+`CPU ganhou a mão! +${pts}pts`;
      if (G.placarCpu>=12) { G.fase="fim"; G.msg="CPU ganhou a partida!"; render(); return; }
      G.fase="aguardando"; render(); setTimeout(()=>novoJogo(G.placarMao,G.placarCpu),1500); return;
    }
    G.rodada++; G.msg=msgR+"Próxima rodada!";
    setTimeout(()=>{ G.mesaMao=[]; G.mesaCpu=[]; render(); },900);
    render();
  }

  function jogarCarta(idx) {
    if (G.fase!=="jogando") return;
    const carta=G.mao.splice(idx,1)[0]; G.mesaMao.push(carta);
    const ci=Math.floor(Math.random()*G.cpu.length);
    G.mesaCpu.push(G.cpu.splice(ci,1)[0]);
    G.fase="aguardando"; render();
    setTimeout(resolveRodada,700);
  }

  function pedirTruco() {
    if (G.fase!=="jogando") return;
    const idx=NIVEIS.indexOf(G.trucoNivel);
    if (idx>=NIVEIS.length-1) { G.msg="Já está no máximo (doze)!"; render(); return; }
    const prox=NIVEIS[idx+1];
    if (Math.random()>0.35) {
      G.trucoNivel=prox; G.msg=`CPU aceitou o ${prox}! Vale ${PONTOS[prox]}pts.`;
    } else {
      const pts=G.trucoNivel?PONTOS[G.trucoNivel]:1;
      G.placarMao=Math.min(G.placarMao+pts,12);
      G.msg=`CPU correu do ${prox}! +${pts}pts para você.`;
      if (G.placarMao>=12) { G.fase="fim"; G.msg="🏆 Você ganhou a partida!"; render(); return; }
      G.fase="aguardando"; render(); setTimeout(()=>novoJogo(G.placarMao,G.placarCpu),1400); return;
    }
    render();
  }

  /* ── Render completo ── */
  function render() {
    const app=document.getElementById('truco-app'); if (!app) return;
    const idxN=NIVEIS.indexOf(G.trucoNivel);
    const podeGritar=idxN<NIVEIS.length-1&&G.fase==="jogando";
    const proxN=NIVEIS[idxN+1];

    app.innerHTML=`
      <!-- Placar -->
      <div class="truco-placar">
        <div class="truco-scores">
          <div class="truco-score-box">
            <div class="truco-score-label">Você</div>
            <div class="truco-score-num">${G.placarMao}</div>
          </div>
          <div class="truco-score-box">
            <div class="truco-score-label">CPU</div>
            <div class="truco-score-num cpu">${G.placarCpu}</div>
          </div>
        </div>
        <div class="truco-info-row">
          <span class="truco-vira-label">Vira:</span>
          <div class="truco-vira-card" style="color:${isVerm(G.vira)?'#e05':'var(--text)'}">${G.vira}</div>
          ${G.trucoNivel?`<span class="truco-nivel-badge">${G.trucoNivel.toUpperCase()} · ${PONTOS[G.trucoNivel]}pts</span>`:''}
        </div>
      </div>

      <!-- Mensagem -->
      <div class="truco-msg">💬 ${G.msg}</div>

      <!-- Mesa -->
      <div class="truco-mesa">

        <!-- CPU cartas -->
        <div class="truco-area-label">Cartas da CPU</div>
        <div class="truco-vitorias">
          ${[0,1].map(i=>`<div class="truco-vic-dot${i<G.vitCpu?' lose':''}"></div>`).join('')}
        </div>
        <div class="truco-cartas-row">
          ${G.cpu.map(()=>`<div class="truco-card costas">?</div>`).join('')}
          ${G.cpu.length===0?'<span style="font-size:.8rem;color:var(--muted);">Sem cartas</span>':''}
        </div>

        <div class="truco-sep"></div>

        <!-- Mesa -->
        <div class="truco-area-label">Mesa</div>
        <div class="truco-mesa-row">
          <div class="truco-mesa-col">
            <div class="truco-mesa-col-label">Você jogou</div>
            <div class="truco-cartas-row">
              ${G.mesaMao.length===0
                ? `<div class="truco-card mesa-card vazia"></div>`
                : G.mesaMao.map((c,i)=>`<div class="truco-card mesa-card ${isVerm(c)?'vermelha':'preta'}" style="opacity:${i<G.mesaMao.length-1?'0.35':'1'}"><span>${c.slice(0,-1)}</span><span class="naipe">${c.slice(-1)}</span></div>`).join('')}
            </div>
          </div>
          <div class="truco-mesa-col">
            <div class="truco-mesa-col-label">CPU jogou</div>
            <div class="truco-cartas-row">
              ${G.mesaCpu.length===0
                ? `<div class="truco-card mesa-card vazia"></div>`
                : G.mesaCpu.map((c,i)=>`<div class="truco-card mesa-card ${isVerm(c)?'vermelha':'preta'}" style="opacity:${i<G.mesaCpu.length-1?'0.35':'1'}"><span>${c.slice(0,-1)}</span><span class="naipe">${c.slice(-1)}</span></div>`).join('')}
            </div>
          </div>
        </div>

        <div class="truco-sep"></div>

        <!-- Mão do jogador -->
        <div class="truco-area-label">Sua mão — clique para jogar</div>
        <div class="truco-vitorias">
          ${[0,1].map(i=>`<div class="truco-vic-dot${i<G.vitMao?' win':''}"></div>`).join('')}
        </div>
        <div class="truco-cartas-row" id="truco-mao-row">
          ${G.mao.map((c,i)=>`
            <div class="truco-card jogavel ${isVerm(c)?'vermelha':'preta'}" data-idx="${i}">
              ${isManilha(c,G.vira)?'<span class="manilha-badge">M</span>':''}
              <span>${c.slice(0,-1)}</span>
              <span class="naipe">${c.slice(-1)}</span>
            </div>`).join('')}
          ${G.mao.length===0&&G.fase==='jogando'?'<span style="font-size:.8rem;color:var(--muted);">Sem cartas</span>':''}
        </div>
      </div>

      <!-- Botões -->
      <div class="truco-btns">
        ${podeGritar?`<button class="truco-btn truco-btn-gritar" id="btn-gritar">📣 Gritar ${proxN.charAt(0).toUpperCase()+proxN.slice(1)}!</button>`:''}
        ${G.fase==="fim"
          ?`<button class="truco-btn truco-btn-nova" id="btn-nova">🃏 Nova partida</button>`
          :`<button class="truco-btn truco-btn-reset" id="btn-reset">↺ Resetar</button>`}
      </div>
      <div class="truco-legend">
        <span><span class="m-badge">M</span> = Manilha (carta mais forte)</span>
        <span>Pontos: Truco=3 · Seis=6 · Nove=9 · Doze=12</span>
        <span>Primeiro a 12pts vence!</span>
      </div>`;

    /* eventos das cartas */
    document.querySelectorAll('#truco-mao-row .truco-card.jogavel').forEach(el => {
      el.addEventListener('click', ()=>jogarCarta(parseInt(el.dataset.idx)));
      el.addEventListener('mouseenter', ()=>ring.classList.add('hover'));
      el.addEventListener('mouseleave', ()=>ring.classList.remove('hover'));
    });
    document.getElementById('btn-gritar')?.addEventListener('click', pedirTruco);
    document.getElementById('btn-nova')?.addEventListener('click',  ()=>novoJogo(0,0));
    document.getElementById('btn-reset')?.addEventListener('click', ()=>novoJogo(0,0));
  }

  /* inicia o jogo quando a seção ficar visível */
  const trucoObs = new IntersectionObserver(entries=>{
    if (entries[0].isIntersecting && !G) novoJogo();
  },{threshold:0.3});
  const trucoSection = document.getElementById('truco');
  if (trucoSection) trucoObs.observe(trucoSection);
  else novoJogo();

})();
