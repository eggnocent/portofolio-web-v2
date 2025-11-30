"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PillButton } from "./pill-button"

const pillButtons = [
  // Left side buttons
  {
    id: 1,
    label: "Instagram",
    emoji: "📷",
    bgColor: "#F97A00",
    hoverColor: "#EA580C",
    side: "left",
    position: "top",
    animate: { x: -120, y: -120, rotate: -15 },
    link: "https://www.instagram.com/egnooc/",
  },
  {
    id: 2,
    label: "LinkedIn",
    emoji: "💼",
    bgColor: "#16610E",
    hoverColor: "#0F4A0A",
    side: "left",
    position: "middle",
    animate: { x: -140, y: 0, rotate: 0 },
    link: "https://www.linkedin.com/in/egi-wiratama-b04133285/",
  },
  {
    id: 3,
    label: "GitHub",
    emoji: "💻",
    bgColor: "#FED16A",
    hoverColor: "#FDC935",
    side: "left",
    position: "bottom",
    animate: { x: -120, y: 120, rotate: 15 },
    link: "https://github.com/eggnocent",
  },

  // Right side buttons
  {
    id: 4,
    label: "Email",
    emoji: "📧",
    bgColor: "#F97A00",
    hoverColor: "#EA580C",
    side: "right",
    position: "top",
    animate: { x: 120, y: -120, rotate: 15 },
    link: "mailto:egiwiratamaaa@gmail.com",
  },
  {
    id: 5,
    label: "Spotify",
    emoji: "🎵",
    bgColor: "#16610E",
    hoverColor: "#0F4A0A",
    side: "right",
    position: "middle",
    animate: { x: 140, y: 0, rotate: 0 },
    link: "https://open.spotify.com/user/31z35b5oyfvsuisfu7jeo2s3qqii?si=D1TfLuJHQh-STnIV4OKuqA",
  },
  {
    id: 6,
    label: "Medium",
    emoji: "✍️",
    bgColor: "#FED16A",
    hoverColor: "#FDC935",
    side: "right",
    position: "bottom",
    animate: { x: 120, y: 120, rotate: -15 },
    link: "https://medium.com/@egiwiratamaaa",
  },
]

export function InteractiveContactButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMainButtonClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handlePillClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="relative flex items-center justify-center min-h-[280px]">
      {/* Main Get in Touch Button */}
      <motion.button
        onClick={handleMainButtonClick}
        className="relative px-8 py-4 text-white font-bold text-lg rounded-full shadow-xl border border-white/20 backdrop-blur-md overflow-hidden z-20"
        style={{
          background: "linear-gradient(135deg, #F97316CC, #EA580CCC)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 16px 50px rgba(0,0,0,0.4), 0 0 30px rgba(249, 115, 22, 0.3)",
          background: "linear-gradient(135deg, #F97316DD, #EA580CDD)",
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: isExpanded ? 180 : 0,
          scale: isExpanded ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <span className="relative z-10">Get in Touch</span>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-60" />

        {/* Inner glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
      </motion.button>

      {/* Pill Buttons Container */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {pillButtons.map((button, index) => (
              <motion.div
                key={button.id}
                className="absolute z-10"
                initial={{
                  opacity: 0,
                  scale: 0.3,
                  x: 0,
                  y: 0,
                  rotate: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: button.animate.x,
                  y: button.animate.y,
                  rotate: button.animate.rotate,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.3,
                  x: 0,
                  y: 0,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: index * 0.08,
                }}
              >
                <PillButton
                  label={button.label}
                  emoji={button.emoji}
                  bgColor={button.bgColor}
                  hoverColor={button.hoverColor}
                  onClick={() => handlePillClick(button.link)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
