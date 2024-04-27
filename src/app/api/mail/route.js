import nodemailer from 'nodemailer';

export const POST = async (req, res) => {
  try {
    // Extract data from the request body
      const { name, email, phone, date,message } =await req.json();

      console.log(`email = ${email} , name = ${name}  , message = ${message}`)

    // Validate the presence of required fields
      if (!name || !email || !phone  || !message)
      {
        
      const errorResponse = new Response(JSON.stringify({ error: true, message: 'All fields are required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return errorResponse;
      }
      
      console.log(`zho email = ${process.env.ZOHO_USER} pass = ${process.env.ZOHO_PASS}`)

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `HX Site | "${name}" <info@homeorx.in>`,
      to: process.env.DESTINATION_EMAIL, // Add your email address where you want to receive the message
      subject: `Appointment - ${name} - ${phone} - ${email}`,
      text: message,
    });

    console.log('Message sent: %s', info.messageId);
    const successResponse = new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return successResponse;
  } catch (error) {
    console.error('Error occurred while sending email:', error.message);
    const errorResponse = new Response(JSON.stringify({ success: false, error: 'Internal Server Error', message: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return errorResponse;
  }
};