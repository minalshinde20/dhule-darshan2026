const mongoose = require('mongoose')


const CarBookingSchema = new mongoose.Schema({
    uid:{type:mongoose.Schema.Types.ObjectId, ref: "user"},
    bookProp:{type:String},
    carName:{type:String},
    capacity:{type:Number},
    type:{type:Number},
    amount:{type:Number},
    Bookingdate:{type:String},
    Eventdate:{type:String},
})


const CarBooking = mongoose.model('CarBooking',CarBookingSchema);
module.exports = CarBooking;