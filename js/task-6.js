document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector('input[type="number"]');
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

  createBtn.addEventListener("click", function () {
    const amount = parseInt(input.value);
    boxesContainer.innerHTML = "";
    createBoxes(boxesContainer, amount);
    input.value = "";
  });

  destroyBtn.addEventListener("click", function () {
    destroyBoxes(boxesContainer);
  });
});

function createBoxes(container, amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    container.appendChild(box);
    size += 10;
  }
}

function destroyBoxes(container) {
  container.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
