var http = require('http');

var config = {
  hostname: 'localhost',
  port: 3000,
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept':'application/json',
    'Content-Type':'application/json'
  }
};

var client = http.request(config, function(res){
  console.log(produto);
  console.log(res.statusCode);
  res.on('data', function(body){
    console.log('Corpo:'+ body);
  });
});

var produto = {
  nome: 'mais sobre node',
  descricao: 'node, javascript e um pouco sobre http',
  preco: 100
};

client.end(JSON.stringify(produto));
