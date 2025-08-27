import React from "react";
import logo from "../assets/digeto-logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img onClick={() => window.location.href="/"} src={logo} alt="Digeto Logo" className="h-8 w-auto cursor-pointer" />
        </div>

        {/* Nav Links */}
        <div className="flex space-x-8 text-sm font-medium text-gray-700">
          <a href="/#about" className="hover:text-black transition-colors">
            About us
          </a>
          <a href="/#talent" className="hover:text-black transition-colors">
            For talent
          </a>
          <a href="/#startups" className="hover:text-black transition-colors">
            For startups
          </a>
          <a href="/#partners" className="hover:text-black transition-colors">
            For partners
          </a>
        </div>

        {/* CTA */}
        <div>
          <a
            onClick={() => window.open("https://calendly.com/deepak-digeto")}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg transition-colors"
          >
            Book a meeting
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;