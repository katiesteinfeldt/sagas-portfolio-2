import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectList.css';
import ProjectItem from '../ProjectItem/ProjectItem';

class ProjectList extends Component {

    








    render() {
        return (
            <div className="projectList">
                <div>{this.props.projects.map((project) => <ProjectItem project={project} key={project.id}/>)}</div>
            </div>
        );
    }
}







const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default (connect(mapStateToProps)(ProjectList));
