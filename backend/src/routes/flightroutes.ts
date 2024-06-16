const express = require('express');
import { addFlight, getFlights } from '../controllers/flightcontroller'

const router = express.Router();

router.post('/add', addFlight);
router.get('/get', getFlights);

export default router;
