import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact - Master My Guitar',
  description: 'Get in touch for guitar lessons and inquiries',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have questions about guitar lessons or want to book a session? I'd love to hear from you!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <ContactForm />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
              📧
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Email</h3>
            <p className="mt-2 text-sm text-gray-600">contact@anthonysquire.com</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
              ⏰
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Response Time</h3>
            <p className="mt-2 text-sm text-gray-600">Usually within 24 hours</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
              🎸
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Lesson Formats</h3>
            <p className="mt-2 text-sm text-gray-600">Online & In-Person</p>
          </div>
        </div>
      </div>
    </main>
  );
}
