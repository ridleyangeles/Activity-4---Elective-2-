"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  return (
    <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-foreground hover:text-primary transition">
          alex.dev
        </Link>
        <div className="flex gap-4 items-center">
          <div className="hidden sm:flex gap-6">
            <Link href="/" className="text-sm text-foreground hover:text-primary transition">
              home
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-primary transition">
              about
            </Link>
            <Link href="/contact" className="text-sm text-foreground hover:text-primary transition">
              contact
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
