let counterValue = 0 

let counter = document.querySelector('#value');
const minBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

minBtn.addEventListener('click', () =>{
counterValue -= 1;
counter.textContent = counterValue;
});

plusBtn.addEventListener('click', () =>{
counterValue += 1;
counter.textContent = counterValue;
});
