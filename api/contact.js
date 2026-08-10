import { Resend } from 'resend';

// Initialize Resend with the Environment Variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Handle CORS for preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, projectType, message } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'NimraDev Labs <contact@nimradev.site>',
      to: 'nimra.developer.8122005@gmail.com',
      replyTo: email,
      subject: `New Project Inquiry from ${name} - ${company || 'Unknown Company'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #6C3FFC; margin-bottom: 20px;">New Project Inquiry</h2>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
          </div>
          
          <h3 style="color: #334155; margin-bottom: 10px;">Message:</h3>
          <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center;">This email was sent from your NimraDev Labs website contact form.</p>
        </div>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Resend Error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
