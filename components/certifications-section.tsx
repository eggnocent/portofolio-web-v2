"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import CertificationCard from "./certification-card"

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1, once: true })
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const runningTextItems = [
    "MY CERTIFICATIONS & ACHIEVEMENTS 2025",
    "MY CERTIFICATIONS & ACHIEVEMENTS 2025",
    "MY CERTIFICATIONS & ACHIEVEMENTS 2025",
    "MY CERTIFICATIONS & ACHIEVEMENTS 2025",
  ]

  const certificationsRow1 = [
    {
      title: "Cyber Jawara Certificate",
      issuer: "BSI (Badan Siber dan Sandi Negara)",
      description:
        "National cybersecurity competition certificate recognizing expertise in CTF challenges, penetration testing, and security analysis.",
      colorVariant: "light" as const,
    },
    {
      title: "Cloud Practitioner Essentials",
      issuer: "Dicoding Indonesia",
      description:
        "Comprehensive certification covering cloud computing fundamentals, AWS services, and best practices for cloud architecture.",
      colorVariant: "green" as const,
    },
    {
      title: "BDD Certificate",
      issuer: "Dicoding Indonesia",
      description:
        "Behavior-Driven Development certification demonstrating proficiency in BDD methodologies and testing frameworks.",
      colorVariant: "orange" as const,
    },
  ]

  const certificationsRow2 = [
    {
      title: "CCNA Certificate",
      issuer: "CISCO",
      description:
        "Industry-recognized networking certification covering routing, switching, network security, and infrastructure fundamentals.",
      colorVariant: "orange" as const,
    },
    {
      title: "GRPC Class",
      issuer: "BuildWithAngga",
      description:
        "Advanced certification in gRPC protocol implementation with Golang, covering service definitions and high-performance APIs.",
      colorVariant: "light" as const,
    },
    {
      title: "Docker Multi-Container",
      issuer: "BuildWithAngga",
      description:
        "Certification in Docker containerization, multi-container orchestration, and deployment best practices.",
      colorVariant: "green" as const,
    },
  ]

  const rotations = [-6, 0, 6]
  const translateY = [20, 0, 20]
  const zIndexes = [1, 2, 3]

  const renderCardRow = (certifications: typeof certificationsRow1, rowIndex: number) => (
    <div className="relative flex justify-center items-center min-h-[450px]">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 100,
            rotate: rotations[index],
            x: (index - 1) * 280,
          }}
          animate={
            showContent
              ? {
                  opacity: 1,
                  y: translateY[index],
                  rotate: rotations[index],
                  x: (index - 1) * 280,
                }
              : {}
          }
          transition={{
            delay: 0.3 + index * 0.15 + rowIndex * 0.5,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            y: translateY[index] - 20,
            rotate: 0,
            scale: 1.02,
            zIndex: 10,
            transition: { duration: 0.3 },
          }}
          className="absolute w-[320px] sm:w-[350px] md:w-[380px] cursor-pointer"
          style={{
            zIndex: zIndexes[index],
            transformOrigin: "center bottom",
          }}
        >
          <CertificationCard
            title={cert.title}
            issuer={cert.issuer}
            description={cert.description}
            index={index}
            colorVariant={cert.colorVariant}
          />
        </motion.div>
      ))}
    </div>
  )

  const renderMobileCards = (certifications: typeof certificationsRow1, rowIndex: number) => (
    <div className="flex gap-4" style={{ width: "fit-content" }}>
      {certifications.map((cert, index) => (
        <motion.div
          key={`mobile-${index}`}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={showContent ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{
            delay: 0.3 + index * 0.15 + rowIndex * 0.3,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          className="w-[280px] flex-shrink-0"
        >
          <CertificationCard
            title={cert.title}
            issuer={cert.issuer}
            description={cert.description}
            index={index}
            colorVariant={cert.colorVariant}
          />
        </motion.div>
      ))}
    </div>
  )

  return (
    <motion.section
      id="certifications"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center py-20 overflow-hidden relative"
      style={{
        backgroundColor: "#FED16A",
      }}
    >
      {/* Ambient orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(249, 122, 0, 0.4) 0%, transparent 70%)",
            top: "10%",
            left: "-10%",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(22, 97, 14, 0.4) 0%, transparent 70%)",
            bottom: "10%",
            right: "-5%",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl mb-4"
            style={{
              color: "#16610E",
              fontFamily: "'Press Start 2P', cursive",
              lineHeight: 1.4,
            }}
          >
            egnooc certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl"
            style={{
              color: "#3D3D3D",
              fontFamily: "'Lexend', sans-serif",
              fontWeight: 400,
            }}
          >
            Certifications and achievements I have attained during my learning journey. Proof of my commitment to continuous
            development.
          </motion.p>
        </div>
      </div>

      {/* First row of cards - Desktop */}
      <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 hidden md:block">
        <div className="max-w-6xl mx-auto">{renderCardRow(certificationsRow1, 0)}</div>
      </div>

      {/* Running text marquee */}
      <div className="w-full overflow-hidden py-8 my-8 hidden md:block" style={{ backgroundColor: "#16610E" }}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
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

      {/* Second row of cards - Desktop */}
      <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 mt-16 hidden md:block">
        <div className="max-w-6xl mx-auto">{renderCardRow(certificationsRow2, 1)}</div>
      </div>

      {/* Mobile view - horizontal scroll */}
      <div className="md:hidden mt-8 overflow-x-auto px-4 pb-4">
        {renderMobileCards(certificationsRow1, 0)}

        {/* Mobile running text */}
        <div className="w-full overflow-hidden py-6 my-6 -mx-4" style={{ backgroundColor: "#16610E" }}>
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {[...runningTextItems, ...runningTextItems, ...runningTextItems, ...runningTextItems].map((item, index) => (
              <span
                key={`mobile-${index}`}
                className="inline-flex items-center mx-6 text-xs font-bold tracking-wider"
                style={{
                  color: "#FED16A",
                  fontFamily: "'Press Start 2P', cursive",
                }}
              >
                <span className="w-2 h-2 rounded-full mr-6" style={{ backgroundColor: "#F97A00" }} />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="mt-6">{renderMobileCards(certificationsRow2, 1)}</div>
      </div>
    </motion.section>
  )
}
