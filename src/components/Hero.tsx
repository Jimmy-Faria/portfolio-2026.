"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import SomethingMoving from "./SomethingMoving"

const STRENGTHS = ["landing pages", "web apps", "websites"]

export default function Hero() {
  const { language } = useLanguage()
  const [strengthIndex, setStrengthIndex] = useState(0)
  const [typedText, setTypedText] = useState("")

  useEffect(() => {
    const currentStrength = STRENGTHS[strengthIndex]
    let timeoutId: ReturnType<typeof setTimeout>

    if (typedText.length < currentStrength.length) {
      timeoutId = setTimeout(() => {
        setTypedText(currentStrength.slice(0, typedText.length + 1))
      }, 95)
    } else {
      timeoutId = setTimeout(() => {
        setTypedText("")
        setStrengthIndex((currentIndex) => (currentIndex + 1) % STRENGTHS.length)
      }, 2300)
    }

    return () => clearTimeout(timeoutId)
  }, [strengthIndex, typedText])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }

  return (
    <section className="relative min-h-[90svh] flex flex-col justify-between pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl flex-1 flex flex-col justify-center">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left: Image Frame with Floating Elements */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center md:justify-start relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 border border-black/10 flex items-center justify-center bg-black shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] relative overflow-hidden group rounded-2xl">
              <SomethingMoving />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div variants={itemVariants} className="text-center md:text-left space-y-6">
            <h1 className="text-[1.9rem] sm:text-[2.3rem] md:text-[2.6rem] lg:text-[3.1rem] font-medium leading-[1.05] tracking-tight text-[#1a1a1a]">
              {language === 'pt' ? 'Ola, eu sou o ' : 'Hi, I am '}<br />
              <span className="font-semibold italic font-serif">Jimmy Goncalves</span>
            </h1>
            <div className="max-w-3xl space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-black/62">
              <p className="max-w-md mx-auto md:mx-0 text-sm md:text-base">
                {language === 'pt' 
                  ? 'Ainda estou no inicio, mas gosto de criar interfaces limpas e soluções simples que funcionam bem.'
                  : 'I am just getting started, but I love building clean interfaces and simple solutions that work well.'}
              </p>
              <p className="text-black/84 text-[1.1rem] md:text-[1.35rem] lg:text-[1.5rem] leading-[1.25]">
                {language === 'pt' ? 'Trabalho principalmente com ' : 'I mainly work with '}
                <motion.span
                  key={strengthIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="typewriter-word text-slate-900 border-b border-black/10 pb-1"
                >
                  {typedText}
                </motion.span>
                <span className="typewriter-cursor ml-1" />
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Stats/Role Bar */}
      <div className="container mx-auto px-6 max-w-7xl mt-10">
        <div className="border-t border-black/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Experience */}
          <div className="flex items-center gap-4">
            <span className="text-5xl md:text-6xl font-medium text-[#1a1a1a]">1</span>
            <div className="label-caps leading-tight">
              {language === 'pt' ? (
                <>Ano de<br />Experiência</>
              ) : (
                <>Year of<br />Experience</>
              )}
            </div>
          </div>

          {/* Roles */}
          <div className="hidden lg:flex items-center gap-12">
            <span className="label-caps">Front-end Developer</span>
            <span className="label-caps">Back-end Developer</span>
          </div>

          {/* Contact */}
          <a
            href="mailto:jimmyfariawd@hotmail.com"
            className="flex items-center gap-4 group"
          >
            <div className="text-center sm:text-right">
              <div className="label-caps mb-1">{language === 'pt' ? 'Vamos conversar?' : "Let's talk?"}</div>
              <div className="text-sm font-medium text-[#1a1a1a] truncate max-w-[200px] sm:max-w-none">jimmyfariawd@hotmail.com</div>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white border border-black/5 rounded-md flex items-center justify-center shadow-sm group-hover:bg-black group-hover:border-black transition-all duration-300">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#1a1a1a] group-hover:text-white transition-colors duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
