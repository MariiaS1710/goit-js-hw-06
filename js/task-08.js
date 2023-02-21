const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert ('Заповни всі поля!')
    } 
    const userInfo = {
        email: email.value,
        password: password.value,
    };
    console.log(userInfo);
    event.currentTarget.reset();
}
