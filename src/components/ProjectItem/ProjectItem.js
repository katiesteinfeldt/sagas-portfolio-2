import React, { Component } from 'react';
import { connect } from 'react-redux';

/* ------- material ui imports -------- */
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent, CardActions, Divider} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProjectDescription from '../Project Description/ProjectDescription';
import ProjectThumbnail from '../ProjectThumbnail/ProjectThumbnail';

/* ------- material ui styles -------- */
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
    },
    typo: {
        color: '#607D8B',
    },
};

class ProjectItem extends Component {

    render() {
        let websiteDisplay;
        let githubDisplay;
        let tagidDisplay;

    /* -- switch language id to name and conditionally render if not empty -- */
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
    /* -- conditionally render project website if not empty -- */
        if (this.props.project.website) {
            websiteDisplay = <Button variant="outlined"><a target="_blank" rel="noopener noreferrer" href={this.props.project.website}>Website</a></Button>
        }
        else {
            websiteDisplay = null;
        }
    /* -- conditionally render project github link if not empty -- */   
        if (this.props.project.github) {
            githubDisplay = <Button variant="outlined"><a target="_blank" rel="noopener noreferrer" href={this.props.project.github}>Github</a></Button>
        }
        else {
            githubDisplay = null;
        }
        
        return (
        <Grid item xs={5}>
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography className={this.props.classes.typo} variant='h4'>{this.props.project.name}</Typography>
                        <Divider />
                        <ProjectDescription project={this.props.project} />
                        <Typography className={this.props.classes.typo}>{tagidDisplay}</Typography>
                        <ProjectThumbnail project={this.props.project}/>
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
