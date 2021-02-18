import * as React from 'react'
import { Home } from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export const App : React.FC = () => {
  return (
    <Router>
      <Route exact path='/' component={Home}></Route>
    </Router>
  )
}
