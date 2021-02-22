import * as React from 'react'
import styled from 'styled-components'
import images from '../static/*.svg'

interface LinkIconProps {
  img: string,
  link: string
}

export const LinkIcon = ({ img, link }: LinkIconProps) => {
  return (
    <IconContainer>
      <a href={link} target='_blank' rel='noreferrer'>
        <Img src={ images[img] } />
      </a>
    </IconContainer>
  )
}

const IconContainer = styled.div`
  width: min(20vw, 90px);
  padding: min(5vw, 30px);
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
