"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import ProjectCard from "./project-card"

export default function ProjectsSection() {
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
    "MY PROJECT FOR PORTOFOLIO 2025",
    "MY PROJECT FOR PORTOFOLIO 2025",
    "MY PROJECT FOR PORTOFOLIO 2025",
    "MY PROJECT FOR PORTOFOLIO 2025",
  ]

  const projectsRow1 = [
    {
      title: "Braille Text Converter with Python",
      category: "Accessibility Tech",
      description:
        "Developed in collaboration with multiple schools during the AWS Sagasitas event, this application converts regular text into Braille patterns. It supports text-to-speech conversion and multiple language options for accessibility.",
      technologies: ["Python", "AWS", "Text-to-Speech API", "Unicode Braille", "Flask", "HTML/CSS"],
      features: [
        "Real-time text to Braille pattern conversion",
        "Multi-language support (Indonesian, English)",
        "Integrated text-to-speech functionality",
        "Offline Braille pattern reference",
      ],
      image: "/placeholder.svg?height=200&width=400",
      colorVariant: "light" as const,
    },
    {
      title: "Student & Item Management System",
      category: "School Management",
      description:
        "This project is a student and item management system built with Laravel 11. It includes full CRUD operations, PDF report generation, role-based authentication, and a responsive dashboard for seamless management.",
      technologies: ["Laravel 11", "PHP", "Javascript", "Bootstrap", "MySQL", "PDF Generator"],
      features: [
        "Complete CRUD operations for students and items",
        "PDF report generation and export functionality",
        "Role-based authentication and authorization",
        "Responsive admin dashboard interface",
      ],
      image: "/placeholder.svg?height=200&width=400",
      colorVariant: "green" as const,
    },
    {
      title: "Golang RESTful API News Portal",
      category: "Backend Development",
      description:
        "A high-performance news portal API built with Go, featuring RESTful endpoints for news management. The project emphasizes clean architecture, optimized Docker containerization with multi-stage builds, and security best practices.",
      technologies: ["Golang", "REST API", "PostgreSQL", "Docker", "Multi-stage Dockerfile"],
      features: [
        "RESTful API endpoints for news CRUD operations",
        "Optimized multi-stage Docker containerization",
        "Database migration and seeding",
        "Clean architecture with dependency injection",
      ],
      image: "/placeholder.svg?height=200&width=400",
      colorVariant: "orange" as const,
    },
  ]

  const projectsRow2 = [
    {
      title: "Mini Soccer Booking System",
      category: "Backend Development",
      description:
        "A mini soccer field booking system built with Golang, featuring RESTful API, real-time booking management, and automated scheduling. Deployed on Google Cloud Platform for scalability and reliability.",
      technologies: ["Golang", "PostgreSQL", "Google Cloud Platform", "Docker", "JWT", "REST API"],
      features: [
        "Real-time field availability checking",
        "Automated booking and scheduling system",
        "Payment integration for booking confirmation",
        "Admin panel for field and booking management",
      ],
      image: "/placeholder.svg?height=200&width=400",
      colorVariant: "orange" as const,
    },
    {
      title: "News Portal Application",
      category: "Full-Stack Development",
      description:
        "A modern news portal application with Golang backend API and Next.js frontend, featuring article management, category filtering, and search functionality. Built with PostgreSQL for robust data management.",
      technologies: ["Golang", "Next.js", "PostgreSQL", "REST API", "TypeScript", "Tailwind CSS"],
      features: [
        "Dynamic article rendering with SSR",
        "Category-based news filtering",
        "Full-text search functionality",
        "CMS for content management and publishing",
      ],
      image: "/placeholder.svg?height=200&width=400",
      colorVariant: "light" as const,
    },
    {
      title: "E-Commerce Platform with Payment Gateway",
      category: "Full-Stack Development",
      description:
        "A complete e-commerce solution built with Golang backend and React frontend, featuring product catalog, shopping cart, and secure payment processing through Midtrans integration for Indonesian market.",
      technologies: ["Golang", "React", "PostgreSQL", "Midtrans", "REST API", "JWT"],
      features: [
        "Product catalog with advanced filtering",
        "Shopping cart and checkout system",
        "Secure payment integration with Midtrans",
        "Order tracking and management dashboard",
      ],
      image: "/placeholder.svg?height=200&width=400",
      colorVariant: "green" as const,
    },
  ]

  const rotations = [-6, 0, 6]
  const translateY = [20, 0, 20]
  const zIndexes = [1, 2, 3]

  const renderCardRow = (projects: typeof projectsRow1, rowIndex: number) => (
    <div className="relative flex justify-center items-center min-h-[550px]">
      {projects.map((project, index) => (
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
          <ProjectCard
            title={project.title}
            category={project.category}
            description={project.description}
            technologies={project.technologies}
            features={project.features}
            image={project.image}
            index={index}
            colorVariant={project.colorVariant}
          />
        </motion.div>
      ))}
    </div>
  )

  const renderMobileCards = (projects: typeof projectsRow1, rowIndex: number) => (
    <div className="flex gap-4" style={{ width: "fit-content" }}>
      {projects.map((project, index) => (
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
          <ProjectCard
            title={project.title}
            category={project.category}
            description={project.description}
            technologies={project.technologies}
            features={project.features}
            image={project.image}
            index={index}
            colorVariant={project.colorVariant}
          />
        </motion.div>
      ))}
    </div>
  )

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center py-20 overflow-hidden relative"
      style={{
        backgroundColor: "#FED16A",
      }}
    >
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-center mb-12 px-4"
      >
        <h2
          className="text-xl sm:text-2xl md:text-3xl mb-4"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            color: "#16610E",
          }}
        >
          egnooc projects
        </h2>
        <p
          className="text-base sm:text-lg max-w-2xl mx-auto"
          style={{
            fontFamily: "'Lexend', sans-serif",
            color: "#16610E",
            opacity: 0.85,
          }}
        >
          A collection of projects I have worked on. Each project is the result of exploration and learning in the world of technology.
        </p>
      </motion.div>

      {/* First row of cards */}
      <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 hidden md:block">
        <div className="max-w-6xl mx-auto">{renderCardRow(projectsRow1, 0)}</div>
      </div>

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
          {/* Duplicate items for seamless loop */}
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

      <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 mt-16 hidden md:block">
        <div className="max-w-6xl mx-auto">{renderCardRow(projectsRow2, 1)}</div>
      </div>

      {/* Mobile view - horizontal scroll */}
      <div className="md:hidden mt-8 overflow-x-auto px-4 pb-4">
        {renderMobileCards(projectsRow1, 0)}

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

        <div className="mt-6">{renderMobileCards(projectsRow2, 1)}</div>
      </div>
    </motion.section>
  )
}
