import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ProjectList from '../ProjectList/ProjectList';
import Header from '../Header/Header';

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
      <div>
        <Header />
        <ProjectList />
      </div>
    );
  }
}


const mapStateToProps = (reduxState) => {
  return reduxState;
}

export default (connect(mapStateToProps)(App));
