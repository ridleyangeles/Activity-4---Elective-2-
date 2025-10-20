import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Direct Contact */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Quick Links</h2>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Email</p>
            <a href="mailto:alex@example.com" className="text-primary hover:underline font-medium">
              alex@example.com
            </a>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Discord</p>
            <p className="text-foreground font-medium">alex#1234</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Location</p>
            <p className="text-foreground font-medium">College Town, USA 🎓</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Follow Me</h2>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition text-sm font-medium"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition text-sm font-medium"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition text-sm font-medium"
          >
            <Twitter size={18} />
            <span>Twitter</span>
          </a>
          <a
            href="mailto:alex@example.com"
            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition text-sm font-medium"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Response Time */}
      <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
        <p className="text-sm text-foreground">
          <span className="font-semibold">Response time:</span> Usually within 24 hours ⚡
        </p>
      </div>
    </div>
  )
}
