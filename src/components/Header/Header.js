import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

class Header extends Component {

    render() {
        return (
            <div>
                <Typography className={this.props.classes.header} variant="h2">Katie Mangan</Typography>
            </div>
        )
    }
}

export default withStyles(styles)(Header);
