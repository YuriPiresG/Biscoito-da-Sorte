const firstBiscuit = document.querySelector(".biscoitoUm");
const screenOne = document.querySelector(".screenOneContent");
const screenTwo = document.querySelector(".screenTwo");
let randomNumber = Math.floor(Math.random() * 5);
const fortunePhrases = [
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
];

function handleClickOrEnter(event) {
  if (
    event.type === "click" ||
    (event.type === "keypress" && event.key === "Enter")
  ) {
    document.querySelector(".luckyPhrase").innerHTML =
      fortunePhrases[randomNumber];
    screenOne.classList.add("hide");
    screenTwo.classList.remove("hide");
  }
}

function handleReset() {
  randomNumber = Math.floor(Math.random() * 5);
  screenOne.classList.remove("hide");
  screenTwo.classList.add("hide");
}

firstBiscuit.addEventListener("click", handleClickOrEnter);
document.addEventListener("keypress", handleClickOrEnter);
