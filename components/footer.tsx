import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-400">AI Doctor</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Bringing healthcare guidance to underserved areas through AI technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/consultation"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  Start Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  Community Health
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Disclaimer</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              AI Doctor is not a replacement for professional medical advice, diagnosis, or treatment. Always seek the
              advice of qualified health providers.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for better healthcare access
          </p>
          <p className="mt-2">© {new Date().getFullYear()} AI Doctor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
