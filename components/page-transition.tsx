"use client"

import { motion, AnimatePresence } from "framer-motion"

interface PageTransitionProps {
  isActive: boolean
}

export default function PageTransition({ isActive }: PageTransitionProps) {
  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Layer 1 - Yellow */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              backgroundColor: "#FED16A",
              transformOrigin: "left",
            }}
            className="absolute inset-0"
          />

          {/* Layer 2 - Orange */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            style={{
              backgroundColor: "#F97A00",
              transformOrigin: "left",
            }}
            className="absolute inset-0"
          />

          {/* Layer 3 - Green (main) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            style={{
              backgroundColor: "#16610E",
              transformOrigin: "left",
            }}
            className="absolute inset-0 flex items-center justify-center"
          />
        </div>
      )}
    </AnimatePresence>
  )
}
