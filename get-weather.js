async function getWeather(apiKey, zip, callback, onError) {
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    const res = await fetch(path) // waits for the promise to resolve
    const json = await res.json() // waits for the promise to resolve
    // console.log(json)
    .catch(err => { onError(err) })
    return callback(json)
}

export default getWeather; // <-- export the function