import Image from 'next/image'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'

interface ServiceCard {
  title: string
  description: string
  imageSrc: string
  icon?: ReactNode
  features?: string[]
  href: string
}

const ServiceCard = ({ card }: { card: ServiceCard }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className='group overflow-hidden bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 cursor-pointer'
    >
      {/* Image */}
      <div className='relative h-64 overflow-hidden'>
        <Image
          src={card.imageSrc}
          alt={card.title}
          width={400}
          height={300}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent' />
      </div>

      {/* Content */}
      <div className='p-6'>
        <h3 className='text-xl font-bold text-white mb-3'>{card.title}</h3>
        <p className='text-white/70 text-sm leading-relaxed mb-4'>
          {card.description}
        </p>

        {card.features && (
          <ul className='space-y-2 mb-6'>
            {card.features.map((feature, idx) => (
              <li
                key={idx}
                className='flex items-center gap-2 text-sm text-white/60'
              >
                <span className='w-1.5 h-1.5 bg-emerald-400 rounded-full' />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className='flex'>
          <Link
            href={card.href}
            className='w-full py-2 bg-linear-to-r from-emerald-400/20 to-cyan-400/20 text-emerald-400 font-semibold hover:from-emerald-400/40 hover:to-cyan-400/40 transition duration-300 text-sm cursor-pointer px-4 text-center'
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const ServiceCardGrid = ({ cards }: { cards: ServiceCard[] }) => {
  return (
    <section className='max-w-7xl mx-auto py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard card={card} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ServiceCardGrid
