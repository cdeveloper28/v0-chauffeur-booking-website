'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Clock } from 'lucide-react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navigationLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#fleet', label: 'Fleet' },
    { href: '#booking', label: 'Book Now' },
  ]

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/98 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info Bar - Desktop Only */}
        <div className="hidden lg:flex justify-end gap-6 py-3 text-xs text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-primary" />
            <span>+1 (555) 000-0000</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-primary" />
            <span>24/7 Available</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="h-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="Elite Chauffeur Home"
          >
            <div className="w-10 h-10 rounded-sm  flex items-center justify-center text-primary-foreground font-bold text-lg font-serif group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
              <img src="/favicon.png" alt="Elite Chauffeur" className="w-10 h-10" />
            </div>
            <span className="hidden sm:inline text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-200">
              Elite Chauffeur
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-all duration-200 group ${
                  link.label === 'Book Now'
                    ? 'px-4 py-2 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                {link.label !== 'Book Now' && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-primary to-primary/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 text-foreground hover:bg-secondary/50 rounded-sm transition-colors duration-200 flex items-center justify-center"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden bg-secondary/30 border-t border-border/50 animate-in slide-in-from-top-2 duration-300"
          >
            <div className="px-4 py-6 space-y-2">
              <div className="pb-4 mb-4 border-b border-border/50 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Phone size={14} className="text-primary" />
                  <span>+1 (555) 000-0000</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock size={14} className="text-primary" />
                  <span>24/7 Available</span>
                </div>
              </div>

              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-sm font-medium rounded-sm transition-all duration-200 ${
                    link.label === 'Book Now'
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
