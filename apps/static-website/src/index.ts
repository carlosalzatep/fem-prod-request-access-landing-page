const form: HTMLFormElement = document.querySelector('#subscribe-form');
const emailInput: HTMLInputElement = document.querySelector('#email');
const warningMsg: HTMLElement = document.querySelector('#warning-msg');

const requestAccess = (event: Event) => {
  const MSG_CLASS_MODIFIER = 'subscribe-form__warning-msg--enabled';
  const MSG_ADD_EMAIL = 'Oops! Please add your email';
  const MSG_CHECK_EMAIL = 'Oops! Please check your email';
  event.preventDefault();

  const {
    validity: {
      valid: isEmailValid,
      valueMissing: isEmailValueMissing,
      typeMismatch: emailMismatch,
    },
  } = emailInput;

  if (isEmailValueMissing || !isEmailValid || emailMismatch) {
    warningMsg.innerText = emailMismatch ? MSG_CHECK_EMAIL : MSG_ADD_EMAIL;
    warningMsg.classList.add(MSG_CLASS_MODIFIER);
  } else {
    warningMsg.classList.remove(MSG_CLASS_MODIFIER);
  }
  emailInput.focus();
};

form.addEventListener('submit', requestAccess);
