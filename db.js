const mongoose = require('mongoose');
const MONGO_URL=require('./config/keys');

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("Connected to the Database");
})
.catch(err => {
    console.log(err);
})