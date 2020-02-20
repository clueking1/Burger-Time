const express = require('express')
const routes = require('./controllers/burgers_controller')


PORT = process.env.PORT || 8080

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(routes)

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})
