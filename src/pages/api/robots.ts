import { NextApiRequest, NextApiResponse } from 'next';

const getRobotsTxt = (sitemapURL: string) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL}
`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemapURL = '/sitemap.xml';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.status(200).send(getRobotsTxt(sitemapURL));
}
