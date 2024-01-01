const express = require('express');

const { verifyTokenByAdmin, verifyToken } = require('../middleware/verifyToken');
const { createBooking, getAllBooking, actionBooking, findAllMyBooking } = require('../controller/booking.controller');

const router = express.Router();

router.post('/api/booking/create', createBooking);
router.get(`/api/client/booking/list/:username`, findAllMyBooking);

// ADMIN
router.get('/api/booking/list', verifyTokenByAdmin, getAllBooking);
router.put('/api/booking/action', verifyTokenByAdmin, actionBooking);
module.exports = router;
