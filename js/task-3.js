const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value;

  let trimmedValue = inputValue;
  if (inputValue.startsWith(" ")) {
    trimmedValue = inputValue.slice(1);
  }
  if (trimmedValue.endsWith(" ")) {
    trimmedValue = trimmedValue.slice(0, -1);
  }

  if (trimmedValue) {
    nameOutput.textContent = trimmedValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
