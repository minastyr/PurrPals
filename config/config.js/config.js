require('dotenv').config();

module.exports = {
  "development": {
    "username": "purrpalsdata_user",
    "password": "LChuPXdj6wxZNJFSEX60uGI4KaM5hSI",
    "database": "purrpals_db",
    "host": "dpg-cunanqan91rc73dkke3g-a",
    "dialect": "postgres"
  },
  "test": {
    "username": "purrpalsdata_user",
    "password": "LChuPXdj6wxZNJFSEX60uGI4KaM5hSI",
    "database": "purrpals_test",
    "host": "127.0.0.1",
    "dialect": "postgres" 
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  }
}; 