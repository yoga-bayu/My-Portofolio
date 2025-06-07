'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'

const clients = [
  {
    name: 'Fix Gadget',
    image: '/fixgadget.png', // Ganti dengan logo atau inisial perusahaan
  },
  {
    name: 'Crisp & Crush',
    image: '/crispcrush.png',
  },
  {
    name: 'Print Shop',
    image: '/printshop.png',
  },
  {
    name: 'K System',
    image: '/ksystem.png',
  },
  {
    name: 'Web Design Studio',
    image: '/webstudio.png',
  },
]

const Clients = () => {
  return (
    <>
    <Head>
      <title>Hubungi Fix Code | Konsultasi Gratis Jasa Coding Tangerang</title>
    </Head>
    <section className="min-h-screen bg-white px-4 py-20" id="contact">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Klien yang Pernah Bekerjasama
      </motion.h2>
      <p className="text-center text-gray-500 mt-2">
        Saya bangga telah dipercaya oleh berbagai perusahaan dan brand untuk mengerjakan proyek mereka.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12 justify-items-center">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative bg-gray-100 rounded-xl shadow-md p-4 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <Image
              src={client.image}
              alt={client.name}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-12 italic">
        *Logo hanya sebagai representasi inisial klien untuk menjaga privasi kerja sama.
      </p>
    </section>
    </>
  )
}

export default Clients
