const con = require('./connection')

const orm = {
    selectAll: function() {
        const queryString = 'SELECT * FROM burgers'
       return new Promise((resovle, reject) => {
           con.query(queryString, (err, res) => {
            if (err) {
                return reject(err)
            }
            //console.log(res)
            return resovle(res)
        })
      })
    },
    insertOne: function(burgerName, burgerBoo) {
        const queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)'
        return new Promise((resovle, reject) => {
        con.query(queryString, [burgerName, burgerBoo], (err, res) => {
            if (err) {
                return reject(err)
            }
            return resovle(res)
        })
      })
    },
    updateOne: function(burBoo,burgerID) {
        const queryString = 'UPDATE burgers SET devoured = (?) WHERE id = (?)'
        return new Promise((resovle, reject) => {
        con.query(queryString, [burBoo,burgerID], (err, res) => {
            if (err) {
                return reject(err)
            }
            return resovle(res)
        })
      })
    }
}

module.exports = orm