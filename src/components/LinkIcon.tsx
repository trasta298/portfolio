import * as React from 'react'
import styled from 'styled-components'

interface LinkIconProps {
  img: string,
  link: string
}

export const LinkIcon = ({ img, link }: LinkIconProps) => {
  return (
    <IconContainer>
      <a href={link} target='_blank' rel='noreferrer'>
        <Img src={`static/${img}.svg`} />
      </a>
    </IconContainer>
  )
}

const IconContainer = styled.div`
  max-width: max(10vh, 120px);
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 100%;
  transition: all 0.4s cubic-bezier(.8, 1.8, .75, .75);
  :hover {
    transform: rotate(10deg) scale(1.1);
  }
`
