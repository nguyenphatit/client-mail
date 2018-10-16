import React, { Component } from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Tooltip, Hidden } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import Moment from 'react-moment';

class MailItem extends Component {

    deleteRestoreMail = id => {
        this.props.deleteRestoreMail(id)
    }

    routeChange = () => {
        const { match, history, item } = this.props;
        let path = (match.url === '/') ? `/inbox/${item._id}` : `${match.url}/${item._id}`;
        history.push(path);
    }

    render() {
        const { item } = this.props;
        return (
            <React.Fragment>

                <ListItem button component="nav">
                    <ListItemText primary={`${item.userSender.firstname} ${item.userSender.lastname}`} onClick={this.routeChange} />
                    <Hidden mdDown>
                        <ListItemText onClick={this.routeChange}>
                            <Typography variant="body2" gutterBottom noWrap className="content-message">
                                {`${item.title} - ${item.content}`}
                            </Typography>
                        </ListItemText>
                    </Hidden>
                    <ListItemText
                        onClick={this.routeChange}
                        primary={
                            <Moment format="YYYY/MM/DD">
                                {item.date}
                            </Moment>
                        }
                    />

                    <Hidden xsDown>
                        <ListItemSecondaryAction className={`listAction`}>
                            <Tooltip title="Delete" placement="bottom" style={item.trash ? { display: 'none' } : { display: 'block' }}>
                                <IconButton aria-label="Delete" onClick={() => this.deleteRestoreMail(item._id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Restore" placement="bottom" style={item.trash ? { display: 'block' } : { display: 'none' }}>
                                <IconButton aria-label="Restore" onClick={() => this.deleteRestoreMail(item._id)}>
                                    <RestoreFromTrashIcon />
                                </IconButton>
                            </Tooltip>
                        </ListItemSecondaryAction>
                    </Hidden>
                </ListItem>
            </React.Fragment>
        );
    }
}

export default MailItem;