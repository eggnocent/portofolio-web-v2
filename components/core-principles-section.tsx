"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"

const principles = [
  {
    number: "01",
    title: "SECURE",
    description:
      "Technology should feel human, emotional, and alive—but protected at every layer. Like a puzzle made of a thousand subtle pieces, each interaction should resonate while every connection remains trusted and verified.",
  },
  {
    number: "02",
    title: "ARCHITECTURE",
    description:
      "Design isn't just decoration, it's direction. Good architecture guides, clarifies, and structures meaning. Systems shouldn't just be cool. They should work. Less is more—every component deliberate, every dependency necessary.",
  },
  {
    number: "03",
    title: "QUALITY",
    description:
      "Code should be crafted, not just written. Durable, clear, maintainable, and precise. Consistent, reliable, and predictable without surprise. No shortcuts, no compromises. Built to scale and last.",
  },
]

function PrincipleCard({
  principle,
  index,
  totalCards,
}: {
  principle: (typeof principles)[0]
  index: number
  totalCards: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.85, 1, 1, 0.95, 0.9])

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.3, 1, 1, 0.8, 0.6])

  const y = useTransform(scrollYProgress, [0, 0.3, 0.5], [60, 0, 0])

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{
        top: `${140 + index * 30}px`,
        zIndex: 10 + index,
        marginBottom: index < totalCards - 1 ? "150px" : "0",
      }}
    >
      <motion.div style={{ scale, opacity, y }} transition={{ type: "spring", stiffness: 100, damping: 30 }}>
        <div className="scalloped-card">
          <div className="scalloped-card-inner">
            {/* Giant background number */}
            <div className="card-number">{principle.number}</div>

            <div className="card-content">
              <h3
                className="text-xl md:text-2xl font-bold mb-4"
                style={{
                  color: "#1A3C00",
                  fontFamily: "'Press Start 2P', cursive",
                }}
              >
                {principle.title}
              </h3>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{
                  color: "#1A3C00",
                  fontFamily: "'Lexend', sans-serif",
                }}
              >
                {principle.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function CorePrinciplesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
      style={{
        backgroundColor: "#FFD56F",
        backgroundImage: `
          linear-gradient(rgba(26, 60, 0, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26, 60, 0, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div
        className="sticky top-0 z-50 pt-16 pb-8 text-center"
        style={{
          backgroundColor: "#FFD56F",
          backgroundImage: `
            linear-gradient(rgba(26, 60, 0, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 60, 0, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            style={{
              color: "#16610E",
              fontFamily: "'Press Start 2P', cursive",
              letterSpacing: "2px",
            }}
          >
            CORE PRINCIPLES
          </h2>
          <div className="h-3 w-48 md:w-64 mx-auto rounded-full" style={{ backgroundColor: "#F97A00" }} />
        </motion.div>
      </div>

      <div className="relative px-4 md:px-8 lg:px-16 pb-[200px]">
        <div className="max-w-3xl mx-auto flex flex-col">
          {principles.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} totalCards={principles.length} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scalloped-card {
          position: relative;
          padding: 6px;
          background: #F97A00;
          cursor: pointer;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          
          /* Scalloped edge using mask-image with radial-gradient */
          --scallop-size: 14px;
          --scallop-radius: 7px;
          mask-image: 
            radial-gradient(circle at var(--scallop-radius) 0, transparent var(--scallop-radius), #000 0),
            radial-gradient(circle at var(--scallop-radius) 100%, transparent var(--scallop-radius), #000 0),
            radial-gradient(circle at 0 var(--scallop-radius), transparent var(--scallop-radius), #000 0),
            radial-gradient(circle at 100% var(--scallop-radius), transparent var(--scallop-radius), #000 0);
          mask-size: 
            var(--scallop-size) 51%,
            var(--scallop-size) 51%,
            51% var(--scallop-size),
            51% var(--scallop-size);
          mask-position: 
            top,
            bottom,
            left,
            right;
          mask-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
          -webkit-mask-image: 
            radial-gradient(circle at var(--scallop-radius) 0, transparent var(--scallop-radius), #000 0),
            radial-gradient(circle at var(--scallop-radius) 100%, transparent var(--scallop-radius), #000 0),
            radial-gradient(circle at 0 var(--scallop-radius), transparent var(--scallop-radius), #000 0),
            radial-gradient(circle at 100% var(--scallop-radius), transparent var(--scallop-radius), #000 0);
          -webkit-mask-size: 
            var(--scallop-size) 51%,
            var(--scallop-size) 51%,
            51% var(--scallop-size),
            51% var(--scallop-size);
          -webkit-mask-position: 
            top,
            bottom,
            left,
            right;
          -webkit-mask-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
        }
        
        .scalloped-card-inner {
          position: relative;
          background-color: #FFF8D6;
          padding: 2.5rem;
          min-height: 220px;
          
          --inner-scallop-size: 14px;
          --inner-scallop-radius: 7px;
          mask-image: 
            radial-gradient(circle at var(--inner-scallop-radius) 0, transparent var(--inner-scallop-radius), #000 0),
            radial-gradient(circle at var(--inner-scallop-radius) 100%, transparent var(--inner-scallop-radius), #000 0),
            radial-gradient(circle at 0 var(--inner-scallop-radius), transparent var(--inner-scallop-radius), #000 0),
            radial-gradient(circle at 100% var(--inner-scallop-radius), transparent var(--inner-scallop-radius), #000 0);
          mask-size: 
            var(--inner-scallop-size) 51%,
            var(--inner-scallop-size) 51%,
            51% var(--inner-scallop-size),
            51% var(--inner-scallop-size);
          mask-position: 
            top,
            bottom,
            left,
            right;
          mask-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
          -webkit-mask-image: 
            radial-gradient(circle at var(--inner-scallop-radius) 0, transparent var(--inner-scallop-radius), #000 0),
            radial-gradient(circle at var(--inner-scallop-radius) 100%, transparent var(--inner-scallop-radius), #000 0),
            radial-gradient(circle at 0 var(--inner-scallop-radius), transparent var(--inner-scallop-radius), #000 0),
            radial-gradient(circle at 100% var(--inner-scallop-radius), transparent var(--inner-scallop-radius), #000 0);
          -webkit-mask-size: 
            var(--inner-scallop-size) 51%,
            var(--inner-scallop-size) 51%,
            51% var(--inner-scallop-size),
            51% var(--inner-scallop-size);
          -webkit-mask-position: 
            top,
            bottom,
            left,
            right;
          -webkit-mask-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
        }
        
        .card-number {
          position: absolute;
          top: 50%;
          right: 1.5rem;
          transform: translateY(-50%);
          font-size: 6rem;
          font-weight: 900;
          color: #1A3C00;
          opacity: 0.1;
          line-height: 1;
          font-family: 'Press Start 2P', cursive;
          z-index: 1;
          pointer-events: none;
        }
        
        .card-content {
          position: relative;
          z-index: 2;
          max-width: 75%;
        }
        
        @media (max-width: 768px) {
          .card-number {
            font-size: 4rem;
            right: 1rem;
          }
          
          .card-content {
            max-width: 85%;
          }
        }
      `}</style>
    </motion.section>
  )
}
