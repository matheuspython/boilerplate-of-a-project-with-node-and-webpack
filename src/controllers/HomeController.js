exports.paginaInicialHome = (req, res)=>{
  res.render('index')
}

exports.trataPost = (req, res) => {
  res.send('sou sua nova rota de post')
}