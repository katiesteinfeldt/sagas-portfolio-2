import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import AdminForm from '../AdminForm/AdminForm'

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

class Admin extends Component {

    render() {
        return (
            <div>
                <header>
                    <Typography className={this.props.classes.header} variant="h2">Admin</Typography>
                </header>
                <br />
                <Link to="/">Back To Projects</Link>
                <br />
                <Typography variant='h3'>Add New Project</Typography>
                <br />
                <AdminForm />
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(Admin));