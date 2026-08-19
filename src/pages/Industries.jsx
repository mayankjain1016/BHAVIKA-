import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  X,
  Phone,
  Mail,
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

export default function Industries() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    phone: '',
    requirementType: 'Industrial Workforce',
    workforceCount: '10-50 Workers'
  })
  const [quoteSubmitted, setQuoteSubmitted] = useState(false)

  const handleQuoteSubmit = (e) => {
    e.preventDefault()
    setQuoteSubmitted(true)
    setTimeout(() => {
      setQuoteModalOpen(false)
      setQuoteSubmitted(false)
    }, 3000)
  }

  // 4 Industries Data
  const industriesList = [
    {
      id: 1,
      title: "Commercial Construction",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22.01"/><line x1="15" y1="22" x2="15" y2="22.01"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/>
        </svg>
      ),
      desc: "Commercial construction projects include buildings such as offices, retail stores, hotels, and restaurants. We provide Highly Skilled and Skilled workers and Professionals capable of handling complex layouts and adhering to strict timelines due to high foot traffic and business needs."
    },
    {
      id: 2,
      title: "Residential Construction",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      desc: "Residential construction focuses on building Apartment complexes etc. We cater to the manpower needs which are diverse, ranging from skilled artisans to general laborers. Experienced tradespeople such as Carpenters, electricians, plumbers, and masons with experience in residential settings."
    },
    {
      id: 3,
      title: "Infrastructure and Public Works",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
        </svg>
      ),
      desc: "Projects including highways, bridges, public transportation facilities, and utilities which often are large-scale and require unique manpower focused on heavy equipment operation and civil engineering expertise, skilled labor for heavy equipment, providing certified operators and Workers who are trained in specific protocols and standards of construction."
    },
    {
      id: 4,
      title: "Industrial Construction",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      desc: "Industrial construction encompasses facilities like factories, plants, refineries, and warehouses. These projects demand a workforce that understands complex systems and safety protocols."
    }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans antialiased text-slate-800">
      
      {/* 1. NAVBAR */}
      <Navbar activeSection="industries" />

      {/* 2. HERO PAGE HEADER BANNER (Grayscale Construction Site with Crane & Scaffolding) */}
      <section className="relative h-56 sm:h-64 md:h-72 bg-slate-900 text-white flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=80"
          alt="Industries We Serve - Bhavika Manpower"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
        
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-2">
            Industries We Serve
          </h1>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <span className="text-slate-400 font-normal">›</span>
            <span className="text-[#00a2ed]">Industries</span>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE SECTION (2x2 Grid) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-3">
              Industries We Serve
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Providing Skilled trades, General Labor, and Support Staff for projects of all sizes, from residential buildings to large-scale infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {industriesList.map((industry) => (
              <div
                key={industry.id}
                className="bg-white border border-slate-200/80 rounded-xl p-6 sm:p-8 text-left shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200"
              >
                {/* Cyan Icon Badge */}
                <div className="w-10 h-10 rounded-md bg-[#00a2ed] text-white flex items-center justify-center mb-4 shadow-xs">
                  {industry.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2 leading-snug">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {industry.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. TOPS TALENTS AVAILABLE SECTION (3-COLUMN MINIMALIST LIST) */}
      <section id="categories" className="py-16 sm:py-20 bg-slate-50/80 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Heading */}
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 text-center tracking-tight mb-12 sm:mb-16">
            Tops Talents Available
          </h2>

          {/* 3 Clean Minimalist Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-14 text-left">
            
            {/* Column 1: White Collar */}
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-5">
                White Collar
              </h3>
              <ul className="space-y-3">
                {[
                  "Civil Engineer",
                  "Mechanical Engineer",
                  "MEP Engineer",
                  "Planning Engineer",
                  "Structural Engineer",
                  "Fire protection Engineers",
                  "QA and QC Engineer",
                  "AutoCAD Expert"
                ].map((role, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-slate-700 hover:text-[#0088cc] transition-colors text-sm sm:text-base font-medium"
                  >
                    <span className="text-slate-500 font-bold">→</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Grey Collar */}
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-5">
                Grey Collar
              </h3>
              <ul className="space-y-3">
                {[
                  "Surveyors",
                  "Draftsman",
                  "Foreman",
                  "QA & QC Technicians",
                  "Supervisors"
                ].map((role, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-slate-700 hover:text-[#0088cc] transition-colors text-sm sm:text-base font-medium"
                  >
                    <span className="text-slate-500 font-bold">→</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Blue Collar */}
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-5">
                Blue Collar
              </h3>
              <ul className="space-y-3">
                {[
                  "Carpenter",
                  "Fitter",
                  "Welders",
                  "Plumbers",
                  "Masons",
                  "Scaffolders",
                  "Helper"
                ].map((role, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-slate-700 hover:text-[#0088cc] transition-colors text-sm sm:text-base font-medium"
                  >
                    <span className="text-slate-500 font-bold">→</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION STRIP: "Are you looking for Construction & Industrial Experts?" */}
      <section className="bg-[#00a2ed] text-white relative py-10 px-4 sm:px-8 overflow-hidden">
        {/* Measurement Ruler / Scaffolding Tick Marks on Top Border */}
        <div className="absolute top-0 left-0 right-0 h-4 flex justify-between opacity-40 overflow-hidden pointer-events-none">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className={`border-l border-white ${i % 5 === 0 ? 'h-3' : 'h-1.5'}`}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 pt-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center md:text-left tracking-tight">
            Are you looking for Construction & Industrial Experts?
          </h3>
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all flex-shrink-0"
          >
            Request A Quote
          </button>
        </div>
      </section>

      {/* 6. FOOTER */}
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


      {/* 7. QUICK QUOTE MODAL POPUP */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                Request Manpower Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Share your requirements for immediate deployment estimates.
              </p>
            </div>

            {quoteSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-6 rounded-xl text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-lg">Quote Request Submitted!</h4>
                <p className="text-xs text-emerald-700">
                  Our staffing specialist will call you shortly at <strong>{quoteFormData.phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Name / Representative
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singh"
                    value={quoteFormData.name}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#00a2ed] focus:ring-1 focus:ring-[#00a2ed] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 88829 43975"
                    value={quoteFormData.phone}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#00a2ed] focus:ring-1 focus:ring-[#00a2ed] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Industry Domain Needed
                  </label>
                  <select
                    value={quoteFormData.requirementType}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, requirementType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#00a2ed] text-sm bg-white"
                  >
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Infrastructure and Public Works">Infrastructure & Public Works</option>
                    <option value="Industrial Construction">Industrial Construction / Factories</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Estimated Headcount
                  </label>
                  <select
                    value={quoteFormData.workforceCount}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, workforceCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#00a2ed] text-sm bg-white"
                  >
                    <option value="1-10 Workers">1 - 10 Workers</option>
                    <option value="10-50 Workers">10 - 50 Workers</option>
                    <option value="50-200 Workers">50 - 200 Workers</option>
                    <option value="200+ Workers">200+ Turnkey Deployment</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#00a2ed] hover:bg-[#0090d4] text-white font-bold text-base py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  )
}
