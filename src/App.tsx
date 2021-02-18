import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Home } from './pages/Home'
import { Header } from './pages/Header'
import { Color } from './style/Color'

export const App : React.FC = () => {
  return (
    <Page>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Content>
        <Router>
          <Route exact path='/' component={Home}></Route>
        </Router>
      </Content>
    </Page>
  )
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

const Content = styled.div`
  flex: 1;
`

const HeaderContainer = styled.div`
  background-color: ${Color.main};
  height: max(100px, 8vh);
`
