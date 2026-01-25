const router = require('express').Router();
const usersRoute = require('./usersRoute');

router.use('/', require('./swaggerRoute'));

router.get('/', (req, res) => {
  //#swagger-tags=['Welcome to the Contact Management API']
  res.send('Welcome to the Contact Management API');
});

router.use('/users', usersRoute);

module.exports = router;