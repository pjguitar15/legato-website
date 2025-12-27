'use client'

import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08, // speed between items
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}


const CompaniesThatBooked = () => {
  const clients = [
    { id: 1, img: '/clients/the-feast.jpg', title: 'The Feast Dasmarinas' },
    { id: 2, img: '/clients/jil.jpg', title: 'Jesus Is Lord Belleview' },
    { id: 3, img: '/clients/taskus.png', title: 'TaskUs Imus' },
    { id: 4, img: '/clients/controtek.jpg', title: 'Controtek Alabang' },
    {
      id: 5,
      img: '/clients/mpic.png',
      title: 'Metro Pacific Investments',
    },
    {
      id: 6,
      img: '/clients/cvsu.png',
      title: 'CvSU Main Campus',
    },
    {
      id: 7,
      img: '/clients/lpucavite.png',
      title: 'LPU Cavite',
    },
    {
      id: 8,
      img: '/clients/ngis.png',
      title: 'New Generation International School',
    },
    { id: 9, img: '/clients/musikeros.jpg', title: 'CvSU Musikeros' },
    {
      id: 10,
      img: '/clients/ffwpu.jpg',
      title: 'FFWPU Philippines',
    },
  ]

  return (
    <div className='text-white p-16 flex flex-col gap-7 bg-neutral-950 max-w-7xl mx-auto'>
      <motion.h6
        className='text-center'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Companies that trust Legato
      </motion.h6>

      <motion.div
        className='flex flex-row gap-12 justify-center items-center flex-wrap'
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
      >
        {clients.map((client) => (
          <Client key={client.id} img={client.img} title={client.title} />
        ))}
      </motion.div>
    </div>
  )
}

const Client = ({ img, title }: { img: string; title: string }) => {
  return (
    <motion.div
      variants={itemVariants}
      className='flex flex-col gap-3 justify-start items-center'
    >
      <div className='h-19 rounded-xl overflow-hidden'>
        <img className='h-full object-contain' src={img} alt='company' />
      </div>

      <p className='text-white text-xs max-w-40 text-center whitespace-normal wrap-break-wordS'>
        {title}
      </p>
    </motion.div>
  )
}

export default CompaniesThatBooked
