document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("calcu");
  let buttons = document.querySelectorAll(".calculator button");

  let string = "";

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (input && e.target.innerHTML) {
        if (e.target.innerHTML === "=") {
          string = eval(string);
          input.value = string;
        } else if (e.target.innerHTML === "AC") {
          string = "";
          input.value = string;
        } else if (e.target.innerHTML === "DEL") {
          string = "";
          input.value = string;
        } else {
          string += e.target.innerHTML;
          input.value = string;
        }
      }
    });
  });
});
