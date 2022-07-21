// https://www.w3schools.com/nodejs/nodejs_mysql_limit.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

con.connect(
    (err) => {
        if (err) throw err;
        console.log("Connected!");

        // Select the 5 first records in the "customers" table:
        con.query("SELECT * FROM customers LIMIT 5", (err, result) => {
            if (err) throw err;
            console.log("Demo [#1] Select the 5 first records in the \"customers\" table:\n", result);
        });

        // Start from position 3, and return the next 5 records:
        con.query("SELECT * FROM customers LIMIT 5 OFFSET 2", (err, result) => {
            if (err) throw err;
            console.log("Demo [#2] Start from position 3, and return the next 5 records:\n", result);
        });

        // Start from position 3, and return the next 5 records:
        con.query("SELECT * FROM customers LIMIT 2, 5", (err, result) => {
            if (err) throw err;
            console.log("Demo [#3] Start from position 3, and return the next 5 records:\n", result);
        });

        con.end();
    }
);

