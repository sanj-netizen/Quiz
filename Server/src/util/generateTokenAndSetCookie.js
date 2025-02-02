// const jwt = require('jsonwebtoken');

// const generateTokenAndSetCookie = (res, employeeId) => {
//   const token = jwt.sign({ employeeId }, 'HOLI_DAY@1234', {
//     expiresIn: '7d', // Token expiration time
//   });

//   res.cookie('token', token, {
//     httpOnly: true, 
//     secure: true, 
//     sameSite: 'strict',
//     maxAge: 7 * 24 * 60 * 60 * 1000, 
//   });

//   return token; // Return the generated token
// };

// module.exports = { generateTokenAndSetCookie };

// const jwt = require('jsonwebtoken');

// const generateTokenAndSetCookie = (res, employeeId) => {
//   const token = jwt.sign({ employeeId }, 'HOLI_DAY@1234', {
//     expiresIn: '7d', // Token expiration time
//   });

//   res.cookie('token', token, {
//     httpOnly: true, 
//     secure: req.secure || req.headers['x-forwarded-proto'] === 'https', // Only secure if HTTPS
//     sameSite: 'none', // 'none' for cross-site requests
//     maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time (7 days)
//   });

//   return token; // Return the generated token
// };

// module.exports = { generateTokenAndSetCookie };

const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (res, employeeId) => {
  const token = jwt.sign({ employeeId }, process.env.JWT_SECRET || 'HOLI_DAY@1234', {
    expiresIn: '7d', // Token expiration time
  });

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only secure in production
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // SameSite settings for cross-site
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time (7 days)
  });

  return token; // Return the generated token
};



const generateTokenAndSetCookieQuiz = (res, employeeId) => {
  const token = jwt.sign({ employeeId }, process.env.JWT_SECRET || 'HOLI_DAY@1234', {
    expiresIn: '7d', // Token expiration time
  });
console.log(token)
  res.cookie('token_admin', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only secure in production
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // SameSite settings for cross-site
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time (7 days)
  });

  return token; // Return the generated token
};


// access code generation



const generateTokenAndSetCookieAcess = (res, accessCode) => {
  // Create the JWT token, signing it with the accessCode
  const token = jwt.sign({ accessCode }, process.env.JWT_SECRET || 'HOLI_DAY@1234', {
    expiresIn: '7d', // Token expiration time
  });

  // Set the token in the HTTP-only cookie
  res.cookie('accessCode', token, {
    httpOnly: true, // Prevents access to the cookie via JavaScript for security
    secure: process.env.NODE_ENV === 'production', // Only secure in production (HTTPS)
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // Handles cross-site requests
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time (7 days)
  });

  return token; // Return the token if you need to use it later
};



module.exports = { generateTokenAndSetCookie,generateTokenAndSetCookieQuiz,generateTokenAndSetCookieAcess };
