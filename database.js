const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'esim',
  password: '',
  database: 'library'
});
module.exports = connection;