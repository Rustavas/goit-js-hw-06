function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');

const spanTextContentRef = document.querySelector('.color');


changeColorBtnRef.addEventListener('click', onChangeColor);


function onChangeColor(){
  document.body.style.backgroundColor = getRandomHexColor();
  console.clear();

  console.log(spanTextContentRef.textContent = getRandomHexColor())
};

