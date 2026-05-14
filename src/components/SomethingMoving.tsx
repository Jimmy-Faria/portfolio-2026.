"use client"

import { useEffect, useRef } from "react"

export default function SomethingMoving() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const resize = () => {
      const container = canvas.parentElement
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement!)

    const N = 360
    let frame = 0

    const draw = () => {
      const w = canvas.width / dpr
      const h = canvas.height / dpr

      ctx.fillStyle = "#0a0a0a"
      ctx.globalAlpha = 0.18
      ctx.fillRect(0, 0, w, h)
      ctx.globalAlpha = 1.0

      const cx = w / 2
      const cy = h / 2
      const t = frame * 0.005

      for (let i = 0; i < N; i++) {
        const ratio = i / N
        const angle = ratio * Math.PI * 2 + t
        const r = (65 + 45 * Math.sin(i * 0.06 + t * 1.4) + 18 * Math.cos(i * 0.025 - t * 0.7)) * (w / 400)
        const x = cx + Math.cos(angle) * r
        const y = cy + Math.sin(angle) * r
        const hue = (i + frame * 0.35) % 360
        ctx.beginPath()
        ctx.arc(x, y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = "hsl(" + hue + ", 75%, 60%)"
        ctx.fill()
      }
      frame++
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <div className="w-full h-full bg-[#0a0a0a] overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}
