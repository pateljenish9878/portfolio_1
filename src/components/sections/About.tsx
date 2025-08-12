'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook, FiCode, FiAward, FiUser, FiTarget, FiHeart } from 'react-icons/fi'

const stats = [
  {
    label: 'Education',
    value: 'B.Tech',
    description: 'Computer Science & Engineering',
    icon: FiBook,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'Projects',
    value: '5+',
    description: 'Full Stack Applications',
    icon: FiCode,
    color: 'from-green-500 to-emerald-500',
  },
  {
    label: 'Certifications',
    value: '3+',
    description: 'Professional Certifications',
    icon: FiAward,
    color: 'from-yellow-500 to-orange-500',
  },
]

const highlights = [
  {
    icon: FiUser,
    title: 'Passionate Developer',
    description: 'Dedicated to creating innovative solutions with clean, efficient code',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FiTarget,
    title: 'Problem Solver',
    description: 'Analytical approach to complex challenges and user-centric design',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: FiHeart,
    title: 'Continuous Learner',
    description: 'Always exploring new technologies and best practices',
    color: 'from-red-500 to-pink-500',
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 relative">
      {/* Enhanced Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 left-20 w-40 h-40 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">About Me</h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Get to know more about my journey, experience, and what drives me as a developer
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Story</h3>
                <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                    My journey in web development started with a curiosity for creating interactive and user-friendly applications.
                  </p>
                  <p>
                    With expertise in modern JavaScript frameworks, cloud technologies, and database management, 
                    I strive to build scalable and efficient solutions that solve real-world problems.
                  </p>
                </div>
              </motion.div>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon
                  return (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 p-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-200/30 dark:border-gray-700/30"
                    >
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${highlight.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{highlight.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group"
                  >
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 font-semibold mb-2"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      {stat.label}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-gray-500 dark:text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    >
                      {stat.description}
                    </motion.p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Additional section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/30 dark:to-blue-900/30 rounded-3xl p-8 border border-primary-200/50 dark:border-primary-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What I'm Currently Working On
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I'm currently focused on mastering advanced React patterns, exploring cloud architecture with AWS, 
                and diving deeper into AI/ML integration for web applications. I believe in continuous learning 
                and staying updated with the latest industry trends to deliver cutting-edge solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 