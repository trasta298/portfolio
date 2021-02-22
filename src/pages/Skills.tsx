import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'

export const Skills = () => {
  return (
    <PageBody
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsContainer></SkillsContainer>
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

const SkillsTitle = styled.div`
  margin-top: 50px;
  font-size: 4.3rem;
`

const SkillsContainer = styled.div`
`
