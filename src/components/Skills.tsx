"use client"

import { Reveal } from "./Reveal"

const SKILLS_DATA = [
  {
    category: "Desenvolvimento Web",
    items: [
      { name: "HTML5 + CSS3 + JAVASCRIPT + REACT", percentage: 95 },
      { name: "NEXT.JS + TYPESCRIPT + TAILWIND", percentage: 90 },
    ],
  },
  {
    category: "Software Web",
    items: [
      { name: "PHP + MYSQL", percentage: 85 },
      { name: "NODE.JS + POSTGRESQL", percentage: 80 },
    ],
  },
  {
    category: "Design Gráfico",
    items: [
      { name: "PHOTOSHOP + ILLUSTRATOR", percentage: 90 },
    ],
  },
  {
    category: "Comunicação",
    items: [
      { name: "GESTÃO DE REDES SOCIAIS", percentage: 85 },
      { name: "CAMPANHAS DE MARKETING DIGITAL", percentage: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-container border-y border-black/5 bg-[#fcfcfc]">
      <Reveal>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="label-caps">02. Competencias</h2>
            <p className="mt-8 max-w-xs text-base leading-relaxed text-black/60">
              Durante o meu estagio na Signed, reforcei bases em desenvolvimento web, design digital e entrega de trabalho funcional.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-12">
            {SKILLS_DATA.map((group) => (
              <div key={group.category} className="space-y-8">
                <h3 className="label-caps border-b border-black/5 pb-2">
                  {group.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[0.78rem] tracking-[0.12em] text-black/80">{skill.name}</span>
                        <span className="rounded-full bg-black/5 px-2 py-0.5 text-[0.68rem] text-black/50">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="h-[3px] w-full bg-black/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-slate-700 to-slate-900 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

