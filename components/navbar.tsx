"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, MessageSquare, FileText, Users, User, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Only show the theme toggle once mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Consultation", href: "/consultation", icon: <MessageSquare className="h-4 w-4 mr-2" /> },
    { name: "Medical Records", href: "/records", icon: <FileText className="h-4 w-4 mr-2" /> },
    { name: "Community Health", href: "/community", icon: <Users className="h-4 w-4 mr-2" /> },
    { name: "Dashboard", href: "/dashboard", icon: <User className="h-4 w-4 mr-2" /> },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">AI Doctor</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-2">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {mounted && (
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
