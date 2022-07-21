// https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

con.connect(
    (err) => {
        if (err) throw err;
        console.log("Connected!");

        // Create a table named "customers":
        let sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
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

        // Close the connection to the database so the Node.js process can close. Otherwise,
        // the process will remain open until the database kills the connection.
        // --
        // NOTE: The .end() is a graceful operation on the connection - it will flush any
        // queued queries before it sends the quit command to the MySQL server.
        con.end();
    }
);

// // Create primary key when creating the table:
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     let sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created");
//
//     });
//
//     // Close the connection to the database so the Node.js process can close. Otherwise,
//     // the process will remain open until the database kills the connection.
//     // --
//     // NOTE: The .end() is a graceful operation on the connection - it will flush any
//     // queued queries before it sends the quit command to the MySQL server.
//     con.end();
// });
//
// // Create primary key on an existing table:
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     let sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table altered");
//     });
//
//     // Close the connection to the database so the Node.js process can close. Otherwise,
//     // the process will remain open until the database kills the connection.
//     // --
//     // NOTE: The .end() is a graceful operation on the connection - it will flush any
//     // queued queries before it sends the quit command to the MySQL server.
//     con.end();
// });
