"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Reveal } from "./Reveal"
import { Mail, Linkedin, Github, Send, X } from "lucide-react"

export default function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (field: "name" | "email" | "message", value: string) => {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Contacto portfolio - ${formData.name || "Novo contacto"}`)
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )

    window.location.href = `mailto:jimmyfariawd@hotmail.com?subject=${subject}&body=${body}`
  }

  return (
    <footer id="contact" className="bg-[#fcfcfc] border-t border-black/5 py-24 sm:py-32">
      <Reveal>
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setIsFormOpen((currentState) => !currentState)}
              className="group inline-flex items-center gap-4 rounded-full border border-black/8 bg-white/80 px-6 py-3 text-left shadow-[0_18px_40px_rgba(26,26,26,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-black/14 hover:shadow-[0_24px_52px_rgba(26,26,26,0.09)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eef3fb] text-[#6d8fc8] transition-transform duration-300 group-hover:scale-105">
                {isFormOpen ? <X size={18} /> : <Mail size={18} />}
              </span>
              <span>
                <span className="block text-3xl tracking-tight text-[#1a1a1a] sm:text-4xl">
                  Vamos <span className="font-medium text-black">conversar</span>
                </span>
                <span className="mt-1 block text-sm text-black/48">Abrir formulario de contacto</span>
              </span>
            </button>
            <p className="text-lg text-black/60 sm:text-xl">jimmyfariawd@hotmail.com</p>
          </div>

          <AnimatePresence initial={false}>
            {isFormOpen ? (
              <motion.div
                initial={{ opacity: 0, y: 18, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 12, height: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-3xl overflow-hidden"
              >
                <form onSubmit={handleSubmit} className="contact-panel grid gap-5 rounded-[2rem] p-6 text-left sm:grid-cols-2 sm:p-8">
                  <div className="sm:col-span-1">
                    <label htmlFor="contact-name" className="label-caps mb-2 block">Nome</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(event) => handleChange("name", event.target.value)}
                      placeholder="O teu nome"
                      className="contact-field"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="contact-email" className="label-caps mb-2 block">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => handleChange("email", event.target.value)}
                      placeholder="teuemail@exemplo.com"
                      className="contact-field"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className="label-caps mb-2 block">Mensagem</label>
                    <textarea
                      id="contact-message"
                      rows={6}
                      value={formData.message}
                      onChange={(event) => handleChange("message", event.target.value)}
                      placeholder="Conta-me o que precisas, a ideia do projeto ou o contexto."
                      className="contact-field resize-none"
                    />
                  </div>
                  <div className="sm:col-span-2 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <p className="max-w-xl text-sm leading-relaxed text-black/48">
                      Este formulario abre o teu cliente de email ja com a mensagem preparada, para o contacto ficar rapido e limpo.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black"
                    >
                      Enviar mensagem
                      <Send size={15} />
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="flex items-center gap-8 pt-8">
            <a
              href="https://linkedin.com/in/jimmy-goncalves"
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps flex items-center gap-2 transition-colors hover:text-[#1a1a1a]"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/hyngux"
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps flex items-center gap-2 transition-colors hover:text-[#1a1a1a]"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </Reveal>
      
      <div className="mt-24 text-center">
        <p className="label-caps text-black/20">
          © {new Date().getFullYear()} — Criado com Next.js
        </p>
      </div>
    </footer>
  )
}

