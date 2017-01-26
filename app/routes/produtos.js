module.exports = function(app) {

    var listaProdutos = function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(erro, results) {
            if (erro) {
                res.send(erro);
            } else {
                res.render("produtos/lista", {
                    livros: results,
                    titulo: 'Lista de Produtos' });
            }
        });
        connection.end();
    };

    app.get('/produtos', listaProdutos);

    app.get('/produtos/novo', function(req, res) {
        res.render("produtos/form", {
            titulo: 'Cadastro de Novo Produto'
        });
    });

    app.post("/produtos", function(req, res) {
        var produto = req.body;
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(erros, results) {
          if(erros) {
            res.send(erros);
          } else {
            res.redirect('/produtos');
          }
        });
    });

}
