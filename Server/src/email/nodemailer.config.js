const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'holidayproductionhouse@gmail.com',
    pass: 'lsbzwvgrcacmyvci',
  },
});

const sender = {
  email: 'holidayproductionhouse@gmail.com',
  name: 'CAIAS-It-Fest',
};

module.exports = {
  transporter,
  sender,
};
