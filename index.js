const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { showdata })
})

app.get('/season1', (request, response) => {
  response.render('seasons', { showdata })
})

app.get('/season2', (request, response) => {
  response.render('seasons', { showdata })
})

app.get('/season3', (request, response) => {
  response.render('seasons', { showdata })
})

app.get('/season4', (request, response) => {
  response.render('seasons', { showdata })
})

app.all('*'), (request, response) => {
  return request.sendStatus(404)
}

app.listen(1400, () => {
  console.log('Listening on 1400...') // eslint-disable-line no-console
})