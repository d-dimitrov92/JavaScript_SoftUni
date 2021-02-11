function validate() {
    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const passField = document.getElementById('password');
    const confirmPassField = document.getElementById('confirm-password');
    const isCompany = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo')
    const submitBtn = document.getElementById('submit');
    const emailPattern = /\w+@\w+\.\w+/gm;
    const usernamePattern = /^[A-Za-z0-9]{3,20}$/gm;
    const companyField = document.getElementById('companyNumber');
    const validField = document.getElementById('valid');
    let isValid = true;

    isCompany.addEventListener('change', (e) => {
        if (isCompany.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none'
        }

    })

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!usernamePattern.test(usernameField.value)) {
            usernameField.style.borderColor = 'red';
            isValid = false;
        } else {
            usernameField.style.border = 'none';
        }
        if (!emailPattern.test(emailField.value)) {
            emailField.style.borderColor = 'red';
            isValid = false;
        } else {
            emailField.style.border = 'none';
        }
        if (passField.value !== confirmPassField.value) {
            passField.style.borderColor = 'red';
            confirmPassField.style.borderColor = 'red';
            isValid = false;
        } else {
            passField.style.border = 'none';
            confirmPassField.style.border = 'none';
        }
        if (isCompany.checked) {
            if (Number(companyField.value) < 1000 || Number(companyField.value) > 9999) {
                companyField.style.borderColor = 'red';
                isValid = false;
            } else {
                companyField.style.border = 'none';
            }
        }
        if (isValid == true) {
            validField.style.display = 'block';
        } else {
            validField.style.display = 'none';
        }
    })
}