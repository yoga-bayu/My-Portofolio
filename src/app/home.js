'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

const HomeSection = () => {
  const professions = ['Programmer', 'Designer', 'Trainer']
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [profIndex, setProfIndex] = useState(0)
  const [isClicked, setIsClicked] = useState(false)
  const [imageMoved, setImageMoved] = useState(false)

  const handleImageClick = () => setIsClicked(true)

  useEffect(() => {
    if (isClicked) return
    let typingSpeed = isDeleting ? 80 : 120
    const handleTyping = () => {
      const fullText = professions[profIndex]
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(fullText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        if (charIndex === 0) {
          setIsDeleting(false)
          setProfIndex((prev) => (prev + 1) % professions.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, profIndex, isClicked])

  return (
    <>
    <Head>
      <meta name="description" content="Fix Code adalah jasa ngoding di Tangerang yang melayani pembuatan website, aplikasi, dan solusi digital." />
    </Head>
    <section
      id="home"
      className="relative h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      <div className="relative z-20 w-full max-w-6xl mx-auto flex justify-center items-center">
        {!isClicked ? (
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full">
            <motion.div
              className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-base sm:text-lg md:text-xl text-white mb-1">Halo, It's Me</h1>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2">Yoga Bayu</h2>
              <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-4">
                And I am a{' '}
                <span className="text-[#FFB100]">{currentText}</span>
                <span className="ml-1 animate-pulse text-[#FFB100]">|</span>
              </h3>
              <p className="text-white text-sm sm:text-base max-w-xs sm:max-w-md">
                Transforming Ideas into Code, and Code into Knowledge.
              </p>

              <div className="mt-6 flex gap-4 sm:gap-5">
                <a href="https://www.instagram.com/yogabayu_20/" target="_blank" rel="noopener noreferrer" className="text-[#FFB100] text-xl sm:text-2xl transition hover:drop-shadow-[0_0_10px_#f59e0b]">
                  <FaInstagram />
                </a>
                <a href="https://web.facebook.com/yoga.bayu.9279" target="_blank" rel="noopener noreferrer" className="text-[#FFB100] text-xl sm:text-2xl transition hover:drop-shadow-[0_0_10px_#f59e0b]">
                  <FaFacebookF />
                </a>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-[#FFB100] text-xl sm:text-2xl transition hover:drop-shadow-[0_0_10px_#f59e0b]">
                  <FaWhatsapp />
                </a>
              </div>

              <div className="mt-6">
                <a
                  href="/CV_Yoga_Bayu.pdf"
                  download
                  className="inline-block px-4 py-2 sm:px-6 sm:py-2 border-2 border-[#FFB100] text-[#FFB100] font-semibold rounded-md transition hover:bg-[#FFB100] hover:text-black hover:drop-shadow-[0_0_10px_#f59e0b]"
                >
                  Download CV
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              onClick={handleImageClick}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/profile0.png"
                  alt="Foto Saya"
                  width={250}
                  height={250}
                  className="rounded-full object-cover shadow-lg drop-shadow-[0_0_25px_#f59e0b] w-40 sm:w-52 md:w-64 h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="absolute top-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center w-full px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ y: 0, x: 150 }}
              animate={{ y: -180, x: 0 }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => setImageMoved(true)}
            >
              <Image
                src="/profile0.png"
                alt="Foto Saya"
                width={150}
                height={150}
                className="rounded-full object-cover shadow-lg drop-shadow-[0_0_25px_#f59e0b] w-28 sm:w-36"
              />
            </motion.div>

            {imageMoved && (
              <>
                <motion.div
                  className="mt-[-100px] text-white px-4"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Yoga Bayu</h1>
                  <p className="text-base sm:text-lg max-w-xs sm:max-w-md mx-auto">
                    Seorang web developer dan trainer yang fokus pada pengembangan aplikasi berbasis web modern menggunakan teknologi terkini.
                  </p>
                </motion.div>

                <motion.button
                  className="mt-6 px-4 py-2 sm:px-5 sm:py-2 bg-[#FFB100] text-black font-semibold rounded-md hover:bg-yellow-400 transition"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  onClick={() => {
                    setIsClicked(false)
                    setImageMoved(false)
                  }}
                >
                  Back
                </motion.button>
              </>
            )}
          </motion.div>
        )}
      </div>
    </section>
    </>
  )
}

export default HomeSection
