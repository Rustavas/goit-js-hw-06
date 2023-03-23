const fontSizeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

fontSizeRef.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event){
  textRef.style.fontSize = event.currentTarget.value + 'px';
}



