"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Home() {
  const [stats, setStats] = useState({ projects: 0, commits: 0, coffees: 0 })

  const incrementStat = (key: keyof typeof stats) => {
    setStats((prev) => ({ ...prev, [key]: prev[key] + 1 }))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex gap-6">
            <Link href="/" className="font-bold text-lg hover:text-blue-600 dark:hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Profile Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
              <img src="/2x2.png" alt="Profile" className="w-full rounded-lg mb-4 object-cover h-48" />
              <h1 className="text-2xl font-bold mb-2">Ridley Angeles</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                IT Student | Aspiring Web Developer | Filipino
              </p>
              <p className="text-sm leading-relaxed mb-6">
                Tech-savvy individual skilled in system management and software development, focused on efficiency, innovation, and continuous learning.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                <a
                  href="https://github.com/ridleyangeles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-900 dark:text-slate-100 hover:text-white rounded-lg transition"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ridley-angeles-194741377/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-900 dark:text-slate-100 hover:text-white rounded-lg transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:angelesridley@gmail.com"
                  className="p-2 bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-900 dark:text-slate-100 hover:text-white rounded-lg transition"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Interactive Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-lg p-6 border border-blue-200 dark:border-slate-700">
              <h2 className="text-lg font-bold mb-4">Click to celebrate!</h2>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => incrementStat("projects")}
                  className="bg-white dark:bg-slate-700 p-4 rounded-lg hover:scale-105 transition-transform active:scale-95 border border-slate-200 dark:border-slate-600"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.projects}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Projects</div>
                </button>
                <button
                  onClick={() => incrementStat("commits")}
                  className="bg-white dark:bg-slate-700 p-4 rounded-lg hover:scale-105 transition-transform active:scale-95 border border-slate-200 dark:border-slate-600"
                >
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.commits}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Commits</div>
                </button>
                <button
                  onClick={() => incrementStat("coffees")}
                  className="bg-white dark:bg-slate-700 p-4 rounded-lg hover:scale-105 transition-transform active:scale-95 border border-slate-200 dark:border-slate-600"
                >
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{stats.coffees}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Coffees</div>
                </button>
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
              <h2 className="text-lg font-bold mb-4">Recent Projects</h2>
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 transition cursor-pointer">
                  <h3 className="font-semibold text-sm">Therapath: Mental Health Appointment & Consultation System</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Vue.js, Laravel, SQL</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 transition cursor-pointer">
                  <h3 className="font-semibold text-sm">CommEase: Community Service Management System</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Vue.js, Laravel, SQL</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 transition cursor-pointer">
                  <h3 className="font-semibold text-sm">Eventify: Event Management System</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Vue.js, PHP, XAMMP</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 transition cursor-pointer">
                  <h3 className="font-semibold text-sm">Census Digital Survey System</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Java</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
              <h2 className="text-lg font-bold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "Vue.js", "Tailwind", "JavaScript", "Next.js", "Git"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
