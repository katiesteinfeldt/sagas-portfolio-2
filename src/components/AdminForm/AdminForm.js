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

    render() {
       
    return (
            <div>
                <form onSubmit={this.addProject}>
                    <input onChange={this.handleNameChange} type="text" placeholder="name" />
                    <input onChange={this.handlePriceChange} type="date" />
                    <TagsList />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default withStyles(styles)(connect(mapStateToProps)(AdminForm));