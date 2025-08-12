'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCalendar, FiCode } from 'react-icons/fi'
import Image from 'next/image'
import { trackLinkClick } from '@/utils/linkTracker'

const projects = [
  {
    title: 'BookMyShow Clone',
    subtitle: 'Node.js, Express, MongoDB',
    description: 'A full-featured movie ticket booking platform with dynamic listings, secure bookings, and an intuitive admin panel. Built with Node.js and Express for robust backend functionality, MongoDB for flexible data storage, and EJS for server-side rendering. Features include user authentication, real-time seat selection, and comprehensive booking management.',
    image: require('../images/bookmyshow.jpg'),
    technologies: ['NodeJs', 'ExpressJs', 'MongoDb', 'Ejs', 'Multer', 'PassportJs'],
    github: 'https://github.com/pateljenish9878/BookMyShow-Clone',
    live: 'https://bookmyshow-clone-usf4.onrender.com/',
    featured: true,
  },
  {
    title: 'Recipe Website',
    subtitle: 'React.js, Redux, Firebase',
    description: 'A modern recipe discovery platform that helps users find and explore new recipes. Built with React.js and Redux for state management, featuring real-time search, category filtering, and detailed recipe views. Integrated with Firebase for authentication and data storage, ensuring a seamless user experience.',
    image: require('../images/rawcips.jpg'),
    technologies: ['React', 'Redux', 'Firebase', 'Api', 'Material-UI'],
    github: 'https://github.com/pateljenish9878/Rawcips',
    live: 'https://rawcips.vercel.app/',
    featured: true,
  },
  {
    title: 'Restaurant Management System',
    subtitle: 'PHP, MySQL, Laravel',
    description: 'A comprehensive food ordering and management system with features for both customers and administrators. Built with PHP and Laravel, featuring user registration, menu management, cart functionality, and order tracking. Includes a powerful admin panel for managing food items, categories, and orders.',
    image: require('../images/frozenfry.jpg'),
    technologies: ['PHP', 'MySQL', 'Laravel', 'Bootstrap', 'JQuery', 'Ajax'],
    github: 'https://github.com/pateljenish9878/Frozen-Fry',
    live: 'http://frozenfry.duckdns.org/',
    featured: false,
  },
  {
    title: 'Minimalist E-Commerce API',
    subtitle: 'React.js, Redux, Firebase',
    description: 'Minimalist is a responsive e-commerce website built with React.js and Redux, featuring dynamic product listings, category filters, and a secure cart. Integrated with APIs for real-time data and a smooth checkout experience.',
    image: require('../images/minimalist.png'),
    technologies: ['React', 'Redux', 'Firebase', 'Api', 'Material-UI'],
    github: 'https://github.com/pateljenish9878/The-Minimalist',
    live: 'https://the-minimalist-beta.vercel.app/',
    featured: false,
  },
  {
    title: 'E-Commerce API ',
    subtitle: 'React.js, Redux, Firebase',
    description: 'A responsive e-commerce website built with React.js and Redux, featuring dynamic product listings, category filters, and a secure cart. Integrated with APIs for real-time data and smooth checkout.',
    image: require('../images/shopfusion.png'),
    technologies: ['React', 'Redux', 'Firebase', 'Api', 'Material-UI'],
    github: 'https://github.com/pateljenish9878/Shop-Fusion',
    live: 'https://shop-fusion-rosy.vercel.app/',
    featured: false,
  },
  {
    title: 'Task Management',
    subtitle: 'Node.js, Express, MongoDB',
    description: 'A streamlined task management app built with Node.js, featuring categorized task lists, priority sorting, and progress tracking. Includes an admin panel for user and task management. Integrated with RESTful APIs for real-time updates and secure access control.',
    image: require('../images/task-management.png'),
    technologies: ['NodeJs', 'ExpressJs', 'MongoDb', 'Ejs', 'Multer', 'PassportJs'],
    github: 'https://github.com/pateljenish9878/Task-Management',
    live: 'https://task-management-q1sg.onrender.com/',
    featured: false,
  },
  {
  title: 'Coachina Static Website',
  subtitle: 'HTML, CSS, JavaScript',
  description: 'A responsive static website built using HTML, CSS, and vanilla JavaScript. Showcases a clean layout, smooth animations, and modern design principles. Deployed on Vercel for fast and reliable performance.',
  image: require('../images/coachina.png'),
  technologies: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://github.com/pateljenish9878/Coachina',
  live: 'https://coachina-beta.vercel.app/',
  featured: false,
},
{
  title: 'Minimalist E-commerce',
  subtitle: 'React.js, Redux, Firebase',
  description: 'A clean and minimalist e-commerce website built with React.js. Features dynamic product listings, category filtering, and a secure shopping cart. Integrated with Firebase for real-time database, authentication, and smooth checkout flow. Designed with a modern UI and responsive layout for seamless shopping on any device.',
  image: require('../images/minimalist2.png'),
  technologies: ['React.js', 'Redux', 'Firebase', 'React Router', 'Axios', 'Context API'],
  github: 'https://github.com/pateljenish9878/Minimalist-2',
  live: 'https://minimalist-2.vercel.app/',
  featured: false,
},

]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  return (
    <section id="projects" className="py-24 relative">
      {/* Enhanced Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Featured Projects</h2>
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
              Explore my recent work showcasing full-stack development expertise and innovative solutions
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  rotateY: 2,
                }}
                className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 flex flex-col transform-gpu"
                style={{
                  perspective: '1000px',
                }}
              >
                <motion.div 
                  className="relative aspect-[16/9] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 2}
                  />
                  
                  {/* Gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      Featured
                    </motion.div>
                  )}
                  
                  {/* Action buttons */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/90 dark:bg-gray-800/90 rounded-2xl text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => trackLinkClick(project.title, 'GitHub', project.github)}
                      >
                        <FiGithub className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl text-white hover:from-primary-700 hover:to-blue-700 transition-colors duration-300 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: -5, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => trackLinkClick(project.title, 'Live Demo', project.live)}
                      >
                        <FiExternalLink className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-primary-600 dark:text-primary-400 font-medium">
                      <FiCode className="w-4 h-4" />
                      <span>{project.subtitle}</span>
                    </div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium border border-gray-200 dark:border-gray-600"
                          whileHover={{ scale: 1.1, y: -2, rotate: 2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) + (techIndex * 0.1) }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    <motion.div 
                      className="flex gap-4 pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 font-medium group border border-gray-200 dark:border-gray-600"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => trackLinkClick(project.title, 'GitHub', project.github)}
                      >
                        <FiGithub className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        View Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-2xl hover:from-primary-700 hover:to-blue-700 transition-colors duration-300 font-medium group shadow-lg"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => trackLinkClick(project.title, 'Live Demo', project.live)}
                      >
                        <FiExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/30 dark:to-blue-900/30 rounded-3xl p-8 border border-primary-200/50 dark:border-primary-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Have a project in mind?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and bring innovative ideas to life. 
                Let's collaborate and create something amazing together!
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-2xl font-semibold text-lg hover:from-primary-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
