function validate() {
    const pattern = /\w+@\w+\.\w+/gm;
    const email = document.getElementById('email');
    email.addEventListener('change', () => {
        if (!pattern.test(email.value)) {
            email.classList.add('error');
        } else {
            email.removeAttribute('class');
        }
    })
}