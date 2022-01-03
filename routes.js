const express = require("express");
const route = express.Router();

const { paginaInicialHome,trataPost } = require("./src/controllers/HomeController")
const { paginaInicialContato } = require("./src/controllers/contatoControler")

route.get('/',paginaInicialHome)
route.post('/', trataPost)

route.get("/contato", paginaInicialContato)


module.exports = {
  route
}