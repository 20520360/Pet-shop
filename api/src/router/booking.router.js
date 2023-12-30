const express = require('express');

const { verifyTokenByAdmin, verifyToken } = require('../middleware/verifyToken');
const { createBooking, getAllBooking } = require('../controller/booking.controller');

const router = express.Router();

router.post('/api/booking/create', createBooking);

// ADMIN
router.get('/api/booking/list', verifyTokenByAdmin, getAllBooking);
router.put('/api/booking/action', verifyTokenByAdmin, actionBooking);
module.exports = router;
