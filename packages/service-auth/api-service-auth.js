let express = require('express');
const router = express.Router();

router.get('/auth', (req, res, next) => {
  res.status(403).send({
    errorCode: 403,
    errorMessage: 'Almost implemented twice!',
    nodeEnv: process.env.NODE_ENV
  });
});

module.exports = router;
