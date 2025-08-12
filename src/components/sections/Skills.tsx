'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiServer, FiCpu, FiLayout, FiTool } from 'react-icons/fi'

const skills = [
  {
    category: 'Frontend Development',
    description: 'Building modern, responsive user interfaces with cutting-edge technologies',
    icon: FiCode,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/30',
    technologies: [
      { name: 'HTML5', level: 'Advanced', percentage: 95 },
      { name: 'CSS3', level: 'Advanced', percentage: 90 },
      { name: 'Tailwind CSS', level: 'Advanced', percentage: 88 },
      { name: 'JavaScript', level: 'Advanced', percentage: 85 },
      { name: 'React.js', level: 'Intermediate', percentage: 75 },
    ],
  },
  {
    category: 'Backend Development',
    description: 'Creating robust server-side applications and RESTful APIs',
    icon: FiServer,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/30',
    technologies: [
      { name: 'Node.js', level: 'Intermediate', percentage: 80 },
      { name: 'Express.js', level: 'Intermediate', percentage: 75 },
      { name: 'PHP', level: 'Intermediate', percentage: 70 },
      { name: 'Laravel', level: 'Intermediate', percentage: 65 },
      { name: 'MySQL', level: 'Intermediate', percentage: 75 },
      { name: 'MongoDB', level: 'Intermediate', percentage: 70 },
    ],
  },
  {
    category: 'AI Tools',
    description: 'Leveraging artificial intelligence to enhance development and creativity',
    icon: FiCpu,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/30',
    technologies: [
      { name: 'OpenAI', level: 'Advanced', percentage: 90 },
      { name: 'Google Gemini', level: 'Advanced', percentage: 85 },
      { name: 'Claude AI', level: 'Advanced', percentage: 88 },
      { name: 'Adobe AI', level: 'Intermediate', percentage: 70 },
    ],
  },
  {
    category: 'Tools & Technologies',
    description: 'Essential tools and technologies for modern development',
    icon: FiTool,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/30',
    technologies: [
      { name: 'Git', level: 'Advanced', percentage: 85 },
      { name: 'GitHub', level: 'Advanced', percentage: 90 },
      { name: 'VS Code', level: 'Advanced', percentage: 95 },
      { name: 'Postman', level: 'Intermediate', percentage: 75 },
      { name: 'Photoshop', level: 'Intermediate', percentage: 65 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="skills" className="py-24 relative">
      {/* Enhanced Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] -z-10">
        <div 
          className="absolute inset-0 bg-repeat" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Skills & Expertise</h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full mb-8"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              A comprehensive overview of my technical skills and areas of expertise
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.category}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform-gpu"
                  style={{
                    perspective: '1000px',
                  }}
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-3"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {skill.category}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-8"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {skill.description}
                  </motion.p>
                  
                  <div className="space-y-6">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) + (techIndex * 0.1) }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{tech.name}</span>
                          <motion.span 
                            className="px-3 py-1 text-sm bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/30 dark:to-blue-900/30 text-primary-600 dark:text-primary-400 rounded-full font-medium"
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech.level}
                          </motion.span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${tech.percentage}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1, 
                              delay: 0.8 + (index * 0.1) + (techIndex * 0.1),
                              ease: "easeOut"
                            }}
                          />
                        </div>
                        
                        {/* Percentage indicator */}
                        <div className="text-right">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {tech.percentage}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              )
            })}
          </div>
          
          {/* Additional skills summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
                Currently exploring advanced React patterns, cloud architecture, and emerging AI technologies.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
