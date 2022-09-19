async function getWeather(apiKey, zip, callback) {
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    const res = await fetch(path) // waits for the promise to resolve
    const json = await res.json() // waits for the promise to resolve
    const weatherData = {
        code: json.cod,
        temp: json.main.temp,
        description: json.weather[0].description,
        name: json.name,
        feels_like: json.main.feels_like,
        temp_min: json.main.temp_min,
        temp_max: json.main.temp_max
    }
    // console.log(json)
    return callback(weatherData)
}

export default getWeather; // <-- export the function

// 