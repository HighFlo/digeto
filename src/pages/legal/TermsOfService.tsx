import Footer from "../../sections/Footer"
import Navbar from "../../sections/Navbar"

const TermsOfService = () => {
  return (
    <>
      <Navbar />

      {/* CONTENT */}
      <section className="py-20 max-w-6xl mx-auto">

        {/* HERO */}
        <div className="px-4 text-center mb-20">
          <div className="mb-4 inline-block rounded-full border border-primary-blue/20 bg-primary-blue/5 px-5 py-2">
            <span className="text-sm font-medium text-primary-blue">Last Updated August 27, 2025</span>
          </div>
          <h2 className="mb-6 text-4xl font-semibold text-gray-900 md:text-5xl">
            Terms of Service
          </h2>
          <p className="text-gray-600"><span className="font-semibold">DIGETO – Private Limited</span>, RCS Paris No. 829 724 764</p>
          <p className="text-gray-600"><span className="font-semibold">Head Office</span>: 8 bis Rue Abel, 75012 Paris, France</p>
          <p className="text-gray-600 "><span className="font-semibold">Email</span>: <a className="text-primary-blue" onClick={() => window.open("mailto:contact@digeto.com")}>contact@digeto.com</a></p>
        </div>

        {/* 1. INTRODUCTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
          <p className="text-gray-600 mb-4">Welcome to DIGETO – Private Limited (“DIGETO,” “we,” “our,” or “us”). These Terms of Service (“Terms”) govern your access to and use of our services, platforms, and solutions designed to support international business expansion (the “Services”).</p>
          <p className="text-gray-600">By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you must not use our Services.</p>
        </div>

        {/* 2. ELIGIBILITY */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Eligibility</h2>
          <p className="text-gray-600 mb-4">By using the Services, you confirm that you:</p>
          <ul className="text-gray-600 ml-6">
            <li>• Are at least 18 years old (or the age of majority in your jurisdiction).</li>
            <li>• Have the legal authority to enter into these Terms.</li>
            <li>• Will comply with all applicable laws and regulations.</li>
          </ul>
        </div>

        {/* 3. SCOPE OF SERVICES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Scope of Services</h2>
          <p className="text-gray-600 mb-4">DIGETO provides international expansion solutions, which may include:</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• Market entry consulting and advisory services.</li>
            <li>• Business setup, compliance, and registration support.</li>
            <li>• Digital tools, platforms, and resources for managing cross-border operations.</li>
          </ul>
          <p className="text-gray-600 mb-4">We may update, modify, or discontinue certain aspects of the Services at any time without prior notice.</p>
        </div>

        {/* 4. USER RESPONSIBILITIES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Responsibilities</h2>
          <p className="text-gray-600 mb-4">You agree to:</p>
          <ul className="text-gray-600 ml-6">
            <li>• Provide accurate, complete, and updated information when required.</li>
            <li>• Maintain the confidentiality of any account credentials.</li>
            <li>• Use the Services only for lawful business purposes.</li>
            <li>• Not engage in activities that disrupt, damage, or misuse our systems or networks.</li>
          </ul>
        </div>

        {/* 5. FEES AND PAYMENTS */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Fees and Payments</h2>
          <p className="text-gray-600">Certain Services may require payment of fees. By purchasing or subscribing, you agree to pay all applicable fees in accordance with our pricing and billing terms. All payments are non-refundable unless otherwise stated.</p>
        </div>

        {/* 6. INTELLECTUAL PROPERTY */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">All content, trademarks, designs, software, and materials provided through the Services are owned or licensed by DIGETO and protected under intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Services for business purposes only.</p>
          <p className="text-gray-600">You may not copy, distribute, modify, reverse engineer, or exploit any part of the Services without our prior written consent.</p>
        </div>

        {/* 7. DATA PROTECTION & PRIVACY */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Data Protection & Privacy</h2>
          <p className="text-gray-600">DIGETO respects your privacy. Our collection and use of personal data are governed by our Privacy Policy, which is incorporated into these Terms.</p>
        </div>

        {/* 8. THIRD-PARTY SERVICES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Third-Party Services</h2>
          <p className="text-gray-600">Our Services may integrate or provide access to third-party platforms, providers, or services. DIGETO is not responsible for the availability, accuracy, or conduct of third-party services and disclaims liability for any damages arising from their use.</p>
        </div>

        {/* 9. LIMITATION OF LIABILITY */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">To the maximum extent permitted by law:</p>
          <ul className="text-gray-600 ml-6">
            <li>• DIGETO shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, revenues, or business opportunities.</li>
            <li>• Our total liability for any claims related to the Services shall not exceed the amount paid by you to DIGETO in the preceding 12 months.</li>
          </ul>
        </div>

        {/* 10. INDEMNIFICATION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Indemnification</h2>
          <p className="text-gray-600">You agree to indemnify and hold harmless DIGETO, its directors, employees, and affiliates from any claims, liabilities, damages, or expenses arising out of your misuse of the Services or violation of these Terms.</p>
        </div>

        {/* 11. TERMINATION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Termination</h2>
          <p className="text-gray-600 mb-4">We may suspend or terminate your access to the Services at any time if you breach these Terms, misuse the Services, or as required by law.</p>
          <p className="text-gray-600">Upon termination, your right to use the Services ceases immediately, but obligations related to payment, intellectual property, indemnification, and limitation of liability shall survive.</p>
        </div>

        {/* 12. GOVERNING LAW & JURISDICTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Governing Law & Jurisdiction</h2>
          <p className="text-gray-600">These Terms are governed by and construed in accordance with the laws of France. Any disputes shall be subject to the exclusive jurisdiction of the courts of Paris, France.</p>
        </div>

        {/* 13. CHANGES TO TERMS */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Changes to Terms</h2>
          <p className="text-gray-600">We may update these Terms from time to time. Any changes will be posted on our website with the “Last Updated” date. Continued use of the Services after changes indicates your acceptance of the updated Terms.</p>
        </div>

        {/* 14. CONTACT */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Contact</h2>
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

export default TermsOfService