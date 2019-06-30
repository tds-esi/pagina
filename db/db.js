var fs = require('fs')

var getNoticias = (callback) => {
  fs.readFile('./db/json/noticias.json', (err, data) => {
  if (err) throw err;
  callback(JSON.parse(data));
});
}

var addNoticia = (noticia, callback) => {
  getNoticias((noticias) => {
    noticias.push(noticia)
    fs.writeFile('/db/json/noticias', JSON.stringify(noticias,null,2), (err) => {
      if (err) throw err;
      callback()
    });
  })
}

module.exports = {
  getNoticias,
  addNoticia
}
