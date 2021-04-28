const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { showdata })
})

app.get('/season/:number', (req, res) => {
  const foundSeason = showdata.seasons.find((season) => {
    return season.number === parseInt(req.params.number)
  })

  return res.render('seasons', { season: foundSeason, 'title': showdata.title })
})

app.all('*'), (request, response) => {
  return request.sendStatus(404)
}

app.listen(1400, () => {
  console.log('Listening on 1400...') // eslint-disable-line no-console
})