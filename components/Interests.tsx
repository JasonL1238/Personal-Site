'use client'

import { motion } from 'framer-motion'

const clubs = [
  {
    name: 'AI@Penn',
    description: 'I enjoy going to talks and workshops where people share what they\'re working on. It\'s a good way to stay curious about what\'s happening in AI research and meet others who are thinking about similar problems.'
  },
  {
    name: 'Penn Spark',
    description: 'I like spending time with people who are building things, whether that\'s products or companies. The conversations are usually practical: how do you actually ship something, what makes an idea worth pursuing, that kind of thing.'
  },
  {
    name: 'Wharton Statistics Society',
    description: 'I find behavioral finance interesting because it connects data to how people actually make decisions. The discussions often get into how models can inform judgment without replacing it, which feels relevant to a lot of the work I do.'
  },
  {
    name: 'Penn Aerial Robotics',
    description: 'I work on perception systems for autonomous aerial vehicles, developing computer vision pipelines and integrating sensor data. It\'s a hands-on way to apply systems thinking to real robotics problems, and the team environment is collaborative and focused on building things that actually work.'
  },
  {
    name: 'Penn Club Tennis',
    description: 'Outside of class, I often play tennis. It\'s a good way to stay active and clear my head. The competitive aspect is fun, but mostly I like that it forces you to focus on something completely different from technical work.'
  }
]

const hobbies = [
  {
    name: 'Poker',
    description: 'I mostly play poker because it\'s fun and social, but I do like that there\'s real math underneath it. Phil Laak is my favorite to watch because he\'s unpredictable and doesn\'t take himself too seriously. Games are more interesting when people don\'t all play the same way.'
  },
  {
    name: 'Basketball',
    description: 'I\'m a Chicago Bulls fan, which is mostly pain but also kind of a personality trait at this point. I like pickup basketball because it\'s fast and simple: no planning, no setup, just show up and play. It\'s an easy way to get out of your head.'
  },
  {
    name: 'Running',
    description: 'Running is how I clear my head. I usually run on the Schuylkill River Trail when the weather\'s good, and you really enjoy the scenic views. I don\'t track much. It\'s more about getting outside and moving than anything else.'
  },
  {
    name: 'Cooking',
    description: 'I like cooking, mostly by messing around and seeing what works. I lean toward simple stuff I\'ll actually eat again. Not a fan of overly sweet savory dishes. It\'s relaxing, useful, and way more satisfying than ordering takeout every time.'
  }
]

export default function Interests() {
  return (
    <section id="interests" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-8 text-center text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Clubs & Interests
        </motion.h2>

        <div className="space-y-12">
          {/* Clubs Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-6 tracking-wide uppercase">Clubs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.map((club, index) => (
                <motion.div
                  key={club.name}
                  className="bg-gray-800/50 border-l-2 border-gray-700 pl-6 pr-4 py-5 hover:border-gray-600 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h4 className="text-base font-medium text-white mb-3 tracking-tight">{club.name}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{club.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hobbies Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-6 tracking-wide uppercase">Hobbies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  className="bg-gray-800/50 border-l-2 border-gray-700 pl-6 pr-4 py-5 hover:border-gray-600 transition-colors duration-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h4 className="text-base font-medium text-white mb-3 tracking-tight">{hobby.name}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{hobby.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
