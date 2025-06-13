import { NextApiRequest, NextApiResponse } from 'next';

function convertHost(host: string) {
  const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1');
  return isLocalhost ? `http://${host}` : `https://${host}`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const host = convertHost(req.headers.host || '');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${host}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${host}/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}
