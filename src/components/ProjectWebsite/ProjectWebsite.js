import React, { Component } from 'react';
import { connect } from 'react-redux';

/* ------- material ui imports -------- */
import Button from '@material-ui/core/Button';


class ProjectWebsite extends Component {

    render() {
        let websiteDisplay;

        /* -- conditionally render project website if not empty -- */
        if (this.props.project.website) {
            websiteDisplay = <Button variant="outlined"><a target="_blank" rel="noopener noreferrer" href={this.props.project.website}>Website</a></Button>
        }
        else {
            websiteDisplay = null;
        }

        return (
            <div>
                {websiteDisplay}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ProjectWebsite);
