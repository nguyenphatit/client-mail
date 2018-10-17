import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { List } from '@material-ui/core';
import { injectIntl } from "react-intl";
import './List.scss';

class ListMail extends Component {
    
    render() {
        return (
            <Grid container spacing={16} className="ListMail">
                <Grid item xs={12}>
                    <Paper className="ListMail-content">
                        <List>
                            {this.props.children}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default injectIntl(ListMail);