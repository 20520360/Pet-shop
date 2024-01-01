const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const Booking = new Schema(
    {
        serviceName: {
            type: String,
            require: true
        },
        fullname: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        address: {
            type: String,
            require: true
        },
        dateBooking: {
            type: Date,
            require: true
        },
        typeAnimal: {
            type: String,
            require: true
        },
        ageAnimal: {
            type: String,
            require: true
        },
        weightAnimal: {
            type: String,
            require: true
        },
        note: {
            type: String,
            require: true
        },
        status: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Booking', Booking);
