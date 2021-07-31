const mySql = require('../configs/connectPool');
const bcrypt = require('bcryptjs');

exports.cekUsername = (username) => {
    return new Promise((resolve, reject) => {
        mySql.getConnection(function(err, connection) {
            if (err) {
                console.log('error connection q_register.cekUsername: '+err.message);
                reject(err.message);
            } else {
                const sql = `SELECT username
FROM users
where username = ?
LIMIT 1`;
                connection.query(sql,[username], function (error, results, fields) {
                    connection.release();
                    if (error) {
                        console.log('error query q_register.cekUsername: '+error.message);
                        reject(error.message);
                    } else {
                        resolve(results);
                    }
                });
            }
        });
    })
}

exports.hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                if(err) {
                    console.log('error q_register.hashPassword: '+error)
                    reject(err.message);
                } else {
                    resolve(hash)
                }
            });
        });
    })
}

exports.insert = (data) => {
    return new Promise((resolve, reject) => {
        mySql.getConnection(function(err, connection) {
            if (err) {
                console.log('error connection q_register.insert: '+err.message);
                reject(err.message);
            } else {
                const sql = `INSERT INTO users SET ?`;
                connection.query(sql,[data], function (error, results, fields) {
                    connection.release();
                    if (error) {
                        console.log('error query q_register.insert: '+error.message);
                        reject(error.message);
                    } else {
                        resolve(true);
                    }
                });
            }
        });
    })
}