"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeInUpVariants, staggerContainerVariants, staggerItemVariants } from "../utils/variants"
import TechItem from "./tech-item"
import TypewriterText from "./typewriter-text"

export default function TechStackSection() {
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

  return (
    <>
      <style jsx>{`
        .tech-category-box {
          border: 2px dashed rgba(255, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .tech-category-box::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 100%
          );
          animation: outlineFlow 2s ease-in-out infinite;
          z-index: 2;
        }
        
        .tech-category-box::after {
          content: '';
          position: absolute;
          bottom: -2px;
          right: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 100%
          );
          animation: outlineFlowReverse 2s ease-in-out infinite;
          z-index: 2;
        }
        
        @keyframes outlineFlow {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        @keyframes outlineFlowReverse {
          0% {
            right: -100%;
          }
          100% {
            right: 100%;
          }
        }
        
        .tech-item-flow {
          position: relative;
          overflow: hidden;
        }
        
        .tech-item-flow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            transparent 100%
          );
          animation: flowEffect 1.5s ease-in-out infinite;
          z-index: 1;
        }
        
        @keyframes flowEffect {
          0% {
            left: -100%;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="min-h-screen flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-20"
        style={{ backgroundColor: "#FFF4A4" }}
      >
        <div className="w-full max-w-7xl">
          {/* Section Header */}
          <motion.div variants={staggerItemVariants} className="mb-16 text-center">
            {showContent && (
              <>
                <TypewriterText
                  text="TECH STACK"
                  className="section-title text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#16610E" }}
                  speed={100}
                />
                <TypewriterText
                  text="&quot;You can't build a great building on a weak foundation.&quot; - Gordon B. Hinckley"
                  className="text-sm italic mb-6"
                  style={{ color: "#16610E", fontFamily: "'Lexend', sans-serif" }}
                  speed={40}
                  delay={1200}
                />
                <div className="h-1 w-32 mx-auto" style={{ backgroundColor: "#F97A00" }}></div>
              </>
            )}
          </motion.div>

          {/* Tech Categories */}
          <motion.div
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {/* Languages */}
            <motion.div variants={staggerItemVariants}>
              <div className="tech-category-box p-6 rounded-xl backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {showContent && (
                  <TypewriterText
                    text="Languages"
                    className="text-lg font-bold mb-6 text-center"
                    style={{ color: "#16610E", fontFamily: "'Lexend', sans-serif" }}
                    speed={80}
                    delay={2500}
                  />
                )}
                <div className="grid grid-cols-2 gap-3">
                  
                  <div className="tech-item-flow">
                    <TechItem name="GO" icon="🐹" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="TYPESCRIPT" icon="📘" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="JAVASCRIPT" icon="📜" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="PYTHON" icon="🐍" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="PHP" icon="⚡" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="C++" icon="🌙" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Frameworks & Runtimes */}
            <motion.div variants={staggerItemVariants}>
              <div className="tech-category-box p-6 rounded-xl backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {showContent && (
                  <TypewriterText
                    text="Frameworks"
                    className="text-lg font-bold mb-6 text-center"
                    style={{ color: "#16610E", fontFamily: "'Lexend', sans-serif" }}
                    speed={80}
                    delay={3000}
                  />
                )}
                <div className="grid grid-cols-2 gap-3">
                  <div className="tech-item-flow">
                    <TechItem name="REACT" icon="⚛️" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="NEXT.JS" icon="▲" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="VUE" icon="💚" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="LARAVEL" icon="🦕" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="NUXT .JS" icon="🚀" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="GIN" icon="🦌" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Comunication */}
            <motion.div variants={staggerItemVariants}>
              <div className="tech-category-box p-6 rounded-xl backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {showContent && (
                  <TypewriterText
                    text="Comunication"
                    className="text-lg font-bold mb-6 text-center"
                    style={{ color: "#16610E", fontFamily: "'Lexend', sans-serif" }}
                    speed={80}
                    delay={3500}
                  />
                )}
                <div className="grid grid-cols-2 gap-3">
                  <div className="tech-item-flow">
                    <TechItem name="Discord" icon="🎮" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="Zoom" icon="🎯" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="Gmeet" icon="🤖" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div variants={staggerItemVariants}>
              <div className="tech-category-box p-6 rounded-xl backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {showContent && (
                  <TypewriterText
                    text="Databases"
                    className="text-lg font-bold mb-6 text-center"
                    style={{ color: "#16610E", fontFamily: "'Lexend', sans-serif" }}
                    speed={80}
                    delay={4000}
                  />
                )}
                <div className="grid grid-cols-2 gap-3">
                  <div className="tech-item-flow">
                    <TechItem name="POSTGRESQL" icon="🐘" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="MYSQL" icon="🐬" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="SQL" icon="📊" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="MONGODB" icon="🍃" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="REDIS" icon="🔴" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={staggerItemVariants}>
              <div className="tech-category-box p-6 rounded-xl backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {showContent && (
                  <TypewriterText
                    text="Tools"
                    className="text-lg font-bold mb-6 text-center"
                    style={{ color: "#16610E", fontFamily: "'Lexend', sans-serif" }}
                    speed={80}
                    delay={4500}
                  />
                )}
                <div className="grid grid-cols-2 gap-3">
                  <div className="tech-item-flow">
                    <TechItem name="DOCKER" icon="🐳" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="GIT" icon="☸️" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="DATAGRIP" icon="☁️" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="POSTMAN" icon="🌤️" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="GOLAND" icon="🌐" />
                  </div>
                  <div className="tech-item-flow">
                    <TechItem name="MEDIUM" icon="🦭" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
