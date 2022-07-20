// https://www.w3schools.com/nodejs/nodejs_mysql_select.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

// Select all records from the "customers" table, and display the result object:
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

// // Select name and address from the "customers" table, and display the return object:
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });
//
// // Select all records from the "customers" table, and display the fields object:
// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//         if (err) throw err;
//         console.log(fields);
//     });
// });
