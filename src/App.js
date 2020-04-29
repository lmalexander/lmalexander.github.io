import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
// import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <h1>Liz Murice Alexander</h1>
      <Container>
        <div className="main">
          {/* <Header /> */}
           <Jumbotron />
          {/* <Navbar />
           <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} /> */}
         </div> 
      </Container>  
    </Router> 
  );
}

export default App;
