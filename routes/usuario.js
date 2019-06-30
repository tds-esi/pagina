var express = require('express')
var router = express.Router()

router.get('/',(req,res) => {
  res.render('implementar')
})

router.get('/:id',(req,res) => {
  res.render('implementar')
})


module.exports = router
