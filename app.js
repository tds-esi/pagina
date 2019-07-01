var express = require('express')
var app = express()
var bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080

console.log(PORT)
var route_noticias = require('./routes/noticias.js')
var route_calendario = require('./routes/calendario.js')
var route_documentos = require('./routes/documentos.js')
var route_talleres = require('./routes/talleres.js')
var route_material = require('./routes/material.js')
var route_nosotros = require('./routes/nosotros.js')
var route_usuario = require('./routes/usuario.js')

app.set('view engine','pug')
app.use('/static',express.static('static'))

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/',(req,res) => {
	res.render('landing')
})

app.use('/noticias', route_noticias)
app.use('/calendario', route_calendario)
app.use('/documentos', route_documentos)
app.use('/talleres', route_talleres)
app.use('/material', route_material)
app.use('/nosotros', route_nosotros)
app.use('/u', route_usuario)

app.listen(PORT,() => {
	console.log(`Funcionando en puerto: ${PORT}`)
})
