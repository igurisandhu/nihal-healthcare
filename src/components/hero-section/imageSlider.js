import gsap from "gsap";

import hero1 from '../../assets/images/hero-1.jpg';
import hero2 from '../../assets/images/hero-2.avif';
import hero3 from '../../assets/images/hero-3.avif';
import hero4 from '../../assets/images/hero-4.jpg';

export const imageSlider = () => {

  const heroImage = document.querySelector("#hero-image");

  const images = [
    hero1,
    hero2,
    hero3,
    hero4,
  ];

  let current = 0;

  setInterval(() => {

    // Slide current image out to right
    gsap.to(heroImage, {
      x: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power3.inOut",

      onComplete: () => {

        current++;

        if (current >= images.length) {
          current = 0;
        }

        // Change image
        heroImage.src = images[current];

        // Set next image position from left
        gsap.set(heroImage, {
          x: -100,
          opacity: 0,
        });

        // Slide new image in
        gsap.to(heroImage, {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power4.out",
        });

      }
    });

  }, 2500);

};