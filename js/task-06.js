

const inputText = document.getElementById('validation-input');
const dataLength = Number(inputText.dataset.length);




function qwe (event) {
  event.currentTarget
  console.dir(event.currentTarget.value);


}

// inputText.addEventListener('blur', onInputTextBlur);

// function onInputTextBlur(event) {


  // if (
  //   event.currentTarget.text.value.length === dataLength)
  //  {

  // inputText.classList.add("valid");

  // } else {
  // inputText.classList.remove("valid");
  // inputText.classList.add("invalid");
  // }
  // }
//!============
  // const inputEl = document.querySelector('input');

// inputEl.addEventListener('blur', onInputBlur);

// function onInputBlur(event) {

//     const total = event.currentTarget.value.length

//     if (Number(inputEl.dataset.length) !== total) {
//         inputEl.classList.add('invalid');
//         return;
//     }
//     inputEl.classList.add('valid');
// }