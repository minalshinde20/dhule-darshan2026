const mongoose = require('mongoose')


const BookingSchema = new mongoose.Schema({
    uid:{type:mongoose.Schema.Types.ObjectId, ref: "user"},
    bookProp:{type:String},
    type:{type:Number},
    amount:{type:Number},
    Bookingdate:{type:String},
    Eventdate:{type:String},
})


const Booking = mongoose.model('Booking',BookingSchema);
module.exports = Booking;