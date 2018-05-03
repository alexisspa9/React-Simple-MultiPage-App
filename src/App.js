import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//import partials
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

//import views
import Home from './components/views/Home';
import Villas from './components/views/Villas';
import Services from './components/views/Services';
import Contact from './components/views/Contact';

//import global styles
import './assets/css/App.css';


class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/villas" component={Villas} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
          </main>
          <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
