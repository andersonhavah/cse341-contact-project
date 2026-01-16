const router = require('express').Router();
const usersRoute = require('./usersRoute');

router.get('/', (req, res) => {
  res.send('Welcome to the Contact Management API');
});

router.use('/users', usersRoute);

module.exports = router;