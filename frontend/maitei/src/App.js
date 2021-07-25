import React, { Component, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './components/Sidebar/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Home from './components/Home/index'
import Levels from './components/Levels/index'
import Chapters from './components/Chapters/index'
import Exercises from './components/Exercises';
import Profile from './components/Profile/index'


import './App.css';

function App() {
  return (
    <Router>
    <body id="page-top">
    <div id="wrapper">
        <Sidebar />
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <Header />
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Route exact path="/levels">
                            <Levels />
                        </Route>
                        <Route exact path="/chapters">
                            <Chapters />
                        </Route>
                        <Route exact path="/exercises">
                            <Exercises />
                        </Route>
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    </div>
    </body>
    </Router>
  );
}

export default App;

