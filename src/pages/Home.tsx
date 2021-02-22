import { motion } from 'framer-motion'
import * as React from 'react'
import styled from 'styled-components'
import { Icon } from '../components/Icon'
import { LinkIcon } from '../components/LinkIcon'

export const Home = () => {
  return (
    <PageBody
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <IconContainer>
        <Icon />
      </IconContainer>
      <LinkIconContainer>
        <LinkIcon img='twitter' link='https://twitter.com/tra_sta' />
        <LinkIcon img='github' link='https://github.com/trasta298' />
        <LinkIcon img='atcoder' link='https://atcoder.jp/users/trasta' />
      </LinkIconContainer>
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

const IconContainer = styled.div`
  margin: 80px auto 60px;
`

const LinkIconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
