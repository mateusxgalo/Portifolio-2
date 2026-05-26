/* ─── DATA ─────────────────────────────────────── */
const habilidades = [
  { nome: "HTML5",        icon: "🌐", nivel: 80, label: "Avançado" },
  { nome: "CSS3",         icon: "🎨", nivel: 75, label: "Avançado" },
  { nome: "JavaScript",   icon: "⚡", nivel: 65, label: "Intermediário" },
  { nome: "Python",       icon: "🐍", nivel: 60, label: "Intermediário" },
  { nome: "SQL",          icon: "🗄️",  nivel: 55, label: "Intermediário" },
  { nome: "Git & GitHub", icon: "🌿", nivel: 70, label: "Avançado" },
  { nome: "UI/UX Design", icon: "🖌️", nivel: 65, label: "Intermediário" },
  { nome: "Testes de SW", icon: "🧪", nivel: 50, label: "Iniciante+" },
];

const projetos = [
  {
    emoji: "🖥️",
    tags: ["Front-End"],
    titulo: "Sistema Web Responsivo",
    desc: "Projeto com HTML, CSS e JS focado em interface moderna, responsiva e acessível. Implementa boas práticas de semântica e performance.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    status: "live",
    statusLabel: "Em produção",
    link: "#",
    github: "#",
    filter: "front-end",
    thumb: "linear-gradient(135deg, #0a1f3c 0%, #0d2a4a 100%)",
  },
  {
    emoji: "📊",
    tags: ["Dados", "Python"],
    titulo: "Dashboard Analítico",
    desc: "Visualização de dados com gráficos interativos e indicadores em tempo real. Integração com SQL para consultas dinâmicas.",
    stack: ["Python", "SQL", "CSS3"],
    status: "dev",
    statusLabel: "Em dev",
    link: "#",
    github: "#",
    filter: "dados",
    thumb: "linear-gradient(135deg, #0d1f15 0%, #0a2018 100%)",
  },
  {
    emoji: "📱",
    tags: ["JavaScript"],
    titulo: "App Interativo",
    desc: "Aplicação com lógica avançada, eventos DOM e manipulação de estado. Foco em experiência do usuário fluida e responsiva.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    status: "concept",
    statusLabel: "Conceito",
    link: "#",
    github: "#",
    filter: "javascript",
    thumb: "linear-gradient(135deg, #1a0d2e 0%, #1f0a3c 100%)",
  },
];

const timeline = [
  {
    date: "2024 — Presente",
    titulo: "Sistemas de Informação",
    sub: "Faculdade · 2º Semestre · Foco em Design focado no usuário",
    dot: "accent"
  },
  {
    date: "2024",
    titulo: "HTML, CSS & JavaScript",
    sub: "Estudo autodidata · Projetos pessoais e cursos online",
    dot: "accent2"
  },
  {
    date: "2023",
    titulo: "Introdução à Programação",
    sub: "Python · Lógica de programação · Algoritmos básicos",
    dot: "green"
  },
];

/* ─── COUNTDOWN ─────────────────────────────────── */
function updateCountdown() {
  const now = new Date();
  const target = new Date(2028, 11, 31);
  const diff = target - now;
  if (diff <= 0) {
    document.getElementById('cd-years').textContent = '0';
    document.getElementById('cd-months').textContent = '0';
    document.getElementById('cd-days').textContent = '0';
    return;
  }
  const totalDays = Math.floor(diff / 86400000);
  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = totalDays % 30;
  document.getElementById('cd-years').textContent = String(years).padStart(2,'0');
  document.getElementById('cd-months').textContent = String(months).padStart(2,'0');
  document.getElementById('cd-days').textContent = String(days).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 86400000);

/* ─── TYPEWRITER ─────────────────────────────────── */
const phrases = ["Front-End Dev", "Análise de Dados", "UI/UX Design", "Teste de Software", "Sistemas de Informação"];
let pIdx = 0, cIdx = 0, deleting = false;
function typeWriter() {
  const el = document.getElementById('typed');
  if (!el) return;
  const phrase = phrases[pIdx];
  if (!deleting) {
    el.textContent = phrase.substring(0, cIdx + 1);
    cIdx++;
    if (cIdx === phrase.length) { deleting = true; setTimeout(typeWriter, 1800); return; }
    setTimeout(typeWriter, 80);
  } else {
    el.textContent = phrase.substring(0, cIdx - 1);
    cIdx--;
    if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; }
    setTimeout(typeWriter, 45);
  }
}
setTimeout(typeWriter, 1000);

