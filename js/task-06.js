const input = document.querySelector('#validation-input');

input.addEventListener('blur', onChangeInput);

function onChangeInput(event) {
    if (event.currentTarget.value.length == input.getAttribute('data-length')) {
        input.classList.add ('valid')
        
        if (input.classList.contains('invalid')){
            input.classList.remove('invalid')
        }
    } else {
        if (input.classList.contains('valid')) {
            input.classList.remove('valid')
        }
        input.classList.add('invalid')
        }
}