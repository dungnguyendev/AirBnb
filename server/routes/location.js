const express = require('express');
const db = require('../models/db');
const router = express.Router();

router.get('/', function (req, res, next) {
    let sql = `SELECT * FROM location`;
    db.query(sql, function (err, data) {
        if (err) {
            return next(err);
        }
        res.json(data);
    });
});
router.get('/location/:idLocation', function (req, res, next) {
    let sql = `SELECT * FROM location WHERE id = ${req.params.idLocation}`;
    db.query(sql, function (err, data) {
        if (err) {
            return next(err);
        }
        res.json(data);
    });
});
router.post('/search', function (req, res, next) {
    const searchTerm = req.body.search1; 
    const sql = `SELECT * FROM location WHERE nameLocation LIKE '%${searchTerm}%'`;
    db.query(sql, function (err, results) {
        if (err) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
            return next(err);
        }
        res.json(results);
    });
});

module.exports = router;