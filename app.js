var express = require('express')
var app = express()
const PORT = 8080

app.get('/',(req,res) => {
	res.send('TDS y gremio')
})


app.listen(PORT,() => {
	console.log(`Funcionando en puerto: ${PORT}`)
})
