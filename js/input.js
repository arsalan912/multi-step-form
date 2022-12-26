const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const nameErrorMessage = document.getElementById("name-error");
const emailErrorMessage = document.getElementById("email-error");
const phoneErrorMessage = document.getElementById("phone-error");

const nameContainer = document.getElementById("name-container");
const emailContainer = document.getElementById("email-container");
const phoneContainer = document.getElementById("phone-container");
//
function nameInputValid() {
  let nameValid = false;

  if (nameInput.value.length === 0) {
    nameContainer.classList.add("error");
    nameErrorMessage.innerHTML = "Please enter your name";
    nameValid = false;
  } else if (nameInput.value.length > 0 && !nameInput.value.match(/(\d+)/)) {
    nameContainer.classList.remove("error");
    nameValid = true;
  } else {
    nameErrorMessage.innerHTML = "Please enter valid name";
    nameContainer.classList.add("error");
    nameValid = false;
  }
  return nameValid;
}

function emailInputValid() {
  let emailValid = false;

  if (emailInput.value.length === 0) {
    emailContainer.classList.add("error");
    emailErrorMessage.innerHTML = "Please enter your email address";
    emailValid = false;
  } else if (
    emailInput.value.length > 0 &&
    emailInput.value.includes("@gmail.com")
  ) {
    emailContainer.classList.remove("error");
    emailValid = true;
  } else {
    emailContainer.classList.add("error");
    emailErrorMessage.innerHTML = "Please enter valid email";
    emailValid = false;
  }
  return emailValid;
}

function phoneInputValid() {
  let phoneValid = false;
  if (phoneInput.value.length === 0) {
    phoneValid = false;
    phoneContainer.classList.add("error");
    phoneErrorMessage.innerHTML = "Please enter your phone number1";
  } else if (phoneInput.value.length === 11) {
    phoneValid = true;
    phoneContainer.classList.remove("error");
  } else {
    phoneValid = false;
    phoneContainer.classList.add("error");
    phoneErrorMessage.innerHTML = "Please enter valid phone number";
  }
  return phoneValid;
}

function allInputValid() {
  if (nameInputValid() && emailInputValid() && phoneInputValid()) {
    return true;
  } else {
    return false;
  }
}
