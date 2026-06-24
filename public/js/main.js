// ---------- Single-source images (assigned to carousel + tabs to avoid duplication) ----------
const IMG = {
  entrance: '/images/entrance.jpg',
  gastronomie: '/images/gastronomie.jpg',
  lodge: '/images/lodge.jpg',
  shop: '/images/shop.jpg',
  baeckerei: '/images/baeckerei.jpg',
  unit: '/images/unit.jpg',
  industrie: '/images/industrie.jpg',
};
document.querySelectorAll('.carousel-slide[data-src]').forEach(el => {
  el.style.backgroundImage = "url('" + IMG[el.dataset.src] + "')";
});
document.querySelectorAll('.tab-img[data-src]').forEach(el => {
  el.src = IMG[el.dataset.src];
});

// ---------- Header: shrink + on-dark over hero ----------
const header = document.getElementById('site-header');
const hero = document.getElementById('hero');
function updateHeader(){
  const heroH = hero.offsetHeight;
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 40);
  header.classList.toggle('on-dark', y < heroH - 100);
}
window.addEventListener('scroll', updateHeader, { passive:true });
window.addEventListener('resize', updateHeader);
updateHeader();

// ---------- Hero carousel ----------
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const dotsWrap = document.getElementById('carouselDots');
let current = 0, timer = null;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
slides.forEach((_, i) => {
  const b = document.createElement('button');
  b.setAttribute('aria-label', 'Bild ' + (i+1));
  if (i === 0) b.classList.add('active');
  b.addEventListener('click', () => { goTo(i); restart(); });
  dotsWrap.appendChild(b);
});
const dots = Array.from(dotsWrap.children);
function goTo(i){
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = i;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}
function next(){ goTo((current + 1) % slides.length); }
function restart(){ if (timer) clearInterval(timer); if (!reduceMotion) timer = setInterval(next, 5000); }
restart();

// ---------- Application tabs ----------
const tabs = Array.from(document.querySelectorAll('.tab'));
const tabImgs = Array.from(document.querySelectorAll('.tab-img'));
const tabCaption = document.getElementById('tabCaption');
const captions = [
  ['Hotellerie & Lodges','Lobbys, Bergrestaurants und Shop-Eingänge — Komfort für Gäste, ganzjährig und diskret in die Architektur integriert.'],
  ['Gastronomie','Restaurants und Gasthäuser mit hochfrequentierten Eingängen — Gäste herein, Insekten draussen.'],
  ['Bäckerei & Konditorei','Schutz für offene Auslagen und Frischeprodukte — entscheidend für die Lebensmittelhygiene.'],
  ['Lebensmittelverarbeitende Industrie','Produktion, Verarbeitung und Lager — Hygiene und Klimatrennung an stark genutzten Zugängen.']
];
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const idx = +tab.dataset.tab;
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    tabImgs.forEach(im => im.classList.toggle('active', +im.dataset.img === idx));
    tabCaption.innerHTML = '<b>' + captions[idx][0] + '</b>' + captions[idx][1];
  });
});

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));