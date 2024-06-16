import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import flightroutes from './routes/flightroutes';

const app = express();

app.use(express.json()); 
app.use(cors());


app.use('/api/v1/users', userRoutes);
app.use('/api/v1/flights', flightroutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
