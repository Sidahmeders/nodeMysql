const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    user: process.env.USER_NAME,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASETABLE
});

db.connect((err) => {
    if (err) console.log(err);
    console.log('mySql conected...');
});

module.exports = db;
