"use client"

import { useState, useEffect } from "react"

export const useTypewriter = (text: string, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!text) return

    const timer = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1))
          index++
        } else {
          setIsComplete(true)
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, speed, delay])

  return { displayText, isComplete }
}
