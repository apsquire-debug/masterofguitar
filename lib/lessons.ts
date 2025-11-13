import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const lessonsDirectory = path.join(process.cwd(), 'content/lessons');

export interface LessonMetadata {
  id: string;
  title: string;
  date: string;
  description: string;
  videoId?: string;
}

export interface Lesson extends LessonMetadata {
  contentHtml: string;
}

export function getAllLessons(): LessonMetadata[] {
  const fileNames = fs.readdirSync(lessonsDirectory);
  const allLessons = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(lessonsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      videoId: matterResult.data.videoId,
    };
  });

  return allLessons.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getLesson(id: string): Promise<Lesson> {
  const fullPath = path.join(lessonsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    videoId: matterResult.data.videoId,
  };
}
