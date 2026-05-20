export const faqAnimation = () => {
  const triggers = document.querySelectorAll('.faq-trigger')

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item')
      const answer = item.querySelector('.faq-answer')
      const icon = trigger.querySelector('.faq-icon')
      const isOpen = trigger.getAttribute('aria-expanded') === 'true'

      // Close all other items
      document.querySelectorAll('.faq-item').forEach((otherItem) => {
        if (otherItem !== item) {
          const otherTrigger = otherItem.querySelector('.faq-trigger')
          const otherAnswer = otherItem.querySelector('.faq-answer')
          const otherIcon = otherItem.querySelector('.faq-icon')
          otherTrigger.setAttribute('aria-expanded', 'false')
          otherAnswer.style.maxHeight = '0px'
          otherIcon.style.transform = 'rotate(0deg)'
          otherItem.classList.remove('border-cyan-300')
          otherItem.classList.add('border-slate-200')
        }
      })

      // Toggle current item
      if (isOpen) {
        trigger.setAttribute('aria-expanded', 'false')
        answer.style.maxHeight = '0px'
        icon.style.transform = 'rotate(0deg)'
        item.classList.remove('border-cyan-300')
        item.classList.add('border-slate-200')
      } else {
        trigger.setAttribute('aria-expanded', 'true')
        answer.style.maxHeight = answer.scrollHeight + 'px'
        icon.style.transform = 'rotate(180deg)'
        item.classList.remove('border-slate-200')
        item.classList.add('border-cyan-300')
      }
    })
  })
}
