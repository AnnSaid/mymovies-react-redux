import React, { Component, Fragment } from 'react'
import {Provider} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom' //or you can use BrowswerRouter
import Navbar from './components/Navbar'
import AllSearch from './components/AllSearch'
import Footer from './components/Footer'
import SingleMovieDetails from './components/SingleMovieDetails'
import store from './store'
import './App.css'
import './AppMedia.css'

class App extends Component {
  render(){
    return (
        <Provider store={store}>
          <Router> 
            <Fragment>
              <Navbar />
              <Route exact path='/' component={AllSearch}/>
              <Route exact path='/movie/:id' component={SingleMovieDetails}/>  
              <Footer />
            </Fragment>
          </Router>
        </Provider>
    );
  }
}

export default App
