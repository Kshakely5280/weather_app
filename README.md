# weather_app
Week 6 challenge: 


##Weather Forecast App
A simple web page that allows you to see the current and future forecast of the city you're in.

##User Story
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

##Description
The user is presented with a page titled Weather Dashboard and are prompted to input a city. If the user searches an invalid city a pop up will appear prompting the user the enter a valid city name. with a valid city name the user is presented with current and future weather forecast conditions provided by the openweather API. As local storage pulls user input data it will begin to populate a search history on the last 5 inputs, these inputs are presented as buttons the user can click in order to change the page information to display forecasts in that area.

##Process
Initially I tried to create all the elements with bootstrap as a wireframe. Once I landed on a card template I chose to use for the forecast I was able to create elements dynamically within the javascript to avoid having dozens of different classes for each piece of information I needed to display. Once the API was properly functioning I began to work on the overall functionality of the search history, local storage, and lastly somoe general styling. 


##Deployed Page
https://kshakely5280.github.io/weather_app/







