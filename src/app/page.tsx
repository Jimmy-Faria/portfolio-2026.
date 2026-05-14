import { Reveal } from "@/components/Reveal"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <Navbar />
      
      <Hero />

      <section id="about" className="section-container">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="label-caps">01. Perspetiva</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl leading-snug text-black/82 sm:text-[2rem]">
                Estou a construir o meu caminho no desenvolvimento web, com foco em interfaces limpas e codigo funcional.
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
