import { Zap } from "lucide-react"

export function SkillsSection() {
  const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"]
  const backendSkills = ["Node.js", "PostgreSQL", "Git", "REST APIs", "Firebase"]

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Zap size={24} className="text-primary" />
        Skills & Tech Stack
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-foreground mb-3 text-primary">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-3 text-primary">Backend & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {backendSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
