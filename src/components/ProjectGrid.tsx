"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Reveal } from "./Reveal"

export default function ProjectGrid() {
  return (
    <section id="projects" className="section-container">
      <Reveal>
        <div className="mb-16">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-black/40">02. Selected Work</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-32">
        {/* Project 1 */}
        <Reveal>
          <div className="group grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-black/40">Next Milestone // Internship</span>
                <h3 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
                  Member & <span className="serif-italic">Fee Management</span>
                </h3>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-black/60">
                Currently in the data modeling phase. Building an automated system focused on state consistency and performance.
              </p>
              <div className="flex flex-wrap gap-3">
                {["PostgreSQL", "NextAuth", "Prisma"].map((tech) => (
                  <span key={tech} className="rounded-full border border-black/5 bg-black/[0.02] px-3 py-1 text-xs font-medium text-black/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-black/[0.02] border border-black/5 p-8 transition-colors group-hover:bg-black/[0.04]">
              <div className="flex h-full items-center justify-center text-black/10">
                <span className="text-xs font-mono uppercase tracking-widest">Ongoing Build</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Project 2 - Lab */}
        <Reveal>
          <div className="group grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-black/40">Open Source</span>
                <h3 className="text-3xl font-light tracking-tight text-black sm:text-4xl">
                  Learning <span className="serif-italic">Lab</span>
                </h3>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-black/60">
                A collection of experiments and contributions exploring clean code patterns and modern API integrations.
              </p>
              <a 
                href="https://github.com/Jimmy-Faria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium border-b border-black/10 pb-1 transition-colors hover:border-black"
              >
                Explore on GitHub <Github size={14} />
              </a>
            </div>
            <div className="lg:order-1 aspect-[16/10] overflow-hidden rounded-2xl bg-black/[0.02] border border-black/5 p-8 transition-colors group-hover:bg-black/[0.04]">
              <div className="flex h-full items-center justify-center text-black/10">
                <Github size={48} strokeWidth={1} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
