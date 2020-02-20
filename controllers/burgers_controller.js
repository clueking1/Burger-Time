const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

module.exports = ex