import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const leadershipAnimation = () => {

  gsap.from('.leadership-card', {

    scrollTrigger: {

      trigger: '.leadership-section',

      start: 'top 80%',

    },

    opacity: 0,

    y: 80,

    stagger: 0.2,

    duration: 1,

    ease: 'power3.out',

  })

}