"use client"

import { useState } from "react"
import { Mail, Linkedin, Github, Phone, Send, Loader2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { Reveal } from "./Reveal"

export default function Footer() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    try {
      const subject = encodeURIComponent(`Contacto de ${formData.name}`)
      const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)
      window.location.href = `mailto:jimmyfariawd@hotmail.com?subject=${subject}&body=${body}`
      
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error(error)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer id="contact" className="bg-[#0a0a0a] py-8 md:py-10 border-t border-white/5 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            
            {/* Left: Branding & Message */}
            <div className="space-y-4 max-w-sm">
              <Reveal>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-xs font-mono">&lt;/&gt;</span>
                  </div>
                  <span className="text-white text-lg font-serif italic tracking-tight">Jimmy Faria.</span>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/jimmy-faria-a0492b3b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://github.com/Jimmy-Faria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: Direct Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              <Reveal delay={0.3}>
                <div className="space-y-2">
                  <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.25em]">Email</p>
                  <a href="mailto:jimmyfariawd@hotmail.com" className="text-white/80 hover:text-white transition-colors block text-base font-serif italic">
                    jimmyfariawd@hotmail.com
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="space-y-2">
                  <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.25em]">
                    {language === 'pt' ? 'Telemóvel' : 'Phone'}
                  </p>
                  <a href="tel:+351935773394" className="text-white/80 hover:text-white transition-colors block text-base font-serif italic">
                    +351 935 773 394
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="space-y-2">
                </div>
              </Reveal>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-[11px] font-mono tracking-widest uppercase">
              &copy; {new Date().getFullYear()} — JIMMY FARIA.
            </p>
            <p className="text-white/40 text-[11px] font-mono tracking-widest uppercase">
              {language === 'pt' ? 'Todos os direitos reservados' : 'All rights reserved'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
