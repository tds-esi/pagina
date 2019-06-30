var express = require('express')
var router = express.Router()
var db = require('../db/db.js')

router.get('/',(req,res) => {
  db.getNoticias((noticias) => {
    res.render('noticias', {noticias})
  })
})

router.get('/:id',(req,res) => {
  db.getNoticias((noticias) => {
    if (noticias.length > req.params.id && 0 <= req.params.id) {
      res.render('noticia', {noticia:noticias[req.params.id]})
    }
  })
})


module.exports = router
