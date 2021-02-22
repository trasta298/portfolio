import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'

export const Works = () => {
  return (
    <PageBody
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <WorksContainer>Works</WorksContainer>
    </PageBody>
  )
}

const PageBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0px auto;
  min-height: 100%;
`

const WorksContainer = styled.div`
  margin-top: 50px;
  font-size: 4rem;
`
