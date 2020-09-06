import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Comment from './components/Comment/Comment';
import PostDetails from './components/PostDetail/PostDetails';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>  
          </Route>
          <Route exact path="/">
          <Header></Header>
            <Home></Home> 
          </Route>
          <Route path="/post/:userId">
            <PostDetails></PostDetails>
            <Comment></Comment>       
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
