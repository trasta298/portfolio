import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </Content>
    </Page>
  )
}

const Page = styled(BrowserRouter)`
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
