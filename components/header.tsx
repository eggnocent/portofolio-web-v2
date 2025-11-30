"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PageTransition from "./page-transition"

export default function Header() {
  const [currentTime, setCurrentTime] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      setCurrentTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  // Navigate to page function with loading animation
  const navigateToPage = (page: string) => {
    setIsTransitioning(true)
    setIsMenuOpen(false)

    setTimeout(() => {
      window.location.href = `/${page}`
    }, 700)
  }

  // Navigate to home with loading animation
  const navigateToHome = () => {
    setIsTransitioning(true)

    setTimeout(() => {
      window.location.href = "/"
    }, 700)
  }

  // Navigation items - only Projects and Certifications
  const navItems = [
    { id: "projects", label: "Projects", emoji: "🎯", path: "projects" },
    { id: "certifications", label: "Certifications", emoji: "🏆", path: "certifications" },
    { id: "reading-klab", label: "Reading Klab", emoji: "📚", path: "reading-klab" },
  ]

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');`}</style>

      <PageTransition isActive={isTransitioning} />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* True Glassmorphism Background - Transparent with Blur Only */}
        <div className="absolute inset-0 backdrop-blur-2xl border-b border-white/30 shadow-lg">
          {/* Primary Blur Layer */}
          <div className="absolute inset-0 backdrop-blur-xl bg-white/5"></div>

          {/* Secondary Blur Layer */}
          <div className="absolute inset-0 backdrop-blur-lg bg-white/3"></div>

          {/* Subtle Glass Tint */}
          <div className="absolute inset-0 bg-white/8"></div>

          {/* Glass Reflection */}
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/8 to-transparent"></div>

          {/* Bottom Glass Shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        <div className="relative z-10 flex justify-between items-center p-6">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={navigateToHome}
          >
            <h1
              className="text-xl font-bold tracking-wider transition-colors duration-300 hover:text-orange-500"
              style={{ color: "#16610E", fontFamily: "'Press Start 2P', cursive" }}
            >
              EGI WIRATAMA
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateToPage(item.path)}
                className="group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden backdrop-blur-sm bg-white/5 border border-white/15"
                style={{
                  color: "#16610E",
                  fontFamily: "'Lexend', sans-serif",
                }}
              >
                {/* Hover Background */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, #FED16A 0%, #F97A00 50%)",
                  }}
                />

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">{item.emoji}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Time Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hidden md:block"
            >
              <span
                className="text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 bg-white/8"
                style={{
                  color: "#16610E",
                  fontFamily: "'Lexend', sans-serif",
                }}
              >
                {currentTime}
              </span>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl backdrop-blur-sm border border-white/20 transition-all duration-300 bg-white/8"
            >
              <motion.div animate={{ rotate: isMenuOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    animate={{
                      rotate: isMenuOpen ? 45 : 0,
                      y: isMenuOpen ? 2 : -2,
                    }}
                    className="w-4 h-0.5 rounded-full mb-1"
                    style={{ backgroundColor: "#16610E" }}
                  />
                  <motion.span
                    animate={{
                      opacity: isMenuOpen ? 0 : 1,
                    }}
                    className="w-4 h-0.5 rounded-full mb-1"
                    style={{ backgroundColor: "#16610E" }}
                  />
                  <motion.span
                    animate={{
                      rotate: isMenuOpen ? -45 : 0,
                      y: isMenuOpen ? -2 : 2,
                    }}
                    className="w-4 h-0.5 rounded-full"
                    style={{ backgroundColor: "#16610E" }}
                  />
                </div>
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="backdrop-blur-xl bg-white/8 border-t border-white/20">
                <div className="p-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigateToPage(item.path)}
                      className="w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 backdrop-blur-sm bg-white/5 border border-white/15"
                      style={{
                        color: "#16610E",
                        fontFamily: "'Lexend', sans-serif",
                      }}
                    >
                      <span className="text-lg">{item.emoji}</span>
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
