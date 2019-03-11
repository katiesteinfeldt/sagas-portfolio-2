import React, { Component } from 'react';
import { connect } from 'react-redux';

/* ------- material ui imports ------- */
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';

/* ------- material ui styles ------- */
const styles = {
    header: {
        textAlign: 'center',
        padding: '40px',
        margin: 'auto',
        marginTop: '20px',
        backgroundColor: '#607D8B',
        color: 'white',
    },
    root: {
        width: '70%',
        overflowX: 'auto',
        marginLeft: '20px',
    },
    table: {
        minWidth: 200,
    },
}

class AdminForm extends Component {

    state = {
        project: {
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '2019-03-01',
            tag_id: '',
        }
    }

    // sets local state to input values
    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            project: {
                ...this.state.project,
                [propertyName]: event.target.value,
            },
        });
    }

    // adds new project to database by dispatching to saga in redux store and clears inputs on click
    addNewProject = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_PROJECT', payload: this.state.project })
        this.setState({
            project: {
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '2019-03-01',
                tag_id: '',
            }
        });
    }

    //maps through array of projects in projects reducer display name on dom
    createAdminList() {
        return this.props.projects.map(project =>
            <TableRow className="admin-row" key={project.id}>
                <TableCell>{project.name}</TableCell>
                <TableCell><button onClick={this.handleDelete(project.id)}>Delete</button></TableCell>
            </TableRow>
        )
    }

    //deletes project from database by dispatching to saga in redux store
    handleDelete = id => {
        return () => {
            this.props.dispatch({type: 'DELETE_PROJECT', payload: id})
        }
    }

    render() {
        return (
            <Paper className={this.props.classes.root}>
                <form onSubmit={this.addNewProject}>
                    <input value={this.state.project.name} onChange={this.handleChangeFor('name')} placeholder="name" />
                    <input value={this.state.project.date_completed} onChange={this.handleChangeFor('date_completed')} type="date" />
                    <select value={this.state.project.tag_id} onChange={this.handleChangeFor('tag_id')}>
                        <option>- Choose Language -</option>
                        {this.props.tags.map(tag =>
                            <option  key={tag.id}>{tag.name}</option>
                            )}
                    </select>
                    <input value={this.state.project.github} onChange={this.handleChangeFor('github')} placeholder="Github" />
                    <input value={this.state.project.website} onChange={this.handleChangeFor('website')} placeholder="Website (optional)" />
                    <input value={this.state.project.description} onChange={this.handleChangeFor('description')} placeholder="Description" />
                    <input type="submit" value="Submit" />
                </form>
                <Table className={this.props.classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.createAdminList()}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(AdminForm));