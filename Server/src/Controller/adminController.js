const Round = require('../Database/Round');
const Question = require('../Database/Question');
// const Registration =require('../Database/Registration');
// Create a new round and generate a random access code
const Registration= require('../Database/collegeRegister')
const {generateTokenAndSetCookieAcess}=require('../util/generateTokenAndSetCookie');
exports.createRound = async (req, res) => {
  try {
    const { roundName } = req.body;
    const accessCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    const newRound = new Round({ roundName, accessCode });
    await newRound.save();

    res.status(201).json({ message: 'Round created', round: newRound });
  } catch (error) {
    res.status(500).json({ message: 'Error creating round', error });
  }
};

// Add a new question to a specific round
exports.addQuestion = async (req, res) => {
  try {
    const { questionText, options, correctAnswer, codeSnippet, roundId } = req.body;

    const newQuestion = new Question({
      questionText,
      options,
      correctAnswer,
      codeSnippet,
      roundId,
    });
    await newQuestion.save();

    const round = await Round.findById(roundId);
    round.questions.push(newQuestion._id);
    await round.save();

    res.status(201).json({ message: 'Question added', question: newQuestion });
  } catch (error) {
    res.status(500).json({ message: 'Error adding question', error });
  }
};

// Get all rounds along with their associated questions
exports.getAllRounds = async (req, res) => {
  try {
    const rounds = await Round.find().populate('questions');
    res.status(200).json(rounds);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rounds', error });
  }
};
// Get all questions for a specific round
// exports.getQuestionsByRound = async (req, res) => {
//   try {
//     const { roundId } = req.params;
    
//     // Find the round and populate the questions field
//     const round = await Round.findById(roundId).populate('questions');
    
//     if (!round) {
//       return res.status(404).json({ message: 'Round not found' });
//     }
    
//     res.status(200).json(round.questions);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching questions', error });
//   }
// };

// Get all questions
exports.getQuestionsByRound = async (req, res) => {
  try {
    const questions = await Question.find().populate('roundId'); // Ensure roundId is populated if it's a reference
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error });
  }
};

// Update a question
exports. updateQuestion = async (req, res) => {
  const { questionId } = req.params;
  const { questionText, codeSnippet, correctAnswer, options } = req.body;

  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      questionId,
      {
        questionText,
        codeSnippet,
        correctAnswer,
        options,
      },
      { new: true }
    );

    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json(updatedQuestion);
  } catch (error) {
    res.status(500).json({ message: 'Error updating question', error });
  }
};

// Delete a question
exports. deleteQuestion = async (req, res) => {
  const { questionId } = req.params;

  try {
    const deletedQuestion = await Question.findByIdAndDelete(questionId);

    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting question', error });
  }
};

exports.getAllRoundsWithQuestionCount = async (req, res) => {
  try {
    const rounds = await Round.aggregate([
      {
        $lookup: {
          from: 'questions', // Name of the Question collection in MongoDB
          localField: '_id',
          foreignField: 'roundId',
          as: 'questions', // The alias for the joined documents
        },
      },
      {
        $project: {
          roundName: 1, // Include the roundName field
          accessCode: 1, // Include the accessCode field
          questionCount: { $size: '$questions' }, // Count the number of questions
        },
      },
    ]);

    res.status(200).json(rounds); // Send the aggregated data as the response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rounds with question count', error });
  }
};



// Delete a round by ID
exports.deleteRound = async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete the round
    const round = await Round.findByIdAndDelete(id);

    if (!round) {
      return res.status(404).json({ message: 'Round not found' });
    }

    res.status(200).json({ message: 'Round deleted successfully' });
  } catch (error) {
    console.error('Error deleting round:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// // Get questions by access code
// exports.getQuestionsByAccessCode = async (req, res) => {
//   try {
//     const { accessCode } = req.body; // Access code coming from the frontend

//     // Find the round by accessCode
//     const round = await Round.findOne({ accessCode });

//     if (!round) {
//       return res.status(404).json({ message: 'Round not found' });
//     }

//     // Find questions related to this round
//     const questions = await Question.find({ roundId: round._id });

//     res.status(200).json({ roundName: round.roundName, questions });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching questions by access code', error });
//   }
// };


exports.getQuestionsByAccessCode = async (req, res) => {
  try {
    const { accessCode } = req.body;
    const employeeId = req.employeeId; // Ensure this is a Number and not an ObjectId

    // Retrieve the user data
    const user = await Registration.findOne({ employeeId }).select("-password");
    console.log(employeeId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the round and fetch questions
    const round = await Round.findOne({ accessCode }).populate('questions');
    if (!round) {
      return res.status(404).json({ message: 'Invalid access code' });
    }

    // Extract the round name
    const roundName = round.roundName;

    // Update the Registration document
    user.rounds[`round${roundName}`] = 1; // Mark this round as completed

    // Update access codes for all rounds
    user.accessCodes[`round${roundName}`] = accessCode;

    await user.save();

    // Generate token and set it in a cookie
    generateTokenAndSetCookieAcess(res, accessCode);
console.log(round.roundName)
    // Respond with the questions
    res.status(200).json({ questions: round.questions ,round:round.roundName });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};




exports.verifyAccessCode = async (req, res) => {
  const { accessCode } = req.body;
  if (!accessCode) {
    return res.status(400).json({ message: 'Access code is required.' });
  }

  try {
    const code = await Round.findOne({ accessCode });
    if (!code) {
      return res.status(404).json({ message: 'Access code not found.' });
    }
    
    return res.status(200).json({ valid: true, message: 'Access code is valid.' });
  } catch (error) {
    console.error('Error verifying access code:', error);
    return res.status(500).json({ message: 'Server error.' });
  }
};