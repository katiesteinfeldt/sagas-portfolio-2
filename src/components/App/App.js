import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ProjectList from '../ProjectList/ProjectList';
import Header from '../Header/Header';
import { HashRouter as Router, Route } from 'react-router-dom';
import Admin from '../Admin/Admin';

class App extends Component {

componentDidMount(){
  this.getProjects();
}

getProjects = () => {
  console.log('going to get projects');
  this.props.dispatch({type: 'FETCH_PROJECTS'});
}

  // Renders the entire app on the DOM
  render() {
    console.log(this.props.projects);
    return (
      <Router>
      <div>
        <Header />
        <Route exact path="/" component={ProjectList}/>
        <Route exact path="/admin" component={Admin}/>
      </div>
      </Router>
    );
  }
}


const mapStateToProps = (reduxState) => {
  return reduxState;
}

export default (connect(mapStateToProps)(App));