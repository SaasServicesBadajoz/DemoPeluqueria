"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-16">
      <div className="flex items-center justify-between">
        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-off-white/90">
          <Link href="#inicio" className="hover:text-off-white transition-colors">
            Inicio
          </Link>
          <Link href="#servicios" className="hover:text-off-white transition-colors">
            Servicios
          </Link>
          <Link href="#experiencia" className="hover:text-off-white transition-colors">
            Experiencia
          </Link>
          <Link href="#nosotros" className="hover:text-off-white transition-colors">
            Sobre nosotros
          </Link>
        </nav>

        {/* Logo */}
        <div className="font-serif text-2xl md:text-3xl font-semibold text-off-white tracking-wide">
          MUSSAS
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link
            href="#reserva"
            className="border border-off-white text-off-white px-6 py-2 text-sm rounded-full hover:bg-off-white hover:text-dark-brown transition-all"
          >
            Pedir cita
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-off-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-brown/95 backdrop-blur-sm px-6 py-6">
          <nav className="flex flex-col gap-4 text-off-white">
            <Link href="#inicio" className="hover:text-medium-taupe transition-colors" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="#servicios" className="hover:text-medium-taupe transition-colors" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </Link>
            <Link href="#experiencia" className="hover:text-medium-taupe transition-colors" onClick={() => setIsMenuOpen(false)}>
              Experiencia
            </Link>
            <Link href="#nosotros" className="hover:text-medium-taupe transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sobre nosotros
            </Link>
            <Link
              href="#reserva"
              className="border border-off-white text-off-white px-6 py-2 text-sm rounded-full text-center hover:bg-off-white hover:text-dark-brown transition-all mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pedir cita
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
