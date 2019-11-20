const request = require('request')


const forecast = (address, callback) => {
    const url = 'https://api.darksky.net/forecast/47218c4c705f67e41b1dfdbffb2f4111/'+ bob

   request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })


}




module.exports = forecast