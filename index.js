const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/season/:id', (request, response) => {
  const season = showdata.seasons.find((season) => season.number === parseInt(request.params.id))

  return response.render('season', { season })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1338, () => {
  console.log('Listening on 1338...') // eslint-disable-line no-console
})
