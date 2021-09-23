var express = require('express');
var router = express.Router();
const path= require("path");

/* GET users listing. */
router.get('/', function(req, res, next) {
  let indexPath= path.join(__dirname, "../views/game.html");
  res.sendFile(indexPath);
});

module.exports = router;
