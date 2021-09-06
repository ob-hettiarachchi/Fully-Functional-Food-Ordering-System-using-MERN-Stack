import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://adminBreeze:test1234@breezedb.mvy8p.mongodb.net/breeseDB?retryWrites=true&w=majority", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
});

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

app.get('/',(req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(5000, ()=> {
    console.log('serve at http://localhost:5000');
});