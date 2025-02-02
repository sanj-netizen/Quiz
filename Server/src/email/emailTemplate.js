// const QUIZ_REGISTRATION_TEMPLATE = (registrationId, password, otp) => `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Welcome to the Quiz!</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #007BFF, #00CFFF); padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
//     <h1 style="color: white; margin: 0; font-size: 24px;">Welcome to the Quiz!</h1>
//     <p style="color: #f0f0f0; margin: 10px 0;">Your registration is complete.</p>
//   </div>
//   <div style="background-color: #ffffff; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello,</p>
//     <p>Congratulations! Your registration for the quiz has been successfully completed.</p>
//     <p>Here are your registration details:</p>
//     <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
//       <tr>
//         <td style="font-weight: bold; padding: 8px 0; border-bottom: 1px solid #ddd;">Registration ID:</td>
//         <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${registrationId}</td>
//       </tr>
//       <tr>
//         <td style="font-weight: bold; padding: 8px 0; border-bottom: 1px solid #ddd;">Password:</td>
//         <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${password}</td>
//       </tr>
//       <tr>
//         <td style="font-weight: bold; padding: 8px 0; border-bottom: 1px solid #ddd;">OTP:</td>
//         <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${otp}</td>
//       </tr>
//     </table>
//     <p>Please make sure to keep this information secure and use the OTP for verification purposes.</p>
//     <p>For your security, please note the following:</p>
//     <ul style="font-size: 16px; margin: 20px 0;">
//       <li><strong>Account Security:</strong> Keep your password and OTP confidential. Do not share them with anyone.</li>
//       <li><strong>OTP Validity:</strong> The OTP is valid for a limited time. Make sure to use it promptly.</li>
//       <li><strong>Phishing Alerts:</strong> Be cautious of emails or messages requesting your registration details. Always verify the source.</li>
//       <li><strong>Suspicious Activity:</strong> If you notice any unusual activity, contact our support team immediately.</li>
//     </ul>
//     <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
//     <p>Best regards,<br>The Quiz Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;
// module.exports = {
//   QUIZ_REGISTRATION_TEMPLATE
// }

// const QUIZ_REGISTRATION_TEMPLATE = (registrationId, password, otp, accessCode) => `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Welcome to the Quiz!</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #007BFF, #00CFFF); padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
//     <img src="cid:collegeLogo" alt="College Logo" style="max-width: 100px; margin-bottom: 10px;">
//     <h1 style="color: white; margin: 0; font-size: 24px;">Welcome to the Quiz!</h1>
//     <p style="color: #f0f0f0; margin: 10px 0;">Your registration is complete.</p>
//     <p style="color: #f0f0f0; margin: 10px 0; font-size: 18px;">Christ Academy Institute for Advanced Studies</p>
//   </div>
//   <div style="background-color: #ffffff; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello,</p>
//     <p>Congratulations! Your registration for the quiz has been successfully completed.</p>
//     <p>Here are your registration details:</p>
//     <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
//       <tr>
//         <td style="font-weight: bold; padding: 8px 0; border-bottom: 1px solid #ddd;">Registration ID:</td>
//         <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${registrationId}</td>
//       </tr>
//       <tr>
//         <td style="font-weight: bold; padding: 8px 0; border-bottom: 1px solid #ddd;">Password:</td>
//         <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${password}</td>
//       </tr>
//       <tr>
//         <td style="font-weight: bold; padding: 8px 0; border-bottom: 1px solid #ddd;">OTP:</td>
//         <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${otp}</td>
//       </tr>
//       <tr>
//         <td style="font-weight: bold; padding: 8px 0; border-bottom: 1px solid #ddd;">Access Code:</td>
//         <td style="padding: 8px 0; border-bottom: 1px solid #ddd;">${accessCode}</td>
//       </tr>
//     </table>
//     <p>Please make sure to keep this information secure and use the OTP and Access Code for verification purposes.</p>
//     <p>For your security, please note the following:</p>
//     <ul style="font-size: 16px; margin: 20px 0;">
//       <li><strong>Account Security:</strong> Keep your password, OTP, and access code confidential. Do not share them with anyone.</li>
//       <li><strong>OTP Validity:</strong> The OTP is valid for a limited time. Make sure to use it promptly.</li>
//       <li><strong>Phishing Alerts:</strong> Be cautious of emails or messages requesting your registration details. Always verify the source.</li>
//       <li><strong>Suspicious Activity:</strong> If you notice any unusual activity, contact our support team immediately.</li>
//     </ul>
//     <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
//     <p>Best regards,<br>The Quiz Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;

