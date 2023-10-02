const form: HTMLFormElement = document.querySelector('#subscribe-form');
const emailInput: HTMLInputElement = document.querySelector('#email');
const warningMsg: HTMLElement = document.querySelector('#warning-msg');

const requestAccess = (event: Event) => {
  const MSG_CLASS_MODIFIER = 'subscribe-form__warning-msg--enabled';
  event.preventDefault();

  const {
    validity: { valid: isEmailValid, valueMissing: isEmailValueMissing },
  } = emailInput;

  if (isEmailValueMissing || !isEmailValid) {
    warningMsg.classList.add(MSG_CLASS_MODIFIER);
  } else {
    warningMsg.classList.remove(MSG_CLASS_MODIFIER);
  }
};

form.addEventListener('submit', requestAccess);
