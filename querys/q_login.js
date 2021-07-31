const mySql = require('../configs/connectPool');
const bcrypt = require('bcryptjs');

exports.cekUsername = (username) => {
    return new Promise((resolve, reject) => {
        mySql.getConnection(function(err, connection) {
            if (err) {
                console.log('error connection q_login.cekUsername: '+err.message);
                reject(err.message);
            } else {
                const sql = `SELECT id,username,password,is_verification,create_date,update_date
FROM users
where username = ?
LIMIT 1`;
                connection.query(sql,[username], function (error, results, fields) {
                    connection.release();
                    if (error) {
                        console.log('error query q_login.cekUsername: '+error.message);
                        reject(error.message);
                    } else {
                        resolve(results);
                    }
                });
            }
        });
    })
}

exports.hashPassword = (password,hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function(err, res) {
            if (err) {
                console.log('error q_login.hashPassword: '+error)
                reject(err.message);
            } else {
                if (res) {
                    resolve(true);
                } else {
                    reject('password_salah');
                }
            }
        });
    })
}

exports.hashPassword2 = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                if(err) {
                    console.log('error q_register.hashPassword2: '+error)
                    reject(err.message);
                } else {
                    resolve(hash)
                }
            });
        });
    })
}

exports.update = (password,id) => {
    return new Promise((resolve, reject) => {
        mySql.getConnection(function(err, connection) {
            if (err) {
                console.log('error connection q_register.update: '+err.message);
                reject(err.message);
            } else {
                const sql = `update users set password = ? where id = ?`;
                connection.query(sql,[password,id], function (error, results, fields) {
                    connection.release();
                    if (error) {
                        console.log('error query q_register.update: '+error.message);
                        reject(error.message);
                    } else {
                        resolve(true);
                    }
                });
            }
        });
    })
}