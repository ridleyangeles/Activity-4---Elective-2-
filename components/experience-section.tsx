import { Code } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Freelance Web Developer",
      period: "2023 - Present",
      description:
        "Built websites for local businesses and small startups. Learned a lot about client communication and real-world project management.",
    },
    {
      title: "University Coding Club",
      period: "2022 - Present",
      description:
        "Co-founded the web development club at my university. We meet weekly to work on projects and help other students learn.",
    },
    {
      title: "Personal Projects",
      period: "Ongoing",
      description:
        "Built a task manager, weather app, and e-commerce platform. Each project taught me something new about web development.",
    },
  ]

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Code size={24} className="text-primary" />
        Projects & Experience
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
            <p className="text-sm text-muted-foreground">{exp.period}</p>
            <p className="text-foreground text-sm mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
