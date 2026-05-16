/**
 * Category Page Animations
 * GSAP animations for category page
 */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function categoryPageAnimation() {
  // Animate variant cards on scroll
  const cards = document.querySelectorAll('.variant-card');

  cards.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none none',
      },
    });
  });

  // Animate hero section
  const hero = document.querySelector('.category-page > section:first-child');
  if (hero) {
    gsap.from(hero, {
      opacity: 0,
      y: -20,
      duration: 0.8,
    });
  }
}
