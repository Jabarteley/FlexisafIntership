import React, { Component } from 'react'
import { motion } from 'framer-motion'
import { FaSyncAlt } from 'react-icons/fa'

class Lifecycle extends Component {
  constructor() {
    super()
    this.state = { message: 'Component is mounting...' }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: 'Component mounted successfully ✅' })
    }, 2000)
  }

  componentWillUnmount() {
    alert('Component will unmount soon!')
  }

  render() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          background: '#fff',
          borderRadius: 12,
          padding: 20,
          marginTop: 40,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h2><FaSyncAlt /> Lifecycle Methods Example</h2>
        <p>{this.state.message}</p>
      </motion.div>
    )
  }
}

export default Lifecycle
