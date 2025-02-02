const Admin = require('../Database/adminLoginController');
const bcrypt = require('bcrypt');
const { sendEmployeeInformationEmail  } = require('../email/email'); // Adjust the path as needed
const {generateTokenAndSetCookie}= require('../util/generateTokenAndSetCookie');
const jwt = require('jsonwebtoken');
// Utility function to generate a unique employee ID
const generateUniqueEmployeeId = async () => {
  let employeeId;
  let exists = true;

  while (exists) {
    employeeId = Math.floor(1000 + Math.random() * 9000).toString();
    exists = await Admin.findOne({ employeeId });
  }

  return employeeId;
};

// Handle registration
exports.registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate that all required fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if the email is already registered
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Generate a unique employee ID
    const employeeId = await generateUniqueEmployeeId();
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new Admin instance
    const newAdmin = new Admin({
      name,
      email,
      password,
      employeeId,
    });

    // Save the new Admin to the database
    await newAdmin.save();

    // Send a registration confirmation email
    await sendEmployeeInformationEmail(email, name, employeeId ,password);

    // Respond with success message
    res.status(201).json({ message: 'Registration successful!', employeeId });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



// Handle Admin login
// exports.loginAdmin = async (req, res) => {
//   try {
//     const { employeeId, password } = req.body;

//     // Validate that both employeeId and password are provided
//     if (!employeeId || !password) {
//       return res.status(400).json({ error: 'Employee ID and password are required' });
//     }

//     // Find admin by employeeId
//     const admin = await Admin.findOne({ employeeId });
//     if (!admin) {
//       return res.status(401).json({ error: 'Invalid employee ID or password' });
//     }

//     // Directly compare the password (since no encryption is used)
//     if (password !== admin.password) {
//       return res.status(401).json({ error: 'Invalid employee ID or password' });
//     }

//     // Send a success response
//     return res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Error in login:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// Handle Admin login
exports.loginAdmin = async (req, res) => {
  try {
    const { employeeId, password } = req.body;

    // Validate that both employeeId and password are provided
    if (!employeeId || !password) {
      return res.status(400).json({ error: 'Employee ID and password are required' });
    }

    // Find admin by employeeId
    const admin = await Admin.findOne({ employeeId });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid employee ID or password' });
    }

    // Directly compare the password (no encryption used)
    if (password !== admin.password) {
      return res.status(401).json({ error: 'Invalid employee ID or password' });
    }
 
  
    // Set a cookie with employeeId
    // res.cookie('empid', admin.employeeId, {
    //   httpOnly: true, // Makes cookie inaccessible to JavaScript on the client-side
    //   secure: process.env.NODE_ENV === 'production', // Use 'production' for HTTPS
    //   sameSite: 'strict', // Helps prevent CSRF attacks
    //   maxAge: 1 * 24 * 60 * 60 * 1000 // 1 day
    // });
generateTokenAndSetCookie(res,admin.employeeId)
console.log(admin.employeeId,);
    // Send a success response with employeeId
    return res.status(200).json({ 
      message: 'Login successful',
      employeeId: admin.employeeId
    });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Check Authentication Handler
// Check Authentication Handler
// Check Authentication Handler
exports.checkAuth = async (req, res) => {
  try {
    // Extract the employeeId from req object set by verifyToken middleware
    const user = await Admin.findOne({ employeeId: req.userId }).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
    console.log("User authentication successful"); 
  } catch (error) {
    console.error("Error in checkAuth:", error.message); 
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


// Get All Admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select("-password");
    res.status(200).json({ success: true, data: admins });
  } catch (error) {
    console.error("Error fetching admins:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Delete an Admin by ID
exports.deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL parameter

    // Find and delete the admin by their _id
    const deletedAdmin = await Admin.findByIdAndDelete(id);

    if (!deletedAdmin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.verifyAdminId = async (req, res) => {
  const { employeeId } = req.body; // Ensure this matches the key sent from frontend

  console.log('Received employeeId:', employeeId); // Debugging line

  try {
    const admin = await Admin.findOne({ employeeId });
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid Admin ID' });
    }
    res.status(200).json({ success: true, valid: true });
  } catch (error) {
    console.error('Error verifying Admin ID:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};




//update password


// Function to handle password update
exports.updatePassword = async (req, res) => {
  const { employeeId,newPassword } = req.body;

  try {
    // Validate input fields
    if (!employeeId || !newPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Find admin by employeeId
    const admin = await Admin.findOne({ employeeId });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Check if the current password is correct
    const isPasswordMatch = await bcrypt.compare(currentPassword, admin.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update the password in the database
    admin.password = hashedNewPassword;
    await admin.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
