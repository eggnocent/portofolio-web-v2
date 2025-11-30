"use client"

import { motion } from "framer-motion"

interface PillButtonProps {
  label: string
  emoji: string
  bgColor: string
  hoverColor: string
  onClick?: () => void
}

export function PillButton({ label, emoji, bgColor, hoverColor, onClick }: PillButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg border border-white/10 backdrop-blur-md overflow-hidden"
      style={{
        backgroundColor: bgColor,
        background: `linear-gradient(135deg, ${bgColor}CC, ${bgColor}99)`,
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: hoverColor,
        boxShadow: "0 12px 40px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.1)",
        background: `linear-gradient(135deg, ${hoverColor}DD, ${hoverColor}AA)`,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="flex items-center gap-2 relative z-10">
        <span className="text-base">{emoji}</span>
        <span className="whitespace-nowrap font-medium">{label}</span>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-60" />

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
    </motion.button>
  )
}
