var express = require('express');
var router = express.Router();
var db = require('../config/db');

router.get('/', function(req, res, next) {
  console.log('inside get route');
  db.query(`SELECT * FROM blog`, function(err, result) {
    if(err) {
      res.status(400).send(err);
      return;
    }
    res.send(result);
  });
});

module.exports = router;
