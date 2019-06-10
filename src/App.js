import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/about">About</Link>&nbsp;
      <Link to="/topics">Topics</Link>&nbsp;
      <hr />
      <Route exact path="/" render={() => (<Home text='Home' />)} />
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
    <Link to={`${match.url}/rendering`}>{`${match.url}/rendering`}</Link><br />
    <Link to={`${match.url}/components`}>{`${match.url}/components`}</Link><br />
    <Link to={`${match.url}/props-v-state`}>{`${match.url}/props-v-state`}</Link><br />

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
  </div>