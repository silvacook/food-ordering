import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t mt-16 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo and slogan section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo-libe.png" 
                alt="ST PIZZA Logo" 
                width={120} 
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Discover your signature scent affordably. Our 1ml glass spray vials deliver authentic, high-quality 
              perfumes—perfect for trying before committing to full bottles. Experience luxury fragrances one spritz at a time.
            </p>
            {/* Social icons */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/olfia_usa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition p-2 bg-gray-50 rounded-full"
              >
              <Image
                src="/instagram.svg"  // Path to your custom SVG in the public folder
                alt="Instagram"
                width={24}  // Adjust the width to your needs
                height={24}  // Adjust the height to your needs
            />
              </a>
            </div>
          </div>

          {/* Navigation sections */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/news"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                      Latest News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    How Does it Work?
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Olifia&#39;s USA fragrances. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
