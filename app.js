const request = require('request')

const url = 'https://api.darksky.net/forecast/47218c4c705f67e41b1dfdbffb2f4111/37.8267,-122.4233'


request({ url: url, json: true}, (error, response)=> {
    if (error){
        console.log('unable to connect to weather service.')
    } else if (response.body.error) {
        console.log('Unable to find Location')
    }else {
        console.log(response.body.daily.data[0].summary + "It is currently " + response.body.currently.temperature + " degrees. There is a " + response.body.currently.precipProbability + "% chance of rain.")
    }


})


const latURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWFyb240Mjg4IiwiYSI6ImNrMzZzNHdzaDA0ejgzaW95amFxNGE5aXgifQ.Uzj06AwXJLTW5Lu1MiLYLA&limit=1'

request({ url: latURL, json: true}, (error, response)=> {
    if (error){
        console.log('Unable to connect to location service')
    } else if (response.body.features.latitude === 0){
        console.log('Unable to find location. Please try again.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log("lat: " + latitude + "  Long: " + longitude)
    }
})