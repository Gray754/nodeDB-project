const axios = require('axios')
let baseUrl = 'https://api.openweathermap.org/data/2.5/'
let city = 'dallas'
let savedLoc = []
let {API_KEY} = process.env
console.log(API_KEY)

const getWeather = (req, res) =>{
console.log(process.env)
    axios.get(`${baseUrl}/weather?q=${city}${API_KEY}`).then(response=>{
        console.log(response.data)
        res.status(200).json(response.data.weather[0])
    }).catch(err => console.log(err))
}

const updateLocation=(req, res)=>{
    axios.get(`${baseUrl}/weather?q=${req.body.location}${API_KEY}`).then(response=>{
        // console.log(req.body.location)
        res.status(200).json(response.data.weather[0])
    }).catch(err=> console.log(err))
}

const nameOfCity=(req, res)=>{
    axios.get(`${baseUrl}/weather?q=${city}${API_KEY}`).then(response=>{
        res.status(200).json(response.data)
    }).catch(err=>console.log(err))
}

const savedWeather=(req, res)=>{
        savedLoc.push(req.body.locUpdate)
        res.status(200).json(savedLoc)
    }

// const getTemp=(req, res)=>{
//     axios.get(`${baseUrl}/weather?q=${city}&units=imperial${key}`).then(response=>{
//         // console.log(response.data)
//         res.status(200).json(response.data.main)
//     }).catch(err => console.log(err))
// }

// const updateCity=(req,res)=>{
//     axios.get(`${baseUrl}/weather?q=${req.body.currentLoc}${key}`).then(response=>{
//         res.status(200).json(response.data.name)
//     }).catch(err=>console.log(err))
// }

module.exports = {
    getWeather,
    updateLocation,
    nameOfCity,
    savedWeather
    //updateCity
    // same as 
    // getWeather: getWeather
}