import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const aboutAnimation = () => {

  // Desktop Only
  if(window.innerWidth >= 1024){

    // HERO CONTENT
    gsap.from('.about-hero-content', {

      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: 'power3.out',

    })

    // HERO IMAGE
    gsap.from('.about-hero-image', {

      opacity: 0,
      scale: 0.9,
      duration: 1.3,
      delay: 0.2,
      ease: 'power3.out',

    })

    // OVERVIEW
    gsap.from('.about-overview', {

      opacity: 0,
      y: 80,
      duration: 1,

      scrollTrigger: {

        trigger: '.about-overview',
        start: 'top 85%',

      },

    })

    // MISSION CARDS
    gsap.utils.toArray('.about-card').forEach((card, index) => {

      gsap.from(card, {

        opacity: 0,
        y: 60,
        duration: 1,
        delay: index * 0.15,

        scrollTrigger: {

          trigger: card,
          start: 'top 88%',

        },

      })

    })

    // WHY US CARDS
    gsap.utils.toArray('.why-card').forEach((card, index) => {

      gsap.from(card, {

        opacity: 0,
        y: 60,
        duration: 0.9,
        delay: index * 0.1,

        scrollTrigger: {

          trigger: card,
          start: 'top 90%',

        },

      })

    })

    // CTA
    gsap.from('.about-cta', {

      opacity: 0,
      y: 80,
      duration: 1,

      scrollTrigger: {

        trigger: '.about-cta',
        start: 'top 85%',

      },

    })

  }

}