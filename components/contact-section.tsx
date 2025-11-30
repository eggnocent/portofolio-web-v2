"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeInUpVariants, staggerContainerVariants, staggerItemVariants } from "../utils/variants"
import TypewriterText from "./typewriter-text"
import { InteractiveContactButton } from "./interactive-contact-button"

export default function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');`}</style>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="min-h-screen flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-20 relative"
        style={{
          backgroundColor: "#16610E",
        }}
      >
        <div className="w-full max-w-4xl text-center">
          <motion.div variants={staggerContainerVariants}>
            {/* Main Heading */}
            <motion.div variants={staggerItemVariants} className="mb-8">
              {showContent && (
                <>
                  <TypewriterText
                    text="LET'S BUILD"
                    className="section-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide block"
                    style={{ color: "#FED16A" }}
                    speed={120}
                  />
                  <TypewriterText
                    text="SOMETHING AMAZING"
                    className="section-title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide block"
                    style={{ color: "#FED16A" }}
                    speed={120}
                    delay={1200}
                  />
                </>
              )}
            </motion.div>

            {/* Divider Line */}
            <motion.div variants={staggerItemVariants} className="mb-12">
              <div className="h-1 w-64 mx-auto rounded-full" style={{ backgroundColor: "#F97A00" }}></div>
            </motion.div>

            {/* Interactive Contact Button */}
            <motion.div variants={staggerItemVariants} className="mb-16">
              <InteractiveContactButton />
            </motion.div>

            {/* Footer Text */}
            <motion.div variants={staggerItemVariants}>
              {showContent && (
                <div style={{ fontFamily: "'Lexend', sans-serif" }}>
                  <TypewriterText
                    text="© 2025 EGI WIRATAMA • DEVELOPER • DREAMER • HUMAN"
                    className="text-sm md:text-base font-medium tracking-wider opacity-80"
                    style={{ color: "#FED16A" }}
                    speed={50}
                    delay={2500}
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
