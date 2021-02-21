import * as React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Home } from './pages/Home'
import { Header } from './pages/Header'
import { Color } from './style/Color'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { Works } from './pages/Works'

export const App : React.FC = () => {
  return (
    <BrowserRouter>
      <Page>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Content>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/skills' component={Skills}></Route>
            <Route path='/works' component={Works}></Route>
            <Redirect to='/'/>
          </Switch>
        </Content>
      </Page>
    </BrowserRouter>
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
  overflow-y: auto;
  padding: 1rem;
`

const HeaderContainer = styled.div`
  background-color: ${Color.main};
`
