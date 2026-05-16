export const feedbackFunctionality = () => {

  // STAR RATING
  const stars = document.querySelectorAll('.rating-star')

  stars.forEach((star, index) => {

    star.addEventListener('click', () => {

      stars.forEach((item, i) => {

        if(i <= index){

          item.classList.remove('text-slate-300')

          item.classList.add('text-yellow-400')

        }

        else{

          item.classList.remove('text-yellow-400')

          item.classList.add('text-slate-300')

        }

      })

    })

  })

  // CATEGORY OPTIONS
  const options = document.querySelectorAll('.feedback-option')

  options.forEach(option => {

    option.addEventListener('click', () => {

      options.forEach(item => {

        item.classList.remove(
          'bg-slate-900',
          'text-white'
        )

        item.classList.add(
          'bg-stone-50',
          'text-slate-700'
        )

      })

      option.classList.remove(
        'bg-stone-50',
        'text-slate-700'
      )

      option.classList.add(
        'bg-slate-900',
        'text-white'
      )

    })

  })

  // FEEDBACK TAGS
  const tags = document.querySelectorAll('.feedback-tag')

  tags.forEach(tag => {

    tag.addEventListener('click', () => {

      tag.classList.toggle('bg-cyan-500')

      tag.classList.toggle('text-white')

      tag.classList.toggle('bg-cyan-50')

      tag.classList.toggle('text-cyan-600')

    })

  })

}