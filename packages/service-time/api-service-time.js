let express = require('express');
const router = express.Router();

router.get('/time', (req, res, next) => {
  res.send({
    time: new Date().toISOString(),
  });
});

module.exports = router;
