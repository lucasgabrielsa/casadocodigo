var http = require('http');

var server = http.createServer(function(req, res){

  if(req.url == '/produtos') {
      res.end("<html><body><h3>Listando os produtos..</h3></body></html>");
  } else {
      res.end("<html><body><h3>Home - Casa do Código</h3></body></html>");
  }


});

server.listen(3000);

console.log('servidor rodando..');
