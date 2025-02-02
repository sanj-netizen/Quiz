const mongoose = require('mongoose');

// Define the schema for settings
const settingsSchema = new mongoose.Schema({
  numQuestions: {
    type: Number,
    required: true,
    default: 10, // Default value if none provided
  },
  timeSeconds: {
    type: Number,
    required: true,
    default: 60, // Default value if none provided
  },
  isUserPageEnabled: {
    type: Boolean,
    required: true,
    default: true, 
  },
}, { timestamps: true });

// Create and export the model
const Settings = mongoose.model('Settings', settingsSchema);
module.exports = Settings;
