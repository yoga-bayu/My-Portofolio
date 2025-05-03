'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skills = [
  { name: 'HTML', image: '/html.png' },
  { name: 'CSS', image: '/css.png' },
  { name: 'JavaScript', image: '/js.png' },
  { name: 'React JS', image: '/react.png' },
  { name: 'Vue JS', image: '/vue.png' },
  { name: 'Next JS', image: '/next.png' },
  { name: 'Express JS', image: '/expres.png' },
  { name: 'Gatsby', image: '/gatsby.png' },
  { name: 'Tailwind CSS', image: '/tailwind.png' },
  { name: 'Bootstrap', image: '/bootstrap.png' },
]

const SkillsSection = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Teknologi yang Saya Kuasai
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 transition-shadow duration-300"
            whileHover={{
              scale: 1.05,
              transition: { type: 'spring', stiffness: 200, damping: 15 },
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
              <Image
                src={skill.image}
                alt={skill.name}
                fill
                className="object-contain rounded-md"
              />
            </div>
            <h3 className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 text-center">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
