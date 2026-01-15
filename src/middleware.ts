import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Apenas passa a requisição adiante
  // A detecção de idioma é feita no request.ts via cookie/header
  return NextResponse.next();
}

export const config = {
  // Matcher para todas as rotas exceto arquivos estáticos
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
