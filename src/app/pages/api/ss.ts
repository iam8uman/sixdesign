// app/api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Extract form data from the request body
      const { name, phone, email, message } = req.body;

      // Here, you can implement your email sending logic using a library like Nodemailer
      // For demonstration purposes, let's just log the form data
      console.log('Name:', name);
      console.log('Phone:', phone);
      console.log('Email:', email);
      console.log('Message:', message);

      // Sending a dummy response indicating success
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