/* ─── RENDER SKILLS ──────────────────────────────── */
const sg = document.getElementById('skills-grid');
habilidades.forEach(h => {
  const el = document.createElement('div');
  el.className = 'skill-card';
  el.innerHTML = `
    <span class="skill-icon">${h.icon}</span>
    <span class="skill-name">${h.nome}</span>
    <div class="skill-bar-wrap"><div class="skill-bar" data-level="${h.nivel}"></div></div>
    <span class="skill-level">${h.label} · ${h.nivel}%</span>`;
  sg.appendChild(el);
});

/* ─── RENDER PROJECTS ────────────────────────────── */
const pg = document.getElementById('projects-grid');
projetos.forEach(p => {
  const statusClass = { live: 'status-live', dev: 'status-dev', concept: 'status-concept' }[p.status];
  const tagsHtml = p.tags.map((t,i) => `<span class="project-tag${i>0?' purple':''}">${t}</span>`).join('');
  const stackHtml = p.stack.map(s => `<span class="tech-chip">${s}</span>`).join('');
  const el = document.createElement('div');
  el.className = 'project-card';
  el.dataset.filter = p.filter;
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
        <a href="${p.github}" class="project-link-ghost">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
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
timeline.forEach((item, i) => {
  const el = document.createElement('div');
  el.className = 'timeline-item reveal';
  el.innerHTML = `
    <div class="timeline-dot" style="background: var(--${item.dot === 'green' ? 'green' : item.dot === 'accent2' ? 'accent2' : 'accent'})"></div>
    <div class="timeline-date">${item.date}</div>
    <div class="timeline-card">
      <div class="timeline-title">${item.titulo}</div>
      <div class="timeline-sub">${item.sub}</div>
    </div>`;
  tl.appendChild(el);
});

/* ─── FOOTER YEAR ─────────────────────────────────── */
document.getElementById('footer-ano').textContent = new Date().getFullYear();

/* ─── SCROLL REVEAL ───────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Animate skill bars
      e.target.querySelectorAll('.skill-bar').forEach(bar => {
        setTimeout(() => { bar.style.width = bar.dataset.level + '%'; }, 200);
      });
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-stagger, .timeline-item').forEach(el => revealObserver.observe(el));

// Also observe skills grid specifically for bar animation
const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar').forEach((bar, i) => {
        setTimeout(() => { bar.style.width = bar.dataset.level + '%'; }, i * 60 + 300);
      });
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

  // Nav shrink
  document.getElementById('navbar').classList.toggle('scrolled', scrolled > 60);

  // Back to top
  document.getElementById('back-top').classList.toggle('show', scrolled > 400);

  // Active nav link
  const sections = ['sobre','habilidades','projetos','educacao','contato'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) link.classList.toggle('active', rect.top <= 120 && rect.bottom >= 120);
  });
});

/* ─── CUSTOM CURSOR ───────────────────────────────── */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx - 6 + 'px';
  cursor.style.top = my - 6 + 'px';
});

function animRing() {
  rx += (mx - rx - 18) * 0.15;
  ry += (my - ry - 18) * 0.15;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a, button, .stat-card, .skill-card, .project-card, .social-link').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});

/* ─── MOBILE NAV ──────────────────────────────────── */
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('open');
}
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
}

/* ─── FORM SUBMIT ─────────────────────────────────── */
function submitForm() {
  const name = document.getElementById('form-name').value.trim();
  const email = document.getElementById('form-email').value.trim();
  const msg = document.getElementById('form-msg').value.trim();
  if (!name || !email || !msg) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
  // Simulate send
  const btn = document.querySelector('.contact-form .btn');
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  setTimeout(() => {
    btn.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }, 1200);
}

