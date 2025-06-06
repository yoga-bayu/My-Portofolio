"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Eka Saputra",
    link: "https://www.ekasaputra.my.id/",
    logo: "/eka.png"
  },
  {
    name: "Ayu Wandira",
    link: "https://www.dira-ritsk.my.id/",
    logo: "/ayu.png"
  },
  {
    name: "Bintang",
    link: "https://www.catatanbintang.my.id/",
    logo: "/bintang.png"
  },
  {
    name: "Dede Zakaria",
    link: "https://zakarial.my.id/",
    logo: "/zakaria.png"
  }
];

const MyPartnerPage = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-12">My Partners</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {partners.map((partner, index) => (
          <motion.a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="w-24 h-24 mb-4 relative">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="rounded-full object-cover border"
              />
            </div>
            <span className="text-lg font-medium text-gray-800 text-center">
              {partner.name}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default MyPartnerPage;
