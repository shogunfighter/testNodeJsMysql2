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
    console.log("Connected!");
    let sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});
