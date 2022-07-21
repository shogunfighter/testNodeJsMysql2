// https://www.w3schools.com/nodejs/nodejs_mysql_orderby.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

con.connect(
    (err) => {
        if (err) throw err;
        console.log("Connected!");

        // Sort the result alphabetically by name:
        con.query("SELECT * FROM customers ORDER BY name", (err, result) => {
            if (err) throw err;
            console.log("Demo[#1] Sort the result alphabetically by name:\n",  result);
        });

        // Sort the result reverse alphabetically by name:
        con.query("SELECT * FROM customers ORDER BY name DESC", (err, result) => {
            if (err) throw err;
            console.log("Demo[#2] Sort the result reverse alphabetically by name:\n",  result);
        });

        con.end();
    }
);
