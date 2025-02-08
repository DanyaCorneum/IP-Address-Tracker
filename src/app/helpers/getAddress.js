import "dotenv/config";

const apiKeyIP = process.env.APIKEY_IP;

export async function getAddress(ip = "10.10.10.10") {
  const data = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKeyIP}&ipAddress=${ip}`
  );
  return await data.json();
}
