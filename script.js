const weatherData = [
  { city: "New York", temperature: 16, humidity: 70, windSpeed: 7 },
  { city: "London", temperature: 12, humidity: 80, windSpeed: 5 },
  { city: "Tokyo", temperature: 22, humidity: 60, windSpeed: 4 },
  { city: "Sydney", temperature: 25, humidity: 50, windSpeed: 6 },
  { city: "Paris", temperature: 15, humidity: 65, windSpeed: 5 },
  { city: "Berlin", temperature: 14, humidity: 60, windSpeed: 6 },
  { city: "Moscow", temperature: 5, humidity: 75, windSpeed: 10 },
  { city: "Toronto", temperature: 17, humidity: 55, windSpeed: 8 },
  { city: "Rio de Janeiro", temperature: 26, humidity: 85, windSpeed: 7 },
  { city: "Beijing", temperature: 20, humidity: 40, windSpeed: 3 },
  { city: "Mumbai", temperature: 30, humidity: 70, windSpeed: 5 },
  { city: "Los Angeles", temperature: 19, humidity: 65, windSpeed: 4 },
  { city: "Cape Town", temperature: 18, humidity: 60, windSpeed: 6 },
  { city: "Rome", temperature: 21, humidity: 55, windSpeed: 3 },
  { city: "Bangkok", temperature: 33, humidity: 75, windSpeed: 2 },
  { city: "Istanbul", temperature: 20, humidity: 60, windSpeed: 4 },
  { city: "Lagos", temperature: 29, humidity: 80, windSpeed: 3 },
  { city: "Buenos Aires", temperature: 23, humidity: 70, windSpeed: 5 },
  { city: "Chicago", temperature: 10, humidity: 65, windSpeed: 7 },
  { city: "Shanghai", temperature: 19, humidity: 80, windSpeed: 6 },
];

//html elements
const searchInput = document.getElementById("cityName");
const weatherDisplayDiv = document.getElementById("weatherDisplay");
const recentSearchesDiv = document.getElementById("recentSearches");
const recentSearchList = document.createElement("ul");
recentSearchList.classList = "list-group";
recentSearchesDiv.appendChild(recentSearchList);

//flag to check if the search is triggered from input or recent searches
let isFromRecentSearches = false;

//retrieve existing data from local storage
let recentSearches = JSON.parse(localStorage.getItem("Recent Searches:")) || [];

//fetch weather fnc
function fetchWeather(city) {
  const weatherObj = weatherData.find(
    (cityObj) => cityObj.city.toLowerCase() === city.toLowerCase()
  );
  console.log(weatherObj);

  //if the city is not found, return null so the alert from searchWeather() can be triggered
  if (!weatherObj) return null;

  return weatherObj;
}

//display weather fnc
function displayCurrentWeather(data) {
  weatherDisplayDiv.innerHTML = `
  <h2>Current Weather for ${data.city}</h2>
  <p>Temperature: ${data.temperature}°C</p>
  <p>Humidity: ${data.humidity}%</p>
  <p>Wind Speed: ${data.windSpeed} m/s</p>`;
}

//fetch forecast fnc
function fetchForecast(city) {
  const weatherObj = weatherData.find(
    (cityObj) => cityObj.city.toLowerCase() === city.toLowerCase()
  );

  //if the city is not found, return null so the alert from searchWeather() can be triggered
  if (!weatherObj) return null;

  const cityTemperature = weatherObj.temperature;

  const fiveDayForecast = [{ city: weatherObj.city }];

  for (let i = 0; i < 5; i++) {
    fiveDayForecast.push(cityTemperature + i);
  }
  console.log(fiveDayForecast);
  return fiveDayForecast;
}

//display forecast fnc
function displayForecast(data) {
  weatherDisplayDiv.innerHTML += `
  <h2>5-day Forecast for ${data[0].city} </h2>`;

  data.slice(1).forEach((temperature, index) => {
    weatherDisplayDiv.innerHTML += `<p>Day ${
      index + 1
    }: Temperature: ${temperature}°C </p>`;
  });
}

//search fnc
function searchWeather() {
  weatherDisplayDiv.innerHTML = "";

  //user input value
  const userInputValue = searchInput.value.trim();

  const cityWeatherData = fetchWeather(userInputValue);
  const cityForecastData = fetchForecast(userInputValue);

  //alerts if the city is not in the data base
  if (!cityWeatherData) alert("City not found!");
  if (!cityForecastData) alert("City not found for forecast!");

  //saves into local storage only if it's from search input
  if (!isFromRecentSearches) {
    saveRecentSearch(userInputValue);
  }

  //if weather and forecast are found, display on the DOM
  if (cityWeatherData && cityForecastData) {
    displayCurrentWeather(cityWeatherData);
    displayForecast(cityForecastData);
  }

  //reset the flag after the search is done
  isFromRecentSearches = false;

  displayRecentSearches();
}

// Exercise 03: Save recent searches to local storage
function saveRecentSearch(city) {
  recentSearches.push({ searchedCity: city });

  localStorage.setItem("Recent Searches:", JSON.stringify(recentSearches));
  console.log(recentSearches);
}

//fnc to display recent searches
function displayRecentSearches() {
  recentSearchList.innerHTML = "";
  recentSearches.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "list-group-item-action");
    li.style.cursor = "pointer";
    li.textContent = item.searchedCity;
    recentSearchList.appendChild(li);

    li.addEventListener("click", () => {
      searchInput.value = item.searchedCity;
      isFromRecentSearches = true;
      searchWeather();
    });
  });
}

//recent search list display on load
document.addEventListener("DOMContentLoaded", displayRecentSearches);

//search fnc on enter on keyboard
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchWeather();
  }
});
