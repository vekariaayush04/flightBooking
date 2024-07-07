import express from 'express';
const router = express.Router();

import userRoutes from './userRoutes';
import flightroutes from './flightroutes';
import bookingRoutes from './bookingRoutes'


router.use('/users', userRoutes);
router.use('/flights',flightroutes);
router.use('/booking',bookingRoutes)



module.exports = router;


