// https://www.w3schools.com/nodejs/nodejs_mysql_select.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

con.connect(
    (err) => {
        if (err) throw err;
        console.log("Connected!");

        // Select all records from the "customers" table, and display the result object:
        con.query("SELECT * FROM customers", (err, result, fields) => {
            if (err) throw err;
            console.log("Demo[#1] show all records in the table:", result);
        });

        // Select name and address from the "customers" table, and display the `result` and `fields` object:
        con.query("SELECT name, address FROM customers", (err, result, fields) => {
            if (err) throw err;
            console.log("Demo[#2] show the `result` and `fields` object of the table:", {result,fields});
        });

        con.end();
    }
);
