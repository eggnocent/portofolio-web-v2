"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeInUpVariants, staggerContainerVariants, staggerItemVariants } from "../utils/variants"
import TypewriterText from "./typewriter-text"

export default function AboutSection() {
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

  const runningTextItems = [
    "APP DEVELOPMENT",
    "BACKEND ENGINEERING",
    "SYSTEM ARCHITECTURE",
    "API DESIGN",
    "DATABASE OPTIMIZATION",
    "STATIC CODE ANALYST",
  ]

  return (
    <>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="min-h-screen flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-20"
        style={{ backgroundColor: "#FFF4A4" }}
      >
        <div className="w-full max-w-4xl">
          <motion.div variants={staggerContainerVariants}>
            <motion.div variants={staggerItemVariants}>
              {showContent && (
                <>
                  <TypewriterText
                    text="ABOUT"
                    className="section-title text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "#16610E" }}
                    speed={120}
                  />
                  <div className="h-1 w-24 rounded-full mb-8" style={{ backgroundColor: "#F97A00" }}></div>

                  <div
                    className="space-y-6 text-base md:text-lg leading-relaxed max-w-3xl"
                    style={{ color: "#16610E", fontFamily: "'Lexend', sans-serif" }}
                  >
                    <TypewriterText
                      text="Systems shouldn't just be cool. They should work—securely, consistently, and without compromise. Reliable and predictable performance isn't optional, it's essential. Every layer protected, every interaction trusted."
                      speed={30}
                      delay={800}
                    />

                    <TypewriterText
                      text="Less is more. Code shouldn't be there just because it's easier to write—it should exist because it's necessary. Clean architecture means secure architecture. Every component deliberate, every dependency validated."
                      speed={30}
                      delay={2500}
                    />

                    <TypewriterText
                      text="Technology should amplify the human experience. It should deepen, not distract or dilute. But first and foremost, it should be safe. Security isn't a feature—it's the foundation that makes everything else possible."
                      speed={30}
                      delay={4000}
                    />
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <div className="w-full overflow-hidden py-6" style={{ backgroundColor: "#16610E" }}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate items for seamless loop */}
          {[...runningTextItems, ...runningTextItems, ...runningTextItems, ...runningTextItems].map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center mx-8 text-lg md:text-2xl font-bold tracking-wider"
              style={{
                color: "#FED16A",
                fontFamily: "'Press Start 2P', cursive",
              }}
            >
              <span className="w-3 h-3 rounded-full mr-8" style={{ backgroundColor: "#F97A00" }} />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  )
}
