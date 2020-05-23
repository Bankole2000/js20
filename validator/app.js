// Get all the DOM elements
const form = document.querySelector('#form');

// Functions
const showError = (input, message) => {
  input.parentElement.className = 'form-control error';
  input.parentElement.querySelector('small').innerText = message;
};

const showSuccess = (input) => {
  input.parentElement.className = 'form-control success';
};

const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be at less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
};

const checkEmail = (input) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `${getFieldName(input)} is not valid`);
  }
};

const checkPasswordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
};

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([
    form['username'],
    form['email'],
    form['password'],
    form['password2'],
  ]);
  checkLength(form['username'], 3, 20);
  checkLength(form['password'], 6, 25);
  checkEmail(form['email']);
  checkPasswordsMatch(form['password'], form['password2']);
});
