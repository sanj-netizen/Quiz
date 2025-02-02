const Settings = require('../Database/basicSetting'); // Import your model

// Save settings to the database
exports.saveSettings = async (req, res) => {
  try {
    const { numQuestions, timeSeconds, isUserPageEnabled } = req.body;

    // Find existing settings and update or create new
    let settings = await Settings.findOne();
    if (settings) {
      settings.numQuestions = numQuestions;
      settings.timeSeconds = timeSeconds;
      settings.isUserPageEnabled = isUserPageEnabled;
      await settings.save();
    } else {
      settings = new Settings({
        numQuestions,
        timeSeconds,
        isUserPageEnabled,
      });
      await settings.save();
    }

    res.status(201).json({ success: true, message: 'Settings saved successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Fetch all settings from the database
exports.getSettings = async (req, res) => {
  try {
    const settings = await Settings.findOne();
    if (!settings) {
      return res.status(404).json({ success: false, message: 'No settings found.' });
    }
    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete settings from the database
exports.deleteSettings = async (req, res) => {
  try {
    await Settings.deleteMany(); // Delete all settings
    res.status(200).json({ success: true, message: 'Settings deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update settings in the database
exports.updateSettings = async (req, res) => {
  try {
    const { numQuestions, timeSeconds, isUserPageEnabled } = req.body;

    const updatedSettings = await Settings.findOneAndUpdate(
      {},
      { numQuestions, timeSeconds, isUserPageEnabled },
      { new: true }
    );

    if (!updatedSettings) {
      return res.status(404).json({ success: false, message: 'Settings not found.' });
    }

    res.status(200).json({ success: true, message: 'Settings updated successfully.', data: updatedSettings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
