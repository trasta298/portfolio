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
`

const Img = styled.img`
  border-radius: 50%;
  object-fit: contain;
  border: .5rem ${Color.textPrimary} solid;
`
