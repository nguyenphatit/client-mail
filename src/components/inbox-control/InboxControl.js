import React, { Component } from 'react';
import { ListItem, Checkbox, ListItemSecondaryAction, IconButton, Tooltip } from '@material-ui/core';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';

class InboxControl extends Component {

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
            <ListItem
                role={undefined}
                button
                onClick={this.handleToggle('value1')}
            >
                <Checkbox
                    checked={this.state.checked.indexOf('value1') !== -1}
                    tabIndex={-1}
                    disableRipple
                />
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
            </ListItem>
        );
    }
}

export default InboxControl;