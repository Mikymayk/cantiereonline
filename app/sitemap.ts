import { MetadataRoute } from 'next';
import { softwareData } from '@/data/software';
import { getSortedPostsData } from '@/lib/posts'; // <--- 1. Importiamo la funzione dei post

// Definiamo l'URL base del tuo sito
const URL = 'https://www.cantiereonline.it';

export default function sitemap(): MetadataRoute.Sitemap {
  
  // A. Generiamo gli URL per i SOFTWARE
  const softwareUrls = softwareData.map((product) => ({
    url: `${URL}/software/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // B. Generiamo gli URL per gli ARTICOLI DEL BLOG
  const allPosts = getSortedPostsData();
  const blogUrls = allPosts.map((post) => ({
    url: `${URL}/blog/${post.id}`,
    lastModified: new Date(post.date), // Usa la data scritta nel file .md
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // C. Restituiamo la lista completa unendo tutto
  return [
    {
      url: URL, // Home Page
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${URL}/blog`, // Pagina Indice del Blog
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${URL}/privacy`, // Privacy Policy
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...softwareUrls, // Lista Software
    ...blogUrls,     // Lista Articoli Blog (AUTOMATICO)
  ];
}