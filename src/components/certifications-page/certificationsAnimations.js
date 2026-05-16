import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const certificationsAnimation = () => {

  // Desktop Only
  if(window.innerWidth >= 1024){

    // Cards
    gsap.utils.toArray(".certification-card").forEach((card, index) => {

      gsap.from(card, {

        opacity: 0,
        y: 30,
        scale: 0.96,
        duration: 0.7,
        ease: "power2.out",

        scrollTrigger: {
          trigger: card,
          start: "top 88%",
        },

      })

    })

  }

}