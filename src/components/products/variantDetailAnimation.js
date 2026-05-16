/**
 * Variant Detail Page Animations
 * GSAP animations for variant detail pages
 */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function variantDetailAnimation() {
  // Animate hero product image
  const productImage = document.querySelector('.variant-detail-page img');
  if (productImage) {
    gsap.from(productImage, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
    });
  }

  // Animate specifications table rows
  const tableRows = document.querySelectorAll('table tbody tr');
  tableRows.forEach((row, index) => {
    gsap.from(row, {
      opacity: 0,
      x: -20,
      duration: 0.4,
      delay: index * 0.05,
      scrollTrigger: {
        trigger: row,
        start: 'top bottom-=50',
        toggleActions: 'play none none none',
      },
    });
  });

  // Animate gauge pills
  const gaugePills = document.querySelectorAll('.gauge-pill');
  gaugePills.forEach((pill, index) => {
    gsap.from(pill, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      delay: index * 0.05,
      scrollTrigger: {
        trigger: pill,
        start: 'top bottom-=50',
        toggleActions: 'play none none none',
      },
    });
  });

  // Animate sections on scroll
  const sections = document.querySelectorAll('.variant-detail-page section');
  sections.forEach((section, index) => {
    gsap.from(section, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom-=100',
        toggleActions: 'play none none none',
      },
    });
  });
}
