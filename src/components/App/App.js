import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from '../ProjectList/ProjectList';
import { HashRouter as Router, Route } from 'react-router-dom';
import Admin from '../Admin/Admin';

class App extends Component {

componentDidMount(){
  this.getProjects();
  this.getTags();
}

//gets list of projects by dispatching to redux store/saga
getProjects = () => {
  this.props.dispatch({type: 'FETCH_PROJECTS'});
}

//gets list of tags by dispatching to redux store/saga
getTags = () => {
  this.props.dispatch({type: 'FETCH_TAGS'});
}

  render() {
    return (
      <Router>
      <div>
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
