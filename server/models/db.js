
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost', user: 'bookingroom', password: '123',
    database: 'bookingroom'
});
db.connect(() => console.log('Da ket noi database !'));
module.exports = db;
