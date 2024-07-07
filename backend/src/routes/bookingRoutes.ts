
const express = require('express');
import {  bookFlight , getBookings} from '../controllers/bookingcontroller'

const router = express.Router();

router.post('/addbook', bookFlight);
router.get('/getbook', getBookings);

export default router;