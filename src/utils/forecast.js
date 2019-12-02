const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/47218c4c705f67e41b1dfdbffb2f4111/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
                percipPercent = body.currently.precipProbability
                if (body.currently.precipProbability == 1){
                    percipPercent = body.currently.precipProbability * 100
                }else{
                    percipPercent = body.currently.precipProbability
                }
            callback(undefined, body.currently.summary + '. It is currently ' 
            + body.currently.temperature + 
            ' degress out. The high today is ' + body.daily.data[0].temperatureHigh + 
            ' with a low of ' + body.daily.data[0].temperatureLow + 
            '. There is a ' + percipPercent + '% chance of percipitation.')
        }
    }) 
}

module.exports = forecast