'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/pateljenish9878',
    color: 'from-gray-600 to-gray-800',
    hoverColor: 'from-gray-700 to-gray-900',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://linkedin.com/in/pateljenish44',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'from-blue-700 to-blue-800',
  },
  {
    name: 'Email',
    icon: FiMail,
    url: 'mailto:pateljenish9878@gmail.com',
    color: 'from-red-500 to-red-600',
    hoverColor: 'from-red-600 to-red-700',
  },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800/50 dark:to-gray-900/50 py-12 border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center md:text-left mb-6 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              © {new Date().getFullYear()} Jenish Patel. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Made with{' '}
              <motion.span
                className="inline-block text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="w-4 h-4" />
              </motion.span>
              {' '}and Next.js
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-2xl bg-gradient-to-r ${link.color} hover:${link.hoverColor} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                aria-label={link.name}
                whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Ready to start your next project?{' '}
            <motion.a
              href="#contact"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Let's connect!
            </motion.a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 