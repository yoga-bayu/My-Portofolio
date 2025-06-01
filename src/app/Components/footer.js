'use client'

import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Kiri - Portofolio + Sosmed */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-3">Portofolio</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="https://wa.me/6281388230020" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-xl sm:text-2xl hover:text-green-400 transition" />
            </a>
            <a href="https://www.instagram.com/yogabayu_20/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl sm:text-2xl hover:text-pink-400 transition" />
            </a>
            {/* <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl sm:text-2xl hover:text-sky-400 transition" />
            </a> */}
            <a href="https://www.linkedin.com/in/yoga-bayu-942a322b6/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl sm:text-2xl hover:text-blue-500 transition" />
            </a>
            <a href="https://github.com/yoga-bayu" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl sm:text-2xl hover:text-gray-300 transition" />
            </a>
            <a href="https://web.facebook.com/yoga.bayu.9279" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl sm:text-2xl hover:text-blue-600 transition" />
            </a>
          </div>
        </div>

        {/* Tengah - Menu Navigasi */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-3">Menu</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-gray-300 text-sm sm:text-base">Home</Link></li>
            <li><Link href="/#about" className="hover:text-gray-300 text-sm sm:text-base">About</Link></li>
            <li><Link href="/#project" className="hover:text-gray-300 text-sm sm:text-base">Project</Link></li>
            {/* <li><Link href="/clients" className="hover:text-gray-300 text-sm sm:text-base">Clients</Link></li> */}
            <li><Link href="/#contact" className="hover:text-gray-300 text-sm sm:text-base">Contact</Link></li>
          </ul>
        </div>

        {/* Kalimat Singkat */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-3">Tentang Saya</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Seorang developer yang bersemangat membangun solusi digital kreatif dan fungsional.
          </p>
        </div>

        {/* Alamat */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-3">Alamat</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Jl Sukamantri<br />
            Pasar Kemis, Kab. Tangerang<br />
            Indonesia
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-gray-500 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Yoga Bayu - All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
