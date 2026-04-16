(function () {
  'use strict';

  function initCarousel(root) {
    var slides = root.querySelectorAll('[data-now-slide]');
    var dots = root.querySelectorAll('[data-now-dot]');
    var prev = root.querySelector('[data-now-prev]');
    var next = root.querySelector('[data-now-next]');

    if (slides.length < 2) {
      return;
    }

    root.classList.add('js-enabled');

    var index = 0;

    function show(i) {
      index = (i + slides.length) % slides.length;
      for (var s = 0; s < slides.length; s++) {
        var active = s === index;
        slides[s].classList.toggle('is-active', active);
      }
      for (var d = 0; d < dots.length; d++) {
        var dotActive = d === index;
        dots[d].classList.toggle('is-active', dotActive);
        if (dotActive) {
          dots[d].setAttribute('aria-current', 'true');
        } else {
          dots[d].removeAttribute('aria-current');
        }
      }
    }

    if (prev) {
      prev.addEventListener('click', function () { show(index - 1); });
    }
    if (next) {
      next.addEventListener('click', function () { show(index + 1); });
    }
    for (var d = 0; d < dots.length; d++) {
      (function (i) {
        dots[i].addEventListener('click', function () { show(i); });
      })(d);
    }

    show(0);
  }

  function init() {
    var carousels = document.querySelectorAll('[data-now-carousel]');
    for (var i = 0; i < carousels.length; i++) {
      initCarousel(carousels[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
