const refs = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onChangeInput);



function onChangeInput(event) {
    console.log(event.currentTarget.value);
    
    refs.nameOutput.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        refs.nameOutput.textContent = 'Anonimous';
    }
   
};