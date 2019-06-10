import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavLink activeStyle={{ backgroundColor: 'yellow' }} to="/home" onlyActiveOnIndex>Home</NavLink>&nbsp;
      <NavLink activeStyle={{ backgroundColor: 'yellow' }} to="/about">About</NavLink>&nbsp;
      <NavLink activeStyle={{ backgroundColor: 'yellow' }} to="/topics">Topics</NavLink>&nbsp;
      <hr />
      <Route exact path="/home" render={() => (<Home text='Home' />)} />
      <Route path="/about" render={() => (<Home text='About' />)} />
      <Route path="/topics" component={Topics} />
    </BrowserRouter>
  );
}

const Home = ({ text }) => <h2>{`${text}`}</h2>

const Topic = ({ match }) => <h3>{match.params.id}</h3>

const Topics = ({ match }) =>
  <div>
    <h2>Topics</h2>
    <NavLink activeStyle={{ backgroundColor: 'yellow' }} to={`${match.url}/rendering`}>{`${match.url}/rendering`}</NavLink><br />
    <NavLink activeStyle={{ backgroundColor: 'yellow' }} to={`${match.url}/components`}>{`${match.url}/components`}</NavLink><br />
    <NavLink activeStyle={{ backgroundColor: 'yellow' }} to={`${match.url}/props-v-state`}>{`${match.url}/props-v-state`}</NavLink><br />

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
  </div>