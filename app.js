const express = require('express');
const app = express();
const Applet = require('./applet.model');
const db = require('./database');
const mongoose = require('mongoose');

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/getAppletConfig', async (req, res) => {
    try {
      console.log('Trying to connect to MongoDB...');
      const db = mongoose.connection;
      console.log('Connection status:', db.readyState);
      
      const qrCodeDataReq = req.body.qrCodeData;
      const appletConfig = await Applet.find();
      if (appletConfig) {
        console.log("It works");
        console.log(appletConfig);
        res.json(appletConfig);
      } else {
        res.status(404).json({ message: 'Applet not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }); 
