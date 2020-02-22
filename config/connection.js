const mysql = require('mysql')
if(process.env.JAWSDB_URL) {
    const con = mysql.createConnection(process.env.JAWSDB_URL)
} else {
const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'burgers_db'
})
}

con.connect(err => {
    if (err) {
        throw err
    }
})

module.exports = con