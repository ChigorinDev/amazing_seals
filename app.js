const express = require('express')
const data = require('./data');
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.listen(port)

app.use('/assets', express.static(__dirname + '/assets'))

//setting routes
app.get('/', (req, res) => { 
  res.render('index', {data})
})

app.get('/seal-profile/:id', (req, res) => { 
  let id = req.params.id
  let profile = data.seals.find(seals => id == seals.id);
  // console.log(profile)
  res.render('seal-profile', {profile});
})

app.get('/seals', (req, res) => { 
  res.render('seals', { data })
  
})

app.get('/facts', (req, res) => { 
  res.render('facts')
})
