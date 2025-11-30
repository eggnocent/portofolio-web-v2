"use client"

import { useEffect } from "react"
import Header from "../../components/header"
import AnimatedGrid from "../../components/animated-grid"
import ReadingKlabSection from "../../components/reading-klab-section"

export default function ReadingKlabPage() {
  useEffect(() => {
    // Import Google Fonts
    const fontLink = document.createElement("link")
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Press+Start+2P&family=Lexend:wght@100..900&display=swap"
    fontLink.rel = "stylesheet"
    document.head.appendChild(fontLink)

    const style = document.createElement("style")
    style.textContent = `
      html {
        scroll-behavior: smooth;
        scroll-snap-type: y proximity;
        scroll-padding-top: 80px;
      }
      
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
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #E6690A 0%, #D55A09 100%);
      }
      
      * {
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
      }
      
      body {
        scroll-behavior: smooth;
        overscroll-behavior: contain;
      }

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

      @media (max-width: 768px) {
        body, html {
          min-height: 100vh;
          min-height: -webkit-fill-available;
          width: 100%;
          overflow-x: hidden;
        }
      }
    `
    document.head.appendChild(style)

    // Scroll progress
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
    updateProgress()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      progressContainer.remove()
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
      <AnimatedGrid />
      <Header />
      <div className="pt-20 w-full">
        <ReadingKlabSection />
      </div>
    </div>
  )
}
