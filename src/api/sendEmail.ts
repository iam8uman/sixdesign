// import nodemailer from "nodemailer";

// export default async function handler(
//   req: {
//     method: string;
//     body: { name: any; phone: any; email: any; message: any };
//   },
//   res: {
//     status: (arg0: number) => {
//       (): any;
//       new (): any;
//       json: { (arg0: { success: boolean; error?: string }): void; new (): any };
//     };
//   }
// ) {
//   if (req.method === "POST") {
//     const { name, phone, email, message } = req.body;

//     // Create a nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: "smtp.example.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "thetestemail.com@example.com",
//         pass: "Thetestemailofsuman@123",
//       },
//     });

//     try {
//       // Send email
//       await transporter.sendMail({
//         from: "your-email@example.com",
//         to: "recipient@example.com",
//         subject: "New Contact Form Submission",
//         html: `
//           <h3>New Contact Form Submission</h3>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Message:</strong> ${message}</p>
//         `,
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       res.status(500).json({ success: false, error: "Error sending email" });
//     }
//   } else {
//     res.status(405).json({ success: false, error: "Method Not Allowed" });
//   }
// }
console.log("hello world")