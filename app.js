var app = require('./app/config/express')();
var rotasProdutos = require('./app/routes/produtos')();

/*var express = require('express');
var app = express();*/

app.listen(3000, function() {
  console.log("servidor rodando..")
});
