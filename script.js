const apiKey = "c1a19879607eb06816098f47fc86a589" 

const searchBtn = document.querySelector(".btn");
const citySelection = document.querySelector('#city');
//const currentCity = document.querySelector('.card-title');
const currentTemp = document.querySelector('.temp');
const currentWind = document.querySelector('.wind');
const currentHumid = document.querySelector('.humid');
const currentWeather = document.querySelector('#currentWeather')
const fiveDayEl = document.querySelector('#fiveDay')
const visibleHistoryEl = document.querySelector('#history')

// history
// need to grab city input citySelection.value
    // then make a function to save to local storage and post it somewhere

function saveInfo(event) {
    let history = citySelection.value
    let historyDivEl = document.createElement('div')
    historyDivEl.classList.add('col')

    let historyCardEl = document.createElement('div')
    historyCardEl.classList.add('card')
    historyCardEl.style.width='20rem'

    console.log(history)
    localStorage.setItem('search history', history)
    historyDivEl.append(historyCardEl)
    visibleHistoryEl.append(historyDivEl)
}


searchBtn.addEventListener ("click", function(event){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citySelection.value+'&appid=c1a19879607eb06816098f47fc86a589&units=imperial')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        //currentCity.textContent=data.name
        currentTemp.textContent=`Temp: ${data.main.temp.toFixed(0)}°F`
        currentWind.textContent=`Wind: ${data.wind.speed} mph`
        currentHumid.textContent=`Humidity: ${data.main.humidity}%`
        currentWeather.textContent=`${data.name}`
     
        event.preventDefault()
        
        





        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=imperial`)
        .then(res=>res.json())
        .then(data=>{        
        //currentCity.textContent=data.name
        console.log(data)
        for (let i = 0; i < data.list.length; i+=8) {
            const day = data.list[i];

            let divEl = document.createElement('div')
            divEl.classList.add('col')

            let cardDivEl = document.createElement('div')
            cardDivEl.classList.add('card')
            cardDivEl.style.width='13rem'

            let heading4El = document.createElement('h4')
            heading4El.classList.add('card-title', 'p-2') 
            heading4El.textContent = dayjs.unix(day.dt).format('MM-DD-YY')
            cardDivEl.append(heading4El)

            let imagesEl = document.createElement('img')
            imagesEl.setAttribute('src', 'http://openweathermap.org/img/wn/' + day.weather[0].icon + '@4x.png' )
            imagesEl.classList.add('card-img-top')
            imagesEl.setAttribute('alt','Weather properties')
            cardDivEl.append(imagesEl)

            let divBodyEl = document.createElement('div')
            divBodyEl.classList.add('card-body')

            let tempEl = document.createElement('p')
            tempEl.classList.add('card-text')
            tempEl.textContent = `Temp: ${day.main.temp.toFixed(0)}°F`
            cardDivEl.append(tempEl)
            console.log(tempEl)

            let windEl = document.createElement('p')
            windEl.classList.add('card-text')
            windEl.textContent=`Wind: ${day.wind.speed} mph`
            cardDivEl.append(windEl)

            let humidEl = document.createElement('p')
            humidEl.classList.add('card-text')
            humidEl.textContent=`Humidity: ${day.main.humidity}%`
            cardDivEl.append(humidEl)

            divEl.append(cardDivEl)
            fiveDayEl.append(divEl)

        }
    })
}) 
})


