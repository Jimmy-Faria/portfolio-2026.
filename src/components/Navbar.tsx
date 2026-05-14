"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function Navbar() {
  const { language, setLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: language === 'pt' ? 'Início' : 'Home' },
    { href: "/about", label: language === 'pt' ? 'Sobre' : 'About' },
    { href: "#contact", label: language === 'pt' ? 'Contacto' : 'Contact' },
  ]

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed top-0 z-50 w-full bg-[#fcfcfc]/80 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-[11px] font-bold text-white shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
              &lt;/&gt;
            </div>
            <div className="flex items-baseline gap-1.5 text-[#1a1a1a]">
              <span className="text-[1.4rem] leading-none tracking-tight">Jimmy</span>
              <span className="text-[1.4rem] leading-none tracking-tight">Goncalves</span>
            </div>
          </a>
          
          <div className="flex items-center gap-6">
            {/* Desktop links */}
            <div className="hidden items-center gap-8 sm:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="label-caps transition-colors hover:text-black">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Language switcher */}
            <div className="flex items-center gap-3 border-l border-black/10 pl-6">
              <button 
                onClick={() => setLanguage('pt')}
                className={`text-lg transition-all duration-300 relative group/flag ${language === 'pt' ? 'grayscale-0 scale-110' : 'grayscale hover:grayscale-0 hover:scale-110 active:scale-95'}`} 
                title="Português"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover/flag:-translate-y-1 block">🇵🇹</span>
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`text-lg transition-all duration-300 relative group/flag ${language === 'en' ? 'grayscale-0 scale-110' : 'grayscale hover:grayscale-0 hover:scale-110 active:scale-95'}`} 
                title="English"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover/flag:-translate-y-1 block">🇬🇧</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-[#fcfcfc]/95 backdrop-blur-md border-b border-black/5 sm:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 text-base font-semibold text-[#1a1a1a] border-b border-black/[0.04] last:border-0 hover:pl-2 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
