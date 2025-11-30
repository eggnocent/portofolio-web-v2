"use client"

import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export const useInViewAnimation = (threshold = 0.3) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return { ref, controls }
}
