import express from 'express';
import dotenv from 'dotenv';

import categoryRoutes from './routes/categoryRoutes.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use('/category/', categoryRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
    });