/* ─── PARALLAX ORBS ───────────────────────────────── */
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  document.querySelector('.orb-1').style.transform = `translate(${x}px, ${y}px)`;
  document.querySelector('.orb-2').style.transform = `translate(${-x}px, ${-y}px)`;
});

/* ══════════════════════════════════════════════════
   SEÇÃO DE APRENDIZADO
══════════════════════════════════════════════════ */

/* ─── LEARN TABS ──────────────────────────────────── */
document.getElementById('learn-tabs').addEventListener('click', e => {
  if (!e.target.classList.contains('learn-tab')) return;
  document.querySelectorAll('.learn-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.learn-panel').forEach(p => p.classList.remove('active'));
  e.target.classList.add('active');
  document.getElementById('tab-' + e.target.dataset.tab).classList.add('active');
});

/* ─── CODE SNIPPETS ───────────────────────────────── */
const snippets = {
  hello: `// Olá Mundo — o primeiro programa de todo dev!
// console.log() imprime uma mensagem na tela

console.log("Olá, Mundo!");
console.log("Meu nome é Mateus!");
console.log("Seja bem-vindo ao meu portfólio!");`,

  variaveis: `// Variáveis armazenam informações para usar depois
// let = pode mudar | const = valor fixo | var = antigo

let nome = "Mateus";
let idade = 20;
const linguagem = "JavaScript";
let estaAprendendo = true;

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Linguagem: " + linguagem);
console.log("Está aprendendo? " + estaAprendendo);

// Você pode somar números e strings:
let frase = nome + " tem " + idade + " anos.";
console.log(frase);`,

  condicional: `// if/else = "SE isso, FAÇA aquilo, SENÃO faça outra coisa"

let nota = 7;

if (nota >= 7) {
  console.log("✅ Aprovado! Nota: " + nota);
} else if (nota >= 5) {
  console.log("⚠️ Recuperação. Nota: " + nota);
} else {
  console.log("❌ Reprovado. Nota: " + nota);
}

// Mude o valor de 'nota' e execute novamente!
let hora = 14;
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}`,

  loop: `// Loop 'for' repete um bloco de código várias vezes
// Estrutura: for(início; condição; passo)

console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
  console.log("Número: " + i);
}

console.log("---");

// Loop em um array (lista)
let frutas = ["Maçã", "Banana", "Manga", "Uva"];
console.log("Minhas frutas favoritas:");
for (let i = 0; i < frutas.length; i++) {
  console.log((i + 1) + ". " + frutas[i]);
}

console.log("---");
console.log("Total de frutas: " + frutas.length);`,

  funcao: `// Funções são blocos de código reutilizáveis
// Você define uma vez e usa quantas vezes quiser!

function saudar(nome) {
  return "Olá, " + nome + "! Bem-vindo!";
}

function somar(a, b) {
  return a + b;
}

function eParOuImpar(numero) {
  if (numero % 2 === 0) {
    return numero + " é PAR";
  } else {
    return numero + " é ÍMPAR";
  }
}

// Chamando as funções:
console.log(saudar("Mateus"));
console.log(saudar("Dev"));
console.log("2 + 3 = " + somar(2, 3));
console.log("10 + 25 = " + somar(10, 25));
console.log(eParOuImpar(4));
console.log(eParOuImpar(7));`,

  array: `// Array = lista de valores em sequência
// Índice começa em 0 (zero)!

let linguagens = ["HTML", "CSS", "JavaScript", "Python", "SQL"];

console.log("Primeira linguagem: " + linguagens[0]);
console.log("Terceira linguagem: " + linguagens[2]);
console.log("Total de linguagens: " + linguagens.length);

// Adicionando e removendo
linguagens.push("Git");       // adiciona no final
console.log("Após push:", linguagens.join(", "));

linguagens.pop();             // remove o último
console.log("Após pop:", linguagens.join(", "));

// Percorrendo com forEach
console.log("\\nMinhas linguagens:");
linguagens.forEach(function(lang, index) {
  console.log((index + 1) + ". " + lang);
});`,

  objeto: `// Objeto = conjunto de propriedades e valores
// Como uma ficha com informações

let pessoa = {
  nome: "Mateus",
  idade: 20,
  curso: "Sistemas de Informação",
  semestre: 2,
  habilidades: ["HTML", "CSS", "JavaScript"],
  ativo: true
};

// Acessando propriedades
console.log("Nome: " + pessoa.nome);
console.log("Curso: " + pessoa.curso);
console.log("Semestre: " + pessoa.semestre + "º");
console.log("Habilidades: " + pessoa.habilidades.join(", "));

// Adicionando nova propriedade
pessoa.cidade = "Minas Gerais";
console.log("Cidade: " + pessoa.cidade);

// Objeto com método (função dentro)
let calculadora = {
  somar: function(a, b) { return a + b; },
  multiplicar: function(a, b) { return a * b; }
};
console.log("\\n5 + 3 = " + calculadora.somar(5, 3));
console.log("4 x 6 = " + calculadora.multiplicar(4, 6));`
};

