const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ecommerce-databse',
    password: 'root'
});

module.exports = pool.promise();