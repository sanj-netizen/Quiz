// const express = require('express');
// const router = express.Router();
// const adminController = require('../Controller/adminController');

// // Routes for managing rounds and questions
// router.post('/create-round', adminController.createRound);
// router.post('/add-question', adminController.addQuestion);
// router.get('/rounds', adminController.getAllRounds);
// router.get('/questions', adminController.getQuestionsByRound);

// // Route to update a specific question
// router.put('/questions/:questionId', adminController.updateQuestion);

// // Route to delete a specific question
// router.delete('/delete/questions/:questionId', adminController.deleteQuestion);
// module.exports = router;

const express = require('express');
const router = express.Router();
const adminController = require('../Controller/adminController');
const {verifyTokenquiz }=require('../jwt/verifyJwtToken');
// Routes for managing rounds and questions
router.post('/create-round', adminController.createRound);
router.post('/add-question', adminController.addQuestion);
router.get('/rounds', adminController.getAllRounds);
router.get('/questions', adminController.getQuestionsByRound);

// Route to update a specific question
router.put('/questions/:questionId', adminController.updateQuestion);

// Route to delete a specific question
router.delete('/delete/questions/:questionId', adminController.deleteQuestion);


// Route for fetching rounds with question count
router.get('/rounds-with-question-count', adminController.getAllRoundsWithQuestionCount);
router.delete('/rounds/:id', adminController.deleteRound);
// Define the route for fetching questions by access code
router.post('/get-questions-by-access-code',verifyTokenquiz ,  adminController.getQuestionsByAccessCode);

router.post('/verify-access-code', verifyTokenquiz,adminController.verifyAccessCode);
module.exports = router;