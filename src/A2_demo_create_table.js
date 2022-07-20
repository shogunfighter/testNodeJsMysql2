// https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

// Create a table named "customers":
con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;

        switch (result.warningStatus) {
            case 0:
                console.log("Table created");
            break;
            case 1:
                console.log("Table may already exist");
            break;
        }
    });
});

// // Create primary key when creating the table:
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//     });
// });
//
// // Create primary key on an existing table:
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table altered");
//     });
// });
