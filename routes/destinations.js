var express = require('express');
var router = express.Router();
var db = require('../config/db');

router.get('/', function(req, res, next) {
  console.log('inside get route');
  db.query(`SELECT * FROM dest`, function(err, result) {
    if(err) {
      res.status(400).send(err);
      return;
    }
    res.send(result);
  });
});

// router.post('/entry', function(req, res) {
// var post = req.body.dest;
// var post2 = req.body.blog;
//
// console.log('req.body:', req.body.dest);
// console.log('req.body:', req.body.blog);
// db.query('INSERT INTO dest SET ?', post, function(err, result) {
//   if(err) {
//     res.status(400).send(err);
//     return;
//     }
//   });
// // db.query('INSERT INTO dest SET ?', post2, function(err, result) {
// //   if(err) {
// //     res.status(400).send(err);
// //     return;
// //     }
// //   });
// res.send();
// });

module.exports = router;
