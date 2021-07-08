const express = require('express');
const connectDB = require('./config/db.js');
const contactRoutes = require('./routes/contacts.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const cors = require('cors');


connectDB();

const app = express();

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use('/contact', contactRoutes);
app.use('/auth', authRoutes);

const PORT = 5000

app.listen(
  process.env.PORT || PORT,
  console.log(`Server is running on ${process.env.PORT || PORT}`)
);
