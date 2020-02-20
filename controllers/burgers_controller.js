const express = require('express')
//const bur = require('../models/burger')
const orm = require('../config/orm')
const routes = express.Router()

routes.get('/', (req, res) => {
    const allBurs = orm.selectAll()
    allBurs.then( ans =>
      res.render('index', {burgers: ans})
    )

})

routes.post('/', (req, res) => {
    const newBurs = orm.insertOne(req.body.newBurger)
    newBurs.then(ans => {
        res.json({ id: ans.insertId })
    })
})

module.exports = routes