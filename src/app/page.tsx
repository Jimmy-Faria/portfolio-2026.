"use client"

import { Reveal } from "@/components/Reveal"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"
import SomethingMoving from "@/components/SomethingMoving"
import { useLanguage } from "@/context/LanguageContext"

export default function Home() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <Navbar />
      
      <Hero />

      <section id="about" className="section-container">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="label-caps">01. {language === 'pt' ? 'Perspetiva' : 'Perspective'}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl leading-snug text-black/82 sm:text-[2rem]">
                {language === 'pt' 
                  ? 'Focado em construir cenas para a web que funcionam bem e têm um aspeto limpo.'
                  : 'Focused on building web experiences that work well and look clean.'}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <Skills />

      <Footer />
    </main>
  )
}
