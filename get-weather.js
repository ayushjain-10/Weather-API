class Weather {
    constructor(apikey, units) {
        this.apikey = apikey
        this.units = units
    }
    // Functions
    async getWeatherByZip(zip) {
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${this.apikey}&units=${this.units}`
        return await this.getWeather(path)
    }

    async getWeatherByCity(city) {
        const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apikey}&units=${this.units}`
        return await this.getWeather(path)
    }

    async getWeatherByGeo(lat, lon) {
        const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apikey}&units=${this.units}`
        return await this.getWeather(path)
    }

    async getWeatherByCityId(city_id) {
        const path = `https://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=${this.apikey}&units=${this.units}`
        return await this.getWeather(path)
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
}

export default Weather

