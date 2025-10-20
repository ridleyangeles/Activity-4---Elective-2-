import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function ProfileCard() {
  return (
    <div className="md:col-span-1 space-y-6">
      {/* Profile Picture */}
      <div className="w-full aspect-square rounded-xl overflow-hidden bg-muted border-2 border-border">
        <img src="/professional-profile.png" alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Name and Status */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Alex Johnson</h1>
        <p className="text-sm text-muted-foreground">CS Student @ University</p>
      </div>

      {/* Bio */}
      <p className="text-sm leading-relaxed text-foreground">
        Hey! I'm a college student learning web dev. I love building cool stuff with React and Next.js. Always open to
        learning new things and collaborating on projects.
      </p>

      {/* Social Links */}
      <div className="flex gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition"
          aria-label="Twitter"
        >
          <Twitter size={18} />
        </a>
        <a
          href="mailto:alex@example.com"
          className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  )
}
