
 const apiKey = "c1a19879607eb06816098f47fc86a589";
// const city = "denver";


function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
      .then(response => response.json())
      .then(data => {
        let forecastData = "";
        let forecastDivs = document.querySelectorAll(".forecast-day");
        for (let i = 0; i < forecastDivs.length; i++) {
          let iconCode = data.list[i * 8].weather[0].icon;
          let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
          forecastDivs[i].innerHTML = `
            <p>Day ${i + 1}: Low - ${data.list[i * 8].main.temp_min}°F, High - ${data.list[i * 8].main.temp_max}°F</p>
            <p>Icon: <img src="${iconUrl}" alt="Weather Icon"></p>
          `;
        }
      })
      .catch(error => console.error(error));
  }
  
  document.querySelector("#search-form").addEventListener("submit", e => {
    e.preventDefault();
    let city = document.querySelector("#city-input").value;
    getWeather(city);
  });

// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
//   .then(response => response.json())
//   .then(data => {
//     let forecastData = "";
//     let forecastDivs = document.querySelectorAll(".forecast-day");
//     for (let i = 0; i < forecastDivs.length; i++) {
//       let iconCode = data.list[i * 8].weather[0].icon;
//       let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
//       forecastDivs[i].innerHTML = `
//         <p>Day ${i + 1}: Low - ${data.list[i * 8].main.temp_min}°F, High - ${data.list[i * 8].main.temp_max}°F</p>
//         <p>Icon: <img src="${iconUrl}" alt="Weather Icon"></p>
//       `;
//     }
//   })
//   .catch(error => console.error(error));










// api key: c1a19879607eb06816098f47fc86a589

// `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`

// let currentWeather = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// let forcast = http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// let geo = http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// geo code https://api.openweathermap.org/geo/1.0/direct?q=denver&appid=c1a19879607eb06816098f47fc86a589

//Psuedo code:

// I want to open a webpage and input the location so I can see the weather foorcast
    // form input for user and event listener to submit

//weather to display for location selected
    // fetch response data weather through api
    // data fetched should include current weather, icon, temperature, humidity, and wind speed

// need 5 day forcast for that location to display

// function getWeather(){
//     const newName = document.getElementById("cityInput")
//     const cityName = document.getElementById("cityName")
//     cityName.innerHTML = newName.value

// fetch("http://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=c1a19879607eb06816098f47fc86a589")
// .then(response => response.json())
// .then(data =>{
//     for (let i = 0; i < 5; i++) {
//        document.getElementById("day" + (i++) + "low").innerHTML = "low" + Number(data.list[i].main.temp_min -288.53).toFixed(0)+"°";     
//     }
//     for (let i = 0; i < 5; i++) {
//         document.getElementById("day" + (i++) + "high").innerHTML = "high" + Number(data.list[i].main.temp_max -288.53).toFixed(0)+"°";     
//      }
//      for (let i = 0; i < 5; i++) {
//         document.getElementById("img" +(i++)).src="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
//      }
// })

// .catch(err => alert("Something went wrong, please try another city"))
// }



// function getWeather(){
// let city = document.getElementById(cityInput)
// let apiKey = "c1a19879607eb06816098f47fc86a589"
// city.innerHTML = city.value
// fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
//   .then(response => response.json())
//   .then(data => {
//     for (let i = 0; i < data.list.length; i += 8) {
//       console.log(`Day ${i / 8 + 1}: Low - ${data.list[i].main.temp_min}°F, High - ${data.list[i].main.temp_max}°F`);
//     }
//   })
//   .catch(error => console.error("Something went wrong, please try another city"));

// }