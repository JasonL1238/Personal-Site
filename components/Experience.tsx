'use client'

import { motion } from 'framer-motion'

const experienceGroups = [
  {
    title: 'Research & Biomedical AI',
    description: 'Applying computer vision and AI to biological systems, working with real datasets and collaborating with neuroscience researchers to extract insights from complex behavioral and genetic data.',
    items: [
      {
        context: 'Biomedical AI Research',
        organization: 'Campbell Lab, University of Pennsylvania',
        location: 'Philadelphia, PA',
        date: '2024 - Present',
        content: 'I work on computer vision models for analyzing zebrafish behavior, using Python, OpenCV, and YOLO to process video data and identify patterns. The challenge isn\'t just building accurate models—it\'s understanding what behaviors matter to neuroscientists and how computational methods can answer questions that traditional analysis can\'t. This work has taught me how to bridge the gap between technical implementation and biological understanding, often working with messy, real-world data that requires careful preprocessing and domain expertise.'
      },
      {
        context: 'NLP Research Intern',
        organization: 'BlastAI',
        location: 'Remote',
        date: 'Summer 2024',
        content: 'I developed transformer models for analyzing large-scale social media data, focusing on extracting meaningful patterns from complex text datasets. This project resulted in an IEEE paper and gave me experience working with state-of-the-art NLP methods while thinking critically about how these models can be applied to real-world problems. The work required balancing technical innovation with practical constraints, and it reinforced my interest in applying AI to domains where the data is inherently complex and meaningful.'
      },
      {
        context: 'Bioinformatics & Data Analysis Intern',
        organization: 'NextGen Jane',
        location: 'Remote',
        date: 'Summer 2023',
        content: 'I worked with large patient datasets, performing statistical analysis and building Shiny visualizations to help researchers understand patterns in health data. This experience taught me how to think about data quality, statistical rigor, and visualization design—all while working with datasets where the stakes are high and the questions are complex. The work required close collaboration with domain experts to ensure that the analysis and visualizations actually supported research goals.'
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
        date: '2023 - Present',
        content: 'I work on perception systems for UAVs using PX4 and ROS2, developing computer vision pipelines that enable autonomous navigation. The challenge is building systems that work reliably in real environments—not just in simulation. This has taught me systems thinking, how to debug complex autonomy stacks, and how to balance theoretical approaches with practical constraints. The work requires understanding everything from low-level sensor data to high-level planning, and it\'s given me deep experience in how software interfaces with physical systems.'
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

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
