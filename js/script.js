//Select elements
const btn = document.querySelector(".btn-advice");
const txtNumber = document.querySelector(".number");
const textAdvice = document.querySelector(".advice");

//Link api

btn.addEventListener("click", () => {
  let ramdon = Math.floor(Math.random() * 200) + 1;

  let link = "https://api.adviceslip.com/advice/" + ramdon;

  fetch(link)
    .then((response) => response.json())
    .then((data) => advide(data));
});

//Change content

const advide = (data) => {
  txtNumber.textContent = data.slip.id;
  textAdvice.textContent = data.slip.advice;
};
