const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const adminRoutes = require('./Router/adminRoutes');
const registrationRoutes = require('./Router/collegeRegister');
const adminregisterRoutes = require('./Router/adminLoginrouter');
const basicSettingsRouter = require('./Router/basicsetting');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware
// app.use(cors());
// Use CORS middleware to allow all origins
// app.use(cors({
//      origin: '*', // Allow all origins
//     // origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true,
//     optionsSuccessStatus: 200 // For legacy browsers to avoid CORS errors
//   }));


// const allowedOrigins = ['http://localhost:3000', 'https://itapikey.vercel.app', 'https://caias-itfest.netlify.app','https://caias-it-fest-admin.netlify.app'];

// app.use(cors({
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like server-to-server requests or mobile apps) or from allowed origins
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true, // Enable cookies and other credentials
//   optionsSuccessStatus: 200 // For older browsers using OPTIONS method
// }));

const allowedOrigins = [
  'http://localhost:3000',
  'https://caias-itfest.netlify.app',
  'https://caias-it-fest-admin.netlify.app',
  'https://caias-it-fest-quiz.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));



  app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());


// Routes
app.use('/admin', adminRoutes);
app.use('/api', registrationRoutes);
app.use('/api', adminregisterRoutes);
app.use('/api', basicSettingsRouter);
// Root route for testing
app.get('/', (req, res) => {
    res.send('Hello from the root route!');
});

module.exports = app;
// yRuAlxnEYO9f4b82