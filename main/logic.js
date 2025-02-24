let input = document.getElementById("inputs"); // Fix the correct input field ID
let buttons = document.querySelectorAll("button");
let string = "";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;
    if (value.trim() === "=") {
      try {
        string = eval(string);
      } catch (error) {
        string = "Error";
      }
    } else if (value.trim() === "AC") {
      string = "";
    } else if (value.trim() === "DEL") {
      string = string.slice(0, -1);
    } else {
      string += value.trim();
    }
    input.value = string;
  });
});
