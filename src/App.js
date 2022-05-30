import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.css';

import Playlist from "./components/Playlist";
import Home from "./pages/Home";
import About from "./pages/About";
import Top from "./pages/Top";

function App() {
  return (
    <>
    <Top/>
     
    <Router>
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Sanskrit Gallery</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
            
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
             
            </ul>
          </div>
        </div>
      </nav>
       <Routes>
         <Route path="/home" element={<Home/>} exact></Route>
         <Route path="/about" element={<About/>}></Route>
       </Routes>
    </Router>

{/*         
    <Router>  
      <Link to="/">Home</Link>&nbsp;
      <Link to="/about">About</Link>
      <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About}></Route>
      </Switch>
    </Router>
*/}

    <div className="App">
      <h1><a href="/">Playlists of Sanskrit Texts</a></h1>

      <h2>Brahmasutras</h2>
      <Playlist></Playlist>
      <h2>Nyayasutras</h2>
      <Playlist></Playlist>

      <div className="get-updates">
        <div>
          <div className="wide-container"></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
    </div>
    </>
  );
};

export default App;
