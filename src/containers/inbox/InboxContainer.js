import React, { Component } from 'react';
import ListMail from '../../components/list/ListMail';
import { connect } from 'react-redux';
import { getAllMailInbox } from './../../actions/mailer';
import MailItem from '../../components/list-item/MailItem';

class InboxContainer extends Component {
    render() {
        const { listMail } = this.props.mail;
        return (
            <ListMail>
                {this.showMail(listMail)}
            </ListMail>
        );
    }

    showMail = (listMail) => {
        let result = null;
        if (listMail.length > 0) {
            result = listMail.map((item, index) => {
                return <MailItem item={item} key={index} match={this.props.match} />
            })
        }
        return result;
    }

    getUserMore = (id) => {
        this.props.getUserById(id)
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InboxContainer);