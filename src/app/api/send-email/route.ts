import { SMTPClient } from 'emailjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  const client = new SMTPClient({
    user: process.env.MAIL_USER!,
    password: process.env.MAIL_PASSWORD!,
    host: process.env.MAIL_HOST!,
    port: Number(process.env.MAIL_PORT ?? 465),
    ssl: true,
  });

  try {
    await client.sendAsync({
      from: process.env.MAIL_USER!,
      to: process.env.MAIL_TO!,
      'reply-to': email,
      subject: `Contato: ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\n\n${message ?? ''}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 500 });
  } finally {
    client.smtp.close();
  }
}
