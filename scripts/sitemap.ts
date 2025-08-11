import fs from 'fs';
import path from 'path';
import hisnulMuslimData from '../src/data/hisnulMuslimData';
import { citiesData } from '../src/data/cities';
import { personalityData } from '../src/pages/PersonalityDetail';
import { storyData } from '../src/pages/StoryDetail';

// Since the countries data is in a .tsx file and not exported,
// we read it as text and extract the IDs. This is a simplified approach.
const countriesFilePath = path.resolve(__dirname, '../src/pages/Countries.tsx');
const countriesFileContent = fs.readFileSync(countriesFilePath, 'utf8');
const countryIds = (countriesFileContent.match(/id: '([^']+)'/g) || []).map(id => id.replace(/id: '|'/g, ''));

// We need a fetch client to get surah data from the API.
// We will install one in the next step.

async function generateSitemap() {
  const baseUrl = 'https://faith-time.me';

  console.log('Fetching Surah data...');
  // Placeholder for API call
  const surahs = await fetch('https://api.alquran.cloud/v1/surah')
    .then(res => res.json())
    .then(data => data.data || []);
  console.log(`Fetched ${surahs.length} surahs.`);

  const staticRoutes = [
    '/',
    '/date-converter',
    '/age-calculator',
    '/adhkar',
    '/prayer-times',
    '/friday-duas',
    '/islamic-quiz',
    '/quran',
    '/countries',
    '/about',
    '/contact',
    '/privacy-policy',
    '/countries-prayer-times',
    '/asmaul-husna',
    '/hisnul-muslim',
  ];

  const hisnulMuslimUrls = Object.keys(hisnulMuslimData).map(title => `${baseUrl}/hisnul-muslim/${encodeURIComponent(title)}`);
  const countryUrls = countryIds.map(id => `${baseUrl}/country/${id}`);
  const surahUrls = surahs.map((surah: any) => `${baseUrl}/surah/${surah.number}`);
  const prayerTimeUrls = citiesData.map(cityInfo => `${baseUrl}/prayer-times/${encodeURIComponent(cityInfo.country)}/${encodeURIComponent(cityInfo.city)}`);
  const personalityUrls = Object.entries(personalityData).flatMap(([countryId, personalities]) =>
    Object.keys(personalities).map(personalityIndex =>
      `${baseUrl}/personality/${countryId}/${personalityIndex}`
    )
  );
  const storyUrls = Object.entries(storyData).flatMap(([countryId, stories]) =>
    Object.keys(stories).map(storyIndex =>
      `${baseUrl}/story/${countryId}/${storyIndex}`
    )
  );

  const allUrls = [
    ...staticRoutes.map(route => `${baseUrl}${route}`),
    ...hisnulMuslimUrls,
    ...countryUrls,
    ...surahUrls,
    ...prayerTimeUrls,
    ...personalityUrls,
    ...storyUrls,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(url => `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`;

  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');

  console.log(`Sitemap generated successfully at ${sitemapPath}`);
}

generateSitemap().catch(console.error);
