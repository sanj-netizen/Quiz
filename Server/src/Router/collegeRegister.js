const express = require('express');
const router = express.Router();
const registrationController = require('../Controller/collegeRegister'); // Ensure this path is correct
const { verifyToken,verifyTokenquiz } = require('../jwt/verifyJwtToken'); // Adjust the path based on your setup
// POST route for registration
router.post('/add_register', registrationController.register);
router.get('/all_registrations', registrationController.getAllRegistrations);
// Login route
router.post('/quiz', registrationController.quizlog);
router.post('/save-score-for-round', verifyTokenquiz, registrationController.saveScoreForRound);


router.post('/send-access-code',  registrationController.handleAccessCodeRequest);
router.post('/handleDisqualification', registrationController.handleDisqualification)
router.post('/common-5th-round', registrationController.handlesendFifthRoundCode);

router.get('/check_auth/college',verifyTokenquiz, registrationController.checkAuth,);

module.exports = router;
