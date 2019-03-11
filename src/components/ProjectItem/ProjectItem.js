import React, { Component } from 'react';
import { connect } from 'react-redux';

/* ------- material ui imports -------- */
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent, CardActions, Divider} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/* ------- project component imports -------- */
import ProjectDescription from '../Project Description/ProjectDescription';
import ProjectThumbnail from '../ProjectThumbnail/ProjectThumbnail';
import ProjectTagId from '../ProjectTagId/ProjectTagId';
import ProjectGithub from '../ProjectGithub/ProjectGithub';
import ProjectWebsite from '../ProjectWebsite/ProjectWebsite';

/* ------- material ui styles -------- */
const styles = {
    card: {
        minWidth: 400,
        maxWidth: 500,
        margin: 22,
        backgroundColor: 'white',
    },
    typo: {
        color: '#607D8B',
    },
};

class ProjectItem extends Component {

    render() {
        
        return (
        <Grid item xs={5}>
                <Card className={this.props.classes.card}>
                    <CardContent>
                        <Typography className={this.props.classes.typo} variant='h4'>{this.props.project.name}</Typography>
                        <ProjectTagId project={this.props.project} />
                        <Divider />
                        <ProjectDescription project={this.props.project} />
                        <ProjectThumbnail project={this.props.project}/>
                        <CardActions>
                        <ProjectWebsite project={this.props.project}/>
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
