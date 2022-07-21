// https://www.w3schools.com/nodejs/nodejs_mysql_delete.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

con.connect(
    (err) => {
        if (err) throw err;
        console.log("Connected!");

        // Delete any record with the address "Mountain 21":
        con.query("DELETE FROM customers WHERE address = 'Mountain 21'", (err, result) => {
            if (err) throw err;
            console.log("Demo[#1] Number of records deleted: ", result.affectedRows);
        });

        con.end();
    }
);
