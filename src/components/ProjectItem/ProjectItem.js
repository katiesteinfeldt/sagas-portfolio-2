import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectItem.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
import { CardContent, CardActions, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typo from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router } from "react-router-dom";

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 350,
        margin: 22,
    }
}

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

        if (this.props.project.thumbnail === 'public/images/empty-image.png') {
            thumbnailDisplay = <img alt="Empty" src="images/empty-image.png" />
        }
        else if (this.props.project.thumbnail === 'public/images/garden.png') {
            thumbnailDisplay = <img alt="Saga Garden Project" src="images/garden.png" />
        }
        else {
            thumbnailDisplay = null;
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
            <Grid>
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typo>{this.props.project.name}</Typo>
                        <Divider />
                        <Typo>{descriptionDisplay}</Typo>
                        <br />
                        {thumbnailDisplay}
                    </CardContent>
                    <CardActions>
                        <Router>
                            <Button><a href={websiteDisplay}>Website</a></Button>
                        </Router> 
                        <Router>
                            <Button><a href={githubDisplay}>Github</a></Button>
                        </Router>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}





const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(ProjectItem));
