(function () {
  'use strict';

  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const skillFills = document.querySelectorAll('.skill-fill');
  const projectCards = document.querySelectorAll('.project-card');

  // ===== Mobile menu =====
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-label',
        navLinks.classList.contains('open') ? '메뉴 닫기' : '메뉴 열기');
    });

    navItems.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // ===== Active nav link on scroll =====
  function setActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(function (section) {
      const id = section.getAttribute('id');
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;

      if (scrollY >= top && scrollY < top + height) {
        navItems.forEach(function (item) {
          item.classList.remove('active');
          if (item.getAttribute('href') === '#' + id) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNav);
  setActiveNav();

  // ===== Skill bars animate on scroll =====
  function animateSkillBars() {
    skillFills.forEach(function (bar) {
      const level = bar.getAttribute('data-level');
      const rect = bar.getBoundingClientRect();
      const inView = rect.top < window.innerHeight - 80;

      if (inView && level) {
        bar.style.setProperty('--level', level + '%');
        bar.classList.add('animated');
      }
    });
  }

  window.addEventListener('scroll', animateSkillBars);
  window.addEventListener('load', animateSkillBars);

  // ===== Project cards fade in on scroll =====
  function showProjectCards() {
    projectCards.forEach(function (card) {
      const rect = card.getBoundingClientRect();
      const inView = rect.top < window.innerHeight - 60;

      if (inView) {
        card.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', showProjectCards);
  window.addEventListener('load', showProjectCards);

  // ===== Header background on scroll =====
  function updateHeader() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader);
})();
