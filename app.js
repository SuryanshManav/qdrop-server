const express = require('express');
const app = express();
const Applet = require('./applet.model');
const db = require('./database');

app.use(express.json());

const port = 3000;
app.post('/getAppletConfig', async (req, res) => {
    try {
      const qrCodeData = req.body.qrCodeData;
      const appletConfig = await Applet.findOne({ qrCodeData });
      if (appletConfig) {
        console.log("It works")
        res.json(appletConfig);
      } else {
        res.status(404).json({ message: 'Applet not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });  

app.listen(port, () => {
  console.log(`Server running remotely:${port}`);
});
