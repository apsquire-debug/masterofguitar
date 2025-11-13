export const metadata = {
  title: 'About - Master My Guitar',
  description: 'Learn about our guitar teaching philosophy and approach',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            About Anthony Squire
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 mb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Welcome! I'm Anthony Squire, and I've been teaching guitar for over 15 years.
              My passion is helping students of all levels discover the joy of making music.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">My Teaching Philosophy</h2>
          <p className="text-gray-700 mb-4">
            I believe that learning guitar should be fun, accessible, and tailored to each student's goals.
            Whether you want to strum your favorite songs around a campfire or master complex solos,
            I'll help you get there at your own pace.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">My Journey</h2>
          <p className="text-gray-700 mb-4">
            I picked up my first guitar at age 12 and haven't put it down since. Over the years,
            I've studied various styles including rock, blues, jazz, and classical guitar. I've performed
            in numerous bands and ensembles, and have been fortunate enough to turn my passion into
            a career helping others learn.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What You'll Learn</h2>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>✓ Proper technique and posture</li>
            <li>✓ Music theory fundamentals</li>
            <li>✓ Chord progressions and rhythm</li>
            <li>✓ Lead guitar and soloing</li>
            <li>✓ Song arrangement and improvisation</li>
            <li>✓ Practice strategies that actually work</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ready to Start?</h2>
          <p className="text-gray-700 mb-4">
            Browse through my free lessons to get started, or get in touch to discuss
            personalized instruction that fits your goals and schedule.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="/lessons"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              View Lessons
            </a>
            <a
              href="/contact"
              className="rounded-md border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