// module.exports = {
//   QUIZ_REGISTRATION_TEMPLATE
// };


// const QUIZ_REGISTRATION_TEMPLATE = (registrationId, password, otp, accessCode) => `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Welcome to the Quiz!</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       line-height: 1.6;
//       color: #333;
//       max-width: 600px;
//       margin: 0 auto;
//       padding: 20px;
//     }
//     .header {
//       background: linear-gradient(to right, #007BFF, #00CFFF);
//       padding: 20px;
//       text-align: center;
//       border-radius: 8px 8px 0 0;
//     }
//     .header img {
//       max-width: 150px;
//       margin-bottom: 10px;
//     }
//     .header h1 {
//       color: white;
//       margin: 0;
//       font-size: 24px;
//     }
//     .content {
//       background-color: #ffffff;
//       padding: 20px;
//       border-radius: 0 0 8px 8px;
//       box-shadow: 0 2px 5px rgba(0,0,0,0.1);
//     }
//     table {
//       width: 100%;
//       border-collapse: collapse;
//       margin: 20px 0;
//     }
//     td {
//       padding: 8px 0;
//       border-bottom: 1px solid #ddd;
//     }
//     .footer {
//       text-align: center;
//       margin-top: 20px;
//       color: #888;
//       font-size: 0.8em;
//     }
//     .rules {
//       font-size: 16px;
//       margin: 20px 0;
//     }
//     .rules li {
//       margin-bottom: 10px;
//     }
//   </style>
// </head>
// <body>
//   <div class="header">
//     <img src="cid:collegeLogo" alt="College Logo">
//     <h1>Welcome to the Quiz!</h1>
//     <p>Your registration is complete.</p>
//     <p>Christ Academy Institute for Advanced Studies</p>
//   </div>
//   <div class="content">
//     <p>Hello,</p>
//     <p>Congratulations! Your registration for the quiz has been successfully completed.</p>
//     <p>Here are your registration details:</p>
//     <table>
//       <tr>
//         <td style="font-weight: bold;">Registration ID:</td>
//         <td>${registrationId}</td>
//       </tr>
//       <tr>
//         <td style="font-weight: bold;">Password:</td>
//         <td>${password}</td>
//       </tr>
//       <tr>
//         <td style="font-weight: bold;">OTP:</td>
//         <td>${otp}</td>
//       </tr>
//       <tr>
//         <td style="font-weight: bold;">Access Code:</td>
//         <td>${accessCode}</td>
//       </tr>
//     </table>
//     <p>Please make sure to keep this information secure and use the OTP for verification purposes.</p>
//     <p><strong>Quiz Rules:</strong></p>
//     <ul class="rules">
//       <li>Number of participants per team: minimum 2 and maximum 4.</li>
//       <li>Decision of Quiz Master will be final.</li>
//       <li>Instructions will be given on the spot.</li>
//       <li>All electronic gadgets are strictly prohibited.</li>
//       <li>In case of any malpractice found, the team will be strictly disqualified on the spot.</li>
//       <li>If participants do not submit the form within the time limit, the form will automatically log out.</li>
//     </ul>
//     <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
//     <p>Best regards,<br>The Quiz Team</p>
//   </div>
//   <div class="footer">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;


