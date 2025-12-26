import { motion } from 'framer-motion'

interface Stat {
  number: string
  label: string
  description?: string
}

const StatsSection = ({ stats, title }: { stats: Stat[]; title?: string }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className='w-full py-20'>
      {title && (
        <h2 className='text-3xl font-bold text-white text-center mb-16'>
          {title}
        </h2>
      )}
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className='bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300'
          >
            <div className='text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3'>
              {stat.number}
            </div>
            <h3 className='text-lg font-semibold text-white mb-2'>{stat.label}</h3>
            {stat.description && (
              <p className='text-sm text-white/60'>{stat.description}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default StatsSection
