import * as React from 'react'
import styled from 'styled-components'
import { Color } from '../style/Color'

export const Icon = () => {
  return (
    <ImgContainer>
      <Img src={'static/trasta.png'} />
    </ImgContainer>
  )
}

const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 47%;
  border: max(.8vh, 11px) ${Color.textPrimary} solid;
  max-width: max(30vh, 250px);
  max-height: max(30vh, 250px);
`

const Img = styled.img`
  margin: 4% 0 0 4%;
  width: 92%; height:92%;
  animation: slidein .7s .5s ease 1 normal both running;
  @keyframes slidein {
    0% {
      transform: translateY(100%);
    }
    50% {
      transform: translateY(-6%);
    }
    70% {
      transform: translateY(4%);
    }
    100% {
      transform: translateY(-1%);
    }
  }
`