const QUIZ_REGISTRATION_TEMPLATE = (registrationId, password, otp, accessCode) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to the Quiz!</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(to right, #007BFF, #00CFFF);
      padding: 20px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .header img {
      max-width: 150px;
      margin-bottom: 10px;
    }
    .header h1 {
      color: white;
      margin: 0;
      font-size: 24px;
    }
    .content {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    td {
      padding: 8px 0;
      border-bottom: 1px solid #ddd;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #888;
      font-size: 0.8em;
    }
    .rules, .terms {
      font-size: 16px;
      margin: 20px 0;
    }
    .rules li, .terms li {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <div class="header">
    <img src="cid:collegeLogo" alt="College Logo">
    <h1>Welcome to the Quiz!</h1>
    <p>Your registration is complete.</p>
    <p>Christ Academy Institute for Advanced Studies</p>
  </div>
  <div class="content">
    <p>Hello,</p>
    <p>Congratulations! Your registration for the quiz has been successfully completed.</p>
    <p>Here are your registration details:</p>
    <table>
      <tr>
        <td style="font-weight: bold;">Registration ID:</td>
        <td>${registrationId}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Password:</td>
        <td>${password}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">OTP:</td>
        <td>${otp}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Access Code:</td>
        <td>${accessCode}</td>
      </tr>
    </table>
    <p>Please make sure to keep this information secure and use the OTP for verification purposes.</p>
    
    <p><strong>Quiz Rules:</strong></p>
    <ul class="rules">
      <li>Minimum 2 and maximum 4 participants per team.</li>
      <li>Electronic gadgets are not allowed.</li>
      <li>Malpractice is strictly prohibited (e.g., switching tabs, refreshing the page). Any team caught will be disqualified immediately.</li>
    </ul>

    <p><strong>Terms and Conditions:</strong></p>
    <ul class="terms">
      <li>Scores will be sent to the participants' registered email IDs.</li>
      <li>Qualification and disqualification notices for each round will be sent to the registered email IDs.</li>
      <li>Answers must be submitted within the time limit; otherwise, marks for that round will not be considered.</li>
      <li>Some rounds will be conducted online, and some will be offline.</li>
      <li>The Quiz Master’s decision is final for all rounds.</li>
      <li>All questions must be answered; otherwise, participants cannot submit their answers.</li>
      <li>If the page is refreshed, the question pattern will change, and the timer will start from the beginning.</li>
      <li>In case of network issues, decisions will be made based on the number of teams and the current situation.</li>
      <li>By registering, you agree to all the above terms and conditions.</li>
    </ul>

    <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
    <p>Best regards,<br>The Quiz Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message; please do not reply to this email.</p>
  </div>
</body>
</html>
`;

const EMPLOYEE_INFORMATION_TEMPLATE = (employeeId, name, email, password) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to the Team!</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(to right, #4CAF50, #2E8B57);
      padding: 20px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .header img {
      max-width: 150px;
      height: auto;
      margin-bottom: 10px;
    }
    .header h1 {
      color: white;
      margin: 0;
      font-size: 24px;
    }
    .content {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    td {
      padding: 8px 0;
      border-bottom: 1px solid #ddd;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #888;
      font-size: 0.8em;
    }
  </style>
</head>
<body>
  <div class="header">
    <img src="cid:companyLogo" alt="Company Logo">
    <h1>Welcome to the Team!</h1>
    <p>We are thrilled to have you with us.</p>
  </div>
  <div class="content">
    <p>Hello ${name},</p>
    <p>Congratulations on joining our team! Here are your employee details:</p>
    <table>
      <tr>
        <td style="font-weight: bold;">Admin ID:</td>
        <td>${employeeId}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Name:</td>
        <td>${name}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Email:</td>
        <td>${email}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Password:</td>
        <td>${password}</td>
      </tr>
    </table>
    <p>We are excited about the skills and expertise you bring to our team. Should you have any questions or need support, feel free to reach out.</p>
    <p>Best regards,<br>The HR Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;
const QUIZ_SCORE_TEMPLATE = (teamName, roundName, score) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Quiz Score</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fdfdfd;
    }
    .header {
      background: linear-gradient(to right, #ff5e62, #ff9966);
      padding: 20px;
      text-align: center;
      border-radius: 12px 12px 0 0;
      color: white;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: bold;
    }
    .college-name {
      font-size: 22px;
      margin-top: 10px;
      font-weight: bold;
    }
    .logo {
      width: 120px; /* Adjust width as needed */
      margin: 20px auto;
      display: block;
    }
    .content {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 0 0 12px 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      color: #333;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    td {
      padding: 12px;
      border-bottom: 1px solid #eee;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #777;
      font-size: 0.9em;
    }
    .footer a {
      color: #ff5e62;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="header">
    <img src="cid:collegeLogo" alt="College Logo" class="logo" />
    <h1>Congratulations!</h1>
    <div class="college-name">Christ Academy Institute for Advanced Studies</div>
  </div>
  <div class="content">
    <p>Hello Team ${teamName},</p>
    <p>We're thrilled to share your quiz score with you for <strong>${roundName}</strong>:</p>
    <table>
      <tr>
        <td style="font-weight: bold;">Team Name:</td>
        <td>${teamName}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Round:</td>
        <td>${roundName}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Score:</td>
        <td>${score}</td>
      </tr>
    </table>
    <p>Thank you for participating in the quiz! Your enthusiasm and effort are greatly appreciated. We hope you enjoyed the challenge and look forward to seeing you in future events.</p>
    <p>Best regards,<br>The Quiz Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

// Define the email template function
const ROUND_PASS_TEMPLATE = (teamName, roundName, otp, accessCode) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Congratulations on Advancing to ${roundName}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
    }
    .header {
      background: #28a745;
      padding: 20px;
      text-align: center;
      border-radius: 8px 8px 0 0;
      color: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header img {
      max-width: 150px;
      margin-bottom: 10px;
    }
    .header h1 {
      margin: 0;
      font-size: 26px;
      font-weight: bold;
    }
    .header p {
      margin: 5px 0;
      font-size: 18px;
    }
    .content {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      border: 1px solid #ddd;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    td {
      padding: 12px;
      border-bottom: 1px solid #ddd;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #777;
      font-size: 0.8em;
    }
    .footer p {
      margin: 5px 0;
    }
  </style>
</head>
<body>
  <div class="header">
    <img src="cid:quizLogo" alt="Quiz Logo">
     <p>Christ Academy Institute for Advanced Studies</p>
    <h1>Congratulations!</h1>
    <p>You've Advanced to the ${roundName} Round</p>
   
  </div>
  <div class="content">
    <p>Hello,</p>
    <p>We are thrilled to inform you that your team, <strong>${teamName}</strong>, has successfully advanced to the ${roundName} round of the quiz!</p>
    <p>Below are your credentials for the upcoming round:</p>
    <table>
      <tr>
        <td style="font-weight: bold;">OTP:</td>
        <td>${otp}</td>
      </tr>
      <tr>
        <td style="font-weight: bold;">Access Code:</td>
        <td>${accessCode}</td>
      </tr>
    </table>
    <p>Please keep this information secure and use it to access the ${roundName} round.</p>
    <p>Best of luck as you proceed to the next stage!</p>
    <p>Best regards,<br>The Quiz Team at Christ Academy for Advanced Studies</p>
  </div>
  <div class="footer">
    <p>This is an automated message. Please do not reply to this email.</p>
    <p>&copy; ${new Date().getFullYear()} Christ Academy Institute for Advanced Studies</p>
  </div>
</body>
</html>
`;

const NOT_SELECTED_TEMPLATE = (teamname) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Participating!</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #dc3545;
      padding: 20px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .header img {
      max-width: 150px;
      margin-bottom: 10px;
    }
    .header h1 {
      color: white;
      margin: 0;
      font-size: 24px;
    }
    .content {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .content h2 {
      color: #dc3545;
      margin-top: 0;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #888;
      font-size: 0.8em;
    }
  </style>
</head>
<body>
  <div class="header">
    <img src="cid:quizLogo" alt="Quiz Logo">
    <h1>Thank You, ${teamname}!</h1>
  </div>
  <div class="content">
    <h2>We Appreciate Your Effort</h2>
    <p>Hello ${teamname},</p>
    <p>Thank you for participating in the quiz competition. Unfortunately, you have not been selected for the next round. We truly appreciate your effort and determination throughout the competition.</p>
    <p>Please keep honing your skills, and we look forward to seeing you in future competitions.</p>
    <p>Best regards,<br>The Quiz Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

const SELECTED_FOR_ROUND5_TEMPLATE = (teamName) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Congratulations on Your Selection for Round 5!</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #28a745;
      padding: 20px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .header img {
      max-width: 150px;
      margin-bottom: 10px;
    }
    .header h1 {
      color: white;
      margin: 0;
      font-size: 24px;
    }
    .content {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .content h2 {
      color: #28a745;
      margin-top: 0;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #888;
      font-size: 0.8em;
    }
  </style>
</head>
<body>
  <div class="header">
    <img src="cid:quizLogo" alt="Quiz Logo">
    <h1>Congratulations, ${teamName}!</h1>
  </div>
  <div class="content">
    <h2>You've Been Selected for Round 5!</h2>
    <p>Dear ${teamName},</p>
    <p>We are thrilled to inform you that your team has been selected for the 5th round of the CAIAS-IT-FEST quiz competition!</p>
    <p>The round will be held <strong>offline</strong> at the <strong>4th Floor, ST. Chavara Hall</strong>.</p>
    <p>Please be present at the venue on time and ensure your team is ready to participate. We look forward to your performance in the next round!</p>
    <p>Best of luck!<br>The Quiz Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;



module.exports = {
  QUIZ_REGISTRATION_TEMPLATE,
  EMPLOYEE_INFORMATION_TEMPLATE,
  QUIZ_SCORE_TEMPLATE,
  ROUND_PASS_TEMPLATE ,
 
  NOT_SELECTED_TEMPLATE,
  SELECTED_FOR_ROUND5_TEMPLATE
};
