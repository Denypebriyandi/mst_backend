const mysql = require('mysql')

let mysqlConnection = mysql.createPool({
    host: 'localhost',
    user: 'administrator',
    password: 'P@$$w0rd01',
    database: 'mst',
    connectionLimit: 100,
    queueLimit: 30,
    waitForConnection: true,
    acquireTimeout: 30000 // 30 second
})

module.exports = mysqlConnection;