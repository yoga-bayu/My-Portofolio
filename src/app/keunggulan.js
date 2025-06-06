"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Keunggulan() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-100 to-white relative">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Keunggulan <span className="text-amber-600">Kami</span>
      </h2>

      <div className="flex flex-col items-center mt-12 mx-4 sm:mx-6 md:mx-12">
        {[
          {
            id: 1,
            title: "Desain Profesional & Modern",
            img: "/01.png",
            text: "Website yang kami buat tidak hanya fungsional tetapi juga memiliki desain yang elegan dan modern.",
            direction: "left",
          },
          {
            id: 2,
            title: "Responsif & Mobile-Friendly",
            img: "/02.png",
            text: "Website secara otomatis menyesuaikan tampilannya di berbagai perangkat.",
            direction: "right",
          },
          {
            id: 3,
            title: "Performa Cepat & Optimal",
            img: "/03.png",
            text: "Kami menggunakan teknologi terkini untuk memastikan kecepatan tinggi.",
            direction: "left",
          },
          {
            id: 4,
            title: "Keamanan Terjamin",
            img: "/04.png",
            text: "Keamanan adalah prioritas utama kami dengan sistem keamanan berlapis.",
            direction: "right",
          },
          {
            id: 5,
            title: "SEO-Friendly",
            img: "/05.png",
            text: "Website dioptimalkan untuk meningkatkan peringkat di Google.",
            direction: "left",
          },
          {
            id: 6,
            title: "Custom Sesuai Kebutuhan",
            img: "/06.png",
            text: "Website dapat disesuaikan dengan fitur dan desain yang Anda butuhkan.",
            direction: "right",
          },
        ].map((item) => (
          <KeunggulanItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const KeunggulanItem = ({ item }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4 md:gap-6 max-w-7xl mt-6 px-2 md:px-0"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          x: item.direction === "left" ? -100 : 100,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.8 },
        },
      }}
    >
      {item.direction === "left" && (
        <img
          src={item.img}
          alt={item.title}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px]"
        />
      )}

      <div className="text-left">
        <h2 className="font-bold text-[16px] sm:text-[18px] md:text-2xl text-amber-600">
          {item.id.toString().padStart(2, "0")}
        </h2>
        <h2 className="font-bold my-1 text-[16px] sm:text-[18px] md:text-xl text-gray-600">
          {item.title}
        </h2>
        <p className="text-sm sm:text-[15px] md:text-base text-gray-700">
          {item.text}
        </p>
      </div>

      {item.direction === "right" && (
        <img
          src={item.img}
          alt={item.title}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px]"
        />
      )}
    </motion.div>
  );
};
