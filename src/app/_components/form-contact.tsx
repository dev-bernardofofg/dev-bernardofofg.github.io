'use client';

import Lottie from 'lottie-react';
import FormAnimation from '@/app/_lottie/form-animation.json';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import emailjs from 'emailjs-com';
import { toast } from '@/hooks/use-toast';

const FormSchemaContactUs = z.object({
	name: z.string({ message: 'Nome é obrigatório' }),
	email: z
		.string({ message: 'Email é obrigatório' })
		.email({ message: 'Verifique o formato do email.' }),
	phone: z.string({ message: 'Telefone é obrigatório' }),
	message: z.string().optional(),
});

type FormDataContactUs = z.infer<typeof FormSchemaContactUs>;

export const FormContact = () => {
	const form = useForm<FormDataContactUs>({
		resolver: zodResolver(FormSchemaContactUs),
	});

	const handleSendContact = async (data: FormDataContactUs) => {
		try {
			const serviceId = process.env.NEXT_PUBLIC_MAIL_SERVICE!;
			const templateId = process.env.NEXT_PUBLIC_MAIL_TEMPLATE!;
			const userId = process.env.NEXT_PUBLIC_MAIL_USERID!;

			await emailjs.send(serviceId, templateId, data, userId);
			form.reset({
				name: '',
				email: '',
				phone: '',
				message: '',
			});

			toast({
				title: 'Pedido de contato enviado com sucesso!',
				description: 'Entraremos em contato com você o mais rápido possível!',
			});
		} catch (error) {
			toast({
				title: 'Ops... houve um problema',
				description: 'Estaremos corrigindo o mais rápido possível',
			});
			console.log(error);
		}
	};
	return (
		<div className="relative flex w-full items-center gap-4">
			<Lottie
				animationData={FormAnimation}
				loop
				className="base:-z-0 base:absolute base:opacity-40 base:blur-sm md:static md:opacity-100 md:blur-none"
			/>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSendContact)}
					className="relative z-10 w-full flex-1 space-y-2"
				>
					<FormField
						name="name"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nome completo</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="email"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="phone"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Telefone</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="message"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Descreva o motivo do contato</FormLabel>
								<FormControl>
									<Textarea {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						className="h-10 w-full"
						disabled={form.formState.isSubmitting}
					>
						{form.formState.isSubmitting ? 'Enviando...' : 'Enviar'}
					</Button>
				</form>
			</Form>
		</div>
	);
};
