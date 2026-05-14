"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ChevronUp } from "lucide-react"

export default function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8,
        pointerEvents: isVisible ? "auto" : "none" 
      }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center"
    >
      <button
        onClick={scrollToTop}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 transition-transform hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
      >
        {/* SVG de Progresso Circular */}
        <svg className="absolute -rotate-90" width="56" height="56">
          <circle
            cx="28"
            cy="28"
            r="26"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            className="text-black/5"
          />
          <motion.circle
            cx="28"
            cy="28"
            r="26"
            stroke="currentColor"
            strokeWidth="2"
            fill="transparent"
            strokeDasharray="163.36"
            style={{ pathLength: scrollYProgress }}
            className="text-black transition-all duration-200"
          />
        </svg>

        {/* Ícone de Seta */}
        <ChevronUp 
          size={20} 
          className="relative z-10 text-black/40 transition-colors group-hover:text-black" 
        />
      </button>
    </motion.div>
  )
}
