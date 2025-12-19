import { MetadataRoute } from 'next';
import { softwareData } from '@/data/software';
import { softwareDE } from '@/data/software_de';
import { softwareCH } from '@/data/software_ch';
import { softwareSE } from '@/data/software_se';
import { softwareNO } from '@/data/software_no';
import { getSortedPostsData } from '@/lib/posts';

const URL = 'https://www.cantiereonline.it';

export default function sitemap(): MetadataRoute.Sitemap {
  
  // 1. URLs per i Software (ITALIA)
  const softwareUrlsIT = softwareData.map((product) => ({
    url: `${URL}/software/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 2. URLs per i Software (GERMANIA)
  const softwareUrlsDE = softwareDE.map((product) => ({
    url: `${URL}/de/software/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 3. URLs per i Software (SVIZZERA)
  const softwareUrlsCH = softwareCH.map((product) => ({
    url: `${URL}/ch/software/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 4. URLs per i Software (SVEZIA)
  const softwareUrlsSE = softwareSE.map((product) => ({
    url: `${URL}/se/software/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 5. URLs per i Software (NORVEGIA)
  const softwareUrlsNO = softwareNO.map((product) => ({
    url: `${URL}/no/software/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 6. URLs per i Post del Blog
  const allPosts = getSortedPostsData();
  const blogUrls = allPosts.map((post) => ({
    url: `${URL}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 7. Lingue supportate e pagine statiche
  const languages = ['de', 'ch', 'se', 'no'];

  const localizedStaticPages = languages.flatMap(lang => [
    {
      url: `${URL}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${URL}/${lang}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ]);

  return [
    {
      url: URL, // Home Page IT
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${URL}/blog`, // Blog Index
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${URL}/privacy`, // Privacy IT
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...localizedStaticPages, // Home e Privacy per altre lingue
    ...softwareUrlsIT,
    ...softwareUrlsDE,
    ...softwareUrlsCH,
    ...softwareUrlsSE,
    ...softwareUrlsNO,
    ...blogUrls,
  ];
}
