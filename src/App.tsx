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
  height: calc(100vh - 100px);
`

const HeaderContainer = styled.div`
  background-color: ${Color.main};
  height: 100px;
`
