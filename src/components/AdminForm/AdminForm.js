import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
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
        console.log(this.props.tags);

        return (
            <div>
                <form onSubmit={this.addProject}>
                    <input onChange={this.handleNameChange} type="text" placeholder="name" />
                    <input onChange={this.handlePriceChange} type="date" />
                   
                    <select placeholder="Select A Tag"></select>
                        <option>Hello</option>
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