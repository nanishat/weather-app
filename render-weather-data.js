import { fetchAPI } from './scripts/fetch-api.js';
import { getImageURL } from './scripts/utils/get-image-url.js';

const inputElement = document.querySelector('.js-search');
const searchBtn = document.querySelector('.js-searchBtn');

searchBtn.addEventListener('click', async () => {
  const cityName = inputElement.value.trim();
  if (!cityName) return;

  const weatherData = await fetchAPI(cityName);
  if (!weatherData) {
    console.error("No data received from API.");
    return;
  }

  renderWeatherData(weatherData);
});

function renderWeatherData(weatherData) {
  const weatherStatus = weatherData.weather[0].main;
  const temp = Math.round(weatherData.main.temp);
  const cityName = weatherData.name;
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;

  const dataHTML =
    `
    <img src=${getImageURL(weatherStatus)} class="weather-icon">
    <p>${weatherStatus}</p>
    <h1 class="temp">${temp}°C</h1>
    <h2 class="city">${cityName}</h2>
    <div class="details">
      <div class="col">
        <img src="Image/humidity.png">
        <div>
          <p class="humidity">${humidity}</p>
          <p>Humidity</p>
        </div>
      </div>

      <div class="col">
        <img src="Image/wind.png">
        <div>
          <p class="wind">${windSpeed} km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>  
  `;

  const data = document.querySelector('.js-weather')
    .innerHTML = dataHTML;

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}