const syntaxHints = {
  hello:      ['console.log()', '"string"', '// comentário'],
  variaveis:  ['let nome = ""', 'const x = 0', 'let ativo = true', 'typeof x'],
  condicional:['if (cond) {}', 'else if {}', 'else {}', '=== igual', '> maior', '< menor'],
  loop:       ['for(i=0;i<n;i++)', 'while(cond)', '.length', 'break', 'continue'],
  funcao:     ['function f(a){}', 'return valor', 'f(argumento)', '=>arrow fn'],
  array:      ['[1,2,3]', '.push(x)', '.pop()', '.length', '.forEach()', '.join()'],
  objeto:     ['{chave: valor}', 'obj.prop', 'obj["prop"]', 'Object.keys()'],
};

let currentSnippet = 'hello';

function loadSnippet(key) {
  currentSnippet = key;
  document.getElementById('code-input').value = snippets[key];
  document.getElementById('code-output').innerHTML = '<span style="color:var(--muted);font-size:.82rem;">// A saída aparecerá aqui...</span>';
  const status = document.getElementById('output-status');
  status.className = 'output-status';

  const hints = syntaxHints[key] || [];
  const hw = document.getElementById('syntax-hints');
  hw.innerHTML = hints.map(h => `<button class="syntax-pill" onclick="insertHint('${h}')" title="Clique para inserir">${h}</button>`).join('');
}

document.getElementById('snippet-select').addEventListener('change', e => loadSnippet(e.target.value));
loadSnippet('hello');

function insertHint(text) {
  const ta = document.getElementById('code-input');
  const start = ta.selectionStart;
  const val = ta.value;
  ta.value = val.substring(0, start) + text + val.substring(start);
  ta.focus();
  ta.selectionStart = ta.selectionEnd = start + text.length;
}

