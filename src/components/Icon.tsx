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
  border: .7rem ${Color.textPrimary} solid;
`

const Img = styled.img`
  animation-name: slidein;
  animation-duration: 2s;
  @keyframes slidein {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`
