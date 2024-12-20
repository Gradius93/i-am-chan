import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              YourLogo
            </Link>
            <p className="mt-4 text-sm">
              Empowering your digital journey with innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Contact", "Store"].map((item) =>
                item === "Store" ? (
                  <li key={item} id={item}>
                    <Link
                      href="https://store.mywebsite.com"
                      target="_blank"
                      className="hover:text-gray-800 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ) : (
                  <li key={item} id={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="hover:text-gray-800 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>123 Main St, Anytown, USA 12345</p>
              <p className="mt-2">
                <a
                  href="mailto:info@yourcompany.com"
                  className="hover:text-gray-800 transition-colors"
                >
                  info@yourcompany.com
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="tel:+11234567890"
                  className="hover:text-gray-800 transition-colors"
                >
                  (123) 456-7890
                </a>
              </p>
            </address>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                  aria-label={`Follow us on ${social.icon.name}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
