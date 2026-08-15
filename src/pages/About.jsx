import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Building2, CheckCircle2, Phone, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar activeSection="about" />


      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary-700 mb-6">
          <Building2 className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">About Bhavika Manpower</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          We are a premier manpower supply and recruitment consultancy providing reliable workforce solutions across industrial, construction, logistics, and corporate domains.
        </p>
        <div className="bg-white p-8 rounded-2xl shadow-card border border-slate-200 text-left max-w-2xl mx-auto space-y-4">
          <h3 className="font-bold text-slate-900 text-xl border-b pb-2">Company Overview</h3>
          <p className="text-slate-600">
            <strong>Headquarters:</strong> C1-58/F1, Building No. 58, Dilashad Extension Part 1, DLF, Sahibabad, Ghaziabad, Uttar Pradesh - 201005
          </p>
          <p className="text-slate-600">
            <strong>Contact:</strong> +91 88829 43975 | bhavikamanpower@gmail.com
          </p>
          <div className="pt-4">
            <Link
              to="/"
              className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              Explore Full Home Page
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
