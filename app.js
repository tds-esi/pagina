var express = require('express')
var app = express()
const PORT = 8080

app.set('view engine','pug')
app.use('/static',express.static('static'))

app.get('/',(req,res) => {
	res.render('landing')
})


app.listen(PORT,() => {
	console.log(`Funcionando en puerto: ${PORT}`)
})
