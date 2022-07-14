const mysql = require('mysql2');
const {host, user, password, port, debug} = require("./db_config.json");

const con = mysql.createConnection(
    {
        host,
        user,
        password,
        port,
        debug
    }
);

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // con.query("CREATE DATABASE mydb", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    // });

    // Syntax: CREATE DATABASE db_name
    // Syntax: CREATE DATABASE [IF NOT EXISTS] db_name -> safe create
    con.query("CREATE DATABASE IF NOT EXISTS mydb2", function (err, result) {
        if (err) throw err;
        console.log("Database result:", result);
        console.log("Database created");
    });
});
