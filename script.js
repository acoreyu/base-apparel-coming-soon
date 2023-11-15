const submitBtn = document.getElementById('submit-btn');
const emailInput = document.getElementById('email');
const emailErrorMsg = document.getElementById('email-error-msg');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();

  if (emailInput.value === '') {
    emailErrorMsg.textContent = 'Please enter your email address.';
    emailInput.focus();
    return false;
  }

  if (!emailIsValid(emailInput.value)) {
    emailErrorMsg.textContent = 'Please provide a valid email.';
    emailInput.focus();
    return false;
  }

  // If email is valid, clear any existing error messages
  emailErrorMsg.textContent = '';

  // Submit the form data to the server or perform further actions
  return true;
});

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};