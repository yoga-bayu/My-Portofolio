import { motion } from 'framer-motion'

const ProjectSection = () => {
  return (
    <section id="project" className="text-center bg-gray-50  px-4">
      <motion.h2
        className="text-4xl font-bold pt-20 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-gray-800">My </span>
        <span className="text-amber-600">Project</span>
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Kumpulan karya terbaik saya yang menunjukkan keahlian dalam pengembangan web. 
        Mulai dari desain UI yang menarik hingga integrasi backend yang kompleks — 
        semua proyek ini adalah bukti nyata dari semangat dan keahlian saya di dunia teknologi.
      </motion.p>
    </section>
  )
}

export default ProjectSection
