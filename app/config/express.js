var app = require('express')();
app.set('view engine', 'ejs');

module.exports = function() {
  console.log('modulo esta sendo carregado');
  return app;
}
