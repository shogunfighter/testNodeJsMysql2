// https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

con.connect(
    (err) => {
        if (err) throw err;
        console.log("Connected!");

        // #1 Insert a record in the "customers" table:
        let sql1 = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
        con.query(sql1, (err, result) => {
            if (err) throw err;
            console.log("Demo[#1] insert 1 record");
        });

        // Fill the "customers" table with data:
        let sql2 = "INSERT INTO customers (name, address) VALUES ?";
        let values = [
            ['John', 'Highway 71'],
            ['Peter', 'Lowstreet 4'],
            ['Amy', 'Apple st 652'],
            ['Hannah', 'Mountain 21'],
            ['Michael', 'Valley 345'],
            ['Sandy', 'Ocean blvd 2'],
            ['Betty', 'Green Grass 1'],
            ['Richard', 'Sky st 331'],
            ['Susan', 'One way 98'],
            ['Vicky', 'Yellow Garden 2'],
            ['Ben', 'Park Lane 38'],
            ['William', 'Central st 954'],
            ['Chuck', 'Main Road 989'],
            ['Viola', 'Sideway 1633']
        ];
        con.query(sql2, [values], (err, result) => {
            if (err) throw err;
            console.log("Demo[#2] multiple record insertion. Number of records inserted:" + result.affectedRows);
        });

        // Insert a record in the "customers" table, and return the ID:
        let sql3 = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
        con.query(sql3, (err, result) => {
            if (err) throw err;
            console.log("Demo[#3] insert a record and show the ID:" + result.insertId);
        });

        con.end();
    }
);
