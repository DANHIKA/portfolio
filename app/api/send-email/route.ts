import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  const { name, email, message }: EmailData = await request.json();

  // Create reusable transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
