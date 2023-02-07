// const apiKey = "c1a19879607eb06816098f47fc86a589" 

// const searchBtn = document.querySelector(".btn");
// const citySelection = document.querySelector('#city');
// const currentCity = document.querySelector('.card-title');
// const currentTemp = document.querySelector('.temp');
// const currentWind = document.querySelector('.wind');
// const currentHumid = document.querySelector('.humid');



// searchBtn.addEventListener ("click", function(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+citySelection.value+'&appid=c1a19879607eb06816098f47fc86a589&units=imperial')
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         currentCity.textContent=data.name
//         currentTemp.textContent=`Temp: ${data.main.temp.toFixed(0)}°F`
//         currentWind.textContent=`Wind: ${data.wind.speed} mph`
//         currentHumid.textContent=`Humidity: ${data.main.humidity}%`
//         currentCity.textContent=`Currently in: ${data.name}`
//         event.preventDefault()
        





//         fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=imperial`)
//         .then(res=>res.json())
//         .then(data=>{
//         console.log(data);
//         currentCity.textContent=data.name
//         console.log(data)
//     })
// }) 
// })


