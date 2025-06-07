'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from './Components/navbar'
import AboutSection from './about'
import Deskripsi from './deskripsi'
import HomeSection from './home'
import ProjectSection from './project'
import Cards from './card'
import Skill from './bahasa'
import Keunggulan from './keunggulan'
import Clients from './Contact/page'
import Cta from './cta'
import Footer from './Components/footer'
import MyPartnerPage from './patner'

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
    <>
      <Head>
  <title>Fix Code | Solusi Layanan Digital & Teknologi Informasi</title>
  <meta name="description" content="Fix Code adalah perusahaan yang bergerak di bidang layanan digital dan teknologi informasi seperti website, aplikasi, dan sistem IT." />
  <meta name="keywords" content="Fix Code, layanan digital, jasa IT, website, software, teknologi informasi" />
  <meta name="author" content="Fix Code Team" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charSet="UTF-8" />

  {/* Open Graph (untuk sosial media) */}
  <meta property="og:title" content="Fix Code | Solusi Layanan Digital & Teknologi Informasi" />
  <meta property="og:description" content="Kami menyediakan layanan digital dan solusi teknologi informasi terpercaya untuk bisnis Anda." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.fixcode.my.id" /> {/* Ganti dengan URL kamu */}
  <meta property="og:image" content="/fixcodelogo.png" /> {/* Ganti dengan gambar preview sosial media */}

  {/* Twitter Card (opsional tapi bagus) */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fix Code | Solusi Layanan Digital & Teknologi Informasi" />
  <meta name="twitter:description" content="Layanan digital dan teknologi informasi profesional dari Fix Code." />
  <meta name="twitter:image" content="/fixcodelogo.png" />

  <link rel="icon" href="/favicon.ico" />
    </Head>

      
      <main>
        <Navbar />
        <div className="pt-0 scroll-smooth">
          <HomeSection />
          <AboutSection />
          <Deskripsi />
          <ProjectSection />
          <Cards />
          <Skill />
          <Keunggulan />
          <MyPartnerPage />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </main>
    </>
  )
}
