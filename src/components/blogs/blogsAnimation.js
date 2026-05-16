import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const blogsAnimation = () => {

  // HERO ANIMATION
  gsap.from('.blogs-grid-section h2, .blogs-grid-section h1', {

    opacity: 20,

    y: 60,

    duration: 1,

    ease: 'power3.out',

  })

  gsap.from('.blogs-grid-section p', {

    opacity: 20,

    y: 40,

    duration: 1,

    delay: 0.2,

    ease: 'power3.out',

  })

  // BLOG CARDS
  gsap.from('.blogs-grid-section .group', {

    scrollTrigger: {

      trigger: '.blogs-grid-section',

      start: 'top 75%',

    },

    opacity: 20,

    y: 80,

    stagger: 0.2,

    duration: 1,

    ease: 'power3.out',

  })

  // SINGLE BLOG IMAGE
  gsap.from('.single-blog-image', {

    scrollTrigger: {

      trigger: '.single-blog-image',

      start: 'top 80%',

    },

    opacity: 20,

    scale: 0.9,

    duration: 1.2,

    ease: 'power3.out',

  })

  // SINGLE BLOG CONTENT
  gsap.from('.single-blog-content p', {

    scrollTrigger: {

      trigger: '.single-blog-content',

      start: 'top 80%',

    },

    opacity: 20,

    y: 50,

    stagger: 0.2,

    duration: 1,

    ease: 'power3.out',

  })

}