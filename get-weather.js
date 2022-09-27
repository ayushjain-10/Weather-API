class Weather{
    constructor(apikey) {
        this.apikey = apikey
      }
    // Functions
    getWeatherByZip(apikey, zip, units = 'imperial') {
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`
        return getWeather(path)
    }
    
    getWeatherByCity(apikey, city, units = 'imperial') {
        const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`
        return getWeather(path)
    }
    
    getWeatherByGeo(apikey, lat, lon, units = 'imperial') {
        const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=${units}`
        return getWeather(path)
    }

    async getWeather(path) {
            // try something here
            const res = await fetch(path)
            const json = await res.json()
            const weatherData = {
                code: json.cod,
                coordLat: json.coord.lat,
                coordLon: json.coord.lon,
                temp: json.main.temp,
                description: json.weather[0].description,
                name: json.name,
                feels_like: json.main.feels_like,
                temp_min: json.main.temp_min,
                temp_max: json.main.temp_max
            }
            return weatherData
        }
                
        // return fetch(path).then(res => res.json())      // connect to server recieve response
        
}
export default Weather