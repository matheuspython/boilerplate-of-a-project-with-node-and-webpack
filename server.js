const express = require("express")
const app = express()
const path = require("path")
const { route } = require('./routes')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views',path.resolve(__dirname,'src','views'))
app.set("view engine", 'ejs')

app.use(route)

app.listen(3000, ()=> console.log('server rodando 🚀'))