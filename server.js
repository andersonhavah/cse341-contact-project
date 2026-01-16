const express = require('express');
const mongodb =  require('./data/database');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

app.use('/', routes);

mongodb.initDb((err) => {
  if (err) {
    console.log('Unable to connect to database', err);
    process.exit(1);
  } else {
    console.log('Database connection established.');
  } 
});

app.listen(PORT, () => {
  console.log(`Database is listening and node running on port ${PORT}.`);
});