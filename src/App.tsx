import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home'
import About from './pages/about';
import Faq from './pages/faq';
import Blog from './pages/blog';
import Products from './pages/products';
import Navbar from './components/navbar';
import Footer from './components/footer';
import SingleProduct from './pages/singleProduct';


function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Route exact path="/">
          <Home />
        </Route>

        <Route  path="/sobre">
          <About/>
        </Route>

        <Route path="/faq">
          <Faq />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

        <Route exact path="/produtos">
          <Products />
        </Route>

        <Switch>
          <Route path="/produtos/:id" children={<SingleProduct />} />
        </Switch>
        <Footer />

      </Router>
    </>
  );
}

export default App;
