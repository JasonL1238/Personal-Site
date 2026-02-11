'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect, useCallback } from 'react'

const experienceGroups = [
  {
    title: 'Research & Biomedical AI',
    description: 'Applying computer vision and AI to biological systems, working with real datasets and collaborating with neuroscience researchers to extract insights from complex behavioral and genetic data.',
    items: [
      {
        context: 'Biomedical AI Research',
        organization: 'Campbell Lab, University of Pennsylvania',
        location: 'Philadelphia, PA',
        date: '2025 - Present',
        content: 'I work on computer vision models for analyzing zebrafish behavior, using Python, OpenCV, and YOLO to process video data and identify patterns. The challenge isn\'t just building accurate models. It\'s understanding what behaviors matter to neuroscientists and how computational methods can answer questions that traditional analysis can\'t. Real data is messy, which is part of what makes it interesting. This work has taught me how to bridge the gap between technical implementation and biological understanding, often working with datasets that require careful preprocessing and domain expertise.'
      },
      {
        context: 'NLP Research Intern',
        organization: 'BlastAI',
        location: 'Remote',
        date: 'Summer 2023',
        content: 'I developed transformer models for analyzing large-scale social media data, focusing on extracting meaningful patterns from complex text datasets. This project resulted in a paper published at the Second International Conference on Informatics (ICI-2023) and gave me experience working with state-of-the-art NLP methods while thinking critically about how these models can be applied to real-world problems. The work required balancing technical innovation with practical constraints, and it reinforced my interest in applying AI to domains where the data is inherently complex and meaningful.',
        link: 'https://arxiv.org/abs/2310.05964'
      },
      {
        context: 'Bioinformatics & Data Analysis Intern',
        organization: 'NextGen Jane',
        location: 'Remote',
        date: '2023 - 2024',
        content: 'I worked with large patient datasets, performing statistical analysis and building Shiny visualizations to help researchers understand patterns in health data. This experience taught me how to think about data quality, statistical rigor, and visualization design, all while working with datasets where the stakes are high and the questions are complex. The work required close collaboration with domain experts to ensure that the analysis and visualizations actually supported research goals.'
      }
    ]
  },
  {
    title: 'Engineering & Robotics',
    description: 'Building autonomous systems that combine perception, planning, and control, with a focus on bridging software with physical systems.',
    items: [
      {
        context: 'Perception Systems Engineer',
        organization: 'Penn Aerial Robotics',
        location: 'Philadelphia, PA',
        date: '2025 - Present',
        content: 'I work on perception systems for UAVs using PX4 and ROS2, developing computer vision pipelines that enable autonomous navigation. The challenge is building systems that work reliably in real environments, not just in simulation. This has taught me systems thinking, how to debug complex autonomy stacks, and how to balance theoretical approaches with practical constraints. The work requires understanding everything from low-level sensor data to high-level planning, and it\'s given me experience in how software interfaces with physical systems.'
      }
    ]
  },
  {
    title: 'Product & Applied Software',
    description: 'Building user-facing software that addresses real needs, with a focus on mental health applications and iterative development.',
    items: [
      {
        context: 'Software Engineer',
        organization: 'MindX Sciences',
        location: 'Remote',
        date: '2023 - 2024',
        content: 'I developed features in React Native for a mental health application used by over 2,000 users. This work taught me how to think about user experience, iterate based on feedback, and ship software that people actually use. The product sits at the intersection of technology and health, which reinforced my interest in building tools that can have real impact. Working on a deployed product with real users forced me to think about edge cases, performance, and how technical decisions affect user experience.'
      }
    ]
  }
]

export default function Experience() {
  const allExperiences = experienceGroups.flatMap(group => 
    group.items.map(item => ({
      ...item,
      category: group.title
    }))
  )

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = useCallback(() => {
    if (!scrollContainerRef.current || !contentRef.current) return
    const containerWidth = scrollContainerRef.current.clientWidth
    const contentWidth = contentRef.current.scrollWidth
    setCanScrollLeft(scrollPosition > 0)
    setCanScrollRight(scrollPosition < contentWidth - containerWidth - 10)
  }, [scrollPosition])

  useEffect(() => {
    checkScrollability()
    window.addEventListener('resize', checkScrollability)
    return () => {
      window.removeEventListener('resize', checkScrollability)
    }
  }, [checkScrollability])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current || !contentRef.current) return
    const scrollAmount = 500
    const containerWidth = scrollContainerRef.current.clientWidth
    const contentWidth = contentRef.current.scrollWidth
    const maxScroll = contentWidth - containerWidth
    
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(maxScroll, scrollPosition + scrollAmount)
    
    setScrollPosition(newPosition)
  }

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 via-gray-800/90 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-12 text-center text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 hover:bg-gray-900 border border-gray-700 rounded-full p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 hover:bg-gray-900 border border-gray-700 rounded-full p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div 
            ref={scrollContainerRef}
            className="overflow-x-hidden pb-4"
            style={{ position: 'relative' }}
          >
            <div 
              ref={contentRef}
              className="flex gap-6 transition-transform duration-300 ease-out"
              style={{ 
                minWidth: 'max-content',
                transform: `translateX(-${scrollPosition}px)`
              }}
            >
              {allExperiences.map((item, index) => (
                <motion.div
                  key={`${item.category}-${index}`}
                  className="bg-gray-900/50 border-l-2 border-gray-700 pl-6 py-5 hover:border-gray-600 transition-colors duration-200 flex-shrink-0"
                  style={{ width: '100%', minWidth: '400px', maxWidth: '500px' }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="mb-3">
                    <p className="text-xs text-gray-500 font-light uppercase tracking-wide mb-1">{item.category}</p>
                    <h4 className="text-base font-medium text-white mb-1 tracking-tight">{item.context}</h4>
                    <p className="text-xs text-gray-500 font-light">{item.organization}</p>
                    <p className="text-xs text-gray-500 font-light">{item.location} • {item.date}</p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{item.content}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      View paper →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
