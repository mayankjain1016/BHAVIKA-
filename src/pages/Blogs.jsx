import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Calendar, User } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Blogs() {
  const blogs = [
    {
      title: "How to Optimize Industrial Staffing for Peak Seasons in India",
      date: "August 10, 2026",
      author: "Bhavika HR Advisory",
      excerpt: "Key strategies for managing blue-collar workforce turnarounds, statutory safety compliances, and shift planning."
    },
    {
      title: "Statutory Labor Compliance 2026: Essential Checklist for Employers",
      date: "July 28, 2026",
      author: "Compliance Cell",
      excerpt: "Navigating EPF, ESIC, minimum wage revisions, and occupational safety norms across North India industrial hubs."
    },
    {
      title: "Bridging the Gap: Why Structured Grey-Collar Hiring is Booming",
      date: "July 15, 2026",
      author: "Workforce Insights",
      excerpt: "Why quality inspectors, store supervisors, and site technicians are in highest demand across manufacturing."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar activeSection="blogs" />


      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary-700 mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Industry Insights & Articles</h1>
          <p className="text-slate-600 max-w-xl mx-auto">Latest updates, staffing trends, and workforce management best practices.</p>
        </div>

        <div className="space-y-6">
          {blogs.map((b, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {b.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {b.author}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 hover:text-primary-700 transition cursor-pointer mb-2">{b.title}</h3>
              <p className="text-slate-600 text-sm">{b.excerpt}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/" className="inline-block bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
            Back to Home
          </Link>
        </div>
      </main>

      <footer className="bg-navy-900 text-slate-400 py-6 text-center text-sm border-t border-slate-800">
        © 2026 Copyright Bhavika Manpower and Recruitment Services. All Rights Reserved.
      </footer>
    </div>
  )
}
