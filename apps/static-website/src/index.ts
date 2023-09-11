const submitForm = (evt: Event) => {
  evt.preventDefault();

  const {
    validity: { valid, valueMissing, typeMismatch },
  } = email;
  if (!valid) {
    email.ariaInvalid = 'true';
    message.classList.add('request-form__helper-text--visible');

    let errorMessage = '';
    if (valueMissing) {
      errorMessage = 'Oops! Please add your email';
    } else if (typeMismatch) {
      errorMessage = 'Oops! Please check your email';
    }

    message.innerText = errorMessage;
  } else {
    email.ariaInvalid = undefined;
    message.classList.remove('request-form__helper-text--visible');
    message.innerText = '';
  }
};

const form: HTMLFormElement = document.querySelector('.request-form');
const email: HTMLInputElement = document.querySelector('#email');
const message: HTMLElement = document.querySelector(
  '.request-form__helper-text',
);
form.addEventListener('submit', submitForm);
