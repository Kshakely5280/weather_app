const apiKey = "c1a19879607eb06816098f47fc86a589";
const searchBtn = document.querySelector(".btn");
const citySelection = document.querySelector("#city");
const currentTemp = document.querySelector(".temp");
const currentWind = document.querySelector(".wind");
const currentHumid = document.querySelector(".humid");
const currentWeather = document.querySelector("#currentWeather");
const fiveDayEl = document.querySelector("#fiveDay");
const visibleHistoryEl = document.querySelector("#history");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");

function saveInfo(citySelection) {
  let myHistory = citySelection.value.toString();
  let historyArr = JSON.parse(localStorage.getItem("search-history")) || [];
  historyArr.push(myHistory);
  localStorage.setItem("search-history", JSON.stringify(historyArr));
  console.log(historyArr);

  visibleHistoryEl.innerHTML = "";
  const newIndex = Math.max(historyArr.length - 5, 0);
  for (let i = newIndex; i < historyArr.length; i++) {
    let historyList = document.createElement("div");
    historyList.classList.add('btn')
    historyList.textContent = historyArr[i];
    historyList.addEventListener("click", function () {
      getCity(historyArr[i]);
    });
    visibleHistoryEl.appendChild(historyList);
  }
}

function getCity(cityName) {
    citySelection.value = cityName;
    searchBtn.click();
  }



searchBtn.addEventListener("click", function (event) {
  saveInfo(citySelection);
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      citySelection.value +
      "&appid=c1a19879607eb06816098f47fc86a589&units=imperial"
  )
    .then((res) => res.json())
    .then((data) => {
        if (data.cod === "404") {
            modalText.textContent =
              "City not found. Please enter a valid city name.";
            modal.style.display = "block";
            return;
          }
      currentTemp.textContent = `Temp: ${data.main.temp.toFixed(0)}°F`;
      currentWind.textContent = `Wind: ${data.wind.speed} mph`;
      currentHumid.textContent = `Humidity: ${data.main.humidity}%`;
      currentWeather.textContent = `${data.name}`;


      event.preventDefault();

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=imperial`
      )
        .then((res) => res.json())
        .then((data) => {
          fiveDayEl.innerHTML = "";
          for (let i = 0; i < data.list.length; i += 8) {
            const day = data.list[i];

            let divEl = document.createElement("div");
            divEl.classList.add("col");

            let cardDivEl = document.createElement("div");
            cardDivEl.classList.add("card");
            cardDivEl.style.width = "13rem";

            let heading4El = document.createElement("h4");
            heading4El.classList.add("card-title", "p-2");
            heading4El.textContent = dayjs.unix(day.dt).format("dddd, MMMM D, YYYY");
            cardDivEl.append(heading4El);

            let imagesEl = document.createElement("img");
            imagesEl.setAttribute(
              "src",
              "http://openweathermap.org/img/wn/" +
                day.weather[0].icon +
                "@4x.png"
            );
            imagesEl.classList.add("card-img-top");
            imagesEl.setAttribute("alt", "Weather properties");
            cardDivEl.append(imagesEl);

            let divBodyEl = document.createElement("div");
            divBodyEl.classList.add("card-body");

            let tempEl = document.createElement("p");
            tempEl.classList.add("card-text");
            tempEl.textContent = `Temp: ${day.main.temp.toFixed(0)}°F`;
            cardDivEl.append(tempEl);
            console.log(tempEl);

            let windEl = document.createElement("p");
            windEl.classList.add("card-text");
            windEl.textContent = `Wind: ${day.wind.speed} mph`;
            cardDivEl.append(windEl);

            let humidEl = document.createElement("p");
            humidEl.classList.add("card-text");
            humidEl.textContent = `Humidity: ${day.main.humidity}%`;
            cardDivEl.append(humidEl);

            divEl.append(cardDivEl);
            fiveDayEl.append(divEl);

            modalClose.addEventListener("click", function () {
                modal.style.display = "none";
              });
          }
        });
    });
});
