app.get('/produtos', function(req, res) {
  //res.send("<html><body>Listando os produtos..</body></html>");
  res.render("produtos/lista");
});
