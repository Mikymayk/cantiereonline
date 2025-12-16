import { MetadataRoute } from 'next';
// Importiamo i dati per generare i link dinamici
import { softwareData } from '../data/software';

// Definiamo l'URL base del tuo sito
const URL = 'https://www.cantiereonline.it';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Mappiamo tutti i software dal database
  const softwareUrls = softwareData.map((product) => ({
    url: `${URL}/software/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 2. Restituiamo la lista completa (Home + Software + Privacy)
  return [
    {
      url: URL, // Home Page
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${URL}/privacy`, // Privacy Policy
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...softwareUrls, // Aggiunge tutti i software dinamici
  ];
}