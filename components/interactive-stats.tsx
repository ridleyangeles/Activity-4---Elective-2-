"use client"

import { useState, useEffect } from "react"

export function InteractiveStats() {
  const [currentProject, setCurrentProject] = useState(0)
  const [stats, setStats] = useState({
    projects: 0,
    commits: 0,
    coffees: 0,
  })
  const [clicked, setClicked] = useState<string | null>(null)

  const projects = [
    "Building a chat app with Next.js",
    "Learning React hooks deeply",
    "Working on a portfolio project",
    "Debugging some CSS issues 😅",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const incrementStat = (stat: keyof typeof stats) => {
    setStats((prev) => ({
      ...prev,
      [stat]: prev[stat] + 1,
    }))
    setClicked(stat)
    setTimeout(() => setClicked(null), 600)
  }

  return (
    <div className="space-y-2">
      <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg">
        <p className="text-xs text-muted-foreground mb-1">Currently:</p>
        <p className="text-sm font-medium text-foreground">{projects[currentProject]}</p>
      </div>

      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Click to celebrate!</p>
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => incrementStat("projects")}
          className={`p-3 rounded-lg border-2 transition-all duration-300 ${
            clicked === "projects"
              ? "scale-110 bg-primary/30 border-primary animate-pulse"
              : "bg-muted border-border hover:border-primary"
          }`}
        >
          <div className="text-2xl font-bold text-primary">{stats.projects}</div>
          <div className="text-xs text-muted-foreground mt-1">Projects</div>
        </button>
        <button
          onClick={() => incrementStat("commits")}
          className={`p-3 rounded-lg border-2 transition-all duration-300 ${
            clicked === "commits"
              ? "scale-110 bg-primary/30 border-primary animate-pulse"
              : "bg-muted border-border hover:border-primary"
          }`}
        >
          <div className="text-2xl font-bold text-primary">{stats.commits}</div>
          <div className="text-xs text-muted-foreground mt-1">Commits</div>
        </button>
        <button
          onClick={() => incrementStat("coffees")}
          className={`p-3 rounded-lg border-2 transition-all duration-300 ${
            clicked === "coffees"
              ? "scale-110 bg-primary/30 border-primary animate-pulse"
              : "bg-muted border-border hover:border-primary"
          }`}
        >
          <div className="text-2xl font-bold text-primary">{stats.coffees}</div>
          <div className="text-xs text-muted-foreground mt-1">Coffees ☕</div>
        </button>
      </div>
    </div>
  )
}
