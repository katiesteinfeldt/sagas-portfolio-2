import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TagsList from '../TagsList/TagsList';

//import Typography from '@material-ui/core/Typography';

const styles = {
    header: {
        textAlign: 'center',
        padding: '40px',
        margin: 'auto',
        marginTop: '20px',
        backgroundColor: '#607D8B',
        color: 'white',
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
            tag_id: 1,
        }
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            project: {
                ...this.state.project,
                [propertyName]: event.target.value,
            },
        });
    }

    addNewProject = event => {
        event.preventDefault();
        console.log(this.state.project);
        this.props.dispatch({ type: 'POST_PROJECT', payload: this.state.project })
        this.setState({
            project: {
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
                tag_id: '',
            }
        });
    }

    createAdminList() {
        return this.props.projects.map(project =>
            <tr className="admin-row" key={project.id}>
                <td>{project.name}</td>
                <td><button onClick={this.handleDelete(project.id)}>Delete</button></td>
            </tr>
        )
    }

    handleDelete = id => {
        return () => {
            console.log('delete was clicked', id);
            this.props.dispatch({type: 'DELETE_PROJECT', payload: id})
        }
    }


    render() {

        return (
            <div>
                <form onSubmit={this.addNewProject}>
                    <input value={this.state.project.name} onChange={this.handleChangeFor('name')} placeholder="name" />
                    <input value={this.state.project.date_completed} onChange={this.handleChangeFor('date_completed')} type="date" />
                    <TagsList onChange={this.handleChangeFor('tag_id')}/>
                    <input value={this.state.project.github} onChange={this.handleChangeFor('github')} placeholder="Github" />
                    <input value={this.state.project.website} onChange={this.handleChangeFor('website')} placeholder="Website (optional)" />
                    <input value={this.state.project.description} onChange={this.handleChangeFor('description')} placeholder="Description" />
                    <input type="submit" value="Submit" />
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createAdminList()}
                    </tbody>
                </table>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(AdminForm));