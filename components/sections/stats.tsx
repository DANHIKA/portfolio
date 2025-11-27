"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { SketchBackground } from "@/components/ui/sketch-background"

function Counter({ from, to, className }: { from: number; to: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(to)
    }
  }, [motionValue, to, isInView])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          notation: to > 999 ? "compact" : "standard",
          maximumFractionDigits: 1,
        }).format(latest)
      }
    })

    return () => unsubscribe()
  }, [springValue, to])

  return <span ref={ref} className={className} />
}

export default function DeveloperStats() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

  const stats = [
    {
      number: 16,
      suffix: "+",
      label: "Projects",
      description: "Delivered across various industries"
    },
    {
      number: 3,
      suffix: "+",
      label: "Years",
      description: "Professional experience in modern web development"
    },
    {
      number: 2.5,
      suffix: "k",
      label: "Git Commits",
      description: "Consistent code contributions"
    }
  ]

  return (
    <section className="w-screen -mx-[calc((100vw-100%)/2)] py-4 md:py-6" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-center text-base font-semibold leading-7 text-foreground">Stats</p>
          <h2 className="mx-auto mt-2 max-w-2xl text-center text-6xl font-semibold tracking-tight text-primary">
            My development journey so far.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-primary rounded-lg p-8 md:p-12 space-y-0"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`py-8 ${index !== stats.length - 1 ? 'border-b border-primary-foreground/20' : ''}`}
            >
              <div className="flex items-start justify-between gap-8 mb-3">
                <div className="text-6xl font-bold text-primary-foreground flex items-baseline">
                  <Counter from={0} to={stat.number} className="text-6xl font-bold text-primary-foreground" />
                  <span className="ml-1 text-6xl font-bold text-primary-foreground">{stat.suffix}</span>
                </div>
                <div className="text-xl font-semibold text-primary-foreground text-right flex-shrink-0">
                  {stat.label}
                </div>
              </div>
              <p className="text-base text-primary-foreground/80 max-w-2xl">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}