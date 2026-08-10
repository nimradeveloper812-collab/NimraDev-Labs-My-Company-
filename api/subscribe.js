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
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const { data, error } = await resend.emails.send({
      from: 'NimraDev Labs <contact@nimradev.site>',
      to: 'nimra.developer.8122005@gmail.com',
      subject: `New Newsletter Subscriber!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px; text-align: center;">
          <h2 style="color: #6C3FFC;">New Subscriber! 🎉</h2>
          <p style="color: #475569; font-size: 16px;">You have a new subscriber to the NimraDev Labs newsletter:</p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 18px; font-weight: bold; color: #0f172a;">
            ${email}
          </div>
          <p style="font-size: 12px; color: #94a3b8;">This email was sent from your NimraDev Labs website footer.</p>
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
