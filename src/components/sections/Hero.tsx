'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary-400/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Floating cards component
const FloatingCards = () => {
  const cards = [
    { icon: "⚡", text: "Fast", delay: 0 },
    { icon: "🎨", text: "Modern", delay: 0.5 },
    { icon: "🚀", text: "Scalable", delay: 1 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-gray-700/20"
          style={{
            left: `${20 + index * 25}%`,
            top: `${30 + index * 10}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -10 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0.8],
            rotate: [-10, 0, 5],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            delay: card.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-center">
            <div className="text-2xl mb-1">{card.icon}</div>
            <div className="text-xs font-medium text-gray-700 dark:text-gray-300">{card.text}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden pt-20">
      {/* Enhanced Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="fixed inset-0 opacity-30 dark:opacity-20 -z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
        }}
      />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Floating Cards */}
      <FloatingCards />

      <div className="container mx-auto px-4 relative z-10 flex flex-col min-h-[calc(100vh-4rem)]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto text-center flex-1 flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-8 mx-auto"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
              variants={textVariants}
            >
              Hi, I'm{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 dark:from-primary-400 dark:via-blue-400 dark:to-indigo-400"
                whileHover={{ scale: 1.02 }}
              >
                Jenish Patel
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8 font-medium tracking-wide"
              variants={textVariants}
            >
              Full Stack Developer
            </motion.h2>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I craft modern web applications with a focus on{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">user experience</span> and{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">clean code</span>. 
            Let's build something amazing together.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-2xl font-semibold text-lg w-full sm:w-auto text-center overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-700 to-blue-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 font-semibold text-lg w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center gap-8 mb-12"
          >
            {[
              { number: '5+', label: 'Projects' },
              { number: '3+', label: 'Years' },
              { number: '100%', label: 'Dedication' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll Down
          </motion.p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 