function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const spanColorRef = document.querySelector('.change-color');

changeColorBtnRef.addEventListener('click', onChangeColor);


function onChangeColor(){
  document.body.style.backgroundColor = getRandomHexColor();
  console.clear();
  console.log(spanColorRef.textContent = getRandomHexColor());
};
