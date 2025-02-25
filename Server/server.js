const forceDatabaseRefresh = false;
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const express = require('express');
const routes = require('./src/routes/index.js');
const { sequelize } = require('./src/models/index.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
// app.use(express.static('../client/'));
// app.use(express.json());
// app.use(routes);

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.json());
app.use(routes);


sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});