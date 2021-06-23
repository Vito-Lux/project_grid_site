let tl = gsap.timeline();

tl.from('.header-logo', { duration: 1, x: -500, opacity: 0 })
  .from('.hero__subtext', { duration: 1.5, x: -250, opacity: 0 })
  .from('.hero__title', { duration: 1.25, x: -200, opacity: 0 }, '-=1')
  .from('.hero__text', { duration: 1, x: -150, opacity: 0 }, '-=1')
  .from('.hero__left-button', { duration: 0.5, opacity: 0 })
  .from('.hero__right-button', { duration: 0.5, opacity: 0 });

gsap.from('.after-hero__left-column', {
  scrollTrigger: '.after-hero__left-column',
  duration: 1.25,
  x: -500,
  opacity: 0,
});

gsap.from('.after-hero__right-column', {
  scrollTrigger: '.after-hero__right-column',
  duration: 1,
  x: 300,
  opacity: 0,
});

gsap.from('.about__left-block', {
  scrollTrigger: '.about__left-block',
  duration: 1,
  y: 300,
  opacity: 0,
});

gsap.from('.about__right-block', {
  scrollTrigger: '.about__right-block',
  duration: 1,
  x: -500,
  opacity: 0,
});

gsap.from('.help__title', {
  scrollTrigger: '.help__title',
  duration: 0.5,
  y: 300,
  opacity: 0,
});

gsap.from('.help-list__item', {
  scrollTrigger: '.help-list__item',
  duration: 0.25,
  x: -400,
  opacity: 0,
});

gsap.from('.help-list__title', {
  scrollTrigger: '.help-list__title',
  duration: 0.5,
  x: -500,
  opacity: 0,
});

gsap.from('.sports-list__item', {
  scrollTrigger: '.sports-list__item',
  duration: 1.25,
  opacity: 0,
  x: -300,
});

gsap.from('.sports-list__title', {
  scrollTrigger: '.sports-list__title',
  duration: 1.5,
  opacity: 0,
  x: 400,
});

gsap.from('.sport-guide-list__title', {
  scrollTrigger: '.sport-guide-list__title',
  duration: 0.75,
  y: -200,
  opacity: 0,
});

gsap.from(
  '.sport-guide-list__text',
  {
    scrollTrigger: '.sport-guide-list__text',
    duration: 0.75,
    y: -300,
    opacity: 0,
  },
  '-=1',
);

gsap.from('.fact__left-block', {
  scrollTrigger: '.fact__left-block',
  duration: 1,
  x: -500,
  opacity: 0,
});

gsap.from('.fact__right-block', {
  scrollTrigger: '.fact__right-block',
  duration: 1,
  x: 500,
  opacity: 0,
});

gsap.from('.contact__left-block', {
  scrollTrigger: '.contact__left-block',
  duration: 1,
  y: -500,
  opacity: 0,
});

gsap.from('.contact__right-block', {
  scrollTrigger: '.contact__right-block',
  duration: 1,
  y: 500,
  opacity: 0,
});

gsap.from('.footer-nav__left-block', {
  scrollTrigger: '.footer-nav__left-block',
  duration: 1,
  x: -500,
  opacity: 0,
});

gsap.from('.footer-nav__row', {
  scrollTrigger: '.footer-nav__row',
  duration: 1,
  x: 500,
  opacity: 0,
});
