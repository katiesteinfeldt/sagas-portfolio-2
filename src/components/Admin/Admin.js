import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import AdminForm from '../AdminForm/AdminForm';
import Button from '@material-ui/core/Button';

//material ui styles
const styles = {
    header: {
        textAlign: 'center',
        padding: '40px',
        margin: 'auto',
        marginTop: '20px',
        backgroundColor: '#607D8B',
        color: 'white',
    },
    title: {
        padding: '20px',
        marginTop: '20px',
    },
    button: {
        padding: '10px',
        marginLeft: '20px',
        marginTop: '30px',
        backgroundColor: '#B0BEC5',
        color: 'white',
    }
}

class Admin extends Component {

    render() {
        return (
            <div>
                <Typography className={this.props.classes.header} variant="h2">Admin</Typography>
                <Button className={this.props.classes.button} component={Link} to="/">Back To Projects</Button>
                <Typography className={this.props.classes.title} variant='h4'>Add New Project</Typography>
                <AdminForm />
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(Admin));