import Footer from "../../sections/Footer"
import Navbar from "../../sections/Navbar"

const Cookies = () => {
  return (
    <>
      <Navbar />

      {/* CONTENT */}
      <section className="py-20 max-w-6xl mx-auto px-4">

        {/* HERO */}
        <div className="px-4 text-center mb-20">
          <div className="mb-4 inline-block rounded-full border border-primary-blue/20 bg-primary-blue/5 px-5 py-2">
            <span className="text-sm font-medium text-primary-blue">Last Updated August 27, 2025</span>
          </div>
          <h2 className="mb-6 text-4xl font-semibold text-gray-900 md:text-5xl">
            Cookies Policy
          </h2>
          <p className="text-gray-600"><span className="font-semibold">DIGETO – Private Limited</span>, RCS Paris No. 829 724 764</p>
          <p className="text-gray-600"><span className="font-semibold">Head Office</span>: 8 bis Rue Abel, 75012 Paris, France</p>
          <p className="text-gray-600 "><span className="font-semibold">Email</span>: <a className="text-primary-blue" onClick={() => window.open("mailto:contact@digeto.com")}>contact@digeto.com</a></p>
        </div>

        {/* 1. INTRODUCTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
          <p className="text-gray-600 mb-4">This Cookie Policy explains how DIGETO – Private Limited (“DIGETO,” “we,” “our,” or “us”) uses cookies and similar technologies when you visit our websites, platforms, or use our services (the “Services”).</p>
          <p className="text-gray-600">We are committed to complying with the General Data Protection Regulation (GDPR) and the requirements of the French Data Protection Authority (CNIL) regarding the use of cookies and tracking technologies.</p>
        </div>

        {/* 2. WHAT ARE COOKIES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. What Are Cookies?</h2>
          <p className="text-gray-600 mb-4">Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit a website. They allow websites to recognize your device, remember your preferences, and improve your browsing experience.</p>

          <p className="text-gray-900 font-semibold">Cookies can be:</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• <span className="font-semibold">Session cookies</span> – deleted when you close your browser.</li>
            <li>• <span className="font-semibold">Persistent cookies</span> – remain until deleted or expired.</li>
            <li>• <span className="font-semibold">First-party cookies</span> – placed by DIGETO.</li>
            <li>• <span className="font-semibold">Third-party cookies</span> – placed by service providers (e.g., analytics, advertising).</li>
          </ul>
        </div>

        {/* 3. TYPES OF COOKIES WE USE */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Types of Cookies We Use</h2>
          <p className="text-gray-600 mb-4">Cookies are small text files stored on your device (computer, smartphone, tablet) when you visit a website. They allow websites to recognize your device, remember your preferences, and improve your browsing experience.</p>

          {/* A) */}
          <p className="text-gray-900 font-semibold">a) Strictly Necessary Cookies</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• Required for the proper functioning of our website and security.</li>
            <li>• Cannot be disabled.</li>
          </ul>

          {/* B) */}
          <p className="text-gray-900 font-semibold">b) Performance & Analytics Cookies</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• Help us understand website usage and improve performance.</li>
            <li>• Examples: Google Analytics, internal tracking tools.</li>
          </ul>

          {/* C) */}
          <p className="text-gray-900 font-semibold">c) Functional Cookies</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• Remember user preferences (e.g., language, region, login details).</li>
          </ul>

          {/* D) */}
          <p className="text-gray-900 font-semibold">d) Advertising & Targeting Cookies</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• Used to deliver relevant ads and measure effectiveness.</li>
            <li>• May be set by third-party advertising networks.</li>
          </ul>
        </div>

        {/* 4. LEGAL BASIS FOR COOKIES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Legal Basis for Cookies</h2>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• <span className="font-semibold">Strictly necessary cookies</span> – do not require consent.</li>
            <li>• <span className="font-semibold">Analytics, functional, and advertising cookies</span> – require your prior consent.</li>
          </ul>
          <p className="text-gray-600">You can withdraw or change your consent at any time.</p>          
        </div>

        {/* 5. MANAGING COOKIES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Managing Cookies</h2>
          <p className="text-gray-600 mb-4">When you visit our website, a cookie banner will ask for your consent (except for strictly necessary cookies).</p>

          <p className="text-gray-600">You may manage or disable cookies through:</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• Our cookie consent tool (available on the website).</li>
            <li>• Browser settings (e.g., block, delete, or notify before accepting cookies).</li>
          </ul>

          <p className="text-gray-600">For more information:</p>
          <ul className="text-gray-600 ml-6">
            <li>• <a className="text-primary-blue" onClick={() => window.open("https://www.cnil.fr/en/cookies-and-other-tracking-devices")}>CNIL Guide on Cookies</a></li>
            <li>• <a className="text-primary-blue" onClick={() => window.open("https://www.aboutcookies.org/")}>AboutCookies.org</a></li>
          </ul>
        </div>

        {/* 6. THIRD-PARTY COOKIES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Third-Party Cookies</h2>
          <p className="text-gray-600 mb-4">Some cookies are placed by third-party providers, such as:</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• <span className="font-semibold">Analytics services</span> (e.g., Google Analytics).</li>
            <li>• <span className="font-semibold">Advertising partners</span>.</li>
            <li>• <span className="font-semibold">Social media plugins</span>.</li>
          </ul>
          <p className="text-gray-600">We encourage you to review their privacy and cookie policies directly.</p>          
        </div>

        {/* 7. DATA RETENTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• <span className="font-semibold">Session cookies</span> are deleted when you close your browser.</li>
            <li>• <span className="font-semibold">Persistent cookies</span> are retained for a maximum of 13 months, as required by CNIL guidelines.</li>
          </ul>       
        </div>

        {/* 8. CHANGES TO THIS COOKIE POLICY */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Changes to This Cookie Policy</h2>
          <p className="text-gray-600 mb-4">We may update this Cookie Policy from time to time to reflect changes in technology, regulations, or our practices. Updates will be posted with a revised “Last Updated” date.</p>  
        </div>

        {/* 9. CONTACT */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Contact</h2>
          <p className="text-gray-600 mb-4">If you have any questions about these Terms, please contact us at:</p>
          <p className="text-gray-600 font-semibold">DIGETO – Private Limited</p>
          <p className="text-gray-600">8 bis Rue Abel, 75012 Paris, France</p>
          <p className="text-gray-600 ">Email: <a className="text-primary-blue" onClick={() => window.open("mailto:contact@digeto.com")}>contact@digeto.com</a></p>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default Cookies