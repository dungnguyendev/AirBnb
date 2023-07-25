const express = require('express');
const db = require('../models/db');
const router = express.Router();

router.get('/', function (req, res, next) {
    let sql = `SELECT * FROM comment`;
    db.query(sql, function (err, data) {
        if (err) {
            return next(err);
        }
        res.json(data);
    });
});
module.exports = router;