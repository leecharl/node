const request = require('request')

const url = 'https://api.darksky.net/forecast/47218c4c705f67e41b1dfdbffb2f4111/37.8267,-122.4233'

request({ url: url}, (error, response)=> {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})