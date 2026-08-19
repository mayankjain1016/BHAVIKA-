import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { submitContactForm } from '../services/contactService'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Search,
  CheckCircle2,
  Users,
  ShieldCheck,
  Briefcase,
  FileCheck,
  TrendingUp,
  Award,
  Zap,
  Building2,
  Factory,
  HardHat,
  Truck,
  ArrowRight,
  Send,
  Headphones,
  Check,
  Sparkles,
  ExternalLink,
  MessageSquare
} from 'lucide-react'


// Custom Crisp SVG Icons for Social Platforms to guarantee 100% stability
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


export default function Home() {
  // -------------------------------------------------------------
  // STATES & HOOKS
  // -------------------------------------------------------------
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSliderHovered, setIsSliderHovered] = useState(false)
  const [openAccordion, setOpenAccordion] = useState(0)

  // Contact Form (6 exact fields: name, email, phone, businessName, industryType, location)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    industryType: '',
    location: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError('')

    try {
      await submitContactForm(formData)
      setFormSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        industryType: '',
        location: ''
      })
      setTimeout(() => {
        setFormSubmitted(false)
      }, 7000)
    } catch (err) {
      setFormError(
        err?.message || 'Something went wrong. Please check your details and try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }


  // Quote Modal
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    phone: '',
    requirementType: 'Blue Collar Staffing',
    workforceCount: '10-50 Workers'
  })
  const [quoteSubmitted, setQuoteSubmitted] = useState(false)

  // Active navigation section
  const [activeSection, setActiveSection] = useState('home')
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // -------------------------------------------------------------
  // HERO SLIDES DATA
  // -------------------------------------------------------------
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2400&q=85",
      badge: "India's Dependable Workforce Partner",
      title: "Your Trusted Partner in Workforce Solutions",
      subtext: "Connecting skilled, semi-skilled, and professional talent with top enterprises across construction, industrial, logistics, and corporate sectors.",
      ctaPrimary: "Hire Talent Now",
      ctaSecondary: "Explore Services",
      taglineSub: "Connecting Talent with Opportunity"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=85",
      badge: "Empowering National Growth & Employment",
      title: "हर हाथ को काम, हर काम को हाथ",
      subtext: "Bridging the gap between hardworking skilled talent and growing businesses — delivering reliable on-ground manpower.",
      ctaPrimary: "Request Manpower",
      ctaSecondary: "View Job Categories",
      taglineSub: "From Village to City • From Potential to Productivity"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=85",
      badge: "100% Statutory & Labor Law Compliance",
      title: "End-to-End Recruitment & Payroll Management",
      subtext: "Eliminate hiring friction with verified candidates, seamless legal adherence (PF, ESIC, Minimum Wages), and fast deployment.",
      ctaPrimary: "Consult HR Expert",
      ctaSecondary: "Our Compliance Model",
      taglineSub: "Zero Legal Liabilities • 100% Peace of Mind"
    }
  ]

  // Auto-play slider
  useEffect(() => {
    if (isSliderHovered) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isSliderHovered, slides.length])

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'why-us', 'industries', 'categories', 'clientele', 'contact']
      const scrollPosition = window.scrollY + 200

      if (window.scrollY < 300) {
        setActiveSection('home')
        return
      }

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Quote Form Handler
  const handleQuoteSubmit = (e) => {

    e.preventDefault()
    if (!quoteFormData.name || !quoteFormData.phone) return
    setQuoteSubmitted(true)
    console.log('Quick Quote Submitted:', quoteFormData)
    setTimeout(() => {
      setQuoteSubmitted(false)
      setQuoteModalOpen(false)
      setQuoteFormData({
        name: '',
        phone: '',
        requirementType: 'Blue Collar Staffing',
        workforceCount: '10-50 Workers'
      })
    }, 3000)
  }

  // Accordion Data (Matched to reference image)
  const accordionData = [
    {
      id: 0,
      title: "INDUSTRY EXPERTISE",
      content: "With years of experience in the construction sector, we understand the specific HR needs of the industry. Our team is dedicated to find the right talent for your specific project needs."
    },
    {
      id: 1,
      title: "TAILORED HIRING SOLUTIONS",
      content: "We provide custom staffing solutions to match your project scale, timeline, and technical requirements across all construction and industrial disciplines."
    },
    {
      id: 2,
      title: "RELIABLE WORKFORCE",
      content: "Our candidates undergo stringent multi-level verification, skill assessments, and background screening to ensure dependable on-site performance."
    },
    {
      id: 3,
      title: "QUALITY ASSURANCE",
      content: "Dedicated account managers and on-site oversight ensure optimal productivity, workplace safety, and seamless workforce operations."
    },
    {
      id: 4,
      title: "LEGAL COMPLIANCE",
      content: "100% adherence to all statutory labor laws, PF, ESIC, minimum wages, and safety regulations, eliminating client liabilities."
    },
    {
      id: 5,
      title: "TECH BASED HIRING SOLUTION",
      content: "Streamlined digital database, automated skill matching, and real-time candidate deployment for rapid project turnarounds."
    }
  ]

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

  // Industries Data
  const industriesList = [
    {
      title: "Construction & Infrastructure",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
      roles: "Civil Engineers, Bar Benders, Masons, Electricians, Site Supervisors, Labor",
      tag: "Mega Projects & Real Estate"
    },
    {
      title: "Manufacturing & Industrial",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      roles: "CNC Operators, Assembly Line Workers, Plant Helpers, QC Inspectors, Fitters",
      tag: "Automotive & Heavy Engineering"
    },
    {
      title: "Corporate & Office Staffing",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      roles: "HR Executives, Accountants, Sales Staff, Admin, Customer Support, IT",
      tag: "Enterprises & Startups"
    },
    {
      title: "Logistics & Warehousing",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      roles: "Forklift Drivers, Pickers/Packers, Loaders, Warehouse Managers, Dispatchers",
      tag: "E-Commerce & Supply Chain"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-primary-600 selection:text-white relative">
      
      {/* ------------------------------------------------------------- */}
      {/* NAVBAR (REDESIGNED MATCHING ANG MANPOWER STYLE WITH LOGO) */}
      {/* ------------------------------------------------------------- */}
      <Navbar activeSection={activeSection} />



      {/* ------------------------------------------------------------- */}
      {/* 3. HERO SECTION (IMAGE SLIDER / CAROUSEL) */}
      {/* ------------------------------------------------------------- */}
      <section
        id="home"
        className="relative bg-navy-950 text-white min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden"
        onMouseEnter={() => setIsSliderHovered(true)}
        onMouseLeave={() => setIsSliderHovered(false)}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Crisp, 100% sharp background image without blur or scaling */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Clean, subtle transparent gradient for high text readability without washing out background */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

              <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-16">
                <div className="max-w-3xl space-y-4 sm:space-y-6">
                  
                  <div className="inline-flex items-center gap-2 bg-primary-700/80 border border-primary-400/50 text-white px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-accent-amber" />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight drop-shadow-md">
                    {slide.title}
                  </h1>

                  <p className="text-primary-300 font-medium text-sm sm:text-base lg:text-lg tracking-wide italic">
                    {slide.taglineSub}
                  </p>

                  <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light">
                    {slide.subtext}
                  </p>

                  <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setQuoteModalOpen(true)}
                      className="bg-primary-600 hover:bg-primary-500 text-white font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-primary-600/50 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base group"
                    >
                      <span>{slide.ctaPrimary}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a
                      href="#services"
                      className="bg-black/30 hover:bg-black/50 text-white border border-white/40 font-semibold px-6 py-3.5 rounded-lg transition text-sm sm:text-base"
                    >
                      {slide.ctaSecondary}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#0088cc] text-white border border-white/30 flex items-center justify-center transition-all duration-200 focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-[#0088cc] text-white border border-white/30 flex items-center justify-center transition-all duration-200 focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>


        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-primary-500' : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. CTA STRIP (THIN COLORED BANNER WITH RULER-TICK ACCENT) */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-primary-700 text-white relative shadow-lg">
        <div className="h-1.5 w-full ruler-tick-pattern" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h2 className="font-heading font-extrabold text-lg sm:text-xl lg:text-2xl text-white tracking-tight flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span>Looking for the Right Talent or the Right Job?</span>
              <span className="text-xs bg-white/20 text-white px-2.5 py-0.5 rounded-full font-medium">
                48-Hr Deployment
              </span>
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm mt-0.5">
              Contact Bhavika Manpower for reliable industrial, construction, and corporate staffing solutions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-primary-800 hover:bg-blue-50 font-bold px-6 py-2.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1.5 group"
            >
              <span>Request A Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary-700" />
            </button>
            <a
              href="#contact"
              className="border border-white/40 hover:border-white text-white text-sm font-semibold px-4 py-2.5 rounded-full transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. ABOUT THE COMPANY SECTION */}
      {/* ------------------------------------------------------------- */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
                    alt="Bhavika Manpower Recruitment Team and Workforce"
                    className="w-full h-[400px] sm:h-[460px] object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="absolute -bottom-6 -right-4 sm:right-4 bg-primary-700 text-white p-5 rounded-xl shadow-xl max-w-[220px] border-2 border-white">
                  <div className="text-3xl font-heading font-black">100%</div>
                  <div className="text-xs font-semibold text-blue-100 uppercase tracking-wider mt-0.5">
                    Verified Talent & Statutory Compliance
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 bg-navy-900 text-white py-2 px-4 rounded-lg shadow-lg text-xs font-bold flex items-center gap-2 border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Licensed Agency</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-primary-700 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md mb-2">
                  <span>About the Company</span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                  Connecting Talent with Opportunity Across India
                </h2>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                <strong>BHAVIKA MANPOWER AND RECRUITMENT SERVICES</strong> is a premier workforce solutions and recruitment consultancy dedicated to connecting the right talent with the right opportunities. We bridge the gap between burgeoning enterprise demands and verified, skilled, semi-skilled, and professional manpower across North India and pan-India regions.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our comprehensive service breadth spans from large-scale blue-collar labor sourcing and contract staffing to white-collar permanent recruitment, turnkey project staffing, payroll management, and strict statutory labor compliance (EPF, ESIC, Minimum Wages). We enable businesses to scale seamlessly while minimizing overhead and legal liabilities.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Rapid 24-48 hr Workforce Deployment",
                  "100% Legal & Labor Law Compliance",
                  "Verified Candidate Background & Aadhaar",
                  "Tailored Sourcing for Turnkey Projects",
                  "End-to-End Payroll & Attendance Support",
                  "Dedicated Key Account Manager"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-bold text-sm px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all group"
                >
                  <span className="underline underline-offset-4 font-bold">Know More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#contact"
                  className="text-sm font-bold text-slate-700 hover:text-primary-700 flex items-center gap-1 transition"
                >
                  <span>Speak with our Director</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. OUR SERVICES SECTION (MATCHED TO REFERENCE IMAGE) */}
      {/* ------------------------------------------------------------- */}
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


      {/* ------------------------------------------------------------- */}
      {/* 7. WHY CHOOSE SECTION (MATCHED TO REFERENCE IMAGE) */}
      {/* ------------------------------------------------------------- */}
      <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading + Clean Minimalist Accordion */}
            <div className="lg:col-span-7">
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-8 sm:mb-10">
                Why Choose Bhavika?
              </h2>

              {/* Minimalist Border-Bottom Accordion List */}
              <div className="border-t border-[#0088cc]/30">
                {accordionData.map((item) => {
                  const isOpen = openAccordion === item.id
                  return (
                    <div
                      key={item.id}
                      className="border-b border-[#0088cc]/30 transition-colors"
                    >
                      <button
                        onClick={() => setOpenAccordion(isOpen ? -1 : item.id)}
                        className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
                      >
                        <span
                          className={`font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-colors ${
                            isOpen ? 'text-[#0088cc]' : 'text-slate-900 group-hover:text-[#0088cc]'
                          }`}
                        >
                          {item.title}
                        </span>
                        {isOpen ? (
                          <ChevronDown className="w-4 h-4 text-[#0088cc] rotate-180 transition-transform duration-200" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#0088cc] transition-transform duration-200" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="pb-4 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl animate-fadeIn">
                          <p>{item.content}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Construction Engineer with Blueprints Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85"
                  alt="Construction Engineer with Blueprints at Project Site"
                  className="w-full h-[460px] sm:h-[520px] md:h-[560px] object-cover object-center"
                />
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ------------------------------------------------------------- */}
      {/* 8. INDUSTRIES WE SERVE (BLUE BACKGROUND, 2x2 IMAGE CARDS) */}
      {/* ------------------------------------------------------------- */}
      <section id="industries" className="py-16 sm:py-20 lg:py-24 bg-primary-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-primary-200 font-bold text-xs uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              <span>Sectors & Domains</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-blue-100 text-sm sm:text-base">
              Providing customized, vetted workforce solutions mapped directly to critical growth industries across India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesList.map((ind, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-xl border border-white/20 h-[360px] flex flex-col justify-end p-6 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent group-hover:from-navy-950/95 transition-all duration-300" />

                <div className="relative z-10 space-y-2">
                  <span className="text-[11px] font-bold text-accent-amber uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs inline-block">
                    {ind.tag}
                  </span>
                  
                  <h3 className="font-heading font-bold text-xl text-white leading-tight">
                    {ind.title}
                  </h3>

                  <div className="w-12 h-1 bg-primary-400 rounded group-hover:w-20 transition-all duration-300" />

                  <p className="text-xs text-slate-300 leading-relaxed pt-1 line-clamp-2">
                    {ind.roles}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setQuoteModalOpen(true)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary-200 hover:text-white uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read More & Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 9. TOPS TALENTS AVAILABLE (MATCHED TO REFERENCE IMAGE) */}
      {/* ------------------------------------------------------------- */}
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


      {/* ------------------------------------------------------------- */}
      {/* 10. CLIENTELE SECTION (BLUE BACKGROUND, LOGO STRIP & STATS) */}
      {/* ------------------------------------------------------------- */}
      <section id="clientele" className="py-16 sm:py-20 bg-primary-800 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Our Clientele
            </h2>
            <p className="text-blue-100 text-sm sm:text-base">
              Trusted by leading infrastructure builders, manufacturing plants, logistics enterprises, and commercial facilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12 border-b border-primary-700 pb-10">
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-black text-white">5,000+</div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium mt-1">Workers Placed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-black text-white">150+</div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium mt-1">Corporate Clients</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-black text-white">98%</div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium mt-1">Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-black text-white">100%</div>
              <div className="text-xs sm:text-sm text-blue-200 font-medium mt-1">Statutory Compliance</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Apex Infra Projects", sector: "Infrastructure" },
              { name: "Bharat Industrial Corp", sector: "Manufacturing" },
              { name: "Metro Logistics Hub", sector: "Supply Chain" },
              { name: "Urban Buildcon Ltd", sector: "Real Estate" },
              { name: "Sigma Tech Solutions", sector: "Corporate Services" }
            ].map((client, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 text-primary-700 flex items-center justify-center font-bold text-sm mb-2 group-hover:bg-primary-700 group-hover:text-white transition-colors">
                  C{idx + 1}
                </div>
                <span className="font-heading font-bold text-slate-800 text-xs sm:text-sm">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 11. CONTACT US SECTION (MATCHED TO REFERENCE IMAGE) */}
      {/* ------------------------------------------------------------- */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading, Description & Contact Info */}
            <div className="lg:col-span-5">
              <h2 className="font-heading font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-5">
                Contact Us
              </h2>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8 max-w-md">
                Ready to streamline your construction workforce management? Get in touch with us today to learn more about how we can support your projects with reliable HR solutions.
              </p>

              <h3 className="font-heading font-extrabold text-xs tracking-wider text-slate-900 uppercase mb-5">
                CONTACT INFO
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Phone */}
                <div className="flex items-center gap-3 text-slate-800">
                  <Phone className="w-4 h-4 text-[#0088cc] flex-shrink-0" />
                  <a href="tel:+918882943975" className="hover:text-[#0088cc] transition font-medium">
                    +91 88829 43975
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-slate-800">
                  <Mail className="w-4 h-4 text-[#0088cc] flex-shrink-0" />
                  <a
                    href="mailto:bhavikamanpower@gmail.com"
                    className="text-[#0088cc] underline underline-offset-2 hover:opacity-80 transition font-medium"
                  >
                    bhavikamanpower@gmail.com
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 text-slate-700 leading-relaxed">
                  <Building2 className="w-4 h-4 text-[#0088cc] flex-shrink-0 mt-0.5" />
                  <span>
                    Bhavika Manpower and Recruitment Services, C1-58/F1, Building No. 58, Dilashad Extension Part 1, DLF, Sahibabad, Ghaziabad, Uttar Pradesh - 201005
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 sm:p-8">
                
                <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-6">
                  Fill the below form and share in your requirements
                </h3>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-6 rounded-xl text-center space-y-2 animate-fadeIn">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-lg">Thank You for Your Message! Our team will contact you shortly.</h4>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {formError && (
                      <div className="bg-red-50 text-red-700 text-xs p-3 rounded-lg border border-red-200">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Your Name */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          YOUR NAME <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:border-[#00a2ed] focus:outline-none text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          EMAIL <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@doe.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:border-[#00a2ed] focus:outline-none text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          PHONE <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="081 234 567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:border-[#00a2ed] focus:outline-none text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition"
                        />
                      </div>

                      {/* Business Name */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          BUSINESS NAME <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="XYZ Enterprises"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:border-[#00a2ed] focus:outline-none text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Industry Type */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          INDUSTRY TYPE <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={formData.industryType}
                          onChange={(e) => setFormData({ ...formData, industryType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:border-[#00a2ed] focus:outline-none text-xs sm:text-sm text-slate-800 transition bg-white"
                        >
                          <option value="">Select Industry</option>
                          <option value="Commercial Construction">Commercial Construction</option>
                          <option value="Residential Construction">Residential Construction</option>
                          <option value="Infrastructure and Public Works">Infrastructure and Public Works</option>
                          <option value="Industrial Construction">Industrial Construction</option>
                          <option value="Logistics & Warehousing">Logistics & Warehousing</option>
                          <option value="Manufacturing & Plant Staffing">Manufacturing & Plant Staffing</option>
                          <option value="Corporate & Office Staffing">Corporate & Office Staffing</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Location */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          LOCATION <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ghaziabad / Delhi NCR / Bangalore"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:border-[#00a2ed] focus:outline-none text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#00a2ed] hover:bg-[#0090d4] disabled:opacity-60 text-white font-bold text-xs sm:text-sm px-8 py-3 rounded shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
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

      {/* ------------------------------------------------------------- */}
      {/* 12. FOOTER (MATCHED TO REFERENCE IMAGE) */}
      {/* ------------------------------------------------------------- */}
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



      {/* ------------------------------------------------------------- */}
      {/* 13. QUICK QUOTE MODAL POPUP */}
      {/* ------------------------------------------------------------- */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition"
              aria-label="Close quote modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-primary-700 font-bold text-xs uppercase bg-blue-50 px-2.5 py-0.5 rounded mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Fast Turnaround
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                Request A Manpower Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tell us your requirement and receive an official cost estimate within 24 hours.
              </p>
            </div>

            {quoteSubmitted ? (
              <div className="bg-emerald-50 text-emerald-800 p-6 rounded-xl text-center space-y-2">
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 text-sm"
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-primary-600 focus:ring-1 focus:ring-primary-600 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Workforce Category Needed
                  </label>
                  <select
                    value={quoteFormData.requirementType}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, requirementType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-primary-600 text-sm bg-white"
                  >
                    <option value="Blue Collar Staffing">Blue Collar (Helpers, Operators, Labor)</option>
                    <option value="Grey Collar Staffing">Grey Collar (Supervisors, Techs, QC)</option>
                    <option value="White Collar Staffing">White Collar (HR, Accounts, Sales)</option>
                    <option value="Payroll & Compliance">Payroll & Statutory Compliance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Estimated Quantity of Workers
                  </label>
                  <select
                    value={quoteFormData.workforceCount}
                    onChange={(e) => setQuoteFormData({ ...quoteFormData, workforceCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-primary-600 text-sm bg-white"
                  >
                    <option value="1-10 Workers">1 - 10 Workers</option>
                    <option value="10-50 Workers">10 - 50 Workers</option>
                    <option value="50-200 Workers">50 - 200 Workers</option>
                    <option value="200+ Workers">200+ Large Workforce</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-3 rounded-lg shadow transition mt-2 text-sm"
                >
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 14. FLOATING QUICK CONTACT BUTTONS (WHATSAPP & PHONE) */}
      {/* ------------------------------------------------------------- */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/918882943975?text=Hello%20Bhavika%20Manpower,%20I%20have%20a%20manpower%20requirement."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          title="Chat on WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
        <a
          href="tel:+918882943975"
          className="w-12 h-12 rounded-full bg-primary-700 hover:bg-primary-800 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          title="Direct Call"
          aria-label="Call Bhavika Manpower"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

    </div>
  )
}
