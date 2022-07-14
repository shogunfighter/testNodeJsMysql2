// https://www.w3schools.com/nodejs/nodejs_mysql_limit.asp

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

// Select the 5 first records in the "customers" table:
con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

// Start from position 3, and return the next 5 records:
con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

// Start from position 3, and return the next 5 records:
con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 2, 5";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
