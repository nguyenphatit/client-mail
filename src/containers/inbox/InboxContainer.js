import React, { Component } from 'react';
import ListMail from '../../components/list/ListMail';
import { connect } from 'react-redux';
import { getAllMailInbox, deleteRestore } from './../../actions/mailer';
import MailItem from '../../components/list-item/MailItem';
import Typography from '@material-ui/core/Typography';

class InboxContainer extends Component {
    render() {
        const { listMail } = this.props.mail;
        return (
            <ListMail listMail={listMail}>
                {this.showMail(listMail)}
            </ListMail>
        );
    }

    deleteRestoreMail = id => {
        this.props.deleteRestore(id)
    }

    showMail = (listMail) => {
        let result = null;
        if (listMail.length > 0) {
            result = listMail.map((item, index) => {
                return <MailItem item={item} key={index} match={this.props.match} history={this.props.history} deleteRestoreMail={this.deleteRestoreMail} />
            })
        } else {
            result = (<Typography variant="h4" gutterBottom align="center">
                        No mail inbox
                    </Typography>)
        }
        return result;
    }

    componentDidMount() {
        this.props.getAllMailInbox()
    }
}

const mapStateToProps = (state) => ({
    mail: state.mail
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllMailInbox: () => {
            dispatch(getAllMailInbox())
        },
        deleteRestore: id => {
            dispatch(deleteRestore(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InboxContainer);