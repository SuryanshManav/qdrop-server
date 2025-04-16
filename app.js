const express = require('express');
const app = express();
const Applet = require('./applet.model');
const db = require('./database');
const mongoose = require('mongoose');
const AppInteraction = require('./appInteraction.model');

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/getAppletConfig', async (req, res) => {
    try {
      const qrCodeDataReq = req.body.qrCodeData;
      const appletConfig = await Applet.findOne({qrCodeData: qrCodeDataReq});
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
  
  app.post('/postAppletInteraction', async (req, res) => {
    try {
      const { appletNumber, dropdownValue, textboxValue } = req.body;

      const newInteraction = new AppInteraction({
        appletNumber,
        dropdownValue,
        textboxValue
      });

      await newInteraction.save();
      res.status(201).json({ message: 'Interaction saved successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
