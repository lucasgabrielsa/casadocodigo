module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        var mysql = require('mysql');
        var connection = app.infra.connectionFactory();

        connection.query('select * from produtos', function(erro,results) {
          res.render("produtos/lista", { livros:results });
          //res.send(results);
        });

         connection.end();
        //res.send("<html><body>Listando os produtos..</body></html>");
        //res.render("produtos/lista");
    });
}
