import React, { Component } from 'react';
import Inbox from '../../components/inbox/Inbox';
import { connect } from 'react-redux';
import { getInboxMail } from './../../actions/mailer';

class InboxContainer extends Component {
    render() {
        const { mail } = this.props;
        return (
            <Inbox mail={mail} />
        );
    }

    componentDidMount() {
        this.props.getInboxMail(this.props.auth.user.id);
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    mail: state.mail
    // errors: state.errors
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        getInboxMail: id => {
            dispatch(getInboxMail(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InboxContainer);