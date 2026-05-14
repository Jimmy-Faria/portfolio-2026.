"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Hide after the bar animation (2s) + a small buffer
    const timer = setTimeout(() => setVisible(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fcfcfc]"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-10 flex flex-col items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-[13px] font-bold text-white">
              &lt;/&gt;
            </div>
            <span className="text-[0.65rem] font-bold tracking-[0.35em] uppercase text-black/30">
              Jimmy Goncalves
            </span>
          </motion.div>

          {/* Loader bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="loader-bar"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
