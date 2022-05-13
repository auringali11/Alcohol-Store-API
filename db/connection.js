const mysql = require("mysql")
const util = require('util')

var mysqlConnection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    multipleStatements: true
});

mysqlConnection.connect((err) =>{
    if (!err)
    console.log('DB connected succesfully,.');
    else
    console.log('DB connection failed. \n Error: '+JSON.stringify(err, undefined, 2));

    mysqlConnection.query = util.promisify(mysqlConnection.query).bind(mysqlConnection)
});

module.exports = mysqlConnection