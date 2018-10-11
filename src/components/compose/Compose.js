import React, { Component } from 'react';
import { injectIntl, defineMessages } from "react-intl";
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EditorDraft from '../editor/EditorDraft';

const messages = defineMessages({
    title: {
        id: 'compose.title',
        defaultMessage: 'Title'
    },
    to: {
        id: 'compose.to',
        defaultMessage: 'To'
    },
    send: {
        id: 'compose.send',
        defaultMessage: 'Send'
    },
})

const styles = theme => ({
    paper: {
        padding: 10,
    },
    textField: {
        width: '100%',
    },
    formFooter: {
        textAlign: 'right',
    }
})

class Compose extends Component {

    constructor(props) {
        super(props);
        this.state = {
            receiver: '',
            title: '',
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }

    onSubmit = e => {
        e.preventDefault();
        let mail = {
            receiver: this.state.receiver,
            title: this.state.title,
        }
        console.log(mail);
    }

    render() {
        const { intl: { formatMessage }, classes } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                id="receiver"
                                label={formatMessage(messages.to)}
                                className={classes.textField}
                                value={this.state.receiver}
                                onChange={this.handleChange('receiver')}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <TextField
                                id="title"
                                label={formatMessage(messages.title)}
                                className={classes.textField}
                                value={this.state.title}
                                onChange={this.handleChange('title')}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <EditorDraft />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} className={classes.formFooter}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                {formatMessage(messages.send)}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

Compose = withStyles(styles)(Compose);

export default injectIntl(Compose);