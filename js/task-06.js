const inputTextRef = document.getElementById('validation-input');
const dataLength = Number(inputTextRef.dataset.length);

inputTextRef.addEventListener('blur', onCheckNumber);

function onCheckNumber(event) {


  if (event.currentTarget.value.length === dataLength) {
    inputTextRef.classList.remove('invalid');
    inputTextRef.classList.add('valid');
    return;
  }

  inputTextRef.classList.remove('valid');
  inputTextRef.classList.add('invalid');
}
