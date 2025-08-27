import React, { useEffect, useState } from "react";
import logo from "../assets/digeto-main.png";
import { Menu, X } from "lucide-react"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)	

  // Close mobile menu if screen is resized to more than 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div className="flex border-b bg-white border-gray-200">
        <nav className="w-full">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img onClick={() => window.location.href="/"} src={logo} alt="Digeto Logo" className="h-8 w-auto cursor-pointer" />
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex space-x-8 text-sm font-medium text-gray-700">
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
                className="hidden lg:block px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 rounded-lg transition-colors"
              >
                Book a meeting
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <>
          <button
            className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#266e71]"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-gray-900" />
          </button>

          {isOpen && (
            <div className={"fixed inset-0 z-50 bg-[rgba(0,0,0,0.3)] flex "} >
              <div
                className={"w-70 bg-white h-full shadow-lg px-6 py-2 flex flex-col transform transition-transform duration-300 "}
                style={{ animation: isOpen ? "openSidebar 0.3s ease-in-out" : 'closeSidebar 0.3s ease-in-out' }}
              >
                <div className="flex justify-between items-center mb-6">
                  <img
                  src={logo}
                  className="h-8 w-auto"
                  width={32}
                  height={32}
                  />
                  <button
                    className="self-end p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6 text-gray-900" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col items-center space-y-6 mt-16 text-xl font-medium text-gray-900">
                  <a href="/#about" className="hover:text-black transition-colors" onClick={() => setIsOpen(false)}>
                    About us
                  </a>
                  <a href="/#talent" className="hover:text-black transition-colors" onClick={() => setIsOpen(false)}>
                    For talent
                  </a>
                  <a href="/#startups" className="hover:text-black transition-colors" onClick={() => setIsOpen(false)}>
                    For startups
                  </a>
                  <a href="/#partners" className="hover:text-black transition-colors" onClick={() => setIsOpen(false)}>
                    For partners
                  </a>
                </div>

                {/* CTA */}
                <a
                  onClick={() => window.open("https://calendly.com/deepak-digeto")}
                  className="mx-auto mt-10 px-4 py-2 text-xl font-medium text-gray-600 hover:text-gray-900 bg-gray-100 rounded-lg transition-colors"
                >
                  Book a meeting
                </a>
              </div>
              <div className="flex-1" onClick={() => setIsOpen(false)} />
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default Navbar;