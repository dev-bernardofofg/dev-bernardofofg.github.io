import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
	// Tudo exceto api, assets do Next e arquivos estáticos (contêm ponto)
	matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
