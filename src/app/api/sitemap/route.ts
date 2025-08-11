
import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_HOST_URL || 'https://natureofthedivine.com';
  
  const pages = [
    {
      url: `${siteUrl}/`,
      lastmod: new Date().toISOString().split('T')[0], // Current date (2025-08-11)
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: `${siteUrl}/about`,
      lastmod: '2025-06-01',
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: `${siteUrl}/buy`,
      lastmod: '2025-06-01',
      changefreq: 'monthly',
      priority: '0.9',
    },
    {
      url: `${siteUrl}/contact`,
      lastmod: '2025-06-01',
      changefreq: 'monthly',
      priority: '0.7',
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
