// https://www.w3schools.com/nodejs/nodejs_mysql.asp
// https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp
const {createConnection} = require("./DBService");

const con = createConnection();
const DB_NAME = "mydb";

con.connect(
    (err) => {
        if (err) throw err;
        console.log("Connected!");

        // Syntax: CREATE DATABASE db_name
        // Syntax: CREATE DATABASE [IF NOT EXISTS] db_name -> has check flags and safe to create db
        con.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`, (err, result) => {
            if (err) throw err;

            console.log("Database result:", result);

            switch (result.warningStatus) {
                case 0:
                    console.log("DB created");
                break;
                case 1:
                    console.log("DB may already exist");
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
