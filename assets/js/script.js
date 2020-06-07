const inputPassword = document.querySelector('input[type=password]');
console.log(inputPassword);

const showBtn = document.querySelector('[data-hide]');
console.log(showBtn);

showBtn.addEventListener('click', showPassword);

function showPassword() {
  if (inputPassword.type === 'password') {
    inputPassword.type = 'text';
    showBtn.classList.add('hide');
  } else {
    inputPassword.type = 'password';
    showBtn.classList.toggle('hide');
  }
}