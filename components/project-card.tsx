"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef, useState } from "react"

interface ProjectCardProps {
  title: string
  category: string
  description: string
  technologies: string[]
  features: string[]
  image: string
  status?: string
  index?: number
  colorVariant?: "light" | "green" | "orange"
}

export default function ProjectCard({
  title,
  category,
  description,
  status,
  index = 0,
  colorVariant = "light",
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const getColorScheme = () => {
    switch (colorVariant) {
      case "green":
        return {
          bg: "#16610E",
          title: "#FFFFFF",
          text: "rgba(255, 255, 255, 0.85)",
          button: "#FFFFFF",
          buttonText: "#16610E",
          glow: "rgba(22, 97, 14, 0.6)",
          glowSecondary: "rgba(74, 222, 128, 0.4)",
          shimmer: "rgba(74, 222, 128, 0.3)",
        }
      case "orange":
        return {
          bg: "#F97A00",
          title: "#000000",
          text: "rgba(0, 0, 0, 0.75)",
          button: "#FFFFFF",
          buttonText: "#F97A00",
          glow: "rgba(249, 122, 0, 0.6)",
          glowSecondary: "rgba(254, 209, 106, 0.4)",
          shimmer: "rgba(254, 209, 106, 0.4)",
        }
      default:
        return {
          bg: "#F5F5F5",
          title: "#000000",
          text: "#3D3D3D",
          button: "#FFFFFF",
          buttonText: "#000000",
          glow: "rgba(100, 100, 100, 0.3)",
          glowSecondary: "rgba(200, 200, 200, 0.4)",
          shimmer: "rgba(255, 255, 255, 0.6)",
        }
    }
  }

  const colors = getColorScheme()

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative h-full"
    >
      <motion.div
        className="absolute -inset-[2px] rounded-[2.1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, ${colors.glow}, ${colors.glowSecondary}, ${colors.glow})`,
          backgroundSize: "200% 100%",
        }}
        animate={
          isHovered
            ? {
                backgroundPosition: ["0% 50%", "200% 50%"],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-[2rem] blur-xl transition-all duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.glow}, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      <div
        className="relative overflow-hidden rounded-[2rem] h-full min-h-[480px] flex flex-col transition-all duration-500"
        style={{
          backgroundColor: colors.bg,
          boxShadow: isHovered
            ? `0 25px 60px -12px rgba(0, 0, 0, 0.3), 0 0 40px ${colors.glow}`
            : "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          transform: "translateZ(20px)",
        }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 40%, ${colors.shimmer} 45%, ${colors.shimmer} 55%, transparent 60%)`,
            backgroundSize: "200% 100%",
          }}
          animate={
            isHovered
              ? {
                  backgroundPosition: ["-100% 0%", "200% 0%"],
                }
              : {
                  backgroundPosition: "-100% 0%",
                }
          }
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />

        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: colors.glowSecondary,
                  left: `${20 + i * 12}%`,
                  bottom: "10%",
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: [-20, -100 - Math.random() * 50],
                  opacity: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 30],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}

        <svg className="absolute top-0 left-0 w-20 h-20 pointer-events-none" viewBox="0 0 80 80">
          <motion.path
            d="M 0 30 L 0 0 L 30 0"
            fill="none"
            stroke={colors.glowSecondary}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isHovered ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </svg>
        <svg className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none rotate-180" viewBox="0 0 80 80">
          <motion.path
            d="M 0 30 L 0 0 L 30 0"
            fill="none"
            stroke={colors.glowSecondary}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isHovered ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
        </svg>

        {status && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.15 + 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="absolute top-6 right-6 z-20 w-14 h-14 rounded-full flex items-center justify-center text-xs font-bold uppercase"
            style={{
              backgroundColor: "#3B82F6",
              color: "#FFFFFF",
              fontSize: "11px",
              letterSpacing: "0.5px",
              boxShadow: isHovered ? "0 0 20px rgba(59, 130, 246, 0.5)" : "none",
            }}
          >
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
            )}
            {status}
          </motion.div>
        )}

        <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold leading-tight mb-6 pr-16"
            style={{
              color: colors.title,
            }}
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
            className="text-base leading-relaxed flex-grow"
            style={{
              color: colors.text,
              fontWeight: 400,
            }}
          >
            {description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 self-start flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 relative overflow-hidden"
            style={{
              backgroundColor: colors.button,
              color: colors.buttonText,
              fontSize: "14px",
              boxShadow: isHovered
                ? `0 4px 15px rgba(0,0,0,0.15), 0 0 20px ${colors.glow}`
                : "0 2px 8px rgba(0,0,0,0.08)",
              border: colorVariant === "light" ? "1px solid rgba(0,0,0,0.1)" : "none",
            }}
          >
            {category}
            <motion.span
              animate={isHovered ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
