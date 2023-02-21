const inputFontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputFontSizeControl.addEventListener('input', onChangeInput);

function onChangeInput(event) {
    spanText.style.fontSize = `${event.target.value}px`
}
