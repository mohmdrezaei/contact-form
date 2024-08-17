const form = document.getElementById("contact-form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const radioBox = document.querySelectorAll(".radio-box");
const typeError = document.getElementById("type-error");
const checkbox1 = document.querySelector(".checkbox");
const checkboxError = document.getElementById("checkbox-error");

const validateField = (field) => {
  return field.trim() !== "";
};

function validateEmail(email) {
  const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

const submitFormHandler = (e) => {
  e.preventDefault();
  let hasErrors = false;

  // Validate all fields in a loop
  const requiredFields = [fname, lname, email, message];
  requiredFields.forEach((field) => {
    if (!validateField(field.value)) {
      showError(field, "This field is required");
      hasErrors = true;
    } else {
      hideError(field);
    }

    if (field === email && !validateEmail(field.value)) {
      showError(email, "Please enter a valid email address");
      hasErrors = true;
    }
  });

  const isSelected = Array.from(radioBox).some((box) =>
    box.classList.contains("selected")
  );
  if (isSelected) {
    typeError.innerText = "";
  } else {
    typeError.innerText = "Please select a query type value";
  }

  if(checkbox1.style.display == "block") {
   checkboxError.innerText = "To submit this form, please consent to being contacted"
  }else{
    checkboxError.innerText = ""
  }
  if (!hasErrors) {
    alert("success");
    form.submit();
  }
};

const showError = (field, message) => {
  field.classList.add("error");
  field.nextElementSibling.innerText = message;
};

const hideError = (field) => {
  field.classList.remove("error");
  field.nextElementSibling.innerText = "";
};

form.addEventListener("submit", submitFormHandler);
