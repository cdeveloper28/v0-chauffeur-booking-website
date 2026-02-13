'use client'

import { useEffect, useState } from 'react'

interface CounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function Counter({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2000,
  className = ''
}: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  // Check if the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById(`counter-${value}${suffix}${prefix}`)
    if (element) {
      observer.observe(element)
    }
    
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [value, suffix, prefix])
  
  // Animate the counter when component is visible
  useEffect(() => {
    if (!isVisible || hasAnimated) return
    
    const start = 0
    const end = value
    const range = end - start
    const minDuration = 1000 // Minimum duration in ms
    const maxDuration = duration
    const durationMs = Math.min(maxDuration, Math.max(minDuration, range * 20)) // Adjust speed based on range
    
    let startTimestamp: number | null = null
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1)
      
      // Ease-out function for smooth deceleration
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
      const easedProgress = easeOut(progress)
      
      const current = Math.floor(start + range * easedProgress)
      setCount(current)
      
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setHasAnimated(true)
      }
    }
    
    requestAnimationFrame(step)
    
    return () => {
      startTimestamp = null
    }
  }, [isVisible, value, duration, hasAnimated])
  
  return (
    <span id={`counter-${value}${suffix}${prefix}`} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
