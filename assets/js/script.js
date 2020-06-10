const inputPassword = document.querySelector('input[type=password]');
const showPassword = document.querySelector('[data-hide]');
const btnLogin = document.querySelector('.btn-login');
const wrapperForm = document.querySelector('.wrapper');
const form = document.querySelector('[data-form]');

showPassword.addEventListener('click', activePassword);

function activePassword(event) {
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text';
    showPassword.classList.add('hide');
  } else {
    inputPassword.type = 'password';
    showPassword.classList.toggle('hide');
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputs = [...document.querySelectorAll('.input-block input')];

  inputs.forEach((field) => {
    if (field.value === '') wrapperForm.classList.add('invalid-form');
  });

  const formError = document.querySelector('.invalid-form');
  if (formError) {
    formError.addEventListener('animationend', (event) => {
      if (event.animationName === 'invalid') formError.classList.remove('invalid-form');
    })
  } else {
    wrapperForm.classList.add('wrapper-hide');
  }
});

wrapperForm.addEventListener('animationend', (event) => {
  if (event.animationName === 'down') wrapperForm.style.display = 'none';
});

wrapperForm.addEventListener('animationstart', (event) => {
  if (event.animationName === 'down') document.querySelector('body').style.overflow = 'hidden';
});

const squares = document.querySelector('.squares');
console.log(squares);
