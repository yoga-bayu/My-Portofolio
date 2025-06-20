'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className="bg-amber-600 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Butuh Jasa Ngoding Profesional di Tangerang?
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-amber-100 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="block mb-2">
            Fix Code siap membantu Anda membangun website, aplikasi, dan solusi digital yang optimal
            untuk bisnis Anda.
          </span>
          <Link
            href="/jasaNgodingTangerang"
            className="underline font-semibold text-white hover:text-amber-200 transition-colors"
          >
            Pelajari layanan kami lebih lanjut
          </Link>{' '}
          atau langsung hubungi kami sekarang!
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="https://wa.me/628138830020">
            <button className="bg-white text-amber-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-amber-100 transition">
              Konsultasi Sekarang via WhatsApp
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
