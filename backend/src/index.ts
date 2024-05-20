import express from 'express'
import  rootRouter from './routes/index';

const app = express();
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000,()=>{
    console.log("app running at 3k");
});