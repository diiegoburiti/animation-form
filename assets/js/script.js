const inputPassword = document.querySelector('input[type=password]');
const showPassword = document.querySelector('[data-hide]');
const btnLogin = document.querySelector('.btn-login');
const wrapperForm = document.querySelector('.wrapper');

showPassword.addEventListener('click', activePassword);

function activePassword() {
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text';
    showPassword.classList.add('hide');
  } else {
    inputPassword.type = 'password';
    showPassword.classList.toggle('hide');
  }
}

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  wrapperForm.classList.add('hide');
}); 