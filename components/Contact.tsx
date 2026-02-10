'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

const socialLinks = [
  { icon: Mail, href: 'mailto:li59@seas.upenn.edu', label: 'Email', color: 'text-blue-400' },
  { icon: Github, href: 'https://github.com/JasonL1238', label: 'GitHub', color: 'text-gray-200' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jasonli12345', label: 'LinkedIn', color: 'text-blue-400' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-6 text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          className="text-base text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          I&apos;m always interested in conversations about interdisciplinary work, whether that&apos;s research, engineering, or data-focused projects. If you&apos;re working on problems at the intersection of computation, health, or data-driven decision-making, I&apos;d love to hear about it.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-gray-900/50 border border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white transition-colors duration-200 text-sm font-light"
            >
              <social.icon size={18} />
              {social.label}
            </a>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <a
            href="mailto:li59@seas.upenn.edu"
            className="inline-block text-gray-400 hover:text-white transition-colors duration-200 text-sm font-light"
          >
            li59@seas.upenn.edu
          </a>
          <p className="text-gray-400 text-sm font-light">+1 (847) 907-0871</p>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-12 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xs font-light">
            © {new Date().getFullYear()} Jason Li
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
