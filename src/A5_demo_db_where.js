// https://www.w3schools.com/nodejs/nodejs_mysql_where.asp

const DB_NAME = "mydb";

const {createConnection} = require("./DBService");
const con = createConnection(DB_NAME);

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});


var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
});


var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ?';
con.query(sql, [adr], function (err, result) {
    if (err) throw err;
    console.log(result);
});

var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
});
