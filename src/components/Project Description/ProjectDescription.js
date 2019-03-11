import React, { Component } from 'react';
import { connect } from 'react-redux';

/* ------- material ui imports -------- */
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

//material ui styles
const styles = {
    typo: {
        color: '#607D8B',
    },
};

class ProjectDescription extends Component {

    render() {
        let descriptionDisplay;

        /* -- conditionally render project description if not empty -- */
        if (this.props.project.description === '') {
            descriptionDisplay = null;
        }
        else {
            descriptionDisplay = this.props.project.description;
        }

        return (
            <div>
                <Typography className={this.props.classes.typo}>{descriptionDisplay}</Typography>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(ProjectDescription));
