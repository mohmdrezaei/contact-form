const form = document.getElementById("contact-form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const radioBox = document.querySelectorAll(".radio-box");
const typeError = document.getElementById("type-error");
const checkboxCheck1 = document.querySelector(".checkbox-check");
const checkboxError = document.getElementById("checkbox-error");
const successMessage = document.querySelector(".message-box");

const validateField = (field) => field.trim() !== "";

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};
const validateRadioBox = () => {
  const isSelected = Array.from(radioBox).some((box) => box.classList.contains("selected"));
  typeError.textContent = isSelected ? "" : "Please select a query type";
  return isSelected;
};

const validateCheckbox = () => {
  const hiddenClass = checkboxCheck1.classList.contains("hidden");
  checkboxError.innerText = hiddenClass
    ? "To submit this form, please consent to being contacted"
    : "";
  return !hiddenClass;
};

const submitFormHandler = (e) => {
  e.preventDefault();
  let hasErrors = false;

  if (!validateCheckbox()) {
    hasErrors = true;
  }

  if (!validateRadioBox()) {
    hasErrors = true;
  }
  const requiredFields = [fname, lname, email, message];
  requiredFields.forEach((field) => {
    if (!validateField(field.value)) {
      showError(field, "This field is required");
      hasErrors = true;
    } else {
      hideError(field);
      if (field === email && !validateEmail(field.value)) {
        showError(email, "Please enter a valid email address");
        hasErrors = true;
      }
    }
  });

  if (!hasErrors) {
    showSuccessMessage();
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

const showSuccessMessage = () => {
  successMessage.classList.add("show");
  radioBox.forEach((box) => {
    box.classList.remove("selected");
    box.querySelector(".radio-selected").style.display = "none";
    box.querySelector(".radio").style.display = "block";
  });
  checkboxCheck1.classList.add("hidden");
  checkbox.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  form.reset();
  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 2000);
};

form.addEventListener("submit", submitFormHandler);
