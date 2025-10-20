import { BookOpen } from "lucide-react"

export function JourneySection() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <BookOpen size={24} className="text-primary" />
          My Journey
        </h2>
        <p className="text-base leading-relaxed text-foreground mb-3">
          I started learning to code during my first year of college because I wanted to understand how websites
          actually work. What started as curiosity quickly became an obsession. I spent countless nights debugging code,
          watching tutorials, and building random projects just for fun.
        </p>
        <p className="text-base leading-relaxed text-foreground mb-3">
          Now I'm in my junior year, and I've built everything from simple landing pages to full-stack applications. I'm
          still learning something new every day, and honestly, that's the best part about being a developer.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          My goal is to land an internship at a cool tech company and eventually build products that actually help
          people. I'm also really into open source and love contributing to projects I use.
        </p>
      </div>
    </div>
  )
}
