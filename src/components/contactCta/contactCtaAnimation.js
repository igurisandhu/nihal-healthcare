import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const contactCtaAnimation = () => {

  // Desktop Only
  if(window.innerWidth >= 1024){

    gsap.from(".contact-cta-title", {

      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".contact-cta-section",
        start: "top 75%",
      },

    })

  }

}