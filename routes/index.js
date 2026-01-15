const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Contact Management API');
});

module.exports = router;