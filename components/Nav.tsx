'use client'

import { useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-creme border-b-2 border-dark">
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="font-black text-lg uppercase tracking-[-0.02em] text-dark"
          onClick={close}
        >
          Kaled Barreto
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-xs font-semibold uppercase tracking-[0.1em] text-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-full h-0.5 bg-dark origin-center transition-all duration-200 ${
              isOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-dark transition-all duration-200 ${
              isOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-dark origin-center transition-all duration-200 ${
              isOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col items-center gap-10" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="font-black text-white uppercase tracking-tight hover:text-bauhaus-yellow transition-colors duration-150"
                  style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
