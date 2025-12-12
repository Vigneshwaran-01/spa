import { transporter, mailOptions } from '../../config/nodemailer';
import mysql from 'mysql2/promise';

// Create a database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const token = data.recaptchaToken;
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    try {
      // Verify reCAPTCHA
      const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
      const captchaRes = await fetch(verifyURL, { method: 'POST' });
      const captchaJson = await captchaRes.json();

      if (!captchaJson.success) {
        return res.status(400).json({ message: 'Failed reCAPTCHA verification' });
      }

      // Store in database
      const connection = await pool.getConnection();
      try {
        await connection.query(
          `INSERT INTO endpoint_security_form_submissions 
          (name, email, phone, company, service, message) 
          VALUES (?, ?, ?, ?, ?, ?)`,
          [
            data.name,
            data.email,
            data.phone,
            data.company,
            data.service,
            data.message
          ]
        );
      } finally {
        connection.release();
      }

      // Send email
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Endpoint Security Form Submission - Spam cloud',
        text: data.message,
        html: `
            <h1>Endpoint Security Page Form</h1>
          <p><strong>Form Type:</strong> Endpoint Security Inquiry</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p> 
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Message:</strong> ${data.message}</p>
           <hr />
        `,
      });

      console.log('Endpoint security form submission saved and email sent successfully.');
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error processing endpoint security form submission:', error);
      res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
