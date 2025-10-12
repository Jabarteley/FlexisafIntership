import React from 'react'
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

function Demojs() {
  const name = 'React Learner'
  const element = <span style={{ color: '#61dafb', fontWeight: 'bold' }}>{name}</span>

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: '#fff',
        borderRadius: 12,
        padding: 20,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginTop: 20
      }}
    >
      <h2><FaCode /> JSX Example</h2>
      <p>JSX allows you to write HTML inside JavaScript.</p>
      <p>Hello, {element}!</p>
    </motion.div>
  )
}

export default Demojs
