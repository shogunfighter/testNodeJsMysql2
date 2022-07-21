// https://www.w3schools.com/nodejs/nodejs_mysql_where.asp

const mysql = require('mysql2');

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

con.connect(
    (err) => {
        if (err) throw err;
        console.log("Connected!");

        // Select record(s) with the address "Park Lane 38":
        con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", (err, result) => {
            if (err) throw err;
            console.log("Demo[#1] select record(s) with the address \"Park Lane 38\":\n",  result);
        });

        // Select records where the address starts with the letter 'S':
        con.query("SELECT * FROM customers WHERE address LIKE 'S%'", (err, result) => {
            if (err) throw err;
            console.log("Demo[#2] select record(s) where the address starts with the letter 'S':\n", result);
        });

        let adr = 'Mountain 21';

        // Escape query values by using the mysql.escape() method:
        let method1_sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);
        con.query(method1_sql, (err, result) => {
            if (err) throw err;
            console.log("Demo[#3] select record(s) where the address starts with the letter 'S':\n", result);
        });

        // Escape query values by using the placeholder ? method:
        let method2a_sql = "SELECT * FROM customers WHERE address = ?";
        let method2a_param = [adr];
        con.query(method2a_sql, method2a_param, (err, result) => {
            if (err) throw err;
            console.log("Demo[#4] select record(s) Escape query values by using the placeholder ? method:\n", result);
            console.log(result);
        });

        // Multiple placeholders:
        let name = 'Amy';
        let method2b_sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
        let method2b_param = [name, adr];
        con.query(method2b_sql, method2b_param, (err, result) => {
            if (err) throw err;
            console.log("Demo[#5] select record(s) Escape query values by using multiple placeholders:\n", result);
        });

        con.end();
    }
);
