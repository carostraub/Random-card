/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pinta = ["♦", "♥", "♠", "♣"];
  let cartas = [
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
  let carta = document.querySelector(".carta");
  let pintas = document.getElementsByClassName("pinta");

  let numeroRandom = Math.floor(Math.random() * cartas.length);
  let pintaRandom = Math.floor(Math.random() * pinta.length);

  console.log(pintaRandom + numeroRandom);

  pintas.innerHTML = pinta[pintaRandom];
  carta.innerHTML = cartas[numeroRandom];

  for (let i = 0; i < pintas.length; i++) {
    pintas[i].textContent = pinta[pintaRandom];
    if (pinta[pintaRandom] === "♥" || pinta[pintaRandom] === "♦") {
      pintas[i].style.color = "red";
    } else {
      pintas[i].style.color = "black";
    }
  }
};
