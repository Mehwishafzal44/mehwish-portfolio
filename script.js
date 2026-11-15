// JavaScript interaction for the portfolio contact form

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('fullName').value.trim();
        const messageBox = document.getElementById('formMessage');

        messageBox.textContent =
            `Thank you, ${name}! Your demo message has been received.`;

        messageBox.className = 'mt-3 text-success fw-semibold';

        contactForm.reset();
    });
}