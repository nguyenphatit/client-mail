import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '100%',
        padding: 10,
    },
};

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    onClick = event => {
        event.preventDefault();
        this.props.onClick(this.state.search);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <TextField
                    id="search"
                    label="Search"
                    fullWidth
                    value={this.state.search}
                    onChange={this.handleChange('search')}
                    margin="normal"
                />
                <div align="right">
                    <Button type="button" onClick={this.onClick} variant="contained" color="primary">
                        Search
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Search);