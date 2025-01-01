const Keyv = require('keyv');
const db = new Keyv('sqlite://jtgpanel.db');

module.exports = { db }
