"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const [showAdvantages, setShowAdvantages] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 md:px-10 lg:px-20 py-10">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="w-full max-w-7xl bg-white rounded-lg overflow-hidden p-4 sm:p-6 md:p-10"
      >
        {/* Judul */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Fix<span className="text-amber-500">Code</span>
        </h1>

        {/* Konten utama */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Teks About */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-gray-800 mb-4">
              Fix Code - “Fix Your Code, Fuel Your Growth”
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Fix Code merupakan penyedia <strong>jasa ngoding di Tangerang</strong> yang bergerak di bidang layanan digital dan teknologi informasi. 
              Kami berkomitmen untuk memberikan solusi profesional dalam pengembangan perangkat lunak, perbaikan kode, digital marketing, 
              optimasi mesin pencari (SEO), serta layanan jaringan (networking). 
              Dengan dukungan tim yang berpengalaman dan pemanfaatan teknologi terkini, kami hadir untuk membantu individu, UMKM, dan perusahaan 
              dalam membangun fondasi digital yang kuat, efisien, dan berdaya saing tinggi. 
              Fix Code percaya bahwa teknologi yang tepat dapat menjadi katalis pertumbuhan bisnis yang berkelanjutan di era transformasi digital saat ini.
            </p>

          </motion.div>

          {/* Gambar */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <Image
              src="/about.png"
              alt="Dev Nexus Team"
              width={400}
              height={500}
              className="rounded-lg object-cover w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px]"
            />
          </motion.div>
        </div>

        {/* History & Keunggulan */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={showAdvantages ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-6">History</h3>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
            Fix Code didirikan pada 1 Maret 2025 dengan visi untuk menghadirkan solusi digital terbaik bagi bisnis dan individu yang ingin memiliki website profesional. Berawal dari sebuah ide sederhana untuk membantu UMKM dan perusahaan dalam membangun kehadiran online, Dev Nexus berkembang menjadi penyedia jasa pembuatan website yang inovatif dan berorientasi pada kualitas.
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-6">Keunggulan Kami</h3>
          <ul className="list-disc text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed ml-6 mt-2">
            <li>Tim berpengalaman dan profesional</li>
            <li>Teknologi terbaru dan inovatif</li>
            <li>Solusi digital yang disesuaikan dengan kebutuhan klien</li>
            <li>Pelayanan cepat dan responsif</li>
            <li>Keamanan dan stabilitas sistem yang terjamin</li>
          </ul>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mt-6">Mengapa Fix Code?</h3>
          <ul className="list-disc text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed ml-6 mt-2">
            <li><span className="font-bold">Desain Custom & Profesional</span> - Website sesuai identitas bisnis.</li>
            <li><span className="font-bold">Teknologi Terbaru</span> - Menggunakan tools modern.</li>
            <li><span className="font-bold">SEO Friendly</span> - Website mudah ditemukan di Google.</li>
            <li><span className="font-bold">Support & Maintenance</span> - Layanan teknis agar tetap optimal.</li>
            <li><span className="font-bold">Harga Terjangkau</span> - Investasi tepat untuk hasil maksimal.</li>
          </ul>
        </motion.div>

        {/* Tombol Toggle */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={() => setShowAdvantages(!showAdvantages)}
            className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all"
          >
            {showAdvantages ? "︽" : "︾"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
