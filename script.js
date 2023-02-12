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


    // function saveInfo(event) {
    //     let history = citySelection.value
    //     let historyDivEl = document.createElement('div')
    //     historyDivEl.classList.add('list-group')
    
    //     let historyCardEl = document.createElement('button')
    //     historyCardEl.setAttribute('type', 'button')
    //     historyCardEl.classList.add('list-group-item', 'list-group-active')
    //     historyCardEl.style.width='20rem'
    //     historyCardEl.textContent = history

    //     let historyArr = []
    //     function addHistory() {
    //         historyArr.push(history)
            
    //         console.log(localStorage)
    //     }
    
    //     console.log(history)
    //     //localStorage.setItem('search history', history)
    //     historyDivEl.append(historyCardEl)
    //     visibleHistoryEl.innerHTML = '';
    //     visibleHistoryEl.append(historyDivEl)
    // }

    // function saveInfo() {
        
       
    //     let historyArr = [];
    //     historyArr.push(citySelection.value);
        
    //     localStorage.setItem('search-history', JSON.stringify(historyArr));
    // }

    function saveInfo(citySelection) {
        let myHistory = citySelection.value.toString();
        let historyArr = JSON.parse(localStorage.getItem('search-history')) || [];
        historyArr.push(myHistory);
        localStorage.setItem('search-history', JSON.stringify(historyArr));
      }
    
      function showHistory() {
        let storedHistory = JSON.parse(localStorage.getItem())
      }


    // function saveInfo(searchInput) {
    //     // Get any existing data from local storage
    //     let existingData = localStorage.getItem('searchHistory');
      
    //     // If there's existing data, parse it into a JavaScript array
    //     if (existingData) {
    //       existingData = JSON.parse(existingData);
    //     } else {
    //       // If there's no existing data, create an empty array
    //       existingData = [];
    //     }
      
    //     // Add the new input to the array
    //     existingData.push(searchInput);
      
    //     // Store the updated array back in local storage
    //     localStorage.setItem('searchHistory', JSON.stringify(existingData));
    //   }

    


searchBtn.addEventListener ("click", function(event){
    saveInfo(citySelection)
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citySelection.value+'&appid=c1a19879607eb06816098f47fc86a589&units=imperial')
    .then(res=>res.json())
    .then(data=>{
        currentTemp.textContent=`Temp: ${data.main.temp.toFixed(0)}°F`
        currentWind.textContent=`Wind: ${data.wind.speed} mph`
        currentHumid.textContent=`Humidity: ${data.main.humidity}%`
        currentWeather.textContent=`${data.name}`
     
        event.preventDefault()
        
        





        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=imperial`)
        .then(res=>res.json())
        .then(data=>{        
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


