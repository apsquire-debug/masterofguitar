export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Anthony Squire Guitar</h3>
            <p className="mt-4 text-sm text-gray-600">
              Learn guitar at your own pace with comprehensive lessons, techniques, and practice tips.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/lessons" className="text-sm text-gray-600 hover:text-blue-600">
                  Lessons
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-gray-600 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-600 hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Connect
            </h3>
            <p className="mt-4 text-sm text-gray-600">
              Follow along for guitar tips, lessons, and updates.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Anthony Squire Guitar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
