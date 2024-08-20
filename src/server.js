/*
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

// Створіть транспорт для відправки електронної пошти
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'kovalchukdariia5678@gmail.com',
    pass: 'Midway22DaschaSonne!!!' // замінити на ваш пароль від електронної пошти
  }
});

// Створіть роут для обробки форми
app.post('/send-email', (req, res) => {
  const { email, comment } = req.body;

  // Створіть електронну пошту
  const mailOptions = {
    from: email,
    to: 'kovalchukdariia5678@gmail.com',
    subject: 'New form',
    text: `Електронна пошта: ${email}\nПовідомлення: ${comment}`
  };

  // Відправте електронну пошту
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
    res.send('Email sent successfully!');
  });
});

// Запустіть сервер
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
*/