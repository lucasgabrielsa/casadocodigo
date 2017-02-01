module.exports = function(app) {

    var listaProdutos = function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(erro, results) {
            if (erro) {
                res.send(erro);
            } else {
              res.format({
                html:function() {
                  res.render("produtos/lista", {
                    livros: results,
                    titulo: 'Lista de Produtos'
                   });
                },
                json: function() {
                  res.json(results);
                }
              });
            }
        });
        connection.end();
    };

    app.get('/produtos', listaProdutos);


    app.get('/produtos/novo', function(req, res) {
        res.render("produtos/form", {
            titulo: 'Cadastro de Novo Produto',
            errosValidacao: {}
        });
    });

    app.post("/produtos", function(req, res) {
        var produto = req.body;

        req.assert('nome', 'Título é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido!').isFloat();

        var erros = req.validationErrors();
        if(erros) {
          res.render('produtos/form', {errosValidacao:erros, titulo: 'Cadastro de Novo Produto'});
          return;
        }

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
