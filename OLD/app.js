const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('idaho falls', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})



// const request = require('request')
// const geocode = require('./utils/geocode')

// const forecast = require('./utils/forecast')


// // const url = 'https://api.darksky.net/forecast/47218c4c705f67e41b1dfdbffb2f4111/37.8267,-122.4233'


// // request({ url: url, json: true}, (error, response)=> {
// //     if (error){
// //         console.log('unable to connect to weather service.')
// //     } else if (response.body.error) {
// //         console.log('Unable to find Location')
// //     }else {
// //         console.log(response.body.daily.data[0].summary + "It is currently " + response.body.currently.temperature + " degrees. There is a " + response.body.currently.precipProbability + "% chance of rain.")
// //     }


// // })


// // geocode('83401', (error, data) => {
// //     console.log('Error', error)
// //     console.log('Data', data)
// // })

// forecast(-71.0596, 42.3605, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })