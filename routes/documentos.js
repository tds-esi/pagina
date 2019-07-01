var express = require('express')
var router = express.Router()
var db = require('../db/db.js')

router.get('/',(req,res) => {
  db.getDocumentos((documentos) => {
    res.render('documentos', {documentos})
  })
})


module.exports = router
