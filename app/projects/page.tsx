"use client"

import { useEffect } from "react"
import ProjectsSection from "../../components/projects-section"
import AnimatedGrid from "../../components/animated-grid"
import Header from "../../components/header"

export default function ProjectsPage() {
  useEffect(() => {
    // Import Google Fonts for section titles
    const fontLink = document.createElement("link")
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Press+Start+2P&display=swap"
    fontLink.rel = "stylesheet"
    document.head.appendChild(fontLink)

    // Enhanced smooth scrolling with better performance and iOS-style behavior
    const style = document.createElement("style")
    style.textContent = `
      /* Enhanced smooth scrolling */
      html {
        scroll-behavior: smooth;
        scroll-snap-type: y proximity;
        scroll-padding-top: 80px;
      }
      
      /* Section snap alignment */
      section {
        scroll-snap-align: start;
        scroll-snap-stop: normal;
      }
      
      /* Enhanced scrollbar styling */
      ::-webkit-scrollbar {
        width: 12px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(22, 97, 14, 0.1);
        border-radius: 6px;
        margin: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #F97A00 0%, #E6690A 100%);
        border-radius: 6px;
        border: 2px solid rgba(255, 244, 164, 0.2);
        transition: all 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #E6690A 0%, #D55A09 100%);
        border: 2px solid rgba(255, 244, 164, 0.4);
        transform: scale(1.1);
      }
      
      ::-webkit-scrollbar-thumb:active {
        background: linear-gradient(180deg, #D55A09 0%, #C44B08 100%);
      }
      
      /* Smooth momentum scrolling for all platforms */
      * {
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
      }
      
      /* Enhanced scroll performance */
      body {
        scroll-behavior: smooth;
        overscroll-behavior: contain;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      /* Smooth transitions for scroll-triggered animations */
      [data-scroll] {
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      /* Custom easing for scroll snap */
      @media (prefers-reduced-motion: no-preference) {
        html {
          scroll-behavior: smooth;
          scroll-snap-type: y proximity;
        }
        
        section {
          scroll-snap-align: start;
          scroll-margin-top: 2rem;
        }
      }
      
      /* Respect user's motion preferences */
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
          scroll-snap-type: none;
        }
        
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* Enhanced scroll indicator */
      .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(22, 97, 14, 0.1);
        z-index: 9999;
      }
      
      .scroll-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #F97A00 0%, #FED16A 100%);
        transition: width 0.1s ease-out;
        box-shadow: 0 0 10px rgba(249, 122, 0, 0.3);
      }

      /* Press Start 2P font for section titles */
      .section-title {
        font-family: 'Press Start 2P', cursive;
        letter-spacing: 2px;
      }

      /* Mobile background fix */
      @media (max-width: 768px) {
        body, html {
          min-height: 100vh;
          min-height: -webkit-fill-available;
          width: 100%;
          overflow-x: hidden;
        }
        
        .min-h-screen {
          min-height: 100vh;
          min-height: -webkit-fill-available;
        }
      }
    `
    document.head.appendChild(style)

    // Enhanced scroll progress indicator
    const createScrollProgress = () => {
      const progressContainer = document.createElement("div")
      progressContainer.className = "scroll-progress"

      const progressBar = document.createElement("div")
      progressBar.className = "scroll-progress-bar"

      progressContainer.appendChild(progressBar)
      document.body.appendChild(progressContainer)

      const updateProgress = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = (scrollTop / scrollHeight) * 100

        progressBar.style.width = `${Math.min(progress, 100)}%`
      }

      // Throttled scroll listener for better performance
      let ticking = false
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateProgress()
            ticking = false
          })
          ticking = true
        }
      }

      window.addEventListener("scroll", handleScroll, { passive: true })
      updateProgress() // Initial call

      return () => {
        window.removeEventListener("scroll", handleScroll)
        progressContainer.remove()
      }
    }

    // Enhanced smooth scroll for anchor links
    const enhanceSmoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]')

      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault()
          const targetId = link.getAttribute("href")?.substring(1)
          const targetElement = document.getElementById(targetId || "")

          if (targetElement) {
            const headerOffset = 80
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }
        })
      })
    }

    // Initialize enhancements
    const cleanupProgress = createScrollProgress()
    enhanceSmoothScroll()

    // Cleanup function
    return () => {
      cleanupProgress()
      document.head.removeChild(style)
      document.head.removeChild(fontLink)
    }
  }, [])

  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden"
      style={{
        backgroundColor: "#FED16A",
        backgroundImage: `
        linear-gradient(rgba(22, 97, 14, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(22, 97, 14, 0.08) 1px, transparent 1px)
      `,
        backgroundSize: "80px 80px",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated Grid Background */}
      <AnimatedGrid />

      {/* Header */}
      <Header />

      {/* Projects Section */}
      <div className="pt-20 w-full">
        <ProjectsSection />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: translateY(-50%) scale(1); }
          50% { opacity: 0.7; transform: translateY(-50%) scale(1.2); }
        }
      `}</style>
    </div>
  )
}
