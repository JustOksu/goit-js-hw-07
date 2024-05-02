document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector('input[type="number"]');
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

  createBtn.addEventListener("click", function () {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
      manipulateBoxes(amount);
      input.value = "";
    }
  });

  destroyBtn.addEventListener("click", function () {
    manipulateBoxes(0);
  });
});

function manipulateBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");

  if (amount === 0) {
    boxesContainer.innerHTML = "";
    return;
  }

  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
