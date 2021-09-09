import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';

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

app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.get('/',(req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(4000, ()=> {
    console.log('serve at http://localhost:4000');
});