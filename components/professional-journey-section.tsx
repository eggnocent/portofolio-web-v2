"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeInUpVariants, staggerContainerVariants, staggerItemVariants } from "../utils/variants"
import TypewriterText from "./typewriter-text"
import { Lexend } from "next/font/google"

const lexend = Lexend({ subsets: ["latin"] })

function Web3Card({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative ${className}`}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-lg opacity-0 blur-sm"
        style={{
          background: "linear-gradient(135deg, #F97A00 0%, #FED16A 50%, #F97A00 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          backgroundPosition: isHovered ? ["0% 0%", "100% 100%", "0% 0%"] : "0% 0%",
        }}
        transition={{
          opacity: { duration: 0.3 },
          backgroundPosition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      />

      {/* Card content */}
      <motion.div
        className="relative backdrop-blur-md rounded-lg overflow-hidden"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(249, 122, 0, 0.15), 0 0 30px rgba(254, 209, 106, 0.1)"
            : "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
        }}
        animate={{
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(249, 122, 0, 0.2), 0 0 40px rgba(254, 209, 106, 0.15)"
            : "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Subtle shine effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 60%)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: isHovered ? ["200% 0%", "-200% 0%"] : "200% 0%",
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 p-6">{children}</div>
      </motion.div>
    </motion.div>
  )
}

export default function ProfessionalJourneySection() {
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

  const journeyItems = [
    {
      id: 1,
      company: "SysBraykr",
      position: "Intern Backend Engineering",
      period: "July 2024 - April 2025",
      location: "Offline",
      description:
        "Passionate backend engineering intern focused on building secure, scalable systems and learning modern development practices.",
      achievements: [
        "Developing proficiency in Go for high-performance backend services",
        "Gaining hands-on experience with PostgreSQL database design and optimization",
        "Studying secure coding practices and vulnerability prevention techniques",
        "Building RESTful APIs with proper authentication and authorization",
      ],
      icon: "🏢",
      side: "left",
    },
    {
      id: 2,
      company: "SysBraykr",
      position: "Junior Backend Engineer",
      period: "March 2025 - Present",
      location: "Offline",
      description:
        "Backend engineer in junior period, rapidly developing expertise in modern distributed systems and cloud-native technologies.",
      achievements: [
        "Developing gRPC services for high-performance inter-service communication",
        "Containerizing applications with Docker",
        "Building microservices architecture with Go and implementing service mesh patterns",
        "Implementing secure coding practices and API security standards",
        "Conducting Static Application Security Testing (SAST) to identify vulnerabilities early.",
      ],
      icon: "💡",
      side: "right",
    },
  ]

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUpVariants}
      className="min-h-screen flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-20"
    >
      <div className="w-full max-w-6xl">
        {/* Section Header */}
        <motion.div variants={staggerItemVariants} className="text-center mb-16">
          {showContent && (
            <>
              <TypewriterText
                text="PROFESSIONAL JOURNEY"
                className="section-title text-3xl md:text-4xl font-bold mb-4"
                style={{ color: "#16610E" }}
                speed={100}
              />
              <div className="h-1 w-32 rounded-full mx-auto mb-4" style={{ backgroundColor: "#F97A00" }}></div>
              <TypewriterText
                text="A timeline of innovation, leadership, and technological excellence"
                className="text-lg md:text-xl max-w-3xl mx-auto"
                style={{ color: "#16610E", fontFamily: "'Lexend', sans-serif" }}
                speed={40}
                delay={2000}
              />
            </>
          )}
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full overflow-hidden">
            <div className="w-full h-full relative" style={{ backgroundColor: "#F97A00" }}>
              {/* Waterfall effect */}
              <div
                className="absolute inset-0 w-full animate-pulse"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(254, 209, 106, 0.8) 20%, rgba(249, 122, 0, 0.9) 40%, rgba(249, 122, 0, 1) 60%, rgba(254, 209, 106, 0.8) 80%, transparent 100%)",
                  animation: "waterfall 3s ease-in-out infinite",
                }}
              ></div>
              <style jsx>{`
                @keyframes waterfall {
                  0% {
                    transform: translateY(-100%);
                    opacity: 0;
                  }
                  10% {
                    opacity: 1;
                  }
                  90% {
                    opacity: 1;
                  }
                  100% {
                    transform: translateY(100%);
                    opacity: 0;
                  }
                }
              `}</style>
            </div>
          </div>

          {/* Timeline Items */}
          <motion.div variants={staggerContainerVariants} className="space-y-16">
            {journeyItems.map((item, index) => (
              <motion.div key={item.id} variants={staggerItemVariants} className="relative">
                {/* Timeline Dot - Added pulse animation */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 z-10"
                  style={{
                    backgroundColor: "#FED16A",
                    borderColor: "#F97A00",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(249, 122, 0, 0.4)",
                      "0 0 0 10px rgba(249, 122, 0, 0)",
                      "0 0 0 0 rgba(249, 122, 0, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Content Card - Replaced GlassCard with Web3Card */}
                <div className={`flex ${item.side === "left" ? "justify-start" : "justify-end"}`}>
                  <div className={`w-full md:w-5/12 ${item.side === "left" ? "md:pr-8" : "md:pl-8"}`}>
                    <Web3Card delay={index * 0.2}>
                      {/* Company Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl backdrop-blur-md bg-white/20 border border-white/30"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            {item.icon}
                          </motion.div>
                          <div>
                            {showContent && (
                              <>
                                <TypewriterText
                                  text={item.company}
                                  className="text-xl font-bold"
                                  style={{ color: "#16610E" }}
                                  speed={60}
                                  delay={3000 + index * 1000}
                                />
                                <TypewriterText
                                  text={item.position}
                                  className="text-lg font-medium"
                                  style={{ color: "#F97A00" }}
                                  speed={50}
                                  delay={3500 + index * 1000}
                                />
                              </>
                            )}
                          </div>
                        </div>
                        <div className="text-right" style={{ fontFamily: "'Lexend', sans-serif" }}>
                          <div className="flex items-center gap-2 text-sm" style={{ color: "#16610E" }}>
                            <span>📅</span>
                            <span className="font-medium">{item.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm mt-1" style={{ color: "#16610E" }}>
                            <span>📍</span>
                            <span className="font-medium">{item.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      {showContent && (
                        <TypewriterText
                          text={item.description}
                          className="text-sm mb-4 leading-relaxed"
                          style={{ color: "#16610E", fontFamily: "'Lexend', sans-serif" }}
                          speed={30}
                          delay={4000 + index * 1000}
                        />
                      )}

                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-sm font-bold mb-3" style={{ color: "#F97A00" }}>
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              className="flex items-start gap-3 text-sm"
                              style={{ color: "#16610E" }}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * achievementIndex }}
                            >
                              <motion.span
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: "#F97A00" }}
                                whileHover={{ scale: 1.5 }}
                              />
                              {showContent && (
                                <TypewriterText
                                  text={achievement}
                                  speed={20}
                                  delay={5000 + index * 1000 + achievementIndex * 1500}
                                  style={{ fontFamily: "'Lexend', sans-serif" }}
                                />
                              )}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </Web3Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action - Added hover animation */}
        <motion.div variants={staggerItemVariants} className="text-center mt-16">
          <motion.button
            className="px-8 py-3 rounded-lg font-medium transition-all duration-300"
            style={{
              backgroundColor: "#F97A00",
              color: "white",
              border: "2px solid #F97A00",
              fontFamily: "'Lexend', sans-serif",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(249, 122, 0, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "#F97A00"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F97A00"
              e.currentTarget.style.color = "white"
            }}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
