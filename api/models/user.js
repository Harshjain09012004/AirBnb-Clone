const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Airbnb');

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
});

const userModel = mongoose.model('User',userSchema);
module.exports = userModel;