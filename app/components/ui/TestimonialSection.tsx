import { motion } from 'framer-motion'

interface Testimonial {
  name: string
  role: string
  message: string
  image?: string
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div className='bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 border border-white/10 p-8 backdrop-blur-sm'>
      {/* Stars */}
      <div className='flex gap-1 mb-4'>
        {[...Array(5)].map((_, i) => (
          <span key={i} className='text-xl text-emerald-400'>
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className='text-white/80 text-lg leading-relaxed mb-6 italic'>
        "{testimonial.message}"
      </p>

      {/* Author */}
      <div className='flex items-center gap-4'>
        {testimonial.image && (
          <div className='w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center'>
            <span className='text-sm font-bold text-black'>
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className='font-bold text-white'>{testimonial.name}</h4>
          <p className='text-sm text-white/60'>{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

const TestimonialSection = ({
  testimonials,
  title,
}: {
  testimonials: Testimonial[]
  title?: string
}) => {
  return (
    <section className='w-full py-32'>
      {title && (
        <h2 className='text-2xl font-bold text-white text-center mb-16'>
          {title}
        </h2>
      )}
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default TestimonialSection
