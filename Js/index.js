const leftBtn = document.querySelector(".leftBtn");
const middleBtn = document.querySelector(".middleBtn");
const rightBtn = document.querySelector(".rightBtn");
const counterLabel = document.querySelector(".countLabel");

//Set initial count
let count = 0;

//For decrease button when clicked
leftBtn.addEventListener("click", function () {
  count--;
  counterLabel.style.color = "crimson";
  counterLabel.textContent = count;
});

//For reset button when clicked
middleBtn.addEventListener("click", function () {
  count = 0;
  counterLabel.style.color = "black";
  counterLabel.textContent = "0";
});

//For increase button when clicked
rightBtn.addEventListener("click", function () {
  count++;
  counterLabel.style.color = "mediumspringgreen";
  counterLabel.textContent = count;
});
