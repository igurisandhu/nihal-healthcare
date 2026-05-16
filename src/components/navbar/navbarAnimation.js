import gsap from "gsap"

export const navbarAnimation = () => {

  gsap.from(".navbar", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.in",
  })

}