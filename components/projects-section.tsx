import { Code2 } from "lucide-react"

export function ProjectsSection() {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Code2 size={20} className="text-primary" />
        <h2 className="text-xl font-bold text-foreground">Recent Projects</h2>
      </div>
      <div className="space-y-3">
        <div className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition">
          <p className="font-medium text-foreground text-sm">E-commerce Platform</p>
          <p className="text-xs text-muted-foreground mt-1">Next.js, Stripe, PostgreSQL</p>
        </div>
        <div className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition">
          <p className="font-medium text-foreground text-sm">Task Management App</p>
          <p className="text-xs text-muted-foreground mt-1">React, Firebase, Tailwind</p>
        </div>
        <div className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition">
          <p className="font-medium text-foreground text-sm">Weather Dashboard</p>
          <p className="text-xs text-muted-foreground mt-1">React, API Integration</p>
        </div>
      </div>
    </div>
  )
}
