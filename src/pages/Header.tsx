import * as React from 'react'
import styled from 'styled-components'
import { Color } from '../style/Color'

export const Header : React.FC = () => {
  return (
    <HeaderContainer>
      <PageTitle href='/'>trasta</PageTitle>
      <HeaderMenuContainer>
        <HeaderMenu href='/about'>about</HeaderMenu>
        <HeaderMenu href='/skills'>skills</HeaderMenu>
        <HeaderMenu href='/works'>works</HeaderMenu>
      </HeaderMenuContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  height: 100%;
  font-size: 60px;
  @media (min-height: 1250px) {
    font-size: 5vh;
  }
`

const PageTitle = styled.a`
  @media (max-width: 1000px) {
    display: none;
  }
  text-decoration: none;
  color: ${Color.textPrimary};
  font-size: 1em;
  margin: auto 40px;
`

const HeaderMenuContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
`

const HeaderMenu = styled.a`
  text-decoration: none;
  color: ${Color.textPrimary};
  font-size: 0.8em;
  margin: auto 30px 20px;
`
