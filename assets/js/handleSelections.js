const radioBoxes = document.querySelectorAll(".radio-box");
const checkbox = document.querySelector(".checkbox");
const checkboxCheck = document.querySelector(".checkbox-check");

const queryTypeHandler = (radioBox) => {
  radioBoxes.forEach((box) => {
    box.classList.remove("selected");
    box.querySelector(".radio-selected").style.display = "none";
    box.querySelector(".radio").style.display = "block";
  });

  radioBox.classList.add("selected");
  radioBox.querySelector(".radio-selected").style.display = "block";
  radioBox.querySelector(".radio").style.display = "none";
};

const checkboxHandler = () => {
  checkbox.classList.toggle("hidden");
  checkboxCheck.classList.toggle("hidden");
};
const checkboxCheckHandler = () => {
  checkbox.classList.toggle("hidden");
  checkboxCheck.classList.toggle("hidden");
};

checkbox.addEventListener("click", checkboxHandler);
checkboxCheck.addEventListener("click", checkboxCheckHandler);
radioBoxes.forEach((radioBox) => {
  radioBox.addEventListener("click", () => queryTypeHandler(radioBox));
});
