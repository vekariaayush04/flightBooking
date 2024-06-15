// backend/src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const { userRoutes} = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
