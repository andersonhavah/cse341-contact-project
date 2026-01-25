const express = require('express');
const mongodb =  require('./data/database');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
})

app.use('/', routes);

mongodb.initDb((err) => {
  if (err) {
    console.log('Unable to connect to database', err);
    process.exit(1);
  } else {
    app.listen(PORT, () => {
    console.log(`Database is listening and node running on port ${PORT}.`);
    });
    console.log('Database connection established.');
  } 
});

