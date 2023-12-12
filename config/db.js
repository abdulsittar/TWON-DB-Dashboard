const mongoose = require('mongoose');
require('dotenv').config()
console.log(process.env.DB_URL)
mongoose.Promise = global.Promise;
global.url =  process.env.DB_URL;
// Connecting to the database
mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
    
});