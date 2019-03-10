import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectItem.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent, CardActions, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 350,
        margin: 22,
        backgroundColor: 'white',

    },
    delete: {
        width: '100%',
        backgroundColor: 'white',
    },
    cardText: {
        color: 'white',
    }
};

class ProjectItem extends Component {

    render() {
        let descriptionDisplay;
        let thumbnailDisplay;
        let websiteDisplay;
        let githubDisplay;

        if (this.props.project.description === '') {
            descriptionDisplay = null;
        }
        else {
            descriptionDisplay = this.props.project.description;
        }

        if (this.props.project.thumbnail === '') {
            thumbnailDisplay = <img alt="Empty" src="images/empty-image.png" />
        }
        else {
            thumbnailDisplay = <img alt={this.props.project.description} src={this.props.project.thumbnail} />
        }
        
        if (this.props.project.website === '') {
            websiteDisplay = null;
        }
        else {
            websiteDisplay = null;
        }

        if (this.props.project.github === '') {
            githubDisplay = null;
        }
        else {
            githubDisplay = this.props.project.github;
        }

        return (
        <Grid item xs={3}>
                <Card className={this.props.classes.card}>
                    <CardContent>
                    <br/>
                    {this.props.project.name}
                    <br/>
                    {descriptionDisplay}
                    <br />
                    {thumbnailDisplay}
                    <br />
                    {websiteDisplay}
                    <br />
                    {githubDisplay}
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(ProjectItem));
