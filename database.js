const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/QDrop'; // Replace with your MongoDB URL

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));
