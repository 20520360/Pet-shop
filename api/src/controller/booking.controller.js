const booking = require('../models/booking');
const User = require('../models/user');

exports.getAllBooking = async (req, res) => {
    try {
        const allBooking = await booking.find();
        return res.status(201).json(allBooking);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

exports.createBooking = async (req, res) => {
    try {
        const { serviceName, fullname, phone, email, address, dateBooking, typeAnimal, ageAnimal, weightAnimal, note, status, username } = req.body;
        const newBooking = new booking({ serviceName, fullname, phone, email, address, dateBooking, typeAnimal, ageAnimal, weightAnimal, note, status });
        await newBooking.save();
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        user.myBooking.push(newBooking._id);
        await user.save();
        res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.actionBooking = async (req, res) => {
    try {
        const { id, status } = req.body;
        const bookingAction = await booking.findById(id);
        bookingAction.status = status;
        await bookingAction.save();
        res.status(201).json({ message: 'Booking action successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.findAllMyBooking = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ username }).populate('myBooking');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.status(200).json(user.myBooking);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

/** 

{
    "serviceName": "Tắm cho chó",
    "fullname": "Nguyễn Văn A",
    "phone": "0123456789",
    "email": "a@gmail.com",
    "address": "Hà Nội",
    "dateBooking": "2021-05-20",
    "typeAnimal": "Chó",
    "ageAnimal": "2",
    "weightAnimal": "10",
    "note": "Không có gì"
}


*/
