const axios = require('axios');




const getClima = async(lat, lgn) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&appid=3a523f03b5aa9de3dd669189904f4ceb&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}