function runCode() {
  const code = document.getElementById('code-input').value;
  const out = document.getElementById('code-output');
  const status = document.getElementById('output-status');
  const lines = [];

  const safeConsole = {
    log: (...args) => lines.push({ type: 'log', text: args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ') }),
    error: (...args) => lines.push({ type: 'err', text: args.map(a => String(a)).join(' ') }),
    warn: (...args) => lines.push({ type: 'warn', text: '⚠️ ' + args.map(a => String(a)).join(' ') }),
    info: (...args) => lines.push({ type: 'info', text: args.map(a => String(a)).join(' ') }),
  };

  try {
    const fn = new Function('console', code);
    fn(safeConsole);
    if (!lines.length) lines.push({ type: 'info', text: '// Código executado (sem saída)' });
    status.className = 'output-status ok';
    out.innerHTML = lines.map(l => {
      if (l.type === 'err') return `<span class="err-line">✗ ${l.text}</span>`;
      if (l.type === 'info') return `<span class="info-line">${l.text}</span>`;
      return l.text;
    }).join('\n');
  } catch(e) {
    status.className = 'output-status err';
    out.innerHTML = `<span class="err-line">Erro: ${e.message}</span>\n<span style="color:var(--muted);font-size:.82rem;">Verifique o código e tente novamente.</span>`;
  }
}

function resetCode() {
  loadSnippet(currentSnippet);
}

/* ─── CONCEITOS ───────────────────────────────────── */
const conceitos = [
  {
    icon: '📦', color: 'c-blue', titulo: 'Variável',
    desc: 'Uma "caixa" que guarda um valor na memória do computador. Você dá um nome a ela e pode guardar números, textos, listas etc.',
    exemplo: 'let nome = "Mateus";\nlet idade = 20;\nconst PI = 3.14;'
  },
  {
    icon: '🔀', color: 'c-purple', titulo: 'Condicional',
    desc: 'Permite que o programa tome decisões. "SE a condição for verdadeira, faça isso; SENÃO, faça aquilo."',
    exemplo: 'if (nota >= 7) {\n  console.log("Aprovado!");\n} else {\n  console.log("Reprovado!");\n}'
  },
  {
    icon: '🔄', color: 'c-green', titulo: 'Loop (Laço)',
    desc: 'Repete um bloco de código várias vezes. Economiza trabalho quando você precisa fazer a mesma coisa múltiplas vezes.',
    exemplo: 'for (let i = 1; i <= 5; i++) {\n  console.log("Linha " + i);\n}'
  },
  {
    icon: '⚙️', color: 'c-orange', titulo: 'Função',
    desc: 'Um bloco de código com nome que executa uma tarefa específica. Defina uma vez, use quantas vezes quiser.',
    exemplo: 'function somar(a, b) {\n  return a + b;\n}\nconsole.log(somar(3, 5)); // 8'
  },
  {
    icon: '📋', color: 'c-blue', titulo: 'Array (Lista)',
    desc: 'Uma lista ordenada de valores. Cada item tem um índice que começa em 0. Ótimo para guardar coleções de dados.',
    exemplo: 'let frutas = ["Maçã", "Banana"];\nfrutas.push("Manga");\nconsole.log(frutas[0]); // Maçã'
  },
  {
    icon: '🗂️', color: 'c-purple', titulo: 'Objeto',
    desc: 'Agrupa propriedades e valores relacionados. Como uma ficha de cadastro com campos e informações.',
    exemplo: 'let pessoa = {\n  nome: "Mateus",\n  idade: 20\n};\nconsole.log(pessoa.nome);'
  },
  {
    icon: '🐛', color: 'c-orange', titulo: 'Bug & Debug',
    desc: 'Bug é um erro no código. Debug é o processo de encontrar e corrigir bugs. console.log() é seu melhor amigo!',
    exemplo: '// Use console.log() para inspecionar:\nlet x = 5 + "3";\nconsole.log(x); // "53" (string!)\nconsole.log(typeof x); // "string"'
  },
  {
    icon: '🌐', color: 'c-green', titulo: 'DOM',
    desc: 'Document Object Model — a representação da página HTML em JavaScript. Permite mudar textos, estilos e estrutura da página.',
    exemplo: '// Selecionando elementos HTML:\nlet titulo = document.getElementById("meu-titulo");\ntitulo.textContent = "Novo texto!";\ntitulo.style.color = "blue";'
  },
];

const cg = document.getElementById('concept-grid');
conceitos.forEach(c => {
  const el = document.createElement('div');
  el.className = `concept-card ${c.color}`;
  const id = 'ex-' + Math.random().toString(36).slice(2);
  el.innerHTML = `
    <span class="concept-icon">${c.icon}</span>
    <div class="concept-title">${c.titulo}</div>
    <p class="concept-desc">${c.desc}</p>
    <pre class="concept-example" id="${id}">${c.exemplo}</pre>
    <button class="concept-toggle" onclick="toggleExample('${id}', this)">▸ Ver exemplo de código</button>`;
  cg.appendChild(el);
});

function toggleExample(id, btn) {
  const el = document.getElementById(id);
  el.classList.toggle('show');
  btn.textContent = el.classList.contains('show') ? '▾ Ocultar exemplo' : '▸ Ver exemplo de código';
}

/* ─── QUIZ ────────────────────────────────────────── */
const perguntas = [
  {
    q: 'Qual palavra-chave em JavaScript declara uma variável cujo valor NÃO pode ser reatribuído?',
    opts: ['let', 'var', 'const', 'def'],
    correct: 2,
    exp: '✅ Correto! <strong>const</strong> cria uma constante — uma variável cujo valor não pode ser reatribuído depois de definido. <strong>let</strong> e <strong>var</strong> permitem reatribuição.'
  },
  {
    q: 'O que console.log() faz em JavaScript?',
    opts: ['Salva um arquivo', 'Imprime uma mensagem no console', 'Cria um elemento HTML', 'Envia um e-mail'],
    correct: 1,
    exp: '✅ Certo! <strong>console.log()</strong> exibe uma mensagem no console do navegador ou do Node.js. É a ferramenta mais usada para depurar código.'
  },
  {
    q: 'Em JavaScript, qual índice tem o PRIMEIRO elemento de um array?',
    opts: ['1', '0', '-1', 'first'],
    correct: 1,
    exp: '✅ Exato! Arrays em JavaScript (e na maioria das linguagens) são indexados a partir de <strong>0</strong>. Então o primeiro item é array[0], o segundo é array[1], etc.'
  },
  {
    q: 'O que o operador === faz em JavaScript?',
    opts: ['Atribui um valor', 'Compara valor E tipo (igualdade estrita)', 'Compara apenas o valor', 'Faz uma soma'],
    correct: 1,
    exp: '✅ Perfeito! <strong>===</strong> compara valor E tipo. Já <strong>==</strong> compara apenas o valor (com conversão de tipo). Prefira sempre === para evitar bugs!'
  },
  {
    q: 'Qual é a saída de: console.log(typeof "Mateus")?',
    opts: ['"Mateus"', 'number', 'string', 'boolean'],
    correct: 2,
    exp: '✅ Isso mesmo! O operador <strong>typeof</strong> retorna o tipo de um valor. "Mateus" é uma string, então typeof "Mateus" retorna <strong>"string"</strong>.'
  },
  {
    q: 'O que é uma função em programação?',
    opts: ['Uma variável que guarda números', 'Um bloco de código reutilizável com um nome', 'Um tipo de loop', 'Um erro no código'],
    correct: 1,
    exp: '✅ Correto! Uma <strong>função</strong> é um bloco de código reutilizável. Você a define uma vez com function e pode chamá-la quantas vezes precisar, opcionalmente passando argumentos.'
  },
  {
    q: 'Qual método adiciona um elemento ao FINAL de um array em JavaScript?',
    opts: ['.add()', '.append()', '.push()', '.insert()'],
    correct: 2,
    exp: '✅ Certo! <strong>.push()</strong> adiciona um ou mais elementos ao final do array. Para adicionar no início, use .unshift(). Para remover o último, use .pop().'
  },
  {
    q: 'O que significa "bug" em programação?',
    opts: ['Um inseto real', 'Um erro ou falha no código', 'Um tipo de variável', 'Um framework JavaScript'],
    correct: 1,
    exp: '✅ Exato! <strong>Bug</strong> é um erro no código que causa comportamento inesperado. O processo de encontrar e corrigir bugs se chama <strong>debugging</strong>.'
  },
];

let qIdx = 0, score = 0;

function renderQuestion() {
  const total = perguntas.length;
  const p = perguntas[qIdx];
  document.getElementById('quiz-progress').style.width = ((qIdx / total) * 100) + '%';
  document.getElementById('quiz-num').textContent = `Pergunta ${qIdx + 1} de ${total}`;
  document.getElementById('quiz-q').textContent = p.q;
  const labels = ['A', 'B', 'C', 'D'];
  document.getElementById('quiz-opts').innerHTML = p.opts.map((opt, i) =>
    `<button class="quiz-opt" onclick="answerQuiz(${i})">
      <span class="quiz-opt-icon">${labels[i]}</span>
      ${opt}
    </button>`).join('');
  document.getElementById('quiz-exp').className = 'quiz-explanation';
  document.getElementById('quiz-exp').innerHTML = '';
  document.getElementById('quiz-next').className = 'quiz-next';
}

function answerQuiz(chosen) {
  const p = perguntas[qIdx];
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === p.correct) o.classList.add('correct');
    if (i === chosen && chosen !== p.correct) o.classList.add('wrong');
  });
  if (chosen === p.correct) score++;
  const expEl = document.getElementById('quiz-exp');
  expEl.innerHTML = p.exp;
  expEl.className = 'quiz-explanation show ' + (chosen === p.correct ? 'right' : 'wrong2');
  document.getElementById('quiz-next').className = 'quiz-next show';
}

