// const { transporter, sender } = require('./nodemailer.config');
// const { QUIZ_REGISTRATION_TEMPLATE } = require('../email/emailTemplate'); // Ensure the path is correct

// // Quiz Registration
// const sendQuizRegistrationEmail = async (to, registrationId, password, otp) => {
//   try {
//     const emailContent = QUIZ_REGISTRATION_TEMPLATE(registrationId, password, otp);
    
//     await transporter.sendMail({
//       from: sender.email,
//       to,
//       subject: 'Quiz Registration Successful',
//       html: emailContent,
//     });
    
//     console.log('Quiz registration email sent successfully!');
//   } catch (error) {
//     console.error('Error sending quiz registration email:', error.message);
//   }
// };

// module.exports = {
//   sendQuizRegistrationEmail
// };


const { transporter, sender } = require('./nodemailer.config');
const { QUIZ_REGISTRATION_TEMPLATE,EMPLOYEE_INFORMATION_TEMPLATE,QUIZ_SCORE_TEMPLATE,ROUND_PASS_TEMPLATE,NOT_SELECTED_TEMPLATE, SELECTED_FOR_ROUND5_TEMPLATE } = require('../email/emailTemplate'); // Ensure the path is correct
const path = require('path'); // Import path to handle file paths

// Quiz Registration Email Function
const sendQuizRegistrationEmail = async (to, registrationId, password, otp,accessCode) => {
  try {
    // Generate email content using the template
    const emailContent = QUIZ_REGISTRATION_TEMPLATE(registrationId, password, otp,accessCode);

    // Send the email using Nodemailer
    await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`, 
      to,
      subject: 'Quiz Registration Successful',
      html: emailContent,
      attachments: [
        {
          filename: 'college-logo.webp',
          path: path.join(__dirname, '../img/DEGREE-08-05-2023.png'), 
          cid: 'collegeLogo', 
        },
      ],
    });

    console.log('Quiz registration email sent successfully!');
  } catch (error) {
    console.error('Error sending quiz registration email:', error.message);
  }
};

const sendEmployeeInformationEmail = async (to, name, employeeId, password) => {
  try {
    const emailContent = EMPLOYEE_INFORMATION_TEMPLATE(employeeId, name, to, password);
    
    console.log('Sending email with content:', emailContent);

    // Send the email using Nodemailer
    await transporter.sendMail({
      from: `"CAIAS-IT-FEST" <${process.env.EMAIL_USER}>`, // Sender's email
      to, // Recipient's email
      subject: 'Welcome to the Team!',
      html: emailContent, // Email HTML content
      attachments: [
        {
          filename: 'company-logo.png',
          path: path.join(__dirname, '../img/DEGREE-08-05-2023.png'), // Path to the image
          cid: 'companyLogo', // Content ID for embedding
        },
      ],
    });

    console.log('Employee information email sent successfully!');
  } catch (error) {
    console.error('Error sending employee information email:', error.message);
  }
};




const sendQuizScoreEmail = async (to, teamName, roundName,score) => {
  try {
    const emailContent = QUIZ_SCORE_TEMPLATE(teamName,roundName,score);
    
    // console.log('Sending email with content:', emailContent);

   
      await transporter.sendMail({
        from: `"CAIAS-IT-FEST" <${process.env.EMAIL_USER}>`, // Sender's email
        to, // Recipient's email
        subject: 'Welcome to the Team!',
        html: emailContent, // Email HTML content
        attachments: [
        {
          filename: 'college-logo.png',
          path: path.join(__dirname, '../img/DEGREE-08-05-2023.png'), // Path to the logo image
          cid: 'collegeLogo', // Content ID for embedding
        },
      ],
    });

    console.log('Quiz score email sent successfully!');
  } catch (error) {
    console.error('Error sending quiz score email:', error.message);
  }
};





const sendQuizAccessCodeEmail = async (to, teamName, roundName, otp, accessCode) => {
  try {
    // Generate the email content using the template function
    const emailContent = ROUND_PASS_TEMPLATE( teamName, roundName, otp, accessCode);
    await transporter.sendMail({
      from: `"CAIAS-IT-FEST" <${process.env.EMAIL_USER}>`, // Sender's email
      to, // Recipient's email
      subject: 'Your Access Code and OTP for CAIAS-IT-FEST!',
      html: emailContent, // Email HTML content
      attachments: [
        {
          filename: 'college-logo.png',
          path: path.join(__dirname, '../img/DEGREE-08-05-2023.png'), // Path to the logo image
          cid: 'quizLogo', // Content ID for embedding
        },
      ],
    });

    console.log('Quiz score email sent successfully!');
  } catch (error) {
    console.error('Error sending quiz score email:', error.message);
  }
};





const sendDisqualification = async (to, teamName) => {
  try {
    // Generate the email content using the template function
    const emailContent = NOT_SELECTED_TEMPLATE(teamName);
    
    await transporter.sendMail({
      from: `"CAIAS-IT-FEST" <${process.env.EMAIL_USER}>`, // Sender's email
      to, // Recipient's email
      subject: 'Disqualification Notice for CAIAS-IT-FEST', // Corrected subject
      html: emailContent, // Email HTML content
      attachments: [
        {
          filename: 'college-logo.png',
          path: path.join(__dirname, '../img/DEGREE-08-05-2023.png'), // Path to the logo image
          cid: 'quizLogo', // Content ID for embedding
        },
      ],
    });

    console.log('Disqualification email sent successfully!');
  } catch (error) {
    console.error('Error sending disqualification email:', error.message);
  }
};



// Function to send email for the 5th round selection
const sendFifthRoundCode = async (recipientEmail, teamName) => {
  try {
    // Generate the email content using the template function
    const emailContent = SELECTED_FOR_ROUND5_TEMPLATE(teamName);
    
    // Define the email options
    const mailOptions = {
      from: `"CAIAS-IT-FEST" <${process.env.EMAIL_USER}>`, // Sender's email address
      to: recipientEmail, // Recipient's email address
      subject: 'Selected for 5th Round', // Subject of the email
      html: emailContent, // HTML content of the email
      attachments: [
        {
          filename: 'college-logo.png', // Name of the attached logo file
          path: path.join(__dirname, '../img/DEGREE-08-05-2023.png'), // Path to the logo image
          cid: 'quizLogo', // Content ID for embedding the image in the email
        },
      ],
    };

    // Send the email using the transporter
    await transporter.sendMail(mailOptions);

    console.log(`Fifth round selection email sent successfully to ${recipientEmail}`);
  } catch (error) {
    console.error(`Failed to send fifth round selection email to ${recipientEmail}: ${error.message}`);
  }
};
module.exports = {
  sendQuizRegistrationEmail,
  sendEmployeeInformationEmail ,
  sendQuizScoreEmail,
  sendQuizAccessCodeEmail,
  sendDisqualification,
  sendFifthRoundCode
};



