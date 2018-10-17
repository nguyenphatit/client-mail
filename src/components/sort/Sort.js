import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Menu, MenuItem } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
const styles = theme => ({
    root: {
        width: '100%',
        padding: 10,
    },
    active: {
        backgroundColor: '#f2f2f2',
    }
})

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            sort: {
                by: 'by Date',
                value: -1
            }
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleSort = (sortBy, value) => {
        this.setState({
            sort: {
                by: sortBy,
                value: value
            }
        })
        this.props.handleSort(sortBy, value);
        this.setState({ anchorEl: null });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    }

    render() {
        const { classes } = this.props;
        const { anchorEl, sort } = this.state;
        return (
            <div className={classes.root}>
                <Button
                    aria-owns={anchorEl ? 'sort' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    variant="outlined"
                >
                    Sort {sort.by}
                    {sort.value === 1 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                </Button>
                <Menu
                    id="sort"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem
                        onClick={() => this.handleSort('by Date', 1)}
                        className={(sort.by === 'by Date' && sort.value === 1) ? classes.active : ''}
                    >
                        Sort by date <KeyboardArrowDownIcon />
                    </MenuItem>
                    <MenuItem
                        onClick={() => this.handleSort('by Date', -1)}
                        className={(sort.by === 'by Date' && sort.value === -1) ? classes.active : ''}
                    >
                        Sort by date <KeyboardArrowUpIcon />
                    </MenuItem>
                    <MenuItem
                        onClick={() => this.handleSort('by Name', 1)}
                        className={(sort.by === 'by Name' && sort.value === 1) ? classes.active : ''}
                    >
                        Sort by name <KeyboardArrowDownIcon />
                    </MenuItem>
                    <MenuItem
                        onClick={() => this.handleSort('by Name', -1)}
                        className={(sort.by === 'by Name' && sort.value === -1) ? classes.active : ''}
                    >
                        Sort by name <KeyboardArrowUpIcon />
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(Sort);