import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Phone, Mail, MapPin, Clock } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar activeSection="contact" />


      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary-700 mb-6">
          <Phone className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Our Team</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Get in touch directly for immediate manpower deployment, permanent staffing queries, or corporate partnership.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-card border border-slate-200 text-left max-w-2xl mx-auto space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary-700 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">Phone Number</div>
              <a href="tel:+918882943975" className="text-lg font-bold text-slate-900 hover:text-primary-700">
                +91 88829 43975
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary-700 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">Official Email</div>
              <a href="mailto:bhavikamanpower@gmail.com" className="text-lg font-bold text-slate-900 hover:text-primary-700">
                bhavikamanpower@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary-700 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">Corporate Address</div>
              <p className="text-slate-700 font-medium leading-relaxed">
                C1-58/F1, Building No. 58, Dilashad Extension Part 1, DLF, Sahibabad, Ghaziabad, Uttar Pradesh - 201005
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-primary-700 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold uppercase">Operating Hours</div>
              <p className="text-slate-700 font-medium">Monday – Saturday: 9:00 AM – 7:00 PM</p>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/#contact"
              className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Fill Online Enquiry Form
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-navy-900 text-slate-400 py-6 text-center text-sm border-t border-slate-800">
        © 2026 Copyright Bhavika Manpower and Recruitment Services. All Rights Reserved.
      </footer>
    </div>
  )
}
