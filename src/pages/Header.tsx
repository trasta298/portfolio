import * as React from 'react'
import styled from 'styled-components'
import { Color } from '../style/Color'
import { Link } from 'react-router-dom'

export const Header : React.FC = () => {
  return (
    <HeaderContainer>
      <PageTitle to='/'>trasta</PageTitle>
      <HeaderMenuContainer>
        <HeaderMenu to='/about'>about</HeaderMenu>
        {/* <HeaderMenu to='/skills'>skills</HeaderMenu> */}
        <HeaderMenu to='/works'>works</HeaderMenu>
      </HeaderMenuContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  height: 100%;
  max-width: 1200px;
  margin: 0px auto;
`

const PageTitle = styled(Link)`
  @media (max-width: 700px) {
    display: none;
  }
  text-decoration: none;
  color: ${Color.textSecondaly};
  font-size: 3em;
  margin: auto 30px;
`

const HeaderMenuContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-right: 20px;
`

const HeaderMenu = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${Color.textSecondaly};
  font-size: 2em;
  margin: 20px 20px;
  ::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 3px;
    background: ${Color.textSecondaly};
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform .3s;
  }
  :hover::after {
    transform: scale(1, 1);
  }
`
