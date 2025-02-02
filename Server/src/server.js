const http= require('http');
const mongoose= require('mongoose');
const app= require('./app');
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((error) => {
    console.error("Error in MongoDB connection:", error);
  });

const server = http.createServer(app);

server.on("error", (error) => {
  console.error("Error in server:", error);
});

const PORT = process.env.SERVER_PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




//server Vercel
// const mongoose = require('mongoose');
// const app = require('./app');
// require('dotenv').config();


// // // Connect to MongoDB
// mongoose.connect(`mongodb+srv://holidaydemo6:yRuAlxnEYO9f4b82@cluster0.l3t3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Database connection error:', error);
// });

// // Start the server
// app.listen('https://itapikey.vercel.app/', () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });
// it_api_key