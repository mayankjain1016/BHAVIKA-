import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, Briefcase, HardHat, Factory, ArrowRight } from 'lucide-react'
import logoImg from '../IMAGES/LogoImage.jpeg'

export default function Navbar({ activeSection = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = location.pathname === '/'

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-200 border-b border-slate-100 ${
      isScrolled ? 'shadow-md py-1' : 'shadow-xs py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[85px] sm:min-h-[96px]">
          
          {/* Logo on Left (Transparent Background Blend) */}
          <Link to="/" className="flex items-center group py-2 flex-shrink-0">
            <img
              src={logoImg}
              alt="Bhavika Manpower and Recruitment Services"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links (Matched to ANG Manpower Screenshot) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            
            {/* HOME */}
            <div className="relative py-2">
              <Link
                to="/"
                className={`text-sm font-extrabold tracking-wide uppercase transition-colors ${
                  isHomePage && activeSection === 'home'
                    ? 'text-[#0088cc]'
                    : 'text-slate-800 hover:text-[#0088cc]'
                }`}
              >
                HOME
              </Link>
              {isHomePage && activeSection === 'home' && (
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#0088cc] rounded-full" />
              )}
            </div>

            {/* ABOUT US */}
            <div className="relative py-2">
              <Link
                to="/about"
                className={`text-sm font-extrabold tracking-wide uppercase transition-colors ${
                  location.pathname === '/about' || location.pathname === '/about-us' || activeSection === 'about'
                    ? 'text-[#0088cc]'
                    : 'text-slate-800 hover:text-[#0088cc]'
                }`}
              >
                ABOUT US
              </Link>
              {(location.pathname === '/about' || location.pathname === '/about-us' || activeSection === 'about') && (
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#0088cc] rounded-full" />
              )}
            </div>

            {/* BLOGS */}
            <div className="relative py-2">
              <Link
                to="/blogs"
                className={`text-sm font-extrabold tracking-wide uppercase transition-colors ${
                  location.pathname === '/blogs'
                    ? 'text-[#0088cc]'
                    : 'text-slate-800 hover:text-[#0088cc]'
                }`}
              >
                BLOGS
              </Link>
              {location.pathname === '/blogs' && (
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#0088cc] rounded-full" />
              )}
            </div>

            {/* SERVICES */}
            <div className="relative py-2">
              <Link
                to="/services"
                className={`text-sm font-extrabold tracking-wide uppercase transition-colors ${
                  location.pathname === '/services' || activeSection === 'services'
                    ? 'text-[#0088cc]'
                    : 'text-slate-800 hover:text-[#0088cc]'
                }`}
              >
                SERVICES
              </Link>
              {(location.pathname === '/services' || activeSection === 'services') && (
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#0088cc] rounded-full" />
              )}
            </div>


            {/* CONTACT */}
            <div className="relative py-2">
              <Link
                to="/contact"
                className={`text-sm font-extrabold tracking-wide uppercase transition-colors ${
                  location.pathname === '/contact' || location.pathname === '/contact-us' || activeSection === 'contact'
                    ? 'text-[#0088cc]'
                    : 'text-slate-800 hover:text-[#0088cc]'
                }`}
              >
                CONTACT
              </Link>
              {(location.pathname === '/contact' || location.pathname === '/contact-us' || activeSection === 'contact') && (
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#0088cc] rounded-full" />
              )}
            </div>


            {/* CONSTRUCTION MANPOWER */}
            <div className="relative group py-2">
              <Link
                to="/construction-manpower"
                className={`flex items-center gap-1 text-sm font-extrabold tracking-wide uppercase transition-colors ${
                  location.pathname === '/construction-manpower' || location.pathname === '/blue-collar-construction-manpower' || activeSection === 'construction-manpower'
                    ? 'text-[#0088cc]'
                    : 'text-slate-800 hover:text-[#0088cc]'
                }`}
              >
                <span>CONSTRUCTION MANPOWER</span>
                <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-[#0088cc] group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              {(location.pathname === '/construction-manpower' || location.pathname === '/blue-collar-construction-manpower' || activeSection === 'construction-manpower') && (
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#0088cc] rounded-full" />
              )}

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-72 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl rounded-xl z-50">
                <div className="bg-white border border-slate-200 rounded-xl p-2 shadow-2xl space-y-1">
                  <Link
                    to="/construction-manpower"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-blue-50 transition-colors group/item"
                  >
                    <div className="p-2 bg-slate-100 text-slate-700 rounded-md group-hover/item:bg-slate-900 group-hover/item:text-white transition-colors">
                      <Factory className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#0088cc]">
                        Blue Collar Construction Manpower
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Masons, Bar Benders, Welders, Helpers & Labor
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/industries"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-blue-50 transition-colors group/item"
                  >
                    <div className="p-2 bg-blue-100 text-[#0088cc] rounded-md group-hover/item:bg-[#0088cc] group-hover/item:text-white transition-colors">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover/item:text-[#0088cc]">
                        White Collar Roles
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Site Engineers, Project Managers, Planning
                      </p>
                    </div>
                  </Link>

                  <Link
                    to="/industries"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-blue-50 transition-colors group/item"
                  >
                    <div className="p-2 bg-amber-100 text-amber-700 rounded-md group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors">
                      <HardHat className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover/item:text-amber-700">
                        Grey Collar Workforce
                      </div>
                      <p className="text-[11px] text-slate-500">
                        Site Supervisors, Foremen, Electricians, QC
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>


          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>


      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[85px] sm:top-[96px] bg-slate-900/60 backdrop-blur-xs z-50 flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl animate-fadeIn">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <span className="font-extrabold text-slate-900 text-sm tracking-wide uppercase">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-500 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col space-y-2">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg font-bold text-sm uppercase ${
                    isHomePage && activeSection === 'home'
                      ? 'text-[#0088cc] bg-blue-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  HOME
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg font-bold text-sm uppercase ${
                    location.pathname === '/about' || location.pathname === '/about-us'
                      ? 'text-[#0088cc] bg-blue-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  ABOUT US
                </Link>


                <Link
                  to="/blogs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg font-bold text-slate-800 hover:bg-slate-50 text-sm uppercase"
                >
                  BLOGS
                </Link>

                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg font-bold text-sm uppercase ${
                    location.pathname === '/services'
                      ? 'text-[#0088cc] bg-blue-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  SERVICES
                </Link>


                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg font-bold text-sm uppercase ${
                    location.pathname === '/contact' || location.pathname === '/contact-us'
                      ? 'text-[#0088cc] bg-blue-50'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  CONTACT
                </Link>


                {/* Construction Manpower Collapsible */}
                <div>
                  <button
                    onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-bold text-slate-800 hover:bg-slate-50 text-sm uppercase"
                  >
                    <span>CONSTRUCTION MANPOWER</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        categoriesDropdownOpen ? 'rotate-180 text-[#0088cc]' : ''
                      }`}
                    />
                  </button>
                  {categoriesDropdownOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg my-1 text-xs">
                      <Link
                        to="/construction-manpower"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-slate-600 hover:text-[#0088cc] font-medium"
                      >
                        • Blue Collar Construction Manpower
                      </Link>
                      <Link
                        to="/industries"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-slate-600 hover:text-[#0088cc] font-medium"
                      >
                        • White Collar (Engineers, PMs)
                      </Link>
                      <Link
                        to="/industries"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-slate-600 hover:text-[#0088cc] font-medium"
                      >
                        • Grey Collar (Supervisors, Techs)
                      </Link>

                    </div>
                  )}
                </div>
              </nav>
            </div>

            <div className="border-t pt-4 space-y-3">
              <a
                href="tel:+918882943975"
                className="w-full py-2.5 bg-[#0088cc] text-white rounded-lg font-bold text-sm shadow text-center block"
              >
                Call: +91 88829 43975
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
