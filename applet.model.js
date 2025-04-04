const mongoose = require('mongoose');

const componentSchema = new mongoose.Schema({
  type: String,
  start: {
    row: Number,
    col: Number
  },
  span: {
    rows: Number,
    cols: Number
  },
  properties: mongoose.Schema.Types.Mixed // Flexible properties
}, { _id: false }); // Disable _id for nested documents

const appletSchema = new mongoose.Schema({
  name: String,
  description: String,
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  qrCodeData: String,
  applet: {
    components: [{ type: componentSchema }] // Array of flexible components
  }
});

module.exports = mongoose.model('Applet', appletSchema, 'appConfigs');
