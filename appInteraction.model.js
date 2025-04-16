const mongoose = require('mongoose');

const appInteractionSchema = new mongoose.Schema({
  appletNumber: String,
  dropdownValue: String,
  textboxValue: String
});

module.exports = mongoose.model('AppInteraction', appInteractionSchema, 'appInteractions');
