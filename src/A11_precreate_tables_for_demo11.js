// // users
// [
//     { id: 1, name: 'John', favorite_product: 154},
//     { id: 2, name: 'Peter', favorite_product: 154},
//     { id: 3, name: 'Amy', favorite_product: 155},
//     { id: 4, name: 'Hannah', favorite_product:},
//     { id: 5, name: 'Michael', favorite_product:}
// ]
//
// // products
// [
//     { id: 154, name: 'Chocolate Heaven' },
//     { id: 155, name: 'Tasty Lemons' },
//     { id: 156, name: 'Vanilla Dreams' }
// ]

// https://www.w3schools.com/nodejs/nodejs_mysql_create_table.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

con.connect(
    (err) => {
        if (err) throw err;
        console.log("Connected!");

        // Create a table named "users":
        con.query("CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, favorite_product INT, name VARCHAR(255))", (err, result) => {
            if (err) throw err;

            switch (result.warningStatus) {
                case 0:
                    console.log("Demo table (users) created");
                break;
                case 1:
                    console.log("Demo table (users) may already exist");
                break;
            }
        });

        let values_users = [
            ['John', 154],
            ['Peter', 154],
            ['Amy', 155],
            ['Hannah', null],
            ['Michael', null]
        ];

        con.query("INSERT INTO users (name, favorite_product) VALUES ?", [values_users], (err, result) => {
            if (err) throw err;
            console.log("Demo table (users) dummy record insertion. Number of records inserted:" + result.affectedRows);
        });

        // Create a table named "products":
        con.query("CREATE TABLE IF NOT EXISTS products (id INT PRIMARY KEY, name VARCHAR(255))", (err, result) => {
            if (err) throw err;

            switch (result.warningStatus) {
                case 0:
                    console.log("Demo table (products) created");
                break;
                case 1:
                    console.log("Demo table (products) may already exist");
                break;
            }
        });

        let values_products = [
            [154, 'Chocolate Heaven'],
            [155, 'Tasty Lemons'],
            [156, 'Vanilla Dreams']
        ];

        con.query("INSERT INTO products (id, name) VALUES ?", [values_products], (err, result) => {
            if (err) throw err;
            console.log("Demo table (products) dummy record insertion. Number of records inserted:" + result.affectedRows);
        });

        // Close the connection to the database so the Node.js process can close. Otherwise,
        // the process will remain open until the database kills the connection.
        // --
        // NOTE: The .end() is a graceful operation on the connection - it will flush any
        // queued queries before it sends the quit command to the MySQL server.
        con.end();
    }
);
