const express = require('express')
const scores = require('./showdata')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { showdata })
})

app.all('*'), (request, response) => {
  return request.sendStatus(404)
}

app.listen(1400, () => {
  console.log('Listening on 1400...') // eslint-disable-line no-console
})