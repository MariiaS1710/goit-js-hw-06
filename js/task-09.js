function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanBackgroundColor = document.querySelector('.color');
const changeBckgColorBtn = document.querySelector('.change-color')
const body = document.querySelector('body');

changeBckgColorBtn.addEventListener('click', () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanBackgroundColor.textContent = color;
}
)