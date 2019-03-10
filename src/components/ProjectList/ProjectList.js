import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectList.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import Header from '../Header/Header';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 9,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
    },
});


class ProjectList extends Component {

    render() {
        return (
            <div className="projectList">
                <Header />
                <Grid container spacing={0}>{this.props.projects.map((project) => <ProjectItem project={project} key={project.id}/>)}</Grid>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(ProjectList));
