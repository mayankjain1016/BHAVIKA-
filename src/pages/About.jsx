import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  CheckCircle2,
  X,
  Phone,
  Mail,
  Building2,
  Send
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

export default function About() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    phone: '',
    requirementType: 'Construction Manpower',
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

  // Services Data (Matched to reference image)
  const servicesList = [
    {
      title: "Temporary & Project-Based Hiring",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      desc: "We specialize in sourcing a diverse range of construction professionals, from blue-collar laborers to highly qualified engineers."
    },
    {
      title: "Project Management",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22.01"/><line x1="15" y1="22" x2="15" y2="22.01"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><line x1="9" y1="18" x2="9" y2="18.01"/><line x1="15" y1="18" x2="15" y2="18.01"/>
        </svg>
      ),
      desc: "Our project managers are experts in coordinating teams, managing budgets, and ensuring that projects are completed on time and within scope."
    },
    {
      title: "Compliance and Legal Assurance",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      desc: "Navigating the legal landscape of labor laws and regulations in the construction industry can be daunting."
    },
    {
      title: "Payroll Management",
      icon: (
        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      desc: "Managing payroll for a construction workforce can be complex, particularly when dealing with large teams and diverse job roles."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans antialiased text-slate-800">
      
      {/* 1. NAVBAR */}
      <Navbar activeSection="about" />

      {/* 2. HERO PAGE HEADER BANNER (Grayscale Construction Site with Crane & Scaffolding) */}
      <section className="relative h-56 sm:h-64 md:h-72 bg-slate-900 text-white flex items-center overflow-hidden">
        {/* Background Image with Crisp Contrast & Grayscale Filter */}
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=80"
          alt="Construction Site with Crane and Scaffolding"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
        
        {/* Dark Vignette Overlay for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-2">
            About Us
          </h1>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <span className="text-slate-400 font-normal">›</span>
            <span className="text-[#00a2ed]">About Us</span>
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE COMPANY SECTION (Image on Left, Copy on Right) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Construction Site Photo */}
            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Construction Site Workforce and Architecture"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Company Description */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
                About the company
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                As a dynamic player in the construction industry, <strong>Bhavika Manpower and Recruitment Services</strong> was founded with a clear mission: to revolutionize how construction companies manage their workforce. We understand that in the competitive world of construction, having the right team in place is crucial to the success of any project. That's why we've built our company around providing innovative human resource management solutions tailored specifically for the construction sector.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Although we are a fast-growing player in the industry, we bring fresh perspectives and creative approaches to solving the challenges that construction companies face today. Whether you're managing a small residential project or a large commercial development, we know that every project has its own unique demands. Our goal is to streamline your workforce management by offering a comprehensive suite of services—from sourcing skilled and unskilled labor to managing payroll and ensuring full compliance with industry regulations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES SECTION (SOLID BLUE BACKGROUND, 2x2 CARDS) */}
      <section id="services" className="py-20 sm:py-24 bg-[#1879c9] text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white text-center tracking-tight mb-12 sm:mb-16">
            Our Services
          </h2>

          {/* 2x2 Service Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-7">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="border border-white/60 hover:border-white rounded-lg p-6 sm:p-8 text-left transition-all duration-200 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Cyan Icon Badge */}
                  <div className="w-10 h-10 rounded-md bg-[#00a2ed] text-white flex items-center justify-center mb-4 shadow-xs">
                    {service.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.desc}
                  </p>
                </div>

                {/* Read More Link */}
                <div>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-white/80 transition group"
                  >
                    <span>→ Read More</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Center Button */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/services"
              className="inline-block bg-[#00a2ed] hover:bg-[#0090d4] text-white font-bold text-sm sm:text-base px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
            >
              View All Services
            </Link>
          </div>

        </div>
      </section>

      {/* 5. TOPS TALENTS AVAILABLE SECTION (3-COLUMN MINIMALIST LIST) */}
      <section id="categories" className="py-16 sm:py-20 lg:py-24 bg-white">
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

      {/* 6. CALL TO ACTION STRIP: "Are you looking for Construction & Industrial Experts?" */}
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

      {/* 7. FOOTER */}
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


      {/* 8. QUICK QUOTE MODAL POPUP */}
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
                    Workforce Category Needed
                  </label>
                  <select
                    value={quoteFormData.requirementType}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, requirementType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#00a2ed] text-sm bg-white"
                  >
                    <option value="Construction Manpower">Construction Manpower (Engineers, Helpers, Masons)</option>
                    <option value="Blue Collar Staffing">Blue Collar (Helpers, Operators, Labor)</option>
                    <option value="Grey Collar Staffing">Grey Collar (Supervisors, Technicians)</option>
                    <option value="White Collar Placement">White Collar (Engineers, Managers)</option>
                    <option value="Payroll & Compliance">Payroll & Compliance Services</option>
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
