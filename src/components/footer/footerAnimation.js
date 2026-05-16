import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const footerAnimation = () => {

  // Desktop Only
  if(window.innerWidth >= 1024){

    gsap.from(".footer-section", {

      opacity: 0,
      y: 50,
      duration: 1,

      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 90%",
      },

    })

  }

}