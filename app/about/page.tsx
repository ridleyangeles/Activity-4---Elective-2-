"use client"

import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Navigation */}
      <nav className="border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/about" className="font-bold text-lg hover:text-blue-600 dark:hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Get to know me better and learn about my journey into tech
            </p>
          </div>

          {/* Journey Section */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6">My Journey</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-bold text-lg mb-2">Started Learning to Code</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">Freshman Year</p>
                <p className="text-sm leading-relaxed">
                I discovered my passion for coding during my first semester, starting with Java and 
                eventually diving into web development such as HTML, CSS, and Javascript. It’s been challenging, but incredibly rewarding.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-lg mb-2">First Framework Stepup</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">Sophomore Year</p>
                <p className="text-sm leading-relaxed">
                  Building my first web application using Vue.js for the frontend and Laravel for the backend was an exciting challenge. 
                  It helped me understand how modern frameworks work together to create dynamic, 
                  responsive, and efficient web experiences.
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="font-bold text-lg mb-2">Step up to Capstone</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-2">Junior Year - Present</p>
                <p className="text-sm leading-relaxed">
                  Entering the capstone phase marks a big step in applying everything I’ve learned.
                   It’s a chance to turn ideas into a real project, collaborate with a team, 
                   and build something meaningful that showcases my growth and skills in IT.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Freelance Web Developer</h3>
                  <span className="text-sm text-slate-600 dark:text-slate-400">2024 - Present</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">Work from home</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  I build responsive and user-friendly websites using Vue.js for dynamic interfaces and vanilla CSS
                   for clean, custom styling that keeps every project lightweight and efficient.
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Freelance Video Editor</h3>
                  <span className="text-sm text-slate-600 dark:text-slate-400">2021 - Present</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">Work from home</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  I create engaging gameplay videos using Alight Motion and CapCut, focusing on smooth transitions,
                   creative effects, and eye-catching edits that bring gaming moments to life.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-lg">Frontend Programming Language</h3>
                <div className="space-y-3">
                  {[
                    { name: "HTML", level: 90 },
                    { name: "CSS", level: 85 },
                    { name: "Javascript", level: 30 }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-lg">Frontend Frameworks</h3>
                <div className="space-y-3">
                  {[
                    { name: "Vue.js", level: 85 },
                    { name: "Next.js", level: 20 },
                    { name: "Tailwind.js", level: 20 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
