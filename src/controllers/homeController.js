const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Um titulo de teste',
    descricao: 'Uma descricao de teste'
}).then(dados => console.log(dados))
.catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
    res.render('index');

}

exports.creater = (req, res) => {
    res.send(req.body)
}