"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"

const STRENGTHS = ["landing pages", "web apps", "websites"]
const FLOATING_CUBES = [
  { className: "hero-cube hero-cube-one", duration: 16, y: [0, -120, 0], x: [0, 24, 0], rotate: [0, 12, 0] },
  { className: "hero-cube hero-cube-two", duration: 18, y: [0, -90, 0], x: [0, -18, 0], rotate: [0, -16, 0] },
  { className: "hero-cube hero-cube-three", duration: 14, y: [0, -110, 0], x: [0, 16, 0], rotate: [0, 10, 0] },
]

export default function Hero() {
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
    <section className="relative min-h-[90svh] diagonal-bg flex flex-col justify-between pt-20 pb-10">
      <motion.div
        aria-hidden="true"
        className="hero-orb hero-orb-left"
        animate={{ x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-orb hero-orb-right"
        animate={{ x: [0, -22, 0], y: [0, 16, 0], scale: [1, 0.97, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-grid-fade"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-stream hero-stream-one"
        animate={{ x: [0, 40, 0], y: [0, -20, 0], rotate: [-18, -14, -18] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-stream hero-stream-two"
        animate={{ x: [0, -32, 0], y: [0, 18, 0], rotate: [22, 18, 22] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-liquid hero-liquid-main"
        animate={{ x: [0, 42, 0], y: [0, -24, 0], scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-liquid hero-liquid-secondary"
        animate={{ x: [0, -32, 0], y: [0, 18, 0], scale: [1, 0.94, 1], rotate: [0, -6, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-block hero-block-one"
        animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-block hero-block-two"
        animate={{ y: [0, 14, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-block hero-block-three"
        animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      {FLOATING_CUBES.map((cube) => (
        <motion.div
          key={cube.className}
          aria-hidden="true"
          className={cube.className}
          animate={{ y: cube.y, x: cube.x, rotate: cube.rotate, opacity: [0.22, 0.44, 0.22] }}
          transition={{ duration: cube.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="container mx-auto px-6 max-w-7xl flex-1 flex flex-col justify-center">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left: Image Frame */}
          <motion.div
            variants={itemVariants}
            animate={floatingAnimation}
            className="flex justify-center md:justify-start"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-black/5 p-4 flex items-center justify-center bg-white shadow-sm">
              <div className="w-full h-full rounded-full bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
                <span className="text-black/10 text-6xl font-bold">JG</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div variants={itemVariants} className="text-center md:text-left space-y-6">
            <h1 className="text-[2.35rem] md:text-[2.9rem] lg:text-[3.55rem] font-medium leading-[0.98] tracking-tight text-[#1a1a1a]">
              Ola, eu sou o <span className="font-semibold">Jimmy Goncalves</span>!
            </h1>
            <div className="max-w-3xl space-y-6 text-base md:text-lg leading-relaxed text-black/62">
              <p className="max-w-2xl">
                Ainda estou no inicio, mas gosto de criar interfaces limpas e soluções simples que funcionam bem.
              </p>
              <p className="text-black/84 text-[1.35rem] md:text-[1.45rem] lg:text-[1.6rem] leading-[1.25]">
                Trabalho principalmente com{" "}
                <motion.span
                  key={strengthIndex}
                  initial={{ opacity: 0.72, y: 6, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="typewriter-word text-[#6d8fc8]"
                >
                  {typedText}
                </motion.span>
                <span className="typewriter-cursor" />
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Stats/Role Bar */}
      <div className="container mx-auto px-6 max-w-7xl mt-10">
        <div className="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Experience */}
          <div className="flex items-center gap-4">
            <span className="text-6xl font-medium text-[#1a1a1a]">1</span>
            <div className="label-caps leading-tight">
              Ano de<br />Experiência
            </div>
          </div>

          {/* Roles */}
          <div className="hidden lg:flex items-center gap-12">
            <span className="label-caps">Front-end Developer</span>
            <span className="label-caps">Back-end Developer</span>
            <span className="label-caps">UI Implementation</span>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="label-caps mb-1">Vamos conversar?</div>
              <div className="text-sm font-medium text-[#1a1a1a]">jimmyfariawd@hotmail.com</div>
            </div>
            <div className="w-12 h-12 bg-white border border-black/5 rounded-md flex items-center justify-center shadow-sm">
              <Mail className="w-5 h-5 text-[#1a1a1a]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
