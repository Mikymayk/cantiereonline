import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Ottiene i nomi dei file in /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Rimuove ".md" dal nome per creare l'id (slug)
    const id = fileName.replace(/\.md$/, '');

    // Legge il file markdown come stringa
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usa gray-matter per analizzare i metadati
    const matterResult = matter(fileContents);

    // Combina i dati con l'id
    return {
      id,
      ...(matterResult.data as { date: string; title: string; excerpt: string; coverImage: string; author: string }),
    };
  });

  // Ordina i post per data
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Usa gray-matter per analizzare i metadati
  const matterResult = matter(fileContents);

  // Usa remark per convertire il markdown in HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; excerpt: string; coverImage: string; author: string }),
  };
}