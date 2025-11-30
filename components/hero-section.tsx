"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeInUpVariants } from "../utils/variants"
import TypewriterText from "./typewriter-text"

export default function HeroSection() {
  const [showHello, setShowHello] = useState(false)
  const [showLine, setShowLine] = useState(false)
  const [lineProgress, setLineProgress] = useState(0)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showKeywords, setShowKeywords] = useState(false)

  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      // Animation sequence starts only when in view
      const timer1 = setTimeout(() => {
        setShowHello(true)
        // Start the SVG animation
        controls.start({
          pathLength: 1,
          transition: { duration: 3, ease: "easeInOut" },
        })
      }, 300)

      const timer2 = setTimeout(() => {
        setShowLine(true)
        // Animate progress bar
        let progress = 0
        const progressInterval = setInterval(() => {
          progress += 2
          setLineProgress(progress)
          if (progress >= 100) {
            clearInterval(progressInterval)
          }
        }, 20)
      }, 3500) // Start after SVG animation

      const timer3 = setTimeout(() => setShowSubtitle(true), 4500)
      const timer4 = setTimeout(() => setShowKeywords(true), 5100)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
        clearTimeout(timer4)
      }
    }
  }, [controls, inView])

  const onComplete = () => {
    // Animation completed callback
    console.log("Hello animation completed")
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUpVariants}
      className="min-h-screen flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-20 relative"
    >
      <div className="text-center w-full max-w-6xl">
        {/* Motion SVG Hello Animation */}
        <div
          className={`mb-4 w-full max-w-4xl mx-auto h-64 md:h-80 transition-all duration-1000 ease-out ${
            showHello ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <motion.svg
            className="w-full h-full"
            viewBox="0 0 1230.94 414.57"
            initial={{ pathLength: 0 }}
            animate={controls}
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M-293.58-104.62S-103.61-205.49-60-366.25c9.13-32.45,9-58.31,0-74-10.72-18.82-49.69-33.21-75.55,31.94-27.82,70.11-52.22,377.24-44.11,322.48s34-176.24,99.89-183.19c37.66-4,49.55,23.58,52.83,47.92a117.06,117.06,0,0,1-3,45.32c-7.17,27.28-20.47,97.67,33.51,96.86,66.93-1,131.91-53.89,159.55-84.49,31.1-36.17,31.1-70.64,19.27-90.25-16.74-29.92-69.47-33-92.79,16.73C62.78-179.86,98.7-93.8,159-81.63S302.7-99.55,393.3-269.92c29.86-58.16,52.85-114.71,46.14-150.08-7.44-39.21-59.74-54.5-92.87-8.7-47,65-61.78,266.62-34.74,308.53S416.62-58,481.52-130.31s133.2-188.56,146.54-256.23c14-71.15-56.94-94.64-88.4-47.32C500.53-375,467.58-229.49,503.3-127a73.73,73.73,0,0,0,23.43,33.67c25.49,20.23,55.1,16,77.46,6.32a111.25,111.25,0,0,0,30.44-19.87c37.73-34.23,29-36.71,64.58-127.53C724-284.3,785-298.63,821-259.13a71,71,0,0,1,13.69,22.56c17.68,46,6.81,80-6.81,107.89-12,24.62-34.56,42.72-61.45,47.91-23.06,4.45-48.37-.35-66.48-24.27a78.88,78.88,0,0,1-12.66-25.8c-14.75-51,4.14-88.76,11-101.41,6.18-11.39,37.26-69.61,103.42-42.24,55.71,23.05,100.66-23.31,100.66-23.31"
              transform="translate(311.08 476.02)"
              fill="none"
              stroke="#F97A00"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="35"
              initial={{ pathLength: 0 }}
              animate={controls}
              onAnimationComplete={onComplete}
            />
          </motion.svg>
        </div>

        {/* Enhanced Loading Line */}
        <div
          className={`relative mx-auto mb-6 transition-all duration-500 ease-out ${
            showLine ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background line */}
          <div className="h-1 w-40 mx-auto rounded-full" style={{ backgroundColor: "rgba(249, 122, 0, 0.2)" }}></div>
          {/* Progress line */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-75 ease-out"
            style={{
              backgroundColor: "#F97A00",
              width: `${(lineProgress / 100) * 160}px`,
              boxShadow: "0 0 10px rgba(249, 122, 0, 0.5)",
            }}
          ></div>
          {/* Glowing dot at the end */}
          {lineProgress > 0 && (
            <div
              className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full"
              style={{
                backgroundColor: "#F97A00",
                left: `calc(50% + ${((lineProgress / 100) * 160) / 2 - 80}px)`,
                boxShadow: "0 0 8px rgba(249, 122, 0, 0.8)",
                animation: lineProgress < 100 ? "pulse 1s infinite" : "none",
              }}
            ></div>
          )}
        </div>

        {/* Subtitle with Typewriter Effect */}
        {showSubtitle && (
          <TypewriterText
            text="I'M EGI, A DEVELOPER WHO CARES ABOUT"
            className="text-lg md:text-xl mb-6 font-medium tracking-wide"
            style={{ color: "#16610E" }}
            speed={60}
          />
        )}

        {/* Keywords with Typewriter Effect */}
        {showKeywords && (
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-2xl md:text-3xl font-bold">
            <TypewriterText text="SECURE" style={{ color: "#16610E" }} speed={100} delay={0} />
            <span className="text-4xl" style={{ color: "#F97A00" }}>
              •
            </span>
            <TypewriterText text="ARCHITECTURE" style={{ color: "#16610E" }} speed={100} delay={800} />
            <span className="text-4xl" style={{ color: "#F97A00" }}>
              •
            </span>
            <TypewriterText text="QUALITY" style={{ color: "#16610E" }} speed={100} delay={1600} />
          </div>
        )}
      </div>
    </motion.section>
  )
}
