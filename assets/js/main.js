// JS mínimo. La web funciona sin él; solo añade dos cosas:
// 1) menú desplegable en móvil; 2) aparición suave de las imágenes de Selected Work (.reveal).
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var close = function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = document.documentElement.lang === 'es' ? 'Menú' : 'Menu';
    };
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = document.documentElement.lang === 'es' ? (open ? 'Cerrar' : 'Menú') : (open ? 'Close' : 'Menu');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { close(); toggle.focus(); }
    });
  }

  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach(function (el) { io.observe(el); });
})();

// Project image lightbox: all images inside project pages can be enlarged and browsed.
(function () {
  var spanish = document.documentElement.lang === 'es';
  var main = document.querySelector('main.content');
  if (!main || document.body.classList.contains('home')) return;
  var figures = Array.from(main.querySelectorAll('figure')).filter(function (f) { return f.querySelector('img'); });
  if (!figures.length) return;
  main.classList.add('project-gallery');
  var imgs = figures.map(function(f){ return f.querySelector('img'); });
  var box = document.createElement('div'); box.className='lightbox'; box.setAttribute('role','dialog'); box.setAttribute('aria-modal','true'); box.setAttribute('aria-label',spanish ? 'Galería de imágenes' : 'Image gallery');
  box.innerHTML='<button class="lightbox-close" type="button">Close</button><button class="lightbox-prev" type="button" aria-label="Previous image">‹</button><img alt=""><button class="lightbox-next" type="button" aria-label="Next image">›</button><div class="lightbox-count"></div>';
  if (spanish) { box.querySelector('.lightbox-close').textContent='Cerrar'; box.querySelector('.lightbox-prev').setAttribute('aria-label','Imagen anterior'); box.querySelector('.lightbox-next').setAttribute('aria-label','Imagen siguiente'); }
  document.body.appendChild(box);
  var big=box.querySelector('img'), count=box.querySelector('.lightbox-count'), i=0;
  function show(n){i=(n+imgs.length)%imgs.length; big.src=imgs[i].currentSrc||imgs[i].src; big.alt=imgs[i].alt||''; count.textContent=(i+1)+' / '+imgs.length;}
  function open(n){show(n);box.classList.add('is-open');document.body.style.overflow='hidden';box.querySelector('.lightbox-close').focus();}
  function close(){box.classList.remove('is-open');document.body.style.overflow='';}
  figures.forEach(function(f,n){f.tabIndex=0;f.setAttribute('role','button');f.setAttribute('aria-label',spanish ? 'Abrir imagen '+(n+1)+' en la galería' : 'Open image '+(n+1)+' in gallery');f.addEventListener('click',function(){open(n)});f.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(n)}})});
  box.querySelector('.lightbox-close').onclick=close; box.querySelector('.lightbox-prev').onclick=function(e){e.stopPropagation();show(i-1)}; box.querySelector('.lightbox-next').onclick=function(e){e.stopPropagation();show(i+1)};
  box.addEventListener('click',function(e){if(e.target===box)close()});
  document.addEventListener('keydown',function(e){if(!box.classList.contains('is-open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});
})();

// Desktop sidebar position. The menu keeps its native wheel/touch/keyboard scroll.
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  var dot = document.createElement('span');
  dot.className = 'sidebar-scroll-dot';
  dot.setAttribute('aria-hidden', 'true');
  dot.hidden = true;
  document.body.appendChild(dot);
  var desktop = window.matchMedia('(min-width: 901px)');
  function update() {
    var range = header.scrollHeight - header.clientHeight;
    dot.hidden = !desktop.matches || range <= 1;
    if (dot.hidden) return;
    var progress = Math.max(0, Math.min(1, header.scrollTop / range));
    var travel = Math.max(0, header.clientHeight - 32);
    dot.style.transform = 'translateY(' + (12 + progress * travel) + 'px)';
  }
  header.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  if ('ResizeObserver' in window) {
    var observer = new ResizeObserver(update);
    observer.observe(header);
    var nav = header.querySelector('.nav');
    if (nav) observer.observe(nav);
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(update);
  update();
})();

// INTERVAL uses local device time; read a fresh Date on every tick.
(function () {
  var clock = document.querySelector('.interval-clock');
  if (!clock) return;
  function update() {
    var now = new Date();
    var parts = [now.getHours(), now.getMinutes(), now.getSeconds()];
    clock.textContent = parts.map(function (part) { return String(part).padStart(2, '0'); }).join(':');
    clock.setAttribute('datetime', clock.textContent);
  }
  update();
  window.setInterval(update, 1000);
})();
