import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Tooltip, Hidden } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';

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

class InboxItem extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <NavLink to='/send' className={classes.item}>
                    <ListItem button component="nav" onClick={this.routeChange}>
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
                </NavLink>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(InboxItem);