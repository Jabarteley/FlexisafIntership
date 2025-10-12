import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        marginTop: 40,
        background: 'white',
        padding: 20,
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'inline-block'
      }}
    >
      <h2>useState & Event Handling</h2>
      <p style={{ fontSize: 20, marginBottom: 10 }}>Count: <b>{count}</b></p>

      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={increment}
          style={buttonStyle('#61dafb')}
        >
          <FaPlus /> Increment
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={decrement}
          style={buttonStyle('#ff7675')}
        >
          <FaMinus /> Decrement
        </motion.button>
      </div>
    </motion.div>
  )
}

const buttonStyle = (color) => ({
  backgroundColor: color,
  color: 'white',
  border: 'none',
  borderRadius: 8,
  padding: '8px 16px',
  margin: '0 8px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px'
})

export default Counter
