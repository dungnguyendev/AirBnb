const express = require('express');
const db = require('../models/db');


const router = express.Router();

router.get('/', function (req, res, next) {
    let sql = `SELECT * FROM rented_room`;
    db.query(sql, function (err, data) {
        if (err) {
            return next(err);
        }
        res.json(data);
    });
});
router.get('/detail/:id', function (req, res, next) {
    let sql = `SELECT * FROM rented_room WHERE codeRoom = ${req.params.id} `;
    db.query(sql, function (err, data) {
        if (err) {
            return next(err);
        }
        res.json(data);
    });
});
router.get('/location/:id', function (req, res, next) {
    let sql = `SELECT * FROM rented_room WHERE locationCode = ${req.params.id} `;
    db.query(sql, function (err, data) {
        if (err) {
            return next(err);
        }
        res.json(data);
    });
});
router.post('/search', function (req, res, next) {
    const searchTerm = req.body.search1; 
    const sql = `SELECT * FROM rented_room WHERE roomName LIKE '%${searchTerm}%'`;
    db.query(sql, function (err, results) {
        if (err) {
            console.error('Lỗi truy vấn cơ sở dữ liệu:', err);
            return next(err);
        }
        res.json(results);
    });
});


module.exports = router;