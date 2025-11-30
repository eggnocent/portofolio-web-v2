"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useTypewriter } from "../hooks/useTypewriter"

interface TypewriterTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  style?: React.CSSProperties
}

export default function TypewriterText({ text, className = "", speed = 80, delay = 0, style }: TypewriterTextProps) {
  const { displayText, isComplete } = useTypewriter(text, speed, delay)

  return (
    <div className={className} style={style}>
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block w-0.5 h-6 ml-1"
          style={{ backgroundColor: "#F97A00" }}
        />
      )}
    </div>
  )
}
