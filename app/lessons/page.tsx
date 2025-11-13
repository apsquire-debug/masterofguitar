import Link from 'next/link';
import { getAllLessons } from '@/lib/lessons';

export default function LessonsPage() {
  const lessons = getAllLessons();

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Guitar Lessons
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Start with the basics and work your way up to advanced techniques
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.id}`}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  {lesson.title}
                </h2>
                {lesson.videoId && (
                  <span className="text-2xl">🎥</span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {lesson.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">{lesson.date}</span>
                <span className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
