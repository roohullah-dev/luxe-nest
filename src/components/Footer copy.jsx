import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
      <div className="max-w-[90%] mx-auto grid lg:grid-cols-4 gap-12">
        {/* Logo + Description */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-serif font-bold text-white">
            LV<span className="font-light">Estates</span>
          </h2>
          <p className="text-gray-400">
            Providing premium real estate solutions for your dream home. Explore
            luxury apartments, villas, and commercial properties with ease.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition-colors"
                >
                  <Icon className="text-white" />
                </a>
              ),
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="#hero" className="hover:text-red-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#popular-areas"
                className="hover:text-red-600 transition-colors"
              >
                Areas
              </a>
            </li>
            <li>
              <a
                href="#clients"
                className="hover:text-red-600 transition-colors"
              >
                Clients
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-red-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4">Contact</h3>
          <p className="flex items-center gap-2 mb-2">
            <span className="text-red-600">🏠</span> 123 Luxury Avenue, Estate
            City
          </p>
          <p className="flex items-center gap-2 mb-2">
            <span className="text-red-600">📞</span> +123 456 7890
          </p>
          <p className="flex items-center gap-2">
            <span className="text-red-600">✉️</span> contact@luxenest.com
          </p>
        </div>

        {/* Newsletter / Form */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to receive the latest property listings and updates.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} LVEstates. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
