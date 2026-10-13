// Fetches a subset of Plus Jakarta Sans (regular + extrabold) to inject into
// ImageResponse so OG renders use the brand typeface instead of the sans-serif
// fallback. Only the glyphs needed for titles get downloaded (text= param).
//
// The font files live on fonts.gstatic.com and are cached by the ImageResponse
// pipeline across builds, so this costs a few hundred KB on cold builds only.

const subsetText =
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 .,;:!?()[]{}@#&_+-/*="\'`<>áàâãäéèêëíìîïóòôõöúùûüçñÁÀÂÃÄÉÈÊËÍÌÎÏÓÒÔÕÖÚÙÛÜÇÑ$€%—–…·';

async function loadFont(url: string): Promise<ArrayBuffer> {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to load OG font: ${url}`);
	}
	return response.arrayBuffer();
}

async function extractFontUrl(cssUrl: string): Promise<string> {
	const css = await fetch(cssUrl, {
		headers: {
			// Pin a modern UA so Google Fonts returns woff2.
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		},
	}).then((r) => r.text());
	const match = css.match(/url\((https:[^)]+)\)/);
	if (!match) throw new Error(`No font URL in CSS: ${cssUrl}`);
	return match[1];
}

async function loadJakarta(
	weight: 400 | 800,
): Promise<{ name: string; data: ArrayBuffer; weight: 400 | 800 }> {
	const cssUrl = `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@${weight}&text=${encodeURIComponent(subsetText)}&display=swap`;
	const fontUrl = await extractFontUrl(cssUrl);
	const data = await loadFont(fontUrl);
	return { name: 'Plus Jakarta Sans', data, weight };
}

export async function ogFonts() {
	const [regular, extrabold] = await Promise.all([
		loadJakarta(400),
		loadJakarta(800),
	]);
	return [regular, extrabold];
}
