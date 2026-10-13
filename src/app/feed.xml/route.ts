import { buildFeedXml, rssHeaders } from '@/lib/rss';

export const dynamic = 'force-static';

export function GET() {
	return new Response(buildFeedXml('pt-BR'), { headers: rssHeaders });
}
