const express = require('express');
const mysql_connection = require('../mysql_connection');
const router = express.Router();
const queries = require('../SQL/queries.js');

router.get('/', (req, res) => {
    mysql_connection.query(queries.selectUsers, (err, rows, fields) => {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
