import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 sm:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/guitar-hero.jpg)' }}
        ></div>

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-indigo-900/85"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 ring-1 ring-inset ring-blue-500/20">
                🎸 Your Guitar Journey Starts Here
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
              Master My
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Guitar
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-xl sm:text-2xl leading-relaxed text-blue-100 font-light">
              Master the guitar at your own pace with comprehensive lessons, expert techniques,
              and personalized guidance.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/lessons"
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-200"
              >
                Start Learning Now
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative blur elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>
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
