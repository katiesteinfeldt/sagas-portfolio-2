import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectItem.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent, CardActions, Divider} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

        if (this.props.project.thumbnail === '' || this.props.project.thumbnail === null) {
            thumbnailDisplay = <img alt="Empty" src="images/empty-image.png" />
        }
        else {
            thumbnailDisplay = <img alt={this.props.project.description} src={this.props.project.thumbnail} />
        }
        
        if (this.props.project.website) {
            websiteDisplay = <Button size="small" color="primary">Website</Button>;
        }
        else {
            websiteDisplay = null;
        }
       
        if (this.props.project.github) {
            githubDisplay = <Button size="small" color="primary">Github</Button>;
        }
        else {
            githubDisplay = null;
        }

        return (
        <Grid item xs={3}>
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography variant='h4'>{this.props.project.name}</Typography>
                        <Divider />
                        <Typography>{descriptionDisplay}</Typography>
                        {thumbnailDisplay}
                        <CardActions>
                            {websiteDisplay}
                            {githubDisplay}
                        </CardActions>
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
