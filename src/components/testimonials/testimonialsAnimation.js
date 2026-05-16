import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const testimonialsAnimation = () => {

  // Desktop Only
  if(window.innerWidth >= 1024){

    gsap.from(".testimonial-card", {

      y: 80,
      opacity: 20,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 75%",
      },

    })

  }

}