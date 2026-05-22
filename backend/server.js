const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to Job Adda API');
});
app.use('/api/jobs', require('./routes/jobroutes'));

const port = process.env.PORT || 5700;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});