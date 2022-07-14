const mysql = require('mysql2');

// lookup the values in docker-compose.yml
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'helloworld',
    database: 'testapp',
    port: 3308,
    debug: false
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// const mysql = require('mysql');
// const pool = mysql.createPool({
//     connectionLimit: 100,
//     host: 'localhost',
//     user: 'root',
//     password: 'helloworld',
//     database: 'testapp',
//     port: 3308,
//     debug: false
// });
//
// pool.getConnection((err, connection) => {
//     return new Promise((resolve, reject) => {
//         if (err) {
//             if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//                 reject('Database connection was closed.');
//             }
//             if (err.code === 'ER_CON_COUNT_ERROR') {
//                 reject('Database has too many connections.');
//             }
//             if (err.code === 'ECONNREFUSED') {
//                 reject('Database connection was refused.');
//             }
//         }
//         if (connection) connection.release();
//         resolve();
//     });
// });
//
// module.exports = pool;
