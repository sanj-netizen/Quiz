const Registration = require('../Database/collegeRegister');
const Round = require('../Database/Round');
const bcrypt = require('bcrypt');
const { sendQuizRegistrationEmail, sendQuizScoreEmail ,sendQuizAccessCodeEmail,sendDisqualification, sendFifthRoundCode} = require('../email/email'); // Ensure this path is correct
const {generateTokenAndSetCookieQuiz} = require('../util/generateTokenAndSetCookie')
// Utility functions to generate random values
const generateEmployeeId = () => Math.floor(1000 + Math.random() * 9000);
const generateOtp = () => Math.floor(1000 + Math.random() * 9000);
const generatePassword = () => Math.floor(1000 + Math.random() * 9000);

// Function to find unique value
const findUniqueValue = async (fieldName, generateValue, comparisonFieldValue = null) => {
  let value;
  let exists = true;
  while (exists) {
    value = generateValue();
    const query = { [fieldName]: value };
    if (comparisonFieldValue) {
      query[fieldName] = { $ne: comparisonFieldValue };
    }
    exists = await Registration.findOne(query);
  }
  return value;
};

// Handle registration
exports.register = async (req, res) => {
  try {
    console.log('Received registration data:', req.body);

    const { teamName, teamHead, email, phone, institution } = req.body;

    const existingRegistration = await Registration.findOne({ email });
    if (existingRegistration) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const employeeId = await findUniqueValue('employeeId', generateEmployeeId);

    let password;
    let hashedPassword;
    do {
      password = generatePassword();
      hashedPassword = await bcrypt.hash(password.toString(), 10);
    } while (await Registration.findOne({ password: hashedPassword }));

    const otp = await findUniqueValue('otp', generateOtp);

    const newRegistration = new Registration({
      teamName,
      teamHead,
      email,
      phone,
      institution,
      password: password, //change to password
      employeeId,
      otp,
    });

    await newRegistration.save();
   
    // Fetch the round with roundName = "1" and its accessCode
    const firstRound = await Round.findOne({ roundName: "1" });

if (!firstRound) {
  throw new Error('Round with roundName "1" not found');
}

const accessCode = firstRound.accessCode;



    // Uncomment if you have a working email service
     await sendQuizRegistrationEmail(email, employeeId, password, otp,accessCode);

    res.status(201).json({ message: 'Registration successful!', employeeId, otp });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Get all registrations
exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find(); // Retrieve all registrations from the database
    res.status(200).json(registrations); // Send all registration data as JSON
  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Backend login logic without password encryption
exports.quizlog = async (req, res) => {
  try {
    const { employeeId, password, collegeName, otp } = req.body;
console.log(otp); //
    // Validate the request
    if (!employeeId || !password || !collegeName || !otp) {
      return res.status(400).json({ error: 'All fields (employeeId, password, collegeName, and OTP) are required' });
    }

    // Find the user by employeeId
    const user = await Registration.findOne({ employeeId });
    console.log(user.email)
    if (!user) {
      return res.status(401).json({ error: 'Invalid employee ID or password' });
    }

    // Check if collegeName and otp match
    if (user.institution !== collegeName) {
      return res.status(401).json({ error: 'Invalid college name' });
    }
    const parsedOtp = Number(otp);

    // Now compare the parsedOtp with the user's OTP in the database
    if (user.otp !== parsedOtp) {
      return res.status(401).json({ error: 'Invalid OTP' });
    }
    // // Compare the provided password with the stored password
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid employee ID or password' });
    }
    generateTokenAndSetCookieQuiz(res,employeeId )

    // Authentication successful
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



// exports.saveScoreForRound = async (req, res) => {
//   try {
//     const { accessCode, score } = req.body;
//     const employeeId = req.employeeId; // Ensure this is correctly set

//     console.log("Received data:", { accessCode, score, employeeId });

//     // Validate the request
//     if (!employeeId || !accessCode || score === undefined) {
//       return res.status(400).json({ error: 'Employee ID, accessCode, and score are required' });
//     }

//     // Find the user by employeeId
//     const user = await Registration.findOne({ employeeId });
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Find the round corresponding to the accessCode
//     const roundEntry = Object.entries(user.accessCodes).find(([key, code]) => code === accessCode);
//     if (!roundEntry) {
//       return res.status(400).json({ error: 'Invalid access code' });
//     }

//     const roundName = roundEntry[0];

//     // Update the score for the specified round
//     user.scores[roundName] = score;
//     console.log('Updated Scores:', user.scores);
//     sendQuizScoreEmail(TEAMNAME, SCORE)
//     await user.save();

//     res.status(200).json({ message: 'Score updated successfully' });
//   } catch (error) {
//     console.error('Error saving score:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }


exports.saveScoreForRound = async (req, res) => {
  try {
    const { accessCode, score } = req.body;
    const employeeId = req.employeeId; // Ensure this is correctly set

    console.log("Received data:", { accessCode, score, employeeId });

    // Validate the request
    if (!employeeId || !accessCode || score === undefined) {
      return res.status(400).json({ error: 'Employee ID, accessCode, and score are required' });
    }

    // Find the user by employeeId
    const user = await Registration.findOne({ employeeId });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
  // Declare roundName explicitly at the top
  let roundName;
    // Find the round corresponding to the accessCode
    const roundEntry = Object.entries(user.accessCodes).find(([key, code]) => code === accessCode);
    if (!roundEntry) {
      return res.status(400).json({ error: 'Invalid access code' });
    }

     roundName = roundEntry[0];

    // Update the score for the specified round
    user.scores[roundName] = score;
    console.log('Updated Scores:',  roundName);

    // Send the quiz score email
    await sendQuizScoreEmail(user.email, user.teamName, roundName, score);

    await user.save();

    res.status(200).json({ message: 'Score updated successfully' });
  } catch (error) {
    console.error('Error saving score:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.handleAccessCodeRequest = async (req, res) => {
  try {
    const { employeeId, roundName } = req.body;
    
    if (!employeeId || !roundName) {
      return res.status(400).json({ error: 'Employee ID and round name are required' });
    }

    console.log('Received Request:', { employeeId, roundName });

    // Fetch the round based on the roundName
    const round = await Round.findOne({ roundName: roundName }).exec();
    
    if (!round) {
      console.log('Fetched Round:', round);
      return res.status(404).json({ error: 'Round not found' });
    }

    // Find the registration by employee ID
    const registration = await Registration.findOne({ employeeId }).exec();
    
    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    // Generate a unique OTP

    const otp = await findUniqueValue('otp', generateOtp);

    // Set OTP expiry to 15 minutes from now
    

    // Save OTP and expiry to the registration record
    registration.otp = otp;
    
    await registration.save();

    // Send the access code and OTP to the user via email
    await sendQuizAccessCodeEmail(registration.email, registration.teamName, roundName,otp ,round.accessCode, );

    res.status(200).json({ message: `Access code and OTP for ${roundName} sent successfully.` });
  } catch (error) {
    console.error('Error handling access code request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.handleDisqualification = async (req, res) => {
  try {
    const { employeeId } = req.body;
    
    if (!employeeId) {
      return res.status(400).json({ error: 'Employee ID is required' });
    }

    console.log('Received Request:', { employeeId });
   
    // Find the registration by employee ID
    const registration = await Registration.findOne({ employeeId }).exec();
    
    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    // Send the disqualification email to the user
    await sendDisqualification(registration.email, registration.teamName);

    res.status(200).json({ message: 'Disqualification email sent successfully.' });
  } catch (error) {
    console.error('Error handling disqualification request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.handlesendFifthRoundCode= async (req, res) => {
  try {
    const { employeeId } = req.body;
    
    if (!employeeId) {
      return res.status(400).json({ error: 'Employee ID is required' });
    }

    console.log('Received Request:', { employeeId });
   
    // Find the registration by employee ID
    const registration = await Registration.findOne({ employeeId }).exec();
    
    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    // Send the disqualification email to the user
    await  sendFifthRoundCode(registration.email, registration.teamName);

    res.status(200).json({ message: 'Disqualification email sent successfully.' });
  } catch (error) {
    console.error('Error handling disqualification request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// auth.js

exports.checkAuth = async (req, res) => {
  try {
    // Extract employeeId from the request object set by the verifyToken middleware
    const user = await Registration.findOne({ employeeId: req.userId }).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Respond with user data excluding password
    res.status(200).json({ success: true, user });
    console.log("User authentication successful");
  } catch (error) {
    console.error("Error in checkAuth:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
