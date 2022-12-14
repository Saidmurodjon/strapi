// path: ./config/env/production/database.js
const {parseUri } = require('mysql-parse')
const config = parseUri(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});