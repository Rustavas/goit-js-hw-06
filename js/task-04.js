let counterValue = 0;

const counter = document.getElementById('counter');
const value = document.getElementById('value')
const decrementBtn = counter.querySelector('[data-action = decrement]');
const incrementBtn = counter.querySelector('[data-action = increment]');

decrementBtn.addEventListener('click', () => {
counterValue -= 1;
value.textContent = counterValue;  
});
incrementBtn.addEventListener('click', () => {
counterValue += 1;
value.textContent = counterValue;
});
