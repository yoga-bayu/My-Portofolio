'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { name: 'HTML', image: '/html.png',
    desc: 'HTML (HyperText Markup Language) adalah bahasa markah standar yang digunakan untuk membuat dan menyusun halaman web. Dengan HTML, developer dapat menentukan struktur dasar dari halaman web, seperti menambahkan teks, gambar, tautan, video, dan berbagai elemen lainnya. HTML bukanlah bahasa pemrograman, melainkan bahasa markah yang bertugas memberi makna pada bagian-bagian konten agar dapat ditampilkan oleh browser secara terstruktur. '},
  { name: 'CSS', image: '/css.png', 
    desc: 'CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mengatur tampilan dan gaya elemen-elemen dalam halaman web, seperti warna, tata letak, ukuran, dan font. Dengan CSS, pengembang bisa memisahkan desain dari struktur konten HTML, sehingga membuat halaman web lebih rapi, konsisten, dan mudah diubah.' },
  { name: 'JavaScript', image: '/js.png',
    desc: 'JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif dan dinamis. Dengan JavaScript, elemen-elemen pada halaman web bisa merespons aksi pengguna, seperti klik tombol, pengisian formulir, atau animasi. JavaScript berjalan di browser dan juga bisa digunakan di server lewat platform seperti Node.js. Dikembangkan pertama kali pada tahun 1995 oleh Brendan Eich, JavaScript kini menjadi salah satu bahasa pemrograman paling populer di dunia web.' },
  { name: 'Node JS', image: '/nodejs.png', 
    desc: 'Node.js adalah platform runtime JavaScript yang memungkinkan menjalankan kode JavaScript di luar browser, yaitu di server. Dengan Node.js, pengembang bisa membangun aplikasi backend yang cepat dan scalable menggunakan JavaScript. Node.js dibuat pada tahun 2009 oleh Ryan Dahl dan menggunakan mesin V8 milik Google Chrome untuk mengeksekusi kode. Platform ini populer untuk membuat server web, API, dan aplikasi real-time karena kemampuan event-driven dan non-blocking I/O-nya.' },
  { name: 'Typescript', image: '/typescript.png', 
    desc: 'TypeScript adalah bahasa pemrograman yang merupakan pengembangan dari JavaScript dengan menambahkan fitur static typing atau pengetikan statis. Artinya, TypeScript memungkinkan pengembang untuk mendefinisikan tipe data pada variabel, fungsi, dan objek, sehingga dapat mendeteksi kesalahan kode lebih awal saat pengembangan. Dikembangkan oleh Microsoft dan dirilis pertama kali pada 2012, TypeScript sangat populer dalam pengembangan aplikasi besar karena meningkatkan kualitas dan maintainability kode. Setelah ditulis, kode TypeScript dikompilasi menjadi JavaScript agar dapat dijalankan di browser atau lingkungan JavaScript lainnya.' },
  { name: 'React JS', image: '/react.png', 
    desc: 'React JS adalah sebuah library JavaScript yang dikembangkan oleh Facebook untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis, terutama pada aplikasi web satu halaman (single-page applications). React menggunakan konsep component-based architecture, di mana UI dibagi menjadi komponen-komponen kecil yang dapat digunakan ulang, membuat pengembangan lebih terstruktur dan mudah dikelola. React juga menggunakan virtual DOM yang efisien untuk memperbarui tampilan dengan cepat tanpa harus me-render seluruh halaman, sehingga memberikan performa yang lebih baik. Sejak dirilis pada 2013, React menjadi salah satu teknologi front-end paling populer di dunia pengembangan web.' },
  { name: 'Vite', image: '/vite.png', 
    desc: 'Vite adalah sebuah build tool modern yang dirancang untuk pengembangan frontend yang cepat dan efisien. Dikembangkan oleh Evan You, pencipta Vue.js, Vite menggunakan teknologi ES modules di browser untuk melakukan hot module replacement (HMR) dengan sangat cepat tanpa perlu melakukan bundling saat pengembangan. Selain itu, saat build produksi, Vite menggunakan Rollup untuk menghasilkan bundle yang dioptimalkan. Vite mendukung berbagai framework populer seperti Vue, React, dan lainnya, serta menyediakan konfigurasi yang mudah dan performa build yang unggul dibandingkan build tools tradisional.'},
    { name: 'Vue JS', image: '/vue.png', 
    desc: 'Vue.js adalah sebuah framework JavaScript progresif yang digunakan untuk membangun antarmuka pengguna dan aplikasi web interaktif. Dikembangkan oleh Evan You dan dirilis pertama kali pada 2014, Vue fokus pada kemudahan penggunaan dan fleksibilitas, sehingga cocok baik untuk proyek kecil maupun besar. Vue menggunakan pendekatan component-based yang memungkinkan pengembang membuat bagian UI yang dapat digunakan ulang, serta menyediakan reaktivitas data yang efisien untuk memperbarui tampilan secara otomatis saat data berubah. ' },
  { name: 'Next JS', image: '/next.png', 
    desc: 'Next.js adalah framework React yang dikembangkan oleh Vercel untuk membangun aplikasi web modern dengan performa tinggi dan pengalaman pengembang yang baik. Next.js mendukung fitur-fitur seperti server-side rendering (SSR), static site generation (SSG), dan incremental static regeneration (ISR), yang memungkinkan pembuatan situs web yang cepat, SEO-friendly, dan mudah di-scale. Framework ini juga menyediakan routing otomatis berdasarkan struktur folder, dukungan API routes, dan optimasi built-in seperti pembagian kode (code splitting) serta prefetching. Sejak dirilis pada 2016, Next.js menjadi salah satu pilihan utama bagi pengembang React untuk membangun aplikasi web yang dinamis dan statis secara efisien.' },
  { name: 'Express JS', image: '/expres.png', 
    desc: 'Express.js adalah sebuah framework web minimalis dan fleksibel untuk Node.js yang memudahkan pengembangan aplikasi server dan API. Dirilis pertama kali pada tahun 2010, Express menyediakan sekumpulan fitur dasar untuk membangun server HTTP, mengelola routing, middleware, dan menangani permintaan serta respons dengan mudah. Dengan Express, pengembang dapat membuat backend aplikasi web secara cepat dan efisien tanpa harus membangun semuanya dari nol. Framework ini sangat populer karena kesederhanaannya, performa yang baik, serta kemampuannya untuk diintegrasikan dengan berbagai teknologi lain dalam ekosistem JavaScript.' },
  { name: 'Nuxt JS', image: '/nuxtjs.png', 
    desc: 'Nuxt.js adalah framework berbasis Vue.js yang dirancang untuk membangun aplikasi web modern dengan rendering sisi server (SSR) dan static site generation (SSG). Nuxt memudahkan pengembang membuat aplikasi Vue yang cepat, SEO-friendly, dan mudah di-maintain dengan menyediakan struktur proyek terorganisir serta fitur otomatis seperti routing, pengelolaan state, dan konfigurasi build. Pertama kali dirilis pada tahun 2016, Nuxt kini menjadi salah satu solusi populer untuk pengembangan aplikasi Vue yang membutuhkan performa tinggi dan pengalaman pengguna yang mulus.' },
  { name: 'RedwoodJS', image: '/redwood.png', 
    desc: 'RedwoodJS adalah framework full-stack modern yang dibangun di atas React dan GraphQL, dirancang untuk memudahkan pengembangan aplikasi web dengan pendekatan terpadu dari frontend hingga backend. RedwoodJS menyediakan arsitektur opini yang menggabungkan React untuk antarmuka pengguna, GraphQL sebagai API, serta Prisma untuk manajemen basis data. Framework ini mendukung deployment serverless dan fokus pada produktivitas pengembang dengan tooling bawaan seperti generator kode, testing, dan integrasi yang mulus, sehingga cocok untuk membangun aplikasi web skala kecil hingga menengah dengan cepat dan efisien.' },
  { name: 'Blitz', image: '/blitz.png', 
    desc: 'Blitz.js adalah framework full-stack berbasis React yang dibangun di atas Next.js, dirancang untuk menyederhanakan pengembangan aplikasi web dengan konsep “Zero-API” — artinya frontend dan backend terintegrasi secara mulus tanpa perlu menulis API secara eksplisit. Blitz menyediakan fitur bawaan seperti autentikasi, database ORM (menggunakan Prisma), dan routing otomatis, sehingga memungkinkan pengembang fokus pada logika bisnis tanpa harus mengatur banyak konfigurasi. Framework ini cocok untuk membangun aplikasi web modern dengan produktivitas tinggi dan struktur kode yang terorganisir.' },
  { name: 'Remix', image: '/remix.png', 
    desc: 'Remix adalah framework React modern yang fokus pada performa, pengalaman pengguna yang cepat, dan kemudahan pengembangan aplikasi web. Remix mengoptimalkan pengambilan data (data loading) dan rendering sisi server (server-side rendering/SSR) untuk memberikan respons yang cepat dan interaktif. Dengan arsitektur yang mendukung routing berbasis file dan penanganan data yang efisien, Remix memungkinkan pengembang membuat aplikasi yang SEO-friendly dan mudah dikelola. Framework ini sangat cocok untuk membangun aplikasi web dinamis dengan pengalaman pengguna yang mulus dan performa tinggi.' },
  { name: 'Refine', image: '/refine.png', 
    desc: 'Refine adalah framework open-source berbasis React yang dirancang untuk mempercepat pengembangan aplikasi CRUD (Create, Read, Update, Delete) dengan fokus pada kemudahan integrasi data dan antarmuka pengguna. Dengan Refine, pengembang dapat dengan cepat membuat aplikasi bisnis seperti dashboard admin, aplikasi manajemen data, dan sistem internal tanpa harus membangun dari nol. Framework ini menyediakan komponen siap pakai, dukungan API data, dan integrasi dengan berbagai layanan backend, sehingga mempercepat siklus pengembangan dan meningkatkan produktivitas. Refine cocok untuk pengembang yang ingin membangun aplikasi data-driven dengan cepat dan efisien.' },
  { name: 'Gatsby', image: '/gatsby.png', 
    desc: 'Gatsby adalah framework berbasis React yang fokus pada pembuatan situs web statis (static site generator) yang sangat cepat dan optimal untuk SEO. Gatsby menggabungkan kekuatan React dengan GraphQL untuk mengambil data dari berbagai sumber seperti CMS, file markdown, API, dan lainnya, lalu menghasilkan halaman statis yang ringan dan cepat diakses. Pertama dirilis pada tahun 2015, Gatsby populer digunakan untuk membuat blog, portofolio, dan situs bisnis yang membutuhkan performa tinggi serta kemudahan dalam pengelolaan konten.' },
  { name: 'Astro', image: '/astro.png', 
    desc: 'Astro adalah framework web modern yang dirancang untuk membangun situs yang cepat, ringan, dan ramah SEO. Salah satu fitur utama Astro adalah pendekatan "island architecture", di mana hanya bagian interaktif dari halaman yang menggunakan JavaScript—sisanya dibangun sebagai HTML statis, sehingga membuat loading halaman menjadi sangat cepat. Astro mendukung berbagai framework UI seperti React, Vue, Svelte, dan Solid dalam satu proyek. Dengan kemampuan rendering statis (Static Site Generation/SSG) dan dukungan integrasi yang luas, Astro menjadi pilihan populer untuk membuat blog, dokumentasi, dan website statis modern.'},
  { name: 'GraphQL', image: '/graphql.png', 
    desc: 'GraphQL adalah bahasa query untuk API yang dikembangkan oleh Facebook pada tahun 2012 dan dipublikasikan secara terbuka pada 2015. GraphQL memungkinkan klien untuk meminta data secara spesifik sesuai kebutuhan, sehingga hanya data yang diperlukan saja yang dikirim oleh server. Ini berbeda dengan REST yang biasanya mengirimkan data berlebihan atau kurang dari yang dibutuhkan. Dengan GraphQL, pengembang bisa mengambil banyak sumber data sekaligus dalam satu permintaan, membuat aplikasi lebih efisien dan fleksibel dalam pengambilan data.' },
  { name: 'Tailwind CSS', image: '/tailwind.png', 
    desc: 'Tailwind CSS adalah framework CSS utility-first yang dirancang untuk mempercepat proses pengembangan desain web dengan menyediakan kelas-kelas kecil yang bisa langsung digunakan untuk mengatur tata letak, warna, ukuran, dan aspek visual lainnya. Alih-alih menulis CSS dari nol, pengembang cukup menggabungkan kelas-kelas Tailwind di elemen HTML untuk membuat tampilan yang konsisten dan responsif. Tailwind populer karena fleksibilitasnya yang tinggi dan kemudahan dalam membuat desain yang custom tanpa harus menulis banyak kode CSS secara manual.' },
  { name: 'Bootstrap', image: '/bootstrap.png', 
    desc: 'Bootstrap adalah framework CSS open-source yang sangat populer untuk membangun website dan aplikasi web yang responsif dan mobile-first. Dikembangkan oleh Twitter pada tahun 2011, Bootstrap menyediakan kumpulan komponen siap pakai seperti tombol, form, navbar, grid system, dan banyak lagi, sehingga memudahkan pengembang untuk membuat tampilan yang konsisten dan profesional dengan cepat. Selain CSS, Bootstrap juga menyertakan JavaScript untuk interaksi dinamis seperti modal, carousel, dan dropdown. Bootstrap banyak digunakan karena kemudahan penggunaannya dan dukungannya terhadap berbagai perangkat dan browser.' },
  { name: 'Python', image: '/python.png', 
    desc: 'Python adalah bahasa pemrograman tingkat tinggi yang mudah dipelajari dan digunakan, terkenal karena sintaksnya yang sederhana dan jelas. Python sangat fleksibel dan digunakan di berbagai bidang seperti pengembangan web, ilmu data, kecerdasan buatan, otomasi, serta pengembangan aplikasi desktop dan server. Bahasa ini memiliki ekosistem pustaka yang sangat luas, yang memungkinkan pengembang melakukan berbagai tugas kompleks dengan lebih efisien. Python juga mendukung berbagai paradigma pemrograman, termasuk pemrograman berorientasi objek dan fungsional, menjadikannya pilihan populer di kalangan pemula maupun profesional.' },
  { name: 'PHP', image: '/php.png', 
    desc: 'PHP adalah bahasa pemrograman server-side yang dirancang khusus untuk pengembangan web dinamis. PHP memungkinkan pembuatan halaman web yang dapat berinteraksi dengan database dan menghasilkan konten secara otomatis berdasarkan permintaan pengguna. Sejak awal kemunculannya pada tahun 1994, PHP telah menjadi salah satu bahasa yang paling banyak digunakan untuk membangun situs web dan aplikasi web, terutama dengan dukungan CMS populer seperti WordPress, Drupal, dan Joomla. PHP mudah dipelajari, memiliki banyak pustaka dan framework pendukung, serta dapat berjalan di berbagai platform dan server web.' },
]

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)

  return (
    <section className="relative min-h-screen bg-gray-50 px-4 py-10">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Teknologi yang Saya Kuasai
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white shadow rounded-lg p-3 sm:p-4 transition-transform duration-300 cursor-pointer"
            whileHover={{
              scale: 1.05,
              transition: { type: 'spring', stiffness: 200, damping: 15 },
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedSkill(skill)}
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src={skill.image}
                alt={skill.name}
                fill
                className="object-contain rounded-md"
              />
            </div>
            <h3 className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-800 text-center">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg max-w-lg w-full mx-4 p-6 relative z-60"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={selectedSkill.image}
                  alt={selectedSkill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-center text-xl font-bold text-gray-800 mb-2">
                {selectedSkill.name}
              </h3>
              <p className="text-gray-600 text-sm text-justify">
                {selectedSkill.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default SkillsSection
