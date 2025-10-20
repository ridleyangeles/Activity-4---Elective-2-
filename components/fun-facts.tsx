export function FunFacts() {
  const facts = [
    "☕ I run on coffee and Stack Overflow",
    "🎮 I love gaming and sometimes get inspired by game UIs",
    "📚 Currently reading 'Clean Code' by Robert C. Martin",
    "🌙 I'm a night owl - best coding happens after midnight",
    "🎵 I code better with lo-fi hip hop in the background",
  ]

  return (
    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 rounded-xl p-6">
      <h2 className="text-xl font-bold text-foreground mb-4">Fun Facts About Me</h2>
      <ul className="space-y-2 text-foreground text-sm">
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}
