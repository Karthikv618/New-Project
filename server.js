const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('c:/Users/91733/Desktop/kv/backend/routes/userroutes');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
