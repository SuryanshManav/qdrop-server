const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://manavsuryansh2002:JDRp9iAnZFdAEetn@qdrop-server.8mfvjwi.mongodb.net/QDrop';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000 })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));
