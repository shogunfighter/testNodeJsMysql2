// https://www.w3schools.com/nodejs/nodejs_mysql_update.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

con.connect(
    (err) => {
        if (err) throw err;
        console.log("Connected!");

        // Overwrite the address column from "Valley 345" to "Canyon 123":
        con.query("UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'", (err, result) => {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
        });

        con.end();
    }
);
