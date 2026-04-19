import { SMTPClient } from 'emailjs';
import { type NextRequest, NextResponse } from 'next/server';
import z from 'zod';

const contactSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	phone: z.string().optional(),
	message: z.string().optional(),
});

export async function POST(request: NextRequest) {
	let body: unknown;

	try {
		body = await request.json();
	} catch {
		return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
	}

	const parsed = contactSchema.safeParse(body);

	if (!parsed.success) {
		return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
	}

	const { name, email, phone, message } = parsed.data;

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
