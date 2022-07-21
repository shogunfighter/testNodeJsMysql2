// https://www.w3schools.com/nodejs/nodejs_mysql_drop_table.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

con.connect(
    (err) => {
        if (err) throw err;
        console.log("Connected!");

        // DROP TABLE customers                 => unsafe
        // DROP TABLE IF EXISTS customers       => safe
        con.query("DROP TABLE IF EXISTS customers", (err, result) => {
            if (err) throw err;
            console.log("Demo Delete the table \"customers\" if it exists:", result);

            switch (result.warningStatus) {
                // table deleted
                case 0:
                    console.log("DB deleted");
                break;
                // table was not deleted
                case 1:
                    console.log("DB may not already exist");
                break;
            }

        });

        con.end();
    }
);
