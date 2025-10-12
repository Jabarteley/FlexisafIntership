import React from 'react'
import { motion } from 'framer-motion'
import { FaUserAlt, FaBriefcase } from 'react-icons/fa'

function ProfileCard({ name, role }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: 12,
        padding: 20,
        marginTop: 40,
        background: 'white',
        width: 260,
        marginInline: 'auto',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <h3><FaUserAlt style={{ color: '#61dafb' }} /> Profile Card</h3>
      <p><FaUserAlt /> <b>Name:</b> {name}</p>
      <p><FaBriefcase /> <b>Role:</b> {role}</p>
    </motion.div>
  )
}

export default ProfileCard
