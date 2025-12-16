"use client"

import { Home, User, LogIn, FileText } from "lucide-react"
import Link from "next/link"

// Simple top navigation bar aligned with header content
export function Menu() {
  const openSignIn = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-signin"))
    }
  }
  const baseLink =
    "inline-flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-white transition-all duration-200 border-b-2 border-transparent hover:border-gold hover:text-gold hover:bg-gold/20 hover:scale-105 hover:shadow-lg hover:shadow-gold/20"

  return (
    <nav className="flex items-center justify-end gap-5 ml-auto h-full pr-10 flex-1">
      <Link href="/" className={baseLink}>
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>
      <Link
        href="https://exam-1-steven-zheng.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={baseLink}
      >
        <FileText className="h-4 w-4" />
        <span>Exam 1</span>
      </Link>
      <Link
        href="https://github.com/SawceCodes/EXAM-1---Steven-Zheng"
        target="_blank"
        rel="noopener noreferrer"
        className={baseLink}
      >
        <User className="h-4 w-4" />
        <span>Git 1</span>
      </Link>
      <div className="mx-2 h-6 w-px bg-gold-dark" />
      <button type="button" onClick={openSignIn} className={baseLink}>
        <LogIn className="h-4 w-4" />
        <span>Sign in</span>
      </button>
    </nav>
  )
}

