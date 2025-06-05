"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

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

  return (
    <section className="w-full py-16 md:py-24" ref={containerRef}>
      <div className="w-full container mx-auto px-4">
        <div className="mb-12 ">
        <h2 className="text-center text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400"> Stats</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
            My Development Journey So Far
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-end">
          {/* First column - shortest height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-gray-50 p-6 rounded-xl relative border border-dashed border-gray-300 h-[160px]"
          >
            <div className="space-y-2">
              <div className="text-4xl font-bold tracking-tight flex items-center">
                <Counter from={0} to={16} className="text-4xl font-bold" />
                <span className="ml-1">+</span>
              </div>
              <h3 className="text-xl font-medium">Projects</h3>
              <p className="text-gray-600 text-sm">
                Delivered across various industries
              </p>
            </div>
          </motion.div>

          {/* Second column - tallest height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#0f1729] text-white p-6 rounded-xl relative border border-dashed border-gray-700 h-[320px]"
          >
            <div className="space-y-2">
              <div className="text-4xl font-bold tracking-tight flex items-center">
                <Counter from={0} to={3} className="text-4xl font-bold" />
                <span className="ml-1">+</span>
              </div>
              <h3 className="text-xl font-medium">Years</h3>
              <p className="text-gray-400 text-sm">
                Professional experience in modern web development
              </p>
            </div>
          </motion.div>

          {/* Third column - medium height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-[#5b46f8] text-white p-6 rounded-xl relative border border-dashed border-indigo-400 h-[240px]"
          >
            <div className="space-y-2">
              <div className="text-4xl font-bold tracking-tight flex items-center">
                <Counter from={0} to={2.5} className="text-4xl font-bold" />
                <span className="ml-1">k</span>
              </div>
              <h3 className="text-xl font-medium">Git Commits</h3>
              <p className="text-gray-200 text-sm">
                Consistent code contributions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}