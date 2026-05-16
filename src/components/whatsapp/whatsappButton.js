export const whatsappButton = () => {

  const phoneNumber = '919218511425'

  const message = encodeURIComponent(

`Hello Nihal Healthcare,

I would like to know more about your healthcare manufacturing products and certifications.

Please share additional details.

Thank you.`

  )

  return `

    <a
      href="https://wa.me/${phoneNumber}?text=${message}"
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

  `

}