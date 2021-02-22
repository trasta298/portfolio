import * as React from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Home } from './pages/Home'
import { Header } from './pages/Header'
import { Color } from './style/Color'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { Works } from './pages/Works'
import { AnimatePresence } from 'framer-motion'

export const App : React.FC = () => {
  const location = useLocation()

  return (
    <Page>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Content>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/skills' component={Skills}></Route>
            <Route path='/works' component={Works}></Route>
            <Route path='/' render={() => (<Redirect to='/' />)} />
          </Switch>
        </AnimatePresence>
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
  overflow-y: auto;
  padding: 1rem;
`

const HeaderContainer = styled.div`
  background-color: ${Color.main};
`
