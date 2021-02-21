import * as React from 'react'
import styled from 'styled-components'
import { Color } from '../style/Color'

export const Icon = () => {
  return (
    <ImgContainer>
      <Img src={'static/trasta.webp'} />
    </ImgContainer>
  )
}

const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: .5rem ${Color.textPrimary} solid;
  max-width: max(30vh, 230px);
  max-height: max(30vh, 230px);
`

const Img = styled.img`
  width: 100%; height:100%;
  animation: slidein .7s .5s ease 1 normal backwards running;
  @keyframes slidein {
    0% {
      transform: translateY(100%);
    }
    50% {
      transform: translateY(-5%);
    }
    70% {
      transform: translateY(5%);
    }
    100% {
      transform: translateY(0);
    }
  }
`
