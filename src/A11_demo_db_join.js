// https://www.w3schools.com/nodejs/nodejs_mysql_join.asp
const mysql = require('mysql2');
const {host, user, password, port, database, debug} = require("./db_config.json");

const con = mysql.createConnection({
    host,
    user,
    password,
    port,
    database,
    debug
});

con.connect(function(err) {
    if (err) throw err;
    let sql = `SELECT users.name AS user,
                products.name AS favorite
        FROM users
        JOIN products
        ON users.favorite_product = products.id`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

// // Left Join
// // If you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statement:
// // Select all users and their favorite product:
// SELECT users.name AS user,
//     products.name AS favorite
// FROM users
// LEFT JOIN products ON users.favorite_product = products.id
//
// // Right Join
// // If you want to return all products, and the users who have them as their favorite, even if no user have them as their favorite, use the RIGHT JOIN statement:
// // Select all products and the user who have them as their favorite:
// SELECT users.name AS user,
//     products.name AS favorite
// FROM users
// RIGHT JOIN products ON users.favorite_product = products.id
