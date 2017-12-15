const mongoose = require('mongoose');
const db = mongoose.connect(process.env.DB_URI, { useMongoClient: true });

db.on('error', () => {
    console.error.bind(console, 'connection error');
    process.exit();
});
db.once('open', () => console.log('connected db'));

module.exports = { mongoose };