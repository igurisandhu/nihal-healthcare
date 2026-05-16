export const whatsappButtonFunctionality = () => {

  const button = document.querySelector(
    '.whatsapp-floating-btn'
  )

  if(!button) return

  window.addEventListener('scroll', () => {

    if(window.scrollY > 100){

      button.classList.add('opacity-100')

      button.classList.remove('opacity-0')

    }

    else{

      button.classList.add('opacity-100')

    }

  })

}