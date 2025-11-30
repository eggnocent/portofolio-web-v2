"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function AnimatedGrid() {
  const [dots, setDots] = useState<Array<{ left: string; top: string; delay: number; repeatDelay: number }>>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Generate random positions hanya di client
    setDots(
      Array.from({ length: 50 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        repeatDelay: Math.random() * 10,
      }))
    )
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal Lines with Flow Effect */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute w-full h-px overflow-hidden"
          style={{
            top: `${i * 5}%`,
          }}
        >
          <motion.div
            className="absolute w-full h-px"
            style={{
              backgroundColor: "rgba(22, 97, 14, 0.15)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: 1,
              opacity: [0, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              ease: "easeOut",
              opacity: {
                duration: 3,
                times: [0, 0.5, 1],
              },
            }}
          />
          {/* Flowing Water Effect on Horizontal Lines */}
          <motion.div
            className="absolute h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 30%, rgba(173,216,230,0.6) 50%, rgba(255,255,255,0.4) 70%, transparent 100%)",
              width: "200px",
            }}
            animate={{
              x: ["-200px", "calc(100vw + 200px)"],
            }}
            transition={{
              duration: 3 + (i % 3),
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>
      ))}

      {/* Vertical Lines with Flow Effect */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute h-full w-px overflow-hidden"
          style={{
            left: `${i * 3.33}%`,
          }}
        >
          <motion.div
            className="absolute h-full w-px"
            style={{
              backgroundColor: "rgba(22, 97, 14, 0.15)",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              scaleY: 1,
              opacity: [0, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.05,
              ease: "easeOut",
              opacity: {
                duration: 3,
                times: [0, 0.5, 1],
              },
            }}
          />
          {/* Flowing Water Effect on Vertical Lines */}
          <motion.div
            className="absolute w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.4) 30%, rgba(173,216,230,0.6) 50%, rgba(255,255,255,0.4) 70%, transparent 100%)",
              height: "150px",
            }}
            animate={{
              y: ["-150px", "calc(100vh + 150px)"],
            }}
            transition={{
              duration: 4 + (i % 4),
              delay: i * 0.15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>
      ))}

      {/* Animated Dots at Intersections - Only render after mount */}
      {mounted && dots.map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: "#F97A00",
            left: dot.left,
            top: dot.top,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: dot.repeatDelay,
          }}
        />
      ))}
    </div>
  )
}
