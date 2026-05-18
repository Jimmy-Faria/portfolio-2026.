"use client"

import { Reveal } from "@/components/Reveal"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SomethingMoving from "@/components/SomethingMoving"
import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"

export default function AboutPage() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <Navbar />

      {/* Hero Section - Text Focused */}
      <section className="pt-32 pb-16 md:pt-60 md:pb-32">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-4xl">
              <span className="label-caps !text-[18px] !text-black font-extrabold mb-8 block tracking-[0.4em]">
                {language === 'pt' ? 'QUEM SOU' : 'WHO I AM'}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif italic leading-tight text-black mb-8">
                {language === 'pt' 
                  ? 'Criando interfaces limpas através de tecnologia moderna.' 
                  : 'Crafting clean interfaces with modern code.'}
              </h1>
              <div className="flex gap-4 items-center">
                <span className="px-4 py-1.5 bg-black text-white text-[11px] font-bold tracking-widest uppercase rounded-full">
                  Jr. Web Developer
                </span>
                <span className="text-[11px] text-black/40 font-bold tracking-widest uppercase">
                  Based in Portugal
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content - Minimalist Grid */}
      <section className="py-20 md:py-32 border-t border-black/[0.03]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            
            {/* Left side: The Story */}
            <div className="md:col-span-7 space-y-12">
              <Reveal>
                <div className="space-y-6">
                  <h2 className="label-caps !text-[24px] !text-black font-extrabold tracking-[0.1em]">01. {language === 'pt' ? 'PERCURSO' : 'JOURNEY'}</h2>
                  <div className="text-base md:text-lg font-light leading-relaxed text-black/80 space-y-8">
                    <p>
                      {language === 'pt' 
                        ? 'Formado em Tecnologias e Programação de Sistemas de Informação, encontrei no desenvolvimento web o equilíbrio entre lógica e criatividade. Atualmente, transformo desafios reais em interfaces limpas e funcionais através de um estágio profissional.'
                        : 'Graduated in Information Systems Technologies and Programming, I found in web development the balance between logic and creativity. Currently, I turn real challenges into clean and functional interfaces through a professional internship.'}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="space-y-6">
                  <h2 className="label-caps !text-[24px] !text-black font-extrabold tracking-[0.1em]">02. {language === 'pt' ? 'FOCO' : 'FOCUS'}</h2>
                  <div className="text-base md:text-lg font-light leading-relaxed text-black/80 space-y-8">
                    <p>
                      {language === 'pt' 
                        ? 'Acredito na disciplina como motor de excelência. Fora do código, encontro esse foco no desporto e no xadrez — onde cada movimento é planeado para atingir o melhor resultado possível.'
                        : 'I believe in discipline as a driver of excellence. Outside of code, I find that focus in sports and chess — where every move is planned to achieve the best possible result.'}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right side: Image/Graphic placeholder - following Ricardo Torres visual style */}
            <div className="md:col-span-5">
              <Reveal delay={0.4}>
                <div className="relative aspect-[3/4] max-h-[500px] bg-white border border-black/5 overflow-hidden group shadow-2xl">
                  {/* Subtle Grid overlay like his about page */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                    style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '30px 30px'}} />
                  
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                     <span className="text-[12rem] md:text-[15rem] font-serif italic text-black/[0.02] select-none">JG</span>
                  </div>
                  
                  {/* The internship badge */}
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-black text-white rounded-sm">
                    <p className="label-caps !text-white/60 mb-2 !text-[9px]">
                      {language === 'pt' ? 'Atualmente em' : 'Currently at'}
                    </p>
                    <p className="text-lg font-serif">Web Dev Internship</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 md:py-40">
        <div className="container-custom">
          <Reveal width="100%">
            <div className="flex flex-col items-center text-center space-y-16">
              <div className="space-y-6 w-full">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-black leading-none w-full text-center">
                  {language === 'pt' ? (
                    <>
                      Interessado na parte humana da <span className="italic font-medium">tecnologia</span>
                    </>
                  ) : (
                    <>
                      Interested in the human side of <span className="italic font-medium">technology</span>
                    </>
                  )}
                </h3>
              </div>
              
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative inline-flex items-center justify-center px-10 py-4 border border-black/20 rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
                >
                  <span className="label-caps !text-inherit !text-[12px] font-bold tracking-[0.2em]">
                    {language === 'pt' ? 'Trabalhar Comigo' : 'Work with me'}
                  </span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
