"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion"
import { BookOpen, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"

type Category = "tech" | "football"

interface Course {
  id: string
  title: string
  description: string
  fullDescription: string
  color: "green" | "orange" | "light"
  whatYouLearn: string[]
  link: string
  comingSoon?: boolean
  category: Category
}

const courses: Course[] = [
  {
    id: "1",
    title: "Entering for Go Programming",
    description:
      "Learn Go from scratch to advanced concepts including concurrency, channels, and building production-ready applications.",
    fullDescription:
      "Dive deep into Go programming language and learn how to build scalable, high-performance applications. This comprehensive course covers everything from basic syntax to advanced patterns used in production systems at companies like Google, Uber, and Dropbox.",
    color: "light",
    whatYouLearn: [
      "Go fundamentals and syntax",
      "Concurrency with goroutines and channels",
      "Building REST APIs with Go",
      "Database integration and ORM",
      "Testing and debugging strategies",
      "Deployment and containerization",
    ],
    link: "/start-reading",
    comingSoon: false,
    category: "tech",
  },
  {
    id: "2",
    title: "Tutorial menggunakan Intruder untuk Brute Force",
    description:
      "Master containerization and orchestration with Docker and Kubernetes for modern cloud-native development.",
    fullDescription:
      "Learn how to containerize applications and orchestrate them at scale. This course covers Docker fundamentals, Kubernetes architecture, and real-world deployment strategies used by top tech companies.",
    color: "green",
    whatYouLearn: [
      "Docker containers and images",
      "Docker Compose for multi-container apps",
      "Kubernetes architecture and components",
      "Deploying to cloud platforms",
      "CI/CD pipeline integration",
      "Monitoring and logging",
    ],
    link: "#",
    comingSoon: true,
    category: "tech",
  },
  {
    id: "3",
    title: "Menggunakan Repeater di Burp Suite untuk Testing",
    description:
      "Build modern full-stack applications with Next.js, covering SSR, SSG, API routes, and deployment strategies.",
    fullDescription:
      "Master Next.js and learn how to build performant, SEO-friendly web applications. From server-side rendering to static generation, this course covers everything you need to become a Next.js expert.",
    color: "orange",
    whatYouLearn: [
      "Next.js App Router fundamentals",
      "Server and Client Components",
      "Data fetching strategies",
      "Authentication implementation",
      "Database integration",
      "Vercel deployment",
    ],
    link: "#",
    comingSoon: true,
    category: "tech",
  },
  {
    id: "4",
    title: "Internship Experience as Backend engineer at Sysbraykr",
    description: "Design and implement scalable cloud solutions using AWS services and best practices.",
    fullDescription:
      "Learn to architect cloud solutions on AWS. This course covers core services, security best practices, and cost optimization strategies for building resilient, scalable infrastructure.",
    color: "orange",
    whatYouLearn: [
      "AWS core services overview",
      "VPC and networking",
      "Compute with EC2 and Lambda",
      "Storage solutions (S3, EBS, EFS)",
      "Database services (RDS, DynamoDB)",
      "Security and IAM",
    ],
    link: "#",
    comingSoon: true,
    category: "tech",
  },
  {
    id: "5",
    title: "Welcome for Docker",
    description: "Level up your React skills with TypeScript. Learn type-safe patterns and best practices.",
    fullDescription:
      "Transform your React development with TypeScript. This course teaches you how to write type-safe components, hooks, and state management patterns that prevent bugs before they happen.",
    color: "light",
    whatYouLearn: [
      "TypeScript fundamentals for React",
      "Typing components and props",
      "Generic components and hooks",
      "Type-safe state management",
      "API integration with types",
      "Advanced patterns and utilities",
    ],
    link: "#",
    comingSoon: true,
    category: "tech",
  },
  {
    id: "6",
    title: "Sending email on Golang",
    description:
      "Learn to design scalable systems from scratch. Perfect for interview prep and real-world architecture.",
    fullDescription:
      "Master the art of system design. This course covers fundamental concepts, common patterns, and real-world case studies that will help you design systems that scale to millions of users.",
    color: "green",
    whatYouLearn: [
      "Scalability fundamentals",
      "Load balancing strategies",
      "Caching and CDN",
      "Database sharding",
      "Microservices architecture",
      "Real-world case studies",
    ],
    link: "#",
    comingSoon: true,
    category: "tech",
  },
  {
    id: "7",
    title: "A Last Dance in Salt Island",
    description:
      "Cerita perjalanan awaydays ke Madura untuk menyaksikan pertandingan terakhir PSS Sleman di Liga 1 sebelum terdegradasi.",
    fullDescription:
      "Kisah emosional seorang supporter PSS Sleman yang melakukan perjalanan ke Madura untuk menyaksikan pertandingan terakhir tim kesayangannya di Liga 1. Sebuah pengalaman yang tidak akan terlupakan.",
    color: "green",
    whatYouLearn: [
      "Perjalanan awaydays ke Madura",
      "Atmosfer stadion Gelora Bangkalan",
      "Momen-momen emosional",
      "Kebersamaan dengan sesama supporter",
      "Refleksi sebagai supporter",
      "Harapan untuk musim depan",
    ],
    link: "/start-reading/last-dance-salt-island",
    comingSoon: false,
    category: "football",
  },
  {
    id: "8",
    title: "Kapan PSS bisa main di kancah asia?",
    description: "coming soon.",
    fullDescription:
      "Pelajari bagaimana tiki-taka menjadi salah satu gaya bermain paling dominan dalam sejarah sepak bola modern.",
    color: "orange",
    whatYouLearn: ["Sejarah tiki-taka", "Prinsip dasar permainan", "Peran setiap posisi", "Evolusi taktik"],
    link: "#",
    comingSoon: true,
    category: "football",
  },
  {
    id: "9",
    title: "PSS Sleman needs the 1.5 league",
    description: "Di liga 1 jelek, di Liga 2 Kebagusan, apa PSS butuh liga 1,5?",
    fullDescription:
      "Eksplorasi mendalam tentang kultur supporter Indonesia, dari sejarah hingga perkembangan modernnya.",
    color: "light",
    whatYouLearn: ["Sejarah supporter Indonesia", "Perbedaan ultras dan casual", "Koreo dan chant", "Awaydays culture"],
    link: "#",
    comingSoon: true,
    category: "football",
  },
]

function CourseCard({
  course,
  index,
}: {
  course: Course
  index: number
}) {
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
    switch (course.color) {
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
      {/* Animated gradient border */}
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

      {/* Glow effect */}
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

      {/* Main card container */}
      <div
        className={`relative overflow-hidden rounded-[2rem] h-full min-h-[320px] flex flex-col transition-all duration-500 ${course.comingSoon ? "grayscale-[30%]" : ""}`}
        style={{
          backgroundColor: colors.bg,
          boxShadow: isHovered
            ? `0 25px 60px -12px rgba(0, 0, 0, 0.3), 0 0 40px ${colors.glow}`
            : "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          transform: "translateZ(20px)",
        }}
      >
        {/* Shimmer effect */}
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

        {/* Floating particles */}
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

        {/* Corner accents */}
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

        {/* Card content */}
        <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl font-semibold leading-tight mb-3"
            style={{
              color: colors.title,
            }}
          >
            {course.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
            className="text-sm leading-relaxed flex-grow"
            style={{
              color: colors.text,
              fontWeight: 400,
            }}
          >
            {course.description}
          </motion.p>

          {course.comingSoon ? (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
              disabled
              className="mt-6 self-start flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 cursor-not-allowed opacity-60"
              style={{
                backgroundColor: "#9CA3AF",
                color: "#FFFFFF",
                fontSize: "14px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <Lock className="w-4 h-4" />
              Coming Soon
            </motion.button>
          ) : (
            <Link href={course.link}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 self-start flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 relative overflow-hidden"
                style={{
                  backgroundColor: colors.button,
                  color: colors.buttonText,
                  fontSize: "14px",
                  boxShadow: isHovered
                    ? `0 4px 15px rgba(0,0,0,0.15), 0 0 20px ${colors.glow}`
                    : "0 2px 8px rgba(0,0,0,0.08)",
                  border: course.color === "light" ? "1px solid rgba(0,0,0,0.1)" : "none",
                }}
              >
                <BookOpen className="w-4 h-4" />
                Start Reading
                <motion.span
                  animate={isHovered ? { x: [0, 5, 0] } : {}}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function ReadingKlabSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true })
  const [showContent, setShowContent] = useState(false)
  const [activeCategory, setActiveCategory] = useState<Category>("tech")

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const filteredCourses = courses.filter((course) => course.category === activeCategory)
  const firstRow = filteredCourses.slice(0, 3)
  const secondRow = filteredCourses.slice(3, 6)

  const runningTextItems = [
    "MY LEARNING JOURNEY 2025",
    "MY LEARNING JOURNEY 2025",
    "MY LEARNING JOURNEY 2025",
    "MY LEARNING JOURNEY 2025",
  ]

  const rotations = [-6, 0, 6]
  const translateY = [20, 0, 20]
  const zIndexes = [1, 2, 3]

  const renderCardRow = (coursesRow: Course[], rowIndex: number) => (
    <div className="relative flex justify-center items-center min-h-[420px]">
      {coursesRow.map((course, index) => (
        <motion.div
          key={course.id}
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
          <CourseCard course={course} index={index} />
        </motion.div>
      ))}
    </div>
  )

  const renderMobileCards = (coursesRow: Course[], rowIndex: number) => (
    <div className="flex gap-4" style={{ width: "fit-content" }}>
      {coursesRow.map((course, index) => (
        <motion.div
          key={`mobile-${course.id}`}
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
          <CourseCard course={course} index={index} />
        </motion.div>
      ))}
    </div>
  )

  return (
    <motion.section
      id="reading-klab"
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

      <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 mb-12 md:mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6"
            style={{
              color: "#16610E",
              fontFamily: "'Press Start 2P', cursive",
            }}
          >
            egnooc reading klab
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
            style={{
              color: "#16610E",
              opacity: 0.85,
              fontFamily: "'Lexend', sans-serif",
            }}
          >
            I have rewritten the knowledge I have learned here. I hope it will be useful for those of you who are also studying.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center gap-3"
          >
            <button
              onClick={() => setActiveCategory("tech")}
              className="px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300"
              style={{
                backgroundColor: activeCategory === "tech" ? "#16610E" : "rgba(22, 97, 14, 0.15)",
                color: activeCategory === "tech" ? "#FFFFFF" : "#16610E",
                fontFamily: "'Lexend', sans-serif",
                border: "2px solid #16610E",
              }}
            >
              Tech
            </button>
            <button
              onClick={() => setActiveCategory("football")}
              className="px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300"
              style={{
                backgroundColor: activeCategory === "football" ? "#16610E" : "rgba(22, 97, 14, 0.15)",
                color: activeCategory === "football" ? "#FFFFFF" : "#16610E",
                fontFamily: "'Lexend', sans-serif",
                border: "2px solid #16610E",
              }}
            >
              Football
            </button>
          </motion.div>
        </div>
      </div>

      {/* First row of cards - Desktop */}
      <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 hidden md:block">
        <div className="max-w-6xl mx-auto">{renderCardRow(firstRow, 0)}</div>
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
      {secondRow.length > 0 && (
        <div className="relative px-4 sm:px-8 md:px-16 lg:px-24 mt-16 hidden md:block">
          <div className="max-w-6xl mx-auto">{renderCardRow(secondRow, 1)}</div>
        </div>
      )}

      {/* Mobile view - horizontal scroll */}
      <div className="md:hidden mt-8 overflow-x-auto px-4 pb-4">
        {renderMobileCards(firstRow, 0)}

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

        {secondRow.length > 0 && <div className="mt-6">{renderMobileCards(secondRow, 1)}</div>}
      </div>
    </motion.section>
  )
}
