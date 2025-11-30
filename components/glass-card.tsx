"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hoverScale?: number
}

export default function GlassCard({ children, className = "", onClick, hoverScale = 1.02 }: GlassCardProps) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 300)
    if (onClick) onClick()
  }

  return (
    <motion.div
      className={`backdrop-blur-md bg-white/10 border border-white/20 shadow-lg transition-all duration-300 cursor-pointer ${className}`}
      whileHover={{
        scale: hoverScale,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
      }}
      whileTap={{ scale: 0.98 }}
      animate={{
        rotateY: isClicked ? 15 : 0,
        rotateX: isClicked ? -5 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onClick={handleClick}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  )
}
