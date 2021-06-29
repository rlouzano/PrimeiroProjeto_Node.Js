exports.paginaInicial = (req, res) => {
    res.render('index');

}

exports.create = (req, res) => {
    res.send(req.body)
}