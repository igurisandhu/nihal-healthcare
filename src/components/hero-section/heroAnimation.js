import gsap from "gsap"

export const heroAnimation = () => {

  const tl = gsap.timeline()

  tl.from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })

  .from(".hero-desc", {
    y: 40,
    opacity: 0,
    duration: 0.8,
  }, "-=0.5")

  .from("#hero-image", {
    scale: 1.2,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  }, "-=0.8")

}