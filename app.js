var express = require('express')
var app = express()
const PORT = 8080

var route_noticias = require('./routes/noticias.js')

app.set('view engine','pug')
app.use('/static',express.static('static'))

app.get('/',(req,res) => {
	res.render('landing')
})

app.use('/noticias', route_noticias)

app.listen(PORT,() => {
	console.log(`Funcionando en puerto: ${PORT}`)
})
