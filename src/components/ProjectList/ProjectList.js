import React, { Component } from 'react';
import { connect } from 'react-redux';

/* ------- component imports -------- */
import ProjectItem from '../ProjectItem/ProjectItem';
import Header from '../Header/Header';

/* ------- material ui imports -------- */
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

/* ------- material ui styles -------- */
const styles = {
    grid: {
        textAlign: 'center',
    }
};

class ProjectList extends Component {

    render() {
        return (
            <div className={this.props.classes.grid}>
                <Header />
                <Grid container spacing={8}>{this.props.projects.map((project) =>
                    <ProjectItem project={project} key={project.id} />)}</Grid>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(ProjectList));
