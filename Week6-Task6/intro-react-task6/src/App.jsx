import React from 'react'
import { motion } from 'framer-motion'
import { FaReact } from 'react-icons/fa'
import Counter from './components/Counter'
import ProfileCard from './components/ProfileCard'
import Lifecycle from './components/Lifecycle'
import Fragment from './components/Fragment'
import Demojs from './components/DemoJs'

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        fontFamily: 'Arial',
        padding: 30,
        textAlign: 'center',
        backgroundColor: '#f7f9fc',
        minHeight: '100vh'
      }}
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{ color: '#61dafb' }}
      >
        <FaReact size={40} style={{ verticalAlign: 'middle' }} /> Into React Concepts 
      </motion.h1>

      <p style={{ marginBottom: 40, color: '#444' }}>
        Learn React fundamentals by example — Components, State, Props, Lifecycle, and more.
      </p>

      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Demojs />
        <Counter />
        <ProfileCard name="Abduljabar Asaju" role="Frontend Developer" />
        <Lifecycle />
        <Fragment />
      </motion.div>
    </motion.div>
  )
}

export default App
