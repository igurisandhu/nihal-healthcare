// feedbackFunctionality.js

export const feedbackFunctionality = () => {

  // STAR RATING
  const ratingGroups = document.querySelectorAll('.star-rating');

  ratingGroups.forEach(group => {

    const stars = group.querySelectorAll('.rating-star');

    stars.forEach((star, index) => {

      star.addEventListener('click', () => {

        // UPDATE STAR COLORS
        stars.forEach((item, i) => {

          if (i <= index) {

            item.classList.remove('text-slate-300');

            item.classList.add(
              'text-yellow-400',
              'scale-110'
            );

          }

          else {

            item.classList.remove(
              'text-yellow-400',
              'scale-110'
            );

            item.classList.add('text-slate-300');

          }

        });

        // SAVE RATING VALUE
        const ratingCard =
          group.closest('.rating-card');

        const hiddenInput =
          ratingCard.querySelector('.rating-value');

        if (hiddenInput) {

          hiddenInput.value = index + 1;

        }

      });

    });

  });


  // FEEDBACK FORM SUBMIT
  const form = document.querySelector('#feedback-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    const name = formData.get('name');

    const email = formData.get('email');

    const phone = formData.get('phone');

    const message = formData.get('message');

    // GET ALL RATINGS
    const ratings = [];

    form
      .querySelectorAll('.rating-value')
      .forEach(input => {

        ratings.push(
          `${input.name}: ${input.value}/5`
        );

      });

    const whatsappMessage = `New Feedback Submission

Name: ${name}

Email: ${email}

Phone: ${phone}

${ratings.join('\n')}

Additional Feedback:
${message}`;

    const phoneNumber = '919218511425';

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappURL;

    form.reset();

  });

};