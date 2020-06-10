const inputPassword = document.querySelector('input[type=password]');
const showPassword = document.querySelector('[data-hide]');
const btnLogin = document.querySelector('.btn-login');
const wrapperForm = document.querySelector('.wrapper');

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

btnLogin.addEventListener('click', (event) => {
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

const squares = document.querySelector('ul.squares');
for (let i = 0; i < 11; i++) {
  const li = document.createElement('li');
  const random = (min, max) => Math.random() * (max - min) + min;

  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);
  console.log(position);


  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;
  squares.appendChild(li);
}