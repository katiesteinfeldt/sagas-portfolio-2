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
import ProjectTagId from '../ProjectTagId/ProjectTagId';
import ProjectGithub from '../ProjectGithub/ProjectGithub';

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
       
    /* -- conditionally render project website if not empty -- */
        if (this.props.project.website) {
            websiteDisplay = <Button variant="outlined"><a target="_blank" rel="noopener noreferrer" href={this.props.project.website}>Website</a></Button>
        }
        else {
            websiteDisplay = null;
        }
        
        return (
        <Grid item xs={5}>
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography className={this.props.classes.typo} variant='h4'>{this.props.project.name}</Typography>
                        <Divider />
                        <ProjectDescription project={this.props.project} />
                        <ProjectTagId project={this.props.project}/>
                        <ProjectThumbnail project={this.props.project}/>
                        <CardActions>
                            {websiteDisplay}
                        <ProjectGithub project={this.props.project}/>   
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
