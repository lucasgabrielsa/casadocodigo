module.exports = function(app) {

    app.get('/produtos', function(req, res) {
        var mysql = require('mysql');
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.lista(function(erro, results) {
            if (erro) {
                res.send(erro);
            } else {
                res.render("produtos/lista", { livros: results, titulo: 'Lista de Produtos'   });
            }
        });

        connection.end();
        console.log('conexao fechada');
    });

}
