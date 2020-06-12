const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);

    //*
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: { 'X-RapidAPI-Key': '563885c721mshe37b369012d5187p12cb8fjsn9c27a85fb7b8' }
    });

    const resp = await instance.get();

    if (resp.status === 200) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
    //*/

    /*
    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '563885c721mshe37b369012d5187p12cb8fjsn9c27a85fb7b8',
            'useQueryString': true
        },
        params: {
            'location': `${dir}`
        }
    });

    const resp = await instance.get();

    if (resp.status === 200) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        location,
        lat,
        lgn
    };

    //*/
}

module.exports = {
    getLugarLatLng
}