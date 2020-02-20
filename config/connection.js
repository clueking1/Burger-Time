const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
})

con.connect(err => {
    if (err) {
        throw err
    }
})

module.exports = con