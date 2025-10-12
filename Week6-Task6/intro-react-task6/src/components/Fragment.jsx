import React from 'react'
import { motion } from 'framer-motion'
import { FaPuzzlePiece } from 'react-icons/fa'

function Fragment() {
  return (
    <>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          background: '#fff',
          padding: 20,
          marginTop: 40,
          borderRadius: 12,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      >
        <h2><FaPuzzlePiece /> React Fragment Example</h2>
        <p>Fragments let you group multiple elements without adding extra nodes to the DOM.</p>
      </motion.div>
    </>
  )
}

export default Fragment
