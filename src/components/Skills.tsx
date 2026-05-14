"use client"

import { motion } from "framer-motion"
import { Reveal } from "./Reveal"
import { useLanguage } from "@/context/LanguageContext"
import SomethingMoving from "./SomethingMoving"

const SKILLS_DATA = [
  {
    category: "Web Development Core",
    items: [
      { name: "Next.js", percentage: 95 },
      { name: "Node.js", percentage: 90 },
      { name: "TypeScript", percentage: 92 },
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      { name: "PHP", percentage: 85 },
      { name: "MySQL", percentage: 88 },
    ],
  },
]

export default function Skills() {
  const { language } = useLanguage()

  return (
    <section id="skills" className="section-container border-y border-black/5 bg-[#fcfcfc] overflow-hidden">
      <Reveal>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 items-start">
          {/* Left Side: Something Moving animation */}
          <div className="relative group p-4 md:p-8">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.18)] rounded-2xl">
              {/* Window chrome */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-[#111] z-10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="label-caps !text-[9px] !text-white/20">Something Moving</div>
              </div>

              {/* The animation fills the frame */}
              <SomethingMoving />
            </div>

            {/* Caption */}
            <div className="mt-8 space-y-4">
              <h2 className="label-caps !text-black/80 !text-[0.8rem]">02. Core Tech</h2>
              <p className="text-base leading-relaxed text-black/50 font-light max-w-sm">
                {language === 'pt' 
                  ? 'É aqui que passo a maior parte do tempo. Gosto de usar tecnologia moderna para fazer os meus projetos acontecerem.'
                  : 'Where I spend most of my time. I like using modern tech to make my projects happen.'}
              </p>
            </div>
          </div>

          {/* Right Side: Skill Bars */}
          <div className="space-y-16 py-8">
            {SKILLS_DATA.map((group, idx) => (
              <Reveal key={group.category}>
                <div className="space-y-10 group/item">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-black/20">0{idx + 1}</span>
                    <h3 className="label-caps !text-black/40 group-hover/item:!text-black/80 transition-colors duration-500">
                      {group.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-12 pl-8 border-l border-black/5">
                    {group.items.map((skill) => (
                      <div key={skill.name} className="space-y-4">
                        <div className="flex items-end justify-between">
                          <span className="text-[0.85rem] font-medium tracking-tight text-black/90 uppercase">{skill.name}</span>
                          <span className="font-mono text-[11px] text-black/30">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="h-[2px] w-full bg-black/[0.04] relative">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-0 left-0 h-full bg-black/80"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

