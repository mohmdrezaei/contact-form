const radioBoxes = document.querySelectorAll(".radio-box");


const queryTypeHandler = (radioBox)=>{
    radioBoxes.forEach((box) => {
        box.classList.remove("selected");
        box.querySelector(".radio-selected").style.display = "none";
        box.querySelector(".radio").style.display = "block";
      });
  
      radioBox.classList.add("selected");
      radioBox.querySelector('.radio-selected').style.display = 'block';
      radioBox.querySelector('.radio').style.display = 'none';
}
radioBoxes.forEach((radioBox) => {
  radioBox.addEventListener("click",()=> queryTypeHandler(radioBox));
});
