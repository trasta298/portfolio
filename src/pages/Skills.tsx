import { motion } from 'framer-motion'
import * as React from 'react'

export const Skills = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      Skills
    </motion.div>
  )
}
