"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Website Portfolio",
    description: "Sebuah website portfolio pribadi dengan animasi interaktif.",
    image: "/project3.png",
    thumbnails: [
      { src: "/html.png", size: "w-10 h-10" },
      { src: "/css.png", size: "w-10 h-10" },
      { src: "/js.png", size: "w-10 h-9" }
    ],
    link: "https://portofolio-yoga-bayu.vercel.app/"
  },
  {
    title: "E-commerce App",
    description: "Aplikasi toko online modern dengan fitur lengkap.",
    image: "/project2.png",
    thumbnails: [
      { src: "/react.png", size: "w-9 h-9" },
      { src: "/tailwind.png", size: "w-14 h-9" }
    ],
    link: "/ecommerce"
  },
  {
    title: "Aplikasi Kasir",
    description: "Dashboard admin untuk memudahkan dalam menginput pesanan pelanggan",
    image: "/project1.png",
    thumbnails: [
      { src: "/react.png", size: "w-9 h-9" },
      { src: "/tailwind.png", size: "w-14 h-9" },
      { src: "/php.png", size: "w-10 h-10" }
    ],
    link: "/kasir"
  },
  {
    title: "E-commerce App",
    description: "Aplikasi untuk memasarkan penjualan produk",
    image: "/cc.png",
    thumbnails: [
      { src: "/astro.png", size: "w-10 h-10" },
      { src: "/tailwind.png", size: "w-14 h-9" }
    ],
    link: "https://crispcrush.vercel.app/"
  },
  {
    title: "Website E-Commerce",
    description: "Website UMKM yang memudahkan guna memasarkan produk",
    image: "/fg.png",
    thumbnails: [
      { src: "/nuxtjs.png", size: "w-10 h-10" },
      { src: "/vue.png", size: "w-10 h-10" },
      { src: "/tailwind.png", size: "w-14 h-9" }
    ],
    link: "https://fix-gadget-ten.vercel.app/"
  },
  {
    title: "E-commerce App",
    description: "Aplikasi toko online modern dengan fitur lengkap.",
    image: "/project6.png",
    thumbnails: [
      { src: "/redwood.png", size: "w-10 h-10" },
      { src: "/tailwind.png", size: "w-14 h-9" },
      { src: "/graphql.png", size: "w-10 h-10" }
    ],
    link: "/ecommerce-v3"
  }
];

const Cards = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 md:px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Gambar utama */}
              <div className="relative h-48 md:h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Judul & Deskripsi */}
              <div className="p-4 pt-2">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>
              </div>

              {/* Label "With :" dan Thumbnail */}
              <div className="px-4 pb-4">
                <p className="text-sm text-black font-bold mb-1">With :</p>
                <div className="flex space-x-2">
                  {project.thumbnails.map((thumb, i) => (
                    <div key={i} className={`relative ${thumb.size ?? "w-16 h-16"}`}>
                      <Image
                        src={thumb.src}
                        alt={`Thumbnail ${i + 1}`}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cards;
