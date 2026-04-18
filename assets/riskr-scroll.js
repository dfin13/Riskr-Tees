(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const TARGETS = [
    '.riskr-about__section',
    '.riskr-about__stats',
    '.riskr-investors__section',
    '.riskr-investors__metrics',
    '.riskr-press__quote',
    '.riskr-careers__job',
    '.riskr-careers__culture',
    '.riskr-careers__benefits',
    '.riskr-mission__inner',
  ].join(',');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('riskr-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  function init() {
    document.querySelectorAll(TARGETS).forEach((el) => {
      el.classList.add('riskr-reveal');
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
