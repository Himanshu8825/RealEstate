import express from "express";
const app = express();
import mongoose from "mongoose";
import 'dotenv/config';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js'; 
import cookieParser from 'cookie-parser'

const port = process.env.PORT ;
const dbUrl = process.env.MONGO_DB_URI;

mongoose
    .connect(dbUrl)

    .then(() => {
        console.log('DB Connected');
    })
    .catch((error) => {
        console.log(error);
    });



app.use(express.json());
app.use(cookieParser());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})




app.listen(port, (req, res) => {
    console.log(`Server started at port ${port}`);
})