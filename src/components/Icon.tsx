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
  border: min(10px,2vw) ${Color.textPrimary} solid;
  width: min(50vw, 300px);
  height: min(50vw, 300px);
`

const Img = styled.img`
  margin: 1% 0 0 1%;
  width: 98%; height:98%;
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
