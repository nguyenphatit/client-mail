import React, { Component } from 'react';
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton, Typography, Tooltip, Hidden } from '@material-ui/core';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';

class InboxItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: [0],
        };
    }

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        return (
            <React.Fragment>
                <ListItem
                    role={undefined}
                    dense
                    button
                    onClick={this.handleToggle('value1')}
                >
                    <Checkbox
                        checked={this.state.checked.indexOf('value1') !== -1}
                        tabIndex={-1}
                        disableRipple
                    />
                    <ListItemText primary={`To ${'value' + 1}`} />
                    <Hidden mdDown>
                        <ListItemText>
                            <Typography variant="body2" gutterBottom noWrap className="content-message">
                                {`
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                `}
                            </Typography>
                        </ListItemText>
                    </Hidden>
                    <ListItemText primary={`09/26/2018`} />
                    <Hidden xsDown>
                        <ListItemSecondaryAction>
                            <Tooltip title="Report Spam" placement="bottom">
                                <IconButton aria-label="Comments">
                                    <ReportIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete" placement="bottom">
                                <IconButton aria-label="Comments">
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </ListItemSecondaryAction>
                    </Hidden>
                </ListItem>
            </React.Fragment>
        );
    }
}

export default InboxItem;