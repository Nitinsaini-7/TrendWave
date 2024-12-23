import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import contactRouter from './routes/contactRoute.js';

// App configuration
const app = express();
const port = process.env.PORT || 3001;

// Connect to database and cloudinary

// Middleware

// Set up CORS correctly

app.use(cors({
  origin: 'https://trend-wave-admin.vercel.app'
}));
// API endpoints
app.use(express.json());
connectDB();
connectCloudinary();
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/contact', contactRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.send('API working successfully');
});

// Start the server
app.listen(port, () => console.log(`Server running on port : ${port}`));
