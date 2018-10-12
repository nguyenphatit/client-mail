import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { List } from '@material-ui/core';
import InboxItem from '../inbox-item/InboxItem';
import './Inbox.scss';
import { injectIntl, defineMessages } from "react-intl";

const messages = defineMessages({
    title: {
        id: 'inbox.title',
        defaultMessage: 'This is Inbox Component'
    }
})
class Inbox extends Component {

    renderContent = (mail) => {
        let result = null;
        
    }

    render() {
        const { intl: { formatMessage }, mail } = this.props;
        return (
            <Grid container spacing={16} className="Inbox">
                <Grid item xs={12}>
                    {formatMessage(messages.title)}
                    <Paper className="inbox-content">
                        <List>
                            { this.renderContent(mail) }
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default injectIntl(Inbox);