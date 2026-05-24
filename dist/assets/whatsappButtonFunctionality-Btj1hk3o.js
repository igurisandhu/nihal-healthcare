var e=()=>{let e=document.querySelector(`#menu-btn`),t=document.querySelector(`#close-menu`),n=document.querySelector(`#mobile-menu`),r=document.querySelector(`#overlay`);e.addEventListener(`click`,()=>{n.style.right=`0`,r.classList.remove(`opacity-0`,`invisible`),r.classList.add(`opacity-100`,`visible`)});let i=()=>{n.style.right=`-100%`,r.classList.remove(`opacity-100`,`visible`),r.classList.add(`opacity-0`,`invisible`)};t.addEventListener(`click`,i),r.addEventListener(`click`,i),window.addEventListener(`resize`,()=>{window.innerWidth>=1024&&i()})},t=()=>`

    <a
      href="https://wa.me/919218511425?text=Hello%20Nihal%20Healthcare%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20healthcare%20manufacturing%20products%20and%20certifications.%0A%0APlease%20share%20additional%20details.%0A%0AThank%20you."
      target="_blank"
      class="
        fixed
        bottom-6
        right-6
        z-[999]
        w-[64px]
        h-[64px]
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-2xl
        hover:scale-110
        transition-all
        duration-300
      "
    >

      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        class="
          w-8
          h-8
          object-contain
        "
      />

    </a>

  `,n=()=>{let e=document.querySelector(`.whatsapp-floating-btn`);e&&window.addEventListener(`scroll`,()=>{window.scrollY>100?(e.classList.add(`opacity-100`),e.classList.remove(`opacity-0`)):e.classList.add(`opacity-100`)})};export{t as n,e as r,n as t};