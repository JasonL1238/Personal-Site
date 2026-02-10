'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'R']
  },
  {
    category: 'ML / Data',
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'scikit-learn', 'YOLO', 'Pandas', 'NumPy', 'SQL', 'R Shiny', 'Matplotlib']
  },
  {
    category: 'Frontend',
    skills: ['React', 'React Native', 'Next.js', 'Node.js', 'Tailwind CSS']
  },
  {
    category: 'Systems / Robotics',
    skills: ['ROS', 'ROS2', 'PX4', 'Linux', 'Git', 'Docker']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-8 text-center text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Skills & Tools
        </motion.h2>

        <div className="space-y-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-medium text-gray-500 mb-4 tracking-wide uppercase">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800/50 border border-gray-700/50 px-4 py-2 text-sm font-light text-gray-300 hover:border-gray-600 hover:bg-gray-800 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
