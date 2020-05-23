let express = require('express');
const router = express.Router();

router.get('/auth', (req, res, next) => {
  res.status(403).send({
    errorCode: 403,
    errorMessage: 'Not implemented yet!'
  });
});

module.exports = router;
