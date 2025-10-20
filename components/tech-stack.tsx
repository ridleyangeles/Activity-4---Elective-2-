export function TechStack() {
  const technologies = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Git", "PostgreSQL", "Figma"]

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-xl font-bold text-foreground mb-4">Tech I Use</h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30 hover:scale-105 transition-transform cursor-pointer"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
