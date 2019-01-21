require('dotenv').config()
const express = require('express')
const app = express()
const {json} = require('body-parser')
const port = 3001
const {getWeather, updateLocation, nameOfCity, savedWeather, clearSaved, editHead} = require('./controllers/controller')

app.use(json())

app.get('/api/weather', getWeather)
app.get('/api/city', nameOfCity)
// app.get('/api/temp', getTemp)

app.post('/api/weather/location', updateLocation)
app.post('/api/weather/saved', savedWeather)
// app.post('/api/temp/current', getNewTemp)
// app.post('/api/city/next', updateCity)

app.delete('/api/weather/saved', clearSaved)

app.put('/api/saved/edit/:id', editHead)

app.listen(port, ()=>console.log(`Listening on ${port}`))