import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const contactAnimation = () => {

  // Desktop Only
  if(window.innerWidth >= 1024){

    gsap.from(".contact-page h1", {

      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",

    })

    gsap.from(".contact-page form", {

      y: 80,
      opacity: 0,
      duration: 1,
      delay: 0.3,

      scrollTrigger: {
        trigger: ".contact-page form",
        start: "top 80%",
      },

    })

  }

}