function nextQuestion() {
  qIdx++;
  if (qIdx >= perguntas.length) {
    showScore();
  } else {
    renderQuestion();
  }
}

function showScore() {
  document.getElementById('quiz-progress').style.width = '100%';
  document.getElementById('quiz-body').style.display = 'none';
  const scoreEl = document.getElementById('quiz-score');
  scoreEl.className = 'quiz-score show';
  const pct = Math.round((score / perguntas.length) * 100);
  document.getElementById('score-big').textContent = `${score}/${perguntas.length}`;
  const msgs = [
    [80, '🏆 Excelente! Você domina o básico!'],
    [60, '👏 Muito bem! Continue praticando!'],
    [40, '📚 Bom progresso! Revise os conceitos.'],
    [0, '💪 Continue estudando, você vai melhorar!'],
  ];
  const msg = msgs.find(m => pct >= m[0]);
  document.getElementById('score-label').textContent = `${pct}% de aproveitamento — ${msg[1]}`;
}

function restartQuiz() {
  qIdx = 0; score = 0;
  document.getElementById('quiz-body').style.display = 'block';
  document.getElementById('quiz-score').className = 'quiz-score';
  renderQuestion();
}

renderQuestion();

/* ─── DESAFIOS ────────────────────────────────────── */
const desafios = [
  { num: '01', titulo: 'Olá, Mundo!', sub: 'Escreva um programa que imprima "Olá, Mundo!" no console', diff: 'easy', diffLabel: 'Fácil' },
  { num: '02', titulo: 'Soma de Dois Números', sub: 'Crie variáveis a=5 e b=3 e mostre a soma no console', diff: 'easy', diffLabel: 'Fácil' },
  { num: '03', titulo: 'Par ou Ímpar', sub: 'Use if/else para verificar se o número 7 é par ou ímpar', diff: 'easy', diffLabel: 'Fácil' },
  { num: '04', titulo: 'Contagem Regressiva', sub: 'Use um loop for para imprimir de 10 até 1', diff: 'med', diffLabel: 'Médio' },
  { num: '05', titulo: 'Função de Saudação', sub: 'Crie uma função que receba um nome e retorne "Olá, [nome]!"', diff: 'med', diffLabel: 'Médio' },
  { num: '06', titulo: 'Lista de Compras', sub: 'Crie um array com 5 itens e percorra-o com forEach', diff: 'med', diffLabel: 'Médio' },
  { num: '07', titulo: 'Objeto Pessoal', sub: 'Crie um objeto com nome, idade e cidade e mostre cada propriedade', diff: 'med', diffLabel: 'Médio' },
  { num: '08', titulo: 'Calculadora Simples', sub: 'Crie funções de soma, subtração, multiplicação e divisão', diff: 'hard', diffLabel: 'Difícil' },
  { num: '09', titulo: 'FizzBuzz', sub: 'Para 1-20: imprima Fizz (múlt. 3), Buzz (múlt. 5) ou FizzBuzz', diff: 'hard', diffLabel: 'Difícil' },
  { num: '10', titulo: 'Filtrar Array', sub: 'Use .filter() para manter apenas números pares de [1,2,3,4,5,6,7,8]', diff: 'hard', diffLabel: 'Difícil' },
];

