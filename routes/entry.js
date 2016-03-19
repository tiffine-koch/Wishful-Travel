var express = require('express');
var router = express.Router();
var db = require('../config/db');

router.post('/', function(req, res) {

db.query('INSERT INTO dest SET ?', req.body.dest, function(err, result) {
  if(err) {
    res.status(400).send(err);
    return;
    }
  db.query('INSERT INTO blog SET ?', req.body.blog, function(err, result) {
    if(err) {
      res.status(400).send(err);
      return;
    }
    console.log(result);
    res.send(result);
    });
  });
});

module.exports = router;
