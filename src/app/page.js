'use client'
import { motion } from 'framer-motion'
import Navbar from './Components/navbar'
import AboutSection from './about'
import Deskripsi from './deskripsi'
import HomeSection from './home' // Ini adalah komponen custom berisi teks + foto kamu
import ProjectSection from './project'
import Cards from './card'
import Skill from './bahasa'
import Keunggulan from './keunggulan'
import Clients from './Contact/page'
import Cta from './cta'
import Footer from './Components/footer'

const Section = ({ id, title, bg }) => (
  <motion.section
    id={id}
    className={`h-screen ${bg} flex items-center justify-center`}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
  </motion.section>
)

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-0 scroll-smooth">
        <HomeSection /> {/* Ini ganti dari <Home /> */}
        <AboutSection />
        <Deskripsi />
        <ProjectSection/>
        <Cards />
        <Skill />
        <Keunggulan />
        <Clients />
        <Cta />
        <Footer />
        {/* <Section id="contact" title="Contact" bg="bg-white" /> */}
      </div>
    </main>
  )
}
