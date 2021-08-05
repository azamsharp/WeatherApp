// Zac , Kai, Sung, Jennie, Jen, David R., David B., Derek, Saad


const cityNameTextBox = document.getElementById("cityNameTextBox")
const weatherForm = document.getElementById("weatherForm")
const tempHeading = document.getElementById("tempHeading")
const humidityHeading = document.getElementById("humidityHeading")

const API_KEY = 'feeb1e15933c3850daf212f6801a413c'

weatherForm.addEventListener("submit", function (event) {

    event.preventDefault()
    const city = cityNameTextBox.value

    getWeather(city, function (weather) {
        displayWeather(weather)
    })
})

function displayWeather(weather) {
    tempHeading.innerHTML = `${weather.main.temp} F`
    humidityHeading.innerHTML = weather.main.humidity
}

function getWeatherUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
}

getWeather('Austin', function(weather) {
    //saveInDatabase(weather)
    //sendWeatherInEmail(weather)
    //prepareWeatherReport(weather)
})

/*
getWeather('Austin', function(weather) {
    displayiPhone(weather)
}) */

// In order to use await your functions must be marked with async
async function getWeather(city, weatherDownloaded) {

    const weatherUrl = getWeatherUrl(city)

    try {
        // await is going to resolve a promise and returns you the result 
        let response = await fetch(weatherUrl)
        let weatherData = await response.json()
        weatherDownloaded(weatherData)
    } catch (error) {
        console.log('Exception has occurred!')
        console.log(error)
    }

    /*
    fetch(weatherUrl)
    .then(response => response.json())
    .then(weatherData => {
        weatherDownloaded(weatherData)
    }).catch((error) => {

    }) */

}

