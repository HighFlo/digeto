import Footer from "../../sections/Footer"
import Navbar from "../../sections/Navbar"

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h2>
          <p className="text-gray-600"><span className="font-semibold">DIGETO – Private Limited</span>, RCS Paris No. 829 724 764</p>
          <p className="text-gray-600"><span className="font-semibold">Head Office</span>: 8 bis Rue Abel, 75012 Paris, France</p>
          <p className="text-gray-600 "><span className="font-semibold">Email</span>: <a className="text-primary-blue" onClick={() => window.open("mailto:contact@digeto.com")}>contact@digeto.com</a></p>
        </div>

        {/* 1. INTRODUCTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
          <p className="text-gray-600 mb-4">At DIGETO – Private Limited (“DIGETO,” “we,” “our,” or “us”), we value your privacy and are committed to protecting your personal data.</p>
          <p className="text-gray-600 mb-4">This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you interact with our services, website, and platforms (the “Services”).</p>
          <p className="text-gray-600">DIGETO complies with applicable data protection laws, including the EU General Data Protection Regulation (GDPR), the French Data Protection Act (Loi Informatique et Libertés), and other relevant international privacy regulations.</p>
        </div>

        {/* 2. INFORMATION WE COLLECT */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
          <p className="text-gray-600 mb-4">We may collect the following categories of personal data:</p>

          {/* A) */}
          <p className="text-gray-900 font-semibold">a) Information you provide directly</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• Name, email address, phone number, business details.</li>
            <li>• Billing and payment details.</li>
            <li>• Documents required for business setup or compliance.</li>
            <li>• Communications with us (e.g., support requests, emails).</li>
          </ul>

          {/* B) */}
          <p className="text-gray-900 font-semibold">b) Information collected automatically</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• IP address, browser type, device identifiers.</li>
            <li>• Log data, cookies, and analytics (see Section 8 below).</li>
          </ul>

          {/* C) */}
          <p className="text-gray-900 font-semibold">c) Information from third parties</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• Business partners or public databases, where relevant to your international expansion needs.</li>
          </ul>
        </div>

        {/* 3. HOW WE USE YOUR INFORMATION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use personal data to:</p>
          <ul className="text-gray-600 ml-6">
            <li>• Provide, operate, and improve our Services</li>
            <li>• Process payments and manage subscriptions.</li>
            <li>• Support compliance with international business regulations.</li>
            <li>• Communicate with you (updates, service notices, marketing—where permitted).</li>
            <li>• Ensure security and prevent fraud.</li>
            <li>• Comply with legal obligations.</li>
          </ul>
        </div>

        {/* 4. LEGAL BASIS FOR PROCESSING (GDPR) */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Legal Basis for Processing (GDPR)</h2>
          <p className="text-gray-600 mb-4">We process your data based on one or more of the following grounds:</p>
          <ul className="text-gray-600 ml-6">
            <li>• <span className="font-semibold">Contractual necessity</span> – to provide the Services you request.</li>
            <li>• <span className="font-semibold">Legal obligation</span> – to comply with regulatory requirements.</li>
            <li>• <span className="font-semibold">Legitimate interests</span> – to improve and secure our Services.</li>
            <li>• <span className="font-semibold">Consent</span> – where explicitly required (e.g., marketing emails).</li>
          </ul>
        </div>

        {/* 5. DATA SHARING & TRANSFERS */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Data Sharing & Transfers</h2>
          <p className="text-gray-600 mb-4">We do not sell your personal data. We may share your information with:</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• Trusted service providers (IT, hosting, payment processors).</li>
            <li>• Legal, tax, or compliance partners assisting with expansion.</li>
            <li>• Authorities where legally required.</li>
          </ul>
          <p className="text-gray-600 mb-4">If data is transferred outside the <span className="font-semibold">European Economic Area (EEA)</span>, we ensure appropriate safeguards such as <span className="font-semibold">Standard Contractual Clauses</span> or equivalent mechanisms.</p>
        </div>

        {/* 6. DATA RETENTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Data Retention</h2>
          <p className="text-gray-600 mb-4">We retain your personal data only as long as necessary:</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• For as long as you use our Services.</li>
            <li>• To comply with legal, tax, and regulatory obligations.</li>
            <li>• To resolve disputes and enforce agreements.</li>
          </ul>
          <p className="text-gray-600 mb-4">When no longer required, your data will be securely deleted or anonymized.</p>
        </div>

        {/* 7. YOUR RIGHTS */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Your Rights</h2>
          <p className="text-gray-600 mb-4">As a data subject under GDPR, you have the following rights:</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• <span className="font-semibold">Access</span> – request a copy of your personal data.</li>
            <li>• <span className="font-semibold">Rectification</span> – correct inaccurate or incomplete data.</li>
            <li>• <span className="font-semibold">Erasure</span> – request deletion (“right to be forgotten”).</li>
            <li>• <span className="font-semibold">Restriction</span> – limit processing under certain conditions.</li>
            <li>• <span className="font-semibold">Portability</span> – receive data in a structured, machine-readable format.</li>
            <li>• <span className="font-semibold">Objection</span> – opt-out of certain processing, including direct marketing.</li>
            <li>• <span className="font-semibold">Withdraw consent</span> – at any time, where processing is based on consent.</li>
          </ul>
          <p className="text-gray-600 mb-4">To exercise your rights, contact us at <a className="text-primary-blue" onClick={() => window.open("mailto:contact@digeto.com")}>contact@digeto.com</a>. You also have the right to lodge a complaint with the <span className="font-semibold">Commission Nationale de l’Informatique et des Libertés (CNIL)</span> or your local supervisory authority.</p>
        </div>

        {/* 8. COOKIES & TRACKING TECHNOLOGIES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Cookies & Tracking Technologies</h2>
          <p className="text-gray-600 mb-4">DIGETO uses cookies and similar technologies to:</p>
          <ul className="text-gray-600 ml-6 mb-4">
            <li>• Enable website functionality.</li>
            <li>• Measure usage and performance.</li>
            <li>• Personalize user experience.</li>
          </ul>
          <p className="text-gray-600 mb-4">You can manage cookie preferences via your browser settings.</p>
        </div>

        {/* 9. DATA SECURITY */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Data Security</h2>
          <p className="text-gray-600">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, misuse, or alteration. However, no system can be 100% secure, and you acknowledge that risks may remain.</p>
        </div>

        {/* 10. CHILDREN'S PRIVACY */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Children’s Privacy</h2>
          <p className="text-gray-600">Our Services are not intended for individuals under the age of 18, and we do not knowingly collect personal data from children.</p>
        </div>

        {/* 11. CHANGES TO THIS POLICY */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to This Policy</h2>
          <p className="text-gray-600">We may update this Privacy Policy from time to time. Updates will be posted with a revised “Last Updated” date. If changes are significant, we will provide additional notice.</p>
        </div>

        {/* 12. CONTACT */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Contact</h2>
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

export default PrivacyPolicy