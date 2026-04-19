'use client';

import FormAnimation from '@/app/_lottie/form-animation.json';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import Lottie from 'lottie-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import z from 'zod';

interface FormSchemaMessages {
	nameRequired: string;
	emailRequired: string;
	emailInvalid: string;
	phoneRequired: string;
}

const createFormSchema = (messages: FormSchemaMessages) =>
	z.object({
		name: z.string({ message: messages.nameRequired }),
		email: z
			.string({ message: messages.emailRequired })
			.email({ message: messages.emailInvalid }),
		phone: z.string({ message: messages.phoneRequired }),
		message: z.string().optional(),
	});

type FormDataContactUs = z.infer<ReturnType<typeof createFormSchema>>;

export const FormContact = () => {
	const t = useTranslations('contact');

	const FormSchemaContactUs = createFormSchema({
		nameRequired: t('validation.nameRequired'),
		emailRequired: t('validation.emailRequired'),
		emailInvalid: t('validation.emailInvalid'),
		phoneRequired: t('validation.phoneRequired'),
	});

	const form = useForm<FormDataContactUs>({
		resolver: zodResolver(FormSchemaContactUs),
	});

	const handleSendContact = async (data: FormDataContactUs) => {
		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			if (!response.ok) throw new Error('send failed');

			form.reset({ name: '', email: '', phone: '', message: '' });

			toast({
				title: t('toast.successTitle'),
				description: t('toast.successDescription'),
			});
		} catch (error) {
			toast({
				title: t('toast.errorTitle'),
				description: t('toast.errorDescription'),
			});
			console.error(error);
		}
	};

	return (
		<div className="relative flex w-full items-center gap-4">
			<Lottie
				animationData={FormAnimation}
				loop
				className="base:absolute base:z-0 base:opacity-40 base:blur-sm md:static md:opacity-100 md:blur-none"
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
								<FormLabel>{t('form.name')}</FormLabel>
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
								<FormLabel>{t('form.email')}</FormLabel>
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
								<FormLabel>{t('form.phone')}</FormLabel>
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
								<FormLabel>{t('form.message')}</FormLabel>
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
						{form.formState.isSubmitting
							? t('form.submitting')
							: t('form.submit')}
					</Button>
				</form>
			</Form>
		</div>
	);
};
