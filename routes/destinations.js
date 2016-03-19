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
  db.query('delete from places where id=?', id, function(err, result) {
    if(err) return res.status(400).send(err);
    res.send(result);
  });
});

router.put('/', function(req, res) {
  console.log(req.body)
  var id = req.body.id;
  var name = req.body.city;
  var loc = req.body.loc;
  var image = req.body.image;
  var activity1 = req.body.activity1;
  var activity2 = req.body.activity2;
  var activity3 = req.body.activity3;
  var category = 'custom';
  db.query('UPDATE places SET name=?, loc=?, image=?, activity1=?, activity2=?, activity3=?, category=? WHERE id=?',
          [id, name, loc, image, activity1, activity2, activity3, category], function(err, result) {
    if(err) return res.status(400).send(err);
    res.send(result);
  });
});


module.exports = router;
