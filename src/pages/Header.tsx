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
  font-size: 50px;
  max-width: 1200px;
  margin: 0px auto;
  @media (min-height: 1250px) {
    font-size: 5vh;
  }
`

const PageTitle = styled(Link)`
  @media (max-width: 1000px) {
    display: none;
  }
  text-decoration: none;
  color: ${Color.textSecondaly};
  font-size: 1em;
  margin: 10px 40px;
`

const HeaderMenuContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-right: 40px;
`

const HeaderMenu = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${Color.textSecondaly};
  font-size: 0.8em;
  margin: 20px 30px 13px;
  @media (min-height: 1250px) {
    margin: 20px 30px 13px;
  }
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
