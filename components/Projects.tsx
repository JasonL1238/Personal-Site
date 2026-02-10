'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Zebrafish Behavior Analysis',
    problem: 'Understanding how computational methods can extract meaningful patterns from animal behavior data',
    approach: 'I developed computer vision pipelines using Python, OpenCV, and YOLO to analyze video data of zebrafish behavior, working closely with neuroscience researchers to identify which behaviors matter and how to quantify them',
    outcome: 'The tools I built enable researchers to ask questions about behavior that weren\'t feasible with manual analysis, showing how computer vision can support biological research',
    domain: 'Biomedical AI',
  },
  {
    title: 'Social Media Data Analysis',
    problem: 'Extracting insights from large-scale text data using transformer models',
    approach: 'I developed NLP models to analyze social media datasets, focusing on how transformer architectures can identify patterns in complex, noisy text data',
    outcome: 'This work contributed to research published in IEEE, showing how modern NLP methods can be applied to understand large-scale social phenomena',
    domain: 'NLP Research',
  },
  {
    title: 'UAV Perception Systems',
    problem: 'Building reliable perception for autonomous aerial systems',
    approach: 'I developed computer vision and perception pipelines using ROS2 and PX4, integrating sensor data to enable autonomous navigation in real environments',
    outcome: 'The systems I built demonstrate how perception, planning, and control can work together in physical systems, with applications to autonomous robotics',
    domain: 'Robotics & Autonomy',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-4 text-center text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="text-sm text-gray-500 text-center mb-12 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Projects that show how computational methods can be applied to biological systems, robotics, and data analysis
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800/50 border-l-2 border-gray-700 pl-6 py-6 hover:border-gray-600 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight">{project.title}</h3>
              <p className="text-xs text-gray-500 mb-4 font-light uppercase tracking-wide">{project.domain}</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Problem</p>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Approach</p>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{project.approach}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Outcome</p>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{project.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
