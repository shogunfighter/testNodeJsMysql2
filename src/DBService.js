const mysql = require('mysql2');
const {host, user, password, port, database, debug} = require("./db_config.json");

module.exports = {
    createConnectionDB: (dbName) => {
        return mysql.createConnection({
            host,
            user,
            password,
            port,
            database: dbName,
            debug
        });
    },
    createConnectionTable: (dbName, tableName) => {
        return mysql.createConnection({
            host,
            user,
            password,
            port,
            database,
            debug
        });

    }

};
