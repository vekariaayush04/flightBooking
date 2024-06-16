import express from 'express';
const router = express.Router();

import userRoutes from './userRoutes';
import flightroutes from './flightroutes';


router.use('/users', userRoutes);
router.use('flights',flightroutes);


module.exports = router;


