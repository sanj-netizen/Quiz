const express = require('express');
const router = express.Router();
const { saveSettings } = require('../Controller/basicsetting');
const { deleteSettings } = require('../Controller/basicsetting');
const { updateSettings,getSettings } = require('../Controller/basicsetting');
const { verifyToken } = require('../jwt/verifyJwtToken');
// Define routes
router.post('/save',verifyToken, saveSettings);
router.delete('/delete/:id',verifyToken, deleteSettings);
router.put('/settings/update/:id',verifyToken, updateSettings);
router.get('/settings/all', getSettings);
module.exports = router;
