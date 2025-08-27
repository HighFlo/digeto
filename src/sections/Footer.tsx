import React from "react";
import logo from "../assets/digeto-main.png";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <img src={logo} alt="Digeto logo" className="h-8 w-auto" />
            <p className="mt-4 text-gray-600">
              A Global Impact Services Company
            </p>
            <p className="mt-1 text-gray-700">Paris, France</p>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Get in Touch</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:contact@digeto.com"
                  className="text-gray-700 underline-offset-4 hover:underline"
                >
                  contact@digeto.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.digeto.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 underline-offset-4 hover:underline"
                >
                  www.digeto.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Connect With Us
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <a
                onClick={() => window.open("https://www.linkedin.com/company/digeto/")}
                aria-label="Digeto on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                {/* LinkedIn Icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current text-gray-900"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 1 1-.001 5.001A2.5 2.5 0 0 1 4.98 3.5zM3 9h4v12H3zM14.5 9c-2.3 0-3.5 1.26-3.5 2.7V21h4v-6.2c0-1.02.72-1.8 1.8-1.8 1.02 0 1.7.66 1.7 1.74V21h4v-6.86C22.5 10.74 20.94 9 18.5 9c-1.44 0-2.52.6-3.12 1.44H15.3V9h-.8z" />
                </svg>
              </a>
              <a
                onClick={() => window.open("https://x.com/digeto_com")}
                aria-label="Digeto on X (Twitter)"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                {/* X Icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current text-gray-900"
                  aria-hidden="true"
                >
                  <path d="M18.244 2H21l-6.49 7.41L22 22h-6.844l-5.35-6.846L3.756 22H1l6.94-7.93L2 2h6.844l4.94 6.33L18.244 2zm-1.198 18h1.86L8.11 4h-1.87l10.805 16z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-700 md:flex-row">
          <p>Copyright © {year} Digeto. All rights reserved.</p>

          <nav className="flex items-center gap-6">
            <a href="/terms-of-service" className="hover:underline underline-offset-4">
              Terms of Service
            </a>
            <a href="/privacy-policy" className="hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="/cookies-policy" className="hover:underline underline-offset-4">
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;