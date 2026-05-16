import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const timelineAnimation = () => {

  // Desktop Only
  if(window.innerWidth >= 1024){

    // Hero Animation
    gsap.from(".history-hero h1", {

      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",

    })

    gsap.from(".history-hero p", {

      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.3,

    })

    // Timeline Cards
    gsap.utils.toArray(".timeline-card").forEach((card, index) => {

      gsap.from(card, {

        opacity: 0,
        y: 120,
        duration: 1,
        ease: "power4.out",

        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },

      })

    })

  }

}