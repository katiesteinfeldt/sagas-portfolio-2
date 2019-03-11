import React, { Component } from 'react';
import { connect } from 'react-redux';

/* ------- material ui imports -------- */
import Button from '@material-ui/core/Button';


class ProjectGithub extends Component {

    render() {
        let githubDisplay;

        /* -- conditionally render project github link if not empty -- */
        if (this.props.project.github) {
            githubDisplay = <Button variant="outlined"><a target="_blank" rel="noopener noreferrer" href={this.props.project.github}>Github</a></Button>
        }
        else {
            githubDisplay = null;
        }

        return (
            <div>
                {githubDisplay}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ProjectGithub);