const done = new Set(JSON.parse(sessionStorage.getItem('challenges') || '[]'));

const cl = document.getElementById('challenge-list');
desafios.forEach((d, i) => {
  const el = document.createElement('div');
  el.className = 'challenge-item' + (done.has(i) ? ' done' : '');
  el.dataset.idx = i;
  el.innerHTML = `
    <span class="challenge-num">${d.num}</span>
    <div class="challenge-info">
      <div class="challenge-title">${d.titulo}</div>
      <div class="challenge-sub">${d.sub}</div>
    </div>
    <span class="challenge-diff diff-${d.diff}">${d.diffLabel}</span>
    <div class="challenge-check">${done.has(i) ? '✓' : ''}</div>`;
  el.addEventListener('click', () => toggleChallenge(i, el));
  cl.appendChild(el);
});

function toggleChallenge(i, el) {
  if (done.has(i)) { done.delete(i); el.classList.remove('done'); el.querySelector('.challenge-check').textContent = ''; }
  else { done.add(i); el.classList.add('done'); el.querySelector('.challenge-check').textContent = '✓'; }
  sessionStorage.setItem('challenges', JSON.stringify([...done]));
}

/* ─── GLOSSÁRIO ───────────────────────────────────── */
const glossario = [
  { term: 'variável', def: 'Espaço na memória com nome que armazena um valor que pode mudar.' },
  { term: 'constante', def: 'Valor que não pode ser alterado após ser definido. Usa-se const em JS.' },
  { term: 'função', def: 'Bloco de código reutilizável que executa uma tarefa específica.' },
  { term: 'array', def: 'Lista ordenada de valores. Índice começa em 0. Ex: ["a","b","c"]' },
  { term: 'objeto', def: 'Coleção de pares chave:valor. Ex: { nome: "Mateus", idade: 20 }' },
  { term: 'loop', def: 'Estrutura que repete um bloco de código. Ex: for, while, forEach.' },
  { term: 'condição', def: 'Expressão verdadeira ou falsa usada em if/else para tomar decisões.' },
  { term: 'string', def: 'Texto entre aspas. Ex: "Olá mundo". Pode ser manipulado com métodos.' },
  { term: 'boolean', def: 'Valor verdadeiro (true) ou falso (false). Base da lógica de programação.' },
  { term: 'number', def: 'Tipo numérico em JS. Abrange inteiros e decimais. Ex: 42, 3.14' },
  { term: 'null', def: 'Ausência intencional de valor. Diferente de undefined (não definido).' },
  { term: 'undefined', def: 'Variável declarada mas sem valor atribuído ainda.' },
  { term: 'typeof', def: 'Operador que retorna o tipo de uma variável como string.' },
  { term: 'DOM', def: 'Document Object Model — estrutura em árvore do HTML acessível pelo JS.' },
  { term: 'evento', def: 'Ação do usuário (clique, tecla, scroll) que o JS pode "escutar" e reagir.' },
  { term: 'bug', def: 'Erro no código que causa comportamento inesperado. Debug = corrigir bugs.' },
  { term: 'algoritmo', def: 'Sequência lógica de passos para resolver um problema.' },
  { term: 'sintaxe', def: 'Regras de escrita de uma linguagem. Erro de sintaxe = código escrito errado.' },
  { term: 'compilar', def: 'Traduzir código para linguagem de máquina. JS é interpretado, não compilado.' },
  { term: 'console', def: 'Ferramenta de depuração do navegador. console.log() imprime mensagens.' },
  { term: 'parâmetro', def: 'Variável declarada na definição de uma função para receber argumentos.' },
  { term: 'retorno', def: 'Valor que uma função devolve com return. Pode ser usado fora dela.' },
  { term: 'escopo', def: 'Contexto onde uma variável existe e pode ser acessada (local ou global).' },
  { term: 'callback', def: 'Função passada como argumento para outra função, chamada depois.' },
];

const gg = document.getElementById('glossario-grid');
glossario.forEach(g => {
  const el = document.createElement('div');
  el.className = 'glossario-card';
  el.dataset.term = g.term;
  el.innerHTML = `<div class="glossario-term">${g.term}</div><div class="glossario-def">${g.def}</div>`;
  gg.appendChild(el);
});

function filterGlossario() {
  const q = document.getElementById('glossario-input').value.toLowerCase();
  document.querySelectorAll('.glossario-card').forEach(card => {
    card.classList.toggle('hidden', !card.dataset.term.includes(q) && !card.querySelector('.glossario-def').textContent.toLowerCase().includes(q));
  });
}

/* ─── Update cursor listeners for new interactive els ─── */
document.querySelectorAll('.learn-tab, .run-btn, .reset-btn, .quiz-opt, .quiz-next, .concept-toggle, .syntax-pill, .challenge-item, .learn-tab').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});
