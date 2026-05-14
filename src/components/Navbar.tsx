"use client"

import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-0 z-50 w-full bg-[#fcfcfc]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="group flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-[11px] font-bold text-white shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
            &lt;/&gt;
          </div>
          <div className="flex items-baseline gap-2 text-[#1a1a1a]">
            <span className="text-[1.8rem] leading-none tracking-tight">Jimmy</span>
            <span className="text-[1.8rem] leading-none tracking-tight">Goncalves</span>
          </div>
        </a>
        
        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-8 sm:flex">
            <a href="#" className="label-caps transition-colors hover:text-black">
              Início
            </a>
            <a href="#about" className="label-caps transition-colors hover:text-black">
              Sobre
            </a>
            <a href="#contact" className="label-caps transition-colors hover:text-black">
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-3 border-l border-black/10 pl-8">
            <button className="text-lg grayscale transition-all hover:grayscale-0" title="Português">
              🇵🇹
            </button>
            <button className="text-lg grayscale transition-all hover:grayscale-0" title="English">
              🇬🇧
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
