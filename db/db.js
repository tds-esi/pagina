var fs = require('fs')
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

// Noticias
var getNoticias = (callback) => {
  fs.readFile('./db/json/noticias.json', (err, noticias) => {
  if (err) throw err;
  callback(JSON.parse(noticias));
});
}

var addNoticia = (noticia, callback) => {
  getNoticias((noticias) => {
    noticias.push(noticia)
    fs.writeFile('/db/json/noticias.json', JSON.stringify(noticias,null,2), (err) => {
      if (err) throw err;
      callback()
    });
  })
}

// Documentos
var getDocumentos = (callback) => {
  fs.readFile('./db/json/documentos.json', (err, documentos) => {
  if (err) throw err;
  callback(JSON.parse(documentos));
});
}

var addDocumento = (documento, callback) => {
  getDocumentos((documentos) => {
    noticias.push(documento)
    fs.writeFile('/db/json/documentos.json', JSON.stringify(documentos,null,2), (err) => {
      if (err) throw err;
      callback()
    });
  })
}

module.exports = {
  getNoticias,
  addNoticia,
  getDocumentos,
  addDocumento
}
