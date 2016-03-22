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

router.delete('/:id', function(req, res) {
  var id = req.params.id;
  db.query('delete from dest where id=?', id, function(err, result) {
    if(err) return res.status(400).send(err);
    res.send(result);
  });
});

module.exports = router;
