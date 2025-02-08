import { getAddress, validationIP } from "./helpers";

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

function getData(event) {
  event.preventDefault();
  if (validationIP(ipInput.value)) {
    getAddress(ipInput.value).then(drawData);
  }
}

function handleKey(event) {
  if (event.key === "Enter") {
    getData(event);
  }
}

console.log("App is ready");
