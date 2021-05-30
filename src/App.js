import React from 'react'
import './App.css'
//portfolio layout
import Layout from './Container/Layout'
//portfolio router
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//portfolio history
import {createBrowserHistory} from 'history'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'
import DetailedWork from './pages/DetailedWork'

import CustomCursor from './Components/CustomCursor'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
//scroll restoration
import ScrollTop from './Components/ScrollTop'
import BackToTop from './Components/BackToTop'
//animation




const App = () => {
  const history = createBrowserHistory();




  return (
 <Router history={history}>
   <ScrollTop />
   <BackToTop/>
 <Layout>
 <CustomCursor/>
<Switch >
<Route exact  path="/" component={Home}  />
<Route exact path="/about"  component={About}  />
<Route exact path="/work"  component={Work}  />
<Route exact path="/blog"  component={Blog}  />
<Route exact path="/blog/:slug"  component={BlogDetails}  />
<Route exact path="/contact"  component={Contact}  />
<Route exact path="/work/:slug"  component={DetailedWork}  />

</Switch>
 </Layout>
 </Router>

  )
}

export default App;
