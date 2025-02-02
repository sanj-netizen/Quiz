// const express = require('express');
// const router = express.Router();
// const { registerAdmin ,loginAdmin,checkAuth } = require('../Controller/adminLoginController');
// const {verifyToken}=require('../jwt/verifyJwtToken')
// router.post('/admin/register', registerAdmin);
// // Route to handle admin registration
// router.post('/admin/login', loginAdmin);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin, checkAuth,deleteAdmin,getAllAdmins, verifyAdminId } = require('../Controller/adminLoginController');
const { verifyToken,verifyTokenquiz } = require('../jwt/verifyJwtToken'); // Adjust the path based on your setup

// Route to handle admin registration
router.post('/admin/register', registerAdmin);

// Route to handle admin login
router.post('/admin/login', loginAdmin);

// Protected route to check authentication
router.get('/check_auth', verifyToken, checkAuth,);

router.delete('/admins/:id', deleteAdmin); // DELETE an admin by employeeId

router.get('/admins/all', getAllAdmins); // GET all admins


// Route to verify admin ID
router.post('/verify-id',verifyAdminId);

module.exports = router;
