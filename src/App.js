import React from 'react'
import './App.css'
import Layout from './Container/Layout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Home from './pages/Home'
import About from './pages/About'



const App = () => {
  const history = createBrowserHistory()
  return (

 <Router history={history}>
 <Layout>
<Switch>
<Route exact  path="/" component={Home}  />
<Route exact path="/about"  component={About}  />
<Route exact path="/work"  component={About}  />
<Route exact path="/contact"  component={About}  />

</Switch>
 </Layout>
 </Router>

  )
}

export default App
