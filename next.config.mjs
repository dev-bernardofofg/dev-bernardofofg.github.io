import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict Mode causa dupla montagem em dev, o que quebra animações Framer Motion com once: true
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
