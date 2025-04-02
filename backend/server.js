import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import https from 'https';
import fs from 'fs';
import mongoose from 'mongoose';

import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = ["http://localhost:5173", "https://vastrama.com", "https://www.vastrama.com"];
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(passport.initialize());
app.disable('x-powered-by');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
  
app.use("/api/auth", authRoutes);
app.use('/category/', categoryRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
  });

const sslOptions = {
    key: fs.readFileSync("/etc/letsencrypt/live/vastrama.com/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/vastrama.com/fullchain.pem"),
  };

https.createServer(sslOptions, app).listen(5000, "0.0.0.0", () => {
    console.log(`Secure server running on https://vastrama.com:${PORT}`);
});