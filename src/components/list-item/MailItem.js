import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Tooltip, Hidden } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import Moment from 'react-moment';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    item: {
        position: "relative",
        display: "block",
        textDecoration: "none",
        "&:hover,&:focus,&:visited,&": {
            color: "#FFFFFF"
        }
    },
    itemLink: {
        width: "auto",
        transition: "all 300ms linear",
        margin: "10px 15px 0",
        borderRadius: "3px",
        position: "relative",
        display: "block",
        padding: "10px 15px",
        backgroundColor: "transparent",
    },
    itemIcon: {
        width: "24px",
        height: "30px",
        fontSize: "24px",
        lineHeight: "30px",
        float: "left",
        marginRight: "15px",
        textAlign: "center",
        verticalAlign: "middle",
    },
    itemText: {
        margin: "0",
        lineHeight: "30px",
        fontSize: "14px",
        color: "#FFFFFF"
    },
});

class MailItem extends Component {
    render() {
        const { classes, item, match } = this.props;
        console.log(match.path)
        return (
            <React.Fragment>
                <NavLink 
                    className={classes.item}
                    to={(match.path === '/') ? `/inbox/${item._id}` : `${match.path}/${item._id}`} 
                >
                    <ListItem button component="nav" onClick={this.routeChange}>
                        <ListItemText primary={`${item.userSender.firstname} ${item.userSender.lastname}`} />
                        <Hidden mdDown>
                            <ListItemText>
                                <Typography variant="body2" gutterBottom noWrap className="content-message">
                                    {`${item.title} - ${item.content}`}
                                </Typography>
                            </ListItemText>
                        </Hidden>
                        <ListItemText
                            primary={
                                <Moment format="YYYY/MM/DD">
                                    {item.date}
                                </Moment>
                            }
                        />

                        <Hidden xsDown>
                            <ListItemSecondaryAction>
                                <Tooltip title="Delete" placement="bottom">
                                    <IconButton aria-label="Comments">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </ListItemSecondaryAction>
                        </Hidden>
                    </ListItem>
                </NavLink>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(MailItem);