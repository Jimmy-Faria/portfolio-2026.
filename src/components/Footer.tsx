"use client"

import { useState } from "react"
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function Footer() {
  const { language } = useLanguage()
  const [msgEmail, setMsgEmail] = useState("")

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Contacto portfolio")
    const body = encodeURIComponent(`Email de resposta: ${msgEmail}`)
    window.location.href = `mailto:jimmyfariawd@hotmail.com?subject=${subject}&body=${body}`
    setMsgEmail("")
  }

  return (
    <footer id="contact" className="bg-[#1a1a1a] py-16 md:py-20 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">

          {/* Left: Contacts */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-white">
              {language === 'pt' ? 'Contactos' : 'Contacts'}
            </h2>
            <div className="space-y-6">
              <a href="mailto:jimmyfariawd@hotmail.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center shrink-0 group-hover:border-white/60 transition-colors">
                  <Mail size={16} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-1">Email</p>
                  <p className="text-white/80 group-hover:text-white transition-colors text-sm">jimmyfariawd@hotmail.com</p>
                </div>
              </a>
              <a href="tel:+351935773394" className="flex items-start gap-4 group">
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center shrink-0 group-hover:border-white/60 transition-colors">
                  <Phone size={16} className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-1">
                    {language === 'pt' ? 'Telemóvel' : 'Mobile'}
                  </p>
                  <p className="text-white/80 group-hover:text-white transition-colors text-sm">+351 935 773 394</p>
                </div>
              </a>
            </div>
          </div>

          {/* Center: CTA */}
          <div className="flex flex-col items-center text-center space-y-8">
            <div>
              <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">
                {language === 'pt' ? 'Vamos trabalhar juntos?' : 'Let\'s work together?'}
              </p>
              <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                {language === 'pt' ? 'Vamos ' : "Let's "}
                <span className="italic">{language === 'pt' ? 'conversar' : 'talk'}</span>
              </h3>
            </div>
            <form onSubmit={handleQuickSend} className="w-full flex items-center gap-0 border border-white/20 rounded-full overflow-hidden">
              <input
                type="email"
                required
                value={msgEmail}
                onChange={(e) => setMsgEmail(e.target.value)}
                placeholder={language === 'pt' ? 'O seu email' : 'Your email'}
                className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/30 outline-none"
              />
              <button
                type="submit"
                className="w-11 h-11 bg-white rounded-full flex items-center justify-center shrink-0 m-0.5 hover:bg-white/90 transition-colors"
              >
                <Send size={14} className="text-black" />
              </button>
            </form>
          </div>

          {/* Right: Branding + Socials */}
          <div className="flex flex-col items-center gap-6 md:items-end md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm font-mono">&lt;/&gt;</span>
              </div>
              <span className="text-white text-xl font-serif italic">Jimmy Faria</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/jimmy-faria-a0492b3b7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-all"
              >
                <Linkedin size={15} className="text-white/70" />
              </a>
              <a
                href="https://github.com/Jimmy-Faria"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-all"
              >
                <Github size={15} className="text-white/70" />
              </a>
            </div>

            <p className="text-white/30 text-[10px] font-semibold tracking-[0.2em] uppercase text-center md:text-right">
              COPYRIGHT © {new Date().getFullYear()} — JIMMY FARIA.<br />
              {language === 'pt' ? 'TODOS OS DIREITOS RESERVADOS.' : 'ALL RIGHTS RESERVED.'}
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
