'use client'

import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function JasaNgodingTangerang() {
  return (
    <>
      <Head>
        <title>Jasa Ngoding Tangerang | Fix Code</title>
        <meta
          name="description"
          content="Butuh jasa ngoding profesional di Tangerang? Fix Code siap bantu Anda membuat website, aplikasi, atau solusi digital terbaik. Konsultasi gratis!"
        />
        <meta
          name="keywords"
          content="jasa ngoding Tangerang, jasa pembuatan website Tangerang, jasa pemrograman, fix code, IT Tangerang"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.fixcode.my.id/jasaNgodingTangerang" />
      </Head>

      <section className="min-h-screen px-4 md:px-8 py-16 bg-gradient-to-b from-white via-amber-50 to-white text-gray-800 w-full">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Jasa Ngoding Profesional di Tangerang
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Fix Code hadir sebagai mitra digital terpercaya untuk pembuatan website, aplikasi, dan solusi pemrograman lainnya di wilayah Tangerang. Kualitas, kecepatan, dan profesionalitas adalah prioritas kami.
        </motion.p>

        <div className="space-y-16 max-w-6xl mx-auto">

          {/* Layanan */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-amber-700 mb-4">💡 Layanan Kami</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Pembuatan Website (Company Profile, eCommerce, Landing Page)</li>
                <li>Aplikasi Web & Mobile</li>
                <li>Perbaikan & Optimasi Kode</li>
                <li>Integrasi API dan Otomasi Proses</li>
                <li>Maintenance & Upgrade Sistem</li>
              </ul>
            </div>
            <img
              src="/halamanjnt/layanan.png"
              alt="Layanan"
              className="w-full md:w-[300px] h-auto object-cover rounded-xl"
            />
          </motion.div>

          {/* Keunggulan */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-amber-700 mb-4">🚀 Mengapa Memilih Fix Code?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Domisili Tangerang – bisa konsultasi langsung</li>
                <li>Portofolio real & tim profesional</li>
                <li>Teknologi modern & SEO-friendly</li>
                <li>Harga kompetitif, hasil optimal</li>
                <li>Proses rapi, cepat, dan terstruktur</li>
              </ul>
            </div>
            <img
              src="/halamanjnt/keunggulan.png"
              alt="Keunggulan"
              className="w-full md:w-1/3 h-64 object-contain rounded-xl"
            />
          </motion.div>

          {/* Area */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-amber-700 mb-4">📍 Area Layanan</h2>
              <p className="text-gray-700 leading-relaxed">
                Kami melayani seluruh wilayah Tangerang: Ciledug, Cipondoh, BSD, Alam Sutera, Karawaci, dan sekitarnya. Anda bisa memilih konsultasi online maupun pertemuan langsung.
              </p>
            </div>
            <img
              src="/halamanjnt/area.png"
              alt="Area Layanan"
              className="w-full md:w-[200px] h-auto object-cover rounded-xl"
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-xl text-gray-800 mb-6 font-semibold">
              Tertarik bekerja sama? Konsultasi GRATIS tersedia sekarang juga!
            </p>
            <Link href="https://wa.me/628138830020">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition">
                Konsultasi via WhatsApp
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Kembali */}
        <div className="text-center mt-16 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            ← Kembali ke Beranda
          </Link>
        </div>
      </section>
    </>
  )
}
