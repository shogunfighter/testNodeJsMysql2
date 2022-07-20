// https://www.w3schools.com/nodejs/nodejs_mysql.asp
// https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp
const {createConnection} = require("./DBService");

const con = createConnection();
const DB_NAME = "mydb";


con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // Syntax: CREATE DATABASE db_name
    // Syntax: CREATE DATABASE [IF NOT EXISTS] db_name -> has check flags and safe to create db
    con.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`, (err, result) => {
        if (err) throw err;
        console.log("Database result:", result);
        console.log("Database created");
    });

// Database result: ResultSetHeader {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 0,
//     info: '',
//     serverStatus: 2,
//     warningStatus: 0
// }

// Database result: ResultSetHeader {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 0,
//     info: '',
//     serverStatus: 2,
//     warningStatus: 1
// }



});
