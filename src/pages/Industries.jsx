import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Factory, HardHat, Building, Truck } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Industries() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar activeSection="industries" />


      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary-700 mb-6">
          <Factory className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Industries We Serve</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Providing specialized talent across vital growth sectors of the Indian and global economy.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-primary-700 rounded-lg"><HardHat className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg mb-1">Construction & Infrastructure</h4>
              <p className="text-slate-600 text-sm">Site engineers, masons, electricians, project managers & heavy labor.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-primary-700 rounded-lg"><Factory className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg mb-1">Manufacturing & Industrial</h4>
              <p className="text-slate-600 text-sm">Machine operators, assembly line workers, plant supervisors & QC inspectors.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-primary-700 rounded-lg"><Building className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg mb-1">Corporate & Office Staffing</h4>
              <p className="text-slate-600 text-sm">Accounts, HR, administration, sales, customer care & executive talent.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-primary-700 rounded-lg"><Truck className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg mb-1">Logistics & Warehousing</h4>
              <p className="text-slate-600 text-sm">Forklift operators, pickers, packers, delivery drivers & inventory handlers.</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Link to="/" className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
            Explore Details on Home
          </Link>
        </div>
      </main>

      <footer className="bg-navy-900 text-slate-400 py-6 text-center text-sm border-t border-slate-800">
        © 2026 Copyright Bhavika Manpower and Recruitment Services. All Rights Reserved.
      </footer>
    </div>
  )
}
