

const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
event.preventDefault();

const formElements = event.currentTarget.elements;
const mail = formElements.email.value;
const password = formElements.password.value;

const formFields = {
  email: mail,
  password: password,
}

if(mail.trim() === '' || password.trim() === ''){
alert('All fields must be completed!');
}
else {
  console.log(formFields);
};
formRef.reset();
};







