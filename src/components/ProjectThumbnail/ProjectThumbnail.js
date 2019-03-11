import React, { Component } from 'react';
import { connect } from 'react-redux';

/* ------- material ui imports -------- */
import { withStyles } from '@material-ui/core/styles';


//material ui styles
const styles = {
    img: {
        maxWidth: '350px',
        maxHeight: '350px',
        margin: '10px',
    },
};

class ProjectThumbnail extends Component {

    render() {
        let thumbnailDisplay;

    /* -- conditionally render project image if not empty -- */
        if (this.props.project.thumbnail === '' || this.props.project.thumbnail === null) {
            thumbnailDisplay = <img className={this.props.classes.img} alt="Empty" src="images/empty-image.png" />
        }
        else {
            thumbnailDisplay = <img className={this.props.classes.img} alt={this.props.project.description} src={this.props.project.thumbnail} />
        }
        return (
            <div>
                {thumbnailDisplay}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(ProjectThumbnail));
