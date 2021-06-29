exports.paginaInicial = (req, res) => {
    res.render('index');

}

exports.create = (req, res) => {
    res.send("Ei sou sua nova rota de post")
}