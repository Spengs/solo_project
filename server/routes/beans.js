var express = require('express');
var router = express.Router();
var Bean = require('../models/wholeBeans.js');

router.post('/', function (req, res) {
  console.log('POST', req.body);
  var beans = Bean(req.body);
  beans.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});




module.exports = router;
