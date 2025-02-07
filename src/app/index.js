import "dotenv/config";

import { validationIP } from "./helpers";

const apiKey = process.env.APIKEY;

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector(".search-bar__button");
const ipInfo = document.querySelector("#IP");
const locationInfo = document.querySelector("#location");
const timeInfo = document.querySelector("#timezone");
const ispInfo = document.querySelector("#isp");

ipInput.addEventListener("keydown", handleKey);
btn.addEventListener("click", getData);

function drawData(data) {
  ipInfo.textContent = `${ipInput.value}`;
  locationInfo.innerHTML = `${data.location.country}<br> ${data.location.region} <br>`;
  timeInfo.innerHTML = `UTS <br> ${data.location.timezone}`;
  if (data.isp !== "") {
    ispInfo.innerHTML = `${data.isp}`;
  } else {
    ispInfo.innerHTML = "No ISP";
  }
}

async function getData(event) {
  event.preventDefault();
  if (validationIP(ipInput.value)) {
    const data = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipInput.value}`
    ).then((resp) => resp.json());
    console.log(data);
    drawData(data);
  }
}

function handleKey(event) {
  if (event.key === "Enter") {
    getData(event);
  }
}

console.log("App is ready");
