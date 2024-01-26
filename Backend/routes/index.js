var express = require('express');
var router = express.Router();

router.get('/year', (req, res) => {
  let date = new Date()
  let year = date.getFullYear().toString()
  res.json({ year: year });
});

module.exports = router;
