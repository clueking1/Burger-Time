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
    insertOne: function(burgerName) {
        const queryString = 'INSERT INTO burgers VALUES (?)'
        return new Promise((resovle, reject) => {
        con.query(queryString, [burgerName], (err, res) => {
            if (err) {
                return reject(err)
            }
            return resovle(res)
        })
      })
    },
    updateOne: function(burgerName, burgerID) {
        const queryString = 'UPDATE burgers SET burger = ? WHERE id = ?'
        return new Promise((resovle, reject) => {
        con.query(queryString, [burgerName, burgerID], (err, res) => {
            if (err) {
                return reject(err)
            }
            return resovle(res)
        })
      })
    }
}

module.exports = orm