"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Website Portfolio",
    description: "Sebuah website portfolio pribadi dengan animasi interaktif.",
    image: "/project3.png"
  },
  {
    title: "E-commerce App",
    description: "Aplikasi toko online modern dengan fitur lengkap.",
    image: "/project2.png"
  },
  {
    title: "Aplikasi Kasir",
    description: "Dashboard admin untuk memudahkan dalam menginput pesanan pelanggan",
    image: "/project1.png"
  },
  {
    title: "E-commerce App",
    description: "Aplikasi toko online modern dengan fitur lengkap.",
    image: "/project5.png"
  },
  {
    title: "Website UMKM",
    description: "Website UMKM yang memudahkan guna memasarkan produk",
    image: "/project4.png"
  },
  {
    title: "E-commerce App",
    description: "Aplikasi toko online modern dengan fitur lengkap.",
    image: "/project6.png"
  }
  // {
  //   title: "Blog Platform",
  //   description: "Platform blogging dengan fitur posting, komentar, dan kategori.",
  //   image: "/project4.png"
  // },
  // {
  //   title: "Task Management App",
  //   description: "Aplikasi manajemen tugas dengan fitur deadline dan notifikasi.",
  //   image: "/project5.png"
  // },
  // {
  //   title: "Social Media App",
  //   description: "Aplikasi media sosial dengan fitur timeline dan posting gambar.",
  //   image: "/project6.png"
  // },
  // {
  //   title: "Job Portal",
  //   description: "Portal lowongan kerja dengan fitur pencarian dan aplikasi pekerjaan.",
  //   image: "/project7.png"
  // },
  // {
  //   title: "E-learning Platform",
  //   description: "Platform e-learning dengan video kursus dan kuis interaktif.",
  //   image: "/project8.png"
  // },
  // {
  //   title: "Real Estate Website",
  //   description: "Website properti dengan fitur pencarian dan filter berdasarkan lokasi.",
  //   image: "/project9.png"
  // }
];

const Cards = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 md:px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="relative h-48 md:h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
