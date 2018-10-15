import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { List } from '@material-ui/core';
import './Inbox.scss';
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
    title: {
        id: 'inbox.title',
        defaultMessage: 'This is Inbox Component'
    }
})
class Inbox extends Component {

    render() {
        const { intl: { formatMessage } } = this.props;
        return (
            <Grid container spacing={16} className="Inbox">
                <Grid item xs={12}>
                    {formatMessage(messages.title)}
                    <Paper className="inbox-content">
                        <List>
                            {this.props.children}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default injectIntl(Inbox);