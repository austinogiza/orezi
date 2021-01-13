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
import Services from './pages/Services'
import CustomCursor from './Components/CustomCursor'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
//scroll restoration
import ScrollRestoration from 'react-scroll-restoration'
//animation
import {AnimatePresence} from 'framer-motion'



const App = () => {
  const history = createBrowserHistory();




  return (
 <Router history={history}>
   <ScrollRestoration />
 <Layout>
 <CustomCursor/>
 <AnimatePresence exitBeforeEnter>
<Switch >
<Route exact  path="/" component={Home}  />
<Route exact path="/about"  component={About}  />
<Route exact path="/work"  component={Work}  />
<Route exact path="/blog"  component={Blog}  />
<Route exact path="/blog/:slug"  component={BlogDetails}  />
<Route exact path="/contact"  component={Contact}  />
<Route exact path="/services"  component={Services}  />
<Route exact path="/work/:slug"  component={DetailedWork}  />

</Switch>
</AnimatePresence>
 </Layout>
 </Router>

  )
}

export default App;
