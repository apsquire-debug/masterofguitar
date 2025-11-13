import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Master My Guitar
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Master the guitar at your own pace with comprehensive lessons, expert techniques,
              and personalized guidance. Whether you're a complete beginner or looking to refine your skills,
              you're in the right place.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/lessons"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                Start Learning
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                About Me <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
                📚
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Comprehensive Lessons</h3>
              <p className="mt-2 text-sm text-gray-600">
                From basic chords to advanced techniques, learn everything you need to become a skilled guitarist.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
                🎥
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Video Tutorials</h3>
              <p className="mt-2 text-sm text-gray-600">
                Watch detailed video demonstrations to see exactly how techniques should be performed.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
                🎯
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Practice Tools</h3>
              <p className="mt-2 text-sm text-gray-600">
                Interactive chord diagrams and practice exercises to help you improve faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Guitar Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Join thousands of students learning guitar the right way. Get access to lessons, tutorials, and tools.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </Link>
              <Link
                href="/lessons"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                View All Lessons <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
