import { getLesson, getAllLessons } from '@/lib/lessons';
import VideoEmbed from '@/components/VideoEmbed';
import Link from 'next/link';

export async function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((lesson) => ({
    id: lesson.id,
  }));
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lesson = await getLesson(id);

  return (
    <main className="min-h-screen bg-white py-12">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/lessons"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 mb-8"
        >
          ← Back to all lessons
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {lesson.title}
          </h1>
          <p className="mt-2 text-lg text-gray-600">{lesson.description}</p>
          <time className="mt-2 block text-sm text-gray-500">{lesson.date}</time>
        </header>

        {lesson.videoId && (
          <VideoEmbed videoId={lesson.videoId} title={lesson.title} />
        )}

        <div
          className="prose prose-lg prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: lesson.contentHtml }}
        />

        <footer className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/lessons"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            ← Back to all lessons
          </Link>
        </footer>
      </article>
    </main>
  );
}
