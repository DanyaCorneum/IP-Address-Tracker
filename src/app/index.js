import "dotenv/config";
console.log(document);
const apiKey = process.env.APIKEY;
const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector(".search-bar__button");

ipInput.addEventListener("keydown", handleKey);
btn.addEventListener("click", getData);

function getData(event) {
  event.preventDefault();
  fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipInput.value}`
  )
    .then((resp) => resp.json())
    .then(console.log);
}

function handleKey(event) {
  if (event.key === "Enter") {
    getData();
  }
}

console.log("App is ready");
