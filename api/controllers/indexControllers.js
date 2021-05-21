const indexController = require('../models/indexModels.js');

module.exports = {
    indexControllers, 
    getVrMysql,
}

function indexControllers(req, res){
    res.render('index.ejs', {title:  'Projeto NodeJs - Rotas',
                             texto:  'Menu Principal',
                             versao: '* Versão Mysql *',
                             data:   '* Obter Data *',
                             hora:   '* Obter Hora *'
    });
};

function getVrMysql(req, res) {
    console.log('Dentro do controllers\n {GET Versão Mysql }');
    indexControllers.versaoMysql(function(err, resultado) {
        console.log("Versão obtida: ", resultado);
        res.send(resultado);
    });
};
