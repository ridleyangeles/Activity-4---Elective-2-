import { MessageSquare } from "lucide-react"

export function ContactHeader() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-foreground mb-3 flex items-center gap-2">
        <MessageSquare size={32} className="text-primary" />
        Let's Connect!
      </h1>
      <p className="text-lg text-muted-foreground">
        Have a project idea, want to collaborate, or just want to chat about web dev? Hit me up! 👋
      </p>
    </div>
  )
}
