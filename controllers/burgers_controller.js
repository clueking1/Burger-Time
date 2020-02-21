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
    const newBurs = orm.insertOne(req.body.burger_name, 0)
   newBurs.then(ans => {

        res.json({ id: ans.insertId })
    })
})

routes.put('/:id', (req, res) => {

    const eatBur = orm.updateOne(true, req.params.id)
    eatBur.then(ans => {
        res.status(200).end()
     })
})

routes.put('/api/:id', (req, res) => {

    const eatBur = orm.updateOne(false, req.params.id)
    eatBur.then(ans => {
        res.status(200).end()
     })
})

module.exports = routes