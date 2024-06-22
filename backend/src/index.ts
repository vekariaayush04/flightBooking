import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import flightroutes from './routes/flightroutes';
import bookingRoutes from './routes/bookingRoutes';
import travellerRoutes from './routes/travellerRoutes';

dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors());


app.use('/api/v1/users', userRoutes);
app.use('/api/v1/flights', flightroutes);
app.use('api/v1/booking',bookingRoutes);
app.use('/api/v1/travellers', travellerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
