var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var app = express()

module.exports = function() {

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({ extended: true}));

    load('routes', {cwd:'app'}).then('infra').into(app);

    return app;
}
