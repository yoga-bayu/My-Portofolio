"use client"; // Tambahkan ini di baris pertama

import Head from "next/head";
import { useState, useEffect } from "react";

export default function AboutSection() {
  // Daftar gambar yang akan ditampilkan secara bergantian
  const images = ["/about1.png", "/about2.png", "/about3.png"];

  // State untuk menentukan gambar aktif
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efek untuk mengganti gambar setiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Head>
      <meta name="description" content="Kami menawarkan layanan pembuatan website dan aplikasi untuk UMKM, startup, dan perusahaan di Tangerang dan sekitarnya." />
      <title>Tentang Fix Code | Tim Ahli Jasa Coding Tangerang</title>
    </Head>
    <section id="about" className="py-16 bg-white">
      {/* Judul About */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        About <span className="text-amber-500">Me</span>
      </h2>

      {/* Konten About */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Gambar di Kiri */}
        <div className="md:w-1/2 flex justify-center relative -translate-y-44">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`About ${index + 1}`}
              className={`w-80 h-80 object-cover rounded-lg absolute transition-all duration-500 ${
                index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            />
          ))}
        </div>

        {/* Teks di Kanan */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 text-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Tentang Saya</h3>
          <p className="text-lg leading-relaxed">
          Halo! Saya adalah seorang programmer sekaligus web developer yang berpengalaman dalam membangun berbagai jenis website, mulai dari landing page sederhana hingga web aplikasi berskala besar. Dengan latar belakang sebagai trainer di bidang pemrograman, saya tidak hanya paham cara menulis kode yang baik, tetapi juga mampu menjelaskan dan merancang solusi yang tepat, efisien, dan mudah dipahami. Bagi saya, setiap baris kode bukan sekadar instruksi, tapi bagian dari solusi nyata untuk menjawab kebutuhan digital Anda.
          </p>
          <p className="mt-4 text-lg">
          Di website ini, saya membuka jasa pembuatan, pengembangan, hingga perbaikan website. Baik Anda membutuhkan website baru dari nol, ingin upgrade tampilan atau fitur website lama, maupun memperbaiki error/error tertentu—saya siap membantu.
          </p>
          <p className="mt-4 text-lg">
          Prosesnya fleksibel, transparan, dan tentunya hasilnya bisa disesuaikan dengan kebutuhan dan visi Anda. Yuk, wujudkan ide digital Anda bersama saya!


          </p>
        </div>
      </div>
    </section>
    </>
  );
}
