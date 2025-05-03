"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Keunggulan() {
    return (
        <div className="py-16 bg-gradient-to-b from-gray-100 to-white relative">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Keunggulan <span className="text-amber-600">Kami</span>
            </h2>
            {/* <p className="text-center mx-20">
                Dev Nexus adalah solusi terbaik untuk kebutuhan pembuatan website profesional, modern, dan fungsional. Dengan keahlian dalam teknologi terbaru, kami menghadirkan website yang responsif, cepat, dan sesuai dengan kebutuhan bisnis Anda. Keunggulan kami terletak pada desain yang elegan, keamanan yang terjamin, serta kemudahan dalam pengelolaan. Percayakan proyek website Anda kepada kami, dan rasakan perbedaannya.
            </p> */}
            
            {/* Bagian Keunggulan */}
            <div className="flex flex-col items-center mt-12 mx-12">
                {[
                    { id: 1, title: "Desain Profesional & Modern", img: "/01.png", text: "Website yang kami buat tidak hanya fungsional tetapi juga memiliki desain yang elegan dan modern.", direction: "left" },
                    { id: 2, title: "Responsif & Mobile-Friendly", img: "/02.png", text: "Website secara otomatis menyesuaikan tampilannya di berbagai perangkat.", direction: "right" },
                    { id: 3, title: "Performa Cepat & Optimal", img: "/03.png", text: "Kami menggunakan teknologi terkini untuk memastikan kecepatan tinggi.", direction: "left" },
                    { id: 4, title: "Keamanan Terjamin", img: "/04.png", text: "Keamanan adalah prioritas utama kami dengan sistem keamanan berlapis.", direction: "right" },
                    { id: 5, title: "SEO-Friendly", img: "/05.png", text: "Website dioptimalkan untuk meningkatkan peringkat di Google.", direction: "left" },
                    { id: 6, title: "Custom Sesuai Kebutuhan", img: "/06.png", text: "Website dapat disesuaikan dengan fitur dan desain yang Anda butuhkan.", direction: "right" }
                ].map((item, index) => (
                    <KeunggulanItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

// Komponen untuk animasi tiap keunggulan
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
            { threshold: 0.3 } // Animasi berjalan saat elemen terlihat 30%
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
            className="flex items-center gap-6 max-w-7xl mt-5"
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, x: item.direction === "left" ? -100 : 100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
        >
            {item.direction === "left" && <img src={item.img} className="w-[200px] h-[200px]" alt={item.title} />}
            <div className="text-left">
                <h2 className="font-bold text-2xl text-amber-600">{item.id.toString().padStart(2, "0")}</h2>
                <h2 className="font-bold my-2 text-[20px] text-gray-600">{item.title}</h2>
                <p className="text-gray-700">{item.text}</p>
            </div>
            {item.direction === "right" && <img src={item.img} className="w-[200px] h-[200px]" alt={item.title} />}
        </motion.div>
    );
};
