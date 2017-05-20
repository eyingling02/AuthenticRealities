const express = require('express');
const app = express();

const appPage = (__dirname + '/app/views/app.html')
const indexPage = (__dirname + '/app/views/index.html')
const aboutPage = (__dirname + '/app/views/about.html')
app.use(express.static(__dirname + '/static'))



app.get('/', function ( req, res, next ) {
  try {
    res.sendFile(indexPage)
  } catch (e) {
    next(e)
  }
})


app.get('/app', function ( req, res, next ) {
  try {
    res.sendFile(appPage)
  } catch (e) {
    next(e)
  }
})

app.get('/about', function ( req, res, next ) {
  try {
    res.sendFile(aboutPage)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
