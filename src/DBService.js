const mysql = require('mysql2');
const {host, user, password, port, database, debug} = require("./db_config.json");

module.exports = {
    createConnection: (dbName) => {
        let conf = {
            host,
            user,
            password,
            port,
            database,
            debug
        };

        if (!dbName) delete conf.database;

        return mysql.createConnection(conf);
    }
};
