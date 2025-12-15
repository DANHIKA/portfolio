"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

function Counter({ from, to, className, isMobile }: { from: number; to: number; className?: string; isMobile: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isMobile) {
      // On mobile, set the final value immediately
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          notation: to > 999 ? "compact" : "standard",
          maximumFractionDigits: 1,
        }).format(to)
      }
    } else if (isInView) {
      motionValue.set(to)
    }
  }, [motionValue, to, isInView, isMobile])

  useEffect(() => {
    if (isMobile) return // Skip animation on mobile
    
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          notation: to > 999 ? "compact" : "standard",
          maximumFractionDigits: 1,
        }).format(latest)
      }
    })

    return () => unsubscribe()
  }, [springValue, to, isMobile])

  return <span ref={ref} className={className} />
}

export default function DeveloperStats() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const stats = [
    {
      number: 16,
      suffix: "+",
      label: "Projects",
      description: "Successfully delivered across various industries including fintech, e-commerce, and healthcare platforms"
    },
    {
      number: 3,
      suffix: "+",
      label: "Years",
      description: "Professional experience in modern web development with expertise in React, Node.js, and cloud technologies"
    },
    {
      number: 2.5,
      suffix: "k",
      label: "Git Commits",
      description: "Consistent code contributions to open source projects and enterprise applications"
    }
  ]

  return (
    <section className="w-screen -mx-[calc((100vw-100%)/2)] py-4 md:py-6" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-center text-base font-semibold leading-7 text-foreground">Stats</p>
          <h2 className="mx-auto mt-2 max-w-2xl text-center text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary">
            My development journey so far.
          </h2>
        </div>

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile || isInView ? { opacity: 1, y: 0 } : {}}
          transition={isMobile ? { duration: 0 } : { duration: 0.7 }}
          className="mt-16 bg-primary rounded-lg p-8 md:p-12 space-y-0"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={isMobile ? false : { opacity: 0, y: 20 }}
              animate={isMobile || isInView ? { opacity: 1, y: 0 } : {}}
              transition={isMobile ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
              className={`py-8 ${index !== stats.length - 1 ? 'border-b border-primary-foreground/20' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8">
                <div className="text-7xl font-normal text-primary-foreground flex items-baseline">
                  <Counter from={0} to={stat.number} className="text-7xl font-normal text-primary-foreground" isMobile={isMobile} />
                  <span className="ml-1 text-7xl font-normal text-primary-foreground">{stat.suffix}</span>
                </div>
                <div className="sm:ml-auto sm:self-end">
                  <div className="text-xl font-semibold text-primary-foreground mb-1">
                    {stat.label}
                  </div>
                  <p className="text-base text-primary-foreground/80 max-w-md mb-2">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}