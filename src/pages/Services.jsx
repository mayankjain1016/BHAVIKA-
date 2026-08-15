import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Briefcase } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar activeSection="services" />


      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary-700 mb-6">
          <Briefcase className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Comprehensive Services</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          From temporary project staffing to permanent executive recruitment, statutory compliance, and end-to-end payroll management.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 text-lg mb-2">Temporary & Project Hiring</h4>
            <p className="text-slate-600 text-sm">Flexible workforce supply on contract for peak loads, turnarounds, and projects.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 text-lg mb-2">Permanent Recruitment</h4>
            <p className="text-slate-600 text-sm">Rigorous sourcing, screening, and placement for full-time corporate & technical roles.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 text-lg mb-2">Compliance & Legal Assurance</h4>
            <p className="text-slate-600 text-sm">100% adherence to Indian labor laws, PF, ESIC, minimum wages, and audit readiness.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 text-lg mb-2">Payroll Management</h4>
            <p className="text-slate-600 text-sm">Timely salary disbursement, payslips, tax deductions, and customized reporting.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link to="/" className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
            View on Interactive Home
          </Link>
        </div>
      </main>

      <footer className="bg-navy-900 text-slate-400 py-6 text-center text-sm border-t border-slate-800">
        © 2026 Copyright Bhavika Manpower and Recruitment Services. All Rights Reserved.
      </footer>
    </div>
  )
}
