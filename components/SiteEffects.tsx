'use client';

import { useEffect } from 'react';

export default function SiteEffects() {
  useEffect(() => {
    document.documentElement.classList.add('js');

    const header = document.getElementById('site-header');
    const hero = document.getElementById('hero');

    const onScroll: (() => void)[] = [];

    if (header && hero) {
      const updateHeader = () => {
        const heroH = hero.offsetHeight;
        const y = window.scrollY;
        header.classList.toggle('scrolled', y > 40);
        header.classList.toggle('on-dark', y < heroH - 100);
      };
      window.addEventListener('scroll', updateHeader, { passive: true });
      window.addEventListener('resize', updateHeader);
      updateHeader();
      onScroll.push(() => {
        window.removeEventListener('scroll', updateHeader);
        window.removeEventListener('resize', updateHeader);
      });
    }

    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const dotsWrap = document.getElementById('carouselDots');
    const heroSection = document.getElementById('hero');
    const dotLabel = heroSection?.dataset.carouselDotLabel || 'Bild';
    let current = 0;
    let timer: ReturnType<typeof setInterval> | null = null;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (dotsWrap && slides.length > 0) {
      dotsWrap.replaceChildren();
      slides.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.setAttribute('aria-label', `${dotLabel} ${i + 1}`);
        if (i === 0) btn.classList.add('active');
        btn.addEventListener('click', () => {
          goTo(i);
          restart();
        });
        dotsWrap.appendChild(btn);
      });

      const dots = Array.from(dotsWrap.children);

      function goTo(i: number) {
        slides[current]?.classList.remove('active');
        dots[current]?.classList.remove('active');
        current = i;
        slides[current]?.classList.add('active');
        dots[current]?.classList.add('active');
      }

      function next() {
        goTo((current + 1) % slides.length);
      }

      function restart() {
        if (timer) clearInterval(timer);
        if (!reduceMotion) timer = setInterval(next, 5000);
      }

      restart();
      onScroll.push(() => {
        if (timer) clearInterval(timer);
      });
    }

    const tabs = Array.from(document.querySelectorAll('.tab'));
    const tabImgs = Array.from(document.querySelectorAll('.tab-img'));
    const tabCaption = document.getElementById('tabCaption');
    const einsatzSection = document.getElementById('einsatz');
    const captionsEl = document.getElementById('tab-captions-data');
    const captions: string[][] = einsatzSection?.dataset.tabCaptions
      ? JSON.parse(einsatzSection.dataset.tabCaptions)
      : captionsEl
        ? JSON.parse(captionsEl.textContent || '[]')
        : [];

    const tabHandlers: Array<{ tab: Element; handler: () => void }> = [];
    tabs.forEach((tab) => {
      const handler = () => {
        const idx = Number((tab as HTMLElement).dataset.tab);
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        tabImgs.forEach((img) =>
          img.classList.toggle('active', Number((img as HTMLElement).dataset.img) === idx),
        );
        if (tabCaption && captions[idx]) {
          tabCaption.innerHTML = `<b>${captions[idx][0]}</b>${captions[idx][1]}`;
        }
      };
      tab.addEventListener('click', handler);
      tabHandlers.push({ tab, handler });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in');
        return;
      }
      io.observe(el);
    });

    return () => {
      onScroll.forEach((cleanup) => cleanup());
      tabHandlers.forEach(({ tab, handler }) => tab.removeEventListener('click', handler));
      io.disconnect();
      document.documentElement.classList.remove('js');
    };
  }, []);

  return null;
}
