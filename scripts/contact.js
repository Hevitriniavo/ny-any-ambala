document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const payload = {};

        for (const [key, value] of formData.entries()) {
            payload[key] = value;
        }

        console.table(payload);

        form.reset();
    });
});
