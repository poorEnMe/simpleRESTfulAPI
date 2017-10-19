const mysql = require('mysql');
const config = require('../config');

module.exports.pool = mysql.createPool({
    connectionLimit : 10,
    host:config.mysql.host,
    port:config.mysql.port,
    database:config.mysql.database,
    user:config.mysql.user,
    password:config.mysql.password,
    charset:'utf8'
});
module.exports.format = mysql.format;
    /*let connection = mysql.createConnection({
        host:config.mysql.host,
        port:config.mysql.port,
        database:config.mysql.database,
        user:config.mysql.user,
        password:config.mysql.password,
        charset:'utf8'
    });
    connection.on("close",(err)=>{
        console.log('mysql closed');
    });

    connection.on("error",(err)=>{
        console.log('mysql err:'+err);
    });
    connection.connect(function (err) {
        if (err) {
            console.log("SQL CONNECT ERROR: ", err);
        } else {
            console.log("SQL CONNECT SUCCESSFUL.");
        }
    });*/




