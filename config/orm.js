const con = require('./connection')

const orm = {
    selectAll: function() {
        const queryString = 'SELECT * FROM burgers_db'
        con.query(queryString, (err, res) => {
            if (err) {
                throw err
            }
        })
    },
    insertAll: function(burgerName) {
        const queryString = 'INSERT INTO burgers VALUES (?)'
        con.query(queryString, [burgerName], (err, res) => {
            if (err) {
                throw err
            }
        })
    },
    updateOne: function(burgerName, burgerID) {
        const queryString = 'UPDATE burgers SET burger = ? WHERE id = ?'
        con.query(queryString, [burgerName, burgerID], (err, res) => {
            if (err) {
                throw err
            }
        } )
    }
}

module.exports = orm