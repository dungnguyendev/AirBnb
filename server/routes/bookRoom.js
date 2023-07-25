const express = require('express');
const db = require('../models/db');
const router = express.Router();

router.get('/', function (req, res, next) {
    let sql = `SELECT * FROM book_room`;
    db.query(sql, function (err, data) {
        if (err) {
            return next(err);
        }
        res.json(data);
    });
});
router.post('/order', function (req, res, next) {
    let bookRoom = {
        roomCode: req.body.roomCode,
        arrivalDay: req.body.arrivalDay,
        dayOut: req.body.dayOut,
        theNumberGuests: req.body.theNumberGuests,
        userCode: req.body.userCode,
    };
    let sql = `INSERT INTO book_room SET ?`;
    db.query(sql, bookRoom, function (err, data) {
        if (err) {
            return next(err);
        }
        res.json({ message: 'Đặt phòng thành công' });
    });
});
module.exports = router;
