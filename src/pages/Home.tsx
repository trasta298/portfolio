import * as React from 'react'
import styled from 'styled-components'
import { Icon } from '../components/Icon'
import { LinkIcon } from '../components/LinkIcon'

export const Home = () => {
  return (
    <PageBody>
      <IconContainer>
        <Icon />
      </IconContainer>
      <LinkIconContainer>
        <LinkIcon img='AtCoder' />
      </LinkIconContainer>
    </PageBody>
  )
}

const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 1000px;
  margin: 0px auto;
  min-height: 100%;
`

const IconContainer = styled.div`
  margin: 50px auto 30px;
`

const LinkIconContainer = styled.div`
  flex: 1;
`
