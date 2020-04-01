
// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/todo-db');

// acquire the connection (to check if it is working)
const db = mongoose.connection;

// error
db.on('error' , console.error.bind(console, 'error connecting to DB'));

// up & running then print the message
db.once('open', function(){

    console.log('Successfully connected to database !!');

});