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
    var sql = "DROP TABLE customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE IF EXISTS customers";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
