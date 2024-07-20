const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title:String,
    description:String,
    extraInfo:String,
    address:String,
    perks:{},
    photos:[String],
    checkIn:String,
    checkOut:String,
    maxGuests:Number,
    price:Number,
    rating:{
        type:Number,
        default:1,
    },
})

const placeModel = mongoose.model('Place',placeSchema);
module.exports =  placeModel;