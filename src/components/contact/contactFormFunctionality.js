export const contactFormFunctionality = () => {

  const form = document.querySelector('#contact-form');

  if (!form) return;

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    const name = formData.get('name');

    const email = formData.get('email');

    const subject = formData.get('subject');

    const message = formData.get('message');

    const whatsappMessage = `New Contact Form Message

Name: ${name}

Email: ${email}

Subject: ${subject}

Message:
${message}`;

    const phoneNumber = '919218511425';

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // REDIRECT TO WHATSAPP
    window.location.href = whatsappURL;

    form.reset();

  });

};