/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function randomItem(arr) {
  const index = randomIndex(arr);
  return arr[index];
}

function createCard() {
  const cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const cardSuits = ["♠", "♣", "♦", "♥"];

  const value = randomItem(cardValues);
  const suit = randomItem(cardSuits);

  const suitColor =
    suit === "♠" || suit === "♣" ? "text-black" : "text-red-500";

  const cardHTML = `<div class="relative flex h-[350px] w-[250px] cursor-pointer items-center justify-center rounded-xl bg-white shadow-xl duration-200 hover:translate-x-4 hover:translate-y-4 hover:-rotate-6 hover:scale-110 dark:bg-slate-600">
  <div class="text-7xl text-black">${value}</div>
  <div class="absolute left-4 top-4 flex flex-col items-center text-5xl">
    <div class="${suitColor}">${suit}</div>
    <div>${value}</div>
  </div>

  <div class="absolute bottom-4 right-4 flex rotate-180 flex-col items-center text-5xl text-black">
    <div class="${suitColor}">${suit}</div>
    <div>${value}</div>
  </div>

</div>`;

  const d = document.createElement("div");
  d.className = "w-20";
  d.innerHTML = cardHTML;
  document.querySelector(".deck").appendChild(d);
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  createCard();
  createCard();
  createCard();
};
