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

class ProjectTagId extends Component {

    render() {
        let tagidDisplay;

        /* -- switch language id to name and conditionally render if not empty -- */
        if (this.props.project.tag_id === 1) {
            tagidDisplay = 'Primary Project Language: React';
        }
        else if (this.props.project.tag_id === 2) {
            tagidDisplay = 'Primary Project Language: jQuery';
        }
        else if (this.props.project.tag_id === 3) {
            tagidDisplay = 'Primary Project Language: Node';
        }
        else if (this.props.project.tag_id === 4) {
            tagidDisplay = 'Primary Project Language: SQL';
        }
        else if (this.props.project.tag_id === 5) {
            tagidDisplay = 'Primary Project Language: Redux';
        }
        else if (this.props.project.tag_id === 6) {
            tagidDisplay = 'Primary Project Language: HTML';
        }
        else {
            tagidDisplay = null;
        }
        
        return (
            <div>
                <Typography variant='subtitle1' className={this.props.classes.typo}>{tagidDisplay}</Typography>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(ProjectTagId));
