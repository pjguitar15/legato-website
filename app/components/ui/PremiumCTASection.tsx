import { motion } from 'framer-motion'

const PremiumCTASection = ({
  headline,
  subheadline,
  buttonText,
  buttonAction,
}: {
  headline: string
  subheadline: string
  buttonText: string
  buttonAction?: () => void
}) => {
  return (
    <section className='w-full py-12'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='relative overflow-hidden bg-linear-to-r from-zinc-700/20 via-teal-600/20 to-zinc-700/20 border-y border-emerald-400/30 p-16 text-center'
      >
        {/* Animated background elements */}
        <div className='absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl z-0' />
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl z-0' />

        <div className='relative z-10'>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='text-xl lg:text-3xl font-bold text-white mb-6 leading-tight'
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='lg:text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'
          >
            {subheadline}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={buttonAction}
            className='px-9 lg:px-12 py-3 lg:py-4 bg-linear-to-r from-emerald-400 to-cyan-400 text-black font-bold text-sm lg:text-md hover:shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300'
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default PremiumCTASection
