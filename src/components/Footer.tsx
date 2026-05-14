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
    <footer id="contact" className="bg-[#fcfcfc] py-24 border-t border-zinc-100 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left: Info */}
            <div className="space-y-12">
              <Reveal>
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-serif italic text-zinc-900 leading-tight">
                    {language === 'pt' ? 'Vamos criar algo ' : 'Let\'s create something '}
                    <span className="text-zinc-400 not-italic">{language === 'pt' ? 'memorável.' : 'memorable.'}</span>
                  </h2>
                  <p className="text-zinc-500 text-lg max-w-md leading-relaxed">
                    {language === 'pt' 
                      ? 'Tens uma ideia ou um projeto em mente? Estou sempre disponível para novos desafios e colaborações.' 
                      : 'Have an idea or a project in mind? I\'m always open to new challenges and collaborations.'}
                  </p>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={0.1}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <a href="mailto:jimmyfariawd@hotmail.com" className="group">
                      <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-2">Email</p>
                      <p className="text-zinc-900 group-hover:text-zinc-500 transition-colors">jimmyfariawd@hotmail.com</p>
                    </a>
                    <a href="tel:+351935773394" className="group">
                      <p className="text-zinc-400 text-xs font-mono uppercase tracking-widest mb-2">
                        {language === 'pt' ? 'Telemóvel' : 'Phone'}
                      </p>
                      <p className="text-zinc-900 group-hover:text-zinc-500 transition-colors">+351 935 773 394</p>
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex gap-6 pt-4">
                    <a
                      href="https://www.linkedin.com/in/jimmy-faria-a0492b3b7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://github.com/Jimmy-Faria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right: Form */}
            <Reveal delay={0.3}>
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl border border-zinc-100 shadow-sm space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 ml-1">
                      {language === 'pt' ? 'Nome' : 'Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'pt' ? 'Como te chamas?' : 'Your name?'}
                      className="w-full bg-zinc-50 border border-transparent focus:border-zinc-200 focus:bg-white px-5 py-4 rounded-xl outline-none transition-all text-zinc-900 placeholder:text-zinc-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={language === 'pt' ? 'O teu  email' : 'Your  email'}
                      className="w-full bg-zinc-50 border border-transparent focus:border-zinc-200 focus:bg-white px-5 py-4 rounded-xl outline-none transition-all text-zinc-900 placeholder:text-zinc-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 ml-1">
                      {language === 'pt' ? 'Mensagem' : 'Message'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === 'pt' ? 'Em que posso ajudar?' : 'How can I help you?'}
                      className="w-full bg-zinc-50 border border-transparent focus:border-zinc-200 focus:bg-white px-5 py-4 rounded-xl outline-none transition-all text-zinc-900 placeholder:text-zinc-300 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-zinc-900 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      <span>{language === 'pt' ? 'Enviar mensagem' : 'Send message'}</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <p className="text-center text-sm text-green-600 font-medium animate-in fade-in slide-in-from-bottom-2">
                    {language === 'pt' ? 'Abrindo cliente de email...' : 'Opening email client...'}
                  </p>
                )}
              </form>
            </Reveal>

          </div>

          <div className="mt-24 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs font-mono">&lt;/&gt;</span>
              </div>
              <span className="text-zinc-900 font-bold tracking-tight uppercase">Jimmy Faria.</span>
            </div>
            
            <p className="text-zinc-400 text-sm">
              &copy; {new Date().getFullYear()} — Built with Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
