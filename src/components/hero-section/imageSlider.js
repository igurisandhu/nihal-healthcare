import hero1 from '../../assets/images/hero-1.jpg'
import hero2 from '../../assets/images/hero-2.avif'
import hero3 from '../../assets/images/hero-3.avif'
import hero4 from '../../assets/images/hero-4.jpg'

export const imageSlider = () => {

  const heroImage = document.querySelector("#hero-image")

  const images = [
    hero1,
    hero2,
    hero3,
    hero4,
  ]

  let current = 0

  setInterval(() => {

    current++

    if(current >= images.length){
      current = 0
    }

    heroImage.style.opacity = 0

    setTimeout(() => {

      heroImage.src = images[current]

      heroImage.style.opacity = 1

    }, 300)

  }, 2000)

}