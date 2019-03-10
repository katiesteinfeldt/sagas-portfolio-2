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
        minWidth: 400,
        maxWidth: 500,
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
        let tagidDisplay;

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
        if (this.props.project.tag_id === 1) {
            tagidDisplay = 'React';
        }
        else if (this.props.project.tag_id === 2) {
            tagidDisplay = 'jQuery';
        }
        else if (this.props.project.tag_id === 3) {
            tagidDisplay = 'Node';
        }
        else if (this.props.project.tag_id === 4) {
            tagidDisplay = 'SQL';
        }
        else if (this.props.project.tag_id === 5) {
            tagidDisplay = 'Redux';
        }
        else if (this.props.project.tag_id === 6) {
            tagidDisplay = 'HTML';
        }
        else {
            tagidDisplay = null;
        }
        if (this.props.project.website) {
            websiteDisplay = <Button><a target="_blank" rel="noopener noreferrer" href={this.props.project.website}>Website</a></Button>
        }
        else {
            websiteDisplay = null;
        }
       
        if (this.props.project.github) {
            githubDisplay = <Button><a target="_blank" rel="noopener noreferrer" href={this.props.project.github}>Github</a></Button>
        }
        else {
            githubDisplay = null;
        }
        
        return (
        <Grid item xs={5}>
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography variant='h4'>{this.props.project.name}</Typography>
                        <Divider />
                        <Typography>{descriptionDisplay}</Typography>
                        <Typography>{tagidDisplay}</Typography>
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
