var mysql = require('mysql');

//FACTORY METHOD
function createDBConnection() {
  console.log('conexao criada!');
  return connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'123',
    database:'casadocodigo_nodejs'
  });
};

module.exports = function() {
  return createDBConnection;
}
