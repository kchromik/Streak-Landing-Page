(() => {
  const menu = document.querySelector('.mobile-menu');

  if (menu) {
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => { menu.open = false; });
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.open) {
        menu.open = false;
        menu.querySelector('summary').focus();
      }
    });

    document.addEventListener('click', event => {
      if (!menu.contains(event.target)) menu.open = false;
    });

    window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
      if (event.matches) menu.open = false;
    });
  }

  document.querySelectorAll('[data-year]').forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });

    document.querySelectorAll('.reveal').forEach(element => {
      element.classList.add('will-reveal');
      observer.observe(element);
    });

    reducedMotion.addEventListener('change', event => {
      if (event.matches) {
        observer.disconnect();
        document.querySelectorAll('.will-reveal').forEach(element => {
          element.classList.add('is-visible');
        });
      }
    });
  }
})();
