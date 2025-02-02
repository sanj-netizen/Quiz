const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });
  }

  try {
    const decoded = jwt.verify(token, 'HOLI_DAY@1234');
    if (!decoded) {
      return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });
    }
    req.userId = decoded.employeeId; // Assign employeeId to req object
    next();
  } catch (error) {
    console.error("Error verifying token", error);
    return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });
  }
};



const verifyTokenquiz = (req, res, next) => {
  const token = req.cookies.token_admin;

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'HOLI_DAY@1234');
    req.employeeId = decoded.employeeId; // Attach employeeId to request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(403).json({ message: 'Invalid token' });
  }
};
module.exports = { verifyToken, verifyTokenquiz };
