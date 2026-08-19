import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Send,
  Building2
} from 'lucide-react'
import Navbar from '../components/Navbar'

// Custom Crisp SVG Icons for Social Platforms
const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const TwitterXIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const MediumIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

import { submitContactForm } from '../services/contactService'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    industryType: '',
    location: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      await submitContactForm(formData)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        industryType: '',
        location: ''
      })
    } catch (error) {
      console.error('Contact Form Submission Error:', error)
      setErrorMessage(
        error?.message || 'Failed to submit your message. Please check your connection and try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }





  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans antialiased text-slate-800">
      
      {/* 1. NAVBAR */}
      <Navbar activeSection="contact" />

      {/* 2. CONTACT SECTION (Left: Info, Right: Form Card) */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading & Contact Info (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h1 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
                  Contact Us
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  Ready to streamline your construction workforce management? Get in touch with us today to learn more about how we can support your projects with reliable HR solutions.
                </p>
              </div>


              <div className="pt-2 space-y-4">
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                  CONTACT INFO
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#00a2ed] flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#00a2ed]" />
                    </span>
                    <a
                      href="tel:+918882943975"
                      className="hover:text-[#0088cc] transition font-medium"
                    >
                      +91 88829 43975
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#00a2ed] flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#00a2ed]" />
                    </span>
                    <a
                      href="mailto:bhavikamanpower@gmail.com"
                      className="hover:text-[#0088cc] transition font-medium"
                    >
                      bhavikamanpower@gmail.com
                    </a>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <span className="text-[#00a2ed] flex-shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4 text-[#00a2ed]" />
                    </span>
                    <p className="leading-relaxed font-normal text-slate-600">
                      Bhavika Manpower and Recruitment Services, C1-58/F1, Building No. 58, Dilashad Extension Part 1, DLF, Sahibabad, Ghaziabad, Uttar Pradesh - 201005
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form Card (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-slate-200/80">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-6">
                  Fill the below form and share in your requirements
                </h3>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-6 rounded-xl text-center space-y-2 animate-fadeIn">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-lg">Thank You for Your Message! Our team will contact you shortly.</h4>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="bg-red-50 text-red-700 text-xs p-3.5 rounded-lg border border-red-200 animate-fadeIn">
                        {errorMessage}
                      </div>
                    )}
                    
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-[#00a2ed] focus:ring-1 focus:ring-[#00a2ed] text-xs sm:text-sm placeholder-slate-400 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                          EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@doe.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-[#00a2ed] focus:ring-1 focus:ring-[#00a2ed] text-xs sm:text-sm placeholder-slate-400 bg-white"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                          PHONE *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="081 234 567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-[#00a2ed] focus:ring-1 focus:ring-[#00a2ed] text-xs sm:text-sm placeholder-slate-400 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                          BUSINESS NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="XYZ"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-[#00a2ed] focus:ring-1 focus:ring-[#00a2ed] text-xs sm:text-sm placeholder-slate-400 bg-white"
                        />
                      </div>
                    </div>

                    {/* Row 3: Industry Type & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                          INDUSTRY TYPE *
                        </label>
                        <select
                          required
                          value={formData.industryType}
                          onChange={(e) => setFormData({ ...formData, industryType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-[#00a2ed] focus:ring-1 focus:ring-[#00a2ed] text-xs sm:text-sm bg-white text-slate-700"
                        >
                          <option value="">Select Industry</option>
                          <option value="Commercial Construction">Commercial Construction</option>
                          <option value="Residential Construction">Residential Construction</option>
                          <option value="Infrastructure and Public Works">Infrastructure and Public Works</option>
                          <option value="Industrial Construction">Industrial Construction</option>
                          <option value="Logistics & Warehousing">Logistics & Warehousing</option>
                          <option value="Manufacturing & Plant Staffing">Manufacturing & Plant Staffing</option>
                          <option value="Facility Management">Facility Management</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                          LOCATION *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ghaziabad / Delhi NCR / Bangalore"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 focus:border-[#00a2ed] focus:ring-1 focus:ring-[#00a2ed] text-xs sm:text-sm placeholder-slate-400 bg-white"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-[#00a2ed] hover:bg-[#0090d4] disabled:opacity-60 text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Send Message</span>
                        )}
                      </button>
                    </div>

                  </form>
                )}



              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. GOOGLE MAP SECTION */}
      <section className="w-full bg-slate-100 border-t border-slate-200">
        <div className="w-full h-80 sm:h-96 relative">
          <iframe
            title="Bhavika Manpower Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.34407842777!2d77.3000!3d28.6700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb1e479a957b%3A0x2ff2548842c8d203!2sSahibabad%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[20%] contrast-110"
          />
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#1879c9] text-white pt-16 pb-6 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
            
            {/* Column 1: About Company (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                About Company
              </h3>

              <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
                Bhavika Manpower and Recruitment Services was founded with a clear mission: to revolutionize how construction companies manage their workforce.
              </p>

              {/* Social Media Icons */}
              <div className="pt-2 flex items-center gap-3.5 text-white">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white hover:text-white/80 transition"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white hover:text-white/80 transition"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-white hover:text-white/80 transition"
                >
                  <TwitterXIcon />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white hover:text-white/80 transition"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-white hover:text-white/80 transition"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium"
                  className="text-white hover:text-white/80 transition"
                >
                  <MediumIcon />
                </a>
              </div>
            </div>

            {/* Column 2: SERVICES (lg:col-span-3) */}
            <div className="lg:col-span-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4">
                SERVICES
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
                <li>
                  <Link to="/services" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Temporary & Project-Based Hiring</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Project Management</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Compliance and Legal Assurance</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Payroll Management</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: INDUSTRIES (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4">
                INDUSTRIES
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
                <li>
                  <Link to="/industries" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Commercial Construction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Residential Construction</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Infrastructure and Public Works</span>
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Industrial Construction</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: LINKS (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4">
                LINKS
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
                <li>
                  <Link to="/" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="hover:text-white transition flex items-center gap-1.5">
                    <span className="text-white/80">›</span>
                    <span>Blogs</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & Developer Attribution Bar */}
          <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-white/90 font-normal">
            <p>© 2026 Copyright Bhavika Manpower and Recruitment Services</p>
            <p>
              Developed by{' '}
              <a
                href="https://affobe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white underline decoration-white/70 hover:decoration-white hover:text-white transition cursor-pointer"
              >
                AFFOBE
              </a>
            </p>
          </div>

        </div>
      </footer>


    </div>
  )
}
