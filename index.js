const express = require('express');
const bodyParser = require('body-parser')
const { getAllVillains, villainSlug, newVillain } = require('./controllers/villains');
const app = express();

app.get('/villains', getAllVillains)

app.get('/villains/ :slug', villainSlug)

app.post('/villains', bodyParser.json(), newVillain)

app.listen(1337, () => {
  console.log('listening on 1337...')
})