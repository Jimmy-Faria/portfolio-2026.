"use client"

import { motion } from "framer-motion"

interface Props {
  children: React.ReactNode
  width?: "fit-content" | "100%"
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      {children}
    </motion.div>
  )
}
