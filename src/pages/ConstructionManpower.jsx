import React from 'react'
import { Link } from 'react-router-dom'
import {
  HardHat,
  Wrench,
  Clock,
  ShieldCheck,
  ArrowRight
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

export default function ConstructionManpower() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans antialiased text-slate-800">
      
      {/* 1. NAVBAR */}
      <Navbar activeSection="construction-manpower" />

      {/* 2. TOP HERO TITLE & INTRO PARAGRAPH (EXACT MATCH TO REFERENCE SCREENSHOT 1) */}
      <header className="pt-14 sm:pt-20 pb-10 px-4 sm:px-6 lg:px-8 text-center max-w-6xl mx-auto w-full">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-[44px] text-[#29439c] tracking-tight mb-6 leading-tight">
          Hire Blue Collar Construction Manpower For Your Construction
        </h1>
        <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed max-w-5xl mx-auto font-normal">
          At Bhavika Manpower, we specialize in supplying reliable and skilled blue collar construction manpower across India. From general laborers to specialized tradesmen like masons, electricians, plumbers, and carpenters – we provide workforce solutions tailored to your project's size, location, and deadline. With a commitment to quality, safety, and fast mobilization, we help construction companies build faster and smarter with dependable manpower.
        </p>
      </header>

      {/* 3. SECTION 1: TRUSTED LABOR SUPPLY (EXACT MATCH TO REFERENCE SCREENSHOT 1 & 2) */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Carpenter in Neon Vest with Handsaw */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Construction Worker with Carpenter Tools"
                className="w-full h-72 sm:h-80 object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Narrative Description */}
          <div className="md:col-span-8 lg:col-span-8 space-y-4">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#29439c] tracking-tight leading-snug">
              Trusted Labor Supply for Construction Projects Across India
            </h2>
            <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed font-normal">
              Bhavika Manpower is a leading provider of blue collar construction manpower in India. From metro cities like Delhi, Mumbai, Bengaluru, and Chennai to tier-2 towns, we supply reliable and skilled laborers for residential, commercial, and industrial construction projects.
            </p>
          </div>

        </div>
      </section>

      {/* 4. SECTION 2: OUR MANPOWER SERVICES INCLUDE (EXACT MATCH TO REFERENCE SCREENSHOT 2) */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Services List */}
          <div className="md:col-span-7 lg:col-span-7 space-y-4">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#29439c] tracking-tight">
              Our Manpower Services Include:
            </h2>
            <p className="text-[#374151] text-sm sm:text-base font-semibold">
              We deploy trained and experienced construction workers, including:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#4b5563] font-normal">
              <li>General Laborers</li>
              <li>Civil Helpers</li>
              <li>Masons (Brick & Tile)</li>
              <li>Bar Benders & Shuttering Carpenters</li>
              <li>Plumbers & Electricians</li>
              <li>Welders & Fitters</li>
              <li>Painters & Site Supervisors</li>
              <li>Crane Operators & Machine Drivers</li>
            </ul>
          </div>

          {/* Right: Steel Structure Workers with Spirit Level */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80"
                alt="Construction Workforce on Structural Steel"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. SECTION 3: POWER-UP THE PROJECT (EXACT MATCH TO REFERENCE SCREENSHOT 3) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full text-left space-y-5">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#29439c] tracking-tight">
          Power-Up the Project with our Skilled Construction Manpower
        </h2>

        <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed font-normal">
          At <strong>Bhavika Manpower</strong>, we know that a construction project is only as strong as the people building it. Behind every brick laid and every wall raised, there's a hardworking team making it all happen. That's where we come in.
        </p>

        <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed font-normal">
          We provide <strong>skilled, dependable, and ready-to-work blue collar manpower</strong> to help you keep your site running smoothly. Whether you're working on a high-rise in Mumbai, a factory in Pune, or a housing project in a growing town, we make sure you have the right people on the ground – when and where you need them.
        </p>

        <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed font-normal">
          From <strong>masons and carpenters to electricians, plumbers, and general helpers</strong>, our workers bring hands-on experience, know-how, and a strong work ethic to every task. They're trained to work safely, follow site protocols, and stay focused on getting the job done right.
        </p>
      </section>

      {/* 7. SECTION 5: WHAT SETS OUR BHAVIKA MANPOWER APART (EXACT MATCH TO SCREENSHOT 4 & 5) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-center">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#29439c] tracking-tight mb-8">
          What Sets Our Bhavika Manpower Apart?
        </h2>

        <div className="max-w-3xl mx-auto text-left space-y-4">
          <div className="flex items-start gap-3.5 text-sm sm:text-base text-[#374151]">
            <div className="p-1.5 rounded-md bg-blue-50 text-[#1879c9] flex-shrink-0 mt-0.5 shadow-xs">
              <HardHat className="w-5 h-5" />
            </div>
            <p className="pt-0.5">
              <strong>Hands-On Experience:</strong> Our workers have practical experience in live construction environments.
            </p>
          </div>

          <div className="flex items-start gap-3.5 text-sm sm:text-base text-[#374151]">
            <div className="p-1.5 rounded-md bg-blue-50 text-[#1879c9] flex-shrink-0 mt-0.5 shadow-xs">
              <Wrench className="w-5 h-5" />
            </div>
            <p className="pt-0.5">
              <strong>Trade-Specific Skills:</strong> From shuttering to finishing work, we match workers with the right expertise.
            </p>
          </div>

          <div className="flex items-start gap-3.5 text-sm sm:text-base text-[#374151]">
            <div className="p-1.5 rounded-md bg-blue-50 text-[#1879c9] flex-shrink-0 mt-0.5 shadow-xs">
              <Clock className="w-5 h-5" />
            </div>
            <p className="pt-0.5">
              <strong>On-Time Availability:</strong> We mobilize manpower quickly to help you meet tight deadlines.
            </p>
          </div>

          <div className="flex items-start gap-3.5 text-sm sm:text-base text-[#374151]">
            <div className="p-1.5 rounded-md bg-blue-50 text-[#1879c9] flex-shrink-0 mt-0.5 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="pt-0.5">
              <strong>Site-Ready & Compliant:</strong> All workers are vetted and oriented on safety, site protocols, and compliance.
            </p>
          </div>
        </div>

        {/* 8. SECTION 6: CYAN ACTION BUTTON */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2.5 bg-[#00a2ed] hover:bg-[#0090d4] text-white font-bold text-sm sm:text-base px-6 sm:px-10 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <span>Get in touch today and power up your site with the skilled manpower your project deserves.</span>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </Link>
        </div>
      </section>


      {/* 9. FOOTER (EXACT MATCH TO REFERENCE SCREENSHOT 5) */}
      <footer className="bg-[#1879c9] text-white pt-16 pb-6 relative mt-16">
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
